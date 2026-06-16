import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { SERVICE_CATEGORIES, SECTORS } from "@/content/navegacion";

/**
 * Sitemap dinámico. Se ampliará con las entradas de blog y la exclusión de
 * categorías noindex en la fase de SEO técnico (doc 16 §10, paso 8).
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

  return [...root, ...categorias, ...servicios, ...sectores];
}
