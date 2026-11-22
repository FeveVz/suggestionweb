import { NextResponse } from "next/server";
import { sendCapiEvent } from "@/lib/meta-capi";
import { enviarGa4 } from "@/lib/ga4-mp";

/**
 * Copia server-side de los eventos de contacto del Píxel (API de Conversiones).
 *
 * El navegador manda aquí el mismo event_id que acaba de usar el Píxel; Meta
 * une los dos en uno solo. Sirve para lo que el Píxel pierde: bloqueadores,
 * Safari, quien cierra la pestaña antes de que cargue la librería diferida.
 *
 *   - Contact: clic a wa.me / tel: / mailto: (Analytics.tsx).
 *   - Lead: formulario enviado mientras GUARDAR_EN_BASE = false (AuditForm).
 *     Cuando vuelva la base, el Lead sale de /api/lead y este no se usa.
 *
 * Un Contact puede traer además `ga`: entonces también se manda a GA4 por el
 * Measurement Protocol (lib/ga4-mp.ts). Solo pasa cuando la librería de GA4 no
 * corrió en el navegador, para no contarlo dos veces (GA_MP en lib/tracking.ts).
 *
 * Abierta al público, así que se acota: solo esos dos eventos, solo URLs del
 * propio sitio, tamaños máximos y 30 eventos por IP cada 10 minutos.
 */

const EVENTOS = new Set(["Contact", "Lead"]);
const s = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

const VENTANA_MS = 10 * 60 * 1000;
const MAX_EVENTOS = 30;
const MAX_IPS = 5000;
const vistos = new Map<string, number[]>();

const ipDe = (req: Request) =>
  (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || req.headers.get("x-real-ip") || "";

function pasaLimite(ip: string): boolean {
  if (!ip) return true;
  const ahora = Date.now();
  if (vistos.size > MAX_IPS) {
    for (const [k, v] of vistos) if (!v.some((t) => ahora - t < VENTANA_MS)) vistos.delete(k);
  }
  const recientes = (vistos.get(ip) || []).filter((t) => ahora - t < VENTANA_MS);
  if (recientes.length >= MAX_EVENTOS) {
    vistos.set(ip, recientes);
    return false;
  }
  recientes.push(ahora);
  vistos.set(ip, recientes);
  return true;
}

/**
 * Solo URLs del propio sitio. En producción, solo el dominio real: una vista
 * previa de Vercel no debe mandar eventos a Meta (auditoría MED-15, tarea 3.12).
 * Fuera de producción se aceptan las vistas previas y localhost para probar.
 */
function urlPropia(u: string): boolean {
  try {
    const h = new URL(u).hostname;
    if (h === "suggestion.pe" || h === "www.suggestion.pe") return true;
    if (process.env.VERCEL_ENV === "production") return false;
    return h.endsWith(".vercel.app") || h === "localhost";
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  const ip = ipDe(req);
  if (!pasaLimite(ip)) return NextResponse.json({ ok: false }, { status: 429 });

  let b: Record<string, unknown>;
  try {
    const txt = await req.text();
    if (txt.length > 4000) return NextResponse.json({ ok: false }, { status: 413 });
    b = JSON.parse(txt);
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const evento = s(b.event_name, 20);
  const eventId = s(b.event_id, 100);
  const url = s(b.event_source_url, 500);
  if (!EVENTOS.has(evento) || !/^[\w-]{8,100}$/.test(eventId) || !urlPropia(url)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Código de "Probar eventos" de Events Manager: los eventos de prueba no
  // cuentan en las estadísticas, así que aceptarlo del navegador no abre nada.
  const test = s(b.test_event_code, 20);
  const testCode = /^TEST\d{3,10}$/.test(test) ? test : undefined;

  const metodo = s(b.method, 20);
  const origen = s(b.origen, 40);
  const customData: Record<string, string> = {};
  if (metodo) customData.content_category = metodo;
  if (origen) customData.content_name = origen;

  // Copia para GA4: solo un contacto cuya librería de GA4 no corrió en el
  // navegador (el navegador decide y manda `ga`; ver GA_MP en lib/tracking.ts).
  const ga = evento === "Contact" && b.ga && typeof b.ga === "object" ? (b.ga as Record<string, unknown>) : null;
  const copiaGa = ga
    ? enviarGa4("contact", {
        clientId: s(ga.client_id, 40),
        sessionId: s(ga.session_id, 30),
        params: Object.fromEntries(
          Object.entries({
            method: metodo,
            cta: s(ga.cta, 80),
            page_location: url,
            page_title: s(ga.page_title, 200),
          }).filter(([, v]) => v),
        ),
      })
    : Promise.resolve(false);

  const capi = sendCapiEvent(evento as "Contact" | "Lead", {
    eventId,
    // Nombre y teléfono solo los trae el Lead del formulario; se hashean en sendCapiEvent.
    nombre: evento === "Lead" ? s(b.nombre, 200) || null : null,
    phone: evento === "Lead" ? s(b.telefono, 50) || null : null,
    externalId: s(b.external_id, 64),
    fbp: s(b.fbp, 200),
    fbc: s(b.fbc, 400),
    ip,
    ua: req.headers.get("user-agent") || "",
    sourceUrl: url,
    testCode,
    customData,
  });
  const [recibidos, enviadoGa] = await Promise.all([capi, copiaGa]);

  return NextResponse.json(testCode ? { ok: true, recibidos, ga: enviadoGa } : { ok: true });
}
