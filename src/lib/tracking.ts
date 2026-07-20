/**
 * IDs de medición — ÚNICO lugar donde pegarlos.
 * GA_ID: GA4 "ID de medición" (empieza con G-). Ojo: NO es el número de
 * propiedad (237086613); se copia de Admin → Flujos de datos → Web.
 * META_PIXEL_ID: Events Manager → Conectar datos → Web (número de ~15 dígitos).
 * Con los IDs vacíos no se inyecta ningún script (cero peso).
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

/**
 * Google Ads (opcional). GADS_ID = "AW-XXXXXXXXXX"; GADS_LEAD_LABEL = etiqueta
 * de la acción de conversión "Lead" (la parte tras la barra en send_to).
 * Con ambos vacíos no se dispara ninguna conversión de Ads (no-op), igual que
 * GA/Pixel. Al configurarlos en Vercel, cada generate_lead cuenta como conversión
 * de Ads y las campañas de Search dejan de correr a ciegas.
 */
export const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID || "";
export const GADS_LEAD_LABEL = process.env.NEXT_PUBLIC_GADS_LEAD_LABEL || "";

type Gtag = (...args: unknown[]) => void;
type Fbq = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: Gtag;
    fbq?: Fbq;
  }
}

/** Evento de conversión con nombre GA4; se mapea también al Pixel.
 *  eventId (opcional): deduplica el evento del Pixel con el de la CAPI (servidor). */
export function track(
  event: "generate_lead" | "contact" | "view_item",
  params?: Record<string, unknown>,
  eventId?: string,
) {
  try {
    window.gtag?.("event", event, params);
    // Conversión de Google Ads (solo el lead real, y solo si está configurado).
    if (event === "generate_lead" && GADS_ID && GADS_LEAD_LABEL) {
      window.gtag?.("event", "conversion", { send_to: `${GADS_ID}/${GADS_LEAD_LABEL}` });
    }
    if (window.fbq) {
      const meta = event === "generate_lead" ? "Lead" : event === "contact" ? "Contact" : "ViewContent";
      if (eventId) window.fbq("track", meta, params, { eventID: eventId });
      else window.fbq("track", meta, params);
    }
  } catch {
    /* la medición nunca debe romper la UX */
  }
}

/** event_id único para deduplicar el mismo evento entre Pixel (navegador) y CAPI (servidor). */
export function newEventId(): string {
  try {
    if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
  } catch {
    /* fallback abajo */
  }
  return `ev_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
}

/**
 * Atribución de campaña. Guardamos los parámetros de la URL de ENTRADA en la
 * primera visita de la sesión (first-touch): así el lead conserva de qué anuncio
 * vino aunque después navegue y la URL pierda los parámetros. Sin esto, el CRM
 * no sabe qué campaña generó cada lead y no se puede medir el retorno por canal.
 */
const ATTRIBUTION_KEYS = [
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
  "gclid", "gbraid", "wbraid", "fbclid", "ttclid", "msclkid",
] as const;
const ATTR_STORE = "sg_attribution";

export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(ATTR_STORE)) return; // first-touch: no se pisa
    const sp = new URLSearchParams(window.location.search);
    const record: Record<string, string> = {};
    for (const k of ATTRIBUTION_KEYS) {
      const v = sp.get(k);
      if (v) record[k] = v.slice(0, 200);
    }
    record.landing_page = window.location.pathname;
    record.referrer = (document.referrer || "").slice(0, 300);
    sessionStorage.setItem(ATTR_STORE, JSON.stringify(record));
  } catch {
    /* sessionStorage puede fallar en modo incógnito/bloqueado; la medición nunca rompe la UX */
  }
}

/** Lee la atribución guardada para adjuntarla al lead. {} si no hay o si falla. */
export function getAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(ATTR_STORE);
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}

/** Datos de deduplicación/enriquecimiento del Lead; se hace spread al body del POST a /api/lead. */
export function leadDedup(): { event_id: string; event_source_url: string; fbp: string; fbc: string } {
  const cookie = (name: string) => {
    if (typeof document === "undefined") return "";
    const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return m ? decodeURIComponent(m[1]) : "";
  };
  return {
    event_id: newEventId(),
    event_source_url: typeof location !== "undefined" ? location.href : "",
    fbp: cookie("_fbp"),
    fbc: cookie("_fbc"),
  };
}
