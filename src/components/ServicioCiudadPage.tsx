import { notFound } from "next/navigation";
import LandingArticle, { type RelatedBlock } from "@/components/LandingArticle";
import CotizadorGigantografia from "@/components/CotizadorGigantografia";
import { paginaDeServicio } from "@/lib/schema";
import { getServicioCiudad, serviciosDeCiudad } from "@/content/servicios-ciudad";
import { getCiudad, ciudadHref } from "@/content/ciudades";
import { getServicio } from "@/content/servicios";
import { fotoPortafolio } from "@/content/portafolio-fotos";
import { PORTAFOLIO } from "@/content/portafolio";

/**
 * Trabajo propio por servicio. Son piezas producidas en Ica (de ahí sale todo
 * lo que se envía), así que el pie dice dónde se tomó la foto: no se presenta
 * como trabajo hecho en la otra ciudad.
 */
const GALERIA: Record<string, { src: string; alt: string; cap: string }[]> = {
  imprenta: [
    { src: fotoPortafolio("changan-cs15-presentacion", 2), alt: "Ficha impresa sobre el techo de un vehículo con las características del modelo y un código QR", cap: "Ficha de techo con QR, impresa para una presentación en Ica" },
    { src: fotoPortafolio("gira-conduce-tu-rumbo", 4), alt: "Roll-up impreso con código QR y ruleta de premios de una campaña", cap: "Roll-up con el QR de la dinámica de una campaña" },
    { src: fotoPortafolio("ahorra-o-nunca-despliegue", 2), alt: "Colgantes y banderolas impresos instalados en la sala de ventas", cap: "Colgantes y banderolas en la sala de un concesionario de Ica" },
  ],
  gigantografias: [
    { src: fotoPortafolio("ahorra-o-nunca-despliegue", 1), alt: "Gigantografía impresa en la fachada de vidrio de un concesionario", cap: "Gigantografía de fachada para un concesionario de Ica" },
    { src: fotoPortafolio("caballos-de-paso-2025", 1), alt: "Banderolas y estructuras de marca montadas en el circuito de un campeonato", cap: "Banderolas de marca en el circuito de un campeonato en Ica" },
    { src: fotoPortafolio("gira-conduce-tu-rumbo", 4), alt: "Roll-up impreso con código QR y ruleta de premios de una campaña", cap: "Roll-up textil para una activación" },
  ],
  merchandising: [
    { src: "/assets/servicios/merchandising-gorra-bordada.webp", alt: "Gorra azul bordada con los logos de Renault y Alpine", cap: "Gorra bordada con dos logos, producida para un concesionario" },
    { src: "/assets/sectores/marcas-el-charcutero-gorra-pack.webp", alt: "Gorra de El Charcutero junto a un pack de cerveza y una caja de chorizo artesanal", cap: "Gorra y empaque de El Charcutero, una marca de Ica" },
  ],
  "material-pop": [
    { src: "/assets/servicios/pop-totem-ficha-sala.webp", alt: "Tótem con la ficha del Renault Arkana junto a la unidad en la sala de Pacífico Motors", cap: "Tótem con la ficha del modelo, junto al auto" },
    { src: "/assets/servicios/pop-colgante-sala.webp", alt: "Colgante impreso del Renault Duster sobre los autos exhibidos en la sala de Pacífico Motors", cap: "Colgante sobre los autos de la exhibición" },
    { src: fotoPortafolio("mercado-santo-domingo-dfsk", 2), alt: "Módulo de marca con cajas de oferta en la calle del mercado de Santo Domingo", cap: "Módulo y cajas de oferta en el mercado de Santo Domingo, Ica" },
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
        categoria: "Producción y publicidad física",
      })}
    />
  );
}
