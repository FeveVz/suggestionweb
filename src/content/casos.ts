/**
 * Casos de éxito individuales (/casos/[slug]). Solo datos REALES ya
 * publicados en la web (números, quotes); la narrativa los ordena en
 * reto → qué hicimos → resultado. Ceinys lleva galería (assets/casos).
 *
 * `secciones` y `faq` son opcionales y usan los mismos bloques que el blog
 * (tabla, pasos, dato, nota). Regla que NO se salta: aquí no se inventan
 * cifras. Todo lo que aparece es un dato ya publicado o aritmética sobre
 * esos datos —dividir la inversión entre los resultados, por ejemplo—, nunca
 * una métrica nueva.
 */

import { fotoPortafolio } from "./portafolio-fotos";

import type { Seccion, Faq } from "./types";

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
  /**
   * Fechas reales de la PÁGINA, no del proyecto. Google pide `datePublished`
   * e `image` para dar resultados enriquecidos a un Article y las cuatro
   * páginas los emitían vacíos. Las fechas salen del historial del repo: las
   * cuatro se publicaron el 2026-07-01 (e2c1a7a) y se reescribieron el
   * 2026-08-28 (18b05cd). Si se reescribe un caso, actualizar `revisado`.
   */
  publicado: string;
  revisado: string;
  /**
   * Agrupa casos del mismo cliente. Dos casos del mismo cliente con períodos y
   * criterios distintos no deben aparecer uno al lado del otro: el lector
   * compara cifras que no son comparables. Se usa para excluirlos del bloque
   * "Otros casos", no para despublicar nada.
   */
  grupo?: string;
  /**
   * Enlaces que no son servicios: el método, otro caso del mismo cliente.
   * Nace con el caso de septiembre de Ceinys, que necesita mandar a la página
   * donde se explica cómo se cuentan esas cifras.
   */
  enlaces?: { label: string; href: string }[];
  /** Cuerpo editorial: el porqué detrás de los números. */
  secciones?: Seccion[];
  /** Preguntas frecuentes del caso. Emiten FAQPage. */
  faq?: Faq[];
};

export const CASOS_DETALLE: Caso[] = [
  {
    slug: "ceinys-septiembre-2026",
    grupo: "ceinys",
    publicado: "2026-10-01",
    revisado: "2026-10-01",
    cliente: "Grupo Inmobiliario Ceinys",
    sector: "Inmobiliario",
    sectorHref: "/marketing-inmobiliario",
    metaTitle: "Caso Ceinys: 18 Lotes a S/230.51 de Pauta | Suggestion",
    metaDescription:
      "Del 26 de agosto al 29 de septiembre de 2026 (35 días): S/4,149.21 en Meta Ads y 18 lotes cerrados con leads que entraron en ese período. La resta y el embudo.",
    h1: "Ceinys: 18 lotes cerrados a S/230.51 de publicidad por lote",
    resumen:
      "Del 26 de agosto al 29 de septiembre de 2026 —35 días— el Grupo Inmobiliario Ceinys cerró 25 lotes. No nos atribuimos los 25: siete los cerró gente que ya estaba en cartera antes del 26 de agosto, y esas ventas las pagó el esfuerzo de meses anteriores. Quedan 18, cerrados con leads que entraron durante el período, y esa es la cifra que usamos. La resta la hacemos nosotros, antes de que la haga usted.",
    stats: [
      { valor: "S/4,149.21", label: "Invertido en Meta Ads del 26/08 al 29/09/2026" },
      { valor: "18", label: "Lotes cerrados por leads que entraron durante el período" },
      { valor: "S/230.51", label: "Publicidad por lote vendido" },
      { valor: "12", label: "De esos 18, los que además tienen origen de anuncio en el CRM" },
    ],
    reto: "Ceinys vende lotes en varios proyectos a la vez, y el cierre casi nunca ocurre el mismo mes que el primer mensaje: hay visita, hay familia que decide y hay cartera que madura durante semanas. Con ese desfase, la pregunta difícil no es cuántas conversaciones trajo la pauta, sino cuáles de las ventas del período puede reclamar como suyas la pauta de ese mismo período.",
    solucion: [
      { titulo: "Un nombre que el CRM también entiende", texto: "La campaña en Meta y el campo de campaña del CRM comparten la misma estructura, así que en la mayoría de los casos el origen queda escrito en el lead al crearlo. Lo que no queda atado a una campaña no se completa después de memoria: se reporta aparte, y por eso en esta página también está la cifra más estricta." },
      { titulo: "La venta se cuenta cuando cierra", texto: "Un cierre de septiembre es de septiembre aunque el lead haya entrado en julio. Lo que cambia es a qué esfuerzo se le atribuye, y eso se informa aparte." },
      { titulo: "La resta, antes del reporte", texto: "De los 25 lotes cerrados se separan los 7 que venían de cartera anterior. Lo que reportamos es el resultado de 18, no el de 25." },
      { titulo: "Medición contra el CRM, no contra el administrador", texto: "Meta dice cuántas conversaciones pagó. El CRM dice cuántas se convirtieron en algo. El reporte cruza las dos fuentes y manda la segunda." },
    ],
    servicios: [
      { label: "Publicidad Digital", href: "/servicios/publicidad-digital" },
      { label: "CRM y Automatización", href: "/servicios/crm-automatizacion" },
    ],
    enlaces: [{ label: "Cómo medimos una campaña", href: "/metodo" }],
    secciones: [
      {
        h2: "La resta que casi nadie hace",
        parrafo:
          "Con los mismos datos se pueden titular tres cifras distintas, y las tres son ciertas. Las publicamos juntas, de la más generosa a la más estricta, y usamos la del medio.",
        grafico: {
          titulo: "Tres formas de contar los mismos lotes",
          unidad: "lotes",
          barras: [
            { etiqueta: "Cerrados durante el período", valor: 25, texto: "25", nota: "S/165.97 de publicidad por lote" },
            { etiqueta: "Cerrados por leads que entraron durante el período de pauta", valor: 18, texto: "18", nota: "S/230.51 por lote · es la cifra que publicamos", destacada: true },
            { etiqueta: "De ese grupo, los que además tienen origen de anuncio en el CRM", valor: 12, texto: "12", nota: "S/345.77 por lote" },
          ],
          pie: "Cuanto más estricto es el criterio, menos lotes quedan y más caro sale cada uno. Las tres cifras son ciertas; la del medio es la que firmamos. Los 25 incluyen 7 lotes que cerró gente de cartera anterior al período: esa venta la pagó el esfuerzo de meses anteriores, no esta pauta. La cifra que usamos es la de 18: lotes cerrados por leads que entraron durante el período, sin exigir que el CRM confirme el origen. La de 12 toma solo los lotes de esa misma cohorte en los que además el CRM confirma que el lead vino de un anuncio, y es la que sobrevive a cualquier auditoría.",
        },
        nota: {
          tipo: "aviso",
          titulo: "Fecha de corte",
          texto: "Resultado medido al 29 de septiembre de 2026. Los leads que entraron durante el período siguen en proceso: estos son los lotes cerrados a la fecha de corte, no el total final. Si lo actualizamos, será con la fecha nueva al lado y dejando ver la anterior.",
        },
      },
      {
        h2: "De dónde vino lo que se vendió",
        parrafo:
          "Reconocer lo que no es tuyo cuesta poco y vale mucho, pero antes va un aviso que el lector merece. Los 25 lotes se pueden partir de dos maneras distintas, y las dos dan 18 y 7 por pura casualidad. La tabla de arriba separa por cuándo entró el lead. Esta separa por otra cosa: el origen que el CRM tiene escrito en ese lead. No son los mismos 18 ni los mismos 7, y solo 12 lotes cumplen las dos condiciones a la vez —son los de la tercera fila de la tabla anterior—. De los 7 que no tienen origen de anuncio, tres entraron por canales ajenos a esta pauta y cuatro quedaron sin origen registrado: de esos cuatro no sabemos de dónde vinieron, así que no los contamos como anuncio, aunque tampoco afirmamos que no lo fueran.",
        tabla: {
          cabeceras: ["Origen del lead", "Lotes", "% de los 25"],
          filas: [
            ["Con origen de anuncio en el CRM", "18", "72%"],
            ["Otras fuentes o sin origen registrado", "7", "28%"],
          ],
          nota: "Este reparto es por origen del lead, no por cohorte, y por eso aquí no va ningún costo por lote: ese sale de la tabla anterior, que usa otro denominador. De estos 18 con origen de anuncio, 12 vienen de leads que entraron durante esta pauta y 6 de leads anteriores que maduraron y cerraron ahora.",
        },
      },
      {
        h2: "Lo mismo, contado en personas",
        parrafo:
          "Dieciocho lotes no son dieciocho compradores: varias familias cerraron más de uno. Contado en personas la escalera es la misma, con el mismo orden y el mismo criterio, y vuelve a haber tres cifras ciertas a la vez.",
        tabla: {
          cabeceras: ["Qué se cuenta", "Compradores", "Publicidad por comprador"],
          filas: [
            ["Compraron durante el período", "16", "S/259.33"],
            ["Compraron y su lead entró durante el período de pauta", "10", "S/414.92"],
            ["De ese grupo, los que además tienen origen de anuncio en el CRM", "7", "S/592.74"],
          ],
          nota: "Cambia el denominador, no el método: son las mismas ventas de la primera tabla, contadas por persona en vez de por lote. El costo por comprador sale más alto que el costo por lote justamente porque varios compradores se llevaron más de uno, y esa es la razón por la que la cifra que publicamos arriba es la de lotes: es la unidad que el cliente vende.",
        },
      },
      {
        h2: "El embudo, con sus caídas a la vista",
        parrafo:
          "Un embudo sin caídas es un embudo maquillado. Este es el recorrido completo de los leads que el CRM registró durante el período, en porcentaje sobre esa misma base.",
        tabla: {
          cabeceras: ["Etapa", "De los leads registrados"],
          filas: [
            ["Recibió contacto efectivo", "78.7%"],
            ["Llegó a interesado o más avanzado", "18.1%"],
            ["Llegó a visita agendada o realizada", "8.8%"],
            ["Compró", "4.6%"],
          ],
          nota: "Escalera acumulada: quien compró ya pasó por visita, así que los tramos no se suman.",
        },
        dato: {
          cifra: "4.6%",
          texto: "de los leads que el CRM registró durante el período terminó comprando. Es el último escalón, y el único que paga la pauta.",
        },
      },
      {
        h2: "Lo que no vas a encontrar en esta página",
        parrafo:
          "El reporte que entregamos a Ceinys tiene once hojas. Lo que ves aquí es una parte muy pequeña, y la selección no fue casual.",
        bullets: [
          { titulo: "Ningún nombre de comprador", texto: "ni cuántos lotes compró cada uno. Son personas que le compraron a nuestro cliente, no material de marketing nuestro." },
          { titulo: "Ningún nombre ni desempeño del equipo comercial", texto: "quién vendió más y quién menos es una conversación entre Ceinys y su gente." },
          { titulo: "Ningún nombre de campaña ni de proyecto", texto: "dónde pone su presupuesto es información que su competencia pagaría por tener." },
          { titulo: "Ningún pantallazo del administrador", texto: "una captura sin contexto no prueba nada y suele enseñar más de lo que debería." },
        ],
        nota: {
          titulo: "La misma regla con todos",
          texto: "Ceinys autorizó por escrito la publicación de estas cifras y sabe exactamente cuáles son. Con los datos de cualquier otro cliente —incluido el suyo, si trabajamos juntos— aplicamos la misma regla.",
        },
      },
    ],
    faq: [
      {
        q: "¿Por qué no titulan con todos los lotes cerrados en el período?",
        a: "Porque no todos los pagó esta pauta. Siete de los 25 lotes cerrados en el período los compró gente que ya estaba en la cartera del cliente antes de que esta campaña empezara: esa venta la pagó el trabajo de meses anteriores. Al descontar esos siete quedan 18 lotes cerrados por leads que entraron durante el período de pauta, y ese es el número que usamos. Nos deja peor en el titular y mejor cuando alguien revisa.",
      },
      {
        q: "¿Qué pasa con los lotes que cierren en octubre?",
        a: "Que todavía no están contados. Un lead inmobiliario tarda semanas en decidir, así que la cohorte de septiembre sigue abierta y el número puede subir. Por eso cada cifra lleva su fecha de corte desde el primer día: si la actualizamos, se verá la fecha nueva al lado de la anterior.",
      },
      {
        q: "¿Cuánto facturó Ceinys con esos lotes?",
        a: "De este período no publicamos facturación, y no es discreción: en las once hojas del reporte cruzado no hay una sola cifra de ingresos. Lo que mide es inversión publicitaria y unidades vendidas —S/4,149.21 y 18 lotes al 29 de septiembre de 2026—, nada más. Estimar los ingresos multiplicando lotes por un precio sería inventar un número que nadie midió, y preferimos quedarnos cortos. Cuánto factura Ceinys es asunto de Ceinys.",
      },
      {
        q: "¿Cómo sé que estas cifras son reales?",
        a: "Ceinys autorizó por escrito su publicación y puede confirmarlas abriendo su propio CRM. Si estás evaluando trabajar con nosotros y quieres verificarlo, se puede coordinar.",
      },
      {
        q: "¿Esto se repite en cualquier proyecto inmobiliario?",
        a: "No automáticamente. Funcionó porque el producto era vendible, el precio competitivo y había un equipo capaz de cerrar en sala. La pauta trae a la persona correcta y la medición dice qué funciona; el cierre lo hace la gente del proyecto. Si una de esas tres partes falla, el costo por lote sube por mucho que se ajuste la campaña.",
      },
    ],
  },
  {
    slug: "ceinys-agosto-2026",
    grupo: "ceinys",
    publicado: "2026-10-10",
    revisado: "2026-10-10",
    cliente: "Grupo Inmobiliario Ceinys",
    sector: "Inmobiliario",
    sectorHref: "/marketing-inmobiliario",
    metaTitle: "Caso Ceinys: 14 Lotes a S/225.17 de Pauta | Suggestion",
    metaDescription:
      "Del 1 al 20 de agosto de 2026: S/3,152.43 en Meta Ads y 14 lotes cerrados por campa\u00f1as pagadas del per\u00edodo. La resta, el reparto y el corte a mitad de mes.",
    h1: "Ceinys: 14 lotes cerrados a S/225.17 de publicidad por lote",
    resumen:
      "Del 1 al 20 de agosto de 2026 el Grupo Inmobiliario Ceinys cerr\u00f3 17 lotes. No nos atribuimos los 17: tres los cerraron leads que entraron con campa\u00f1as de junio, mayo y abril, y esas ventas las pag\u00f3 el esfuerzo de esos meses. Quedan 14, cerrados por campa\u00f1as pagadas durante el per\u00edodo, y esa es la cifra que usamos. El corte es el 20 de agosto: el mes todav\u00eda no estaba cerrado cuando se midi\u00f3.",
    stats: [
      { valor: "S/3,152.43", label: "Invertido en Meta Ads del 01 al 20/08/2026" },
      { valor: "14", label: "Lotes cerrados por campa\u00f1as pagadas del per\u00edodo" },
      { valor: "S/225.17", label: "Publicidad por lote vendido" },
      { valor: "8", label: "Compradores atribuidos a campa\u00f1as del per\u00edodo" },
    ],
    reto: "En agosto Ceinys ten\u00eda varios proyectos abiertos a la vez y la atribuci\u00f3n no se sosten\u00eda sola: una parte de las ventas llegaba al CRM sin campa\u00f1a asociada. Sin resolver eso, cualquier n\u00famero que report\u00e1ramos habr\u00eda sido una estimaci\u00f3n con buena cara. La pregunta no era cu\u00e1nto vendi\u00f3 el mes, sino cu\u00e1nto de lo vendido pod\u00eda demostrarse que ven\u00eda de la pauta de ese mes.",
    solucion: [
      { titulo: "Conciliar antes de contar", texto: "Las ventas que entraron al CRM sin campa\u00f1a asociada se revisaron una a una contra el registro comercial y se cerr\u00f3 su origen con el equipo del cliente. Hasta que eso no estuvo hecho no se calcul\u00f3 ning\u00fan costo por lote: un denominador construido sobre atribuciones a medias no sirve para decidir presupuesto." },
      { titulo: "La resta, antes del reporte", texto: "De los 17 lotes del per\u00edodo se separan los 3 que vinieron de campa\u00f1as de junio, mayo y abril. Lo que reportamos es el resultado de 14, no el de 17." },
      { titulo: "El corte se dice, no se esconde", texto: "El reporte se cerr\u00f3 el 20 de agosto, con once d\u00edas de mes por delante. Las cifras son de veinte d\u00edas y as\u00ed est\u00e1n etiquetadas en cada l\u00ednea de esta p\u00e1gina." },
      { titulo: "Medici\u00f3n contra el CRM, no contra el administrador", texto: "Meta dice cu\u00e1nto se gast\u00f3. El CRM dice en qu\u00e9 se convirti\u00f3. El reporte cruza las dos fuentes y manda la segunda." },
    ],
    servicios: [
      { label: "Publicidad Digital", href: "/servicios/publicidad-digital" },
      { label: "CRM y Automatizaci\u00f3n", href: "/servicios/crm-automatizacion" },
    ],
    enlaces: [{ label: "C\u00f3mo medimos una campa\u00f1a", href: "/metodo" }],
    secciones: [
      {
        h2: "La resta que casi nadie hace",
        parrafo:
          "Con los mismos datos se pueden titular dos cifras distintas, y las dos son ciertas. Publicamos las dos y usamos la estricta.",
        grafico: {
          titulo: "Dos formas de contar los mismos lotes",
          unidad: "lotes",
          barras: [
            { etiqueta: "Cerrados durante el per\u00edodo", valor: 17, texto: "17", nota: "S/185.44 de publicidad por lote" },
            { etiqueta: "Cerrados por campa\u00f1as pagadas del per\u00edodo", valor: 14, texto: "14", nota: "S/225.17 por lote \u00b7 es la cifra que publicamos", destacada: true },
          ],
          pie: "Los 17 incluyen 3 lotes que cerraron leads entrados con campa\u00f1as de junio, mayo y abril: esa venta la pag\u00f3 el esfuerzo de esos meses, no la pauta de agosto. La cifra que usamos es la de 14. Todo medido al 20 de agosto de 2026, con once d\u00edas de mes por delante.",
        },
      },
      {
        h2: "De d\u00f3nde vino lo que se vendi\u00f3",
        parrafo:
          "Tras conciliar el origen de cada venta con el equipo comercial, no qued\u00f3 ning\u00fan lote del per\u00edodo sin campa\u00f1a de origen identificada. Este es el reparto.",
        tabla: {
          cabeceras: ["Origen de la venta", "Compradores", "Lotes", "% de lotes"],
          filas: [
            ["Campa\u00f1as pagadas del per\u00edodo", "8", "14", "82%"],
            ["Campa\u00f1as de meses anteriores (jun, may, abr)", "3", "3", "18%"],
            ["Ventas sin origen identificado", "0", "0", "0%"],
          ],
          nota: "El 82% no es una estimaci\u00f3n: es 14 de 17 lotes, contados uno a uno. La fila de cero es la que cuesta trabajo y es la que casi nunca se ense\u00f1a; est\u00e1 en cero porque las ventas que llegaron sin campa\u00f1a se revisaron contra el registro comercial antes de cerrar el reporte, no porque no las hubiera.",
        },
      },
      {
        h2: "Lo mismo, contado en personas",
        parrafo:
          "Un comprador puede llevarse m\u00e1s de un lote, as\u00ed que la misma inversi\u00f3n se puede leer por persona. Cambia el denominador, no el criterio.",
        grafico: {
          titulo: "Compradores del per\u00edodo",
          unidad: "compradores",
          barras: [
            { etiqueta: "Compradores del per\u00edodo", valor: 11, texto: "11", nota: "S/286.58 de publicidad por comprador" },
            { etiqueta: "Atribuidos a campa\u00f1as pagadas del per\u00edodo", valor: 8, texto: "8", nota: "S/394.05 por comprador \u00b7 la cifra estricta", destacada: true },
          ],
          pie: "Los mismos S/3,152.43 divididos entre personas en vez de entre lotes. Nunca se cruzan bloques: la inversi\u00f3n del per\u00edodo se divide por cifras del per\u00edodo, no por las de otro corte.",
        },
      },
      {
        h2: "Lo que no vas a encontrar en esta p\u00e1gina",
        parrafo:
          "El reporte del que salen estas cifras tiene diez hojas y la mayor parte no es publicable. No por adorno: hay nombres de compradores, nombres y desempe\u00f1o de las asesoras, nombres de campa\u00f1as y de proyectos, y el detalle de c\u00f3mo est\u00e1 montada la cuenta del cliente. Nada de eso sale, ni siquiera con iniciales.",
        bullets: [
          { titulo: "Ninguna cifra de facturaci\u00f3n", texto: "En las diez hojas del reporte no existe una sola cifra de ingreso. Derivarla multiplicando lotes por un precio ser\u00eda inventarla, y se nota." },
          { titulo: "Ning\u00fan n\u00famero redondeado", texto: "No vas a leer \u00abcasi 20 lotes\u00bb ni \u00abtres de cada cuatro\u00bb. Son 14 de 17, que es el 82%, y la inversi\u00f3n son S/3,152.43." },
          { titulo: "Ninguna cifra sin su fecha de corte", texto: "Todo lo de esta p\u00e1gina est\u00e1 medido al 20 de agosto de 2026. Un n\u00famero sin corte no se puede auditar, y uno que no se puede auditar no vale nada." },
        ],
      },
    ],
    faq: [
      {
        q: "\u00bfPor qu\u00e9 el per\u00edodo termina el 20 de agosto y no el 31?",
        a: "Porque es la fecha en que se cerr\u00f3 el reporte cruzado con el CRM, con once d\u00edas de mes por delante. Publicar \u00abagosto\u00bb a secas dar\u00eda a entender un mes completo que estas cifras no cubren, as\u00ed que el corte va pegado a cada n\u00famero.",
      },
      {
        q: "\u00bfPor qu\u00e9 14 lotes y no 17?",
        a: "Porque tres de los diecisiete los cerraron leads que entraron con campa\u00f1as de junio, mayo y abril. Esas ventas ocurrieron en el per\u00edodo, pero las pag\u00f3 el esfuerzo de meses anteriores. Las dos cifras est\u00e1n publicadas; la que usamos es la de 14.",
      },
      {
        q: "\u00bfC\u00f3mo s\u00e9 que la atribuci\u00f3n es real y no una estimaci\u00f3n?",
        a: "Porque las ventas que llegaron al CRM sin campa\u00f1a asociada no se completaron de memoria: se revisaron contra el registro comercial del cliente y su origen se confirm\u00f3 con el equipo antes de cerrar el reporte. Por eso la fila de \u00abventas sin origen identificado\u00bb est\u00e1 en cero.",
      },
      {
        q: "\u00bfEste resultado se puede comparar con el de otro per\u00edodo?",
        a: "Con cuidado y solo si el criterio es el mismo. Cada corte tiene su propio per\u00edodo, su propia inversi\u00f3n y su propia resta; comparar la cifra estricta de un corte con la generosa de otro no dice nada \u00fatil. En esta p\u00e1gina est\u00e1n las dos, para que la comparaci\u00f3n la pueda hacer usted con los mismos criterios.",
      },
    ],
  },
  {
    slug: "inmobiliaria-ceinys",
    grupo: "ceinys",
    publicado: "2026-07-01",
    revisado: "2026-08-28",
    cliente: "Inmobiliaria Ceinys",
    sector: "Inmobiliario",
    sectorHref: "/marketing-inmobiliario",
    metaTitle: "Caso Ceinys: S/350K en Ventas con S/3,000 | Suggestion",
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
    enlaces: [{ label: "Cómo medimos una campaña", href: "/metodo" }],
    secciones: [
      {
        h2: "Los números, en contexto",
        parrafo:
          "Las cifras sueltas impresionan poco hasta que se ponen en cadena. Dividiendo la inversión entre cada etapa aparece lo que de verdad explica el resultado, y también lo que sorprende a casi todo el mundo: solo 1 de cada 17 leads llegó a pisar el terreno, y aun así la campaña fue muy rentable.",
        grafico: {
          titulo: "De 350 contactos a 8 firmas",
          barras: [
            { etiqueta: "Leads calificados", valor: 350, texto: "350", nota: "S/8.57 por lead" },
            { etiqueta: "Visitas a la sala de ventas", valor: 20, texto: "20", nota: "S/150 por visita" },
            { etiqueta: "Lotes vendidos", valor: 8, texto: "8", nota: "S/375 por venta", destacada: true },
          ],
          pie: "S/3,000 de inversión en pauta. Los costos salen de dividir esa inversión entre el resultado de cada etapa y no incluyen el trabajo del equipo comercial del cliente. La caída entre la primera barra y la última es la forma del negocio inmobiliario, no un fallo de la campaña.",
        },
        dato: {
          cifra: "S/375",
          texto: "costó cada lote vendido en inversión publicitaria. Frente al valor de un lote, es la clase de proporción que hace que la discusión deje de ser sobre el precio de la pauta.",
        },
      },
      {
        h2: "Por qué una tasa de visita del 6% no es mala noticia",
        parrafo:
          "De 350 leads llegaron 20 a la sala de ventas. Dicho así suena a fracaso, y es la lectura que hace que muchos proyectos apaguen campañas que funcionan. En inmobiliario la visita es un compromiso grande —hay que reservar una mañana y desplazarse—, así que el filtro natural es brutal. Lo que decide la rentabilidad no es cuántos leads llegan a visita, sino qué pasa en la visita: aquí, 8 de 20 terminaron en compra. Esa tasa de cierre del 40% es la que sostiene todo el caso, y es mérito del equipo comercial tanto como de la campaña.",
        bullets: [
          { titulo: "El lead no es el producto", texto: "es materia prima. Un proyecto que mide su marketing en leads acaba comprando volumen barato que nadie atiende." },
          { titulo: "La visita es el filtro real", texto: "quien invierte una mañana en ir a ver el terreno ya se ha autoseleccionado." },
          { titulo: "El cierre es del equipo comercial", texto: "la campaña llena la sala; quien firma en la sala es una persona." },
        ],
      },
      {
        h2: "Qué hizo que la campaña filtrara bien",
        parrafo:
          "El resultado no salió de subir el presupuesto. Salió de cuatro decisiones tomadas antes de gastar el primer sol, y las cuatro se pueden repetir en cualquier proyecto.",
        pasos: [
          { titulo: "Separar los dos compradores", texto: "el que busca su primer lote y el inversor que compra plusvalía no responden al mismo anuncio. Hablarle a los dos a la vez es hablarle a ninguno." },
          { titulo: "Vender la etapa, no el metro cuadrado", texto: "el argumento de valorización —comprar en etapa inicial, antes de que suba— activa una decisión; una ficha técnica no." },
          { titulo: "Quitar fricción a la captura", texto: "formulario y WhatsApp con respuesta inmediata, porque un lead inmobiliario compara varios proyectos la misma tarde." },
          { titulo: "Calificar antes de pasar a ventas", texto: "el equipo comercial recibió contactos con plazo y forma de pago identificados, no una lista de nombres." },
        ],
        nota: {
          titulo: "Lo que este caso NO demuestra",
          texto: "Que S/3,000 vendan S/350.000 en cualquier proyecto. Funcionó porque el producto era vendible, el precio competitivo y había un equipo capaz de cerrar en sala. El marketing quitó la fricción y trajo a la gente correcta; no fabricó demanda que no existía.",
        },
      },
    ],
    faq: [
      {
        q: "¿Se puede repetir este resultado en otro proyecto inmobiliario?",
        a: "El método sí; la cifra depende del proyecto. Lo que se traslada es la estructura: separar públicos, vender el argumento que activa la decisión, capturar sin fricción y calificar antes de pasar a ventas. Lo que cambia es el precio del lote, la competencia de la zona y la capacidad de cierre del equipo.",
      },
      {
        q: "¿Por qué solo 20 de 350 leads llegaron a visitar?",
        a: "Porque la visita exige tiempo y desplazamiento, y ese filtro es normal en inmobiliario. Lo relevante no es el porcentaje que llega, sino qué proporción de los que llegan compra: aquí fueron 8 de 20. Un proyecto con muchas visitas y pocos cierres tiene un problema distinto, y no se arregla con más pauta.",
      },
      {
        q: "¿Cuánto tiempo tomó la campaña?",
        a: "Los leads empiezan a llegar en días, pero la venta de un lote tiene su propio ritmo: visita, decisión familiar, separación. Juzgar una campaña inmobiliaria por las ventas de la primera semana lleva a apagarla justo cuando está llenando el embudo.",
      },
      {
        q: "¿Hace falta un CRM para conseguir algo así?",
        a: "Hace falta un registro ordenado, se llame como se llame. Lo que no funciona es que 350 contactos vivan repartidos entre varios teléfonos: sin saber quién habló con quién y en qué quedó, la mitad se enfría por olvido y no por falta de interés.",
      },
      {
        q: "¿Qué pasó con los 342 leads que no compraron?",
        a: "No todos eran una pérdida. Una parte no calificaba, otra no estaba en su momento y otra quedó en seguimiento para etapas siguientes. En proyectos por fases, el embudo de una campaña alimenta la venta de la siguiente si alguien lo mantiene vivo.",
      },
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
    publicado: "2026-07-01",
    revisado: "2026-08-28",
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
    secciones: [
      {
        h2: "Lo que costó cada contrato",
        parrafo:
          "Quince contratos con S/2,500 de inversión sale a poco menos de S/167 por contrato cerrado. La cifra por sí sola no dice si es buena o mala: eso depende de cuánto deja cada contrato y de cuánto dura la relación con ese cliente. Pero convierte la conversación con cualquier proveedor de marketing en otra cosa, porque ya no se discute el precio de la pauta sino el retorno.",
        dato: {
          cifra: "S/167",
          texto: "de inversión publicitaria por contrato cerrado, dividiendo los S/2,500 de pauta entre los 15 contratos. Es el número que permite decidir si conviene escalar.",
        },
      },
      {
        h2: "Demanda directa frente a “estar presente”",
        parrafo:
          "La mayoría de marcas de consumo invierte en presencia: publicar con constancia, cuidar el feed, sumar seguidores. Está bien, pero resuelve un problema distinto del que tenía este negocio. Aquí hacía falta que alguien preguntara el precio y cerrara, y para eso el contenido de marca es un camino lento. Ninguna de las dos es mejor en abstracto: lo caro es confundirlas y esperar contratos de una estrategia diseñada para recordación.",
        tabla: {
          cabeceras: ["", "Contenido de marca", "Campaña de demanda directa"],
          filas: [
            ["Qué busca", "Que te recuerden", "Que te escriban hoy"],
            ["Qué se mide", "Alcance, seguidores, interacción", "Conversaciones y contratos"],
            ["Cuándo se nota", "Meses", "Días"],
            ["Qué necesita", "Constancia", "Una oferta concreta"],
            ["Riesgo", "Invertir sin ver venta", "Agotar el público si no rotas el mensaje"],
          ],
        },
      },
      {
        h2: "Por qué la velocidad de respuesta era media campaña",
        parrafo:
          "En una campaña de demanda directa, el anuncio solo abre la conversación. Lo que decide si hay contrato es lo que ocurre en los minutos siguientes, y ese tramo no depende de la pauta sino de quién contesta. Un contacto que escribe pidiendo precio y recibe respuesta al día siguiente ya comparó con otros dos proveedores. Por eso en este caso la atención rápida no fue un detalle de servicio: era parte del sistema que convirtió el presupuesto en contratos.",
        nota: {
          tipo: "aviso",
          titulo: "El error que anula la inversión",
          texto: "Encender una campaña de demanda directa sin tener quién atienda los mensajes en el día. El resultado es pagar por generar interés y dejar que se enfríe: se ve como una campaña que “no funcionó”, cuando lo que falló fue el tramo posterior al clic.",
        },
      },
    ],
    faq: [
      {
        q: "¿Qué es una campaña de demanda directa?",
        a: "Una campaña diseñada para que alguien inicie una conversación de compra hoy, no para construir recordación. Se reconoce en que su objetivo de optimización es un mensaje o un formulario, y en que se mide por contactos y cierres en lugar de por alcance.",
      },
      {
        q: "¿S/2,500 es un presupuesto suficiente para empezar?",
        a: "Depende de tu ticket y de la competencia de tu rubro, no de una cifra universal. Lo que sí importa es que el presupuesto alcance para conseguir suficientes conversiones semanales; por debajo de ese volumen la plataforma no aprende y el costo por resultado sube.",
      },
      {
        q: "¿Sirve esto para cualquier negocio de consumo?",
        a: "Funciona cuando hay una oferta concreta que se puede explicar en una frase y alguien que atienda rápido. Si el producto necesita mucha explicación previa o la decisión es lenta, conviene combinarla con contenido que prepare el terreno.",
      },
      {
        q: "¿Y los seguidores no importan?",
        a: "Importan para otra cosa. Una comunidad da prueba social y abarata la captación con el tiempo, pero no paga la planilla de este mes. Lo sano es tener claro qué problema estás resolviendo antes de elegir en qué inviertes.",
      },
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
    publicado: "2026-07-01",
    revisado: "2026-08-28",
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
    secciones: [
      {
        h2: "Por qué la reserva directa cambia la cuenta",
        parrafo:
          "Un hotel que depende de las agencias en línea llena habitaciones, pero entrega una parte de cada noche en comisión. Esa comisión no se ve en la caja del día: se ve al final del mes, cuando el mismo número de huéspedes deja bastante menos. La campaña de este caso llevó al huésped a reservar directo, y ese detalle es el que convierte una campaña de ocupación en una campaña de rentabilidad.",
        tabla: {
          cabeceras: ["", "Reserva por agencia en línea", "Reserva directa"],
          filas: [
            ["Quién trae al huésped", "La plataforma", "Tu campaña"],
            ["Qué te queda de la noche", "El precio menos la comisión", "El precio completo, menos el costo de la campaña"],
            ["De quién es el cliente", "De la plataforma", "Tuyo: tienes sus datos"],
            ["Puedes volver a venderle", "Difícilmente", "Sí, y sin pagar dos veces"],
            ["Qué pasa si dejas de invertir", "Sigues visible, pagando comisión", "Baja el flujo directo"],
          ],
          nota: "Las plataformas siguen siendo útiles para captar a quien no te conoce; lo caro es depender solo de ellas.",
        },
      },
      {
        h2: "Temporada alta y baja no se anuncian igual",
        parrafo:
          "El error habitual en turismo es usar el mismo mensaje todo el año y subir el presupuesto cuando baja la ocupación. No funciona, porque el problema de cada temporada es distinto. En alta, el huésped ya decidió viajar y elige entre hoteles: gana quien resuelve la reserva con menos fricción. En baja, el huésped todavía no ha decidido viajar: hay que darle un motivo, y ese motivo rara vez es el precio.",
        tabla: {
          cabeceras: ["", "Temporada alta", "Temporada baja"],
          filas: [
            ["Qué falta", "Que te elijan a ti", "Que decidan viajar"],
            ["Qué mueve la decisión", "Disponibilidad, ubicación, facilidad", "Un motivo: escapada, fecha, experiencia"],
            ["Público", "Quien ya está buscando hotel", "Quien no está buscando todavía"],
            ["Riesgo", "Competir solo por precio", "Descontar y acostumbrar al cliente a esperar"],
          ],
        },
        nota: {
          titulo: "Ica tiene una ventaja para la temporada baja",
          texto: "La cercanía a Lima convierte el fin de semana en un producto real: no hace falta que alguien planifique unas vacaciones, basta con que decida salir el sábado. Eso permite trabajar la baja con motivo y no con descuento.",
        },
      },
      {
        h2: "Qué medir en un hotel, además de las reservas",
        parrafo:
          "Contar reservas es el primer paso, pero deja fuera lo que decide si la campaña conviene. Con cuatro números apuntados por temporada se ve casi todo, y ninguno requiere un sistema complicado.",
        bullets: [
          { titulo: "Costo por reserva directa", texto: "la inversión dividida entre las reservas conseguidas. Es lo que se compara contra la comisión que cobraría una plataforma." },
          { titulo: "Noches por reserva", texto: "una reserva de tres noches y una de una no valen lo mismo, y a menudo vienen de mensajes distintos." },
          { titulo: "Ocupación entre semana", texto: "es donde de verdad se gana o se pierde el mes; el fin de semana suele llenarse solo." },
          { titulo: "Huéspedes que repiten", texto: "el canal más barato que existe, y el único que crece si guardas los datos de quien reservó directo." },
        ],
      },
    ],
    faq: [
      {
        q: "¿Conviene dejar las agencias en línea?",
        a: "Casi nunca del todo. Siguen siendo el escaparate donde te encuentra quien no te conoce. Lo que cambia la rentabilidad es no depender solo de ellas: tener un canal propio de reserva directa que capture a quien ya te conoce o llega por tu campaña.",
      },
      {
        q: "¿Cómo lleno el hotel en temporada baja?",
        a: "Dando un motivo para viajar en vez de bajar el precio. Quien no ha decidido salir no reacciona a un descuento; reacciona a una propuesta con fecha y contenido. Rebajar la tarifa en baja además enseña al cliente habitual a esperar la rebaja.",
      },
      {
        q: "¿Cuánto cuesta conseguir una reserva directa?",
        a: "Varía según temporada y competencia, y por eso la referencia útil no es un promedio del sector sino la comparación con lo que te cuesta una reserva por plataforma. Mientras el costo por reserva directa quede por debajo de la comisión, el canal propio conviene.",
      },
      {
        q: "¿Sirve tener perfil de empresa y reseñas si ya estoy en las agencias?",
        a: "Sirve mucho, porque son cosas distintas. Buena parte de los viajeros busca el nombre del hotel fuera de la plataforma antes de reservar, para comprobar que existe y ver fotos reales. Un perfil abandonado hace dudar justo en el último paso.",
      },
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
    publicado: "2026-07-01",
    revisado: "2026-08-28",
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
  imagenes: [
    { src: fotoPortafolio("relanzamiento-mitsubishi-autoniza", 1), alt: "Fachada iluminada de la tienda Mitsubishi FUSO de Autoniza durante el relanzamiento en Ica", cap: "El relanzamiento de tienda: el primero de los dos eventos" },
    { src: fotoPortafolio("relanzamiento-mitsubishi-autoniza", 2), alt: "Unidad Mitsubishi cubierta y con moño antes del destape", cap: "La unidad, lista para el destape" },
    { src: fotoPortafolio("relanzamiento-mitsubishi-autoniza", 3), alt: "Autoridad local en el estrado durante el relanzamiento de la tienda Mitsubishi en Ica", cap: "La autoridad local en el estrado: lo que convirtió la apertura en noticia" },
    // Aquí había una foto de la inauguración de Autoplan: otro concesionario,
    // otra marca, otro cliente. Se puso cuando del relanzamiento solo había
    // tres fotos publicadas. Ahora hay dieciocho y no hace falta pedir
    // prestado a otro evento.
    { src: fotoPortafolio("relanzamiento-mitsubishi-autoniza", 15), alt: "Cliente y asesores junto a una unidad Mitsubishi durante el evento de Autoniza", cap: "El cierre en piso: lo que el evento existía para que pasara" },
  ],
  secciones: [
    {
      h2: "El problema no era el auto: era que nadie sabía que la tienda existía",
      parrafo:
        "Conviene decir de dónde se partía. El producto estaba, el precio era competitivo y el local estaba abierto; lo que faltaba era que Ica supiera que ese concesionario existía. Un problema de reconocimiento no se arregla subiendo el presupuesto de pauta: se arregla dándole a la ciudad un motivo para mirar.",
      bullets: [
        { titulo: "Se invitó a la autoridad local", texto: "y eso cambió la naturaleza del evento. Dejó de ser una apertura comercial para pasar a ser un hecho de la ciudad, que es algo que sí se cubre." },
        { titulo: "Llegaron ocho canales de prensa", texto: "a cubrir la jornada. Esa difusión no se compró con un plan de medios: salió de una decisión de convocatoria." },
        { titulo: "En paralelo se convocó a prospectos reales", texto: "con intención y capacidad de compra, para que el día del evento hubiera a quién venderle y no solo a quién saludar." },
      ],
      nota: {
        titulo: "Las dos convocatorias",
        texto: "Un evento así tiene dos públicos que no se mezclan: el que te da cobertura y el que te compra. Convocar solo al primero deja una buena nota de prensa y cero ventas; convocar solo al segundo deja ventas y ninguna huella en la ciudad.",
      },
    },
    {
      h2: "Por qué un evento sin convocatoria no vende",
      parrafo:
        "La inversión de un evento automotriz se va casi entera en cosas que ocurren el mismo día: local, personal, montaje, logística. Todo eso es fijo y se paga igual venga quien venga. Por eso la variable que decide si el evento sale rentable no está en el evento, está en la semana anterior: quién se enteró y quién decidió ir. Un evento con buena producción y mala convocatoria es una sala bonita llena de gente que pasaba por ahí.",
      tabla: {
        cabeceras: ["", "Evento sin convocatoria", "Evento con convocatoria segmentada"],
        filas: [
          ["Quién asiste", "Quien pasaba por el centro comercial", "Quien buscaba cambiar de vehículo"],
          ["Qué hace el asistente", "Mira, sube, se hace una foto", "Pregunta condiciones y financiamiento"],
          ["Qué se lleva la marca", "Alcance y fotos", "Datos de contacto y ventas firmadas"],
          ["Costo fijo del día", "El mismo", "El mismo"],
          ["Qué queda para después", "Nada", "Una base de interesados para el siguiente"],
        ],
        nota: "El costo del evento no cambia; lo que cambia es quién entra por la puerta.",
      },
    },
    {
      h2: "Los cuatro momentos que deciden la venta",
      parrafo:
        "Un evento que vende no es un evento con suerte: es una secuencia. Estos cuatro momentos son los que separan las ventas firmadas de los “te llamo la próxima semana” que nunca se concretan.",
      pasos: [
        { titulo: "La semana previa", texto: "campaña dirigida a intención de compra real, no a interés genérico en autos. Aquí se decide la calidad de la sala." },
        { titulo: "La puerta", texto: "cada asistente queda registrado. Sin ese dato, todo el que no compra hoy se pierde para siempre." },
        { titulo: "El piso", texto: "asesores con la oferta del día lista y capacidad de cerrar sin consultar. El comprador que se va a pensarlo compara con otros dos concesionarios." },
        { titulo: "El día siguiente", texto: "seguimiento a quien no cerró, mientras el recuerdo del evento sigue fresco. Es el tramo que más ventas deja y el que más se abandona." },
      ],
    },
    {
      h2: "Vender en evento no es vender en concesionario",
      parrafo:
        "En el salón, el cliente llega cuando ya decidió mirar y el asesor tiene tiempo. En un evento la situación se invierte: hay una franja de horas, competencia por la atención dentro del mismo espacio y una decisión que se toma de pie. Eso cambia el guion completo. Las condiciones tienen que ser entendibles en un minuto, la prueba tiene que poder hacerse en el momento y la firma no puede depender de una llamada a oficina. Todo lo que no esté resuelto antes de abrir la puerta, ese día no se resuelve.",
      nota: {
        tipo: "aviso",
        titulo: "El error que convierte un buen evento en cero ventas",
        texto: "Terminar el día con una lista de contactos en papel y no llamar hasta la semana siguiente. La intención de compra de un evento se enfría en 48 horas: quien no recibe seguimiento en ese plazo ya está mirando en otro sitio. El plan de seguimiento se prepara ANTES del evento, no después.",
      },
    },
    {
      h2: "El evento también alimenta al siguiente",
      parrafo:
        "La cobertura del evento —fotos, video, tomas con drone— no es un recuerdo bonito: es el material de la próxima convocatoria. Un anuncio que muestra una sala llena y gente firmando convence mucho más que uno que promete una sala llena. Por eso conviene grabar pensando en la campaña siguiente y no solo en las redes del día, y por eso el segundo evento parte siempre con ventaja sobre el primero: ya tiene prueba social propia y una base de interesados que no compraron.",
    },
  ],
  faq: [
    {
      q: "¿Cuánta antelación necesita la convocatoria de un evento?",
      a: "Suficiente para que la campaña salga de su fase de aprendizaje y para que el interesado organice su sábado, lo que en la práctica se cuenta en semanas y no en días. Convocar con 48 horas obliga a pagar más por llegar a menos gente y deja fuera a quien tenía que cuadrar la agenda familiar.",
    },
    {
      q: "¿Qué se hace con los asistentes que no compran?",
      a: "Son el activo más valioso del día después de las ventas. Registrarlos en la puerta y contactarlos en las 48 horas siguientes convierte a una parte en venta posterior, y al resto en la base de la próxima convocatoria.",
    },
    {
      q: "¿Un evento sirve para vender vehículos de trabajo?",
      a: "Cambia bastante. En camiones y línea amarilla la decisión es de empresa, hay más de una persona implicada y el ciclo es más largo, así que el evento rara vez cierra el mismo día. Ahí funciona mejor como demostración técnica y generación de oportunidades que como jornada de venta.",
    },
    {
      q: "¿Cómo se mide si un evento salió bien?",
      a: "Con tres números: cuántos asistentes registrados hubo, cuántos cerraron en el día y cuántos cerraron en las semanas siguientes gracias al seguimiento. Medirlo solo por asistencia hace parecer bueno un evento lleno de curiosos.",
    },
    {
      q: "¿Conviene hacer eventos seguidos o espaciados?",
      a: "Espaciados lo suficiente para no agotar el mismo público de la zona y para poder aplicar lo aprendido en el anterior. Repetir la misma convocatoria al mismo público en semanas seguidas sube el costo y baja la asistencia.",
    },
  ],
  enlaces: [
    { label: "Cómo se produjo, en el portafolio", href: "/portafolio" },
    { label: "Cómo medimos una campaña", href: "/metodo" },
  ],
  servicios: [
    { label: "BTL y Activaciones", href: "/servicios/btl" },
    { label: "Publicidad Digital", href: "/servicios/publicidad-digital" },
    { label: "Producción Audiovisual", href: "/servicios/produccion-audiovisual" },
  ],
});

export const getCaso = (slug: string): Caso | undefined => CASOS_DETALLE.find((c) => c.slug === slug);
export const allCasoSlugs = (): string[] => CASOS_DETALLE.map((c) => c.slug);
