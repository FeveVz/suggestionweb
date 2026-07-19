/**
 * Casos de éxito individuales (/casos/[slug]). Solo datos REALES ya
 * publicados en la web (números, quotes); la narrativa los ordena en
 * reto → qué hicimos → resultado. Ceinys lleva galería (assets/casos).
 */

export type Caso = {
  slug: string;
  cliente: string;
  sector: string;
  sectorHref: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  resumen: string;
  stats: { valor: string; locale?: string; label: string }[];
  reto: string;
  solucion: { titulo: string; texto: string }[];
  quote?: string;
  autor?: string;
  servicios: { label: string; href: string }[];
  imagenes?: { src: string; alt: string; cap: string }[];
};

export const CASOS_DETALLE: Caso[] = [
  {
    slug: "inmobiliaria-ceinys",
    cliente: "Inmobiliaria Ceinys",
    sector: "Inmobiliario",
    sectorHref: "/marketing-inmobiliario",
    metaTitle: "Caso Ceinys: S/350K en Ventas con S/3,000 en Ads | Suggestion",
    metaDescription:
      "Cómo llevamos a Inmobiliaria Ceinys a S/350K en ventas: 350 leads, 20 visitas y 8 lotes vendidos con S/3,000 en Meta Ads. El caso completo, paso a paso.",
    h1: "Ceinys: S/350.000 en ventas con S/3,000 de pauta",
    resumen:
      "Una inmobiliaria de Ica con buen producto y poca predictibilidad comercial. Con una sola campaña bien armada —segmentación, landing, creatividades de valorización y seguimiento— el proyecto pasó de esperar compradores a llenarse de citas calificadas.",
    stats: [
      { valor: "S/350,000", locale: "es-ES", label: "En ventas generadas" },
      { valor: "350", label: "Leads calificados" },
      { valor: "20", label: "Visitas a sala de ventas" },
      { valor: "8", label: "Lotes vendidos" },
    ],
    reto: "El proyecto tenía interesados, pero llegaban curiosos: pocos calificaban y el equipo de ventas perdía tiempo en contactos que nunca iban a comprar. La inversión publicitaria anterior se medía en alcance, no en ventas.",
    solucion: [
      { titulo: "Leímos al comprador", texto: "Separamos los dos públicos reales del proyecto: el que busca su primer lote y el inversor que compra plusvalía. A cada uno, su mensaje." },
      { titulo: "Creatividades de valorización", texto: "Piezas que venden la etapa inicial y el precio de lanzamiento —el argumento que activa la decisión—, no solo metros y precio." },
      { titulo: "Captura sin fricción", texto: "Formulario + WhatsApp con respuesta inmediata, para que ningún lead se enfríe esperando." },
      { titulo: "Filtro y seguimiento", texto: "Calificamos cada lead antes de pasarlo a ventas y sostuvimos el seguimiento hasta la visita. Ventas cerró en sala." },
    ],
    quote:
      "Con S/3,000 en Meta Ads captamos 350 leads, concretamos 20 visitas y vendimos 8 lotes. La inversión se pagó sola.",
    autor: "Rosario, Jefa de Ventas de Ceinys",
    servicios: [
      { label: "Publicidad Digital", href: "/servicios/publicidad-digital" },
      { label: "CRM y Automatización", href: "/servicios/crm-automatizacion" },
      { label: "Producción Audiovisual", href: "/servicios/produccion-audiovisual" },
    ],
    imagenes: [
      { src: "/assets/casos/ceinys-campana-1.webp", alt: "Pieza de campaña del club privado de 12 hectáreas de Ceinys", cap: "Pieza de campaña — amenidades del proyecto" },
      { src: "/assets/casos/ceinys-campana-2.webp", alt: "Campaña de bono de S/500 por WhatsApp de Ceinys", cap: "Oferta de cierre — bono por WhatsApp" },
      { src: "/assets/casos/ceinys-campana-3.webp", alt: "Campaña del proyecto Casa de Playa", cap: "Campaña — proyecto Casa de Playa" },
      { src: "/assets/casos/ceinys-render.webp", alt: "Render del proyecto inmobiliario", cap: "Render del proyecto" },
    ],
  },
  {
    slug: "granjas-bonanza",
    cliente: "Granjas Bonanza",
    sector: "Marcas y consumo",
    sectorHref: "/marketing-marcas-consumo",
    metaTitle: "Caso Granjas Bonanza: 15 Contratos con S/2,500 | Suggestion",
    metaDescription:
      "Cómo Granjas Bonanza cerró 15 contratos con S/2,500 en campañas de demanda directa. Demanda que se convierte en venta, no en likes. El caso completo.",
    h1: "Granjas Bonanza: 15 contratos con S/2,500 de inversión",
    resumen:
      "Un negocio de consumo que necesitaba contratos, no seguidores. Con campañas de demanda directa —oferta clara, público correcto y respuesta rápida— la inversión se convirtió en ventas firmadas.",
    stats: [
      { valor: "15", label: "Contratos cerrados" },
      { valor: "S/2,500", label: "Inversión total en pauta" },
    ],
    reto: "La marca invertía esfuerzo en presencia digital, pero la presencia no se convertía en pedidos. Faltaba una campaña pensada para generar demanda con intención de compra real.",
    solucion: [
      { titulo: "Oferta al frente", texto: "Definimos el mensaje alrededor de la oferta concreta —lo que el cliente quiere oír para decidir— en lugar de contenido de relleno." },
      { titulo: "Demanda directa", texto: "Campañas orientadas a conversación y pedido, no a alcance: cada sol apuntó a generar un contacto con intención." },
      { titulo: "Respuesta que cierra", texto: "Atención rápida de cada contacto para convertir el interés en contrato antes de que se enfríe." },
    ],
    quote: "Suggestion convierte el presupuesto en clientes reales, no en promesas.",
    autor: "Jorge Saykon, Gerente General",
    servicios: [
      { label: "Publicidad Digital", href: "/servicios/publicidad-digital" },
      { label: "Gestión de Redes Sociales", href: "/servicios/redes-sociales" },
    ],
  },
  {
    slug: "hoteles-senor-de-luren",
    cliente: "Hoteles Señor de Luren",
    sector: "Turismo",
    sectorHref: "/marketing-turismo",
    metaTitle: "Caso Señor de Luren: 75 Reservas en una Campaña | Suggestion",
    metaDescription:
      "Cómo Hoteles Señor de Luren generó 75 reservas en una sola campaña, dentro y fuera de temporada. Marketing turístico con costo medido. El caso completo.",
    h1: "Señor de Luren: 75 reservas en una sola campaña",
    resumen:
      "Un hotel con el reto clásico del turismo en Ica: llenar también cuando no es temporada. Una campaña de reservas directas, con oferta segmentada y costo medido, sostuvo la ocupación todo el ciclo.",
    stats: [
      { valor: "75", label: "Reservas generadas" },
      { valor: "1", label: "Campaña (alta y baja temporada)" },
    ],
    reto: "La ocupación dependía de la temporada y de las OTAs con su comisión. El hotel necesitaba un canal propio de reservas que funcionara también en los meses flojos.",
    solucion: [
      { titulo: "Oferta por temporada", texto: "Mensajes distintos para la temporada alta (decisión rápida) y la baja (incentivo que mueve la escapada)." },
      { titulo: "Reserva directa", texto: "La campaña llevó al huésped a reservar directo con el hotel, reduciendo la dependencia de intermediarios." },
      { titulo: "Costo medido", texto: "Cada reserva con su costo claro, para invertir con control y escalar lo que funciona." },
    ],
    quote: "En una sola campaña generamos 75 reservas. Los resultados hablan por sí solos.",
    autor: "Roberto, Gerente General",
    servicios: [
      { label: "Publicidad Digital", href: "/servicios/publicidad-digital" },
      { label: "Gestión de Redes Sociales", href: "/servicios/redes-sociales" },
    ],
  },
];

CASOS_DETALLE.push({
  slug: "autoniza-eventos",
  cliente: "Autoniza",
  sector: "Automotriz",
  sectorHref: "/marketing-automotriz",
  metaTitle: "Caso Autoniza: 8 Autos Vendidos en 2 Eventos | Suggestion",
  metaDescription:
    "Cómo Autoniza vendió 3 autos en el evento del 22 de mayo y 5 en el del 25 de junio: convocatoria segmentada, activación y cierre en piso. El caso completo.",
  h1: "Autoniza: 8 autos vendidos en 2 eventos",
  resumen:
    "Un concesionario que convirtió sus eventos en un canal de ventas medible. Con convocatoria segmentada previa, activación en el punto y cierre en piso, cada evento salió con ventas firmadas el mismo día.",
  stats: [
    { valor: "3", label: "Autos vendidos · evento del 22 de mayo" },
    { valor: "5", label: "Autos vendidos · evento del 25 de junio" },
    { valor: "2", label: "Eventos, ambos con venta el mismo día" },
  ],
  reto: "Un evento automotriz sin estrategia junta curiosos: gente que mira, sube al auto, toma fotos y se va. La inversión en local, personal y logística no garantiza ni un cierre. Autoniza necesitaba que cada evento saliera con ventas, no con alcance.",
  solucion: [
    { titulo: "Convocatoria segmentada", texto: "Campaña previa dirigida a perfiles con intención y capacidad de compra — el evento se llena de compradores potenciales, no de paseantes." },
    { titulo: "Activación con dinámica", texto: "Experiencia en el punto con dinámica de participación y captura de datos: cada asistente queda registrado para el seguimiento." },
    { titulo: "Cierre en piso", texto: "Asesores preparados con la oferta del día; el interesado pasa de la prueba al papeleo sin salir del evento." },
    { titulo: "Registro y contenido", texto: "Cobertura del evento (incluido drone) que alimenta la prueba social de la marca para la siguiente convocatoria." },
  ],
  servicios: [
    { label: "BTL y Activaciones", href: "/servicios/btl" },
    { label: "Publicidad Digital", href: "/servicios/publicidad-digital" },
    { label: "Producción Audiovisual", href: "/servicios/produccion-audiovisual" },
  ],
});

export const getCaso = (slug: string): Caso | undefined => CASOS_DETALLE.find((c) => c.slug === slug);
export const allCasoSlugs = (): string[] => CASOS_DETALLE.map((c) => c.slug);
