import { notFound } from "next/navigation";
import LandingArticle, { type RelatedBlock } from "@/components/LandingArticle";
import CotizadorGigantografia from "@/components/CotizadorGigantografia";
import { paginaDeServicio } from "@/lib/schema";
import { getServicioCiudad, serviciosDeCiudad } from "@/content/servicios-ciudad";
import { getCiudad, ciudadHref } from "@/content/ciudades";
import { getServicio } from "@/content/servicios";
import { fotoPortafolio, FOTOS_PORTAFOLIO } from "@/content/portafolio-fotos";
import { PORTAFOLIO } from "@/content/portafolio";

/** Foto de portafolio con sus medidas reales (next/image las necesita). */
const delPortafolio = (slug: string, n: number, alt: string) => {
  const m = FOTOS_PORTAFOLIO[slug]?.[n - 1];
  return { src: fotoPortafolio(slug, n), alt, w: m?.[0], h: m?.[1] };
};

/**
 * Portada: el trabajo con mejor acabado de cada servicio. En producción lo que
 * decide al cliente es la terminación (owner, 23-nov-2026: «lo que se busca es
 * el acabado, no interesa para qué ciudad sea el trabajo»), así que se elige
 * por calidad, no por dónde se hizo.
 */
const PORTADA: Record<string, { src: string; alt: string; w?: number; h?: number }> = {
  imprenta: { src: "/assets/servicios/pop-colgante-sala.webp", alt: "Colgante impreso a todo color del Renault Duster, con fotos del motor y del interior, sobre la sala de exhibición", w: 750, h: 1000 },
  gigantografias: delPortafolio("aniversario-paracas-gwm", 1, "Gigantografía de lona impresa a todo color con una campaña de Pacífico Motors, junto a una ruleta de premios, en un festival nocturno"),
  merchandising: { src: "/assets/servicios/merchandising-gorra-bordada.webp", alt: "Gorra azul con los logos de Renault y Alpine bordados", w: 1600, h: 1200 },
  "material-pop": delPortafolio("gira-conduce-tu-rumbo", 2, "Módulo de AutoPlan en un centro comercial: mostrador iluminado, roll-ups con código QR y exhibidores impresos"),
};

/** Más trabajo propio por servicio, con el acabado en el pie de foto. */
const GALERIA: Record<string, { src: string; alt: string; cap: string }[]> = {
  imprenta: [
    { src: fotoPortafolio("changan-cs15-presentacion", 2), alt: "Ficha impresa sobre el techo de un vehículo con las características del modelo y un código QR", cap: "Ficha impresa con QR para el techo de un auto en exhibición" },
    { src: fotoPortafolio("gira-conduce-tu-rumbo", 4), alt: "Roll-up impreso con código QR y ruleta de premios de una campaña", cap: "Roll-up con el QR de la dinámica de una campaña" },
    { src: fotoPortafolio("ahorra-o-nunca-despliegue", 2), alt: "Colgantes y banderolas impresos instalados en la sala de ventas", cap: "Colgantes y banderolas impresos para la sala de un concesionario" },
  ],
  gigantografias: [
    { src: fotoPortafolio("ahorra-o-nunca-despliegue", 1), alt: "Gigantografía impresa en la fachada de vidrio de un concesionario", cap: "Gigantografía de fachada sobre vidrio, impresa a todo color" },
    { src: fotoPortafolio("caballos-de-paso-2025", 1), alt: "Banderolas y estructuras de marca montadas en el circuito de un campeonato", cap: "Banderolas textiles de marca en el circuito de un campeonato" },
    { src: fotoPortafolio("gira-conduce-tu-rumbo", 4), alt: "Roll-up impreso con código QR y ruleta de premios de una campaña", cap: "Roll-up textil para una activación" },
  ],
  merchandising: [
    { src: "/assets/sectores/marcas-el-charcutero-gorra-pack.webp", alt: "Gorra de El Charcutero junto a un pack de cerveza y una caja de chorizo artesanal", cap: "Gorra con la marca de El Charcutero, junto a su empaque" },
  ],
  "material-pop": [
    { src: "/assets/servicios/pop-totem-ficha-sala.webp", alt: "Tótem con la ficha del Renault Arkana junto a la unidad en la sala de Pacífico Motors", cap: "Tótem con la ficha del modelo, junto al auto" },
    { src: "/assets/servicios/pop-colgante-sala.webp", alt: "Colgante impreso del Renault Duster sobre los autos exhibidos en la sala de Pacífico Motors", cap: "Colgante sobre los autos de la exhibición" },
    { src: fotoPortafolio("mercado-santo-domingo-dfsk", 2), alt: "Módulo de marca con cajas de oferta en la calle del mercado de Santo Domingo", cap: "Módulo de marca y cajas de oferta impresas para una activación en un mercado" },
  ],
};

/**
 * Página de producción con envío a otra región (/imprenta-en-ayacucho…).
 * Misma plantilla que los servicios, con lo propio de la ciudad: miga por la
 * página de agencia de esa ciudad, cobertura de envío (no de instalación) y
 * enlaces cruzados entre los servicios de la misma ciudad.
 */
export default function ServicioCiudadPage({ slug }: { slug: string }) {
  const p = getServicioCiudad(slug);
  if (!p) notFound();
  const ciudad = getCiudad(p.ciudad);
  const base = getServicio(p.servicio);
  const url = `/${p.slug}`;

  const hermanos = serviciosDeCiudad(p.ciudad).filter((s) => s.slug !== p.slug);
  const related: RelatedBlock[] = [
    {
      title: `También para ${p.ciudadNombre}`,
      columns: 2,
      links: [
        ...hermanos.map((s) => ({ label: s.nombre, href: `/${s.slug}` })),
        ...(ciudad ? [{ label: `Agencia de publicidad y marketing digital en ${p.ciudadNombre}`, href: ciudadHref(ciudad.slug) }] : []),
      ],
    },
    { title: "Para decidir mejor", columns: 2, links: p.lecturas },
  ];

  return (
    <LandingArticle
      breadcrumbs={[
        { name: "Inicio", href: "/" },
        ...(ciudad ? [{ name: p.ciudadNombre, href: ciudadHref(ciudad.slug) }] : []),
        { name: p.nombre, href: url },
      ]}
      kicker={`${base?.nombre ?? p.nombre} · ${p.ciudadNombre}`}
      h1={p.h1}
      hero={p.hero}
      enCorto={p.enCorto}
      heroImage={PORTADA[p.servicio]}
      galeria={GALERIA[p.servicio]}
      ctaLabel={p.cta}
      proof={`${PORTAFOLIO.length} activaciones y piezas documentadas con fotos propias · Ya trabajamos con empresas de ${p.ciudadNombre} · Producción en Ica y envío por agencia de carga`}
      secciones={p.secciones}
      incluye={p.incluye}
      tema={p.tema}
      especificaciones={p.especificaciones}
      cotizador={p.cotizador === "gigantografias" ? <CotizadorGigantografia titulo={`Arma tu gigantografía para ${p.ciudadNombre} y cotízala por WhatsApp`} /> : undefined}
      related={related}
      faq={p.faq}
      cierre={p.cierre}
      porQue="envio"
      coberturaTitulo={`Producimos en Ica, enviamos a ${p.ciudadNombre}.`}
      cobertura={`Despachamos a ${p.ciudadNombre} y sus provincias por agencia de carga terrestre, con el flete cotizado aparte y la fecha de entrega acordada al cotizar. No tenemos local en ${p.ciudadNombre} ni instalamos allá: el pedido llega listo para usar o colocar. Todo se coordina por WhatsApp y sale con factura.`}
      shape={((slug.length + slug.charCodeAt(0)) % 6) + 1}
      extraSchema={paginaDeServicio({
        nombrePagina: p.metaTitle.replace(" | Suggestion", ""),
        resumen: true,
        serviceType: p.nombre,
        description: p.metaDescription,
        url,
        areaServedCity: p.ciudadNombre,
        imagen: PORTADA[p.servicio]?.src,
        categoria: "Producción y publicidad física",
      })}
    />
  );
}
