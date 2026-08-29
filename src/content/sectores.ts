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
      {
        h2: "Dónde se pierde de verdad una venta inmobiliaria",
        parrafo:
          "Casi todos los proyectos que llegan a nosotros creen que su problema es la cantidad de leads. Casi nunca lo es. El punto donde se cae el dinero está después: entre que alguien deja sus datos y alguien lo llama. En una decisión donde el comprador consulta tres o cuatro proyectos la misma tarde, llegar segundo equivale a no llegar. Y no es una intuición de vendedores: el estudio de referencia sobre tiempo de respuesta analizó más de quince mil contactos y encontró que las probabilidades de calificar un lead se desploman al pasar de cinco a treinta minutos.",
        dato: {
          cifra: "21×",
          texto: "menos probabilidades de calificar un lead si lo contactas a los 30 minutos en vez de a los 5. Por eso lo primero que montamos no es la campaña: es quién responde y en cuánto.",
          fuente: "Lead Response Management Study (MIT / InsideSales.com)",
        },
      },
      {
        h2: "El embudo completo, con números reales",
        parrafo:
          "Esta es la cadena de un proyecto que trabajamos en Ica. La incluimos porque el dato que más sorprende no es el resultado final, sino lo poco que llega a la visita: de cada diecisiete leads, uno pisó el terreno. Un proyecto que juzgue su marketing por esa cifra apagaría una campaña rentable.",
        tabla: {
          cabeceras: ["Etapa", "Resultado", "Costo por unidad"],
          filas: [
            ["Inversión en pauta", "S/3,000", "—"],
            ["Leads calificados", "350", "S/8.57"],
            ["Visitas a sala de ventas", "20", "S/150"],
            ["Lotes vendidos", "8", "S/375"],
          ],
          nota: "Caso Inmobiliaria Ceinys. Lo que sostiene el resultado no es la tasa de visita, sino el 40% de cierre EN la visita: eso lo hace el equipo comercial.",
        },
      },
      {
        h2: "Cómo trabajamos el lanzamiento de un proyecto",
        parrafo:
          "La publicidad inmobiliaria funciona por fases, no encendiendo todo el presupuesto en captación desde el día uno. Ese error agota el público de la zona en semanas y hace que el costo por lead suba sin que nadie entienda por qué.",
        pasos: [
          { titulo: "Definimos a quién le hablamos", texto: "el comprador de primera vivienda y el inversor que busca plusvalía no responden al mismo anuncio. Salen de tus propias ventas anteriores, no de una plantilla." },
          { titulo: "Construimos el argumento", texto: "para la venta de lotes en etapa inicial manda la valorización; con entrega inmediata manda la comparación con lo que hay en la zona. No es el mismo anuncio." },
          { titulo: "Montamos la captura y la respuesta", texto: "formulario o landing según dónde tengas el cuello de botella, WhatsApp conectado y una regla clara de quién contesta y en cuánto." },
          { titulo: "Calificamos antes de pasar a ventas", texto: "plazo, forma de pago y si hay un inmueble de por medio. Tu equipo recibe personas con contexto, no una lista de nombres." },
          { titulo: "Sostenemos el seguimiento", texto: "una parte importante de las ventas ocurre semanas después. Sin un registro ordenado, esos interesados se pierden por olvido y no por falta de interés." },
        ],
      },
      {
        h2: "Qué necesitas tener antes de invertir",
        parrafo:
          "Hay tres cosas que no ponemos nosotros y sin las cuales ninguna campaña rinde. Preferimos decirlo antes de empezar que explicarlo después.",
        bullets: [
          { titulo: "Alguien que responda el mismo día", texto: "si los leads se contestan al día siguiente, cualquier inversión en captación se desperdicia en el tramo que no controlamos." },
          { titulo: "Claridad en precios y condiciones", texto: "el asesor tiene que poder responder cuánto cuesta y cómo se paga sin consultar. Cada consulta a oficina es un comprador que se enfría." },
          { titulo: "Un lugar donde recibir la visita", texto: "sala de ventas, caseta o al menos un punto de encuentro y alguien esperando. La visita es donde se cierra." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "Si el proyecto no se vende, no es marketing",
          texto: "Cuando el precio está por encima de lo que paga la zona, la habilitación no avanza o la ubicación no encaja con el público al que se le habla, la publicidad solo consigue que más gente lo descubra antes. Si en el diagnóstico vemos eso, lo decimos: es más útil que vender una campaña que no iba a funcionar.",
        },
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
      {
        q: "¿Cuántos leads necesito para vender un lote?",
        a: "Depende de tu cadena, no de un promedio. Con los porcentajes de tu propio proyecto —cuántos leads llegan a visita y cuántas visitas cierran— el número sale solo. En el caso que publicamos hicieron falta unos 44 leads por lote vendido, pero eso cambia con el precio, la zona y la capacidad de cierre del equipo.",
      },
      {
        q: "¿Conviene poner el precio en los anuncios de venta de lotes?",
        a: "Depende de dónde tengas el cuello de botella. Ponerlo reduce el volumen y sube la calidad, porque filtra a quien no puede pagarlo. No ponerlo trae más contactos y más trabajo de calificación. Si tu equipo comercial está saturado llamando a gente que no califica, ponerlo suele mejorar el resultado final.",
      },
      {
        q: "¿En cuánto tiempo se ven resultados?",
        a: "Los leads llegan en días; las ventas, no. El ciclo de decisión de un inmueble se mide en semanas o meses, así que juzgar una campaña por las ventas de la primera quincena lleva a apagarla justo cuando empezaba a llenar el embudo. Lo que sí se evalúa pronto es el costo por lead y, sobre todo, el porcentaje que llega a visita.",
      },
      {
        q: "¿Hacen tomas con drone?",
        a: "Sí, y en proyectos de terreno suele ser lo que más convence: el recorrido aéreo responde de una vez las preguntas de ubicación, accesos y entorno que ninguna foto resuelve. Lo producimos nosotros, no lo subcontratamos.",
      },
      {
        q: "¿Y si ya tengo un equipo de marketing interno?",
        a: "Trabajamos en las dos formas: llevando la parte de captación y medición mientras tu equipo se ocupa del contenido y la marca, o al revés. Lo que no funciona es duplicar decisiones sobre la misma campaña sin que nadie tenga la última palabra.",
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
        h2: "¿Por qué tus leads de autos no llegan al piso de venta?",
        parrafo:
          "La mayoría de concesionarios no tiene un problema de anuncios: tiene un problema de filtro. El patrón típico: cien formularios, treinta llamadas que contestan, tres personas que llegan al piso. El resto solo estaba mirando. El marketing automotriz en Ica que hacemos ataca ese hueco: menos volumen y más leads (prospectos con nombre, teléfono y modelo de interés) que sí pueden pagar la cuota.",
      },
      {
        h2: "Marketing automotriz paso a paso: del anuncio a la prueba de manejo",
        parrafo:
          "Armamos cada campaña con un solo objetivo: que alguien se suba al vehículo. Definimos qué modelo empujar, con qué oferta y a qué público. Pautamos en Meta y en Google, cada uno en su rol: Meta despierta el interés, Google captura al que ya está buscando tu marca. El anuncio no pide comprar, pide agendar la prueba de manejo. Y el formulario lleva dos o tres preguntas que ya separan al comprador del curioso.",
      },
      {
        h2: "El comprador no decide por el auto: decide por la cuota",
        parrafo:
          "En Perú la conversación de venta arranca en el financiamiento. Por eso ponemos adelante lo que de verdad mueve: cuota inicial, bono, mantenimiento incluido, modelo del mes. Un anuncio que solo muestra el vehículo compite contra todos los demás; uno que muestra la condición atrae solo a quien puede tomarla. La oferta la trabajamos contigo antes de diseñar nada: una pieza bonita sobre una oferta débil no vende.",
      },
      {
        h2: "Tu asesor recibe el prospecto en el celular, no en un Excel al día siguiente",
        parrafo:
          "El interesado en un auto se enfría rápido: quien consulta hoy visita otros dos concesionarios esta semana. Conectamos la campaña con tu CRM (el sistema donde queda registrado cada prospecto y su seguimiento) y el contacto llega al asesor al instante, con el modelo que pidió y la campaña de la que salió. Encima corren recordatorios para que nadie se quede sin segundo ni tercer intento. Tú ves quién llamó, quién no y cuánto demoró.",
      },
      {
        h2: "Camiones, livianos y línea amarilla: 19 marcas de vehículos trabajadas",
        parrafo:
          "Llevamos 19 marcas de vehículos atendidas entre livianos, camiones y línea amarilla —la maquinaria pesada de construcción—, incluida XCMG. No es lo mismo vender una camioneta familiar que una excavadora: cambia el comprador, el plazo y quién firma. En livianos decide una familia en semanas. En camiones y maquinaria decide un gerente, con evaluación de crédito, ficha técnica y respaldo de repuestos sobre la mesa. Ya sabemos qué mensaje va para cada uno.",
      },
      {
        h2: "Autoniza: 8 autos vendidos en dos eventos",
        parrafo:
          "Alquilar el local, colgar banderolas y esperar que caiga gente es la forma más cara de no vender. Con Autoniza invertimos el orden: primero llenamos la lista de asistentes con perfiles que califican, después montamos la activación con captura de datos y dejamos a los asesores con la oferta del día en la mano. Salieron 3 autos vendidos el 22 de mayo y 5 el 25 de junio: ocho unidades en dos fechas.",
      },
      {
        h2: "¿Cómo se mide el marketing automotriz? En pruebas de manejo, no en clics",
        parrafo:
          "El alcance y los clics no dicen nada de tu negocio. Reportamos cuántos prospectos entraron, cuántos fueron contactados, cuántas pruebas de manejo se agendaron, cuántas se cumplieron y cuántas unidades se entregaron. De ahí sale el número que importa: cuánto costó cada prueba de manejo y cuánto costó cada venta. Si ese costo sube, se ve en la semana y se corrige. Y si una campaña no funciona te lo decimos, aunque incomode.",
      },
      {
        h2: "La posventa también vende: taller, repuestos y recompra",
        parrafo:
          "El concesionario que solo mide unidades nuevas deja plata sobre la mesa. Trabajamos campañas de mantenimiento por kilometraje, recordatorios de servicio, promociones de repuestos y llantas, y reactivación de quienes compraron hace tres o cuatro años y ya están para cambiar. Tu base de clientes es el público más barato que tienes: ya te conocen y ya te compraron. En la mayoría de concesionarios esa base está muerta en una hoja de cálculo.",
      },
      {
        h2: "¿Por qué una agencia de marketing automotriz en Ica?",
        parrafo:
          "Porque conocemos el piso de venta por dentro y el mercado por fuera. Sabemos cómo la campaña agrícola de la región mueve la compra de camionetas y de camiones, y qué fines de semana vale la pena un evento. Estamos a minutos de tu concesionario para grabar las unidades, cubrir una activación o sentarnos con tu jefe de ventas cuando el número no sale. Eso no lo reemplaza una llamada desde Lima.",
      },
      {
        h2: "Qué incluye trabajar con nosotros",
        parrafo:
          "Un responsable de cuenta que conoce tu operación y te contesta. Estrategia y calendario de campañas por modelo y por mes. Producción de las piezas: foto y video de tus unidades en tu propio piso, no imágenes de catálogo. Puesta en marcha del CRM y del seguimiento comercial junto a tu equipo. Y un reporte mensual con prospectos, pruebas de manejo, cierres y costo por unidad, revisado contigo en reunión.",
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
        q: "¿Cuánto debo invertir al mes?",
        a: "Depende de cuántas unidades quieras mover y del margen que deja cada una. No vendemos paquetes cerrados: calculamos cuántas pruebas de manejo necesitas para tu meta y cuánto costaría cada una en tu mercado. De ahí sale el presupuesto. Si no cierra contra tu margen, te lo decimos antes de que firmes.",
      },
      {
        q: "¿En cuánto tiempo se ven resultados?",
        a: "Los primeros prospectos llegan en los primeros días. Los cierres siguen el ritmo de compra del vehículo: en livianos, semanas; en camiones y línea amarilla, meses, porque hay evaluación de crédito de por medio. No prometemos plazos garantizados, pero desde la primera semana tienes números reales para saber si vamos bien.",
      },
      {
        q: "¿Cómo bajar el costo por prueba de manejo?",
        a: "Con segmentación precisa, creatividades que filtran al curioso y un seguimiento rápido. Menos leads basura, más pruebas de manejo reales. Y la palanca más grande casi nunca está en el anuncio: está en cuánto demora tu asesor en llamar.",
      },
      {
        q: "¿Trabajan con concesionarios fuera de Ica?",
        a: "Sí. Operamos para todo el Perú con el mismo método: campaña, calificación, agenda y reporte. Para eventos y grabaciones viajamos a tu piso de venta; el resto se maneja a distancia con reuniones fijas. Escríbenos al +51 937 770 159.",
      },
      {
        q: "¿Pueden llevar la marca y el concesionario al mismo tiempo?",
        a: "Sí, y es lo más frecuente. Respetamos el manual y las piezas oficiales del fabricante, y encima construimos la capa local: stock disponible, oferta del mes, tus asesores y la ubicación de tu piso. Si la marca aporta fondos de publicidad compartida, ajustamos las piezas a sus reglas.",
      },
      {
        q: "¿Hacen marketing de posventa o solo de venta de unidades?",
        a: "Las dos. Mantenimiento, repuestos, llantas, recordatorios de servicio y reactivación de tu base para la recompra. Suele ser la parte con mejor retorno, porque le hablas a gente que ya te compró y ya confía en tu taller.",
      },
      {
        q: "¿Trabajan solo autos o también camiones y maquinaria?",
        a: "Las tres líneas. Entre livianos, camiones y línea amarilla llevamos 19 marcas de vehículos, incluida XCMG. El comprador de maquinaria pesada pide otra conversación —ficha técnica, repuestos, respaldo del taller y financiamiento— y ese contenido lo preparamos con tu equipo técnico.",
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
      {
        h2: "Lo primero no es la campaña: es que te encuentren",
        parrafo:
          "En turismo, buena parte de la decisión se toma en el mapa. Alguien que ya está en Ica y busca dónde dormir, dónde comer o qué hacer mañana no abre Instagram: abre el buscador y mira lo que hay cerca. Esa búsqueda tiene la conversión más rápida que existe, y no cuesta un sol de publicidad. Por eso, antes de proponerte una campaña, revisamos que tu ficha esté verificada, con horarios reales, ubicación exacta, fotos actuales y reseñas recientes.",
        dato: {
          cifra: "76%",
          texto: "de quienes hacen una búsqueda de tipo «cerca de mí» visita un negocio dentro de las 24 horas siguientes. En turismo eso no es una estadística lejana: es el turista que ya está en la ciudad decidiendo dónde cenar.",
          fuente: "Think with Google",
        },
      },
      {
        h2: "Temporada alta y baja no se anuncian igual",
        parrafo:
          "El error más caro del marketing turístico es usar el mismo mensaje todo el año y subir el presupuesto cuando cae la ocupación. No funciona, porque el problema de cada temporada es distinto. En alta, el viajero ya decidió venir y está eligiendo entre opciones: gana quien resuelve la reserva con menos fricción. En baja, todavía no ha decidido salir de casa: hay que darle un motivo, y ese motivo rara vez es el precio.",
        tabla: {
          cabeceras: ["", "Temporada alta", "Temporada baja"],
          filas: [
            ["Qué falta", "Que te elijan a ti", "Que decidan viajar"],
            ["Qué decide", "Disponibilidad, ubicación, facilidad de reserva", "Un motivo con fecha: escapada, evento, experiencia"],
            ["A quién le hablas", "A quien ya está buscando", "A quien no está buscando todavía"],
            ["Riesgo", "Competir solo por precio", "Descontar y enseñar al cliente a esperar la rebaja"],
          ],
          nota: "La cercanía de Ica a Lima convierte el fin de semana en un producto real: no hace falta que alguien planifique vacaciones, basta con que decida salir el sábado.",
        },
      },
      {
        h2: "La reserva directa cambia la cuenta del mes",
        parrafo:
          "Un hotel que depende de las agencias en línea llena habitaciones, pero entrega parte de cada noche en comisión. Eso no se ve en la caja del día: se ve al cierre del mes, cuando el mismo número de huéspedes deja bastante menos. Trabajamos el canal propio para que la campaña traiga reservas directas —con los datos del huésped en tu poder, no en el de la plataforma— sin renunciar a las agencias, que siguen siendo útiles para captar a quien no te conoce.",
        bullets: [
          { titulo: "Costo por reserva directa", texto: "es el número que se compara contra la comisión. Mientras quede por debajo, el canal propio conviene." },
          { titulo: "El dato del huésped es tuyo", texto: "quien reservó directo puede volver sin que pagues dos veces por él." },
          { titulo: "Ocupación entre semana", texto: "es donde se gana o se pierde el mes; el fin de semana suele llenarse solo." },
        ],
      },
      {
        h2: "Qué trabajamos según el negocio",
        parrafo:
          "«Turismo» junta realidades distintas, y meterlas en la misma estrategia es la forma habitual de que ninguna funcione. Esto es lo que cambia en cada caso.",
        tabla: {
          cabeceras: ["Negocio", "El problema real", "Por dónde empezamos"],
          filas: [
            ["Hotel", "Depender de la temporada y de la comisión", "Ficha local y canal de reserva directa"],
            ["Restaurante", "Llenar de martes a jueves", "Reseñas, búsqueda local y propuesta por día"],
            ["Bodega o experiencia", "Vender la visita, no solo el producto", "Contenido del lugar y sistema de reservas"],
            ["Agencia o tour", "Competir con precio en plataformas", "Marca propia y venta directa por WhatsApp"],
          ],
        },
        nota: {
          titulo: "Antes de invertir en pauta",
          texto: "Comprueba que tu ficha de empresa esté verificada y con el horario real, incluidos feriados. Una campaña que trae gente a un negocio que parece cerrado gasta el presupuesto en la puerta.",
        },
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
      {
        q: "¿Conviene dejar las agencias en línea?",
        a: "Casi nunca del todo: siguen siendo el escaparate donde te encuentra quien no te conoce. Lo que cambia la rentabilidad es no depender solo de ellas, teniendo un canal propio que capture a quien ya te conoce o llega por tu campaña.",
      },
      {
        q: "¿Sirve el marketing turístico para un negocio pequeño?",
        a: "Sí, y en un negocio pequeño el orden importa más. Ordenar la ficha local, las fotos y las reseñas cuesta tiempo pero no presupuesto, y en turismo suele mover más que una campaña pequeña mal dirigida.",
      },
      {
        q: "¿Qué contenido funciona mejor en turismo?",
        a: "El que muestra la experiencia real y responde una duda: cómo se llega, qué se ve, cómo es la habitación de verdad. En un sector donde el cliente compra algo que no puede probar antes, el video honesto convence más que la foto perfecta.",
      },
      {
        q: "¿Trabajan con hoteles fuera de Ica?",
        a: "Sí. Buena parte del método —búsqueda local, reserva directa, mensajes por temporada— es igual en Paracas, Nazca o Arequipa. Lo que cambia es el calendario de temporadas y de dónde viene el viajero.",
      },
      {
        q: "¿Cómo se mide una campaña de turismo?",
        a: "Por reservas y su costo, no por alcance. Y con dos matices que suelen olvidarse: cuántas noches trae cada reserva y qué porcentaje de huéspedes repite, que es el canal más barato que existe.",
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
      {
        h2: "Construir marca y vender no son la misma inversión",
        parrafo:
          "La confusión más cara de este sector es esperar contratos de una estrategia diseñada para que te recuerden. Ninguna de las dos es mejor: resuelven problemas distintos y se notan en plazos distintos. Lo sano es saber cuál tienes delante antes de decidir dónde va el presupuesto, y por eso es lo primero que ponemos sobre la mesa.",
        tabla: {
          cabeceras: ["", "Contenido de marca", "Campaña de demanda directa"],
          filas: [
            ["Qué busca", "Que te recuerden", "Que te escriban hoy"],
            ["Qué se mide", "Alcance, comunidad, recordación", "Conversaciones, pedidos, contratos"],
            ["Cuándo se nota", "Meses", "Días"],
            ["Qué necesita", "Constancia", "Una oferta concreta y quién atienda"],
            ["Riesgo", "Invertir sin ver venta", "Agotar el público si no rotas el mensaje"],
          ],
          nota: "La mayoría de marcas necesita las dos, en proporciones que cambian según el momento del negocio.",
        },
      },
      {
        h2: "Lo que cuesta conseguir un cliente, en un caso real",
        parrafo:
          "Las cifras de marketing se vuelven útiles cuando se dividen. En una de las campañas que trabajamos, quince contratos con S/2,500 de inversión salen a poco menos de S/167 por contrato cerrado. Ese número por sí solo no dice si es bueno o malo —eso depende de tu margen y de cuánto dura la relación con el cliente—, pero cambia la conversación: se deja de discutir el precio de la pauta y se empieza a discutir el retorno.",
        dato: {
          cifra: "S/167",
          texto: "de inversión publicitaria por contrato cerrado en el caso de Granjas Bonanza, dividiendo los S/2,500 de pauta entre los 15 contratos. Es el número que permite decidir si conviene escalar.",
        },
      },
      {
        h2: "El punto de venta sigue decidiendo",
        parrafo:
          "En consumo, buena parte de la decisión se toma delante del producto, y ahí no llega ninguna campaña digital. Un lineal bien resuelto, un material que explique en tres segundos por qué tu producto y no el de al lado, y una presencia coherente entre lo que el cliente vio en el móvil y lo que encuentra en la tienda, hacen más por la venta que subir el presupuesto de pauta. Por eso trabajamos las dos capas juntas: lo que pasa en la pantalla y lo que pasa en el estante.",
        bullets: [
          { titulo: "Coherencia entre canales", texto: "si el envase no se parece a lo que anunciaste, el cliente duda justo en el momento de decidir." },
          { titulo: "Tres segundos en el lineal", texto: "es lo que dura la mirada. El material tiene que responder qué es y por qué conviene en ese tiempo." },
          { titulo: "Material que dura", texto: "un display que se vence en dos semanas comunica descuido de la marca, no ahorro." },
        ],
      },
      {
        h2: "Qué medimos en una marca de consumo",
        parrafo:
          "Seguidores y alcance describen la conversación, no el negocio. Estos cuatro números sí permiten decidir, y ninguno necesita un panel complicado.",
        tabla: {
          cabeceras: ["Número", "Qué te dice"],
          filas: [
            ["Costo por contacto comercial", "Si la captación está sana"],
            ["Tasa de cierre", "Si el problema es atraer o convertir"],
            ["Ticket promedio", "Si las promociones suman o restan margen"],
            ["Clientes que repiten", "Si el crecimiento se sostiene o hay que comprarlo cada mes"],
          ],
        },
        nota: {
          tipo: "aviso",
          titulo: "El error que anula la inversión",
          texto: "Encender una campaña de demanda directa sin tener quién atienda los mensajes el mismo día. El resultado es pagar por generar interés y dejar que se enfríe, y desde fuera parece una campaña que no funcionó cuando lo que falló fue el tramo posterior al clic.",
        },
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
      {
        q: "¿Qué es una campaña de demanda directa?",
        a: "Una campaña diseñada para que alguien inicie una conversación de compra hoy, no para construir recordación. Se reconoce en que su objetivo es un mensaje o un pedido, y en que se mide por contactos y cierres en lugar de por alcance.",
      },
      {
        q: "¿Necesito invertir en marca si mi producto ya se vende?",
        a: "Si se vende por precio y cada mes hay que volver a comprar el tráfico, sí: la marca es lo que hace que el crecimiento no dependa del presupuesto del mes. Si se vende porque te buscan por nombre, ya tienes marca y conviene protegerla.",
      },
      {
        q: "¿Producen el material del punto de venta?",
        a: "Sí, y desde el mismo sitio: diseño, impresión y merchandising. Que la pieza física salga del mismo equipo que hizo la campaña evita el problema habitual de que el estante no se parezca a lo que el cliente vio en el móvil.",
      },
      {
        q: "¿Cuánto tarda en verse el resultado?",
        a: "Depende de qué estés midiendo. Una campaña de demanda directa se lee en días; el efecto de marca, en meses. Mezclar los dos plazos es lo que hace que se apaguen inversiones justo cuando empezaban a funcionar.",
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
      {
        h2: "Lo que de verdad cuesta caro es la hora vacía",
        parrafo:
          "En salud, la conversación sobre el precio del paciente suele estar mal planteada. Una hora de agenda que no se ocupa ya está pagada: el local, el equipo y el profesional siguen ahí. Por eso, antes de proponerte subir la inversión en captación, miramos cuántas de las citas que ya agendas terminan en consulta efectiva. En muchos consultorios, recuperar ese porcentaje llena la agenda sin gastar un sol más en publicidad, y es lo primero que revisamos.",
        bullets: [
          { titulo: "Confirmación el día anterior", texto: "un recordatorio por WhatsApp reduce las ausencias de forma notable y no cuesta prácticamente nada." },
          { titulo: "Cancelación fácil", texto: "parece contradictorio, pero permitir cancelar libera el espacio a tiempo en vez de perderlo." },
          { titulo: "Lista de espera", texto: "tener a quién llamar cuando se libera un hueco convierte una cancelación en una consulta." },
        ],
      },
      {
        h2: "La búsqueda local decide más que la campaña",
        parrafo:
          "Cuando alguien necesita un dentista, un pediatra o una consulta que no puede esperar, busca cerca. Esa búsqueda tiene la conversión más rápida que existe y no cuesta publicidad: lo que decide es tener un perfil de empresa verificado, con horarios reales, ubicación exacta y reseñas recientes. Por eso ese es el primer trabajo que hacemos, antes de encender nada.",
        dato: {
          cifra: "76%",
          texto: "de quienes hacen una búsqueda de tipo «cerca de mí» visita un negocio dentro de las 24 horas siguientes. En salud es el paciente que necesita atención hoy.",
          fuente: "Think with Google",
        },
      },
      {
        h2: "Cómo montamos la captación de pacientes",
        parrafo:
          "El orden importa, porque en salud la mayor parte de lo que funciona no es publicidad. Empezamos por lo que ya tienes y solo después invertimos en traer gente nueva.",
        pasos: [
          { titulo: "Ordenamos tu presencia local", texto: "ficha verificada, especialidad clara, fotos reales del consultorio y un sistema para pedir reseñas después de cada consulta que fue bien." },
          { titulo: "Revisamos la agenda", texto: "cuántas citas se agendan, cuántas se cumplen y dónde se caen. Aquí suele haber más consultas disponibles que en una campaña nueva." },
          { titulo: "Abrimos el canal de contacto", texto: "WhatsApp con respuesta rápida, porque un paciente que escribe y no recibe respuesta el mismo día busca en otro sitio." },
          { titulo: "Encendemos campañas por especialidad y zona", texto: "segmentadas por lo que la gente busca de verdad, no por «salud» en general." },
          { titulo: "Medimos hasta la consulta", texto: "no hasta el clic ni hasta el lead: hasta el paciente que se sentó en el sillón." },
        ],
      },
      {
        h2: "Lo que no vamos a hacer con tu marca",
        parrafo:
          "La publicidad de salud está regulada por las plataformas y por las normas sanitarias, y hay atajos que consiguen clics a corto plazo y cuentas rechazadas o problemas después. Preferimos decirlo por adelantado.",
        nota: {
          tipo: "aviso",
          titulo: "Tres cosas que no verás en tus anuncios",
          texto: "No interpelamos al paciente sobre su estado de salud («¿tienes dolor de rodilla?»), no prometemos resultados ni curas, y no usamos imágenes de antes y después como reclamo principal. Las tres son motivo habitual de rechazo de anuncios y, en varias especialidades, también un problema regulatorio. Lo que sí construimos es credibilidad verificable: especialidad, colegiatura, años de ejercicio y pacientes que hablan por ti.",
        },
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
      {
        q: "¿Cuánto presupuesto necesita un consultorio?",
        a: "La cifra importa menos que la relación entre lo que cuesta captar un paciente y lo que ese paciente deja a lo largo del tratamiento. En especialidades donde el paciente vuelve varias veces se puede pagar bastante más por la primera cita que en una consulta única. Calculamos ese valor contigo antes de proponer un presupuesto.",
      },
      {
        q: "¿Por qué rechazan mis anuncios de salud?",
        a: "Casi siempre por interpelar directamente al usuario sobre su estado de salud, prometer resultados o usar imágenes de antes y después como reclamo. El mismo mensaje reescrito en tercera persona y sin promesa de resultado suele aprobarse sin problema.",
      },
      {
        q: "¿Trabajan con clínicas dentales?",
        a: "Sí, y es donde más demanda de búsqueda hay dentro de salud. También con especialidades médicas, policlínicos y profesionales independientes; lo que cambia es la segmentación y el ciclo de decisión del paciente.",
      },
      {
        q: "¿Ayudan con las reseñas?",
        a: "Montamos el sistema para pedirlas —el momento, el canal y quién lo hace— y te ayudamos a responderlas, sobre todo las negativas. Lo que no hacemos es comprarlas: las plataformas lo detectan y el daño a la ficha dura más que el beneficio.",
      },
      {
        q: "¿Necesito una web o basta con redes?",
        a: "En salud la web pesa, porque es donde el paciente comprueba que existes y que eres quien dices ser. No hace falta que sea grande: horarios, especialidades, credenciales verificables, ubicación y una forma clara de agendar resuelven casi todo.",
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
      "Operamos desde Ica, segunda región agroexportadora del Perú: conocemos el calendario de campaña, las ferias del rubro y al comprador internacional.",
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
      {
        h2: "El dato que ordena todo tu marketing",
        parrafo:
          "Hay una cifra que decide qué tiene sentido hacer y qué no en una agroexportadora de Ica: prácticamente toda la producción de la región se va afuera. Cuando tu comprador está al otro lado del mundo y es un profesional que evalúa proveedores, media estrategia habitual deja de aplicar. No hacen falta recetas, ni promociones de temporada, ni comunidad. Hace falta credibilidad verificable y capacidad demostrable.",
        dato: {
          cifra: "92%",
          texto: "de la producción agrícola de Ica se destina al mercado externo y solo el 8% al interno. Tu marketing no le habla a un consumidor: le habla a un importador.",
          fuente: "Reporte regional de Ica",
        },
      },
      {
        h2: "Dónde está Ica, con los números delante",
        parrafo:
          "Trabajamos desde la región y preferimos describirla con exactitud, porque frente a un comprador internacional un dato verificable convence más que un superlativo. Ica es la segunda región agroexportadora del país —por detrás de La Libertad— y concentra alrededor de la quinta parte de las exportaciones agrícolas peruanas, con más de setecientas mil toneladas colocadas en cerca de setenta y cinco mercados. En un país que lidera varias categorías a nivel mundial, ser el segundo sigue siendo una posición muy fuerte.",
        tabla: {
          cabeceras: ["Producto", "Peso en el valor agroexportado de Ica"],
          filas: [
            ["Uva", "32,8%"],
            ["Palta", "12,5%"],
            ["Arándano", "10,2%"],
            ["Espárrago", "5,9%"],
          ],
          nota: "Referencia de 2024. La concentración en uva explica por qué tantas empresas de la región compiten en la misma ventana y con el mismo argumento: ahí la marca es lo que separa.",
        },
      },
      {
        h2: "Qué construimos, y en qué orden",
        parrafo:
          "El material de una agroexportadora no se improvisa la semana de la feria. Este es el orden que seguimos, pensado para que cada pieza esté lista antes de que haga falta.",
        pasos: [
          { titulo: "Web B2B en inglés y español", texto: "con dominio y correos corporativos, datos formales de la empresa y navegación pensada para un comprador que busca descartar rápido." },
          { titulo: "Certificaciones y fichas a la vista", texto: "Global G.A.P., HACCP, BRC, orgánico. Visibles en la web con su fecha, no en un PDF que hay que pedir." },
          { titulo: "Capacidad y ventana de campaña", texto: "hectáreas, variedades, volumen y fechas. Un importador planifica su temporada: si no puede estimar si le sirves, no pregunta." },
          { titulo: "Contenido del fundo y el packing", texto: "fotografía y video, incluido drone, que muestran el proceso real. Aquí la imagen hace más trabajo que cualquier texto." },
          { titulo: "CRM para el seguimiento", texto: "porque entre el primer contacto y la primera orden pueden pasar meses y varias campañas." },
        ],
        nota: {
          tipo: "aviso",
          titulo: "El error más caro después de una feria",
          texto: "Volver con tarjetas y no escribir en las 48 horas siguientes. El importador vio decenas de proveedores esa semana; pasado ese plazo ya no recuerda cuál eras. La secuencia de seguimiento se prepara antes de viajar, no al volver.",
        },
      },
      {
        h2: "Por qué el ciclo se mide en campañas, no en semanas",
        parrafo:
          "Es la diferencia más grande entre este sector y cualquier otro que trabajamos, y conviene tenerla clara antes de empezar. El recorrido va de la feria a la muestra, de la muestra a la auditoría y de ahí a la primera orden, y puede ocupar más de una temporada. Por eso el indicador útil no son los contactos del mes, sino cuántas oportunidades avanzan de etapa. Un año con pocas órdenes nuevas pero con varios compradores en auditoría es un buen año, aunque un panel de leads diga lo contrario.",
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
        a: "Sí. Desarrollamos tu presencia en inglés y español, pensada para el importador, con fichas técnicas y certificaciones a la vista. Y no con traducción automática: la ficha técnica y las condiciones comerciales tienen vocabulario propio, y un error ahí resta credibilidad justo donde más se juzga.",
      },
      {
        q: "¿Necesita una agroexportadora estar en redes sociales?",
        a: "Menos de lo que se cree, y con otro propósito. El importador no decide en Instagram, pero sí comprueba que la empresa exista y se vea activa. Rinde más una web sólida con certificaciones y capacidad a la vista, y LinkedIn para el contacto profesional, que publicar a diario en redes de consumo.",
      },
      {
        q: "¿Qué material hace falta para una feria internacional?",
        a: "Catálogo con fichas técnicas por producto, presentación institucional breve, y fotografía y video del fundo y el packing. Y la secuencia de seguimiento escrita antes de viajar, que es lo que suele faltar y lo que más oportunidades cuesta.",
      },
      {
        q: "¿Cómo me diferencio si vendo lo mismo que la empresa de al lado?",
        a: "En lo que no es el fruto: consistencia campaña tras campaña, trazabilidad demostrable, prácticas laborales y ambientales, y capacidad de respuesta. Cuando el producto es comparable, el importador elige al proveedor que le da menos problemas.",
      },
      {
        q: "¿Cuánto tarda en dar resultado?",
        a: "Se mide en campañas, no en semanas. Por eso trabajamos con un indicador distinto: cuántas oportunidades avanzan de etapa —de contacto a muestra, de muestra a auditoría— en lugar de cuántos leads entraron este mes.",
      },
      {
        q: "¿Trabajan con empresas fuera de Ica?",
        a: "Sí. El método es el mismo en cualquier región agroexportadora; lo que cambia es el calendario de campaña y los productos. Lo que aportamos de Ica es conocer de cerca cómo opera el sector y su ritmo.",
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
      {
        h2: "Por qué la denominación de origen ya no te diferencia",
        parrafo:
          "Es la primera conversación incómoda que tenemos con casi toda bodega. La denominación de origen no es un club pequeño: hay cientos de productores autorizados y casi la mitad están en Ica. Decir «pisco de Ica con DO» te pone en la misma frase que el vecino. Lo que sí diferencia es todo lo que viene después —el valle concreto, la variedad de uva, el método, la familia, el premio verificable—, y eso es exactamente lo que trabajamos.",
        dato: {
          cifra: "235",
          texto: "productores de Ica autorizados a usar la denominación de origen Pisco, de 533 en todo el país. La región concentra además el 57% de los despachos de exportación.",
          fuente: "Registro de productores autorizados de la DO Pisco (julio de 2025)",
        },
      },
      {
        h2: "Dos curvas opuestas, y una decisión que sale de ellas",
        parrafo:
          "Hay un dato del sector que casi nadie cruza al planificar: las exportaciones de pisco vienen creciendo mientras el consumo interno lleva tiempo bajando. Para una bodega eso no es una noticia de prensa, es una decisión estratégica que cambia dónde poner el dinero. Si tu apuesta es el mercado nacional, peleas por una porción que se encoge y necesitas quitarle clientes a alguien: ahí manda la marca. Si tu apuesta es afuera, el terreno crece pero el juego es otro —etiqueta en inglés, certificaciones, capacidad de despacho y un comprador que evalúa proveedores, no una botella.",
        tabla: {
          cabeceras: ["", "Vender en Perú", "Vender al exterior"],
          filas: [
            ["Cómo va el mercado", "El consumo interno viene cayendo", "Las exportaciones vienen creciendo"],
            ["A quién le hablas", "Al consumidor final", "A un importador o distribuidor"],
            ["Qué decide la compra", "Marca, ocasión y recomendación", "Capacidad, consistencia y certificaciones"],
            ["Qué construimos primero", "Marca, etiqueta y contenido que dan deseo", "Ficha técnica, web en inglés y respaldo formal"],
          ],
          nota: "No son excluyentes, pero sí distintas: intentar las dos con el mismo material suele terminar sin ninguna de las dos.",
        },
      },
      {
        h2: "El enoturismo es tu segundo negocio, no un extra",
        parrafo:
          "En Ica, la visita a la bodega no es una actividad de cortesía: es un producto con margen alto que además fabrica clientes recurrentes. Quien viene, cata y se lleva una botella se acuerda de tu marca de una forma que ninguna campaña compra. Y la cercanía a Lima juega a favor, porque convierte el fin de semana en un plan realista y no en unas vacaciones que hay que planificar. Trabajamos las visitas como se trabaja un hotel: con contenido que muestre la experiencia real y un sistema de reservas que no dependa de contestar mensajes a mano.",
        bullets: [
          { titulo: "El contenido que funciona", texto: "el viñedo, la destilación, las manos que trabajan. Lo que no se puede copiar convence más que la foto de estudio de la botella." },
          { titulo: "Reservas ordenadas", texto: "para que la agenda no dependa de quién esté libre para responder el WhatsApp." },
          { titulo: "La visita alimenta la venta online", texto: "quien probó en la bodega vuelve a comprar por internet si le dejas por dónde." },
        ],
        nota: {
          titulo: "Antes de abrir la tienda online",
          texto: "Resuelve el envío de bebidas alcohólicas —embalaje para vidrio, transportista que las acepte y a qué provincias llegas de verdad— y déjalo escrito en la web. Es la primera duda de quien compra desde fuera de Ica, y no responderla en la ficha del producto cuesta más ventas que cualquier detalle de diseño.",
        },
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
      {
        q: "¿Cómo diferencio mi pisco si todos son de Ica y con DO?",
        a: "Precisamente porque la denominación la comparten cientos de productores, no puede ser tu argumento principal. Lo que diferencia es lo específico y comprobable: el valle, la variedad, el método, la historia de la familia y los premios. Ese es el trabajo de marca que hacemos antes de tocar la publicidad.",
      },
      {
        q: "¿Conviene vender en marketplaces o en tienda propia?",
        a: "Los marketplaces dan volumen inmediato pero se quedan comisión y no te dejan construir marca ni base de clientes. La tienda propia cuesta más de arrancar y es donde acumulas valor. Muchas bodegas empiezan en marketplace y van moviendo al comprador recurrente a su propia tienda; ese traslado también se puede diseñar.",
      },
      {
        q: "¿Vale la pena apostar por la exportación?",
        a: "Depende de tu capacidad, no de tu voluntad. El mercado externo crece, pero el importador no compra una botella: compra un proveedor que sostenga volumen y consistencia campaña tras campaña. Si eso todavía no es tu caso, rinde más consolidar la marca en el mercado nacional y el enoturismo, y preparar la exportación mientras tanto.",
      },
      {
        q: "¿Ayudan con el diseño de la etiqueta?",
        a: "Sí, y suele ser el punto donde más se gana. La etiqueta es lo único de tu producto que el cliente ve antes de probarlo, y es lo que sostiene el precio en un estante donde todas las botellas prometen tradición.",
      },
      {
        q: "¿Se puede vender pisco por internet en Perú?",
        a: "Sí, y las bodegas lo hacen. Lo que hay que dejar resuelto antes de invertir en atraer tráfico es la logística —embalaje, transportista que acepte alcohol y cobertura real por provincia— y la verificación de mayoría de edad en la compra.",
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
