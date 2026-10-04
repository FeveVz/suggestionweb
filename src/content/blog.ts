/**
 * Blog data-driven: 8 categorías (clusters) + 24 entradas de la 1.ª tanda.
 * Copy literal de docs-fuente 09 (categorías) y 13/14/15 (entradas).
 * Cada entrada deriva a su money page y enlaza a hermanas del cluster.
 */

import type { Seccion, Faq } from "./types";

export type BlogCategoria = {
  slug: string;
  nombre: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  /** Cuerpo editorial bajo el listado. Sin esto la categoría es solo un índice
   *  de tarjetas (~150 palabras) y salta de H1 a H3 sin nivel intermedio. */
  secciones?: Seccion[];
  /** Preguntas frecuentes de la categoría; emiten su FAQPage. */
  faq?: Faq[];
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
  /** Preguntas frecuentes del post. Emiten FAQPage (rich snippet) y capturan
   *  las "Otras preguntas de los usuarios" de Google. Opcional. */
  faq?: Faq[];
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
    secciones: [
      {
        h2: "Qué encontrarás en esta sección",
        parrafo:
          "Artículos sobre la parte del marketing que se mide en dinero: cuánto invertir, qué significan las siglas que aparecen en los informes y cómo saber si una campaña rinde o solo gasta. Está pensada para quien pone su propio dinero en publicidad y quiere entender qué está comprando, no para especialistas.",
      },
      {
        h2: "Los tres números que deciden si una campaña funciona",
        parrafo:
          "Casi todo el análisis de performance se apoya en estos tres, y ninguno sirve solo.",
        bullets: [
          { titulo: "CPL (costo por lead)", texto: "lo que te cuesta conseguir un contacto interesado. Útil, pero engañoso si lo miras aislado: un contacto barato que nunca compra sale caro." },
          { titulo: "ROAS (retorno de la inversión publicitaria)", texto: "cuántos soles vendiste por cada sol invertido. Solo es fiable cuando la venta ocurre rápido y puedes atribuirla." },
          { titulo: "Costo por venta cerrada", texto: "el que de verdad manda. Es el único que compara contra tu margen y te dice si el negocio se sostiene." },
        ],
      },
      {
        h2: "El error más común en pauta",
        parrafo:
          "Optimizar hacia lo que es fácil de medir en lugar de hacia lo que importa. Bajar el costo por contacto es sencillo: pide menos datos y promete de más. Terminas con muchos contactos baratos, un informe que se ve bien y un equipo comercial que pierde el día llamando a gente que nunca iba a comprar. La regla práctica es medir siempre un paso más abajo en el embudo de lo que estás optimizando.",
      },
      {
        h2: "Cuánto invertir cuando recién empiezas",
        parrafo:
          "No existe una cifra estándar y desconfía de quien te la dé sin preguntarte nada. El monto sale de tu margen por venta y de cuántos clientes nuevos puedes atender sin que baje la calidad. Lo que sí es una regla razonable: es mejor sostener un presupuesto modesto tres meses seguidos que hacer un mes fuerte y cortar, porque las plataformas necesitan datos acumulados para dejar de gastar en aprender.",
      },
    ],
    faq: [
      {
        q: "¿Qué es el marketing de performance?",
        a: "Es el enfoque que mide cada sol invertido contra un resultado de negocio concreto —un contacto, una cita, una venta— en lugar de contra alcance o seguidores. No es un canal, es una forma de decidir dónde poner el presupuesto.",
      },
      {
        q: "¿Cuál es un buen CPL?",
        a: "Depende por completo del margen de tu producto. Un CPL de S/50 es excelente para vender un auto y ruinoso para vender un producto de S/80. La comparación útil no es contra el promedio del mercado, sino contra lo que tú puedes pagar y seguir ganando.",
      },
      {
        q: "¿En cuánto tiempo se estabiliza una campaña?",
        a: "Entre 4 y 8 semanas habitualmente. Las primeras semanas el costo por contacto suele ser más alto porque la plataforma está aprendiendo a quién mostrarte. Juzgar una campaña por sus primeros siete días lleva a cortar cosas que iban a funcionar.",
      },
      {
        q: "¿Puedo medir resultados si vendo por WhatsApp?",
        a: "Sí, y es lo más común en Perú. Requiere anotar de dónde vino cada conversación y qué pasó con ella. No hace falta un sistema complejo: un registro ordenado y constante ya te permite calcular costo por contacto y por venta.",
      },
    ]
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
    secciones: [
      {
        h2: "Qué encontrarás en esta sección",
        parrafo:
          "Artículos sobre lo que pasa después del clic: por qué una visita se va sin dejar sus datos, cómo debe estar armada una página para que convierta y qué hacer con los contactos que ya tienes. Es la parte menos glamorosa del marketing y, casi siempre, donde están escondidas las ventas que ya pagaste.",
      },
      {
        h2: "Traer más gente rara vez es la solución",
        parrafo:
          "Cuando las ventas no llegan, el reflejo es subir el presupuesto de publicidad. Pero si de cada cien visitas solo una deja sus datos, duplicar el tráfico solo duplica el gasto y mantiene el problema. Mejorar esa proporción cuesta menos y beneficia a todos los canales a la vez: al pagado, al orgánico y al que llega por recomendación.",
      },
      {
        h2: "Dónde se pierde una conversión",
        parrafo:
          "Casi siempre en uno de estos cuatro puntos, y conviene revisarlos en este orden.",
        bullets: [
          { titulo: "No se entiende qué vendes", texto: "si en cinco segundos el visitante no sabe qué problema le resuelves, se va. Suele ser un problema de orden, no de diseño." },
          { titulo: "Pides demasiado", texto: "cada campo extra en un formulario cuesta contactos. Pide lo mínimo para poder llamar." },
          { titulo: "No hay razón para actuar hoy", texto: "sin un motivo concreto, la decisión se pospone y pospuesta es perdida." },
          { titulo: "Nadie responde a tiempo", texto: "la conversión no termina en el formulario. Termina cuando alguien contesta, y en eso se juegan más ventas que en toda la página." },
        ],
      },
      {
        h2: "Prueba, no opines",
        parrafo:
          "La discusión de oficina sobre qué color de botón funciona mejor se resuelve en un día probando las dos versiones con gente real. Es más barato y más honesto que la opinión del que habla más fuerte. Y aplica a casi todo: el titular, la foto, el orden de las secciones, el texto del botón.",
      },
    ],
    faq: [
      {
        q: "¿Qué es la tasa de conversión?",
        a: "El porcentaje de visitantes que hace lo que querías que hicieran: dejar sus datos, escribir por WhatsApp o comprar. Si de 200 visitas 6 te escriben, tu tasa es del 3%. Lo importante no es el número absoluto sino cómo evoluciona cuando cambias algo.",
      },
      {
        q: "¿Cuál es una buena tasa de conversión?",
        a: "Varía muchísimo por rubro y por tipo de tráfico: quien llega buscando tu servicio convierte mucho más que quien vio un anuncio sin buscarte. Por eso el punto de comparación útil eres tú mismo el mes pasado, no un promedio de internet.",
      },
      {
        q: "¿Cuántos campos debe tener mi formulario?",
        a: "Los mínimos para poder contactar y calificar: normalmente nombre y un medio de contacto. Cada campo adicional reduce el número de personas que lo completan, así que pídelo solo si de verdad vas a usar ese dato.",
      },
      {
        q: "¿Sirve el chat en vivo o el WhatsApp flotante?",
        a: "Sirve mucho, siempre que alguien responda rápido. Un botón de WhatsApp que nadie atiende hasta el día siguiente es peor que no tenerlo, porque genera una expectativa de inmediatez que luego no se cumple.",
      },
    ]
  },
  {
    slug: "marca",
    nombre: "Marca & contenidos",
    metaTitle: "Marca y Contenidos que Dejan Huella | Suggestion",
    metaDescription:
      "Branding que vende vs. branding bonito, y contenido que mueve a la acción. Guías de marca y posicionamiento.",
    h1: "Marca y contenidos que dejan huella",
    intro: "Branding que vende vs. branding bonito, y contenido que mueve a la acción.",
    secciones: [
      {
        h2: "Qué encontrarás en esta sección",
        parrafo:
          "Artículos sobre lo que hace que te elijan cuando el precio es parecido: identidad, posicionamiento, logotipo y contenido. Menos táctica que las otras secciones y más estrategia, pero es lo que decide si compites por preferencia o por descuento.",
      },
      {
        h2: "La marca no es el logo",
        parrafo:
          "El logotipo es la parte visible de algo más grande: la promesa que haces, el tono con el que hablas, la experiencia que entregas y lo que la gente dice de ti cuando no estás. Muchos proyectos de marca empiezan y terminan en el logo, y por eso no cambian nada del negocio. El orden correcto es al revés: primero decidir qué quieres significar y para quién, y después dibujarlo.",
      },
      {
        h2: "Por qué una marca fuerte abarata la publicidad",
        parrafo:
          "Cuando alguien ya te conoce, tu anuncio no tiene que convencerlo desde cero: solo tiene que recordarle. Eso se traduce en menos esfuerzo para conseguir el mismo contacto, es decir, en un costo por resultado más bajo. Por eso recortar la inversión en marca para meterlo todo en pauta suele salir caro: encareces cada campaña futura.",
      },
      {
        h2: "El contenido demuestra lo que la marca promete",
        parrafo:
          "Puedes decir que eres serio, cercano o experto, pero la gente lo cree por lo que ve: un video del proceso, un caso contado con números, la respuesta a una duda que nadie más se molesta en explicar. El contenido es la prueba de la promesa. Sin él, la marca es solo una declaración de intenciones.",
      },
    ],
    faq: [
      {
        q: "¿Cuándo conviene cambiar de logo?",
        a: "Cuando ya no representa lo que vendes, cuando te confunden con la competencia o cuando cambió tu público. El aburrimiento propio no es razón suficiente: tú ves tu logo a diario, tu cliente lo ve unos segundos al mes, y cambiarlo sin motivo tira el reconocimiento acumulado.",
      },
      {
        q: "¿Qué diferencia hay entre marca e identidad visual?",
        a: "La identidad visual es cómo se ve —logo, colores, tipografía—. La marca incluye eso y todo lo demás: qué prometes, cómo hablas, cómo atiendes y qué recuerdan de ti. La identidad se diseña; la marca se construye con el tiempo y se puede arruinar en una mala atención.",
      },
      {
        q: "¿Vale la pena invertir en marca si soy pequeño?",
        a: "Sí, y no tiene que ser caro. Lo esencial —saber a quién le hablas, qué te diferencia y decirlo siempre igual— cuesta reflexión más que presupuesto. Un negocio pequeño con mensaje claro compite mejor que uno grande con mensaje difuso.",
      },
      {
        q: "¿Cada cuánto debo publicar contenido?",
        a: "Importa más la constancia y la utilidad que la frecuencia. Publicar poco pero bien, de forma sostenida, construye más que una racha intensa seguida de meses en silencio.",
      },
    ]
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
    secciones: [
      {
        h2: "Qué encontrarás en esta sección",
        parrafo:
          "Artículos sobre cómo usar la inteligencia artificial y la automatización en un negocio real, sin exageraciones. Qué tareas conviene automatizar, cuáles no, y cómo evitar que la eficiencia se convierta en una atención fría que espante clientes.",
        tabla: {
          cabeceras: ["Si lo que te pasa es…", "Empieza por"],
          filas: [
            ["Pierdo clientes porque tardo en responder", "Cómo automatizar WhatsApp en tu negocio"],
            ["No sé qué de la IA sirve y qué es ruido", "IA en el marketing: qué sí funciona"],
            ["Quiero un logo y estoy mirando herramientas de IA", "Las mejores IA para crear logos (y sus límites)"],
          ],
          nota: "El orden no es casual: automatizar la respuesta suele dar más resultado que cualquier otra cosa de esta lista.",
        },
      },
      {
        h2: "Automatiza el trámite, no la relación",
        parrafo:
          "La regla práctica es sencilla: automatiza lo repetitivo y previsible —confirmar que un mensaje llegó, recordar una cita, registrar un contacto, enviar una ficha— y deja para las personas lo que requiere criterio, como negociar, resolver un problema o cerrar. Cuando se invierte el orden y el robot atiende la conversación de venta, se nota, y el cliente se va.",
      },
      {
        h2: "Lo que la IA hace bien hoy en un negocio pequeño",
        parrafo:
          "Sin necesidad de un equipo técnico ni de grandes inversiones.",
        bullets: [
          { titulo: "Redactar borradores", texto: "primeras versiones de textos, descripciones y respuestas frecuentes. El resultado necesita revisión humana, pero ahorra el arranque en blanco." },
          { titulo: "Ordenar información", texto: "resumir conversaciones, clasificar consultas por tipo o extraer datos de mensajes sueltos." },
          { titulo: "Responder lo básico al instante", texto: "horarios, ubicación, disponibilidad. Gana tiempo mientras una persona llega a la conversación." },
          { titulo: "Producir variantes", texto: "versiones de un mismo anuncio para probar cuál funciona mejor, en minutos en vez de días." },
        ],
      },
      {
        h2: "El riesgo de automatizar mal",
        parrafo:
          "Una automatización mal puesta hace daño rápido: mensajes que llegan fuera de contexto, respuestas que no resuelven y una sensación de estar hablando con una pared. Antes de automatizar un paso conviene preguntarse si a ti te gustaría recibir eso. Y siempre debe haber una salida clara hacia una persona.",
      },
    ],
    faq: [
      {
        q: "¿La IA puede reemplazar a mi equipo de marketing?",
        a: "No hoy. Acelera tareas —redactar borradores, generar variantes, ordenar datos— pero no decide la estrategia ni conoce tu mercado ni asume responsabilidad por un error. Lo que sí hace es que un equipo pequeño rinda como uno más grande.",
      },
      {
        q: "¿Qué debería automatizar primero?",
        a: "La respuesta inmediata al primer contacto y el registro de cada consulta. Son las dos fugas más comunes y las más baratas de cerrar. Todo lo demás puede esperar.",
      },
      {
        q: "¿Un chatbot espanta clientes?",
        a: "Espanta si finge ser humano, si no resuelve o si no deja salida. Funciona bien cuando es honesto sobre lo que es, responde lo básico al instante y ofrece pasar con una persona en cuanto la conversación se complica.",
      },
      {
        q: "¿Necesito herramientas caras para automatizar?",
        a: "No para empezar. Las respuestas rápidas de WhatsApp Business, una hoja de cálculo bien organizada y un par de conexiones simples resuelven la mayoría de los problemas de un negocio pequeño.",
      },
    ]
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
    secciones: [
      {
        h2: "Qué encontrarás en esta sección",
        parrafo:
          "Artículos sobre cómo decide realmente la gente: qué la mueve a comprar, qué la frena y por qué lo que dice en una encuesta no siempre coincide con lo que hace en la tienda. Aplicado al mercado peruano, con ejemplos concretos y sin promesas de fórmulas mágicas.",
      },
      {
        h2: "Lo que la gente dice y lo que la gente hace",
        parrafo:
          "Es la primera lección de este campo y la más incómoda: preguntarle a alguien si compraría tu producto casi no predice nada. Las personas responden lo que suena razonable, no lo que harán. Por eso las preguntas útiles miran hacia atrás y no hacia adelante: qué compraste la última vez, cuánto pagaste, qué te hizo dudar. La memoria de lo hecho miente mucho menos que la intención declarada.",
      },
      {
        h2: "Decidimos rápido y justificamos después",
        parrafo:
          "La mayor parte de las decisiones de compra se toma con el sistema intuitivo del cerebro —rápido, emocional, basado en atajos— y luego se explica con argumentos racionales. No significa que la gente sea irracional: significa que el precio, la ficha técnica y la comparación llegan casi siempre después de que la decisión ya se inclinó por confianza, familiaridad o el temor a equivocarse.",
      },
      {
        h2: "Aplicarlo sin manipular",
        parrafo:
          "Todos estos principios se pueden usar para comunicar mejor algo verdadero o para empujar a alguien a una mala decisión. La diferencia importa más de lo que parece, y no solo por ética: manipular consigue una venta y pierde la recompra, las reseñas y la recomendación, que es donde está el negocio a largo plazo. La prueba es simple: si tu cliente supiera exactamente por qué le comunicaste así, ¿se sentiría bien atendido?",
      },
    ],
    faq: [
      {
        q: "¿Esto es lo mismo que el neuromarketing?",
        a: "Se solapan mucho. La psicología de mercado estudia el comportamiento de compra en general; el neuromarketing se apoya además en lo que se sabe del funcionamiento del cerebro y en mediciones de respuesta no consciente. En la práctica diaria de un negocio se usan juntas.",
      },
      {
        q: "¿Necesito un estudio caro para conocer a mi cliente?",
        a: "No para empezar. Hablar con diez clientes actuales, revisar qué te preguntan por WhatsApp y observar qué compran juntos ya te da más de lo que imaginas. Los estudios formales tienen sentido cuando la decisión que depende de ellos es grande.",
      },
      {
        q: "¿Funcionan igual estos principios en Perú?",
        a: "Los mecanismos son universales, las referencias culturales no. La recomendación de un conocido, por ejemplo, pesa especialmente en el mercado peruano. Conviene tomar el principio y validarlo con tu propio público antes de darlo por hecho.",
      },
      {
        q: "¿Sirve esto para vender a empresas y no solo a personas?",
        a: "Sí. En las empresas también deciden personas, y con una presión añadida: el miedo a equivocarse frente a su jefe. Por eso en ventas entre empresas pesan tanto las señales que reducen el riesgo percibido: casos, garantías, referencias.",
      },
    ]
  },
  {
    slug: "inmobiliario",
    nombre: "Inmobiliario",
    // Intención informativa por delante: la keyword comercial "marketing
    // inmobiliario en Ica" es de /marketing-inmobiliario, no de esta categoría.
    metaTitle: "Guías y Artículos de Marketing Inmobiliario | Suggestion",
    metaDescription:
      "Cómo se vende un proyecto hoy: captación de citas, drone y mensajes que mueven la decisión. Ideas y casos de marketing inmobiliario.",
    h1: "Marketing inmobiliario: ideas y casos",
    intro:
      "Cómo se vende un proyecto hoy: captación de citas, drone y mensajes que mueven la decisión.",
    secciones: [
      {
        h2: "Qué encontrarás en esta sección",
        parrafo:
          "Artículos sobre cómo se vende un proyecto inmobiliario hoy: preventa, captación de interesados, campañas para lotes y departamentos, y el seguimiento que lleva del formulario a la sala de ventas. Escrito desde la experiencia de operar campañas para proyectos reales.",
        tabla: {
          cabeceras: ["Si lo que te pasa es…", "Empieza por"],
          filas: [
            ["No sé qué anuncios funcionan en inmobiliario", "Marketing inmobiliario: ejemplos de campañas que sí venden lotes"],
            ["Tengo leads pero nadie llega a visitar", "Publicidad inmobiliaria en redes: qué funciona en Perú"],
            ["Voy a lanzar un proyecto en preventa", "Cómo vender un proyecto en preventa"],
          ],
          nota: "Si lo que buscas es que trabajemos tu proyecto y no leer sobre el tema, la página del servicio está en Marketing inmobiliario.",
        },
      },
      {
        h2: "El problema no suele ser la cantidad de interesados",
        parrafo:
          "Casi todos los proyectos generan consultas. Donde se cae la venta es más adelante: contactos que nadie calificó, visitas que se agendan y no se concretan, y seguimientos que se abandonan al segundo intento. Antes de subir el presupuesto de publicidad conviene medir cuántos de los interesados que ya tienes llegaron efectivamente a pisar el terreno.",
      },
      {
        h2: "Dos compradores, dos mensajes",
        parrafo:
          "En un mismo proyecto conviven el que compra para vivir y el que compra para invertir. Al primero le importan la ubicación, la seguridad, los tiempos de traslado y la cuota; al segundo, a cuánto entra hoy, a cuánto podría vender después y en cuánto tiempo. Hablarles con la misma pieza es la forma más rápida de no convencer a ninguno de los dos.",
      },
      {
        h2: "La preventa es donde está el margen",
        parrafo:
          "Es la etapa con el precio más bajo del proyecto y, por eso mismo, la que tiene el argumento más fuerte: quien entra ahora entra antes de que el precio suba con el avance de obra. Comunicar bien esa escalera de valorización, con fechas y etapas concretas, mueve más que cualquier adjetivo sobre las amenidades.",
      },
    ],
    faq: [
      {
        q: "¿Cuántos contactos hacen falta para vender un lote?",
        a: "Bastantes más que en productos de ticket bajo, porque la decisión es larga y suele involucrar a una familia. Lo relevante no es el promedio del sector sino tu propia proporción: mídela durante un par de meses y trabaja con ese número.",
      },
      {
        q: "¿Conviene poner el precio en los anuncios?",
        a: "Mostrar precio o cuota reduce la cantidad de consultas y sube su calidad, porque filtra a quien no puede pagarlo. Si tu equipo comercial está saturado atendiendo gente fuera de rango, ponerlo suele ser una mejora inmediata.",
      },
      {
        q: "¿Qué material necesito antes de lanzar la campaña?",
        a: "Como mínimo, imágenes del proyecto terminado, el precio de lanzamiento con su plan de pagos y un lugar donde recibir al interesado, sea sala de ventas o punto de atención. Lanzar sin eso es quemar presupuesto.",
      },
      {
        q: "¿Redes sociales o portales inmobiliarios?",
        a: "Hacen cosas distintas. El portal captura a quien ya está buscando comprar; las redes generan interés en quien no lo estaba buscando y permiten contar el proyecto. La mayoría de proyectos termina usando ambos, con presupuestos y expectativas separadas.",
      },
    ]
  },
  {
    slug: "automotriz",
    nombre: "Automotriz",
    // Ídem: la keyword comercial la defiende /marketing-automotriz.
    metaTitle: "Guías y Artículos de Marketing Automotriz | Suggestion",
    metaDescription:
      "Del clic al test drive: cómo llevar leads de autos hasta el cierre en piso. Ideas y casos de marketing automotriz.",
    h1: "Marketing automotriz: ideas y casos",
    intro: "Del clic al test drive: cómo llevar leads de autos hasta el cierre en piso.",
    secciones: [
      {
        h2: "Qué encontrarás en esta sección",
        parrafo:
          "Artículos sobre marketing para concesionarios y marcas de vehículos: cómo generar prospectos que sí llegan al piso, qué mensajes mueven la decisión de compra y cómo se arma un evento de venta. Escrito desde la experiencia de atender 19 marcas, de livianos a línea amarilla.",
      },
      {
        h2: "Un contacto que no llega al piso no vale nada",
        parrafo:
          "Es la particularidad del rubro: la venta se cierra presencialmente, casi siempre después de una prueba de manejo. Por eso optimizar hacia el clic barato o hacia el formulario es engañarse. La métrica que ordena todo el trabajo es el costo por prueba de manejo efectiva, y después el costo por unidad vendida.",
      },
      {
        h2: "Lo que realmente mueve la decisión",
        parrafo:
          "No es la ficha técnica. Es la cuota mensual, la cuota inicial, el bono vigente, la disponibilidad inmediata y qué pasa con el mantenimiento. Cuando el anuncio responde eso, el interesado llega con la decisión medio tomada y la conversación en el piso es mucho más corta.",
      },
      {
        h2: "Livianos, camiones y línea amarilla no se venden igual",
        parrafo:
          "El comprador de un vehículo liviano decide en semanas y muchas veces en familia. El de un camión o de maquinaria decide en meses, es una empresa y suele haber un comité de por medio, con criterios de rentabilidad, disponibilidad de repuestos y servicio postventa. Tratar ambos con la misma campaña y el mismo plazo de expectativa lleva a conclusiones equivocadas.",
      },
      {
        h2: "La posventa es la mina olvidada",
        parrafo:
          "Toda la atención se va a vender la unidad y casi nadie trabaja la base de clientes que ya compró: mantenimientos, repuestos, accesorios y la renovación años después. Es el público más barato de alcanzar porque ya te conoce, y el que sostiene el taller entre picos de venta.",
      },
    ],
    faq: [
      {
        q: "¿Cuántos prospectos necesito para vender un vehículo?",
        a: "Depende del segmento y del precio, y varía mucho entre un liviano y una unidad de trabajo. Lo importante es medir tu propia proporción a lo largo de un par de meses en lugar de guiarte por promedios ajenos.",
      },
      {
        q: "¿Los eventos en concesionario venden o solo llenan de gente?",
        a: "Venden si hay convocatoria segmentada previa, una oferta con fecha límite y un equipo preparado para cerrar ese mismo día. Sin esas tres cosas se convierten en una jornada concurrida sin resultado. En dos eventos que operamos se vendieron 8 vehículos: 3 en uno y 5 en el otro.",
      },
      {
        q: "¿Conviene mostrar el precio o la cuota en el anuncio?",
        a: "La cuota suele funcionar mejor porque es la cifra con la que el comprador realmente decide si puede permitírselo. Eso sí, indica la condición: si el financiamiento exige una inicial determinada, decirlo filtra a quien no califica y ahorra llamadas.",
      },
      {
        q: "¿Sirve el marketing digital para vender maquinaria pesada?",
        a: "Sí, pero con otro objetivo. Aquí no buscas una venta inmediata sino entrar en la lista corta de proveedores de una empresa. El trabajo es de presencia, credibilidad y contenido técnico sostenido, con un ciclo de decisión de meses.",
      },
    ]
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
    secciones: [
      {
        h2: "Qué encontrarás en esta sección",
        parrafo:
          "Artículos sobre marketing aplicado a rubros concretos: turismo y hotelería, salud, restaurantes, agroexportación y bodegas de pisco y vino. La lógica de fondo es la misma en todos, pero lo que funciona en cada uno cambia bastante, y ahí está la diferencia entre una campaña que rinde y una genérica.",
        tabla: {
          cabeceras: ["Tu negocio", "Empieza por"],
          filas: [
            ["Consultorio o clínica", "Cómo conseguir más pacientes para tu clínica o consultorio"],
            ["Restaurante", "Estrategias de marketing para restaurantes que llenan mesas"],
            ["Bodega de pisco o vino", "Cómo vender pisco y vino por internet"],
            ["Agroexportadora", "Marketing para agroexportadoras: cómo abrir mercados"],
          ],
          nota: "Aunque tu rubro no esté en la lista, el artículo del sector más parecido suele servir: lo que cambia es el calendario y el canal, no la lógica.",
        },
      },
      {
        h2: "Por qué el mismo método da resultados distintos",
        parrafo:
          "Un hotel compite contra la estacionalidad; una clínica, contra la desconfianza; una agroexportadora, contra la distancia y el idioma de su comprador. Las herramientas se parecen —publicidad, web, contenido, seguimiento— pero el mensaje, el canal y hasta la definición de éxito son diferentes. Por eso las recetas universales de marketing rinden tan poco en la práctica.",
      },
      {
        h2: "Lo que casi todos los rubros comparten",
        parrafo:
          "Por muy distinto que sea el negocio, estos tres puntos aparecen una y otra vez.",
        bullets: [
          { titulo: "La velocidad de respuesta", texto: "quien contesta primero suele quedarse con el cliente, en cualquier rubro." },
          { titulo: "La prueba", texto: "casos, reseñas y material real convencen más que cualquier adjetivo sobre uno mismo." },
          { titulo: "El seguimiento", texto: "la mayoría de ventas no se cierra en el primer contacto, y casi nadie llega al tercero." },
        ],
      },
      {
        h2: "La estacionalidad se trabaja, no se sufre",
        parrafo:
          "Turismo, gastronomía y agro viven de temporadas, y el error clásico es invertir solo cuando la demanda ya está alta. Los meses flojos no se arreglan bajando el precio: se trabajan con una oferta distinta, dirigida a otro público —normalmente más cercano y de escapada corta— y preparada con anticipación.",
      },
    ],
    faq: [
      {
        q: "¿Por qué el marketing cambia según el sector?",
        a: "Porque cambia cómo decide el cliente. El plazo de decisión, quién decide, qué genera confianza y dónde busca son distintos en cada rubro. Las herramientas se parecen; la estrategia no debería.",
      },
      {
        q: "¿Y si mi rubro no aparece en esta sección?",
        a: "Los principios de fondo —entender a quién le vendes, medir la cadena completa y cerrar las fugas del seguimiento— se aplican a cualquier negocio. Los artículos de las otras secciones cubren esa parte común.",
      },
      {
        q: "¿Cómo lleno mi negocio en temporada baja?",
        a: "Con una propuesta distinta a la de temporada alta y dirigida a otro público. En alta el mensaje apunta a quien ya decidió venir; en baja hay que crear el motivo del viaje o la visita, y anticiparse con semanas, no con días.",
      },
      {
        q: "¿Sirve el marketing digital para negocios que venden a otras empresas?",
        a: "Sí, con otro enfoque. No busca una venta inmediata sino credibilidad y estar presente cuando la empresa evalúa proveedores: web sólida, contenido técnico y material institucional serio.",
      },
    ]
  },
  {
    slug: "imprenta-btl",
    nombre: "Imprenta, BTL y publicidad física",
    metaTitle: "Imprenta y Publicidad Física: Guías y Precios | Suggestion",
    metaDescription:
      "Gigantografías, letreros, tarjetas, polos y material POP: medidas, materiales, cantidades mínimas y rangos de precio del mercado peruano. Para cotizar sabiendo.",
    h1: "Imprenta y publicidad física: lo que conviene saber antes de pedir",
    intro:
      "Medidas, materiales, cantidades mínimas y cuánto cuesta cada cosa en el mercado peruano. Para que llegues a cotizar sabiendo lo que pides.",
    secciones: [
      {
        h2: "Por qué publicamos precios de referencia",
        parrafo:
          "Pedir una gigantografía o un millar de tarjetas sin tener idea de lo que cuestan deja al cliente en desventaja, y el que vende lo sabe. Los rangos que aparecen en estos artículos son del mercado peruano, con su fecha de consulta y su fuente al lado: el extremo bajo sale de fichas de producto con precio listado y el alto, de referencias publicadas por proveedores del rubro. No son nuestras tarifas ni una cotización.",
        nota: {
          tipo: "aviso",
          titulo: "Los precios de imprenta caducan",
          texto: "Se mueven con el dólar y con el papel. Cada artículo lleva la fecha en que se consultó el dato; si han pasado muchos meses desde esa fecha, tómalo como orden de magnitud y pide cotización.",
        },
      },
      {
        h2: "Lo que casi nadie te dice antes de cotizar",
        parrafo:
          "Dos datos cambian por completo si una pieza es viable para tu negocio, y rara vez aparecen en la publicidad del proveedor.",
        bullets: [
          { titulo: "La cantidad mínima", texto: "muchos productos promocionales no se fabrican por debajo de 50 o 100 unidades. Enamorarte de una pieza que no puedes pedir en tu volumen es perder una semana." },
          { titulo: "El costo de arranque", texto: "bordados, troqueles y matrices se pagan una sola vez pero se pagan. En tirajes cortos pesan más que el producto." },
          { titulo: "El ancho del material", texto: "en gran formato, el rollo manda. Una medida que desperdicia medio rollo se paga igual." },
          { titulo: "La instalación", texto: "en letreros y paneles puede ser una parte importante del total y casi nunca viene incluida en el precio que te muestran primero." },
        ],
      },
    ],
    faq: [
      {
        q: "¿Los precios que publican son los de Suggestion?",
        a: "No. Son rangos del mercado peruano, con su fuente y su fecha, para que llegues a cotizar con una referencia. Nuestras tarifas se ven en las páginas de servicio o pidiendo una cotización.",
      },
      {
        q: "¿Por qué el mismo producto varía tanto de precio?",
        a: "Por el material, el acabado y sobre todo la cantidad. En imprenta casi todo el costo está en preparar la máquina: por eso el segundo millar siempre sale mucho más barato que el primero, y pedir de a pocos es la forma más cara de comprar.",
      },
      {
        q: "¿Conviene imprimir en Lima o en provincia?",
        a: "Depende del volumen y del plazo. En tirajes grandes, Lima suele tener mejor precio por unidad; cuando se suma el flete, el plazo y la posibilidad de revisar una prueba antes de imprimir, el proveedor local gana en casi todo lo demás.",
      },
    ]
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "como-crear-un-logo",
    categoria: "marca",
    title: "Cómo Crear un Logo Paso a Paso | Suggestion",
    description:
      "Cómo crear un logo que funcione: el proceso paso a paso, qué hace bueno a un logo, los archivos y versiones que debes exigir y cómo evaluarlo.",
    h1: "Cómo crear un logo paso a paso",
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
      {
        h2: "Qué hace bueno a un logo (no es que sea bonito)",
        parrafo:
          "«Bonito» es una opinión y cambia cada temporada. Un logo se juzga por si funciona en las condiciones reales en las que va a vivir: bordado en un polo, impreso a una tinta en una factura, reducido a 16 píxeles en la pestaña del navegador, visto de lejos en una gigantografía. La mayoría de logos que hay que rehacer al año no eran feos: eran imposibles de usar.",
        bullets: [
          { titulo: "Legible en pequeño", texto: "si a 16 px se convierte en una mancha, no sirve como ícono, y el ícono es donde más veces lo va a ver tu cliente." },
          { titulo: "Funciona en una sola tinta", texto: "prueba a ponerlo todo negro. Si se cae, dependía del color para leerse y va a fallar en sellos, bordados y grabados." },
          { titulo: "Tiene aire alrededor", texto: "un área de respeto definida evita que acabe pegado a un texto o al borde de una pieza." },
          { titulo: "No depende de un degradado ni de una sombra", texto: "los efectos se pierden en producción física. El logo tiene que aguantar plano." },
          { titulo: "Es distinto al del vecino", texto: "si cambiando el nombre podría ser de otro negocio del rubro, no te está diferenciando." },
        ],
      },
      {
        h2: "El proceso, en orden",
        parrafo:
          "Un logo no se empieza dibujando. Se empieza decidiendo qué tiene que comunicar y a quién, porque eso es lo único que permite elegir entre dos propuestas sin caer en «me gusta más el azul».",
        pasos: [
          { titulo: "Define qué debe transmitir y a quién", texto: "tres adjetivos, el cliente al que le hablas y con quién te comparan. Sin esto, aprobar un logo es cuestión de gusto personal." },
          { titulo: "Mira a la competencia antes de dibujar", texto: "no para copiar, para saber qué está ocupado. Si en tu rubro todos usan verde y una hoja, ahí no hay diferenciación posible." },
          { titulo: "Explora en blanco y negro", texto: "sin color, la forma tiene que sostenerse sola. El color se decide después y se equivoca menos." },
          { titulo: "Reduce a dos o tres direcciones", texto: "presentar veinte opciones no es generosidad, es no haber decidido. Pocas propuestas bien argumentadas valen más." },
          { titulo: "Pruébalo donde va a vivir", texto: "en una tarjeta, en el ícono de WhatsApp, en un polo, en un banner. Si sobrevive a las cuatro, está listo." },
          { titulo: "Cierra las versiones y los archivos", texto: "principal, horizontal, ícono, en negativo. Y los formatos, que es donde más proyectos quedan cojos." },
          { titulo: "Escribe las reglas de uso", texto: "colores exactos, tipografías, área de respeto y qué no se puede hacer. Sin esto, cada proveedor lo aplicará a su manera." },
        ],
      },
      {
        h2: "Los archivos que tienes que exigir",
        parrafo:
          "Aquí es donde se nota si un logo está terminado o solo entregado. Si te dan una sola imagen y nada más, tendrás que pagar dos veces la primera vez que necesites un banner grande o un bordado.",
        tabla: {
          cabeceras: ["Formato", "Para qué sirve", "¿Imprescindible?"],
          filas: [
            ["SVG / AI / EPS", "Vectorial: escala a cualquier tamaño sin perder nitidez. Es el original", "Sí, es el archivo maestro"],
            ["PDF vectorial", "Lo que pide cualquier imprenta", "Sí"],
            ["PNG con fondo transparente", "Web, presentaciones, documentos", "Sí, en varios tamaños"],
            ["JPG", "Usos rápidos donde no hace falta transparencia", "Opcional"],
            ["Versión en negativo", "Para fondos oscuros o fotos", "Sí"],
            ["Ícono cuadrado", "Perfiles, favicon, apps", "Sí"],
          ],
          nota: "La diferencia clave es vectorial contra mapa de bits: el vectorial se agranda sin pixelarse, el mapa de bits no. Sin el vectorial no tienes el original, tienes una foto de él.",
        },
        nota: {
          tipo: "aviso",
          titulo: "Pregunta esto antes de pagar",
          texto: "¿Me entregan el archivo vectorial editable y los derechos de uso por escrito? Si la respuesta es que solo entregan imágenes, o que el vectorial se paga aparte, estás comprando una foto de tu logo y no tu logo. Es el problema más común con los paquetes muy baratos.",
        },
      },
    ],
    faq: [
      {
        q: "¿Cuánto tiempo toma crear un logo?",
        a: "La parte de dibujar es la más corta. Lo que marca el plazo es decidir qué debe transmitir y a quién, y las rondas de revisión. Un proceso ordenado con el brief claro desde el principio avanza mucho más rápido que uno que empieza mostrando propuestas.",
      },
      {
        q: "¿Qué archivos me deben entregar?",
        a: "Como mínimo el vectorial editable —SVG, AI o EPS—, un PDF vectorial para imprenta, PNG con fondo transparente en varios tamaños, la versión para fondo oscuro y el ícono cuadrado. Si solo te dan imágenes, no tienes el original.",
      },
      {
        q: "¿Cuántas propuestas es normal recibir?",
        a: "Pocas y bien argumentadas. Veinte opciones suele significar que nadie decidió nada y traslada la decisión a tu gusto personal. Dos o tres rumbos, cada uno con su razón de ser, permiten elegir con criterio.",
      },
      {
        q: "¿Mi logo tiene que decir a qué me dedico?",
        a: "No necesariamente, y la mayoría de marcas grandes no lo hace. Lo literal ayuda al principio, cuando nadie te conoce, pero encierra al negocio si algún día amplías lo que vendes. Es una decisión estratégica, no estética.",
      },
      {
        q: "¿Cada cuánto se debe cambiar un logo?",
        a: "Idealmente casi nunca. Un logo bien resuelto aguanta años y solo pide ajustes menores. Cambiarlo con frecuencia destruye el reconocimiento que tanto cuesta construir; si te dan ganas de cambiarlo cada temporada, el problema suele estar en el posicionamiento, no en el dibujo.",
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
      "Crear un logo con IA: qué hace bien, por qué INDECOPI rechazó registrar obras puramente generadas por IA y el problema del formato. La versión honesta.",
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
      {
        h2: "Lo que dijo INDECOPI sobre las obras hechas con IA",
        parrafo:
          "Esta es la parte que casi nadie menciona y que en Perú ya tiene criterio establecido. En septiembre de 2024, la Dirección de Derecho de Autor del INDECOPI emitió dos resoluciones rechazando el registro de obras puramente generadas por inteligencia artificial. El razonamiento: la autoría exige una persona natural y una originalidad humana significativa, y escribir un prompt no alcanza para ser autor. La puerta no está cerrada del todo —una obra con intervención creativa humana significativa sí puede registrarse—, pero cada caso se evalúa por separado.",
        dato: {
          cifra: "2",
          texto: "resoluciones del INDECOPI, en septiembre de 2024, rechazando el registro por derecho de autor de obras puramente generadas por IA. El criterio: un prompt simple no constituye autoría.",
          fuente: "Dirección de Derecho de Autor del INDECOPI",
        },
        nota: {
          tipo: "aviso",
          titulo: "Derecho de autor y marca no son lo mismo",
          texto: "Que una obra no se pueda registrar por derecho de autor no significa que el logo no se pueda registrar como MARCA, que es otro trámite, con otros requisitos —lo que se evalúa ahí es que sea distintivo— y una vigencia de 10 años renovables. Son dos protecciones distintas y conviene no confundirlas. Esto es información general, no asesoría legal: para un caso concreto, sobre todo si es híbrido humano-IA, consulta a un especialista en propiedad intelectual.",
        },
      },
      {
        h2: "El problema del formato que descubres tarde",
        parrafo:
          "Hay un detalle técnico que arruina más proyectos que el debate legal, y aparece el día que necesitas imprimir. Los generadores de imagen con IA entregan mapas de bits —PNG o JPG—, es decir, una rejilla de píxeles. Un logo necesita ser vectorial: una descripción matemática de las formas que se puede agrandar a cualquier tamaño sin perder nitidez. Cuando llevas un PNG a una imprenta para una gigantografía, el resultado sale borroso, y no hay ajuste que lo salve. Convertirlo a vector después no es un botón: es redibujarlo, y a menudo cuesta más que haberlo diseñado bien desde el principio.",
        tabla: {
          cabeceras: ["", "Lo que entrega la IA", "Lo que necesita un logo"],
          filas: [
            ["Tipo de archivo", "Mapa de bits (PNG, JPG)", "Vectorial (SVG, AI, EPS)"],
            ["Al agrandarlo", "Se pixela", "Nítido a cualquier tamaño"],
            ["Para imprenta y gigantografía", "No sirve", "Es lo que piden"],
            ["Editar un color o una forma", "Prácticamente no se puede", "Se edita en minutos"],
            ["Versiones y variantes", "Hay que generar de nuevo y no coinciden", "Se derivan del original"],
          ],
        },
      },
      {
        h2: "La forma sensata de usarla",
        parrafo:
          "Nada de lo anterior significa que la IA no sirva; significa que sirve para una parte del trabajo y no para otra. Usada en su sitio, ahorra semanas de exploración. Usada como entrega final, deja un archivo que no se puede imprimir, no se puede editar y cuya propiedad es discutible.",
        pasos: [
          { titulo: "Explora con IA", texto: "genera decenas de direcciones visuales en minutos. Es lo mejor que hace y es genuinamente útil." },
          { titulo: "Elige dos o tres rumbos, no un archivo", texto: "lo que te llevas de esta etapa es una dirección estética, no el logo terminado." },
          { titulo: "Redibuja en vectorial con criterio", texto: "aquí entra el trabajo humano: simplificar, ajustar proporciones, resolver la versión en negativo y el ícono." },
          { titulo: "Prueba y documenta", texto: "aplicaciones reales, versiones, reglas de uso. Es lo que convierte una imagen en una identidad." },
          { titulo: "Registra la marca", texto: "el trámite de marca protege el uso comercial en tu categoría, y es independiente del debate sobre la autoría del archivo." },
        ],
      },
    ],
    faq: [
      {
        q: "¿Puedo registrar en Perú un logo hecho con IA?",
        a: "Hay que separar dos cosas. Por derecho de autor, el INDECOPI rechazó en 2024 registrar obras puramente generadas por IA: exige una persona natural y originalidad humana significativa, y un prompt simple no basta. Como marca, en cambio, el trámite es otro y lo que se evalúa es que sea distintiva. Es información general: para tu caso concreto consulta a un especialista en propiedad intelectual.",
      },
      {
        q: "¿Por qué mi logo hecho con IA sale borroso al imprimirlo?",
        a: "Porque la IA entrega mapas de bits —PNG o JPG—, que son rejillas de píxeles, y un logo necesita ser vectorial para escalar sin perder nitidez. Al agrandarlo para una gigantografía, los píxeles se estiran. No hay ajuste que lo arregle: hay que redibujarlo en vectorial.",
      },
      {
        q: "¿Se puede convertir un logo de IA a vector?",
        a: "Existen vectorizadores automáticos y funcionan razonablemente con trazos simples. Con dibujos complejos, degradados o texturas el resultado queda sucio y con cientos de puntos imposibles de editar. En la práctica, lo que se hace es redibujarlo tomando el archivo de IA como referencia.",
      },
      {
        q: "¿Es legal usar comercialmente un logo generado con IA?",
        a: "Usarlo y que puedas protegerlo son cosas distintas. Cada herramienta tiene sus propios términos sobre el uso comercial de lo que genera —conviene leerlos—, y aparte está la cuestión de si puedes impedir que otro use algo parecido, que es donde entra el registro de marca.",
      },
      {
        q: "¿Entonces la IA no sirve para nada en branding?",
        a: "Sirve, y mucho, en la etapa de exploración: en minutos recorres direcciones visuales que antes tomaban días. El error no es usarla, es confundir una imagen generada con una identidad terminada.",
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
      "Qué es un rebranding, cuándo conviene y cuándo NO, la diferencia entre refresh y cambio total, y cómo hacerlo sin perder el posicionamiento que ya tienes.",
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
      {
        h2: "Refresh o cambio total: no cuestan lo mismo",
        parrafo:
          "La decisión más cara del proceso se toma al principio y casi siempre por intuición. Un refresh actualiza lo visual manteniendo el reconocimiento; un cambio total rompe con lo anterior. La regla práctica: cuanto más te conozcan tus clientes, más caro sale romper. Si llevas años en el mercado, tirar el reconocimiento acumulado tiene que estar justificado por un cambio real en el negocio, no por cansancio interno con el logo.",
        tabla: {
          cabeceras: ["", "Refresh", "Rebranding total"],
          filas: [
            ["Qué cambia", "Colores, tipografía, aplicaciones", "Nombre, posicionamiento, identidad completa"],
            ["Qué conserva", "El reconocimiento acumulado", "Poco o nada"],
            ["Cuándo tiene sentido", "La marca envejeció, pero sigue siendo la correcta", "El negocio ya no es el mismo"],
            ["Riesgo principal", "Quedarse corto y tener que repetirlo", "Que el cliente no te reconozca"],
            ["Esfuerzo de comunicación", "Bajo: se puede hacer sin anunciarlo", "Alto: hay que explicarlo y sostenerlo meses"],
          ],
        },
      },
      {
        h2: "Cómo hacerlo sin perder lo que ya tienes",
        parrafo:
          "Un rebranding mal ejecutado destruye en un fin de semana posicionamiento que costó años. Lo que se rompe no es el diseño: son las conexiones —enlaces, fichas, reseñas, recuerdo del cliente—. Estos pasos evitan la mayor parte del daño y ninguno es caro; lo caro es descubrirlos después.",
        pasos: [
          { titulo: "Inventaría dónde apareces", texto: "web, perfil de empresa, redes, directorios, facturas, rotulación, vehículos, uniformes. La lista siempre es más larga de lo que uno cree y es la base del calendario." },
          { titulo: "Si cambia el dominio, redirige todo", texto: "cada URL antigua necesita un redirect 301 a su equivalente. Sin eso, el posicionamiento y los enlaces que apuntaban a ti se pierden, y ese es el daño más difícil de revertir." },
          { titulo: "Actualiza el perfil de empresa antes que las redes", texto: "es donde la gente comprueba que sigues existiendo. Cambiar el nombre ahí sin avisar genera más confusión que en cualquier otro sitio." },
          { titulo: "Convive un tiempo con las dos identidades", texto: "un «antes conocidos como…» durante unos meses cuesta poco y evita que un cliente de años crea que cerraste." },
          { titulo: "Cambia lo físico por lotes, no de golpe", texto: "rotulación, packaging y uniformes se renuevan según se agotan o según prioridad de visibilidad. Hacerlo todo a la vez multiplica el costo sin multiplicar el efecto." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "El error que más caro sale",
          texto: "Cambiar el dominio o las URLs sin redirecciones. Google trata las direcciones nuevas como un sitio nuevo, sin el historial del anterior: puedes perder de golpe años de posicionamiento y tardar meses en recuperarlo. Es reversible solo si actúas rápido, y evitable por completo si lo planificas antes.",
        },
      },
      {
        h2: "Cuándo NO hacerlo",
        parrafo:
          "Casi tan importante como saber cuándo toca es reconocer cuándo un rebranding es una distracción cara. En estos cuatro casos el problema está en otro sitio y cambiar la identidad solo lo tapa unos meses.",
        bullets: [
          { titulo: "Porque a ti ya te aburre", texto: "tú ves tu marca cien veces al día; tu cliente, unas pocas al año. El cansancio interno llega mucho antes que el desgaste real." },
          { titulo: "Para tapar un problema de producto o servicio", texto: "si la gente se queja de los plazos o de la atención, una identidad nueva solo consigue que la queja se vea más moderna." },
          { titulo: "Porque un competidor cambió", texto: "reaccionar a la marca ajena es la forma más rápida de parecerse a ella." },
          { titulo: "Sin presupuesto para sostener el cambio", texto: "un rebranding a medias —logo nuevo en la web, el viejo en la fachada y en las facturas— comunica desorden, que es peor que verse anticuado." },
        ],
      },
    ],
    faq: [
      {
        q: "¿Cada cuánto se hace un rebranding?",
        a: "No hay calendario. Se hace cuando el negocio cambió o cuando la marca dejó de conectar con el cliente al que quieres llegar, no por antigüedad. Muchas marcas fuertes llevan décadas con ajustes menores y ningún cambio de fondo.",
      },
      {
        q: "¿Un rebranding afecta mi posicionamiento en Google?",
        a: "Si cambias el dominio o las URLs, mucho, y por eso las redirecciones 301 no son opcionales. Si solo cambias lo visual y el nombre se mantiene, el impacto es mínimo. La parte técnica es la que hay que planificar antes de anunciar nada.",
      },
      {
        q: "¿Puedo cambiar solo el logo?",
        a: "Puedes, y a veces es lo correcto: si el posicionamiento sigue siendo válido y solo la ejecución envejeció, un refresh visual resuelve. Pero si lo que falla es qué representas, el logo nuevo no va a arreglarlo.",
      },
      {
        q: "¿Cómo le explico el cambio a mis clientes?",
        a: "Contando el porqué, no el resultado. A nadie le interesa que estrenaste tipografía; sí le interesa saber que ampliaste servicios o cambiaste de enfoque. El cambio visual es la consecuencia de esa noticia, no la noticia.",
      },
      {
        q: "¿Cuánto dura la transición?",
        a: "Lo digital cambia en días; lo físico y el recuerdo del cliente, meses. Conviene planificar una convivencia de varios meses entre la identidad antigua y la nueva, sobre todo si tu marca tiene años de reconocimiento local.",
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
      "El marketing digital es usar canales digitales —buscador, redes, web, WhatsApp, correo— para atraer clientes, convertirlos y fidelizarlos. Suena simple, pero la mayoría lo hace mal por una razón: mide likes en vez de ventas. Esta es la versión sin humo, con lo que cuesta empezar en Perú y lo que puedes esperar de verdad.",
    date: "2026-02-04",
    secciones: [
      {
        h2: "¿Qué es el marketing digital, en una frase?",
        parrafo:
          "El marketing digital es usar canales digitales —buscador, redes, web, WhatsApp, correo— para que la persona correcta te encuentre, te deje un dato y termine comprando. No es una tecnología ni una moda: es el trabajo comercial de siempre, hecho donde tu cliente ya pasa el día. La diferencia con un volante o un panel es que aquí cada paso deja rastro: sabes cuántos vieron el anuncio, cuántos escribieron y cuántos compraron. Ese rastro lo vuelve útil, y también incómodo para quien vende humo.",
      },
      {
        h2: "Qué NO es marketing digital (aunque te lo vendan así)",
        parrafo:
          "Postear tres veces por semana no es una estrategia. Es producción de contenido: una pieza del juego, no el juego.",
        bullets: [
          { titulo: "No es solo redes", texto: "Instagram y TikTok son un canal más. Si toda tu venta depende de un algoritmo ajeno, tienes un riesgo, no una estrategia." },
          { titulo: "No es suerte", texto: "Una campaña que funciona se puede explicar: a quién le habló y qué le ofreció." },
          { titulo: "No arregla un mal producto", texto: "La pauta acelera lo que ya funciona. Si tu precio o tu atención fallan, solo logra que más gente se entere." },
        ],
      },
      {
        h2: "Cómo funciona: atraer, convertir, fidelizar",
        parrafo:
          "Todo lo que vende en digital sigue tres etapas. Cuando una falla, se cae la cadena entera: por eso no sirve tener muchos seguidores si nadie agenda, ni buenos vendedores si no les llega nadie. Antes de invertir más, revisa cuál de las tres está rota. Casi siempre es la segunda.",
        bullets: [
          { titulo: "Atraer", texto: "que la persona correcta te descubra (pauta, buscador, contenido, redes)." },
          { titulo: "Convertir", texto: "que esa visita se vuelva contacto o venta (landing o página de aterrizaje, oferta, seguimiento)." },
          { titulo: "Fidelizar", texto: "que vuelva a comprar y te recomiende (correo, base de clientes, comunidad)." },
        ],
      },
      {
        h2: "¿Para qué sirve cada canal?",
        parrafo:
          "Cada canal hace un trabajo distinto. Tratarlos a todos igual es el error más caro.",
        bullets: [
          { titulo: "Buscador: SEO y Google Ads", texto: "el SEO te posiciona sin pagar por clic; Google Ads compra el lugar. Ambos capturan a quien ya busca lo que vendes." },
          { titulo: "Redes y pauta en Meta", texto: "despiertan interés en quien no te buscaba. Llenan el embudo (el recorrido desde que te descubre hasta que compra)." },
          { titulo: "WhatsApp", texto: "en Perú es donde se cierra. Un lead (contacto interesado) que escribe y no recibe respuesta en minutos se enfría." },
          { titulo: "Correo", texto: "el canal más barato para la segunda venta y para recuperar cotizaciones a medias." },
          { titulo: "Tu web", texto: "la única propiedad que sí controlas. El resto es alquilado." },
        ],
      },
      {
        h2: "Contenido o publicidad pagada: ¿por dónde empiezo?",
        parrafo:
          "No compiten, se turnan. El contenido —artículos, videos, fichas de producto— acumula: lo que publicas hoy puede seguir trayendo gente en un año, pero tarda meses en despegar. La pauta se enciende y se apaga: el día que dejas de pagar, deja de llegar. Si necesitas ventas este mes, empieza por pauta. Si además quieres dejar de depender de ella, construye contenido en paralelo desde el primer día.",
      },
      {
        h2: "¿Cómo se mide de verdad el marketing digital?",
        parrafo:
          "Alcance, likes y seguidores describen el ruido, no el negocio. Los números que deciden si sigues invirtiendo se leen en cadena. Si no puedes seguir un contacto desde el anuncio hasta la boleta, estás adivinando.",
        bullets: [
          { titulo: "Leads", texto: "contactos con nombre y teléfono, no visitas." },
          { titulo: "Citas o visitas", texto: "cuántos de esos leads llegaron a la sala, al local o a la llamada." },
          { titulo: "Cierres", texto: "cuántos compraron. Es el único número que va al banco." },
          { titulo: "CPL y retorno", texto: "el CPL es lo que costó cada contacto; el retorno, cuántos soles vendiste por cada sol invertido." },
        ],
      },
      {
        h2: "¿Cuánto cuesta empezar en Perú?",
        parrafo:
          "Son dos bolsillos distintos y conviene no mezclarlos: lo que le pagas a quien ejecuta el trabajo y lo que le pagas a la plataforma. Lo segundo es la pauta, y se va completo en anuncios. La cifra correcta no sale de una tabla: sale de tu margen por venta y de cuántos clientes nuevos puedes atender sin que se te caiga la calidad. Empieza por ahí y hacia atrás. Como referencia de lo que rinde una inversión modesta bien dirigida: una inmobiliaria de Ica llegó a S/350K en ventas con S/3,000 en Meta Ads, y una marca de consumo cerró 15 contratos con S/2,500. No es promesa —cada mercado es distinto—, pero sirve para dimensionar.",
      },
      {
        h2: "Qué esperar en los primeros 90 días",
        parrafo:
          "Asumiendo que tu producto y tu atención ya funcionan, esto es lo razonable. El posicionamiento en buscadores va en otra escala: de 6 a 12 meses.",
        sub: [
          { h3: "Mes 1: puesta en marcha", texto: "Se instala la medición, se arma la oferta y salen las primeras campañas. Llegan leads, pero caros: la plataforma recién aprende a quién mostrarte." },
          { h3: "Mes 2: ajuste", texto: "Ya sabes qué anuncio y qué público responden. Se corta lo que no rinde y se concentra el presupuesto: el CPL baja y aparecen los primeros cierres." },
          { h3: "Mes 3: lectura real", texto: "Recién aquí hay datos para saber si el canal te funciona. Con tres meses decides con criterio; con tres semanas, no." },
        ],
      },
      {
        h2: "Los errores que más plata le cuestan a una pyme",
        bullets: [
          { titulo: "Mandar el tráfico al perfil de Instagram", texto: "sin un lugar donde dejar el dato, pagas por visitas que se evaporan." },
          { titulo: "Responder tarde", texto: "buena parte del resultado se decide en la velocidad de respuesta, no en el anuncio." },
          { titulo: "Cambiar de rumbo cada dos semanas", texto: "apagar una campaña a los 10 días es pagar el aprendizaje y no cobrarlo." },
          { titulo: "No medir el cierre", texto: "sin saber cuántos leads compraron, optimizas por el lead más barato, que casi nunca es el mejor." },
          { titulo: "Competir solo por precio", texto: "si tu único argumento es el descuento, atraes a quien se irá con el siguiente." },
        ],
      },
      {
        h2: "¿Lo haces tú o contratas una agencia?",
        parrafo:
          "Hacerlo tú tiene sentido si tienes tiempo real —no “los ratos libres”—, ticket bajo y un solo canal. Tu primer mes de pauta será el curso pagado. Contratar tiene sentido cuando equivocarte cuesta más que el honorario: tickets altos, varios canales o un equipo comercial esperando leads que no llegan. Lo que compras no es saber usar el administrador de anuncios; es criterio para decidir dónde no gastar. Si alguien te promete el primer puesto en Google o retorno garantizado, ya sabes qué te está vendiendo.",
      },
    ],
    faq: [
      {
        q: "¿Qué es el marketing digital en palabras simples?",
        a: "Es vender por internet de forma ordenada: que te encuentren en el buscador o en redes, que te dejen un dato y que alguien haga seguimiento hasta la venta. Lo digital es el canal; el objetivo comercial es el de siempre.",
      },
      {
        q: "¿Cuáles son los tipos de marketing digital?",
        a: "Posicionamiento en buscadores (SEO), publicidad pagada en Google y Meta, redes sociales, contenidos, correo y WhatsApp. Casi ningún negocio necesita todos: se eligen dos o tres según dónde está tu cliente y cuánto cuesta tu producto.",
      },
      {
        q: "¿Sirve para un negocio pequeño en Ica?",
        a: "Sí. Con presupuestos moderados hemos visto resultados concretos en agro, inmobiliaria y hotelería desde Ica. Lo que no perdona es la falta de seguimiento: si nadie contesta el WhatsApp, no hay campaña que lo salve.",
      },
      {
        q: "¿En cuánto tiempo veo resultados?",
        a: "Los primeros leads pueden llegar en la primera semana de pauta. Saber si el canal es rentable toma unos 90 días: hay que ver cuántos de esos contactos cerraron. El SEO es más lento, de 6 a 12 meses.",
      },
      {
        q: "¿Necesito página web o me basta con redes?",
        a: "Puedes empezar con redes, pero vas a topar techo. Sin página propia no mides bien, no apareces en el buscador y dependes de una cuenta ajena. Una landing simple resuelve lo básico.",
      },
      {
        q: "¿Cuál es la diferencia entre marketing digital y publicidad digital?",
        a: "La publicidad digital es una parte del todo: el tramo que se paga por aparecer. El marketing digital suma la estrategia, el contenido, la web, la medición y el seguimiento posventa.",
      },
    ],
    cierre: "Ya sabes qué es el marketing digital; falta saber qué aplica en tu caso. Esa conversación la tenemos gratis: revisamos tus números y te decimos qué canal te conviene primero —y qué todavía no vale la pena pagar.",
    moneyPage: { label: "Agenda tu diagnóstico gratuito", href: "/servicios/marketing-digital" },
    relacionados: ["cuanto-invertir-en-ads-peru", "que-es-un-lead"],
  },
  {
    slug: "cuanto-invertir-en-ads-peru",
    categoria: "performance",
    title: "Cuánto Invertir en Google y Meta Ads en Perú | Suggestion",
    description:
      "Cómo calcular tu presupuesto de Google Ads y Meta Ads en Perú a partir de tu meta de ventas, no de una cifra mágica: el método, la tabla y los errores. 2026.",
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
      {
        h2: "El método, paso a paso",
        parrafo:
          "Este es el cálculo completo. Se hace al revés, desde la meta hacia el monto, y funciona igual para un consultorio que para un proyecto inmobiliario. Si te falta algún dato, el propio ejercicio te dice cuál tienes que empezar a medir.",
        pasos: [
          { titulo: "Define la meta en ventas, no en leads", texto: "«quiero 10 ventas este mes». Una meta en leads es una meta a medias: puedes cumplirla y no facturar nada." },
          { titulo: "Aplica tu tasa de cierre real", texto: "si cierras 1 de cada 5, esas 10 ventas necesitan 50 leads. Usa tu número, no el que te gustaría tener." },
          { titulo: "Multiplica por tu costo por lead", texto: "si tu CPL histórico es S/15, la pauta base son S/750. Si nunca lo has medido, este es el dato que te falta." },
          { titulo: "Comprueba que el volumen da para aprender", texto: "las plataformas necesitan un mínimo de conversiones semanales para optimizar. Si tu presupuesto no llega, sube el objetivo de conversión a algo más frecuente." },
          { titulo: "Contrasta con tu margen", texto: "si cada venta te deja S/300 y captarla cuesta S/375, el problema no es el presupuesto: es la oferta o el proceso de cierre." },
        ],
      },
      {
        h2: "Por qué un presupuesto demasiado pequeño no funciona",
        parrafo:
          "Hay un mínimo por debajo del cual la pauta no es «más lenta», simplemente no aprende. Meta lo documenta de forma explícita: cada conjunto de anuncios necesita unos 50 eventos de optimización por semana para salir de la fase de aprendizaje, y mientras está en ella los resultados son inestables y el costo por resultado más alto. Si tu evento de optimización es una compra y solo consigues 8 al mes, el sistema nunca llega a entender a quién mostrarle el anuncio.",
        dato: {
          cifra: "50",
          texto: "eventos de optimización por conjunto de anuncios y semana: el umbral que Meta necesita para salir de la fase de aprendizaje. Por debajo, el costo por resultado es más alto e inestable.",
          fuente: "Meta, Servicio de ayuda para empresas — «Información sobre la fase de aprendizaje»",
        },
        nota: {
          tipo: "aviso",
          titulo: "El error que más presupuesto quema",
          texto: "Cambiar el presupuesto, el público o el creativo cada dos días. Cada cambio importante reinicia la fase de aprendizaje, así que una campaña retocada a diario vive permanentemente en su fase más cara. Si vas a mover algo, muévelo y espera a tener resultados suficientes antes de volver a tocar.",
        },
      },
      {
        h2: "Google Ads y Meta Ads: qué hace cada uno",
        parrafo:
          "No compiten, hacen cosas distintas. Uno recoge demanda que ya existe y el otro la crea. Elegir mal el reparto es más caro que elegir mal el monto.",
        tabla: {
          cabeceras: ["", "Google Ads", "Meta Ads"],
          filas: [
            ["Qué hace", "Captura demanda: aparece cuando alguien ya está buscando", "Genera demanda: interrumpe con una propuesta"],
            ["Intención del usuario", "Alta — te está buscando", "Baja al principio, se construye"],
            ["Cuándo conviene", "Servicios y urgencias: «imprenta en Ica», «dentista cerca»", "Productos y proyectos: inmobiliario, retail, lanzamientos"],
            ["Costo por clic", "Más alto, pero el clic vale más", "Más bajo, hace falta más volumen"],
            ["Techo", "El número de personas que buscan al mes", "Prácticamente el tamaño del público"],
            ["Se nota en", "Semanas", "Días para leads, semanas para ventas"],
          ],
          nota: "La mayoría de negocios necesita los dos; lo que cambia es el reparto, no la elección.",
        },
      },
      {
        h2: "Lo que cobran las plataformas en Perú",
        parrafo:
          "Antes de decidir tu presupuesto conviene saber a qué precio se compra la atención en este mercado. Estos son los costos de referencia en Perú, y varían sobre todo por rubro: cuanto más caro el ticket y más competido el sector, más alto el costo de llegar.",
        tabla: {
          cabeceras: ["Métrica", "Rango en Perú", "Qué significa"],
          filas: [
            ["CPM, costo por mil impresiones", "desde S/8, hasta S/25", "Lo que cuesta que tu anuncio se vea mil veces"],
            ["CPC en campañas de tráfico", "desde S/0.20, hasta S/0.70", "Lo que cuesta cada clic hacia tu web"],
            ["CPC general", "desde S/0.30, hasta S/1.50", "Varía mucho con el objetivo de campaña"],
            ["Costo por lead", "desde S/3, hasta S/40", "Lo que cuesta un contacto registrado"],
            ["CPM en rubros competidos (educación, seguros)", "desde S/15, hasta S/25", "Ticket alto y mucha competencia por el mismo público"],
            ["CPM en consumo masivo (restaurantes, ropa)", "desde S/5, hasta S/12", "Público amplio y menos pujas por el mismo espacio"],
          ],
          nota: "Rangos del mercado peruano consultados en octubre de 2026, según benchmarks publicados por agencias locales. Son costos de medios —lo que se le paga a la plataforma—, sin incluir la gestión. No son tarifas de Suggestion.",
        },
        nota: {
          tipo: "aviso",
          titulo: "El costo por lead del panel no es tu costo por lead",
          texto: "Esas cifras cuentan lo que la plataforma registra. Tu costo real sale de dividir la inversión entre los leads que tu equipo pudo trabajar de verdad, y casi siempre es más alto. Es la diferencia que decide si una campaña rentable lo parece o no.",
        },
      },
      {
        h2: "Cuánto público hay realmente en Perú",
        parrafo:
          "Antes de decidir el monto conviene saber el tamaño del terreno. Perú es un mercado digital maduro, no emergente: eso significa que tu cliente está online, pero también que tu competencia ya está pujando por él. En mercados así, la ventaja rara vez viene de pagar más por clic; viene de convertir mejor lo que ya estás pagando.",
        dato: {
          cifra: "82%",
          texto: "de la población peruana usa internet —28,4 millones de personas—, y el 99,5% de quienes usan internet está en al menos una red social. TikTok ya es la segunda plataforma del país por número de usuarios.",
          fuente: "Digital 2026 Report — Perú",
        },
      },
      {
        h2: "Cuánto tarda en dar resultado",
        parrafo:
          "Es la pregunta que más malentendidos genera, porque la respuesta depende de qué llames resultado. Los primeros datos llegan en días; las conclusiones fiables, no. Apagar una campaña a la semana porque «no vendió» es la forma más común de tirar el dinero de la fase de aprendizaje justo antes de recuperarlo.",
        tabla: {
          cabeceras: ["Plazo", "Qué ya se puede leer", "Qué todavía no"],
          filas: [
            ["Días 1-7", "Que la campaña entrega y a qué costo por clic", "Nada sobre rentabilidad: sigue en fase de aprendizaje"],
            ["Semanas 2-4", "Costo por lead estable, qué creativo gana", "El costo por venta, si tu ciclo de cierre es largo"],
            ["Mes 2-3", "Costo por venta real y qué públicos rinden", "El efecto de marca, que tarda más"],
          ],
        },
      },
    ],
    faq: [
      {
        q: "¿Cuál es el presupuesto mínimo para hacer publicidad en Perú?",
        a: "No hay un mínimo oficial, pero sí uno práctico: el que permita conseguir suficientes conversiones semanales para que la plataforma aprenda. Si tu presupuesto no llega a ese volumen con el evento que te importa —una compra, un lead—, la salida no es gastar más, es optimizar por un evento más frecuente, como un inicio de conversación.",
      },
      {
        q: "¿Cuánto cuesta un clic en Google Ads en Perú?",
        a: "Varía muchísimo según el rubro y la competencia, y por eso desconfía de cualquiera que te dé una cifra sin conocer tu sector. Lo que sí es constante es la lógica: cuanto más cara sea la venta que hay detrás de una búsqueda, más gente puja por ella y más sube el clic. La pregunta útil no es cuánto cuesta el clic, sino cuántos clics necesitas para una venta.",
      },
      {
        q: "¿Es mejor invertir todo en una plataforma o repartir?",
        a: "Al principio suele rendir más concentrar, porque repartir un presupuesto pequeño entre dos plataformas hace que ninguna llegue al volumen que necesita para aprender. Una vez que una funciona de forma estable, abrir la segunda tiene sentido para no depender de un solo canal.",
      },
      {
        q: "¿Cada cuánto debo revisar el presupuesto?",
        a: "Mirarlo a diario, sí; tocarlo a diario, no. Cada cambio importante reinicia la fase de aprendizaje. Un ritmo razonable es revisar los números todos los días y hacer ajustes una vez por semana, con datos suficientes detrás.",
      },
      {
        q: "¿Qué hago si no conozco mi costo por lead?",
        a: "Empezar por medirlo. Se puede reservar un presupuesto pequeño durante unas semanas con el único objetivo de averiguarlo: cuánto cuesta traer un contacto y qué porcentaje termina comprando. Ese dato convierte cualquier decisión posterior de presupuesto en un cálculo en vez de una apuesta.",
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
      "Los 7 pasos para crear una página web que traiga clientes: dominio a tu nombre, estructura, contenido, velocidad y medición. Qué hacer y en qué orden.",
    h1: "Cómo crear una página web paso a paso",
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
      {
        h2: "El orden correcto para hacerla",
        parrafo:
          "Casi todo el mundo empieza por el diseño y deja la estructura para el final. Es al revés: el diseño es la última capa, y cambiarlo es barato. Reordenar una web ya publicada —cambiar las URLs, rehacer la navegación— es lo que cuesta caro y lo que suele romper el posicionamiento que ya tenías.",
        pasos: [
          { titulo: "Define qué tiene que hacer la web", texto: "«que la gente me escriba por WhatsApp», «que pidan cotización», «que compren». Una sola acción principal. Sin esto, todo lo demás son opiniones sobre colores." },
          { titulo: "Registra el dominio a tu nombre", texto: "no al de la agencia ni al del sobrino que te la hace. Es el activo que no puedes perder y el paso donde más gente se equivoca." },
          { titulo: "Escribe la estructura antes que el diseño", texto: "qué páginas hay, cómo se llaman sus URLs y cómo se enlazan entre sí. Este esqueleto es el que define si Google te entiende." },
          { titulo: "Redacta pensando en la pregunta del cliente", texto: "cada página responde a una duda concreta. El texto se escribe antes del diseño, no se rellena después." },
          { titulo: "Diseña sobre el móvil primero", texto: "porque es donde va a entrar la mayoría. Lo que funciona en 375 px funciona en escritorio; al revés casi nunca." },
          { titulo: "Monta la medición desde el día uno", texto: "analítica y eventos de contacto. Una web sin medir es una web sobre la que solo puedes opinar." },
          { titulo: "Publica y corrige con datos", texto: "ninguna web nace terminada. Lo que la mejora es ver dónde abandona la gente, no rediseñarla entera cada año." },
        ],
      },
      {
        h2: "Los cimientos técnicos que Google mira",
        parrafo:
          "Hay tres medidas concretas —las Core Web Vitals— que Google evalúa con datos de usuarios reales, no de laboratorio, y sobre el percentil 75: para aprobar, el 75% de las visitas tiene que tener una buena experiencia. Son las mismas tres para cualquier web del mundo, así que sirven como lista de verificación objetiva cuando alguien te entrega un sitio.",
        tabla: {
          cabeceras: ["Métrica", "Qué mide", "Umbral bueno"],
          filas: [
            ["LCP", "Cuánto tarda en aparecer el elemento más grande de la pantalla", "menos de 2,5 s"],
            ["INP", "Cuánto tarda la página en responder cuando alguien toca algo", "menos de 200 ms"],
            ["CLS", "Cuánto se mueve el contenido solo mientras carga", "menos de 0,1"],
          ],
          nota: "Se miden sobre usuarios reales (informe CrUX de Chrome) y en el percentil 75, no con una prueba puntual desde tu computadora.",
        },
        dato: {
          cifra: "2,5 s",
          texto: "es el límite del LCP para que Google considere buena la carga de tu página. Por encima, no solo baja la experiencia: es una señal que compite con la del competidor que sí lo cumple.",
          fuente: "Google — umbrales de Core Web Vitals",
        },
      },
      {
        h2: "Los errores que cuestan rehacerla",
        parrafo:
          "Estos cuatro no se arreglan con un retoque: obligan a volver a empezar. Merece la pena revisarlos antes de aprobar cualquier propuesta.",
        bullets: [
          { titulo: "El dominio no está a tu nombre", texto: "si la relación con quien te la hizo se rompe, pierdes la dirección, el correo y el posicionamiento de golpe. Comprueba a nombre de quién está registrado." },
          { titulo: "No tienes acceso al hosting ni al gestor", texto: "una web que solo puede tocar otra persona es una web que no controlas. Pide los accesos aunque no vayas a usarlos." },
          { titulo: "Las URLs cambian sin redirección", texto: "cada dirección antigua que muere sin un redirect 301 se lleva su posicionamiento. Es la forma más común de perder tráfico al estrenar web." },
          { titulo: "No hay forma de contactar en cada página", texto: "el visitante decide cuando decide, no cuando llega al final. Si tiene que buscar cómo escribirte, no escribe." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "Antes de firmar nada",
          texto: "Pregunta explícitamente a nombre de quién quedará el dominio, quién tendrá los accesos y qué pasa con el sitio si dejan de trabajar juntos. Una respuesta clara a esas tres preguntas vale más que cualquier portafolio.",
        },
      },
    ],
    faq: [
      {
        q: "¿Cuánto tarda en hacerse una página web?",
        a: "Depende mucho más del contenido que del desarrollo. La parte técnica suele ser la más previsible; lo que alarga los proyectos es esperar textos, fotos y decisiones. Si llegas con el contenido listo, los plazos se acortan a la mitad.",
      },
      {
        q: "¿Qué necesito tener antes de empezar?",
        a: "El objetivo de la web en una frase, el dominio disponible o registrado, los textos de las páginas principales, fotos reales de tu negocio y los datos de contacto definitivos. Con eso el proyecto avanza sin bloqueos.",
      },
      {
        q: "¿La web sola trae clientes?",
        a: "Casi nunca por sí sola. Una web es donde convierte el tráfico que llega desde otro sitio: búsqueda, publicidad, redes o recomendación. Sin ninguna de esas fuentes, funciona como una tarjeta de presentación bien hecha, no como un canal de ventas.",
      },
      {
        q: "¿Cómo sé si mi web es rápida?",
        a: "Mirando sus Core Web Vitals con datos de usuarios reales, no con una prueba desde tu propia computadora —que suele tener mejor conexión que tus clientes—. Los umbrales son LCP por debajo de 2,5 s, INP por debajo de 200 ms y CLS por debajo de 0,1.",
      },
      {
        q: "¿Necesito blog en mi web?",
        a: "Solo si vas a mantenerlo. Un blog abandonado con tres entradas de hace dos años resta credibilidad. Si no hay quien escriba con regularidad, es mejor invertir ese esfuerzo en que las páginas de servicio respondan bien las dudas reales de tus clientes.",
      },
    ],
    cierre: "En Suggestion diseñamos webs rápidas y pensadas para una sola cosa: convertir visitas en clientes.",
    moneyPage: { label: "Quiero una web que venda", href: "/servicios/desarrollo-web" },
    relacionados: ["crear-pagina-web-wix-vs-profesional", "que-es-un-lead", "posicionamiento-web-como-aparecer-en-google"],
  },
  {
    slug: "posicionamiento-web-como-aparecer-en-google",
    categoria: "conversion",
    title: "Posicionamiento Web: Cómo Aparecer en Google | Suggestion",
    description:
      "Por qué tu página no aparece en Google y qué revisar primero: si está indexada, con qué intención te buscan y si tu rubro se busca en local o en nacional.",
    h1: "Posicionamiento web: por qué no apareces en Google y qué revisar primero",
    excerpt:
      "Antes de contratar nada ni de escribir una palabra clave, hay una comprobación de dos minutos que casi nadie hace y que explica la mitad de los casos: saber si Google tiene tu página.",
    date: "2026-10-04",
    secciones: [
      {
        h2: "Lo primero: ¿Google tiene tu página o ni la conoce?",
        parrafo:
          "Hay dos problemas distintos que se confunden todo el tiempo. Uno es no estar posicionado: Google te conoce pero te pone detrás de otros. El otro es no estar indexado: Google no tiene tu página en absoluto, y entonces no hay posición que mejorar porque no estás jugando. El segundo es más común de lo que parece y se arregla antes, así que conviene descartarlo primero.",
        nota: {
          titulo: "Cómo comprobarlo en dos minutos",
          texto: "Copia una frase literal y poco común de tu página —media línea basta— y búscala en Google entre comillas. Si tu página aparece, está indexada. Si no aparece ninguna, Google no la tiene. Es más fiable que el truco de buscar «site:» con la ruta completa, que devuelve falsos negativos con bastante frecuencia.",
        },
      },
      {
        h2: "Estar indexado tampoco es estar posicionado",
        parrafo:
          "Que Google tenga tu página significa que puede mostrarla, no que vaya a hacerlo. Para que la muestre tiene que considerar que responde mejor que las demás a lo que alguien escribió. Y ahí entran tres cosas, en este orden: que la página trate de verdad del tema, que el sitio tenga algo de credibilidad en ese tema, y que la experiencia no espante —velocidad, móvil, que se lea—.",
        bullets: [
          { titulo: "Una página por intención", texto: "una sola página intentando posicionar para diez cosas distintas no posiciona para ninguna. Es el error más repetido en webs de servicios." },
          { titulo: "El texto que nadie lee sí cuenta", texto: "el título que sale en el buscador y la descripción deciden si te hacen clic. Dos páginas con el mismo título compiten entre ellas." },
          { titulo: "Los enlaces internos enseñan de qué va cada página", texto: "si ninguna página de tu sitio enlaza a otra con un texto que la describa, Google tiene que adivinar." },
          { titulo: "La velocidad no te sube, pero te hunde", texto: "los umbrales razonables son 2,5 s de carga del elemento principal y menos de 200 ms de respuesta a la primera interacción." },
        ],
      },
      {
        h2: "Local o nacional: la decisión que va antes que las palabras clave",
        parrafo:
          "Antes de elegir términos hay que saber si tu servicio se busca con el nombre de tu ciudad o sin él, porque la respuesta cambia dónde se gana. Y la intuición falla: mucha gente asume que su rubro es local porque su oficina lo es.",
        tabla: {
          cabeceras: ["", "Se busca en local", "Se busca en nacional"],
          filas: [
            ["Ejemplos de rubro", "Imprenta, taller, clínica, restaurante, ferretería", "Agencias, software y todo lo que se presta a distancia"],
            ["Cómo lo escribe la gente", "Servicio más ciudad, o «cerca de mí»", "El servicio a secas"],
            ["Dónde se decide", "El perfil de empresa en Google, las reseñas y el mapa", "El contenido y la credibilidad del sitio"],
            ["Contra quién compites", "Los negocios de tu zona", "Todo el país"],
          ],
          nota: "Se comprueba gratis: escribe tu servicio seguido del nombre de tu ciudad en el buscador y mira las sugerencias que aparecen solas. Si lo que sugiere no tiene nada que ver con tu rubro, nadie busca así y ese no es tu camino.",
        },
      },
      {
        h2: "La intención: por qué atraer visitas equivocadas no sirve de nada",
        parrafo:
          "Dos personas pueden escribir palabras parecidas y querer cosas opuestas. Una está estudiando el tema; la otra está a punto de contratar. Si tu página de servicio está escrita para la primera, vas a tener visitas y ninguna consulta, y es un problema que no se ve en las métricas de tráfico.",
        tabla: {
          cabeceras: ["Lo que escribe", "Qué quiere", "Qué página le corresponde"],
          filas: [
            ["«qué es…», «ejemplos de…», «…pdf»", "Entender. A veces es un estudiante", "Un artículo del blog"],
            ["«cómo hacer…», «…paso a paso»", "Resolverlo por su cuenta, por ahora", "Una guía"],
            ["«agencia de…», «empresa de…», «…precio»", "Contratar a alguien", "La página de servicio"],
            ["«servicio + ciudad»", "Contratar cerca, hoy", "La ficha de empresa y una página local"],
          ],
          nota: "Un truco rápido para saber qué intención tiene un término: escríbelo en el buscador y mira qué arrastra. Si sugiere «curso», «carrera» o «pdf», quien lo busca quiere aprender, no comprar.",
        },
      },
      {
        h2: "Qué revisar esta semana, en este orden",
        parrafo:
          "Si tuvieras que hacer una sola cosa, haz la primera. La mayoría de sitios con problemas de visibilidad se atascan ahí y gastan el presupuesto en el paso cuatro.",
        pasos: [
          { titulo: "Comprueba qué está indexado", texto: "con el truco de la frase entre comillas, página por página, empezando por las que te darían dinero. Es normal descubrir que el blog está entero y las páginas de servicio no." },
          { titulo: "Abre Search Console", texto: "es gratis y es la única fuente que dice la verdad sobre tus impresiones, tus clics y tu posición media. Lo demás son estimaciones de terceros." },
          { titulo: "Mira para qué te encuentran hoy", texto: "las consultas reales casi nunca son las que crees. Ahí suele estar la victoria más rápida: un término en el que ya estás en la segunda página y solo necesita una página decente." },
          { titulo: "Y recién entonces, escribe", texto: "una página por intención, con el término principal en el título, y enlazada desde las páginas que ya reciben visitas." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "Una advertencia sobre los plazos",
          texto: "Lo técnico se nota en semanas. Posicionar un término con competencia real lleva meses, y nadie puede garantizarte una posición concreta porque nadie controla el buscador. Quien te garantice el primer puesto te está diciendo algo que no puede cumplir.",
        },
      },
    ],
    faq: [
      {
        q: "¿Cuánto tarda el posicionamiento web?",
        a: "Depende de qué tan competido esté el término y de dónde partas. Los arreglos técnicos se notan en semanas; posicionar una palabra con competencia real es cosa de meses. Si el sitio es nuevo, suma el tiempo que tarda Google en tomárselo en serio. Desconfía de cualquier plazo cerrado que te den sin haber mirado tu sitio.",
      },
      {
        q: "¿Cómo sé si Google tiene mi página indexada?",
        a: "Busca entre comillas una frase literal y poco común de esa página. Si aparece, está indexada. Si no aparece nada, Google no la tiene y hay que resolver eso antes que cualquier otra cosa. Search Console te lo confirma con la herramienta de inspección de URL.",
      },
      {
        q: "¿Cuál es la diferencia entre SEO y SEM?",
        a: "El SEO es aparecer en los resultados que no se pagan; el SEM es pagar por aparecer. El primero tarda más pero no se apaga cuando dejas de invertir; el segundo trae visitas desde el primer día y se corta en cuanto paras. No compiten entre ellos: responden a plazos distintos.",
      },
      {
        q: "¿Tengo que poner el nombre de mi ciudad en todo?",
        a: "Solo si tu servicio se busca así, y eso se comprueba en el propio buscador antes de decidirlo. En servicios que se prestan en persona suele funcionar muy bien. En servicios que se prestan a distancia suele ser esfuerzo perdido, porque la gente escribe el servicio a secas.",
      },
      {
        q: "¿Sirve de algo tener un blog para posicionar?",
        a: "Sirve si responde dudas reales de tu cliente y si enlaza hacia las páginas que venden. Un blog que recibe visitas y no lleva a ninguna parte entretiene y no convierte. Un blog abandonado con tres entradas viejas resta más de lo que suma.",
      },
    ],
    cierre: "En Suggestion empezamos cada proyecto de posicionamiento por lo mismo: comprobar qué tiene Google de ti hoy, antes de proponer nada.",
    moneyPage: { label: "Posicionamiento web (SEO)", href: "/servicios/seo" },
    relacionados: ["como-crear-una-pagina-web", "crear-pagina-web-wix-vs-profesional", "que-es-un-lead"],
  },
  {
    slug: "mejores-ia-para-crear-logos",
    categoria: "ia-automatizacion",
    title: "Las Mejores IA para Crear Logos en 2026 | Suggestion",
    description:
      "Qué tipos de IA para logos existen, qué entrega cada uno y cuál te conviene según lo que necesites. Comparativa por tipo de herramienta, no por marca.",
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
      {
        h2: "Comparativa por tipo de herramienta",
        parrafo:
          "Las herramientas concretas cambian de nombre cada pocos meses, así que compararlas una a una envejece mal. Lo que no cambia es en qué categoría cae cada una y qué puedes esperar de ella. Elige la categoría primero; la marca del momento da igual.",
        tabla: {
          cabeceras: ["Tipo", "Qué te entrega", "Formato", "Para qué conviene"],
          filas: [
            ["Generador por texto", "Conceptos a partir de una descripción", "Mapa de bits", "Explorar rumbos visuales rápido"],
            ["Plantilla + personalización", "Un logo armado y listo para usar", "Mapa de bits y a veces vector", "Un proyecto temporal o una prueba"],
            ["IA generativa de imagen", "Grafismos originales y llamativos", "Mapa de bits", "Inspiración, casi nunca un logo usable"],
            ["Vectorizadores automáticos", "Convierte una imagen a vector", "Vector, con retoque", "Rescatar un trazo simple, no un dibujo complejo"],
          ],
          nota: "Ninguna categoría entrega hoy un sistema de marca completo: versiones, área de respeto, reglas de uso y archivos maestros siguen siendo trabajo humano.",
        },
      },
      {
        h2: "Cómo elegir según lo que necesitas",
        parrafo:
          "Antes de probar herramientas, decide en cuál de estos tres casos estás. La respuesta cambia por completo cuánto tiene sentido invertir en esto.",
        tabla: {
          cabeceras: ["Tu situación", "Qué usar"],
          filas: [
            ["Necesito una imagen para un evento de un fin de semana", "Plantilla con personalización, y listo"],
            ["Estoy validando una idea de negocio", "Generador por texto para explorar, sin cerrar nada"],
            ["Voy a abrir el negocio y quiero verme serio", "IA para explorar, diseño humano para cerrar"],
            ["Ya tengo clientes y mi marca se ve improvisada", "Proceso de branding: el logo es la última parte"],
          ],
        },
      },
      {
        h2: "Qué exigirle al resultado, salga de donde salga",
        parrafo:
          "Da igual si el logo lo hizo una IA, un editor gratuito o un estudio: la lista de comprobación es la misma. Si falla alguno de estos cinco puntos, el logo no está terminado, aunque se vea bien en la pantalla donde lo generaste.",
        bullets: [
          { titulo: "Archivo vectorial editable", texto: "sin él no tienes el original y no podrás imprimir en grande ni modificar nada." },
          { titulo: "Legible en 16 píxeles", texto: "es el tamaño del ícono en una pestaña o en un perfil, y es donde tu cliente lo verá más veces." },
          { titulo: "Funciona a una sola tinta", texto: "prueba a ponerlo todo en negro: si se cae, fallará en sellos, bordados y grabados." },
          { titulo: "Tiene versión para fondo oscuro", texto: "la vas a necesitar el primer día, para el pie de tu web o una foto." },
          { titulo: "No se parece al de un competidor", texto: "búscalo por imagen antes de adoptarlo. La IA se entrena con lo que ya existe y repite patrones del rubro." },
        ],
        nota: {
          titulo: "Una comprobación de dos minutos",
          texto: "Sube el logo a una búsqueda inversa por imagen antes de mandarlo a imprimir. Si aparecen resultados muy parecidos, tienes un problema de diferenciación —y quizá de registro— que es mucho más barato descubrir ahora que después de rotular la fachada.",
        },
      },
    ],
    faq: [
      {
        q: "¿Cuál es la mejor IA para crear logos?",
        a: "Depende de qué necesites, no de cuál esté de moda: las herramientas concretas cambian cada pocos meses. Para explorar rumbos, un generador por texto. Para algo temporal y listo para usar, una plataforma de plantillas con personalización. Para un negocio que va a durar, ninguna sola: IA para explorar y trabajo humano para cerrar.",
      },
      {
        q: "¿Las IA de logos son gratis?",
        a: "Casi todas dejan generar gratis y cobran al descargar en buena calidad o en formato editable. Conviene comprobar antes de invertir tiempo qué incluye exactamente la descarga de pago: si no incluye el archivo vectorial, el problema de fondo sigue ahí.",
      },
      {
        q: "¿Dos negocios pueden terminar con el mismo logo de IA?",
        a: "Es posible, sobre todo con plantillas y con estilos muy pedidos dentro de un mismo rubro. Estas herramientas se entrenan con lo que ya existe y tienden a repetir patrones. Una búsqueda inversa por imagen antes de adoptarlo cuesta dos minutos y evita un problema caro.",
      },
      {
        q: "¿Puedo usar IA solo para el ícono y hacer el resto aparte?",
        a: "Sí, y es una forma sensata de usarla. El riesgo es que el ícono generado no combine con la tipografía ni resista la reducción, así que aun así hay que redibujarlo y ajustarlo para que funcione como sistema.",
      },
      {
        q: "¿Qué le pido a la herramienta para que el resultado sirva?",
        a: "Descripciones concretas en vez de adjetivos: el rubro, la sensación buscada, si quieres símbolo o solo tipografía, y pedirlo en blanco y negro. Trabajar sin color en la exploración obliga a que la forma se sostenga sola, que es la prueba que de verdad importa.",
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
      "Un lead es una persona que mostró interés en lo que vendes y te dejó un dato para contactarla. Suena obvio, pero ahí empieza el problema: la mayoría de negocios genera leads y los pierde por no saber qué hacer con ellos. Esta es la guía completa, sin tecnicismos.",
    date: "2026-03-04",
    secciones: [
      {
        h2: "¿Qué es un lead, en palabras simples?",
        parrafo:
          "Un lead es un contacto interesado: alguien que levantó la mano y te dejó una forma de ubicarlo —su número, su correo o un mensaje por WhatsApp—. Esa es la diferencia con una visita. Quien entra a tu web y se va sin dejar rastro no es un lead: es tráfico. El lead empieza a existir en el momento en que puedes iniciar una conversación con esa persona.",
      },
      {
        h2: "Visita, lead, prospecto y cliente: no son lo mismo",
        parrafo:
          "Se usan como sinónimos y eso genera desorden en el equipo comercial. Vale la pena separarlos, porque cada etapa se trabaja distinto.",
        bullets: [
          { titulo: "Visita", texto: "vio tu contenido o tu anuncio. No sabes quién es y no puedes contactarla." },
          { titulo: "Lead", texto: "te dejó un dato. Ya puedes escribirle." },
          { titulo: "Prospecto", texto: "además de dejarte el dato, encaja con lo que vendes y tiene una necesidad real." },
          { titulo: "Cliente", texto: "compró. Y aquí no termina: es el más barato de volver a vender." },
        ],
      },
      {
        h2: "Tipos de leads: no todos valen igual",
        parrafo:
          "Tratar a todos por igual es el error más caro: persigues a los que todavía no van a comprar y descuidas a los que ya estaban listos. Verás estas siglas en cualquier herramienta, así que conviene entenderlas.",
        bullets: [
          { titulo: "Lead frío", texto: "mostró interés mínimo, quizá solo curiosidad. Necesita información antes que una llamada de venta." },
          { titulo: "Lead tibio (MQL)", texto: "interactuó varias veces y encaja con tu cliente ideal. MQL solo significa que marketing lo considera listo para que ventas lo mire." },
          { titulo: "Lead caliente (SQL)", texto: "pidió precio, disponibilidad o una cita. SQL quiere decir que ventas ya lo aceptó como oportunidad real. Aquí la velocidad lo es todo." },
        ],
      },
      {
        h2: "¿De dónde salen los leads?",
        parrafo:
          "No todos llegan de internet, y confundir el origen hace que midas mal. Conviene registrar de dónde vino cada uno para saber qué canal sostener.",
        bullets: [
          { titulo: "Formulario de tu web", texto: "el más ordenado: llega con los datos que tú pediste." },
          { titulo: "WhatsApp", texto: "en Perú es el rey. Rápido y cercano, pero se pierde entre conversaciones si nadie lo registra." },
          { titulo: "Llamada o visita al local", texto: "el más caliente de todos y, curiosamente, el que casi nadie anota." },
          { titulo: "Redes sociales", texto: "comentarios y mensajes directos. Son leads aunque no se sientan como tales." },
          { titulo: "Ferias, activaciones y referidos", texto: "cierran muy bien porque llegan con confianza previa. Merecen su propio registro." },
        ],
      },
      {
        h2: "Por qué se te enfrían los leads",
        parrafo:
          "Un lead no se pierde de golpe: se enfría. Y casi siempre por las mismas tres razones, que no tienen que ver con la publicidad sino con lo que pasa después.",
        bullets: [
          { titulo: "Tardas en responder", texto: "el interés dura poco. Quien escribe a tres proveedores suele quedarse con el que contestó primero, no con el mejor." },
          { titulo: "No haces seguimiento", texto: "un 'lo voy a pensar' no es un no. La mayoría de ventas se cierra después de varios contactos, y casi nadie llega al tercero." },
          { titulo: "No los organizas", texto: "si los leads viven en mensajes sueltos, cuadernos y capturas de pantalla, se pierden. No por mala intención: por desorden." },
        ],
      },
      {
        h2: "¿Cómo saber si un lead es bueno? (calificar)",
        parrafo:
          "Calificar es hacerle cuatro preguntas al contacto —a veces sin preguntárselas directamente— para saber cuánto esfuerzo merece. No es filtrar por filtrar: es dejar de gastar tu mejor hora en quien nunca iba a comprar.",
        sub: [
          { h3: "¿Tiene una necesidad real?", texto: "Busca resolver algo concreto o solo estaba mirando. La forma en que pregunta suele delatarlo." },
          { h3: "¿Puede pagarlo?", texto: "No se trata de juzgar a nadie, sino de ubicar tu oferta. Si tu producto no está a su alcance hoy, quizá lo esté en seis meses." },
          { h3: "¿Decide él?", texto: "En ventas a empresas casi nunca decide quien escribe. Saber quién firma cambia toda la conversación." },
          { h3: "¿Para cuándo?", texto: "El que compra este mes y el que compra el año que viene necesitan seguimientos distintos, no el mismo mensaje repetido." },
        ],
      },
      {
        h2: "¿Necesito un CRM si vendo por WhatsApp?",
        parrafo:
          "Un CRM es simplemente el lugar donde vive cada contacto con su historial: qué pidió, qué se le respondió y cuándo toca volver a escribirle. No es un software caro para empresas grandes; puede empezar siendo una hoja de cálculo bien llevada. La pregunta correcta no es si lo necesitas, sino esta: si mañana tu vendedor renuncia y se va con su celular, ¿pierdes las conversaciones? Si la respuesta es sí, ya lo necesitas.",
      },
      {
        h2: "¿Cuánto cuesta un lead y por qué el barato puede salir caro?",
        parrafo:
          "El costo por lead (CPL) es lo que pagaste en publicidad dividido entre los contactos que entraron. Es útil, pero engaña si lo miras solo. Bajar el CPL es fácil: pides menos datos, prometes más de lo que puedes cumplir y te llenas de contactos que nunca iban a comprar. Terminas pagando poco por cada lead y mucho por cada venta. El número que manda es el costo por venta cerrada, no el costo por contacto.",
      },
      {
        h2: "Cómo dejar de perder leads: los cuatro básicos",
        parrafo:
          "Antes de aumentar el presupuesto de publicidad, cierra las fugas. Casi siempre hay más ventas escondidas aquí que en un anuncio nuevo.",
        bullets: [
          { titulo: "Captura ordenada", texto: "todo lead entra a un solo lugar, venga de donde venga, y con su origen anotado." },
          { titulo: "Respuesta rápida", texto: "un primer mensaje automático gana tiempo, pero no reemplaza a una persona. Que el humano llegue pronto." },
          { titulo: "Seguimiento con calendario", texto: "cada lead con una próxima acción y una fecha. Sin eso, el seguimiento depende de la memoria." },
          { titulo: "Calificación", texto: "prioriza a los calientes hoy y nutre a los fríos con información útil, sin acosarlos." },
        ],
      },
    ],
    faq: [
      {
        q: "¿Un lead es lo mismo que un cliente potencial?",
        a: "Casi. Todo lead es un cliente potencial, pero no todo cliente potencial es un lead: para serlo tiene que haberte dejado una forma de contactarlo. Esa es la diferencia práctica, porque sin dato no hay conversación posible.",
      },
      {
        q: "¿Qué significan MQL y SQL?",
        a: "Son etiquetas para saber en qué momento va cada contacto. MQL es el lead que marketing considera listo para que ventas lo revise; SQL es el que ventas ya aceptó como oportunidad real porque pidió precio, cita o disponibilidad. Si tu equipo es pequeño, basta con llamarlos tibio y caliente.",
      },
      {
        q: "¿En cuánto tiempo debería responder un lead?",
        a: "Lo antes posible, y en WhatsApp eso significa minutos. El interés se enfría rápido y quien pregunta suele estar consultando a varios a la vez. Si no puedes sostener esa velocidad todo el día, al menos ten un primer mensaje automático que confirme la recepción y diga cuándo responderá una persona.",
      },
      {
        q: "¿Cuántos leads necesito para lograr una venta?",
        a: "Depende del rubro y del precio. En productos de ticket bajo pueden bastar unos pocos; en inmobiliario o vehículos hacen falta bastantes más, porque la decisión es larga. Lo importante no es el promedio de otros: es medir el tuyo durante un par de meses y trabajar con ese número.",
      },
      {
        q: "¿Sirve un CRM si soy un negocio pequeño?",
        a: "Sí, y no tiene que ser caro. Lo esencial es que exista un solo lugar donde estén todos los contactos con su historial y su próxima acción. Una hoja de cálculo ordenada es infinitamente mejor que varias conversaciones sueltas en distintos celulares.",
      },
      {
        q: "¿Es mejor tener muchos leads baratos o pocos caros?",
        a: "Ninguno de los dos por sí solo. Lo que importa es cuántos terminan comprando. Un lead más caro que cierra con frecuencia sale más barato que diez que solo consumen el tiempo de tu equipo. Mide el costo por venta, no el costo por contacto.",
      },
    ],
    cierre: "Si tus leads se están enfriando entre WhatsApp, correos y cuadernos, el problema no es la publicidad: es el proceso. Eso se ordena.",
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
      "El neuromarketing estudia cómo decide el cerebro de tu cliente: no lo que dice que decide, sino lo que realmente hace. Es un campo con mucha evidencia útil y también con mucho charlatán, así que aquí va la versión honesta: qué sirve, qué no, y qué puedes aplicar sin un laboratorio.",
    date: "2026-03-11",
    secciones: [
      {
        h2: "¿Qué es el neuromarketing?",
        parrafo:
          "Es la aplicación de la neurociencia y la psicología del comportamiento al marketing: entender cómo la atención, la emoción y la memoria influyen en la decisión de compra. La idea de fondo está bien documentada: decidimos con el sistema rápido e intuitivo del cerebro y después justificamos la decisión con argumentos racionales. Por eso una persona puede jurar que compró por el precio cuando en realidad compró por confianza.",
      },
      {
        h2: "Qué NO es el neuromarketing",
        parrafo:
          "Aquí es donde conviene ser claro, porque se vende mucho humo con esta palabra.",
        bullets: [
          { titulo: "No lee la mente", texto: "ninguna técnica te dice qué está pensando un cliente. Muestra tendencias en grupos, no certezas individuales." },
          { titulo: "No es un botón de compra", texto: "no existe una palabra ni un color que obligue a nadie a pagar. Si alguien te lo vende así, desconfía." },
          { titulo: "No reemplaza a la investigación", texto: "complementa lo que ya sabes de tu mercado; no sustituye hablar con tus clientes." },
          { titulo: "No arregla un mal producto", texto: "puede hacer que más gente lo pruebe. También hará que se enteren más rápido de que no cumple." },
        ],
      },
      {
        h2: "Los tres resortes: atención, emoción y memoria",
        parrafo:
          "Casi todo lo aplicable se reduce a estos tres. Tu comunicación primero tiene que ser vista, luego sentida y por último recordada. Si falla el primero, los otros dos no llegan a ocurrir.",
        sub: [
          { h3: "Atención", texto: "el cerebro descarta casi todo lo que ve para ahorrar energía. Compite el contraste, el movimiento, las caras y lo inesperado; pierde lo genérico." },
          { h3: "Emoción", texto: "lo que no genera ninguna reacción no se procesa a fondo. No hace falta drama: basta con que sea relevante para la situación de esa persona." },
          { h3: "Memoria", texto: "recordamos historias, no listas de características. Por eso un caso concreto pesa más que cinco viñetas de beneficios." },
        ],
      },
      {
        h2: "Sesgos que sí puedes aplicar hoy",
        parrafo:
          "Un sesgo es un atajo mental. No son trucos: son la forma en que tu cliente ya decide, la aproveches o no.",
        bullets: [
          { titulo: "Ancla de precio", texto: "la primera cifra que ve condiciona todo lo demás. Mostrar primero el plan completo hace que el intermedio se lea como razonable." },
          { titulo: "Prueba social", texto: "confiamos en lo que otros ya validaron. Una reseña con nombre y foto pesa más que diez frases anónimas." },
          { titulo: "Escasez real", texto: "las últimas unidades o el precio de lanzamiento mueven la decisión, pero solo si es verdad. La escasez inventada se descubre y quema la marca." },
          { titulo: "Aversión a la pérdida", texto: "duele más perder algo que ilusiona ganarlo. 'No pierdas el precio de preventa' suele mover más que 'aprovecha el precio de preventa'." },
          { titulo: "Menos opciones", texto: "demasiadas alternativas paralizan. Tres opciones bien explicadas venden más que doce." },
          { titulo: "Historias antes que datos", texto: "el dato respalda, el relato convence. Cuenta el caso y después pon la cifra." },
        ],
      },
      {
        h2: "Cómo se aplica en tu web y en tus anuncios",
        parrafo:
          "No hace falta rediseñar nada para empezar. Los cambios que más rinden suelen ser los más aburridos: reducir el esfuerzo que le pides al visitante y quitar los motivos de duda. Una sola idea por pantalla, el beneficio antes que la característica, un botón que diga exactamente qué pasa al tocarlo, y las señales de confianza —reseñas, garantía, datos de contacto visibles— cerca del punto donde la persona tiene que decidir. En un anuncio, los tres primeros segundos deciden si existe el resto.",
      },
      {
        h2: "Qué puedes medir sin un laboratorio",
        parrafo:
          "El neuromarketing de manual usa seguimiento ocular o lectura de actividad cerebral, cosas fuera del alcance de casi cualquier negocio. La buena noticia es que el 90% del beneficio se consigue con herramientas simples.",
        bullets: [
          { titulo: "Pruebas comparativas", texto: "dos versiones del mismo anuncio o de la misma página, y que decida el comportamiento real de la gente, no la opinión de la oficina." },
          { titulo: "Mapas de calor", texto: "muestran dónde miran y dónde hacen clic los visitantes. Suelen revelar que nadie ve eso que tanto discutieron." },
          { titulo: "Grabaciones de sesión", texto: "ver a cinco personas usar tu web enseña más que cualquier informe." },
          { titulo: "Preguntar bien", texto: "no preguntes si comprarían: pregunta qué hicieron la última vez que compraron algo parecido. La memoria de lo hecho miente menos que la intención declarada." },
        ],
      },
      {
        h2: "Qué es ciencia asentada y qué es marketing de agencias",
        parrafo:
          "Conviene distinguir. Que la emoción y los atajos mentales influyen en la decisión es algo con décadas de investigación detrás y no está en discusión. En cambio, muchas afirmaciones que circulan —porcentajes exactos sobre cuánto decide el subconsciente, o colores con supuestos efectos universales— son simplificaciones que se repiten sin fuente. Aplica los principios, desconfía de las cifras redondas y prueba en tu propio mercado: lo que funciona en un rubro puede no funcionar en el tuyo.",
      },
      {
        h2: "El límite ético (que además es comercial)",
        parrafo:
          "El neuromarketing potencia un mensaje verdadero; no salva uno falso. Manipular consigue una venta y mata la recompra, que es donde está el negocio de verdad. La prueba es sencilla: si tu cliente supiera exactamente por qué le comunicaste así, ¿se sentiría bien atendido o engañado? Si es lo segundo, no lo hagas. Además del daño reputacional, en Perú la publicidad engañosa tiene consecuencias ante Indecopi.",
      },
    ],
    faq: [
      {
        q: "¿El neuromarketing manipula a las personas?",
        a: "No, si se usa bien. Comunicar de forma clara y en el orden en que el cerebro procesa la información no es manipular: es hacer más fácil una decisión que la persona ya quería tomar. La manipulación empieza cuando la afirmación es falsa, la urgencia es inventada o se oculta información importante.",
      },
      {
        q: "¿Necesito equipos caros para aplicarlo?",
        a: "No. El seguimiento ocular y las mediciones de actividad cerebral están fuera del alcance de la mayoría de negocios, y tampoco hacen falta. Con pruebas comparativas, mapas de calor y observar a unos pocos usuarios reales se consigue casi todo el beneficio práctico.",
      },
      {
        q: "¿Funciona igual en Perú que en otros países?",
        a: "Los principios son universales porque el funcionamiento del cerebro lo es, pero las referencias culturales no. La prueba social, por ejemplo, pesa mucho en mercados donde la recomendación cercana manda, como el peruano. Lo prudente es tomar el principio y validarlo con tu propio público.",
      },
      {
        q: "¿Sirve para un negocio pequeño?",
        a: "Sobre todo para un negocio pequeño, porque la mayoría de mejoras no cuesta dinero: reordenar una página, cambiar el texto de un botón, poner las reseñas donde se ven o simplificar las opciones. Son decisiones de criterio, no de presupuesto.",
      },
      {
        q: "¿Cuál es la diferencia con la psicología del consumidor?",
        a: "Se solapan bastante. La psicología del consumidor estudia el comportamiento de compra en general; el neuromarketing se apoya además en lo que sabemos del funcionamiento del cerebro y en mediciones de respuesta no consciente. En la práctica del día a día, se usan juntas.",
      },
    ],
    cierre: "Entender cómo decide tu cliente sirve poco si tu marca y tus mensajes no lo reflejan. Ahí es donde este conocimiento se vuelve ventas.",
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
      {
        h2: "Antes del CPL: qué cuenta como lead y qué no",
        parrafo:
          "El CPL solo significa algo si todos entienden lo mismo por «lead». Un lead es una persona que dejó una forma de contactarla y mostró interés en lo que vendes. No es una visita a la web, no es un seguidor nuevo y no es alguien que comentó «precio?» y desapareció. Cuando una agencia y un cliente discuten porque «los leads no sirven», casi siempre están contando cosas distintas.",
        bullets: [
          { titulo: "Lead frío", texto: "dejó sus datos por un contenido o un sorteo, pero no tenía intención de comprar ahora. Sirve para nutrir, no para llamar hoy." },
          { titulo: "Lead tibio", texto: "preguntó por el producto o servicio. Hay interés real, pero falta información, presupuesto o momento." },
          { titulo: "Lead caliente", texto: "pidió precio, disponibilidad o una cita concreta. Es el que se enfría si tardas horas en responder." },
        ],
      },
      {
        h2: "Del CPL al costo por venta: la cuenta que casi nadie hace",
        parrafo:
          "El CPL es el primer eslabón, no el último. Lo que decide si la campaña es rentable es cuánto te cuesta cada venta cerrada, y eso depende de lo que pasa después del formulario. Un ejemplo con números redondos: inviertes S/2,000 y consigues 100 leads, así que tu CPL es S/20. De esos 100 contestan 60, de los 60 agendan 20 y de los 20 cierran 5. Tu costo por venta real es S/400, no S/20. Si tu margen por venta es S/1,200, la campaña funciona. Si es S/300, estás perdiendo dinero con un CPL que parecía excelente.",
        bullets: [
          { titulo: "Tasa de contacto", texto: "cuántos leads logras que te respondan. Es la que más sube si contestas en minutos en vez de en días." },
          { titulo: "Tasa de cita", texto: "cuántos de los contactados aceptan una reunión, visita o prueba." },
          { titulo: "Tasa de cierre", texto: "cuántas de esas citas terminan en venta. Aquí manda el equipo comercial, no la pauta." },
        ],
      },
      {
        h2: "Cómo saber qué ROAS necesitas de verdad",
        parrafo:
          "«Un ROAS de 3» no quiere decir nada sin conocer tu margen. Lo que importa es el punto de equilibrio: divide 1 entre tu margen bruto y sabrás por debajo de qué ROAS pierdes dinero. Con un margen del 50%, el equilibrio está en 2: por cada sol invertido necesitas vender dos para no perder. Con un margen del 20%, el equilibrio sube a 5, y un ROAS de 4 —que suena bien— te está costando dinero. Este cálculo cambia por completo la conversación sobre si una campaña «va bien».",
      },
      {
        h2: "Por qué tus números no cuadran con los de la plataforma",
        parrafo:
          "Es normal que Meta o Google reporten más conversiones que tu sistema interno, y no siempre es que mientan. Cada plataforma se atribuye las ventas de personas que vieron o tocaron su anuncio dentro de una ventana de tiempo, así que si alguien ve un anuncio en Instagram y luego busca tu marca en Google, las dos se apuntan la misma venta. A eso se suman los bloqueadores de anuncios, que impiden que parte de los datos vuelva, y las conversiones contadas dos veces cuando hay más de una etiqueta midiendo lo mismo. La salida no es elegir a quién creerle: es tener una fuente propia —el CRM o la hoja donde registras las ventas reales— y usar las plataformas para decidir dónde mover el presupuesto, no para saber cuánto vendiste.",
      },
    ],
    faq: [
      {
        q: "¿Qué es un lead caliente?",
        a: "Alguien que ya pidió algo concreto: precio, disponibilidad, una cita o una cotización. Se diferencia del lead tibio en que no le falta interés, le falta cerrar. Es también el que más rápido se pierde: la probabilidad de contactarlo cae mucho a partir de la primera hora.",
      },
      {
        q: "¿Cuál es un CPL bueno?",
        a: "No existe un número universal. Un CPL de S/10 puede ser malo si esos leads no cierran nunca, y uno de S/80 puede ser excelente si cada venta te deja miles de soles. La referencia útil no es el promedio del sector, sino tu propio costo por venta comparado con tu margen.",
      },
      {
        q: "¿Cuál es la diferencia entre CPL y CPA?",
        a: "El CPL mide lo que cuesta conseguir un contacto interesado. El CPA mide lo que cuesta conseguir la acción que de verdad te importa, que normalmente es la venta. Entre uno y otro está todo tu proceso comercial: velocidad de respuesta, calidad de la atención y capacidad de cierre.",
      },
      {
        q: "¿Se pueden mirar CPL y ROAS a la vez?",
        a: "Sí, y en la mayoría de negocios conviene. El CPL te dice si la captación está sana y el ROAS si el dinero vuelve. Cuando el CPL baja pero el ROAS también, casi siempre significa que estás atrayendo leads más baratos y peores.",
      },
      {
        q: "¿Por qué mi campaña tiene buen ROAS y aun así no gano dinero?",
        a: "Porque el ROAS mide ingresos, no beneficio. No descuenta el costo del producto, la comisión de la plataforma de pago, la logística ni el trabajo de tu equipo. Un ROAS por encima de tu punto de equilibrio —1 dividido entre tu margen bruto— es lo que indica rentabilidad real.",
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
      "Wix o desarrollo profesional: comparativa honesta de costo, velocidad, SEO, control y qué cuesta migrar después. Cuándo gana cada uno, sin vender humo.",
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
        tabla: {
          cabeceras: ["", "Constructor (Wix y similares)", "Desarrollo profesional"],
          filas: [
            ["Puesta en marcha", "Horas o días", "Semanas"],
            ["Estructura del costo", "Suscripción mensual, para siempre", "Inversión inicial mayor, mantenimiento menor"],
            ["Control de la velocidad", "Limitado: cargas lo que la plataforma decide", "Total: se optimiza lo que haga falta"],
            ["SEO técnico", "Lo básico resuelto, el detalle no", "Sin techo"],
            ["Diseño", "Plantilla que usan miles", "A medida de tu marca"],
            ["Integraciones", "Las del catálogo de la plataforma", "Las que necesite tu operación"],
            ["Si quieres cambiar", "Migrar es rehacer: el contenido no sale limpio", "El código y el contenido son tuyos"],
          ],
        },
      },
      {
        h2: "El costo que casi nadie cuenta: migrar",
        parrafo:
          "La comparación de precios suele quedarse en el primer año, y ahí el constructor gana siempre. El cálculo honesto incluye qué pasa cuando el negocio crece y la plataforma se queda corta, porque entonces no hay «actualización»: hay que rehacer. El contenido no se exporta limpio, las URLs cambian y, si no se redirigen una por una, se pierde el posicionamiento que costó años construir. Ese es el momento en el que un ahorro de dos años se paga de golpe.",
        nota: {
          tipo: "aviso",
          titulo: "La pregunta que evita el problema",
          texto: "Antes de elegir plataforma, pregúntate qué necesitará tu web dentro de dos años: ¿va a vender online, a conectarse con tu sistema de facturación, a tener versiones en otro idioma? Si alguna respuesta es sí, empezar donde vas a terminar sale más barato que migrar.",
        },
      },
      {
        h2: "Cuándo gana cada uno",
        parrafo:
          "No hay una respuesta universal, y desconfía de quien te la dé sin preguntarte nada. Estos son los casos en los que la decisión es bastante clara.",
        tabla: {
          cabeceras: ["Tu situación", "Qué conviene"],
          filas: [
            ["Estás validando una idea y necesitas estar online ya", "Constructor"],
            ["Negocio simple: informar, mostrar y que te escriban", "Constructor"],
            ["Presupuesto muy ajustado y nadie que mantenga la web", "Constructor"],
            ["La web es tu canal de ventas principal", "Profesional"],
            ["Compites por búsquedas donde el SEO decide", "Profesional"],
            ["Necesitas conectarla con CRM, facturación o inventario", "Profesional"],
            ["Tu marca tiene que verse distinta a las demás", "Profesional"],
          ],
        },
      },
      {
        h2: "Cómo decidir sin arrepentirte",
        parrafo:
          "Tres preguntas, en este orden. Si las tres se responden con honestidad, la decisión se toma sola y no hace falta comparar funcionalidades.",
        pasos: [
          { titulo: "¿Qué papel juega la web en tus ventas?", texto: "si es un folleto que la gente mira después de conocerte, el constructor sobra. Si es donde llega el desconocido que va a comprarte, no." },
          { titulo: "¿De dónde va a venir el tráfico?", texto: "si viene de tu red de contactos o de redes sociales, la plataforma importa poco. Si tiene que venir de Google, importa mucho." },
          { titulo: "¿Quién la va a mantener?", texto: "una web profesional abandonada envejece igual que una plantilla. Si no hay nadie que la actualice, elige la opción que puedas tocar tú." },
        ],
      },
    ],
    faq: [
      {
        q: "¿Wix es malo para el SEO?",
        a: "No es malo, es limitado. Resuelve bien lo básico —títulos, descripciones, sitemap— pero te deja poco margen en lo técnico: control fino de la velocidad, del marcado de datos estructurados o de cómo se sirven las imágenes. Para competir por búsquedas poco disputadas suele bastar; para pelear en un sector saturado, se queda corto.",
      },
      {
        q: "¿Puedo empezar con Wix y migrar después?",
        a: "Puedes, pero cuenta con que migrar es rehacer. El contenido no se exporta de forma que sirva en otra plataforma y las URLs cambian, así que hay que redirigir una por una para no perder posicionamiento. Es una opción razonable si de verdad estás validando; es cara si ya sabes hacia dónde vas.",
      },
      {
        q: "¿Una web profesional es siempre más rápida?",
        a: "No por definición: una web a medida mal hecha puede ser lentísima. Lo que da el desarrollo profesional es la posibilidad de optimizarla, que en un constructor simplemente no existe. Pide siempre ver las Core Web Vitals medidas con usuarios reales, no una promesa.",
      },
      {
        q: "¿Qué pasa si dejo de pagar la suscripción del constructor?",
        a: "La web deja de estar online. Es la diferencia de fondo entre alquilar y tener: con desarrollo propio pagas hosting y dominio, que son mucho más baratos y se pueden mover de proveedor; con un constructor, el sitio vive mientras dure la suscripción.",
      },
      {
        q: "¿Necesito saber programar para mantener una web profesional?",
        a: "No, si te la entregan con un gestor de contenidos y te enseñan a usarlo. Es una condición razonable que pedir antes de contratar: que puedas cambiar textos, fotos y precios sin depender de nadie.",
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
      "Automatiza WhatsApp para responder al instante, calificar y agendar sin vivir pegado al celular: qué se automatiza, App o API, y el error de sonar a robot.",
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
      {
        h2: "Por qué los minutos deciden la venta",
        parrafo:
          "La urgencia de responder rápido no es una intuición de vendedores: está medida. El estudio de referencia sobre tiempo de respuesta analizó más de 15.000 contactos y 100.000 intentos de llamada, y encontró que las probabilidades de calificar un lead se desploman al pasar de cinco a treinta minutos. Y sin embargo la mayoría de empresas tarda muchísimo más: una auditoría de más de dos mil compañías midió una media de primera respuesta de 42 horas. Ahí está la oportunidad completa —contestar rápido es una ventaja competitiva porque casi nadie lo hace—, y es exactamente lo que resuelve automatizar el primer contacto.",
        dato: {
          cifra: "21×",
          texto: "menos probabilidades de calificar un lead si lo contactas a los 30 minutos en vez de a los 5. Y la media de primera respuesta medida en 2.241 empresas fue de 42 horas.",
          fuente: "Lead Response Management Study (MIT / InsideSales.com) y Oldroyd, McElheran y Elkington, Harvard Business Review",
        },
      },
      {
        h2: "App de WhatsApp Business o API: cuál necesitas",
        parrafo:
          "Es la primera decisión y la que más gente se salta. La aplicación gratuita basta para muchos negocios pequeños; la API existe para cuando el volumen o el equipo la superan. Pasar a la API antes de tiempo añade costo y complejidad sin beneficio, y quedarse en la app cuando ya no da es lo que hace que se pierdan conversaciones.",
        tabla: {
          cabeceras: ["", "App WhatsApp Business", "WhatsApp Business API"],
          filas: [
            ["Para quién", "Negocio pequeño, una persona atendiendo", "Equipo, varios asesores, volumen alto"],
            ["Usuarios a la vez", "Limitado y atado a un teléfono", "Varios agentes sobre el mismo número"],
            ["Automatización", "Respuestas rápidas y mensaje de ausencia", "Flujos completos, calificación y derivación"],
            ["Integración con CRM", "No", "Sí, es su razón de ser"],
            ["Costo", "Gratis", "Por conversación, más la plataforma"],
            ["Cuándo dar el salto", "—", "Cuando se pierden mensajes o no sabes quién respondió qué"],
          ],
        },
      },
      {
        h2: "Cómo montarlo sin romper la atención",
        parrafo:
          "El orden importa: casi todos los proyectos que fracasan empezaron por el chatbot y dejaron para el final quién contesta cuando el bot no sabe. Hazlo al revés.",
        pasos: [
          { titulo: "Escribe las 10 preguntas que más te hacen", texto: "sácalas de tus conversaciones reales de los últimos meses, no de lo que crees que preguntan. Ese listado es el 80% de la automatización." },
          { titulo: "Define qué es un lead caliente para ti", texto: "sin ese criterio, el bot no sabe a quién derivar y acaba pasándolo todo o nada. Suelen bastar dos o tres condiciones." },
          { titulo: "Decide el punto de traspaso a una persona", texto: "y quién es esa persona, con horario. La automatización aguanta hasta que hay que negociar; ahí empieza el trabajo humano." },
          { titulo: "Conecta la conversación al CRM", texto: "si el chat no deja registro, no hay seguimiento posible y vuelves al punto de partida con más tecnología." },
          { titulo: "Mide y recorta", texto: "revisa cada semana en qué punto la gente abandona el flujo. Casi siempre sobran preguntas, no faltan." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "La ventana de 24 horas",
          texto: "WhatsApp solo permite escribir libremente a un cliente durante las 24 horas siguientes a su último mensaje. Pasado ese plazo hay que usar plantillas aprobadas previamente. Es la regla que más planes de seguimiento rompe: si tu flujo asume que puedes escribir cuando quieras, dejará de funcionar en cuanto el contacto tarde un día en responder.",
        },
      },
      {
        h2: "Qué NO automatizar",
        parrafo:
          "La automatización tiene un límite claro y cruzarlo cuesta clientes. Todo lo que sea repetitivo, previsible y sin carga emocional es candidato. Todo lo que implique negociar, disculparse o decidir algo fuera de lo estándar, no.",
        bullets: [
          { titulo: "Un reclamo", texto: "quien escribe molesto y recibe un menú de opciones se va más molesto. Detectar el enfado y pasarlo a una persona es más valioso que cualquier respuesta automática." },
          { titulo: "Una negociación de precio o condiciones", texto: "un bot no puede ceder ni leer el margen que hay disponible." },
          { titulo: "El cierre", texto: "la automatización acerca al cliente hasta la puerta; el que la abre es alguien del equipo." },
          { titulo: "Preguntas que no estaban previstas", texto: "es mejor un «te paso con alguien del equipo» inmediato que una respuesta genérica que no resuelve nada." },
        ],
      },
    ],
    faq: [
      {
        q: "¿Se puede automatizar el WhatsApp normal?",
        a: "El WhatsApp personal no. La app de WhatsApp Business permite lo básico —mensaje de bienvenida, mensaje de ausencia y respuestas rápidas—, que ya cubre a muchos negocios pequeños. Para flujos de calificación, varios agentes sobre el mismo número o conexión con un CRM hace falta la API.",
      },
      {
        q: "¿Un chatbot espanta a los clientes?",
        a: "Espanta el que finge ser humano y el que no deja salir. Uno que responde al instante, dice claramente que es automático y ofrece hablar con una persona en el primer mensaje suele mejorar la experiencia, sobre todo fuera de horario, cuando la alternativa era el silencio.",
      },
      {
        q: "¿Qué se automatiza primero?",
        a: "La respuesta inmediata al primer mensaje y las preguntas frecuentes. Son lo más repetitivo y lo que más rápido se nota, porque atacan justo el punto donde se pierden los leads: el tiempo muerto entre que alguien escribe y alguien contesta.",
      },
      {
        q: "¿Puedo escribirle a un cliente cuando quiera?",
        a: "No. Fuera de la ventana de 24 horas desde su último mensaje, WhatsApp solo permite plantillas aprobadas de antemano. Conviene diseñar el seguimiento contando con esa restricción desde el principio.",
      },
      {
        q: "¿Cómo sé si la automatización está funcionando?",
        a: "Tres números: cuánto tardas en dar el primer contacto, qué porcentaje de conversaciones llega hasta el final del flujo y cuántas terminan en cita o venta. Si el tiempo de respuesta baja pero las citas no suben, el problema está en el traspaso a la persona, no en el bot.",
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
      "Cómo decide el consumidor peruano: qué lo frena, qué lo motiva y cómo adaptar tu mensaje. Confianza, WhatsApp y aversión al riesgo, con datos del mercado.",
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
      {
        h2: "El terreno real: un país conectado",
        parrafo:
          "Conviene empezar por descartar una idea vieja: que el cliente peruano «todavía no está online». Lo está, de forma masiva y sobre todo desde el móvil. Eso cambia la conversación: la ventaja ya no está en llegar antes que nadie a internet, sino en hacerlo mejor que el competidor que también está ahí. Y también significa que un negocio sin presencia digital ordenada no es invisible: es sospechoso.",
        dato: {
          cifra: "82%",
          texto: "de la población peruana usa internet —28,4 millones de personas—, y el 99,5% de quienes usan internet está en al menos una red social. TikTok ya es la segunda plataforma del país.",
          fuente: "Digital 2026 Report — Perú",
        },
      },
      {
        h2: "La desconfianza es el freno principal, no el precio",
        parrafo:
          "Cuando una venta no se cierra, el vendedor suele concluir que estaba caro. En la mayoría de los casos lo que falló fue el riesgo percibido: el cliente no estaba seguro de que fueras a cumplir. Es una desconfianza razonable en un mercado donde mucha gente ha pagado por adelantado algo que no llegó. La consecuencia práctica es que reducir el riesgo suele mover más que bajar el precio, y cuesta menos.",
        tabla: {
          cabeceras: ["Lo que el cliente teme", "Lo que lo desactiva"],
          filas: [
            ["Que no exista el negocio de verdad", "Dirección, fotos reales del local, RUC visible, perfil de empresa verificado"],
            ["Que paguen y no llegue", "Pago contra entrega, adelanto parcial, comprobante formal"],
            ["Que no le respondan después", "Tiempo de respuesta corto y un canal donde ya te escribió antes"],
            ["Que le vendan humo", "Casos con cifras, reseñas recientes, hablar también de lo que no haces"],
            ["Que sea peor de lo que parece", "Fotos sin retoque, video del producto real, política de cambios clara"],
          ],
        },
      },
      {
        h2: "WhatsApp no es un canal más: es el canal",
        parrafo:
          "En Perú, la conversación comercial ocurre en WhatsApp. Un formulario que promete respuesta «en 24 a 48 horas» compite contra un chat que responde en minutos, y pierde. Esto tiene una consecuencia incómoda para muchas webs: el botón más importante no es «enviar formulario», es el que abre una conversación. Y la contraparte es que si abres ese canal tienes que atenderlo: un WhatsApp que no responde hace más daño que no tenerlo.",
        nota: {
          titulo: "Un detalle que cambia la tasa de respuesta",
          texto: "Una llamada de un número desconocido a menudo no se contesta; un mensaje escrito, casi siempre se lee. Si tu proceso comercial arranca llamando, prueba a arrancar escribiendo y llamar después de la primera respuesta.",
        },
      },
      {
        h2: "Segmentar por momento, no solo por perfil",
        parrafo:
          "Edad, distrito y nivel socioeconómico describen a la persona, pero no explican por qué compra hoy y no el mes pasado. Lo que suele explicarlo es el momento: un cambio de trabajo, un hijo que entra al colegio, una campaña escolar, una fiesta patronal, el aguinaldo. Construir el calendario de esos momentos para tu categoría rinde más que afinar el rango de edad, y es información que sale de tus propias ventas del año pasado.",
        bullets: [
          { titulo: "Momentos del calendario", texto: "campaña escolar, Fiestas Patrias, Navidad, vendimia. Marcan picos previsibles que se pueden preparar con semanas de anticipación." },
          { titulo: "Momentos de la vida", texto: "mudanza, negocio nuevo, ascenso, boda. No se pueden predecir uno a uno, pero sí estar presente cuando alguien los busca." },
          { titulo: "Momentos de urgencia", texto: "algo se rompió, hay que entregar mañana. Aquí gana quien responde primero, no quien tiene mejor precio." },
        ],
      },
    ],
    faq: [
      {
        q: "¿En qué se diferencia el consumidor peruano de otros?",
        a: "Más que en gustos, en el peso que le da a la confianza y en el canal donde conversa. El riesgo percibido —que no cumplan, que no respondan— pesa mucho en la decisión, y la conversación comercial ocurre por mensajería y no por correo o formulario. Una estrategia copiada de otro mercado suele fallar justamente en esos dos puntos.",
      },
      {
        q: "¿Es cierto que en Perú todo se decide por precio?",
        a: "Es cierto cuando el cliente no percibe ninguna otra diferencia. Cuando dos opciones parecen iguales, el precio es el único criterio disponible. La salida no es bajarlo, es dar razones visibles para elegirte: prueba social, garantías, velocidad de respuesta o una especialización clara.",
      },
      {
        q: "¿Cómo genero confianza si mi negocio es nuevo?",
        a: "Con señales verificables en vez de adjetivos: fotos reales de tu local y tu equipo, datos formales de la empresa, un perfil de empresa verificado, y respuestas rápidas y concretas. Los primeros clientes se consiguen quitando motivos para desconfiar, no añadiendo promesas.",
      },
      {
        q: "¿Sirve segmentar solo por nivel socioeconómico?",
        a: "Sirve para dimensionar el mercado, no para escribir el mensaje. Dos personas del mismo nivel compran cosas distintas según su momento y su actitud. Cruzar el perfil con el motivo de compra da campañas mucho más precisas.",
      },
      {
        q: "¿Cada cuánto cambia este comportamiento?",
        a: "Los frenos de fondo —desconfianza, aversión al riesgo, preferencia por la conversación directa— son bastante estables. Lo que cambia rápido son las plataformas donde ocurre: la migración de atención hacia el video corto de los últimos años es el ejemplo más claro.",
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
      {
        h2: "Por qué funcionan: cómo decide realmente el cerebro",
        parrafo:
          "Los gatillos no son trucos de vendedor, son atajos que el cerebro usa porque no puede analizar todo con calma. Decidir a fondo cuesta energía y tiempo, así que la mayoría de decisiones cotidianas se toman por vía rápida —intuición, contexto, lo que hacen los demás— y solo después buscamos razones para justificarlas. Por eso una persona puede explicarte con argumentos impecables una compra que hizo en tres segundos. Entender esto cambia cómo se escribe: no se trata de convencer a un juez imparcial, sino de que la vía rápida no encuentre motivos para frenar.",
        bullets: [
          { titulo: "El esfuerzo es un costo", texto: "un formulario largo, un precio confuso o un proceso poco claro no solo molestan: se leen como riesgo, y ante el riesgo la respuesta por defecto es no hacer nada." },
          { titulo: "Lo familiar se percibe como más seguro", texto: "por eso la repetición coherente funciona, y por eso cambiar de mensaje cada mes cuesta caro." },
          { titulo: "El contexto define el valor", texto: "el mismo precio parece caro o barato según con qué se compare. La comparación se la das tú o se la inventa el cliente." },
        ],
      },
      {
        h2: "Cómo se ve cada gatillo en un anuncio real",
        parrafo:
          "El error habitual no es elegir mal el gatillo, es dejarlo en abstracto. Estos son los mismos seis, escritos como aparecerían en una pieza concreta.",
        bullets: [
          { titulo: "Reciprocidad", texto: "en vez de «contáctanos», entregar algo aprovechable sin condiciones: un diagnóstico, una plantilla, una respuesta útil. La deuda de gratitud es real y no hace falta forzarla." },
          { titulo: "Prueba social", texto: "«8 lotes vendidos con S/3,000» dice más que «somos líderes». Un número verificable pesa más que cualquier adjetivo." },
          { titulo: "Autoridad", texto: "mostrar el método, no el título. Explicar cómo se hace algo demuestra que sabes hacerlo mejor que declararlo." },
          { titulo: "Escasez", texto: "solo si el límite existe: quedan tres unidades de esa etapa, la promoción termina el viernes de verdad. Si el «último día» se repite cada semana, deja de funcionar y ensucia la marca." },
          { titulo: "Compromiso y coherencia", texto: "pedir un paso pequeño antes del grande. Una pregunta respondida por WhatsApp acerca más a la cita que un botón de «comprar»." },
          { titulo: "Aversión a la pérdida", texto: "contar qué cuesta no decidir —el precio de la etapa siguiente, el mes de agenda vacía— en vez de repetir lo bueno que es tu producto." },
        ],
      },
      {
        h2: "Los que NO deberías usar",
        parrafo:
          "Hay técnicas que funcionan en el corto plazo y que se pagan después. Todas comparten el mismo problema: le enseñan al cliente que tus mensajes no son fiables. Y en un mercado local, donde la gente se conoce y se pregunta entre sí, esa reputación se propaga mucho más rápido de lo que cualquier campaña puede reparar.",
        tabla: {
          cabeceras: ["Gatillo", "Uso honesto", "Uso que quema la marca"],
          filas: [
            ["Escasez", "Quedan tres unidades de esa etapa y es verdad", "«Últimas unidades» permanente"],
            ["Urgencia", "La promoción termina el viernes y termina", "Cuenta atrás que se reinicia al recargar"],
            ["Prueba social", "Casos reales con cifras verificables", "Testimonios comprados o inventados"],
            ["Autoridad", "Mostrar el método y los resultados", "Premios y sellos que nadie puede comprobar"],
            ["Anclaje de precio", "Comparar con la alternativa real", "Tachar un precio que nunca existió"],
          ],
        },
        nota: {
          tipo: "aviso",
          titulo: "La prueba de los cinco segundos",
          texto: "Si te incomodaría que el cliente supiera exactamente cómo montaste ese mensaje, no lo uses. Es una regla más útil que cualquier debate teórico sobre ética publicitaria, y se responde sola.",
        },
      },
      {
        h2: "Cómo saber si tu mensaje está funcionando",
        parrafo:
          "La psicología de ventas se puede probar, y probarla evita discusiones de gustos. Lo único que hace falta es cambiar una cosa a la vez y darle volumen suficiente para que el resultado no sea azar. Cambiar el titular y la imagen y el público a la vez y ver que mejoró no enseña nada, porque no sabes qué lo movió. Y cuidado con la métrica que se mira: un anuncio que dispara los clics pero no las citas no está persuadiendo, solo está llamando la atención.",
        bullets: [
          { titulo: "Una variable por prueba", texto: "titular, o imagen, o llamada a la acción. Nunca las tres." },
          { titulo: "Mira la métrica del final", texto: "citas o ventas, no clics. El clic barato es la trampa más común." },
          { titulo: "Da tiempo suficiente", texto: "con pocos resultados, cualquier diferencia es ruido. Decidir con veinte datos es tirar una moneda con más pasos." },
        ],
      },
    ],
    faq: [
      {
        q: "¿Los gatillos mentales son manipulación?",
        a: "Lo son cuando el argumento es falso. La escasez es honesta si el límite existe y manipuladora si te lo inventas; la prueba social es honesta si los testimonios son reales. El gatillo no es el problema: describe cómo decidimos las personas. Lo que se juzga es si lo que dice es verdad.",
      },
      {
        q: "¿Qué es la psicología de mercado?",
        a: "Es el estudio de cómo deciden realmente las personas cuando compran: qué las frena, qué las acelera y qué peso tienen la emoción, el contexto y lo que hacen los demás. Aplicada al marketing sirve para escribir mensajes que encajan con cómo se toma la decisión, en vez de asumir que el cliente compara opciones con una hoja de cálculo.",
      },
      {
        q: "¿En qué se diferencia del neuromarketing?",
        a: "El neuromarketing mide respuestas del cuerpo y del cerebro —atención, mirada, reacción emocional— con instrumentos. La psicología de ventas trabaja con principios de comportamiento ya establecidos y los aplica al mensaje. Una necesita laboratorio; la otra se puede usar mañana en un anuncio.",
      },
      {
        q: "¿Cuál de los seis gatillos funciona mejor?",
        a: "Depende del freno que tenga tu cliente. Si desconfía, prueba social y autoridad. Si duda del momento, escasez y aversión a la pérdida. Si le da pereza empezar, reciprocidad y un primer paso pequeño. Aplicar los seis a la vez en la misma pieza suele conseguir que no se note ninguno.",
      },
      {
        q: "¿Sirven igual en negocios que venden a empresas?",
        a: "Sirven, pero cambia el peso. En B2B la decisión es más lenta, hay más de una persona implicada y el riesgo personal de equivocarse pesa mucho: la autoridad y la prueba social —casos de empresas parecidas— rinden bastante más que la urgencia.",
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
      {
        h2: "Cómo segmentar sin tirar el presupuesto",
        parrafo:
          "El error más caro en inmobiliario no es el anuncio, es a quién se lo enseñas. Segmentar por «interesados en bienes raíces» suena lógico y es de lo peor que puedes hacer: ese interés lo tiene también quien mira propiedades por entretenimiento. Lo que sirve es acotar por señales que se parezcan a las de tus compradores reales, y para eso tienes que mirar quiénes te compraron el año pasado antes de tocar el administrador de anuncios.",
        bullets: [
          { titulo: "Radio geográfico realista", texto: "no es donde está el proyecto, es de dónde vienen los que compran. En proyectos de segunda vivienda, el comprador suele vivir a horas de distancia." },
          { titulo: "Públicos similares a tus clientes", texto: "cargar la lista de quienes ya compraron y pedir a la plataforma gente parecida rinde más que cualquier interés predefinido." },
          { titulo: "Quien ya interactuó", texto: "los que vieron el 75% de tu video o entraron a la landing valen mucho más que un público frío, y cuestan menos por resultado." },
          { titulo: "Excluir a los que ya compraron", texto: "obvio y casi nadie lo hace: sigues pagando por mostrarle el proyecto a quien ya firmó." },
        ],
      },
      {
        h2: "Formulario instantáneo o landing: cuál conviene",
        parrafo:
          "Es la decisión que más cambia la calidad del lead y casi siempre se toma sin pensar. El formulario instantáneo de la plataforma se rellena solo con los datos de la cuenta: consigue muchísimos más contactos y bastante más baratos, pero también más gente que dio un toque sin querer. La landing obliga a salir de la red y escribir los datos, así que trae menos leads, más caros y mucho mejor informados. Ninguna es mejor en abstracto: depende de dónde tengas el cuello de botella. Si tu equipo comercial está ocioso, formulario instantáneo. Si está saturado llamando a gente que no contesta, landing.",
        bullets: [
          { titulo: "Formulario instantáneo", texto: "volumen y bajo costo por lead, a cambio de más ruido. Añadir una pregunta abierta reduce el relleno accidental." },
          { titulo: "Landing propia", texto: "menos volumen, mejor intención, y te deja medir todo lo que pasa después con tus propias herramientas." },
          { titulo: "WhatsApp directo", texto: "el que menos fricción tiene en Perú, pero no deja un registro ordenado salvo que lo conectes a un CRM." },
        ],
        tabla: {
          cabeceras: ["", "Formulario instantáneo", "Landing propia"],
          filas: [
            ["Volumen de leads", "Alto", "Bajo"],
            ["Costo por lead", "Bajo", "Más alto"],
            ["Calidad del contacto", "Variable: hay relleno accidental", "Mejor: hubo intención de escribir"],
            ["Datos que puedes pedir", "Los de la cuenta, poco más", "Los que necesites"],
            ["Qué puedes medir después", "Poco: pasa dentro de la red", "Todo: es tu web"],
            ["Cuándo conviene", "Equipo comercial con capacidad libre", "Equipo saturado de leads que no califican"],
          ],
        },
      },
      {
        h2: "Cómo se estructura una campaña por fases",
        parrafo:
          "Un proyecto no se anuncia igual en el mes uno que en el seis, y meter todo el presupuesto en «captación» desde el primer día es la forma habitual de agotar el público y ver cómo sube el costo por lead semana a semana. La estructura que aguanta divide la inversión en tres frentes que conviven: alguien que no te conoce, alguien que ya te vio y alguien que ya dejó sus datos y no ha venido.",
        bullets: [
          { titulo: "Descubrimiento", texto: "video de recorrido a público frío. Objetivo: que la gente correcta sepa que el proyecto existe y dónde está." },
          { titulo: "Captación", texto: "formulario o landing a quienes ya mostraron interés. Aquí es donde el costo por lead tiene sentido mirarlo." },
          { titulo: "Recuperación", texto: "a quien dejó datos y no agendó. Un avance de obra o un cambio de condiciones da un motivo nuevo para volver a aparecer." },
        ],
      },
      {
        h2: "Por qué sube tu costo por lead con el tiempo",
        parrafo:
          "Casi todas las campañas inmobiliarias empiezan bien y se van encareciendo, y la explicación rara vez es que «el algoritmo cambió». En un mercado local el público disponible es finito: cuando llevas semanas mostrando el mismo anuncio a la misma gente, los que iban a responder ya respondieron y el resto lo ignora. Eso se ve en la frecuencia —cuántas veces ve tu anuncio la misma persona— antes de que se note en el costo. La solución no es subir el presupuesto sobre el mismo creativo, es cambiar el creativo o abrir público nuevo. Subir el presupuesto sin cambiar nada solo acelera el desgaste.",
      },
    ],
    faq: [
      {
        q: "¿Qué red funciona mejor para publicidad inmobiliaria en Perú?",
        a: "Meta —Facebook e Instagram— concentra la mayor parte de la captación porque permite generar demanda y segmentar por zona con precisión. Google sirve para capturar a quien ya está buscando activamente un proyecto o un distrito concreto, que suele ser menos gente pero con intención más alta. La mayoría de proyectos usa ambos con presupuestos muy distintos.",
      },
      {
        q: "¿Conviene poner el precio en los anuncios de lotes?",
        a: "Depende de tu cuello de botella. Ponerlo reduce el volumen de leads y sube su calidad, porque filtra a quien no puede pagarlo. No ponerlo genera más contactos y más trabajo de calificación. Si tu equipo se pasa el día llamando a gente que no califica, ponerlo casi siempre mejora el resultado final aunque el costo por lead suba.",
      },
      {
        q: "¿Cuánto tarda en verse resultado una campaña inmobiliaria?",
        a: "Los leads llegan en días; las ventas, no. El ciclo de decisión de un inmueble se mide en semanas o meses, así que juzgar una campaña por las ventas de la primera quincena lleva a apagarla justo cuando empezaba a llenar el embudo. Lo que sí se puede evaluar pronto es el costo por lead y, sobre todo, el porcentaje que llega a visita.",
      },
      {
        q: "¿Sirve el retargeting en proyectos inmobiliarios?",
        a: "Es donde mejor funciona, precisamente porque la decisión es lenta. Quien vio el recorrido completo o entró a la landing y no dejó datos sigue siendo un candidato semanas después, y volver a aparecer con el avance de obra cuesta una fracción de lo que cuesta un público frío.",
      },
      {
        q: "¿Por qué recibo muchos leads y ninguna visita?",
        a: "Suele ser una de tres: el anuncio promete algo que el proyecto no es, el formulario es tan fácil que se rellena sin intención, o el primer contacto tarda demasiado. Antes de tocar la campaña vale la pena medir cuánto se tarda en llamar al primer lead del día: si la respuesta se cuenta en horas, el problema no está en la pauta.",
      },
    ],
    cierre: "En Suggestion conectamos pauta, landing, drone y CRM para llenar tu sala de ventas.",
    moneyPage: { label: "Llenemos tu sala de ventas", href: "/marketing-inmobiliario" },
    relacionados: ["marketing-inmobiliario-ejemplos", "vender-proyecto-en-preventa"],
  },
  {
    slug: "marketing-para-restaurantes",
    categoria: "sectores",
    title: "Marketing para Restaurantes: Cómo Llenar Mesas | Suggestion",
    description:
      "Marketing para restaurantes que llena los días flojos: búsqueda local y reseñas, contenido que da hambre, promociones que no queman el margen y qué medir.",
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
      {
        h2: "Lo primero no es Instagram, es que te encuentren",
        parrafo:
          "La mayoría de restaurantes invierte su energía en redes y descuida el sitio donde se toma la decisión de verdad: la búsqueda local. Cuando alguien tiene hambre y busca dónde comer cerca, no abre Instagram, abre el mapa. Y esa búsqueda no es curiosidad: es una decisión a punto de tomarse. Un perfil de empresa completo —horarios correctos, fotos reales del local y de los platos, carta actualizada y reseñas recientes— convierte mejor que cualquier campaña, y no tiene costo por clic.",
        dato: {
          cifra: "76%",
          texto: "de quienes hacen una búsqueda de tipo «cerca de mí» visita un negocio dentro de las 24 horas siguientes. Es el tipo de búsqueda que menos tarda en convertirse en una visita real.",
          fuente: "Think with Google",
        },
        nota: {
          titulo: "Antes de pagar publicidad",
          texto: "Comprueba que tu ficha esté verificada, con el horario real —incluidos feriados—, la ubicación exacta en el mapa y fotos que representen lo que sirves hoy. Un perfil abandonado hace que la publicidad traiga gente a un local que parece cerrado.",
        },
      },
      {
        h2: "Las reseñas se piden, no se esperan",
        parrafo:
          "Casi ningún cliente contento escribe una reseña por iniciativa propia; el que sí escribe sin que se lo pidan suele ser el que se fue molesto. Por eso un restaurante con buena comida puede acabar con una nota mediocre: no es que tenga muchos detractores, es que solo ellos hablan. Pedirlas de forma sistemática corrige ese sesgo, y no requiere ninguna herramienta.",
        pasos: [
          { titulo: "Elige el momento", texto: "justo después de una experiencia buena, cuando pagan y todavía están en la mesa. Un mensaje al día siguiente rinde una fracción." },
          { titulo: "Hazlo fácil", texto: "un QR en la cuenta o en la mesa que lleve directo a escribir la reseña. Cada paso extra pierde a la mitad." },
          { titulo: "Que lo pida una persona", texto: "el mesero que atendió, en una frase. Convierte mucho más que un cartel." },
          { titulo: "Responde a todas", texto: "sobre todo a las malas, sin discutir y ofreciendo solucionarlo. Quien lee la respuesta no es quien se quejó, es el próximo cliente." },
          { titulo: "Nunca las compres", texto: "las plataformas las detectan y penalizan la ficha completa. El daño dura más que el beneficio." },
        ],
      },
      {
        h2: "Cada canal resuelve un problema distinto",
        parrafo:
          "«Hacer marketing» para un restaurante no es una sola cosa. Antes de repartir tiempo y presupuesto conviene saber qué problema tienes: que no te conocen, que no te encuentran, que no vuelven o que el martes está vacío.",
        tabla: {
          cabeceras: ["Canal", "Qué problema resuelve", "Cuándo priorizarlo"],
          filas: [
            ["Perfil de empresa y mapa", "Que no te encuentren cuando ya tienen hambre", "Siempre. Es lo primero y no cuesta pauta"],
            ["Instagram y TikTok", "Que no te conozcan ni deseen tu plato", "Para construir demanda y atraer público nuevo"],
            ["Publicidad geolocalizada", "Llenar un día concreto o lanzar algo", "Cuando hay una promoción con fecha"],
            ["WhatsApp", "Reservas y pedidos sin fricción", "En cuanto el volumen de mensajes supere al mesero"],
            ["Fidelización", "Que vengan una vez y no vuelvan", "Cuando ya llenas fines de semana"],
          ],
          nota: "El orden no es negociable: sin ficha ordenada, todo lo demás trae gente a un sitio que parece cerrado.",
        },
      },
      {
        h2: "Promociones que no queman tu margen",
        parrafo:
          "El descuento es la herramienta más fácil y la más cara. Rebajar el precio de lo que ya vendes bien te quita margen sin traer a nadie nuevo, y acostumbra al cliente a esperar la rebaja. Las promociones que funcionan no bajan el precio: cambian el comportamiento —el día, la hora o lo que pide el cliente.",
        bullets: [
          { titulo: "Mueve el día, no el precio", texto: "una propuesta que solo existe de martes a jueves llena los días flojos sin tocar lo que cobras el sábado." },
          { titulo: "Sube el ticket en vez de bajarlo", texto: "una combinación que añade entrada o bebida deja más margen que un porcentaje de descuento sobre el plato." },
          { titulo: "Pon un motivo", texto: "una promoción con una razón —temporada, aniversario, plato nuevo— no le enseña al cliente que tu precio normal está inflado." },
          { titulo: "Ponle fecha de fin y respétala", texto: "la que se renueva sola deja de ser promoción y pasa a ser tu precio." },
        ],
      },
      {
        h2: "Qué medir, en concreto",
        parrafo:
          "Un restaurante no necesita un panel complicado. Con cuatro números apuntados cada semana se ve casi todo lo que hace falta decidir, y ninguno de ellos es «seguidores».",
        tabla: {
          cabeceras: ["Número", "Qué te dice", "Dónde sale"],
          filas: [
            ["Reservas y pedidos por día", "Qué días están flojos de verdad", "Tu propio registro"],
            ["Ticket promedio", "Si las promociones suman o restan margen", "Caja"],
            ["Reseñas nuevas y nota media", "Si el sistema de pedirlas funciona", "Tu perfil de empresa"],
            ["Clientes que vuelven", "Si el problema es atraer o retener", "Reservas o programa de fidelización"],
          ],
        },
      },
    ],
    faq: [
      {
        q: "¿Qué es lo primero que debe hacer un restaurante en marketing?",
        a: "Ordenar su presencia en la búsqueda local: ficha verificada, horarios reales, ubicación exacta, fotos actuales y reseñas recientes. Es donde ocurre la decisión con más intención —quien busca dónde comer cerca ya tiene hambre— y no requiere presupuesto de publicidad.",
      },
      {
        q: "¿Cómo lleno el restaurante los días de semana?",
        a: "Con una propuesta que solo exista esos días, para no canalizar hacia ella a los clientes del fin de semana. Funciona mejor cambiar el comportamiento —un menú de mediodía, una noche temática— que rebajar el precio de lo que ya vendes.",
      },
      {
        q: "¿Cuántas reseñas necesito?",
        a: "Más que una cifra concreta, importa el flujo: es mejor recibir unas pocas cada semana que muchas de golpe y ninguna en un año. Las reseñas antiguas pesan menos, y una nota alta con la última reseña de hace dos años genera desconfianza.",
      },
      {
        q: "¿Vale la pena estar en apps de delivery?",
        a: "Depende de tu margen. Las comisiones son altas, así que un plato pensado para el local puede dejar de ser rentable en delivery. Muchos restaurantes lo resuelven con una carta distinta para ese canal en vez de renunciar a él o perder dinero en cada pedido.",
      },
      {
        q: "¿Publicar todos los días en redes ayuda?",
        a: "Publicar por publicar, no. Lo que mueve la aguja es el contenido que provoca una acción concreta —reservar, pedir, venir hoy— y que muestre comida real bien grabada. Tres publicaciones que dan hambre valen más que treinta de relleno.",
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
      {
        h2: "Lo que sí y lo que no puedes decir en publicidad de salud",
        parrafo:
          "Salud es una de las categorías más reguladas por las plataformas y, además, está sujeta a las normas sanitarias y de publicidad del país. Antes de escribir un anuncio conviene saber dónde está la línea, porque una cuenta rechazada retrasa semanas. Como criterio práctico: puedes describir el servicio, la especialidad y la experiencia del equipo; no puedes prometer resultados, sugerir que el paciente tiene una condición ni usar imágenes de antes y después como argumento principal.",
        bullets: [
          { titulo: "Evita el «tú» diagnóstico", texto: "las plataformas rechazan anuncios que dan por hecho el estado de salud de quien los ve («¿tienes dolor de rodilla?»). Reformularlo en tercera persona suele bastar." },
          { titulo: "Nada de garantías", texto: "«resultados garantizados» o «cura definitiva» son rechazo seguro y, en varias especialidades, también un problema regulatorio." },
          { titulo: "Credenciales verificables", texto: "número de colegiatura, especialidad y años de ejercicio construyen más confianza que cualquier adjetivo, y no dan problemas de aprobación." },
        ],
      },
      {
        h2: "La cita perdida cuesta más que el lead caro",
        parrafo:
          "En consultorios y clínicas el problema rara vez es conseguir contactos: es que no lleguen. Una agenda con ausentismo alto desperdicia horas de profesional que ya estaban pagadas, y esas horas cuestan mucho más que el anuncio que trajo al paciente. Antes de subir el presupuesto de captación vale la pena mirar cuántas de las citas agendadas se convierten en consulta efectiva; en muchos casos, recuperar ese porcentaje llena la agenda sin gastar un sol más.",
        bullets: [
          { titulo: "Confirmación el día anterior", texto: "un recordatorio por WhatsApp reduce las ausencias de forma notable y cuesta prácticamente nada." },
          { titulo: "Cancelación fácil", texto: "parece contraintuitivo, pero permitir cancelar libera el espacio a tiempo para otro paciente en vez de perderlo." },
          { titulo: "Lista de espera", texto: "tener a quién llamar cuando se libera un hueco convierte una cancelación en una consulta." },
        ],
      },
      {
        h2: "Las reseñas y el perfil local pesan más que la pauta",
        parrafo:
          "Cuando alguien busca un profesional de salud cerca, lo que decide muchas veces no es un anuncio sino lo que ve en el mapa: cuántas reseñas hay, de qué fecha son y cómo responde el consultorio a las críticas. Un perfil verificado, con horarios correctos, fotos reales del local y reseñas recientes convierte mejor que la mayoría de campañas, y no tiene costo por clic. Pedir la reseña en el momento adecuado —justo después de una consulta que fue bien, no por mensaje masivo semanas después— es lo que marca la diferencia entre tener tres reseñas y tener cincuenta.",
      },
      {
        h2: "El paciente que ya tienes vale más que el que persigues",
        parrafo:
          "En salud la recurrencia y la recomendación son el canal más rentable y el más ignorado. Un control anual recordado a tiempo, un tratamiento que quedó a medias o una familia que llega porque alguien quedó conforme cuestan una fracción de lo que cuesta captar a un desconocido. Antes de ampliar la inversión publicitaria conviene revisar la base de pacientes: cuántos no vuelven desde hace más de un año y cuántos dejaron un tratamiento incompleto. Casi siempre hay más agenda disponible ahí que en una campaña nueva.",
      },
    ],
    faq: [
      {
        q: "¿Cómo atraer pacientes a mi consultorio si recién empiezo?",
        a: "Empieza por lo que no depende de presupuesto: un perfil de empresa verificado con horarios y fotos reales, la especialidad y la zona claras en la web, y un canal de contacto que se responda rápido. Con esa base, una campaña pequeña segmentada por especialidad y distrito rinde mucho más que una grande sin ella.",
      },
      {
        q: "¿Qué presupuesto de publicidad necesita una clínica?",
        a: "La cifra importa menos que la relación entre el costo de captar un paciente y lo que ese paciente deja a lo largo del tratamiento. En especialidades donde el paciente vuelve varias veces, se puede pagar bastante más por la primera cita que en una consulta única. Calcula primero ese valor y el presupuesto se deduce solo.",
      },
      {
        q: "¿Por qué me rechazan los anuncios de salud?",
        a: "Casi siempre por interpelar directamente al usuario sobre su estado de salud, prometer resultados o usar imágenes de antes y después como reclamo. Reescribir el mismo mensaje en tercera persona y sin promesa de resultado suele resolverlo.",
      },
      {
        q: "¿Sirven las reseñas para conseguir más pacientes?",
        a: "Mucho, y más que en otros sectores: en salud la decisión se toma por confianza. Lo que pesa no es solo la nota media, sino la cantidad, lo recientes que sean y cómo responde el consultorio a las reseñas negativas.",
      },
      {
        q: "¿Cómo reduzco las citas a las que el paciente no llega?",
        a: "Con confirmación el día anterior, cancelación fácil y una lista de espera para cubrir los huecos. Es la mejora de rentabilidad más rápida en una agenda de salud, porque no requiere aumentar la captación.",
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
      {
        h2: "Cómo se escribe un posicionamiento en una frase",
        parrafo:
          "Un posicionamiento que no cabe en una frase no se va a sostener en el tiempo, porque nadie en el equipo lo va a recordar. La estructura clásica sigue funcionando porque obliga a decidir las cuatro cosas que importan: para quién, en qué categoría, qué prometes y por qué te van a creer. Escribirla es incómodo justamente porque cada hueco exige renunciar a algo.",
        bullets: [
          { titulo: "Para quién", texto: "el cliente concreto al que le sirves mejor que nadie. Si la respuesta es «cualquiera que necesite lo que vendo», todavía no hay posicionamiento." },
          { titulo: "En qué categoría", texto: "con qué te comparan en la cabeza del cliente. A veces la mejor decisión estratégica es cambiar de categoría en vez de competir mejor dentro de la actual." },
          { titulo: "Qué prometes", texto: "el beneficio principal, uno solo. Dos beneficios es cero beneficios." },
          { titulo: "Por qué te creen", texto: "la razón para creer: un dato, un método, una trayectoria, algo verificable. Sin esto, la promesa es publicidad." },
        ],
      },
      {
        h2: "Cómo saber si tu posicionamiento está funcionando",
        parrafo:
          "El posicionamiento no vive en tu manual de marca, vive en la cabeza de otras personas, así que la única forma de evaluarlo es escuchar. La prueba más barata y más brutal es preguntar a diez clientes que ya te compraron por qué te eligieron a ti, y comparar sus palabras con las tuyas. Cuando coinciden, el posicionamiento está entrando. Cuando cada uno dice algo distinto —o cuando todos dicen «porque estaban disponibles» o «porque eran más baratos»—, todavía no ocupas ningún lugar propio.",
        bullets: [
          { titulo: "Repiten tus palabras", texto: "cuando un cliente te explica a otro usando tu frase, el posicionamiento ya no depende de tu publicidad." },
          { titulo: "Te buscan por nombre", texto: "el aumento de búsquedas de tu marca es la señal más limpia de que ocupas un lugar." },
          { titulo: "El precio deja de ser la primera pregunta", texto: "cuando lo primero que preguntan es cómo trabajas y no cuánto cuestas, cambiaste de terreno." },
        ],
      },
      {
        h2: "Posicionamiento, identidad y rebranding no son lo mismo",
        parrafo:
          "Se confunden a diario y la confusión sale cara. El posicionamiento es la decisión estratégica: qué lugar quieres ocupar y para quién. La identidad visual es la consecuencia: cómo se ve y se oye esa decisión. Y el rebranding es el cambio de una o de las dos, normalmente porque el negocio cambió. Rediseñar el logo sin haber decidido el posicionamiento es la forma más cara de no cambiar nada: la marca se ve distinta y el cliente sigue pensando exactamente lo mismo de ella.",
      },
      {
        h2: "Cuánto tarda en notarse",
        parrafo:
          "Más de lo que casi nadie está dispuesto a esperar. Un posicionamiento se construye por repetición coherente, y la repetición necesita tiempo: los mismos mensajes, el mismo tono y las mismas decisiones sostenidos durante meses, no semanas. El error habitual no es elegir mal el territorio, es cambiarlo cada trimestre porque «no está funcionando» justo cuando empezaba a calar. Si algo tiene que cambiar rápido son las campañas; el posicionamiento es lo que las mantiene apuntando al mismo sitio.",
      },
    ],
    faq: [
      {
        q: "¿Qué es el posicionamiento de marca en palabras simples?",
        a: "Es el lugar que tu marca ocupa en la cabeza del cliente cuando piensa en tu categoría. No es lo que tú dices que eres: es lo que la otra persona recuerda y siente cuando te nombran, comparado con las alternativas que conoce.",
      },
      {
        q: "¿En qué se diferencia del branding?",
        a: "El posicionamiento es la decisión —qué lugar quieres ocupar y para quién—. El branding es cómo se expresa esa decisión: nombre, identidad visual, tono, experiencia. Uno es la estrategia y el otro su ejecución; hacer el segundo sin el primero es decorar sin saber qué se está diciendo.",
      },
      {
        q: "¿Cómo elijo el territorio que quiero ocupar?",
        a: "Buscando el cruce entre tres cosas: algo que a tu cliente le importe de verdad, algo que tú puedas sostener mejor que la competencia y algo que nadie esté ocupando ya con fuerza. Si falta cualquiera de las tres, el territorio no se sostiene.",
      },
      {
        q: "¿Puede una empresa pequeña posicionarse frente a una grande?",
        a: "Suele ser más fácil, precisamente por ser pequeña: puede elegir un nicho estrecho y ser inequívocamente la mejor opción ahí, algo que una marca grande no puede hacer sin renunciar a volumen. Competir de frente en la misma categoría y con el mismo mensaje es lo que no funciona.",
      },
      {
        q: "¿Cada cuánto se debe revisar el posicionamiento?",
        a: "Se revisa cuando cambia el negocio —nuevo público, nueva oferta, nuevo mercado— o cuando la evidencia dice que los clientes te perciben de una forma que ya no te sirve. Cambiarlo por calendario o por cansancio interno es la forma más rápida de no llegar nunca a ocupar un lugar.",
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
      "Qué usos de la IA en marketing dan resultados reales y cuáles son ruido, por dónde empezar y qué cuidar con los datos de tus clientes. Guía honesta 2026.",
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
      {
        h2: "Dónde ayuda de verdad y dónde no",
        parrafo:
          "La diferencia no está en la tarea sino en quién asume el costo del error. Cuando equivocarse es barato y se detecta al instante —un borrador flojo se reescribe—, la IA rinde. Cuando el error es caro o pasa desapercibido —un dato inventado en una propuesta, una decisión de rumbo—, sale mucho más cara de lo que ahorra.",
        tabla: {
          cabeceras: ["Tarea", "¿Ayuda la IA?", "Por qué"],
          filas: [
            ["Primeros borradores y variantes", "Sí, mucho", "Equivocarse es gratis y tú editas antes de publicar"],
            ["Responder preguntas frecuentes", "Sí", "Es repetitivo y previsible, justo lo que hace bien"],
            ["Resumir y ordenar información", "Sí", "Ahorra horas de lectura, tú validas lo importante"],
            ["Traducir y adaptar textos", "Sí, con revisión", "Buena base; el vocabulario técnico necesita ojo humano"],
            ["Decidir la estrategia", "No", "No conoce tu margen, tu equipo ni tu mercado real"],
            ["Datos y cifras para una propuesta", "No sin verificar", "Puede inventarlos con total aplomo"],
            ["Hablar con un cliente molesto", "No", "Requiere criterio y capacidad de ceder"],
          ],
        },
      },
      {
        h2: "Por dónde empezar sin quemar el intento",
        parrafo:
          "El fracaso típico es comprar una herramienta cara, usarla dos semanas y abandonarla. Suele funcionar mejor al revés: empezar por una tarea concreta que te robe tiempo cada semana y medir si de verdad lo ahorra.",
        pasos: [
          { titulo: "Elige una tarea repetitiva y medible", texto: "responder las mismas cinco preguntas, redactar la primera versión de los anuncios, ordenar los leads del mes. Una sola, no cinco." },
          { titulo: "Mide cuánto te toma hoy", texto: "sin ese número de partida, después no vas a saber si mejoró o solo lo parece." },
          { titulo: "Prueba dos semanas con revisión humana siempre", texto: "nada sale sin que alguien lo lea. Es la regla que evita casi todos los desastres." },
          { titulo: "Compara y decide", texto: "si ahorra tiempo real y la calidad se sostiene, se queda. Si no, se descarta sin drama y pruebas otra cosa." },
          { titulo: "Documenta lo que funciona", texto: "las instrucciones que dan buen resultado son un activo del equipo. Guardadas, cualquiera obtiene el mismo nivel; en la cabeza de una persona, se pierden." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "Cuidado con los datos de tus clientes",
          texto: "Antes de pegar una base de datos, una conversación o información sensible en una herramienta de IA, comprueba qué hace esa herramienta con lo que le mandas: hay servicios que usan lo que escribes para entrenar sus modelos. En Perú, los datos personales están protegidos por la Ley 29733, y tratarlos implica responsabilidades. Ante la duda, anonimiza antes de subir.",
        },
      },
      {
        h2: "La ventaja ya no es usarla",
        parrafo:
          "Hace un par de años, usar IA era una ventaja en sí misma. Hoy la usa todo el mundo, así que la ventaja se desplazó a otro sitio: al criterio para saber qué pedirle, a los datos propios que tú tienes y tu competencia no, y a la parte del trabajo que sigue siendo insustituiblemente humana —conocer a tu cliente, decidir a qué renuncias, sostener una relación—. El resultado paradójico es que cuanto más se generaliza la IA, más vale lo que no se puede generar: un caso real, una foto de tu equipo, un dato de tu propia operación, una opinión que alguien firma.",
      },
    ],
    faq: [
      {
        q: "¿La IA va a reemplazar al marketing?",
        a: "Reemplaza tareas, no el criterio. Escribe borradores, resume y clasifica muy rápido, pero no decide a quién le vendes, qué te diferencia ni a qué renuncias. Lo que sí está cambiando es qué parte del trabajo se paga: la ejecución repetitiva vale menos, el criterio vale más.",
      },
      {
        q: "¿Se nota cuando un contenido lo hizo una IA?",
        a: "Cuando se publica sin editar, se nota: suena correcto y no dice nada, y no contiene nada que solo tú puedas saber. Lo que delata a un texto automático no es la gramática, es la ausencia de experiencia propia, ejemplos concretos y datos de primera mano.",
      },
      {
        q: "¿Google penaliza el contenido hecho con IA?",
        a: "Lo que penaliza es el contenido sin valor, con independencia de cómo se produjo. Un artículo útil, verificado y con experiencia real detrás funciona aunque el borrador lo escribiera una IA; uno genérico y repetido no funciona aunque lo escribiera una persona.",
      },
      {
        q: "¿Qué herramienta de IA me conviene?",
        a: "Empieza por la tarea, no por la herramienta. Define qué te roba tiempo cada semana y busca qué lo resuelve; una suscripción cara que nadie usa es más común que un problema de elegir mal la marca.",
      },
      {
        q: "¿Puedo darle a la IA los datos de mis clientes?",
        a: "Con cuidado y sabiendo qué hace el servicio con esa información: algunos la usan para entrenar sus modelos. En Perú los datos personales están protegidos por la Ley 29733, así que lo prudente es anonimizar antes de subir cualquier base o conversación.",
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
      {
        h2: "Más ejemplos por formato",
        parrafo:
          "El ángulo decide qué dices; el formato decide si te creen. En inmobiliario, donde el comprador no puede tocar el producto antes de pagar, el formato hace la mitad del trabajo.",
        bullets: [
          { titulo: "Recorrido en video vertical", texto: "grabado a pie por el terreno o la obra, sin música épica: se ve el acceso, el entorno y el estado real. Genera menos leads que un anuncio bonito, pero llegan mejor informados." },
          { titulo: "Antes y después del entorno", texto: "cómo estaba la zona hace tres años y cómo está hoy. Es el argumento de valorización contado con evidencia en vez de con promesas." },
          { titulo: "Mapa con referencias", texto: "la ubicación explicada por lo que hay alrededor —colegio, vía principal, tiempo al centro— en vez de por coordenadas." },
          { titulo: "Testimonio de un comprador", texto: "alguien que ya compró explicando por qué. En una decisión de tanto dinero, la prueba social pesa más que cualquier adjetivo." },
          { titulo: "Comparativa honesta", texto: "en qué caso este proyecto NO conviene. Filtra curiosos y genera confianza en quien sí encaja." },
        ],
      },
      {
        h2: "Dónde se cae la venta: entre el lead y la visita",
        parrafo:
          "Los ejemplos que se comparten suelen ser del anuncio, pero el punto donde se pierde el dinero casi siempre está después. En el caso de arriba, de 350 leads llegaron 20 a la visita: eso es menos de 1 de cada 15, y aun así fue suficiente para vender 8 lotes. La diferencia entre una campaña rentable y una que no lo es rara vez está en el creativo; está en cuánto tarda alguien en llamar, en si la visita se agenda con día y hora concretos o queda en «cuando puedas», y en si hay alguien esperando cuando el interesado llega.",
        bullets: [
          { titulo: "Agenda cerrada, no abierta", texto: "«el sábado a las 10» convierte mucho más que «avísame cuando quieras venir»." },
          { titulo: "Recordatorio antes de la visita", texto: "con la ubicación exacta y el nombre de quien lo va a recibir." },
          { titulo: "Transporte resuelto", texto: "en proyectos alejados, ofrecer movilidad multiplica la asistencia." },
        ],
      },
      {
        h2: "Preventa y entrega inmediata no se anuncian igual",
        parrafo:
          "Vender un lote en preventa es vender una proyección: el comprador paga hoy por algo que existirá después, así que lo que hay que sostener es la credibilidad del proyecto —quién está detrás, qué ha entregado antes, en qué estado está la habilitación—. Vender con entrega inmediata es lo contrario: el producto se puede pisar, y lo que decide es la comparación directa con lo que hay en la zona. Usar el mismo anuncio para los dos casos es el error más común: al comprador de preventa le sobra el detalle del acabado y al de entrega inmediata le falta ver el terreno.",
      },
      {
        h2: "Cómo saber si tu marketing inmobiliario funciona",
        parrafo:
          "El número de leads es la métrica más fácil de conseguir y la que menos dice. En proyectos con ticket alto y ciclo largo, un mes puede cerrarse con pocos leads y mucha venta, o al revés. Las señales que de verdad indican salud son cuántos de esos contactos llegan a pisar el terreno, cuántas visitas terminan en separación y cuánto tarda el proceso completo desde el primer mensaje. Si el costo por visita baja y la tasa de cierre se mantiene, la campaña está mejorando aunque el costo por lead haya subido.",
      },
    ],
    faq: [
      {
        q: "¿Cuáles son los mejores ejemplos de marketing inmobiliario?",
        a: "Los que no venden metros y precio, sino una razón para decidir: valorización con evidencia, proyección de vida, o una comparación honesta con las alternativas de la zona. El formato que mejor acompaña esos ángulos suele ser el video de recorrido real, porque muestra lo que una foto retocada no puede.",
      },
      {
        q: "¿Cómo promocionar terrenos en venta sin bajar el precio?",
        a: "Cambiando el argumento en vez del número. Un terreno se compra por lo que va a valer y por lo que permite hacer, no por lo que cuesta hoy. Mostrar el desarrollo del entorno, los accesos y los plazos de habilitación sostiene el precio mejor que cualquier descuento.",
      },
      {
        q: "¿Cuántos leads hacen falta para vender un lote?",
        a: "Varía enormemente según el proyecto y el precio. Lo útil no es el promedio de nadie, sino tu propia cadena: cuántos leads llegan a visita y cuántas visitas cierran. Con esos dos porcentajes puedes calcular exactamente cuántos contactos necesitas para la meta del mes.",
      },
      {
        q: "¿Sirve el video con drone en marketing inmobiliario?",
        a: "Sirve cuando responde una pregunta real del comprador: dónde está, qué hay alrededor y en qué estado está la obra. Cuando es solo una toma aérea bonita sin contexto, se ve mucho y decide poco.",
      },
      {
        q: "¿Conviene poner el precio en el anuncio?",
        a: "Depende de qué problema tengas. Ponerlo reduce el número de leads y sube su calidad, porque filtra a quien no puede pagarlo. No ponerlo genera más volumen y más trabajo de calificación. Si tu equipo comercial está saturado de contactos que no califican, ponerlo suele ser la mejor decisión.",
      },
    ],
    cierre: "En Suggestion hacemos marketing inmobiliario que llena salas de ventas, no que junta curiosos.",
    moneyPage: { label: "Llenemos tu sala de ventas", href: "/marketing-inmobiliario" },
    relacionados: ["publicidad-inmobiliaria-en-redes", "vender-proyecto-en-preventa"],
  },
  {
    slug: "vender-proyecto-en-preventa",
    categoria: "inmobiliario",
    title: "Vender un Proyecto Inmobiliario en Preventa | Suggestion",
    description:
      "Cómo vender un proyecto inmobiliario en preventa: estrategia de valorización, captación de citas y seguimiento para cerrar antes de construir.",
    h1: "Cómo vender un proyecto inmobiliario en preventa",
    excerpt:
      "La preventa es la etapa más rentable y la más difícil: vendes algo que aún no existe. Se vende con percepción de valorización y confianza, no con planos. Así se hace.",
    date: "2026-06-03",
    secciones: [
      {
        h2: "¿Por qué la preventa es la etapa donde más se vende un proyecto inmobiliario?",
        parrafo:
          "Vender un proyecto inmobiliario en preventa funciona porque el comprador entra al precio más bajo de toda la vida del proyecto. Conforme avanza la obra, el precio sube: ese es tu argumento más fuerte. A ti te da flujo para construir y te confirma, con plata sobre la mesa, si el precio está bien puesto. Cuando la preventa no se mueve, el problema casi nunca es el mercado: es el mensaje o el proceso comercial.",
      },
      {
        h2: "¿Cómo se vende algo que todavía no está construido?",
        bullets: [
          { titulo: "Vende la valorización, no el ladrillo", texto: "el argumento es “el precio sube cuando avance la obra”. Muéstralo con la escalera de precios por etapa." },
          { titulo: "Genera urgencia real", texto: "condiciones de lanzamiento por etapas: quien espera, paga más. Si la urgencia es inventada, el comprador la huele." },
          { titulo: "Construye confianza", texto: "renders, avance de obra y entregas anteriores bajan el miedo a comprar sobre plano." },
          { titulo: "Capta y agenda rápido", texto: "pauta segmentada, página del proyecto y cita cerrada. Cada paso de más te cuesta interesados." },
          { titulo: "Sigue sin descanso", texto: "el seguimiento ordenado sostiene al interesado hasta que pisa el terreno." },
        ],
      },
      {
        h2: "Los dos compradores de una preventa (y qué mueve a cada uno)",
        parrafo:
          "En un mismo proyecto conviven dos personas distintas. Si les hablas igual, pierdes a las dos.",
        sub: [
          { h3: "El que compra para vivir", texto: "Le importa la ubicación, la seguridad, cuánto se demora al colegio o al trabajo y, sobre todo, la cuota: quiere saber si le alcanza. Le vendes cómo será su vida ahí, con plazos claros y papeles en regla." },
          { h3: "El inversionista", texto: "Decide con números: a cuánto entra hoy, a cuánto podría vender o alquilar después y en cuánto tiempo. Muéstrale la escalera de precios por etapa, el avance comprometido y qué se está construyendo alrededor." },
          { h3: "Un mensaje para cada uno", texto: "No hagas una sola pieza para los dos. Separa campañas y mide cuál trae mejores citas: casi siempre un público sostiene la venta y el otro solo hace ruido." },
        ],
      },
      {
        h2: "¿Qué necesitas antes de lanzar la preventa de tu proyecto?",
        parrafo:
          "Lanzar sin material es la forma más rápida de quemar presupuesto. Antes del primer sol en pauta:",
        bullets: [
          { titulo: "Render y recorrido", texto: "imágenes del proyecto terminado y video del terreno. El drone vende ubicación y entorno como ninguna foto." },
          { titulo: "Precio de lanzamiento por etapas", texto: "el precio de hoy solo convence si se ve cuánto costará en la siguiente etapa." },
          { titulo: "Plan de pagos escrito", texto: "inicial, número de cuotas y tipo de financiamiento. La primera pregunta real es “¿cómo pago?”." },
          { titulo: "Sala de ventas o punto de atención", texto: "un lugar físico, aunque sea un módulo en el terreno. La preventa se cierra cara a cara." },
          { titulo: "Documentación a la mano", texto: "partida, licencias y estado del trámite. Comprar sobre plano da miedo; los papeles lo bajan." },
          { titulo: "Quién responde y en cuánto", texto: "persona, horario y tiempo máximo de respuesta, definidos antes de encender la campaña." },
        ],
      },
      {
        h2: "¿Cómo conseguir citas calificadas y no curiosos?",
        parrafo:
          "Un formulario lleno no es una venta. El número que manda es cuántas personas se sientan contigo. Y el filtro empieza en el anuncio: con el rango de precio y la inicial a la vista, se autodescarta quien no puede comprar.",
        bullets: [
          { titulo: "Condiciones en la pieza", texto: "precio desde, inicial y forma de pago filtran mejor que cualquier pregunta posterior." },
          { titulo: "Pregunta poco, pero pregunta", texto: "zona, forma de pago y cuándo piensa comprar separan al interesado real del que solo mira." },
          { titulo: "Agenda en el primer contacto", texto: "la conversación no es para informar: es para poner día y hora." },
          { titulo: "Responde en minutos", texto: "el interesado escribe a varios proyectos; el primero en contestar se queda con la cita." },
        ],
      },
      {
        h2: "El seguimiento hasta la visita: ahí se pierde la mayoría de ventas",
        parrafo:
          "Entre el “sí, quiero ir” y llegar al terreno hay una semana de vida real: trabajo, familia, imprevistos. Ahí se cae la mayoría de ventas, no en el anuncio. Confirmar por escrito, mandar la ubicación y recordar el día anterior sube las visitas efectivas —las citas que sí llegan— sin gastar un sol más. Esperar que el interesado decida solo es el error que hace perder lotes.",
        bullets: [
          { titulo: "Todo en un CRM", texto: "el CRM es el sistema donde queda registrado cada interesado y cuándo toca volver a buscarlo. En el chat del celular, se pierde." },
          { titulo: "Tres o cuatro contactos, no uno", texto: "casi nadie decide un lote en la primera llamada." },
          { titulo: "El que no vino no está perdido", texto: "reprograma. Un “este sábado no puedo” no es un no." },
        ],
      },
      {
        h2: "¿Qué medir en una preventa (y qué puedes ignorar)?",
        parrafo:
          "Mide el embudo completo —el camino del interesado desde el anuncio hasta la firma—. Cinco números te dicen dónde se rompe la venta:",
        bullets: [
          { titulo: "Leads y costo por lead", texto: "cuántos dejan sus datos y cuánto te cuesta cada uno." },
          { titulo: "Citas agendadas", texto: "cuántos de ellos aceptaron día y hora." },
          { titulo: "Visitas efectivas", texto: "cuántas citas llegaron. Si agendas 20 y llegan 6, el problema es el seguimiento, no la pauta." },
          { titulo: "Separaciones y unidades vendidas", texto: "el único número que paga la obra." },
          { titulo: "Costo por venta", texto: "inversión total entre unidades vendidas. Te dice si el proyecto aguanta más presupuesto." },
        ],
      },
      {
        h2: "Caso real: 8 lotes vendidos con S/3,000 de pauta",
        parrafo:
          "Inmobiliaria Ceinys tenía buen producto y un proceso desordenado: interesados sí, citas pocas. Separamos los dos públicos, piezas centradas en la etapa inicial y el precio de lanzamiento, captura por formulario y WhatsApp con respuesta inmediata, y seguimiento hasta la visita. Con S/3,000 en Meta Ads: 350 leads, 20 visitas a sala de ventas y 8 lotes vendidos, equivalentes a S/350K. De 350 interesados, solo 20 se sentaron: esto no se gana por volumen de contactos, sino por lo que haces con ellos.",
      },
      {
        h2: "¿Cambia algo vender en preventa en un mercado como Ica?",
        parrafo:
          "Sí, y a favor. En una plaza regional el boca a boca pesa más: el comprador pregunta por quién está detrás del proyecto antes de ir a verlo, así que la reputación es parte del plan de ventas. Y las distancias son cortas: en Ica, del centro al terreno hay minutos. Puedes agendar la visita para el mismo fin de semana en que el interesado escribió, y esa velocidad vende.",
      },
    ],
    faq: [
      {
        q: "¿Qué es la preventa inmobiliaria?",
        a: "Es vender unidades antes de terminar la obra, muchas veces antes de empezarla. El comprador paga menos porque asume el tiempo de espera; el desarrollador consigue flujo para construir y una señal real de si el precio está bien puesto.",
      },
      {
        q: "¿Cuándo se lanza la preventa de un proyecto?",
        a: "Depende de tus permisos y de tu cronograma. Lo que sí conviene es no lanzar hasta tener render, precio de lanzamiento, plan de pagos y alguien que responda rápido. Lanzar sin eso quema presupuesto y desgasta al proyecto.",
      },
      {
        q: "¿Cuánto hay que invertir para vender en preventa?",
        a: "No hay cifra estándar: depende del precio de la unidad, de la competencia en tu zona y de cuántas necesitas colocar. Como referencia real, con Inmobiliaria Ceinys S/3,000 en Meta Ads dieron 350 leads, 20 visitas y 8 lotes vendidos. No es promesa; es prueba de que se puede empezar medido.",
      },
      {
        q: "¿Cómo logro que el interesado sí llegue a la visita?",
        a: "Confirma día, hora y punto de encuentro por escrito, manda la ubicación y recuerda el día anterior. Y reprograma al que no llegó en vez de darlo por perdido: ahí es donde más citas se recuperan.",
      },
      {
        q: "¿Funciona igual para lotes que para departamentos?",
        a: "El mecanismo es el mismo —precio de lanzamiento, confianza y seguimiento—, pero cambia el comprador. En lotes suele pesar más el inversionista y la decisión es más corta; en departamentos manda el financiamiento bancario y la fecha de entrega.",
      },
    ],
    cierre: "En Suggestion armamos la preventa completa: mensaje de lanzamiento, campañas separadas por tipo de comprador, página del proyecto y seguimiento hasta que el interesado se sienta en tu sala de ventas. Si vas a vender un proyecto inmobiliario en preventa, conversemos antes del lanzamiento.",
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
      "Pedir “ejemplos de marketing automotriz” y recibir piezas bonitas no le sirve a nadie. Acá tienes siete acciones concretas, del modelo del mes al taller, con qué se hace, por qué funciona y qué número mirar para saber si valió la pena.",
    date: "2026-06-08",
    secciones: [
      {
        h2: "¿Qué tienen en común los ejemplos de marketing automotriz que sí venden?",
        parrafo:
          "La mayoría de ejemplos de marketing automotriz que circulan son piezas lindas sin objetivo. Los que mueven la caja comparten tres cosas: piden una sola acción, filtran al que no puede comprar y se miden en unidades vendidas. En siete años con 19 marcas de vehículos —livianos, camiones y línea amarilla, incluida XCMG— comprobamos que el formato importa menos que esa disciplina. Van siete ejemplos aplicables desde esta semana: qué se hace, por qué funciona y qué medir.",
      },
      {
        h2: "Ejemplo 1: la campaña del modelo del mes",
        parrafo:
          "Eliges un solo vehículo del stock y le dedicas el mes completo: pauta, contenido orgánico, la web y el guion del asesor. Un mensaje repetido treinta días entra; seis en paralelo se anulan.",
        bullets: [
          { titulo: "Qué se hace", texto: "un modelo, una oferta y una pieza principal en video vertical. El resto del catálogo se calla ese mes." },
          { titulo: "Por qué funciona", texto: "nadie compara veinte opciones, compara dos o tres. Simplificar la decisión acorta el camino al piso." },
          { titulo: "Qué medir", texto: "citas agendadas para ese modelo y unidades salidas de ese stock. Las impresiones no dicen nada." },
        ],
      },
      {
        h2: "Ejemplo 2: financiamiento con la cuota al frente",
        parrafo:
          "La barrera casi nunca es el precio total: es la cuota. El anuncio pone inicial, cuota y plazo en los primeros segundos, y lleva a un simulador o a un asesor por WhatsApp.",
        bullets: [
          { titulo: "Qué se hace", texto: "condiciones visibles y un formulario corto que pregunta lo justo para saber si califica (dependiente o independiente, rango de inicial)." },
          { titulo: "Por qué funciona", texto: "filtra solo. Quien sabe que no califica no deja sus datos, y tu asesor deja de quemar mañanas con quien no iba a calificar." },
          { titulo: "Qué medir", texto: "qué porcentaje de tus leads (interesados que dejan sus datos) llega aprobado por la financiera." },
        ],
      },
      {
        h2: "Ejemplo 3: el evento de fin de semana que sale con autos firmados",
        parrafo:
          "Un sábado de puertas abiertas no vende solo. Vende la convocatoria previa: dos semanas de pauta dirigida a un perfil con intención y capacidad, más una condición que solo existe ese día. Con Autoniza, en Ica, así salieron 3 autos vendidos el 22 de mayo y 5 el 25 de junio.",
        bullets: [
          { titulo: "Qué se hace", texto: "invitación pagada con registro previo, recordatorio el día anterior y la oferta del día por escrito." },
          { titulo: "Por qué funciona", texto: "la fecha límite es verdadera y el cliente ya está frente al auto. Del interés a la firma queda una tarde." },
          { titulo: "Qué medir", texto: "registrados, asistentes y unidades firmadas el mismo día. Si vino gente y no firmó nadie, falló la oferta." },
        ],
      },
      {
        h2: "Ejemplo 4: posventa y taller, la mina olvidada del marketing automotriz",
        parrafo:
          "Casi nadie invierte en el taller y es el ingreso más predecible de un concesionario: cada unidad vendida vuelve por mantenimiento. La posventa te adelanta a que el cliente termine en el taller de la esquina.",
        bullets: [
          { titulo: "Qué se hace", texto: "mensajes a tu propia base según fecha de compra o kilometraje, con precio y horarios. Paquetes por temporada: revisión antes del feriado largo." },
          { titulo: "Por qué funciona", texto: "le hablas a gente que ya te compró y ya confía. Y quien mantiene su vehículo contigo vuelve cuando toca cambiarlo." },
          { titulo: "Qué medir", texto: "órdenes de trabajo agendadas, ticket promedio del taller y qué parte de tu base regresó este año." },
        ],
      },
      {
        h2: "Ejemplo 5: contenido que muestra el auto en uso, no la ficha técnica",
        parrafo:
          "El error típico es publicar la ficha técnica. Al comprador peruano le importa cómo se porta el vehículo en su realidad: la trocha, la carga, el consumo en carretera, cuántas maletas entran de verdad.",
        bullets: [
          { titulo: "Qué se hace", texto: "videos verticales cortos, un tema por pieza: la entrega de un cliente, la suspensión en camino malo, cuánto carga la tolva." },
          { titulo: "Por qué funciona", texto: "responde objeciones antes de que el cliente las diga y le deja material al asesor para mandar mientras negocia." },
          { titulo: "Qué medir", texto: "conversaciones iniciadas desde cada pieza y cuántas terminan en cita. Guardados y compartidos son pista; el conteo de me gusta, no." },
        ],
      },
      {
        h2: "Ejemplo 6: volver a quien cotizó y no compró",
        parrafo:
          "La mayoría de cotizaciones no cierra en la primera visita. Esa base —nombre, modelo consultado, fecha— es tu activo más barato y suele estar en un cuaderno o en el celular de un asesor que ya renunció.",
        bullets: [
          { titulo: "Qué se hace", texto: "ordenarla en un CRM (sistema que registra cada contacto y su seguimiento) y hacer remarketing (volver a mostrar anuncios a quien ya te contactó) con la novedad que cambia su decisión: llegó stock, cambió la tasa, hay bono." },
          { titulo: "Por qué funciona", texto: "ya sabes qué modelo quería y cuánto podía pagar. No arrancas de cero." },
          { titulo: "Qué medir", texto: "cierres de base antigua frente a cierres de contactos nuevos, y el costo de cada uno." },
        ],
      },
      {
        h2: "Ejemplo 7: línea amarilla y camiones, cuando el comprador es una empresa",
        parrafo:
          "Vender una excavadora o una flota no se parece a vender un auto familiar. Decide un comité, el ciclo dura meses y el argumento es costo por hora, repuestos y respaldo técnico. La campaña no busca venta rápida: busca entrar en la lista corta.",
        bullets: [
          { titulo: "Qué se hace", texto: "contenido técnico —fichas, máquina trabajando, tiempos de respuesta del servicio—, pauta dirigida a construcción, minería y agroindustria, y formularios que piden empresa y uso del equipo." },
          { titulo: "Por qué funciona", texto: "el comprador empresarial investiga antes de escribirte. Si no encuentra información seria, no te considera." },
          { titulo: "Qué medir", texto: "oportunidades abiertas y valor del embudo (las negociaciones en curso), no contactos sueltos. El cierre puede caer dos trimestres después." },
        ],
      },
      {
        h2: "¿Por dónde empiezas si solo puedes hacer una cosa?",
        parrafo:
          "Ordena tu base y activa posventa y remarketing: es lo más barato y lo que responde más rápido, porque le hablas a gente que ya te conoce. Recién después mete plata en captación nueva. En marketing automotriz, el error que más presupuesto quema es hacerlo al revés.",
        bullets: [
          { titulo: "Repartir el presupuesto en todo el catálogo", texto: "seis campañas chicas rinden menos que una bien hecha." },
          { titulo: "Prometer una condición y cambiarla en el piso", texto: "el cliente lo cuenta, y eso cuesta más que el descuento." },
          { titulo: "Dejar el mensaje del sábado para el lunes", texto: "cuando llamas, ya cotizó en otros dos sitios." },
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto debe invertir un concesionario en marketing digital?",
        a: "No hay cifra estándar, y desconfía de quien te la dé de frente. Trabájalo al revés: cuántas unidades quieres mover al mes, cuántas citas necesitas según tu tasa de cierre y cuánto cuesta hoy generar una cita. De ahí sale el presupuesto, y tienes que poder sostenerlo tres meses.",
      },
      {
        q: "¿Qué funciona mejor para vender autos, Meta o Google?",
        a: "Hacen trabajos distintos. Meta despierta el interés de quien todavía no está buscando; Google atiende al que ya escribió “camioneta 4x4 precio” y está comparando. Si alcanza para una sola, empieza donde ya hay intención de compra.",
      },
      {
        q: "¿Los eventos en concesionario venden o solo llenan de gente?",
        a: "Venden si la convocatoria está segmentada y hay una condición que solo existe ese día. Autoniza cerró 3 unidades el 22 de mayo y 5 el 25 de junio con ese esquema. Sin convocatoria previa, un evento es un gasto en toldo y bocaditos.",
      },
      {
        q: "¿Cuántos leads necesito para vender un vehículo?",
        a: "Depende de tu marca, tu precio y sobre todo de tu equipo comercial, así que no copies un ratio de internet. Saca el tuyo: divide los interesados del último trimestre entre las unidades vendidas en ese periodo. Ese número te dice si el problema está en la campaña o en el seguimiento.",
      },
      {
        q: "¿En cuánto tiempo se ven resultados?",
        a: "En livianos, las primeras citas suelen aparecer en los primeros días de campaña; el cierre depende de tu ciclo y de tu equipo. En camiones y línea amarilla se habla de meses, porque decide un comité. Nadie honesto te garantiza un plazo.",
      },
    ],
    cierre: "En Suggestion aterrizamos estos ejemplos de marketing automotriz para concesionarios de Ica y del resto del Perú: convocatoria, piso, posventa y base de datos, medidos en unidades vendidas.",
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
      {
        h2: "Por qué el tiempo de respuesta decide la venta",
        parrafo:
          "En automotriz, quien contesta primero se lleva la mayoría de las ventas. No porque venda mejor, sino porque el comprador de auto casi nunca deja sus datos en un solo sitio: llena el formulario de tres o cuatro concesionarios la misma tarde y compara. Cuando tu asesor llama al día siguiente, la conversación ya la tuvo con otro. Un lead contactado en los primeros minutos y uno contactado al día siguiente no valen lo mismo aunque hayan costado igual, y esa diferencia no se arregla con más presupuesto de pauta.",
        bullets: [
          { titulo: "Turno asignado", texto: "que cada lead tenga dueño desde que entra. Sin dueño, todos asumen que lo llamó otro." },
          { titulo: "Primer contacto inmediato", texto: "aunque sea un mensaje corto que reconozca la consulta y proponga hora de llamada." },
          { titulo: "Canal que el cliente usa", texto: "en Perú, WhatsApp se responde y una llamada de número desconocido a menudo no." },
        ],
        dato: {
          cifra: "21×",
          texto: "menos probabilidades de calificar un lead si lo contactas a los 30 minutos en vez de a los 5. La media de primera respuesta medida en 2.241 empresas fue de 42 horas: por eso llegar primero sigue siendo una ventaja disponible.",
          fuente: "Lead Response Management Study (MIT / InsideSales.com) y Oldroyd, McElheran y Elkington, Harvard Business Review",
        },
      },
      {
        h2: "Qué preguntar para calificar sin espantar",
        parrafo:
          "Calificar no es interrogar. Tres preguntas bien puestas separan al comprador real del que está mirando, y ninguna necesita sonar a filtro: se pueden hacer dentro de una conversación normal. La clave es que respondan a lo que de verdad cambia la venta —cuándo, cómo lo paga y qué maneja hoy— y no a datos que a nadie le sirven.",
        bullets: [
          { titulo: "Plazo", texto: "«¿para cuándo lo necesitas?» ordena la agenda mejor que cualquier puntaje. Quien responde «este mes» va primero." },
          { titulo: "Forma de pago", texto: "contado o financiado cambia el proceso completo. Si es financiado, saberlo temprano evita ilusionar a quien no va a calificar." },
          { titulo: "Vehículo actual", texto: "si hay una unidad de por medio, hay una parte de pago y también una fecha real de decisión." },
        ],
      },
      {
        h2: "Por qué el seguimiento vale más que el volumen",
        parrafo:
          "La mayoría de ventas de vehículo no se cierra en el primer contacto, y sin embargo la mayoría de los equipos comerciales abandona ahí. Un lead que dijo «lo voy a pensar» en marzo puede comprar en mayo, y comprará donde alguien se acordó de él. Ese seguimiento no es insistencia: es aparecer con algo útil —una unidad que encaja mejor, un cambio de condiciones, la llegada de un modelo— en vez de preguntar «¿ya decidiste?». Un CRM ayuda, pero antes que la herramienta está la regla: ningún lead se cierra sin una fecha de próximo contacto.",
      },
      {
        h2: "Camiones y línea amarilla no se venden como un auto",
        parrafo:
          "Cuando el vehículo es de trabajo, la lógica cambia. La decisión es de empresa, el ciclo es más largo, casi siempre hay más de una persona involucrada y lo que pesa no es el diseño sino el costo por kilómetro, la disponibilidad de repuestos y el respaldo del taller. Un anuncio que funciona para un auto familiar rara vez funciona aquí. En Suggestion hemos atendido 19 marcas de vehículos, entre livianos, camiones y línea amarilla, y la diferencia práctica es esa: en livianos compites por atención; en pesados compites por confianza y por tiempo de respuesta del servicio postventa.",
      },
    ],
    faq: [
      {
        q: "¿Cuántos leads necesita un concesionario al mes?",
        a: "Depende de tu tasa de cierre, no del sector. Si cierras 1 de cada 20 leads y quieres 10 ventas al mes, necesitas 200. La pregunta más útil es la inversa: si subes la tasa de cierre del 5% al 8%, necesitas 75 leads menos para el mismo resultado, y eso suele salir más barato que comprar más tráfico.",
      },
      {
        q: "¿Qué es un lead calificado en automotriz?",
        a: "Uno del que sabes tres cosas: en qué plazo quiere comprar, cómo piensa pagar y qué vehículo tiene hoy. Con eso el asesor puede priorizar la agenda del día. Sin eso, solo tiene una lista de nombres.",
      },
      {
        q: "¿Sirve pedir muchos datos en el formulario para filtrar?",
        a: "Filtra, pero también espanta. Cada campo extra reduce el número de personas que lo completan, y entre las que abandonan hay compradores reales que simplemente tenían prisa. Suele funcionar mejor un formulario corto y una calificación en el primer contacto.",
      },
      {
        q: "¿Por qué llegan leads que dicen que nunca dejaron sus datos?",
        a: "Casi siempre son formularios rellenados por error desde el móvil o campañas segmentadas por interés genérico en autos, no por intención de compra. Se corrige apuntando a señales de intención —búsquedas de modelo, financiamiento, comparativas— en vez de a quien «le gustan los autos».",
      },
      {
        q: "¿Cuántas veces conviene insistir con un lead que no responde?",
        a: "Más de lo que la mayoría hace y de forma más espaciada. Varios intentos repartidos en semanas, por canales distintos y con un motivo nuevo cada vez, rinden mucho más que tres llamadas el mismo día. Lo que quema al contacto no es el número de intentos, es repetir el mismo mensaje.",
      },
    ],
    cierre: "En Suggestion generamos y calificamos leads conectados a tu equipo comercial, para que ninguno se pierda.",
    moneyPage: { label: "Quiero leads que cierren", href: "/marketing-automotriz" },
    relacionados: ["marketing-automotriz-ejemplos", "publicidad-para-venta-de-autos"],
  },
  {
    slug: "publicidad-para-venta-de-autos",
    categoria: "automotriz",
    title: "Publicidad para Venta de Autos que Funciona | Suggestion",
    description:
      "Ideas de publicidad para venta de autos que generan interés y citas: formatos, mensajes y ofertas que mueven al comprador. Guía práctica 2026.",
    h1: "Publicidad para venta de autos: ideas que funcionan",
    excerpt:
      "La publicidad de autos compite por atención en un mercado saturado. Lo que separa un anuncio que llena el piso de uno que solo junta comentarios es el mensaje, el filtro y lo que pasa en los cinco minutos siguientes al formulario. Esto es lo que sí mueve al comprador a actuar.",
    date: "2026-06-17",
    secciones: [
      {
        h2: "¿Qué mensaje mueve de verdad la decisión de comprar un auto?",
        parrafo:
          "Nadie compra un auto por un adjetivo. La publicidad para venta de autos que funciona no habla de “diseño imponente”: habla de condiciones. El comprador ya sabe qué modelo le gusta; lo que no sabe es si puede pagarlo este mes. Tu anuncio tiene que responder eso antes que nada.",
        bullets: [
          { titulo: "Financiamiento y cuota mensual", texto: "la cifra que el comprador compara con su sueldo. Casi nadie la pone." },
          { titulo: "Cuota inicial", texto: "un “inicial desde…” con la cifra al frente mueve más que un porcentaje de descuento: define si puede empezar hoy." },
          { titulo: "Bono o beneficio", texto: "SOAT, primer mantenimiento, accesorios. Te cuesta menos que rebajar el precio y convence igual." },
          { titulo: "Modelo del mes", texto: "una unidad, una oferta. Anunciar todo el catálogo diluye el mensaje y encarece cada lead." },
          { titulo: "Entrega inmediata", texto: "“stock disponible, te lo llevas esta semana” le gana a la espera." },
        ],
      },
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
        h2: "Cómo se ve un anuncio que trae compradores y no curiosos",
        parrafo:
          "La diferencia no está en la creatividad, está en el filtro. Un anuncio que le habla a todos junta clics baratos y quema al equipo comercial. Uno que filtra dice la cuota, nombra el modelo y pide una cita.",
        sub: [
          { h3: "Menciona la condición, aunque descarte gente", texto: "Si el financiamiento exige un inicial del 20%, dilo. El que no califica te ahorra dos llamadas." },
          { h3: "Pide una cita, no un “me interesa”", texto: "“Agenda tu prueba” trae menos leads que “más información”, pero una parte real de ellos aparece." },
          { h3: "Muestra la unidad que sí tienes", texto: "El render de catálogo genera desconfianza cuando el comprador llega y ve otra cosa." },
        ],
      },
      {
        h2: "¿Se vende igual un liviano que un camión o una máquina de línea amarilla?",
        parrafo:
          "No, y confundirlos sale caro. Desde Ica hemos manejado pauta para 19 marcas de vehículos —livianos, camiones y línea amarilla (maquinaria pesada de construcción y movimiento de tierra)— y el comprador no se parece en nada.",
        sub: [
          { h3: "Liviano: decisión personal y rápida", texto: "Semanas, a veces días. Decide una familia, pesa la cuota y la emoción cuenta." },
          { h3: "Camión y línea amarilla: decisión empresarial y larga", texto: "Meses, y no decide una sola persona. El argumento no es el diseño: es el costo de operación, los repuestos, el respaldo del taller y el leasing (arrendamiento con opción de compra)." },
          { h3: "Cambia el canal, no solo el mensaje", texto: "Pesa más la búsqueda en Google y el contenido técnico que el video emocional. Pocos leads es lo normal: un cierre justifica meses de inversión." },
        ],
      },
      {
        h2: "¿Dónde conviene pautar publicidad para venta de autos?",
        parrafo:
          "Meta Ads para generar deseo y captar interesados; Google Ads para capturar a quien ya busca tu marca o modelo. La combinación cubre todo el embudo: del que aún no decide al que ya está buscando. Súmale remarketing —volver a mostrar el anuncio a quien ya visitó tu web—, porque en automotriz el indeciso es la norma. Y no descuides el catálogo de usados: trae búsquedas de intención altísima y a veces al comprador de un cero kilómetros.",
      },
      {
        h2: "El test drive es la conversión que sí predice la venta",
        parrafo:
          "Entre el formulario y la firma hay un paso que casi nadie mide: la prueba de manejo. Es la conversión intermedia real, donde el interesado invierte su tiempo y se sube. De ahí en adelante cierra tu asesor, no la pauta. Por eso conviene diseñar la campaña para agendar pruebas. Si no puedes ofrecer prueba del modelo anunciado, el equivalente es una visita con hora y asesor asignado.",
      },
      {
        h2: "Qué hacer con el lead en los primeros minutos",
        parrafo:
          "El mejor anuncio sin seguimiento es plata a medias. La ventana es corta: el interesado consulta a tres o cuatro concesionarios la misma tarde, y quien contesta primero se queda con la visita.",
        bullets: [
          { titulo: "Contesta en el mismo canal", texto: "si llenó un formulario en Meta, un WhatsApp antes de cinco minutos." },
          { titulo: "Propón horario, no folletos", texto: "el primer mensaje ofrece dos fechas concretas para la prueba de manejo." },
          { titulo: "Registra todo en un CRM", texto: "un sistema donde cada lead queda con su estado y su siguiente paso. En chats sueltos se pierde la mitad." },
          { titulo: "Insiste sin acosar", texto: "tres o cuatro contactos en dos semanas. Buena parte de las citas se agenda después del primer intento." },
        ],
      },
      {
        h2: "Eventos y activaciones: la pauta que se cierra el mismo día",
        parrafo:
          "Un evento en el concesionario convierte la publicidad en una fecha, y una fecha le pone plazo al indeciso. La clave está en la convocatoria: si llenas el local de paseantes, gastaste en gaseosa. Con Autoniza, en Ica, trabajamos convocatoria segmentada previa, activación en el punto y cierre en piso: 8 autos vendidos en 2 eventos —3 el 22 de mayo y 5 el 25 de junio—, firmados el mismo día.",
      },
      {
        h2: "Cómo medir si la publicidad para venta de autos funcionó",
        parrafo:
          "El costo por clic no te dice nada y el costo por lead te dice poco. La métrica que ordena la inversión de un concesionario es el costo por prueba de manejo, y detrás el costo por unidad vendida.",
        bullets: [
          { titulo: "Costo por prueba agendada", texto: "y cuántas de esas citas se presentaron. La asistencia delata la calidad del lead." },
          { titulo: "Costo por unidad vendida", texto: "la inversión del mes dividida entre los autos vendidos con origen en pauta." },
          { titulo: "Origen del lead registrado", texto: "si no anotas de dónde vino cada cierre, terminas apagando la campaña que sí vendía." },
          { titulo: "Ventana de medición realista", texto: "en camiones y maquinaria el cierre llega meses después. Evaluar a siete días te hace cancelar lo que funcionaba." },
        ],
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta hacer publicidad para venta de autos?",
        a: "No hay tarifa única, y quien te dé una cifra sin ver tu operación está adivinando. El presupuesto se calcula al revés: cuántas unidades quieres vender, cuántas pruebas de manejo necesitas para eso y cuánto te cuesta hoy cada prueba agendada.",
      },
      {
        q: "¿Conviene poner el precio o la cuota en el anuncio?",
        a: "En la mayoría de casos, sí. Ocultarlo trae más formularios, pero muchos se caen en la primera llamada al escuchar la cifra. Publicar la cuota o el inicial te deja un lead más caro por unidad y mucho más barato por venta.",
      },
      {
        q: "¿Cuántos leads necesito para vender un auto?",
        a: "Depende de tu tasa de cierre, y ese dato lo mides tú, no lo copias de un blog. Durante un mes anota cuántos leads llegaron, cuántos agendaron prueba, cuántos se presentaron y cuántos firmaron. Ahí ves en qué escalón se te cae la venta.",
      },
      {
        q: "¿Meta Ads o Google Ads para un concesionario?",
        a: "Los dos, en distinta proporción. Google captura a quien ya escribe el nombre del modelo; Meta genera interés en quien todavía no lo buscaba. Con presupuesto corto, empieza por Google en los modelos con demanda de búsqueda y suma Meta para lanzamientos y eventos.",
      },
      {
        q: "¿Sirve para vender camiones o maquinaria de línea amarilla?",
        a: "Sirve, con otras expectativas. El comprador es una empresa, el ciclo dura meses y llegan pocos leads: eso es normal. Aquí se mide la calidad de la oportunidad y las reuniones concretadas, no el volumen de formularios.",
      },
      {
        q: "¿En cuánto tiempo se ven resultados?",
        a: "En livianos, las primeras pruebas de manejo suelen aparecer en las primeras semanas; afinar audiencias y mensajes toma un par de meses. En camiones y maquinaria se piensa en trimestres. No prometemos plazos garantizados: mostramos el avance con los números de cada mes.",
      },
    ],
    cierre: "En Suggestion hemos llevado pauta de 19 marcas de vehículos, de livianos a línea amarilla. Armamos tu publicidad para venta de autos con una sola meta: pruebas de manejo agendadas y unidades saliendo del piso.",
    moneyPage: { label: "Pongamos a vender tu concesionario", href: "/marketing-automotriz" },
    relacionados: ["marketing-automotriz-ejemplos", "leads-para-concesionarios"],
  },
  {
    slug: "como-vender-pisco-y-vino-por-internet",
    categoria: "sectores",
    title: "Cómo Vender Pisco y Vino por Internet | Suggestion",
    description:
      "Cómo vender pisco y vino por internet desde tu bodega de Ica: marca, tienda, campañas por ocasión y enoturismo, con las cifras reales del sector. 2026.",
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
      {
        h2: "Con quién compites de verdad",
        parrafo:
          "Antes de decidir el mensaje conviene mirar el tamaño del vecindario. La denominación de origen no es un club pequeño: hay cientos de productores autorizados, y casi la mitad están en Ica. Eso significa que «pisco de Ica con DO» no te diferencia de nada —lo dice también el de al lado—. Lo que diferencia es todo lo que viene después: el valle concreto, la uva, el método, la familia, el premio verificable.",
        dato: {
          cifra: "235",
          texto: "productores de Ica autorizados a usar la denominación de origen Pisco, de 533 en todo el país: casi la mitad. La región concentra además el 57% de los despachos de exportación.",
          fuente: "Registro de productores autorizados de la DO Pisco (julio de 2025)",
        },
      },
      {
        h2: "La tendencia que decide tu estrategia",
        parrafo:
          "Hay dos curvas que van en direcciones opuestas y que casi nadie cruza al planificar: las exportaciones de pisco vienen creciendo, mientras el consumo interno lleva tiempo bajando. Para una bodega esto no es un dato de prensa, es una decisión estratégica. Si tu apuesta es el mercado nacional, estás peleando por una porción que se encoge y necesitas quitarle clientes a alguien: ahí manda la marca. Si tu apuesta es afuera, el terreno crece pero el juego es otro —etiqueta en inglés, certificaciones, capacidad de despacho y un comprador que evalúa proveedores, no una botella.",
        tabla: {
          cabeceras: ["", "Vender en Perú", "Vender al exterior"],
          filas: [
            ["Cómo va el mercado", "El consumo interno viene cayendo", "Las exportaciones vienen creciendo"],
            ["A quién le hablas", "Al consumidor final", "A un importador o distribuidor"],
            ["Qué decide la compra", "Marca, ocasión y recomendación", "Capacidad, consistencia y certificaciones"],
            ["Dónde ocurre", "Tienda online, redes, la propia bodega", "Ferias, rondas de negocio y tu web en inglés"],
            ["Qué necesitas primero", "Marca y contenido que den deseo", "Ficha técnica, volumen sostenido y respaldo formal"],
          ],
        },
      },
      {
        h2: "Las tres ocasiones que concentran la venta",
        parrafo:
          "El pisco y el vino no se compran de forma pareja durante el año: se concentran en fechas. Preparar esas fechas con antelación —producción, fotografía, campaña y stock— rinde mucho más que publicar de forma constante sin picos.",
        pasos: [
          { titulo: "Fiestas Patrias y Día del Pisco Sour", texto: "el momento de mayor intención del año para el consumidor nacional. La campaña se prepara semanas antes, no la semana de." },
          { titulo: "Regalo corporativo de fin de año", texto: "es venta B2B con ticket alto y decisión temprana: las empresas cierran proveedores mucho antes de diciembre. Necesita catálogo, opciones de personalizado y plazos claros." },
          { titulo: "Vendimia y temporada de visitas", texto: "aquí el producto no es la botella sino la experiencia. Reservas abiertas y contenido del viñedo con antelación." },
        ],
        nota: {
          titulo: "Antes de abrir la tienda online",
          texto: "Resuelve el envío de bebidas alcohólicas —embalaje, transportista y a qué provincias llegas de verdad— y déjalo escrito en la web. Es la primera duda de quien compra desde fuera de Ica, y no responderla en la página del producto cuesta más ventas que cualquier detalle de diseño.",
        },
      },
    ],
    faq: [
      {
        q: "¿Se puede vender pisco por internet en Perú?",
        a: "Sí, y las bodegas lo hacen. Lo que hay que resolver bien es la logística —embalaje para vidrio, transportista que acepte alcohol y cobertura real por provincia— y la verificación de mayoría de edad en el proceso de compra. Conviene dejar todo eso explícito en la web antes de invertir en atraer tráfico.",
      },
      {
        q: "¿Cómo diferencio mi pisco si todos son de Ica y con DO?",
        a: "Precisamente porque la denominación la comparten cientos de productores, no puede ser tu argumento principal. Lo que diferencia es lo específico: el valle, la variedad de uva, el método, la historia de la familia, los premios verificables y cómo se ve tu bodega por dentro.",
      },
      {
        q: "¿Conviene vender en marketplaces o en tienda propia?",
        a: "Los marketplaces dan volumen y visibilidad inmediata, pero se quedan comisión y no te dejan construir marca ni base de clientes. La tienda propia cuesta más de arrancar y es donde acumulas valor. Muchas bodegas empiezan en marketplace y van moviendo al comprador recurrente a su propia tienda.",
      },
      {
        q: "¿Vale la pena apostar por la exportación?",
        a: "Depende de tu capacidad, no de tu voluntad. El mercado externo crece, pero el importador no compra una botella: compra un proveedor que pueda sostener volumen y consistencia campaña tras campaña. Si eso todavía no es tu caso, rinde más consolidar la marca en el mercado nacional y el enoturismo.",
      },
      {
        q: "¿Qué contenido funciona mejor para una bodega?",
        a: "El que muestra lo que no se puede copiar: el viñedo, la destilación, la cata, las manos que trabajan. En una categoría donde el producto se juzga por confianza y tradición, el detrás de escena vale más que cualquier foto de estudio de la botella.",
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
      "Marketing B2B para agroexportadoras de Ica: web en inglés, certificaciones a la vista, material de feria y seguimiento. Con las cifras reales de la región.",
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
      {
        h2: "El dato que define tu marketing",
        parrafo:
          "Hay una cifra que ordena todas las decisiones de comunicación de una agroexportadora iqueña, y es la proporción de a dónde va la producción. Cuando prácticamente todo se va afuera, tu público no es el consumidor que compra en el mercado: es un comprador profesional al otro lado del mundo que evalúa proveedores. Eso descarta de golpe media estrategia habitual —contenido de recetas, promociones, campañas de temporada local— y pone el foco en otra cosa: credibilidad verificable.",
        dato: {
          cifra: "92%",
          texto: "de la producción agrícola de Ica se destina al mercado externo y solo el 8% al interno. Tu marketing no le habla a un consumidor: le habla a un importador.",
          fuente: "Reporte regional de Ica",
        },
      },
      {
        h2: "Dónde está Ica de verdad",
        parrafo:
          "Conviene tener el mapa claro, aunque no siempre halague. Ica es la segunda región agroexportadora del país —por detrás de La Libertad— y concentra alrededor de la quinta parte de las exportaciones agrícolas peruanas, con más de setecientas mil toneladas colocadas en unos setenta y cinco mercados. Ser el segundo en un país que lidera varias categorías a nivel mundial sigue siendo una posición muy fuerte, y es un argumento mucho más creíble frente a un importador que cualquier superlativo sin respaldo.",
        tabla: {
          cabeceras: ["Producto", "Peso en el valor agroexportado de Ica"],
          filas: [
            ["Uva", "32,8%"],
            ["Palta", "12,5%"],
            ["Arándano", "10,2%"],
            ["Espárrago", "5,9%"],
          ],
          nota: "Referencia de 2024. La concentración en uva explica por qué muchas empresas de la región compiten en la misma ventana y con el mismo argumento.",
        },
      },
      {
        h2: "Qué mira un importador antes de responderte",
        parrafo:
          "El comprador internacional hace una criba antes de contestar un solo correo, y la hace con lo que encuentra online. No busca inspiración: busca motivos para descartarte rápido y quedarse con una lista corta. Esto es lo que revisa, más o menos en este orden.",
        pasos: [
          { titulo: "Que la empresa exista y sea seria", texto: "web propia con dominio corporativo, correos que no sean gratuitos, datos formales y presencia coherente. Un correo de Gmail y un Facebook desactualizado bastan para quedar fuera." },
          { titulo: "Certificaciones vigentes y a la vista", texto: "Global G.A.P., HACCP, BRC, orgánico, comercio justo. No en un PDF que hay que pedir: visibles en la web, con su fecha." },
          { titulo: "Capacidad real y campaña", texto: "hectáreas, variedades, volumen por semana y ventana de cosecha. Un importador planifica su temporada: si no puede estimar si le sirves, no pregunta." },
          { titulo: "Trazabilidad y proceso", texto: "cómo se cosecha, se procesa y se despacha. Fotos y video del fundo y del packing hacen aquí más trabajo que cualquier texto." },
          { titulo: "Con quién has trabajado antes", texto: "mercados a los que ya exportas y tipo de cliente. Reduce el riesgo percibido más que ningún adjetivo." },
        ],
      },
      {
        h2: "Por qué el seguimiento es la mitad del trabajo",
        parrafo:
          "Una oportunidad de exportación no se cierra en la feria: se abre ahí. Entre el primer contacto y la primera orden pueden pasar meses y varias campañas, con muestras, auditorías y negociaciones de por medio. La mayoría de las oportunidades no se pierden por precio ni por calidad, se pierden porque nadie volvió a escribir en el momento adecuado. Un registro ordenado de cada contacto —qué pidió, en qué quedó, cuándo toca retomar— es una ventaja competitiva barata en un sector donde casi nadie lo hace bien.",
        nota: {
          tipo: "aviso",
          titulo: "El error más caro tras una feria",
          texto: "Volver con tarjetas y no escribir en las 48 horas siguientes. El importador vio decenas de proveedores esa semana; pasado ese plazo ya no recuerda cuál eras. El correo de seguimiento se prepara ANTES de viajar, no al volver.",
        },
      },
    ],
    faq: [
      {
        q: "¿Necesita una agroexportadora estar en redes sociales?",
        a: "Menos de lo que se cree, y con otro propósito. El importador no decide en Instagram, pero sí comprueba que la empresa exista y se vea activa. Para este sector rinde más una web sólida en inglés con certificaciones y capacidad a la vista, y usar LinkedIn para el contacto profesional, que publicar a diario en redes de consumo.",
      },
      {
        q: "¿La web tiene que estar en inglés?",
        a: "Sí, si el objetivo es exportar. Y no una traducción automática: la ficha técnica, las certificaciones y las condiciones comerciales tienen vocabulario propio, y un error ahí resta credibilidad justo donde más se juzga. Lo habitual es mantener las dos versiones, español para el entorno local e inglés para el comprador.",
      },
      {
        q: "¿Qué material hace falta para una feria internacional?",
        a: "Catálogo con fichas técnicas por producto, presentación institucional breve, y fotografía y video del fundo y el packing. Y algo que suele faltar: la secuencia de seguimiento escrita antes de viajar, para poder responder en las 48 horas siguientes a cada contacto.",
      },
      {
        q: "¿Cómo compito si vendo lo mismo que la empresa de al lado?",
        a: "Diferenciándote en lo que no es el fruto: consistencia campaña tras campaña, trazabilidad demostrable, prácticas laborales y ambientales, y capacidad de respuesta. Cuando el producto es comparable, el importador elige al proveedor que le da menos problemas, no al que tiene la mejor foto.",
      },
      {
        q: "¿Cuánto tarda en dar resultado el marketing B2B agro?",
        a: "Se mide en campañas, no en semanas. El ciclo va de la feria a la muestra, de la muestra a la auditoría y de ahí a la primera orden, y puede ocupar más de una temporada. Por eso el indicador útil no son los leads del mes, sino cuántas oportunidades avanzan de etapa.",
      },
    ],
    cierre: "En Suggestion construimos tu presencia B2B —web, contenido y marca— para abrir mercados desde Ica al mundo.",
    moneyPage: { label: "Abramos nuevos mercados", href: "/marketing-agroexportacion" },
    relacionados: ["como-vender-pisco-y-vino-por-internet", "posicionamiento-de-marca"],
  },
  {
    slug: "gigantografias-medidas-materiales-precios",
    categoria: "imprenta-btl",
    title: "Gigantografías: Medidas, Materiales y Precios | Suggestion",
    description:
      "Qué material pedir, qué medidas aprovechan el rollo y cuánto cuesta una gigantografía en Perú: desde S/19.50 el m². Guía para cotizar sin equivocarte.",
    h1: "Gigantografías: qué material pedir, qué medidas y cuánto cuesta",
    excerpt:
      "La mitad de los problemas con una gigantografía se deciden antes de imprimir: en el material que elegiste y en una medida que desperdicia medio rollo sin que nadie te avise.",
    date: "2026-10-04",
    secciones: [
      {
        h2: "Gigantografía, banner y lona: la misma pieza con tres nombres",
        parrafo:
          "En Perú los tres términos se usan casi como sinónimos, y eso provoca malentendidos al cotizar. Gigantografía es la impresión de gran formato, sin importar sobre qué. Banner es el material más común para hacerla —una lona de PVC que se mide en onzas— y lona es el nombre genérico de ese material. Cuando pidas precio, lo que define el costo no es la palabra que uses: es el material, el gramaje y los metros cuadrados.",
      },
      {
        h2: "Los materiales, y cuál aguanta la calle",
        parrafo:
          "El error más caro es pedir material de interior para un uso de exterior. Ahorra poco y dura semanas en vez de meses. Esta es la equivalencia práctica entre lo que te ofrecen y dónde funciona cada cosa.",
        tabla: {
          cabeceras: ["Material", "Dónde funciona", "Qué esperar"],
          filas: [
            ["Lona 8 onzas", "Interior: ferias, stands, pasillos", "Liviana y barata. En la calle se vence y destiñe pronto"],
            ["Lona 11 onzas", "Exterior de campaña corta", "El estándar de promociones y eventos de pocas semanas"],
            ["Lona 13 onzas o frontlit", "Exterior permanente, fachadas", "Resiste sol y lluvia. Es lo que se usa en paneles"],
            ["Vinil adhesivo", "Vidrios, paredes lisas, vehículos", "Se pega a la superficie. Pide laminado si va a recibir sol"],
            ["Tela sublimada", "Interior de alta definición, retail", "El mejor acabado fotográfico. No es para intemperie"],
          ],
          nota: "Si la pieza va a estar colgada más de tres meses a la intemperie, el ahorro de bajar de 13 a 11 onzas se te va en reimprimir.",
        },
      },
      {
        h2: "Cuánto cuesta una gigantografía en Perú",
        parrafo:
          "El precio se cotiza por metro cuadrado y baja cuanto más metros pidas: imprimir dos metros sueltos sale bastante más caro por metro que imprimir treinta del mismo material. Estos son los rangos del mercado peruano.",
        tabla: {
          cabeceras: ["Material", "Precio por m²"],
          filas: [
            ["Lona 8 onzas (interior)", "desde S/18"],
            ["Banner 11 onzas calidad media", "desde S/19.50"],
            ["Lona 13 onzas / frontlit", "desde S/25, hasta S/50"],
            ["Vinil adhesivo", "desde S/40, hasta S/70"],
            ["Tela sublimada", "desde S/60, hasta S/100"],
            ["Acabado premium, cualquier material", "hasta S/120"],
          ],
          nota: "Rangos del mercado peruano consultados en octubre de 2026. El extremo bajo sale de fichas de producto con precio listado; el alto, de referencias publicadas por proveedores del rubro. No son tarifas de Suggestion ni una cotización: el precio final depende del material, los metros y los acabados.",
        },
        dato: {
          cifra: "S/100 a S/400",
          texto: "es lo que suelen sumar aparte el diseño y la instalación, y es la partida que más sorprende a quien solo pidió precio por metro cuadrado.",
        },
      },
      {
        h2: "Las medidas que no te cobran de más",
        parrafo:
          "Aquí está el ahorro que nadie te ofrece. El material viene en rollos —el más común mide 3.20 metros de ancho— y se cobra lo que se consume del rollo, no lo que mide tu arte. Una pieza de 1.70 metros de alto obliga a cortar un rollo de 3.20 por la mitad y deja 1.50 metros de recorte que alguien paga, y ese alguien eres tú.",
        bullets: [
          { titulo: "Pregunta el ancho del rollo antes de definir la medida", texto: "y ajusta tu diseño a una fracción limpia de ese ancho. Es una conversación de dos minutos que puede bajar bastante el total." },
          { titulo: "Las medidas de banner más pedidas", texto: "1 × 2 m, 2 × 1 m, 3 × 1 m y 1 × 3 m. No es casualidad: aprovechan bien el rollo." },
          { titulo: "Suma el ruedo y los ojales", texto: "el dobladillo perimetral consume entre 3 y 5 cm por lado. Si tu medida es exacta por una restricción de la pared, avísalo al cotizar." },
          { titulo: "Para fachadas, mide dos veces", texto: "y toma la medida del espacio disponible, no la del muro completo. Las tuberías, los medidores y los avisos municipales están ahí y no se mueven." },
        ],
      },
      {
        h2: "Cuatro errores que arruinan un tiraje",
        parrafo:
          "Todos se detectan antes de imprimir y ninguno tiene arreglo después. Son los que más veces hemos visto costar una reimpresión completa.",
        bullets: [
          { titulo: "Mandar un archivo de baja resolución", texto: "en gran formato se trabaja a escala: un arte a 1:10 necesita más resolución de la que parece. Una foto bajada de redes sociales se va a ver pixelada a dos metros." },
          { titulo: "Poner texto pegado al borde", texto: "lo que queda a menos de 5 cm del filo se lo come el ruedo o el marco. Deja margen de seguridad." },
          { titulo: "Enviar el arte en RGB", texto: "la impresión trabaja en CMYK, y los azules y naranjas intensos de pantalla no existen en tinta. Si el color de tu marca es crítico, pide una prueba antes del tiraje completo." },
          { titulo: "Olvidar cómo se va a instalar", texto: "ojales, bolsillo para tubo, bastidor o pegado directo son decisiones de fabricación, no de instalación. Decidirlo después significa volver a cortar." },
        ],
        nota: {
          titulo: "La prueba que casi nadie pide",
          texto: "Para un tiraje grande, pide un retazo impreso del arte a tamaño real —medio metro basta— antes de mandar todo. Cuesta poco y es la única forma de ver el color real sobre ese material.",
        },
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta una gigantografía en Perú?",
        a: "Se cotiza por metro cuadrado. En octubre de 2026 el mercado peruano va desde unos S/18 por m² en lona de interior y S/19.50 en banner de 11 onzas, hasta S/120 por m² en acabados premium. El diseño y la instalación suelen sumar entre S/100 y S/400 aparte. El precio por metro baja cuanto más metros pidas.",
      },
      {
        q: "¿Qué significan las onzas de una lona?",
        a: "Son el gramaje del material: a más onzas, más cuerpo y más resistencia. Ocho onzas es para interior, once para exterior de campaña corta y trece o más para intemperie permanente. Es el dato que más influye en cuánto te va a durar la pieza.",
      },
      {
        q: "¿Cuánto dura una gigantografía en la calle?",
        a: "Depende del material y de dónde esté. Una lona de 11 onzas bien instalada aguanta una campaña de algunas semanas; una de 13 onzas o frontlit está pensada para meses de sol y lluvia. El viento y los amarres mal hechos destruyen más piezas que el clima.",
      },
      {
        q: "¿Qué resolución necesita mi archivo?",
        a: "Depende de la distancia de lectura. Una pieza que se ve de cerca necesita bastante más definición que un panel que se mira desde la calle. La regla práctica es entregar el arte a escala con la mayor resolución que tengas y preguntarle al proveedor si le sirve, antes de mandar el tiraje.",
      },
      {
        q: "¿Puedo llevar mi propio diseño?",
        a: "Sí, y casi siempre sale más barato. Pide las especificaciones antes de diseñar: medida final, margen de seguridad, modo de color y formato de archivo. Diseñar primero y adaptar después es como se pierden las tardes.",
      },
    ],
    cierre: "En Suggestion imprimimos gran formato y lo instalamos, con la pieza pensada para el sitio donde va a estar.",
    moneyPage: { label: "Imprenta y gran formato", href: "/servicios/imprenta" },
    relacionados: ["tarjetas-de-presentacion-medidas-y-errores", "letreros-para-negocio-cual-elegir"],
  },
  {
    slug: "tarjetas-de-presentacion-medidas-y-errores",
    categoria: "imprenta-btl",
    title: "Tarjetas de Presentación: Medidas y Precios | Suggestion",
    description:
      "Medidas estándar, gramajes, acabados y cuánto cuesta un millar en Perú: desde S/60. Y los errores de archivo que arruinan un tiraje entero.",
    h1: "Tarjetas de presentación: medidas, acabados y cuánto cuesta un millar",
    excerpt:
      "Es la pieza más barata que vas a mandar a imprimir y la que más veces se arruina por un detalle de dos milímetros. Esto es lo que hay que revisar antes.",
    date: "2026-10-04",
    secciones: [
      {
        h2: "Las medidas estándar, y por qué conviene respetarlas",
        parrafo:
          "En Perú conviven dos formatos y los dos son correctos. Lo que no conviene es inventar una medida propia: las fundas, los tarjeteros y las billeteras están hechos para estas dimensiones, y una tarjeta que no entra en una billetera termina en la basura antes de llegar al escritorio de nadie.",
        tabla: {
          cabeceras: ["Formato", "Medida", "Dónde se usa"],
          filas: [
            ["Estándar peruano", "9 × 5 cm", "El más pedido en el mercado local"],
            ["Estándar internacional", "8.5 × 5.5 cm", "Habitual en empresas con trato en el extranjero"],
            ["Cuadrada", "5.5 × 5.5 cm", "Más memorable, pero no entra en todos los tarjeteros"],
            ["Con bordes redondeados", "9 × 5 cm con troquel", "Mismo tamaño, acabado distinto. Lleva recargo"],
          ],
          nota: "Sea cual sea la medida, el arte se entrega con unos milímetros de sangrado por lado: la guillotina corta con una tolerancia y sin ese margen aparecen filos blancos.",
        },
      },
      {
        h2: "Gramaje y acabado: lo que se nota al tocarla",
        parrafo:
          "El gramaje es el peso del papel, y es lo primero que comunica una tarjeta antes de que nadie la lea. Por debajo de 300 gramos se siente endeble; el estándar profesional en Perú es couché de 350 gramos. El acabado decide el resto.",
        bullets: [
          { titulo: "Plastificado mate", texto: "el más elegido. Se ve sobrio, no deja huellas y se puede escribir encima con bolígrafo." },
          { titulo: "Plastificado brillante", texto: "satura más los colores y aguanta mejor el manoseo, pero marca huellas y no admite escritura." },
          { titulo: "UV sectorizado", texto: "barniz brillante solo sobre una zona —el logo, normalmente— con el resto mate. Es el truco de acabado con mejor relación entre costo y efecto." },
          { titulo: "Stamping o letterpress", texto: "lámina metálica o relieve hundido. Se nota de verdad y multiplica el precio. Tiene sentido en perfiles donde la tarjeta es parte del servicio." },
        ],
      },
      {
        h2: "Cuánto cuesta un millar en Perú",
        parrafo:
          "La unidad de venta es el millar, y ahí está la trampa de la imprenta: casi todo el costo es preparar la máquina, así que medio millar no cuesta la mitad. Si vas a necesitar más en seis meses, pedirlos juntos sale mucho mejor.",
        tabla: {
          cabeceras: ["Qué pides", "Precio por millar"],
          filas: [
            ["Couché 350 g, full color ambas caras, plastificado mate", "desde S/60"],
            ["Lo mismo con laminado y oferta de volumen", "desde S/89"],
            ["Couché 350 g con UV sectorizado", "desde S/120"],
            ["Bordes redondeados o troquel", "desde S/89, según el troquel"],
            ["Stamping metálico, letterpress o papeles especiales", "hasta S/450"],
          ],
          nota: "Rangos del mercado peruano consultados en octubre de 2026, tomados de fichas de producto con precio listado y de referencias publicadas por imprentas del rubro. No son tarifas de Suggestion ni una cotización.",
        },
      },
      {
        h2: "Qué poner y qué quitar",
        parrafo:
          "Una tarjeta tiene espacio para unos pocos datos y la tentación es llenarla. El criterio es simple: si alguien no va a usar ese dato para contactarte, le está quitando sitio al que sí.",
        bullets: [
          { titulo: "Un solo canal preferente", texto: "el número por el que de verdad contestas, destacado. Tres teléfonos y dos correos obligan a elegir, y quien duda no llama." },
          { titulo: "Qué haces, en pocas palabras", texto: "si tu marca no dice sola a qué te dedicas, una línea bajo el nombre vale más que el logo grande." },
          { titulo: "El reverso no tiene que estar vacío ni lleno", texto: "funciona bien con una sola idea: la lista de servicios, un código QR a tu web o simplemente el logo sobre color plano." },
          { titulo: "Cuidado con el QR", texto: "si lo pones, que lleve a algo útil y que siga funcionando dentro de dos años. Un QR roto es peor que ninguno." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "El error que más tirajes arruina",
          texto: "Un número de teléfono equivocado. Antes de aprobar el arte, que dos personas distintas marquen el número impreso y escriban el correo. Mil tarjetas con un dígito cambiado son mil tarjetas a la basura, y pasa más de lo que parece.",
        },
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta un millar de tarjetas de presentación en Perú?",
        a: "En octubre de 2026 el mercado va desde unos S/60 el millar en couché de 350 gramos a full color por ambas caras con plastificado mate, y sube hasta unos S/450 cuando entran acabados especiales como UV sectorizado, stamping metálico o letterpress. El millar es la unidad de venta habitual.",
      },
      {
        q: "¿Cuál es la medida de una tarjeta de presentación?",
        a: "En Perú lo más pedido es 9 × 5 cm. El estándar internacional es 8.5 × 5.5 cm y también se fabrica sin problema. Cualquiera de los dos entra en billeteras y tarjeteros, que es lo que importa.",
      },
      {
        q: "¿Qué gramaje conviene?",
        a: "Couché de 350 gramos es el estándar profesional y es lo que la gente reconoce como una tarjeta seria. Por debajo de 300 se siente floja al tacto, y ese es justamente el detalle que una tarjeta comunica antes de que la lean.",
      },
      {
        q: "¿Puedo pedir menos de un millar?",
        a: "Se puede, pero rara vez conviene. El grueso del costo está en preparar la impresión, así que medio millar no cuesta la mitad. Si prevés necesitar más en los próximos meses, pedirlos de una vez es bastante más barato por unidad.",
      },
      {
        q: "¿En qué formato entrego mi diseño?",
        a: "En PDF con el modo de color en CMYK, con sangrado de unos milímetros por lado y las tipografías convertidas a curvas. Pide las especificaciones exactas a tu imprenta antes de diseñar: cada taller tiene sus tolerancias.",
      },
    ],
    cierre: "En Suggestion diseñamos e imprimimos la papelería de la marca, con el archivo revisado antes de que entre a máquina.",
    moneyPage: { label: "Imprenta y papelería", href: "/servicios/imprenta" },
    relacionados: ["gigantografias-medidas-materiales-precios", "letreros-para-negocio-cual-elegir"],
  },
  {
    slug: "letreros-para-negocio-cual-elegir",
    categoria: "imprenta-btl",
    title: "Letreros para Negocio: Tipos y Precios | Suggestion",
    description:
      "Letrero luminoso, letras corpóreas o panel simple: cuál conviene a tu local, qué cuesta en Perú desde S/1,200 y qué permisos municipales necesitas.",
    h1: "Letreros para negocio: cuál elegir y cuánto cuesta en Perú",
    excerpt:
      "Es la inversión publicitaria que más tiempo va a estar trabajando para ti, y la única que no puedes apagar. Conviene acertar a la primera.",
    date: "2026-10-04",
    secciones: [
      {
        h2: "Qué tipo de letrero necesita tu local",
        parrafo:
          "La decisión no es de presupuesto, es de situación: desde dónde te van a ver, a qué velocidad pasa quien te mira y si necesitas que te vean de noche. Un local de avenida y uno de galería no tienen el mismo problema.",
        tabla: {
          cabeceras: ["Tipo", "Para qué local", "Qué resuelve"],
          filas: [
            ["Panel o aviso impreso", "Locales de calle con poco frente", "Lo básico: que sepan que existes. Lo más económico"],
            ["Letras corpóreas sin luz", "Fachadas con buena luz propia o ambiental", "Volumen y seriedad, a un costo contenido"],
            ["Letras corpóreas con LED", "Avenidas, horario nocturno, rubros de noche", "Visibilidad de día y de noche. El estándar comercial"],
            ["Letrero luminoso de caja", "Galerías, centros comerciales, pasillos", "Se lee de lado, que es como se circula en interiores"],
            ["Letrero de bandera o perpendicular", "Calles estrechas o veredas angostas", "Que te vean quienes caminan paralelos a la fachada, no de frente"],
          ],
          nota: "La pregunta que ordena todo: ¿desde qué punto exacto quieres que alguien te vea, y a qué hora? Párate ahí antes de decidir nada.",
        },
      },
      {
        h2: "Cuánto cuesta un letrero en Perú",
        parrafo:
          "El letrero es de las pocas piezas publicitarias donde la instalación puede ser una parte importante del total, y casi nunca viene en el primer precio que te dan. Pregunta siempre si está incluida.",
        tabla: {
          cabeceras: ["Concepto", "Rango"],
          filas: [
            ["Letras corpóreas iluminadas, formato pequeño o mediano", "desde S/1,200, hasta S/5,000"],
            ["Letras corpóreas iluminadas, gran formato", "desde S/3,000, hasta S/15,000"],
            ["Transporte e instalación", "desde S/200, hasta S/1,000 o más"],
            ["Mantenimiento preventivo anual", "entre 8 % y 12 % del valor de instalación"],
          ],
          nota: "Rangos del mercado peruano consultados en octubre de 2026, según referencias publicadas por proveedores de señalización del rubro. No son tarifas de Suggestion ni una cotización: el tamaño, el material y el tipo de iluminación mueven mucho el total.",
        },
        dato: {
          cifra: "40 % a 60 %",
          texto: "es lo que baja el costo un letrero de menor tamaño en acrílico con LED básico frente a un proyecto de gran formato. Para un negocio de barrio con tránsito peatonal, suele ser la decisión correcta.",
        },
      },
      {
        h2: "Lo que se lee y lo que no",
        parrafo:
          "Un letrero no es una página web pegada a la pared. Quien pasa dispone de un par de segundos y, si va manejando, la mitad de ellos mirando la pista. En ese tiempo no se lee un párrafo: se reconoce un nombre y se retiene una idea.",
        bullets: [
          { titulo: "El nombre, grande; el rubro, debajo", texto: "si tu marca no dice sola a qué te dedicas, esa segunda línea es la que trae clientes nuevos." },
          { titulo: "Contraste antes que color de moda", texto: "lo que se lee de lejos es la diferencia de luminosidad entre letra y fondo, no el color. Gris sobre blanco desaparece a diez metros." },
          { titulo: "Fuera el teléfono, la web y las redes", texto: "nadie los anota desde la vereda. Ese espacio vale más vacío, y el dato de contacto va en la puerta o en la vitrina, donde sí se detienen." },
          { titulo: "Prueba el peor caso", texto: "mira el diseño al tamaño de una uña en tu celular. Si a ese tamaño no se lee el nombre, tampoco se va a leer desde la calle." },
        ],
      },
      {
        h2: "El trámite que a muchos se les olvida",
        parrafo:
          "La publicidad exterior está regulada por cada municipalidad y la autorización no va incluida en el letrero. Hay municipios que exigen el trámite antes de instalar, con medidas máximas según la vía, y los operativos de retiro existen: en Ica se han retirado paneles colocados sin autorización, con multas de por medio.",
        bullets: [
          { titulo: "Pregunta en tu municipalidad antes de fabricar", texto: "las medidas máximas y las restricciones por tipo de vía cambian de distrito a distrito, y fabricar primero es cómo se pierde el dinero." },
          { titulo: "Si alquilas el local, revisa el contrato", texto: "muchos arrendamientos regulan qué se puede instalar en fachada y quién se queda con la estructura al salir." },
          { titulo: "Pide la garantía por escrito", texto: "sobre todo de la parte eléctrica. Un LED que falla a los seis meses en una fachada alta cuesta más desmontar que reparar." },
          { titulo: "Guarda el archivo del diseño", texto: "el día que haya que reponer una letra o rehacer la pieza, tener el arte original te ahorra empezar de cero." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "Antes de firmar nada",
          texto: "Pide ver dos letreros que el proveedor haya instalado hace más de un año, y ve a mirarlos. El acabado de un letrero recién hecho no dice nada; el de uno con un verano encima lo dice todo.",
        },
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta un letrero luminoso para un negocio en Perú?",
        a: "En octubre de 2026 las letras corpóreas iluminadas en acrílico o metal con LED van desde unos S/1,200 en formato pequeño o mediano y llegan hasta S/15,000 en gran formato. El transporte y la instalación suman aparte, desde S/200 y hasta S/1,000 o más según la altura y la complejidad.",
      },
      {
        q: "¿Letras corpóreas o letrero de caja?",
        a: "Las corpóreas se ven mejor de frente y dan sensación de marca establecida; el letrero de caja se lee de costado, que es como circula la gente en galerías y pasillos. Lo decide el ángulo desde el que te van a mirar, no el presupuesto.",
      },
      {
        q: "¿Necesito permiso municipal para poner un letrero?",
        a: "En general sí, y la autorización la tramita el negocio, no el proveedor del letrero. Cada municipalidad tiene sus propias medidas máximas y restricciones por tipo de vía, así que conviene preguntar antes de mandar a fabricar. Instalar sin autorización expone a retiro y a multa.",
      },
      {
        q: "¿Cuánto dura un letrero con LED?",
        a: "La estructura aguanta años; lo que falla primero suele ser la fuente de alimentación o algún módulo LED. Por eso conviene pedir garantía escrita de la parte eléctrica y presupuestar un mantenimiento preventivo anual, que en el mercado se calcula entre el 8 % y el 12 % de lo que costó instalarlo.",
      },
      {
        q: "¿Puedo poner solo mi logo sin el rubro?",
        a: "Puedes, pero solo funciona si tu marca ya es conocida en la zona. Para un negocio que está empezando, la línea que dice a qué te dedicas suele traer más clientes nuevos que el logo más grande.",
      },
    ],
    cierre: "En Suggestion diseñamos, fabricamos e instalamos letreros y estructuras, pensados para el punto exacto desde el que te tienen que ver.",
    moneyPage: { label: "Estructuras y letreros", href: "/servicios/estructuras-publicitarias" },
    relacionados: ["gigantografias-medidas-materiales-precios", "panel-valla-bicivalla-o-vehiculo-rotulado"],
  },
  {
    slug: "polos-personalizados-para-empresa",
    categoria: "imprenta-btl",
    title: "Polos Personalizados para Empresa: Guía y Precios | Suggestion",
    description:
      "Bordado, serigrafía, DTF o sublimado: cuál conviene según tu cantidad. Precios del mercado peruano desde S/8 por prenda y las cantidades mínimas reales.",
    h1: "Polos personalizados para empresa: qué técnica pedir y cuánto cuesta",
    excerpt:
      "La técnica correcta no es la más bonita: es la que corresponde a tu cantidad. Pedir serigrafía para doce polos o bordado para quinientos son dos formas distintas de pagar de más.",
    date: "2026-10-04",
    secciones: [
      {
        h2: "Las cuatro técnicas, y cuándo usa cada una",
        parrafo:
          "Casi todo el precio de un polo personalizado lo deciden dos cosas: cuántos pides y qué técnica usas para marcarlos. Y las dos están relacionadas, porque cada técnica tiene un costo de arranque distinto que se reparte entre las prendas del pedido.",
        tabla: {
          cabeceras: ["Técnica", "Rinde bien desde", "Qué consigue"],
          filas: [
            ["Bordado", "12 unidades", "El acabado más serio y duradero. Para logos pequeños en pecho"],
            ["DTF o vinil textil", "1 unidad", "Full color sin costo de arranque. Ideal para pedidos cortos"],
            ["Serigrafía", "50 unidades", "El más barato por unidad en volumen. Pocos colores planos"],
            ["Sublimado", "Depende del diseño", "Diseño que cubre toda la prenda. Solo sobre tela clara de poliéster"],
          ],
          nota: "La sublimación tiene una restricción que sorprende a mucha gente: no funciona sobre algodón ni sobre telas oscuras. Si tu uniforme es azul marino de algodón, esa técnica queda descartada de entrada.",
        },
      },
      {
        h2: "Cuánto cuesta en el mercado peruano",
        parrafo:
          "El precio por prenda baja fuerte con la cantidad, y conviene ver los dos extremos antes de decidir el tamaño del pedido.",
        tabla: {
          cabeceras: ["Qué pides", "Precio por prenda"],
          filas: [
            ["Bordado en pecho, desde 12 unidades", "desde S/8"],
            ["DTF en pecho, una sola unidad", "hasta S/25"],
            ["DTF en pecho, 50 prendas del mismo diseño", "desde S/12"],
            ["Digitalización del logo para bordado, pago único", "desde S/30, hasta S/80"],
          ],
          nota: "Rangos del mercado peruano consultados en octubre de 2026, tomados de listas de precios publicadas por talleres de estampado del rubro. Son solo la marca: el costo de la prenda va aparte si no la pones tú. No son tarifas de Suggestion ni una cotización.",
        },
        dato: {
          cifra: "De S/25 a S/12",
          texto: "es lo que cae el precio por prenda del mismo estampado al pasar de una unidad a cincuenta. La cantidad es, de lejos, la variable que más mueve el total.",
        },
      },
      {
        h2: "El costo de arranque que no aparece en el precio",
        parrafo:
          "Hay partidas que se pagan una sola vez, da igual si pides doce polos o quinientos. En un pedido corto pueden pesar más que las prendas, y por eso un presupuesto de doce unidades parece caro por prenda sin que nadie te esté estafando.",
        bullets: [
          { titulo: "La digitalización del bordado", texto: "convertir tu logo al formato que entiende la máquina cuesta entre S/30 y S/80 la primera vez. Después ese archivo es tuyo y no se vuelve a pagar: pídelo." },
          { titulo: "Los marcos de serigrafía", texto: "se prepara uno por color del diseño. Un logo de cuatro colores cuesta cuatro veces más de arrancar que uno de un color." },
          { titulo: "La muestra física", texto: "pídela siempre en pedidos grandes. Ver el color real sobre la tela real evita el desastre de quinientas prendas con un tono que no era." },
          { titulo: "Las tallas", texto: "manda el cuadro de tallas con nombres si es para uniformar a un equipo. Repartir después lo que llegó sin asignar es el caos garantizado." },
        ],
      },
      {
        h2: "Elegir la prenda, no solo la marca",
        parrafo:
          "Un polo que nadie se pone no hace publicidad. En clima costero y de trabajo, la tela decide si la prenda vive en el cuerpo del equipo o en el fondo de un cajón.",
        bullets: [
          { titulo: "Algodón para uso diario", texto: "más cómodo con calor y mejor percibido. Encoge algo al lavarse, así que conviene pedir la talla justa arriba." },
          { titulo: "Poliéster o mezcla para campo y deporte", texto: "seca rápido y aguanta mejor los lavados seguidos. Es la opción obvia para cuadrillas y activaciones." },
          { titulo: "Pique para la camiseta tipo polo con cuello", texto: "es lo que da aspecto de uniforme formal. El cuello se deforma con el uso: ahí el gramaje importa." },
          { titulo: "Cuidado con la talla única", texto: "no existe. Un pedido sin curva de tallas termina con prendas que no se pone nadie y con gente usando la de otro." },
        ],
        nota: {
          titulo: "Una prueba que vale la pena",
          texto: "Antes de un pedido grande, lava una muestra tres veces. El estampado que se cuartea y el color que se va aparecen ahí, no en la entrega.",
        },
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta personalizar un polo en Perú?",
        a: "En octubre de 2026 el bordado en pecho va desde unos S/8 por prenda a partir de 12 unidades, más la digitalización del logo, que se paga una vez y cuesta entre S/30 y S/80. El estampado DTF está en unos S/25 si pides una sola unidad y baja a unos S/12 por prenda a partir de 50. Esos montos son por la marca; la prenda va aparte si no la pones tú.",
      },
      {
        q: "¿Cuál es la cantidad mínima?",
        a: "Depende de la técnica. Con DTF o vinil textil puedes pedir desde una unidad. El bordado suele arrancar en 12 y la serigrafía se vuelve rentable a partir de unas 50 prendas del mismo diseño. Si necesitas pocas unidades, pedir serigrafía es pagar de más.",
      },
      {
        q: "¿Bordado o estampado?",
        a: "El bordado se ve más formal, aguanta más lavados y es lo habitual en uniformes de cara al cliente, pero solo sirve para logos pequeños y de pocos detalles. El estampado permite diseños grandes y a todo color. Para un degradado o una foto, el bordado directamente no es una opción.",
      },
      {
        q: "¿Puedo llevar mis propios polos?",
        a: "Casi siempre sí, y baja bastante el precio final porque pagas solo la marca. Consúltalo antes: algunos talleres no asumen responsabilidad si la prenda que llevas se daña en el proceso, y conviene saberlo de entrada.",
      },
      {
        q: "¿Cuánto tarda un pedido?",
        a: "Un pedido corto con DTF puede salir en días; bordado y serigrafía en volumen se miden en semanas, sobre todo si hay que conseguir la prenda en todas las tallas. Si tienes una fecha de evento, cuéntala hacia atrás e incluye tiempo para aprobar una muestra.",
      },
    ],
    cierre: "En Suggestion producimos uniformes y merchandising con la técnica que corresponde a tu cantidad, no a la que deja mejor margen.",
    moneyPage: { label: "Merchandising y uniformes", href: "/servicios/merchandising" },
    relacionados: ["merchandising-corporativo-que-regalar", "material-pop-punto-de-venta"],
  },
  {
    slug: "merchandising-corporativo-que-regalar",
    categoria: "imprenta-btl",
    title: "Merchandising Corporativo: Qué Regalar y Precios | Suggestion",
    description:
      "Qué artículos promocionales se quedan en el escritorio y cuáles acaban en un cajón. Precios del mercado peruano desde S/0.60 y cantidades mínimas reales.",
    h1: "Merchandising corporativo: qué regalar para que no acabe en un cajón",
    excerpt:
      "El objetivo de un regalo corporativo no es que guste al recibirlo: es que siga encima del escritorio dentro de seis meses. Son dos cosas muy distintas.",
    date: "2026-10-04",
    secciones: [
      {
        h2: "La única pregunta que importa",
        parrafo:
          "No es qué regalar, es dónde va a terminar. Un artículo promocional funciona cuando se queda a la vista en el espacio donde tu cliente trabaja o vive, porque ahí es donde hace su trabajo: recordarte sin que tú estés. Todo lo demás —que sea original, que guste en el momento, que se vea caro— es secundario a eso.",
        bullets: [
          { titulo: "¿Se usa a diario?", texto: "un objeto que se toca todos los días supera a uno espectacular que se guarda. Esa es la regla por encima de todas." },
          { titulo: "¿Dónde vive?", texto: "escritorio, cocina, auto o mochila. Elige el espacio donde quieres estar presente y busca el objeto que vive ahí." },
          { titulo: "¿Lo usaría si no fuera gratis?", texto: "si la respuesta es no, ya sabes dónde va a acabar por muy bonito que sea tu logo encima." },
          { titulo: "¿Aguanta tu marca encima?", texto: "un objeto de mala calidad con tu logo comunica exactamente eso sobre tu empresa, todos los días." },
        ],
      },
      {
        h2: "Cuánto cuesta en el mercado peruano",
        parrafo:
          "El merchandising se cotiza por unidad pero se vende por lotes, y la cantidad mínima es el dato que decide si una pieza es viable para un negocio pequeño. Es justo el dato que menos aparece en la publicidad del proveedor.",
        tabla: {
          cabeceras: ["Artículo", "Precio por unidad", "Mínimo habitual"],
          filas: [
            ["Lapicero plástico personalizado", "desde S/0.60", "100 unidades"],
            ["Taza corporativa", "desde S/4.90", "50 unidades"],
            ["Llavero, línea estándar", "desde S/1.59", "50 unidades"],
            ["Llavero, línea premium", "hasta S/14.62", "50 unidades"],
            ["USB grabado con láser y caja de regalo", "según capacidad", "50 unidades"],
          ],
          nota: "Rangos del mercado peruano consultados en octubre de 2026, tomados de fichas de producto con precio listado de proveedores de merchandising. No son tarifas de Suggestion ni una cotización.",
        },
      },
      {
        h2: "Qué funciona según a quién le regalas",
        parrafo:
          "El mismo presupuesto rinde muy distinto según el destinatario. Repartir lo mismo a un cliente grande y a quien pasa por una feria es desperdiciar por los dos lados: de más en uno, de menos en el otro.",
        tabla: {
          cabeceras: ["A quién", "Qué funciona", "Criterio"],
          filas: [
            ["Cliente de cuenta grande", "Pocas unidades, calidad alta, entrega en persona", "Aquí el objeto es una excusa para la visita"],
            ["Equipo propio", "Uniforme y objeto de uso diario", "Lo que se pone a diario hace publicidad fuera de la oficina"],
            ["Feria o activación", "Volumen, barato y útil al instante", "Se busca alcance, no profundidad"],
            ["Proveedor o aliado", "Algo de consumo, compartible", "Mantiene la relación sin parecer un soborno"],
          ],
          nota: "El error típico es gastar un presupuesto entero en una sola categoría. Repartirlo en dos niveles —pocos buenos y muchos baratos— rinde bastante más.",
        },
      },
      {
        h2: "Los cuatro errores que se repiten",
        parrafo:
          "Se cometen en el momento de aprobar el pedido y se pagan durante meses, porque la caja con lo que sobró se queda en el almacén.",
        bullets: [
          { titulo: "Poner el logo demasiado grande", texto: "cuanto más discreta la marca, más se usa el objeto. Un logo que ocupa media taza convierte el regalo en un cartel que nadie quiere llevar." },
          { titulo: "Pedir mucho de algo que caduca", texto: "agendas y calendarios tienen fecha de vencimiento. Lo que sobra el 15 de enero no sirve para nada." },
          { titulo: "Comprar sin ver una muestra", texto: "la foto del catálogo y el objeto real pueden parecerse poco. En volumen, una muestra física es barata comparada con equivocarse." },
          { titulo: "No planear la entrega", texto: "quinientas unidades en una caja en el almacén no son marketing, son inventario. Antes de comprar hay que saber quién las reparte, cuándo y a quién." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "El cálculo que conviene hacer antes",
          texto: "Divide el presupuesto entre la cantidad de personas a las que de verdad vas a llegar, no entre la cantidad de unidades que puedes comprar. Si el número por persona es ridículo, es mejor regalar menos cosas y mejores.",
        },
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta el merchandising corporativo en Perú?",
        a: "En octubre de 2026 va desde unos S/0.60 por lapicero plástico personalizado y S/4.90 por taza corporativa, hasta unos S/14.62 en llaveros de línea premium. El precio por unidad baja con la cantidad y casi todos los artículos tienen un mínimo de 50 o 100 unidades.",
      },
      {
        q: "¿Cuál es la cantidad mínima para pedir artículos promocionales?",
        a: "La mayoría de productos arranca en 50 unidades, y los lapiceros suelen pedir 100. Tazas, llaveros y USB grabados se mueven en el mínimo de 50. Es el primer dato que conviene preguntar, porque descarta opciones antes de que te enamores de ellas.",
      },
      {
        q: "¿Qué regalo corporativo funciona mejor?",
        a: "El que se usa a diario en el espacio donde quieres estar presente. Una taza funciona porque vive en el escritorio y se ve todas las mañanas; un objeto decorativo original se guarda a la semana. Entre algo espectacular que se guarda y algo corriente que se usa, gana el segundo.",
      },
      {
        q: "¿Conviene poner el logo grande?",
        a: "No. Cuanto más discreta la marca, más se usa el objeto, y un objeto que se usa hace el trabajo que un logo enorme guardado en un cajón no hace. Un logo pequeño y bien colocado comunica más seguridad que uno que ocupa toda la pieza.",
      },
      {
        q: "¿Con cuánta anticipación hay que pedirlo?",
        a: "Para campañas de fin de año, con meses. Es la temporada en la que todos los proveedores están saturados, los plazos se estiran y el stock de los artículos más pedidos se agota. Pedir en noviembre para diciembre es cómo se termina regalando lo que quedaba.",
      },
    ],
    cierre: "En Suggestion producimos merchandising elegido por dónde va a terminar, no por lo que sobraba en catálogo.",
    moneyPage: { label: "Merchandising corporativo", href: "/servicios/merchandising" },
    relacionados: ["polos-personalizados-para-empresa", "material-pop-punto-de-venta"],
  },
  {
    slug: "material-pop-punto-de-venta",
    categoria: "imprenta-btl",
    title: "Material POP: Qué Funciona en Punto de Venta | Suggestion",
    description:
      "Jalavistas, rompetráficos, exhibidores y tótems: qué hace cada pieza, cuál conviene a tu producto y cuánto cuesta en Perú desde S/0.60 por unidad.",
    h1: "Material POP: qué piezas funcionan de verdad en punto de venta",
    excerpt:
      "La decisión de compra se toma frente al estante, en segundos y casi sin pensar. El material POP existe para ganar esos segundos, y la mayoría está diseñado como si hubiera minutos.",
    date: "2026-10-04",
    secciones: [
      {
        h2: "Qué es el material POP y qué hace cada pieza",
        parrafo:
          "POP viene de «punto de venta»: son las piezas que trabajan dentro de la tienda, donde el cliente ya está y tiene el producto al alcance. A diferencia de la publicidad que convence antes de salir de casa, esta solo tiene que ganar la comparación contra lo que está al lado.",
        tabla: {
          cabeceras: ["Pieza", "Qué hace", "Dónde va"],
          filas: [
            ["Jalavista", "Interrumpe la mirada que recorre el estante", "Sobresaliendo del lineal, perpendicular al pasillo"],
            ["Rompetráfico", "Detiene al que pasa de largo", "En medio del pasillo o a la entrada de la sección"],
            ["Stopper o cenefa", "Marca el precio o la promoción en el borde", "Pegado al filo de la góndola"],
            ["Exhibidor de mostrador", "Compra por impulso en la caja", "Junto al punto de pago"],
            ["Tótem o display de piso", "Da espacio propio fuera del lineal", "Cabecera de góndola o zona de entrada"],
          ],
          nota: "Si tu producto compite dentro de un estante lleno, empieza por el jalavista. Si lo que necesitas es sacarlo del estante, el tótem es otra conversación —y otro acuerdo con la tienda—.",
        },
      },
      {
        h2: "Cuánto cuesta en Perú",
        parrafo:
          "El material POP se fabrica por lotes y el precio por pieza depende sobre todo del material, del troquel y de la cantidad. Estos son los órdenes de magnitud del mercado peruano.",
        tabla: {
          cabeceras: ["Pieza", "Precio por unidad", "Mínimo habitual"],
          filas: [
            ["Stopper troquelado", "desde S/0.60", "según tiraje"],
            ["Display de mostrador en cartón", "desde S/8.50", "100 unidades"],
            ["Tótem o display de piso", "desde S/35", "50 unidades"],
          ],
          nota: "Rangos del mercado peruano consultados en octubre de 2026, según referencias publicadas por proveedores de material POP del rubro. No son tarifas de Suggestion ni una cotización: el troquel, el material y la cantidad mueven mucho el precio por pieza.",
        },
        dato: {
          cifra: "El troquel",
          texto: "es el costo de arranque que explica por qué un tiraje corto parece caro. Se paga una vez y sirve para las reposiciones siguientes: si prevés repetir la pieza, pídelo por escrito y guárdalo.",
        },
      },
      {
        h2: "Las reglas de lo que se lee en tres segundos",
        parrafo:
          "La diferencia entre una pieza que vende y una decorativa está en cuánto se entiende sin detenerse. Quien camina por un pasillo de supermercado no está leyendo: está escaneando.",
        bullets: [
          { titulo: "Una sola idea por pieza", texto: "precio, beneficio o novedad. Las tres cosas juntas no comunican tres veces más: no comunican nada." },
          { titulo: "El número grande, si hay número", texto: "en promoción, la cifra es el mensaje. Si hay que buscarla, la promoción no existe." },
          { titulo: "El producto reconocible", texto: "la pieza tiene que parecerse al empaque que el cliente va a buscar en el estante. Una creatividad preciosa que no se parece al producto obliga a traducir." },
          { titulo: "Pensada para su altura real", texto: "un jalavista se mira de lado y a la altura del hombro; un display de piso, desde arriba. Diseñar todo de frente es diseñar para un ángulo que nadie tiene." },
        ],
      },
      {
        h2: "Lo que decide si la pieza llega a estar puesta",
        parrafo:
          "Aquí está el fracaso más común y no tiene nada que ver con el diseño: cajas enteras de material POP que nunca salieron del almacén de la tienda. Producir es la parte fácil.",
        bullets: [
          { titulo: "Acuerda el espacio antes de fabricar", texto: "las cadenas tienen normas de qué se puede colgar, dónde y de qué tamaño. Fabricar primero y negociar después es como se pierde un tiraje completo." },
          { titulo: "Que se arme sin instrucciones", texto: "quien lo monta es el reponedor, de pie y con prisa. Si necesita herramientas o un manual, no se va a armar." },
          { titulo: "Manda piezas de repuesto", texto: "en punto de venta se rompen, se mojan y desaparecen. Un porcentaje extra desde el inicio sale más barato que un segundo tiraje urgente." },
          { titulo: "Ve a mirar", texto: "la única forma de saber si está puesto y bien puesto es ir a la tienda. Una foto pedida por teléfono siempre llega favorable." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "Antes de aprobar el arte",
          texto: "Imprime la pieza en una hoja, pégala a la altura real en la que va a estar y mírala caminando, sin detenerte. Lo que no entendiste en ese paseo tampoco lo va a entender tu cliente.",
        },
      },
    ],
    faq: [
      {
        q: "¿Qué es el material POP?",
        a: "Son las piezas publicitarias que trabajan dentro del punto de venta: jalavistas, rompetráficos, stoppers, exhibidores de mostrador y tótems de piso. Su trabajo es ganar la comparación frente al estante, en los segundos en que el cliente decide.",
      },
      {
        q: "¿Cuánto cuesta el material POP en Perú?",
        a: "En octubre de 2026 va desde unos S/0.60 por stopper troquelado y S/8.50 por display de mostrador en cartón con mínimos de 100 unidades, hasta unos S/35 por tótem de piso con mínimo de 50. El troquel es un costo de arranque que se paga una vez.",
      },
      {
        q: "¿Qué pieza conviene para un producto nuevo?",
        a: "Si va a estar dentro del estante compitiendo con marcas conocidas, el jalavista es lo que interrumpe la mirada. Si tienes acuerdo con la tienda para un espacio propio, el display de piso saca el producto de la comparación directa, que es una ventaja mayor.",
      },
      {
        q: "¿Puedo poner material POP en cualquier tienda?",
        a: "En bodegas y tiendas de barrio suele bastar con acordarlo con el dueño. En cadenas y supermercados hay normas de espacio, medidas y tiempos, y el espacio muchas veces se negocia o se paga. Conviene cerrar eso antes de mandar a fabricar.",
      },
      {
        q: "¿De qué material se fabrica?",
        a: "Lo más común es cartón corrugado o caple para piezas de campaña, que son económicos y reciclables. Para exhibidores que van a durar meses se usa PVC, acrílico o metal, que cuestan más pero aguantan el trato diario de una tienda.",
      },
    ],
    cierre: "En Suggestion diseñamos y producimos material POP pensado para la altura y el ángulo desde el que lo van a ver.",
    moneyPage: { label: "Material POP", href: "/servicios/material-pop" },
    relacionados: ["merchandising-corporativo-que-regalar", "panel-valla-bicivalla-o-vehiculo-rotulado"],
  },
  {
    slug: "panel-valla-bicivalla-o-vehiculo-rotulado",
    categoria: "imprenta-btl",
    title: "Panel, Valla o Publicidad Móvil: Cuál Elegir | Suggestion",
    description:
      "Panel fijo, bicivalla o vehículo rotulado: qué consigue cada formato, a quién llega y cuánto cuesta en Perú. Alquiler de valla desde S/2,000 al mes.",
    h1: "Panel, valla, bicivalla o vehículo rotulado: cuál te conviene",
    excerpt:
      "Los cuatro formatos ponen tu marca en la calle, pero no hacen el mismo trabajo ni le hablan a la misma persona. Elegir por precio es como se desperdicia una campaña de exterior.",
    date: "2026-10-04",
    secciones: [
      {
        h2: "Qué hace cada formato",
        parrafo:
          "La publicidad exterior se compra de dos maneras distintas: alquilando un espacio que ya existe o fabricando algo que se mueve. La diferencia no es solo de precio, es de qué tipo de atención consigues.",
        tabla: {
          cabeceras: ["Formato", "Cómo se contrata", "Qué consigue"],
          filas: [
            ["Panel o valla de gran formato", "Alquiler mensual del espacio", "Notoriedad en una vía concreta, a quien pasa en auto"],
            ["Bicivalla", "Por días, con recorrido elegido", "Llega al peatón, a velocidad de lectura, donde tú decidas"],
            ["Vehículo rotulado", "Inversión única sobre tu propia flota", "Trabaja todos los días sin alquiler, por donde ya circulas"],
            ["Letrero en fachada", "Fabricación e instalación", "Convierte tu propio local en el medio"],
          ],
          nota: "Una diferencia que casi nadie aprovecha: el panel de avenida lo ve alguien a 60 km/h y admite pocas palabras; la bicivalla circula a paso de peatón por calles comerciales y quien la ve puede leer bastante más y reaccionar en el momento.",
        },
      },
      {
        h2: "Cuánto cuesta la publicidad exterior en Perú",
        parrafo:
          "El alquiler de un panel se cotiza por mes y depende casi por completo de la ubicación. Dos paneles del mismo tamaño pueden costar muy distinto según la avenida en la que estén.",
        tabla: {
          cabeceras: ["Concepto", "Rango mensual"],
          filas: [
            ["Alquiler de valla en Perú, referencia general", "desde S/2,000, hasta más de S/10,000"],
            ["Lima, 20 a 24 m²", "desde US$500, hasta US$2,000"],
            ["Lima, ubicaciones premium", "más de US$3,000"],
            ["Provincias, 24 m²", "desde US$500, hasta US$1,200"],
          ],
          nota: "Rangos del mercado peruano consultados en octubre de 2026, según referencias publicadas por operadores de publicidad exterior. La impresión de la lona y la instalación suelen ir aparte. No son tarifas de Suggestion ni una cotización.",
        },
        dato: {
          cifra: "Trimestral o semestral",
          texto: "es como se contrata más barato: los acuerdos por varios meses suelen incluir descuento, mientras que el mes suelto se paga al precio más alto de la lista.",
        },
      },
      {
        h2: "Lo que se lee a 60 km/h",
        parrafo:
          "Es la regla de oficio que más presupuesto salva en publicidad exterior y la que más se ignora. Quien pasa en auto dispone de un par de segundos, y la mitad de ellos mirando la pista. En ese tiempo no se lee un párrafo: se reconoce una marca y se retiene una idea.",
        bullets: [
          { titulo: "Pocas palabras, muy grandes", texto: "el mensaje tiene que entenderse sin detenerse. Si hay que leerlo dos veces, ya se pasó de largo." },
          { titulo: "Una sola cosa que hacer", texto: "un panel con teléfono, dirección, web, redes y tres servicios no comunica cinco cosas: no comunica ninguna." },
          { titulo: "Contraste alto", texto: "lo que se lee de lejos es la diferencia de luminosidad entre texto y fondo, no el color de moda." },
          { titulo: "El ángulo cambia cuánto texto admite", texto: "un panel perpendicular a la marcha se ve durante más tiempo que uno de frente, y eso permite algo más de mensaje." },
        ],
      },
      {
        h2: "Antes de firmar un alquiler",
        parrafo:
          "El espacio es solo una parte de lo que vas a pagar, y hay preguntas que conviene hacer antes de comprometer meses.",
        bullets: [
          { titulo: "¿Está incluida la impresión y el cambio de lona?", texto: "muchas veces no, y es una partida que se suma cada vez que cambias la campaña." },
          { titulo: "¿Tiene iluminación y hasta qué hora?", texto: "un panel sin luz desaparece la mitad de las horas en las que hay gente en la calle." },
          { titulo: "¿Qué autorización municipal tiene?", texto: "la estructura debe estar en regla. Los operativos de retiro de paneles sin autorización existen y en Ica se han hecho." },
          { titulo: "¿Desde dónde se ve de verdad?", texto: "ve al punto y mira. Un panel tapado por un árbol o por un puente se ve perfecto en la foto del catálogo y en ninguna otra parte." },
        ],
        nota: {
          titulo: "La alternativa que casi nadie evalúa",
          texto: "Si tu negocio ya tiene vehículos circulando, rotularlos es una inversión única que trabaja todos los días sin pagar alquiler. Para muchos negocios locales rinde más por sol invertido que un mes de panel.",
        },
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta alquilar un panel publicitario en Perú?",
        a: "En octubre de 2026 la referencia general va desde unos S/2,000 hasta más de S/10,000 al mes según la ubicación. En Lima, un panel de 20 a 24 m² se mueve entre US$500 y US$2,000 mensuales, y las ubicaciones premium superan los US$3,000. En provincias, un panel de 24 m² va desde US$500 hasta US$1,200. La impresión de la lona suele ir aparte.",
      },
      {
        q: "¿Panel o bicivalla?",
        a: "El panel da notoriedad en una vía concreta a quien pasa en auto; la bicivalla lleva el mensaje hasta donde está tu público, circula a velocidad de peatón y se contrata por días en lugar de por meses. Si tu cliente camina por calles comerciales, la bicivalla suele rendir más por sol invertido.",
      },
      {
        q: "¿Cuántas palabras puede tener un panel?",
        a: "Las menos posibles. La referencia práctica es que se entienda de un vistazo a la velocidad de la vía: en avenida, poco más que la marca y una idea. Cuanto más rápido se circula, menos texto admite.",
      },
      {
        q: "¿Necesito permiso para un panel publicitario?",
        a: "La estructura necesita autorización municipal, y conviene verificar que el operador la tenga antes de alquilar. Los municipios hacen operativos de retiro de paneles instalados sin autorización, con multas de por medio, y quien pierde la campaña es el anunciante.",
      },
      {
        q: "¿Sirve la publicidad exterior si vendo por internet?",
        a: "Sirve para que te reconozcan, no para que te compren en ese momento. Funciona bien combinada con pauta digital: la gente que vio tu marca en la calle responde mejor al anuncio que le aparece después. Medirla sola y esperar ventas directas es pedirle algo que no hace.",
      },
    ],
    cierre: "En Suggestion producimos publicidad exterior y la elegimos según a quién tienes que llegar, no según lo que haya disponible.",
    moneyPage: { label: "Estructuras y publicidad exterior", href: "/servicios/estructuras-publicitarias" },
    relacionados: ["letreros-para-negocio-cual-elegir", "gigantografias-medidas-materiales-precios"],
  },
  {
    slug: "cuanto-cuesta-una-pagina-web-en-peru",
    categoria: "conversion",
    title: "Cuánto Cuesta una Página Web en Perú 2026 | Suggestion",
    description:
      "Rangos reales por tipo de web: landing desde S/300, corporativa desde S/2,000, e-commerce desde S/2,500. Qué mueve el precio y qué no viene incluido.",
    h1: "Cuánto cuesta una página web en Perú",
    excerpt:
      "La respuesta honesta es que depende, pero eso no sirve de nada. Estos son los rangos del mercado peruano, qué entra en cada uno y qué se paga aparte aunque nadie te lo diga al cotizar.",
    date: "2026-10-05",
    secciones: [
      {
        h2: "Los rangos del mercado peruano",
        parrafo:
          "El precio no se mueve por el tamaño de la empresa que te cotiza, sino por lo que la web tiene que hacer. Una página que solo informa y una que vende y cobra son dos proyectos distintos aunque las dos se llamen «página web».",
        tabla: {
          cabeceras: ["Tipo de web", "Precio referencial", "Para qué sirve"],
          filas: [
            ["Landing de una sola página", "desde S/300, hasta S/1,500", "Una campaña concreta con un solo objetivo"],
            ["Web informativa de 5 a 10 páginas", "desde S/800, hasta S/5,000", "Presencia y credibilidad: quién eres y qué haces"],
            ["Web corporativa", "desde S/2,000, hasta S/10,000", "Canal de venta serio, con medición y formularios que funcionan"],
            ["Tienda virtual", "desde S/2,500, hasta S/15,000", "Vender en línea, con pagos, stock y envíos"],
            ["Portal o plataforma a medida", "desde S/8,000, hasta S/50,000", "Sistema con usuarios, procesos o integraciones propias"],
          ],
          nota: "Rangos del mercado peruano consultados en octubre de 2026, según precios publicados por agencias y desarrolladores del rubro. No son tarifas de Suggestion ni una cotización.",
        },
      },
      {
        h2: "Lo que mueve el precio no es lo que crees",
        parrafo:
          "Casi todo el mundo pregunta «¿cuánto por cinco páginas?», y esa es justo la variable que menos pesa. Añadir una página más a un sitio ya construido cuesta poco. Lo que cuesta es todo lo demás.",
        bullets: [
          { titulo: "Las integraciones", texto: "conectar la web con tu pasarela de pago, tu CRM, tu facturación o tu sistema de reservas es donde se va el tiempo. Una web aislada y una conectada no se parecen en nada." },
          { titulo: "El contenido", texto: "los textos y las fotos son trabajo, y alguien los hace. Si no los pones tú, van en el presupuesto; si los pones tú y nunca llegan, el proyecto se queda parado meses." },
          { titulo: "La velocidad y lo técnico", texto: "que cargue rápido en un celular con señal regular no sale solo. Es trabajo específico, y es la diferencia entre aparecer en Google o no." },
          { titulo: "Si está pensada para convertir", texto: "una plantilla bonita y una página diseñada para que el visitante haga algo cuestan distinto porque son oficios distintos." },
        ],
      },
      {
        h2: "Lo que se paga aparte aunque no te lo digan",
        parrafo:
          "Aquí está la sorpresa más común: el precio de construir no es el precio de tener. Hay costos que se repiten todos los años y conviene conocerlos antes de firmar, no después.",
        tabla: {
          cabeceras: ["Concepto", "Cuándo se paga", "Qué pasa si no lo pagas"],
          filas: [
            ["Dominio", "Cada año", "La web deja de ser accesible por tu nombre"],
            ["Hosting", "Mensual o anual", "La web se cae"],
            ["Certificado de seguridad", "Normalmente incluido en el hosting", "El navegador avisa que tu sitio no es seguro"],
            ["Correos con tu dominio", "Mensual o anual", "Sigues escribiendo desde una cuenta gratuita"],
            ["Mantenimiento y actualizaciones", "Mensual o por bolsa de horas", "Se acumulan fallos y agujeros de seguridad"],
          ],
          nota: "No son letra pequeña ni trampa: son el costo real de tener un sitio en línea. Lo que sí es señal de mal proveedor es que no aparezcan en la conversación hasta después de firmar.",
        },
      },
      {
        h2: "Cómo comparar dos presupuestos que no se parecen",
        parrafo:
          "Cuando pides tres cotizaciones para lo mismo y vuelven con S/900, S/3,500 y S/9,000, la reacción natural es desconfiar de los tres. Estas cinco preguntas ordenan la comparación en diez minutos.",
        pasos: [
          { titulo: "¿La web queda a mi nombre?", texto: "el dominio, el hosting y los accesos tienen que estar a nombre de tu empresa. Si están a nombre del proveedor, no tienes una web: tienes un alquiler." },
          { titulo: "¿Quién escribe los textos y consigue las fotos?", texto: "es la pregunta que más diferencias explica entre dos presupuestos que parecen iguales." },
          { titulo: "¿Qué pasa cuando quiera cambiar algo?", texto: "pregunta si puedes editar tú, cuánto cuesta un cambio y con qué plazo. Una web que depende del proveedor para cada coma se vuelve cara con el tiempo." },
          { titulo: "¿Está incluida la medición?", texto: "sin analítica instalada no vas a saber si la web funciona, y entonces la discusión del precio era la discusión equivocada." },
          { titulo: "¿Cuánto cuesta mantenerla al año?", texto: "pide ese número por escrito junto con el de construcción. Es el que de verdad compara dos propuestas." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "Cuándo conviene gastar menos",
          texto: "Si todavía estás validando qué vendes y a quién, una landing simple y bien medida es mejor inversión que una web completa. Lo caro no es empezar pequeño: lo caro es construir grande sobre una idea que todavía no está probada.",
        },
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta una página web en Perú?",
        a: "En octubre de 2026 el mercado va desde unos S/300 por una landing de una sola página y desde S/800 por una web informativa, hasta S/10,000 o más en una corporativa y S/15,000 en una tienda virtual. Los portales a medida pueden llegar a S/50,000. El rango es amplio porque lo que mueve el precio son las integraciones y el contenido, no la cantidad de páginas.",
      },
      {
        q: "¿El precio incluye el dominio y el hosting?",
        a: "A veces el primer año sí, y después se renuevan aparte todos los años. Es la pregunta que hay que hacer antes de firmar, junto con a nombre de quién quedan registrados: si están a nombre del proveedor y un día cambias, recuperarlos puede ser un problema serio.",
      },
      {
        q: "¿Cuánto tarda en estar lista?",
        a: "Una landing puede salir en días y una web corporativa en semanas. Lo que más alarga los plazos no es el desarrollo: son los textos y las fotos que el cliente tiene que entregar. Si llegas con el contenido listo, el proyecto se acorta solo.",
      },
      {
        q: "¿Conviene una web barata?",
        a: "Conviene si lo que necesitas es estar presente y poco más. Deja de convenir cuando la web tiene que traer clientes: ahí la diferencia entre una plantilla y un sitio pensado para convertir se nota en el resultado, y rehacerlo después cuesta más que haberlo hecho bien.",
      },
      {
        q: "¿Puedo hacerla yo con un constructor?",
        a: "Sí, y para validar una idea o un negocio muy simple es una opción razonable. El límite aparece cuando necesitas velocidad, control técnico o integraciones: ahí los constructores se quedan cortos y migrar significa rehacer, con el riesgo de perder el posicionamiento que ya tenías.",
      },
    ],
    cierre: "En Suggestion diseñamos webs rápidas y medidas, pensadas para que el visitante haga algo y para que tú puedas verlo.",
    moneyPage: { label: "Diseño de páginas web profesionales", href: "/servicios/desarrollo-web" },
    relacionados: ["crear-pagina-web-wix-vs-profesional", "como-crear-una-pagina-web", "posicionamiento-web-como-aparecer-en-google"],
  },
  {
    slug: "cuanto-cobra-una-agencia-de-marketing-digital-en-peru",
    categoria: "performance",
    title: "Cuánto Cobra una Agencia de Marketing en Perú | Suggestion",
    description:
      "Modelos de cobro, rangos reales del mercado peruano desde S/1,500 al mes y la confusión más cara del rubro: el fee no incluye la inversión en pauta.",
    h1: "Cuánto cobra una agencia de marketing digital en Perú",
    excerpt:
      "Hay una confusión que arruina más relaciones entre cliente y agencia que ninguna otra, y aparece en la primera reunión: creer que lo que pagas de fee es lo que se va a invertir en publicidad.",
    date: "2026-10-05",
    secciones: [
      {
        h2: "Los tres modelos de cobro",
        parrafo:
          "Antes del precio conviene entender cómo se cobra, porque el mismo trabajo cuesta muy distinto según el modelo y cada uno alinea los incentivos de otra forma.",
        tabla: {
          cabeceras: ["Modelo", "Cómo funciona", "A quién le conviene"],
          filas: [
            ["Fee mensual fijo", "Un monto acordado por un alcance definido", "Quien quiere previsibilidad y un equipo disponible"],
            ["Porcentaje sobre la inversión", "La agencia cobra un porcentaje de lo que se gasta en pauta", "Cuentas con inversión alta y estable"],
            ["Por proyecto", "Un monto cerrado por un entregable concreto", "Trabajos acotados: una web, una campaña, un plan"],
          ],
          nota: "El porcentaje sobre inversión tiene un problema que conviene mirar de frente: premia que gastes más, no que vendas más. Si eliges ese modelo, acuerda también qué resultado se espera, no solo cuánto se va a invertir.",
        },
      },
      {
        h2: "Los rangos del mercado peruano",
        parrafo:
          "Las cifras de abajo son del mercado formal peruano y van antes de IGV. Varían mucho porque «agencia» abarca desde una persona llevando dos redes hasta un equipo completo con estrategia, pauta, contenido y medición.",
        tabla: {
          cabeceras: ["Servicio", "Mensual"],
          filas: [
            ["Community manager junior, una red", "desde S/1,500, hasta S/2,500"],
            ["Community manager sénior, varias redes y pauta básica", "desde S/2,500, hasta S/4,500"],
            ["Community manager líder con equipo", "desde S/4,500, hasta S/8,000"],
            ["Agencia full-service, retainer mínimo", "desde S/8,000, hasta S/15,000"],
            ["Agencia full-service, servicio estándar", "desde S/15,000, hasta S/25,000"],
            ["Agencia full-service, servicio amplio", "desde S/25,000, hasta S/60,000"],
          ],
          nota: "Rangos del mercado peruano formal consultados en octubre de 2026, antes de IGV, según tarifarios publicados del rubro. No son tarifas de Suggestion ni una cotización.",
        },
        dato: {
          cifra: "12 % a 18 %",
          texto: "es la comisión habitual cuando se cobra sobre la inversión en pauta: entre 15 % y 18 % por debajo de S/30,000 mensuales de medios, y entre 12 % y 15 % cuando la inversión está entre S/30,000 y S/80,000.",
        },
      },
      {
        h2: "El fee no incluye la pauta",
        parrafo:
          "Es la confusión más cara del rubro y conviene desmontarla antes de firmar nada. Lo que le pagas a la agencia es por el trabajo: estrategia, creatividades, configuración, optimización y reportes. Lo que se gasta en Meta o en Google es dinero que va directo a la plataforma y que no entra en el bolsillo de nadie más. Son dos partidas distintas y las dos salen de tu presupuesto.",
        bullets: [
          { titulo: "Pregúntalo literalmente", texto: "«¿este monto incluye lo que se va a invertir en anuncios?». Si la respuesta no es un sí o un no claro, ya sabes algo importante del proveedor." },
          { titulo: "Pide las dos cifras separadas", texto: "fee y medios, en líneas distintas de la propuesta. Un presupuesto que las junta es un presupuesto que no vas a poder auditar." },
          { titulo: "La cuenta publicitaria debe ser tuya", texto: "tú pagas la pauta, tú ves el gasto. Invertir desde la cuenta de la agencia es cómo se pierde la trazabilidad y la cuenta el día que cambias de proveedor." },
          { titulo: "Cuidado con el fee que se come la pauta", texto: "si pagas S/2,000 de gestión y quedan S/500 para anuncios, no vas a tener campaña: vas a tener un informe mensual sobre casi nada." },
        ],
      },
      {
        h2: "Qué pedir antes de firmar",
        parrafo:
          "El precio es lo último que hay que mirar, y casi siempre es lo primero que se pregunta. Estas cuatro cosas separan una agencia de un proveedor de publicaciones.",
        bullets: [
          { titulo: "Qué se entrega cada mes, por escrito", texto: "cantidad de piezas, campañas, reuniones y reportes. Un alcance difuso termina en una discusión a los tres meses." },
          { titulo: "Con qué se va a medir el resultado", texto: "si la respuesta son alcance y seguidores, estás comprando presencia, no ventas. Que lo diga el contrato." },
          { titulo: "Quién va a estar en tu cuenta", texto: "quién vende y quién ejecuta rara vez son la misma persona. Pregunta por el perfil de quien va a trabajar día a día." },
          { titulo: "Qué pasa el día que te vayas", texto: "accesos, cuentas, píxel, creatividades y datos tienen que quedarse contigo. Se acuerda al empezar, nunca al terminar." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "Una cuenta que ordena la decisión",
          texto: "Divide el fee mensual entre lo que vale un cliente nuevo para ti. Si la agencia necesita traerte quince clientes al mes solo para pagarse, y tu negocio nunca ha cerrado quince al mes, el problema no es el precio: es que ese nivel de servicio todavía no te corresponde.",
        },
      },
    ],
    faq: [
      {
        q: "¿Cuánto cobra una agencia de marketing digital en Perú?",
        a: "En octubre de 2026, el mercado formal va desde unos S/1,500 mensuales por un community manager junior llevando una red, hasta S/60,000 en un retainer amplio de agencia full-service. El rango habitual de una agencia completa para mediana empresa arranca entre S/8,000 y S/15,000 mensuales, antes de IGV y sin contar la inversión en pauta.",
      },
      {
        q: "¿El fee incluye el presupuesto de publicidad?",
        a: "Normalmente no, y es la confusión más cara del rubro. El fee paga el trabajo de la agencia; la inversión en anuncios va directo a Meta o a Google y sale aparte de tu bolsillo. Pide siempre las dos cifras en líneas separadas de la propuesta.",
      },
      {
        q: "¿Es mejor una agencia o un freelance?",
        a: "Depende del alcance, no del precio. Un freelance funciona bien cuando el trabajo es acotado y hay alguien en tu empresa coordinando. Una agencia tiene sentido cuando necesitas varias especialidades a la vez —estrategia, pauta, contenido, medición— y nadie internamente puede dirigirlas.",
      },
      {
        q: "¿Por qué dos agencias cotizan tan distinto por lo mismo?",
        a: "Porque casi nunca es lo mismo. Pide a cada una el alcance mensual por escrito —piezas, campañas, reuniones, reportes— y compáralos lado a lado. La mayoría de las diferencias de precio desaparecen o se explican en cuanto pones los dos alcances en la misma tabla.",
      },
      {
        q: "¿Cuánto tiempo hay que darle a una agencia antes de juzgarla?",
        a: "Lo suficiente para que haya datos: en pauta, unas semanas para salir del aprendizaje de la plataforma y un par de meses para optimizar con fundamento. Lo que sí se puede exigir desde el primer mes es orden: medición instalada, campañas bien nombradas y un reporte que diga qué se cambia el mes siguiente.",
      },
    ],
    cierre: "En Suggestion separamos siempre el fee de la inversión en medios, y el reporte mensual termina en qué se cambia, no en cuánto alcance hubo.",
    moneyPage: { label: "Agencia de marketing digital en Perú", href: "/servicios/marketing-digital" },
    relacionados: ["cuanto-invertir-en-ads-peru", "que-es-el-marketing-digital", "cpl-vs-roas"],
  },
  {
    slug: "cuanto-cuesta-un-logotipo-en-peru",
    categoria: "marca",
    title: "Cuánto Cuesta un Logotipo en Perú 2026 | Suggestion",
    description:
      "Tres rangos reales, desde S/800 hasta S/25,000, y qué entra en cada uno. La diferencia entre un logo y una identidad de marca, y qué archivos exigir.",
    h1: "Cuánto cuesta un logotipo en Perú",
    excerpt:
      "Entre una cotización de S/300 y una de S/15,000 no hay un estafador y un honesto: hay dos trabajos completamente distintos que se llaman igual.",
    date: "2026-10-05",
    secciones: [
      {
        h2: "Tres rangos, y qué entra en cada uno",
        parrafo:
          "El precio de un logo en Perú no se explica por el dibujo, que es la parte visible y la más rápida. Se explica por lo que viene antes —investigación y criterio— y por lo que viene después —el sistema con el que vas a aplicarlo—.",
        tabla: {
          cabeceras: ["Rango", "Quién lo hace", "Qué incluye"],
          filas: [
            ["desde S/800, hasta S/2,500", "Freelance o estudio pequeño", "Una o dos rondas de cambios y los archivos editables. Sin estudio de competencia ni manual"],
            ["desde S/3,500, hasta S/9,000", "Estudio de diseño o agencia pequeña", "Investigación inicial, dos o tres propuestas, tres rondas de ajuste y un manual básico"],
            ["desde S/10,000, hasta S/25,000", "Agencia con equipo estratégico", "Diagnóstico de marca, definición del ADN, varias rutas conceptuales, manual completo y sistema visual extendido"],
          ],
          nota: "Rangos del mercado peruano consultados en octubre de 2026, según tarifarios publicados por estudios y agencias del rubro. No son tarifas de Suggestion ni una cotización.",
        },
      },
      {
        h2: "Un logo no es una identidad de marca",
        parrafo:
          "Se piden como si fueran lo mismo y son cosas distintas, y de ahí vienen la mitad de las sorpresas al cotizar. El logo es una pieza; la identidad es el sistema que hace que todo lo demás se vea como tú.",
        tabla: {
          cabeceras: ["Qué pides", "Qué recibes", "Desde"],
          filas: [
            ["Logotipo suelto", "La marca gráfica y sus archivos", "S/800"],
            ["Identidad visual completa", "Logo, colores, tipografías y aplicaciones básicas", "S/3,500"],
            ["Branding integral con manual", "Lo anterior más el criterio escrito de cómo usarlo", "S/6,500"],
            ["Rebranding de empresa", "Rehacer una marca que ya existe, con su transición", "S/12,000"],
          ],
          nota: "Si solo tienes el logo, cada pieza nueva —un volante, un polo, una publicación— es una decisión improvisada. El manual existe para que esas decisiones ya estén tomadas y la marca se vea igual la haga quien la haga.",
        },
      },
      {
        h2: "Por qué hay tanta diferencia de precio",
        parrafo:
          "Cuando pides tres cotizaciones vuelven montos que no se parecen, y es tentador pensar que el caro te está viendo la cara. Esto es lo que de verdad separa un presupuesto de otro.",
        bullets: [
          { titulo: "Cuánto se investiga antes de dibujar", texto: "mirar a la competencia, entender a quién le hablas y decidir qué quieres parecer es trabajo que no se ve en el resultado pero lo determina." },
          { titulo: "Cuántas rutas distintas te muestran", texto: "una propuesta única es una apuesta; tres rutas conceptuales son un proceso. Cuestan distinto porque son horas distintas." },
          { titulo: "Cuántas rondas de cambios entran", texto: "es la letra que más discusiones provoca. Que esté por escrito y que diga qué pasa con la ronda número cuatro." },
          { titulo: "Si te entregan el sistema o solo la pieza", texto: "colores, tipografías, versiones y reglas de uso son lo que hace que tu marca aguante fuera de la pantalla donde la aprobaste." },
        ],
      },
      {
        h2: "Qué tienes que recibir sí o sí",
        parrafo:
          "Da igual el rango que elijas: hay cuatro cosas que tienen que quedar en tu poder. Si no están, no compraste una marca, compraste una imagen.",
        bullets: [
          { titulo: "El archivo vectorial", texto: "en formato editable, no solo un PNG o un JPG. Sin el vector, cada vez que necesites el logo en grande habrá que redibujarlo." },
          { titulo: "Las versiones que vas a necesitar", texto: "horizontal, vertical, en un solo color y en negativo para fondos oscuros. Son las que de verdad se usan en la vida real." },
          { titulo: "Los derechos por escrito", texto: "que la marca es tuya y puedes usarla donde quieras, incluso para registrarla. Parece obvio y no siempre está en el acuerdo." },
          { titulo: "Las tipografías y sus licencias", texto: "si tu logo usa una fuente de pago, necesitas saber cuál es y si tienes derecho a usarla. Es un problema que aparece un año después, cuando otro diseñador toma el relevo." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "El logo barato que sale caro",
          texto: "Un logo que se parece al de otra empresa de tu rubro puede impedirte registrarlo, y entonces hay que rehacerlo con todo lo impreso ya repartido. Antes de aprobar un diseño, vale la pena verificar que no choque con una marca ya registrada.",
        },
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta un logotipo en Perú?",
        a: "En octubre de 2026 el mercado va desde unos S/800 con un freelance o estudio pequeño, pasa por un rango de S/3,500 a S/9,000 en estudios y agencias pequeñas con investigación y manual básico, y llega hasta S/25,000 en agencias con equipo estratégico. Lo que cambia entre un extremo y otro no es el dibujo: es cuánto criterio y cuánto sistema vienen con él.",
      },
      {
        q: "¿Cuál es la diferencia entre un logo y una identidad de marca?",
        a: "El logo es una pieza; la identidad es el sistema completo: colores, tipografías, aplicaciones y las reglas de cómo usarlo todo. Con solo el logo, cada volante y cada publicación nueva es una decisión improvisada, y la marca termina viéndose distinta en cada sitio.",
      },
      {
        q: "¿Conviene un logo hecho con inteligencia artificial?",
        a: "Sirve para explorar ideas rápido y es un buen acelerador al inicio. No resuelve lo que de verdad decide un buen logo: qué quieres parecer frente a tu competencia y si la marca es registrable. Para eso hace falta criterio y una verificación, no una generación más.",
      },
      {
        q: "¿Qué archivos me tienen que entregar?",
        a: "El vectorial editable como mínimo, más las versiones horizontal, vertical, en un solo color y en negativo. Pide también por escrito que los derechos son tuyos y cuáles son las tipografías usadas con su licencia. Sin el vector, cualquier aplicación grande obliga a redibujar.",
      },
      {
        q: "¿Cada cuánto conviene cambiar el logo?",
        a: "Casi nunca por aburrimiento. Un rebranding tiene sentido cuando el negocio cambió de verdad —otro público, otra oferta, una fusión— o cuando la marca arrastra un problema real. Cambiarlo cada pocos años destruye el reconocimiento que tanto cuesta construir.",
      },
    ],
    cierre: "En Suggestion trabajamos la marca como sistema, no como un dibujo: lo que te llevas es el criterio para aplicarla en todo lo demás.",
    moneyPage: { label: "Branding e identidad de marca", href: "/servicios/branding" },
    relacionados: ["como-crear-un-logo", "que-es-rebranding", "posicionamiento-de-marca"],
  },
  {
    slug: "cuanto-cuesta-un-millar-de-volantes-en-peru",
    categoria: "imprenta-btl",
    title: "Cuánto Cuesta un Millar de Volantes en Perú | Suggestion",
    description:
      "Precios reales desde S/100 el millar en A5 couché full color, por qué el IGV explica la mitad de las diferencias y el costo de repartirlos, que nadie suma.",
    h1: "Cuánto cuesta un millar de volantes en Perú",
    excerpt:
      "Pides tres cotizaciones por lo mismo y vuelven S/100, S/145 y S/260. La mayor parte de esa diferencia se explica con dos datos que casi nunca están en el precio que te mandan.",
    date: "2026-10-05",
    secciones: [
      {
        h2: "Cuánto cuesta el millar",
        parrafo:
          "El volante se vende por millar y el formato más pedido en Perú es A5 —media hoja A4— impreso a full color por ambas caras. Esos son los rangos del mercado.",
        tabla: {
          cabeceras: ["Qué pides", "Precio por millar"],
          filas: [
            ["A5, couché 115 g, full color ambas caras", "desde S/100"],
            ["A5, couché 150 g, full color ambas caras", "desde S/140"],
            ["A5 o medio oficio, según acabado y gramaje", "desde S/145, hasta S/260"],
          ],
          nota: "Rangos del mercado peruano consultados en octubre de 2026, tomados de fichas de producto de imprentas del rubro. Algunas fuentes publican con IGV y otras sin IGV, y eso explica buena parte de la diferencia. No son tarifas de Suggestion ni una cotización.",
        },
        dato: {
          cifra: "2 a 3 días",
          texto: "es el plazo habitual de entrega de un millar estándar. Si te prometen el mismo día, pregunta sobre qué papel van a imprimir: probablemente no sea el que pediste.",
        },
      },
      {
        h2: "El IGV, que explica la mitad de las diferencias",
        parrafo:
          "Es el detalle más aburrido de esta página y el que más plata ordena. En Perú conviven imprentas que publican precio con IGV incluido e imprentas que lo publican sin IGV, y la diferencia entre ambos es de un 18 %. Dos presupuestos que parecen distintos muchas veces son el mismo precio contado de dos maneras.",
        bullets: [
          { titulo: "Pregunta siempre «¿con IGV o sin IGV?»", texto: "antes de comparar nada. Es una pregunta de cinco segundos que corrige casi todas las comparaciones mal hechas." },
          { titulo: "Pide factura si tu negocio la necesita", texto: "no todas las imprentas pequeñas la emiten, y descubrirlo al recoger el trabajo es tarde." },
          { titulo: "Pregunta si el diseño está incluido", texto: "es la otra mitad de la diferencia. Un precio con arte incluido y otro solo de impresión no son comparables." },
          { titulo: "Confirma el gramaje", texto: "115 y 150 gramos no se sienten igual en la mano, y la diferencia de precio entre ambos es real." },
        ],
      },
      {
        h2: "El costo que nadie suma: repartirlos",
        parrafo:
          "Aquí está el error de presupuesto más común con los volantes. Imprimir mil cuesta poco; repartirlos bien cuesta más, y es lo que decide si la campaña sirve de algo. Mil volantes en una caja debajo del mostrador no han hecho publicidad: han hecho inventario.",
        bullets: [
          { titulo: "Decide antes dónde y quién", texto: "volanteo en calle, reparto puerta a puerta, insertos en bolsas o entrega en mano en el local son cuatro campañas distintas con cuatro costos distintos." },
          { titulo: "Mil volantes bien repartidos superan a cinco mil tirados", texto: "en la zona correcta y a la hora correcta. El volumen sin criterio es la forma más rápida de desperdiciar un tiraje." },
          { titulo: "Pon algo que se pueda medir", texto: "un código, una promoción exclusiva del volante o un número distinto. Sin eso nunca vas a saber si funcionó, y el año que viene vas a estar discutiendo lo mismo." },
          { titulo: "Revisa la normativa de tu municipio", texto: "algunos distritos regulan el volanteo en vía pública y las multas las paga el negocio, no quien reparte." },
        ],
      },
      {
        h2: "Qué hace que un volante funcione",
        parrafo:
          "El volante compite con la basura: quien lo recibe decide en un segundo si se lo queda o lo suelta. Todo lo que diseñes tiene que ganar ese segundo.",
        bullets: [
          { titulo: "Una sola oferta", texto: "un volante con ocho servicios no comunica ocho cosas. Si necesitas comunicar todo tu catálogo, eso es un folleto, no un volante." },
          { titulo: "Un motivo para guardarlo", texto: "un descuento con fecha, un cupón recortable o algo útil al reverso. Lo que no da motivo se suelta." },
          { titulo: "Dirección y referencia, no solo la calle", texto: "en ciudad peruana la referencia vale más que el número: «frente al mercado», «a media cuadra de la plaza»." },
          { titulo: "Fecha de vencimiento visible", texto: "crea urgencia y además te sirve para medir: todo lo que llegue después de esa fecha ya sabes de dónde no vino." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "Antes de mandar el millar",
          texto: "Imprime uno en una hoja normal y dáselo a alguien que no sepa de qué va tu negocio. Si en cinco segundos no te puede decir qué ofreces y dónde estás, el problema no se arregla imprimiendo más.",
        },
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta un millar de volantes en Perú?",
        a: "En octubre de 2026 un millar de volantes A5 a full color por ambas caras va desde unos S/100 en couché de 115 gramos y desde unos S/140 en couché de 150 gramos, llegando hasta unos S/260 según acabado. Parte de la diferencia entre cotizaciones es simplemente que unas incluyen IGV y otras no.",
      },
      {
        q: "¿Qué medida y qué papel conviene?",
        a: "A5 es el formato más pedido y el que mejor relación da entre costo y espacio. En papel, couché de 115 gramos es suficiente para un volanteo de calle; 150 gramos se siente mejor en la mano y tiene sentido cuando el volante se entrega en el local o acompaña un producto.",
      },
      {
        q: "¿Puedo pedir menos de mil?",
        a: "Se puede, pero rara vez conviene: casi todo el costo está en preparar la impresión, así que quinientos no cuestan la mitad. Si vas a hacer varias campañas, conviene más imprimir un millar con un diseño sin fechas y guardarlo, que imprimir de a pocos.",
      },
      {
        q: "¿Cuánto tarda la impresión?",
        a: "Dos o tres días para un tiraje estándar. Si necesitas algo para mañana, se puede resolver con otra técnica de impresión, pero el papel y el acabado probablemente no serán los mismos: pregunta qué cambia antes de aceptar la urgencia.",
      },
      {
        q: "¿Sirven todavía los volantes?",
        a: "Funcionan donde hay tránsito peatonal y una oferta clara y local: un restaurante, una promoción de apertura, un servicio de barrio. Dejan de funcionar cuando se reparten sin criterio o cuando el mensaje intenta explicar todo el negocio. Como todo, lo que decide es la medición, no la opinión.",
      },
    ],
    cierre: "En Suggestion imprimimos volantes y además ayudamos a decidir dónde repartirlos, que es la parte donde se gana o se pierde la campaña.",
    moneyPage: { label: "Imprenta y volantes", href: "/servicios/imprenta" },
    relacionados: ["gigantografias-medidas-materiales-precios", "tarjetas-de-presentacion-medidas-y-errores", "material-pop-punto-de-venta"],
  },
  {
    slug: "cuanto-cuesta-registrar-una-marca-en-indecopi",
    categoria: "marca",
    title: "Cuánto Cuesta Registrar una Marca en Indecopi | Suggestion",
    description:
      "La tasa publicada por clase, el descuento MYPE, la búsqueda previa que evita perder el pago y por qué la tasa no se devuelve aunque te denieguen la solicitud.",
    h1: "Cuánto cuesta registrar una marca en Indecopi",
    excerpt:
      "La tasa no se devuelve aunque te rechacen la solicitud. Por eso lo que decide cuánto te va a costar registrar tu marca no es la tasa: es lo que hagas antes de pagarla.",
    date: "2026-10-05",
    secciones: [
      {
        h2: "Las tasas publicadas",
        parrafo:
          "El registro de marca en Perú se tramita ante Indecopi y tiene una tasa oficial por clase. Estos son los montos vigentes según las fuentes consultadas, con el código de arancel al lado para que puedas verificarlos.",
        tabla: {
          cabeceras: ["Concepto", "Monto"],
          filas: [
            ["Solicitud de registro, primera clase (arancel 20100562)", "S/534.90"],
            ["Cada clase adicional", "S/533.30"],
            ["Tarifa reducida para MYPE que califican", "S/401.20"],
            ["Búsqueda fonética previa, opcional", "S/30.66 por clase"],
            ["Búsqueda figurativa previa, opcional", "S/38.46 por clase"],
            ["Oposición presentada por un tercero", "S/378.70"],
          ],
          nota: "Montos recogidos en octubre de 2026 de fuentes peruanas especializadas que coinciden entre sí y en el código de arancel. No pudimos confirmarlos en el portal oficial del Estado, que bloquea la consulta automatizada, así que verifica el monto vigente en el canal oficial de Indecopi antes de pagar: las tasas se actualizan por decreto.",
        },
        nota: {
          tipo: "aviso",
          titulo: "La tasa no se devuelve",
          texto: "Si la solicitud se deniega —porque ya existe una marca parecida, por ejemplo—, el dinero no vuelve. Ese detalle es el que convierte la búsqueda previa, que cuesta unas decenas de soles, en la mejor inversión de todo el trámite.",
        },
      },
      {
        h2: "Se paga por clase, y esa es la parte que sorprende",
        parrafo:
          "Las marcas no se registran «para todo»: se registran para categorías concretas de productos o servicios, agrupadas en 45 clases de la Clasificación de Niza. Registrar tu nombre para la clase de restaurantes no te protege si alguien lo usa para ropa. Y cada clase adicional se paga casi completa.",
        bullets: [
          { titulo: "Elige las clases que de verdad usas", texto: "no las que te gustaría usar algún día. Registrar cinco clases por si acaso multiplica el costo por cinco y no te da más protección donde sí vendes." },
          { titulo: "Piensa en los dos o tres años siguientes", texto: "si el plan real es abrir una línea nueva pronto, puede tener sentido incluir esa clase ahora. Si es una idea vaga, no." },
          { titulo: "La clasificación se actualiza", texto: "la 13.ª edición de la Clasificación de Niza entró en vigor en enero de 2026, así que conviene confirmar en qué clase cae tu actividad hoy, no según lo que te dijeron hace años." },
          { titulo: "El nombre comercial y la marca no son lo mismo", texto: "tener el nombre inscrito en Sunarp o en tu licencia municipal no equivale a tener la marca registrada. Son trámites y protecciones distintas." },
        ],
      },
      {
        h2: "La búsqueda previa: lo más barato del trámite",
        parrafo:
          "Antes de pagar la tasa completa se puede consultar si ya existe una marca igual o parecida en la misma clase. Cuesta unas decenas de soles y es lo único que te protege de pagar S/534.90 por un rechazo.",
        pasos: [
          { titulo: "Búsqueda fonética", texto: "revisa nombres que suenan parecido, no solo los idénticos. Es la que atrapa los conflictos más comunes, porque la ley protege contra la confusión, no solo contra la copia literal." },
          { titulo: "Búsqueda figurativa", texto: "revisa logos y elementos gráficos semejantes. Vale la pena cuando tu marca se apoya mucho en un símbolo." },
          { titulo: "Lee el resultado con criterio", texto: "que exista algo parecido no siempre impide registrar; que no exista nada no garantiza que te concedan. La búsqueda reduce el riesgo, no lo elimina." },
          { titulo: "Ajusta el nombre si hace falta", texto: "es mucho más barato cambiar una letra antes de registrar que descubrir el problema con la fachada rotulada y los volantes repartidos." },
        ],
      },
      {
        h2: "Lo que la tasa no cubre",
        parrafo:
          "El monto oficial es solo la tasa del Estado. Hay otras partidas que pueden aparecer y conviene tenerlas en el presupuesto desde el principio.",
        bullets: [
          { titulo: "El honorario de quien lo tramita", texto: "puedes presentarlo tú mismo o encargarlo a un estudio o gestor. Ese honorario va aparte y varía mucho." },
          { titulo: "Las oposiciones", texto: "si un tercero se opone a tu solicitud, el procedimiento se alarga y puede requerir defensa legal." },
          { titulo: "La renovación", texto: "el registro no es para siempre: vence y hay que renovarlo. Anótalo el día que te lo concedan, porque nadie te va a recordar." },
          { titulo: "El rediseño, si sale mal", texto: "es el costo oculto más caro. Una marca que no se puede registrar y ya está en la fachada, los uniformes y la papelería se rehace entera." },
        ],
        nota: {
          titulo: "El orden que ahorra dinero",
          texto: "Verifica la disponibilidad antes de mandar a hacer el logo, no después. Diseñar una marca que después no se puede registrar es la secuencia que obliga a tirar todo lo impreso, y pasa más de lo que parece.",
        },
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta registrar una marca en Indecopi?",
        a: "Según las fuentes consultadas en octubre de 2026, la tasa de la primera clase es de S/534.90 y cada clase adicional cuesta S/533.30. Las MYPE que califican acceden a una tarifa reducida de S/401.20. Conviene confirmar el monto vigente en el canal oficial de Indecopi antes de pagar, porque las tasas se actualizan por decreto.",
      },
      {
        q: "¿Qué pasa si me deniegan la solicitud?",
        a: "La tasa no se devuelve. Ese es el motivo por el que conviene hacer la búsqueda previa, que cuesta unas decenas de soles por clase: es mucho más barato descubrir el conflicto antes de pagar el trámite completo que después.",
      },
      {
        q: "¿Tengo que registrar mi marca en varias clases?",
        a: "Solo en las que realmente vendes o vas a vender pronto. Cada clase adicional cuesta casi lo mismo que la primera, así que registrar «por si acaso» multiplica el gasto sin darte más protección donde sí operas.",
      },
      {
        q: "¿Si tengo la empresa inscrita, la marca ya es mía?",
        a: "No. Inscribir la razón social o tener la licencia municipal no equivale a tener la marca registrada: son trámites distintos y protegen cosas distintas. Alguien puede registrar como marca el nombre con el que tú operas desde hace años.",
      },
      {
        q: "¿Necesito un abogado?",
        a: "No es obligatorio y se puede presentar por cuenta propia. Encargarlo a un estudio o gestor tiene sentido sobre todo si la búsqueda previa arroja marcas parecidas o si aparece una oposición, que es cuando el trámite deja de ser un formulario y pasa a ser un procedimiento.",
      },
    ],
    cierre: "En Suggestion diseñamos marcas pensando desde el primer boceto en que se puedan registrar, que es el detalle que evita rehacerlo todo después.",
    moneyPage: { label: "Branding e identidad de marca", href: "/servicios/branding" },
    relacionados: ["cuanto-cuesta-un-logotipo-en-peru", "como-crear-un-logo", "que-es-rebranding"],
  },
  {
    slug: "cuanto-cuesta-un-plan-de-marketing-en-peru",
    categoria: "performance",
    title: "Cuánto Cuesta un Plan de Marketing en Perú | Suggestion",
    description:
      "Desde S/300 una sesión estratégica hasta S/15,000 un plan completo. Qué estás comprando en cada rango y cómo saber si el plan vale lo que cuesta.",
    h1: "Cuánto cuesta un plan de marketing en Perú",
    excerpt:
      "Un plan de marketing puede costar S/300 o S/15,000, y los dos pueden ser precios justos. La diferencia no está en el documento: está en quién lo ejecuta después.",
    date: "2026-10-05",
    secciones: [
      {
        h2: "Primero: qué estás comprando exactamente",
        parrafo:
          "«Plan de marketing» se usa para cuatro cosas distintas, y por eso las cotizaciones no se parecen. Antes de comparar precios conviene saber en cuál de las cuatro estás.",
        tabla: {
          cabeceras: ["Qué compras", "Qué recibes", "Cuándo tiene sentido"],
          filas: [
            ["Sesión estratégica", "Un par de horas de conversación con conclusiones", "Tienes una duda concreta y necesitas criterio, no un documento"],
            ["Diagnóstico", "Análisis de tu situación con entregables", "Sabes que algo no funciona y no sabes qué"],
            ["Plan estratégico", "El documento completo: objetivos, público, canales, presupuesto y calendario", "Vas a invertir en serio y necesitas una hoja de ruta"],
            ["Acompañamiento mensual", "Alguien que dirige y corrige sobre la marcha", "Tienes equipo o proveedores, pero nadie que los ordene"],
          ],
          nota: "La diferencia más importante no es de contenido, es de responsabilidad: en los tres primeros te entregan algo y se van; en el cuarto se quedan a responder por el resultado.",
        },
      },
      {
        h2: "Los rangos del mercado peruano",
        parrafo:
          "Las cifras varían mucho porque dependen de la experiencia de quien lo hace y de si hay o no acompañamiento después.",
        tabla: {
          cabeceras: ["Modalidad", "Rango"],
          filas: [
            ["Sesión estratégica de unas dos horas", "desde S/300"],
            ["Diagnóstico con entregables completos", "hasta S/2,500"],
            ["Plan estratégico como proyecto", "desde S/5,000, hasta S/15,000"],
            ["Acompañamiento mensual de consultor", "desde S/1,200, hasta S/4,000 al mes"],
            ["Dirección estratégica externa continuada", "desde S/8,000, hasta S/15,000 al mes"],
          ],
          nota: "Rangos del mercado peruano consultados en octubre de 2026, según tarifarios publicados por consultores y agencias del rubro. No son tarifas de Suggestion ni una cotización.",
        },
      },
      {
        h2: "Qué tiene que traer para que valga lo que cuesta",
        parrafo:
          "Un plan de marketing no es un documento bonito con gráficos: es un conjunto de decisiones tomadas. Si al terminar de leerlo no sabes qué hacer el lunes, no era un plan.",
        bullets: [
          { titulo: "Un objetivo en número y con fecha", texto: "«crecer en redes» no es un objetivo. «Treinta citas al mes para diciembre» sí, porque se puede cumplir o no cumplir." },
          { titulo: "A quién le vas a hablar, con nombre y apellido", texto: "no «hombres y mujeres de 25 a 55 años», que no excluye a nadie. Un público que no excluye a nadie no sirve para decidir nada." },
          { titulo: "El presupuesto repartido", texto: "cuánto a medios, cuánto a producción, cuánto a gestión. Un plan sin cifras es una lista de buenas intenciones." },
          { titulo: "Qué se mide y dónde se mira", texto: "si el plan no dice con qué herramienta vas a ver si funciona, no vas a poder saberlo." },
          { titulo: "Qué NO se va a hacer", texto: "es la parte que distingue un plan de un catálogo. Decidir implica descartar, y un plan que lo incluye todo no decidió nada." },
        ],
      },
      {
        h2: "La señal de que no valió la pena",
        parrafo:
          "Casi todos los planes de marketing que hemos visto fracasar no fracasaron por estar mal pensados. Fracasaron porque nadie los ejecutó, y eso se puede anticipar desde antes de encargarlo.",
        bullets: [
          { titulo: "Nadie quedó como responsable", texto: "si el plan no dice quién hace cada cosa dentro de tu empresa, no va a pasar nada el lunes." },
          { titulo: "Pide más capacidad de la que tienes", texto: "un plan que supone un equipo de cinco personas cuando tienes dos es un documento de ficción, por bien escrito que esté." },
          { titulo: "No hay fecha de revisión", texto: "un plan anual que nadie vuelve a abrir hasta diciembre es un gasto. Los que funcionan se revisan cada mes o cada trimestre." },
          { titulo: "Lo entregaron y se fueron", texto: "el documento es la parte fácil. Si no hay nadie que ajuste cuando la realidad no coincida con el plan —y nunca coincide—, la inversión se pierde casi entera." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "Una alternativa honesta si el presupuesto es corto",
          texto: "Si tienes que elegir entre un plan completo y tres meses de ejecución medida, elige la ejecución. Vas a aprender más de tu mercado con una campaña real y bien medida que con cualquier documento, y ese aprendizaje sí es tuyo.",
        },
      },
    ],
    faq: [
      {
        q: "¿Cuánto cuesta un plan de marketing en Perú?",
        a: "En octubre de 2026 va desde unos S/300 por una sesión estratégica de un par de horas y hasta unos S/2,500 por un diagnóstico con entregables. Un plan estratégico completo como proyecto se mueve entre S/5,000 y S/15,000, y el acompañamiento mensual de un consultor va desde S/1,200 hasta S/4,000 al mes, subiendo a entre S/8,000 y S/15,000 cuando se trata de dirección estratégica continuada.",
      },
      {
        q: "¿Qué debe incluir un plan de marketing?",
        a: "Un objetivo en número y con fecha, a quién le vas a hablar de forma específica, los canales elegidos con su presupuesto repartido, un calendario, qué se mide y dónde se mira, y qué decidiste no hacer. Si falta lo último, probablemente no hubo decisiones: hubo una lista.",
      },
      {
        q: "¿Vale la pena si soy un negocio pequeño?",
        a: "Un plan completo rara vez es lo primero que necesita un negocio pequeño. Una sesión estratégica para ordenar la oferta y elegir un canal suele rendir mucho más, y cuesta una fracción. El plan grande tiene sentido cuando ya hay inversión y varios frentes que coordinar.",
      },
      {
        q: "¿Cuánto tiempo toma hacerlo?",
        a: "Un diagnóstico puede estar en una o dos semanas; un plan estratégico completo toma varias, porque buena parte del trabajo es reunir información tuya: ventas, costos, histórico de campañas y qué pasó con los clientes que no compraron.",
      },
      {
        q: "¿Y si el plan no funciona?",
        a: "Ningún plan sobrevive intacto al contacto con el mercado, y eso no es un fracaso: es la razón por la que se revisa. Lo que sí es un fracaso es descubrirlo en diciembre. Un plan serio incluye desde el inicio cuándo se revisa y qué señales obligan a cambiar de rumbo.",
      },
    ],
    cierre: "En Suggestion el plan no termina en un documento: incluye quién ejecuta, qué se mide y cuándo se corrige.",
    moneyPage: { label: "Consultoría de marketing", href: "/servicios/consultoria" },
    relacionados: ["cuanto-cobra-una-agencia-de-marketing-digital-en-peru", "que-es-el-marketing-digital", "cuanto-invertir-en-ads-peru"],
  },
  {
    slug: "como-elegir-una-agencia-de-marketing-digital",
    categoria: "performance",
    title: "Cómo Elegir una Agencia de Marketing Digital | Suggestion",
    description:
      "Las preguntas que separan una agencia que trabaja de una que presenta: qué pedir en la primera reunión, cómo leer una propuesta y las señales de alarma.",
    h1: "Cómo elegir una agencia de marketing digital",
    excerpt:
      "La reunión de venta la prepara su mejor gente y está diseñada para impresionarte. Estas son las preguntas que la desarman, y ninguna necesita que sepas de marketing.",
    date: "2026-10-06",
    secciones: [
      {
        h2: "Lo que se evalúa no es la presentación",
        parrafo:
          "Casi todas las agencias llegan con un portafolio bonito y casos de clientes conocidos. Eso no dice nada: dice que alguien les pagó, no que les haya funcionado. Lo que hay que mirar es si pueden explicar cómo midieron un resultado y qué hicieron cuando algo no funcionó.",
        bullets: [
          { titulo: "Pide un caso con números y con fecha", texto: "cuánto se invirtió, qué período, qué resultado comercial. Si la respuesta son impresiones y alcance, están midiendo lo que se ve bonito, no lo que vende." },
          { titulo: "Pregunta por una campaña que salió mal", texto: "es la pregunta más reveladora de todas. Quien trabaja de verdad tiene una y la cuenta sin problema; quien no, cambia de tema." },
          { titulo: "Pide hablar con un cliente actual", texto: "no con una referencia elegida de hace tres años. Un cliente de hoy te va a contar cómo es trabajar con ellos el martes por la tarde." },
          { titulo: "Mira si te preguntan de tu negocio", texto: "si en la primera reunión hablaron más de ellos que de ti, la propuesta que te van a mandar es la misma que le mandaron al anterior." },
        ],
      },
      {
        h2: "Cómo leer una propuesta",
        parrafo:
          "Las propuestas están escritas para que compares mal. Esta tabla ordena lo que de verdad hay que buscar, y la columna de la derecha es la que te dice si vas a poder exigir algo dentro de tres meses.",
        tabla: {
          cabeceras: ["Lo que suele decir", "Lo que tienes que pedir"],
          filas: [
            ["«Gestión de redes sociales»", "Cuántas piezas al mes, de qué tipo y quién responde los mensajes"],
            ["«Campañas de publicidad»", "Cuántas campañas, con qué objetivo y si la inversión va aparte"],
            ["«Reportes mensuales»", "Un ejemplo del reporte real de otro cliente, aunque sea con el nombre tapado"],
            ["«Estrategia personalizada»", "Qué preguntas te van a hacer para personalizarla, y cuándo"],
            ["«Optimización continua»", "Cada cuánto se revisa y qué pasa si un mes no hay mejora"],
          ],
          nota: "Si dos propuestas cuestan muy distinto, pon los dos alcances en una tabla como esta antes de mirar el precio. La mayoría de las diferencias se explican solas, y las que no se explican son la conversación que hay que tener.",
        },
      },
      {
        h2: "Las señales de alarma",
        parrafo:
          "Ninguna de estas descalifica sola, pero dos o tres juntas son suficientes para seguir buscando. Son las que más caro han salido a los clientes que llegan después de haber trabajado con alguien más.",
        bullets: [
          { titulo: "Garantiza posiciones o resultados concretos", texto: "nadie controla Google ni el mercado. Una garantía de primer puesto o de X ventas es una promesa que no se puede cumplir, y quien la hace lo sabe." },
          { titulo: "No quiere que la cuenta publicitaria sea tuya", texto: "es la señal más seria de todas. Si la inversión pasa por su cuenta, no vas a ver el gasto real y el día que te vayas no te llevas ni los datos ni el público." },
          { titulo: "Habla de seguidores como resultado", texto: "los seguidores no pagan planilla. Si el objetivo que proponen se mide en comunidad y no en contactos o ventas, estás comprando presencia." },
          { titulo: "Propone empezar sin medir nada", texto: "si nadie instala analítica antes de gastar, en tres meses la discusión va a ser de opiniones." },
          { titulo: "Presiona con descuentos que vencen", texto: "una decisión de proveedor que se toma con prisa se lamenta durante un año de contrato." },
        ],
      },
      {
        h2: "Lo que tienes que acordar antes de firmar",
        parrafo:
          "Esto se conversa al empezar, cuando todo el mundo está contento. Dejarlo para el final es cómo se pierden cuentas, públicos y creatividades.",
        pasos: [
          { titulo: "A nombre de quién quedan las cuentas", texto: "cuenta publicitaria, perfil de empresa, píxel, analítica y dominio tienen que estar a nombre de tu empresa, con tu correo como administrador." },
          { titulo: "Qué se entrega y con qué frecuencia", texto: "por escrito, con cantidades. «Contenido suficiente» no es una cantidad." },
          { titulo: "Con qué se declara el éxito", texto: "un indicador comercial, no de plataforma. Y cada cuánto se revisa." },
          { titulo: "Cómo se termina", texto: "plazo de preaviso y qué te llevas: archivos editables, accesos, públicos y el histórico de datos." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "La pregunta que casi nadie hace",
          texto: "«¿Quién va a trabajar en mi cuenta día a día, y cuántas cuentas lleva esa persona?». Quien te vende rara vez es quien ejecuta, y una persona llevando doce cuentas no puede dedicarle a la tuya lo que la propuesta promete.",
        },
      },
    ],
    faq: [
      {
        q: "¿Cómo sé si una agencia de marketing es buena?",
        a: "Por cómo responde a lo incómodo, no por su portafolio. Pide un caso con inversión, período y resultado comercial; pregunta por una campaña que salió mal; pide hablar con un cliente actual. Una agencia que trabaja de verdad contesta esas tres cosas sin incomodarse.",
      },
      {
        q: "¿Qué debo pedir en la primera reunión?",
        a: "Que te pregunten de tu negocio antes de proponerte nada. Si salen de la reunión sin saber cuánto vale un cliente para ti, de dónde vienen hoy tus ventas y qué pasó con tus campañas anteriores, la propuesta que te manden será genérica por obligación.",
      },
      {
        q: "¿Conviene la agencia más barata?",
        a: "Conviene la que puedas exigir. Un precio bajo con un alcance difuso termina costando más que uno alto con un alcance claro, porque pasas meses discutiendo qué estaba incluido. Compara alcances antes que montos.",
      },
      {
        q: "¿Debo firmar permanencia?",
        a: "Un plazo mínimo es razonable porque el trabajo tarda en dar fruto, sobre todo en posicionamiento. Lo que no es razonable es una permanencia sin compromisos de entrega del otro lado: si tú te amarras por meses, el alcance mensual tiene que estar igual de amarrado por escrito.",
      },
      {
        q: "¿Qué pasa con mis cuentas si cambio de agencia?",
        a: "Si están a nombre de tu empresa, no pasa nada: quitas un acceso y sigues. Si están a nombre de la agencia, puedes perder el histórico, los públicos y hasta el perfil de tu negocio. Por eso se acuerda al empezar y no al terminar.",
      },
    ],
    cierre: "En Suggestion las cuentas quedan siempre a tu nombre y el reporte mensual termina en qué se cambia, no en cuánto alcance hubo.",
    moneyPage: { label: "Agencia de marketing digital en Perú", href: "/servicios/marketing-digital" },
    relacionados: ["cuanto-cobra-una-agencia-de-marketing-digital-en-peru", "cuanto-cuesta-un-plan-de-marketing-en-peru", "que-es-el-marketing-digital"],
  },
  {
    slug: "como-aparecer-primero-en-google-maps",
    categoria: "conversion",
    title: "Cómo Aparecer Primero en Google Maps | Suggestion",
    description:
      "Los tres factores que Google documenta para los resultados locales —relevancia, distancia y prominencia— y qué puedes mover de cada uno. Sin trucos.",
    h1: "Cómo aparecer primero en Google Maps",
    excerpt:
      "Google publica los tres factores que deciden el orden de los resultados locales. Uno de ellos no lo controla nadie, y entender eso cambia por completo en qué vale la pena invertir esfuerzo.",
    date: "2026-10-06",
    secciones: [
      {
        h2: "Los tres factores, y cuál puedes mover",
        parrafo:
          "Esto no es especulación: Google documenta en su propia ayuda que los resultados locales se basan sobre todo en relevancia, distancia y prominencia. Lo útil es saber cuánto control tienes sobre cada uno, porque dos de los tres se trabajan y el otro no.",
        tabla: {
          cabeceras: ["Factor", "Qué significa", "Cuánto lo controlas"],
          filas: [
            ["Relevancia", "Qué tanto coincide tu perfil con lo que la persona buscó", "Mucho: depende de lo completo y preciso que esté tu perfil"],
            ["Distancia", "Qué tan lejos estás de quien busca, o de la zona que buscó", "Nada: no se puede mover un local desde una pantalla"],
            ["Prominencia", "Qué tan conocido es tu negocio dentro y fuera de internet", "Bastante: reseñas, menciones y enlaces hacia tu sitio"],
          ],
          nota: "La distancia es la que explica por qué tu competidor aparece primero desde una esquina y tú desde otra. No hay nada que arreglar ahí: el trabajo está en relevancia y prominencia, que son las que deciden cuando la distancia es parecida.",
        },
      },
      {
        h2: "Relevancia: completar lo que casi nadie completa",
        parrafo:
          "La mayoría de perfiles tienen el nombre, la dirección y poco más. Cada campo vacío es una búsqueda en la que no vas a aparecer, porque Google no puede relacionarte con algo que no le dijiste.",
        bullets: [
          { titulo: "La categoría principal, bien elegida", texto: "es el campo que más pesa en relevancia. Elige la que describe lo que haces, no la más grande ni la que suena mejor." },
          { titulo: "Las categorías secundarias", texto: "si atiendes varias cosas distintas, añádelas. Es la forma de aparecer en búsquedas que la categoría principal no cubre." },
          { titulo: "Los servicios y productos, uno por uno", texto: "cada servicio listado es una posibilidad más de coincidir con lo que alguien escribió." },
          { titulo: "Horario real, incluido el de feriados", texto: "un horario incorrecto no solo te quita visitas: genera reseñas malas de gente que llegó y encontró cerrado." },
          { titulo: "Fotos tuyas, actuales", texto: "fachada, interior, equipo y trabajos. Es lo que mira la persona antes de decidir entre tú y el de al lado." },
        ],
      },
      {
        h2: "Prominencia: las reseñas y lo demás",
        parrafo:
          "Prominencia es lo conocido que eres, y se construye dentro y fuera de Google. Las reseñas pesan, pero no son lo único, y conviene saber qué más cuenta antes de obsesionarse con una sola cosa.",
        bullets: [
          { titulo: "Reseñas: cantidad, frecuencia y respuesta", texto: "una docena de reseñas recientes dice más que cincuenta de hace tres años. Y responderlas todas, también las malas, es parte del trabajo." },
          { titulo: "Pídelas de forma sistemática", texto: "la mayoría de clientes contentos no deja reseña salvo que se lo pidas. Un mensaje al terminar el servicio, con el enlace directo, cambia el ritmo por completo." },
          { titulo: "Menciones en otros sitios", texto: "directorios, cámaras de comercio, medios locales y proveedores que te listan. Cuentan aunque no enlacen." },
          { titulo: "Que tu nombre, dirección y teléfono sean idénticos en todas partes", texto: "si en un directorio figura un teléfono viejo y en otro una dirección distinta, estás repartiendo tu propia señal." },
          { titulo: "Tu web también cuenta", texto: "un sitio que carga rápido y menciona tu ciudad y tus servicios refuerza el perfil. Los dos trabajan juntos." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "Lo que no funciona y puede costarte el perfil",
          texto: "Comprar reseñas, meter palabras clave en el nombre del negocio o registrar direcciones donde no operas son prácticas que Google detecta y sanciona, y la sanción puede ser la suspensión del perfil. El nombre del perfil tiene que ser el nombre real del negocio.",
        },
      },
      {
        h2: "Qué revisar este mes",
        parrafo:
          "Si tienes poco tiempo, este es el orden. Los dos primeros puntos explican la mayoría de los casos en los que un negocio no aparece.",
        pasos: [
          { titulo: "Confirma que el perfil está verificado", texto: "un perfil sin verificar no compite y los cambios que hagas pueden no publicarse. Es lo primero, antes que cualquier otra cosa." },
          { titulo: "Revisa la categoría principal", texto: "entra a ver con qué categoría estás clasificado. Es frecuente encontrar una categoría heredada que no corresponde a lo que haces hoy." },
          { titulo: "Completa servicios, horario y fotos", texto: "una tarde de trabajo que suele dar más resultado que meses de publicaciones." },
          { titulo: "Monta la rutina de reseñas", texto: "decide quién la pide, cuándo y con qué mensaje. Sin rutina no hay reseñas; con rutina llegan solas." },
          { titulo: "Mira desde dónde te buscan", texto: "pide a alguien en otra zona de la ciudad que busque tu rubro y mira en qué posición sales. La distancia cambia el resultado y conviene saber cuál es tu radio real." },
        ],
      },
    ],
    faq: [
      {
        q: "¿Cómo aparezco primero en Google Maps?",
        a: "Trabajando los dos factores que puedes controlar. Google documenta tres —relevancia, distancia y prominencia— y la distancia no se mueve. La relevancia se trabaja completando el perfil con precisión, sobre todo la categoría; la prominencia, con reseñas constantes, menciones en otros sitios y datos de contacto idénticos en todas partes.",
      },
      {
        q: "¿Por qué mi competidor aparece primero si yo tengo mejores reseñas?",
        a: "Casi siempre por distancia. Los resultados locales cambian según desde dónde busca la persona, así que no existe «el primer puesto» en Maps: existe el primer puesto desde cada punto. Comprueba buscando desde zonas distintas antes de concluir que tienes un problema.",
      },
      {
        q: "¿Cuántas reseñas necesito?",
        a: "No hay un número mágico, y la constancia pesa más que el total. Un negocio con reseñas recientes y respondidas transmite actividad; uno con muchas reseñas antiguas y ninguna respuesta, lo contrario. Lo importante es tener una rutina para pedirlas, no una meta.",
      },
      {
        q: "¿Puedo poner palabras clave en el nombre de mi negocio?",
        a: "No conviene. El nombre del perfil tiene que ser el nombre real con el que operas; añadirle palabras clave va contra las normas de Google y puede terminar en la suspensión del perfil. Las palabras clave van en la categoría, los servicios y la descripción.",
      },
      {
        q: "¿Sirve de algo si no tengo local físico?",
        a: "Sí, pero con otra configuración: existen los perfiles de área de servicio, para negocios que atienden a domicilio sin que el cliente vaya a una dirección. Se declara la zona que cubres y la dirección no se muestra públicamente.",
      },
    ],
    cierre: "En Suggestion trabajamos el perfil de empresa junto con la web, porque el posicionamiento local se gana en los dos a la vez.",
    moneyPage: { label: "Posicionamiento web (SEO)", href: "/servicios/seo" },
    relacionados: ["ficha-de-empresa-en-google-crear-y-verificar", "posicionamiento-web-como-aparecer-en-google", "como-crear-una-pagina-web"],
  },
  {
    slug: "ficha-de-empresa-en-google-crear-y-verificar",
    categoria: "conversion",
    title: "Ficha de Empresa en Google: Crear y Verificar | Suggestion",
    description:
      "Cómo crear el perfil de empresa en Google, los cinco métodos de verificación y qué hacer si alguien ya reclamó tu negocio o si te suspenden la ficha.",
    h1: "Ficha de empresa en Google: cómo crearla y verificarla",
    excerpt:
      "Un perfil sin verificar es un perfil que no compite: no aparece en el mapa y los cambios que hagas pueden no publicarse nunca. La verificación no es un trámite, es el requisito.",
    date: "2026-10-06",
    secciones: [
      {
        h2: "Qué es y por qué no es opcional",
        parrafo:
          "El perfil de empresa en Google —lo que mucha gente sigue llamando Google My Business— es la ficha que aparece a la derecha cuando alguien busca tu negocio y la que te pone en el mapa. Para un negocio con local, suele traer más contactos que la propia web, porque llega a la persona en el momento exacto en que está decidiendo a dónde ir.",
        bullets: [
          { titulo: "Es gratis", texto: "crear y mantener el perfil no cuesta nada. Si alguien te cobra por «aparecer en Google Maps», te está cobrando por el trabajo, no por el espacio." },
          { titulo: "Ya puede existir sin que lo hayas creado tú", texto: "Google genera fichas automáticamente a partir de información pública. Es habitual descubrir que tu negocio ya está ahí, con datos incompletos o equivocados." },
          { titulo: "Cualquiera puede sugerir cambios", texto: "incluidos tus competidores y clientes. Un perfil que nadie administra es un perfil que alguien más puede editar." },
          { titulo: "Sin verificar, no compite", texto: "es la diferencia entre existir y aparecer." },
        ],
      },
      {
        h2: "Los cinco métodos de verificación",
        parrafo:
          "Google decide automáticamente qué métodos te ofrece según el tipo de negocio, la información pública disponible, la región y el horario. No se pueden elegir: te aparecen los que te aparecen.",
        tabla: {
          cabeceras: ["Método", "Cómo funciona", "Cuánto tarda"],
          filas: [
            ["Teléfono o SMS", "Recibes un código en el número del negocio", "Minutos"],
            ["Correo electrónico", "Código a un correo corporativo ligado a tu web", "Minutos"],
            ["Grabación de vídeo", "Grabas un recorrido con calle, letrero e interior", "Hasta 5 días hábiles de revisión"],
            ["Videollamada", "Un agente te pide mostrar fachada, letreros y zonas internas", "En tu horario comercial"],
            ["Correo postal", "Google envía una postal con el código a la dirección", "La mayoría llega en hasta 14 días"],
          ],
          nota: "Si te ofrecen videollamada, suele ser la vía más rápida y la que menos se atasca. Un sistema de respuesta automática en el teléfono impide recibir el código por voz: ten a alguien que conteste.",
        },
        nota: {
          tipo: "aviso",
          titulo: "Prepara la grabación antes de empezar",
          texto: "Para el vídeo necesitas mostrar la calle con algo que identifique la ubicación, el letrero del negocio y el interior con el equipo de trabajo, todo en una sola toma continua. Si lo cortas o te falta el letrero, suelen rechazarlo y hay que repetir.",
        },
      },
      {
        h2: "Qué completar, en orden de impacto",
        parrafo:
          "Una vez verificado, no todos los campos valen lo mismo. Este es el orden en que conviene llenarlos si vas a hacerlo en una sola sesión.",
        pasos: [
          { titulo: "Categoría principal", texto: "el campo que más decide en qué búsquedas apareces. Elige la que describe exactamente lo que haces." },
          { titulo: "Nombre, dirección y teléfono", texto: "escritos exactamente igual que en tu web y en cualquier directorio donde figures. Las variaciones dividen tu señal." },
          { titulo: "Horario, incluido feriados", texto: "y actualízalo. Un cliente que llega y encuentra cerrado deja una reseña de una estrella." },
          { titulo: "Servicios y productos", texto: "listados uno por uno, con su descripción. Cada uno abre una puerta de entrada distinta." },
          { titulo: "Fotos reales y recientes", texto: "fachada, interior, equipo y trabajos terminados. Las de banco de imágenes se notan y restan." },
        ],
      },
      {
        h2: "Los dos problemas más comunes",
        parrafo:
          "Casi todo lo que sale mal con un perfil cae en uno de estos dos casos, y los dos tienen solución aunque ninguna sea inmediata.",
        bullets: [
          { titulo: "Alguien más reclamó tu negocio", texto: "pasa cuando una agencia anterior o un exempleado verificó el perfil con su correo. Google tiene un proceso para solicitar el acceso: se pide desde el propio perfil y el administrador actual tiene un plazo para responder. Si no responde, puedes quedarte con el control." },
          { titulo: "Te suspendieron el perfil", texto: "suele deberse a palabras clave en el nombre, una dirección donde no se atiende al público o cambios bruscos de datos. Se corrige lo que lo causó y se solicita el restablecimiento; conviene no hacer más ediciones mientras se revisa." },
          { titulo: "Hay fichas duplicadas", texto: "dos perfiles del mismo negocio compiten entre sí y reparten las reseñas. Se reportan para que se fusionen." },
          { titulo: "Los datos cambian solos", texto: "Google aplica sugerencias de usuarios. Si cambiaste de teléfono o de horario, revisa el perfil unas semanas después para confirmar que sigue como lo dejaste." },
        ],
      },
    ],
    faq: [
      {
        q: "¿Cómo creo la ficha de mi negocio en Google?",
        a: "Desde el perfil de empresa de Google, buscando primero si tu negocio ya existe: es muy común que Google haya creado la ficha automáticamente. Si existe, se reclama; si no, se crea. En los dos casos el siguiente paso es la verificación, sin la cual el perfil no compite.",
      },
      {
        q: "¿Cuánto tarda la verificación?",
        a: "Depende del método que Google te ofrezca. Por teléfono, SMS o correo electrónico es cuestión de minutos; la grabación de vídeo se revisa en hasta cinco días hábiles; la postal es la más lenta, y la mayoría de códigos llega en un plazo de hasta catorce días.",
      },
      {
        q: "¿Puedo elegir cómo verificar mi negocio?",
        a: "No. Google determina automáticamente qué métodos están disponibles según el tipo de empresa, la información pública, la región y el horario de atención. Te aparecen los que te aparecen, y no se pueden cambiar.",
      },
      {
        q: "¿Qué hago si alguien más administra mi perfil?",
        a: "Se solicita el acceso desde el propio perfil. Google avisa al administrador actual, que tiene un plazo para responder; si no responde, puedes obtener el control. Es la situación típica cuando una agencia anterior verificó la ficha con su correo, y es el motivo por el que conviene que el perfil esté siempre a nombre del negocio.",
      },
      {
        q: "¿Cuesta algo tener la ficha?",
        a: "No. El perfil es gratuito y también lo es mantenerlo. Lo que sí tiene costo es el trabajo de configurarlo bien, conseguir reseñas de forma constante y mantenerlo actualizado, que es donde está la diferencia entre tener ficha y aparecer en el mapa.",
      },
    ],
    cierre: "En Suggestion configuramos y verificamos el perfil de empresa, y lo dejamos a nombre del negocio, nunca del nuestro.",
    moneyPage: { label: "Posicionamiento web (SEO)", href: "/servicios/seo" },
    relacionados: ["como-aparecer-primero-en-google-maps", "posicionamiento-web-como-aparecer-en-google", "como-crear-una-pagina-web"],
  },
  {
    slug: "que-es-un-embudo-de-ventas",
    categoria: "conversion",
    title: "Qué es un Embudo de Ventas y Cómo Armar el Tuyo | Suggestion",
    description:
      "Qué es un embudo de ventas, cómo se construye con las etapas de tu negocio real y por qué el que más vende es el que enseña dónde se te cae la gente.",
    h1: "Qué es un embudo de ventas y cómo armar el tuyo",
    excerpt:
      "Un embudo no sirve para explicar el marketing en una lámina. Sirve para una sola cosa: ver en qué escalón se te está cayendo la gente, que casi nunca es donde crees.",
    date: "2026-10-06",
    secciones: [
      {
        h2: "Qué es, sin la lámina de siempre",
        parrafo:
          "Un embudo de ventas es el recorrido que hace una persona desde que descubre que existes hasta que te compra, dividido en etapas que puedes contar. Se llama embudo porque en cada paso quedan menos: eso es normal y no es el problema. El problema es no saber en cuál de los pasos se van, porque entonces se invierte a ciegas en el escalón equivocado.",
        bullets: [
          { titulo: "No es una teoría, es un conteo", texto: "si no puedes poner un número en cada etapa, no tienes un embudo: tienes un dibujo." },
          { titulo: "Las etapas son las tuyas", texto: "las de un consultorio no son las de una inmobiliaria. Copiar un embudo genérico de internet es el error de arranque más común." },
          { titulo: "Se mide hacia abajo, no hacia arriba", texto: "la métrica que importa no es cuánta gente entra, sino qué porcentaje pasa de cada escalón al siguiente." },
          { titulo: "Sirve para decidir dónde gastar", texto: "si la caída está en la respuesta a los mensajes, invertir más en publicidad solo compra más gente a la que no vas a contestar." },
        ],
      },
      {
        h2: "Un embudo real, con sus caídas",
        parrafo:
          "Este es un ejemplo con números inventados, pero con la forma que suelen tener los embudos de verdad. Lo interesante no son las cifras: es dónde está el escalón que más se encoge.",
        tabla: {
          cabeceras: ["Etapa", "Personas", "Pasa a la siguiente"],
          filas: [
            ["Vieron el anuncio", "20,000", "—"],
            ["Escribieron o dejaron su dato", "400", "2 %"],
            ["Recibieron respuesta efectiva", "260", "65 %"],
            ["Mostraron interés real", "90", "35 %"],
            ["Agendaron una cita", "35", "39 %"],
            ["Compraron", "12", "34 %"],
          ],
          nota: "Cifras de ejemplo para ilustrar la estructura. El escalón que salta a la vista es el segundo del cuadro: 140 personas escribieron y nadie las atendió de forma efectiva. Recuperar la mitad de esas daría más ventas que duplicar la inversión en publicidad, y cuesta bastante menos.",
        },
      },
      {
        h2: "Cómo armar el tuyo en una tarde",
        parrafo:
          "No hace falta software ni consultoría para empezar. Hace falta decidir las etapas y conseguir un número para cada una, aunque el primer mes sea aproximado.",
        pasos: [
          { titulo: "Escribe las etapas de tu venta real", texto: "las que de verdad ocurren en tu negocio, con el nombre que usa tu equipo. Entre cuatro y seis suelen bastar." },
          { titulo: "Define cuándo alguien pasa de una a otra", texto: "es la parte que más discusiones evita. ¿«Interesado» es que respondió o que preguntó el precio? Que esté escrito." },
          { titulo: "Consigue el número de cada etapa", texto: "del último mes. Si no lo tienes, cuenta a mano una semana: es suficiente para ver la forma." },
          { titulo: "Calcula el paso entre escalones", texto: "en porcentaje. Ahí aparece solo el escalón que está estrangulando todo lo demás." },
          { titulo: "Arregla uno solo", texto: "el peor. Y vuelve a medir el mes siguiente antes de tocar nada más, o no vas a saber qué funcionó." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "El escalón que casi siempre es el culpable",
          texto: "En la mayoría de negocios pequeños que hemos medido, la caída más grande no está en la publicidad ni en el cierre: está entre el mensaje que entra y la respuesta. Gente que escribió y nadie contestó a tiempo. Es el arreglo más barato y el que más rápido se nota.",
        },
      },
      {
        h2: "Los errores que lo vuelven inútil",
        parrafo:
          "Un embudo mal armado es peor que no tenerlo, porque te hace tomar decisiones con confianza sobre datos que no significan lo que crees.",
        bullets: [
          { titulo: "Contar impresiones como primera etapa", texto: "las impresiones no son personas: la misma persona puede ver el anuncio quince veces. Empieza a contar desde donde hay alguien identificable." },
          { titulo: "Mezclar períodos", texto: "si cuentas las ventas de este mes contra los contactos de este mes, estás comparando gente distinta. En ventas que tardan semanas, hay que seguir a la misma cohorte." },
          { titulo: "No registrar de dónde vino cada quien", texto: "sin el origen anotado al entrar, en tres meses no vas a poder decir qué campaña trajo qué venta." },
          { titulo: "Medir solo lo que sale bien", texto: "el valor del embudo está en las caídas. Un reporte que solo muestra el total de ventas no es un embudo, es un marcador." },
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué es un embudo de ventas?",
        a: "Es el recorrido que hace una persona desde que te descubre hasta que te compra, dividido en etapas que puedes contar. Su utilidad no es explicar el proceso, sino mostrar en qué escalón concreto estás perdiendo gente, para arreglar ese en lugar de gastar más arriba.",
      },
      {
        q: "¿Cuántas etapas debe tener?",
        a: "Entre cuatro y seis suele ser suficiente para un negocio pequeño o mediano. Más etapas no dan más precisión: dan más campos que nadie llena. Lo importante no es la cantidad, sino que esté escrito cuándo alguien pasa de una a la siguiente.",
      },
      {
        q: "¿Necesito un software para tener un embudo?",
        a: "Para empezar, no. Una hoja de cálculo con las etapas y un conteo semanal te muestra la forma del embudo y dónde está la caída. El software se vuelve necesario cuando el volumen hace imposible contar a mano o cuando varias personas tienen que trabajar sobre los mismos contactos.",
      },
      {
        q: "¿Cuál es la diferencia entre embudo de marketing y de ventas?",
        a: "Suele llamarse de marketing a la parte de arriba, hasta que alguien deja su dato, y de ventas a la parte de abajo, donde interviene una persona. Separarlos sirve para repartir responsabilidades, pero el embudo que vale es el completo: si cada área mira solo su mitad, nadie ve dónde se rompe la cadena.",
      },
      {
        q: "¿Qué porcentaje de conversión es bueno?",
        a: "Depende tanto del rubro y del ticket que compararte con un promedio ajeno sirve de poco. El punto de referencia útil es tu propio mes anterior: si el paso entre dos etapas mejora, lo que hiciste funcionó. Esa comparación sí es válida porque es con tu mismo negocio.",
      },
    ],
    cierre: "En Suggestion montamos el embudo con las etapas de tu operación y dejamos el seguimiento automatizado, para que la caída se vea sola.",
    moneyPage: { label: "CRM para ventas y WhatsApp", href: "/servicios/crm-automatizacion" },
    relacionados: ["que-es-un-lead", "que-es-un-crm", "cpl-vs-roas"],
  },
  {
    slug: "que-es-un-crm",
    categoria: "ia-automatizacion",
    title: "Qué es un CRM y Cuándo lo Necesitas | Suggestion",
    description:
      "Qué es un CRM, para qué sirve en ventas y marketing, cuándo deja de alcanzar la hoja de cálculo y los cuatro campos que deciden si va a servir de algo.",
    h1: "Qué es un CRM y cuándo lo necesitas de verdad",
    excerpt:
      "La mayoría de negocios no necesita un CRM más potente: necesita que alguien llene el que ya tiene. Esa diferencia explica casi todas las implementaciones que no sirvieron para nada.",
    date: "2026-10-06",
    secciones: [
      {
        h2: "Qué es un CRM, en una frase",
        parrafo:
          "Un CRM es el lugar donde queda escrito quién te contactó, cuándo, de dónde vino, qué se habló con esa persona y en qué etapa está hoy. El nombre viene de «gestión de la relación con el cliente», pero en la práctica es más simple: es la memoria del área comercial, fuera de la cabeza de cada vendedor.",
        bullets: [
          { titulo: "No es una base de datos de contactos", texto: "una agenda guarda nombres y teléfonos; un CRM guarda el estado de cada conversación y qué toca hacer después." },
          { titulo: "No es un software de facturación", texto: "se confunden a menudo. Uno gestiona oportunidades antes de la venta; el otro, documentos después." },
          { titulo: "Sirve igual en marketing y en ventas", texto: "marketing necesita saber qué campaña trajo a quién; ventas necesita saber a quién le toca llamar hoy. El mismo registro responde las dos cosas." },
          { titulo: "Su valor real es la continuidad", texto: "cuando un vendedor se va, con CRM se va la persona; sin CRM se van también sus clientes y todo lo que sabía de ellos." },
        ],
      },
      {
        h2: "Cuándo deja de alcanzar la hoja de cálculo",
        parrafo:
          "Una hoja de cálculo bien llevada es un CRM perfectamente válido durante más tiempo del que la mayoría cree. Estas son las señales de que ya se quedó corta, y conviene esperarlas en lugar de adelantarse.",
        tabla: {
          cabeceras: ["Señal", "Qué está pasando"],
          filas: [
            ["Dos personas editan y se pisan los cambios", "Necesitas registros con dueño, no celdas compartidas"],
            ["Se pierden seguimientos por olvido", "Necesitas recordatorios automáticos, no disciplina heroica"],
            ["Nadie sabe de dónde vino un cliente", "Necesitas que el origen se escriba solo al entrar el contacto"],
            ["El reporte mensual se arma a mano y tarda un día", "Necesitas que los datos ya estén estructurados"],
            ["Los mensajes de WhatsApp viven en el celular de alguien", "Necesitas que la conversación sea de la empresa, no de la persona"],
          ],
          nota: "Si ninguna de estas te pasa todavía, un CRM no te va a dar más ventas: te va a dar más trabajo administrativo. La herramienta tiene que llegar cuando el problema ya existe.",
        },
      },
      {
        h2: "Los cuatro campos que deciden si va a servir",
        parrafo:
          "Casi todas las implementaciones que fracasan lo hacen por la misma razón: se configuraron treinta campos y el equipo no llena ninguno. Estos cuatro, bien puestos y obligatorios, valen más que el resto juntos.",
        pasos: [
          { titulo: "Origen", texto: "de dónde vino la persona, escrito al crear el registro y no después. Sin este campo no hay forma de saber qué campaña funcionó." },
          { titulo: "Fecha de entrada", texto: "porque una venta que cierra hoy con un contacto de hace dos meses no la pagó la campaña de este mes. Sin la fecha, los números se inflan solos." },
          { titulo: "Etapa", texto: "con una lista corta y cerrada, no un texto libre. Si cada vendedor escribe la etapa a su manera, no hay embudo que valga." },
          { titulo: "Responsable", texto: "una persona con nombre. Un contacto sin dueño es un contacto que nadie va a llamar." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "La regla que salva implementaciones",
          texto: "Tres campos obligatorios y bien llenados valen más que veinte opcionales a medias. Si el equipo tarda más de treinta segundos en registrar un contacto, va a dejar de hacerlo, y un CRM a medio llenar miente con mucha seguridad.",
        },
      },
      {
        h2: "Qué mirar al elegir uno",
        parrafo:
          "La comparación de funcionalidades es la peor forma de elegir: todos los CRM del mercado hacen lo básico. Lo que cambia es si tu equipo lo va a usar.",
        bullets: [
          { titulo: "Que se conecte con WhatsApp", texto: "en Perú la mayoría de conversaciones comerciales pasa por ahí. Un CRM al que hay que copiar los mensajes a mano no se va a usar." },
          { titulo: "Que funcione bien en celular", texto: "si tu equipo vende en calle o en sala, la app importa más que el panel de escritorio." },
          { titulo: "Que puedas sacar tus datos", texto: "pregunta cómo se exporta todo antes de entrar. Es la pregunta que nadie hace y la que duele cuando quieres cambiar." },
          { titulo: "Que empiece simple", texto: "es preferible arrancar con lo mínimo y crecer, que configurar un sistema completo que el equipo abandona la segunda semana." },
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué es un CRM y para qué sirve?",
        a: "Es el sistema donde queda registrado quién te contactó, de dónde vino, qué se conversó y en qué etapa está. Sirve para que ningún contacto se pierda por olvido, para saber qué campaña trajo qué venta y para que la información del área comercial sea de la empresa y no de la memoria de cada vendedor.",
      },
      {
        q: "¿Cuál es la diferencia entre un CRM y un ERP?",
        a: "El CRM gestiona lo que pasa antes de la venta: contactos, oportunidades y seguimiento. El ERP gestiona la operación interna: inventario, compras, producción, contabilidad. Son sistemas distintos con públicos distintos, aunque muchas empresas terminan conectándolos.",
      },
      {
        q: "¿Necesito un CRM si tengo un negocio pequeño?",
        a: "No necesariamente. Mientras una persona pueda llevar el seguimiento sin perder nada, una hoja de cálculo ordenada funciona. El CRM se vuelve necesario cuando hay varias personas trabajando los mismos contactos, cuando se pierden seguimientos por olvido o cuando no puedes decir de dónde vino cada cliente.",
      },
      {
        q: "¿Cuánto cuesta un CRM?",
        a: "Hay opciones gratuitas con las funciones básicas y planes por usuario al mes que suben según lo que necesites. Pero el costo del software casi nunca es el costo real: la partida más grande es configurarlo bien y lograr que el equipo lo use. Un CRM caro sin adopción cuesta más que uno gratuito bien llevado.",
      },
      {
        q: "¿Cuánto tarda en implementarse?",
        a: "Una configuración básica con los campos esenciales y un pipeline simple puede estar en semanas. Lo que toma tiempo no es la herramienta: es acordar las etapas, decidir qué se registra y conseguir que el equipo lo haga todos los días. Esa parte se mide en meses de hábito, no en días de configuración.",
      },
    ],
    cierre: "En Suggestion implementamos el CRM con los campos mínimos que de verdad se llenan, y conectado a WhatsApp, que es por donde entra casi todo.",
    moneyPage: { label: "CRM para ventas y WhatsApp", href: "/servicios/crm-automatizacion" },
    relacionados: ["que-es-un-embudo-de-ventas", "como-automatizar-whatsapp", "que-es-un-lead"],
  },
  {
    slug: "que-es-el-remarketing",
    categoria: "performance",
    title: "Qué es el Remarketing y Cómo Usarlo Bien | Suggestion",
    description:
      "Qué es el remarketing, cómo se arma una audiencia, por qué suele ser lo más rentable de una cuenta y los errores que lo convierten en acoso publicitario.",
    h1: "Qué es el remarketing y cómo usarlo sin cansar a nadie",
    excerpt:
      "Es, casi siempre, lo más rentable de una cuenta publicitaria: le hablas a gente que ya te conoce. Y es también lo que más rápido se arruina, porque la línea entre recordar y perseguir es más fina de lo que parece.",
    date: "2026-10-06",
    secciones: [
      {
        h2: "Qué es y por qué rinde tanto",
        parrafo:
          "El remarketing —también llamado retargeting— consiste en mostrar anuncios a personas que ya tuvieron contacto contigo: visitaron tu web, vieron un video, escribieron por mensaje o están en tu lista de clientes. La diferencia con una campaña normal es enorme: no estás pagando por presentarte, estás pagando por volver a aparecer frente a alguien que ya sabe quién eres.",
        bullets: [
          { titulo: "El público es pequeño y caliente", texto: "son menos personas, pero cada una vale mucho más. Por eso el costo por venta suele ser el más bajo de la cuenta." },
          { titulo: "Resuelve el problema real de la mayoría de webs", texto: "casi nadie compra en la primera visita. El remarketing existe para las otras visitas." },
          { titulo: "No crea demanda", texto: "y esto es importante: solo trabaja con la gente que ya atrajiste. Si nadie llega a tu web, no hay a quién recordarle nada." },
          { titulo: "Se nota rápido", texto: "al ser un público reducido y con intención, los resultados aparecen antes que en campañas de captación." },
        ],
      },
      {
        h2: "Con qué se arma una audiencia",
        parrafo:
          "Una audiencia de remarketing se construye con una señal: algo que la persona hizo. Cuanto más cerca de la compra esté esa señal, más valiosa es la audiencia y distinto debe ser el mensaje.",
        tabla: {
          cabeceras: ["Audiencia", "Qué hizo esa persona", "Qué mensaje corresponde"],
          filas: [
            ["Visitó la web", "Entró, sin más", "Recordar quién eres y qué resuelves"],
            ["Vio una página de producto o servicio", "Mostró interés en algo concreto", "Hablar de eso, no del catálogo entero"],
            ["Empezó un formulario y no lo terminó", "Estuvo a un paso", "Quitar la fricción: resolver la duda que lo frenó"],
            ["Vio buena parte de un video", "Te dedicó atención", "Dar el siguiente paso, no repetir el video"],
            ["Ya es cliente", "Te compró", "Venta cruzada o recompra, nunca la oferta de captación"],
          ],
          nota: "El error más común es tratar a las cinco audiencias con el mismo anuncio. Mostrarle la oferta de bienvenida a alguien que ya compró es la forma más rápida de parecer una empresa que no sabe con quién habla.",
        },
      },
      {
        h2: "Lo que hay que tener instalado antes",
        parrafo:
          "El remarketing no funciona retroactivamente: solo puede alcanzar a gente registrada desde que la medición está puesta. Instalarla el día que decides hacer remarketing significa esperar semanas para tener público.",
        bullets: [
          { titulo: "La etiqueta de medición en todo el sitio", texto: "el píxel o equivalente, en todas las páginas, desde hoy aunque todavía no vayas a pautar. Está juntando público mientras tanto." },
          { titulo: "Los eventos importantes marcados", texto: "contacto, formulario enviado, compra. Sin eventos solo puedes segmentar por visita, que es la señal más pobre." },
          { titulo: "El aviso de cookies y la política de privacidad", texto: "no es opcional. En Perú rige la ley de protección de datos personales y el sitio tiene que informar qué se recoge." },
          { titulo: "Tu lista de clientes, si la tienes", texto: "se puede cargar para crear audiencias, y también para excluir. Lo segundo es tan útil como lo primero." },
        ],
      },
      {
        h2: "Los errores que lo convierten en acoso",
        parrafo:
          "Todo el mundo ha tenido la experiencia de ver el mismo anuncio durante tres semanas después de una visita. Eso no es remarketing bien hecho: es una campaña a la que nadie le puso límites.",
        bullets: [
          { titulo: "No poner tope de frecuencia", texto: "si la misma persona ve tu anuncio diez veces al día, no la estás convenciendo: la estás agotando, y además pagas por cada impresión." },
          { titulo: "No poner fecha de caducidad a la audiencia", texto: "alguien que visitó hace seis meses ya no está decidiendo. Ventanas de días o pocas semanas suelen rendir mucho mejor que una de un año." },
          { titulo: "No excluir a quien ya compró", texto: "es el error que más molesta a los clientes y el que más presupuesto desperdicia. Quien compró sale de la campaña de captación el mismo día." },
          { titulo: "Repetir el mismo anuncio", texto: "si la persona no reaccionó al primero, el segundo igual tampoco va a funcionar. Cambia el ángulo, no la frecuencia." },
          { titulo: "Hacer remarketing sin tráfico", texto: "con cien visitas al mes no hay audiencia que armar. Primero hay que llenar la parte de arriba." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "Una regla simple de higiene",
          texto: "Antes de lanzar, pregúntate cuántas veces te gustaría ver tu propio anuncio si fueras el cliente. Pon ese tope, excluye a quien ya compró y dale a la audiencia una ventana corta. Con esas tres cosas, el remarketing deja de ser molesto y sigue siendo rentable.",
        },
      },
    ],
    faq: [
      {
        q: "¿Qué es el remarketing?",
        a: "Es mostrar anuncios a personas que ya tuvieron contacto contigo: visitaron tu web, vieron un video, te escribieron o ya son clientes. Como el público ya te conoce, el costo por venta suele ser el más bajo de toda la cuenta publicitaria.",
      },
      {
        q: "¿Cuál es la diferencia entre remarketing y retargeting?",
        a: "En la práctica se usan como sinónimos. Históricamente «remarketing» era el término de Google y «retargeting» el del resto del mercado, y a veces se distingue que remarketing incluye también el correo a clientes. Para decidir una campaña, la distinción no cambia nada.",
      },
      {
        q: "¿Qué necesito para empezar a hacer remarketing?",
        a: "La etiqueta de medición instalada en todo tu sitio, los eventos importantes marcados y suficiente tráfico para formar una audiencia. Conviene instalarla cuanto antes aunque todavía no vayas a pautar, porque solo alcanza a quien pasó después de instalarla: no funciona hacia atrás.",
      },
      {
        q: "¿Es legal perseguir a la gente con anuncios?",
        a: "La publicidad segmentada es legal, pero hay obligaciones: informar en tu sitio qué datos se recogen y para qué, y respetar la ley de protección de datos personales. Lo que sí conviene evitar, más allá de lo legal, es la frecuencia excesiva: molesta al cliente y además te cuesta dinero.",
      },
      {
        q: "¿Por qué sigo viendo anuncios de algo que ya compré?",
        a: "Porque esa cuenta no está excluyendo a sus compradores de la campaña de captación. Es un error de configuración muy común, y en tu propia cuenta se arregla en minutos: se carga la lista de clientes como exclusión y se separa la campaña de recompra.",
      },
    ],
    cierre: "En Suggestion el remarketing se arma por audiencia y con tope de frecuencia, para que recuerde sin perseguir.",
    moneyPage: { label: "Agencia de Google Ads y Meta Ads", href: "/servicios/publicidad-digital" },
    relacionados: ["cuanto-invertir-en-ads-peru", "cpl-vs-roas", "que-es-un-lead"],
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
