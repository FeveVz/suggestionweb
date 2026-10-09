/**
 * Portafolio de producción BTL y ATL.
 *
 * Qué es y qué NO es. Esta página prueba capacidad de EJECUCIÓN: dirección,
 * coordinación, montaje y logística de eventos. No prueba resultados
 * comerciales: eso vive en /casos, con su inversión, su período y su cifra.
 *
 * Son dos servicios distintos y por eso son dos páginas distintas. El
 * relanzamiento de Mitsubishi aparece en las dos: aquí por cómo se produjo,
 * en el caso de Autoniza por lo que vendió. Ninguna repite la cifra de la
 * otra, y las dos se enlazan.
 *
 * Fuente: Notion «Portafolio BTL | Suggestion», 22 piezas entre febrero de
 * 2024 y mayo de 2026. El reto y la solución de cada pieza vienen de ahí;
 * aquí están reescritos sin el inflado de agencia del original.
 *
 * El campo `detalle` lo dictó el owner el 9 de octubre de 2026: promotores,
 * horas de montaje, aforos, datos recogidos y unidades en piso. No sale del
 * Notion —el Notion no registra un solo número— y por eso no se inventa.
 *
 * Imágenes: generadas por scripts/portafolio-imagenes.mjs desde la
 * exportación de Notion, sin recortar y a dos alturas (880 y 440 px). Las
 * medidas de cada una viven en portafolio-fotos.ts, que es un archivo
 * generado: este solo guarda el texto.
 */

import { FOTOS_PORTAFOLIO, fotoPortafolio } from "./portafolio-fotos";

export type PiezaPortafolio = {
  slug: string;
  /** Titular: qué se hizo, no qué bonito quedó. */
  titular: string;
  cliente: string;
  /** Para ordenar. Vacío cuando el Notion no lo registró. */
  fecha: string;
  fechaLabel: string;
  tipo: string;
  sector: "Automotriz" | "Inmobiliario" | "Mixto";
  reto: string;
  hicimos: string;
  /** El dato de oficio: lo que solo sabe quien estuvo ahí. */
  detalle?: string;
  /** Cuando el mismo trabajo tiene un caso con resultado medido. */
  caso?: { label: string; href: string };
  /**
   * Texto alternativo por defecto de las fotos del evento. Lo llevan todas
   * las que no tienen uno propio: describen la misma activación, así que
   * repetirlo es más honesto que inventar veinte descripciones distintas.
   */
  altBase: string;
  /** Alt propio para las primeras fotos, donde sí se escribió uno. */
  alts?: string[];
};

export type FotoPieza = { src: string; srcChica: string; alt: string; w: number; h: number };

/**
 * Compone las fotos de una pieza cruzando el copy con el manifiesto que
 * genera scripts/portafolio-imagenes.mjs. El número de fotos no se escribe
 * aquí: lo decide lo que haya en la exportación, así que añadir fotos a un
 * evento es volver a correr el script, no editar este archivo.
 */
export const fotosDe = (p: PiezaPortafolio): FotoPieza[] =>
  (FOTOS_PORTAFOLIO[p.slug] ?? []).map(([w, h], i) => ({
    src: fotoPortafolio(p.slug, i + 1),
    srcChica: fotoPortafolio(p.slug, i + 1, true),
    alt: p.alts?.[i] ?? p.altBase,
    w,
    h,
  }));

export const PORTAFOLIO: PiezaPortafolio[] = [
  {
    slug: "relanzamiento-mitsubishi-autoniza",
    titular: "Un relanzamiento de tienda que trajo a ocho canales de prensa",
    cliente: "Autoniza · Mitsubishi Motors",
    fecha: "2026-05-22",
    fechaLabel: "22 de mayo",
    tipo: "Relanzamiento",
    sector: "Automotriz",
    reto:
      "El problema no era el producto ni el precio: en Ica no sabían que la tienda existía. Sin reconocimiento no hay visitas, y sin visitas no hay nada que cerrar.",
    hicimos:
      "Producción completa de un relanzamiento de tienda, con la convocatoria apuntando a dos públicos a la vez: autoridad local y prospectos reales con intención de compra. Dirección del evento, coordinación de protocolo, montaje del showroom y gestión de la prensa.",
    detalle:
      "Invitar al alcalde cambió la naturaleza del evento: dejó de ser una apertura comercial y pasó a ser noticia local. Ocho canales de prensa cubrieron la jornada. Esa difusión no se compró, se produjo.",
    caso: { label: "El resultado comercial, en el caso de Autoniza", href: "/casos/autoniza-eventos" },
    altBase: "Relanzamiento de la tienda Mitsubishi de Autoniza en Ica, producido por Suggestion",
    alts: [
      "Fachada iluminada de la tienda Mitsubishi FUSO de Autoniza durante el relanzamiento nocturno en Ica",
      "Unidad Mitsubishi cubierta y con moño, lista para el destape en el relanzamiento de tienda",
      "Autoridad local en el estrado durante el relanzamiento de la tienda Mitsubishi de Autoniza en Ica",
      "Fachada del local Mitsubishi FUSO iluminada durante el relanzamiento, en Ica",
      "Invitados y autoridad local en el relanzamiento de la tienda Mitsubishi",
      "Brindis de los invitados en el relanzamiento de la tienda Mitsubishi de Autoniza",
      "Sala del local Mitsubishi preparada para el relanzamiento, en Ica",
      "Invitados en el relanzamiento de la tienda Mitsubishi de Autoniza",
      "Asistentes recorriendo el local durante el relanzamiento de Mitsubishi",
      "Asesores mostrando el motor de una unidad Mitsubishi en el relanzamiento",
      "Panel de Mitsubishi Motors montado para el relanzamiento de la tienda",
      "Invitados y equipo en el relanzamiento de la tienda Mitsubishi, en Ica",
      "Equipo de Suggestion atendiendo el relanzamiento de la tienda Mitsubishi",
      "Presentación en el atril de Mitsubishi durante el relanzamiento de tienda",
      "Entrega de obsequios junto a la unidad Mitsubishi en el relanzamiento",
      "Zona FUSO del local iluminada durante el relanzamiento de la tienda",
      "Invitados ante el panel de modelos Mitsubishi en el relanzamiento",
      "Anfitriona junto a la unidad Mitsubishi con moño en el relanzamiento",
    ],
  },
  {
    slug: "mercado-santo-domingo-dfsk",
    titular: "Captación a pie de puesto en el mercado de Santo Domingo",
    cliente: "DFSK · Pacífico Motors",
    fecha: "2025-07-09",
    fechaLabel: "julio 2025",
    tipo: "Activación de marca",
    sector: "Automotriz",
    reto:
      "Hacer visible la marca y alimentar el embudo donde de verdad hay tránsito: un mercado en hora punta, no una sala de ventas vacía.",
    hicimos:
      "Montaje de módulos en el mercado y equipo de promotoría abordando a pie de puesto, con registro de datos en el momento. El perfil del comprador de mercado se cruzó con la oferta de la marca antes de salir a campo, para que el abordaje tuviera argumento y no un volante.",
    detalle:
      "Cuatro promotores y un supervisor, tres horas de mercado, 167 datos. Son 56 registros por hora sostenidos: ese ritmo no lo da el volante, lo da salir con un argumento preparado para ese comprador.",
    altBase: "Activación de marca de DFSK en el mercado de Santo Domingo, en Ica",
    alts: [
      "Módulo de DFSK montado en la calle del mercado de Santo Domingo, entre los puestos",
      "Equipo de promotoría de Suggestion captando datos para DFSK en el mercado de Santo Domingo",
      "Activación de marca de DFSK y Pacífico Motors en zona de alto tránsito comercial",
      "Promotora abordando al conductor de un mototaxi en el mercado de Santo Domingo",
    ],
  },
  {
    slug: "ahorra-o-nunca-despliegue",
    titular: "Una campaña impresa desplegada en todos los soportes del local",
    cliente: "Derco Center · Pacífico Motors",
    fecha: "2025-06-20",
    fechaLabel: "junio 2025",
    tipo: "Difusión de campaña",
    sector: "Automotriz",
    reto:
      "Una promoción con fecha de caducidad no se comunica con una pieza: se comunica con un sistema. Si el cliente ve la oferta en la fachada y no la vuelve a ver adentro, la olvida entre la puerta y el mostrador.",
    hicimos:
      "Producción e instalación del sistema gráfico completo de la campaña: gigantografía de fachada, colgantes de techo en sala de ventas, banderolas y roll-ups, con el mismo mensaje en cada punto del recorrido del visitante. El despliegue fue regional; estas fotos son de uno de los locales.",
    detalle:
      "Es el mismo arte impreso en varios formatos y ninguno es un reescalado del anterior: la pieza de fachada se arma para leerse desde la avenida y las de sala para leerse a la altura de la vista, caminando. Reescalar en vez de rearmar es lo que produce ese cartel que nadie entiende a tres metros.",
    altBase: "Piezas impresas de la campaña Ahorra o Nunca instaladas en el concesionario",
    alts: [
      "Gigantografía de la campaña Ahorra o Nunca instalada en la fachada de vidrio del concesionario",
      "Colgantes, banderolas y roll-ups de la campaña Ahorra o Nunca instalados en la sala de ventas",
    ],
  },
  {
    slug: "changan-cs15-presentacion",
    titular: "Un lanzamiento de auto montado en el pasillo de un centro comercial",
    cliente: "Changan Motors",
    fecha: "2025-06-09",
    fechaLabel: "junio 2025",
    tipo: "Lanzamiento de producto",
    sector: "Automotriz",
    reto:
      "Presentar un modelo nuevo fuera del concesionario, en un pasillo por el que la gente pasa camino a otra cosa. Sin asesor al lado y sin folleto en la mano, la unidad tiene que explicarse sola.",
    hicimos:
      "Puesta en escena de la unidad en el centro comercial —corona de PVC, vinilo de piso y cordón de acceso— y producción de la ficha impresa que va sobre el techo: nombre del modelo, tres características y un QR para quien quiera seguir.",
    detalle:
      "La ficha de techo es la que trabaja cuando no hay nadie. Está a la altura de los ojos del que pasa, dice tres cosas y ni una más, y el QR recoge al interesado sin obligarlo a entrar a ningún sitio ni a dar la cara.",
    altBase: "Presentación del Changan CS15 montada en un centro comercial",
    alts: [
      "Unidad Changan CS15 con corona de PVC y cordón de acceso en el pasillo de un centro comercial",
      "Ficha impresa sobre el techo del Changan CS15 con las características del modelo y un código QR",
      "Puesta en escena del Changan CS15 en centro comercial, con vinilo de piso y moño de PVC",
    ],
  },
  {
    slug: "caballos-de-paso-2025",
    titular: "Autos y lotes dentro del circuito de caballos de paso",
    cliente: "Pacífico Motors · Urb. La Reserva",
    fecha: "2025-06-06",
    fechaLabel: "junio 2025",
    tipo: "Activación de marca",
    sector: "Mixto",
    reto:
      "Público A/B y tradicionalista, dos ofertas distintas —vehículo y lote— y un evento con códigos propios que no perdona la intromisión.",
    hicimos:
      "Tres días de exhibición vehicular y punto de información inmobiliaria colocados dentro del circuito, no en la puerta. La marca entra como parte del ambiente, que es la única forma de que ese público no levante la guardia.",
    detalle:
      "Segunda edición. El formato se probó en 2024 y se repitió con el montaje ya resuelto, que es cuando una activación deja de ser un experimento.",
    altBase: "Exhibición de vehículos y punto inmobiliario en el campeonato de caballos de paso de Ica 2025",
    alts: [
      "Exhibición de vehículos y punto inmobiliario en el campeonato de caballos de paso de Ica 2025",
      "Promotora atendiendo a los asistentes bajo la carpa del campeonato de caballos de paso 2025",
      "Dinámica con figuras gigantes de auto y llave en el campeonato de caballos de paso 2025",
      "Maquinaria de la Serie 2 exhibida en el campeonato de caballos de paso 2025",
      "Anfitriona entregando material informativo en el circuito de caballos de paso 2025",
      "Punto de información inmobiliaria montado en el campeonato de caballos de paso 2025",
      "Equipo de Pacífico Motors en el circuito del campeonato de caballos de paso 2025",
    ],
  },
  {
    slug: "grifo-repsol-jac",
    titular: "La flota JAC en el tiempo muerto del grifo",
    cliente: "JAC Motors",
    fecha: "2025-05-26",
    fechaLabel: "mayo 2025",
    tipo: "Activación de marca",
    sector: "Automotriz",
    reto:
      "El conductor que espera en un grifo está quieto, aburrido y con el vehículo en la cabeza. Es tránsito cautivo y casi nadie lo aprovecha.",
    hicimos:
      "Exhibición de unidades en el punto de espera, con captación de datos en sitio y agendamiento de prueba de manejo en el momento, sin pedirle a nadie que fuera después al concesionario.",
    detalle:
      "Dos días consecutivos en el mismo punto, el 26 y el 27. Volver al día siguiente es lo que permite ajustar el horario al pico real de afluencia del grifo en vez de adivinarlo.",
    altBase: "Activación de marca de JAC Motors en un grifo de Ica",
    alts: [
      "Botarga y anfitriona junto a una unidad JAC durante la activación de marca en Ica",
      "Unidad JAC exhibida con banderolas de marca en el punto de activación, en Ica",
      "Dos banderolas de JAC Motors junto a una unidad blanca exhibida en vía pública",
      "Banderolas de JAC Motors y unidad en exhibición a pie de calle, en Ica",
    ],
  },
  {
    slug: "autoplan-portafolio-marcas",
    titular: "Varias marcas bajo un techo, sin que ninguna se pierda",
    cliente: "Derco Center",
    fecha: "2025-05-13",
    fechaLabel: "mayo 2025",
    tipo: "Activación de marca",
    sector: "Automotriz",
    reto:
      "Exhibir el portafolio completo del grupo en un mismo espacio sin que las marcas se canibalicen entre sí ni aquello se vuelva un estacionamiento.",
    hicimos:
      "Coordinación de montaje y reparto del espacio para que cada marca tuviera su zona de protagonismo, con un recorrido pensado para que el visitante pudiera comparar sin tener que preguntar.",
    detalle:
      "Noventa metros cuadrados, cuatro horas de montaje, tres unidades en piso. Con ese ratio el plano no es dónde va cada auto: es por dónde camina el visitante y qué ve al girar la cabeza.",
    altBase: "Exhibición de varias marcas del grupo coordinada por Suggestion en Ica",
    alts: [
      "Camioneta JAC con moño rojo y módulo de Pacífico Motors frente al rótulo de Autoplan, en Ica",
      "Dos unidades con moño y panel informativo en la exhibición de Autoplan, en Ica",
      "Ruleta de premios y unidad con moño en la activación de Autoplan, con botarga y anfitriona",
      "SUV Mazda rojo exhibido en sala con anfitriona y botarga de Pacífico Motors",
      "Camionetas con moño y dos botargas en el patio de exhibición de Autoplan",
      "Anfitriona presentando un Mazda rojo en el interior del local de Autoplan, en Ica",
    ],
  },
  {
    slug: "campeonato-natacion-pb",
    titular: "Una marca inmobiliaria en un campeonato de natación",
    cliente: "PB Inversiones Inmobiliarias",
    fecha: "2025-05-04",
    fechaLabel: "mayo 2025",
    tipo: "Auspicio",
    sector: "Inmobiliario",
    reto:
      "Vincular una inmobiliaria con vida saludable, familia y esfuerzo, ante un público que iba a estar varias horas en el mismo sitio.",
    hicimos:
      "Patrocinio con un stand que funcionó como punto de encuentro de las familias —no como mostrador—, con visibilidad sostenida durante toda la competencia y captación de interesados en inversión.",
    detalle:
      "Tres días, un aforo de 500 personas y 146 prospectos registrados. De ahí salieron 12 visitas al proyecto y 2 ventas: el auspicio no se quedó en el stand.",
    altBase: "Auspicio de PB Inversiones Inmobiliarias en el campeonato internacional de natación de Ica",
    alts: [
      "Escenario del campeonato internacional de natación máster con el auspicio de la marca, en Ica",
      "Público del campeonato internacional de natación máster bajo la carpa, en Ica",
      "Fondo fotográfico del campeonato de natación máster atendido por el equipo de Suggestion",
      "Asistentes al campeonato internacional de natación máster de Ica",
      "Stand de PB Inversiones Inmobiliarias durante el campeonato de natación máster",
      "Competidor premiado junto a la anfitriona ante el panel del campeonato de natación",
      "Entrega de reconocimientos en el campeonato internacional de natación máster de Ica",
      "Atención a interesados en el stand inmobiliario del campeonato de natación máster",
    ],
  },
  {
    slug: "xcmg-linea-amarilla-ica",
    titular: "Maquinaria pesada XCMG presentada en Ica",
    cliente: "XCMG · Dercomaq",
    fecha: "2025-03-26",
    fechaLabel: "marzo 2025",
    tipo: "Lanzamiento de producto",
    sector: "Automotriz",
    reto:
      "Presentar línea amarilla ante constructores y contratistas, que no compran por emoción: comparan ficha técnica, potencia y respaldo.",
    hicimos:
      "Producción completa del lanzamiento: convocatoria dirigida, puesta en escena de la maquinaria y logística del evento, con las especificaciones técnicas en el centro y no de adorno.",
    detalle:
      "Mover y posicionar maquinaria de este porte condiciona todo lo demás: el acceso, el piso, el orden de entrada y la hora a la que se puede montar. Se resuelve antes del evento o no se resuelve.",
    altBase: "Lanzamiento de la línea amarilla XCMG en Ica, con maquinaria pesada en exhibición",
    alts: [
      "Lanzamiento de la línea amarilla XCMG en Ica, con maquinaria pesada en exhibición",
      "Asistentes en la presentación de la línea amarilla XCMG, en Ica",
      "Camión JAC en el local antes del lanzamiento de la línea amarilla XCMG",
      "Fachada del local rotulada con la marca XCMG para el lanzamiento de línea amarilla en Ica",
      "Invitados en el panel fotográfico del lanzamiento de XCMG, en Ica",
      "Equipo recibiendo a los invitados en el lanzamiento de la línea amarilla XCMG",
      "Cargador frontal XCMG exhibido en el lanzamiento de línea amarilla, en Ica",
      "Autoridades e invitados junto a la maquinaria XCMG en el lanzamiento",
      "Entrega de una maqueta de excavadora XCMG durante el lanzamiento, en Ica",
      "Reconocimiento con maqueta de maquinaria XCMG en el lanzamiento de Ica",
      "Fotografía de grupo en el lanzamiento de la línea amarilla XCMG, en Ica",
      "Invitados junto a la maquinaria pesada en el lanzamiento de XCMG",
      "Anfitrionas atendiendo a los invitados ante el panel de Dercomaq",
      "Entrega de obsequios corporativos en el lanzamiento de XCMG, en Ica",
      "Línea de maquinaria XCMG exhibida en el patio del local, en Ica",
      "Panel fotográfico del lanzamiento de la línea amarilla XCMG",
      "Cobertura del lanzamiento de la línea amarilla XCMG, en Ica",
    ],
  },
  {
    slug: "xcmg-linea-amarilla-nazca",
    titular: "La misma línea amarilla, tres días en Nazca",
    cliente: "XCMG · Dercomaq",
    fecha: "2025-02-07",
    fechaLabel: "febrero 2025",
    tipo: "Lanzamiento de producto",
    sector: "Automotriz",
    reto:
      "Repetir el lanzamiento en un mercado más pequeño, donde el comprador quiere ver la máquina trabajando y no escuchar una presentación.",
    hicimos:
      "Tres días de exhibición adaptados al entorno local, enfocados en demostrar capacidad operativa en terreno. La convocatoria apuntó a contratistas y empresarios de la zona, no a público general.",
    detalle:
      "La maquinaria viajó en cigüeñas contratadas para el traslado. La demostración se montó en un grifo concurrido de Nazca y en la plaza de armas, con publimanes cubriendo el perímetro. Llegaron empresarios del sector minero y salió una venta.",
    altBase: "Exhibición de maquinaria pesada XCMG durante tres días en Nazca",
    alts: [
      "Exhibición de maquinaria pesada XCMG durante tres días en Nazca",
      "Carpa y retroexcavadora XCMG en la exhibición de tres días en Nazca",
      "Unidades JAC y maquinaria pesada XCMG exhibidas en Nazca",
      "Montaje completo de la exhibición de línea amarilla XCMG en Nazca",
      "Volquete JAC exhibido con banderola de marca en Nazca",
      "Publimán de la campaña de XCMG en la plaza de armas de Nazca",
      "Promotora junto a un cargador frontal XCMG en la exhibición de Nazca",
      "Anfitriona presentando la maquinaria XCMG en la exhibición de Nazca",
      "Retroexcavadora XCMG en demostración durante la exhibición de Nazca",
      "Punto de exhibición de XCMG montado en la vía pública de Nazca",
      "Publimanes de la campaña en la plaza de armas de Nazca",
      "Difusión en la plaza de armas de Nazca durante la exhibición de XCMG",
    ],
  },
  {
    slug: "gira-conduce-tu-rumbo",
    titular: "QR y ruleta: el dato se entrega jugando",
    cliente: "Pacífico Motors",
    fecha: "2025-01-01",
    fechaLabel: "enero 2025",
    tipo: "Campaña digital",
    sector: "Automotriz",
    reto:
      "Subir la tasa de registro sin pedirle a nadie que llene un formulario de papel apoyado en el capó.",
    hicimos:
      "Dinámica phygital con código QR y ruleta de premios virtual. El registro deja de ser un trámite y pasa a ser el precio de jugar, que es una fricción que la gente sí acepta.",
    detalle:
      "La dinámica estuvo activa todo el mes de enero, no un fin de semana. Ese plazo lo aguanta un QR; un formulario de papel apoyado en el capó, no.",
    altBase: "Activación de la campaña Conduce tu Rumbo de Pacífico Motors",
    alts: [
      "Montaje de la gira Conduce tu Rumbo con unidades JAC en la vía pública",
      "Módulo de la campaña Conduce tu Rumbo instalado en un centro comercial",
      "Promotora en la activación callejera de la gira Conduce tu Rumbo",
      "Roll-up con el código QR y la ruleta de premios de la campaña Conduce tu Rumbo",
      "Equipo de promotoría con el roll-up del QR en la gira Conduce tu Rumbo",
      "Promotora junto al tótem del código QR de la campaña Conduce tu Rumbo",
      "Público acercándose a las unidades durante la gira Conduce tu Rumbo",
      "Asistentes en el punto de registro de la gira Conduce tu Rumbo",
      "Entrega de un premio de la ruleta en la gira Conduce tu Rumbo",
      "Zona de atención de la gira Conduce tu Rumbo montada bajo carpa",
      "Unidad exhibida junto al módulo de la gira Conduce tu Rumbo, en centro comercial",
    ],
  },
  {
    slug: "subaru-plaza-barranca",
    titular: "Subaru en la plaza, un sábado de compras",
    cliente: "Subaru Motors",
    fecha: "2024-09-21",
    fechaLabel: "septiembre 2024",
    tipo: "Activación de marca",
    sector: "Automotriz",
    reto:
      "Interceptar al comprador familiar en su momento de ocio, en un entorno donde se compite con todo lo demás que hay en una plaza.",
    hicimos:
      "Módulo de exhibición de alta visibilidad con promotoría enfocada en seguridad y tecnología, que son los dos argumentos que mueven a ese comprador y no el precio.",
    detalle:
      "Un día y una sola unidad: la Crosstrek. En plaza, meter más vehículos resta espacio de circulación y parte la conversación en dos; con una unidad bien puesta el promotor habla una vez y se le escucha.",
    altBase: "Activación de marca de Subaru Motors en la plazuela de Barranca",
    alts: [
      "Arco inflable de Subaru y unidad en exhibición durante la activación nocturna en la plazuela de Barranca",
      "Activación de Subaru Motors en la plazuela de Barranca, con arco inflable y banderolas",
    ],
  },
  {
    slug: "inauguracion-autoplan",
    titular: "Exhibición protocolar para la apertura de un local",
    cliente: "Subaru Motors",
    fecha: "2024-09-20",
    fechaLabel: "septiembre 2024",
    tipo: "Inauguración",
    sector: "Automotriz",
    reto:
      "Dar presencia de marca en una inauguración con invitados y prensa, donde una activación mal calibrada se nota y molesta.",
    hicimos:
      "Exhibición vehicular alineada con la estética del evento inaugural, reforzando la alianza entre la marca y el concesionario ante el público que importaba ese día.",
    detalle:
      "Cien invitados y la prensa local de Ica cubriendo: La Lupa, Ica Noticias, Noticias en Ica, El Cuervo, entre otros. En una inauguración la lista de invitados es la mitad del trabajo, y se arma semanas antes.",
    altBase: "Exhibición vehicular protocolar en la inauguración del local de Autoplan",
    alts: [
      "Unidad con moño preparada para la exhibición protocolar de un concesionario",
      "Unidad Subaru con moño bajo el rótulo de Autoplan, en la inauguración del local",
      "Subaru azul en exhibición durante la inauguración del local de Autoplan",
      "Arco inflable de Subaru montado en el ingreso del local de Autoplan",
      "Ingreso del local de Autoplan con el arco de Subaru en la inauguración",
    ],
  },
  {
    slug: "enduro-yancay-subaru",
    titular: "Subaru como vehículo oficial de una enduro",
    cliente: "Subaru Motors",
    fecha: "2024-08-31",
    fechaLabel: "agosto 2024",
    tipo: "Auspicio",
    sector: "Automotriz",
    reto:
      "Demostrar el ADN off-road y la tracción integral donde se puede comprobar: en terreno agreste, delante de gente que sabe distinguir.",
    hicimos:
      "Activación en la ruta de competencia, con la marca como vehículo oficial acompañando a competidores y asistentes. El argumento no se contó: se vio.",
    detalle:
      "Montar en terreno sin servicios cambia la lista de materiales: todo lo que se instala tiene que resistir viento y arena, y llegar y salir el mismo día.",
    altBase: "Presencia de Subaru Motors en la competencia Enduro Yancay, en terreno agreste",
    alts: [
      "Banderolas de Subaru en la salida de la competencia Enduro Yancay, en terreno agreste",
      "Arco de meta de la competencia Enduro Yancay montado en el desierto de Ica",
      "Señalética de Subaru Ica instalada en la ruta del Enduro Yancay",
      "Montaje de la activación de Subaru en el terreno de la competencia Enduro Yancay",
      "Banderola de Subaru clavada en la ruta arenosa del Enduro Yancay",
      "Panel de Subaru Ica en el tramo rocoso de la competencia Enduro Yancay",
      "Banderolas de los auspiciadores en el circuito del Enduro Yancay",
    ],
  },
  {
    slug: "aniversario-amon-amen",
    titular: "Venta cruzada: el lote y el auto, en la misma noche",
    cliente: "Urb. La Reserva · Pacífico Motors",
    fecha: "2024-08-16",
    fechaLabel: "agosto 2024",
    tipo: "Activación de marca",
    sector: "Mixto",
    reto:
      "Dos decisiones de inversión que el mismo público toma por separado, y un evento social donde nadie quiere que le vendan.",
    hicimos:
      "Activación sutil que conectó la compra del lote con la necesidad del vehículo mientras la gente disfrutaba del aniversario. Un solo montaje trabajando para dos clientes a la vez.",
    detalle:
      "Unas 200 personas. El contacto elegía él mismo hacia cuál de las dos ofertas quería que lo derivaran, vehículo o lote. Así un montaje alimentó dos embudos sin que el invitado sintiera que lo pasaban de mano en mano.",
    altBase: "Activación conjunta de Urb. La Reserva y Pacífico Motors en el aniversario de Amon Amen",
    alts: [
      "Anfitriona de Pacífico Motors en la barra del local durante el aniversario de Amon Amen",
      "Anfitriona junto al arreglo floral de Pacífico Motors en el aniversario de Amon Amen",
      "Interior del local con el logotipo luminoso durante el aniversario de Amon Amen, en Ica",
      "Módulo de Urb. La Reserva montado en el aniversario de Amon Amen, con invitados alrededor",
      "Panel iluminado de Urb. La Reserva en la activación del aniversario de Amon Amen",
    ],
  },
  {
    slug: "gala-oficiales-la-reserva",
    titular: "Presencia premium en una gala de acceso difícil",
    cliente: "PB Inversiones Inmobiliarias",
    fecha: "2024-08-01",
    fechaLabel: "agosto 2024",
    tipo: "Auspicio",
    sector: "Inmobiliario",
    reto:
      "Una audiencia de alta jerarquía y de nicho, a la que no se llega comprando medios, dentro de un entorno social cerrado.",
    hicimos:
      "Auspicio con obsequio corporativo y una dinámica calibrada al perfil de los asistentes, con equipo de protocolo gestionando la interacción. La exclusividad del proyecto se asoció al estatus del invitado.",
    detalle:
      "Ochenta oficiales en sala. El obsequio fue una caja de madera con un pisco y piezas de la marca: en ese tipo de evento el regalo es lo que decide si al día siguiente alguien se acuerda de quién auspiciaba.",
    altBase: "Auspicio de Urb. La Reserva en la gala de oficiales del Ejército",
    alts: [
      "Tótems de Urb. La Reserva montados en el jardín de la gala de oficiales del Ejército",
      "Anfitriona junto al módulo de Urb. La Reserva en la gala de oficiales",
      "Montaje de Urb. La Reserva en el patio de la gala de oficiales del Ejército",
      "Anfitrionas atendiendo la dinámica de obsequios en la gala de oficiales",
      "Anfitriona en el punto de Urb. La Reserva durante la gala, de noche",
      "Patio de la gala de oficiales con el montaje de marca iluminado",
      "Fondo fotográfico de Urb. La Reserva en la gala de oficiales del Ejército",
      "Ambientación nocturna del patio durante la gala de oficiales del Ejército",
    ],
  },
  {
    slug: "dia-del-maestro-derco",
    titular: "Captación en el Día del Maestro, sin interrumpir la fiesta",
    cliente: "Derco Center",
    fecha: "2024-07-06",
    fechaLabel: "julio 2024",
    tipo: "Activación de marca",
    sector: "Automotriz",
    reto:
      "Una celebración gremial masiva, con público que tiene capacidad de crédito, y el riesgo de convertirse en el intruso que arruina la tarde.",
    hicimos:
      "Punto de contacto dentro del recinto con una dinámica relajada que invitaba a acercarse a las unidades entre momentos de la celebración. Los datos se capturaron sin abordaje.",
    detalle:
      "Unas mil personas en el recinto y 238 datos recogidos: uno de cada cuatro asistentes, sin que nadie saliera a abordar. Las unidades en piso fueron la Changan X7 Plus y la CS15.",
    altBase: "Activación de Derco Center en la celebración del Día del Maestro en Ica",
    alts: [
      "Marco fotográfico de Pacífico Motors con asistentes en el Día del Maestro, en Ica",
      "Dinámica del marco fotográfico junto a la piscina en la celebración del Día del Maestro",
      "Asistentes posando con el marco de marca en la celebración del Día del Maestro",
      "Invitados usando el marco fotográfico de Pacífico Motors en el Día del Maestro",
      "Activación junto a la piscina durante la celebración del Día del Maestro, en Ica",
      "Asistentes del Día del Maestro en la dinámica del marco de marca",
      "Grupo posando con el marco de Pacífico Motors en el Día del Maestro",
    ],
  },
  {
    slug: "stand-up-derco",
    titular: "Marca presentadora de un show de comedia",
    cliente: "Derco Center",
    fecha: "2024-06-15",
    fechaLabel: "junio 2024",
    tipo: "Auspicio",
    sector: "Automotriz",
    reto:
      "Captar datos en ocio nocturno, donde el público pagó por divertirse y rechaza de inmediato cualquier cosa que parezca publicidad.",
    hicimos:
      "Integración como presentador oficial del show y activación en el foyer, trabajando los tiempos de espera a la entrada y el intermedio. La marca se asoció a una experiencia que la gente ya estaba disfrutando.",
    detalle:
      "Aforo de 150 y 67 datos: casi uno de cada dos asistentes. En sala estuvieron la Haval Dargo y la Changan X7 Plus. El foyer rinde porque la espera y el intermedio son los dos únicos momentos en que ese público no está mirando el escenario.",
    altBase: "Activación de Derco Center en un show de stand-up comedy en Ica",
    alts: [
      "Unidad Haval Dargo bajo el toldo de Pacífico Motors en la activación del show de stand-up en Ica",
      "Activación nocturna de Derco Center en el ingreso del espectáculo",
      "Salón del show preparado con el panel de Derco Center antes de la función",
      "Anfitriona junto al roll-up de Derco Center en el foyer del espectáculo",
      "Punto de marca de Derco Center en el ingreso del show de stand-up",
      "Unidad Haval Dargo exhibida a la entrada del espectáculo, de noche",
      "Changan X7 Plus exhibido junto al módulo de marca en el show de stand-up",
    ],
  },
  {
    slug: "caballos-de-paso-2024",
    titular: "Primera edición en el circuito de caballos de paso",
    cliente: "Pacífico Motors · Urb. La Reserva",
    fecha: "2024-06-07",
    fechaLabel: "junio 2024",
    tipo: "Auspicio",
    sector: "Mixto",
    reto:
      "Entrar por primera vez a un evento tradicionalista con dos marcas a la vez, sin saber todavía cómo reaccionaría ese público.",
    hicimos:
      "Exhibición vehicular y punto inmobiliario integrados en el circuito durante los tres días. Lo que funcionó aquí es lo que permitió repetir en 2025 con el formato ya probado.",
    detalle:
      "Lo que se aprendió: manda la experiencia. Conseguir que la gente subiera al vehículo y lo probara posicionó más que cualquier argumento dicho de pie, y eso es lo que se trasladó al montaje de 2025.",
    altBase: "Exhibición de Pacífico Motors y Urb. La Reserva en el campeonato de caballos de paso 2024",
    alts: [
      "Haval H6 rojo exhibido con panel informativo en el campeonato de caballos de paso 2024",
      "Módulo de Urb. La Reserva montado en el circuito del campeonato de caballos de paso 2024",
      "Exhibición vehicular junto a la pista del campeonato de caballos de paso de Ica",
      "Equipo de Urb. La Reserva atendiendo el punto de información en el campeonato de caballos de paso",
      "Unidad exhibida con banderola de marca en el campeonato de caballos de paso 2024",
      "Camioneta en exhibición junto al punto de marca en el campeonato de caballos de paso",
      "Tótem de Urb. La Reserva en el circuito del campeonato de caballos de paso 2024",
      "Unidad exhibida en el campo del campeonato de caballos de paso de Ica",
    ],
  },
  {
    slug: "cabalgantes-derco",
    titular: "El vehículo como parte de la escenografía nocturna",
    cliente: "Derco Center",
    fecha: "2024-06-07",
    fechaLabel: "junio 2024",
    tipo: "Auspicio",
    sector: "Automotriz",
    reto:
      "Un evento nocturno exclusivo, con público que valora la privacidad y la atmósfera, y que castiga la publicidad agresiva.",
    hicimos:
      "Branding ambiental: el vehículo integrado en la escenografía como un elemento más de la noche, y el equipo en modo acompañamiento. El interés por la marca salió del relacionamiento, no del abordaje.",
    detalle:
      "Una Subaru Crosstrek y una Mazda CX5, iluminadas con led indirecto, ante más de 120 invitados. La luz es la decisión del montaje: directa convierte el auto en un stand, indirecta lo deja ser parte del salón.",
    altBase: "Branding ambiental de Derco Center en un evento nocturno de cabalgantes en Ica",
    alts: [
      "Vehículos integrados en la escenografía del evento nocturno de cabalgantes, en Ica",
      "Invitados con las piezas de marca en el evento de cabalgantes, en Ica",
      "Asistentes posando con los carteles de marca en el evento de cabalgantes",
      "Dinámica de carteles de marca durante la cena del evento de cabalgantes",
      "Grupo de invitados con los carteles de marca en el evento nocturno de cabalgantes",
      "Pieza impresa entregada a los invitados del evento de cabalgantes",
      "Salón del evento de cabalgantes con la marca en pantallas y tótems",
      "Tótem de marca con motivo ecuestre en el evento de cabalgantes, en Ica",
    ],
  },
  {
    slug: "test-drive-changan-ica",
    titular: "Pruebas de manejo a la salida del restaurante",
    cliente: "Derco Center · Changan",
    fecha: "2024-03-01",
    fechaLabel: "marzo 2024",
    tipo: "Campaña de prueba",
    sector: "Automotriz",
    reto:
      "Changan traía estacionamiento autónomo y control por voz, y en Ica nadie se lo creía. La tecnología no se vende explicándola: se vende dejando que el cliente la use.",
    hicimos:
      "Llevamos la unidad a la puerta de los restaurantes Cordón y la Rosa y ofrecimos la prueba a los comensales al salir. Sin cita previa, sin sala de ventas y sin formulario: el auto en la calle, delante de quien acababa de cenar.",
    detalle:
      "En muchos casos la prueba terminó llevando al cliente hasta su casa. Es el formato que más confianza genera y el que nadie usa, porque exige logística: unidad disponible, conductor acompañante y permiso del local.",
    altBase: "Campaña de pruebas de manejo de Changan en la vía pública de Ica",
    alts: [
      "Unidad Changan rotulada para pruebas de manejo a la salida de un restaurante en Ica",
      "Punto donde se montó la campaña de pruebas de manejo de Changan, en la vía pública de Ica",
      "Toldo de Pacífico Motors y unidad Changan durante la campaña de pruebas de manejo en Ica",
      "Comensales probando la unidad Changan a la salida del restaurante, en Ica",
    ],
  },
  {
    slug: "aniversario-paracas-gwm",
    titular: "Showroom a cielo abierto en el aniversario de Paracas",
    cliente: "GWM Motors",
    fecha: "2024-02-28",
    fechaLabel: "febrero 2024",
    tipo: "Evento municipal",
    sector: "Automotriz",
    reto:
      "Testear cómo recibía un mercado costero y turístico a los modelos robustos de la marca, antes de comprometer inversión en el canal.",
    hicimos:
      "Montaje de un showroom al aire libre aprovechando el flujo masivo del aniversario distrital, con la exhibición centrada en la capacidad todoterreno, que es lo que pide la geografía de la zona.",
    detalle:
      "Dos días con la Haval Dargo y la GWM Poer. La gente se subió a conocerlas y de ahí salieron agendamientos de prueba de manejo en el concesionario: en un evento de distrito el cierre nunca ocurre ahí, ocurre después.",
    altBase: "Showroom a cielo abierto de GWM Motors en el aniversario del distrito de Paracas",
    alts: [
      "Banderola del sorteo de Pacífico Motors ante el público del aniversario de Paracas",
      "Camioneta GWM Poer y módulo de marca en el showroom al aire libre del aniversario de Paracas",
      "Módulo rojo de Pacífico Motors y unidades exhibidas en el aniversario del distrito de Paracas",
      "Unidades GWM exhibidas junto al módulo de marca en el aniversario de Paracas",
      "Promotor atendiendo el módulo de Pacífico Motors con la ruleta de premios, en Paracas",
      "Público en el stand de Pacífico Motors durante la noche del aniversario de Paracas",
      "Equipo de promotoría atendiendo el stand de Pacífico Motors en el aniversario de Paracas",
      "Activación de Pacífico Motors en la calle durante el aniversario del distrito de Paracas",
      "Stand de Pacífico Motors junto al escenario del aniversario de Paracas",
      "Equipo de Suggestion atendiendo el mostrador del stand en el aniversario de Paracas",
      "Visitantes en el stand de Pacífico Motors durante el aniversario de Paracas",
    ],
  },
];

/** Tipos presentes, para los filtros. Se calculan: no se escriben a mano. */
export const TIPOS_PORTAFOLIO = [...new Set(PORTAFOLIO.map((p) => p.tipo))].sort();
export const SECTORES_PORTAFOLIO = [...new Set(PORTAFOLIO.map((p) => p.sector))].sort();

export const getPieza = (slug: string) => PORTAFOLIO.find((p) => p.slug === slug);
