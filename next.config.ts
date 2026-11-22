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
 * - clarity.ms + bing.com → Clarity (es de Microsoft y carga su propio tag).
 *   bat.bing.com (etiqueta UET de Microsoft Ads) salió de script-src el
 *   21-nov-2026: no se usa y el tag de Clarity no carga nada de ese dominio
 *   (comprobado en su script). *.bing.com sigue en connect-src por Clarity.
 *
 * `unsafe-inline` en script-src es obligatorio hoy: Next inyecta su arranque
 * en línea, el sitio marca `<html class="js">` así y los bloques JSON-LD son
 * etiquetas <script>. Con nonce habría que hacer dinámicas las 92 páginas
 * estáticas, y eso cuesta más de lo que protege en un sitio sin sesiones.
 */
/**
 * 'unsafe-eval' solo en desarrollo (el refresco en caliente de Next lo usa).
 * En producción salió el 21-nov-2026 (auditoría TEC-15): GA4 (gtag.js) y
 * Clarity no usan eval, y el Píxel solo tiene un `new Function("return this")`
 * de respaldo para navegadores sin globalThis, dentro de un try/catch.
 * Comprobado en vivo después de publicar (ver la regla de arriba).
 */
const EVAL = process.env.NODE_ENV === "production" ? "" : " 'unsafe-eval'";

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
  `script-src 'self' 'unsafe-inline'${EVAL} https://www.googletagmanager.com https://*.googletagmanager.com https://connect.facebook.net https://*.clarity.ms`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  // www.google.com: GA4 manda una copia del hit a www.google.com/g/collect
  // (Google Signals / datos demográficos) y la CSP la bloqueaba en silencio.
  // Visto en la consola de Chrome al probar la CSP sin unsafe-eval (21-nov-2026).
  "connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com https://*.g.doubleclick.net https://www.google.com https://*.clarity.ms https://connect.facebook.net https://www.facebook.com https://*.bing.com",
  "frame-src 'self' https://www.facebook.com https://td.doubleclick.net https://www.googletagmanager.com",
  "media-src 'self'",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  reactStrictMode: true,

  /**
   * Interruptor público de la copia de GA4 desde el servidor: vale "1" solo si
   * GA4_MP_SECRET existe al compilar. La clave nunca llega al navegador; solo
   * se sabe que existe. Ver GA_MP en src/lib/tracking.ts.
   */
  env: {
    NEXT_PUBLIC_GA_MP: process.env.GA4_MP_SECRET ? "1" : "",
  },
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
      // Ficha de alguien que ya no trabaja aquí. Esa URL estaba indexada y va
      // impresa en el QR de sus tarjetas, así que no puede quedar en 404.
      // Apunta a /nosotros y no a quien ocupa hoy el cargo: quien escanea esa
      // tarjeta la buscaba a ella, y mandarlo a la ficha de otra persona sin
      // avisar sería confuso.
      { source: "/equipo/maria-teresa", destination: "/nosotros", permanent: true },
      // /equipo no tiene página propia: el equipo está en /nosotros. Antes lo
      // resolvía equipo/page.tsx con redirect(), que responde 307 (temporal).
      { source: "/equipo", destination: "/nosotros", permanent: true },
    ];
  },

  /**
   * Caché de los estáticos de /public.
   *
   * Vercel los servía con `Cache-Control: public, max-age=0, must-revalidate`,
   * así que el navegador revalidaba las 56 imágenes de la home en CADA visita:
   * quien volvía pagaba casi lo mismo que quien entraba por primera vez.
   *
   * Las fuentes van con `immutable` a un año porque no cambian nunca (si se
   * regeneran con scripts/fuentes-subset.py, cambiarles el nombre). Las
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
          // Vercel ya mandaba HSTS de 2 años, pero sin includeSubDomains. Todo
          // subdominio web de suggestion.pe apunta a Vercel (registro comodín),
          // que siempre sirve HTTPS, y el correo de Hostinger no usa
          // subdominios web; revisado en el DNS el 21-nov-2026. «preload» NO
          // se pone sin decisión del dueño (decisión 18): es casi irreversible.
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
        ],
      },
    ];
  },
};

export default nextConfig;
