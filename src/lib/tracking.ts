/**
 * IDs de medición — ÚNICO lugar donde pegarlos.
 * GA_ID: GA4 "ID de medición" (empieza con G-). Ojo: NO es el número de
 * propiedad (237086613); se copia de Admin → Flujos de datos → Web.
 * META_PIXEL_ID: Events Manager → Conectar datos → Web (número de ~15 dígitos).
 * Con los IDs vacíos no se inyecta ningún script (cero peso).
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

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
