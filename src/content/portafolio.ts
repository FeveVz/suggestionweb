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
 * Fuente: Notion «Portafolio BTL | Suggestion», 20 eventos entre febrero de
 * 2024 y julio de 2025. El reto y la solución de cada pieza vienen de ahí;
 * aquí están reescritos sin el inflado de agencia del original.
 *
 * Imágenes: generadas por scripts/portafolio-imagenes.mjs desde la
 * exportación de Notion. Dos tamaños por foto (1000 y 500 px).
 */

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
  fotos: { src: string; alt: string }[];
};

const F = (slug: string, n: number, alt: string) => ({
  src: `/assets/portafolio/${slug}-${n}.webp`,
  alt,
});

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
    fotos: [
      F("relanzamiento-mitsubishi-autoniza", 1, "Fachada iluminada de la tienda Mitsubishi FUSO de Autoniza durante el relanzamiento nocturno en Ica"),
      F("relanzamiento-mitsubishi-autoniza", 2, "Unidad Mitsubishi cubierta y con moño, lista para el destape en el relanzamiento de tienda"),
      F("relanzamiento-mitsubishi-autoniza", 3, "Autoridad local en el estrado durante el relanzamiento de la tienda Mitsubishi de Autoniza en Ica"),
    ],
  },
  {
    slug: "test-drive-changan-ica",
    titular: "Pruebas de manejo a la salida del restaurante",
    cliente: "Derco Center · Changan",
    fecha: "2025-08-01",
    fechaLabel: "2025",
    tipo: "Campaña de prueba",
    sector: "Automotriz",
    reto:
      "Changan traía estacionamiento autónomo y control por voz, y en Ica nadie se lo creía. La tecnología no se vende explicándola: se vende dejando que el cliente la use.",
    hicimos:
      "Llevamos la unidad a la puerta de los restaurantes Cordón y la Rosa y ofrecimos la prueba a los comensales al salir. Sin cita previa, sin sala de ventas y sin formulario: el auto en la calle, delante de quien acababa de cenar.",
    detalle:
      "En muchos casos la prueba terminó llevando al cliente hasta su casa. Es el formato que más confianza genera y el que nadie usa, porque exige logística: unidad disponible, conductor acompañante y permiso del local.",
    fotos: [
      F("test-drive-changan-ica", 1, "Unidad Changan UNI-T rotulada para pruebas de manejo en una activación en Ica"),
      F("test-drive-changan-ica", 2, "Equipo de Suggestion durante la campaña de pruebas de manejo de Changan en Ica"),
      F("test-drive-changan-ica", 3, "Activación de pruebas de manejo de Changan en la vía pública de Ica"),
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
    fotos: [
      F("mercado-santo-domingo-dfsk", 1, "Módulos de activación de DFSK montados en el mercado de Santo Domingo, en Ica"),
      F("mercado-santo-domingo-dfsk", 2, "Equipo de promotoría de Suggestion captando datos para DFSK en el mercado de Santo Domingo"),
      F("mercado-santo-domingo-dfsk", 3, "Activación de marca de DFSK y Pacífico Motors en zona de alto tránsito comercial"),
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
    fotos: [
      F("caballos-de-paso-2025", 1, "Exhibición de vehículos de Pacífico Motors en el campeonato de caballos de paso de Ica 2025"),
      F("caballos-de-paso-2025", 2, "Punto de información inmobiliaria de Urb. La Reserva en el circuito de caballos de paso"),
      F("caballos-de-paso-2025", 3, "Montaje de marca en el campeonato de caballos de paso de Ica"),
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
    fotos: [
      F("grifo-repsol-jac", 1, "Exhibición de unidades JAC Motors con equipo de promotoría durante una activación en Ica"),
      F("grifo-repsol-jac", 2, "Activación de marca de JAC Motors en punto de tránsito cautivo"),
      F("grifo-repsol-jac", 3, "Unidad JAC exhibida con banderolas de marca en una activación en vía pública"),
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
    fotos: [
      F("autoplan-portafolio-marcas", 1, "Exhibición de varias marcas de vehículos coordinada por Suggestion en Autoplan, Ica"),
      F("autoplan-portafolio-marcas", 2, "Montaje de exhibición vehicular con zonas diferenciadas por marca"),
      F("autoplan-portafolio-marcas", 3, "Activación de portafolio de marcas de Derco Center en Ica"),
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
    fotos: [
      F("campeonato-natacion-pb", 1, "Auspicio de PB Inversiones Inmobiliarias en el campeonato internacional de natación de Ica"),
      F("campeonato-natacion-pb", 2, "Stand informativo de la marca inmobiliaria durante la competencia"),
      F("campeonato-natacion-pb", 3, "Presencia de marca en el campeonato internacional de natación máster"),
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
    fotos: [
      F("xcmg-linea-amarilla-ica", 1, "Lanzamiento de la línea amarilla XCMG en Ica, con maquinaria pesada en exhibición"),
      F("xcmg-linea-amarilla-ica", 2, "Puesta en escena de maquinaria XCMG durante el evento de lanzamiento"),
      F("xcmg-linea-amarilla-ica", 3, "Montaje del lanzamiento de maquinaria pesada XCMG y Dercomaq"),
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
    fotos: [
      F("xcmg-linea-amarilla-nazca", 1, "Exhibición de maquinaria XCMG durante tres días en Nazca"),
      F("xcmg-linea-amarilla-nazca", 2, "Maquinaria pesada y unidades JAC en el lanzamiento de Nazca"),
      F("xcmg-linea-amarilla-nazca", 3, "Montaje de exhibición de línea amarilla XCMG en Nazca"),
    ],
  },
  {
    slug: "gira-conduce-tu-rumbo",
    titular: "QR y ruleta: el dato se entrega jugando",
    cliente: "Pacífico Motors",
    fecha: "2025-01-01",
    fechaLabel: "2025",
    tipo: "Campaña digital",
    sector: "Automotriz",
    reto:
      "Subir la tasa de registro sin pedirle a nadie que llene un formulario de papel apoyado en el capó.",
    hicimos:
      "Dinámica phygital con código QR y ruleta de premios virtual. El registro deja de ser un trámite y pasa a ser el precio de jugar, que es una fricción que la gente sí acepta.",
    fotos: [
      F("gira-conduce-tu-rumbo", 1, "Dinámica de ruleta virtual con registro por código QR en la gira de Pacífico Motors"),
      F("gira-conduce-tu-rumbo", 2, "Módulo de activación de la campaña Conduce tu Rumbo"),
      F("gira-conduce-tu-rumbo", 3, "Captación de datos mediante dinámica phygital en una activación de Pacífico Motors"),
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
    fotos: [
      F("subaru-plaza-barranca", 1, "Módulo de exhibición de Subaru Motors en la plazuela de Barranca"),
      F("subaru-plaza-barranca", 2, "Activación de marca de Subaru con arco inflable y unidad en exhibición"),
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
    fotos: [
      F("inauguracion-autoplan", 1, "Unidad Subaru Forester con moño durante la inauguración del local de Autoplan"),
      F("inauguracion-autoplan", 2, "Exhibición vehicular protocolar en la apertura del concesionario"),
      F("inauguracion-autoplan", 3, "Montaje de marca Subaru en la inauguración de Autoplan"),
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
    fotos: [
      F("enduro-yancay-subaru", 1, "Banderolas de Subaru Motors en la competencia Enduro Yancay, en terreno agreste"),
      F("enduro-yancay-subaru", 2, "Presencia de marca Subaru en la ruta de la competencia enduro"),
      F("enduro-yancay-subaru", 3, "Montaje de activación en terreno durante el Enduro Yancay"),
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
    fotos: [
      F("aniversario-amon-amen", 1, "Punto de marca de Pacífico Motors en el aniversario de Amon Amen"),
      F("aniversario-amon-amen", 2, "Activación conjunta de Urb. La Reserva y Pacífico Motors en un evento social"),
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
    fotos: [
      F("gala-oficiales-la-reserva", 1, "Stands de Urb. La Reserva en la gala de oficiales del Ejército"),
      F("gala-oficiales-la-reserva", 2, "Activación de marca inmobiliaria en un evento institucional"),
      F("gala-oficiales-la-reserva", 3, "Montaje de presencia premium en una gala de acceso restringido"),
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
    fotos: [
      F("dia-del-maestro-derco", 1, "Activación de Derco Center durante la celebración del Día del Maestro en Ica"),
      F("dia-del-maestro-derco", 2, "Punto de contacto de marca dentro del recinto de la celebración"),
      F("dia-del-maestro-derco", 3, "Dinámica de captación de datos en un evento gremial"),
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
    fotos: [
      F("stand-up-derco", 1, "Activación de Derco Center en el foyer de un show de stand-up comedy en Ica"),
      F("stand-up-derco", 2, "Presencia de marca como presentador oficial del espectáculo"),
      F("stand-up-derco", 3, "Montaje de marca en el ingreso del evento nocturno"),
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
    fotos: [
      F("caballos-de-paso-2024", 1, "Exhibición de Pacífico Motors y Urb. La Reserva en el campeonato de caballos de paso 2024"),
      F("caballos-de-paso-2024", 2, "Montaje de marca en el circuito de caballos de paso de Ica"),
      F("caballos-de-paso-2024", 3, "Punto de información inmobiliaria en un evento tradicional de Ica"),
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
    fotos: [
      F("cabalgantes-derco", 1, "Vehículo integrado en la escenografía de un evento nocturno de cabalgantes en Ica"),
      F("cabalgantes-derco", 2, "Branding ambiental de Derco Center en un evento nocturno"),
      F("cabalgantes-derco", 3, "Presencia de marca discreta en un evento social exclusivo"),
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
    fotos: [
      F("aniversario-paracas-gwm", 1, "Showroom a cielo abierto de GWM Motors en el aniversario del distrito de Paracas"),
      F("aniversario-paracas-gwm", 2, "Exhibición de unidades GWM durante el aniversario de Paracas"),
      F("aniversario-paracas-gwm", 3, "Montaje de marca en el evento municipal de Paracas"),
    ],
  },
];

/** Tipos presentes, para los filtros. Se calculan: no se escriben a mano. */
export const TIPOS_PORTAFOLIO = [...new Set(PORTAFOLIO.map((p) => p.tipo))].sort();
export const SECTORES_PORTAFOLIO = [...new Set(PORTAFOLIO.map((p) => p.sector))].sort();

export const getPieza = (slug: string) => PORTAFOLIO.find((p) => p.slug === slug);
