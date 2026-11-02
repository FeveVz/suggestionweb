/**
 * La oferta principal del sitio: la consultoría cero. Antes competían cuatro
 * promesas (consultoría, "Agenda una llamada", auditoría en 48 h y propuesta) y
 * cada página mandaba a un sitio distinto (auditoría SEO/CRO del 2026-11-01).
 *
 * La excepción son las páginas de producto a cotizar (imprenta, merchandising,
 * material POP...): quien busca el precio de mil volantes no quiere una reunión
 * de 30 minutos, quiere el precio. Esas conservan "Cotiza" y van a WhatsApp con
 * el servicio ya escrito.
 *
 * ⚠️ Ningún botón debe volver a llamarse "Enviar por WhatsApp" ni "Agenda una
 * llamada": Meta tenía reglas sobre esos textos que contaban Compras y Leads
 * falsos (Event Setup Tool; hay que retirarlas allí).
 */
export const CTA_CONSULTORIA = "Agenda tu consultoría cero";

/**
 * Los formularios van solo a WhatsApp mientras Supabase siga pausado (decisión
 * del owner, 2026-11-02). Al reactivar la base: ponerlo en true y devolver a
 * /gracias su texto de "datos recibidos". Sin base, un dato solo llega si la
 * persona envía el mensaje, y no se guarda de dónde vino (utm, gclid).
 */
export const GUARDAR_EN_BASE = false;

export const esCotizacion = (label: string) => /cotiz/i.test(label);

/**
 * Enlace a la consultoría que recuerda de qué se venía hablando. Va en el
 * fragmento, no en un parámetro: así todos los enlaces suman a una sola URL y
 * no aparecen decenas de /consultoria-cero?... para que Google las rastree.
 */
export function consultoriaHref(tema?: string): string {
  return tema ? `/consultoria-cero#tema=${encodeURIComponent(tema)}` : "/consultoria-cero";
}

/** Lee el tema del fragmento de la URL. Solo en el navegador. */
export function temaDeUrl(): string {
  try {
    const m = window.location.hash.match(/tema=([^&]+)/);
    return m ? decodeURIComponent(m[1]).slice(0, 80) : "";
  } catch {
    return "";
  }
}
