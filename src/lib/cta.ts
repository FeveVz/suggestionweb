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
 * Los formularios de consultoría y auditoría se guardan en el servidor antes
 * de contar el Lead (tarea 2.01, decisión 5 del dueño, 20-nov-2026): una Hoja
 * de Google vía /api/lead. Si el servidor aún no tiene dónde guardar (503
 * «sin-almacen»), el formulario sigue como antes: WhatsApp y Lead contado
 * desde el navegador.
 */
export const GUARDAR_EN_BASE = true;

/**
 * Libro de Reclamaciones con número correlativo y constancia por correo
 * (tarea 2.08): /api/reclamo → Apps Script → pestaña «Reclamaciones». Ya está
 * programado, pero APAGADO: se enciende con NEXT_PUBLIC_RECLAMOS_ACTIVO=1 en
 * Vercel (y un redeploy) solo después de que un abogado valide la constancia
 * (decisión 10) y de pegar la versión nueva del Apps Script. Mientras tanto la
 * hoja sale por correo a hola@ (tarea 2.07).
 */
export const RECLAMOS_EN_BASE = process.env.NEXT_PUBLIC_RECLAMOS_ACTIVO === "1";

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
