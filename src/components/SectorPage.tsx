import { anclaSector } from "@/content/navegacion";
import { notFound } from "next/navigation";
import LandingArticle, { type RelatedBlock } from "@/components/LandingArticle";
import type { RelatedLink } from "@/components/RelatedLinks";
import { serviceSchema } from "@/lib/schema";
import { getSector, getSectorAst } from "@/content/sectores";
import { getServicio } from "@/content/servicios";

/** Imagen de hero por sector (cuando existe foto/render real). */
// w/h: medidas reales del archivo. Sin ellas la imagen no puede servirse en
// tamaños adaptados (ver LandingArticle) y el móvil descarga el original.
const SECTOR_IMG: Record<string, { src: string; alt: string; w: number; h: number }> = {
  "marketing-inmobiliario": { src: "/assets/sectores/inmobiliario.webp", alt: "Render del proyecto inmobiliario de Inmobiliaria Ceinys", w: 1000, h: 562 },
  "marketing-automotriz": { src: "/assets/sectores/automotriz.webp", alt: "Campaña de marketing para el concesionario Pacífico Motors", w: 1000, h: 1778 },
  // Turismo va sin foto hasta tener una propia: la anterior era una captura de
  // otra web, con la flecha de su carrusel (auditoría CON-18, 20-nov-2026).
  // Fotos propias elegidas por el owner el 22-nov-2026 (scripts/imagenes-propias.mjs).
  "marketing-marcas-consumo": { src: "/assets/sectores/marcas-el-charcutero-gorra-pack.webp", alt: "Gorra de El Charcutero junto a un pack de cerveza y una caja de chorizo artesanal", w: 1600, h: 1200 },
  "marketing-pisco-vino": { src: "/assets/sectores/pisco-vino-festival-vendimia-ica.webp", alt: "Stand de Pacífico Motors con una camioneta y visitantes en el Festival de la Vendimia de Ica 2024", w: 1100, h: 1375 },
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
  // Las pruebas van primero y antes que los servicios: una página de sector
  // que promete resultados y no enseña ninguno pide un acto de fe.
  const related: RelatedBlock[] = [];
  if (sec.pruebas?.length) {
    related.push({ title: "La prueba", links: sec.pruebas, columns: 2 });
  }
  if (links.length) {
    related.push({ title: "Lo que ponemos a trabajar", links, columns: 2 });
  }
  // El puente al blog: esta página dice qué hacemos y qué medimos; el artículo
  // explica cómo funciona el mercado. Antes las dos contaban lo mismo.
  if (sec.lecturas?.length) {
    related.push({ title: "Para entender el mercado", links: sec.lecturas, columns: 2 });
  }

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
      tema={anclaSector(slug, sec.nombre).replace(/^Marketing/, "marketing")}
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
