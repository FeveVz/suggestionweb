/**
 * Datos de las 5 categorías hub + 16 servicios de suggestion.pe.
 * Copy literal de docs-fuente 06 (top 5), 07 (11 restantes) y 09 (categorías).
 * Slugs idénticos a content/navegacion.ts. Una keyword principal por página.
 */

import type { Servicio } from "./types";

/** Pilar /servicios (doc 09 §A0). Página propia, no [slug]. */
export const SERVICIOS_PILAR = {
  // Intención de catálogo, no de keyword raíz: deja de duplicar el patrón de la
  // portada y cede "marketing digital en Ica" a /servicios/marketing-digital.
  metaTitle: "Servicios de Marketing y Publicidad | Suggestion",
  metaDescription:
    "Todos nuestros servicios de marketing, de performance a BTL e imprenta. Todo tu marketing bajo un mismo método: de la estrategia al cierre. Agenda hoy.",
  h1: "Servicios de marketing que convierten en ventas",
  intro:
    "No vendemos piezas sueltas. Nos encargamos de todo el proceso —digital, marca, web y calle— bajo un mismo método: de la estrategia al cierre.",
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
    secciones: [
      {
        h2: "Antes de invertir, entender",
        parrafo:
          "La mayoría de negocios que llegan con un problema de marketing en realidad tienen un problema de definición: no saben con precisión a quién le venden mejor, por qué les compran los que sí compran, ni dónde exactamente se les cae la venta. Encender campañas sin resolver eso es la forma más rápida de gastar bien un presupuesto en la dirección equivocada. Esta categoría existe para responder esas preguntas antes de que cuesten dinero.",
      },
      {
        h2: "Qué incluye esta categoría",
        parrafo:
          "Dos servicios que suelen ir juntos: uno mira hacia afuera y el otro ordena hacia adentro.",
        bullets: [
          { titulo: "Consultoría", texto: "diagnóstico del proceso comercial completo y un plan priorizado: qué hacer primero, qué después y qué no hacer." },
          { titulo: "Investigación de mercado", texto: "datos reales sobre tu público, tu competencia y tu categoría, para decidir con evidencia en vez de con intuición." },
        ],
      },
      {
        h2: "Qué revisamos en un diagnóstico",
        parrafo:
          "Seguimos el recorrido completo del cliente, desde que te descubre hasta que paga, buscando dónde se pierde. Casi siempre hay más ventas escondidas en las fugas que en un canal nuevo.",
        bullets: [
          { titulo: "Tu oferta", texto: "qué vendes, a qué precio y por qué alguien debería elegirte a ti y no al de al lado." },
          { titulo: "Tu captación", texto: "de dónde llegan hoy tus clientes y cuánto te cuesta cada uno, si es que lo sabes." },
          { titulo: "Tu conversión", texto: "qué pasa entre el primer contacto y la venta: quién responde, en cuánto tiempo y con qué argumentos." },
          { titulo: "Tu medición", texto: "qué datos tienes realmente y cuáles estás decidiendo a ciegas." },
        ],
      },
      {
        h2: "Investigar no siempre es caro",
        parrafo:
          "No toda investigación requiere un estudio formal. Muchas veces las respuestas más valiosas salen de hablar con diez clientes actuales, revisar qué te preguntan por WhatsApp o mirar en serio lo que hace la competencia. Ese trabajo, hecho con orden, ya cambia decisiones. Los estudios más grandes tienen sentido cuando la decisión que depende de ellos es igual de grande: entrar a un mercado nuevo, lanzar una línea, cambiar el precio.",
      },
      {
        h2: "Qué te llevas al final",
        parrafo:
          "Un documento que se pueda ejecutar, no una presentación bonita: los hallazgos, las prioridades ordenadas por impacto y esfuerzo, y qué se mide para saber si funcionó. Y algo que valoramos más que el entregable: si en el diagnóstico concluimos que tu problema no se resuelve con marketing —porque es de producto, de precio o de capacidad de atención—, te lo decimos. Es más útil que venderte una campaña que no iba a funcionar.",
      },
    ],
    faq: [
      {
        q: "¿Qué diferencia hay entre consultoría y ejecutar campañas?",
        a: "La consultoría decide el rumbo; la ejecución lo recorre. Puedes contratar solo el diagnóstico y aplicarlo con tu propio equipo o con otro proveedor: el plan es tuyo. De hecho, buena parte de lo que recomendamos se puede implementar sin nosotros.",
      },
      {
        q: "¿Sirve una consultoría si mi negocio es pequeño?",
        a: "Suele servir más, porque con presupuesto limitado equivocarse cuesta proporcionalmente más. Media hora ordenando prioridades puede ahorrarte meses invirtiendo en el canal equivocado.",
      },
      {
        q: "¿Cuánto dura un diagnóstico?",
        a: "Un diagnóstico inicial es cuestión de días, no de meses: revisar tu situación, hablar contigo y devolverte las prioridades. Los estudios de mercado más profundos requieren más tiempo porque implican recoger datos de terceros.",
      },
      {
        q: "¿Necesito tener datos ordenados para empezar?",
        a: "No. Es habitual que el punto de partida sea justamente que no hay datos, y ordenar eso es parte del trabajo. Lo que sí ayuda mucho es que tengas claro cuánto vale un cliente para ti y cuántos puedes atender.",
      },
      {
        q: "¿Y si el diagnóstico dice que no necesito una agencia?",
        a: "Te lo decimos igual. Preferimos perder un contrato que cobrar por algo que no iba a mover tu negocio: la mitad de nuestros clientes llegan por recomendación, y eso no sobrevive a vender humo.",
      },
    ],
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
    secciones: [
      {
        h2: "Atraer y convertir: los dos trabajos distintos",
        parrafo:
          "Marketing y publicidad digital se usan como sinónimos y no lo son. La publicidad compra atención hoy: enciendes el presupuesto y llegan contactos; lo apagas y dejan de llegar. El marketing construye la demanda que no depende del presupuesto: contenido, marca y presencia que siguen trabajando el mes que decidas no invertir. Un negocio que solo hace publicidad vive alquilando clientes; uno que solo hace contenido tarda demasiado en facturar. La combinación es lo que sostiene el crecimiento.",
      },
      {
        h2: "Qué incluye esta categoría",
        parrafo:
          "Tres frentes que se coordinan entre sí, porque el mismo mensaje tiene que sostenerse en los tres para que el cliente reconozca a la misma marca.",
        bullets: [
          { titulo: "Marketing digital", texto: "la estrategia completa: qué canal, qué mensaje, para qué público y con qué objetivo comercial." },
          { titulo: "Publicidad digital", texto: "campañas en Meta y Google que traen contactos con intención, no clics baratos." },
          { titulo: "Redes sociales", texto: "la presencia que sostiene la confianza entre campaña y campaña, y que revisa todo el que va a comprarte." },
        ],
      },
      {
        h2: "Cómo medimos que funciona",
        parrafo:
          "Reportamos la cadena completa: contactos, citas y cierres, con el costo de cada paso. El alcance y los seguidores aparecen en el informe, pero no son la métrica que decide si seguimos invirtiendo. Este enfoque es el que llevó a una inmobiliaria de Ica a S/350K en ventas con S/3,000 en Meta Ads: 350 contactos, 20 visitas a sala de ventas y 8 lotes vendidos. La cifra que importa no fue el alcance, fueron los 8 lotes.",
      },
      {
        h2: "Un método por rubro, no una receta genérica",
        parrafo:
          "Un concesionario necesita llenar el piso de pruebas de manejo; una clínica, llenar la agenda sin quemar presupuesto; una inmobiliaria, citas calificadas en sala de ventas. Los tres podrían usar las mismas herramientas y fracasar con la misma estrategia. Por eso trabajamos con un enfoque distinto para cada uno de los siete sectores que atendemos, en lugar de aplicar la misma plantilla a todos.",
      },
      {
        h2: "Qué necesitas tener antes de invertir en pauta",
        parrafo:
          "Somos claros con esto porque nos ahorra problemas a los dos: la publicidad acelera lo que ya funciona, no lo arregla. Antes de encender campañas conviene tener resuelto a dónde llega el interesado —una página o un WhatsApp que responda—, quién atiende y en cuánto tiempo, y qué se le ofrece exactamente. Si falta alguna de las tres, la pauta solo consigue que más gente descubra el problema. Cuando detectamos eso en el diagnóstico, lo decimos antes de cobrar.",
      },
    ],
    faq: [
      {
        q: "¿Cuál es la diferencia entre marketing digital y publicidad digital?",
        a: "La publicidad es una parte del marketing: es el dinero que pones en plataformas para comprar atención. El marketing incluye además la estrategia, el mensaje, el contenido, la web y el seguimiento. Puedes hacer marketing sin publicidad, pero es más lento; hacer publicidad sin estrategia es más rápido y más caro.",
      },
      {
        q: "¿Meta Ads o Google Ads?",
        a: "Google captura a quien ya está buscando lo que vendes, así que suele traer intención más alta y funciona bien para servicios que se buscan por necesidad. Meta genera demanda en quien no te estaba buscando y rinde mejor en productos visuales y decisiones más impulsivas. Muchos negocios terminan usando ambos, pero conviene empezar por el que corresponde a cómo compra tu cliente.",
      },
      {
        q: "¿En cuánto tiempo veo resultados?",
        a: "Los primeros contactos por publicidad llegan en días. Estabilizar el costo por contacto toma entre 4 y 8 semanas, porque la plataforma necesita datos para aprender. El posicionamiento orgánico y el contenido van en otra escala: meses. Desconfía de quien te prometa ventas garantizadas la primera semana.",
      },
      {
        q: "¿Manejan el presupuesto de pauta o lo pago yo directamente?",
        a: "Lo habitual y más transparente es que la cuenta publicitaria sea tuya y pagues la pauta directamente a la plataforma. Así ves el gasto real sin intermediarios y la cuenta queda a tu nombre, con su historial, aunque algún día dejemos de trabajar juntos.",
      },
      {
        q: "¿Necesito publicar todos los días en redes?",
        a: "No. La frecuencia importa menos que la consistencia y que tener algo que decir. Es mejor publicar dos veces por semana con contenido que aporte, que siete veces con relleno. Lo que sí es innegociable es responder rápido los mensajes: ahí se pierden más ventas que en el calendario de publicaciones.",
      },
    ],
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
    secciones: [
      {
        h2: "Lo único de internet que sí es tuyo",
        parrafo:
          "Tus redes son alquiladas: si mañana cambia el algoritmo, te suspenden la cuenta o la plataforma pierde relevancia, se va con ella tu canal de venta. Tu web y tu base de contactos son lo único que controlas de verdad. Por eso esta categoría no va de tener una página bonita: va de construir el activo que sostiene el negocio cuando lo demás falla.",
      },
      {
        h2: "Qué incluye esta categoría",
        parrafo:
          "Tres piezas que resuelven el mismo problema en momentos distintos: que te encuentren, que al llegar decidan, y que ninguno se pierda después.",
        bullets: [
          { titulo: "Desarrollo web", texto: "sitios pensados para convertir visitas en contactos, rápidos en el celular y fáciles de actualizar." },
          { titulo: "SEO", texto: "aparecer cuando alguien busca lo que vendes, que es el tráfico con más intención de compra que existe." },
          { titulo: "CRM y automatización", texto: "que cada contacto quede registrado, reciba respuesta rápida y tenga seguimiento hasta el cierre." },
        ],
      },
      {
        h2: "Una web que convierte, no un folleto digital",
        parrafo:
          "La mayoría de webs de pyme son un folleto: cuentan quién eres y ahí termina. Una web que convierte hace tres cosas más: deja clarísimo qué problema resuelves en los primeros cinco segundos, quita cada obstáculo entre el interés y el contacto, y da señales de confianza —casos, cifras, datos de contacto visibles— justo donde el visitante duda. La diferencia entre una y otra no es el diseño: es el orden de la información.",
      },
      {
        h2: "SEO: lento, pero es el que se queda",
        parrafo:
          "Posicionarse toma meses y nadie honesto te garantiza una posición en Google, porque no depende solo del trabajo que hagamos. Lo que sí se puede prometer es el método: contenido que responde lo que la gente realmente busca, estructura técnica correcta y presencia local bien resuelta. La ventaja compensa la espera: cuando una página se posiciona, sigue trayendo contactos sin que pagues por cada clic.",
      },
      {
        h2: "Automatizar sin volverse frío",
        parrafo:
          "Automatizar no es responder con un robot. Es que el primer mensaje salga en segundos mientras tu equipo llega, que ninguna cotización quede sin seguimiento porque alguien la olvidó, y que sepas de qué campaña vino cada cliente. El toque humano se reserva para donde hace la diferencia: la conversación que cierra.",
      },
      {
        h2: "Cómo se nota que está funcionando",
        parrafo:
          "En tres números: cuánta gente llega, qué porcentaje deja sus datos y cuántos de esos compran. Si sube el tráfico pero no los contactos, el problema es la web. Si hay contactos pero no ventas, el problema es el seguimiento. Medir por separado es lo que permite arreglar la pieza correcta en vez de gastar más en publicidad.",
      },
    ],
    faq: [
      {
        q: "¿Cuánto tarda una web en estar lista?",
        a: "Depende del alcance, pero lo que más influye no es la programación: es la rapidez con que se define el contenido y se aprueban los textos e imágenes. Un proyecto con el contenido listo avanza mucho más rápido que uno donde se va decidiendo sobre la marcha.",
      },
      {
        q: "¿Es mejor una web hecha a medida o una plantilla?",
        a: "Una plantilla resuelve bien si necesitas presencia rápida y económica. Empieza a quedarse corta cuando necesitas velocidad de carga real, posicionamiento serio o funciones propias. La pregunta útil no es cuál es mejor, sino cuánto te cuesta migrar después si tu negocio crece.",
      },
      {
        q: "¿Cuánto tiempo toma ver resultados de SEO?",
        a: "Se mide en meses, no semanas. Las primeras señales —que Google indexe y muestre tus páginas— aparecen pronto, pero subir a las primeras posiciones en términos con competencia es un trabajo sostenido. Si necesitas ventas este mes, el SEO no es el canal; es el que asegura los meses siguientes.",
      },
      {
        q: "¿Necesito un CRM si tengo pocos clientes?",
        a: "Cuantos menos clientes tengas, más caro te sale perder uno. No hace falta un sistema costoso: lo esencial es que exista un solo lugar con todos los contactos, su historial y la próxima acción con fecha. Eso ya evita la mayoría de las pérdidas por olvido.",
      },
      {
        q: "¿Puedo actualizar la web yo mismo?",
        a: "Sí, las hacemos para que puedas cambiar textos, fotos y publicaciones sin depender de nadie. Lo que conviene dejar en manos técnicas son los cambios de estructura, porque ahí es donde un ajuste mal hecho puede afectar el posicionamiento que costó meses.",
      },
    ],
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
    secciones: [
      {
        h2: "La marca es lo que queda cuando apagas la pauta",
        parrafo:
          "Puedes comprar atención todos los meses o construir una razón para que te elijan sin pagar por ella. La marca es eso: la diferencia entre competir por precio y competir por preferencia. En mercados como el iqueño, donde muchos ofrecen lo mismo, la marca suele ser el único terreno donde de verdad se puede ganar sin bajar el margen.",
      },
      {
        h2: "Qué incluye esta categoría",
        parrafo:
          "Dos frentes que resuelven la misma pregunta —por qué elegirte a ti— desde ángulos distintos.",
        bullets: [
          { titulo: "Branding", texto: "identidad, mensaje y posicionamiento: cómo te ven, qué prometes y en qué te diferencias." },
          { titulo: "Producción audiovisual", texto: "el material que demuestra lo que dices: video de producto, institucional, testimonios y contenido para campañas." },
        ],
      },
      {
        h2: "Branding no es solo el logo",
        parrafo:
          "Cambiar el logo es lo último y lo menos importante. Antes va lo que casi nadie define: a quién le hablas, qué problema resuelves mejor que los demás, con qué tono lo dices y qué te hace reconocible en tres segundos. Cuando eso está claro, el diseño se vuelve una consecuencia. Cuando no lo está, cada pieza se ve distinta y la marca se diluye por más bonito que sea el logotipo.",
      },
      {
        h2: "El video ya no es opcional",
        parrafo:
          "Para un producto que se toca, un servicio que se explica o un proyecto que aún no existe, el video hace algo que ninguna foto puede: demuestra. Un recorrido por la obra, un testimonio real de un cliente, el producto funcionando. Es también el formato que más rinde en pauta, porque retiene la atención lo suficiente para que el mensaje llegue completo.",
      },
      {
        h2: "Marca fuerte, publicidad más barata",
        parrafo:
          "Esto se ve en los números y no es teoría: cuando la gente ya te conoce, tus anuncios necesitan menos esfuerzo para convencer, y eso baja el costo de cada contacto. La marca no es el gasto que se recorta cuando hay que apretar: es lo que hace que el resto del presupuesto rinda más.",
      },
      {
        h2: "Cómo trabajamos la coherencia",
        parrafo:
          "El mismo mensaje tiene que sostenerse en el anuncio, en la web, en el vendedor que atiende y en el banner de la fachada. Por eso definimos la marca antes de producir piezas, y dejamos documentado cómo se aplica. Es lo que evita que cada proveedor interprete la marca a su manera y que el cliente termine viendo tres empresas distintas.",
      },
    ],
    faq: [
      {
        q: "¿Cuándo conviene hacer un rebranding?",
        a: "Cuando la marca ya no representa lo que vendes, cuando te confunden con la competencia o cuando cambió tu público. Lo que no es buena razón es el aburrimiento interno: tú ves tu logo todos los días, tu cliente lo ve unos segundos al mes. Cambiar sin motivo estratégico tira a la basura el reconocimiento que ya habías construido.",
      },
      {
        q: "¿Qué incluye un manual de marca?",
        a: "Cómo se usa el logo y cómo no, colores y tipografías con sus códigos exactos, tono de comunicación y ejemplos de aplicación. Su valor real es práctico: cualquier proveedor puede producir una pieza correcta sin adivinar, y tu marca se ve igual en todos lados.",
      },
      {
        q: "¿Necesito video si ya tengo buenas fotos?",
        a: "Las fotos muestran, el video demuestra. Si vendes algo que hay que ver en funcionamiento, un proceso que genera confianza o un espacio que hay que recorrer, el video convierte mejor. Si tu producto se entiende de un vistazo, la foto puede ser suficiente.",
      },
      {
        q: "¿Cuánto material audiovisual necesito para empezar?",
        a: "Menos del que crees. Un video principal bien hecho y algunas piezas cortas derivadas de la misma grabación suelen cubrir varios meses de campañas. Es más rentable planificar una sola producción con varios usos que grabar cada mes sin plan.",
      },
      {
        q: "¿La marca sirve si mi negocio vende a otras empresas?",
        a: "Sirve igual o más. En ventas entre empresas la decisión pasa por la confianza y por reducir el riesgo de equivocarse: quien elige un proveedor está poniendo su propio prestigio en juego. Una marca sólida y material institucional serio hacen esa decisión más fácil.",
      },
    ],
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
    secciones: [
      {
        h2: "Por qué lo físico sigue vendiendo (y más en Ica)",
        parrafo:
          "Un anuncio se cierra con el pulgar; una gigantografía en la avenida no. El medio físico tiene una ventaja que lo digital no puede comprar: ocupa un espacio real en la ruta diaria de tu cliente y no compite con veinte notificaciones. En una plaza como Ica, donde buena parte de la decisión de compra todavía pasa por la calle, el punto de venta y el boca a boca, la presencia física no es nostalgia: es donde está el cliente. Lo que sí cambió es que ahora se puede medir, y esa es la parte que casi nadie hace.",
      },
      {
        h2: "Qué cubre esta categoría",
        parrafo:
          "Seis frentes que suelen contratarse por separado y funcionan mucho mejor coordinados, porque comparten la misma marca, el mismo mensaje y el mismo calendario.",
        bullets: [
          { titulo: "BTL y activaciones", texto: "presencia en eventos, ferias y punto de venta, con equipo y guion de contacto para que la activación termine en dato, no solo en foto." },
          { titulo: "Publicidad móvil", texto: "tu marca circulando por las rutas donde está tu público, con cobertura que un panel fijo no alcanza." },
          { titulo: "Estructuras publicitarias", texto: "tótems, letras volumétricas y señalización que convierten tu fachada en el mejor anuncio permanente que puedes tener." },
          { titulo: "Material POP", texto: "lo que decide la compra en el último metro: exhibidores, señalética de góndola, piezas de mostrador." },
          { titulo: "Imprenta", texto: "gigantografías, banners, tarjetas y todo el impreso corporativo, con producción rápida y color controlado." },
          { titulo: "Merchandising", texto: "el objeto útil que se queda meses en el escritorio de tu cliente recordándole quién eres." },
        ],
      },
      {
        h2: "Cómo se conecta con lo digital",
        parrafo:
          "El error más común es tratarlos como mundos aparte: la agencia digital por un lado y el imprentero por otro. El resultado es una marca que se ve de dos maneras distintas y una inversión que nadie sabe si funcionó. Nosotros trabajamos ambos lados bajo el mismo método: la activación captura datos que entran al mismo embudo que la publicidad digital, el material lleva un código o un número que permite atribuir de dónde vino cada contacto, y la campaña en redes avisa del evento antes de que ocurra. Físico y digital empujando en la misma dirección.",
      },
      {
        h2: "Se puede medir, y así lo hacemos",
        parrafo:
          "Que sea físico no significa que sea a ciegas. En cada activación registramos cuántos contactos se captaron y cuántos terminaron en venta; en material y estructuras medimos el efecto en consultas y en tráfico al local. La prueba está en los eventos que operamos para un concesionario: 3 vehículos vendidos en la activación del 22 de mayo y 5 en la del 25 de junio. No es alcance estimado: son unidades salidas del piso.",
      },
      {
        h2: "Producción y montaje, sin intermediarios",
        parrafo:
          "Diseñamos, producimos y montamos. Eso evita el problema clásico de dividir el trabajo entre tres proveedores: el diseño que se ve distinto al impreso, el impreso que llega tarde al evento y el montaje que nadie supervisó. Un solo responsable del calendario y del resultado final.",
      },
      {
        h2: "Para qué tipo de negocio funciona mejor",
        parrafo:
          "Para el que necesita presencia local visible y decisiones de compra que ocurren cerca: concesionarios y marcas de vehículos —atendemos 19 marcas, de livianos a línea amarilla—, inmobiliarias con sala de ventas, marcas de consumo en punto de venta, hoteles y restaurantes, y empresas que van a ferias sectoriales. Si tu cliente decide sin verte físicamente nunca, probablemente te convenga empezar por el frente digital.",
      },
    ],
    faq: [
      {
        q: "¿Cuánto tiempo toma producir una gigantografía o un banner?",
        a: "Depende del formato y del acabado, pero la producción impresa suele resolverse en días, no semanas. Lo que más retrasa un pedido no es la impresión: es la aprobación del arte. Si el diseño ya está cerrado y el archivo llega en condiciones, los tiempos se acortan mucho.",
      },
      {
        q: "¿Hacen el diseño o tengo que llevarlo listo?",
        a: "Podemos hacer ambas cosas. Si ya tienes tu manual de marca y tu arte, lo producimos respetando color y proporciones. Si no lo tienes, lo diseñamos nosotros, que suele ser más barato que reimprimir un material que salió mal.",
      },
      {
        q: "¿Una activación BTL sirve si mi negocio es pequeño?",
        a: "Sirve si tu cliente se concentra en un lugar y un momento: una feria del rubro, un fin de semana en el local, una fecha comercial. Lo que no recomendamos es una activación suelta sin objetivo claro; sin una meta de contactos y un seguimiento posterior, se convierte en un gasto con buenas fotos.",
      },
      {
        q: "¿Cómo sé si el material físico está funcionando?",
        a: "Poniéndole una forma de rastrear el origen: un número de WhatsApp o un código exclusivos de esa pieza, o simplemente preguntando a cada contacto cómo llegó y anotándolo. Es de las cosas más fáciles de medir y de las que casi nadie hace.",
      },
      {
        q: "¿Trabajan fuera de Ica?",
        a: "Sí. Operamos desde Ica para todo el Perú y ya coordinamos producción y montaje en otras plazas. Para trabajos fuera de la región conviene planificar con más anticipación por la logística de traslado.",
      },
      {
        q: "¿Puedo contratar solo imprenta sin el resto?",
        a: "Sí, se puede contratar cada frente por separado. Lo que ganas al juntarlos es coherencia de marca y un solo calendario; lo que ganas al separarlos es empezar con menos compromiso. Ambas son opciones válidas según tu momento.",
      },
    ],
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
 * Las 5 categorías son INDEXABLES: tienen copy propio (256–382 palabras, 4 H2
 * cada una) y title propio que ataca su keyword de categoría, así que aportan
 * valor al usuario y al buscador. Antes iban `noindex` para no canibalizar a los
 * hijos, pero eso dejaba al pilar /servicios enlazando solo a páginas excluidas
 * y cortaba el flujo de enlace hacia los 16 servicios. Cada hija sigue siendo la
 * canónica de SU keyword específica; la categoría rankea por el término genérico.
 */
const CATEGORIAS: Servicio[] = CATEGORIAS_RAW;

const SERVICIOS_LIST: Servicio[] = [
  // ---------- Estrategia y datos ----------
  {
    slug: "consultoria",
    tipo: "servicio",
    categoriaSlug: "estrategia",
    nombre: "Consultoría",
    metaTitle: "Consultoría de Marketing en Ica y Perú | Suggestion",
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
    metaTitle: "Investigación de Mercado en Ica y Perú | Suggestion",
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
    incluye: [
      { titulo: "Análisis de competencia", texto: "Mapeo de competidores, estrategias y posicionamiento." },
      { titulo: "Estudios de mercado", texto: "Tamaño de mercado, segmentación, tendencias y proyecciones." },
      { titulo: "Consumer insights", texto: "Entrevistas, focus groups, encuestas y observación." },
      { titulo: "Brand tracking", texto: "Monitoreo de percepción, awareness y salud de marca." },
      { titulo: "Benchmarking", texto: "Comparación con las mejores prácticas de la industria." },
      { titulo: "Satisfacción de cliente", texto: "NPS, CSAT y estudios de satisfacción y lealtad." },
      { titulo: "Pruebas de producto", texto: "Test de concepto, producto y precio antes de lanzar." },
      { titulo: "Análisis de tendencias", texto: "Identificación de tendencias emergentes en tu categoría." },
      { titulo: "Investigación secundaria", texto: "Análisis de datos, reportes y fuentes existentes." },
    ],
    beneficios: [
      { titulo: "Reduce riesgos", texto: "Valida hipótesis antes de invertir: conoce el mercado antes de entrar." },
      { titulo: "Conoce a tu cliente", texto: "Entiende qué piensan, necesitan y valoran de verdad tus consumidores." },
      { titulo: "Supera a la competencia", texto: "Identifica sus fortalezas y debilidades para diferenciarte." },
      { titulo: "Descubre oportunidades", texto: "Encuentra nichos, tendencias y espacios no atendidos." },
    ],
    proceso: [
      { paso: "01", titulo: "Objetivos", texto: "Definimos las preguntas clave que necesitas responder." },
      { paso: "02", titulo: "Metodología", texto: "Elegimos los métodos óptimos para cada objetivo." },
      { paso: "03", titulo: "Recolección", texto: "Ejecutamos la investigación de campo y el análisis de datos." },
      { paso: "04", titulo: "Insights", texto: "Entregamos hallazgos con recomendaciones accionables." },
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
      {
        q: "¿Qué métodos de investigación utilizan?",
        a: "Combinamos métodos cuantitativos (encuestas, análisis de datos) y cualitativos (entrevistas, focus groups) según los objetivos.",
      },
      {
        q: "¿Cómo entregan los resultados?",
        a: "Un informe ejecutivo con hallazgos y recomendaciones accionables, no un PDF para archivar.",
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
    metaTitle: "Marketing Digital en Ica: Estrategia que Vende | Suggestion",
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
    metaTitle: "Publicidad Digital en Ica: Google y Meta Ads | Suggestion",
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
    metaTitle: "Redes Sociales y Community Manager en Ica | Suggestion",
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
    incluye: [
      { titulo: "Estrategia de contenidos", texto: "Calendario editorial mensual alineado con tus objetivos de negocio." },
      { titulo: "Creación de contenido", texto: "Diseño gráfico, fotografía y video profesional para tus redes." },
      { titulo: "Community management", texto: "Gestión diaria de comentarios, mensajes y menciones." },
      { titulo: "Reportes mensuales", texto: "Métricas de crecimiento, engagement y conversiones." },
      { titulo: "Campañas de pauta", texto: "Publicidad pagada en Meta, TikTok, LinkedIn y más." },
      { titulo: "Influencer marketing", texto: "Conexión con influencers relevantes para tu marca." },
      { titulo: "Social listening", texto: "Monitoreo de menciones y tendencias en tu industria." },
      { titulo: "Gestión de crisis", texto: "Protocolos y manejo profesional de situaciones complejas." },
      { titulo: "Stories y Reels", texto: "Contenido efímero que humaniza tu marca." },
    ],
    beneficios: [
      { titulo: "Comunidad activa", texto: "Construimos comunidades comprometidas que interactúan y defienden tu marca." },
      { titulo: "Contenido estratégico", texto: "Cada post tiene un propósito: educa, entretiene y convierte." },
      { titulo: "Engagement real", texto: "Interacciones auténticas, no vanity metrics: comentarios, shares y conversiones." },
      { titulo: "Respuesta inmediata", texto: "Community management que responde y capitaliza oportunidades en tiempo real." },
    ],
    proceso: [
      { paso: "01", titulo: "Auditoría", texto: "Analizamos tu presencia actual, competencia y oportunidades." },
      { paso: "02", titulo: "Estrategia", texto: "Definimos tono, contenido y canales según tu audiencia." },
      { paso: "03", titulo: "Creación", texto: "Producimos contenido atractivo y relevante de forma constante." },
      { paso: "04", titulo: "Optimización", texto: "Medimos resultados y ajustamos para máximo impacto." },
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
      {
        q: "¿Qué redes sociales gestionan?",
        a: "Instagram, Facebook, TikTok, LinkedIn, YouTube y más, según dónde esté tu audiencia.",
      },
      {
        q: "¿Quién crea el contenido?",
        a: "Nuestro equipo de diseño, copy y video crea todo el contenido. También podemos partir de tu material.",
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
    metaTitle: "Diseño de Páginas Web en Ica que Convierte | Suggestion",
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
    metaTitle: "Agencia SEO en Ica y Posicionamiento Web | Suggestion",
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
    incluye: [
      { titulo: "Auditoría SEO", texto: "Análisis completo de tu sitio: técnico, contenido y autoridad." },
      { titulo: "SEO técnico", texto: "Optimización de velocidad, estructura, schema e indexación." },
      { titulo: "Keyword research", texto: "Identificamos las búsquedas rentables de tu industria." },
      { titulo: "Contenido SEO", texto: "Creación de contenido optimizado que posiciona y convierte." },
      { titulo: "Link building", texto: "Estrategia de backlinks de calidad para aumentar autoridad." },
      { titulo: "SEO local", texto: "Posicionamiento en mapas y búsquedas locales (clave en Ica)." },
      { titulo: "SEO para e-commerce", texto: "Optimización de fichas de producto y categorías." },
      { titulo: "Reportes mensuales", texto: "Posiciones, tráfico orgánico, keywords y conversiones." },
      { titulo: "Core Web Vitals", texto: "Optimización de las métricas de experiencia de usuario." },
    ],
    beneficios: [
      { titulo: "Tráfico orgánico de calidad", texto: "Visitantes que buscan justo lo que ofreces: intención de compra real." },
      { titulo: "Resultados sostenibles", texto: "A diferencia de la pauta, el SEO genera resultados que persisten." },
      { titulo: "Contenido que posiciona", texto: "Contenido que atrae y convierte mientras sube posiciones." },
      { titulo: "Autoridad de marca", texto: "Aparecer primero genera confianza: ser primero es ser referente." },
    ],
    proceso: [
      { paso: "01", titulo: "Auditoría", texto: "Analizamos tu sitio, competencia y oportunidades de posicionamiento." },
      { paso: "02", titulo: "Estrategia", texto: "Plan de palabras clave, contenido y optimización técnica." },
      { paso: "03", titulo: "Implementación", texto: "Ejecutamos optimizaciones y creamos contenido SEO." },
      { paso: "04", titulo: "Escalamiento", texto: "Medimos resultados y escalamos lo que funciona." },
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
      {
        q: "¿Garantizan las primeras posiciones?",
        a: "Nadie honesto puede garantizar posiciones específicas en Google. Lo que garantizamos es trabajo profesional y resultados medibles.",
      },
      {
        q: "¿Qué incluye el servicio de SEO?",
        a: "Auditoría inicial, SEO técnico, investigación de keywords, estrategia de contenido, link building y reportes mensuales.",
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
    metaTitle: "CRM y Automatización de Marketing en Ica | Suggestion",
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
    incluye: [
      { titulo: "Implementación de CRM", texto: "HubSpot, Pipedrive, Zoho o el que encaje con tu operación." },
      { titulo: "Migración de datos", texto: "Importamos y limpiamos tu base de datos existente." },
      { titulo: "Email automation", texto: "Secuencias de bienvenida, nurturing y reactivación." },
      { titulo: "Lead scoring", texto: "Puntuación automática para priorizar los mejores leads." },
      { titulo: "Workflows", texto: "Automatizaciones basadas en triggers y comportamientos." },
      { titulo: "Integraciones", texto: "Conexión con tu web, ads, calendarios y herramientas." },
      { titulo: "Pipelines de ventas", texto: "Etapas personalizadas con seguimiento automático." },
      { titulo: "Chatbots", texto: "Atención automatizada en web y WhatsApp." },
      { titulo: "Reportes y dashboards", texto: "Visibilidad total del funnel de ventas y marketing." },
    ],
    beneficios: [
      { titulo: "Ahorro de tiempo", texto: "Automatiza tareas repetitivas y libera a tu equipo para lo importante." },
      { titulo: "Leads nutridos", texto: "Secuencias que convierten leads fríos en oportunidades calientes." },
      { titulo: "Todo en un lugar", texto: "Contactos, oportunidades, tareas y métricas en un solo sistema." },
      { titulo: "Escalabilidad", texto: "El sistema maneja 10 leads o 10,000 sin que agregues personal." },
    ],
    proceso: [
      { paso: "01", titulo: "Auditoría", texto: "Revisamos tus procesos actuales y herramientas." },
      { paso: "02", titulo: "Arquitectura", texto: "Diseñamos el flujo de datos y las automatizaciones." },
      { paso: "03", titulo: "Implementación", texto: "Configuramos CRM, integraciones y workflows." },
      { paso: "04", titulo: "Capacitación", texto: "Entrenamos a tu equipo y documentamos todo." },
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
      {
        q: "¿Qué CRM recomiendan?",
        a: "Depende de tu presupuesto y necesidades: HubSpot para marketing, Pipedrive para ventas simples, soluciones más robustas para empresas grandes.",
      },
      {
        q: "¿Cuánto toma implementar?",
        a: "Un proyecto típico de CRM + automatizaciones básicas toma de 4 a 8 semanas; los complejos, algo más.",
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
    metaTitle: "Branding e Identidad de Marca en Ica | Suggestion",
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
    incluye: [
      { titulo: "Investigación de marca", texto: "Análisis de competencia, mercado y tendencias." },
      { titulo: "Estrategia de marca", texto: "Posicionamiento, arquitectura y personalidad de marca." },
      { titulo: "Naming", texto: "Creación de nombres memorables y disponibles." },
      { titulo: "Diseño de logotipo", texto: "Concepto, bocetos, versiones y aplicaciones." },
      { titulo: "Sistema visual", texto: "Colores, tipografías, iconografía y patrones." },
      { titulo: "Manual de marca", texto: "Guía completa de aplicación y uso correcto." },
      { titulo: "Diseño de papelería", texto: "Tarjetas, sobres, carpetas y más." },
      { titulo: "Plantillas corporativas", texto: "Presentaciones, documentos y email." },
      { titulo: "Señalética", texto: "Diseño de señales y espacios físicos." },
    ],
    beneficios: [
      { titulo: "Diferenciación real", texto: "Te destacamos de la competencia con una identidad única y memorable." },
      { titulo: "Conexión emocional", texto: "Diseñamos para generar sentimientos y recuerdos, no solo estética." },
      { titulo: "Consistencia total", texto: "Tu marca se ve igual en todos los puntos de contacto." },
      { titulo: "Valor a largo plazo", texto: "Una marca fuerte es un activo que aprecia con el tiempo." },
    ],
    proceso: [
      { paso: "01", titulo: "Descubrimiento", texto: "Entendemos tu negocio, valores y audiencia objetivo." },
      { paso: "02", titulo: "Concepto", texto: "Exploramos direcciones creativas y definimos el concepto." },
      { paso: "03", titulo: "Diseño", texto: "Desarrollamos el sistema visual completo." },
      { paso: "04", titulo: "Entrega", texto: "Archivos finales, manual y acompañamiento en el lanzamiento." },
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
      {
        q: "¿Cuánto tiempo toma un proyecto de branding?",
        a: "Un proyecto completo de identidad toma de 4 a 8 semanas según la complejidad y el alcance.",
      },
      {
        q: "¿Qué incluye la entrega final?",
        a: "Archivos vectoriales y en PNG/JPG de todas las versiones, manual de marca y una sesión de presentación.",
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
    metaTitle: "Producción Audiovisual en Ica y Video Marketing | Suggestion",
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
          {
        h2: "Productora de contenido audiovisual en Ica",
        parrafo:
          "Trabajamos como productora de contenido audiovisual de punta a punta: idea, guión, rodaje y entrega final. Eso significa que no tienes que coordinar por tu cuenta al camarógrafo, al editor y a quien hace las locuciones, ni asumir el riesgo de que cada uno entienda la marca a su manera. Un solo responsable del calendario y del resultado, y una marca que se ve igual en todas las piezas.",
      },
      {
        h2: "Servicios de postproducción",
        parrafo:
          "La postproducción es donde un material bien grabado termina de convertirse en una pieza que vende, y donde uno mediocre se salva a medias. Cubrimos el montaje, la corrección de color, el diseño de sonido, los gráficos en movimiento y los subtítulos —imprescindibles hoy, porque buena parte del video en redes se ve sin audio—. También hacemos postproducción de material que grabaste tú o que ya tenías archivado.",
      },
      {
        h2: "De una grabación, varias piezas",
        parrafo:
          "Es la forma más rentable de producir: se planifica un solo rodaje pensando desde el inicio en todos los formatos que vas a necesitar. De ahí salen el video principal, los cortes verticales para redes, las fotos del mismo set y material de recurso para meses de campaña. Grabar cada mes sin plan cuesta bastante más y da menos.",
      },
    ],
    incluye: [
      { titulo: "Videos corporativos", texto: "Presentación de empresa, cultura y testimonios de clientes." },
      { titulo: "Spots publicitarios", texto: "Piezas para digital, redes y TV con gancho y CTA." },
      { titulo: "Contenido para redes", texto: "Reels, TikToks, Stories y más para tu marca." },
      { titulo: "Videos de producto", texto: "Demostraciones, unboxings y reviews que venden." },
      { titulo: "Videos de capacitación", texto: "Training interno y manuales en video." },
      { titulo: "Cobertura de eventos", texto: "Registro audiovisual de eventos presenciales y virtuales." },
      { titulo: "Fotografía comercial", texto: "Producto, lifestyle y retratos corporativos." },
      { titulo: "Tomas con drone", texto: "Aéreas para inmobiliaria, eventos y avance de obra." },
      { titulo: "Postproducción", texto: "Edición, color, motion graphics y efectos." },
    ],
    beneficios: [
      { titulo: "Contenido que engancha", texto: "El video retiene mucho más que el texto: tu mensaje llega de verdad." },
      { titulo: "Calidad profesional", texto: "Equipo, técnica y experiencia para resultados que destacan." },
      { titulo: "Versatilidad total", texto: "Un shooting, múltiples formatos para todos tus canales." },
      { titulo: "Storytelling efectivo", texto: "No solo grabamos: creamos narrativas que conectan y venden." },
    ],
    proceso: [
      { paso: "01", titulo: "Concepto", texto: "Definimos el mensaje, el formato y el enfoque creativo." },
      { paso: "02", titulo: "Pre-producción", texto: "Guion, locaciones, casting y planificación." },
      { paso: "03", titulo: "Producción", texto: "Grabación con equipo profesional y dirección." },
      { paso: "04", titulo: "Post-producción", texto: "Edición, color, audio, motion graphics y entregables." },
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
      {
        q: "¿Qué incluyen las entregas?",
        a: "Archivo maestro y versiones para redes (horizontal, vertical y cuadrado), con cortes para anuncios.",
      },
      {
        q: "¿Pueden grabar en locación?",
        a: "Sí: cubrimos producciones en Ica y en todo el país según el proyecto.",
      },
          {
        q: "¿Hacen solo la postproducción si yo ya tengo el material grabado?",
        a: "Sí. Podemos encargarnos solo del montaje, el color, el sonido y los gráficos sobre material que grabaste tú o que tenías archivado. Lo único que pedimos es revisar antes los archivos originales: de la calidad de la grabación depende hasta dónde se puede llegar en postproducción.",
      },
      {
        q: "¿Cuánto material audiovisual necesito para empezar?",
        a: "Menos del que crees. Un video principal bien hecho y varias piezas cortas derivadas de la misma grabación suelen cubrir varios meses de campañas. Es más rentable planificar una producción con varios usos que grabar cada mes sin un plan detrás.",
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
    metaTitle: "BTL y Activaciones de Marca en Ica y Perú | Suggestion",
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
    incluye: [
      { titulo: "Activaciones de marca", texto: "Experiencias inmersivas en punto de venta y eventos." },
      { titulo: "Sampling", texto: "Distribución de muestras con personal capacitado." },
      { titulo: "Roadshows", texto: "Tours itinerantes por múltiples locaciones." },
      { titulo: "Eventos corporativos", texto: "Lanzamientos, inauguraciones y aniversarios." },
      { titulo: "Pop-up stores", texto: "Tiendas temporales en ubicaciones estratégicas." },
      { titulo: "Exhibiciones", texto: "Stands en ferias, expos y convenciones." },
      { titulo: "Guerrilla marketing", texto: "Acciones sorpresa de alto impacto." },
      { titulo: "Ambientaciones", texto: "Decoración temática de espacios." },
      { titulo: "Staff y logística", texto: "Coordinación completa de personal y recursos." },
    ],
    beneficios: [
      { titulo: "Conexión real", texto: "Nada supera la experiencia directa con tu marca." },
      { titulo: "Memorable", texto: "Las experiencias se recuerdan más que la publicidad." },
      { titulo: "Genera contenido", texto: "Cada activación es contenido orgánico para redes." },
      { titulo: "Datos de primera mano", texto: "Obtienes feedback directo de tu audiencia." },
    ],
    proceso: [
      { paso: "01", titulo: "Concepto", texto: "Idea creativa alineada a los objetivos de marca." },
      { paso: "02", titulo: "Planificación", texto: "Logística, permisos, recursos y cronograma." },
      { paso: "03", titulo: "Producción", texto: "Montaje, staff, materiales y ejecución." },
      { paso: "04", titulo: "Informe", texto: "Métricas, fotos, videos y aprendizajes." },
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
      {
        q: "¿Con cuánta anticipación debo planificar?",
        a: "Mínimo 4 semanas para activaciones simples; los eventos grandes requieren de 8 a 12 semanas.",
      },
      {
        q: "¿Gestionan los permisos?",
        a: "Sí, gestionamos los permisos necesarios con autoridades y locales.",
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
    incluye: [
      { titulo: "Bicivallas", texto: "Publicidad rodante eco-amigable para zonas de alto tránsito." },
      { titulo: "Rotulado vehicular", texto: "Impresión e instalación en flotas o vehículos propios." },
      { titulo: "Pantallas LED móviles", texto: "Videobillboards en vehículos para campañas itinerantes." },
      { titulo: "Publicidad en vehículos", texto: "Tu marca recorriendo la ciudad todo el día." },
      { titulo: "Flotas de reparto", texto: "Branding de vehículos de delivery y logística." },
      { titulo: "Volanteo con captura", texto: "Reparto que además deja base de datos de clientes." },
      { titulo: "Rutas personalizadas", texto: "Recorridos según tu público y objetivos." },
      { titulo: "Reporte con GPS", texto: "Tracking de rutas y cobertura de la operación." },
      { titulo: "Diseño e instalación", texto: "Servicio completo de producción e instalación." },
    ],
    beneficios: [
      { titulo: "Alcance amplio", texto: "Tu mensaje recorre múltiples zonas en un solo día." },
      { titulo: "Alto impacto", texto: "Nadie ignora un vehículo o pantalla llamativa en movimiento." },
      { titulo: "Flexibilidad", texto: "Rutas personalizadas según tu target y objetivos." },
      { titulo: "Costo-efectivo", texto: "Más impresiones por sol invertido que un panel fijo." },
    ],
    proceso: [
      { paso: "01", titulo: "Estrategia", texto: "Definimos zonas objetivo y rutas óptimas." },
      { paso: "02", titulo: "Producción", texto: "Diseño e impresión del material publicitario." },
      { paso: "03", titulo: "Instalación", texto: "Aplicación profesional en vehículos o pantallas." },
      { paso: "04", titulo: "Operación", texto: "Ejecución de rutas con tracking y reportes." },
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
      {
        q: "¿Cuánto dura un rotulado vehicular?",
        a: "Con buen mantenimiento, varios años; ofrecemos garantía de instalación.",
      },
      {
        q: "¿Puedo elegir las rutas?",
        a: "Sí: diseñamos rutas a tu medida y también te sugerimos las más probadas.",
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
    metaTitle: "Estructuras y Paneles Publicitarios en Ica | Suggestion",
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
    incluye: [
      { titulo: "Paneles y espectaculares", texto: "Gran formato en avenidas y vías de alto tránsito." },
      { titulo: "Paneles LED", texto: "Video digital en ubicaciones premium." },
      { titulo: "Tótems publicitarios", texto: "Estructuras verticales de alta visibilidad." },
      { titulo: "Letreros y avisos", texto: "Identifican tu negocio y atraen a quien pasa." },
      { titulo: "Mantas y banderolas", texto: "Cobertura en fachadas e intersecciones clave." },
      { titulo: "Paraderos", texto: "Publicidad en puntos de transporte público." },
      { titulo: "Módulos publicitarios", texto: "Tu punto de marca móvil para ferias y centros comerciales." },
      { titulo: "Letreros luminosos", texto: "Visibilidad garantizada también de noche." },
      { titulo: "Producción e instalación", texto: "Del diseño a la colocación, todo en un lugar." },
    ],
    beneficios: [
      { titulo: "Máxima visibilidad", texto: "Impacto visual garantizado en ubicaciones estratégicas." },
      { titulo: "Cobertura amplia", texto: "Llega a audiencias masivas en puntos de alto tránsito." },
      { titulo: "Recordación alta", texto: "El medio exterior tiene de las tasas más altas de recordación." },
      { titulo: "Activo 24/7", texto: "Tu mensaje trabaja todos los días, todo el día." },
    ],
    proceso: [
      { paso: "01", titulo: "Análisis", texto: "Definimos ubicaciones según tu target y presupuesto." },
      { paso: "02", titulo: "Propuesta", texto: "Mapa con ubicaciones, fotos, tránsito y costos." },
      { paso: "03", titulo: "Producción", texto: "Diseño e impresión del material publicitario." },
      { paso: "04", titulo: "Instalación", texto: "Colocación y monitoreo durante la campaña." },
    ],
    faq: [
      {
        q: "¿Con qué materiales trabajan?",
        a: "Según la pieza: acrílico, PVC, metal, LED y más.",
      },
      { q: "¿Hacen la instalación?", a: "Sí, diseñamos, fabricamos e instalamos." },
      {
        q: "¿Cuál es el tiempo mínimo de contratación?",
        a: "Generalmente 4 semanas, aunque hay ubicaciones con periodos más cortos.",
      },
      {
        q: "¿Incluye el diseño?",
        a: "Podemos diseñar la creatividad o imprimir tu archivo; cotizamos ambas opciones.",
      },
    ],
    enlazaA: ["material-pop", "imprenta", "publicidad-movil"],
    cierre: { h2: "Destaca con tu estructura", cta: "Pide tu cotización" },
  },
  {
    slug: "material-pop",
    tipo: "servicio",
    categoriaSlug: "btl-medios",
    nombre: "Material POP",
    metaTitle: "Material POP y Punto de Venta en Ica | Suggestion",
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
    incluye: [
      { titulo: "Displays de mostrador", texto: "Exhibidores compactos para el punto de venta." },
      { titulo: "Displays de piso", texto: "Estructuras autoportantes de gran visibilidad." },
      { titulo: "Cabeceras de góndola", texto: "Espacios premium en supermercados." },
      { titulo: "Islas y shop-in-shop", texto: "Espacios de marca dedicados dentro de tiendas." },
      { titulo: "Cartelería", texto: "Carteles, posters, wobblers y más." },
      { titulo: "Stoppers y stripers", texto: "Material colgante para lineales." },
      { titulo: "Letras volumétricas", texto: "Marca con cuerpo y presencia, imposible de ignorar." },
      { titulo: "Señalética", texto: "Letreros y señalización para tiendas." },
      { titulo: "Mobiliario", texto: "Mostradores, kioscos y mobiliario temporal." },
    ],
    beneficios: [
      { titulo: "Impacto en el momento clave", texto: "Tu producto brilla justo cuando el consumidor decide." },
      { titulo: "Más rotación", texto: "Un POP bien ejecutado mueve el producto en el lineal." },
      { titulo: "Visibilidad competitiva", texto: "Destaca entre decenas de productos similares." },
      { titulo: "Versatilidad de formatos", texto: "Soluciones para cualquier espacio y presupuesto." },
    ],
    proceso: [
      { paso: "01", titulo: "Brief", texto: "Objetivos, puntos de venta y productos a exhibir." },
      { paso: "02", titulo: "Diseño", texto: "Concepto, renders y aprobación visual." },
      { paso: "03", titulo: "Producción", texto: "Fabricación con materiales de calidad." },
      { paso: "04", titulo: "Instalación", texto: "Logística y colocación en tiendas." },
    ],
    faq: [
      {
        q: "¿Qué tipos de material POP hay?",
        a: "Exhibidores, displays, cubos, letras volumétricas, señalética y más. Te asesoramos según tu producto y punto de venta.",
      },
      {
        q: "¿Qué materiales utilizan?",
        a: "Corrugado, plástico, metal, madera o acrílico, según la durabilidad y el presupuesto.",
      },
      {
        q: "¿Cuánto tiempo toma producir?",
        a: "Displays de cartón: 2-3 semanas. Estructuras complejas: 4-6 semanas.",
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
    incluye: [
      { titulo: "Tarjetas de presentación", texto: "Offset y digital, con acabados especiales." },
      { titulo: "Papelería corporativa", texto: "Hojas membretadas, sobres y carpetas." },
      { titulo: "Folletos y flyers", texto: "Dípticos, trípticos y volantes promocionales." },
      { titulo: "Catálogos", texto: "Encuadernación profesional de alta gama." },
      { titulo: "Revistas y boletines", texto: "Publicaciones periódicas y newsletters." },
      { titulo: "Libros y manuales", texto: "Impresión de libros, manuales y anuarios." },
      { titulo: "Etiquetas y stickers", texto: "Adhesivos y etiquetas de producto." },
      { titulo: "Empaques", texto: "Cajas, bolsas y packaging personalizado." },
      { titulo: "Gran formato", texto: "Posters, banners, gigantografías y displays." },
    ],
    beneficios: [
      { titulo: "Calidad premium", texto: "Papeles, tintas y acabados de primera." },
      { titulo: "Asesoría técnica", texto: "Te guiamos en formatos, papeles y acabados óptimos." },
      { titulo: "Tiempos competitivos", texto: "Producción ágil sin sacrificar calidad." },
      { titulo: "Precios justos", texto: "Cotización transparente, sin sorpresas." },
    ],
    proceso: [
      { paso: "01", titulo: "Cotización", texto: "Especificaciones técnicas y presupuesto detallado." },
      { paso: "02", titulo: "Pre-prensa", texto: "Revisión de archivos y pruebas de color." },
      { paso: "03", titulo: "Impresión", texto: "Producción con control de calidad." },
      { paso: "04", titulo: "Entrega", texto: "Empacado y logística de envío." },
    ],
    faq: [
      {
        q: "¿Cuánto demora un pedido?",
        a: "Depende del producto y la cantidad; siempre con fecha comprometida.",
      },
      { q: "¿Diseñan el material?", a: "Sí, ofrecemos diseño además de la impresión." },
      { q: "¿Atienden fuera de Ica?", a: "Sí, coordinamos envíos a otras regiones." },
      {
        q: "¿Qué formatos de archivo aceptan?",
        a: "PDF, AI o PSD. Preferimos PDF de alta resolución con sangrado incluido.",
      },
    ],
    enlazaA: ["material-pop", "merchandising", "estructuras-publicitarias"],
    cierre: { h2: "Tu material listo y a tiempo", cta: "Cotiza tu impresión" },
  },
  {
    slug: "merchandising",
    tipo: "servicio",
    categoriaSlug: "btl-medios",
    nombre: "Merchandising",
    metaTitle: "Merchandising Publicitario en Ica | Suggestion",
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
          {
        h2: "Souvenirs corporativos para eventos y ferias",
        parrafo:
          "El souvenir corporativo tiene un trabajo concreto: que la persona se lleve tu marca a casa después de un evento, una feria o una activación. Funciona cuando es útil o bonito de verdad; si no, acaba en el cajón el mismo día. Elegimos la pieza según el momento —no es lo mismo un stand de feria, donde la gente carga cosas todo el día, que una cena de cierre de año— y la producimos con tu marca aplicada como debe verse.",
      },
      {
        h2: "Tu proveedor de merchandising en Ica: plazos y entrega",
        parrafo:
          "La diferencia entre un buen proveedor de merchandising y uno cualquiera casi nunca está en el producto: está en si llega a tiempo y sale como en la muestra. Trabajamos con fecha de entrega comprometida desde la cotización, aprobación de arte antes de producir y control de color al recibir. Coordinamos la entrega en tu local de Ica o donde la necesites, y para pedidos grandes fraccionamos los envíos si te conviene por espacio.",
      },
      {
        h2: "Merchandising para empresas: cómo elegir la pieza correcta",
        parrafo:
          "Antes de elegir el producto conviene responder tres cosas: a quién se lo vas a dar, dónde lo va a usar y qué quieres que recuerde. Un cliente corporativo que trabaja en escritorio valora lo utilitario; un público joven en la calle, lo vestible. Con esa respuesta se decide el presupuesto por unidad, no al revés. Es la parte que casi nadie hace y la que separa el merchandising que trabaja para tu marca del que solo gasta presupuesto.",
      },
    ],
    incluye: [
      { titulo: "Ropa corporativa", texto: "Polos, camisetas, casacas y uniformes." },
      { titulo: "Artículos de oficina", texto: "Agendas, lapiceros, libretas y accesorios de escritorio." },
      { titulo: "Tecnología", texto: "USBs, power banks, audífonos y gadgets." },
      { titulo: "Hogar y estilo de vida", texto: "Termos, tazas, paraguas y bolsas." },
      { titulo: "Kits corporativos", texto: "De bienvenida, navideños y especiales." },
      { titulo: "Regalos premium", texto: "Regalos ejecutivos de alto valor." },
      { titulo: "Eco-friendly", texto: "Productos sostenibles y reciclados." },
      { titulo: "Producción express", texto: "Entregas urgentes cuando lo necesitas." },
      { titulo: "Diseño de empaque", texto: "Presentación premium para cada producto." },
    ],
    beneficios: [
      { titulo: "Recordación de marca", texto: "Artículos útiles que mantienen tu marca visible día a día." },
      { titulo: "Fidelización", texto: "Regalos que crean vínculo con clientes y equipo." },
      { titulo: "Calidad garantizada", texto: "Productos duraderos que no terminan en la basura." },
      { titulo: "Personalización total", texto: "Diseño, materiales y técnicas adaptados a tu marca." },
    ],
    proceso: [
      { paso: "01", titulo: "Briefing", texto: "Definimos objetivos, presupuesto y productos ideales." },
      { paso: "02", titulo: "Propuesta", texto: "Catálogo curado con opciones y cotización detallada." },
      { paso: "03", titulo: "Aprobación", texto: "Muestras físicas y diseño final para aprobación." },
      { paso: "04", titulo: "Entrega", texto: "Producción y logística hasta tu puerta." },
    ],
    faq: [
      { q: "¿Cuál es el pedido mínimo?", a: "Depende del producto; te lo confirmamos al cotizar." },
      { q: "¿Ustedes hacen el diseño?", a: "Sí, podemos diseñar la pieza o trabajar con tu arte." },
      {
        q: "¿Cuánto demora la entrega?",
        a: "Según cantidad y producto; siempre con fecha comprometida.",
      },
      {
        q: "¿Pueden crear productos personalizados?",
        a: "Sí: desarrollamos productos a medida desde cero si ningún catálogo cubre tu necesidad.",
      },
          {
        q: "¿Cuánto demora la entrega de merchandising?",
        a: "Depende del producto y de la cantidad, pero lo que más retrasa un pedido casi nunca es la producción: es la aprobación del arte. Con el diseño cerrado y el arte aprobado, los tiempos se acortan mucho. Te damos una fecha comprometida desde la cotización para que puedas planificar tu evento o tu campaña.",
      },
      {
        q: "¿Hay una cantidad mínima por pedido?",
        a: "Sí, y varía según el producto y la técnica de personalización: bordar tiene un mínimo distinto al de un grabado o una impresión. En la cotización te decimos el mínimo de cada opción para que compares con el presupuesto que tienes.",
      },
      {
        q: "¿Qué souvenir corporativo conviene para una feria?",
        a: "Algo liviano, útil y que no estorbe: en una feria la gente ya carga bolsas y folletos. Lo pesado o frágil se abandona en el stand. Si quieres dejar una pieza de más valor, es mejor entregarla solo a los contactos calificados en lugar de repartirla a todo el que pasa.",
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
