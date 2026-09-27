import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SERVICE_CATEGORIES, SECTORS } from "@/content/navegacion";
import { BLOG_CATEGORIAS, BLOG_POSTS } from "@/content/blog";
import { CASOS_DETALLE } from "@/content/casos";
import { EQUIPO } from "@/content/equipo";
import { allCiudadSlugs, ciudadHref } from "@/content/ciudades";

/**
 * Sitemap dinámico: raíz + servicios (pilar/5 categorías/16 hijas) + sectores
 * (hub + los que haya en SECTORS) + blog (pilar/categorías/entradas). Las
 * categorías hub son indexables (copy único); si alguna se marca noindex,
 * excluirla aquí. /gracias queda fuera a propósito (noindex, post-conversión).
 *
 * Sobre `lastModified`: NUNCA la fecha de compilación. Antes se sellaban así
 * las 66 páginas, de modo que cada despliegue le decía a Google que todas
 * habían cambiado —fuera cierto o no—, y una señal que miente se acaba
 * ignorando.
 *
 * `CAMBIO_GLOBAL` es otra cosa: la fecha de un cambio real que SÍ tocó las 92
 * páginas. El 2026-09-27 cambió el teléfono de la empresa, que sale en el pie
 * de todas. Por eso es legítimo —y útil— pedirle a Google que las revisite.
 *
 * ⚠️ Solo se toca esta constante cuando vuelva a haber un cambio que afecte
 * de verdad a TODO el sitio (el teléfono, la razón social, el dominio). Si el
 * cambio es de una página, su fecha va en esa página, no aquí.
 */
const CAMBIO_GLOBAL = "2026-09-27";
const GLOBAL = new Date(`${CAMBIO_GLOBAL}T12:00:00Z`);
export default function sitemap(): MetadataRoute.Sitemap {
  const u = (path: string) => `${SITE_URL}${path}`;

  const root: MetadataRoute.Sitemap = [
    { url: u("/"), lastModified: GLOBAL, changeFrequency: "weekly", priority: 1 },
    { url: u("/nosotros"), lastModified: GLOBAL, changeFrequency: "monthly", priority: 0.7 },
    { url: u("/casos"), lastModified: GLOBAL, changeFrequency: "monthly", priority: 0.7 },
    { url: u("/auditoria-gratis"), lastModified: GLOBAL, changeFrequency: "monthly", priority: 0.9 },
    { url: u("/privacidad"), lastModified: GLOBAL, changeFrequency: "yearly", priority: 0.2 },
    { url: u("/terminos"), lastModified: GLOBAL, changeFrequency: "yearly", priority: 0.2 },
    { url: u("/libro-de-reclamaciones"), lastModified: GLOBAL, changeFrequency: "yearly", priority: 0.2 },
    { url: u("/contacto"), lastModified: GLOBAL, changeFrequency: "yearly", priority: 0.6 },
    { url: u("/servicios"), lastModified: GLOBAL, changeFrequency: "monthly", priority: 0.9 },
    { url: u("/sectores"), lastModified: GLOBAL, changeFrequency: "monthly", priority: 0.8 },
    { url: u("/blog"), lastModified: GLOBAL, changeFrequency: "weekly", priority: 0.8 },
  ];

  // Las 5 categorías hub son indexables (copy y title propios): se incluyen con
  // prioridad intermedia — por debajo del pilar /servicios y por encima de nada,
  // ya que la canónica de cada keyword específica sigue siendo el servicio hijo.
  const servicios: MetadataRoute.Sitemap = SERVICE_CATEGORIES.flatMap((c) => [
    {
      url: u(`/servicios/${c.slug}`),
      lastModified: GLOBAL,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...c.children.map((s) => ({
      url: u(s.href),
      lastModified: GLOBAL,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]);

  // Páginas de cobertura por ciudad: copy propio por ciudad, indexables.
  const ciudades: MetadataRoute.Sitemap = allCiudadSlugs().map((slug) => ({
    url: u(ciudadHref(slug)),
    lastModified: GLOBAL,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const sectores: MetadataRoute.Sitemap = SECTORS.map((s) => ({
    url: u(s.href),
    lastModified: GLOBAL,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogCategorias: MetadataRoute.Sitemap = BLOG_CATEGORIAS.map((c) => ({
    url: u(`/blog/${c.slug}`),
    lastModified: GLOBAL,
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: u(`/blog/${p.categoria}/${p.slug}`),
    // La fecha del post si es posterior; si no, la del cambio global.
    lastModified: new Date(`${p.date}T00:00:00`) > GLOBAL ? new Date(`${p.date}T00:00:00`) : GLOBAL,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const casos: MetadataRoute.Sitemap = CASOS_DETALLE.map((c) => ({
    url: u(`/casos/${c.slug}`),
    lastModified: GLOBAL,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const equipo: MetadataRoute.Sitemap = EQUIPO.map((t) => ({
    url: u(`/equipo/${t.slug}`),
    lastModified: GLOBAL,
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  return [...root, ...servicios, ...sectores, ...ciudades, ...casos, ...blogCategorias, ...blogPosts, ...equipo];
}
