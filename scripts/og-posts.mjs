// Imagen para compartir (1200×630) de los artículos con foto propia.
//
// Antes cada artículo usaba la OG de su página de servicio: hasta 8 posts
// compartían la misma imagen y gigantografías (4.111 impresiones) salía con la
// genérica aunque tiene foto real (auditoría TEC-13, 21-nov-2026). Este script
// toma la foto de la sección del artículo (campo `foto` en blog.ts), le pone el
// título encima y la guarda en public/assets/og/blog-<slug>.jpg. La página del
// artículo la usa en og:image y en el BlogPosting si el archivo existe.
//
// Uso: node scripts/og-posts.mjs [slug...]   (sin slugs: todos los que tienen foto)
// Usa el Chrome local para que el título salga con la fuente de la marca.
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import sharp from "sharp";

const raiz = process.cwd();
const blog = readFileSync(path.join(raiz, "src/content/blog.ts"), "utf8");
const fotos = readFileSync(path.join(raiz, "src/content/portafolio-fotos.ts"), "utf8");
const fotosExtra = readFileSync(path.join(raiz, "src/content/portafolio-fotos-extra.ts"), "utf8");

/** Hash de la foto n de una pieza del portafolio (manifiesto generado). */
function hashFoto(pieza, n) {
  const m = new RegExp(`"${pieza}":\\s*(\\[\\[.*?\\]\\]),`).exec(fotos + fotosExtra);
  if (!m) return null;
  const lista = JSON.parse(m[1]);
  return lista[n - 1]?.[2] ?? null;
}

const inicio = blog.indexOf("export const BLOG_POSTS");
// Cada artículo empieza con «slug» seguido de «categoria»; no todos van
// precedidos de la misma línea, así que se corta por esa pareja.
const cuerpo = blog.slice(inicio);
const marcas = [...cuerpo.matchAll(/\n    slug: "[^"]+",\n    categoria: /g)].map((m) => m.index);
const bloques = marcas.map((ini, i) => cuerpo.slice(ini + 1, marcas[i + 1] ?? cuerpo.length).replace(/^    slug: /, ""));
const posts = [];
for (const b of bloques) {
  const slug = b.match(/^"([^"]+)"/)?.[1];
  const foto = b.match(/foto: foto\("([^"]+)", (\d+),/);
  const h1 = b.match(/\n    h1: "([^"]+)"/)?.[1];
  if (!slug || !foto || !h1) continue;
  const hash = hashFoto(foto[1], Number(foto[2]));
  if (!hash) throw new Error(`Sin hash para ${foto[1]} ${foto[2]}`);
  posts.push({ slug, h1, archivo: `public/assets/portafolio/${foto[1]}-${foto[2]}.${hash}.webp` });
}

const CHROME = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
].find(existsSync);
if (!CHROME) throw new Error("No encontré Chrome ni Edge");

const fuente = pathToFileURL(path.join(raiz, "public/fonts/Geomanist-Bold.woff2")).href;
const tmp = mkdtempSync(path.join(tmpdir(), "og-posts-"));
const pedidos = process.argv.slice(2);
const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;");

for (const p of posts) {
  if (pedidos.length && !pedidos.includes(p.slug)) continue;
  // La foto, recortada a 1200×630, va como fondo en PNG para que Chrome no la reescale.
  const fondo = path.join(tmp, `${p.slug}-fondo.png`);
  await sharp(path.join(raiz, p.archivo)).resize(1200, 630, { fit: "cover", position: "attention" }).png().toFile(fondo);
  const html = `<!doctype html><meta charset="utf-8"><style>
    @font-face { font-family: G; src: url("${fuente}"); font-weight: 700; }
    * { margin: 0; box-sizing: border-box; }
    body { width: 1200px; height: 630px; position: relative; overflow: hidden; color: #fff; font: 700 60px/1.12 G; background: #080808 url("${pathToFileURL(fondo).href}") center/cover no-repeat; }
    .v { position: absolute; inset: 0; background: linear-gradient(90deg, rgba(8,8,8,.94) 0%, rgba(8,8,8,.82) 46%, rgba(8,8,8,.25) 100%); }
    .t { position: absolute; left: 72px; top: 92px; width: 700px; }
    .r { width: 61px; height: 8px; background: #ff8c00; }
    .k { font-size: 26px; letter-spacing: .02em; color: #b3b3b3; margin: 30px 0 26px; }
    .u { position: absolute; left: 72px; bottom: 58px; font-size: 28px; display: flex; align-items: center; gap: 14px; }
    .u i { width: 14px; height: 14px; border-radius: 50%; background: #00bfff; }
  </style><div class="v"></div><div class="t"><div class="r"></div>
  <div class="k">BLOG DE SUGGESTION</div><div>${esc(p.h1)}</div></div>
  <div class="u"><i></i>suggestion.pe</div>`;
  const entrada = path.join(tmp, `${p.slug}.html`);
  const captura = path.join(tmp, `${p.slug}.png`);
  writeFileSync(entrada, html);
  execFileSync(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files", "--force-device-scale-factor=1", "--window-size=1200,630", `--screenshot=${captura}`, pathToFileURL(entrada).href], { stdio: "ignore", timeout: 60000 });
  await sharp(captura).resize(1200, 630).jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(raiz, `public/assets/og/blog-${p.slug}.jpg`));
  console.log("ok", p.slug);
}
