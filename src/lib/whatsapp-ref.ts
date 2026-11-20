/**
 * Origen de cada conversación de WhatsApp (auditoría MED-03, CRO-08 y CRO-04;
 * tarea 2.02 del plan, 20-nov-2026).
 *
 * Al hacer clic en cualquier enlace a wa.me, Analytics.tsx llama a
 * `decorarWhatsApp`: si el mensaje no trae ya una línea «Ref», se le añade una
 * al final con la página, el botón y, si la visita vino de un anuncio, la
 * fuente. Ejemplo:
 *
 *   Hola Suggestion, quiero cotizar gigantografías.
 *
 *   Ref: /servicios/gigantografias · burbuja · facebook
 *
 * Así quien atiende sabe de dónde llegó cada chat y la columna «Origen» del
 * Excel de VENTAS se llena copiando esa línea. Se hace en el clic, y no al
 * armar cada enlace, para cubrir los 15 sitios que abren WhatsApp sin tocar
 * cada uno y para leer la atribución guardada en esta sesión.
 *
 * Los enlaces que no traen texto (pie, burbuja, /casos, /nosotros) reciben
 * además un saludo según la página (`mensajePorRuta`), para que nadie mande
 * un chat que diga solo «Ref: …».
 */

import { COTIZA_PRODUCCION, SECTORS, SERVICE_CATEGORIES, mensajeCotiza } from "@/content/navegacion";
import { getAttribution } from "@/lib/tracking";

/** Nombre de cada servicio digital y sector, por ruta, tal como sale en el menú. */
const NOMBRES: Record<string, string> = Object.fromEntries([
  ...SERVICE_CATEGORIES.flatMap((c) => c.children.map((s) => [s.href, s.label] as const)),
  ...SECTORS.map((s) => [s.href, `marketing ${s.label.toLowerCase()}`] as const),
]);

const CONSULTORIA_GENERAL = "Hola Suggestion, vengo de suggestion.pe y quiero agendar mi consultoría cero.";

/** Saludo para un enlace sin texto, según la página donde está. */
export function mensajePorRuta(path: string | null | undefined): string {
  const ruta = (path || "/").replace(/\/+$/, "") || "/";
  if (COTIZA_PRODUCCION[ruta]) return mensajeCotiza(COTIZA_PRODUCCION[ruta]);
  if (NOMBRES[ruta]) return `Hola Suggestion, quiero agendar mi consultoría cero sobre ${NOMBRES[ruta]}.`;
  if (ruta.startsWith("/blog/imprenta-btl/")) return "Hola Suggestion, vengo de su guía y quiero cotizar.";
  return CONSULTORIA_GENERAL;
}

/** De qué anuncio vino la visita, en una palabra; vacío si llegó sola. */
function fuente(): string {
  const a = getAttribution();
  const utm = (a.utm_source || "").replace(/[^\p{L}\p{N}._-]+/gu, " ").trim().slice(0, 30);
  if (utm) return utm;
  if (a.gclid || a.gbraid || a.wbraid) return "google";
  if (a.fbclid) return "facebook";
  if (a.ttclid) return "tiktok";
  if (a.msclkid) return "bing";
  return "";
}

/** La línea «Ref: /ruta · botón · fuente». También la usan los formularios que abren WhatsApp. */
export function lineaRef(cta: string, path?: string): string {
  const ruta = path ?? (typeof location !== "undefined" ? location.pathname : "/");
  return [`Ref: ${ruta}`, cta, fuente()].filter(Boolean).join(" · ");
}

/** Nombre corto del botón: `data-cta` si lo tiene; si no, la zona de la página. */
export function ctaDe(a: Element): string {
  const propio = a.getAttribute("data-cta");
  if (propio) return propio;
  if (a.closest(".hk-fab")) return "burbuja";
  if (a.closest(".hk-fab-foot")) return "menú del celular";
  if (a.closest("header")) return "cabecera";
  if (a.closest("footer")) return "pie";
  return "página";
}

/**
 * Añade la línea «Ref» al enlace de WhatsApp antes de que el navegador lo
 * abra. Devuelve el nombre del botón (para medirlo) o null si no es un enlace
 * a wa.me o lleva `data-ref="no"`. Si el texto ya trae «Ref» (formularios,
 * reapertura desde /gracias) lo deja como está.
 */
export function decorarWhatsApp(a: HTMLAnchorElement): string | null {
  if (a.getAttribute("data-ref") === "no") return null;
  let url: URL;
  try {
    url = new URL(a.href);
  } catch {
    return null;
  }
  if (url.hostname !== "wa.me") return null;
  const cta = ctaDe(a);
  const texto = url.searchParams.get("text") || "";
  if (/^Ref: /m.test(texto)) return cta;
  const base = texto.trim() || mensajePorRuta(location.pathname);
  a.href = `${url.origin}${url.pathname}?text=${encodeURIComponent(`${base}\n\n${lineaRef(cta)}`)}`;
  return cta;
}
