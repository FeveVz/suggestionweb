/**
 * REVISIÓN SEMANAL — enriquecer, no solo publicar.
 *
 * Rutina de una vez por semana: mide el sitio en vivo y saca dos cosas que a
 * ojo no se ven —qué páginas se quedaron flacas y qué términos que deberíamos
 * cubrir NO aparecen en la página que les toca—.
 *
 * El porqué: en agosto descubrimos que Google nos mostraba en posición 45-82
 * por palabras que literalmente no estaban escritas en la página ("productora",
 * "souvenirs corporativos"). Al añadirlas, ese grupo de búsquedas dobló sus
 * impresiones en once días. Esto automatiza esa comprobación.
 *
 *   npm run revision            → informe completo
 *   npm run revision -- zonas   → solo el hueco de zonas geográficas
 *
 * También avisa de lo que rompe el <head> sin que se note (auditoría TEC-06 y
 * TEC-16, 21-nov-2026): más de un FAQPage o BreadcrumbList en una página, y
 * titles de más de 60 caracteres o descriptions de más de 160.
 *   REVISION_HOST=http://localhost:3100 npm run revision → contra el servidor local
 *
 * Cómo usarlo: pasa el informe a Claude y pídele que redacte lo que falte.
 * Nunca metas la palabra a la fuerza: si no cabe en una frase con sentido
 * propio, es que esa página no es la que debe cubrir ese término.
 */

const HOST = process.env.REVISION_HOST || "https://suggestion.pe";
const SITIO = "https://suggestion.pe"; // el sitemap siempre lista URL de producción
const FLACA = 600; // por debajo de esto, la página pide contenido

/** Términos que el sitio DEBERÍA cubrir, y en qué páginas tiene sentido. */
const OBJETIVOS = [
  // Zonas: la región Ica no es solo la ciudad de Ica. Desde el 16-nov-2026 cada
  // término apunta solo a las páginas donde es verdad: los distritos van en los
  // servicios que entregan en ellos (imprenta y gigantografías comparten taller
  // y reparto). Antes apuntaban a los 40 servicios y sectores, incluidos los
  // digitales, que el owner decidió enfocar a nivel nacional (4-oct-2026), y el
  // informe pedía meter "Parcona" en páginas de SEO o de CRM.
  // Las rutas van ancladas (^…$): sin ancla, /marketing-automotriz también
  // atrapaba /blog/automotriz/marketing-automotriz-ejemplos.
  { termino: "Parcona", donde: /^\/servicios\/(imprenta|gigantografias)$/, grupo: "zonas" },
  { termino: "Subtanjalla", donde: /^\/(servicios\/(imprenta|gigantografias)|marketing-pisco-vino)$/, grupo: "zonas" },
  { termino: "La Tinguiña", donde: /^\/servicios\/(imprenta|gigantografias)$/, grupo: "zonas" },
  { termino: "Los Aquijes", donde: /^\/servicios\/(imprenta|gigantografias)$/, grupo: "zonas" },
  { termino: "Salas Guadalupe", donde: /^\/(servicios\/(imprenta|gigantografias)|marketing-agroexportacion)$/, grupo: "zonas" },
  { termino: "Ocucaje", donde: /^\/marketing-(pisco-vino|turismo)$/, grupo: "zonas" },
  { termino: "Palpa", donde: /^\/(servicios\/(imprenta|produccion-audiovisual)|marketing-turismo)$/, grupo: "zonas" },
  { termino: "Marcona", donde: /^\/marketing-(agroexportacion|automotriz)$/, grupo: "zonas" },
  { termino: "Paracas", donde: /^\/(marketing-turismo|agencia-de-marketing-en-pisco)$/, grupo: "zonas" },
  { termino: "Huacachina", donde: /^\/marketing-turismo$/, grupo: "zonas" },
  // Búsquedas comerciales confirmadas en Search Console.
  { termino: "gigantograf", donde: /^\/servicios\/(imprenta|estructuras-publicitarias)$/, grupo: "comercial" },
  { termino: "souvenir", donde: /^\/servicios\/merchandising$/, grupo: "comercial" },
  { termino: "productora", donde: /^\/servicios\/produccion-audiovisual$/, grupo: "comercial" },
  { termino: "postproducc", donde: /^\/servicios\/produccion-audiovisual$/, grupo: "comercial" },
  { termino: "activaci", donde: /^\/servicios\/btl$/, grupo: "comercial" },
];

const soloZonas = process.argv.slice(2).includes("zonas");

const texto = (html) => {
  const m = html.replace(/<!-- -->/g, "").match(/<main\b[^>]*>([\s\S]*?)<\/main>/);
  return (m ? m[1] : "")
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-zA-Z#0-9]+;/g, " ")
    .replace(/\s+/g, " ");
};

const main = async () => {
  const xml = await (await fetch(`${HOST}/sitemap.xml`)).text();
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(SITIO, HOST));

  const paginas = [];
  for (let i = 0; i < urls.length; i += 10) {
    const lote = await Promise.all(
      urls.slice(i, i + 10).map(async (u) => {
        try {
          const html = await (await fetch(u)).text();
          const t = texto(html);
          const decod = (s) => (s || "").replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').trim();
          return {
            ruta: u.replace(HOST, "") || "/",
            texto: t.toLowerCase(),
            palabras: t.split(" ").filter((w) => w.length > 1).length,
            faq: (html.match(/"@type":"FAQPage"/g) || []).length,
            miga: (html.match(/"@type":"BreadcrumbList"/g) || []).length,
            title: decod(html.match(/<title>([^<]*)<\/title>/)?.[1]),
            desc: decod(html.match(/<meta name="description" content="([^"]*)"/)?.[1]),
          };
        } catch { return null; }
      })
    );
    paginas.push(...lote.filter(Boolean));
  }

  if (!soloZonas) {
    const flacas = paginas.filter((p) => p.palabras < FLACA && !/^\/(contacto|privacidad|terminos|libro-de-reclamaciones|casos|sectores|blog)$/.test(p.ruta));
    console.log(`\n== PÁGINAS FLACAS (menos de ${FLACA} palabras): ${flacas.length} ==`);
    flacas.sort((a, b) => a.palabras - b.palabras).forEach((p) => console.log(`  ${String(p.palabras).padStart(5)}  ${p.ruta}`));
  }

  if (!soloZonas) {
    const dobles = paginas.filter((p) => p.faq > 1 || p.miga > 1);
    console.log(`\n== SCHEMA DUPLICADO (más de un FAQPage o BreadcrumbList): ${dobles.length} ==`);
    dobles.forEach((p) => console.log(`  ${p.ruta}  FAQPage ${p.faq} · BreadcrumbList ${p.miga}`));
    const largos = paginas.filter((p) => p.title.length > 60 || p.desc.length > 160);
    console.log(`\n== TITLE > 60 O DESCRIPTION > 160 CARACTERES: ${largos.length} ==`);
    largos.forEach((p) => console.log(`  ${p.ruta}  title ${p.title.length} · description ${p.desc.length}`));
  }

  console.log(`\n== TÉRMINOS QUE FALTAN DONDE DEBERÍAN ESTAR ==`);
  let huecos = 0;
  for (const o of OBJETIVOS) {
    if (soloZonas && o.grupo !== "zonas") continue;
    const candidatas = paginas.filter((p) => o.donde.test(p.ruta));
    const sin = candidatas.filter((p) => !p.texto.includes(o.termino.toLowerCase()));
    const con = candidatas.length - sin.length;
    if (sin.length) {
      huecos += sin.length;
      console.log(`\n  [${o.grupo}] "${o.termino}" — presente en ${con} de ${candidatas.length}`);
      sin.slice(0, 8).forEach((p) => console.log(`        falta en ${p.ruta}`));
      if (sin.length > 8) console.log(`        …y ${sin.length - 8} más`);
    }
  }
  if (!huecos) console.log("  Sin huecos. Toca buscar términos nuevos en Search Console.");

  console.log(`\n== RESUMEN ==`);
  console.log(`  ${paginas.length} páginas medidas · ${Math.round(paginas.reduce((s, p) => s + p.palabras, 0) / paginas.length)} palabras de media`);
  console.log(`  Siguiente paso: redactar lo que falte y luego 'npm run indexnow' para avisar a Bing.\n`);
};

main().catch((e) => { console.error("Falló la revisión:", e.message); process.exit(1); });
