import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SERVICE_CATEGORIES, SECTORS } from "@/content/navegacion";
import { BLOG_CATEGORIAS, BLOG_POSTS } from "@/content/blog";
import { CASOS_DETALLE } from "@/content/casos";
import { EQUIPO } from "@/content/equipo";

/**
 * Sitemap dinámico: raíz + servicios (pilar/5 categorías/16 hijas) + sectores
 * (hub + los que haya en SECTORS) + blog (pilar/categorías/entradas). Las
 * categorías hub son indexables (copy único); si alguna se marca noindex,
 * excluirla aquí. /gracias queda fuera a propósito (noindex, post-conversión).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (path: string) => `${SITE_URL}${path}`;

  const root: MetadataRoute.Sitemap = [
    { url: u("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: u("/nosotros"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: u("/casos"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: u("/auditoria-gratis"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: u("/privacidad"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: u("/terminos"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: u("/libro-de-reclamaciones"), lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: u("/contacto"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: u("/servicios"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: u("/sectores"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: u("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  // Las 5 categorías hub son indexables (copy y title propios): se incluyen con
  // prioridad intermedia — por debajo del pilar /servicios y por encima de nada,
  // ya que la canónica de cada keyword específica sigue siendo el servicio hijo.
  const servicios: MetadataRoute.Sitemap = SERVICE_CATEGORIES.flatMap((c) => [
    {
      url: u(`/servicios/${c.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    ...c.children.map((s) => ({
      url: u(s.href),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ]);

  const sectores: MetadataRoute.Sitemap = SECTORS.map((s) => ({
    url: u(s.href),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogCategorias: MetadataRoute.Sitemap = BLOG_CATEGORIAS.map((c) => ({
    url: u(`/blog/${c.slug}`),
    lastModified: now,
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
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const equipo: MetadataRoute.Sitemap = EQUIPO.map((t) => ({
    url: u(`/equipo/${t.slug}`),
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  return [...root, ...servicios, ...sectores, ...casos, ...blogCategorias, ...blogPosts, ...equipo];
}
