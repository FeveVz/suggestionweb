import { SITE_URL, site } from "@/lib/site";
import type { Faq, Seccion } from "@/content/types";
import { soloServicios } from "@/content/servicios";
import { SECTORES } from "@/content/sectores";
import { CIUDADES, ciudadHref } from "@/content/ciudades";
import { SERVICIOS_CIUDAD } from "@/content/servicios-ciudad";
import { CASOS_DETALLE } from "@/content/casos";
import { BLOG_POSTS } from "@/content/blog";

/**
 * /llms-full.txt — el texto completo del sitio para modelos de lenguaje
 * (auditoría AEO-13), complemento de /llms.txt, que es el índice.
 *
 * Mismo filtro de reglas que /llms.txt: sale del MISMO contenido que pinta el
 * sitio (servicios, sectores, ciudades, casos y blog), así que hereda sus
 * salvaguardas (casos de Ceinys con sus fórmulas y fechas de corte, ubicación
 * solo «Ica, Perú» y el RUC). Y como /llms.txt, sin las tarifas de la agencia:
 * en los servicios se omite todo texto con un importe en soles (los planes
 * viven en cada página de servicio). Los rangos del mercado del blog sí van,
 * con su fuente y su fecha, porque no son precios de Suggestion.
 */
export const dynamic = "force-static";

const u = (path: string) => `${SITE_URL}${path}`;
const CON_PRECIO = /S\/\s?\d/;

function secciones(lista: Seccion[] | undefined, sinPrecios = false): string {
  if (!lista?.length) return "";
  const ok = (t?: string) => (t && !(sinPrecios && CON_PRECIO.test(t)) ? t : "");
  return lista
    .map((s) => {
      const partes = [`### ${s.h2}`];
      if (ok(s.parrafo)) partes.push(s.parrafo!);
      for (const sub of s.sub ?? []) if (ok(sub.texto)) partes.push(`**${sub.h3}.** ${sub.texto}`);
      for (const b of s.bullets ?? []) if (ok(b.texto)) partes.push(`- ${b.titulo ? `**${b.titulo}.** ` : ""}${b.texto}`);
      for (const p of s.pasos ?? []) if (ok(p.texto)) partes.push(`- **${p.titulo}.** ${p.texto}`);
      if (s.tabla && !(sinPrecios && s.tabla.filas.some((f) => f.some((c) => CON_PRECIO.test(c))))) {
        partes.push(`| ${s.tabla.cabeceras.join(" | ")} |`, `| ${s.tabla.cabeceras.map(() => "---").join(" | ")} |`);
        for (const f of s.tabla.filas) partes.push(`| ${f.join(" | ")} |`);
        if (s.tabla.nota) partes.push(s.tabla.nota);
      }
      if (s.dato && ok(s.dato.texto)) partes.push(`${s.dato.cifra} ${s.dato.texto}${s.dato.fuente ? ` (Fuente: ${s.dato.fuente})` : ""}`);
      if (s.nota && ok(s.nota.texto)) partes.push(`${s.nota.titulo ? `${s.nota.titulo}: ` : ""}${s.nota.texto}`);
      return partes.join("\n\n");
    })
    .join("\n\n");
}

function preguntas(faq: Faq[] | undefined, sinPrecios = false): string {
  const lista = (faq ?? []).filter((f) => !(sinPrecios && CON_PRECIO.test(f.a)));
  if (!lista.length) return "";
  return "### Preguntas frecuentes\n\n" + lista.map((f) => `**${f.q}**\n${f.a}`).join("\n\n");
}

const bloque = (titulo: string, url: string, ...partes: string[]) =>
  [`## ${titulo}`, `URL: ${url}`, ...partes.filter(Boolean)].join("\n\n");

export function GET() {
  const servicios = soloServicios()
    .filter((s) => !s.noindex)
    .map((s) =>
      bloque(s.nombre, u(`/servicios/${s.slug}`), CON_PRECIO.test(s.hero) ? "" : s.hero, secciones(s.secciones, true), preguntas(s.faq, true)),
    );
  const sectores = SECTORES.map((s) => bloque(s.nombre, u(`/${s.slug}`), s.hero, secciones(s.secciones), preguntas(s.faq)));
  const ciudades = CIUDADES.map((c) =>
    bloque(c.h1, u(ciudadHref(c.slug)), c.hero, c.cobertura, secciones(c.secciones), preguntas(c.faq)),
  );
  const produccionCiudad = SERVICIOS_CIUDAD.map((p) =>
    bloque(p.h1, u(`/${p.slug}`), p.hero, p.enCorto.map((x) => `- ${x}`).join("\n"), secciones(p.secciones), preguntas(p.faq)),
  );
  const casos = CASOS_DETALLE.map((c) =>
    bloque(
      c.h1,
      u(`/casos/${c.slug}`),
      c.resumen,
      c.stats.map((x) => `- ${x.valor}: ${x.label}`).join("\n"),
      `### El reto\n\n${c.reto}`,
      "### Qué hicimos\n\n" + c.solucion.map((x) => `- **${x.titulo}.** ${x.texto}`).join("\n"),
      secciones(c.secciones),
      preguntas(c.faq),
    ),
  );
  const blog = BLOG_POSTS.map((p) =>
    bloque(p.h1, u(`/blog/${p.categoria}/${p.slug}`), `Actualizado: ${p.actualizado ?? p.date}`, p.excerpt, secciones(p.secciones), preguntas(p.faq)),
  );

  const texto = `# ${site.name} — texto completo

> ${site.legalName} · RUC ${site.ruc} · Ica, Perú. Agencia de marketing de performance: publicidad digital, web, CRM, branding y producción (imprenta, BTL y activaciones) para empresas de Ica y de todo el Perú. Índice del sitio: ${u("/llms.txt")}. Los planes y precios de cada servicio están en su página.

# Servicios

${servicios.join("\n\n")}

# Sectores

${sectores.join("\n\n")}

# Ciudades

${ciudades.join("\n\n")}

# Producción con envío a otras ciudades

${produccionCiudad.join("\n\n")}

# Casos

${casos.join("\n\n")}

# Blog

${blog.join("\n\n")}
`;
  return new Response(texto, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
