import type { NextConfig } from "next";

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
    ];
  },
};

export default nextConfig;
