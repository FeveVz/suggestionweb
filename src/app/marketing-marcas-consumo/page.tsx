import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";
import { buildMetadata } from "@/lib/seo";
import { getSector } from "@/content/sectores";

const SLUG = "marketing-marcas-consumo";
const s = getSector(SLUG)!;

export const metadata: Metadata = buildMetadata({
  title: s.metaTitle,
  description: s.metaDescription,
  path: `/${SLUG}`,
});

export default function Page() {
  return <SectorPage slug={SLUG} />;
}
