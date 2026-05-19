import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://suggestion.pe';

const servicios = [
  'marketing-digital',
  'marketing-redes-sociales',
  'publicidad-digital',
  'seo-posicionamiento',
  'branding-diseno',
  'desarrollo-web',
  'consultoria-marketing',
  'crm-automatizacion',
  'produccion-audiovisual',
  'investigacion-mercado',
  'merchandising',
  'imprenta-corporativa',
  'estructuras-publicitarias',
  'publicidad-movil',
  'btl-activaciones',
  'material-pop',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/nosotros`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/portafolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
  ];

  const servicioPages: MetadataRoute.Sitemap = servicios.map((slug) => ({
    url: `${siteUrl}/servicios/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...staticPages, ...servicioPages];
}
