import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingArticle, { type RelatedBlock } from "@/components/LandingArticle";
import HubLanding from "@/components/HubLanding";
import type { RelatedLink } from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema, collectionPageSchema } from "@/lib/schema";
import {
  getServicio,
  getServiciosByCategoria,
  allServicioSlugs,
} from "@/content/servicios";
import { SECTORES } from "@/content/sectores";

type Params = { params: Promise<{ slug: string }> };

const shapeFor = (slug: string) => ((slug.charCodeAt(0) + slug.length) % 6) + 1;

export function generateStaticParams() {
  return allServicioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = getServicio(slug);
  if (!s) return {};
  return buildMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/servicios/${s.slug}`,
    noindex: s.noindex,
  });
}

export default async function ServicioPage({ params }: Params) {
  const { slug } = await params;
  const s = getServicio(slug);
  if (!s) notFound();

  const parent =
    s.tipo === "servicio" && s.categoriaSlug ? getServicio(s.categoriaSlug) : undefined;

  const crumbs = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    ...(parent ? [{ name: parent.nombre, href: `/servicios/${parent.slug}` }] : []),
    { name: s.nombre, href: `/servicios/${s.slug}` },
  ];

  // ---- Categoría hub: grid de servicios hijos ----
  if (s.tipo === "categoria") {
    const children = getServiciosByCategoria(s.slug).map((c) => ({
      title: c.nombre,
      description: c.hero,
      href: `/servicios/${c.slug}`,
    }));
    return (
      <HubLanding
        breadcrumbs={crumbs}
        kicker={s.nombre}
        h1={s.h1}
        intro={s.hero}
        cta={s.cta}
        items={children}
        columns={children.length >= 3 ? 3 : 2}
        gridKicker="Servicios"
        gridHeading="Lo que incluye esta área."
        shape={shapeFor(s.slug)}
        extraSchema={collectionPageSchema({
          name: s.metaTitle,
          description: s.metaDescription,
          url: `/servicios/${s.slug}`,
        })}
      />
    );
  }

  // ---- Servicio: artículo completo + enlazado de silo ----
  const related: RelatedBlock[] = [];

  const serviceLinks: RelatedLink[] = s.enlazaA.flatMap((sl) => {
    const r = getServicio(sl);
    return r ? [{ label: r.nombre, href: `/servicios/${r.slug}` }] : [];
  });
  if (serviceLinks.length) {
    related.push({
      title: "Servicios relacionados",
      links: serviceLinks,
      columns: serviceLinks.length >= 3 ? 3 : 2,
    });
  }

  const sectorLinks: RelatedLink[] = SECTORES.filter((sec) =>
    sec.serviciosQueUsa.includes(s.slug)
  ).map((sec) => ({ label: `Marketing ${sec.nombre.toLowerCase()}`, href: `/${sec.slug}` }));
  if (sectorLinks.length) {
    related.push({
      title: "Sectores donde lo aplicamos",
      links: sectorLinks,
      columns: sectorLinks.length >= 3 ? 3 : 2,
    });
  }

  return (
    <LandingArticle
      breadcrumbs={crumbs}
      kicker={parent?.nombre ?? "Servicio"}
      h1={s.h1}
      hero={s.hero}
      ctaLabel={s.cta}
      proof={s.proof}
      secciones={s.secciones}
      incluye={s.incluye}
      beneficios={s.beneficios}
      proceso={s.proceso}
      related={related}
      faq={s.faq}
      cierre={s.cierre}
      shape={shapeFor(s.slug)}
      extraSchema={serviceSchema({
        serviceType: s.nombre,
        description: s.metaDescription,
        url: `/servicios/${s.slug}`,
      })}
    />
  );
}
