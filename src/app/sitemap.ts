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
 * Sobre `lastModified`: solo lo llevan las entradas del blog, que tienen fecha
 * real. Antes TODAS las páginas se sellaban con la fecha de compilación, así
 * que cada despliegue le decía a Google que las 66 habían cambiado —fuera
 * cierto o no— y Google acaba ignorando una señal que miente. Sin lastmod se
 * fía de su propio rastreo, que es lo correcto cuando no sabemos la fecha.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const u = (path: string) => `${SITE_URL}${path}`;

  const root: MetadataRoute.Sitemap = [
    { url: u("/"), changeFrequency: "weekly", priority: 1 },
    { url: u("/nosotros"), changeFrequency: "monthly", priority: 0.7 },
    { url: u("/casos"), changeFrequency: "monthly", priority: 0.7 },
    { url: u("/auditoria-gratis"), changeFrequency: "monthly", priority: 0.9 },
    { url: u("/privacidad"), changeFrequency: "yearly", priority: 0.2 },
    { url: u("/terminos"), changeFrequency: "yearly", priority: 0.2 },
    { url: u("/libro-de-reclamaciones"), changeFrequency: "yearly", priority: 0.2 },
    { url: u("/contacto"), changeFrequency: "yearly", priority: 0.6 },
    { url: u("/servicios"), changeFrequency: "monthly", priority: 0.9 },
    { url: u("/sectores"), changeFrequency: "monthly", priority: 0.8 },
    { url: u("/blog"), changeFrequency: "weekly", priority: 0.8 },
  ];

  // Las 5 categorías hub son indexables (copy y title propios): se incluyen con
  // prioridad intermedia — por debajo del pilar /servicios y por encima de nada,
  // ya que la canónica de cada keyword específica sigue siendo el servicio hijo.
  const servicios: MetadataRoute.Sitemap = SERVICE_CATEGORIES.flatMap((c) => [
    {
      url: u(`/servicios/${c.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...c.children.map((s) => ({
      url: u(s.href),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]);

  // Páginas de cobertura por ciudad: copy propio por ciudad, indexables.
  const ciudades: MetadataRoute.Sitemap = allCiudadSlugs().map((slug) => ({
    url: u(ciudadHref(slug)),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const sectores: MetadataRoute.Sitemap = SECTORS.map((s) => ({
    url: u(s.href),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogCategorias: MetadataRoute.Sitemap = BLOG_CATEGORIAS.map((c) => ({
    url: u(`/blog/${c.slug}`),
    changeFrequency: "weekly" as const,
    priority: 0.5,
  }));

  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: u(`/blog/${p.categoria}/${p.slug}`),
    lastModified: new Date(`${p.date}T00:00:00`),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const casos: MetadataRoute.Sitemap = CASOS_DETALLE.map((c) => ({
    url: u(`/casos/${c.slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const equipo: MetadataRoute.Sitemap = EQUIPO.map((t) => ({
    url: u(`/equipo/${t.slug}`),
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  return [...root, ...servicios, ...sectores, ...ciudades, ...casos, ...blogCategorias, ...blogPosts, ...equipo];
}
