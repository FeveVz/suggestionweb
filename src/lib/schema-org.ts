/**
 * Organización con su catálogo de servicios, rubros y ciudades.
 *
 * Separado de schema.ts porque lee el contenido del sitio (servicios,
 * sectores, ciudades, equipo) y schema.ts lo importa también Faq.tsx, que es
 * un componente de cliente: si schema.ts cargara el contenido, todo eso
 * viajaría en el JavaScript del navegador. Este módulo solo lo usan páginas
 * del servidor.
 */

import { site, SITE_URL, ORG_ID, absoluteUrl } from "./site";
import { servicioId } from "./schema";
import { soloServicios, soloCategorias } from "@/content/servicios";
import { SECTORES } from "@/content/sectores";
import { CIUDADES } from "@/content/ciudades";
import { EQUIPO } from "@/content/equipo";

type Json = Record<string, unknown>;

/**
 * Rutas que emiten un nodo Service con su @id: servicios (no categorías),
 * sectores y ciudades. Sirve para enlazar desde artículos y casos solo a
 * nodos que existen.
 */
const RUTAS_CON_SERVICIO = new Set<string>([
  ...soloServicios().map((s) => `/servicios/${s.slug}`),
  ...SECTORES.map((s) => `/${s.slug}`),
  ...CIUDADES.map((c) => `/agencia-de-marketing-en-${c.slug}`),
]);
export const tieneServicio = (href: string) => RUTAS_CON_SERVICIO.has(href.split("#")[0]);

/**
 * Catálogo de servicios de la organización: una lista por categoría, cada
 * servicio enlazado al nodo Service de su página. Sin precios: los planes
 * están en cada página, y producción, BTL y publicidad móvil se cotizan.
 */
function catalogoServicios(): Json {
  const categorias = soloCategorias();
  const servicios = soloServicios().filter((s) => !s.noindex);
  return {
    "@type": "OfferCatalog",
    name: "Servicios de Suggestion",
    itemListElement: categorias
      .map((c) => ({
        "@type": "OfferCatalog",
        name: c.nombre,
        url: absoluteUrl(`/servicios/${c.slug}`),
        itemListElement: servicios
          .filter((s) => s.categoriaSlug === c.slug)
          .map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              "@id": servicioId(`/servicios/${s.slug}`),
              name: s.nombre,
              url: absoluteUrl(`/servicios/${s.slug}`),
            },
          })),
      }))
      .filter((c) => (c.itemListElement as unknown[]).length > 0),
  };
}

/** ProfessionalService / LocalBusiness — identidad de la organización (doc 12 §2.1). */
export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: site.name,
    alternateName: ["Agencia de Marketing Suggestion", "Suggestion Marketing"],
    legalName: site.legalName,
    taxID: site.ruc,
    // Año de fundación. Lo lee el grafo de conocimiento de Google y lo citan
    // los asistentes cuando alguien pregunta desde cuándo existe la agencia:
    // antes esa respuesta dependía de que el modelo encontrara "7 años"
    // suelto en una frase, que además caduca cada enero.
    foundingDate: String(site.fundacion),
    description: site.description,
    url: SITE_URL,
    logo: { "@type": "ImageObject", "@id": `${SITE_URL}/#logo`, url: absoluteUrl(site.logo), caption: site.name },
    image: absoluteUrl(site.ogImage),
    telephone: site.phoneE164,
    email: site.email,
    // contactPoint además de `telephone`: `telephone` es un dato suelto de la
    // ficha, y contactPoint declara PARA QUÉ sirve ese número, en qué idioma
    // se atiende y dónde. Es lo que leen el grafo de conocimiento de Google y
    // los rastreadores que alimentan a los asistentes de IA cuando alguien
    // pregunta "cuál es el teléfono de Suggestion". Se añadió el 2026-09-27,
    // con el cambio de número, para que la respuesta no dependa de que el
    // modelo encuentre el número suelto en el pie de página.
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phoneE164,
        contactType: "customer service",
        areaServed: "PE",
        availableLanguage: ["Spanish"],
        email: site.email,
        url: `${SITE_URL}/contacto`,
        // Horario de atención de personas (decisión 6 del owner, 20-nov-2026):
        // lunes a sábado de 8:30 a 18:30. El agente de IA de WhatsApp responde a
        // toda hora, pero lo que se declara aquí es cuándo atiende alguien. Es del
        // canal de contacto, no del local, que no recibe público sin coordinar.
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:30",
          closes: "18:30",
        },
      },
    ],
    priceRange: "$$",
    slogan: site.slogan,
    // Solo ciudad y región: la dirección exacta no se publica (decisión del owner).
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: -14.0678, longitude: -75.7286 },
    // Lo que la agencia trabaja: cada servicio y cada rubro con página propia.
    // Es lo que consultan los asistentes para responder «qué agencia en Ica
    // hace X»; antes solo había 7 temas digitales y nada de producción.
    knowsAbout: [
      ...soloServicios().filter((s) => !s.noindex).map((s) => s.nombre),
      ...SECTORES.map((s) => s.nombre),
    ],
    // Dónde se presta el servicio: Ica y las ciudades con página propia, más
    // el país. No dice que haya oficina en ellas (regla de ciudades.ts).
    areaServed: [
      { "@type": "City", name: site.city },
      { "@type": "AdministrativeArea", name: "Región Ica" },
      ...CIUDADES.map((c) => ({ "@type": "City", name: c.nombre })),
      { "@type": "Country", name: "Perú" },
    ],
    numberOfEmployees: { "@type": "QuantitativeValue", value: EQUIPO.length },
    hasOfferCatalog: catalogoServicios(),
    sameAs: [site.social.instagram, site.social.facebook],
  };
}

