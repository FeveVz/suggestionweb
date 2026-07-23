/**
 * Blog data-driven: 8 categorías (clusters) + 24 entradas de la 1.ª tanda.
 * Copy literal de docs-fuente 09 (categorías) y 13/14/15 (entradas).
 * Cada entrada deriva a su money page y enlaza a hermanas del cluster.
 */

import type { Seccion } from "./types";

export type BlogCategoria = {
  slug: string;
  nombre: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
};

export type BlogPost = {
  slug: string;
  categoria: string;
  title: string;
  description: string;
  h1: string;
  excerpt: string;
  date: string;
  secciones: Seccion[];
  cierre: string;
  moneyPage: { label: string; href: string };
  relacionados?: string[];
};

/** Pilar /blog (doc 09 §B0). */
export const BLOG_PILAR = {
  metaTitle: "Blog de Marketing y Ventas | Suggestion",
  metaDescription:
    "Estrategias de marketing, performance, branding y psicología de mercado que sí venden. Sin humo. Aprende y aplica con Suggestion.",
  h1: "Estrategias de marketing que sí venden",
  intro:
    "Sin humo ni teoría de relleno. Lo que aplicamos con nuestros clientes, explicado para que lo uses.",
} as const;

export const BLOG_CATEGORIAS: BlogCategoria[] = [
  {
    slug: "performance",
    nombre: "Performance & pauta",
    metaTitle: "Performance y Pauta: Guías para Vender | Suggestion",
    metaDescription:
      "Cómo invertir en publicidad y que vuelva en ventas. Meta Ads, Google Ads y las métricas que sí importan. Guías de performance sin humo.",
    h1: "Marketing digital y pauta: guías para vender",
    intro:
      "Cómo invertir en publicidad y que vuelva en ventas. Meta Ads, Google Ads y las métricas que sí importan.",
  },
  {
    slug: "conversion",
    nombre: "Conversión & CRO",
    metaTitle: "Conversión y CRO: Convierte Visitas en Clientes | Suggestion",
    metaDescription:
      "Por qué tu tráfico no se vuelve venta y cómo arreglarlo: landings, embudos y seguimiento. Guías de conversión y CRO.",
    h1: "Conversión y CRO: convierte visitas en clientes",
    intro:
      "Por qué tu tráfico no se vuelve venta y cómo arreglarlo: landings, embudos y seguimiento.",
  },
  {
    slug: "marca",
    nombre: "Marca & contenidos",
    metaTitle: "Marca y Contenidos que Dejan Huella | Suggestion",
    metaDescription:
      "Branding que vende vs. branding bonito, y contenido que mueve a la acción. Guías de marca y posicionamiento.",
    h1: "Marca y contenidos que dejan huella",
    intro: "Branding que vende vs. branding bonito, y contenido que mueve a la acción.",
  },
  {
    slug: "ia-automatizacion",
    nombre: "IA y automatización",
    metaTitle: "IA y Automatización para Marketing | Suggestion",
    metaDescription:
      "Qué sí funciona de la inteligencia artificial en marketing —y qué es solo ruido—. Automatiza sin perder el toque humano.",
    h1: "IA y automatización aplicadas al marketing",
    intro:
      "Qué sí funciona de la inteligencia artificial en marketing —y qué es solo ruido—. Automatiza sin perder el toque humano.",
  },
  {
    slug: "psicologia-de-mercado",
    nombre: "Psicología de mercado",
    metaTitle: "Psicología de Mercado: Por Qué la Gente Compra | Suggestion",
    metaDescription:
      "La decisión de compra es emocional y se racionaliza después. Gatillos, sesgos y comportamiento del consumidor peruano.",
    h1: "Psicología de mercado: por qué la gente compra",
    intro:
      "La decisión de compra es emocional y se racionaliza después. Gatillos, sesgos y comportamiento del consumidor peruano.",
  },
  {
    slug: "inmobiliario",
    nombre: "Inmobiliario",
    metaTitle: "Marketing Inmobiliario: Ideas y Casos | Suggestion",
    metaDescription:
      "Cómo se vende un proyecto hoy: captación de citas, drone y mensajes que mueven la decisión. Ideas y casos de marketing inmobiliario.",
    h1: "Marketing inmobiliario: ideas y casos",
    intro:
      "Cómo se vende un proyecto hoy: captación de citas, drone y mensajes que mueven la decisión.",
  },
  {
    slug: "automotriz",
    nombre: "Automotriz",
    metaTitle: "Marketing Automotriz: Ideas y Casos | Suggestion",
    metaDescription:
      "Del clic al test drive: cómo llevar leads de autos hasta el cierre en piso. Ideas y casos de marketing automotriz.",
    h1: "Marketing automotriz: ideas y casos",
    intro: "Del clic al test drive: cómo llevar leads de autos hasta el cierre en piso.",
  },
  {
    slug: "sectores",
    nombre: "Turismo, consumo y salud",
    metaTitle: "Marketing para Turismo, Consumo y Salud | Suggestion",
    metaDescription:
      "Estrategias por rubro: llenar temporada baja, mover el punto de venta y captar pacientes. Marketing para turismo, consumo y salud.",
    h1: "Marketing para turismo, consumo y salud",
    intro:
      "Estrategias por rubro: llenar temporada baja, mover el punto de venta y captar pacientes.",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-crear-un-logo",
    categoria: "marca",
    title: "Cómo Crear un Logo: Gratis o con IA | Suggestion",
    description:
      "¿Crear tu logo gratis, con IA o con un profesional? Te mostramos los 3 caminos, sus costos reales y cuál conviene según tu negocio. Guía 2026.",
    h1: "Cómo crear un logo: gratis, con IA o profesional",
    excerpt:
      "Buscar “crear logo” devuelve mil herramientas que prometen un logo en cinco minutos. Algunas sirven; otras te dan un dibujo bonito que no aguanta el primer mes de tu negocio. Antes de elegir, entiende los tres caminos y qué pierdes (o ganas) en cada uno.",
    date: "2026-01-14",
    secciones: [
      {
        h2: "Los 3 caminos para crear un logo",
        sub: [
          { h3: "1. Crear un logo gratis (editores online)", texto: "Herramientas tipo editor con plantillas. A favor: cero costo, inmediato. En contra: plantillas que comparten miles de marcas, baja resolución para imprenta, sin archivos vectoriales ni versiones, y casi siempre te cobran al descargar en buena calidad. Sirve para una idea rápida o un proyecto temporal, no para una marca que quiere durar." },
          { h3: "2. Crear un logo con IA", texto: "La IA genera opciones en segundos a partir de tu nombre y rubro. A favor: rápido, barato, buen punto de partida para explorar ideas. En contra: no entiende tu estrategia, repite estilos, y suele fallar en versiones, tipografía y aplicaciones reales." },
          { h3: "3. Diseño de logo profesional", texto: "Un proceso que parte de tu estrategia de marca, no de una plantilla. A favor: logo único, archivos vectoriales, versiones (principal, secundaria, isotipo), manual de marca y coherencia en todo. En contra: cuesta más y toma más tiempo. Es la opción cuando el logo va a representar tu negocio por años." },
        ],
      },
      {
        h2: "¿Cuál te conviene?",
        bullets: [
          { titulo: "Proyecto temporal, evento o prueba", texto: "gratis o IA está bien." },
          { titulo: "Negocio que quiere crecer y verse serio", texto: "profesional. Un logo barato que tienes que rehacer en seis meses termina costando más." },
        ],
        parrafo:
          "La pregunta real no es “¿cuánto cuesta un logo?”, sino “¿cuánto te cuesta una marca que no te diferencia?”.",
      },
      {
        h2: "De un logo a una marca que vende",
        parrafo:
          "Un logo es la punta del iceberg. Lo que hace que te elijan y paguen más es la marca completa: nombre, identidad visual, tono y coherencia. Eso no lo da una plantilla ni la IA.",
      },
    ],
    cierre: "En Suggestion construimos branding estratégico: del nombre al manual de marca.",
    moneyPage: { label: "Construyamos tu marca", href: "/servicios/branding" },
    relacionados: ["crear-logo-con-ia", "mejores-ia-para-crear-logos"],
  },
  {
    slug: "crear-logo-con-ia",
    categoria: "marca",
    title: "Crear un Logo con IA: Ventajas y Límites Reales | Suggestion",
    description:
      "¿Crear tu logo con IA? Te explicamos qué hace bien, dónde falla y cómo usarla sin arruinar tu marca. Guía honesta con ejemplos. 2026.",
    h1: "Crear un logo con IA: ventajas, límites y cuándo NO usarla",
    excerpt:
      "La IA crea logos en segundos. Eso es real y útil. Pero confundir “tengo una imagen” con “tengo una marca” es el error que pagan caro muchos negocios. Aquí la versión honesta.",
    date: "2026-01-21",
    secciones: [
      {
        h2: "Qué hace bien la IA para logos",
        bullets: [
          { titulo: "Explorar ideas rápido", texto: "en minutos ves decenas de direcciones visuales." },
          { titulo: "Bajar costo inicial", texto: "ideal para validar un concepto antes de invertir." },
          { titulo: "Inspirar", texto: "sirve como punto de partida para un diseñador." },
        ],
      },
      {
        h2: "Dónde falla (y te puede costar caro)",
        bullets: [
          { titulo: "No entiende tu estrategia", texto: "la IA no sabe a quién le vendes ni por qué te eligen. Diseña sobre estética, no sobre posicionamiento." },
          { titulo: "Repite estilos", texto: "genera lo que ya vio mil veces: terminas pareciéndote a todos." },
          { titulo: "Falla en lo técnico", texto: "versiones, tipografías propias, archivos vectoriales y aplicaciones: ahí la IA se queda corta." },
          { titulo: "Riesgo de marca registrada", texto: "un logo genérico es difícil de proteger legalmente." },
        ],
      },
      {
        h2: "Cómo usar la IA sin arruinar tu marca",
        parrafo:
          "Úsala para explorar, no para decidir. Genera ideas, elige direcciones que te gusten y llévalas a un profesional que las convierta en una marca real, registrable y coherente. La IA es un lápiz, no el diseñador.",
      },
      {
        h2: "Cuándo NO usar IA",
        parrafo:
          "Cuando el logo va a ser la cara de un negocio que quiere durar y diferenciarse. Ahí necesitas estrategia, no una imagen rápida.",
      },
    ],
    cierre: "En Suggestion combinamos lo mejor de ambos mundos: velocidad de exploración y criterio estratégico.",
    moneyPage: { label: "Construyamos tu marca", href: "/servicios/branding" },
    relacionados: ["como-crear-un-logo", "mejores-ia-para-crear-logos"],
  },
  {
    slug: "que-es-rebranding",
    categoria: "marca",
    title: "Qué es un Rebranding y Cuándo Conviene | Suggestion",
    description:
      "Qué es un rebranding, en qué se diferencia de un lavado de cara y las 6 señales de que tu marca ya lo necesita. Guía clara con ejemplos.",
    h1: "Qué es un rebranding y cuándo tu marca lo necesita",
    excerpt:
      "Rebranding no es “cambiar el logo porque ya aburre”. Es realinear tu marca con lo que tu negocio es hoy y con el cliente que quieres. Hecho por moda, es un gasto. Hecho por estrategia, recupera ventas.",
    date: "2026-01-28",
    secciones: [
      {
        h2: "Qué es un rebranding",
        parrafo:
          "Es el proceso de renovar la identidad de una marca: puede tocar el nombre, el logo, la identidad visual, el mensaje y hasta el posicionamiento. Hay dos niveles: rebranding parcial (refresh), donde actualizas lo visual manteniendo la esencia; y rebranding total, donde rediseñas la marca de raíz por un cambio de fondo en el negocio.",
      },
      {
        h2: "6 señales de que tu marca lo necesita",
        bullets: [
          { texto: "Tu marca se ve desactualizada frente a la competencia." },
          { texto: "Ya no representa lo que tu negocio hace hoy." },
          { texto: "No conectas con el cliente que quieres atraer." },
          { texto: "Tu identidad es inconsistente (cada pieza se ve distinta)." },
          { texto: "Cambió tu modelo de negocio, público o propuesta." },
          { texto: "Te confunden con un competidor." },
        ],
      },
      {
        h2: "Qué NO es un rebranding",
        parrafo:
          "No es solo un logo nuevo. Si cambias la cara pero no la estrategia detrás, en seis meses estás igual. El rebranding empieza en el posicionamiento, no en el color.",
      },
    ],
    cierre: "¿Tu marca ya no te representa? En Suggestion hacemos rebranding con estrategia, no por moda.",
    moneyPage: { label: "Evaluemos tu marca", href: "/servicios/branding" },
    relacionados: ["posicionamiento-de-marca", "como-crear-un-logo"],
  },
  {
    slug: "que-es-el-marketing-digital",
    categoria: "performance",
    title: "Qué es el Marketing Digital y Cómo Funciona | Suggestion",
    description:
      "Qué es el marketing digital, cómo funciona de verdad y qué canales lo componen. Guía 2026 para que dejes de medir likes y empieces a medir ventas.",
    h1: "Qué es el marketing digital y cómo funciona",
    excerpt:
      "El marketing digital es usar canales digitales —búsqueda, redes, web, email— para atraer clientes, convertirlos y fidelizarlos. Suena simple, pero la mayoría lo hace mal por una razón: mide likes en vez de ventas.",
    date: "2026-02-04",
    secciones: [
      {
        h2: "Cómo funciona (el embudo, sin tecnicismos)",
        parrafo: "Todo marketing digital que vende sigue tres etapas. Cuando una etapa falla, todo el embudo se cae; por eso no sirve tener muchos seguidores si nadie agenda.",
        bullets: [
          { titulo: "Atraer", texto: "que la persona correcta te descubra (pauta, SEO, contenido, redes)." },
          { titulo: "Convertir", texto: "que esa visita se vuelva contacto o venta (landing, oferta, seguimiento)." },
          { titulo: "Fidelizar", texto: "que vuelva a comprar y te recomiende (email, CRM, comunidad)." },
        ],
      },
      {
        h2: "Los canales que lo componen",
        bullets: [
          { titulo: "Publicidad digital (pauta)", texto: "Google Ads y Meta Ads." },
          { titulo: "SEO", texto: "aparecer en Google sin pagar por clic." },
          { titulo: "Redes sociales", texto: "comunidad y contenido." },
          { titulo: "Web y CRO", texto: "la página que convierte." },
          { titulo: "Email y automatización", texto: "seguimiento que cierra." },
        ],
      },
      {
        h2: "El error más común",
        parrafo:
          "Medir vanidad: alcance, likes, seguidores. Esos números no pagan la planilla. Lo que importa es el CPL (costo por lead), el ROAS (retorno de la pauta) y los cierres.",
      },
    ],
    cierre: "En Suggestion trabajamos el funnel completo —lead, cita, cierre—, no métricas de vanidad.",
    moneyPage: { label: "Agenda tu diagnóstico gratuito", href: "/servicios/marketing-digital" },
    relacionados: ["cuanto-invertir-en-ads-peru", "que-es-un-lead"],
  },
  {
    slug: "cuanto-invertir-en-ads-peru",
    categoria: "performance",
    title: "¿Cuánto Invertir en Google y Meta Ads en Perú? | Suggestion",
    description:
      "¿Cuánto invertir en Google Ads y Meta Ads en Perú? Te explicamos cómo definir tu presupuesto según tu objetivo, sin cifras mágicas. Guía real 2026.",
    h1: "¿Cuánto invertir en Google Ads y Meta Ads en Perú?",
    excerpt:
      "La respuesta honesta no es una cifra: es “depende, y aquí está de qué depende”. Cualquiera que te dé un número sin conocer tu negocio te está vendiendo humo. Esto es lo que sí determina tu presupuesto.",
    date: "2026-02-11",
    secciones: [
      {
        h2: "El presupuesto no se adivina, se calcula al revés",
        parrafo:
          "Empieza por la meta, no por el monto. Si quieres 10 ventas al mes y cierras 1 de cada 5 leads, necesitas 50 leads. Si tu costo por lead histórico es S/15, tu pauta base es S/750. Sin ese dato, todo es tirar plata y rezar.",
      },
      {
        h2: "Qué define cuánto invertir",
        bullets: [
          { titulo: "Tu objetivo", texto: "¿reconocimiento, leads o ventas directas? Cada uno cuesta distinto." },
          { titulo: "Tu sector y competencia", texto: "un rubro muy competido sube el costo por clic." },
          { titulo: "Tu ticket", texto: "un producto de S/50 no soporta el mismo CPL que un proyecto inmobiliario." },
          { titulo: "Tu embudo", texto: "si tu landing y tu seguimiento convierten bien, cada sol rinde más." },
        ],
      },
      {
        h2: "Google Ads vs Meta Ads: ¿en cuál invertir?",
        parrafo:
          "Google Ads captura demanda existente (gente que ya busca lo que vendes): ideal para servicios e intención alta. Meta Ads genera demanda (interrumpe con una oferta atractiva): ideal para productos y captación masiva. La mayoría de negocios necesita ambos, en proporciones según su caso.",
      },
      {
        h2: "La métrica que importa: ROAS, no gasto",
        parrafo:
          "No preguntes “¿cuánto gasto?” sino “¿cuánto me devuelve cada sol?”. Con S/3,000 bien invertidos, una inmobiliaria que asesoramos generó S/350K. El monto importa menos que la estrategia detrás.",
      },
    ],
    cierre: "¿Quieres saber cuánto necesitas invertir para tu objetivo? Te damos un número honesto.",
    moneyPage: { label: "Pide tu propuesta", href: "/servicios/publicidad-digital" },
    relacionados: ["cpl-vs-roas", "que-es-el-marketing-digital"],
  },
  {
    slug: "como-crear-una-pagina-web",
    categoria: "conversion",
    title: "Cómo Crear una Página Web Paso a Paso | Suggestion",
    description:
      "¿Crear tu página web con Wix o contratar a un profesional? Comparamos costo, tiempo y resultados reales para que decidas según tu negocio. 2026.",
    h1: "Cómo crear una página web: hazlo tú vs contratar",
    excerpt:
      "Crear una página web nunca fue tan fácil… ni tan fácil de hacer mal. Hoy puedes armar una en una tarde con Wix, o invertir en una hecha para vender. La diferencia no es la estética: es si trae clientes o solo “se ve bonita”.",
    date: "2026-02-18",
    secciones: [
      {
        h2: "Opción 1: hacerla tú (Wix, WordPress, etc.)",
        parrafo:
          "A favor: barato, rápido, control total. En contra: te tomará tiempo aprender, suele quedar lenta, sin estructura de conversión ni SEO, y con plantillas que usan miles. Sirve para empezar o para un negocio muy simple.",
      },
      {
        h2: "Opción 2: contratar desarrollo profesional",
        parrafo:
          "A favor: diseño a medida, rápida, optimizada para SEO y pensada para convertir (UX, copy, CTAs). En contra: mayor inversión y plazo. Es la opción cuando tu web es un canal de ventas, no un folleto.",
      },
      {
        h2: "Las 4 cosas que toda web debería tener",
        bullets: [
          { titulo: "Velocidad", texto: "una web lenta pierde clientes y posiciones." },
          { titulo: "Estructura de conversión", texto: "que guíe a la acción." },
          { titulo: "SEO técnico de base", texto: "para que Google la encuentre." },
          { titulo: "Mobile-first", texto: "la mayoría te visita desde el celular." },
        ],
      },
    ],
    cierre: "En Suggestion diseñamos webs rápidas y pensadas para una sola cosa: convertir visitas en clientes.",
    moneyPage: { label: "Quiero una web que venda", href: "/servicios/desarrollo-web" },
    relacionados: ["crear-pagina-web-wix-vs-profesional", "que-es-un-lead"],
  },
  {
    slug: "mejores-ia-para-crear-logos",
    categoria: "ia-automatizacion",
    title: "Las Mejores IA para Crear Logos en 2026 | Suggestion",
    description:
      "Las mejores herramientas de IA para crear logos, para qué sirve cada una y por qué ninguna reemplaza la estrategia de un diseñador. Guía 2026.",
    h1: "Las mejores IA para crear logos (y sus límites)",
    excerpt:
      "Las herramientas de IA para logos se multiplicaron. Algunas son útiles para explorar; ninguna construye una marca sola. Esta es la guía honesta: para qué sirven y dónde se quedan cortas.",
    date: "2026-02-25",
    secciones: [
      {
        h2: "Para qué sirven (y para qué no)",
        parrafo:
          "La IA de logos es excelente para generar ideas, variantes y bocetos rápidos. Es un acelerador de exploración. No sirve para definir tu posicionamiento, garantizar originalidad ni entregar un sistema de marca aplicable.",
      },
      {
        h2: "Tipos de herramientas de IA para logos",
        bullets: [
          { titulo: "Generadores por texto (prompt)", texto: "describes tu idea y proponen conceptos. Útiles para explorar estilos." },
          { titulo: "Plataformas con plantillas + IA", texto: "combinan plantillas y personalización automática. Rápidas, pero genéricas." },
          { titulo: "IA generativa de imagen", texto: "crean grafismos originales, aunque difíciles de convertir en logo vectorial limpio." },
        ],
      },
      {
        h2: "Por qué no reemplazan a un diseñador",
        parrafo:
          "Un logo es el 10% de una marca. El otro 90% —estrategia, naming, identidad visual, coherencia, registro— necesita criterio humano. La IA te da un punto de partida; un profesional te da una marca que diferencia y se puede proteger.",
      },
    ],
    cierre: "En Suggestion usamos IA para acelerar, pero diseñamos con estrategia para que tu marca venda.",
    moneyPage: { label: "Construyamos tu marca", href: "/servicios/branding" },
    relacionados: ["crear-logo-con-ia", "como-crear-un-logo"],
  },
  {
    slug: "que-es-un-lead",
    categoria: "conversion",
    title: "Qué es un Lead y Cómo Dejar de Perderlos | Suggestion",
    description:
      "Qué es un lead, los tipos que existen y por qué se enfrían. Aprende a capturarlos y darles seguimiento para convertir más sin gastar más.",
    h1: "Qué es un lead y cómo dejar de perderlos",
    excerpt:
      "Un lead es una persona que mostró interés en lo que vendes y te dejó un dato para contactarla. Suena obvio, pero ahí empieza el problema: la mayoría de negocios genera leads y los pierde por no saber qué hacer con ellos.",
    date: "2026-03-04",
    secciones: [
      {
        h2: "Tipos de leads (no todos valen igual)",
        bullets: [
          { titulo: "Lead frío", texto: "mostró interés mínimo; falta nutrirlo." },
          { titulo: "Lead tibio (MQL)", texto: "interactuó varias veces; tiene potencial." },
          { titulo: "Lead caliente (SQL)", texto: "listo para hablar de compra." },
        ],
        parrafo: "Tratar a todos igual es el error #1: persigues a los fríos y descuidas a los calientes.",
      },
      {
        h2: "Por qué se te enfrían los leads",
        bullets: [
          { titulo: "Tardas en responder", texto: "un lead sin respuesta en minutos pierde temperatura rápido." },
          { titulo: "No haces seguimiento", texto: "la mayoría de ventas se cierra después de varios contactos." },
          { titulo: "No los organizas", texto: "sin un CRM, los leads viven en mensajes sueltos y se pierden." },
        ],
      },
      {
        h2: "Cómo dejar de perderlos",
        bullets: [
          { titulo: "Captura ordenada", texto: "todo lead entra a un solo lugar (CRM)." },
          { titulo: "Respuesta rápida", texto: "automatiza el primer contacto (incluido WhatsApp)." },
          { titulo: "Seguimiento constante", texto: "secuencias que nutren hasta el cierre." },
          { titulo: "Calificación", texto: "prioriza a los calientes, nutre a los fríos." },
        ],
      },
    ],
    cierre: "En Suggestion automatizamos la captura, el seguimiento y la calificación para que ningún lead se enfríe.",
    moneyPage: { label: "Agenda una demo", href: "/servicios/crm-automatizacion" },
    relacionados: ["como-automatizar-whatsapp", "que-es-el-marketing-digital"],
  },
  {
    slug: "que-es-neuromarketing",
    categoria: "psicologia-de-mercado",
    title: "Qué es el Neuromarketing y Cómo Aplicarlo | Suggestion",
    description:
      "Qué es el neuromarketing, cómo funciona y 5 técnicas para aplicarlo en tu negocio sin manipular. La ciencia detrás de por qué la gente compra.",
    h1: "Qué es el neuromarketing y cómo usarlo para vender más",
    excerpt:
      "El neuromarketing estudia cómo decide el cerebro de tu cliente —no lo que dice que decide, sino lo que realmente hace—. La compra es emocional y se justifica después con la razón. Quien entiende eso, vende más sin bajar el precio.",
    date: "2026-03-11",
    secciones: [
      {
        h2: "Qué es el neuromarketing",
        parrafo:
          "Es la aplicación de la neurociencia y la psicología al marketing: cómo la atención, la emoción y la memoria influyen en la decisión de compra. No es manipular; es comunicar como el cerebro realmente procesa.",
      },
      {
        h2: "5 técnicas que puedes aplicar hoy",
        bullets: [
          { titulo: "Ancla de precio", texto: "mostrar primero una opción cara hace que la siguiente parezca razonable." },
          { titulo: "Escasez y urgencia reales", texto: "“quedan 3” mueve, pero solo si es verdad." },
          { titulo: "Prueba social", texto: "el cerebro confía en lo que otros ya validaron." },
          { titulo: "Menos opciones", texto: "demasiadas alternativas paralizan; guía la decisión." },
          { titulo: "Historias, no datos sueltos", texto: "el cerebro recuerda relatos, no cifras aisladas." },
        ],
      },
      {
        h2: "El límite ético (y comercial)",
        parrafo:
          "El neuromarketing potencia un buen mensaje; no salva uno falso. Manipular genera una venta y mata la recompra. Nosotros lo usamos para comunicar mejor lo que sí es verdad.",
      },
    ],
    cierre: "En Suggestion aplicamos psicología del consumidor a tu marca y tus campañas.",
    moneyPage: { label: "Hablemos de tu marca", href: "/servicios/branding" },
    relacionados: ["psicologia-de-ventas", "comportamiento-del-consumidor-peruano"],
  },
  {
    slug: "cpl-vs-roas",
    categoria: "performance",
    title: "CPL vs ROAS: Las Métricas de Pauta que Importan | Suggestion",
    description:
      "Qué es el CPL, qué es el ROAS, en qué se diferencian y cuál mirar según tu objetivo. Deja de medir likes y empieza a medir lo que paga.",
    h1: "CPL vs ROAS: las únicas métricas de pauta que importan",
    excerpt:
      "Si tu reporte de campañas habla de alcance y likes, te están distrayendo. Las dos métricas que dicen si tu inversión funciona son CPL y ROAS. Aquí, sin tecnicismos.",
    date: "2026-03-18",
    secciones: [
      {
        h2: "Qué es el CPL (costo por lead)",
        parrafo:
          "Cuánto te cuesta conseguir un contacto interesado. Si invertiste S/1,000 y obtuviste 50 leads, tu CPL es S/20. Sirve para campañas de captación, donde el cierre ocurre después (servicios, inmobiliario, salud).",
      },
      {
        h2: "Qué es el ROAS (retorno de la inversión publicitaria)",
        parrafo:
          "Cuánto vendiste por cada sol invertido. Si gastaste S/1,000 y vendiste S/5,000, tu ROAS es 5. Sirve cuando la venta es directa y medible (e-commerce, productos).",
      },
      {
        h2: "¿Cuál mirar?",
        bullets: [
          { titulo: "Vendes servicios / leads que cierras después", texto: "prioriza CPL (y el costo por cita/cierre)." },
          { titulo: "Vendes productos online", texto: "prioriza ROAS." },
        ],
        parrafo: "La mayoría de negocios debe mirar ambos, conectando el CPL con la tasa de cierre real.",
      },
      {
        h2: "El error que cuesta caro",
        parrafo:
          "Optimizar por clics o alcance baratos. Un lead barato que no cierra es más caro que un lead caro que sí compra. La métrica final siempre es la venta, no el clic.",
      },
    ],
    cierre: "En Suggestion reportamos CPL, ROAS y cierres con transparencia. Sin humo.",
    moneyPage: { label: "Pide tu propuesta", href: "/servicios/publicidad-digital" },
    relacionados: ["cuanto-invertir-en-ads-peru", "que-es-el-marketing-digital"],
  },
  {
    slug: "crear-pagina-web-wix-vs-profesional",
    categoria: "conversion",
    title: "Wix vs Web Profesional: ¿Cuál te Conviene? | Suggestion",
    description:
      "¿Hacer tu web con Wix o contratar a un profesional? Comparamos costo, velocidad, SEO y conversión para que elijas según tus objetivos. 2026.",
    h1: "Crear una página web con Wix vs profesional: qué te conviene",
    excerpt:
      "Wix y similares democratizaron las webs: cualquiera arma una. La duda real es si esa web te va a traer clientes o solo a “estar online”. Comparemos honesto.",
    date: "2026-03-25",
    secciones: [
      {
        h2: "Wix (y constructores similares)",
        parrafo:
          "A favor: barato, rápido, lo haces tú sin saber código. En contra: plantillas genéricas, menos control de velocidad y SEO técnico, y limitaciones cuando creces. Perfecto para validar una idea, un negocio muy simple o empezar con poco.",
      },
      {
        h2: "Desarrollo profesional",
        parrafo:
          "A favor: diseño a medida, optimizado para velocidad (Core Web Vitals), SEO técnico de base y estructura de conversión. En contra: más inversión y plazo. Es la opción cuando la web es un canal de ventas serio.",
      },
      {
        h2: "Comparativa rápida",
        bullets: [
          { titulo: "Costo", texto: "Wix gana al inicio. A largo plazo, rehacer una web limitada cuesta más." },
          { titulo: "Velocidad y SEO", texto: "ventaja clara del desarrollo profesional." },
          { titulo: "Conversión", texto: "una web pro se diseña para que el visitante actúe; una plantilla, no." },
          { titulo: "Escalabilidad", texto: "si planeas crecer (tienda, integraciones), lo pro evita migrar después." },
        ],
      },
    ],
    cierre: "En Suggestion hacemos webs rápidas y pensadas para convertir, no solo para verse bien.",
    moneyPage: { label: "Quiero una web que venda", href: "/servicios/desarrollo-web" },
    relacionados: ["como-crear-una-pagina-web", "que-es-un-lead"],
  },
  {
    slug: "como-automatizar-whatsapp",
    categoria: "ia-automatizacion",
    title: "Cómo Automatizar WhatsApp en tu Negocio | Suggestion",
    description:
      "Cómo automatizar WhatsApp para responder al instante, calificar leads y agendar sin estar pegado al celular. Guía práctica con ejemplos. 2026.",
    h1: "Cómo automatizar WhatsApp en tu negocio",
    excerpt:
      "WhatsApp es donde tu cliente peruano quiere hablar. El problema: si no respondes rápido, el lead se enfría. Automatizar resuelve eso sin que vivas pegado al celular.",
    date: "2026-04-01",
    secciones: [
      {
        h2: "Qué se puede automatizar (y conviene)",
        bullets: [
          { titulo: "Respuesta instantánea", texto: "al primer mensaje, 24/7." },
          { titulo: "Preguntas frecuentes", texto: "precios, horarios, ubicación, respondidas solas." },
          { titulo: "Calificación de leads", texto: "preguntas que filtran al interesado real." },
          { titulo: "Agendamiento", texto: "de citas o llamadas sin intervención manual." },
          { titulo: "Seguimiento", texto: "automático a quien no respondió." },
        ],
      },
      {
        h2: "Cómo empezar, paso a paso",
        bullets: [
          { titulo: "WhatsApp Business API", texto: "no el WhatsApp normal: habilita la automatización seria." },
          { titulo: "Un chatbot o flujo conversacional", texto: "que responda y derive según la respuesta." },
          { titulo: "Integración con tu CRM", texto: "para que cada conversación quede registrada." },
          { titulo: "Reglas de derivación a humano", texto: "cuando el lead está caliente." },
        ],
      },
      {
        h2: "El error común",
        parrafo:
          "Automatizar todo y sonar a robot. La automatización atiende lo repetitivo; la persona cierra. El equilibrio es responder al instante y derivar al humano en el momento justo.",
      },
    ],
    cierre: "En Suggestion montamos tu automatización de WhatsApp conectada al CRM, para que ningún lead se enfríe.",
    moneyPage: { label: "Agenda una demo", href: "/servicios/crm-automatizacion" },
    relacionados: ["que-es-un-lead", "ia-en-el-marketing"],
  },
  {
    slug: "comportamiento-del-consumidor-peruano",
    categoria: "psicologia-de-mercado",
    title: "Comportamiento del Consumidor Peruano | Suggestion",
    description:
      "Cómo decide de compra el consumidor peruano, qué lo motiva y cómo adaptar tu marketing a su comportamiento real. Claves de segmentación local.",
    h1: "Comportamiento del consumidor peruano: cómo decide tu cliente",
    excerpt:
      "Vender en Perú con un manual gringo no funciona. El consumidor peruano tiene motivaciones, desconfianzas y aspiraciones propias. Entenderlas es la diferencia entre una campaña que conecta y una que se ignora.",
    date: "2026-04-08",
    secciones: [
      {
        h2: "Qué motiva la decisión de compra en Perú",
        bullets: [
          { titulo: "Confianza antes que precio", texto: "el peruano desconfía del humo; la prueba social y las referencias pesan mucho." },
          { titulo: "Aspiración y progreso", texto: "muchas compras son validación de un avance personal o familiar." },
          { titulo: "Relación cercana", texto: "WhatsApp, trato directo y atención rápida cierran más que un formulario frío." },
          { titulo: "Sensibilidad al riesgo", texto: "garantías, facilidades y reseñas reducen el miedo a equivocarse." },
        ],
      },
      {
        h2: "Segmentar más allá de la edad",
        parrafo:
          "La segmentación útil no es solo demográfica. Estilos de vida y actitud (más progresista o más conservador) explican mejor por qué alguien compra. Un mismo producto necesita mensajes distintos según a quién le hables.",
      },
      {
        h2: "Cómo aplicarlo a tu marketing",
        parrafo:
          "Define a quién le vendes de verdad, qué teme y qué aspira, y construye el mensaje desde ahí. No le hables a “todos”: háblale a tu cliente real, en su idioma.",
      },
    ],
    cierre: "En Suggestion construimos estrategias con el consumidor peruano en el centro, no plantillas importadas.",
    moneyPage: { label: "Agenda tu diagnóstico", href: "/servicios/marketing-digital" },
    relacionados: ["psicologia-de-ventas", "que-es-neuromarketing"],
  },
  {
    slug: "psicologia-de-ventas",
    categoria: "psicologia-de-mercado",
    title: "Psicología de Ventas: 6 Gatillos que Funcionan | Suggestion",
    description:
      "6 gatillos de la psicología de ventas para vender más sin manipular ni quemar tu marca. Principios reales aplicados al marketing peruano.",
    h1: "6 gatillos de la psicología de ventas (sin trucos baratos)",
    excerpt:
      "Los gatillos mentales funcionan porque así decide el cerebro, no porque “engañen”. Usados con honestidad, aceleran la venta. Usados con humo, queman tu marca. Aquí los 6 que sí valen.",
    date: "2026-04-15",
    secciones: [
      {
        h2: "Los 6 gatillos",
        bullets: [
          { titulo: "Reciprocidad", texto: "da valor primero (un diagnóstico, un consejo) y la gente querrá devolver el gesto." },
          { titulo: "Prueba social", texto: "casos y testimonios reales bajan la desconfianza." },
          { titulo: "Autoridad", texto: "demostrar que sabes (datos, resultados) genera confianza." },
          { titulo: "Escasez", texto: "lo limitado se valora más —solo si es real." },
          { titulo: "Compromiso y coherencia", texto: "un pequeño “sí” inicial facilita el “sí” grande." },
          { titulo: "Aversión a la pérdida", texto: "muestra lo que se pierde por no actuar." },
        ],
      },
      {
        h2: "La regla de oro",
        parrafo:
          "Cada gatillo debe apoyarse en algo verdadero. La escasez falsa, los testimonios inventados y la urgencia de mentira funcionan una vez y destruyen la confianza para siempre.",
      },
      {
        h2: "Dónde aplicarlos",
        parrafo:
          "En tus anuncios, landings y guiones de venta. El mismo presupuesto de pauta rinde más cuando el mensaje activa los gatillos correctos.",
      },
    ],
    cierre: "En Suggestion escribimos campañas que persuaden con principios reales, no con trucos.",
    moneyPage: { label: "Pide tu propuesta", href: "/servicios/publicidad-digital" },
    relacionados: ["que-es-neuromarketing", "comportamiento-del-consumidor-peruano"],
  },
  {
    slug: "publicidad-inmobiliaria-en-redes",
    categoria: "inmobiliario",
    title: "Publicidad Inmobiliaria en Redes: Qué Funciona | Suggestion",
    description:
      "Cómo hacer publicidad inmobiliaria en redes que genera citas, no curiosos. Formatos, mensajes y errores a evitar en Meta Ads para proyectos. 2026.",
    h1: "Publicidad inmobiliaria en redes: qué funciona en Perú",
    excerpt:
      "Vender un lote o departamento por redes no es subir fotos bonitas y esperar. Es atraer al comprador correcto, filtrar curiosos y llevarlo a una cita. Esto es lo que funciona.",
    date: "2026-04-22",
    secciones: [
      {
        h2: "Lo que funciona",
        bullets: [
          { titulo: "Video y recorridos (incluido drone)", texto: "el inmueble se vende mostrándolo bien; la toma aérea vende ubicación y avance de obra." },
          { titulo: "Mensajes de valorización", texto: "“precio de lanzamiento”, “etapa inicial”, “antes que suba” mueven al inversor." },
          { titulo: "Segmentación por intención y zona", texto: "llegar a quien sí puede comprar, no a todos." },
          { titulo: "Formularios + WhatsApp", texto: "captura el dato y responde al instante." },
        ],
      },
      {
        h2: "Lo que no funciona (y quema presupuesto)",
        bullets: [
          { texto: "Vender solo “metros y precio” sin aspiración." },
          { texto: "No filtrar: terminas con cientos de curiosos y cero citas." },
          { texto: "Tardar en responder al lead (se enfría en minutos)." },
        ],
      },
      {
        h2: "Del lead a la cita",
        parrafo:
          "La publicidad genera el interés; el seguimiento lo convierte en cita. Sin un CRM y respuesta rápida, pagas por leads que se enfrían. Así llevamos a una inmobiliaria a 8 lotes vendidos con S/3,000.",
      },
    ],
    cierre: "En Suggestion conectamos pauta, landing, drone y CRM para llenar tu sala de ventas.",
    moneyPage: { label: "Llenemos tu sala de ventas", href: "/marketing-inmobiliario" },
    relacionados: ["marketing-inmobiliario-ejemplos", "vender-proyecto-en-preventa"],
  },
  {
    slug: "marketing-para-restaurantes",
    categoria: "sectores",
    title: "Marketing para Restaurantes que Llena Mesas | Suggestion",
    description:
      "Estrategias de marketing para restaurantes que llenan mesas en los días flojos: redes, promociones, reseñas y publicidad local. Guía práctica.",
    h1: "Estrategias de marketing para restaurantes que llenan mesas",
    excerpt:
      "Un buen restaurante con mesas vacías un martes no tiene un problema de comida: tiene un problema de marketing. Estas estrategias llenan los días flojos y suben el ticket.",
    date: "2026-04-29",
    secciones: [
      {
        h2: "Estrategias que funcionan",
        bullets: [
          { titulo: "Contenido que da hambre", texto: "fotos y video reales del plato venden más que cualquier texto." },
          { titulo: "Promociones para días flojos", texto: "un incentivo de martes a jueves equilibra la semana." },
          { titulo: "Reseñas en Google", texto: "el comensal decide por las estrellas; pedirlas activamente cambia el juego." },
          { titulo: "Publicidad local geolocalizada", texto: "llegar a quien está cerca y con hambre ahora." },
          { titulo: "Fidelización", texto: "un cliente que vuelve cuesta menos que uno nuevo." },
        ],
      },
      {
        h2: "El error típico",
        parrafo:
          "Postear por postear sin objetivo. El contenido tiene que llevar a una acción: reservar, pedir delivery o visitar. Bonito no es lo mismo que rentable.",
      },
      {
        h2: "Mide lo que importa",
        parrafo: "Reservas, pedidos y ticket promedio. No seguidores.",
      },
    ],
    cierre: "En Suggestion hacemos marketing para restaurantes y turismo enfocado en llenar, no en likes.",
    moneyPage: { label: "Llena tus mesas", href: "/marketing-turismo" },
    relacionados: ["como-conseguir-mas-pacientes"],
  },
  {
    slug: "como-conseguir-mas-pacientes",
    categoria: "sectores",
    title: "Cómo Conseguir Más Pacientes para tu Clínica | Suggestion",
    description:
      "Cómo conseguir más pacientes para tu clínica o consultorio sin quemar presupuesto: publicidad segmentada, web de confianza y seguimiento. 2026.",
    h1: "Cómo conseguir más pacientes para tu clínica o consultorio",
    excerpt:
      "Más pacientes no es cuestión de gastar más en publicidad, sino de captar al correcto y no perderlo en el camino. Esto es lo que funciona en salud.",
    date: "2026-05-06",
    secciones: [
      {
        h2: "Las claves para captar pacientes",
        bullets: [
          { titulo: "Publicidad segmentada por especialidad y zona", texto: "llegar a quien busca tu servicio cerca de ti." },
          { titulo: "Una web que transmita confianza", texto: "en salud la confianza decide: testimonios, credenciales y claridad." },
          { titulo: "Reseñas reales", texto: "el paciente nuevo confía en la experiencia de otros." },
          { titulo: "Respuesta y recordatorios", texto: "responder rápido y recordar la cita reduce ausencias." },
        ],
      },
      {
        h2: "El sector dental: el de mayor demanda",
        parrafo:
          "En salud, las búsquedas dentales lideran. Si tienes un consultorio dental, hay demanda activa esperando: campañas específicas la capturan.",
      },
      {
        h2: "No quemes presupuesto",
        parrafo:
          "Apuntar a “todos” gasta de más. Segmenta por especialidad, zona e intención, y conecta la publicidad con un buen seguimiento. Menos desperdicio, más citas.",
      },
    ],
    cierre: "En Suggestion captamos pacientes con publicidad segmentada, web de confianza y seguimiento.",
    moneyPage: { label: "Llena tu agenda", href: "/marketing-salud" },
    relacionados: ["marketing-para-restaurantes"],
  },
  {
    slug: "posicionamiento-de-marca",
    categoria: "marca",
    title: "Posicionamiento de Marca: Guía Práctica | Suggestion",
    description:
      "Qué es el posicionamiento de marca, por qué define tu precio y tu cliente, y cómo lograrlo paso a paso. La base de toda marca que vende. 2026.",
    h1: "Posicionamiento de marca: qué es y cómo lograrlo",
    excerpt:
      "El posicionamiento es el lugar que tu marca ocupa en la mente de tu cliente. No es tu logo ni tu eslogan: es lo que la gente piensa y siente cuando te nombran. Y define cuánto puedes cobrar.",
    date: "2026-05-13",
    secciones: [
      {
        h2: "Qué es el posicionamiento de marca",
        parrafo:
          "Es la percepción que tu cliente tiene de ti frente a la competencia. Una marca bien posicionada no compite por precio: compite por significado. Por eso unas pagan más que otras por lo mismo.",
      },
      {
        h2: "Cómo lograrlo (paso a paso)",
        bullets: [
          { titulo: "Define a quién le hablas", texto: "no puedes posicionarte para todos." },
          { titulo: "Identifica tu diferencial real", texto: "qué haces distinto y mejor." },
          { titulo: "Elige el territorio que quieres ocupar", texto: "una idea simple y propia (la nuestra: “convertimos atención en ventas”)." },
          { titulo: "Sé coherente en todo", texto: "mensaje, identidad y experiencia alineados." },
          { titulo: "Repite y sostén", texto: "el posicionamiento se construye con consistencia en el tiempo." },
        ],
      },
      {
        h2: "El error más caro",
        parrafo:
          "Querer ser todo para todos. Una marca que dice mucho no dice nada. Posicionar es elegir —y renunciar a lo que no eres.",
      },
    ],
    cierre: "En Suggestion definimos tu posicionamiento antes de diseñar nada. Estrategia primero.",
    moneyPage: { label: "Construyamos tu marca", href: "/servicios/branding" },
    relacionados: ["que-es-rebranding", "que-es-neuromarketing"],
  },
  {
    slug: "ia-en-el-marketing",
    categoria: "ia-automatizacion",
    title: "IA en el Marketing: Qué Sí Funciona en 2026 | Suggestion",
    description:
      "Qué usos de la inteligencia artificial en marketing dan resultados reales y cuáles son ruido. Guía honesta para aplicarla sin perder el criterio.",
    h1: "IA en el marketing: qué sí funciona en 2026 (y qué es ruido)",
    excerpt:
      "La IA está en todos los discursos de marketing, pero no todo lo que brilla vende. Separemos lo que de verdad mueve resultados de lo que solo suena moderno.",
    date: "2026-05-20",
    secciones: [
      {
        h2: "Lo que sí funciona",
        bullets: [
          { titulo: "Producción de contenido más rápida", texto: "borradores, variantes de anuncios e ideas: la IA acelera, tú editas con criterio." },
          { titulo: "Automatización de respuestas y seguimiento", texto: "chatbots y flujos que atienden al instante." },
          { titulo: "Análisis de datos y segmentación", texto: "encontrar patrones en tus clientes más rápido." },
          { titulo: "Optimización de campañas", texto: "las plataformas ya usan IA para pujar y segmentar mejor." },
        ],
      },
      {
        h2: "Lo que es ruido",
        bullets: [
          { titulo: "“La IA reemplaza la estrategia”", texto: "no. Ejecuta, no decide el rumbo." },
          { titulo: "Contenido 100% automático sin edición", texto: "se nota, suena genérico y daña la marca." },
          { titulo: "Herramientas mágicas que “venden solas”", texto: "no existen." },
        ],
      },
      {
        h2: "La regla",
        parrafo:
          "La IA es un multiplicador: potencia a un buen equipo y expone a uno malo. Úsala para ganar velocidad, no para apagar el criterio.",
      },
    ],
    cierre: "En Suggestion integramos IA en flujos de trabajo y automatización, con estrategia humana al mando.",
    moneyPage: { label: "Agenda una demo", href: "/servicios/crm-automatizacion" },
    relacionados: ["como-automatizar-whatsapp", "que-es-un-lead"],
  },
  {
    slug: "marketing-inmobiliario-ejemplos",
    categoria: "inmobiliario",
    title: "Marketing Inmobiliario: Ejemplos que Venden | Suggestion",
    description:
      "Ejemplos reales de marketing inmobiliario que generan citas y ventas: mensajes, formatos y un caso de 8 lotes vendidos con S/3,000. 2026.",
    h1: "Marketing inmobiliario: ejemplos de campañas que sí venden lotes",
    excerpt:
      "Los mejores ejemplos de marketing inmobiliario tienen algo en común: no venden “metros y precio”, venden valorización, oportunidad y futuro. Aquí ejemplos que funcionan y uno real.",
    date: "2026-05-27",
    secciones: [
      {
        h2: "Ejemplos de ángulos que venden",
        bullets: [
          { titulo: "Valorización", texto: "“compra en etapa inicial, antes que suba”. Activa al inversor." },
          { titulo: "Oportunidad con tiempo", texto: "“precio de lanzamiento por tiempo limitado”. Urgencia real." },
          { titulo: "Proyección de vida", texto: "mostrar el estilo de vida, no solo el terreno. Activa al comprador de hogar." },
          { titulo: "Recorrido con drone", texto: "ubicación, avance de obra y entorno en video. Vende lo que una foto no puede." },
        ],
      },
      {
        h2: "Un caso real",
        parrafo:
          "Inmobiliaria Ceinys: con S/3,000 en Meta Ads generamos 350 leads, 20 visitas y 8 lotes vendidos. La clave no fue solo el anuncio: fue segmentar bien, una landing que agenda y un seguimiento que no dejó enfriar al interesado.",
      },
      {
        h2: "El patrón detrás de todo ejemplo que vende",
        parrafo:
          "Mensaje aspiracional + segmentación precisa + captura ordenada + seguimiento rápido. Falla uno y la campaña no cierra.",
      },
    ],
    cierre: "En Suggestion hacemos marketing inmobiliario que llena salas de ventas, no que junta curiosos.",
    moneyPage: { label: "Llenemos tu sala de ventas", href: "/marketing-inmobiliario" },
    relacionados: ["publicidad-inmobiliaria-en-redes", "vender-proyecto-en-preventa"],
  },
  {
    slug: "vender-proyecto-en-preventa",
    categoria: "inmobiliario",
    title: "Cómo Vender un Proyecto Inmobiliario en Preventa | Suggestion",
    description:
      "Cómo vender un proyecto inmobiliario en preventa: estrategia de valorización, captación de citas y seguimiento para cerrar antes de construir.",
    h1: "Cómo vender un proyecto inmobiliario en preventa",
    excerpt:
      "La preventa es la etapa más rentable y la más difícil: vendes algo que aún no existe. Se vende con percepción de valorización y confianza, no con planos. Así se hace.",
    date: "2026-06-03",
    secciones: [
      {
        h2: "La estrategia de preventa",
        bullets: [
          { titulo: "Vende la valorización, no el ladrillo", texto: "en preventa el argumento es “el precio sube cuando avance la obra”." },
          { titulo: "Genera urgencia real", texto: "precios y condiciones de lanzamiento por etapas: quien espera, paga más." },
          { titulo: "Construye confianza", texto: "renders, avance, respaldo de la constructora y casos previos reducen el miedo a comprar sobre plano." },
          { titulo: "Capta y agenda rápido", texto: "pauta segmentada → landing del proyecto → cita. Sin fricción." },
          { titulo: "Sigue sin descanso", texto: "el seguimiento automatizado mantiene caliente al lead." },
        ],
      },
      {
        h2: "El error que hace perder lotes",
        parrafo:
          "Tratar la preventa como venta normal: esperar que el interesado decida solo. Sin seguimiento estructurado, los leads de mayor valor se enfrían y compran en otro proyecto.",
      },
    ],
    cierre: "En Suggestion conectamos pauta, landing, drone y CRM para vender tu proyecto desde la etapa inicial.",
    moneyPage: { label: "Hablemos de tu proyecto", href: "/marketing-inmobiliario" },
    relacionados: ["marketing-inmobiliario-ejemplos", "publicidad-inmobiliaria-en-redes"],
  },
  {
    slug: "marketing-automotriz-ejemplos",
    categoria: "automotriz",
    title: "Marketing Automotriz: Ejemplos que Funcionan | Suggestion",
    description:
      "Ejemplos de marketing automotriz que llevan del clic al test drive: ofertas, formatos y mensajes que generan leads de autos que sí cierran.",
    h1: "Marketing automotriz: ejemplos que llevan del clic al test drive",
    excerpt:
      "En automotriz, un anuncio bonito no sirve si no llena el piso. Los ejemplos que funcionan tienen un objetivo claro: llevar al interesado a la prueba de manejo, donde se cierra.",
    date: "2026-06-08",
    secciones: [
      {
        h2: "Ejemplos que funcionan",
        bullets: [
          { titulo: "Oferta con gancho concreto", texto: "bono, cuota inicial baja o financiamiento. El comprador decide por condiciones." },
          { titulo: "Modelo del mes destacado", texto: "foco en un vehículo, no en todo el catálogo a la vez." },
          { titulo: "Video del auto en acción", texto: "el deseo se activa mostrándolo, no listándolo." },
          { titulo: "Llamado a test drive", texto: "el CTA no es “compra”, es “agenda tu prueba de manejo”." },
        ],
      },
      {
        h2: "Lo que separa un buen ejemplo de uno malo",
        parrafo:
          "El bueno filtra: atrae a quien puede comprar y descarta curiosos. El malo junta clics baratos que nunca pisan el concesionario.",
      },
      {
        h2: "Del clic al cierre",
        parrafo:
          "La campaña genera el interés; la prueba de manejo y el vendedor cierran. Conectar la pauta con un seguimiento rápido es lo que baja el costo por venta.",
      },
    ],
    cierre: "En Suggestion hacemos marketing automotriz que llena el piso de prospectos listos para cerrar.",
    moneyPage: { label: "Llena tu piso", href: "/marketing-automotriz" },
    relacionados: ["leads-para-concesionarios", "publicidad-para-venta-de-autos"],
  },
  {
    slug: "leads-para-concesionarios",
    categoria: "automotriz",
    title: "Leads para Concesionarios que Sí Cierran | Suggestion",
    description:
      "Cómo generar leads para concesionarios que llegan al test drive y cierran: segmentación, calificación y seguimiento que bajan el costo por venta.",
    h1: "Cómo conseguir leads para concesionarios que sí cierran",
    excerpt:
      "Generar leads de autos es fácil; generar leads que llegan al piso y compran, no. La diferencia está en a quién atraes y qué haces después del formulario.",
    date: "2026-06-13",
    secciones: [
      {
        h2: "El problema de los leads “basura”",
        parrafo:
          "Campañas mal armadas traen cientos de contactos que solo “miraban”. El equipo comercial se quema persiguiendo curiosos y pierde a los que sí iban a comprar.",
      },
      {
        h2: "Cómo conseguir leads que cierran",
        bullets: [
          { titulo: "Segmenta por intención y capacidad", texto: "llega a quien busca cambiar de auto y puede hacerlo." },
          { titulo: "Filtra en el anuncio", texto: "menciona condiciones (financiamiento, modelo) que descartan al que no califica." },
          { titulo: "Califica al ingresar", texto: "preguntas simples separan al lead caliente del tibio." },
          { titulo: "Responde en minutos", texto: "en automotriz, el primero en contactar suele ganar la venta." },
          { titulo: "Da seguimiento", texto: "la mayoría de ventas se cierra al tercer o cuarto contacto." },
        ],
      },
      {
        h2: "La métrica correcta",
        parrafo:
          "No mires “cuántos leads”, mira cuántos test drives y cierres. Menos leads buenos valen más que muchos malos.",
      },
    ],
    cierre: "En Suggestion generamos y calificamos leads conectados a tu equipo comercial, para que ninguno se pierda.",
    moneyPage: { label: "Quiero leads que cierren", href: "/marketing-automotriz" },
    relacionados: ["marketing-automotriz-ejemplos", "publicidad-para-venta-de-autos"],
  },
  {
    slug: "publicidad-para-venta-de-autos",
    categoria: "automotriz",
    title: "Publicidad para Venta de Autos: Ideas que Funcionan | Suggestion",
    description:
      "Ideas de publicidad para venta de autos que generan interés y citas: formatos, mensajes y ofertas que mueven al comprador. Guía práctica 2026.",
    h1: "Publicidad para venta de autos: ideas que funcionan",
    excerpt:
      "La publicidad de autos compite por atención en un mercado saturado. Estas ideas destacan y, sobre todo, mueven al comprador a actuar —no solo a mirar.",
    date: "2026-06-17",
    secciones: [
      {
        h2: "Ideas de publicidad que funcionan",
        bullets: [
          { titulo: "El auto en movimiento, no estático", texto: "video corto mostrando manejo, diseño y detalles que enamoran." },
          { titulo: "La oferta clara y al frente", texto: "cuota, bono o beneficio visible en los primeros segundos." },
          { titulo: "Comparación de valor", texto: "por qué este modelo conviene frente a la alternativa." },
          { titulo: "Prueba social", texto: "clientes reales recibiendo su auto generan confianza." },
          { titulo: "Urgencia honesta", texto: "stock o promoción por tiempo limitado, si es verdad." },
        ],
      },
      {
        h2: "Dónde pautar",
        parrafo:
          "Meta Ads para generar deseo y captar interesados; Google Ads para capturar a quien ya busca tu marca o modelo. La combinación cubre todo el embudo: del que aún no decide al que ya está buscando.",
      },
      {
        h2: "El cierre está en el seguimiento",
        parrafo:
          "El mejor anuncio sin seguimiento es plata a medias. Conecta la publicidad con respuesta rápida y agendamiento de prueba de manejo.",
      },
    ],
    cierre: "En Suggestion creamos publicidad de autos que genera citas, no solo vistas.",
    moneyPage: { label: "Pongamos a vender tu concesionario", href: "/marketing-automotriz" },
    relacionados: ["marketing-automotriz-ejemplos", "leads-para-concesionarios"],
  },
  {
    slug: "como-vender-pisco-y-vino-por-internet",
    categoria: "sectores",
    title: "Cómo Vender Pisco y Vino por Internet | Suggestion",
    description:
      "Cómo vender pisco y vino por internet desde tu bodega: tienda online, fotografía que da deseo, campañas por ocasión y enoturismo. Guía para bodegas. 2026.",
    h1: "Cómo vender pisco y vino por internet (sin perder la tradición)",
    excerpt:
      "Tu pisco gana medallas pero se vende casi solo en la puerta de la bodega. Internet puede llevarlo a todo el Perú —si lo haces con marca y estrategia, no improvisando con un par de fotos. Esto es lo que funciona.",
    date: "2026-06-20",
    secciones: [
      {
        h2: "Primero la marca, después el carrito",
        parrafo:
          "Online compite todo el mundo, también el pisco industrial barato. Lo que te diferencia es tu historia: tu valle, tu uva, tu proceso, tus premios. Una marca y una etiqueta bien contadas hacen que tu botella se perciba —y se pague— como lo que es. Sin eso, terminas vendiendo por precio.",
      },
      {
        h2: "Lo que sí vende en línea",
        bullets: [
          { titulo: "Tienda clara y de confianza", texto: "fotos reales, descripción de cada producto y pago fácil. La botella entra por los ojos." },
          { titulo: "Campañas por ocasión", texto: "Día del Pisco Sour, Fiestas Patrias, Navidad, regalos corporativos: el motivo de compra cambia el mensaje." },
          { titulo: "Fotografía y video que dan deseo", texto: "el cóctel servido, la cata, el viñedo. Mostrar la experiencia, no solo el envase." },
          { titulo: "Reseñas y prueba social", texto: "premios, puntajes y clientes reales reducen la desconfianza del que compra por primera vez." },
        ],
      },
      {
        h2: "El enoturismo es tu otra tienda",
        parrafo:
          "En Ica, la visita a la bodega es un producto en sí: catas, recorridos y experiencias que dejan margen alto y fidelizan. Promociónalas con contenido y pauta, y monta un sistema de reservas para no depender solo de la temporada. La web vende la botella; la experiencia crea al cliente que vuelve.",
      },
    ],
    cierre: "En Suggestion unimos branding premium, e-commerce y enoturismo para que tu bodega venda dentro y fuera de Ica.",
    moneyPage: { label: "Hagamos crecer tu bodega", href: "/marketing-pisco-vino" },
    relacionados: ["posicionamiento-de-marca", "marketing-para-restaurantes"],
  },
  {
    slug: "marketing-para-agroexportadoras",
    categoria: "sectores",
    title: "Marketing para Agroexportadoras: Abrir Mercados | Suggestion",
    description:
      "Cómo una agroexportadora abre mercados con marketing: web B2B en inglés, presencia en ferias y contenido que genera confianza en el importador. 2026.",
    h1: "Marketing para agroexportadoras: cómo abrir mercados internacionales",
    excerpt:
      "En agroexportación, la calidad te mantiene; la confianza te abre puertas. El importador investiga antes de escribir, y lo que encuentra (o no encuentra) define si te considera. Esto es lo que sí mueve la aguja.",
    date: "2026-06-24",
    secciones: [
      {
        h2: "El importador te googlea antes de escribirte",
        parrafo:
          "Antes de una ronda o una feria, el comprador internacional revisa tu web. Si encuentra una página profesional —en inglés y español—, con tus certificaciones, fichas técnicas, capacidad y trazabilidad, avanzas. Si encuentra un Facebook desactualizado, no. La presencia digital B2B es hoy parte de tu carta de presentación.",
      },
      {
        h2: "Lo que necesita tu marca para exportar",
        bullets: [
          { titulo: "Web e identidad B2B", texto: "en inglés y español, con certificaciones (Global G.A.P., HACCP, orgánico) y fichas a la vista." },
          { titulo: "Material para ferias", texto: "catálogo, presentación institucional y brochure listos para Expoalimentaria y Fruit Logistica." },
          { titulo: "Contenido que muestra tu estándar", texto: "video y fotografía de tu fundo, packing y proceso: la confianza entra por lo que se ve." },
          { titulo: "CRM para el seguimiento", texto: "una oportunidad internacional puede tomar meses; sin seguimiento ordenado, se pierde." },
        ],
      },
      {
        h2: "Ica tiene el producto; falta contar la historia",
        parrafo:
          "Palta, uva, espárragos: la región exporta de los mejores del mundo, pero muchas empresas compiten solo por precio. Una marca que comunica su calidad, su gente y su responsabilidad se diferencia y negocia mejor. El marketing no reemplaza al producto; lo posiciona para que valga lo que cuesta.",
      },
    ],
    cierre: "En Suggestion construimos tu presencia B2B —web, contenido y marca— para abrir mercados desde Ica al mundo.",
    moneyPage: { label: "Abramos nuevos mercados", href: "/marketing-agroexportacion" },
    relacionados: ["como-vender-pisco-y-vino-por-internet", "posicionamiento-de-marca"],
  },
];

export const getCategoria = (slug: string): BlogCategoria | undefined =>
  BLOG_CATEGORIAS.find((c) => c.slug === slug);

export const getPost = (categoria: string, slug: string): BlogPost | undefined =>
  BLOG_POSTS.find((p) => p.slug === slug && p.categoria === categoria);

export const getPostsByCategoria = (categoria: string): BlogPost[] =>
  BLOG_POSTS.filter((p) => p.categoria === categoria).sort((a, b) => b.date.localeCompare(a.date));

export const allPostsSorted = (): BlogPost[] =>
  [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));

export const allCategoriaSlugs = (): string[] => BLOG_CATEGORIAS.map((c) => c.slug);
