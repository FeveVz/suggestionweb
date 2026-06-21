/**
 * Datos de los 5 sectores (landings a raíz) + hub /sectores.
 * Copy literal de docs-fuente 08. Páginas de conversión, bajo volumen / alto win-rate.
 * serviciosQueUsa enlaza al silo de /servicios (enlazado interno).
 */

import type { Sector } from "./types";

/** Hub /sectores (doc 08 §0). Página propia. */
export const SECTORES_HUB = {
  metaTitle: "Marketing por Industria / Sectores | Suggestion",
  metaDescription:
    "Marketing de performance especializado por industria: inmobiliario, automotriz, turismo, marcas y salud. Elige tu sector y hablemos de tu caso.",
  h1: "Cada mercado tiene su perspectiva. Nosotros la entendemos.",
  intro:
    "No hacemos el mismo marketing para todos. Cada industria tiene su cliente, su ciclo y su forma de cerrar. Por eso trabajamos con un playbook propio por sector.",
  cta: "Hablemos de tu caso",
} as const;

export const SECTORES: Sector[] = [
  {
    slug: "marketing-inmobiliario",
    nombre: "Inmobiliario",
    metaTitle: "Marketing Inmobiliario que Vende Lotes | Suggestion",
    metaDescription:
      "Marketing inmobiliario que llena tu pipeline de citas calificadas, no de curiosos. Performance, drone y CRM para proyectos. Agenda una llamada.",
    h1: "Marketing inmobiliario que llena tu pipeline de citas",
    hero: "Tu problema no es la falta de interesados; es la falta de citas que cierran. Generamos leads calificados, los filtramos y los llevamos a tu sala de ventas listos para decidir.",
    cta: "Llenemos tu sala de ventas",
    proof:
      "Caso Inmobiliaria Ceinys: S/350K en ventas, 350 leads y 8 lotes vendidos con S/3,000 en Meta Ads.",
    secciones: [
      {
        h2: "Publicidad inmobiliaria que capta compradores",
        parrafo:
          "Campañas pensadas para el comprador peruano: el que busca su primer lote, el que invierte por plusvalía y el que valida estatus. A cada uno, su mensaje.",
      },
      {
        h2: "Para inmobiliarias y constructoras",
        parrafo:
          "Trabajamos el funnel completo de un proyecto: del lanzamiento a la separación, con material que vende la valorización antes que el ladrillo.",
      },
    ],
    serviciosQueUsa: [
      "publicidad-digital",
      "desarrollo-web",
      "crm-automatizacion",
      "produccion-audiovisual",
    ],
    faq: [
      {
        q: "¿Cómo vender un proyecto inmobiliario más rápido?",
        a: "Con leads bien segmentados, una landing que agende citas y un seguimiento automatizado que no deje enfriar al interesado. Eso es lo que hicimos con Ceinys.",
      },
      {
        q: "¿Trabajan preventa y lanzamiento?",
        a: "Sí, desde la etapa inicial, que es cuando la valorización vende sola.",
      },
    ],
    cierre: { h2: "Llenemos tu sala de ventas", cta: "Agenda una llamada" },
  },
  {
    slug: "marketing-automotriz",
    nombre: "Automotriz",
    metaTitle: "Marketing Automotriz para Concesionarios | Suggestion",
    metaDescription:
      "Marketing automotriz que lleva del clic al test drive: leads listos para cierre en piso. Campañas para concesionarios y autos. Agenda hoy.",
    h1: "Marketing automotriz: del clic al test drive",
    hero: "Un lead de auto que no llega al piso no sirve. Diseñamos campañas que no solo generan interesados: los califican y los empujan a la prueba de manejo, donde tu equipo cierra.",
    cta: "Llena tu piso de prospectos",
    secciones: [
      {
        h2: "Publicidad para venta de autos",
        parrafo:
          "Mensajes y ofertas que mueven la decisión: financiamiento, bono, modelo del mes. Lo que tu comprador necesita oír para agendar.",
      },
      {
        h2: "Leads para concesionarios",
        parrafo:
          "Generación y calificación de prospectos conectada a tu equipo comercial, para que ninguna oportunidad se quede sin llamada.",
      },
    ],
    serviciosQueUsa: [
      "publicidad-digital",
      "crm-automatizacion",
      "redes-sociales",
      "btl",
    ],
    faq: [
      {
        q: "¿Cómo bajar el costo por prueba de manejo?",
        a: "Con segmentación precisa, creatividades que filtran al curioso y un seguimiento rápido. Menos leads basura, más test drives reales.",
      },
    ],
    cierre: { h2: "Del clic al cierre en piso", cta: "Agenda una llamada" },
  },
  {
    slug: "marketing-turismo",
    nombre: "Turismo",
    metaTitle: "Marketing Turístico para Hoteles | Suggestion",
    metaDescription:
      "Marketing turístico que genera reservas reales en temporada y fuera de ella. Para hoteles, restaurantes y agencias de viaje. Agenda una llamada.",
    h1: "Marketing turístico que genera reservas reales",
    hero: "El reto del turismo no es solo llenar en temporada alta: es no vaciarse en la baja. Diseñamos campañas que generan reservas todo el año, con costo medido.",
    cta: "Llena tu temporada",
    proof:
      "Caso Hoteles Señor de Luren: 75 reservas generadas en una sola campaña, dentro y fuera de temporada.",
    secciones: [
      {
        h2: "Marketing para hoteles",
        parrafo:
          "Campañas de reservas directas que reducen tu dependencia de las OTAs y su comisión.",
      },
      {
        h2: "Marketing para restaurantes",
        parrafo:
          "Llena mesas en los días flojos con promociones y contenido que de verdad mueven al comensal.",
      },
    ],
    serviciosQueUsa: [
      "publicidad-digital",
      "redes-sociales",
      "produccion-audiovisual",
      "seo",
    ],
    faq: [
      {
        q: "¿Se puede generar reservas en temporada baja?",
        a: "Sí. Con ofertas segmentadas y campañas de demanda directa se llena la baja, como hicimos con Hoteles Señor de Luren.",
      },
    ],
    cierre: { h2: "Llena tu temporada (y la baja también)", cta: "Agenda una llamada" },
  },
  {
    slug: "marketing-marcas-consumo",
    nombre: "Marcas y consumo",
    metaTitle: "Marketing para Marcas y Consumo Masivo | Suggestion",
    metaDescription:
      "Marketing para marcas y consumo: demanda que se convierte en venta, no en likes. Posicionamiento, performance y activación. Agenda una llamada.",
    h1: "Marcas y consumo: demanda que se vuelve venta",
    hero: "Construir marca y vender no son cosas opuestas. Generamos demanda que se convierte en venta —no likes prestados— combinando posicionamiento, performance y presencia física.",
    cta: "Hagamos crecer tu marca",
    proof:
      "Caso Granjas Bonanza: 15 contratos cerrados con S/2,500 en campañas de demanda directa.",
    secciones: [
      {
        h2: "Marketing orientado a ventas",
        parrafo:
          "Cada acción de marca tiene una métrica de negocio detrás. Branding sí, pero que mueva la aguja de las ventas.",
      },
      {
        h2: "Merchandising y material para marcas",
        parrafo:
          "Reforzamos tu presencia con merchandising, material POP e impresión que tu cliente ve y usa.",
      },
    ],
    serviciosQueUsa: [
      "publicidad-digital",
      "branding",
      "produccion-audiovisual",
      "material-pop",
    ],
    faq: [
      {
        q: "¿El branding ayuda a vender más?",
        a: "Sí, cuando está atado a estrategia comercial. Una marca fuerte reduce la objeción de precio y acelera la decisión.",
      },
    ],
    cierre: { h2: "Demanda que se vuelve venta", cta: "Agenda una llamada" },
  },
  {
    slug: "marketing-salud",
    nombre: "Salud",
    metaTitle: "Marketing para Clínicas y Salud | Suggestion",
    metaDescription:
      "Marketing para clínicas, consultorios y profesionales de la salud: capta pacientes sin quemar presupuesto. Performance y web. Agenda una llamada.",
    h1: "Marketing para clínicas que capta pacientes",
    hero: "Más pacientes, sin quemar tu presupuesto en clics que no agendan. Diseñamos campañas para clínicas, consultorios y profesionales de la salud, enfocadas en llenar la agenda.",
    cta: "Llena tu agenda",
    secciones: [
      {
        h2: "Marketing y publicidad dental",
        parrafo:
          "El nicho con mayor demanda en salud. Campañas para clínicas y consultorios dentales que convierten búsquedas en citas.",
      },
      {
        h2: "Captación de pacientes",
        parrafo:
          "Generamos y calificamos pacientes potenciales, y los llevamos al agendamiento con un seguimiento que responde a tiempo.",
      },
      {
        h2: "Para consultorios y profesionales",
        parrafo:
          "Desde un consultorio independiente hasta un policlínico: presencia profesional y un flujo constante de pacientes.",
      },
    ],
    serviciosQueUsa: [
      "publicidad-digital",
      "desarrollo-web",
      "seo",
      "crm-automatizacion",
    ],
    faq: [
      {
        q: "¿Cómo conseguir más pacientes?",
        a: "Con campañas segmentadas por especialidad y zona, una web que transmita confianza y un seguimiento que no deje caer la cita.",
      },
    ],
    cierre: { h2: "Llena tu agenda de pacientes", cta: "Agenda una llamada" },
  },
];

export const getSector = (slug: string): Sector | undefined =>
  SECTORES.find((s) => s.slug === slug);

export const allSectorSlugs = (): string[] => SECTORES.map((s) => s.slug);
