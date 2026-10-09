/**
 * Procesa las fotos del portafolio BTL exportadas de Notion.
 *
 * Origen: la exportación de Notion vive fuera del repo (no se versiona: son
 * 165 JPG de cámara, ~400 MB). Este script selecciona, recorta y optimiza.
 *
 * Qué hace:
 *   1. Recorre cada carpeta de evento de la exportación.
 *   2. Puntúa cada foto y se queda con las mejores N (ver `puntuar`).
 *   3. Escribe WebP en dos tamaños: 1000 px para la tarjeta y 500 px para
 *      móvil y para la tira secundaria.
 *
 * Por qué dos tamaños: la página muestra 20 tarjetas. Sirviendo solo el
 * archivo grande, un móvil descarga ~20x lo que necesita. Mismo criterio que
 * wall-sizes.mjs.
 *
 * Uso: node scripts/portafolio-imagenes.mjs
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const ORIGEN =
  "C:/Users/Victus/Desktop/FEVE/SUGGESTION/PAGINA WEB/IMAGENES NOTION/Privado y compartido/Portafolio BTL Suggestion Estrategias que Conectan/Eventos y Activaciones";
const DESTINO = path.join(process.cwd(), "public", "assets", "portafolio");

/** Cuántas fotos se publican por evento: 1 portada + 2 de apoyo. */
const POR_EVENTO = 3;
const ANCHO_GRANDE = 1000;
const ANCHO_CHICO = 500;

/** carpeta de Notion -> slug del sitio */
const SLUGS = {
  "Activación Grifo Repsol": "grifo-repsol-jac",
  "Activación Subaru Plaza Barranca": "subaru-plaza-barranca",
  "Activación en Autoplan": "autoplan-portafolio-marcas",
  "Activación mercado Sto Domingo": "mercado-santo-domingo-dfsk",
  "Aniversario Amon Amen": "aniversario-amon-amen",
  "Aniversario de Paracas 2024": "aniversario-paracas-gwm",
  "Campaña Test Drive Ica": "test-drive-changan-ica",
  "Campeonato Internacional de Natación": "campeonato-natacion-pb",
  "Campeonato de Caballos de Paso 24": "caballos-de-paso-2024",
  "Campeonato de Caballos de Paso 25": "caballos-de-paso-2025",
  "Competencia Enduro Yancay": "enduro-yancay-subaru",
  "Día del maestro en hotel San Juan": "dia-del-maestro-derco",
  "Gala de Oficiales del Ejército": "gala-oficiales-la-reserva",
  "Gira y Conduce tu Rumbo": "gira-conduce-tu-rumbo",
  "Inauguración de Autoplan": "inauguracion-autoplan",
  "Inauguración de evento de cabalgantes": "cabalgantes-derco",
  "Lanzamiento de Linea amarilla (XCMG) en Ica": "xcmg-linea-amarilla-ica",
  "Lanzamiento de linea amarilla (XCMG) en Nazca": "xcmg-linea-amarilla-nazca",
  "Relanzamiento de tienda Mitsubishi": "relanzamiento-mitsubishi-autoniza",
  "Stand-Up Comedy Melcocha y Barraza": "stand-up-derco",
};

const EXT = /\.(jpe?g|png)$/i;

/**
 * Selección manual, donde la puntuación automática falla.
 *
 * El algoritmo premia foto apaisada, nítida y bien expuesta, pero no sabe si
 * la imagen ENSEÑA EL TRABAJO. En el relanzamiento de Mitsubishi eligió una
 * sala vacía y bien iluminada: técnicamente la mejor foto del lote y la peor
 * portada posible. Estas cinco se eligieron mirándolas.
 */
const MANUAL = {
  "Relanzamiento de tienda Mitsubishi": ["IMG_0231.jpg", "IMG_1106.jpg", "Fuso_4.JPG.jpg"],
  "Activación mercado Sto Domingo": ["IMG_20250709_105238.jpg", "IMG_20250709_105204.jpg", "IMG_20250709_105221.jpg"],
  "Activación Grifo Repsol": ["IMG_20250526_164224.jpg", "IMG_20250526_164313.jpg", "IMG_20250520_165212.jpg"],
  "Inauguración de evento de cabalgantes": ["IMG_20240607_201335.jpg", "IMG_20240607_230939.jpg", "IMG_20240607_231144.jpg"],
  "Aniversario Amon Amen": ["IMG_20240816_232323.jpg", "IMG_20240816_232344.jpg"],
};

/**
 * Puntúa una foto para decidir si se publica.
 *
 * Criterios, por orden de peso:
 *  - Apaisada: la rejilla es 16/10. Una vertical recortada a 16/10 pierde
 *    la cabeza o los pies de lo que importa.
 *  - Resolución: descarta capturas de pantalla y reenvíos de WhatsApp.
 *  - Contraste: proxy barato de "no está quemada ni es una mancha oscura".
 *    Varias fotos nocturnas del archivo son casi negras.
 */
async function puntuar(file) {
  const img = sharp(file).rotate();
  const meta = await img.metadata();
  const w = meta.width || 0;
  const h = meta.height || 0;
  if (!w || !h) return { score: -1 };

  const stats = await img.clone().greyscale().stats();
  const { mean, stdev } = stats.channels[0];

  let score = 0;
  score += w >= h ? 40 : 0;                       // apaisada
  score += Math.min(25, (w * h) / 400000);        // resolución
  score += Math.min(25, stdev / 2.6);             // contraste
  if (mean < 28 || mean > 232) score -= 35;       // negra o quemada
  return { score, w, h, mean: Math.round(mean), stdev: Math.round(stdev) };
}

fs.mkdirSync(DESTINO, { recursive: true });

const resumen = [];
for (const carpeta of fs.readdirSync(ORIGEN, { withFileTypes: true })) {
  if (!carpeta.isDirectory()) continue;
  const slug = SLUGS[carpeta.name];
  if (!slug) {
    console.log("  ! carpeta sin slug, se omite:", carpeta.name);
    continue;
  }
  const dir = path.join(ORIGEN, carpeta.name);
  const fotos = fs.readdirSync(dir).filter((f) => EXT.test(f)).map((f) => path.join(dir, f));

  const puntuadas = [];
  for (const f of fotos) {
    try {
      puntuadas.push({ f, ...(await puntuar(f)) });
    } catch {
      /* archivo ilegible: se ignora */
    }
  }
  puntuadas.sort((a, b) => b.score - a.score);
  let elegidas = puntuadas.slice(0, POR_EVENTO);
  if (MANUAL[carpeta.name]) {
    elegidas = MANUAL[carpeta.name]
      .map((n) => puntuadas.find((x) => path.basename(x.f) === n))
      .filter(Boolean);
  }

  const salidas = [];
  for (let i = 0; i < elegidas.length; i++) {
    const base = `${slug}-${i + 1}`;
    await sharp(elegidas[i].f).rotate()
      .resize(ANCHO_GRANDE, Math.round((ANCHO_GRANDE * 10) / 16), { fit: "cover", position: "attention" })
      .webp({ quality: 76 }).toFile(path.join(DESTINO, `${base}.webp`));
    await sharp(elegidas[i].f).rotate()
      .resize(ANCHO_CHICO, Math.round((ANCHO_CHICO * 10) / 16), { fit: "cover", position: "attention" })
      .webp({ quality: 72 }).toFile(path.join(DESTINO, `${base}-500.webp`));
    salidas.push(base);
  }
  resumen.push({ slug, nombre: carpeta.name, total: fotos.length, publicadas: salidas });
  console.log(`  ${slug.padEnd(36)} ${String(fotos.length).padStart(2)} fotos -> ${salidas.length}`);
}

const peso = fs.readdirSync(DESTINO).reduce((a, f) => a + fs.statSync(path.join(DESTINO, f)).size, 0);
console.log(`\neventos: ${resumen.length}`);
console.log(`archivos: ${fs.readdirSync(DESTINO).length}`);
console.log(`peso total: ${(peso / 1024 / 1024).toFixed(2)} MB`);
fs.writeFileSync(path.join(DESTINO, "_inventario.json"), JSON.stringify(resumen, null, 1));
