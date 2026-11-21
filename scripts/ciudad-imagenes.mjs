/**
 * Fotos propias tomadas en una ciudad de cobertura → WebP para la web.
 *
 * Mismo criterio que scripts/portafolio-imagenes.mjs: altura fija de 880 px
 * (marco de 440 px a 2x), calidad 78, EXIF reducido a las tres líneas de
 * autoría (se pasa por píxeles crudos para no arrastrar GPS ni la miniatura
 * de la cámara) y el hash del contenido en el nombre, porque Vercel cachea
 * /public 30 días.
 *
 * Dos variantes por foto:
 *   <ciudad>-<n>.<hash>.webp    880 px de alto, q78 → foto de cabecera (pasa por next/image)
 *   <ciudad>-<n>-s.<hash>.webp  560 px de alto, q74 → foto de sección y galería (van con <img>
 *                               y se ven a 760 px como mucho; la de 880 pesaba 200 KB)
 *
 * Uso: node scripts/ciudad-imagenes.mjs <ciudad> <descripcion> <foto1> [foto2 ...]
 *   → public/assets/ciudades/, e imprime ruta y medidas.
 */
import sharp from "sharp";
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const [ciudad, descripcion, ...fotos] = process.argv.slice(2);
if (!ciudad || !descripcion || !fotos.length) {
  console.error("Uso: node scripts/ciudad-imagenes.mjs <ciudad> <descripcion> <foto1> [foto2 ...]");
  process.exit(1);
}
const ALTO = 880;
const ALTO_CHICO = 560;
const DESTINO = path.join(process.cwd(), "public", "assets", "ciudades");
fs.mkdirSync(DESTINO, { recursive: true });

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

for (const [i, src] of fotos.entries()) {
  const grande = await encodar(src, ALTO, 78);
  const chica = await encodar(src, ALTO_CHICO, 74);
  // El hash sale de la grande y lo comparten las dos, como en el portafolio.
  const hash = crypto.createHash("md5").update(grande.data).digest("hex").slice(0, 8);
  for (const [sufijo, out] of [["", grande], ["-s", chica]]) {
    const nombre = `${ciudad}-${i + 1}${sufijo}.${hash}.webp`;
    fs.writeFileSync(path.join(DESTINO, nombre), out.data);
    console.log(`/assets/ciudades/${nombre}	${out.info.width}x${out.info.height}	${Math.round(out.data.length / 1024)} KB	<- ${path.basename(src)}`);
  }
}
