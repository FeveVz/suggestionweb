/**
 * Plantillas JSON-LD (Schema.org) para suggestion.pe.
 * Basado en docs-fuente/12_Datos_Estructurados_y_SEO_Tecnico.md.
 * Cada builder devuelve un objeto plano que se inyecta con <JsonLd>.
 */

import { site, SITE_URL, ORG_ID, WEBSITE_ID, absoluteUrl } from "./site";
import type { PlanPrecio } from "@/content/types";

type Json = Record<string, unknown>;

/** ProfessionalService / LocalBusiness — identidad de la organización (doc 12 §2.1). */
export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: site.name,
    legalName: site.legalName,
    taxID: site.ruc,
    // Año de fundación. Lo lee el grafo de conocimiento de Google y lo citan
    // los asistentes cuando alguien pregunta desde cuándo existe la agencia:
    // antes esa respuesta dependía de que el modelo encontrara "7 años"
    // suelto en una frase, que además caduca cada enero.
    foundingDate: String(site.fundacion),
    description: site.description,
    url: SITE_URL,
    logo: absoluteUrl(site.logo),
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
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: -14.0678, longitude: -75.7286 },
    knowsAbout: ["Marketing digital", "Publicidad digital", "Meta Ads", "Google Ads", "Desarrollo web", "Branding", "BTL y activaciones"],
    areaServed: [
      { "@type": "City", name: site.city },
      { "@type": "Country", name: "Perú" },
    ],
    sameAs: [site.social.instagram, site.social.facebook],
  };
}

/**
 * WebSite (doc 12 §2.2).
 *
 * Sin SearchAction desde el 21-nov-2026 (auditoría, AEO-10): apuntaba a
 * /buscar, que nunca existió y responde 404, y Google retiró el cuadro de
 * búsqueda de sitelinks en nov-2024. Volver a ponerlo solo si se construye un
 * buscador de verdad.
 */
export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: site.name,
    inLanguage: site.hreflang,
    publisher: { "@id": ORG_ID },
  };
}

/** "S/1,500" → "1500"; null si el texto no es un importe. */
function importe(precio: string): string | null {
  const n = Number(precio.replace(/[^0-9]/g, ""));
  return Number.isFinite(n) && n > 0 ? String(n) : null;
}

/** Service — en cada página de servicio/sector (doc 12 §2.3). */
export function serviceSchema(opts: {
  serviceType: string;
  description: string;
  url: string;
  areaServedName?: string;
  /**
   * Ciudad concreta (páginas de cobertura), o varias cuando el equipo de esa
   * ciudad cubre también las de alrededor. Se declaran junto con el país.
   */
  areaServedCity?: string | string[];
  /**
   * Planes con precio publicado en la página. Solo servicios digitales: los de
   * producción, BTL y publicidad móvil se cotizan y no deben llevar offers.
   */
  planes?: PlanPrecio[];
}): Json {
  const ciudades = opts.areaServedCity ? [opts.areaServedCity].flat() : [];
  const url = opts.url.startsWith("http") ? opts.url : absoluteUrl(opts.url);
  const offers = (opts.planes ?? []).flatMap((p) => {
    const price = importe(p.precio);
    if (!price) return [];
    const mensual = p.periodo.includes("mes");
    return [
      {
        "@type": "Offer",
        name: p.nombre,
        price,
        priceCurrency: "PEN",
        url,
        ...(mensual
          ? {
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price,
                priceCurrency: "PEN",
                unitCode: "MON",
                unitText: "mes",
              },
            }
          : {}),
      },
    ];
  });
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.serviceType,
    serviceType: opts.serviceType,
    provider: { "@id": ORG_ID },
    areaServed: ciudades.length
      ? [
          ...ciudades.map((name) => ({ "@type": "City", name })),
          { "@type": "Country", name: "Perú" },
        ]
      : { "@type": "Country", name: opts.areaServedName || "Perú" },
    description: opts.description,
    url,
    ...(offers.length ? { offers } : {}),
  };
}

/** FAQPage — respuestas idénticas a las visibles en página (doc 12 §2.4). */
export function faqPageSchema(faqs: { q: string; a: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** BreadcrumbList — en todas las páginas (doc 12 §2.5). */
export function breadcrumbSchema(items: { name: string; url: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url.startsWith("http") ? it.url : absoluteUrl(it.url),
    })),
  };
}

/** CollectionPage — pilares y categorías hub (doc 12 §1). */
export function collectionPageSchema(opts: {
  name: string;
  description: string;
  url: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url: opts.url.startsWith("http") ? opts.url : absoluteUrl(opts.url),
    isPartOf: { "@id": WEBSITE_ID },
  };
}

/** Blog — pilar del blog (doc 12 §1). */
export function blogSchema(opts: { name: string; description: string; url: string }): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: opts.name,
    description: opts.description,
    url: opts.url.startsWith("http") ? opts.url : absoluteUrl(opts.url),
    publisher: { "@id": ORG_ID },
  };
}

/** BlogPosting — en cada entrada (doc 12 §2.6). */
export function blogPostingSchema(opts: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    author: {
      "@type": "Person",
      name: "Abraham Velásquez Aquije",
      jobTitle: "Gerente General",
      worksFor: { "@id": ORG_ID },
      url: absoluteUrl("/nosotros"),
    },
    publisher: { "@id": ORG_ID },
    ...(opts.image ? { image: absoluteUrl(opts.image) } : {}),
    mainEntityOfPage: opts.url.startsWith("http") ? opts.url : absoluteUrl(opts.url),
  };
}

/** ContactPage (doc 12 §1). */
export function contactPageSchema(opts: { url: string }): Json {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: opts.url.startsWith("http") ? opts.url : absoluteUrl(opts.url),
    about: { "@id": ORG_ID },
  };
}

