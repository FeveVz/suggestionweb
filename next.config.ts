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
    return [aCanonico("www.suggestion.pe"), aCanonico("suggestionweb.vercel.app")];
  },
};

export default nextConfig;
