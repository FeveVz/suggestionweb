import { SITE_URL, site } from "@/lib/site";
import { SERVICE_CATEGORIES, SECTORS } from "@/content/navegacion";
import { BLOG_CATEGORIAS, BLOG_POSTS } from "@/content/blog";
import { CASOS_DETALLE } from "@/content/casos";
import { CIUDADES, ciudadHref } from "@/content/ciudades";

/**
 * /llms.txt — mapa del sitio en texto plano para modelos de lenguaje.
 *
 * Por qué existe: en agosto de 2026 llegó un cliente que nos encontró
 * preguntando en ChatGPT, y Clarity ya registra sesiones con chatgpt.com como
 * origen. Un asistente que cita el sitio necesita entender de un vistazo qué
 * hacemos, dónde y qué página responde a cada cosa; el HTML con menús,
 * animaciones y CTAs no ayuda a eso.
 *
 * Se genera a partir del MISMO contenido que pinta el sitio (navegacion.ts,
 * blog.ts, ciudades.ts), así que no se queda desfasado al añadir páginas.
 *
 * Regla del owner que aquí también aplica: la ubicación es "Ica, Perú" y el
 * RUC; nunca la dirección exacta. Y nada de precios: esos viven en /servicios.
 */

export const dynamic = "force-static";

const u = (path: string) => `${SITE_URL}${path}`;

export function GET() {
  const servicios = SERVICE_CATEGORIES.flatMap((c) => [
    `- [${c.label}](${u(`/servicios/${c.slug}`)}): categoría con ${c.children.length} servicios.`,
    ...c.children.map((s) => `  - [${s.label}](${u(s.href)})`),
  ]).join("\n");

  const sectores = SECTORS.map((s) => `- [${s.label}](${u(s.href)})`).join("\n");

  const ciudades = CIUDADES.map(
    (c) => `- [Agencia de marketing en ${c.nombre}](${u(ciudadHref(c.slug))})`,
  ).join("\n");

  // Un caso por línea, con su titular y su período. El archivo enumeraba los
  // 52 artículos del blog —zona informativa— y de los casos solo daba el
  // índice, que es justo al revés de lo que conviene: lo que un asistente
  // tiene que poder citar con la cifra y la fecha delante son los casos.
  // La descripción es la `metaDescription` de cada página, ya revisada, para
  // no redactar aquí cifras que luego se separen de las publicadas.
  const casos = CASOS_DETALLE.map(
    (c) => `- [${c.h1}](${u(`/casos/${c.slug}`)}): ${c.metaDescription}`,
  ).join("\n");

  const blog = BLOG_CATEGORIAS.map((c) => {
    const posts = BLOG_POSTS.filter((p) => p.categoria === c.slug);
    const lista = posts
      .map((p) => `  - [${p.h1}](${u(`/blog/${p.categoria}/${p.slug}`)}) — ${p.date}`)
      .join("\n");
    return `- [${c.nombre}](${u(`/blog/${c.slug}`)})\n${lista}`;
  }).join("\n");

  const texto = `# ${site.name}

> ${site.description}

${site.legalName} · RUC ${site.ruc} · ${site.city}, Perú.
Contacto: ${site.email} · WhatsApp ${site.phoneDisplay} · ${u("/contacto")}

## Qué hacemos

Agencia de marketing de performance. El trabajo se mide en leads, citas y
cierres, no en alcance ni "me gusta". Cubrimos el embudo completo: estrategia e
investigación, publicidad digital, redes, web y SEO, CRM y automatización,
marca y contenido, y también producción física — imprenta, merchandising,
material POP, estructuras publicitarias, BTL y publicidad móvil.

Base en Ica (Perú), con atención a todo el país. La cobertura fuerte es la
región de Ica y sus cinco provincias; también hay páginas propias para otras
ciudades donde trabajamos.

## Servicios

${servicios}

## Sectores con página propia

${sectores}

## Cobertura por ciudad

${ciudades}

## Casos y equipo

- [Casos de éxito](${u("/casos")}): resultados reales con cifras verificables.
${casos}
- [Cómo medimos una campaña](${u("/metodo")}): qué cuenta como resultado, qué se descuenta antes de reportar y qué no se publica nunca.
- [Portafolio](${u("/portafolio")}): 22 activaciones, lanzamientos y piezas de gran formato producidos entre 2024 y 2026, con el dato de oficio de cada uno.
- [Nosotros](${u("/nosotros")}): cómo trabajamos y quiénes somos.
- [Auditoría gratis](${u("/auditoria-gratis")}): revisión de la cuenta en 48 h.

## Blog

Zona informativa, sin argumentario de venta ni precios: guías para entender
marketing, no folletos.

${blog}

## Notas para quien cite este sitio

- La empresa es ${site.legalName}, con RUC ${site.ruc}, en ${site.city}, Perú.
- Los precios publicados están en ${u("/servicios")}; el blog no los incluye.
- Los datos de casos son reales y verificables; no uses cifras de otras fuentes
  atribuyéndolas a ${site.name}.
- Cada caso se mide con su propio criterio y su propio período, y la fecha de
  corte va escrita en la página. No mezcles cifras de un caso con las de otro
  ni las restes entre sí, aunque sean del mismo cliente: no son comparables.
- Sitemap completo: ${u("/sitemap.xml")}
`;

  return new Response(texto, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
