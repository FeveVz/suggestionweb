import type { ServicioCiudad, Faq } from "./types";

/**
 * Producción con envío a otra región: una página por servicio y ciudad.
 *
 * Nace el 23-nov-2026 con Ayacucho. El owner detectó que las empresas de
 * Ayacucho mandan a imprimir a Lima, a Ica o a Chala. Las búsquedas que
 * existen (autocompletado de Google, nov-2026): «imprenta ayacucho»,
 * «imprentas en ayacucho huamanga», «imprenta huanta», «impresiones ayacucho»,
 * «gigantografías en ayacucho», «banner ayacucho», «vinil/stickers ayacucho»,
 * «tazas personalizadas ayacucho». Merchandising y POP casi no se buscan con
 * esas palabras: sirven sobre todo para prospectar empresas.
 *
 * Hechos confirmados por el owner (23-nov-2026), lo único que estas páginas
 * pueden prometer:
 *   - Producimos en Ica y despachamos por agencia de carga terrestre; el flete
 *     se cotiza aparte.
 *   - Solo enviamos: NO instalamos en Ayacucho (por eso no hay página de
 *     letreros ni toldos, que necesitan instalación).
 *   - Ya trabajamos con empresas de Ayacucho, pero sin nombrarlas.
 *   - No tenemos local en Ayacucho.
 * Reglas de producción que siguen valiendo: sin precios ni plazos fijos, sin
 * «desde una unidad»; la cantidad mínima y la fecha se dicen al cotizar.
 */

const ENVIO_AYACUCHO =
  "Producimos en Ica y despachamos el pedido a Ayacucho por agencia de carga terrestre. El flete depende del peso y del volumen, y te lo cotizamos aparte, junto con el pedido, para que veas el total antes de aprobar. La fecha que te damos ya suma la producción y el transporte.";

/** Preguntas que se repiten en las cuatro páginas, con la respuesta de cada una. */
const faqLocal = (que: string): Faq => ({
  q: "¿Tienen local en Ayacucho?",
  a: `No. Producimos ${que} en Ica y lo despachamos a Ayacucho por agencia de carga. Todo se coordina por WhatsApp, sin que tengas que viajar.`,
});
const FAQ_FACTURA: Faq = {
  q: "¿Emiten factura?",
  a: "Sí, todo pedido sale con factura. Somos Agencia de Marketing Suggestion S.A.C., RUC 20615266753.",
};

export const SERVICIOS_CIUDAD: ServicioCiudad[] = [
  // ─────────────────────────────────────────────────────────────── IMPRENTA
  {
    slug: "imprenta-en-ayacucho",
    ciudad: "ayacucho",
    ciudadNombre: "Ayacucho",
    servicio: "imprenta",
    nombre: "Imprenta en Ayacucho",
    actualizado: "2026-11-23",
    metaTitle: "Imprenta en Ayacucho: Offset, Digital y Envío | Suggestion",
    metaDescription:
      "Tarjetas, volantes, afiches, folletos y etiquetas para empresas de Ayacucho. Producimos en Ica y enviamos por agencia de carga. Cotiza por WhatsApp.",
    h1: "Imprenta en Ayacucho para empresas",
    hero:
      "Muchas empresas de Ayacucho ya mandan a imprimir a Lima o a Ica. Te cotizamos por WhatsApp, producimos en Ica y despachamos el pedido a Ayacucho por agencia de carga, con factura.",
    enCorto: [
      "Imprimimos por pedido para empresas de Ayacucho: tarjetas, volantes, afiches, dípticos, folletos, etiquetas y stickers.",
      "Producimos en Ica y despachamos por agencia de carga a Ayacucho; el flete se cotiza aparte, junto con el pedido.",
      "Para tirajes cortos conviene la impresión digital; para tirajes largos, el offset, porque el costo por unidad baja con el volumen.",
      "Cotizas por WhatsApp sin viajar, y la fecha de entrega en Ayacucho se acuerda al cotizar.",
    ],
    cta: "Cotiza tu impresión",
    tema: "impresiones con envío a Ayacucho",
    especificaciones: ["Qué necesito imprimir", "Medida", "Papel o material (si lo sabes)", "Cantidad", "Ciudad de entrega en Ayacucho", "Para cuándo lo necesito"],
    incluye: [
      { titulo: "Impresión digital", texto: "para tirajes cortos y piezas que cambian seguido." },
      { titulo: "Impresión offset", texto: "para volúmenes grandes, con el mismo color en todo el tiraje." },
      { titulo: "Papelería de empresa", texto: "tarjetas, hojas membretadas, sobres y carpetas." },
      { titulo: "Diseño si no tienes el arte", texto: "lo diseñamos y lo apruebas antes de imprimir." },
      { titulo: "Envío por agencia de carga", texto: "con el flete cotizado aparte." },
    ],
    secciones: [
      {
        h2: "Qué imprimimos para empresas de Ayacucho",
        sub: [
          { h3: "Papelería de empresa", texto: "Tarjetas de presentación, hojas membretadas, sobres y carpetas. La tarjeta más pedida en el Perú mide 9 × 5 cm; en couché de 350 g con plastificado mate no deja huellas y se puede escribir encima." },
          { h3: "Publicidad impresa", texto: "Volantes, afiches, dípticos, trípticos y folletos para campañas, matrículas, inauguraciones y ferias." },
          { h3: "Etiquetas y stickers", texto: "Para productos, empaques, vitrinas y vehículos, en papel o en vinil adhesivo." },
          { h3: "Gran formato", texto: "Gigantografías, banners y vinil para fachadas y eventos. Tienen su propia página, con materiales y acabados." },
        ],
        enlaces: [
          { label: "Gigantografías en Ayacucho", href: "/gigantografias-en-ayacucho" },
          { label: "Tarjetas de presentación: medidas y errores", href: "/blog/imprenta-btl/tarjetas-de-presentacion-medidas-y-errores" },
        ],
      },
      {
        h2: "Cómo se hace el pedido desde Ayacucho",
        pasos: [
          { titulo: "Nos escribes por WhatsApp", texto: "qué necesitas, la medida, la cantidad y para cuándo. Si ya tienes el arte, mándalo en PDF." },
          { titulo: "Te cotizamos", texto: "la impresión y el flete a Ayacucho por separado, con la fecha de entrega." },
          { titulo: "Apruebas el arte", texto: "revisamos el archivo en preprensa (resolución, sangrado, color) y no imprimimos sin tu visto bueno." },
          { titulo: "Producimos en Ica y despachamos", texto: "el pedido sale por agencia de carga a Ayacucho y te avisamos cuando sale." },
          { titulo: "Recibes con factura", texto: "cada pedido sale con su comprobante." },
        ],
      },
      {
        h2: "Digital u offset: lo decide la cantidad",
        parrafo:
          "Por debajo de unos cientos de ejemplares, la impresión digital sale más barata y se entrega antes, porque no hay que preparar planchas. A partir de ahí el offset empieza a compensar y el costo por unidad baja cuanto más subes. Si no sabes en qué punto está tu pedido, dinos cuántos necesitas y te decimos cuál conviene.",
        tabla: {
          cabeceras: ["Tiraje", "Conviene", "Por qué"],
          filas: [
            ["Decenas o pocos cientos", "Digital", "Sin costo de arranque; ideal para pruebas"],
            ["Miles", "Offset", "El costo por unidad baja con el volumen"],
          ],
          nota: "En pedidos grandes recomendamos una prueba de color impresa antes del tiraje completo: cuesta poco y evita descubrir un tono equivocado con mil ejemplares hechos.",
        },
      },
      {
        h2: "El envío a Ayacucho",
        parrafo: ENVIO_AYACUCHO,
        nota: {
          titulo: "Si es para una fecha fija",
          texto: "Semana Santa, el Carnaval, el aniversario de tu empresa o una feria: escríbenos con anticipación, porque al tiempo de producción se suma el del transporte.",
        },
      },
      {
        h2: "Para quién imprimimos en Ayacucho",
        parrafo: "Ya trabajamos con empresas de Ayacucho. Estos son los pedidos más comunes por tipo de negocio:",
        bullets: [
          { titulo: "Comercios y tiendas", texto: "volantes de campaña, tarjetas, etiquetas de producto y stickers de vitrina." },
          { titulo: "Colegios, institutos y academias", texto: "folletos de matrícula, afiches y papelería institucional." },
          { titulo: "Clínicas y consultorios", texto: "tarjetas, recetarios, folletos de servicios y señalética de interior." },
          { titulo: "Hoteles, restaurantes y agencias de turismo", texto: "cartas, folletos para el turista y tarjetas, sobre todo antes de Semana Santa." },
          { titulo: "Constructoras e inmobiliarias", texto: "brochures del proyecto, volantes y gigantografías para la obra." },
        ],
      },
      {
        h2: "Cómo preparar tu archivo",
        bullets: [
          { titulo: "PDF en alta resolución", texto: "también aceptamos AI o PSD. Con sangrado incluido, para que el corte no deje bordes blancos." },
          { titulo: "Colores en CMYK", texto: "un archivo en RGB cambia de tono al imprimirse." },
          { titulo: "Textos convertidos a curvas", texto: "así no se cambia la tipografía si no la tenemos instalada." },
          { titulo: "Si no está listo", texto: "lo revisamos en preprensa y te decimos qué falta. Si prefieres no lidiar con eso, diseñamos la pieza nosotros." },
        ],
      },
    ],
    faq: [
      faqLocal("tus impresos"),
      { q: "¿Cuánto cuesta el envío a Ayacucho?", a: "Depende del peso y del volumen del pedido. Lo cotizamos aparte, junto con la impresión, para que veas el total antes de aprobar." },
      { q: "¿Cuánto demora un pedido a Ayacucho?", a: "Depende del producto, de la cantidad y de cuándo se apruebe el arte. Al cotizar te damos la fecha de entrega en Ayacucho, que ya suma producción y transporte." },
      { q: "¿Envían a Huanta u otras provincias de Ayacucho?", a: "Sí, a donde llegue la agencia de carga. El flete cambia según el destino y te lo decimos al cotizar." },
      { q: "¿Hay una cantidad mínima?", a: "Depende del producto y de la técnica: digital para tirajes cortos, offset cuando el volumen baja el costo por unidad. Al cotizar te decimos el mínimo de cada opción." },
      { q: "¿Diseñan el material?", a: "Sí. Si no tienes el arte lo diseñamos, y lo apruebas antes de imprimir." },
      { q: "¿Qué formatos de archivo aceptan?", a: "PDF, AI o PSD. Preferimos PDF de alta resolución con sangrado incluido." },
      FAQ_FACTURA,
    ],
    cierre: { h2: "Tu impresión, con fecha y factura", cta: "Cotiza tu impresión" },
    lecturas: [
      { label: "Imprenta en Ica: el servicio completo", href: "/servicios/imprenta" },
      { label: "Cuánto cuesta un millar de volantes", href: "/blog/imprenta-btl/cuanto-cuesta-un-millar-de-volantes-en-peru" },
      { label: "Tarjetas de presentación: medidas y errores", href: "/blog/imprenta-btl/tarjetas-de-presentacion-medidas-y-errores" },
    ],
  },

  // ─────────────────────────────────────────────────────────── GIGANTOGRAFÍAS
  {
    slug: "gigantografias-en-ayacucho",
    ciudad: "ayacucho",
    ciudadNombre: "Ayacucho",
    servicio: "gigantografias",
    nombre: "Gigantografías en Ayacucho",
    actualizado: "2026-11-23",
    metaTitle: "Gigantografías en Ayacucho: Banners y Vinil | Suggestion",
    metaDescription:
      "Gigantografías, banners, vinil y stickers para empresas de Ayacucho. Lona para exterior, con ojales o bastidor, y envío por agencia de carga desde Ica.",
    h1: "Gigantografías y banners para Ayacucho",
    hero:
      "Lona, vinil y stickers de gran formato para fachadas, ferias y eventos en Ayacucho. Los producimos en Ica con el acabado listo para colgar y los enviamos por agencia de carga.",
    enCorto: [
      "Imprimimos gigantografías, banners, vinil adhesivo, vinil microperforado y stickers para empresas de Ayacucho.",
      "La pieza sale lista para colocar, con ojales, refuerzo, bolsillo o bastidor. La instala tu equipo o un instalador de allá.",
      "El rollo más común mide 3.20 m de ancho; si la pieza es más grande en los dos lados, se imprime en partes que se unen.",
      "Despachamos por agencia de carga a Ayacucho y el flete se cotiza aparte.",
    ],
    cta: "Cotiza tu gigantografía",
    tema: "una gigantografía con envío a Ayacucho",
    especificaciones: ["Medida (ancho x alto)", "Dónde va a ir (interior o exterior)", "Material (si lo sabes)", "Acabado: ojales, bastidor o bolsillo", "Cantidad", "Ciudad de entrega en Ayacucho"],
    incluye: [
      { titulo: "Lona para exterior", texto: "frontlit, con refuerzo y ojales." },
      { titulo: "Vinil adhesivo y microperforado", texto: "para vidrieras, paredes y vehículos." },
      { titulo: "Stickers", texto: "para productos, vitrinas y campañas." },
      { titulo: "Banderolas y roll-ups", texto: "en textil, livianos para ferias." },
      { titulo: "Acabado listo para colgar", texto: "ojales, refuerzo, bolsillo o bastidor." },
    ],
    cotizador: "gigantografias",
    secciones: [
      {
        h2: "Qué material elegir según dónde va",
        parrafo:
          "En Ayacucho una pieza de exterior recibe sol fuerte casi todo el año y lluvias de diciembre a marzo. Para fachada, lona con tinta para exterior y refuerzo en el borde; una tinta de interior al sol se destiñe en semanas.",
        tabla: {
          cabeceras: ["Material", "Dónde funciona", "A tener en cuenta"],
          filas: [
            ["Lona frontlit", "Fachadas, ferias y obras", "Lleva refuerzo y ojales donde toque sujetar"],
            ["Vinil adhesivo", "Vidrios, paredes y vehículos", "Se pega sobre superficie lisa y limpia"],
            ["Vinil microperforado", "Ventanas que no deben quedar a oscuras", "Se ve desde afuera y deja pasar luz"],
            ["Rígidos (foam, PVC)", "Señalética de interior", "Mejor con estructura o en interior"],
            ["Textil", "Banderolas y roll-ups", "Más liviano para transportar"],
          ],
        },
      },
      {
        h2: "Medidas más pedidas y el ancho del rollo",
        parrafo:
          "Las medidas que más se piden son 1 × 2 m, 2 × 1 m, 3 × 1 m y 1 × 3 m. El material viene en rollos de 3.20 m de ancho, así que una pieza que pasa esa medida en los dos lados se imprime en partes que se unen. Antes de pedir, mide el espacio real de la fachada: las tuberías, los medidores y los avisos que ya están ahí no se mueven.",
        enlaces: [{ label: "Guía de gigantografías: medidas, material y precio por m²", href: "/blog/imprenta-btl/gigantografias-medidas-materiales-precios" }],
      },
      {
        h2: "Acabados: que llegue lista para colgar",
        parrafo: "No instalamos en Ayacucho. Por eso la pieza sale con el acabado que necesita tu equipo o un instalador local para colocarla:",
        bullets: [
          { titulo: "Ojales", texto: "argollas metálicas en el borde para amarrar la lona a una estructura." },
          { titulo: "Refuerzo perimetral", texto: "el borde doblado y sellado para que no se rasgue con el viento." },
          { titulo: "Bolsillo", texto: "una costura para pasar un tubo, típica en banderolas y colgantes." },
          { titulo: "Bastidor", texto: "un marco que deja la pieza tensa. Sube el volumen del envío: en piezas grandes conviene evaluar si el marco se arma allá." },
        ],
      },
      {
        h2: "El envío a Ayacucho",
        parrafo: ENVIO_AYACUCHO,
        nota: {
          titulo: "Cómo conviene que viaje",
          texto: "La lona y el vinil viajan enrollados: doblados, se marcan. Los rígidos van protegidos. Si la pieza es para una fecha fija, como una inauguración o una feria, pídela con margen para el transporte.",
        },
      },
      {
        h2: "Para qué la usan las empresas de Ayacucho",
        bullets: [
          { titulo: "Fachadas de tiendas y oficinas", texto: "el nombre y lo que vendes, legible desde la otra vereda." },
          { titulo: "Ferias y exposiciones", texto: "fondos, banderolas y roll-ups que se arman y desarman en minutos." },
          { titulo: "Inauguraciones y eventos", texto: "el banner de la entrada y el fondo para las fotos." },
          { titulo: "Obras y proyectos inmobiliarios", texto: "lonas para el cerco de obra con el nombre del proyecto." },
          { titulo: "Temporadas altas", texto: "Semana Santa y el Carnaval, cuando el comercio y el turismo quieren hacerse ver." },
        ],
      },
    ],
    faq: [
      { q: "¿Instalan la gigantografía en Ayacucho?", a: "No. La enviamos lista para colocar, con ojales, refuerzo, bolsillo o bastidor, según lo que pidas. La instalación la hace tu equipo o un instalador local." },
      { q: "¿Qué material es mejor para exterior?", a: "Lona frontlit con tinta para exterior y refuerzo en el borde. Aguanta temporadas completas al sol y a la lluvia; con materiales de interior a la intemperie, se destiñe en semanas." },
      { q: "¿Qué medida me conviene?", a: "La que entra en el espacio real, medido en el lugar. Las más pedidas son 1 × 2 m, 2 × 1 m, 3 × 1 m y 1 × 3 m. Si la pieza pasa los 3.20 m en los dos lados, se imprime en partes." },
      { q: "¿Cuánto cuesta el envío a Ayacucho?", a: "Depende del tamaño y del peso de la pieza. Lo cotizamos aparte, junto con la gigantografía, para que veas el total antes de aprobar." },
      { q: "¿Imprimen vinil para vidrieras y stickers?", a: "Sí: vinil adhesivo para vidrios, paredes y vehículos; vinil microperforado para ventanas que no deben quedar a oscuras; y stickers para productos y vitrinas." },
      faqLocal("la gigantografía"),
      FAQ_FACTURA,
    ],
    cierre: { h2: "Tu gigantografía, lista para colgar en Ayacucho", cta: "Cotiza tu gigantografía" },
    lecturas: [
      { label: "Gigantografías: el servicio completo", href: "/servicios/gigantografias" },
      { label: "Gigantografías: medidas, material y precio por m²", href: "/blog/imprenta-btl/gigantografias-medidas-materiales-precios" },
      { label: "Panel, valla, bicivalla o vehículo rotulado", href: "/blog/imprenta-btl/panel-valla-bicivalla-o-vehiculo-rotulado" },
    ],
  },

  // ─────────────────────────────────────────────────────────── MERCHANDISING
  {
    slug: "merchandising-en-ayacucho",
    ciudad: "ayacucho",
    ciudadNombre: "Ayacucho",
    servicio: "merchandising",
    nombre: "Merchandising en Ayacucho",
    actualizado: "2026-11-23",
    metaTitle: "Merchandising en Ayacucho: Polos, Gorras y Tazas",
    metaDescription:
      "Polos, gorras, tazas personalizadas y regalos corporativos para empresas de Ayacucho. Bordado, serigrafía, DTF o sublimado, con envío desde Ica.",
    h1: "Merchandising para empresas de Ayacucho",
    hero:
      "Polos, gorras, tazas y regalos con tu marca para tu equipo, tus clientes o tu próximo evento en Ayacucho. Te ayudamos a elegir la pieza y la técnica, producimos en Ica y lo enviamos.",
    enCorto: [
      "Polos, gorras, tazas, llaveros, libretas y regalos corporativos con tu marca, para empresas de Ayacucho.",
      "La técnica depende de la cantidad y de la tela: bordado, serigrafía, DTF o sublimado. El sublimado no funciona sobre algodón ni sobre telas oscuras.",
      "La cantidad mínima cambia según el producto y la técnica: en la cotización te decimos el mínimo de cada opción.",
      "Apruebas el arte antes de producir y despachamos a Ayacucho por agencia de carga; el flete va aparte.",
    ],
    cta: "Pide tu cotización",
    tema: "merchandising con envío a Ayacucho",
    especificaciones: ["Qué producto necesito", "Cantidad", "Cómo va la marca (si lo sabes)", "Para qué es", "Ciudad de entrega en Ayacucho", "Para cuándo lo necesito"],
    incluye: [
      { titulo: "Polos y gorras", texto: "para tu equipo, ferias y campañas." },
      { titulo: "Tazas y utilitarios", texto: "tazas, libretas y artículos de oficina." },
      { titulo: "Llaveros y detalles", texto: "en acrílico, madera o con foto." },
      { titulo: "Regalos corporativos", texto: "para fin de año y aniversarios." },
      { titulo: "Arte de la aplicación", texto: "lo preparamos y lo apruebas antes de producir." },
    ],
    secciones: [
      {
        h2: "Qué producimos",
        sub: [
          { h3: "Polos y gorras", texto: "Para el equipo de tu empresa, para el personal de una feria o para regalar en una campaña. La prenda se elige antes que la técnica: el color y la tela deciden qué técnica se puede usar." },
          { h3: "Tazas y utilitarios", texto: "Tazas personalizadas, libretas y artículos de oficina que se quedan en el escritorio de tu cliente." },
          { h3: "Llaveros y detalles", texto: "El detalle de bajo costo para campañas y fechas especiales: acrílico, madera o con foto." },
          { h3: "Regalos corporativos", texto: "Para clientes y equipo en fin de año, aniversarios o cierres de proyecto." },
        ],
      },
      {
        h2: "Qué técnica conviene",
        parrafo: "Cada técnica tiene su punto fuerte. La que conviene depende de cuántas piezas necesitas, de la tela y de cuántos colores tiene tu logo:",
        tabla: {
          cabeceras: ["Técnica", "Qué consigue", "Cuándo conviene"],
          filas: [
            ["Bordado", "El acabado más serio y duradero", "Logos pequeños en el pecho o en la gorra"],
            ["DTF o vinil textil", "Full color sin costo de arranque", "Pedidos cortos o diseños con muchos colores"],
            ["Serigrafía", "El costo por unidad más bajo en volumen", "Muchas piezas con pocos colores planos"],
            ["Sublimado", "Diseño que cubre toda la prenda", "Solo tela clara de poliéster"],
          ],
          nota: "Si el polo de tu equipo es de algodón y de color oscuro, el sublimado queda descartado de entrada.",
        },
        enlaces: [{ label: "Polos personalizados para empresa: las cuatro técnicas", href: "/blog/imprenta-btl/polos-personalizados-para-empresa" }],
      },
      {
        h2: "Cómo se hace el pedido desde Ayacucho",
        pasos: [
          { titulo: "Nos cuentas para qué es", texto: "regalo de clientes, polos del equipo o una feria: eso decide la pieza." },
          { titulo: "Elegimos pieza y técnica", texto: "y te decimos el mínimo de cada opción para que compares con tu presupuesto." },
          { titulo: "Apruebas el arte", texto: "cómo va la marca, en qué tamaño y en qué lugar de la pieza." },
          { titulo: "Producimos en Ica y despachamos", texto: "por agencia de carga a Ayacucho, con el flete cotizado aparte." },
        ],
      },
      {
        h2: "Fechas en las que conviene pedir con tiempo",
        parrafo:
          "En Ayacucho la demanda de merchandising se junta en pocas fechas, y al tiempo de producción se suma el del transporte. Lo que más retrasa un pedido casi nunca es la producción: es la aprobación del arte.",
        bullets: [
          { titulo: "Carnaval y Semana Santa", texto: "polos y gorras para el personal y regalos para el turista." },
          { titulo: "Ferias y aniversarios", texto: "souvenirs para repartir en el stand y regalos para clientes." },
          { titulo: "Fin de año", texto: "regalos corporativos. Conviene elegir a mediados de noviembre, cuando todavía hay stock de los artículos más pedidos." },
        ],
        enlaces: [{ label: "Regalos corporativos de Navidad: qué regalar y cuándo pedir", href: "/blog/imprenta-btl/regalos-corporativos-de-navidad" }],
      },
      {
        h2: "Cómo elegir la pieza",
        bullets: [
          { titulo: "Piensa dónde va a terminar", texto: "una taza vive en el escritorio; un llavero, en el bolsillo; un lapicero barato, en el cajón." },
          { titulo: "Divide por personas, no por unidades", texto: "el presupuesto se reparte entre las personas a las que vas a llegar. Si el monto por persona sale muy bajo, conviene regalar a menos gente y mejor." },
          { titulo: "La marca, discreta", texto: "una pieza que la gente usa en público lleva el logo pequeño; si es enorme, se queda en la casa." },
        ],
      },
    ],
    faq: [
      { q: "¿Cuál es la cantidad mínima?", a: "Varía según el producto y la técnica: bordar tiene un mínimo distinto al de una impresión o un grabado. En la cotización te decimos el mínimo de cada opción." },
      { q: "¿Qué técnica es mejor para los polos de mi equipo?", a: "Para un logo pequeño en el pecho que dure, el bordado. Para muchas piezas con pocos colores, la serigrafía. El sublimado solo sirve en tela clara de poliéster." },
      { q: "¿Hacen tazas personalizadas?", a: "Sí, tazas con la marca o con un diseño propio, para regalar a clientes o al equipo. La cantidad mínima te la decimos al cotizar." },
      { q: "¿Preparan el diseño?", a: "Sí. Preparamos el arte de la aplicación (cómo va la marca, en qué tamaño y dónde) y lo apruebas antes de producir." },
      { q: "¿Cuánto demora un pedido a Ayacucho?", a: "Depende del producto, de la cantidad y de cuándo se apruebe el arte. Al cotizar te damos la fecha de entrega en Ayacucho, con el transporte incluido en el cálculo." },
      faqLocal("el merchandising"),
      FAQ_FACTURA,
    ],
    cierre: { h2: "Tu marca en manos de tus clientes en Ayacucho", cta: "Pide tu cotización" },
    lecturas: [
      { label: "Merchandising: el servicio completo", href: "/servicios/merchandising" },
      { label: "Merchandising corporativo: qué regalar", href: "/blog/imprenta-btl/merchandising-corporativo-que-regalar" },
      { label: "Polos personalizados para empresa", href: "/blog/imprenta-btl/polos-personalizados-para-empresa" },
    ],
  },

  // ─────────────────────────────────────────────────────────── MATERIAL POP
  {
    slug: "material-pop-en-ayacucho",
    ciudad: "ayacucho",
    ciudadNombre: "Ayacucho",
    servicio: "material-pop",
    nombre: "Material POP en Ayacucho",
    actualizado: "2026-11-23",
    metaTitle: "Material POP en Ayacucho para Tiendas y Marcas | Suggestion",
    metaDescription:
      "Displays, exhibidores, colgantes, banderolas y roll-ups para tiendas y marcas en Ayacucho. Material según cuánto debe durar y envío desde Ica.",
    h1: "Material POP para tiendas y marcas en Ayacucho",
    hero:
      "Displays, exhibidores, colgantes y banderolas para que tu producto se vea en el punto de venta. Elegimos el material según cuánto tiene que durar, producimos en Ica y lo enviamos a Ayacucho para que lo arme tu equipo.",
    enCorto: [
      "Displays, exhibidores, colgantes, banderolas, roll-ups y cartelería para el punto de venta, para tiendas y marcas de Ayacucho.",
      "El material se elige por cuánto tiene que durar: cartón corrugado para semanas, PVC y foam para meses, acrílico, metal o madera para años.",
      "No instalamos en Ayacucho: las piezas viajan por agencia de carga para que las arme tu equipo, y el flete se cotiza aparte.",
      "Si vas a repartir piezas en varias tiendas o distribuidores de la región, cotizamos el lote completo.",
    ],
    cta: "Pide tu cotización",
    tema: "material POP con envío a Ayacucho",
    especificaciones: ["Qué pieza necesito", "Medida o espacio disponible", "Material (si lo sabes)", "Cantidad", "Ciudad de entrega en Ayacucho", "Para cuándo lo necesito"],
    incluye: [
      { titulo: "Displays y exhibidores", texto: "de mostrador o de piso." },
      { titulo: "Colgantes y banderolas", texto: "sobre el producto, visibles desde la puerta." },
      { titulo: "Roll-ups", texto: "para ferias y entradas de tienda." },
      { titulo: "Cartelería y señalética", texto: "en foam, PVC o acrílico." },
      { titulo: "Diseño según el espacio", texto: "con las medidas reales de la tienda." },
    ],
    secciones: [
      {
        h2: "Qué piezas producimos",
        sub: [
          { h3: "Displays y exhibidores", texto: "Ordenan el producto y lo ponen al frente, en el mostrador o en el piso de la tienda." },
          { h3: "Colgantes y banderolas", texto: "Cuelgan sobre la exhibición: se ven desde la puerta y marcan dónde está cada producto." },
          { h3: "Roll-ups", texto: "Se arman en un minuto para una feria, una activación o la entrada de la tienda." },
          { h3: "Cartelería y señalética", texto: "Precios, promociones y señales de interior en foam, PVC o acrílico." },
        ],
      },
      {
        h2: "El material decide cuánto dura y cuánto cuesta",
        parrafo: "La pregunta que ordena el presupuesto es cuánto tiempo tiene que estar en pie la pieza, y en qué condiciones. Elegir primero por precio suele terminar en una pieza que no aguanta la campaña.",
        tabla: {
          cabeceras: ["Material", "Cuánto aguanta", "Cuándo conviene"],
          filas: [
            ["Cartón corrugado", "Semanas", "Campañas cortas, lanzamientos y muchas piezas"],
            ["PVC y foam", "Meses", "Cartelería de interior que rota poco"],
            ["Acrílico", "Años", "Piezas de marca permanentes"],
            ["Metal y madera", "Años", "Mobiliario y espacios de marca dedicados"],
          ],
        },
      },
      {
        h2: "Piezas pensadas para viajar y armarse allá",
        parrafo:
          "Como no instalamos en Ayacucho, la pieza tiene que llegar bien y armarse sin nosotros. Antes de producir conviene medir el espacio real de la tienda: el plano y lo que hay de verdad rara vez coinciden.",
        bullets: [
          { titulo: "Que se arme sin herramientas", texto: "si una pieza necesita un manual para armarse, se queda en el almacén." },
          { titulo: "Que viaje plana", texto: "las piezas que se pliegan o se desarman ocupan menos y bajan el flete." },
          { titulo: "Que entre en el espacio", texto: "una pieza que estorba el paso la retiran a la semana." },
        ],
      },
      {
        h2: "Para marcas con puntos de venta en la región",
        parrafo:
          "Si tu marca vende en varias tiendas, bodegas o distribuidores de Ayacucho, el mismo diseño se produce en lote y se despacha junto. Así cada punto de venta recibe la misma pieza, en la misma fecha.",
      },
      {
        h2: "El envío a Ayacucho",
        parrafo: ENVIO_AYACUCHO,
        enlaces: [{ label: "Material POP: qué piezas funcionan en el punto de venta", href: "/blog/imprenta-btl/material-pop-punto-de-venta" }],
      },
    ],
    faq: [
      { q: "¿Qué es el material POP?", a: "Son las piezas de publicidad que van en el punto de venta (POP viene de «point of purchase»): displays, exhibidores, colgantes, banderolas, roll-ups y cartelería." },
      { q: "¿Instalan en las tiendas de Ayacucho?", a: "No. Las piezas viajan por agencia de carga, pensadas para que las arme tu equipo." },
      { q: "¿Qué material conviene?", a: "Depende de cuánto tiene que durar: cartón corrugado para semanas, PVC y foam para meses, acrílico, metal o madera para años." },
      { q: "¿Hay una cantidad mínima?", a: "Depende de la pieza y de la técnica: al cotizar te decimos el mínimo de cada opción. Para varios puntos de venta suele convenir producir en lote." },
      { q: "¿Diseñan la pieza o solo la producen?", a: "Las dos cosas. La diseñamos con las medidas reales del espacio, o producimos tu diseño si ya lo tienes." },
      { q: "¿Cuánto cuesta el envío a Ayacucho?", a: "Depende del peso y del volumen de las piezas. Lo cotizamos aparte, junto con la producción, para que veas el total antes de aprobar." },
      faqLocal("el material POP"),
    ],
    cierre: { h2: "Que tu producto se vea en Ayacucho", cta: "Pide tu cotización" },
    lecturas: [
      { label: "Material POP: el servicio completo", href: "/servicios/material-pop" },
      { label: "Material POP: qué piezas funcionan en el punto de venta", href: "/blog/imprenta-btl/material-pop-punto-de-venta" },
    ],
  },
];

export const getServicioCiudad = (slug: string): ServicioCiudad | undefined => SERVICIOS_CIUDAD.find((s) => s.slug === slug);
export const serviciosDeCiudad = (ciudad: string): ServicioCiudad[] => SERVICIOS_CIUDAD.filter((s) => s.ciudad === ciudad);
