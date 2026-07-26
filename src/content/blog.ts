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
