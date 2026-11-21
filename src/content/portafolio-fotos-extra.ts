/**
 * Fotos del portafolio que NO vienen de la exportación de Notion: trabajos
 * nuevos cuyas fotos manda el equipo (por WhatsApp, normalmente).
 *
 * Las procesa scripts/portafolio-extra.mjs con el mismo criterio que el resto
 * (880 y 440 px de alto, EXIF solo de autoría, hash en el nombre) e imprime la
 * línea que va aquí. portafolio-fotos.ts —que es generado— suma este objeto al
 * suyo, así que volver a correr portafolio-imagenes.mjs no las borra.
 *
 * Mismo formato: [ancho, alto, hash] de la variante grande, en orden de publicación.
 */
export const FOTOS_EXTRA: Record<string, [number, number, string][]> = {
  // Cortatráfico para la tienda Entel de Nazca, 12-18 nov 2026 (fotos del equipo de Nazca).
  "cortatrafico-entel-nazca": [[1564,880,"2485503b"], [1173,880,"4d8595e9"], [1564,880,"073128d1"], [1564,880,"50180ff5"], [1173,880,"3436a15b"], [1564,880,"1dfedca5"], [660,880,"d48aaa20"]],
};
