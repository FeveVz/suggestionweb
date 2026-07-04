import { createHash } from "crypto";

/**
 * Meta Conversions API (server-side). Envía el evento Lead directamente a Meta,
 * DEDUPLICADO con el Pixel del navegador vía event_id compartido. La PII se
 * hashea con SHA-256 (requisito de Meta). Falla en silencio: la medición nunca
 * rompe el guardado del lead.
 *
 * Requiere en el entorno (Vercel):
 *   - NEXT_PUBLIC_META_PIXEL_ID  mismo dataset del Pixel (2487100898472593)
 *   - META_CAPI_TOKEN            secreto; Events Manager → dataset "Suggestion Web"
 *                                → Configuración → API de conversiones → Generar token
 *   - META_CAPI_TEST_CODE        opcional; para "Probar eventos" (quitar en prod)
 */

const GRAPH_VERSION = "v21.0";

const sha256 = (v: string) => createHash("sha256").update(v).digest("hex");

type LeadInput = {
  eventId: string;
  email?: string | null;
  phone?: string | null;
  nombre?: string | null;
  fbp?: string;
  fbc?: string;
  ip?: string;
  ua?: string;
  sourceUrl?: string;
};

export async function sendLeadCapi(i: LeadInput): Promise<void> {
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const token = process.env.META_CAPI_TOKEN;
  if (!pixelId || !token || !i.eventId) return; // sin token → no-op (seguro)

  // user_data: PII hasheada + señales de match (fbp/fbc/ip/ua) sin hashear.
  const user: Record<string, unknown> = {};
  if (i.email) user.em = [sha256(i.email.trim().toLowerCase())];
  if (i.phone) {
    const digits = i.phone.replace(/[^0-9]/g, "");
    if (digits) user.ph = [sha256(digits)];
  }
  if (i.nombre) user.fn = [sha256(i.nombre.trim().toLowerCase())];
  if (i.fbp) user.fbp = i.fbp;
  if (i.fbc) user.fbc = i.fbc;
  if (i.ip) user.client_ip_address = i.ip;
  if (i.ua) user.client_user_agent = i.ua;

  const event: Record<string, unknown> = {
    event_name: "Lead",
    event_time: Math.floor(Date.now() / 1000),
    event_id: i.eventId, // ← mismo id que el Pixel: Meta los une en uno solo
    action_source: "website",
    user_data: user,
  };
  if (i.sourceUrl) event.event_source_url = i.sourceUrl;

  const payload: Record<string, unknown> = { data: [event] };
  if (process.env.META_CAPI_TEST_CODE) payload.test_event_code = process.env.META_CAPI_TEST_CODE;

  try {
    await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${encodeURIComponent(token)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        cache: "no-store",
        signal: AbortSignal.timeout(2500),
      },
    );
  } catch {
    /* nunca romper la respuesta del lead */
  }
}
