/**
 * Plantillas JSON-LD (Schema.org) para suggestion.pe.
 * Basado en docs-fuente/12_Datos_Estructurados_y_SEO_Tecnico.md.
 * Cada builder devuelve un objeto plano que se inyecta con <JsonLd>.
 *
 * Grafo conectado (23-nov-2026). Antes cada página emitía nodos sueltos: un
 * Service, un BlogPosting o un FAQPage que no decían a qué página pertenecían
 * ni quién la publicaba. Ahora todo cuelga de identificadores fijos:
 *
 *   https://suggestion.pe/#org            la agencia (layout, todas las páginas)
 *   https://suggestion.pe/#website        el sitio
 *   <url>#webpage                         la página (WebPage, CollectionPage…)
 *   <url>#breadcrumb                      su miga (la emite <Breadcrumbs>)
 *   <url>#service | #article | #person    lo principal de esa página
 *
 * Así Google y los rastreadores de los asistentes de IA leen «esta página es
 * de Suggestion, trata de este servicio, está en este sitio» sin adivinarlo,
 * y el catálogo de servicios de la organización apunta a las mismas páginas.
 */

import { site, SITE_URL, ORG_ID, WEBSITE_ID, absoluteUrl } from "./site";
import type { PlanPrecio } from "@/content/types";

type Json = Record<string, unknown>;

/**
 * Autor del blog: una sola entidad (auditoría CON-08). El author de cada
 * BlogPosting apunta al Person de /equipo/abraham por este @id, con el mismo
 * nombre que se ve en la firma.
 */
export const AUTOR = { slug: "abraham", nombre: "Abraham Velásquez", rol: "Gerente General" } as const;
export const AUTOR_ID = `${SITE_URL}/equipo/${AUTOR.slug}#person`;

export const BLOG_ID = `${SITE_URL}/blog#blog`;

const abs = (u: string) => (u.startsWith("http") ? u : absoluteUrl(u));
/**
 * Fecha con hora y zona horaria de Lima. Google acepta solo la fecha, pero la
 * Prueba de resultados enriquecidos avisa que falta la zona horaria; con la
 * hora fija al mediodía de Lima no cambia de día en ningún huso.
 */
export const conHora = (d: string) => (/^\d{4}-\d{2}-\d{2}$/.test(d) ? `${d}T12:00:00-05:00` : d);

/** @id de la página (WebPage y derivados). */
export const paginaId = (u: string) => `${abs(u)}#webpage`;
/** @id del servicio principal de una página de servicio, sector o ciudad. */
export const servicioId = (u: string) => `${abs(u)}#service`;
/** @id del artículo principal (blog y casos). */
export const articuloId = (u: string) => `${abs(u)}#article`;

/** ItemList para listados (casos, servicios, artículos de una categoría). */
export function itemList(items: { name: string; url: string }[]): Json {
  return {
    "@type": "ItemList",
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: abs(it.url),
    })),
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

/**
 * WebPage y derivados: el nodo de la propia página. Todo lo demás (servicio,
 * artículo, persona) cuelga de aquí con `mainEntity`.
 *
 * `resumen`: la página tiene bloque «En corto». Se declara como speakable
 * (h1 + resumen): es la respuesta directa que un asistente puede leer o citar.
 */
export function webPageSchema(o: {
  url: string;
  name: string;
  description?: string;
  tipo?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "ProfilePage";
  imagen?: string;
  mainEntity?: string;
  about?: string;
  items?: { name: string; url: string }[];
  migas?: boolean;
  publicado?: string;
  modificado?: string;
  resumen?: boolean;
}): Json {
  const url = abs(o.url);
  return {
    "@context": "https://schema.org",
    "@type": o.tipo ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: o.name,
    ...(o.description ? { description: o.description } : {}),
    inLanguage: site.hreflang,
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    ...(o.migas === false ? {} : { breadcrumb: { "@id": `${url}#breadcrumb` } }),
    ...(o.imagen ? { primaryImageOfPage: { "@type": "ImageObject", url: abs(o.imagen) } } : {}),
    ...(o.mainEntity ? { mainEntity: { "@id": o.mainEntity } } : o.items?.length ? { mainEntity: itemList(o.items) } : {}),
    ...(o.about ? { about: { "@id": o.about } } : {}),
    ...(o.publicado ? { datePublished: conHora(o.publicado) } : {}),
    ...(o.modificado ? { dateModified: conHora(o.modificado) } : {}),
    ...(o.resumen ? { speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".hk-encorto"] } } : {}),
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
  /** Foto principal de la página (cabecera). */
  imagen?: string;
  /** Categoría del servicio (p. ej. «Producción y publicidad física»). */
  categoria?: string;
}): Json {
  const ciudades = opts.areaServedCity ? [opts.areaServedCity].flat() : [];
  const url = abs(opts.url);
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
    "@id": servicioId(url),
    name: opts.serviceType,
    serviceType: opts.serviceType,
    ...(opts.categoria ? { category: opts.categoria } : {}),
    provider: { "@id": ORG_ID },
    areaServed: ciudades.length
      ? [
          ...ciudades.map((name) => ({ "@type": "City", name })),
          { "@type": "Country", name: "Perú" },
        ]
      : { "@type": "Country", name: opts.areaServedName || "Perú" },
    description: opts.description,
    url,
    mainEntityOfPage: { "@id": paginaId(url) },
    ...(opts.imagen ? { image: abs(opts.imagen) } : {}),
    ...(offers.length ? { offers } : {}),
  };
}

/**
 * Página de servicio, sector o ciudad completa: el WebPage (con su resumen
 * declarado) y el Service que es su tema principal.
 */
export function paginaDeServicio(o: {
  nombrePagina: string;
  resumen?: boolean;
} & Parameters<typeof serviceSchema>[0]): Json[] {
  return [
    webPageSchema({
      url: o.url,
      name: o.nombrePagina,
      description: o.description,
      imagen: o.imagen,
      mainEntity: servicioId(o.url),
      resumen: o.resumen,
    }),
    serviceSchema(o),
  ];
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

/** BreadcrumbList — en todas las páginas (doc 12 §2.5). El @id lo enlaza el WebPage. */
export function breadcrumbSchema(items: { name: string; url: string }[]): Json {
  const ultima = items[items.length - 1];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    ...(ultima ? { "@id": `${abs(ultima.url)}#breadcrumb` } : {}),
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: abs(it.url),
    })),
  };
}

/** CollectionPage — pilares, categorías y listados (doc 12 §1), con lo que contienen. */
export function collectionPageSchema(opts: {
  name: string;
  description: string;
  url: string;
  items?: { name: string; url: string }[];
  mainEntity?: string;
}): Json {
  return webPageSchema({
    tipo: "CollectionPage",
    url: opts.url,
    name: opts.name,
    description: opts.description,
    items: opts.items,
    mainEntity: opts.mainEntity,
  });
}

/** Blog — pilar del blog (doc 12 §1), con la lista de artículos. */
export function blogSchema(opts: {
  name: string;
  description: string;
  url: string;
  posts?: { headline: string; url: string; datePublished: string; dateModified?: string }[];
}): Json[] {
  const url = abs(opts.url);
  return [
    webPageSchema({ tipo: "CollectionPage", url, name: opts.name, description: opts.description, mainEntity: BLOG_ID }),
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": BLOG_ID,
      name: opts.name,
      description: opts.description,
      url,
      inLanguage: site.hreflang,
      publisher: { "@id": ORG_ID },
      ...(opts.posts?.length
        ? {
            blogPost: opts.posts.map((p) => ({
              "@type": "BlogPosting",
              "@id": articuloId(p.url),
              headline: p.headline,
              url: abs(p.url),
              datePublished: conHora(p.datePublished),
              ...(p.dateModified ? { dateModified: conHora(p.dateModified) } : {}),
            })),
          }
        : {}),
    },
  ];
}

/** BlogPosting — en cada entrada (doc 12 §2.6), con su WebPage. */
export function blogPostingSchema(opts: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  /** Fotos propias de las secciones, además de la imagen para compartir. */
  imagenes?: string[];
  url: string;
  /** Nombre de la categoría del blog. */
  seccion?: string;
  palabras?: number;
  /** Fuentes que cita el texto (campo `fuente` de los datos). */
  fuentes?: string[];
  /** Páginas de servicio de las que habla: solo rutas con nodo Service (ver tieneServicio en schema-org.ts). */
  menciona?: string[];
  /** Tiene bloque «En corto». */
  resumen?: boolean;
  /** Título de la página (title), si difiere del titular. */
  nombrePagina?: string;
}): Json[] {
  const url = abs(opts.url);
  const imagenes = [opts.image, ...(opts.imagenes ?? [])].filter((x): x is string => !!x).map(abs);
  const menciona = opts.menciona ?? [];
  return [
    webPageSchema({
      url,
      name: opts.nombrePagina ?? opts.headline,
      description: opts.description,
      imagen: opts.image,
      mainEntity: articuloId(url),
      publicado: opts.datePublished,
      modificado: opts.dateModified || opts.datePublished,
      resumen: opts.resumen,
    }),
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": articuloId(url),
      headline: opts.headline,
      description: opts.description,
      datePublished: conHora(opts.datePublished),
      dateModified: conHora(opts.dateModified || opts.datePublished),
      inLanguage: site.hreflang,
      author: {
        "@type": "Person",
        "@id": AUTOR_ID,
        name: AUTOR.nombre,
        jobTitle: AUTOR.rol,
        worksFor: { "@id": ORG_ID },
        url: absoluteUrl(`/equipo/${AUTOR.slug}`),
      },
      publisher: { "@id": ORG_ID },
      isPartOf: { "@id": BLOG_ID },
      mainEntityOfPage: { "@id": paginaId(url) },
      ...(imagenes.length ? { image: [...new Set(imagenes)] } : {}),
      ...(opts.seccion ? { articleSection: opts.seccion } : {}),
      ...(opts.palabras ? { wordCount: opts.palabras } : {}),
      ...(menciona.length ? { mentions: menciona.map((h) => ({ "@type": "Service", "@id": servicioId(h), url: abs(h) })) } : {}),
      ...(opts.fuentes?.length
        ? { citation: [...new Set(opts.fuentes)].map((name) => ({ "@type": "CreativeWork", name })) }
        : {}),
    },
  ];
}

/** ContactPage (doc 12 §1). */
export function contactPageSchema(opts: { url: string; name?: string }): Json {
  return webPageSchema({ tipo: "ContactPage", url: opts.url, name: opts.name ?? "Contacto | Suggestion", about: ORG_ID });
}
