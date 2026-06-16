/**
 * Constantes centrales de Suggestion (NAP, marca, contacto, redes).
 * Única fuente de verdad para datos de contacto que se repiten en
 * layout, footer, CTAs y JSON-LD. Mantener NAP consistente (doc 12 §3.5).
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://suggestion.pe"
).replace(/\/$/, "");

export const site = {
  name: "Suggestion",
  legalName: "Suggestion",
  domain: "suggestion.pe",
  url: SITE_URL,
  slogan: "Convertimos atención en ventas",
  tagline: "No es lo que ves.",
  description:
    "Agencia de marketing de performance en Ica, Perú. Convertimos atención en ventas: leads, citas y cierres medibles.",
  locale: "es_PE",
  lang: "es",
  hreflang: "es-PE",

  // NAP — idéntico en web, GBP y directorios
  phoneDisplay: "+51 937 770 159",
  phoneE164: "+51937770159",
  whatsappNumber: "51937770159",
  email: "hola@suggestion.pe",
  city: "Ica",
  region: "Ica",
  country: "PE",

  // Imágenes de marca
  logo: "/assets/logos/suggestion-logo-black.png",
  logoWhite: "/assets/logos/suggestion-logo-white.png",
  ogImage: "/og-image.png",

  social: {
    instagram: "https://www.instagram.com/suggestion.mkt/",
    facebook: "https://www.facebook.com/Suggestion.mk",
  },
} as const;

export const ORG_ID = `${SITE_URL}/#org`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Construye un enlace wa.me con mensaje opcional pre-rellenado. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** URL absoluta a partir de una ruta relativa. */
export function absoluteUrl(path = "/"): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
