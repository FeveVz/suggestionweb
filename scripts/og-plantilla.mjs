// Plantilla de las imágenes para compartir (1200×630): lo que se ve al pegar
// un enlace de suggestion.pe en WhatsApp, Facebook o LinkedIn.
//
// Rediseño del 23-nov-2026 (owner: «está desactualizado el diseño»). La de
// julio era negra con una mancha de tinta; la web de hoy es blanca. Esta copia
// la web: fondo blanco con la cuadrícula tenue del inicio, el logo, la
// etiqueta en mayúsculas con punto celeste, el título real de la página en
// Space Grotesk con la última palabra en celeste (como «ventas» en el inicio),
// el botón negro y, si la página tiene portada, la foto en una tarjeta.
//
// Las imágenes van en public/assets/og2/: /assets/og/ tenía caché de 30 días
// en el CDN y con el mismo nombre se habrían seguido sirviendo las viejas.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import sharp from "sharp";

const raiz = process.cwd();
export const DIR_OG = "public/assets/og2";
mkdirSync(path.join(raiz, DIR_OG), { recursive: true });

const CHROME = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
].find(existsSync);
if (!CHROME) throw new Error("No encontré Chrome ni Edge");

const fuente = (n) => pathToFileURL(path.join(raiz, "fuentes/originales", n)).href;
const LOGO = pathToFileURL(path.join(raiz, "public/assets/logos/suggestion-logo-black.png")).href;
const tmp = mkdtempSync(path.join(tmpdir(), "og2-"));
const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/**
 * @param {object} o
 * @param {string} o.archivo  nombre sin extensión (el mismo que usa la página)
 * @param {string} o.kicker   etiqueta en mayúsculas
 * @param {string} o.titulo   título (la última palabra va en celeste)
 * @param {string=} o.foto    ruta pública de la portada (/assets/...)
 * @param {string=} o.cta     texto del botón negro; sin él, solo la dirección
 * @param {"png"|"jpg"=} o.ext
 */
export async function generarOg({ archivo, kicker, titulo, foto, cta, ext = "png" }) {
  let fotoUrl = "";
  if (foto) {
    const origen = path.join(raiz, "public", foto.replace(/^\//, ""));
    if (existsSync(origen)) {
      const p = path.join(tmp, `${archivo}-foto.png`);
      // Al doble de la tarjeta (470×502) para que el recorte salga nítido.
      await sharp(origen).rotate().resize(940, 1004, { fit: "cover", position: "attention" }).png().toFile(p);
      fotoUrl = pathToFileURL(p).href;
    }
  }
  const palabras = titulo.trim().split(/\s+/);
  const ultima = palabras.pop();
  const tituloHtml = `${esc(palabras.join(" "))}${palabras.length ? " " : ""}<span class="c">${esc(ultima)}</span>`;
  const conFoto = !!fotoUrl;
  const html = `<!doctype html><meta charset="utf-8"><style>
    @font-face { font-family: SG; src: url("${fuente("SpaceGrotesk-SemiBold.woff2")}"); font-weight: 600; }
    @font-face { font-family: G; src: url("${fuente("Geomanist-Bold.woff2")}"); font-weight: 700; }
    @font-face { font-family: G; src: url("${fuente("Geomanist-Medium.woff2")}"); font-weight: 500; }
    * { margin: 0; box-sizing: border-box; }
    body { width: 1200px; height: 630px; position: relative; overflow: hidden; background: #fff; color: #000; font-family: G; }
    .g { position: absolute; inset: 0; background-image: linear-gradient(#ececec 1px, transparent 1px), linear-gradient(90deg, #ececec 1px, transparent 1px); background-size: 56px 56px; -webkit-mask-image: linear-gradient(90deg, rgba(0,0,0,.25) 0%, #000 60%); }
    .logo { position: absolute; left: 72px; top: 58px; height: 38px; }
    .col { position: absolute; left: 72px; top: 158px; width: ${conFoto ? 560 : 1010}px; }
    .k { display: flex; align-items: center; gap: 12px; font: 700 19px/1 G; letter-spacing: .16em; text-transform: uppercase; color: #696969; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .k i { flex: none; width: 10px; height: 10px; border-radius: 50%; background: #00bfff; }
    h1 { margin-top: 26px; font: 600 ${conFoto ? 70 : 84}px/1.04 SG; letter-spacing: -0.025em; }
    .c { color: #0098cc; }
    .pie { position: absolute; left: 72px; bottom: 60px; display: flex; align-items: center; gap: 26px; }
    .b { background: #000; color: #fff; font: 700 21px/1 G; padding: 18px 28px; border-radius: 12px; }
    .u { display: flex; align-items: center; gap: 10px; font: 500 23px/1 G; color: #141414; }
    .u i { width: 12px; height: 12px; border-radius: 50%; background: #00bfff; }
    .f { position: absolute; right: 64px; top: 64px; width: 470px; height: 502px; border-radius: 22px; border: 1px solid #e3e3e3; box-shadow: 0 24px 60px rgba(0,0,0,.14); background: #f5f5f5 url("${fotoUrl}") center/cover no-repeat; }
  </style>
  <div class="g"></div>
  <img class="logo" src="${LOGO}">
  ${conFoto ? '<div class="f"></div>' : ""}
  <div class="col"><div class="k"><i></i>${esc(kicker)}</div><h1>${tituloHtml}</h1></div>
  <div class="pie">${cta ? `<div class="b">${esc(cta)}</div>` : ""}<div class="u"><i></i>suggestion.pe</div></div>
  <script>
    // El título se achica hasta que entra sin pisar el pie. Se mide con la
    // tipografía ya cargada: con la de respaldo el cálculo sale corto.
    document.fonts.ready.then(() => {
      const h = document.querySelector("h1"); let s = parseFloat(getComputedStyle(h).fontSize);
      while (h.getBoundingClientRect().bottom > 470 && s > 34) { s -= 2; h.style.fontSize = s + "px"; }
    });
  </script>`;
  const entrada = path.join(tmp, `${archivo}.html`);
  const captura = path.join(tmp, `${archivo}.png`);
  writeFileSync(entrada, html);
  execFileSync(
    CHROME,
    ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files", "--force-device-scale-factor=1", "--window-size=1200,630", "--virtual-time-budget=4000", `--screenshot=${captura}`, pathToFileURL(entrada).href],
    { stdio: "ignore", timeout: 60000 },
  );
  const salida = path.join(raiz, DIR_OG, `${archivo}.${ext}`);
  const img = sharp(captura).resize(1200, 630);
  if (ext === "jpg") await img.jpeg({ quality: 84, mozjpeg: true }).toFile(salida);
  else await img.png({ compressionLevel: 9, palette: !conFoto }).toFile(salida);
  return salida;
}
