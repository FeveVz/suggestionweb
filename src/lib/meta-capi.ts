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

/**
 * Envía un evento. Devuelve cuántos eventos aceptó Meta (0 si no se envió o
 * falló), para poder verificar con un código de prueba sin mirar los registros.
 */
export async function sendCapiEvent(eventName: "Lead" | "Contact", i: CapiInput): Promise<number> {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const token = process.env.META_CAPI_TOKEN;
  if (!pixelId || !token || !i.eventId) return 0; // sin token → no-op (seguro)

  // user_data: PII hasheada + señales de match (fbp/fbc/ip/ua) sin hashear.
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
