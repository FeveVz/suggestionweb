import { notFound } from "next/navigation";
import LandingArticle, { type RelatedBlock } from "@/components/LandingArticle";
import type { RelatedLink } from "@/components/RelatedLinks";
import { serviceSchema } from "@/lib/schema";
import { getSector, getSectorAst } from "@/content/sectores";
import { getServicio } from "@/content/servicios";

/** Imagen de hero por sector (cuando existe foto/render real). */
const SECTOR_IMG: Record<string, { src: string; alt: string }> = {
  "marketing-inmobiliario": { src: "/assets/sectores/inmobiliario.webp", alt: "Render del proyecto inmobiliario de Inmobiliaria Ceinys" },
  "marketing-automotriz": { src: "/assets/sectores/automotriz.webp", alt: "Campaña de marketing para el concesionario Pacífico Motors" },
  "marketing-turismo": { src: "/assets/sectores/turismo.webp", alt: "Oasis de Huacachina en Ica, principal destino turístico de la región" },
  "marketing-marcas-consumo": { src: "/assets/sectores/marcas.webp", alt: "Producto de marca: chorizos artesanales de El Charcutero" },
};

/** Renderiza una landing de sector (a raíz) desde su slug. */
export default function SectorPage({ slug }: { slug: string }) {
  const sec = getSector(slug);
  if (!sec) notFound();
  const ast = getSectorAst(slug);

  const shape = ((slug.charCodeAt(slug.length - 1) + slug.length) % 6) + 1;

  const links: RelatedLink[] = sec.serviciosQueUsa.flatMap((sl) => {
    const s = getServicio(sl);
    return s ? [{ label: s.nombre, href: `/servicios/${s.slug}` }] : [];
  });
  const related: RelatedBlock[] = links.length
    ? [{ title: "Lo que ponemos a trabajar", links, columns: 2 }]
    : [];

  return (
    <LandingArticle
      breadcrumbs={[
        { name: "Inicio", href: "/" },
        { name: "Sectores", href: "/sectores" },
        { name: sec.nombre, href: `/${sec.slug}` },
      ]}
      kicker="Sector"
      h1={sec.h1}
      hero={sec.hero}
      heroImage={SECTOR_IMG[slug]}
      ctaLabel={sec.cta}
      proof={sec.proof}
      secciones={sec.secciones}
      beneficios={ast?.beneficios}
      proceso={ast?.proceso}
      tema={`marketing ${sec.nombre.toLowerCase()}`}
      related={related}
      faq={sec.faq}
      cierre={sec.cierre}
      shape={shape}
      extraSchema={serviceSchema({
        serviceType: sec.metaTitle.replace(" | Suggestion", ""),
        description: sec.metaDescription,
        url: `/${sec.slug}`,
      })}
    />
  );
}
