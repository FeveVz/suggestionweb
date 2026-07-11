import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import TarjetaPersonal from "@/components/TarjetaPersonal";
import { buildMetadata } from "@/lib/seo";
import { site, absoluteUrl, ORG_ID } from "@/lib/site";
import { getTalento, allTalentoSlugs } from "@/content/equipo";

/**
 * Tarjeta personal digital de cada talento (destino del QR de su tarjeta
 * física). Indexable: página Person → E-E-A-T y búsquedas de marca personal.
 */

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allTalentoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const t = getTalento(slug);
  if (!t) return {};
  return buildMetadata({
    title: `${t.nombre} — ${t.rol} | ${site.name}`,
    description: `${t.bio} Guarda el contacto de ${t.corto} o escríbele por WhatsApp.`,
    path: `/equipo/${t.slug}`,
  });
}

export default async function TalentoPage({ params }: Params) {
  const { slug } = await params;
  const t = getTalento(slug);
  if (!t) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t.nombre,
    jobTitle: t.rol,
    description: t.bio,
    worksFor: { "@id": ORG_ID },
    url: absoluteUrl(`/equipo/${t.slug}`),
    telephone: t.telefono,
    email: t.email,
    knowsAbout: t.especialidades,
    sameAs: [site.social.instagram, site.social.facebook],
  };

  return (
    <>
      <JsonLd data={schema} />
      <TarjetaPersonal t={t} />
    </>
  );
}
