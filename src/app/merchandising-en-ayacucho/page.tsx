import type { Metadata } from "next";
import ServicioCiudadPage from "@/components/ServicioCiudadPage";
import { buildMetadata } from "@/lib/seo";
import { getServicioCiudad } from "@/content/servicios-ciudad";

const SLUG = "merchandising-en-ayacucho";
const p = getServicioCiudad(SLUG)!;

export const metadata: Metadata = buildMetadata({
  title: p.metaTitle,
  description: p.metaDescription,
  path: `/${SLUG}`,
  ogImage: `/assets/og/${SLUG}.png`,
});

export default function Page() {
  return <ServicioCiudadPage slug={SLUG} />;
}
