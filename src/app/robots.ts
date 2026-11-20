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
/*
 * Robots de IA, escritos uno por uno (auditoría AEO-13, 20-nov-2026). El
 * permiso es el mismo que da '*'; nombrarlos evita que un cambio futuro los
 * bloquee sin que nadie lo note.
 * - Buscadores y asistentes que citan con enlace: lo que nos trae visitas.
 * - Entrenamiento de modelos: permitido a propósito. Un modelo que ya conoce a
 *   Suggestion puede nombrarla sin buscar en la web.
 */
const BUSCADORES_IA = [
  'Googlebot', 'Bingbot', 'OAI-SearchBot', 'ChatGPT-User', 'Claude-SearchBot',
  'Claude-User', 'PerplexityBot', 'Perplexity-User', 'DuckAssistBot', 'Applebot',
];
const ENTRENAMIENTO_IA = [
  'GPTBot', 'ClaudeBot', 'anthropic-ai', 'Google-Extended', 'Applebot-Extended',
  'CCBot', 'Amazonbot', 'meta-externalagent',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: BUSCADORES_IA, allow: '/', disallow: ['/api/'] },
      { userAgent: ENTRENAMIENTO_IA, allow: '/', disallow: ['/api/'] },
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
