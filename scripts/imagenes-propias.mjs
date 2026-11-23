// Fotos y diseños propios para cabeceras, galerías, casos y artículos.
//
// Selección del 22-nov-2026: el owner eligió una imagen por espacio en la
// página de revisión (artifact «Imágenes para la web») y confirmó que las
// fotos son nuestras, que los diseños son nuestros y que los clientes que
// aparecen aceptan salir. Los originales están en su laptop (C:) y en el
// disco externo (D:\PORTAFOLIO SUGGESTION), por eso las rutas son absolutas.
//
// Qué hace con cada una:
//   - la endereza según su EXIF y luego tira todos los metadatos (las fotos
//     de dron traen la ubicación GPS exacta; no debe salir en la web);
//   - recorta si hace falta y difumina las placas que se leen;
//   - la reduce al tamaño de su lugar y la guarda en webp.
//
// Tamaños: las cabeceras pasan por next/image (que genera las versiones para
// celular), así que van más grandes; galerías y fotos de artículo se sirven
// tal cual con <img>, así que van contenidas.
//
// Uso: node scripts/imagenes-propias.mjs [destino...]
// Si falta un original (por ejemplo, el disco D desconectado) lo salta y avisa.
import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const D = "D:/PORTAFOLIO SUGGESTION";
const C = "C:/Users/Victus";
const LC = "C:/Users/Victus/AppData/Local/Temp/claude/1232e14afee08bac/e7d2874f-1730-4eac-bb57-e8c2abcdc7e2/scratchpad/img/lc";
const CABECERA = 1600;
const GALERIA = 1000;
const ARTICULO = 1100;

/**
 * recorte: [izq, arriba, ancho, alto] en píxeles del original ya enderezado.
 * placas:  [[izq, arriba, ancho, alto], ...] en las mismas coordenadas.
 */
const IMAGENES = [
  // Cabeceras de sector
  { destino: "sectores/automotriz-exhibicion-plaza-de-armas-ica.webp", lado: CABECERA, origen: `${D}/_LISTO PARA USAR/06 PARA WEB/candidato-drone-DJI_20260613193617_0050_D.JPG` },
  { destino: "sectores/inmobiliario-paso-alto-dron.webp", lado: CABECERA, origen: `${D}/CLIENTES SUGGESTION/PASO ALTO/FOTOS Y VIDEOS 2025/DJI_20251201130405_0037_D.jpg` },
  { destino: "sectores/marcas-el-charcutero-gorra-pack.webp", lado: CABECERA, origen: `${C}/Desktop/FEVE/CHARCUTERO/FOTOS ANTIGUAS/IMG20211227130646.jpg` },
  { destino: "sectores/turismo-beach-club-atardecer.webp", lado: CABECERA, origen: `${D}/ALBUM GOOGLE FOTOS/Portafolio trabajo/FOTOS/2021-01/IMG_20210123_182107.jpg` },
  // Vertical: se quita el suelo de abajo para dejarla en 4:5.
  { destino: "sectores/pisco-vino-festival-vendimia-ica.webp", lado: 1375, origen: `${C}/Desktop/FEVE/SUGGESTION/FOTOS EVENTOS/FESTIVAL DE LA VENDIMIA 2024/IMG_20240308_174410.jpg`, recorte: [0, 136, 3072, 3840] },

  // Cabeceras de servicio
  { destino: "servicios/consultoria-taller-plan-de-negocios.webp", lado: CABECERA, origen: `${D}/ALBUM GOOGLE FOTOS/Portafolio trabajo/FOTOS/2025-01/IMG_20250121_083025.jpg` },
  { destino: "servicios/redes-sociales-post-al-toque.webp", lado: 1350, origen: `${C}/Desktop/FEVE/SUGGESTION/CLIENTES/AL TOQUE VENEZOLANO/DISEÑOS/5.jpeg` },
  { destino: "servicios/branding-empaque-aura-andina.webp", lado: 1254, origen: `${C}/Desktop/FEVE/SUGGESTION/CLIENTES/AURA ANDINA/PACKAGIN/BLACK MACA A.jpeg` },
  { destino: "servicios/merchandising-gorra-bordada.webp", lado: CABECERA, origen: `${C}/Downloads/FOTOS RENAULT 2/WhatsApp Image 2025-04-19 at 10.35.39.jpeg` },
  // Foto de WhatsApp de 900 × 1600: se deja en 4:5, sin la base del elevador.
  { destino: "servicios/estructuras-panel-instalacion-nocturna.webp", lado: 1125, origen: `${C}/Desktop/FEVE/SUGGESTION/CLIENTES/CABLE VISION/WhatsApp Image 2026-11-14 at 12.03.47 PM.jpeg`, recorte: [0, 60, 900, 1125] },

  // Galerías de servicio
  { destino: "servicios/audiovisual-sesion-dunas.webp", lado: GALERIA, origen: `${D}/ALBUM GOOGLE FOTOS/Portafolio trabajo/FOTOS/2024-10/IMG_20241028_173847.jpg`, placas: [[1070, 1335, 62, 72], [2203, 1104, 40, 38]] },
  { destino: "servicios/audiovisual-making-of-restaurante.webp", lado: GALERIA, origen: `${C}/Desktop/FEVE/SUGGESTION/CLIENTES/AL TOQUE VENEZOLANO/MAKING OF AUDIOVISUALES/WhatsApp Image 2026-05-02 at 9.40.15 AM (3).jpeg` },
  { destino: "servicios/pop-totem-ficha-sala.webp", lado: GALERIA, origen: `${C}/Downloads/FOTOS RENAULT 2/WhatsApp Image 2025-04-19 at 10.25.25 (2).jpeg` },
  { destino: "servicios/pop-colgante-sala.webp", lado: GALERIA, origen: `${C}/Downloads/FOTOS RENAULT 2/WhatsApp Image 2025-04-19 at 10.27.39.jpeg` },
  { destino: "servicios/eventos-lanzamiento-cusco-1.webp", lado: GALERIA, origen: `${C}/Downloads/LANZAMIENTO ARKANA CUSCO/FOTOS EDITADAS/IMG_6759.png` },
  { destino: "servicios/eventos-lanzamiento-cusco-2.webp", lado: GALERIA, origen: `${C}/Downloads/LANZAMIENTO ARKANA CUSCO/FOTOS EDITADAS/IMG_6761.png` },

  // Bicivallas de Little Caesars («¡Hola Ica!», inauguración del local, 4 días
  // de octubre de 2026). Las fotos vienen dentro del PDF del registro
  // fotográfico entregado al cliente; se extrajeron a su tamaño original con
  // PyMuPDF (pXX_YY = página y orden de la imagen en el PDF):
  //   Desktop/FEVE/SUGGESTION/LITTLE CAESAR PIZZA/LITTLE CAESARS PIZZA REGISTRO FOTOGRAFICO.pdf
  // Si la carpeta temporal ya no existe, se vuelven a extraer de ese PDF.
  { destino: "servicios/bicivalla-little-caesars-en-ruta.webp", lado: CABECERA, origen: `${LC}/p04_02_1404x1050.png`, placas: [[1190, 895, 125, 90]] },
  { destino: "servicios/bicivalla-little-caesars-noche.webp", lado: GALERIA, origen: `${LC}/p04_07_1448x1086.png`, placas: [[1275, 575, 75, 40]] },
  { destino: "servicios/bicivalla-little-caesars-inauguracion.webp", lado: GALERIA, origen: `${LC}/p07_06_1087x822.png` },
  { destino: "servicios/bicivalla-little-caesars-ruta-1.webp", lado: GALERIA, origen: `${LC}/p02_01_439x483.png` },

  // Caso Granjas Bonanza (los originales ya vienen chicos, de WhatsApp)
  { destino: "casos/bonanza-operario-bioseguridad.webp", lado: GALERIA, origen: `${C}/Desktop/FEVE/SUGGESTION/CLIENTES/BONANZA/FOTOS/GRANJA BONANZA 2.jpeg` },
  { destino: "casos/bonanza-galpon-desinfeccion.webp", lado: GALERIA, origen: `${C}/Desktop/FEVE/SUGGESTION/CLIENTES/BONANZA/FOTOS/GRANJA BONANZA 1.jpeg` },

  // Fotos dentro de artículos del blog
  { destino: "blog/exhibicion-camioneta-plaza-ica.webp", lado: ARTICULO, origen: `${D}/_LISTO PARA USAR/06 PARA WEB/candidato-drone-DJI_20260613194041_0059_D.JPG`, placas: [[1975, 2060, 260, 125]] },
  { destino: "blog/registro-de-datos-en-exhibicion.webp", lado: ARTICULO, origen: `${D}/_LISTO PARA USAR/06 PARA WEB/candidato-drone-DJI_20260613192919_0042_D.JPG` },
  { destino: "blog/avance-de-obra-la-reserva-dron.webp", lado: ARTICULO, origen: `${D}/CLIENTES SUGGESTION/IIPB/LA RESERVA/IMAGENES ANTIGUAS/FOTOS/AVANCES 18.04.25/DJI_20250415160628_0017_D.png` },
  { destino: "blog/lotizacion-desierto-dron.webp", lado: ARTICULO, origen: `${C}/Downloads/_Organizado/Imagenes/2026-01/DJI_0769.JPG` },
  { destino: "blog/post-inmobiliario-mirador.webp", lado: 1000, origen: `${D}/CLIENTES SUGGESTION/IIPB/LA RESERVA/IMAGENES ANTIGUAS/GRILLA AGOSTO/5_IMG20240805_182203.png` },
  { destino: "blog/fondo-de-marca-inmobiliaria-evento.webp", lado: ARTICULO, origen: `${C}/Desktop/FEVE/SUGGESTION/FOTOS EVENTOS/CONCURSO DE CABALLOS DE PASO 2024/IMG_20240609_102150.jpg` },
  { destino: "blog/salon-restaurante-al-toque.webp", lado: ARTICULO, origen: `${D}/CLIENTES SUGGESTION/VIDEOS/DJI_20260326182518_0041_D.JPG` },
  { destino: "blog/salon-beach-club-noche.webp", lado: ARTICULO, origen: `${D}/ALBUM GOOGLE FOTOS/Portafolio trabajo/FOTOS/2021-01/IMG_20210123_192425.jpg` },
  { destino: "blog/volanteo-en-calle.webp", lado: ARTICULO, origen: `${C}/Desktop/FEVE/SUGGESTION/FOTOS EVENTOS/BTL CALLE/IMG_20240720_150920.jpg` },
  { destino: "blog/logo-aura-andina.webp", lado: 1080, origen: `${C}/Desktop/FEVE/SUGGESTION/CLIENTES/AURA ANDINA/PROPUESTA DE LOGOS/propuesta-aura-andina-1.jpg.jpeg` },
  { destino: "blog/empaque-aura-andina-turmeric.webp", lado: 1254, origen: `${C}/Desktop/FEVE/SUGGESTION/CLIENTES/AURA ANDINA/PACKAGIN/CURCUMA B.jpeg` },
  { destino: "blog/taller-plan-de-negocios.webp", lado: ARTICULO, origen: `${D}/ALBUM GOOGLE FOTOS/Portafolio trabajo/FOTOS/2025-01/IMG_20250121_083025.jpg` },
];

const raiz = path.join(process.cwd(), "public/assets");
const pedidos = process.argv.slice(2);
let faltan = 0;

for (const im of IMAGENES) {
  if (pedidos.length && !pedidos.some((p) => im.destino.includes(p))) continue;
  if (!existsSync(im.origen)) {
    console.log("  ! falta el original, se salta:", im.destino, "←", im.origen);
    faltan++;
    continue;
  }
  // 1. Enderezar según el EXIF. Sin withMetadata(), la salida no lleva EXIF
  //    ni GPS.
  let buf = await sharp(im.origen).rotate().toBuffer();
  // 2. Difuminar placas sobre el original enderezado.
  if (im.placas?.length) {
    const capas = [];
    for (const [left, top, width, height] of im.placas) {
      const trozo = await sharp(buf).extract({ left, top, width, height }).blur(Math.max(8, Math.round(height / 3))).toBuffer();
      capas.push({ input: trozo, left, top });
    }
    buf = await sharp(buf).composite(capas).toBuffer();
  }
  // 3. Recortar, reducir y guardar.
  let s = sharp(buf);
  if (im.recorte) {
    const [left, top, width, height] = im.recorte;
    s = s.extract({ left, top, width, height });
  }
  const salida = path.join(raiz, im.destino);
  mkdirSync(path.dirname(salida), { recursive: true });
  const info = await s
    .resize({ width: im.lado, height: im.lado, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 78, effort: 6 })
    .toFile(salida);
  console.log(`${im.destino}  ${info.width}×${info.height}  ${Math.round(info.size / 1024)} KB`);
}
if (faltan) console.log(`\n${faltan} sin procesar: conecta el disco D y vuelve a correr el script con esos destinos.`);
