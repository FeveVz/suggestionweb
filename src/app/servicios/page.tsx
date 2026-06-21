import type { Metadata } from "next";
import HubLanding from "@/components/HubLanding";
import { buildMetadata } from "@/lib/seo";
import { collectionPageSchema } from "@/lib/schema";
import { SERVICIOS_PILAR, soloCategorias } from "@/content/servicios";

export const metadata: Metadata = buildMetadata({
  title: SERVICIOS_PILAR.metaTitle,
  description: SERVICIOS_PILAR.metaDescription,
  path: "/servicios",
});

export default function ServiciosPilar() {
  const items = soloCategorias().map((c) => ({
    title: c.nombre,
    description: c.hero,
    href: `/servicios/${c.slug}`,
  }));
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
      shape={2}
      extraSchema={collectionPageSchema({
        name: SERVICIOS_PILAR.metaTitle,
        description: SERVICIOS_PILAR.metaDescription,
        url: "/servicios",
      })}
    />
  );
}
