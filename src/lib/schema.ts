/**
 * Plantillas JSON-LD (Schema.org) para suggestion.pe.
 * Basado en docs-fuente/12_Datos_Estructurados_y_SEO_Tecnico.md.
 * Cada builder devuelve un objeto plano que se inyecta con <JsonLd>.
 */

import { site, SITE_URL, ORG_ID, WEBSITE_ID, absoluteUrl } from "./site";

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
    founder: [
      { "@type": "Person", name: "Abraham Velásquez Aquije", jobTitle: "Gerente General" },
      { "@type": "Person", name: "María Teresa Vera García", jobTitle: "Cofundadora y Administradora" },
    ],
    description: site.description,
    url: SITE_URL,
    logo: absoluteUrl(site.logo),
    image: absoluteUrl(site.ogImage),
    telephone: site.phoneE164,
    email: site.email,
    priceRange: "$$",
    slogan: site.slogan,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: -14.0678, longitude: -75.7286 },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    knowsAbout: ["Marketing digital", "Publicidad digital", "Meta Ads", "Google Ads", "Desarrollo web", "Branding", "BTL y activaciones"],
    areaServed: [
      { "@type": "City", name: site.city },
      { "@type": "Country", name: "Perú" },
    ],
    sameAs: [site.social.instagram, site.social.facebook],
  };
}

/** WebSite + SearchAction (doc 12 §2.2). */
export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: site.name,
    inLanguage: site.hreflang,
    publisher: { "@id": ORG_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/buscar?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

/** Service — en cada página de servicio/sector (doc 12 §2.3). */
export function serviceSchema(opts: {
  serviceType: string;
  description: string;
  url: string;
  areaServedName?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.serviceType,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: opts.areaServedName || "Perú" },
    description: opts.description,
    url: opts.url.startsWith("http") ? opts.url : absoluteUrl(opts.url),
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

/**
 * ItemList de reseñas para /casos. Sin estrellas self-serving (doc 12 §2.7):
 * marcamos Review dentro de la Organization para E-E-A-T, no para rich snippet.
 */
export function casosReviewSchema(
  reviews: { quote: string; author: string }[]
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.name,
    review: reviews.map((r) => ({
      "@type": "Review",
      reviewBody: r.quote,
      author: { "@type": "Person", name: r.author },
    })),
  };
}
