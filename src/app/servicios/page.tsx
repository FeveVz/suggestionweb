import type { Metadata } from "next";
import HubLanding from "@/components/HubLanding";
import { buildMetadata } from "@/lib/seo";
import { collectionPageSchema } from "@/lib/schema";
import { SERVICIOS_PILAR, SERVICIOS_PILAR_SECCIONES, SERVICIOS_PILAR_FAQ, soloCategorias, getServiciosByCategoria } from "@/content/servicios";

export const metadata: Metadata = buildMetadata({
  title: SERVICIOS_PILAR.metaTitle,
  description: SERVICIOS_PILAR.metaDescription,
  path: "/servicios",
});

export default function ServiciosPilar() {
  const categorias = soloCategorias();
  const items = categorias.map((c) => ({
    title: c.nombre,
    description: c.hero,
    href: `/servicios/${c.slug}`,
  }));

  /**
   * Enlace directo del pilar a los 16 servicios, agrupados por categoría.
   * Antes /servicios solo enlazaba a los 5 hubs, así que las páginas que de
   * verdad tienen que rankear (imprenta, merchandising, publicidad móvil…) no
   * recibían ni un enlace contextual desde su propio pilar. Se deriva de
   * SERVICE data, así que un servicio nuevo aparece aquí solo.
   */
  const related = categorias
    .map((c) => ({
      title: c.nombre,
      links: getServiciosByCategoria(c.slug).map((s) => ({
        label: s.nombre,
        href: `/servicios/${s.slug}`,
      })),
      columns: 2,
    }))
    .filter((b) => b.links.length > 0);
  return (
    <HubLanding
      breadcrumbs={[
        { name: "Inicio", href: "/" },
        { name: "Servicios", href: "/servicios" },
      ]}
      kicker="Servicios"
      h1={SERVICIOS_PILAR.h1}
      intro={SERVICIOS_PILAR.intro}
      cta={SERVICIOS_PILAR.cta}
      items={items}
      columns={3}
      gridKicker="Cinco categorías, un solo método"
      gridHeading="Elige por dónde empezar."
      related={related}
      secciones={SERVICIOS_PILAR_SECCIONES}
      faq={SERVICIOS_PILAR_FAQ}
      shape={2}
      extraSchema={collectionPageSchema({
        name: SERVICIOS_PILAR.metaTitle,
        description: SERVICIOS_PILAR.metaDescription,
        url: "/servicios",
      })}
    />
  );
}
