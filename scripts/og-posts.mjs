// Imagen para compartir (1200×630) de los artículos con foto propia.
// Plantilla común en og-plantilla.mjs (rediseño del 23-nov-2026): la foto de
// la sección va en la tarjeta de la derecha y el título a la izquierda.
//
// Antes cada artículo usaba la OG de su página de servicio: hasta 8 posts
// compartían la misma imagen y gigantografías (4.111 impresiones) salía con la
// genérica aunque tiene foto real (auditoría TEC-13, 21-nov-2026). Este script
// toma la foto de la sección del artículo (campo `foto` en blog.ts), le pone el
// título al lado y la guarda en public/assets/og2/blog-<slug>.jpg. La página del
// artículo la usa en og:image y en el BlogPosting si el archivo existe.
//
// Uso: node scripts/og-posts.mjs [slug...]   (sin slugs: todos los que tienen foto)
// Usa el Chrome local para que el título salga con la fuente de la marca.
import { readFileSync } from "node:fs";
import path from "node:path";
import { generarOg } from "./og-plantilla.mjs";

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

/** Nombre visible de cada categoría (para la etiqueta). */
const CATEGORIAS = Object.fromEntries([...blog.matchAll(/\n    slug: "([^"]+)",\n    nombre: "([^"]+)",/g)].map((m) => [m[1], m[2]]));

const inicio = blog.indexOf("export const BLOG_POSTS");
// Cada artículo empieza con «slug» seguido de «categoria»; no todos van
// precedidos de la misma línea, así que se corta por esa pareja.
const cuerpo = blog.slice(inicio);
const marcas = [...cuerpo.matchAll(/\n    slug: "[^"]+",\n    categoria: /g)].map((m) => m.index);
const bloques = marcas.map((ini, i) => cuerpo.slice(ini + 1, marcas[i + 1] ?? cuerpo.length).replace(/^    slug: /, ""));
const posts = [];
for (const b of bloques) {
  const slug = b.match(/^"([^"]+)"/)?.[1];
  const categoria = b.match(/\n    categoria: "([^"]+)"/)?.[1];
  const foto = b.match(/foto: foto\("([^"]+)", (\d+),/);
  // Fotos propias fuera del portafolio: foto: propia("/assets/...", w, h, ...)
  const propia = b.match(/foto: propia\("(\/assets\/[^"]+)"/);
  const h1 = b.match(/\n    h1: "([^"]+)"/)?.[1];
  if (!slug || !h1 || (!foto && !propia)) continue;
  // Si el artículo tiene de las dos, manda la que aparece primero.
  if (propia && (!foto || propia.index < foto.index)) {
    posts.push({ slug, h1, categoria, foto: propia[1] });
    continue;
  }
  const hash = hashFoto(foto[1], Number(foto[2]));
  if (!hash) throw new Error(`Sin hash para ${foto[1]} ${foto[2]}`);
  posts.push({ slug, h1, categoria, foto: `/assets/portafolio/${foto[1]}-${foto[2]}.${hash}.webp` });
}

const pedidos = process.argv.slice(2);
for (const p of posts) {
  if (pedidos.length && !pedidos.includes(p.slug)) continue;
  await generarOg({
    archivo: `blog-${p.slug}`,
    kicker: `Blog · ${CATEGORIAS[p.categoria] ?? "Suggestion"}`,
    titulo: p.h1,
    foto: p.foto,
    ext: "jpg",
  });
  console.log("ok", p.slug);
}
