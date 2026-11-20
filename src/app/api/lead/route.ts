import { NextResponse } from "next/server";
import { sendLeadCapi } from "@/lib/meta-capi";

/**
 * Captura de leads. Tipos: contacto | auditoria | reclamo. Dos capas contra
 * abuso: honeypot `website` (bots) y límite de 5 envíos por IP cada 10 min.
 *
 * Dónde se guarda (decisión 5 del dueño, 20-nov-2026; tarea 2.01):
 *   - LEADS_SHEET_URL → Hoja de Google vía Apps Script (scripts/apps-script-leads.gs).
 *     Es el destino normal mientras Supabase siga pausado.
 *   - LEADS_DESTINO=supabase → tabla `leads` de Supabase (la del dashboard admin).
 *   - Ninguno → 503 «sin-almacen»: el formulario sigue como antes (WhatsApp y
 *     Lead contado desde el navegador), sin romper nada mientras se configura.
 * La URL de la hoja y la service key solo viven en el servidor.
 */

const TIPOS = new Set(["contacto", "auditoria", "reclamo"]);
const s = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/**
 * Límite de envíos por IP — ventana deslizante en memoria.
 *
 * El honeypot para bots tontos, pero no impedía que alguien enviara el
 * formulario en bucle y llenara la tabla `leads` (y disparara eventos Lead
 * falsos en Meta). Una persona real envía una vez, dos si se equivoca.
 *
 * Es en memoria a propósito: no hay Redis en el proyecto y añadirlo por esto
 * no compensa. Limitación honesta: en Vercel cada instancia tiene su propio
 * mapa, así que un atacante repartido entre instancias pasaría más de
 * MAX_ENVIOS. Aun así corta el caso real (un script desde una IP) y cuesta
 * cero. Si algún día hace falta de verdad, mover a Vercel KV.
 */
const VENTANA_MS = 10 * 60 * 1000;
const MAX_ENVIOS = 5;
const MAX_IPS = 5000; // techo de memoria; al llegar se limpia lo caducado
const envios = new Map<string, number[]>();

const ipDe = (req: Request) =>
  (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() ||
  req.headers.get("x-real-ip") ||
  "";

function pasaLimite(ip: string): boolean {
  if (!ip) return true; // sin IP no penalizamos a nadie
  const ahora = Date.now();

  if (envios.size > MAX_IPS) {
    for (const [k, v] of envios) if (!v.some((t) => ahora - t < VENTANA_MS)) envios.delete(k);
  }

  const recientes = (envios.get(ip) || []).filter((t) => ahora - t < VENTANA_MS);
  if (recientes.length >= MAX_ENVIOS) {
    envios.set(ip, recientes);
    return false;
  }
  recientes.push(ahora);
  envios.set(ip, recientes);
  return true;
}

export async function POST(req: Request) {
  const ip = ipDe(req);
  if (!pasaLimite(ip)) {
    return NextResponse.json(
      { ok: false, error: "demasiados envios" },
      { status: 429, headers: { "Retry-After": "600" } },
    );
  }

  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "json" }, { status: 400 });
  }

  // Honeypot: los bots lo rellenan; respondemos ok sin guardar.
  if (s(b.website, 10)) return NextResponse.json({ ok: true });

  const nombre = s(b.nombre, 200);
  const email = s(b.email, 200);
  const telefono = s(b.telefono, 50);
  if (!nombre || (!email && !telefono)) {
    return NextResponse.json({ ok: false, error: "faltan datos" }, { status: 400 });
  }

  // extra reúne los datos del formulario + la atribución de campaña (de qué
  // anuncio vino el lead). Se acota el tamaño para no dejar un vector de
  // llenado por el campo abierto.
  const baseExtra = b.extra && typeof b.extra === "object" ? (b.extra as Record<string, unknown>) : null;
  const attribution = b.attribution && typeof b.attribution === "object" ? (b.attribution as Record<string, unknown>) : null;
  const atribucionOk = attribution && JSON.stringify(attribution).length <= 2000 ? attribution : null;
  let extra: Record<string, unknown> | null =
    baseExtra || atribucionOk ? { ...(baseExtra || {}), ...(atribucionOk ? { attribution: atribucionOk } : {}) } : null;
  if (extra && JSON.stringify(extra).length > 4000) extra = baseExtra; // descarta atribución anómala, conserva el formulario

  const row = {
    tipo: TIPOS.has(s(b.tipo, 20)) ? s(b.tipo, 20) : "contacto",
    nombre,
    negocio: s(b.negocio, 200) || null,
    email: email || null,
    telefono: telefono || null,
    mensaje: s(b.mensaje, 3000) || null,
    pagina: s(b.pagina, 300) || null,
    extra,
  };

  const hoja = process.env.LEADS_SHEET_URL;
  const supabase = process.env.LEADS_DESTINO === "supabase";
  if (!hoja && !supabase) {
    return NextResponse.json({ ok: false, error: "sin-almacen" }, { status: 503 });
  }

  // Cada fallo devuelve un código que dice DÓNDE falló, sin datos sensibles.
  let id: string | null = null;
  if (hoja) {
    let r: Response;
    try {
      // Apps Script responde con una redirección a googleusercontent.com:
      // fetch la sigue y ahí está el JSON.
      r = await fetch(hoja, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...row, extra: baseExtra, attribution: atribucionOk }),
        redirect: "follow",
        cache: "no-store",
        signal: AbortSignal.timeout(10000),
      });
    } catch (e) {
      const err = e as { name?: string; cause?: { code?: string } };
      console.error("[lead] La hoja no responde:", e);
      return NextResponse.json({ ok: false, error: "hoja-red", causa: err.cause?.code || err.name || "desconocida" }, { status: 502 });
    }
    let data: { ok?: boolean; fila?: number; error?: string } = {};
    try {
      data = await r.json();
    } catch {
      /* respuesta que no es JSON: se trata como fallo abajo */
    }
    if (!r.ok || !data.ok) {
      console.error("[lead] La hoja rechazó el registro:", r.status, data.error || "");
      return NextResponse.json({ ok: false, error: "hoja", status: r.status }, { status: 502 });
    }
    id = data.fila ? `F${data.fila}` : null;
  } else {
    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!url || !key) return NextResponse.json({ ok: false, error: "config" }, { status: 500 });
    let r: Response;
    try {
      r = await fetch(`${url}/rest/v1/leads`, {
        method: "POST",
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
          Prefer: "return=representation",
        },
        body: JSON.stringify(row),
        cache: "no-store",
        signal: AbortSignal.timeout(8000),
      });
    } catch (e) {
      const err = e as { name?: string; cause?: { code?: string } };
      console.error("[lead] Supabase no responde:", e);
      return NextResponse.json(
        { ok: false, error: "db-red", causa: err.cause?.code || err.name || "desconocida" },
        { status: 502 },
      );
    }
    if (!r.ok) {
      console.error("[lead] Supabase rechazó el registro:", r.status, await r.text().catch(() => ""));
      return NextResponse.json({ ok: false, error: "db", status: r.status }, { status: 502 });
    }
    try {
      id = ((await r.json()) as { id?: string }[])[0]?.id ?? null;
    } catch {
      /* el registro ya está guardado; solo falta el id */
    }
  }

  // Meta CAPI: evento Lead server-side, deduplicado con el Pixel vía event_id.
  // Solo leads reales (no reclamos). Si falta META_CAPI_TOKEN, sendLeadCapi es no-op.
  // Nunca debe convertir un lead guardado en un error para quien lo envió.
  if (row.tipo !== "reclamo" && s(b.event_id, 100)) {
    await sendLeadCapi({
      eventId: s(b.event_id, 100),
      email: row.email,
      phone: row.telefono,
      nombre: row.nombre,
      externalId: s(b.external_id, 64),
      fbp: s(b.fbp, 200),
      fbc: s(b.fbc, 400),
      ip,
      ua: req.headers.get("user-agent") || "",
      sourceUrl: s(b.event_source_url, 500),
    }).catch((e) => console.error("[lead] CAPI:", e));
  }

  return NextResponse.json({ ok: true, id });
}
