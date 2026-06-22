/**
 * Tipos compartidos del contenido data-driven (servicios, categorías, sectores).
 * El copy proviene de docs-fuente 06/07/08/09. Un slug = una página.
 */

export type Bullet = { titulo?: string; texto: string };

export type SubSeccion = { h3: string; texto: string };

export type Seccion = {
  h2: string;
  parrafo?: string;
  bullets?: Bullet[];
  sub?: SubSeccion[];
};

export type Faq = { q: string; a: string };

export type Cierre = { h2: string; cta: string };

/** Ítem título+texto (beneficios, "qué incluye"). */
export type ItemTT = { titulo: string; texto: string };

/** Paso de proceso transaccional. */
export type Paso = { paso: string; titulo: string; texto: string };

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
