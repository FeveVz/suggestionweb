import type { NextConfig } from "next";

/**
 * Política de seguridad de contenido.
 *
 * ⚠️ REGLA AL TOCAR ESTO: la medición es lo primero que se rompe con una CSP
 * mal hecha, y se rompe EN SILENCIO. Ya costó más de un mes de datos de GA4
 * por un motivo parecido. Si se añade o quita un dominio, comprobar después en
 * vivo que `window.google_tag_data` existe y que salen peticiones reales a
 * `/g/collect`, `facebook.com/tr` y `clarity.ms/collect`.
 *
 * Quién es cada dominio:
 * - googletagmanager + google-analytics + analytics.google.com → GA4 (GT-NNQW6GPS).
 * - connect.facebook.net + facebook.com → Píxel de Meta.
 * - capig.stape.pm → pasarela server-side de Stape (API de Conversiones).
 * - clarity.ms + bing.com → Clarity (es de Microsoft y carga su propio tag).
 *
 * `unsafe-inline` en script-src es obligatorio hoy: Next inyecta su arranque
 * en línea, el sitio marca `<html class="js">` así y los bloques JSON-LD son
 * etiquetas <script>. Con nonce habría que hacer dinámicas las 92 páginas
 * estáticas, y eso cuesta más de lo que protege en un sitio sin sesiones.
 */
const CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  // www.facebook.com va aquí porque el Píxel envía parte de sus eventos como
  // POST de formulario oculto a /tr/, no como imagen. Con `form-action 'self'`
  // a secas, la consola escupía "Sending form data to facebook.com/tr
  // violates..." y ese evento se perdía. Detectado en local antes de subirlo.
  "form-action 'self' https://www.facebook.com",
  "frame-ancestors 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://*.googletagmanager.com https://connect.facebook.net https://*.clarity.ms https://capig.stape.pm https://bat.bing.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://*.clarity.ms https://connect.facebook.net https://www.facebook.com https://capig.stape.pm https://*.bing.com",
  "frame-src 'self' https://www.facebook.com https://td.doubleclick.net https://www.googletagmanager.com",
  "media-src 'self'",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },

  /**
   * Un solo dominio canónico: suggestion.pe.
   *
   * Antes, www.suggestion.pe y suggestionweb.vercel.app respondían 200 y servían
   * una copia entera del sitio. El canonical protegía el ranking, pero el Pixel
   * disparaba en los tres (Meta llegó a listar "suggestion.pe y 2 más"), lo que
   * inflaba los datos y ensuciaba la atribución. Con el 308 permanente, cualquier
   * enlace o visita a esas variantes acaba en el dominio real, conservando ruta y
   * parámetros de campaña (utm, gclid, fbclid).
   *
   * Las URL de previsualización de Vercel (con hash) NO coinciden con estos hosts,
   * así que los despliegues de prueba siguen funcionando con normalidad.
   */
  async redirects() {
    const aCanonico = (host: string) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://suggestion.pe/:path*",
      permanent: true,
    });
    return [
      aCanonico("www.suggestion.pe"),
      aCanonico("suggestionweb.vercel.app"),
      // /about llegaba a la 404 desde algún enlace externo antiguo (visto en
      // Clarity). La página equivalente es /nosotros.
      { source: "/about", destination: "/nosotros", permanent: true },
    ];
  },

  /**
   * Caché de los estáticos de /public.
   *
   * Vercel los servía con `Cache-Control: public, max-age=0, must-revalidate`,
   * así que el navegador revalidaba las 56 imágenes de la home en CADA visita:
   * quien volvía pagaba casi lo mismo que quien entraba por primera vez.
   *
   * Las fuentes van con `immutable` a un año porque no cambian nunca. Las
   * imágenes van a 30 días con `stale-while-revalidate`: si alguna se
   * reemplaza, el visitante ve la vieja una vez y el navegador ya se trae la
   * nueva de fondo. Para forzar un cambio inmediato, renombrar el archivo
   * (estos nombres no llevan hash, a diferencia de /_next/static).
   */
  async headers() {
    return [
      {
        source: "/fonts/:archivo*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/assets/:ruta*",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
      {
        // Cabeceras de seguridad en todas las páginas. El sitio solo tenía
        // HSTS (que lo pone Vercel), y Lighthouse marcaba la ausencia de CSP
        // como severidad alta. Es un sitio con formularios que recogen datos
        // de clientes: esto es higiene mínima.
        source: "/:ruta*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
          },
          { key: "Content-Security-Policy", value: CSP },
        ],
      },
    ];
  },
};

export default nextConfig;
