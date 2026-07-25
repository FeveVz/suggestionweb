import type { Metadata } from "next";
import CiudadPage from "@/components/CiudadPage";
import { buildMetadata } from "@/lib/seo";
import { getCiudad } from "@/content/ciudades";

const SLUG = "chincha";
const c = getCiudad(SLUG)!;

export const metadata: Metadata = buildMetadata({
  title: c.metaTitle,
  description: c.metaDescription,
  path: `/agencia-de-marketing-en-${SLUG}`,
  ogImage: `/assets/og/agencia-de-marketing-en-${SLUG}.png`,
});

export default function Page() {
  return <CiudadPage slug={SLUG} />;
}
