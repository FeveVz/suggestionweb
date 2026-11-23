/**
 * Tipos compartidos del contenido data-driven (servicios, categorías, sectores).
 * El copy proviene de docs-fuente 06/07/08/09. Un slug = una página.
 */

export type Bullet = { titulo?: string; texto: string };

export type SubSeccion = { h3: string; texto: string };

/** Tabla comparativa. En móvil hace scroll horizontal dentro de su caja. */
export type Tabla = {
  cabeceras: string[];
  filas: string[][];
  /** Pie de tabla: fuente del dato o matiz necesario. */
  nota?: string;
};

/**
 * Gráfico de barras. Para cuando una tabla de tres cifras se lee mejor
 * mirando que leyendo: la escalera de atribución, un embudo, dos eventos
 * comparados. No sustituye a la tabla cuando las celdas son texto.
 */
export type Grafico = {
  titulo?: string;
  barras: { etiqueta: string; valor: number; texto: string; nota?: string; destacada?: boolean }[];
  pie?: string;
  unidad?: string;
};

/** Proceso numerado (01, 02, 03…). El número lo pone el componente. */
export type Paso2 = { titulo: string; texto: string };

/** Cifra destacada. `fuente` es obligatoria cuando el dato no es propio. */
export type Dato = { cifra: string; texto: string; fuente?: string };

/** Aviso al margen. `tipo` decide el color del filete: cian informa, naranja advierte. */
export type Nota = { tipo?: "info" | "aviso"; titulo?: string; texto: string };

export type Seccion = {
  h2: string;
  parrafo?: string;
  bullets?: Bullet[];
  sub?: SubSeccion[];
  /** Bloques de estructura enriquecida (todos opcionales). */
  tabla?: Tabla;
  grafico?: Grafico;
  pasos?: Paso2[];
  dato?: Dato;
  nota?: Nota;
  /**
   * Foto del trabajo real dentro de la sección. Fotografía propia, nunca banco
   * de imágenes: si no hay una foto honesta del asunto, la sección va sin foto.
   */
  foto?: { src: string; alt: string; cap: string; w?: number; h?: number };
  /**
   * Enlaces internos al final del texto de la sección, con anchor descriptivo:
   * de una ciudad al sector que trata ese H2, de un sector a las ciudades donde
   * el rubro pesa, de un artículo a su hermano (auditoría, paquete 21).
   */
  enlaces?: { label: string; href: string }[];
};

export type Faq = { q: string; a: string };

export type Cierre = { h2: string; cta: string };

/** Ítem título+texto (beneficios, "qué incluye"). */
export type ItemTT = { titulo: string; texto: string };

/** Paso de proceso transaccional. */
export type Paso = { paso: string; titulo: string; texto: string };

/** Plan de precios (tabla transaccional). */
export type PlanPrecio = {
  nombre: string;
  precio: string; // p. ej. "S/1,800"
  periodo: string; // "/mes" | "pago único" | "por activación" | "por día" | "/proyecto"
  popular?: boolean;
  incluye: string[];
};

/** Servicio (16) o categoría hub (5). Ambos viven en /servicios/[slug]. */
export type Servicio = {
  /** Casos publicados que prueban lo que esta página promete. */
  pruebas?: Prueba[];
  slug: string;
  tipo: "servicio" | "categoria";
  /** slug de la categoría padre (solo servicios). */
  categoriaSlug?: string;
  /** etiqueta corta para nav/breadcrumb. */
  nombre: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  hero: string;
  /** Respuesta corta bajo el hero (ver components/EnCorto.tsx). Solo datos ya publicados en la página. */
  enCorto?: string[];
  cta: string;
  keyword: string;
  /** barra de prueba social opcional. */
  proof?: string;
  secciones: Seccion[];
  /** AST — "qué incluye" (checklist transaccional). */
  incluye?: ItemTT[];
  /** AST — beneficios / por qué este servicio. */
  beneficios?: ItemTT[];
  /** AST — proceso específico del servicio (sustituye al método genérico). */
  proceso?: Paso[];
  faq: Faq[];
  /** slugs de servicios relacionados (enlazado interno / silo). */
  enlazaA: string[];
  cierre: Cierre;
  /** Artículos del blog que ayudan a decidir. Mismo puente que en Sector. */
  lecturas?: { label: string; href: string }[];
  /**
   * Datos que pedimos para cotizar. Van escritos en el mensaje de WhatsApp para
   * que el cliente solo los rellene: el precio sale de la especificación.
   */
  especificaciones?: string[];
  /**
   * Cotizador interactivo bajo el «En corto» (hoy solo gigantografías): arma
   * el pedido y abre WhatsApp con el mensaje escrito. Ver CotizadorGigantografia.
   */
  cotizador?: "gigantografias";
  /** schema dominante de la página. */
  schema?: "service" | "localbusiness";
  noindex?: boolean;
};

/** Sector vertical (5). URLs a raíz, p. ej. /marketing-inmobiliario. */
/** Página de cobertura por ciudad (/agencia-de-marketing-en-<slug>). */
export type Ciudad = {
  slug: string;
  /** Resumen de 3 puntos arriba de la página, solo con datos de la propia página. */
  enCorto?: string[];
  nombre: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  hero: string;
  cta: string;
  proof?: string;
  /** Párrafo propio sobre cómo se atiende esa ciudad desde Ica. */
  cobertura: string;
  /** Título de la sección de cobertura (por defecto, el genérico). */
  coberturaTitulo?: string;
  /** Etiqueta sobre el H1; por defecto «Marketing en <ciudad>». */
  kicker?: string;
  /** Qué se cotiza por WhatsApp cuando el CTA es de cotización. */
  tema?: string;
  /** Datos a rellenar en el mensaje de cotización. */
  especificaciones?: string[];
  /**
   * Ciudad con equipo propio de BTL (hoy solo Nazca, confirmado por el dueño
   * el 20-nov-2026): razones de BTL y enlace «BTL en <ciudad>» desde /servicios/btl.
   */
  btl?: boolean;
  /** Ciudades de alrededor que cubre el equipo de esta (van al schema areaServed). */
  alrededores?: string[];
  secciones: Seccion[];
  serviciosQueUsa: string[];
  faq: Faq[];
  cierre: Cierre;
};

/**
 * Enlace a una prueba publicada (un caso con cifras) desde una página de
 * servicio. Nace con la pauta: una página que promete ROI y no enseña un
 * resultado medido es una promesa más. Opcional a propósito: solo se pone
 * donde hay caso que enseñar.
 */
export type Prueba = { label: string; href: string };

export type Sector = {
  /** Casos publicados que prueban lo que esta página promete. */
  pruebas?: Prueba[];
  /** Resumen de 3 puntos arriba de la página, solo con datos de la propia página. */
  enCorto?: string[];
  slug: string;
  nombre: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  hero: string;
  cta: string;
  proof?: string;
  secciones: Seccion[];
  /** servicios que el sector pone a trabajar (slugs). */
  serviciosQueUsa: string[];
  /**
   * Artículos del blog que explican el mercado de este sector.
   *
   * Existe por el reparto de contenido: la página de sector dice qué hacemos,
   * en qué orden y qué medimos; el artículo explica cómo funciona el mercado.
   * Este bloque es el puente entre las dos, y de paso da enlaces internos a
   * unos posts que casi no recibían (2-3 cada uno, medido el 2026-09-20).
   */
  lecturas?: { label: string; href: string }[];
  faq: Faq[];
  cierre: Cierre;
};
