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
  pasos?: Paso2[];
  dato?: Dato;
  nota?: Nota;
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
  /** schema dominante de la página. */
  schema?: "service" | "localbusiness";
  noindex?: boolean;
};

/** Sector vertical (5). URLs a raíz, p. ej. /marketing-inmobiliario. */
/** Página de cobertura por ciudad (/agencia-de-marketing-en-<slug>). */
export type Ciudad = {
  slug: string;
  nombre: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  hero: string;
  cta: string;
  proof?: string;
  /** Párrafo propio sobre cómo se atiende esa ciudad desde Ica. */
  cobertura: string;
  secciones: Seccion[];
  serviciosQueUsa: string[];
  faq: Faq[];
  cierre: Cierre;
};

export type Sector = {
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
  faq: Faq[];
  cierre: Cierre;
};
