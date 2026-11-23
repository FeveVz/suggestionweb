// Imágenes para compartir (1200×630) de las páginas del sitio: lo que se ve al
// pegar el enlace en WhatsApp. Plantilla en og-plantilla.mjs (rediseño del
// 23-nov-2026, igual a la web de hoy).
//
// Recorre el sitemap del sitio levantado en local y, de cada página, toma lo
// que ya muestra: el título (h1), la etiqueta con punto, la portada (la imagen
// que la página precarga) y el botón de la cabecera. Así la previsualización
// coincide con lo que la persona ve al abrir el enlace, y una página nueva
// sale sola.
//
// Uso (con el build levantado, p. ej. `npx next start -p 3101`):
//   node scripts/og-paginas.mjs [prefijo...]      (OG_HOST=http://localhost:3101 por defecto)
// Los artículos del blog con foto propia los genera og-posts.mjs.
//
// En los casos no va ninguna cifra a propósito: fuera de la página, sin su
// fecha de corte, incumplirían docs-fuente/21. Por eso llevan título propio.
import { readdirSync, copyFileSync } from "node:fs";
import path from "node:path";
import { generarOg, DIR_OG } from "./og-plantilla.mjs";

const BASE = process.env.OG_HOST || "http://localhost:3101";
const raiz = process.cwd();
const portafolio = readdirSync(path.join(raiz, "public/assets/portafolio"));
const delPortafolio = (slug, n) => {
  const f = portafolio.find((x) => x.startsWith(`${slug}-${n}.`) && !x.includes("-440"));
  return f ? `/assets/portafolio/${f}` : undefined;
};

/** Títulos que no salen del h1: casos (sin cifras) y fichas del equipo. */
const TITULO = {
  "/casos/ceinys-septiembre-2026": ["Caso Ceinys", "Caso Ceinys: septiembre de 2026"],
  "/casos/ceinys-agosto-2026": ["Caso Ceinys", "Caso Ceinys: agosto de 2026"],
  "/casos/inmobiliaria-ceinys": ["Caso inmobiliario", "Caso: Inmobiliaria Ceinys"],
  "/casos/granjas-bonanza": ["Caso de marca de consumo", "Caso: Granjas Bonanza"],
  "/casos/hoteles-senor-de-luren": ["Caso de turismo", "Caso: Hoteles Señor de Luren"],
  "/casos/autoniza-eventos": ["Caso automotriz", "Caso: eventos de Autoniza"],
  "/casos": ["Casos de éxito", "Resultados medidos en ventas"],
  // El h1 del inicio trae también la bajada; aquí va solo la frase.
  "/": ["Marketing de performance · Ica, Perú", "Convertimos atención en ventas."],
};

/** Portadas para páginas que no tienen foto en la cabecera. Ceinys va sin foto (reglas del caso). */
const FOTO = {
  "/casos/granjas-bonanza": "/assets/casos/bonanza-operario-bioseguridad.webp",
  "/casos/autoniza-eventos": delPortafolio("relanzamiento-mitsubishi-autoniza", 18),
  "/portafolio": delPortafolio("aniversario-paracas-gwm", 1),
  "/": delPortafolio("relanzamiento-mitsubishi-autoniza", 4),
  // La primera imagen del listado es una pieza de Ceinys con precio: no puede ir (reglas del caso).
  "/casos": delPortafolio("relanzamiento-mitsubishi-autoniza", 18),
};

const texto = (s) =>
  s.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/\s+/g, " ").trim();

const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const rutas = [...new Set([
  ...[...sitemap.matchAll(/<loc>https:\/\/suggestion\.pe([^<]*)<\/loc>/g)].map((m) => m[1] || "/"),
  // Fichas del equipo con noindex (no van en el sitemap) pero sí se comparten: son el destino del QR de las tarjetas.
  ...["carolina", "cristofer", "diego", "yurayma", "jose-carlos", "nicolas"].map((s) => `/equipo/${s}`),
])].filter((r) => !/^\/blog\/[^/]+\/[^/]+$/.test(r)); // artículos: og-posts.mjs

const prefijos = process.argv.slice(2);
let hechas = 0;
// Varias páginas pueden compartir imagen (/contacto usa la de /consultoria-cero): manda la primera.
const vistas = new Set();
for (const ruta of rutas) {
  const html = await (await fetch(`${BASE}${ruta}?interno=1`)).text();
  const og = html.match(/property="og:image" content="https:\/\/suggestion\.pe(\/[^"]+)"/)?.[1] ?? "";
  // El nombre del archivo es el que ya usa la página; la portada del sitio es /og-image.png.
  let archivo = og.match(/\/assets\/og2?\/([^/.]+)\.(png|jpg)$/)?.[1];
  if (!archivo && ruta === "/") archivo = "inicio";
  if (!archivo) continue; // páginas legales: usan la imagen general
  if (vistas.has(archivo)) continue;
  vistas.add(archivo);
  if (prefijos.length && !prefijos.some((p) => archivo.startsWith(p))) continue;

  const h1 = texto(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "");
  const kicker = texto(html.match(/letter-spacing:var\(--tracking-label\);color:var\(--text-muted\)"><span aria-hidden="true"[^>]*><\/span>([^<]+)<\/span>/)?.[1] ?? "");
  const precarga = html.match(/<link rel="preload" as="image" (?:imageSrcSet="\/_next\/image\?url=([^&"]+)|href="(\/assets\/(?!logos\/)[^"]+)")/);
  const portada = FOTO[ruta] ?? (precarga ? decodeURIComponent(precarga[1] ?? precarga[2]) : undefined);
  const cotiza = />Cotiza por WhatsApp</.test(html);
  const [kickerFijo, tituloFijo] = TITULO[ruta] ?? [];

  await generarOg({
    archivo,
    kicker: kickerFijo ?? (kicker || "Suggestion · Agencia de marketing"),
    titulo: tituloFijo ?? (h1 || "Suggestion"),
    foto: ruta.startsWith("/casos/ceinys") || ruta === "/casos/inmobiliaria-ceinys" ? undefined : portada,
    cta: cotiza ? "Cotiza por WhatsApp" : "Consultoría cero, gratis",
  });
  if (archivo === "inicio") copyFileSync(path.join(raiz, DIR_OG, "inicio.png"), path.join(raiz, "public/og-image.png"));
  hechas++;
  console.log("ok", archivo, portada ? "· con portada" : "");
}
console.log(`${hechas} imágenes en ${DIR_OG}`);
