import { createHash } from "crypto";
import { esExternalId, nombreMeta, telefonoMeta } from "@/lib/meta-match";

/**
 * Meta Conversions API (server-side). Envía eventos directamente a Meta,
 * DEDUPLICADOS con el Pixel del navegador vía event_id compartido. La PII se
 * hashea con SHA-256 (requisito de Meta). Falla en silencio: la medición nunca
 * rompe nada de cara a quien visita.
 *
 * Desde el 16-nov-2026 reemplaza a la pasarela de Stape (capig.stape.pm), que
 * fue una prueba gratis de 7 días (4 al 11-jul-2026) y desde entonces solo
 * devolvía 422. La usan /api/lead (lead guardado en la base) y /api/evento
 * (clic a WhatsApp/teléfono/correo y formularios que van directo a WhatsApp).
 *
 * Requiere en el entorno (Vercel):
 *   - NEXT_PUBLIC_META_PIXEL_ID  mismo dataset del Pixel (2487100898472593)
 *   - META_CAPI_TOKEN            secreto; Events Manager → dataset "Suggestion Web"
 *                                → Configuración → API de conversiones → Generar token
 *   - META_CAPI_TEST_CODE        opcional; para "Probar eventos" (quitar en prod)
 */

const GRAPH_VERSION = "v21.0";

const sha256 = (v: string) => createHash("sha256").update(v).digest("hex");

export type CapiInput = {
  eventId: string;
  email?: string | null;
  phone?: string | null;
  nombre?: string | null;
  externalId?: string;
  fbp?: string;
  fbc?: string;
  ip?: string;
  ua?: string;
  sourceUrl?: string;
  /** Solo para verificar en "Probar eventos"; no cuenta en las estadísticas. */
  testCode?: string;
  customData?: Record<string, string>;
};

/** user_data: PII hasheada + señales de match (fbp/fbc/ip/ua) sin hashear. */
function datosUsuario(i: Omit<CapiInput, "eventId">): Record<string, unknown> {
  const user: Record<string, unknown> = {};
  if (i.email) user.em = [sha256(i.email.trim().toLowerCase())];
  if (i.phone) {
    const ph = telefonoMeta(i.phone);
    if (ph) user.ph = [sha256(ph)];
    if (ph.startsWith("51")) user.country = [sha256("pe")];
  }
  if (i.nombre) {
    const { fn, ln } = nombreMeta(i.nombre);
    if (fn) user.fn = [sha256(fn)];
    if (ln) user.ln = [sha256(ln)];
  }
  // Ya tiene forma de hash (ver meta-match.ts): va tal cual, para que sea el
  // mismo valor que el Píxel manda en cada visita de ese navegador.
  if (esExternalId(i.externalId)) user.external_id = [i.externalId];
  if (i.fbp) user.fbp = i.fbp;
  if (i.fbc) user.fbc = i.fbc;
  if (i.ip) user.client_ip_address = i.ip;
  if (i.ua) user.client_user_agent = i.ua;
  return user;
}

/**
 * Envía un evento. Devuelve cuántos eventos aceptó Meta (0 si no se envió o
 * falló), para poder verificar con un código de prueba sin mirar los registros.
 */
export async function sendCapiEvent(eventName: "Lead" | "Contact", i: CapiInput): Promise<number> {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const token = process.env.META_CAPI_TOKEN;
  if (!pixelId || !token || !i.eventId) return 0; // sin token → no-op (seguro)
  const user = datosUsuario(i);

  const event: Record<string, unknown> = {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: i.eventId, // ← mismo id que el Pixel: Meta los une en uno solo
    action_source: "website",
    user_data: user,
  };
  if (i.sourceUrl) event.event_source_url = i.sourceUrl;
  if (i.customData && Object.keys(i.customData).length) event.custom_data = i.customData;

  const payload: Record<string, unknown> = { data: [event] };
  const testCode = i.testCode || process.env.META_CAPI_TEST_CODE;
  if (testCode) payload.test_event_code = testCode;

  try {
    const r = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${encodeURIComponent(token)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
        signal: AbortSignal.timeout(2500),
      },
    );
    if (!r.ok) {
      console.error("[capi] Meta rechazó el evento:", eventName, r.status, (await r.text().catch(() => "")).slice(0, 300));
      return 0;
    }
    const j = (await r.json().catch(() => ({}))) as { events_received?: number };
    return j.events_received ?? 0;
  } catch {
    return 0; /* nunca romper la respuesta */
  }
}

/** Compatibilidad con /api/lead. */
export async function sendLeadCapi(i: CapiInput): Promise<void> {
  await sendCapiEvent("Lead", i);
}

/**
 * Venta cerrada fuera de la web (24-nov-2026, punto 3 del owner: «medir hasta
 * la venta, también para nosotros»). La anota el equipo en la pestaña «Ventas»
 * de la hoja de contactos y el Apps Script la manda a /api/venta, que llama
 * aquí. Meta la cruza por teléfono/correo (en hash) con quien vio o tocó un
 * anuncio: así los informes muestran qué campaña trajo clientes y Meta puede
 * aprender de quienes compran, no solo de quienes escriben.
 */
export type VentaCapi = {
  /** event_id único y estable: si la misma venta llega dos veces, Meta la cuenta una. */
  id: string;
  /** Fecha de cierre, AAAA-MM-DD (hora de Lima). Meta solo acepta los últimos 7 días. */
  fecha: string;
  nombre?: string;
  telefono?: string;
  correo?: string;
  /** Monto en soles. */
  monto: number;
  servicio?: string;
  /** Si el cliente llegó por un formulario con clic de anuncio (columna fbclid de la hoja). */
  fbclid?: string;
  /** Cuándo llegó ese contacto (ISO): es la fecha del clic que Meta espera dentro de fbc. */
  clic?: string;
};

/** Milisegundos del clic; si no hay fecha válida y anterior a la venta, la de la venta. */
function momentoClic(clic: string | undefined, venta: number): number {
  const ms = clic ? Date.parse(clic) : NaN;
  return Number.isFinite(ms) && ms <= venta * 1000 ? ms : venta * 1000;
}

export async function enviarVentasCapi(ventas: VentaCapi[], testCode?: string): Promise<{ recibidos: number; error?: string }> {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const token = process.env.META_CAPI_TOKEN;
  if (!pixelId || !token) return { recibidos: 0, error: "sin-token" };
  const ahora = Math.floor(Date.now() / 1000);
  const data = ventas.map((v) => {
    // Mediodía de Lima del día de cierre; si aún no llega, ahora.
    const t = Math.min(ahora, Math.floor(new Date(`${v.fecha}T12:00:00-05:00`).getTime() / 1000));
    return {
      event_name: "Purchase",
      event_time: t,
      event_id: v.id,
      // La venta se cierra conversando por WhatsApp, no en la web.
      action_source: "chat",
      user_data: datosUsuario({
        email: v.correo,
        phone: v.telefono,
        nombre: v.nombre,
        fbc: v.fbclid ? `fb.1.${momentoClic(v.clic, t)}.${v.fbclid}` : undefined,
      }),
      custom_data: { currency: "PEN", value: v.monto, order_id: v.id, ...(v.servicio ? { content_name: v.servicio } : {}) },
    };
  });
  const payload: Record<string, unknown> = { data };
  if (testCode) payload.test_event_code = testCode;
  try {
    const r = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${encodeURIComponent(token)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
        signal: AbortSignal.timeout(8000),
      },
    );
    const texto = await r.text().catch(() => "");
    if (!r.ok) {
      console.error("[capi] Meta rechazó las ventas:", r.status, texto.slice(0, 300));
      const msg = (() => {
        try {
          return (JSON.parse(texto) as { error?: { message?: string } }).error?.message;
        } catch {
          return undefined;
        }
      })();
      return { recibidos: 0, error: msg || `meta-${r.status}` };
    }
    const j = (() => {
      try {
        return JSON.parse(texto) as { events_received?: number };
      } catch {
        return {};
      }
    })();
    return { recibidos: j.events_received ?? 0 };
  } catch {
    return { recibidos: 0, error: "sin-respuesta-de-meta" };
  }
}
