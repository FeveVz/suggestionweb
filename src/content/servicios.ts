/**
 * Datos de las 5 categorías hub + 16 servicios de suggestion.pe.
 * Copy literal de docs-fuente 06 (top 5), 07 (11 restantes) y 09 (categorías).
 * Slugs idénticos a content/navegacion.ts. Una keyword principal por página.
 */

import type { Servicio } from "./types";

/** Pilar /servicios (doc 09 §A0). Página propia, no [slug]. */
export const SERVICIOS_PILAR = {
  metaTitle: "Servicios de Marketing Digital | Suggestion",
  metaDescription:
    "Todos nuestros servicios de marketing, de performance a BTL e imprenta. Una sola máquina para convertir mercado en ventas. Agenda hoy.",
  h1: "Servicios de marketing que convierten en ventas",
  intro:
    "No vendemos piezas sueltas. Operamos la máquina completa —digital, marca, web y calle— bajo un mismo método: lead, cita, cierre.",
  cta: "Hablemos de tu negocio",
} as const;

const CATEGORIAS_RAW: Servicio[] = [
  {
    slug: "estrategia",
    tipo: "categoria",
    nombre: "Estrategia y datos",
    metaTitle: "Estrategia y Datos de Marketing | Suggestion",
    metaDescription:
      "Estrategia y datos para crecer con certeza: consultoría e investigación de mercado antes de invertir. Ordena tu marketing. Agenda una llamada.",
    h1: "Estrategia y datos para crecer con certeza",
    hero: "Antes de gastar en marketing, entiende el terreno. Aquí vive el “pensar” que hace rentable todo lo demás.",
    cta: "Ordenemos tu estrategia",
    keyword: "estrategia de marketing",
    secciones: [],
    faq: [],
    enlazaA: ["consultoria", "investigacion-de-mercado"],
    cierre: { h2: "Ordenemos tu estrategia", cta: "Ordenemos tu estrategia" },
  },
  {
    slug: "marketing-digital-publicidad",
    tipo: "categoria",
    nombre: "Marketing y publicidad digital",
    metaTitle: "Marketing y Publicidad Digital | Suggestion",
    metaDescription:
      "Marketing y publicidad digital de performance: estrategia, pauta y comunidad conectadas en un solo embudo que vende. Quiero más leads.",
    h1: "Marketing y publicidad digital de performance",
    hero: "Atraer al cliente correcto y convertirlo en venta. Estrategia, pauta y comunidad, conectadas en un solo embudo.",
    cta: "Quiero más leads",
    keyword: "marketing y publicidad digital",
    secciones: [],
    faq: [],
    enlazaA: ["marketing-digital", "publicidad-digital", "redes-sociales"],
    cierre: { h2: "Quiero más leads", cta: "Quiero más leads" },
  },
  {
    slug: "web-seo",
    tipo: "categoria",
    nombre: "Web, SEO y automatización",
    metaTitle: "Web, SEO y Automatización | Suggestion",
    metaDescription:
      "Web, SEO y automatización que venden: una web que convierte, posicionamiento que te hace visible y CRM que no deja caer ningún lead.",
    h1: "Web, SEO y automatización que venden",
    hero: "Tu activo digital trabajando 24/7: una web que convierte, posicionamiento que te hace visible y automatización que no deja caer ningún lead.",
    cta: "Construyamos tu máquina de ventas",
    keyword: "web seo y automatización",
    secciones: [],
    faq: [],
    enlazaA: ["desarrollo-web", "seo", "crm-automatizacion"],
    cierre: {
      h2: "Construyamos tu máquina de ventas",
      cta: "Construyamos tu máquina de ventas",
    },
  },
  {
    slug: "marca-contenido",
    tipo: "categoria",
    nombre: "Marca y contenido",
    metaTitle: "Marca y Contenido | Suggestion",
    metaDescription:
      "Marca y contenido que dejan huella: branding que justifica el precio y producción audiovisual que mueve a la acción. Construyamos tu marca.",
    h1: "Marca y contenido que dejan huella",
    hero: "La marca que se recuerda y el contenido que mueve a la acción. Lo que hace que te elijan a ti y paguen más.",
    cta: "Construyamos tu marca",
    keyword: "marca y contenido",
    secciones: [],
    faq: [],
    enlazaA: ["branding", "produccion-audiovisual"],
    cierre: { h2: "Construyamos tu marca", cta: "Construyamos tu marca" },
  },
  {
    slug: "btl-medios",
    tipo: "categoria",
    nombre: "Activación y medios físicos",
    metaTitle: "Activación y Medios Físicos | Suggestion",
    metaDescription:
      "Activación y medios físicos de alto impacto: BTL, publicidad móvil, estructuras, material POP, imprenta y merchandising. Pide tu cotización.",
    h1: "Activación y medios físicos de alto impacto",
    hero: "Lo digital atrae; lo físico convence y se queda. Presencia de marca en la calle, el punto de venta y las manos de tu cliente.",
    cta: "Pide tu cotización",
    keyword: "activación y medios físicos",
    secciones: [],
    faq: [],
    enlazaA: [
      "btl",
      "publicidad-movil",
      "estructuras-publicitarias",
      "material-pop",
      "imprenta",
      "merchandising",
    ],
    cierre: { h2: "Pide tu cotización", cta: "Pide tu cotización" },
  },
];

/**
 * Las 5 categorías son hubs de NAVEGACIÓN, no de ranking: van `noindex` para
 * evitar canibalizar el head de sus servicios hijos (doc 10 §3.2). Siguen en el
 * menú, el footer y el pilar; `follow` deja fluir el enlace hacia los hijos, que
 * son los canónicos de su keyword.
 */
const CATEGORIAS: Servicio[] = CATEGORIAS_RAW.map((c) => ({ ...c, noindex: true }));

const SERVICIOS_LIST: Servicio[] = [
  // ---------- Estrategia y datos ----------
  {
    slug: "consultoria",
    tipo: "servicio",
    categoriaSlug: "estrategia",
    nombre: "Consultoría",
    metaTitle: "Consultoría de Marketing y Estrategia | Suggestion",
    metaDescription:
      "Consultoría de marketing: diagnóstico, estrategia y detección de fugas para que tu negocio venda más. Agenda tu sesión de diagnóstico hoy.",
    h1: "Consultoría de marketing que ordena tu crecimiento",
    hero: "Invertir más en marketing sin estrategia es acelerar en la dirección equivocada. Primero ordenamos: dónde estás, a dónde vas y qué te está frenando. Después, ejecutas con foco.",
    cta: "Agenda tu diagnóstico",
    keyword: "consultoría de marketing",
    secciones: [
      {
        h2: "Estrategia de marketing a medida",
        parrafo:
          "No te entregamos teoría de manual. Construimos una estrategia accionable, atada a metas de venta, con prioridades claras para los próximos meses.",
        sub: [
          {
            h3: "Estrategia de marca y posicionamiento",
            texto:
              "Definimos qué lugar quieres ocupar en la mente de tu cliente —y cómo llegar ahí.",
          },
          {
            h3: "Segmentación y público objetivo",
            texto:
              "Identificamos a quién venderle y con qué mensaje, para dejar de gastar en públicos que no compran.",
          },
        ],
      },
      {
        h2: "Qué resolvemos",
        parrafo:
          "Diagnóstico honesto de tu marketing, detección de fugas en el funnel y un plan accionable. Sin humo: te decimos qué funciona, qué no y qué soltar.",
      },
      {
        h2: "Cómo trabajamos",
        parrafo:
          "Leemos · Moldeamos · Convertimos · Medimos. La consultoría es el “Leemos” hecho profundidad.",
      },
    ],
    incluye: [
      { titulo: "Auditoría digital completa", texto: "Análisis de canales, métricas, procesos y herramientas actuales." },
      { titulo: "Plan estratégico", texto: "Documento con objetivos, estrategias, tácticas y KPIs atados a venta." },
      { titulo: "Auditoría de competencia", texto: "Análisis de la estrategia digital de tus principales competidores." },
      { titulo: "Definición de buyer persona", texto: "Perfiles detallados de tus clientes ideales y qué los mueve a comprar." },
      { titulo: "Customer journey mapping", texto: "Mapeo de los puntos de contacto y dónde se pierde la conversión." },
      { titulo: "Análisis de funnel", texto: "Identificación de fugas y oportunidades de mejora en el embudo." },
      { titulo: "Stack de herramientas", texto: "Recomendación del set tecnológico óptimo para tu operación." },
      { titulo: "Capacitación del equipo", texto: "Training en herramientas y mejores prácticas para tu gente." },
      { titulo: "Sesiones de seguimiento", texto: "Reuniones periódicas para ajustar el rumbo con datos." },
    ],
    beneficios: [
      { titulo: "Visión objetiva", texto: "Una auditoría imparcial de tu situación actual, con recomendaciones accionables." },
      { titulo: "Plan de acción", texto: "Un roadmap con prioridades, tiempos y recursos —no teoría de manual." },
      { titulo: "Experiencia probada", texto: "Consejo basado en casos reales (como Ceinys), no en plantillas genéricas." },
      { titulo: "Acompañamiento", texto: "No solo decimos qué hacer: te acompañamos en la implementación." },
    ],
    proceso: [
      { paso: "01", titulo: "Diagnóstico", texto: "Entrevistas, auditoría y análisis de tu situación actual." },
      { paso: "02", titulo: "Análisis", texto: "Identificación de oportunidades y áreas de mejora prioritarias." },
      { paso: "03", titulo: "Propuesta", texto: "Documento con plan de acción y roadmap detallado." },
      { paso: "04", titulo: "Implementación", texto: "Acompañamiento en la ejecución de las recomendaciones." },
    ],
    faq: [
      {
        q: "¿Qué tipos de estrategia de marketing existen?",
        a: "De posicionamiento, de contenidos, de pauta, de segmentación, omnicanal y más. En el diagnóstico definimos cuáles aplican a tu caso, no todas a la vez.",
      },
      {
        q: "¿Para qué tamaño de empresa sirve?",
        a: "Desde pymes que quieren ordenarse hasta empresas que necesitan una mirada externa y honesta.",
      },
      {
        q: "¿Cuánto dura una consultoría?",
        a: "Una consultoría puntual puede ser de 2-4 horas. Un proyecto completo de auditoría y plan estratégico toma de 2 a 4 semanas.",
      },
      {
        q: "¿Qué necesito preparar?",
        a: "Acceso a tus cuentas de marketing, analytics y datos de ventas, y disposición para compartir información honesta de tu negocio.",
      },
      {
        q: "¿Trabajan con cualquier industria?",
        a: "Tenemos un playbook por vertical (inmobiliario, automotriz, turismo, consumo, salud). Si tu industria es nueva para nosotros, la investigamos antes de recomendar.",
      },
    ],
    enlazaA: ["investigacion-de-mercado", "marketing-digital"],
    cierre: { h2: "Ordenemos tu estrategia", cta: "Agenda tu diagnóstico" },
  },
  {
    slug: "investigacion-de-mercado",
    tipo: "servicio",
    categoriaSlug: "estrategia",
    nombre: "Investigación de Mercado",
    metaTitle: "Investigación y Estudio de Mercado | Suggestion",
    metaDescription:
      "Investigación de mercado con datos e insights para decidir con certeza: demanda, competencia y consumidor. Pide tu estudio. Agenda una llamada.",
    h1: "Investigación de mercado que guía tus decisiones",
    hero: "Decidir por intuición es caro. Te damos datos e insights reales sobre tu demanda, tu competencia y tu consumidor, para que inviertas donde sí hay oportunidad.",
    cta: "Pide tu estudio",
    keyword: "investigación de mercado",
    secciones: [
      {
        h2: "Estudio de mercado a la medida de tu negocio",
        parrafo:
          "Diseñamos el estudio según tu pregunta de negocio: ¿hay demanda?, ¿a qué precio?, ¿qué hace la competencia?, ¿qué quiere el cliente?",
        sub: [
          {
            h3: "Análisis de mercado y demanda",
            texto: "Tamaño, tendencias y oportunidad real de tu categoría.",
          },
          {
            h3: "Estudio para nuevos proyectos",
            texto: "Antes de lanzar, validamos que el mercado esté ahí.",
          },
        ],
      },
      {
        h2: "Qué entregamos",
        parrafo:
          "Un informe accionable, no un PDF para archivar. Conclusiones claras y recomendaciones que puedes ejecutar.",
      },
    ],
    faq: [
      {
        q: "¿Qué es la investigación de mercado?",
        a: "Es recopilar y analizar datos sobre tu mercado, competencia y clientes para decidir con menos riesgo.",
      },
      {
        q: "¿Cómo se hace un estudio de mercado?",
        a: "Definimos la pregunta, elegimos el método (análisis de datos, encuestas, observación del SERP), recopilamos y traducimos los hallazgos en decisiones.",
      },
    ],
    enlazaA: ["consultoria", "seo"],
    cierre: { h2: "Decide con datos", cta: "Pide tu estudio" },
  },
  // ---------- Marketing y publicidad digital ----------
  {
    slug: "marketing-digital",
    tipo: "servicio",
    categoriaSlug: "marketing-digital-publicidad",
    nombre: "Marketing Digital",
    metaTitle: "Marketing Digital en Perú: Estrategia que Vende | Suggestion",
    metaDescription:
      "Servicio de marketing digital integral: estrategia, contenidos, pauta y SEO orientados a ventas, no a likes. Pide tu diagnóstico gratuito.",
    h1: "Marketing digital integral que genera ventas, no vanidad",
    hero: "La mayoría de marcas invierte en marketing digital y mide likes. Nosotros medimos lo que importa: leads, citas y cierres. Una sola estrategia, todo el funnel conectado.",
    cta: "Agenda tu diagnóstico",
    keyword: "marketing digital",
    proof:
      "El mismo método que llevó a Ceinys a S/350K en ventas con S/3,000 de inversión.",
    secciones: [
      {
        h2: "Estrategia de marketing digital a medida",
        parrafo:
          "No copiamos plantillas. Leemos tu mercado, tu competencia y tu cliente, y construimos una estrategia con un solo objetivo: vender más. Cada canal cumple un rol dentro del embudo, no actúa por separado.",
      },
      {
        h2: "¿Qué incluye nuestro servicio?",
        bullets: [
          {
            titulo: "Plan de marketing digital",
            texto:
              "La hoja de ruta: objetivos, públicos, canales y presupuesto, atados a metas de venta.",
          },
          {
            titulo: "Marketing de contenidos",
            texto: "Contenido que mueve a la acción, no que rellena el feed.",
          },
          {
            titulo: "Publicidad y posicionamiento (SEO y SEM)",
            texto: "Tráfico que convierte, pagado y orgánico, trabajando juntos.",
          },
        ],
      },
      {
        h2: "Marketing digital en Perú orientado a performance",
        parrafo:
          "Conocemos al consumidor peruano y operamos en todo el país desde Ica. Sabemos qué mensaje activa a un progresista y qué tranquiliza a un conservador. Eso no se improvisa.",
      },
    ],
    incluye: [
      { titulo: "Análisis de mercado", texto: "Investigación de tu industria, competencia y audiencia objetivo." },
      { titulo: "Estrategia digital", texto: "Plan con objetivos claros y roadmap de implementación atado a venta." },
      { titulo: "SEO técnico", texto: "Optimización técnica para mejorar tu visibilidad en buscadores." },
      { titulo: "Publicidad digital", texto: "Campañas en Google Ads, Meta Ads y plataformas relevantes." },
      { titulo: "Marketing de contenidos", texto: "Contenido que atrae, educa y convierte —no que rellena el feed." },
      { titulo: "Email marketing", texto: "Secuencias que nutren leads y fidelizan clientes." },
      { titulo: "Analytics y reporting", texto: "Dashboards con las métricas que importan (CPL, ROAS, cierres)." },
      { titulo: "Optimización continua", texto: "Mejora constante basada en datos y pruebas A/B." },
      { titulo: "Gestión de redes", texto: "Manejo profesional de tus redes sociales con foco comercial." },
    ],
    beneficios: [
      { titulo: "Resultados medibles", texto: "Cada estrategia tiene KPIs claros: medimos, analizamos y optimizamos tu ROI." },
      { titulo: "Estrategia personalizada", texto: "No hay dos negocios iguales; la armamos a medida de tus objetivos y mercado." },
      { titulo: "Enfoque integral", texto: "SEO, pauta, contenido y redes en una sola estrategia cohesiva." },
      { titulo: "Equipo experto", texto: "Conocimiento actualizado en Google, Meta y más, aplicado a tu caso." },
    ],
    proceso: [
      { paso: "01", titulo: "Descubrimiento", texto: "Analizamos tu negocio, competencia y mercado para hallar oportunidades." },
      { paso: "02", titulo: "Estrategia", texto: "Plan personalizado con objetivos claros y medibles." },
      { paso: "03", titulo: "Ejecución", texto: "Implementación con agilidad y comunicación transparente." },
      { paso: "04", titulo: "Optimización", texto: "Medimos resultados y optimizamos para maximizar el ROI." },
    ],
    faq: [
      {
        q: "¿Qué es el marketing digital y cómo funciona?",
        a: "Es atraer, convertir y fidelizar clientes usando canales digitales (búsqueda, redes, web, email). Funciona cuando todo el embudo está conectado y medido; si solo se ven likes, no está funcionando.",
      },
      {
        q: "¿Cuánto cuesta?",
        a: "Depende de tus objetivos y tu mercado. En la llamada de diagnóstico te damos un rango honesto, sin inflar.",
      },
      {
        q: "¿En cuánto tiempo veo resultados?",
        a: "La pauta puede traer leads en días; el posicionamiento y la marca, en meses. Te decimos qué esperar de cada uno desde el inicio.",
      },
      {
        q: "¿Necesito contratar todos los servicios juntos?",
        a: "No. Armamos paquetes flexibles según tus objetivos y presupuesto: empezamos por lo esencial y escalamos con resultados.",
      },
      {
        q: "¿Cómo miden el éxito de las campañas?",
        a: "Con KPIs alineados a tu negocio, no likes: CPL, ROAS y cierres, medidos en GA4, Google Ads, Meta y dashboards propios.",
      },
    ],
    enlazaA: ["publicidad-digital", "redes-sociales", "seo"],
    cierre: { h2: "Lleva tu marketing a resultados", cta: "Agenda tu diagnóstico gratuito" },
  },
  {
    slug: "publicidad-digital",
    tipo: "servicio",
    categoriaSlug: "marketing-digital-publicidad",
    nombre: "Publicidad Digital",
    metaTitle: "Publicidad Digital: Google y Meta Ads con ROI | Suggestion",
    metaDescription:
      "Publicidad digital con ROI medible: campañas de Google Ads y Meta Ads orientadas a leads y ventas, no a alcance. Pide tu propuesta. Agenda hoy.",
    h1: "Publicidad digital con ROI, no con likes",
    hero: "Pauta que se paga sola. Gestionamos tus campañas en Google y Meta con un solo norte: que cada sol invertido vuelva en leads y ventas, no en alcance que no cierra.",
    cta: "Pide tu propuesta",
    keyword: "publicidad digital",
    secciones: [
      {
        h2: "Campañas de Google Ads",
        parrafo: "Aparece justo cuando tu cliente está buscando lo que vendes.",
        sub: [
          {
            h3: "Anuncios en Búsqueda y Display",
            texto:
              "Captura la intención en Búsqueda y recupera al indeciso en Display.",
          },
        ],
      },
      {
        h2: "Publicidad en redes sociales (Meta Ads)",
        parrafo: "Generamos demanda donde tu cliente pasa el día.",
        sub: [
          {
            h3: "Anuncios en Instagram y Facebook",
            texto: "Creatividad y segmentación que convierten scroll en leads.",
          },
        ],
      },
      {
        h2: "Gestión y optimización de campañas",
        parrafo:
          "No “prendemos y olvidamos”. Optimizamos pauta, segmentación y creatividades con pruebas A/B, mirando CPL y ROAS.",
      },
    ],
    incluye: [
      { titulo: "Google Ads", texto: "Search, Display, Shopping y YouTube: campañas que capturan intención." },
      { titulo: "Meta Ads", texto: "Facebook e Instagram con segmentación avanzada y formatos múltiples." },
      { titulo: "TikTok Ads", texto: "Audiencias jóvenes con contenido nativo que convierte." },
      { titulo: "LinkedIn Ads", texto: "B2B de alto valor: decision makers y profesionales." },
      { titulo: "Remarketing", texto: "Recupera a quien visitó tu sitio con anuncios personalizados." },
      { titulo: "A/B testing", texto: "Probamos creatividades, audiencias y ofertas constantemente." },
      { titulo: "Landing pages", texto: "Páginas de destino optimizadas para conversión." },
      { titulo: "Analytics avanzado", texto: "Configuración de conversiones, eventos y atribución." },
      { titulo: "Automatizaciones", texto: "Reglas que optimizan la pauta 24/7." },
    ],
    beneficios: [
      { titulo: "ROI medible", texto: "Cada conversión se rastrea: sabes cuánto cuesta cada cliente y tu retorno." },
      { titulo: "Segmentación precisa", texto: "Llegamos a tu audiencia ideal por comportamiento, intereses y más." },
      { titulo: "Optimización constante", texto: "No “prendemos y olvidamos”: optimizamos a diario." },
      { titulo: "Reportes transparentes", texto: "Dashboards en tiempo real; tú decides qué métricas priorizar." },
    ],
    proceso: [
      { paso: "01", titulo: "Estrategia", texto: "Definimos objetivos, presupuesto y canales según tu negocio." },
      { paso: "02", titulo: "Setup", texto: "Configuramos cuentas, píxeles, audiencias y campañas." },
      { paso: "03", titulo: "Lanzamiento", texto: "Activamos con testing inicial de variables." },
      { paso: "04", titulo: "Escala", texto: "Escalamos lo que funciona y cortamos lo que no." },
    ],
    faq: [
      {
        q: "¿Qué es la pauta digital?",
        a: "Es la inversión publicitaria en plataformas digitales (Google, Meta) para llegar a públicos específicos de forma medible.",
      },
      {
        q: "¿Cuánto debo invertir?",
        a: "Depende de tu objetivo y tu mercado. Te proponemos un presupuesto realista y lo escalamos según resultados.",
      },
      {
        q: "¿Qué plataformas manejan?",
        a: "Google Ads (Search, Display, Shopping, YouTube), Meta (Facebook, Instagram), TikTok y LinkedIn.",
      },
      {
        q: "¿Incluye la creación de los anuncios?",
        a: "Sí: diseño de las piezas (imágenes, video corto y copy). Para producción audiovisual completa, está nuestro servicio aparte.",
      },
    ],
    enlazaA: ["marketing-digital", "redes-sociales", "crm-automatizacion"],
    cierre: { h2: "Pongamos tu inversión a vender", cta: "Pide tu propuesta" },
  },
  {
    slug: "redes-sociales",
    tipo: "servicio",
    categoriaSlug: "marketing-digital-publicidad",
    nombre: "Redes Sociales",
    metaTitle: "Gestión de Redes Sociales y Community Manager | Suggestion",
    metaDescription:
      "Gestión de redes sociales con contenido que conecta y vende: estrategia, community manager y reportes. Agenda una llamada y crece en redes.",
    h1: "Gestión de redes sociales que conecta y vende",
    hero: "Tus redes no son un mural de fotos bonitas: son un canal de venta. Creamos contenido que conecta con tu audiencia y la mueve hacia la acción.",
    cta: "Crezcamos en redes",
    keyword: "gestión de redes sociales",
    secciones: [
      {
        h2: "Community manager profesional",
        parrafo:
          "Gestionamos tu comunidad: contenido, respuestas y mensajería, con tono de marca y foco comercial.",
      },
      {
        h2: "Estrategia de social media",
        parrafo:
          "Detrás de cada post hay un plan: objetivos, formatos y calendario pensados para generar conversación y leads, no solo likes.",
        sub: [
          {
            h3: "Manejo de contenido y comunidad",
            texto:
              "Publicación constante, interacción real y gestión de mensajes que sí responden.",
          },
          {
            h3: "Paquetes y entregables",
            texto: "Planes claros según tu nivel de actividad y objetivos.",
          },
        ],
      },
      {
        h2: "Por qué con Suggestion",
        parrafo:
          "Trabajamos las redes con mentalidad de funnel: el contenido atrae, la conversación califica y el mensaje cierra.",
      },
    ],
    faq: [
      {
        q: "¿Qué incluye el servicio?",
        a: "Estrategia, contenido, gestión de comunidad y reportes.",
      },
      {
        q: "¿Con qué frecuencia se publica?",
        a: "Según tu plan; lo definimos por objetivos, no por cantidad porque sí.",
      },
    ],
    enlazaA: ["marketing-digital", "publicidad-digital", "produccion-audiovisual"],
    cierre: { h2: "Hagamos que tus redes vendan", cta: "Crezcamos en redes" },
  },
  // ---------- Web, SEO y automatización ----------
  {
    slug: "desarrollo-web",
    tipo: "servicio",
    categoriaSlug: "web-seo",
    nombre: "Desarrollo Web",
    metaTitle: "Diseño y Desarrollo Web que Convierte | Suggestion",
    metaDescription:
      "Diseño de páginas web profesionales, rápidas y pensadas para convertir visitas en clientes. Web que vende, no solo bonita. Agenda una llamada.",
    h1: "Diseño de páginas web que convierten visitas en clientes",
    hero: "Una web bonita que no vende es un gasto. Diseñamos páginas web rápidas, claras y pensadas para una sola cosa: que el visitante haga lo que tú necesitas —comprar, escribir o agendar.",
    cta: "Quiero una web que venda",
    keyword: "diseño y desarrollo web",
    secciones: [
      {
        h2: "Diseño y desarrollo web profesional",
        parrafo:
          "Estrategia, diseño y tecnología en un mismo equipo. Tu web no es un folleto digital: es tu mejor vendedor, trabajando 24/7.",
      },
      {
        h2: "¿Qué incluye?",
        sub: [
          {
            h3: "Diseño UX/UI y copywriting de conversión",
            texto:
              "Cada sección guía al visitante hacia la acción, con textos que persuaden.",
          },
          {
            h3: "Desarrollo (WordPress y a medida)",
            texto: "Construimos en la tecnología correcta para tu caso, fácil de administrar.",
          },
          {
            h3: "Aplicaciones web a medida",
            texto:
              "Cuando necesitas algo más que una web: funcionalidad hecha para tu negocio.",
          },
          {
            h3: "Velocidad y SEO técnico de base",
            texto:
              "Carga rápida y bases de SEO desde el día uno (Core Web Vitals), porque una web lenta pierde clientes y posiciones.",
          },
        ],
      },
      {
        h2: "Tipos de web que desarrollamos",
        bullets: [
          {
            titulo: "Landing pages de conversión",
            texto: "Una página, un objetivo: capturar el lead o la cita.",
          },
          { titulo: "Webs corporativas", texto: "Tu presencia profesional, completa y escalable." },
          {
            titulo: "Tiendas online (e-commerce)",
            texto: "Vende directo, con una experiencia de compra sin fricción.",
          },
        ],
      },
    ],
    incluye: [
      { titulo: "Landing pages", texto: "Páginas de aterrizaje optimizadas para campañas y conversión." },
      { titulo: "Sitios corporativos", texto: "Webs institucionales que reflejan tu marca y generan confianza." },
      { titulo: "E-commerce", texto: "Tiendas online optimizadas para venta y remarketing." },
      { titulo: "Aplicaciones web a medida", texto: "CRM, dashboards y portales de clientes hechos para tu negocio." },
      { titulo: "CMS personalizado", texto: "Gestiona tu contenido fácilmente, sin saber de código." },
      { titulo: "PWA", texto: "Progressive Web Apps que funcionan como apps nativas." },
      { titulo: "Integraciones", texto: "Conexión con CRM, pagos, analytics y automatizaciones." },
      { titulo: "Mantenimiento", texto: "Soporte, actualizaciones y mejoras continuas." },
      { titulo: "Hosting optimizado", texto: "Servidores configurados para máximo rendimiento." },
    ],
    beneficios: [
      { titulo: "Velocidad óptima", texto: "Sitios que cargan rápido (Core Web Vitals); el usuario no espera." },
      { titulo: "Mobile-first", texto: "Diseñados primero para el celular, donde está la mayoría de tu tráfico." },
      { titulo: "SEO de base", texto: "Estructura técnica optimizada para buscadores desde el día uno." },
      { titulo: "Seguridad", texto: "SSL, backups y protección, para que tu web no se caiga." },
    ],
    proceso: [
      { paso: "01", titulo: "Descubrimiento", texto: "Definimos objetivos, funcionalidades y arquitectura del sitio." },
      { paso: "02", titulo: "Diseño UX/UI", texto: "Wireframes, prototipo y diseño visual de toda la experiencia." },
      { paso: "03", titulo: "Desarrollo", texto: "Programación con buenas prácticas y tecnología moderna." },
      { paso: "04", titulo: "Lanzamiento", texto: "Testing, optimización y puesta en producción con soporte." },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta una página web?",
        a: "Depende del tipo y el alcance; en la llamada te damos un rango honesto.",
      },
      {
        q: "¿En cuánto tiempo está lista?",
        a: "Una landing en pocos días; una web corporativa o tienda, algunas semanas. Te damos plazos claros.",
      },
      {
        q: "¿Qué tecnologías utilizan?",
        a: "Según el proyecto: React/Next.js, WordPress o a medida. Elegimos la correcta para tu caso, no la de moda.",
      },
      {
        q: "¿Qué pasa después del lanzamiento?",
        a: "Planes de mantenimiento mensual: actualizaciones, backups, soporte y mejoras continuas.",
      },
    ],
    enlazaA: ["seo", "crm-automatizacion", "publicidad-digital"],
    cierre: { h2: "Tu web debería traerte clientes", cta: "Quiero una web que venda" },
  },
  {
    slug: "seo",
    tipo: "servicio",
    categoriaSlug: "web-seo",
    nombre: "SEO",
    metaTitle: "Agencia SEO y Posicionamiento Web | Suggestion",
    metaDescription:
      "Agencia SEO en Perú: posicionamiento web que te hace visible cuando tu cliente busca. SEO técnico y de contenidos. Agenda tu auditoría gratuita.",
    h1: "Agencia SEO que te hace visible cuando te buscan",
    hero: "El mejor lugar para esconder un cadáver es la segunda página de Google. Te llevamos a la primera, justo cuando tu cliente busca lo que ofreces —sin pagar por cada clic.",
    cta: "Agenda tu auditoría",
    keyword: "agencia seo",
    secciones: [
      {
        h2: "Posicionamiento web orgánico",
        parrafo:
          "Trabajamos tu visibilidad de forma sostenida: tráfico que no se apaga cuando apagas la pauta.",
        sub: [
          {
            h3: "Qué incluye nuestro servicio SEO",
            texto:
              "SEO técnico, contenidos optimizados, enlazado interno y medición en GA4 y Search Console.",
          },
          {
            h3: "SEO para el mercado peruano",
            texto: "Optimizamos para cómo busca tu cliente en Perú, no para un manual genérico.",
          },
        ],
      },
      {
        h2: "Consultoría y auditoría SEO",
        parrafo:
          "Empezamos por una auditoría: qué te frena, qué oportunidades tienes y por dónde ganar primero.",
      },
    ],
    faq: [
      {
        q: "¿Qué diferencia hay entre SEO y SEM?",
        a: "SEO es posicionamiento orgánico (no pagas por clic); SEM es publicidad pagada en buscadores. Lo ideal es combinarlos.",
      },
      {
        q: "¿En cuánto tiempo se ven resultados?",
        a: "El SEO es inversión a mediano plazo: los primeros movimientos en semanas, los resultados sólidos en meses.",
      },
    ],
    enlazaA: ["desarrollo-web", "marketing-digital", "crm-automatizacion"],
    cierre: { h2: "Aparece primero en Google", cta: "Agenda tu auditoría" },
  },
  {
    slug: "crm-automatizacion",
    tipo: "servicio",
    categoriaSlug: "web-seo",
    nombre: "CRM y Automatización",
    metaTitle: "CRM y Automatización de Marketing | Suggestion",
    metaDescription:
      "CRM y automatización: captura leads, automatiza WhatsApp y califica clientes para vender más con menos esfuerzo. Agenda una demo. Escala tu negocio.",
    h1: "CRM y automatización que escala tus ventas",
    hero: "¿Cuántos leads se te enfrían por no responder a tiempo? Automatizamos la captura, el seguimiento y la calificación para que ningún cliente potencial se pierda —y tu equipo cierre más.",
    cta: "Agenda una demo",
    keyword: "crm y automatización",
    secciones: [
      {
        h2: "Automatización de WhatsApp y chatbots",
        parrafo:
          "Respuestas inmediatas, seguimiento automático y citas agendadas sin que muevas un dedo.",
      },
      {
        h2: "Implementación de CRM",
        parrafo:
          "Centralizamos tus contactos y tu pipeline para que veas, en un solo lugar, en qué etapa está cada venta.",
        sub: [
          {
            h3: "Captación y calificación de leads",
            texto: "Cada lead entra, se etiqueta y se prioriza solo.",
          },
          {
            h3: "Alertas y seguimiento comercial",
            texto: "Tu equipo recibe el aviso correcto en el momento correcto.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "¿Para qué sirve un CRM en una empresa?",
        a: "Para organizar tus contactos y oportunidades, no perder seguimientos y cerrar más ventas con el mismo esfuerzo.",
      },
      {
        q: "¿Qué tipos de CRM existen?",
        a: "Operativos, analíticos y colaborativos. Elegimos e implementamos el que encaja con tu operación.",
      },
    ],
    enlazaA: ["desarrollo-web", "publicidad-digital", "redes-sociales"],
    cierre: { h2: "Automatiza y vende más", cta: "Agenda una demo" },
  },
  // ---------- Marca y contenido ----------
  {
    slug: "branding",
    tipo: "servicio",
    categoriaSlug: "marca-contenido",
    nombre: "Branding",
    metaTitle: "Branding e Identidad de Marca en Perú | Suggestion",
    metaDescription:
      "Branding estratégico que deja huella y vende: naming, logotipo, manual de marca e identidad visual. Construyamos tu marca. Agenda una llamada.",
    h1: "Branding que deja huella y vende",
    hero: "Una marca no es un logo bonito. Es la razón por la que alguien te elige y paga más. Construimos branding estratégico que se queda en la mente de tu cliente y empuja la decisión de compra.",
    cta: "Construyamos tu marca",
    keyword: "branding",
    secciones: [
      {
        h2: "¿Qué incluye nuestro servicio de branding?",
        sub: [
          {
            h3: "Creación de logotipo e identidad",
            texto:
              "Diseñamos tu marca desde el concepto, no desde una plantilla: imagotipo, isotipo y versiones (principal, secundaria, monocromática y de aplicación) listas para usar.",
          },
          {
            h3: "Diseño de logotipo profesional",
            texto: "Un logotipo memorable, coherente y atemporal —no una moda que caduca en un año.",
          },
          {
            h3: "Manual de marca",
            texto:
              "Las reglas que mantienen tu marca consistente en cada pieza: colores, tipografías, usos y tono.",
          },
          {
            h3: "Identidad visual",
            texto: "El sistema visual completo que hace que te reconozcan a primera vista.",
          },
          {
            h3: "Naming y estrategia de marca",
            texto: "El nombre y la narrativa que posicionan tu marca antes de decir una palabra.",
          },
        ],
      },
      {
        h2: "Branding de marca personal y empresarial",
        parrafo:
          "Para empresas que quieren diferenciarse y para profesionales que son su propia marca. La estrategia cambia; la exigencia, no.",
      },
      {
        h2: "Branding estratégico, no solo un logo bonito",
        parrafo:
          "Antes de diseñar, definimos qué debe sentir y pensar tu cliente. El arte viene después de la estrategia, nunca al revés.",
      },
    ],
    faq: [
      {
        q: "¿Qué es un rebranding y cuándo conviene?",
        a: "Es renovar una marca existente. Conviene cuando tu marca ya no representa lo que eres, no conecta con tu cliente o se ve desactualizada frente a la competencia.",
      },
      {
        q: "¿Cuánto cuesta un manual de marca?",
        a: "Depende del alcance. En la llamada definimos qué necesitas realmente, sin venderte de más.",
      },
    ],
    enlazaA: ["produccion-audiovisual", "desarrollo-web", "merchandising"],
    cierre: { h2: "Tu marca merece vender", cta: "Construyamos tu marca" },
  },
  {
    slug: "produccion-audiovisual",
    tipo: "servicio",
    categoriaSlug: "marca-contenido",
    nombre: "Producción Audiovisual",
    metaTitle: "Producción Audiovisual y Video Marketing | Suggestion",
    metaDescription:
      "Producción audiovisual de alto impacto: spots, video sell, fotografía y tomas con drone que cuentan tu historia y venden. Agenda una llamada.",
    h1: "Producción audiovisual que cuenta y vende",
    hero: "El video es lo que más se ve y lo que más vende —si está bien hecho. Producimos contenido audiovisual de alto impacto que cuenta tu historia y mueve a la acción.",
    cta: "Contemos tu historia",
    keyword: "producción audiovisual",
    secciones: [
      {
        h2: "Spots publicitarios",
        parrafo:
          "Piezas pensadas para vender: gancho en los primeros segundos, mensaje claro y CTA.",
      },
      {
        h2: "Fotografía publicitaria",
        parrafo: "Imágenes que hacen ver tu producto como lo que es: deseable.",
      },
      {
        h2: "Edición y postproducción",
        parrafo: "El detalle que separa un video amateur de uno que convierte.",
        sub: [
          {
            h3: "Video con drone",
            texto:
              "Tomas aéreas que elevan tus proyectos —especialmente inmobiliarios— a otro nivel.",
          },
          {
            h3: "Videos institucionales y para redes",
            texto: "Del corporativo al reel vertical: el formato correcto para cada canal.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué es un spot publicitario?",
        a: "Es un video corto y persuasivo creado para promocionar un producto, servicio o marca.",
      },
      {
        q: "¿Cuánto demora una producción?",
        a: "Depende del tipo de pieza; te damos un cronograma claro desde el inicio.",
      },
    ],
    enlazaA: ["branding", "redes-sociales", "publicidad-digital"],
    cierre: { h2: "Contemos tu historia", cta: "Contemos tu historia" },
  },
  // ---------- Activación y medios físicos ----------
  {
    slug: "btl",
    tipo: "servicio",
    categoriaSlug: "btl-medios",
    nombre: "BTL y Activaciones",
    metaTitle: "BTL y Activaciones de Marca | Suggestion",
    metaDescription:
      "BTL y activaciones que conectan: marketing experiencial, sampling y presencia en punto clave con captación de datos. Agenda tu activación hoy.",
    h1: "BTL y activaciones que conectan y captan",
    hero: "Lo digital atrae; lo presencial convence. Diseñamos activaciones que hacen vivir tu marca y, a la vez, capturan datos para seguir vendiendo después del evento.",
    cta: "Agenda tu activación",
    keyword: "btl y activaciones",
    secciones: [
      {
        h2: "Marketing experiencial",
        parrafo:
          "Experiencias que la gente recuerda y comparte —y que dejan tu marca en su memoria.",
      },
      {
        h2: "Activaciones de marca",
        parrafo:
          "Presencia en el punto y momento correctos, con personal de animación, captación y apoyo.",
        sub: [
          {
            h3: "Campañas BTL a medida",
            texto:
              "Diseñamos la mecánica según tu objetivo: prueba de producto, captación o awareness.",
          },
          {
            h3: "Por qué una agencia BTL con data",
            texto: "No solo activamos: medimos cuántos contactos y leads dejó la activación.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué es el BTL en publicidad?",
        a: "Es marketing “below the line”: acciones directas y presenciales con el público (activaciones, sampling, eventos), en vez de medios masivos.",
      },
      {
        q: "¿Incluye personal y logística?",
        a: "Sí, manejamos equipo de activación y toda la logística.",
      },
    ],
    enlazaA: ["publicidad-movil", "material-pop", "merchandising"],
    cierre: { h2: "Activemos tu marca en la calle", cta: "Agenda tu activación" },
  },
  {
    slug: "publicidad-movil",
    tipo: "servicio",
    categoriaSlug: "btl-medios",
    nombre: "Publicidad Móvil",
    metaTitle: "Publicidad Móvil y Bicivallas en Ica | Suggestion",
    metaDescription:
      "Publicidad móvil en Ica: bicivallas, publicidad rodante y volanteo con captura de datos. Tu marca donde está tu cliente. Pide tu cotización.",
    h1: "Publicidad móvil: tu marca en movimiento",
    hero: "La publicidad que no espera a que te encuentren: va a donde está tu cliente. Llevamos tu marca por las calles de Ica con bicivallas, rotulación y volanteo.",
    cta: "Pide tu cotización",
    keyword: "publicidad móvil ica",
    schema: "localbusiness",
    secciones: [
      {
        h2: "Bicivallas y publicidad rodante",
        parrafo:
          "Impacto en zonas de alto tránsito, a una fracción del costo de un panel fijo.",
      },
      {
        h2: "Publicidad en vehículos",
        parrafo: "Tu marca recorriendo la ciudad todo el día.",
        sub: [
          {
            h3: "Volanteo con captura de datos",
            texto:
              "Repartimos y, además, capturamos datos para que la acción deje base de clientes.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué cobertura tienen?",
        a: "Operamos en Ica y coordinamos rutas según tu público.",
      },
      {
        q: "¿Por cuántos días se contrata?",
        a: "Según tu campaña; armamos el plan a tu medida.",
      },
    ],
    enlazaA: ["btl", "estructuras-publicitarias", "material-pop"],
    cierre: { h2: "Lleva tu marca a la calle", cta: "Pide tu cotización" },
  },
  {
    slug: "estructuras-publicitarias",
    tipo: "servicio",
    categoriaSlug: "btl-medios",
    nombre: "Estructuras Publicitarias",
    metaTitle: "Estructuras y Paneles Publicitarios | Suggestion",
    metaDescription:
      "Estructuras publicitarias de alto impacto: paneles, tótems, letreros y módulos para tu marca. Diseño y fabricación. Pide tu cotización hoy.",
    h1: "Estructuras publicitarias de alto impacto",
    hero: "Presencia física que no se ignora. Diseñamos y fabricamos las estructuras que ponen tu marca en grande, donde tu cliente la ve sí o sí.",
    cta: "Pide tu cotización",
    keyword: "estructuras publicitarias",
    secciones: [
      {
        h2: "Paneles publicitarios",
        parrafo: "Gran formato para dominar el espacio.",
        sub: [
          {
            h3: "Paneles LED",
            texto: "Movimiento y luz para captar la mirada de día y de noche.",
          },
        ],
      },
      {
        h2: "Tótems publicitarios",
        parrafo: "Presencia vertical que ordena y destaca tu marca en piso.",
      },
      {
        h2: "Letreros y avisos",
        parrafo: "Identifica tu negocio y atrae a quien pasa.",
        sub: [
          {
            h3: "Letreros luminosos",
            texto: "Visibilidad garantizada también de noche.",
          },
        ],
      },
      {
        h2: "Módulos publicitarios",
        parrafo:
          "Tu punto de marca móvil para ferias, centros comerciales y activaciones.",
      },
    ],
    faq: [
      {
        q: "¿Con qué materiales trabajan?",
        a: "Según la pieza: acrílico, PVC, metal, LED y más.",
      },
      { q: "¿Hacen la instalación?", a: "Sí, diseñamos, fabricamos e instalamos." },
    ],
    enlazaA: ["material-pop", "imprenta", "publicidad-movil"],
    cierre: { h2: "Destaca con tu estructura", cta: "Pide tu cotización" },
  },
  {
    slug: "material-pop",
    tipo: "servicio",
    categoriaSlug: "btl-medios",
    nombre: "Material POP",
    metaTitle: "Material POP y Publicidad en Punto de Venta | Suggestion",
    metaDescription:
      "Material POP que destaca en el punto de venta: exhibidores, displays y letras volumétricas. Diseño y producción a medida. Pide tu cotización.",
    h1: "Material POP que destaca en el punto de venta",
    hero: "La decisión de compra se gana en el último metro. Diseñamos y producimos material POP que hace que tu producto sea el primero que el cliente ve —y elige.",
    cta: "Pide tu cotización",
    keyword: "material pop",
    secciones: [
      {
        h2: "Displays y exhibidores",
        parrafo: "Piezas que ordenan tu producto y lo ponen al frente.",
      },
      {
        h2: "Letras volumétricas",
        parrafo: "Marca con cuerpo y presencia, imposible de ignorar.",
      },
      {
        h2: "Publicidad en punto de venta",
        parrafo: "Todo lo que comunica y vende dentro de la tienda.",
        sub: [
          {
            h3: "Exhibidores y góndolas",
            texto: "Espacios de marca que aumentan la visibilidad y la rotación.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué tipos de material POP hay?",
        a: "Exhibidores, displays, cubos, letras volumétricas, señalética y más. Te asesoramos según tu producto y punto de venta.",
      },
    ],
    enlazaA: ["estructuras-publicitarias", "imprenta", "merchandising"],
    cierre: { h2: "Gana el punto de venta", cta: "Pide tu cotización" },
  },
  {
    slug: "imprenta",
    tipo: "servicio",
    categoriaSlug: "btl-medios",
    nombre: "Imprenta Corporativa",
    metaTitle: "Imprenta en Ica | Impresión Publicitaria | Suggestion",
    metaDescription:
      "Imprenta en Ica: impresión digital, gigantografías, banners y tarjetas de calidad. Producción rápida. Pide tu cotización por WhatsApp hoy.",
    h1: "Imprenta en Ica: impresión de calidad que vende",
    hero: "Material impreso que se ve profesional y llega a tiempo. Somos tu imprenta en Ica para todo: desde una tarjeta hasta una gigantografía. Calidad, rapidez y diseño incluido.",
    cta: "Cotiza tu impresión",
    keyword: "imprenta ica",
    schema: "localbusiness",
    secciones: [
      {
        h2: "Servicios de impresión",
        sub: [
          {
            h3: "Impresión digital y láser",
            texto: "Tirajes cortos o largos, color fiel y acabado limpio.",
          },
          {
            h3: "Gran formato y gigantografías",
            texto:
              "Para que tu marca se vea a metros: banners, vinilos adhesivos, foam y rígidos, DTF y textil, e impresión UV resistente.",
          },
          {
            h3: "Lonas y exteriores",
            texto: "Resistentes al sol y la lluvia, pensadas para durar a la intemperie.",
          },
          {
            h3: "Offset",
            texto: "La opción ideal para grandes volúmenes con costo eficiente.",
          },
          {
            h3: "Tarjetas, dípticos y folletos",
            texto: "La papelería que tu marca entrega en mano —impecable.",
          },
        ],
      },
      {
        h2: "Imprenta con entrega rápida",
        parrafo:
          "Atendemos en Ica con tiempos claros y opción de recojo. Te decimos la fecha de entrega antes de empezar, y la cumplimos.",
      },
    ],
    faq: [
      {
        q: "¿Cuánto demora un pedido?",
        a: "Depende del producto y la cantidad; siempre con fecha comprometida.",
      },
      { q: "¿Diseñan el material?", a: "Sí, ofrecemos diseño además de la impresión." },
      { q: "¿Atienden fuera de Ica?", a: "Sí, coordinamos envíos a otras regiones." },
    ],
    enlazaA: ["material-pop", "merchandising", "estructuras-publicitarias"],
    cierre: { h2: "Tu material listo y a tiempo", cta: "Cotiza tu impresión" },
  },
  {
    slug: "merchandising",
    tipo: "servicio",
    categoriaSlug: "btl-medios",
    nombre: "Merchandising",
    metaTitle: "Merchandising Publicitario y Regalos Corporativos | Suggestion",
    metaDescription:
      "Merchandising que refuerza tu marca: llaveros, gorras, tazas y regalos corporativos personalizados. Pide tu cotización por WhatsApp hoy.",
    h1: "Merchandising que refuerza tu marca",
    hero: "Tu marca en las manos de tus clientes, todos los días. Diseñamos y producimos merchandising publicitario que la gente sí quiere usar —y que mantiene tu nombre presente.",
    cta: "Pide tu cotización",
    keyword: "merchandising publicitario",
    secciones: [
      {
        h2: "Productos de merchandising publicitario",
        sub: [
          {
            h3: "Llaveros y artículos personalizados",
            texto:
              "El detalle de bajo costo y alta recordación: acrílicos, de madera y con foto para campañas y fechas especiales.",
          },
          {
            h3: "Gorras y textiles",
            texto: "Gorras y polos publicitarios que tu equipo y tus clientes usan de verdad.",
          },
          {
            h3: "Tazas y utilitarios",
            texto: "Tazas, libretas y utilitarios de oficina que viven en el escritorio de tu cliente.",
          },
          {
            h3: "Merchandising ecológico",
            texto: "Productos sostenibles para marcas que cuidan su imagen y el planeta.",
          },
        ],
      },
      {
        h2: "Regalos corporativos para fechas clave",
        parrafo:
          "Día del padre, navidad, aniversarios. Llegamos a tiempo y con stock —porque un regalo tarde no es regalo.",
      },
      {
        h2: "Por qué tu merch con Suggestion",
        parrafo:
          "Diseño + producción + logística en un solo lugar. No solo imprimimos: pensamos qué pieza refuerza tu marca y cuál es plata tirada.",
      },
    ],
    faq: [
      { q: "¿Cuál es el pedido mínimo?", a: "Depende del producto; te lo confirmamos al cotizar." },
      { q: "¿Ustedes hacen el diseño?", a: "Sí, podemos diseñar la pieza o trabajar con tu arte." },
      {
        q: "¿Cuánto demora la entrega?",
        a: "Según cantidad y producto; siempre con fecha comprometida.",
      },
    ],
    enlazaA: ["imprenta", "material-pop", "branding"],
    cierre: { h2: "Tu marca en manos de tus clientes", cta: "Pide tu cotización" },
  },
];

/** Todos los nodos de /servicios/[slug]: 5 categorías + 16 servicios. */
export const SERVICIOS: Servicio[] = [...CATEGORIAS, ...SERVICIOS_LIST];

export const getServicio = (slug: string): Servicio | undefined =>
  SERVICIOS.find((s) => s.slug === slug);

export const getServiciosByCategoria = (categoriaSlug: string): Servicio[] =>
  SERVICIOS_LIST.filter((s) => s.categoriaSlug === categoriaSlug);

export const allServicioSlugs = (): string[] => SERVICIOS.map((s) => s.slug);

export const soloServicios = (): Servicio[] => SERVICIOS_LIST;

export const soloCategorias = (): Servicio[] => CATEGORIAS;
