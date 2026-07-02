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

/** Evento de conversión con nombre GA4; se mapea también al Pixel. */
export function track(event: "generate_lead" | "contact" | "view_item", params?: Record<string, unknown>) {
  try {
    window.gtag?.("event", event, params);
    if (window.fbq) {
      const meta = event === "generate_lead" ? "Lead" : event === "contact" ? "Contact" : "ViewContent";
      window.fbq("track", meta, params);
    }
  } catch {
    /* la medición nunca debe romper la UX */
  }
}
