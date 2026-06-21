import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SERVICE_CATEGORIES, SECTORS } from "@/content/navegacion";
import { BLOG_CATEGORIAS, BLOG_POSTS } from "@/content/blog";

/**
 * Sitemap dinámico: raíz + servicios (pilar/categorías/16) + sectores
 * (hub/5) + blog (pilar/8 categorías/24 entradas). Las categorías hub son
 * indexables (copy único); si alguna se marca noindex, excluirla aquí.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (path: string) => `${SITE_URL}${path}`;

  const root: MetadataRoute.Sitemap = [
    { url: u("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: u("/nosotros"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: u("/casos"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: u("/contacto"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: u("/servicios"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: u("/sectores"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: u("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const categorias: MetadataRoute.Sitemap = SERVICE_CATEGORIES.map((c) => ({
    url: u(`/servicios/${c.slug}`),
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const servicios: MetadataRoute.Sitemap = SERVICE_CATEGORIES.flatMap((c) =>
    c.children.map((s) => ({
      url: u(s.href),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

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

  return [...root, ...categorias, ...servicios, ...sectores, ...blogCategorias, ...blogPosts];
}
