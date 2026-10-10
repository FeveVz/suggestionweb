import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LandingArticle, { type RelatedBlock } from "@/components/LandingArticle";
import HubLanding from "@/components/HubLanding";
import type { RelatedLink } from "@/components/RelatedLinks";
import { buildMetadata } from "@/lib/seo";
import { serviceSchema, collectionPageSchema } from "@/lib/schema";
import {
  getServicio,
  getServiciosByCategoria,
  allServicioSlugs,
} from "@/content/servicios";
import { SECTORES } from "@/content/sectores";
import { CIUDADES, ciudadHref } from "@/content/ciudades";
import { getPrecios } from "@/content/precios";
import { fotoPortafolio, FOTOS_PORTAFOLIO } from "@/content/portafolio-fotos";

type Params = { params: Promise<{ slug: string }> };

/**
 * Imagen de hero por servicio. Las dos primeras son fotos propias que ya
 * vivían en /assets/servicios; las cuatro siguientes salen del portafolio,
 * que es donde está el trabajo fotografiado.
 */
/** Foto del portafolio con sus medidas reales, para reservar el espacio. */
const delPortafolio = (slug: string, n: number, alt: string) => {
  const m = FOTOS_PORTAFOLIO[slug]?.[n - 1];
  return { src: fotoPortafolio(slug, n), alt, w: m?.[0], h: m?.[1] };
};

const SERVICE_IMG: Record<string, { src: string; alt: string; w?: number; h?: number }> = {
  btl: { src: "/assets/servicios/btl.webp", alt: "Activación de marca BTL con stand y dinámica en punto de venta", w: 1100, h: 825 },
  "produccion-audiovisual": { src: "/assets/servicios/produccion-audiovisual.webp", alt: "Rodaje audiovisual con cámara e iluminación profesional", w: 828, h: 1100 },
  imprenta: delPortafolio("ahorra-o-nunca-despliegue", 1, "Gigantografía impresa instalada en la fachada de vidrio de un concesionario en Ica"),
  "material-pop": delPortafolio("ahorra-o-nunca-despliegue", 2, "Colgantes, banderolas y roll-ups de campaña instalados en una sala de ventas"),
  "estructuras-publicitarias": delPortafolio("relanzamiento-mitsubishi-autoniza", 4, "Letras corpóreas iluminadas y estructura de marca montadas en la fachada de una tienda en Ica"),
  "publicidad-movil": delPortafolio("test-drive-changan-ica", 1, "Vehículo rotulado circulando por la vía pública durante una campaña en Ica"),
};

/**
 * Fotos del trabajo real por servicio. Solo las seis de producción: el
 * portafolio es BTL y ATL, y poner estas fotos en una página de SEO o de CRM
 * sería relleno.
 */
const SERVICE_GAL: Record<string, { src: string; alt: string; cap: string }[]> = {
  imprenta: [
    { src: fotoPortafolio("changan-cs15-presentacion", 2), alt: "Ficha impresa sobre el techo de un vehículo con las características del modelo y un código QR", cap: "Ficha de techo con QR, para que la unidad se explique sola cuando no hay asesor al lado" },
    { src: fotoPortafolio("gira-conduce-tu-rumbo", 4), alt: "Roll-up impreso con código QR y ruleta de premios de una campaña", cap: "Roll-up con el QR de la dinámica: el registro deja de ser un formulario" },
    { src: fotoPortafolio("ahorra-o-nunca-despliegue", 2), alt: "Colgantes y banderolas impresos instalados en la sala de ventas", cap: "El mismo arte en varios formatos: cada soporte se rearma, no se reescala" },
  ],
  "material-pop": [
    { src: fotoPortafolio("mercado-santo-domingo-dfsk", 2), alt: "Módulo de marca con cajas de oferta en la calle del mercado de Santo Domingo", cap: "Módulo y cajas de oferta a pie de puesto: 167 datos en tres horas" },
    { src: fotoPortafolio("aniversario-paracas-gwm", 5), alt: "Módulo de marca con ruleta de premios atendido por un promotor", cap: "La ruleta no es adorno: es lo que hace que el visitante acepte dejar su dato" },
    { src: fotoPortafolio("gala-oficiales-la-reserva", 7), alt: "Fondo fotográfico impreso de una marca inmobiliaria en un evento", cap: "Fondo fotográfico: el punto donde la gente se hace la foto y la marca viaja sola" },
  ],
  "estructuras-publicitarias": [
    { src: fotoPortafolio("subaru-plaza-barranca", 1), alt: "Arco inflable de marca montado en una plaza durante una activación nocturna", cap: "Arco inflable en plaza: se monta en una hora y se ve desde la otra esquina" },
    { src: fotoPortafolio("enduro-yancay-subaru", 2), alt: "Arco de meta de una competencia montado en terreno desrtico", cap: "Arco de meta en terreno sin servicios: todo lo que se instala resiste viento y arena" },
    { src: fotoPortafolio("caballos-de-paso-2025", 1), alt: "Banderolas y estructuras de marca montadas en el circuito de un campeonato", cap: "Banderolas en circuito: la marca entra en el ambiente sin interrumpirlo" },
  ],
  "publicidad-movil": [
    { src: fotoPortafolio("xcmg-linea-amarilla-nazca", 5), alt: "Volquete rotulado con banderola de marca exhibido en la vía pública de Nazca", cap: "Unidad rotulada en calle: la marca se mueve a donde está el cliente" },
    { src: fotoPortafolio("grifo-repsol-jac", 3), alt: "Banderolas de marca junto a una unidad exhibida en la vía pública", cap: "Banderolas en punto de tránsito: el conductor que espera está quieto y aburrido" },
  ],
  btl: [
    { src: fotoPortafolio("mercado-santo-domingo-dfsk", 1), alt: "Módulo de activación montado en la calle del mercado de Santo Domingo, en Ica", cap: "Mercado de Santo Domingo: cuatro promotores y un supervisor, tres horas, 167 datos" },
    { src: fotoPortafolio("dia-del-maestro-derco", 1), alt: "Marco fotográfico de marca con asistentes en una celebración gremial", cap: "Día del Maestro: 238 datos de unas mil personas, sin abordar a nadie" },
    { src: fotoPortafolio("test-drive-changan-ica", 4), alt: "Comensales probando un vehículo a la salida de un restaurante en Ica", cap: "Pruebas de manejo a la salida del restaurante: en muchos casos terminó llevando al cliente a su casa" },
  ],
};

const shapeFor = (slug: string) => ((slug.charCodeAt(0) + slug.length) % 6) + 1;

export function generateStaticParams() {
  return allServicioSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const s = getServicio(slug);
  if (!s) return {};
  return buildMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/servicios/${s.slug}`,
    noindex: s.noindex,
    ogImage: `/assets/og/${s.slug}.png`,
  });
}

export default async function ServicioPage({ params }: Params) {
  const { slug } = await params;
  const s = getServicio(slug);
  if (!s) notFound();

  const parent =
    s.tipo === "servicio" && s.categoriaSlug ? getServicio(s.categoriaSlug) : undefined;

  const crumbs = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "/servicios" },
    ...(parent ? [{ name: parent.nombre, href: `/servicios/${parent.slug}` }] : []),
    { name: s.nombre, href: `/servicios/${s.slug}` },
  ];

  // ---- Categoría hub: grid de servicios hijos ----
  if (s.tipo === "categoria") {
    const children = getServiciosByCategoria(s.slug).map((c) => ({
      title: c.nombre,
      description: c.hero,
      href: `/servicios/${c.slug}`,
    }));
    return (
      <HubLanding
        breadcrumbs={crumbs}
        kicker={s.nombre}
        h1={s.h1}
        intro={s.hero}
        cta={s.cta}
        items={children}
        columns={children.length >= 3 ? 3 : 2}
        gridKicker="Servicios"
        gridHeading="Lo que incluye esta área."
        secciones={s.secciones}
        faq={s.faq}
        shape={shapeFor(s.slug)}
        extraSchema={collectionPageSchema({
          name: s.metaTitle,
          description: s.metaDescription,
          url: `/servicios/${s.slug}`,
        })}
      />
    );
  }

  // ---- Servicio: artículo completo + enlazado de silo ----
  const related: RelatedBlock[] = [];

  // Las pruebas van primero: una página que promete retorno y no enseña un
  // resultado medido es una promesa más. Solo aparece donde hay caso publicado.
  if (s.pruebas && s.pruebas.length) {
    related.push({ title: "La prueba", links: s.pruebas, columns: 2 });
  }

  const serviceLinks: RelatedLink[] = s.enlazaA.flatMap((sl) => {
    const r = getServicio(sl);
    return r ? [{ label: r.nombre, href: `/servicios/${r.slug}` }] : [];
  });
  if (serviceLinks.length) {
    related.push({
      title: "Servicios relacionados",
      links: serviceLinks,
      columns: serviceLinks.length >= 3 ? 3 : 2,
    });
  }

  const sectorLinks: RelatedLink[] = SECTORES.filter((sec) =>
    sec.serviciosQueUsa.includes(s.slug)
  ).map((sec) => ({ label: `Marketing ${sec.nombre.toLowerCase()}`, href: `/${sec.slug}` }));
  if (sectorLinks.length) {
    related.push({
      title: "Sectores donde lo aplicamos",
      links: sectorLinks,
      columns: sectorLinks.length >= 3 ? 3 : 2,
    });
  }

  // Ciudades que declaran usar este servicio (ciudades.ts → serviciosQueUsa).
  // Hasta ahora las 8 páginas de ciudad solo recibían el enlace del pie, que se
  // repite en las 92 y Google trata como plantilla, no como recomendación. Al
  // derivarlo del propio contenido, el enlace solo aparece donde es cierto.
  const ciudadLinks: RelatedLink[] = CIUDADES.filter((c) =>
    c.serviciosQueUsa.includes(s.slug)
  ).map((c) => ({ label: `Agencia de marketing en ${c.nombre}`, href: ciudadHref(c.slug) }));
  if (ciudadLinks.length) {
    related.push({
      title: "Dónde lo hacemos",
      links: ciudadLinks,
      columns: ciudadLinks.length >= 3 ? 3 : 2,
    });
  }

  return (
    <LandingArticle
      breadcrumbs={crumbs}
      kicker={parent?.nombre ?? "Servicio"}
      h1={s.h1}
      hero={s.hero}
      heroImage={SERVICE_IMG[s.slug]}
      galeria={SERVICE_GAL[s.slug]}
      ctaLabel={s.cta}
      proof={s.proof}
      secciones={s.secciones}
      incluye={s.incluye}
      beneficios={s.beneficios}
      proceso={s.proceso}
      tema={s.nombre}
      precios={getPrecios(s.slug)}
      related={related}
      faq={s.faq}
      cierre={s.cierre}
      shape={shapeFor(s.slug)}
      extraSchema={serviceSchema({
        serviceType: s.nombre,
        description: s.metaDescription,
        url: `/servicios/${s.slug}`,
      })}
    />
  );
}
