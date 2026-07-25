import { notFound } from "next/navigation";
import LandingArticle, { type RelatedBlock } from "@/components/LandingArticle";
import type { RelatedLink } from "@/components/RelatedLinks";
import { serviceSchema } from "@/lib/schema";
import { getCiudad } from "@/content/ciudades";
import { getServicio } from "@/content/servicios";

/**
 * Landing de cobertura por ciudad (/agencia-de-marketing-en-<slug>).
 * Mismo patrón que SectorPage: los datos viven en content/ciudades.ts y aquí
 * solo se arma la vista. Cada ciudad trae copy propio sobre su economía real
 * (no son páginas plantilla) y declara areaServed City en el schema.
 */
export default function CiudadPage({ slug }: { slug: string }) {
  const c = getCiudad(slug);
  if (!c) notFound();

  const shape = ((slug.charCodeAt(slug.length - 1) + slug.length) % 6) + 1;

  const links: RelatedLink[] = c.serviciosQueUsa.flatMap((sl) => {
    const s = getServicio(sl);
    return s ? [{ label: s.nombre, href: `/servicios/${s.slug}` }] : [];
  });
  const related: RelatedBlock[] = links.length
    ? [{ title: `Lo que ponemos a trabajar en ${c.nombre}`, links, columns: 2 }]
    : [];

  return (
    <LandingArticle
      breadcrumbs={[
        { name: "Inicio", href: "/" },
        { name: "Cobertura", href: "/sectores" },
        { name: c.nombre, href: `/agencia-de-marketing-en-${c.slug}` },
      ]}
      kicker={`Marketing en ${c.nombre}`}
      h1={c.h1}
      hero={c.hero}
      ctaLabel={c.cta}
      proof={c.proof}
      secciones={c.secciones}
      tema={`marketing en ${c.nombre}`}
      related={related}
      faq={c.faq}
      cierre={c.cierre}
      cobertura={c.cobertura}
      shape={shape}
      extraSchema={serviceSchema({
        serviceType: `Agencia de marketing en ${c.nombre}`,
        description: c.metaDescription,
        url: `/agencia-de-marketing-en-${c.slug}`,
        areaServedCity: c.nombre,
      })}
    />
  );
}
