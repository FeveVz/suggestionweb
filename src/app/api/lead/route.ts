import { NextResponse } from "next/server";
import { sendLeadCapi } from "@/lib/meta-capi";

/**
 * Captura de leads → tabla `leads` en Supabase (la misma BD del dashboard
 * admin). Tipos: contacto | auditoria | reclamo. Honeypot `website` contra
 * spam. Nunca expone la service key (solo server-side).
 */

const TIPOS = new Set(["contacto", "auditoria", "reclamo"]);
const s = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
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

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return NextResponse.json({ ok: false, error: "config" }, { status: 500 });

  // extra (jsonb) reúne los datos del formulario + la atribución de campaña
  // (de qué anuncio vino el lead). Se acota el tamaño para no dejar un vector de
  // llenado de BD por el campo abierto.
  const baseExtra = b.extra && typeof b.extra === "object" ? (b.extra as Record<string, unknown>) : null;
  const attribution = b.attribution && typeof b.attribution === "object" ? (b.attribution as Record<string, unknown>) : null;
  let extra: Record<string, unknown> | null =
    baseExtra || attribution ? { ...(baseExtra || {}), ...(attribution ? { attribution } : {}) } : null;
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

  const r = await fetch(`${url}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(row),
    cache: "no-store",
  });

  if (!r.ok) return NextResponse.json({ ok: false, error: "db" }, { status: 502 });
  const data = (await r.json()) as { id?: string }[];

  // Meta CAPI: evento Lead server-side, deduplicado con el Pixel vía event_id.
  // Solo leads reales (no reclamos). Si falta META_CAPI_TOKEN, sendLeadCapi es no-op.
  if (row.tipo !== "reclamo" && s(b.event_id, 100)) {
    const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || req.headers.get("x-real-ip") || "";
    await sendLeadCapi({
      eventId: s(b.event_id, 100),
      email: row.email,
      phone: row.telefono,
      nombre: row.nombre,
      fbp: s(b.fbp, 200),
      fbc: s(b.fbc, 400),
      ip,
      ua: req.headers.get("user-agent") || "",
      sourceUrl: s(b.event_source_url, 500),
    });
  }

  return NextResponse.json({ ok: true, id: data[0]?.id ?? null });
}
