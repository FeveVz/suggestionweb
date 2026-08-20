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
 * Cómo usarlo: pasa el informe a Claude y pídele que redacte lo que falte.
 * Nunca metas la palabra a la fuerza: si no cabe en una frase con sentido
 * propio, es que esa página no es la que debe cubrir ese término.
 */

const HOST = "https://suggestion.pe";
const FLACA = 600; // por debajo de esto, la página pide contenido

/** Términos que el sitio DEBERÍA cubrir, y en qué páginas tiene sentido. */
const OBJETIVOS = [
  // Zonas: la región Ica no es solo la ciudad de Ica.
  { termino: "Parcona", donde: /\/(servicios|marketing)-?/, grupo: "zonas" },
  { termino: "Subtanjalla", donde: /\/(servicios|marketing)-?/, grupo: "zonas" },
  { termino: "La Tinguiña", donde: /\/(servicios|marketing)-?/, grupo: "zonas" },
  { termino: "Los Aquijes", donde: /\/(servicios|marketing)-?/, grupo: "zonas" },
  { termino: "Salas Guadalupe", donde: /\/(servicios|marketing)-?/, grupo: "zonas" },
  { termino: "Ocucaje", donde: /marketing-(pisco-vino|turismo|agroexportacion)/, grupo: "zonas" },
  { termino: "Palpa", donde: /\/(servicios|marketing)-?/, grupo: "zonas" },
  { termino: "Marcona", donde: /marketing-(agroexportacion|automotriz)|servicios\/(btl|publicidad-movil)/, grupo: "zonas" },
  { termino: "Paracas", donde: /marketing-turismo|agencia-de-marketing-en-pisco/, grupo: "zonas" },
  { termino: "Huacachina", donde: /marketing-turismo/, grupo: "zonas" },
  // Búsquedas comerciales confirmadas en Search Console.
  { termino: "gigantograf", donde: /servicios\/(imprenta|estructuras-publicitarias)/, grupo: "comercial" },
  { termino: "souvenir", donde: /servicios\/merchandising/, grupo: "comercial" },
  { termino: "productora", donde: /servicios\/produccion-audiovisual/, grupo: "comercial" },
  { termino: "postproducc", donde: /servicios\/produccion-audiovisual/, grupo: "comercial" },
  { termino: "activaci", donde: /servicios\/btl/, grupo: "comercial" },
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
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  const paginas = [];
  for (let i = 0; i < urls.length; i += 10) {
    const lote = await Promise.all(
      urls.slice(i, i + 10).map(async (u) => {
        try {
          const t = texto(await (await fetch(u)).text());
          return { ruta: u.replace(HOST, "") || "/", texto: t.toLowerCase(), palabras: t.split(" ").filter((w) => w.length > 1).length };
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
