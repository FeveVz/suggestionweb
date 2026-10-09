/**
 * Procesa TODAS las fotos del portafolio exportadas de Notion.
 *
 * Origen: la exportación de Notion vive fuera del repo (no se versiona: son
 * 165 JPG de cámara, ~400 MB). Este script descarta las inservibles, ordena
 * las demás y las optimiza.
 *
 * ── Por qué ya no se recorta ──────────────────────────────────────────────
 * La primera versión publicaba 3 fotos por evento recortadas a 16/10. Al medir
 * el archivo completo resultó que **47 de 160 fotos son verticales**: casi un
 * tercio. Recortarlas a apaisado les corta la cabeza o los pies justo a las que
 * enseñan a una persona trabajando, que son las que valen. Desde que la página
 * muestra las fotos en carrusel, el encuadre deja de ser necesario: cada foto
 * se sirve entera y es la altura la que se normaliza, no el recorte.
 *
 * Qué hace:
 *   1. Recorre cada carpeta de evento de la exportación (BTL y diseño).
 *   2. Descarta lo inservible (foto casi negra, quemada o de baja resolución).
 *   3. Ordena el resto: la portada manda, el resto por calidad técnica.
 *   4. Escribe WebP a dos ALTURAS fijas, respetando la proporción original.
 *   5. Genera src/content/portafolio-fotos.ts con las medidas reales, para
 *      que la página pueda reservar el espacio y elegir la variante.
 *
 * Uso: node scripts/portafolio-imagenes.mjs
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const RAIZ =
  "C:/Users/Victus/Desktop/FEVE/SUGGESTION/PAGINA WEB/IMAGENES NOTION/Privado y compartido/Portafolio BTL Suggestion Estrategias que Conectan";
const CARPETAS = ["Eventos y Activaciones", "Diseño e impresión"];
const DESTINO = path.join(process.cwd(), "public", "assets", "portafolio");
const MANIFIESTO = path.join(process.cwd(), "src", "content", "portafolio-fotos.ts");

/**
 * Alturas de salida. El carrusel fija la altura del marco y deja que el ancho
 * sea el que le toque a cada foto, así que normalizar por altura es lo único
 * que hace que una vertical y una apaisada convivan sin recortar ninguna.
 *   880 → marco de 440 px (escritorio) a 2x
 *   440 → marco de 220-260 px (móvil)
 */
const ALTO_GRANDE = 880;
const ALTO_CHICO = 440;

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
  "Campaña Ahorra o Nunca": "ahorra-o-nunca-despliegue",
  "Presentación Changan CS15": "changan-cs15-presentacion",
};

const EXT = /\.(jpe?g|png)$/i;

/**
 * Fuera del carrusel. No es una foto del evento sino el arte de la invitación
 * digital: en una tira de fotografía se lee como relleno y además es la única
 * pieza vertical estrecha del lote, que rompe el ritmo del marco.
 */
const EXCLUIR = new Set(["INVITACIN_XCMG_reducida.png"]);

/**
 * Portadas elegidas a mano. Estas fotos van primero, en este orden; el resto
 * del evento las sigue ordenado por calidad técnica.
 *
 * Existe porque la puntuación automática premia la foto apaisada, nítida y
 * bien expuesta pero no sabe si la imagen ENSEÑA EL TRABAJO: en el
 * relanzamiento de Mitsubishi eligió una sala vacía y bien iluminada,
 * técnicamente la mejor foto del lote y la peor portada posible. En el mercado
 * de Santo Domingo eligió una que es cielo en sus tres cuartas partes.
 *
 * No se intente automatizar esto. Se midieron dos heurísticas sobre las 164
 * fotos y ninguna separa una cosa de la otra:
 *   - "tercio superior plano y claro" (cielo): 0 de 164 fotos lo activan, por
 *     poco que un poste o un cable crucen el encuadre.
 *   - densidad de detalle (bordes Laplacianos sobre la imagen entera): las
 *     malas caen entre 70,9 % y 78,8 % de superficie plana y las buenas entre
 *     65,1 % y 72,2 %. Se solapan: la sala vacía del stand-up puntuaba MEJOR
 *     que dos portadas buenas.
 * Lo que distingue una portada no es cuánto detalle tiene, es si lo que se ve
 * es el trabajo. Eso hoy lo decide un ojo, y queda escrito aquí.
 *
 * Las tres primeras de Mitsubishi y la primera de la inauguración de Autoplan
 * están además enlazadas desde el caso de Autoniza (src/content/casos.ts) por
 * su nombre de archivo: cambiar este orden rompe esa galería.
 */
const PORTADAS = {
  "Relanzamiento de tienda Mitsubishi": ["IMG_0231.jpg", "IMG_1106.jpg", "Fuso_4.JPG.jpg"],
  // Abre la toma abierta: es la única donde se ven los puestos y la calle del
  // mercado, que es de lo que habla la pieza. La 105238 es cielo en tres
  // cuartas partes y pasa al final.
  "Activación mercado Sto Domingo": ["IMG_20250709_105221.jpg", "IMG_20250709_105204.jpg"],
  "Activación Grifo Repsol": ["IMG_20250526_164224.jpg", "IMG_20250526_164313.jpg", "IMG_20250520_165212.jpg"],
  "Inauguración de evento de cabalgantes": ["IMG_20240607_201335.jpg", "IMG_20240607_230939.jpg", "IMG_20240607_231144.jpg"],
  "Aniversario Amon Amen": ["IMG_20240816_232323.jpg", "IMG_20240816_232344.jpg"],
  "Presentación Changan CS15": ["IMG_20250526_210414.jpg", "IMG_20250609_185155.jpg"],
  // Abre la unidad bajo el toldo, no la sala del local antes de que llegue nadie.
  "Stand-Up Comedy Melcocha y Barraza": ["IMG_20240615_223956.jpg", "IMG_20240615_205430.jpg"],
  // Abre el rótulo del local con las unidades y el equipo, no la pared naranja.
  "Activación en Autoplan": ["IMG_20250512_170334.jpg"],
  // Protege el orden: esta foto la enlaza el caso de Autoniza por su nombre.
  "Inauguración de Autoplan": ["IMG_20240920_214032.jpg"],
  // La gigantografía de fachada abre mejor que el interior: se lee de un vistazo.
  "Campaña Ahorra o Nunca": ["IMG_20250620_091416.jpg"],
};

/**
 * Puntúa una foto. Decide el ORDEN, ya no la selección: ahora se publica todo
 * lo que sea mirable, y lo mejor va delante.
 *
 *  - Apaisada: abre mejor un carrusel, porque llena el marco.
 *  - Resolución: descarta capturas y reenvíos de WhatsApp.
 *  - Contraste: proxy barato de "no está quemada ni es una mancha oscura".
 */
async function analizar(file, elegidaAMano) {
  const img = sharp(file).rotate();
  const meta = await img.metadata();
  const w = meta.width || 0;
  const h = meta.height || 0;
  if (!w || !h) return null;

  const { mean, stdev } = (await img.clone().greyscale().stats()).channels[0];

  // Inservibles: no es cuestión de orden, es que no se ven. Una portada
  // elegida a mano no pasa por aquí: la foto nocturna de la fachada de
  // Mitsubishi tiene la media de brillo de una imagen negra y es la mejor
  // del lote. El ojo ya decidió; el umbral no la vuelve a juzgar.
  if (!elegidaAMano && (mean < 30 || mean > 230 || w * h < 300000)) {
    return { descartada: true, motivo: mean < 30 ? "casi negra" : mean > 230 ? "quemada" : "baja resolución" };
  }

  let score = 0;
  score += w >= h ? 40 : 0;
  score += Math.min(25, (w * h) / 400000);
  score += Math.min(25, stdev / 2.6);
  return { descartada: false, score, w, h };
}

fs.rmSync(DESTINO, { recursive: true, force: true });
fs.mkdirSync(DESTINO, { recursive: true });

const manifiesto = {};
let descartadas = 0;

for (const contenedor of CARPETAS) {
  const base = path.join(RAIZ, contenedor);
  if (!fs.existsSync(base)) {
    console.log("  ! falta la carpeta:", contenedor);
    continue;
  }
  for (const carpeta of fs.readdirSync(base, { withFileTypes: true })) {
    if (!carpeta.isDirectory()) continue;
    const slug = SLUGS[carpeta.name];
    if (!slug) {
      console.log("  ! carpeta sin slug, se omite:", carpeta.name);
      continue;
    }

    const dir = path.join(base, carpeta.name);
    const analizadas = [];
    for (const nombre of fs.readdirSync(dir).filter((f) => EXT.test(f) && !EXCLUIR.has(f))) {
      const file = path.join(dir, nombre);
      try {
        const info = await analizar(file, (PORTADAS[carpeta.name] || []).includes(nombre));
        if (!info) continue;
        if (info.descartada) {
          console.log(`      descartada (${info.motivo}): ${carpeta.name}/${nombre}`);
          descartadas++;
          continue;
        }
        analizadas.push({ file, nombre, ...info });
      } catch {
        /* archivo ilegible: se ignora */
      }
    }
    analizadas.sort((a, b) => b.score - a.score);

    // Las portadas elegidas a mano van delante, en su orden.
    const pin = PORTADAS[carpeta.name] || [];
    const ordenadas = [
      ...pin.map((n) => analizadas.find((x) => x.nombre === n)).filter(Boolean),
      ...analizadas.filter((x) => !pin.includes(x.nombre)),
    ];

    const fotos = [];
    for (let i = 0; i < ordenadas.length; i++) {
      const src = ordenadas[i].file;
      const n = i + 1;
      const grande = await sharp(src).rotate()
        .resize({ height: ALTO_GRANDE, withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(path.join(DESTINO, `${slug}-${n}.webp`));
      await sharp(src).rotate()
        .resize({ height: ALTO_CHICO, withoutEnlargement: true })
        .webp({ quality: 74 })
        .toFile(path.join(DESTINO, `${slug}-${n}-s.webp`));
      fotos.push({ w: grande.width, h: grande.height });
    }
    manifiesto[slug] = fotos;
    console.log(`  ${slug.padEnd(36)} ${String(fotos.length).padStart(2)} fotos`);
  }
}

// ── manifiesto ────────────────────────────────────────────────────────────
const lineas = Object.entries(manifiesto)
  .map(([slug, fotos]) => `  "${slug}": [${fotos.map((f) => `[${f.w},${f.h}]`).join(", ")}],`)
  .join("\n");

fs.writeFileSync(
  MANIFIESTO,
  `/**
 * GENERADO por scripts/portafolio-imagenes.mjs — no editar a mano.
 *
 * Medidas reales de cada foto publicada, en el tamaño grande. La página las
 * usa para dos cosas: reservar el espacio antes de que cargue la imagen (sin
 * esto el carrusel salta) y calcular qué variante pedir, porque con fotos de
 * proporción libre el ancho renderizado depende de cada una.
 *
 * Archivos por foto: \`{slug}-{n}.webp\` (alto ${ALTO_GRANDE}) y
 * \`{slug}-{n}-s.webp\` (alto ${ALTO_CHICO}).
 */

/** [ancho, alto] de la variante grande, en orden de publicación. */
export const FOTOS_PORTAFOLIO: Record<string, [number, number][]> = {
${lineas}
};
`,
  "utf8"
);

const archivos = fs.readdirSync(DESTINO);
const peso = archivos.reduce((a, f) => a + fs.statSync(path.join(DESTINO, f)).size, 0);
const total = Object.values(manifiesto).reduce((a, f) => a + f.length, 0);
console.log(`\neventos: ${Object.keys(manifiesto).length}`);
console.log(`fotos publicadas: ${total}  (descartadas: ${descartadas})`);
console.log(`archivos: ${archivos.length}`);
console.log(`peso total: ${(peso / 1024 / 1024).toFixed(2)} MB`);
console.log(`manifiesto: ${path.relative(process.cwd(), MANIFIESTO)}`);
