/**
 * Servicios añadidos tras el keyword research del 2026-11-14 (aprobado por el
 * owner ese día). Viven aparte solo para no alargar más servicios.ts, que ya
 * pasa de 2,500 líneas; se suman a SERVICIOS_LIST allí mismo.
 *
 * Cada página responde a una búsqueda que no tenía dónde caer:
 * - meta-ads: «anuncios de facebook» (100–1K al mes, CPC hasta S/28.63). Antes
 *   la perseguía /servicios/publicidad-digital junto con Google Ads.
 * - eventos-corporativos: «eventos corporativos», «evento empresarial fin de año».
 * - gigantografias: el artículo de medidas y precios ya estaba en el top 10 y
 *   no había una página donde cotizar.
 * - letreros-luminosos: «letreros luminosos», «letras corpóreas».
 * - tienda-virtual: el plan E-commerce de content/precios.ts no tenía página.
 * - chatbot-whatsapp: el owner confirmó que vende agentes de IA para WhatsApp.
 *
 * Mismas reglas que el resto: los servicios de producción van por cotización,
 * sin tarifas ni plazos fijos; solo se citan cifras ya publicadas en el sitio.
 */
import type { Servicio } from "./types";
import { FOTOS_PORTAFOLIO, fotoPortafolio } from "./portafolio-fotos";

/** Foto del portafolio con sus medidas reales, para reservar el hueco. */
const foto = (slug: string, n: number, alt: string, cap: string) => {
  const m = FOTOS_PORTAFOLIO[slug]?.[n - 1];
  return { src: fotoPortafolio(slug, n), alt, cap, w: m?.[0], h: m?.[1] };
};

/** El caso de pauta publicado. Etiquetas exactas de docs-fuente/21. */
const CASO_CEINYS_SEPTIEMBRE = {
  h2: "Un resultado medido, no una promesa",
  parrafo:
    "Del 26 de agosto al 29 de septiembre de 2026, Grupo Inmobiliario Ceinys, venta de lotes, con campañas en Meta Ads. Es el último reporte que publicamos con autorización del cliente, y está entero —con la resta de lo que no nos corresponde— en la página del caso.",
  tabla: {
    cabeceras: ["", ""],
    filas: [
      ["Invertido en Meta Ads", "S/4,149.21 en 35 días"],
      ["Lotes cerrados por leads que entraron durante el período de pauta", "18"],
      ["Publicidad por lote vendido", "S/230.51"],
    ],
    nota: "Resultado medido al 29 de septiembre de 2026. En el período se cerraron 25 lotes en total; 7 los cerró cartera anterior a la campaña y por eso no entran en esta cuenta.",
  },
};

export const SERVICIOS_NUEVOS: Servicio[] = [
  // ---------------------------------------------------------------- META ADS
  {
    slug: "meta-ads",
    tipo: "servicio",
    categoriaSlug: "marketing-digital-publicidad",
    nombre: "Meta Ads",
    pruebas: [
      { label: "Caso Ceinys · septiembre 2026", href: "/casos/ceinys-septiembre-2026" },
      { label: "Caso Ceinys · agosto 2026", href: "/casos/ceinys-agosto-2026" },
      { label: "Cómo medimos una campaña", href: "/metodo" },
    ],
    lecturas: [
      { label: "Cuánto invertir en Google y Meta Ads en Perú", href: "/blog/performance/cuanto-invertir-en-ads-peru" },
      { label: "Publicidad inmobiliaria en redes: qué funciona", href: "/blog/inmobiliario/publicidad-inmobiliaria-en-redes" },
      { label: "Cuánto cuesta la publicidad en Facebook e Instagram", href: "/blog/performance/cuanto-cuesta-publicidad-en-facebook-e-instagram-en-peru" },
    ],
    metaTitle: "Agencia de Meta Ads y Facebook Ads en Perú | Suggestion",
    metaDescription:
      "Agencia de Meta Ads (Facebook Ads) en Perú: anuncios en Facebook e Instagram medidos en ventas, con campañas a WhatsApp y formularios. Consultoría gratis.",
    h1: "Agencia de Meta Ads: anuncios en Facebook e Instagram que venden",
    hero: "En Facebook e Instagram tu cliente no está buscando comprar: hay que interrumpirlo con una oferta que valga la pena. Armamos tus campañas y las medimos hasta la venta, no hasta el clic.",
    enCorto: [
      "Meta Ads, lo que antes se llamaba Facebook Ads, son los anuncios de Facebook, Instagram y Messenger, incluidos los que abren una conversación de WhatsApp. Se compran todos desde el mismo administrador.",
      "La gestión cuesta S/800 al mes con una plataforma, S/1,500 con dos y S/3,000 con todas.",
      "Medimos el costo por venta: cruzamos los contactos que llegan con lo que cierra tu equipo.",
      "Meta necesita unos 50 resultados por semana en cada conjunto de anuncios para salir de la fase de aprendizaje. Si el presupuesto no llega, se optimiza por algo más frecuente, como iniciar una conversación.",
    ],
    cta: "Agenda tu consultoría cero",
    keyword: "agencia de meta ads",
    // Barra propia, sin Ceinys: más abajo va el bloque del corte de septiembre
    // y la barra por defecto pondría el caso de julio a su lado (CON-02).
    proof:
      "Autoniza: 3 autos el 22 de mayo y 5 el 25 de junio · Granjas Bonanza: 15 contratos con S/2,500 de inversión · Señor de Luren: 75 reservas en una sola campaña.",
    secciones: [
      CASO_CEINYS_SEPTIEMBRE,
      {
        h2: "Qué campaña conviene según lo que vendes",
        parrafo:
          "En Meta se elige el resultado que quieres y la plataforma busca a quien es más probable que lo dé. Elegir mal el objetivo es la forma más común de pagar por contactos que nunca iban a comprar.",
        tabla: {
          cabeceras: ["Campaña", "Cuándo conviene", "Qué miramos"],
          filas: [
            ["Mensajes a WhatsApp", "Lo que se vende conversando: lotes, autos, salud, servicios", "Conversaciones que tu equipo pudo atender y cuántas terminaron en cita o venta"],
            ["Formulario instantáneo", "Cuando necesitas volumen de contactos con datos", "Cuántos contestan cuando los llamas, no cuántos dejaron el dato"],
            ["Tráfico a una landing", "Cuando la página ya convierte y quieres medirlo todo", "Costo por lead y por venta desde la web"],
            ["Remarketing", "Quien ya vio tu anuncio o visitó tu web y no escribió", "Cuántos vuelven y compran"],
          ],
          nota: "La mayoría de negocios empieza con mensajes a WhatsApp: es el canal donde el peruano ya compra, y la respuesta rápida pesa más que el formato del anuncio.",
        },
      },
      {
        h2: "Por qué los leads de Meta llegan fríos, y cómo se arregla",
        parrafo:
          "Un anuncio en Facebook interrumpe a alguien que estaba viendo otra cosa. Por eso llegan contactos que dejaron el dato por curiosidad o que no recuerdan haberlo hecho. No se arregla pagando más: se arregla en tres sitios.",
        bullets: [
          { titulo: "En el anuncio", texto: "decir el precio o la condición que filtra, aunque baje el número de contactos. Menos mensajes, más ventas." },
          { titulo: "En la primera respuesta", texto: "contestar en minutos, no en horas. El interés de un lead de Meta se enfría el mismo día." },
          { titulo: "En el seguimiento", texto: "registrar cada contacto con el anuncio del que vino, para saber qué campaña trae compradores y no solo mensajes." },
        ],
      },
      {
        h2: "Lo que pedimos para empezar",
        bullets: [
          { titulo: "La cuenta publicitaria a tu nombre", texto: "las cuentas, la página y el píxel se quedan contigo si un día cambias de agencia. Se acuerda al empezar." },
          { titulo: "Una oferta clara", texto: "qué vendes, a qué precio o desde cuánto, y por qué escribir hoy y no la semana que viene." },
          { titulo: "Alguien que responda", texto: "una persona o un agente de IA que conteste rápido. Sin eso, ninguna campaña rinde." },
          { titulo: "Cómo registras las ventas", texto: "un CRM o aunque sea una hoja ordenada: es lo que permite saber cuánto cuesta cada venta." },
        ],
        nota: {
          tipo: "info",
          titulo: "Google Ads o Meta Ads",
          texto: "Google recoge la demanda de quien ya está buscando; Meta la crea en quien todavía no busca. Si te buscan por nombre o por servicio, empieza por Google. Si tienes que darte a conocer o vendes algo que se decide mirando, empieza por Meta.",
        },
      },
    ],
    incluye: [
      { titulo: "Estrategia de campaña", texto: "Objetivo, públicos, presupuesto y calendario según lo que vendes." },
      { titulo: "Creatividades", texto: "Imagen, video corto y textos pensados para filtrar, no solo para gustar." },
      { titulo: "Campañas a WhatsApp", texto: "Anuncios que abren la conversación con tu equipo o tu agente de IA." },
      { titulo: "Formularios instantáneos", texto: "Con preguntas que separan al curioso del comprador." },
      { titulo: "Píxel y API de Conversiones", texto: "Configuración para que Meta optimice con datos reales." },
      { titulo: "Remarketing", texto: "Volver a mostrar tu oferta a quien ya mostró interés." },
      { titulo: "Pruebas A/B", texto: "Creatividades, públicos y ofertas comparados con datos." },
      { titulo: "Reporte de costo por venta", texto: "Cuánto costó cada contacto y cada venta, por campaña." },
      { titulo: "Cuentas a tu nombre", texto: "Todo se configura en tu Business Manager." },
    ],
    beneficios: [
      { titulo: "Costo por venta, no por clic", texto: "La métrica que importa es lo que cuesta un cliente, no un me gusta." },
      { titulo: "Creatividad que filtra", texto: "Anuncios que atraen al que puede comprar y descartan al curioso." },
      { titulo: "Cuentas tuyas", texto: "Si cambias de agencia, te llevas el historial y los datos." },
      { titulo: "Decisiones con datos", texto: "Lo que funciona se escala y lo que no se corta." },
    ],
    proceso: [
      { paso: "01", titulo: "Diagnóstico", texto: "Revisamos tu oferta, tu cuenta y cómo atiendes los mensajes." },
      { paso: "02", titulo: "Configuración", texto: "Cuenta, píxel, públicos y campañas listas." },
      { paso: "03", titulo: "Lanzamiento", texto: "Arrancamos con pruebas de creatividad y de público." },
      { paso: "04", titulo: "Escala", texto: "Subimos lo que vende y apagamos lo que no." },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta una agencia de Meta Ads?",
        a: "Nuestra gestión cuesta S/800 al mes con una plataforma, S/1,500 con dos y S/3,000 con todas. El detalle de cada plan está en la tabla de precios de esta página.",
      },
      {
        q: "¿Cuánto debo invertir en anuncios de Facebook e Instagram?",
        a: "Se calcula al revés, desde tu meta de ventas: ventas que quieres, entre tu tasa de cierre, por lo que te cuesta cada contacto. Lo explicamos paso a paso en el artículo «Cuánto invertir en Google y Meta Ads en Perú».",
      },
      {
        q: "¿Facebook o Instagram?",
        a: "Normalmente los dos desde la misma campaña: Meta reparte el presupuesto donde rinde más. Solo se separan cuando el público o la pieza lo piden.",
      },
      {
        q: "¿Sirve Meta Ads para vender a empresas?",
        a: "Sí, sobre todo cuando quien decide es el dueño. Lo usamos para inmobiliarias, concesionarios y negocios de servicios. Para cargos muy específicos dentro de grandes empresas, LinkedIn suele ser mejor opción.",
      },
      {
        q: "¿En cuánto tiempo veo resultados?",
        a: "Los primeros contactos llegan en días. El costo por lead se estabiliza en dos a cuatro semanas, y el costo por venta real se lee entre el segundo y el tercer mes, según lo largo que sea tu ciclo de cierre.",
      },
      {
        q: "¿Las cuentas quedan a mi nombre?",
        a: "Sí. La cuenta publicitaria, la página y el píxel quedan en tu Business Manager, y nosotros trabajamos con acceso de socio.",
      },
    ],
    enlazaA: ["publicidad-digital", "redes-sociales", "chatbot-whatsapp"],
    cierre: { h2: "Que tus anuncios vendan", cta: "Agenda tu consultoría cero" },
  },

  // ---------------------------------------------------------------- TIENDA VIRTUAL
  {
    slug: "tienda-virtual",
    tipo: "servicio",
    categoriaSlug: "web-seo",
    nombre: "Tienda Virtual",
    lecturas: [
      { label: "Cuánto cuesta una página web en Perú", href: "/blog/conversion/cuanto-cuesta-una-pagina-web-en-peru" },
      { label: "Cuánto cuesta una tienda virtual en Perú", href: "/blog/conversion/cuanto-cuesta-una-tienda-virtual-en-peru" },
      { label: "Cómo vender por WhatsApp paso a paso", href: "/blog/ia-automatizacion/como-vender-por-whatsapp-paso-a-paso" },
    ],
    metaTitle: "Diseño de Tienda Virtual para Empresas en Perú | Suggestion",
    metaDescription:
      "Diseño de tienda virtual en Perú con catálogo, pasarela de pagos e inventario, lista para vender. Plan E-commerce de S/8,000 por proyecto. Consultoría gratis.",
    h1: "Diseño de tienda virtual lista para vender",
    hero: "Una tienda virtual no es un catálogo con un botón de pago: es un canal de venta que necesita tráfico, confianza y un proceso que no se cae en el último paso. La diseñamos con catálogo, pasarela de pagos e inventario, y la conectamos con tu publicidad.",
    enCorto: [
      "El plan E-commerce cuesta S/8,000 por proyecto e incluye catálogo ilimitado, pasarela de pagos, gestión de inventario, SEO avanzado y 3 meses de soporte.",
      "Si vendes pocos productos o cierras por WhatsApp, una landing page de S/1,500 puede bastar antes que una tienda completa.",
      "Una tienda sin visitas no vende: la conectamos con Meta Ads y Google Ads desde el lanzamiento.",
    ],
    cta: "Agenda tu consultoría cero",
    keyword: "diseño de tienda virtual",
    secciones: [
      {
        h2: "Tienda virtual, landing page o catálogo de WhatsApp: qué te conviene",
        parrafo:
          "No todo negocio necesita una tienda completa. Elegir de más cuesta dinero; elegir de menos cuesta ventas. Esta es la regla que usamos en la primera conversación.",
        tabla: {
          cabeceras: ["Opción", "Cuándo conviene", "Inversión"],
          filas: [
            ["Catálogo de WhatsApp", "Pocos productos y venta conversada", "Gratis, dentro de WhatsApp Business"],
            ["Landing page", "Un producto o servicio, captar contactos o vender por WhatsApp", "Plan Landing: S/1,500 por proyecto"],
            ["Tienda virtual", "Muchos productos, pago en línea y control de stock", "Plan E-commerce: S/8,000 por proyecto"],
          ],
          nota: "Los precios son los planes publicados en nuestra página de diseño web. Un proyecto con integraciones especiales se cotiza aparte.",
        },
      },
      {
        h2: "Qué incluye el plan E-commerce",
        bullets: [
          { titulo: "Catálogo ilimitado", texto: "con categorías, filtros y fichas de producto completas." },
          { titulo: "Pasarela de pagos", texto: "para cobrar con tarjeta y los medios que usa tu cliente." },
          { titulo: "Gestión de inventario", texto: "el stock se descuenta solo con cada venta." },
          { titulo: "SEO avanzado", texto: "para que tus productos aparezcan cuando alguien los busca en Google." },
          { titulo: "Soporte de 3 meses", texto: "después del lanzamiento, que es cuando aparecen las dudas reales." },
        ],
      },
      {
        h2: "Lo que hace que una tienda venda",
        parrafo:
          "La mayoría de tiendas que no venden tienen un buen diseño. Lo que falla está en otra parte.",
        bullets: [
          { titulo: "Fotos reales y descripciones completas", texto: "medidas, materiales, qué incluye. Cada duda sin respuesta es un carrito abandonado." },
          { titulo: "El costo de envío antes del pago", texto: "descubrirlo en el último paso es la causa más común de abandono." },
          { titulo: "Un pago corto", texto: "pocos campos y sin obligar a crear una cuenta para comprar." },
          { titulo: "WhatsApp a la vista", texto: "en Perú mucha gente pregunta antes de pagar. Si no puede preguntar, se va." },
          { titulo: "Tráfico desde el día uno", texto: "una tienda nueva no aparece en Google de inmediato: la pauta trae las primeras ventas mientras el SEO madura." },
        ],
      },
    ],
    incluye: [
      { titulo: "Diseño a medida", texto: "Con tu marca, pensado para comprar desde el celular." },
      { titulo: "Catálogo ilimitado", texto: "Productos, variantes y categorías sin límite." },
      { titulo: "Pasarela de pagos", texto: "Cobros en línea integrados." },
      { titulo: "Gestión de inventario", texto: "Stock actualizado con cada venta." },
      { titulo: "SEO avanzado", texto: "Fichas y categorías preparadas para Google." },
      { titulo: "Píxel y analítica", texto: "Medición de ventas para tus campañas." },
      { titulo: "WhatsApp integrado", texto: "Para el cliente que pregunta antes de pagar." },
      { titulo: "Soporte de 3 meses", texto: "Acompañamiento después del lanzamiento." },
    ],
    beneficios: [
      { titulo: "Vende sin horario", texto: "La tienda cobra aunque tu local esté cerrado." },
      { titulo: "Stock bajo control", texto: "Sin vender lo que ya no tienes." },
      { titulo: "Lista para pauta", texto: "Medición configurada para saber qué campaña vende." },
      { titulo: "Tuya", texto: "El dominio y los accesos quedan a tu nombre." },
    ],
    proceso: [
      { paso: "01", titulo: "Catálogo", texto: "Ordenamos productos, precios, fotos y envíos." },
      { paso: "02", titulo: "Diseño", texto: "Estructura y diseño pensados en el celular." },
      { paso: "03", titulo: "Desarrollo", texto: "Pagos, inventario y medición conectados." },
      { paso: "04", titulo: "Lanzamiento", texto: "Pruebas de compra reales, salida y soporte." },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta una tienda virtual?",
        a: "Nuestro plan E-commerce cuesta S/8,000 por proyecto e incluye catálogo ilimitado, pasarela de pagos, inventario, SEO avanzado y 3 meses de soporte. Si necesitas integraciones especiales, las cotizamos aparte.",
      },
      {
        q: "¿Cuánto demora hacer una tienda virtual?",
        a: "Depende sobre todo de cuánto tarde en estar listo el catálogo: fotos, descripciones y precios. Te damos la fecha al cotizar, una vez que vemos cuántos productos son.",
      },
      {
        q: "¿Puedo administrarla yo?",
        a: "Sí. Subir productos, cambiar precios y ver pedidos lo haces tú desde el panel, y te enseñamos a usarlo.",
      },
      {
        q: "¿Una tienda virtual o una landing page?",
        a: "Si vendes muchos productos y quieres cobrar en línea, tienda. Si vendes uno o pocos, o cierras conversando, una landing page de S/1,500 suele bastar para empezar.",
      },
      {
        q: "¿Me ayudan a conseguir ventas?",
        a: "Sí. La tienda sale con la medición lista para Meta Ads y Google Ads, y podemos llevar la pauta y el SEO desde el lanzamiento.",
      },
      {
        q: "¿Hacen tiendas online para negocios de todo el Perú?",
        a: "Sí. Diseñamos la tienda online desde Ica para negocios de cualquier ciudad del Perú, con pasarela de pagos para cobrar con tarjeta y los medios que usa tu cliente.",
      },
    ],
    enlazaA: ["desarrollo-web", "meta-ads", "seo"],
    cierre: { h2: "Abramos tu tienda", cta: "Agenda tu consultoría cero" },
  },

  // ---------------------------------------------------------------- AGENTE DE IA PARA WHATSAPP
  {
    slug: "chatbot-whatsapp",
    tipo: "servicio",
    categoriaSlug: "web-seo",
    nombre: "Agente de IA para WhatsApp",
    proof: "Lo usamos nosotros: la atención de 24 horas de Suggestion funciona con un agente de IA.",
    lecturas: [
      { label: "Cómo automatizar WhatsApp en tu negocio", href: "/blog/ia-automatizacion/como-automatizar-whatsapp" },
      { label: "Cómo vender por WhatsApp paso a paso", href: "/blog/ia-automatizacion/como-vender-por-whatsapp-paso-a-paso" },
      { label: "CRM inmobiliario: qué debe tener", href: "/blog/inmobiliario/crm-inmobiliario" },
    ],
    // 16-nov: «agente de ia para whatsapp» tiene más sugerencias comerciales
    // (precio, business, meta) que «chatbot whatsapp»; el título lleva los dos.
    metaTitle: "Agente de IA para WhatsApp: Chatbot para Empresas | Suggestion",
    metaDescription:
      "Agente de IA para WhatsApp que responde a cualquier hora, califica a cada contacto y agenda por tu equipo, conectado a tu CRM. Lo usamos en Suggestion.",
    h1: "Agente de IA para WhatsApp: el chatbot que responde, califica y agenda",
    hero: "La mayoría de ventas por WhatsApp se pierde en los mensajes que nadie contestó a tiempo. Configuramos un agente de inteligencia artificial que responde al instante y a cualquier hora, hace las preguntas que haría tu vendedor y le pasa la conversación cuando hay alguien listo para comprar.",
    enCorto: [
      "Un agente de IA responde en WhatsApp al instante y a cualquier hora, con la información de tu negocio que tú apruebas.",
      "Hace las preguntas de calificación, agenda citas y pasa la conversación a una persona cuando el cliente está listo.",
      "Se conecta a tu CRM para que ningún contacto se pierda y sepas de qué anuncio vino cada uno.",
      "Lo cotizamos según el volumen de conversaciones y las integraciones que necesites.",
    ],
    cta: "Agenda tu consultoría cero",
    keyword: "chatbot whatsapp",
    secciones: [
      {
        h2: "Qué hace un agente de IA en tu WhatsApp",
        bullets: [
          { titulo: "Responde al momento", texto: "de día, de noche y en feriados, que es justo cuando escribe mucha gente." },
          { titulo: "Contesta lo de siempre", texto: "precios publicados, ubicación, horarios, requisitos, formas de pago." },
          { titulo: "Califica", texto: "pregunta presupuesto, plazo o lo que tu equipo necesite saber antes de llamar." },
          { titulo: "Agenda", texto: "citas, visitas o pruebas de manejo, sin ida y vuelta de mensajes." },
          { titulo: "Pasa la conversación", texto: "a una persona cuando hay intención de compra o cuando la pregunta lo supera." },
          { titulo: "Registra", texto: "cada contacto en tu CRM, con el anuncio del que vino." },
        ],
      },
      {
        h2: "Chatbot de botones o agente de IA",
        parrafo:
          "Los dos se llaman «chatbot», pero no hacen lo mismo. La diferencia se nota en el cliente que escribe como habla.",
        tabla: {
          cabeceras: ["", "Chatbot de botones", "Agente de IA"],
          filas: [
            ["Cómo responde", "Con un menú de opciones fijas", "Entiende lo que el cliente escribe, como lo escriba"],
            ["Cuándo conviene", "Pocas preguntas y siempre las mismas", "Preguntas variadas y venta que necesita conversación"],
            ["El riesgo", "El cliente se cansa del menú y se va", "Que responda algo no aprobado, si no tiene límites claros"],
          ],
          nota: "Por eso un agente bien hecho trabaja solo con la información que tú apruebas y deriva a una persona cuando duda.",
        },
      },
      {
        h2: "Lo que no debe hacer solo",
        parrafo:
          "Un agente de IA no reemplaza a tu equipo comercial: le quita el trabajo repetitivo para que se dedique a cerrar. Hay tres cosas que configuramos para que nunca haga por su cuenta.",
        bullets: [
          { titulo: "Inventar precios o condiciones", texto: "responde solo con lo que está en su base de información; si no lo sabe, lo dice y deriva." },
          { titulo: "Cerrar una negociación", texto: "descuentos, excepciones y casos especiales los decide una persona." },
          { titulo: "Retener a quien pide hablar con alguien", texto: "si el cliente pide una persona, se la pasa de inmediato." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "Las reglas de WhatsApp Business",
          texto: "Meta pone condiciones: pasadas 24 horas desde el último mensaje del cliente, solo se le puede escribir con plantillas aprobadas, y algunos tipos de mensaje tienen un costo que cobra Meta. Lo configuramos contigo desde el inicio para que no haya sorpresas.",
        },
      },
      {
        h2: "Cómo lo implementamos",
        pasos: [
          { titulo: "Leemos tus conversaciones reales", texto: "para saber qué pregunta tu cliente de verdad y en qué momento se cae la venta." },
          { titulo: "Armamos la base de información", texto: "productos, precios publicados, preguntas frecuentes y el tono de tu marca." },
          { titulo: "Definimos cuándo derivar", texto: "qué casos pasan a una persona y a quién." },
          { titulo: "Probamos antes de salir", texto: "con preguntas difíciles, mal escritas y fuera de tema." },
          { titulo: "Revisamos después del lanzamiento", texto: "leemos conversaciones, corregimos respuestas y ajustamos la calificación." },
        ],
      },
    ],
    incluye: [
      { titulo: "Configuración del agente", texto: "Personalidad, tono y reglas de tu marca." },
      { titulo: "Base de información", texto: "Lo que el agente puede responder, aprobado por ti." },
      { titulo: "Preguntas de calificación", texto: "Las que tu equipo necesita antes de llamar." },
      { titulo: "Agenda de citas", texto: "Visitas, reuniones o pruebas, directo desde el chat." },
      { titulo: "Derivación a tu equipo", texto: "Reglas claras de cuándo pasa a una persona." },
      { titulo: "Conexión con tu CRM", texto: "Cada contacto registrado con su etapa." },
      { titulo: "Origen de cada contacto", texto: "Para saber qué anuncio trajo cada conversación." },
      { titulo: "Revisión de conversaciones", texto: "Ajustes con lo que pasa en los chats reales." },
    ],
    beneficios: [
      { titulo: "Nadie espera respuesta", texto: "El primer contacto se atiende en segundos, a cualquier hora." },
      { titulo: "Tu equipo cierra", texto: "Recibe conversaciones calificadas, no preguntas repetidas." },
      { titulo: "Nada se pierde", texto: "Cada contacto queda registrado con su origen." },
      { titulo: "Bajo control", texto: "Ves todas las conversaciones y puedes intervenir cuando quieras." },
    ],
    faq: [
      {
        q: "¿Qué diferencia hay entre un chatbot y un agente de IA?",
        a: "El chatbot clásico funciona con un menú de botones y respuestas fijas. El agente de IA entiende lo que el cliente escribe, como lo escriba, y responde con la información de tu negocio. Para ventas que necesitan conversación, el agente rinde mucho más.",
      },
      {
        q: "¿El agente puede equivocarse?",
        a: "Puede, como cualquier persona nueva. Por eso trabaja solo con información que tú apruebas, deriva cuando duda y revisamos sus conversaciones después del lanzamiento para corregirlo.",
      },
      {
        q: "¿Necesito WhatsApp Business?",
        a: "Para un agente que responda solo se usa la plataforma oficial de WhatsApp Business. Te ayudamos a configurarla y a cumplir las reglas de Meta.",
      },
      {
        q: "¿Cuánto cuesta un agente de IA para WhatsApp?",
        a: "Depende del volumen de conversaciones y de las integraciones, como el CRM o la agenda. Lo cotizamos en la consultoría cero. Aparte, Meta cobra algunos tipos de mensaje según sus propias tarifas.",
      },
      {
        q: "¿Se conecta con mi CRM?",
        a: "Sí. Lo integramos con tu CRM para que cada contacto quede registrado con su etapa y su origen. Si todavía no tienes CRM, lo implementamos contigo.",
      },
      {
        q: "¿Pierdo el control de las conversaciones?",
        a: "No. Tu equipo ve todas las conversaciones y puede entrar en cualquier momento. El agente se encarga de lo repetitivo, no de las decisiones.",
      },
    ],
    enlazaA: ["crm-automatizacion", "meta-ads", "desarrollo-web"],
    cierre: { h2: "Que ningún mensaje se quede sin respuesta", cta: "Agenda tu consultoría cero" },
  },

  // ---------------------------------------------------------------- EVENTOS CORPORATIVOS
  {
    slug: "eventos-corporativos",
    tipo: "servicio",
    categoriaSlug: "btl-medios",
    nombre: "Eventos Corporativos",
    pruebas: [
      { label: "Caso Autoniza · 8 autos en 2 eventos", href: "/casos/autoniza-eventos" },
      { label: "Portafolio de activaciones", href: "/portafolio" },
    ],
    lecturas: [
      { label: "Marketing automotriz: ejemplos que funcionan", href: "/blog/automotriz/marketing-automotriz-ejemplos" },
      { label: "Regalos corporativos de Navidad", href: "/blog/imprenta-btl/regalos-corporativos-de-navidad" },
    ],
    proof: "Autoniza: 3 autos el 22 de mayo y 5 el 25 de junio · un relanzamiento de tienda que cubrieron ocho canales de prensa · 22 activaciones documentadas con fotos propias.",
    metaTitle: "Eventos Corporativos y de Fin de Año en Ica | Suggestion",
    metaDescription:
      "Producimos eventos corporativos en Ica y el Perú: lanzamientos, inauguraciones, eventos con clientes y de fin de año. Convocatoria, montaje y registro. Cotiza.",
    h1: "Eventos corporativos que dejan algo más que fotos",
    hero: "Lanzamientos, inauguraciones, relanzamientos de tienda, eventos con clientes y el evento de fin de año de tu empresa. Nos encargamos de la convocatoria, el montaje, la producción y el registro, para que el evento cumpla el objetivo por el que lo hiciste.",
    enCorto: [
      "Producimos lanzamientos, inauguraciones, relanzamientos de tienda, eventos con clientes y eventos de fin de año.",
      "No hay precio fijo: cotizamos según el tipo de evento, la fecha, la ciudad, los invitados y lo que necesitas que pongamos.",
      "Un evento comercial vende si la convocatoria está bien hecha: con Autoniza, en Ica, salieron 3 autos vendidos el 22 de mayo y 5 el 25 de junio.",
      "Montaje, estructuras, foto, video y merchandising salen del mismo equipo.",
    ],
    cta: "Cotiza tu evento",
    keyword: "eventos corporativos",
    especificaciones: ["Tipo de evento", "Fecha y ciudad", "Número de invitados", "Si ya tienes local", "Qué necesitas que pongamos (montaje, convocatoria, foto y video, merchandising)"],
    secciones: [
      {
        h2: "Cuánto cuesta un evento corporativo: qué necesitamos para cotizarte",
        parrafo:
          "No manejamos paquetes cerrados: cada evento cambia según cuánta gente, dónde y qué hay que poner. Con estos datos te cotizamos. Si todavía no los tienes claros, cuéntanos qué quieres lograr y armamos la propuesta contigo.",
        bullets: [
          { titulo: "Tipo de evento", texto: "lanzamiento, inauguración, evento con clientes, fin de año, feria." },
          { titulo: "Fecha y ciudad", texto: "y si tienes una segunda fecha posible." },
          { titulo: "Invitados", texto: "cuántas personas esperas y quiénes son." },
          { titulo: "Local", texto: "si ya lo tienes o necesitas que te ayudemos a elegirlo." },
          { titulo: "Qué ponemos nosotros", texto: "montaje, convocatoria, animación, foto y video, merchandising o todo." },
        ],
      },
      {
        h2: "Qué tipo de evento necesitas",
        parrafo:
          "Cada evento tiene un trabajo distinto. Definirlo antes de pensar en la decoración es lo que separa un evento que vende de uno que solo se ve bonito.",
        tabla: {
          cabeceras: ["Evento", "Para qué sirve", "Lo que no puede faltar"],
          filas: [
            ["Lanzamiento de producto", "Que el mercado conozca algo nuevo y lo pruebe", "Invitados que pueden comprar y una razón para ir ese día"],
            ["Inauguración o relanzamiento", "Que la zona sepa que abriste", "Lista de invitados armada con tiempo y prensa local"],
            ["Evento con clientes", "Fidelizar y vender a quien ya te conoce", "Invitación personal y seguimiento después"],
            ["Fin de año con tu equipo", "Cerrar el año y reconocer a la gente", "Logística resuelta, programa claro y registro en foto y video"],
            ["Feria o exposición", "Captar contactos en poco tiempo", "Un stand que se vea y alguien que registre los datos"],
          ],
        },
      },
      {
        h2: "Un evento comercial se gana antes de que empiece",
        parrafo:
          "El evento es la mitad del trabajo; la otra mitad es quién llega. En el relanzamiento de la tienda de Autoniza, en Ica, la convocatoria apuntó a dos públicos a la vez: autoridad local y prospectos reales con intención de compra. Ocho canales de prensa cubrieron la jornada, y entre ese evento y el siguiente salieron 8 autos vendidos.",
        foto: foto("relanzamiento-mitsubishi-autoniza", 1, "Fachada iluminada de la tienda Mitsubishi FUSO de Autoniza durante su relanzamiento en Ica", "El relanzamiento de Autoniza en Ica: convocatoria, protocolo y montaje del mismo equipo"),
      },
      {
        h2: "El evento de fin de año: lo que conviene definir primero",
        parrafo:
          "En diciembre los locales y los proveedores se reservan antes que el resto del año. Mientras antes se definan estas cinco cosas, más opciones quedan.",
        pasos: [
          { titulo: "Para quién es", texto: "tu equipo, tus clientes o los dos. Cambia el tono, el programa y el presupuesto." },
          { titulo: "Cuántas personas y cuánto invertir", texto: "con esos dos números se descartan la mitad de las opciones." },
          { titulo: "Fecha y local", texto: "ten una segunda fecha posible: en diciembre los locales se llenan." },
          { titulo: "Programa", texto: "bienvenida, momento central, reconocimientos, cierre. Sin programa, el evento se alarga y se apaga." },
          { titulo: "Registro", texto: "foto y video para compartir después, con tu equipo o en tus redes." },
        ],
      },
      {
        h2: "Lo que queda cuando el evento termina",
        bullets: [
          { titulo: "Los datos de los asistentes", texto: "con permiso, para el seguimiento comercial." },
          { titulo: "Foto y video", texto: "material para redes, la web y la próxima convocatoria." },
          { titulo: "Lo aprendido", texto: "quién vino, quién compró y qué cambiar la próxima vez." },
        ],
      },
    ],
    incluye: [
      { titulo: "Concepto y programa", texto: "Qué pasa, en qué orden y para qué." },
      { titulo: "Convocatoria", texto: "Invitaciones y pauta segmentada para que llegue quien importa." },
      { titulo: "Montaje", texto: "Escenografía, mobiliario y señalética." },
      { titulo: "Estructuras y stands", texto: "Fabricados por nuestro propio equipo." },
      { titulo: "Foto, video y drone", texto: "Cobertura completa del evento." },
      { titulo: "Anfitrionas y animación", texto: "Personal para recibir, guiar y animar." },
      { titulo: "Merchandising y regalos", texto: "Recuerdos con tu marca para los asistentes." },
      { titulo: "Registro de asistentes", texto: "Datos para el seguimiento comercial." },
      { titulo: "Coordinación el día del evento", texto: "Un responsable de principio a fin." },
    ],
    beneficios: [
      { titulo: "Un solo equipo", texto: "Montaje, audiovisual y merchandising sin coordinar a cinco proveedores." },
      { titulo: "Convocatoria pensada", texto: "Llega quien puede comprar, no solo quien pasa." },
      { titulo: "Datos, no solo fotos", texto: "Cada asistente queda registrado para el seguimiento." },
      { titulo: "Contenido para después", texto: "El evento sigue trabajando en tus redes." },
    ],
    proceso: [
      { paso: "01", titulo: "Brief", texto: "Objetivo, invitados, fecha y presupuesto." },
      { paso: "02", titulo: "Propuesta", texto: "Concepto, programa y cotización detallada." },
      { paso: "03", titulo: "Producción", texto: "Convocatoria, montaje y proveedores coordinados." },
      { paso: "04", titulo: "El día y después", texto: "Coordinación en sitio, registro y seguimiento." },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta un evento corporativo?",
        a: "No hay un precio fijo: depende del tipo de evento, la cantidad de invitados, la ciudad, el local y lo que necesitas que pongamos. Pásanos esos datos y te cotizamos por WhatsApp.",
      },
      {
        q: "¿Organizan el evento de fin de año de una empresa?",
        a: "Sí, para tu equipo o para tus clientes: te ayudamos con el local, el programa, el montaje, la animación, el registro en foto y video y los regalos con tu marca.",
      },
      {
        q: "¿Con cuánta anticipación hay que pedirlo?",
        a: "Mientras antes, más opciones de fecha y de local, sobre todo en diciembre. Al cotizar te decimos con claridad si llegamos a la fecha que necesitas.",
      },
      {
        q: "¿Trabajan fuera de Ica?",
        a: "Sí. Hemos producido activaciones y eventos en Ica, Nazca, Paracas y otras ciudades, y coordinamos la logística donde sea el evento.",
      },
      {
        q: "¿Hacen stands para ferias?",
        a: "Sí: diseñamos y fabricamos el stand y podemos poner al personal que atiende y registra los datos de los visitantes.",
      },
      {
        q: "¿Un evento de verdad vende?",
        a: "Si la convocatoria está bien hecha, sí. Con Autoniza, en Ica, salieron 3 autos vendidos el 22 de mayo y 5 el 25 de junio. Sin convocatoria, un evento es un gasto en toldo y bocaditos.",
      },
    ],
    enlazaA: ["btl", "estructuras-publicitarias", "produccion-audiovisual"],
    cierre: { h2: "Que tu evento cumpla su objetivo", cta: "Cotiza tu evento" },
  },

  // ---------------------------------------------------------------- GIGANTOGRAFÍAS
  {
    slug: "gigantografias",
    tipo: "servicio",
    categoriaSlug: "btl-medios",
    nombre: "Gigantografías",
    lecturas: [
      { label: "Gigantografías: medidas, materiales y precios", href: "/blog/imprenta-btl/gigantografias-medidas-materiales-precios" },
      { label: "Panel, valla, bicivalla o vehículo rotulado", href: "/blog/imprenta-btl/panel-valla-bicivalla-o-vehiculo-rotulado" },
      { label: "Letreros para negocio: cuál elegir", href: "/blog/imprenta-btl/letreros-para-negocio-cual-elegir" },
    ],
    metaTitle: "Gigantografías en Ica: Banners y Lonas | Suggestion",
    metaDescription:
      "Gigantografías en Ica por pedido: lonas, banners y vinil en gran formato para exterior, con ojales o bastidor. Cotiza por WhatsApp con la medida y el material.",
    h1: "Gigantografías en Ica, impresas para durar afuera",
    hero: "Lonas, banners y vinil en gran formato para fachadas, ferias, obras y eventos. Dinos la medida, dónde va a ir y cuántas necesitas, y te cotizamos por WhatsApp. Trabajamos por pedido: la entrega o el recojo se coordinan antes.",
    enCorto: [
      "Una gigantografía es una impresión de gran formato, casi siempre en lona o vinil, para fachadas, ferias, obras y eventos.",
      "No hay precio fijo: cotizamos según la medida, el material, el acabado y la cantidad.",
      "Las medidas más pedidas son 1 × 2 m, 2 × 1 m, 3 × 1 m y 1 × 3 m. El rollo más común mide 3.20 m de ancho.",
      "Para exterior, lona con tinta que resiste el sol; una tinta de interior se destiñe en un par de meses de verano.",
    ],
    cta: "Cotiza tu gigantografía",
    keyword: "gigantografías en Ica",
    schema: "localbusiness",
    especificaciones: ["Medida (ancho x alto)", "Dónde va a ir (interior o exterior)", "Material (si lo sabes)", "Acabado: ojales, bastidor o bolsillo", "Cantidad", "Fecha y lugar de entrega"],
    secciones: [
      {
        h2: "Cuánto cuesta una gigantografía: qué necesitamos para cotizarte",
        parrafo:
          "No manejamos una lista de precios fijos, porque la medida, el material y el acabado cambian mucho el costo. Con estos datos te cotizamos por WhatsApp. Si no sabes qué material elegir, dinos dónde va a estar y cuánto tiene que durar.",
        bullets: [
          { titulo: "Medida", texto: "ancho por alto en metros, o el espacio que quieres cubrir." },
          { titulo: "Dónde va", texto: "fachada, interior, feria, obra; al sol o bajo techo." },
          { titulo: "Material", texto: "lona, vinil o rígido, si ya lo tienes definido." },
          { titulo: "Acabado", texto: "ojales para amarrar, bastidor para colgar firme o bolsillo para tubo." },
          { titulo: "Cantidad y archivo", texto: "cuántas piezas y si ya tienes el diseño o lo hacemos." },
        ],
      },
      {
        h2: "Qué material elegir según dónde va",
        parrafo:
          "Una gigantografía se juzga a diez metros y bajo el sol de Ica, no en la pantalla. El material decide cuánto dura y cómo se ve.",
        tabla: {
          cabeceras: ["Material", "Dónde funciona", "A tener en cuenta"],
          filas: [
            ["Lona frontlit", "Fachadas, ferias y exteriores", "Lleva refuerzo en el borde y ojales donde toque sujetar"],
            ["Vinil adhesivo", "Vidrios, paredes, vehículos y escaparates", "Se pega sobre superficie lisa y limpia"],
            ["Vinil microperforado", "Ventanas que no deben quedar a oscuras", "Se ve desde afuera y deja pasar luz hacia adentro"],
            ["Rígidos (foam, PVC)", "Señalética y piezas que deben sostenerse solas", "Mejor para interior o con estructura"],
            ["Textil", "Banderolas y roll ups", "Más liviano y fácil de transportar"],
          ],
        },
      },
      {
        h2: "La medida: se define por el espacio, no al revés",
        parrafo:
          "La medida correcta es la que encaja en la estructura o en la pared que ya tienes. El material viene en rollos —el más común mide 3.20 metros de ancho— y se paga lo que se consume del rollo, no lo que mide el arte: ajustar la pieza a ese ancho evita pagar recorte. Si la pieza es más ancha que el rollo, se imprime en partes que se unen, y conviene saberlo antes de diseñar.",
        foto: foto("gira-conduce-tu-rumbo", 4, "Roll-up impreso con código QR y ruleta de premios de una campaña", "Roll-up de campaña: el gran formato también se lleva a ferias y eventos"),
      },
      {
        h2: "Acabados",
        bullets: [
          { titulo: "Ojales", texto: "argollas metálicas en el borde para amarrar la lona a una estructura." },
          { titulo: "Refuerzo perimetral", texto: "el borde doblado y sellado para que no se rasgue con el viento." },
          { titulo: "Bastidor", texto: "un marco que deja la pieza tensa y firme, ideal para fachadas." },
          { titulo: "Bolsillo", texto: "una costura para pasar un tubo, típica en banderolas y colgantes." },
        ],
      },
      {
        h2: "Entrega en Ica y envíos",
        parrafo:
          "Trabajamos por pedido y no atendemos al paso. Coordinamos la entrega o el recojo en Ica y sus distritos —Parcona, Subtanjalla, La Tinguiña, Los Aquijes, Salas Guadalupe—, y hacemos envíos a otras regiones con la fecha confirmada en la cotización. Si necesitas la instalación, dínoslo al pedir y la incluimos en el precio.",
      },
    ],
    incluye: [
      { titulo: "Lonas para fachada", texto: "Con refuerzo y ojales, listas para colgar." },
      { titulo: "Banner publicitario con estructura", texto: "Roll ups y banners para ferias, eventos y puntos de venta." },
      { titulo: "Vinil adhesivo", texto: "Para vidrios, paredes y vehículos." },
      { titulo: "Vinil microperforado", texto: "Ventanas con publicidad sin perder luz." },
      { titulo: "Rígidos", texto: "Foam y PVC para señalética." },
      { titulo: "Diseño", texto: "Si no tienes el arte, lo hacemos." },
      { titulo: "Instalación", texto: "Si la necesitas, se cotiza junto con la pieza." },
    ],
    beneficios: [
      { titulo: "Material según el uso", texto: "Te decimos qué esperar de cada opción antes de imprimir." },
      { titulo: "Medida sin desperdicio", texto: "Ajustamos la pieza al rollo para no pagar recorte." },
      { titulo: "Pedido por WhatsApp", texto: "Cotizas con tus datos y sin visitas." },
      { titulo: "Ica y envíos", texto: "Entrega coordinada en Ica y envíos al resto del país." },
    ],
    proceso: [
      { paso: "01", titulo: "Cotización", texto: "Con medida, material, acabado y cantidad." },
      { paso: "02", titulo: "Archivo", texto: "Revisamos tu diseño o lo hacemos." },
      { paso: "03", titulo: "Impresión", texto: "En el material y con el acabado acordados." },
      { paso: "04", titulo: "Entrega", texto: "Coordinada, con instalación si la pediste." },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta una gigantografía?",
        a: "No hay un precio fijo: depende de la medida, el material, el acabado y la cantidad. Pásanos esos datos y te cotizamos por WhatsApp. Si quieres una referencia antes, en nuestro artículo de medidas y precios hay rangos del mercado con su fecha y su fuente.",
      },
      {
        q: "¿Qué medida de gigantografía me conviene?",
        a: "La que encaje en tu estructura o en tu pared. Las más pedidas son 1 × 2 m, 2 × 1 m, 3 × 1 m y 1 × 3 m. Ajustar la pieza al ancho del rollo, que suele ser 3.20 m, evita pagar recorte.",
      },
      {
        q: "¿Qué material es mejor para exterior?",
        a: "Lona frontlit con tinta para exterior, con refuerzo en el borde y ojales. Para vidrios, vinil; y para ventanas que no deben quedar a oscuras, vinil microperforado.",
      },
      {
        q: "¿Cuánto dura una gigantografía en exterior?",
        a: "Depende del material y de la tinta. Con lona y tinta para exterior aguanta temporadas completas al sol y a la lluvia; con materiales de interior a la intemperie, se destiñe en semanas.",
      },
      {
        q: "¿Puedo pasar a recogerla sin cita?",
        a: "No. Trabajamos por pedido y el recojo se coordina antes. Si prefieres, te la llevamos.",
      },
      {
        q: "¿Hacen envíos fuera de Ica?",
        a: "Sí, coordinamos envíos al resto del país. El plazo de transporte se suma al de producción y te lo decimos junto con la cotización.",
      },
      {
        q: "¿Imprimen banners publicitarios en Ica?",
        a: "Sí: banners en lona o en vinil, con estructura tipo roll up o para colgar, para fachadas, ferias y eventos. Se cotizan igual que una gigantografía: con la medida, el material, el acabado y la cantidad.",
      },
    ],
    enlazaA: ["imprenta", "letreros-luminosos", "estructuras-publicitarias"],
    cierre: { h2: "Tu gigantografía, lista para colgar", cta: "Cotiza tu gigantografía" },
  },

  // ---------------------------------------------------------------- LETREROS LUMINOSOS
  {
    slug: "letreros-luminosos",
    tipo: "servicio",
    categoriaSlug: "btl-medios",
    nombre: "Letreros Luminosos",
    pruebas: [
      { label: "Portafolio de activaciones", href: "/portafolio" },
      { label: "Caso Autoniza · 8 autos en 2 eventos", href: "/casos/autoniza-eventos" },
    ],
    lecturas: [
      { label: "Letreros para negocio: cuál elegir", href: "/blog/imprenta-btl/letreros-para-negocio-cual-elegir" },
      { label: "Panel, valla, bicivalla o vehículo rotulado", href: "/blog/imprenta-btl/panel-valla-bicivalla-o-vehiculo-rotulado" },
    ],
    metaTitle: "Letreros Luminosos y Letras Corpóreas en Ica | Suggestion",
    metaDescription:
      "Letreros luminosos, letras corpóreas y retroiluminadas en acrílico y LED para fachadas en Ica. Diseño, fabricación e instalación. Cotiza por WhatsApp.",
    h1: "Letreros luminosos y letras corpóreas para tu fachada",
    hero: "Tu letrero trabaja todos los días para quien ya está frente a tu puerta, también de noche. Diseñamos, fabricamos e instalamos letreros luminosos, letras corpóreas, avisos en acrílico, paneles LED y toldos publicitarios.",
    enCorto: [
      "Hacemos letreros luminosos, letras corpóreas, letras retroiluminadas, avisos en acrílico, paneles LED y toldos publicitarios.",
      "No hay precio fijo: depende del tipo de letrero, la medida, el material y la instalación.",
      "Diseño, fabricación e instalación salen del mismo equipo.",
      "En fachada suele hacer falta autorización municipal: lo verificamos contigo antes de fabricar.",
    ],
    cta: "Cotiza tu letrero",
    keyword: "letreros luminosos",
    especificaciones: ["Tipo de letrero (luminoso, letras corpóreas, panel LED, toldo)", "Medida o espacio disponible", "Dónde va (fachada, interior, altura)", "Si ya tienes el logo en archivo", "Fecha"],
    secciones: [
      {
        h2: "Cuánto cuesta un letrero luminoso: qué necesitamos para cotizarte",
        parrafo:
          "No manejamos precios fijos: el tipo de letrero, la medida, el material, la iluminación y la instalación cambian el costo. Con estos datos te cotizamos por WhatsApp. Una foto de tu fachada ayuda mucho.",
        bullets: [
          { titulo: "Qué letrero", texto: "luminoso, letras corpóreas, retroiluminado, panel LED o toldo." },
          { titulo: "Medida", texto: "el espacio que tienes en la fachada, ancho por alto." },
          { titulo: "Dónde va", texto: "fachada o interior, y a qué altura." },
          { titulo: "Logo", texto: "si lo tienes en archivo editable o hay que redibujarlo." },
          { titulo: "Fecha", texto: "para cuándo lo necesitas instalado." },
        ],
      },
      {
        h2: "Qué letrero conviene",
        tabla: {
          cabeceras: ["Tipo", "Cómo se ve", "Cuándo conviene"],
          filas: [
            ["Letras corpóreas", "Letras con volumen, con o sin luz", "Fachadas donde la marca tiene que leerse de lejos y verse sólida"],
            ["Letras retroiluminadas", "La luz sale por detrás y deja un halo en la pared", "Marcas que quieren verse elegantes de noche"],
            ["Letrero luminoso en acrílico", "Una caja de luz con la marca impresa o en relieve", "La opción más común para identificar el local de día y de noche"],
            ["Panel LED", "Una pantalla con mensajes que cambian", "Cuando tienes varias ofertas o cambias el mensaje por horario"],
            ["Toldo publicitario", "Sombra en la entrada con tu marca", "Locales con vereda, terraza o vitrina al sol"],
          ],
        },
      },
      {
        h2: "Cómo se lee un letrero de noche",
        parrafo:
          "De día el letrero compite con la fachada; de noche, con la oscuridad. Estas reglas evitan los errores más comunes.",
        bullets: [
          { titulo: "Pocas palabras y grandes", texto: "el nombre y, como mucho, el rubro. Lo demás no se lee desde la pista." },
          { titulo: "Contraste antes que color", texto: "un logo en dos tonos parecidos desaparece cuando se ilumina." },
          { titulo: "Luz pareja", texto: "las letras que se ven con manchas o zonas apagadas transmiten descuido." },
          { titulo: "La altura correcta", texto: "un letrero alto se ve de lejos; uno a la altura de los ojos se lee de cerca. Depende de quién te busca." },
        ],
      },
      {
        h2: "Antes de instalar en la fachada",
        parrafo:
          "Los letreros en fachada suelen requerir autorización municipal, y las condiciones cambian de un distrito a otro: medidas permitidas, tipo de soporte e iluminación. Lo verificamos contigo antes de fabricar y te acompañamos en el trámite, pero la normativa aplicable la marca cada municipalidad.",
      },
    ],
    incluye: [
      { titulo: "Letreros luminosos", texto: "Letreros acrílicos luminosos: cajas de luz para tu fachada." },
      { titulo: "Letras corpóreas", texto: "Con volumen, con o sin iluminación." },
      { titulo: "Letras retroiluminadas", texto: "Luz por detrás, efecto halo." },
      { titulo: "Avisos en acrílico", texto: "Para interior y exterior." },
      { titulo: "Paneles LED", texto: "Mensajes que cambian sin producir material nuevo." },
      { titulo: "Toldos publicitarios", texto: "Sombra y marca en la entrada de tu local." },
      { titulo: "Señalética", texto: "Para orientar dentro y fuera del local." },
      { titulo: "Diseño e instalación", texto: "Del archivo a la fachada, con el mismo equipo." },
    ],
    beneficios: [
      { titulo: "Visible de noche", texto: "Tu local se encuentra también cuando oscurece." },
      { titulo: "Un solo responsable", texto: "Diseño, fabricación e instalación sin intermediarios." },
      { titulo: "Medidas que encajan", texto: "Medimos el espacio antes de fabricar." },
      { titulo: "Trámite acompañado", texto: "Verificamos la autorización municipal contigo." },
    ],
    proceso: [
      { paso: "01", titulo: "Medición", texto: "Fachada, espacio y dónde se conecta la luz." },
      { paso: "02", titulo: "Diseño", texto: "Propuesta con medidas, materiales e iluminación." },
      { paso: "03", titulo: "Fabricación", texto: "En el material y la iluminación acordados." },
      { paso: "04", titulo: "Instalación", texto: "Colocación y prueba de encendido." },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta un letrero luminoso?",
        a: "No hay un precio fijo: depende del tipo de letrero, la medida, el material, la iluminación y la instalación. Mándanos una foto de la fachada con esos datos y te cotizamos por WhatsApp.",
      },
      {
        q: "¿Qué diferencia hay entre letras corpóreas y retroiluminadas?",
        a: "Las corpóreas son letras con volumen, que pueden ir con o sin luz. Las retroiluminadas son corpóreas con la luz detrás, que se refleja en la pared y deja un halo.",
      },
      {
        q: "¿Con qué materiales trabajan?",
        a: "Según la pieza: acrílico, PVC, metal y LED.",
      },
      {
        q: "¿Hacen la instalación?",
        a: "Sí. Diseñamos, fabricamos e instalamos, y probamos el encendido antes de irnos.",
      },
      {
        q: "¿Necesito permiso municipal para un letrero?",
        a: "En fachada, normalmente sí, y las condiciones cambian según el distrito. Lo verificamos contigo antes de fabricar y te acompañamos en el trámite.",
      },
      {
        q: "¿También hacen toldos publicitarios?",
        a: "Sí, con tu marca impresa, para entradas, terrazas y vitrinas.",
      },
      {
        q: "¿Qué letreros de publicidad hacen?",
        a: "Letreros luminosos en acrílico, letras corpóreas con o sin luz, letras retroiluminadas, avisos en acrílico, paneles LED, toldos y señalética, con diseño, fabricación e instalación del mismo equipo.",
      },
    ],
    enlazaA: ["estructuras-publicitarias", "gigantografias", "material-pop"],
    cierre: { h2: "Que te encuentren también de noche", cta: "Cotiza tu letrero" },
  },
];
