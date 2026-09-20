import { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://suggestion.pe';

/**
 * robots.txt
 *
 * `/_next/` NO se bloquea: ahi viven la hoja de estilos y los chunks de JS
 * que Google necesita para renderizar la pagina. Bloquearlo no impide que
 * indexe el texto (el HTML viene del servidor), pero le deja ver el sitio sin
 * maquetar, y eso alimenta sus señales de calidad y de experiencia movil.
 * Estuvo bloqueado desde mayo de 2026 y se quito el 2026-09-20.
 *
 * `/api/` si sigue bloqueado: son endpoints (leads, vCards), no paginas.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
