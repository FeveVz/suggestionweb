/**
 * Datos de los 5 sectores (landings a raíz) + hub /sectores.
 * Copy literal de docs-fuente 08. Páginas de conversión, bajo volumen / alto win-rate.
 * serviciosQueUsa enlaza al silo de /servicios (enlazado interno).
 */

import type { Sector, ItemTT, Paso } from "./types";

/** Hub /sectores (doc 08 §0). Página propia. */
export const SECTORES_HUB = {
  metaTitle: "Marketing por Industria en Perú | Sectores | Suggestion",
  metaDescription:
    "Marketing de performance por industria en Perú: inmobiliario, automotriz, turismo, marcas, salud, agroexportación y pisco/vino. Elige tu sector y hablemos.",
  h1: "Cada mercado tiene su perspectiva. Nosotros la entendemos.",
  intro:
    "No hacemos el mismo marketing para todos. Cada industria tiene su cliente, su ciclo y su forma de cerrar. Por eso trabajamos con un playbook propio por sector.",
  cta: "Hablemos de tu caso",
} as const;

export const SECTORES: Sector[] = [
  {
    slug: "marketing-inmobiliario",
    nombre: "Inmobiliario",
    metaTitle: "Marketing Inmobiliario en Ica que Vende Lotes | Suggestion",
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
    metaTitle: "Marketing Automotriz en Ica para Concesionarios | Suggestion",
    metaDescription:
      "Marketing automotriz que lleva del clic al test drive: leads listos para cierre en piso. Campañas para concesionarios y autos. Agenda hoy.",
    h1: "Marketing automotriz: del clic al test drive",
    hero: "Un lead de auto que no llega al piso no sirve. Diseñamos campañas que no solo generan interesados: los califican y los empujan a la prueba de manejo, donde tu equipo cierra.",
    cta: "Llena tu piso de prospectos",
    proof:
      "Caso Pacífico Motors: operamos los planes de marketing de su red de concesionarios (Mazda, Suzuki, Subaru, Changan, JAC, Renault y más) en Ica y Cusco.",
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
    metaTitle: "Marketing Turístico en Ica para Hoteles | Suggestion",
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
    metaTitle: "Marketing para Consumo Masivo en Ica y Perú | Suggestion",
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
    metaTitle: "Marketing para Clínicas y Salud en Ica | Suggestion",
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
  {
    slug: "marketing-agroexportacion",
    nombre: "Agroexportación",
    metaTitle: "Marketing para Agroexportadoras de Ica y Perú | Suggestion",
    metaDescription:
      "Marketing y web B2B para agroexportadoras: presencia internacional, fichas de producto, ferias y CRM para cerrar con importadores. Agenda una llamada.",
    h1: "Marketing para agroexportadoras que abren mercados",
    hero: "Tu producto ya compite en calidad; falta que el importador correcto te encuentre y confíe. Construimos tu presencia B2B —web, catálogo y contenido institucional— para abrir mercados en EE.UU., Europa y Asia desde Ica.",
    cta: "Abramos nuevos mercados",
    proof:
      "Operamos desde Ica, capital agroexportadora del Perú: conocemos el calendario de campaña, las ferias del rubro y al comprador internacional.",
    secciones: [
      {
        h2: "Presencia B2B que genera confianza internacional",
        parrafo:
          "El importador investiga antes de escribir. Una web profesional —en inglés y español—, con tus certificaciones, fichas técnicas y trazabilidad, convierte la búsqueda en una reunión.",
      },
      {
        h2: "Del campo a la feria",
        parrafo:
          "Preparamos tu marca para Expoalimentaria, Fruit Logistica y rondas de negocio: catálogo, presentación institucional y contenido audiovisual que muestra tu operación y tu estándar.",
      },
    ],
    serviciosQueUsa: [
      "desarrollo-web",
      "branding",
      "crm-automatizacion",
      "produccion-audiovisual",
    ],
    faq: [
      {
        q: "¿Por qué una agroexportadora necesita marketing?",
        a: "Porque el comprador internacional elige también por confianza y profesionalismo. Una marca sólida, una web B2B clara y contenido que muestre tu estándar abren puertas que solo el producto no abre.",
      },
      {
        q: "¿Trabajan web y contenido en inglés?",
        a: "Sí. Desarrollamos tu presencia en inglés y español, pensada para el importador, con fichas técnicas y certificaciones a la vista.",
      },
    ],
    cierre: { h2: "Llevemos tu marca al mundo", cta: "Agenda una llamada" },
  },
  {
    slug: "marketing-pisco-vino",
    nombre: "Pisco y Vino",
    metaTitle: "Marketing para Bodegas de Pisco y Vino en Ica | Suggestion",
    metaDescription:
      "Marketing para bodegas de pisco y vino: branding premium, e-commerce, enoturismo y contenido que cuenta tu tradición y vende. Agenda una llamada.",
    h1: "Marketing para bodegas de pisco y vino",
    hero: "Tu pisco tiene historia y medallas; falta que más gente la conozca y la compre. Unimos branding premium, e-commerce y enoturismo para que tu bodega venda dentro y fuera de Ica.",
    cta: "Hagamos crecer tu bodega",
    proof:
      "Desde Ica, tierra del pisco: conocemos la tradición, la ruta del pisco y al consumidor que busca lo auténtico.",
    secciones: [
      {
        h2: "Branding premium que justifica el precio",
        parrafo:
          "Una etiqueta y una historia bien contadas valen más que un descuento. Construimos la identidad que hace que tu pisco o tu vino se perciba —y se pague— como lo que es.",
      },
      {
        h2: "Vende en línea y recibe en bodega",
        parrafo:
          "Montamos tu tienda online para vender a todo el país y trabajamos el enoturismo: visitas, catas y experiencias que llenan tu bodega y fidelizan al cliente.",
      },
    ],
    serviciosQueUsa: [
      "branding",
      "desarrollo-web",
      "produccion-audiovisual",
      "publicidad-digital",
    ],
    faq: [
      {
        q: "¿Cómo vender más pisco o vino por internet?",
        a: "Con una tienda online clara, fotografía que da deseo de comprar y campañas segmentadas por ocasión (regalo, fechas, corporativo). Lo armamos completo, del catálogo al cierre.",
      },
      {
        q: "¿Trabajan enoturismo y visitas a la bodega?",
        a: "Sí. Promovemos tus visitas, catas y experiencias con contenido y pauta, y montamos el sistema de reservas para que la agenda no dependa solo de la temporada.",
      },
    ],
    cierre: { h2: "Tu bodega merece más mesas", cta: "Agenda una llamada" },
  },
];

export const getSector = (slug: string): Sector | undefined =>
  SECTORES.find((s) => s.slug === slug);

export const allSectorSlugs = (): string[] => SECTORES.map((s) => s.slug);

/**
 * AST por sector: beneficios + proceso propios de cada vertical (el "qué
 * incluye" lo cubre el bloque "Lo que ponemos a trabajar" = serviciosQueUsa).
 */
export const SECTOR_AST: Record<string, { beneficios: ItemTT[]; proceso: Paso[] }> = {
  "marketing-inmobiliario": {
    beneficios: [
      { titulo: "Citas, no curiosos", texto: "Filtramos al interesado real y lo llevamos a tu sala de ventas listo para decidir." },
      { titulo: "Funnel completo del proyecto", texto: "Del lanzamiento a la separación, con pauta, landing, drone y CRM conectados." },
      { titulo: "Valorización que vende", texto: "Mensajes de plusvalía y etapa inicial que activan al inversor." },
      { titulo: "Seguimiento que no enfría", texto: "CRM y respuesta rápida para que ningún lead de alto valor se pierda." },
    ],
    proceso: [
      { paso: "01", titulo: "Leemos", texto: "Auditamos tu proyecto, tu comprador y tu funnel de ventas." },
      { paso: "02", titulo: "Captamos", texto: "Pauta segmentada + landing del proyecto que agenda citas." },
      { paso: "03", titulo: "Calificamos", texto: "Filtramos y nutrimos con CRM hasta la visita." },
      { paso: "04", titulo: "Cerramos", texto: "Reportamos citas, visitas y separaciones; iteramos." },
    ],
  },
  "marketing-automotriz": {
    beneficios: [
      { titulo: "Leads que llegan al piso", texto: "Filtramos al curioso y empujamos a la prueba de manejo." },
      { titulo: "Ofertas que mueven", texto: "Financiamiento, bono y modelo del mes con el mensaje correcto." },
      { titulo: "Conectado a tu equipo", texto: "Generación y calificación enlazadas a tu fuerza comercial." },
      { titulo: "Menos costo por venta", texto: "Seguimiento rápido que baja el costo por test drive y cierre." },
    ],
    proceso: [
      { paso: "01", titulo: "Leemos", texto: "Analizamos tu marca, tus modelos y tu proceso comercial." },
      { paso: "02", titulo: "Captamos", texto: "Campañas que generan y filtran prospectos de compra." },
      { paso: "03", titulo: "Agendamos", texto: "Calificación + seguimiento que lleva al test drive." },
      { paso: "04", titulo: "Medimos", texto: "Reportamos pruebas de manejo y cierres; optimizamos." },
    ],
  },
  "marketing-turismo": {
    beneficios: [
      { titulo: "Reservas directas", texto: "Menos dependencia de las OTAs y su comisión." },
      { titulo: "Llena la temporada baja", texto: "Ofertas segmentadas que mueven en los días flojos." },
      { titulo: "El lugar se vende mostrándolo", texto: "Audiovisual que despierta el deseo de reservar." },
      { titulo: "Costo medido", texto: "Cada campaña con su costo por reserva claro." },
    ],
    proceso: [
      { paso: "01", titulo: "Leemos", texto: "Entendemos tu temporada, tu huésped y tu competencia." },
      { paso: "02", titulo: "Creamos", texto: "Contenido y ofertas que generan reserva directa." },
      { paso: "03", titulo: "Convertimos", texto: "Pauta + seguimiento que cierra la reserva." },
      { paso: "04", titulo: "Medimos", texto: "Reportamos reservas y costo; ajustamos por temporada." },
    ],
  },
  "marketing-marcas-consumo": {
    beneficios: [
      { titulo: "Demanda que vende", texto: "Branding atado a métricas de negocio, no a likes." },
      { titulo: "Punto de venta ganado", texto: "Material POP y merchandising que mueven el lineal." },
      { titulo: "Marca que justifica el precio", texto: "Posicionamiento que reduce la objeción de precio." },
      { titulo: "Contenido que vende producto", texto: "Audiovisual que despierta la compra." },
    ],
    proceso: [
      { paso: "01", titulo: "Leemos", texto: "Analizamos tu categoría, tu shopper y tu competencia." },
      { paso: "02", titulo: "Moldeamos", texto: "Posicionamiento, mensaje y mezcla digital + física." },
      { paso: "03", titulo: "Activamos", texto: "Pauta, contenido y presencia en el punto de venta." },
      { paso: "04", titulo: "Medimos", texto: "Reportamos demanda y venta; iteramos." },
    ],
  },
  "marketing-salud": {
    beneficios: [
      { titulo: "Pacientes que agendan", texto: "Campañas segmentadas por especialidad y zona." },
      { titulo: "Web que da confianza", texto: "En salud, la confianza es la que decide la cita." },
      { titulo: "Menos presupuesto quemado", texto: "Apuntamos a quien sí busca tu servicio." },
      { titulo: "Menos ausencias", texto: "Recordatorios y seguimiento que sostienen la agenda." },
    ],
    proceso: [
      { paso: "01", titulo: "Leemos", texto: "Entendemos tu especialidad, tu zona y tu paciente." },
      { paso: "02", titulo: "Captamos", texto: "Pauta segmentada + web que transmite confianza." },
      { paso: "03", titulo: "Agendamos", texto: "Seguimiento y recordatorios hasta la cita." },
      { paso: "04", titulo: "Medimos", texto: "Reportamos citas y costo por paciente; optimizamos." },
    ],
  },
  "marketing-agroexportacion": {
    beneficios: [
      { titulo: "Confianza internacional", texto: "Web B2B, fichas y certificaciones que el importador valora antes de escribir." },
      { titulo: "Listos para la feria", texto: "Catálogo y material institucional para Expoalimentaria y Fruit Logistica." },
      { titulo: "Tu estándar, visible", texto: "Audiovisual que muestra tu operación, tu calidad y tu trazabilidad." },
      { titulo: "Contactos que avanzan", texto: "CRM para no perder ninguna oportunidad del comprador internacional." },
    ],
    proceso: [
      { paso: "01", titulo: "Leemos", texto: "Analizamos tu mercado destino, tu comprador y tu competencia." },
      { paso: "02", titulo: "Construimos", texto: "Web B2B, catálogo y contenido institucional en inglés y español." },
      { paso: "03", titulo: "Posicionamos", texto: "Te ponemos frente al importador: ferias, LinkedIn y rondas de negocio." },
      { paso: "04", titulo: "Medimos", texto: "Reportamos contactos y oportunidades; iteramos." },
    ],
  },
  "marketing-pisco-vino": {
    beneficios: [
      { titulo: "Marca que se paga", texto: "Branding premium que justifica el precio frente al consumidor." },
      { titulo: "Vende en línea", texto: "E-commerce que abre la venta a todo el país, no solo a tu puerta." },
      { titulo: "Enoturismo lleno", texto: "Visitas, catas y experiencias con reservas durante todo el año." },
      { titulo: "Tu historia, contada", texto: "Contenido que convierte tu tradición en deseo de compra." },
    ],
    proceso: [
      { paso: "01", titulo: "Leemos", texto: "Entendemos tu bodega, tu producto y tu consumidor." },
      { paso: "02", titulo: "Moldeamos", texto: "Marca, etiqueta e historia que elevan tu percepción." },
      { paso: "03", titulo: "Activamos", texto: "E-commerce, pauta y enoturismo trabajando juntos." },
      { paso: "04", titulo: "Medimos", texto: "Reportamos ventas y reservas; optimizamos." },
    ],
  },
};

export const getSectorAst = (slug: string) => SECTOR_AST[slug];
