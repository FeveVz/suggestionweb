/**
 * Procesa las piezas ATL (diseño e impresión) del portafolio.
 *
 * Van aparte de scripts/portafolio-imagenes.mjs porque aquí el recorte NO se
 * puede dejar en manos del algoritmo: una de las fotos contiene la franja de
 * logos del grupo concesionario, que es material que acordamos no publicar.
 * El recorte es explícito, revisado a ojo y documentado.
 *
 * Uso: node scripts/portafolio-atl.mjs
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const ORIGEN =
  "C:/Users/Victus/Desktop/FEVE/SUGGESTION/PAGINA WEB/IMAGENES NOTION/Privado y compartido/Portafolio BTL Suggestion Estrategias que Conectan/Diseño e impresión";
const DESTINO = path.join(process.cwd(), "public", "assets", "portafolio");

const ANCHO_GRANDE = 1000;
const ANCHO_CHICO = 500;

/**
 * Orden de publicación por pieza. La primera es la portada.
 *
 * `recorte` (left/top/width/height sobre el original) se aplica ANTES del
 * encuadre. Sin él, sharp recorta por saliencia y no sabe qué no debe salir.
 */
const PIEZAS = [
  {
    carpeta: "Presentación Changan CS15",
    slug: "changan-cs15-presentacion",
    fotos: [
      // Portada: la unidad completa en el pasillo, con el moño y el cordón.
      { file: "IMG_20250526_210414.jpg" },
      // La ficha impresa sobre el techo, con el QR. Es la pieza en sí.
      { file: "IMG_20250609_185155.jpg", recorte: { left: 150, top: 750, width: 2800, height: 1750 } },
      { file: "IMG_20250526_210400.jpg", recorte: { left: 280, top: 980, width: 1900, height: 1188 } },
    ],
  },
  {
    carpeta: "Campaña Ahorra o Nunca",
    slug: "ahorra-o-nunca-despliegue",
    fotos: [
      // Portada: el interior, donde se ve el sistema completo de soportes.
      { file: "IMG_20250620_091439.jpg" },
      // Fachada. RECORTE OBLIGADO: deja fuera la franja inferior de logos del
      // grupo. Si algún día se autoriza publicarla entera, basta con quitar
      // esta línea; no hay nada más que tocar.
      { file: "IMG_20250620_091416.jpg", recorte: { left: 950, top: 1020, width: 1850, height: 1156 } },
    ],
  },
];

fs.mkdirSync(DESTINO, { recursive: true });

for (const pieza of PIEZAS) {
  const dir = path.join(ORIGEN, pieza.carpeta);
  for (let i = 0; i < pieza.fotos.length; i++) {
    const { file, recorte } = pieza.fotos[i];
    const origen = path.join(dir, file);
    if (!fs.existsSync(origen)) {
      console.log("  ! no existe:", origen);
      continue;
    }
    const base = `${pieza.slug}-${i + 1}`;
    for (const [ancho, calidad, sufijo] of [
      [ANCHO_GRANDE, 76, ""],
      [ANCHO_CHICO, 72, "-500"],
    ]) {
      let img = sharp(origen).rotate();
      if (recorte) img = img.extract(recorte);
      await img
        .resize(ancho, Math.round((ancho * 10) / 16), { fit: "cover", position: "attention" })
        .webp({ quality: calidad })
        .toFile(path.join(DESTINO, `${base}${sufijo}.webp`));
    }
    console.log(`  ${base.padEnd(32)} ${recorte ? "recorte explícito" : "encuadre automático"}`);
  }
}

const peso = fs.readdirSync(DESTINO).reduce((a, f) => a + fs.statSync(path.join(DESTINO, f)).size, 0);
console.log(`\narchivos en ${path.relative(process.cwd(), DESTINO)}: ${fs.readdirSync(DESTINO).length}`);
console.log(`peso total: ${(peso / 1024 / 1024).toFixed(2)} MB`);
