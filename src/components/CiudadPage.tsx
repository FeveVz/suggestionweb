import { notFound } from "next/navigation";
import LandingArticle, { type RelatedBlock } from "@/components/LandingArticle";
import type { RelatedLink } from "@/components/RelatedLinks";
import { serviceSchema } from "@/lib/schema";
import { getCiudad } from "@/content/ciudades";
import { getServicio } from "@/content/servicios";
import { FOTOS_PORTAFOLIO, fotoPortafolio } from "@/content/portafolio-fotos";

/**
 * Fotos propias tomadas EN la ciudad. Solo donde las hay: una ciudad sin
 * trabajo fotografiado allí va sin foto, no con una de Ica.
 */
const XCMG = "xcmg-linea-amarilla-nazca";
const ENTEL = "cortatrafico-entel-nazca";
const FOTOS_CIUDAD: Record<
  string,
  {
    hero: { src: string; alt: string; w?: number; h?: number };
    galeria: { src: string; alt: string; cap: string }[];
  }
> = {
  // Cortatráfico para la tienda Entel de Nazca (12-18 nov 2026): son las
  // fotos de esa pieza del portafolio. Sin selfies ni placas legibles. La
  // foto de la sección va en content/ciudades.ts.
  nazca: {
    hero: {
      src: fotoPortafolio(ENTEL, 1),
      alt: "Cortatráfico con el banner de una tienda Entel en un cruce del centro de Nazca, bajo el letrero de la Municipalidad Provincial de Nasca",
      w: FOTOS_PORTAFOLIO[ENTEL]?.[0]?.[0],
      h: FOTOS_PORTAFOLIO[ENTEL]?.[0]?.[1],
    },
    // Galería con la variante de 440 px: el marco es cuadrado y de 240-400 px.
    galeria: [
      { src: fotoPortafolio(ENTEL, 3, true), alt: "Cortatráfico con banner de Entel en el paso peatonal de un cruce de Nazca, con un auto rojo detenido", cap: "Dos personas, un banner y el semáforo en rojo: el mensaje se ve desde cada auto que para" },
      { src: fotoPortafolio(ENTEL, 4, true), alt: "Cortatráfico con banner de Entel frente a la iglesia, en un cruce del centro de Nazca", cap: "Siete días rotando por los cruces del centro, del 12 al 18 de noviembre de 2026" },
      { src: fotoPortafolio(XCMG, 8, true), alt: "Anfitriona presentando la maquinaria XCMG en la exhibición de Nazca", cap: "XCMG · Dercomaq, febrero 2025: anfitriona en una exhibición de tres días para contratistas y empresarios" },
      { src: fotoPortafolio(XCMG, 6, true), alt: "Publimán con cartel de la campaña de XCMG en la plaza de armas de Nazca", cap: "Publimanes en la plaza de armas. A esa exhibición llegaron empresarios del sector minero y salió una venta" },
    ],
  },
};

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
  // La prueba va en todas las ciudades: el trabajo que se enseña se produjo
  // en Ica y alrededores, que es de donde sale el equipo que viaja.
  related.push({
    title: "El trabajo, documentado",
    columns: 3,
    links: [
      { label: "Portafolio de activaciones", href: "/portafolio" },
      { label: "Casos con cifras", href: "/casos" },
      { label: "Cómo medimos una campaña", href: "/metodo" },
    ],
  });

  const fotos = FOTOS_CIUDAD[c.slug];

  return (
    <LandingArticle
      breadcrumbs={[
        { name: "Inicio", href: "/" },
        { name: "Cobertura", href: "/sectores" },
        { name: c.nombre, href: `/agencia-de-marketing-en-${c.slug}` },
      ]}
      kicker={c.kicker ?? `Marketing en ${c.nombre}`}
      h1={c.h1}
      hero={c.hero}
      heroImage={fotos?.hero}
      galeria={fotos?.galeria}
      ctaLabel={c.cta}
      proof={c.proof}
      secciones={c.secciones}
      tema={c.tema ?? `marketing en ${c.nombre}`}
      especificaciones={c.especificaciones}
      related={related}
      faq={c.faq}
      cierre={c.cierre}
      cobertura={c.cobertura}
      coberturaTitulo={c.coberturaTitulo}
      porQue={c.btl ? "btl" : undefined}
      shape={shape}
      extraSchema={serviceSchema({
        serviceType: c.btl ? `Agencia BTL y de marketing en ${c.nombre}` : `Agencia de marketing en ${c.nombre}`,
        description: c.metaDescription,
        url: `/agencia-de-marketing-en-${c.slug}`,
        areaServedCity: c.nombre,
      })}
    />
  );
}
