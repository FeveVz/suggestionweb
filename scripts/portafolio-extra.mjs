/**
 * Fotos de un trabajo que NO está en la exportación de Notion (trabajos
 * nuevos, fotos que manda el equipo por WhatsApp) → portafolio.
 *
 * Mismo criterio que scripts/portafolio-imagenes.mjs: dos ALTURAS fijas
 * (880 px q78 y 440 px q74), sin recortar, EXIF reducido a las tres líneas de
 * autoría (se pasa por píxeles crudos: no arrastra GPS ni la miniatura de la
 * cámara) y el hash del contenido en el nombre, porque Vercel cachea /public
 * 30 días. Las dos variantes comparten el hash de la grande.
 *
 * El manifiesto de estas fotos vive en src/content/portafolio-fotos-extra.ts,
 * escrito a mano con la línea que imprime este script. portafolio-imagenes.mjs
 * lo suma al suyo, así que volver a correrlo no las borra.
 *
 * Uso: node scripts/portafolio-extra.mjs <slug> <descripcion> <foto1> [foto2 ...]
 */
import sharp from "sharp";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const [slug, descripcion, ...fotos] = process.argv.slice(2);
if (!slug || !descripcion || !fotos.length) {
  console.error("Uso: node scripts/portafolio-extra.mjs <slug> <descripcion> <foto1> [foto2 ...]");
  process.exit(1);
}
const DESTINO = path.join(process.cwd(), "public", "assets", "portafolio");

const exif = {
  IFD0: {
    ImageDescription: `${descripcion} · Producción de Suggestion`,
    Artist: "Suggestion",
    Copyright: "© Agencia de Marketing Suggestion S.A.C.",
  },
};

const encodar = async (src, alto, calidad) => {
  const { data, info } = await sharp(src).rotate()
    .resize({ height: alto, withoutEnlargement: true })
    .toColourspace("srgb").raw().toBuffer({ resolveWithObject: true });
  return sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
    .withExif(exif).webp({ quality: calidad }).toBuffer({ resolveWithObject: true });
};

const manifiesto = [];
for (const [i, src] of fotos.entries()) {
  const n = i + 1;
  const grande = await encodar(src, 880, 78);
  const chica = await encodar(src, 440, 74);
  const hash = crypto.createHash("sha256").update(grande.data).digest("hex").slice(0, 8);
  fs.writeFileSync(path.join(DESTINO, `${slug}-${n}.${hash}.webp`), grande.data);
  fs.writeFileSync(path.join(DESTINO, `${slug}-${n}-s.${hash}.webp`), chica.data);
  manifiesto.push(`[${grande.info.width},${grande.info.height},"${hash}"]`);
  console.error(`${n}: ${grande.info.width}x${grande.info.height} ${Math.round(grande.data.length / 1024)} KB · -s ${Math.round(chica.data.length / 1024)} KB  <- ${path.basename(src)}`);
}
console.log(`  "${slug}": [${manifiesto.join(", ")}],`);
