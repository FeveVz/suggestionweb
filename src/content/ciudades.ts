import type { Ciudad } from "./types";

/**
 * Páginas de cobertura por ciudad (/agencia-de-marketing-en-<slug>).
 *
 * REGLA DE HONESTIDAD: no afirmamos tener oficina ni clientes en estas
 * ciudades. Lo que se afirma es real y verificable: operamos desde Ica para
 * todo el Perú, y la red de concesionarios que atendemos ya opera en Ica y
 * Cusco. El copy de cada ciudad habla de SU economía (lo que sí conocemos del
 * mercado) y de cómo trabajamos a distancia, no de casos que no existen.
 *
 * Cada ciudad lleva secciones y FAQ propias: no son plantillas con el nombre
 * cambiado (eso Google lo trata como página-puerta y lo penaliza).
 */

export const CIUDADES: Ciudad[] = [
  {
    slug: "chincha",
    nombre: "Chincha",
    metaTitle: "Agencia de Marketing en Chincha | Suggestion",
    metaDescription:
      "Agencia de marketing para negocios de Chincha: agroindustria, avícolas, concesionarios y comercio. Campañas que se miden en ventas. Agenda una llamada.",
    h1: "Agencia de marketing en Chincha",
    hero: "Chincha vende, pero compite con Lima a una hora de distancia. Armamos campañas que capturan al comprador local antes de que se le ocurra buscar afuera, y que le llegan también al cliente de Lima que compra aquí.",
    cta: "Hablemos de tu negocio en Chincha",
    proof:
      "Trabajamos desde Ica con más de 50 marcas y llevamos 7 años en el mercado de la región.",
    cobertura:
      "Chincha está a poco más de una hora de nuestra oficina en Ica, así que es de las plazas que mejor conocemos fuera de casa. Reuniones presenciales cuando el proyecto lo pide, y el resto de la operación —campañas, reportes, seguimiento— funcionando a diario sin depender de que alguien maneje dos horas.",
    secciones: [
      {
        h2: "El problema de estar a una hora de Lima",
        parrafo:
          "Es la particularidad comercial de Chincha: tu cliente puede resolver la compra en Lima el mismo día. Eso obliga a competir con argumentos que no sean solo el precio —cercanía, atención, entrega, postventa— y a que tu negocio aparezca antes de que la búsqueda derive a la capital. La otra cara es la oportunidad: hay demanda limeña que baja los fines de semana y en feriados largos, y casi nadie le habla.",
      },
      {
        h2: "Agroindustria y avícolas: venta B2B, no likes",
        parrafo:
          "El agro y la producción avícola de la zona venden a otras empresas, no al consumidor de la calle. Ahí el marketing no es postear: es una web que sostiene una ficha técnica, contenido que genera confianza en el comprador industrial y un seguimiento ordenado de cada cotización. En consumo directo ya nos pasó con Granjas Bonanza: 15 contratos cerrados con S/2,500 en campañas de demanda directa.",
      },
      {
        h2: "Concesionarios y vehículos",
        parrafo:
          "Atendemos 19 marcas de vehículos entre livianos, camiones y línea amarilla. Sabemos lo que cuesta un lead de auto que no llega al piso. Para un concesionario en Chincha el trabajo es doble: captar al comprador de la provincia y no perderlo contra la oferta de Lima, con campañas de financiamiento y modelo del mes que empujan a la prueba de manejo.",
      },
      {
        h2: "Bodegas, pisco y comercio local",
        parrafo:
          "Chincha comparte con Ica la tradición del pisco y suma su propia identidad afroperuana, que es un activo de marca que casi nadie está explotando bien. Para una bodega o un negocio con historia, el trabajo empieza por la marca —cómo se ve, qué cuenta— y sigue por venta directa y enoturismo, que es donde está el margen.",
      },
      {
        h2: "Qué medimos",
        parrafo:
          "Leads, citas y cierres. El alcance y los seguidores no pagan planilla. Cada mes ves cuántos contactos entraron, cuántos se convirtieron en visita o cotización y cuánto costó cada uno. Si un canal no rinde, se corta; no se disfraza con un gráfico bonito.",
      },
    ],
    serviciosQueUsa: ["publicidad-digital", "redes-sociales", "desarrollo-web", "branding"],
    faq: [
      {
        q: "¿Atienden Chincha si su oficina está en Ica?",
        a: "Sí. Chincha está a poco más de una hora y es una de las plazas que más trabajamos fuera de Ica. Coordinamos reuniones presenciales cuando hacen falta y la operación del día a día es remota, que es como funciona igual dentro de la misma ciudad.",
      },
      {
        q: "¿Cuánto debo invertir al mes en publicidad?",
        a: "Depende del margen de tu producto y de cuántos clientes puedes atender. Como referencia, con S/3,000 en Meta Ads una inmobiliaria que asesoramos generó S/350K en ventas. Lo honesto es empezar con un monto que puedas sostener tres meses y ajustar con datos reales, no adivinar.",
      },
      {
        q: "¿En cuánto tiempo veo resultados?",
        a: "En publicidad pagada, los primeros contactos llegan en días. Estabilizar el costo por lead toma entre 4 y 8 semanas de ajustes. El posicionamiento en buscadores es más lento: se mide en meses. Quien te prometa ventas garantizadas la primera semana te está vendiendo humo.",
      },
      {
        q: "¿Trabajan con negocios pequeños?",
        a: "Sí, siempre que haya algo que vender y capacidad de atender lo que llegue. Lo que no hacemos es aceptar una cuenta cuando el problema real no es marketing —por ejemplo, que no haya stock o que nadie responda el WhatsApp—; en ese caso lo decimos antes de cobrar.",
      },
      {
        q: "¿Puedo contratar solo la web o solo las redes?",
        a: "Sí. No obligamos a contratar el paquete completo. Ahora bien, si haces una web y nadie la ve, o traes visitas a una web que no convierte, el dinero se va igual. En el diagnóstico te decimos por dónde conviene empezar según tu caso.",
      },
    ],
    cierre: { h2: "Hagamos crecer tu negocio en Chincha", cta: "Agenda una llamada" },
  },
  {
    slug: "pisco",
    nombre: "Pisco",
    metaTitle: "Agencia de Marketing en Pisco | Suggestion",
    metaDescription:
      "Marketing para empresas de Pisco: industria portuaria, pesca, turismo en Paracas y bodegas. Campañas medibles en ventas. Agenda una llamada hoy.",
    h1: "Agencia de marketing en Pisco",
    hero: "Pisco tiene dos economías distintas: la industrial del puerto y la turística de Paracas. Cada una necesita un marketing diferente, y meterlas en la misma campaña es la forma más rápida de quemar presupuesto.",
    cta: "Hablemos de tu negocio en Pisco",
    proof:
      "En turismo, Hoteles Señor de Luren generó 75 reservas en una sola campaña, dentro y fuera de temporada.",
    cobertura:
      "Pisco está a menos de una hora de nuestra oficina en Ica: es prácticamente mercado de casa. Podemos estar presencialmente para una grabación, una activación o una reunión de arranque, y sostener la operación diaria en remoto.",
    secciones: [
      {
        h2: "Turismo en Paracas: llenar también fuera de temporada",
        parrafo:
          "El reto de un hotel, una agencia o un restaurante en la zona no es la temporada alta, es marzo. La solución no es bajar el precio: es tener una oferta distinta para cada momento del año y un canal de reserva propio que no dependa solo de las plataformas y su comisión. Con Hoteles Señor de Luren logramos 75 reservas en una sola campaña que cubrió alta y baja temporada.",
      },
      {
        h2: "Industria y puerto: el marketing que sí aplica a una B2B",
        parrafo:
          "A una empresa que le vende a otra empresa no le sirve pelear por likes. Le sirve una web que aguante la revisión de un comprador técnico, material corporativo serio, presencia ordenada en buscadores para las búsquedas específicas de su rubro y un registro de cada oportunidad para que ninguna cotización se pierda entre correos.",
      },
      {
        h2: "Bodegas de pisco: la marca es el producto",
        parrafo:
          "En pisco, la etiqueta y la historia valen tanto como el destilado. Un producto con medallas pero con marca pobre se vende al precio del que no las tiene. Trabajamos branding, fotografía y video de producto, venta directa y enoturismo, que es donde el visitante que ya está en la zona se convierte en cliente recurrente.",
      },
      {
        h2: "Pesca y agroexportación",
        parrafo:
          "Para quien exporta, el marketing es institucional: presencia digital que resista la mirada de un importador extranjero, catálogo claro, contenido que demuestre estándares y trazabilidad, y material para ferias. No se trata de vender por Instagram, sino de que cuando el comprador te busque, encuentre a una empresa que da confianza.",
      },
      {
        h2: "Qué medimos",
        parrafo:
          "Reservas, cotizaciones y contratos según tu rubro, más el costo de conseguir cada uno. Reportamos el número real, incluido cuando baja. Esa es la única forma de decidir dónde poner el siguiente sol.",
      },
    ],
    serviciosQueUsa: ["publicidad-digital", "desarrollo-web", "produccion-audiovisual", "redes-sociales"],
    faq: [
      {
        q: "¿Trabajan con hoteles y agencias de turismo en Paracas?",
        a: "Sí, el turismo es uno de nuestros siete sectores con estrategia propia. El caso que más citamos es Hoteles Señor de Luren, con 75 reservas generadas en una sola campaña que funcionó dentro y fuera de temporada.",
      },
      {
        q: "¿Cómo se llena un hotel en temporada baja?",
        a: "Cambiando la oferta, no el precio. En temporada alta el mensaje apunta a la decisión rápida; en baja hay que dar un motivo para viajar —escapada, paquete, experiencia— y dirigirlo a un público distinto, normalmente más cercano y de fin de semana.",
      },
      {
        q: "¿Sirve el marketing digital para una empresa industrial?",
        a: "Sirve, pero no como en consumo. No vas a vender un servicio industrial con un reel. Sí vas a ganar credibilidad con una web sólida, aparecer cuando alguien busca tu especialidad y dejar de perder cotizaciones por desorden en el seguimiento.",
      },
      {
        q: "¿Pueden ir presencialmente a Pisco?",
        a: "Sí. Estamos a menos de una hora desde Ica, así que grabaciones, activaciones y reuniones presenciales no son problema. La operación diaria de campañas la llevamos en remoto, que es como se trabaja hoy incluso con clientes de la misma ciudad.",
      },
      {
        q: "¿Necesito una web si ya vendo por redes?",
        a: "Las redes son alquiladas: si mañana se cae tu cuenta o cambia el algoritmo, te quedas sin canal. La web es lo único que controlas y es donde te encuentra quien te busca en Google. Si vendes bien por redes, la web es el siguiente paso, no el primero.",
      },
    ],
    cierre: { h2: "Hagamos crecer tu negocio en Pisco", cta: "Agenda una llamada" },
  },
  {
    slug: "nazca",
    nombre: "Nazca",
    metaTitle: "Agencia de Marketing en Nazca | Suggestion",
    metaDescription:
      "Marketing para negocios de Nazca: hoteles, agencias de turismo, comercio y proveedores mineros. Reservas y clientes medibles. Agenda una llamada.",
    h1: "Agencia de marketing en Nazca",
    hero: "Nazca recibe visitantes de todo el mundo y aun así muchos negocios de la zona dependen de que el turista aparezca solo. Se puede captar antes: cuando todavía está planeando el viaje.",
    cta: "Hablemos de tu negocio en Nazca",
    proof:
      "En turismo trabajamos con resultados concretos: 75 reservas generadas para un hotel en una sola campaña.",
    cobertura:
      "Nazca está a unas dos horas al sur de nuestra oficina en Ica, dentro de la misma región. Conocemos el corredor turístico y el movimiento comercial de la zona, y operamos las campañas en remoto con visitas presenciales cuando el proyecto las necesita.",
    secciones: [
      {
        h2: "Captar al turista antes de que llegue",
        parrafo:
          "La diferencia entre un hotel lleno y uno a media capacidad no suele estar en el servicio, sino en el momento de la captación. El viajero decide dónde dormir y qué tour tomar días o semanas antes de subir al bus. Si tu negocio solo existe para quien ya está caminando por la plaza, dependes del azar y de la comisión de las plataformas.",
      },
      {
        h2: "Reserva directa: dejar de regalar comisión",
        parrafo:
          "Cada reserva que entra por una plataforma se lleva un porcentaje que sale de tu margen. Construir un canal propio —web que reserve, WhatsApp con respuesta rápida, base de clientes que vuelven— no elimina las plataformas, pero cambia la proporción. Ese punto porcentual recuperado suele ser la diferencia entre el año bueno y el regular.",
      },
      {
        h2: "Turismo internacional: el idioma importa",
        parrafo:
          "Buena parte de quien visita Nazca no busca en español. Una web que solo existe en un idioma pierde a ese visitante antes de empezar. Trabajamos presencia y contenido pensando en quién busca de verdad y desde dónde, no en lo que a nosotros nos resulta cómodo.",
      },
      {
        h2: "Comercio, servicios y proveedores",
        parrafo:
          "No todo en Nazca es turismo. Hay comercio, transporte y empresas que proveen a la actividad minera de la zona. Ese negocio es B2B: se gana con credibilidad, presencia ordenada en buscadores y un seguimiento serio de cada cotización, no con publicaciones diarias.",
      },
      {
        h2: "Qué medimos",
        parrafo:
          "Reservas, consultas y ventas cerradas, con su costo. En turismo miramos además la estacionalidad: qué pasó en temporada alta y qué se logró sostener en la baja, que es donde se ve si la estrategia funciona.",
      },
    ],
    serviciosQueUsa: ["publicidad-digital", "desarrollo-web", "redes-sociales", "seo"],
    faq: [
      {
        q: "¿Cómo consigo más reservas directas y menos por plataformas?",
        a: "Con una web que permita reservar sin fricción, respuesta inmediata por WhatsApp y campañas dirigidas a quien está planificando el viaje. No se trata de salir de las plataformas, sino de que dejen de ser tu único canal.",
      },
      {
        q: "¿Sirve la publicidad para captar turistas extranjeros?",
        a: "Sí, y se puede segmentar por país de origen e idioma. Lo que no funciona es traducir la campaña palabra por palabra: lo que motiva a un viajero europeo no es lo mismo que mueve al turista nacional de fin de semana.",
      },
      {
        q: "¿Atienden Nazca desde Ica?",
        a: "Sí, estamos a unas dos horas y dentro de la misma región. Las campañas se operan en remoto y coordinamos presencia física cuando hace falta grabar, fotografiar o hacer una activación.",
      },
      {
        q: "¿Cuánto cuesta empezar?",
        a: "Hay dos costos distintos: lo que le pagas a la agencia y lo que va a la plataforma como pauta. Conviene no mezclarlos. En la primera llamada te decimos qué presupuesto tiene sentido para tu caso, y si creemos que aún no es momento de invertir, también lo decimos.",
      },
      {
        q: "¿Trabajan con negocios que no son de turismo?",
        a: "Sí. Tenemos siete sectores con estrategia propia: inmobiliario, automotriz, turismo, marcas y consumo, salud, agroexportación y pisco y vino. Y si tu rubro no está en la lista, la primera llamada sirve para ver si podemos aportar de verdad.",
      },
    ],
    cierre: { h2: "Hagamos crecer tu negocio en Nazca", cta: "Agenda una llamada" },
  },
  {
    slug: "arequipa",
    nombre: "Arequipa",
    metaTitle: "Agencia de Marketing en Arequipa | Suggestion",
    metaDescription:
      "Agencia de marketing para empresas de Arequipa: automotriz, inmobiliario, salud y comercio. Campañas que se miden en ventas, no en likes. Agenda hoy.",
    h1: "Agencia de marketing en Arequipa",
    hero: "Arequipa es la plaza más competida del sur. Con más oferta, ganar no es gritar más fuerte: es tener un embudo que convierta mejor que el del vecino, y medirlo hasta el cierre.",
    cta: "Hablemos de tu empresa en Arequipa",
    proof:
      "Atendemos 19 marcas de vehículos y operamos planes de marketing para una red de concesionarios presente en Ica y Cusco.",
    cobertura:
      "Trabajamos Arequipa en remoto desde Ica, que es como operan hoy la mayoría de cuentas: campañas, reportes y coordinación diaria por videollamada y WhatsApp. Cuando el proyecto pide presencia física —una grabación, un evento, una activación— se planifica y se viaja.",
    secciones: [
      {
        h2: "Competir en una plaza con mucha oferta",
        parrafo:
          "En una ciudad grande hay más competencia pagando por el mismo cliente, así que el costo por contacto sube. La ventaja no está en tener más presupuesto, sino en perder menos: responder rápido, calificar bien y darle seguimiento a cada oportunidad. La mayoría de negocios pierde más ventas por desorden interno que por falta de publicidad.",
      },
      {
        h2: "Automotriz: del clic a la prueba de manejo",
        parrafo:
          "Es donde tenemos más kilómetros recorridos: 19 marcas de vehículos entre livianos, camiones y línea amarilla, incluida XCMG. Un lead de auto que no llega al piso no vale nada, así que las campañas se diseñan alrededor del test drive y del argumento que mueve la decisión —financiamiento, cuota inicial, modelo del mes—, no alrededor del clic barato.",
      },
      {
        h2: "Inmobiliario: citas calificadas, no curiosos",
        parrafo:
          "Un proyecto se vende en preventa, cuando la valorización todavía es un argumento. El trabajo es separar al comprador que busca vivienda del inversionista, hablarle distinto a cada uno y sostener el seguimiento hasta la visita a sala de ventas. Con Inmobiliaria Ceinys, S/3,000 en Meta Ads generaron 350 leads, 20 visitas y 8 lotes vendidos: S/350K en ventas.",
      },
      {
        h2: "Salud y servicios profesionales",
        parrafo:
          "Una clínica o un consultorio no necesita más seguidores: necesita agenda llena y pacientes que lleguen a la cita. Eso se logra con campañas segmentadas por especialidad y zona, recordatorios que reducen las ausencias y una reputación digital cuidada, que en salud pesa más que en cualquier otro rubro.",
      },
      {
        h2: "Por qué una agencia que no es de Arequipa",
        parrafo:
          "Sinceramente: si buscas alguien que toque tu puerta cada semana, contrata local. Si lo que buscas es un equipo que ordene tu embudo y te muestre números reales cada mes, la distancia dejó de importar hace rato. Ya operamos cuentas fuera de Ica —la red de concesionarios que atendemos trabaja en Ica y Cusco— y la mecánica es la misma.",
      },
    ],
    serviciosQueUsa: ["publicidad-digital", "crm-automatizacion", "desarrollo-web", "redes-sociales"],
    faq: [
      {
        q: "¿Pueden atender mi empresa en Arequipa desde Ica?",
        a: "Sí. La operación de campañas es digital y se lleva igual desde cualquier ciudad: reportes, reuniones por videollamada y comunicación diaria. Ya trabajamos cuentas fuera de Ica. Cuando hace falta presencia física para grabar o para un evento, se planifica el viaje.",
      },
      {
        q: "¿Es más caro anunciar en Arequipa que en Ica?",
        a: "Suele serlo, porque hay más anunciantes compitiendo por el mismo público y eso sube el costo por contacto. Se compensa con mejor segmentación y con no desperdiciar los leads que ya entran, que es donde casi todos pierden plata.",
      },
      {
        q: "¿Tienen experiencia en el rubro automotriz?",
        a: "Es uno de nuestros rubros fuertes: 19 marcas de vehículos atendidas, entre livianos, camiones y línea amarilla. También hacemos eventos de venta en concesionario; en dos activaciones se vendieron 8 autos.",
      },
      {
        q: "¿Cómo sé que la inversión está funcionando?",
        a: "Porque ves la cadena completa: cuántos contactos entraron, cuántos llegaron a cita y cuántos compraron, con el costo de cada paso. Si un canal no rinde, se corta. No entregamos reportes de alcance y seguidores para justificar un honorario.",
      },
      {
        q: "¿Trabajan con exclusividad por rubro?",
        a: "En cuentas que compiten directamente en la misma ciudad y el mismo rubro sí lo conversamos antes de empezar, porque no tendría sentido optimizar dos campañas que pelean entre sí. Es una decisión que se toma al inicio, no sobre la marcha.",
      },
    ],
    cierre: { h2: "Hagamos crecer tu empresa en Arequipa", cta: "Agenda una llamada" },
  },
  {
    slug: "tacna",
    nombre: "Tacna",
    metaTitle: "Agencia de Marketing en Tacna | Suggestion",
    metaDescription:
      "Marketing para negocios de Tacna: turismo médico, comercio fronterizo, automotriz y agro. Campañas que traen clientes, no likes. Agenda una llamada.",
    h1: "Agencia de marketing en Tacna",
    hero: "En Tacna una parte del cliente llega desde el otro lado de la frontera. Eso cambia todo: el idioma del anuncio, la moneda de la comparación y el momento en que se toma la decisión.",
    cta: "Hablemos de tu negocio en Tacna",
    proof:
      "Siete años trabajando con más de 50 marcas, en siete sectores con estrategia propia para cada uno.",
    cobertura:
      "Tacna la trabajamos en remoto desde Ica. La operación diaria —campañas, seguimiento, reportes— es digital, y cuando el proyecto necesita presencia física se coordina con anticipación. La ventaja de trabajar con nosotros no es la cercanía: es el método y los números.",
    secciones: [
      {
        h2: "El cliente chileno: un público que hay que trabajar aparte",
        parrafo:
          "El visitante que cruza la frontera compara precios en otra moneda, busca en otros términos y planifica el viaje con días de anticipación. Meterlo en la misma campaña que al cliente local es desperdiciar presupuesto: hay que segmentarlo por ubicación e idioma, hablarle del ahorro y de la garantía, y darle certezas de horario y atención antes de que se suba al auto.",
      },
      {
        h2: "Turismo médico, dental y estético",
        parrafo:
          "Es la actividad que más ha crecido con ese flujo y también la más competida. Aquí la decisión se toma por confianza: el paciente quiere saber quién lo va a atender, con qué respaldo y qué pasa si algo sale mal. Reputación digital, testimonios reales, precios claros y una respuesta inmediata a la consulta valen más que cualquier anuncio bonito.",
      },
      {
        h2: "Comercio fronterizo y automotriz",
        parrafo:
          "El comercio de Tacna vive de la comparación de precios, así que la oferta tiene que estar visible y ser inequívoca. En vehículos aportamos experiencia directa: atendemos 19 marcas entre livianos, camiones y línea amarilla, y sabemos armar campañas que empujan a la prueba de manejo en lugar de acumular consultas que nunca llegan al piso.",
      },
      {
        h2: "Agro: olivo, orégano y exportación",
        parrafo:
          "Para el productor que exporta, el marketing es institucional: una web que resista la revisión de un importador, catálogo y ficha de producto en orden, contenido que demuestre estándares y material para ferias. Es el mismo trabajo que hacemos con agroexportadoras, uno de nuestros siete sectores.",
      },
      {
        h2: "Qué medimos",
        parrafo:
          "Consultas, citas agendadas y ventas cerradas, separando el público local del que cruza la frontera. Esa separación es la que permite saber en qué mercado conviene poner el presupuesto, y suele dar sorpresas.",
      },
    ],
    serviciosQueUsa: ["publicidad-digital", "redes-sociales", "desarrollo-web", "crm-automatizacion"],
    faq: [
      {
        q: "¿Pueden segmentar campañas para público de Chile?",
        a: "Sí, la segmentación por ubicación e idioma es estándar en las plataformas. Lo que hace la diferencia no es la segmentación, sino el mensaje: ese público compara en otra moneda y necesita certezas de horario, garantía y atención antes de decidir el viaje.",
      },
      {
        q: "¿Trabajan con clínicas y consultorios?",
        a: "Sí, salud es uno de nuestros siete sectores. El foco está en llenar la agenda con pacientes que efectivamente llegan a la cita y en cuidar la reputación digital, que en salud es lo que más pesa en la decisión.",
      },
      {
        q: "¿Atienden Tacna estando en Ica?",
        a: "Sí, en remoto. Las campañas, el seguimiento y los reportes funcionan igual a distancia. Somos claros: si tu prioridad es tener a la agencia en la misma calle, quizá te convenga una local; si tu prioridad son los resultados y la transparencia en los números, podemos trabajar juntos.",
      },
      {
        q: "¿Cuánto tiempo toma ver resultados?",
        a: "Los primeros contactos por publicidad pagada llegan en días; estabilizar el costo por contacto toma entre 4 y 8 semanas. Posicionarse en buscadores es cuestión de meses. No prometemos posiciones en Google ni ventas garantizadas: no depende solo de nosotros.",
      },
      {
        q: "¿Qué necesito tener antes de empezar?",
        a: "Como mínimo, capacidad de responder rápido las consultas que van a llegar y claridad sobre tu oferta y tus precios. Sin eso, la publicidad solo hace que más gente se entere de que no respondes. Si falta algo de eso, te lo decimos en el diagnóstico.",
      },
    ],
    cierre: { h2: "Hagamos crecer tu negocio en Tacna", cta: "Agenda una llamada" },
  },
  {
    slug: "ayacucho",
    nombre: "Ayacucho",
    metaTitle: "Agencia de Marketing en Ayacucho | Suggestion",
    metaDescription:
      "Marketing para negocios de Ayacucho: turismo, artesanía, hotelería y comercio. Campañas medibles en reservas y ventas. Agenda una llamada hoy.",
    h1: "Agencia de marketing en Ayacucho",
    hero: "Ayacucho tiene un activo que pocas ciudades pueden comprar: identidad. El problema es que la identidad no se vende sola, y muchos negocios de la zona compiten por precio cuando podrían competir por lo que son.",
    cta: "Hablemos de tu negocio en Ayacucho",
    proof:
      "En turismo generamos 75 reservas para un hotel en una sola campaña, dentro y fuera de temporada.",
    cobertura:
      "Ayacucho la atendemos en remoto desde Ica. Reuniones por videollamada, campañas operadas a diario y reportes mensuales con números reales. Cuando un proyecto necesita producción audiovisual en el lugar, se planifica el viaje aparte.",
    secciones: [
      {
        h2: "Turismo más allá de Semana Santa",
        parrafo:
          "El calendario turístico de Ayacucho tiene un pico enorme y once meses de trabajo por hacer. Depender de una sola fecha es un riesgo: si ese año llueve, hay un problema logístico o cambia el feriado, el ejercicio completo se resiente. La salida es construir demanda para el resto del año con motivos distintos —cultura, gastronomía, naturaleza, viaje corto— dirigidos a públicos distintos.",
      },
      {
        h2: "Artesanía: de recuerdo a marca",
        parrafo:
          "El retablo, el textil y la cerámica de la zona se venden muchas veces al precio del souvenir cuando tienen valor de pieza. La diferencia la hace la marca: fotografía decente, una historia que se pueda contar, presencia digital y un canal de venta que llegue más allá del visitante que pasó por la tienda. Es el mismo trabajo que hacemos en marcas y consumo, uno de nuestros sectores.",
      },
      {
        h2: "Hotelería y restaurantes",
        parrafo:
          "El reto es idéntico al que ya resolvimos en turismo: llenar cuando no es temporada y depender menos de la comisión de las plataformas. Con Hoteles Señor de Luren fueron 75 reservas en una sola campaña, cubriendo alta y baja temporada. La receta es oferta distinta por momento del año y un canal propio de reserva.",
      },
      {
        h2: "Comercio y servicios locales",
        parrafo:
          "Para el negocio que vende en la ciudad, lo que más rinde suele ser lo más básico y lo que casi nadie tiene ordenado: aparecer bien en Google cuando alguien busca lo que vendes, tener la información de contacto y horarios correcta, y responder rápido. Antes de invertir en campañas grandes, conviene cerrar esas fugas.",
      },
      {
        h2: "Qué medimos",
        parrafo:
          "Reservas, pedidos o clientes según tu rubro, y el costo de conseguir cada uno. En turismo además comparamos temporada alta contra baja: si la baja mejora, la estrategia está funcionando de verdad.",
      },
    ],
    serviciosQueUsa: ["publicidad-digital", "redes-sociales", "branding", "produccion-audiovisual"],
    faq: [
      {
        q: "¿Cómo atraigo turistas fuera de Semana Santa?",
        a: "Dándoles otro motivo para viajar. La campaña de temporada alta apunta a quien ya decidió ir; el resto del año hay que crear la razón —una experiencia, un paquete corto, una fecha propia— y dirigirla a un público más cercano que viaja en fin de semana.",
      },
      {
        q: "¿Trabajan con artesanos y productores pequeños?",
        a: "Sí, siempre que haya capacidad de producir y despachar lo que se venda. En estos casos solemos empezar por marca y fotografía antes que por publicidad: sin buen material, la pauta solo acelera un mensaje débil.",
      },
      {
        q: "¿Atienden Ayacucho desde Ica?",
        a: "Sí, en remoto. La operación diaria de campañas es digital y funciona igual a distancia. Para producción audiovisual en el lugar coordinamos un viaje específico.",
      },
      {
        q: "¿Vale la pena invertir en Google si mi negocio es local?",
        a: "Casi siempre sí, porque quien busca en Google ya tiene intención de comprar. Y lo primero suele ser gratis: tener la ficha del negocio bien puesta, con horarios, fotos y reseñas. Eso mueve más de lo que la mayoría cree.",
      },
      {
        q: "¿Cuál es la inversión mínima?",
        a: "Depende del rubro y del margen. Lo que sí decimos siempre: es preferible sostener un presupuesto modesto durante tres meses que hacer un mes fuerte y cortar. Las campañas necesitan datos para optimizarse, y eso toma tiempo.",
      },
    ],
    cierre: { h2: "Hagamos crecer tu negocio en Ayacucho", cta: "Agenda una llamada" },
  },
  {
    slug: "huaraz",
    nombre: "Huaraz",
    metaTitle: "Agencia de Marketing en Huaraz | Suggestion",
    metaDescription:
      "Marketing para negocios de Huaraz: hoteles, agencias de trekking, restaurantes y proveedores. Más reservas directas y menos comisión. Agenda hoy.",
    h1: "Agencia de marketing en Huaraz",
    hero: "Huaraz vive del viajero que planifica con semanas de anticipación y compara desde otro país. Si tu negocio solo aparece cuando ya está en el jirón, llegaste tarde a la decisión.",
    cta: "Hablemos de tu negocio en Huaraz",
    proof:
      "En turismo trabajamos con números concretos: 75 reservas para un hotel en una sola campaña.",
    cobertura:
      "Huaraz la atendemos en remoto desde nuestra oficina en Ica. Campañas, seguimiento y reportes funcionan a distancia sin diferencia; para producción en el lugar se planifica un viaje específico según el proyecto.",
    secciones: [
      {
        h2: "El viajero de montaña decide antes de llegar",
        parrafo:
          "Quien viene a hacer trekking reserva alojamiento, tour y a veces guía con semanas de anticipación, y lo hace comparando en internet desde su ciudad o su país. Eso significa que la competencia por ese cliente no se juega en Huaraz: se juega en el buscador y en las plataformas, mucho antes de que el bus salga.",
      },
      {
        h2: "Reserva directa: recuperar el margen",
        parrafo:
          "Las plataformas traen volumen, pero se llevan una comisión que sale directo de tu utilidad. Construir un canal propio —web que reserve, WhatsApp que responda al instante, base de clientes que vuelven o recomiendan— no reemplaza a las plataformas, cambia la proporción. Con Hoteles Señor de Luren, una sola campaña generó 75 reservas.",
      },
      {
        h2: "Estacionalidad: el problema real del negocio",
        parrafo:
          "La temporada de montaña concentra la demanda en pocos meses y deja el resto del año en veremos. Lo que sí se puede trabajar es alargar los bordes de la temporada y captar público nacional de fin de semana con propuestas distintas. No es magia: es tener una oferta pensada para cada momento en lugar de repetir la misma todo el año.",
      },
      {
        h2: "Agencias, restaurantes y proveedores",
        parrafo:
          "Una agencia de tours vive de la confianza —seguridad, guías, equipamiento— y eso se comunica con contenido real, no con fotos de banco de imágenes. Los restaurantes se juegan la mesa en las reseñas y en aparecer bien en el mapa. Y las empresas que proveen a la actividad minera de la región juegan otro partido, el B2B, donde vale la credibilidad y el orden en el seguimiento de cotizaciones.",
      },
      {
        h2: "Qué medimos",
        parrafo:
          "Reservas y consultas con su costo, separando temporada alta de baja y público nacional de extranjero. Sin ese desglose es imposible saber qué canal conviene sostener el año siguiente.",
      },
    ],
    serviciosQueUsa: ["publicidad-digital", "desarrollo-web", "seo", "redes-sociales"],
    faq: [
      {
        q: "¿Cómo consigo reservas directas y dependo menos de las plataformas?",
        a: "Con una web donde se pueda reservar sin fricción, respuesta rápida por WhatsApp y campañas dirigidas a quien está planificando el viaje. El objetivo no es abandonar las plataformas, sino que dejen de ser el único canal y recuperar parte de esa comisión.",
      },
      {
        q: "¿Se puede hacer algo con la temporada baja?",
        a: "Se puede alargar los bordes de la temporada y atraer público nacional de escapada corta, con una propuesta distinta a la del trekking de altura. Lo que no es realista es prometer que la baja rendirá como la alta: eso no lo hace ninguna campaña.",
      },
      {
        q: "¿Trabajan con turistas extranjeros?",
        a: "Sí, se segmenta por país de origen e idioma. Lo importante es que el mensaje y la web hablen el idioma de ese viajero; traducir literalmente una campaña pensada para el público nacional no funciona.",
      },
      {
        q: "¿Atienden Huaraz desde Ica?",
        a: "Sí, en remoto. Es la forma en que se opera hoy la mayoría de cuentas digitales, incluso en la misma ciudad. Si el proyecto requiere grabar en el lugar, se planifica y se viaja.",
      },
      {
        q: "¿Qué pasa si ya tengo agencia y no veo resultados?",
        a: "Te ofrecemos una auditoría gratuita: revisamos tu publicidad, tu web y tu seguimiento, y te decimos las tres cosas que más moverían tus resultados. Puedes aplicarlas con nosotros o por tu cuenta, sin compromiso.",
      },
    ],
    cierre: { h2: "Hagamos crecer tu negocio en Huaraz", cta: "Agenda una llamada" },
  },
];

export const getCiudad = (slug: string): Ciudad | undefined =>
  CIUDADES.find((c) => c.slug === slug);

export const allCiudadSlugs = (): string[] => CIUDADES.map((c) => c.slug);

/** URL canónica de la página de cobertura de una ciudad. */
export const ciudadHref = (slug: string): string => `/agencia-de-marketing-en-${slug}`;
