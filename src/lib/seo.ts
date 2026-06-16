/**
 * Helper de metadata (Next Metadata API) para suggestion.pe.
 * Centraliza canonical, hreflang es-PE, Open Graph y robots/noindex.
 * Los títulos de los docs 04/05 ya incluyen "| Suggestion" → usamos
 * `title.absolute` para no duplicar el sufijo del template del layout.
 */

import type { Metadata } from "next";
import { site, absoluteUrl } from "./site";

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  ogImage?: string;
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(opts.path);
  const image = opts.ogImage || site.ogImage;
  return {
    title: { absolute: opts.title },
    description: opts.description,
    alternates: {
      canonical: url,
      languages: { [site.hreflang]: url },
    },
    robots: opts.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: opts.type || "website",
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [image],
    },
  };
}
