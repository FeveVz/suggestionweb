/**
 * Navegación canónica de suggestion.pe (header mega-menú + footer).
 * Fuente única de labels + slugs del menú. Derivado de docs-fuente 01/02/18.
 * El contenido/copy de cada página vive en servicios.ts / sectores.ts con
 * los MISMOS slugs.
 */

export type NavLink = { label: string; href: string };

export type ServiceCategory = {
  label: string; // nombre de cara al cliente (doc 01)
  slug: string; // /servicios/<slug>
  children: NavLink[]; // servicios hijos (href absoluto)
};

/** 5 categorías → 16 servicios (slugs exactos del doc 18). */
export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    label: "Estrategia y datos",
    slug: "estrategia",
    children: [
      { label: "Consultoría", href: "/servicios/consultoria" },
      { label: "Investigación de Mercado", href: "/servicios/investigacion-de-mercado" },
    ],
  },
  {
    label: "Marketing y publicidad digital",
    slug: "marketing-digital-publicidad",
    children: [
      { label: "Marketing Digital", href: "/servicios/marketing-digital" },
      { label: "Publicidad Digital", href: "/servicios/publicidad-digital" },
      { label: "Redes Sociales", href: "/servicios/redes-sociales" },
    ],
  },
  {
    label: "Web, SEO y automatización",
    slug: "web-seo",
    children: [
      { label: "Desarrollo Web", href: "/servicios/desarrollo-web" },
      { label: "SEO", href: "/servicios/seo" },
      { label: "CRM y Automatización", href: "/servicios/crm-automatizacion" },
    ],
  },
  {
    label: "Marca y contenido",
    slug: "marca-contenido",
    children: [
      { label: "Branding", href: "/servicios/branding" },
      { label: "Producción Audiovisual", href: "/servicios/produccion-audiovisual" },
    ],
  },
  {
    label: "Activación y medios físicos",
    slug: "btl-medios",
    children: [
      { label: "BTL y Activaciones", href: "/servicios/btl" },
      { label: "Publicidad Móvil", href: "/servicios/publicidad-movil" },
      { label: "Estructuras Publicitarias", href: "/servicios/estructuras-publicitarias" },
      { label: "Material POP", href: "/servicios/material-pop" },
      { label: "Imprenta Corporativa", href: "/servicios/imprenta" },
      { label: "Merchandising", href: "/servicios/merchandising" },
    ],
  },
];

/** 5 sectores — URLs a raíz (doc 01/02). */
export const SECTORS: NavLink[] = [
  { label: "Inmobiliario", href: "/marketing-inmobiliario" },
  { label: "Automotriz", href: "/marketing-automotriz" },
  { label: "Turismo", href: "/marketing-turismo" },
  { label: "Marcas y consumo", href: "/marketing-marcas-consumo" },
  { label: "Salud", href: "/marketing-salud" },
  { label: "Agroexportación", href: "/marketing-agroexportacion" },
  { label: "Pisco y Vino", href: "/marketing-pisco-vino" },
];

/** Menú principal (doc 02 §7). */
export const MAIN_NAV: NavLink[] = [
  { label: "Servicios", href: "/servicios" },
  { label: "Sectores", href: "/sectores" },
  { label: "Casos", href: "/casos" },
  { label: "Blog", href: "/blog" },
  { label: "Nosotros", href: "/nosotros" },
];

export const CTA_PRIMARY: NavLink = { label: "Agenda una llamada", href: "/contacto" };

/** Columnas del footer (doc 02 §7). */
export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  {
    title: "Servicios",
    links: SERVICE_CATEGORIES.map((c) => ({
      label: c.label,
      href: `/servicios/${c.slug}`,
    })),
  },
  {
    title: "Sectores",
    links: SECTORS.map((s) => ({ label: `Marketing ${s.label.toLowerCase()}`, href: s.href })),
  },
  {
    title: "Agencia",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Casos", href: "/casos" },
      { label: "Blog", href: "/blog" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
];
