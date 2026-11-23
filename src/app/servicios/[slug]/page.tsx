import { anclaSector } from "@/content/navegacion";
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
import { BLOG_POSTS } from "@/content/blog";
import { CIUDADES, ciudadHref } from "@/content/ciudades";
import { getPrecios } from "@/content/precios";
import { fotoPortafolio, FOTOS_PORTAFOLIO } from "@/content/portafolio-fotos";
import { PORTAFOLIO } from "@/content/portafolio";
import CotizadorGigantografia from "@/components/CotizadorGigantografia";

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
  // Antes usaba la misma foto que Letreros luminosos (las letras corpóreas de
  // Autoniza). Cambiada el 22-nov-2026 por elección del owner.
  "estructuras-publicitarias": { src: "/assets/servicios/estructuras-panel-instalacion-nocturna.webp", alt: "Elevador de tijera junto a un panel publicitario durante su instalación nocturna", w: 900, h: 1125 },
  // Fotos y diseños propios elegidos el 22-nov-2026 (ver scripts/imagenes-propias.mjs).
  "redes-sociales": { src: "/assets/servicios/redes-sociales-post-al-toque.webp", alt: "Publicación para redes de Al Toque Venezolano: un plato de parrilla con salsa verde", w: 1080, h: 1350 },
  branding: { src: "/assets/servicios/branding-empaque-aura-andina.webp", alt: "Empaque negro con detalles cobre del suplemento Black Maca Reserve de Aura Andina", w: 1254, h: 1254 },
  merchandising: { src: "/assets/servicios/merchandising-gorra-bordada.webp", alt: "Gorra azul bordada con los logos de Renault y Alpine", w: 1600, h: 1200 },
  consultoria: { src: "/assets/servicios/consultoria-taller-plan-de-negocios.webp", alt: "Presentación del plan de negocios 2025 de Pacífico Motors ante su equipo, en una sala de reuniones", w: 1600, h: 1200 },
  // La página habla sobre todo de bicivallas y tenía la foto de un auto de
  // test drive (owner, 22-nov-2026). Ahora, la campaña de Little Caesars.
  "publicidad-movil": { src: "/assets/servicios/bicivalla-little-caesars-en-ruta.webp", alt: "Bicivalla de Little Caesars con el mensaje «¡Hola Ica!» circulando entre mototaxis por una avenida de Ica", w: 1404, h: 1050 },
  gigantografias: delPortafolio("ahorra-o-nunca-despliegue", 1, "Gigantografía impresa instalada en la fachada de vidrio de un concesionario en Ica"),
  "letreros-luminosos": delPortafolio("relanzamiento-mitsubishi-autoniza", 4, "Letras corpóreas iluminadas y estructura de marca montadas en la fachada de una tienda en Ica"),
  "eventos-corporativos": delPortafolio("inauguracion-autoplan", 2, "Exhibición vehicular protocolar en la inauguración del local de Autoplan"),
};

/**
 * Fotos del trabajo real por servicio. Solo en los servicios de producción y
 * eventos: poner estas fotos en una página de SEO o de CRM sería relleno.
 */
const SERVICE_GAL: Record<string, { src: string; alt: string; cap: string }[]> = {
  imprenta: [
    { src: fotoPortafolio("changan-cs15-presentacion", 2), alt: "Ficha impresa sobre el techo de un vehículo con las características del modelo y un código QR", cap: "Ficha de techo con QR" },
    { src: fotoPortafolio("gira-conduce-tu-rumbo", 4), alt: "Roll-up impreso con código QR y ruleta de premios de una campaña", cap: "Roll-up con el QR de la dinámica" },
    { src: fotoPortafolio("ahorra-o-nunca-despliegue", 2), alt: "Colgantes y banderolas impresos instalados en la sala de ventas", cap: "El mismo arte adaptado a cada formato" },
  ],
  "material-pop": [
    { src: fotoPortafolio("mercado-santo-domingo-dfsk", 2), alt: "Módulo de marca con cajas de oferta en la calle del mercado de Santo Domingo", cap: "Módulo y cajas de oferta a pie de puesto: 167 datos en tres horas" },
    { src: fotoPortafolio("aniversario-paracas-gwm", 5), alt: "Módulo de marca con ruleta de premios atendido por un promotor", cap: "Ruleta de premios: a cambio de girarla, el visitante deja su dato" },
    { src: fotoPortafolio("gala-oficiales-la-reserva", 7), alt: "Fondo fotográfico impreso de una marca inmobiliaria en un evento", cap: "Fondo fotográfico: la gente se toma la foto con la marca y la comparte" },
    { src: "/assets/servicios/pop-totem-ficha-sala.webp", alt: "Tótem con la ficha del Renault Arkana junto a la unidad en la sala de Pacífico Motors", cap: "Tótem con la ficha del modelo al lado del auto" },
    { src: "/assets/servicios/pop-colgante-sala.webp", alt: "Colgante impreso del Renault Duster sobre los autos exhibidos en la sala de Pacífico Motors", cap: "Colgante sobre los autos de la exhibición" },
  ],
  "eventos-corporativos": [
    { src: "/assets/servicios/eventos-lanzamiento-cusco-1.webp", alt: "Invitados con carteles del nuevo Renault Arkana en su lanzamiento en Pacífico Motors Cusco", cap: "Lanzamiento del Renault Arkana en Pacífico Motors Cusco" },
    { src: "/assets/servicios/eventos-lanzamiento-cusco-2.webp", alt: "Invitadas junto a la anfitriona del lanzamiento del Renault Arkana en Cusco", cap: "Invitadas con el cartel del nuevo modelo" },
  ],
  "estructuras-publicitarias": [
    { src: fotoPortafolio("subaru-plaza-barranca", 1), alt: "Arco inflable de marca montado en una plaza durante una activación nocturna", cap: "Arco inflable en plaza: se monta en una hora" },
    { src: fotoPortafolio("enduro-yancay-subaru", 2), alt: "Arco de meta de una competencia montado en terreno desértico", cap: "Arco de meta en terreno sin servicios, montado para resistir viento y arena" },
    { src: fotoPortafolio("caballos-de-paso-2025", 1), alt: "Banderolas y estructuras de marca montadas en el circuito de un campeonato", cap: "Banderolas de marca en el circuito del campeonato" },
  ],
  // Bicivallas de Little Caesars: cuatro días de octubre de 2026 por la
  // inauguración de su local en Ica (registro fotográfico entregado al cliente).
  "publicidad-movil": [
    { src: "/assets/servicios/bicivalla-little-caesars-noche.webp", alt: "Bicivalla de Little Caesars estacionada de noche en una esquina de Ica", cap: "Little Caesars, de noche: la ruta corría de 5:30 a 9:30 p. m. con el panel LED encendido" },
    { src: "/assets/servicios/bicivalla-little-caesars-inauguracion.webp", alt: "Bicivalla junto a la entrada del local nuevo de Little Caesars el día de la inauguración", cap: "La bicivalla en la apertura del local" },
    { src: "/assets/servicios/bicivalla-little-caesars-ruta-1.webp", alt: "Mapa de la ruta 1 de la bicivalla por el centro de Ica, con sus paradas numeradas", cap: "Ruta 1, diseñada para la campaña: 2.3 km por vuelta, unos 25 minutos con paradas frente a 8 locales de comida" },
    { src: fotoPortafolio("xcmg-linea-amarilla-nazca", 5), alt: "Volquete rotulado con banderola de marca exhibido en la vía pública de Nazca", cap: "Volquete rotulado con banderola, en una calle de Nazca" },
  ],
  "produccion-audiovisual": [
    { src: "/assets/servicios/audiovisual-sesion-dunas.webp", alt: "Camioneta de test drive rotulada, fotografiada en lo alto de una duna en Ica al atardecer", cap: "Sesión en las dunas de Ica con la unidad de test drive, al atardecer" },
    { src: "/assets/servicios/audiovisual-making-of-restaurante.webp", alt: "Rodaje dentro de Al Toque Venezolano: la presentadora con micrófono de solapa y un camarógrafo junto a la cámara en trípode", cap: "Grabación dentro de Al Toque Venezolano" },
  ],
  btl: [
    { src: fotoPortafolio("mercado-santo-domingo-dfsk", 1), alt: "Módulo de activación montado en la calle del mercado de Santo Domingo, en Ica", cap: "Mercado de Santo Domingo: cuatro promotores y un supervisor, tres horas, 167 datos" },
    { src: fotoPortafolio("dia-del-maestro-derco", 1), alt: "Marco fotográfico de marca con asistentes en una celebración gremial", cap: "Día del Maestro: 238 datos de unas mil personas, sin abordar a nadie" },
    { src: fotoPortafolio("test-drive-changan-ica", 4), alt: "Comensales probando un vehículo a la salida de un restaurante en Ica", cap: "Pruebas de manejo a la salida del restaurante; muchas terminaban llevando al cliente a su casa" },
  ],
};

/** Prueba para quien compra producción física: el trabajo hecho, no cifras de ventas ajenas a su pedido. */
const PROOF_PRODUCCION = `${PORTAFOLIO.length} activaciones documentadas con fotos propias, tomadas en el montaje: gigantografías, módulos de marca, estructuras, unidades rotuladas y cortatráfico.`;
/** Servicios cuyo plan es la gestión de pauta: la inversión en anuncios va aparte (auditoría CRO-13). */
const SERVICIOS_PAUTA = new Set(["publicidad-digital", "meta-ads", "marketing-digital"]);
const SERVICIOS_PRODUCCION = new Set(["imprenta", "material-pop", "estructuras-publicitarias", "publicidad-movil", "merchandising", "btl", "gigantografias", "letreros-luminosos"]);

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

  // Lecturas escritas a mano + los artículos que derivan a este servicio
  // (moneyPage) y aún no estaban. Cada artículo enlazaba a su servicio, pero
  // el servicio no le devolvía el enlace: 21 artículos dependían solo del blog
  // y de otros artículos, y en noviembre de 2026 Search Console mostraba
  // varios de ellos sin rastrear desde julio. Sin tope, branding sumaría 8.
  const guias: RelatedLink[] = BLOG_POSTS.filter((p) => p.moneyPage.href === `/servicios/${s.slug}`)
    .map((p) => ({ label: p.h1, href: `/blog/${p.categoria}/${p.slug}` }))
    .filter((g) => !s.lecturas?.some((l) => l.href === g.href));
  const lecturas = [...(s.lecturas ?? []), ...guias].slice(0, 8);
  if (lecturas.length) {
    related.push({ title: "Para decidir mejor", links: lecturas, columns: 2 });
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
  ).map((sec) => ({ label: anclaSector(sec.slug, sec.nombre), href: `/${sec.slug}` }));
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
  ).map((c) => ({
    label:
      c.btl && ["btl", "publicidad-movil", "eventos-corporativos"].includes(s.slug)
        ? `BTL en ${c.nombre}, con equipo propio`
        : `Agencia de marketing en ${c.nombre}`,
    href: ciudadHref(c.slug),
  }));
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
      enCorto={s.enCorto}
      heroImage={SERVICE_IMG[s.slug]}
      galeria={SERVICE_GAL[s.slug]}
      ctaLabel={s.cta}
      proof={s.proof ?? (SERVICIOS_PRODUCCION.has(s.slug) ? PROOF_PRODUCCION : undefined)}
      secciones={s.secciones}
      incluye={s.incluye}
      beneficios={s.beneficios}
      proceso={s.proceso}
      tema={s.nombre}
      especificaciones={s.especificaciones}
      cotizador={s.cotizador === "gigantografias" ? <CotizadorGigantografia /> : undefined}
      precios={getPrecios(s.slug)}
      notaPrecios={SERVICIOS_PAUTA.has(s.slug) ? "Es el precio de la gestión: la inversión en anuncios se paga aparte." : undefined}
      related={related}
      faq={s.faq}
      cierre={s.cierre}
      porQue={s.slug === "btl" ? "btl" : undefined}
      coberturaTitulo={s.slug === "btl" ? "En Ica, en Nazca y en todo el Perú." : undefined}
      shape={shapeFor(s.slug)}
      extraSchema={serviceSchema({
        serviceType: s.nombre,
        description: s.metaDescription,
        url: `/servicios/${s.slug}`,
        planes: SERVICIOS_PRODUCCION.has(s.slug) ? undefined : getPrecios(s.slug),
      })}
    />
  );
}
