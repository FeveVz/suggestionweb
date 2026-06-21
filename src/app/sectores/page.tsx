import type { Metadata } from "next";
import HubLanding from "@/components/HubLanding";
import { buildMetadata } from "@/lib/seo";
import { collectionPageSchema } from "@/lib/schema";
import { SECTORES_HUB, SECTORES } from "@/content/sectores";

export const metadata: Metadata = buildMetadata({
  title: SECTORES_HUB.metaTitle,
  description: SECTORES_HUB.metaDescription,
  path: "/sectores",
});

export default function SectoresHub() {
  const items = SECTORES.map((s) => ({
    title: `Marketing ${s.nombre.toLowerCase()}`,
    description: s.hero,
    href: `/${s.slug}`,
  }));
  return (
    <HubLanding
      breadcrumbs={[
        { name: "Inicio", href: "/" },
        { name: "Sectores", href: "/sectores" },
      ]}
      kicker="Sectores"
      h1={SECTORES_HUB.h1}
      intro={SECTORES_HUB.intro}
      cta={SECTORES_HUB.cta}
      items={items}
      columns={3}
      gridKicker="Elige tu industria"
      gridHeading="Un playbook propio por sector."
      shape={6}
      extraSchema={collectionPageSchema({
        name: SECTORES_HUB.metaTitle,
        description: SECTORES_HUB.metaDescription,
        url: "/sectores",
      })}
    />
  );
}
