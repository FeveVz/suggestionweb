/**
 * Navegación canónica de suggestion.pe (header mega-menú + footer).
 * Fuente única de labels + slugs del menú. Derivado de docs-fuente 01/02/18.
 * El contenido/copy de cada página vive en servicios.ts / sectores.ts con
 * los MISMOS slugs.
 */

import { CIUDADES } from "./ciudades";

export type NavLink = { label: string; href: string };

export type ServiceCategory = {
  label: string; // nombre de cara al cliente (doc 01)
  slug: string; // /servicios/<slug>
  children: NavLink[]; // servicios hijos (href absoluto)
};

/** 5 categorías → 22 servicios (16 del doc 18 + 6 del keyword research de nov-2026). */
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
      { label: "Google Ads", href: "/servicios/publicidad-digital" },
      { label: "Meta Ads", href: "/servicios/meta-ads" },
      { label: "Redes Sociales", href: "/servicios/redes-sociales" },
    ],
  },
  {
    label: "Web, SEO y automatización",
    slug: "web-seo",
    children: [
      { label: "Desarrollo Web", href: "/servicios/desarrollo-web" },
      { label: "Tienda Virtual", href: "/servicios/tienda-virtual" },
      { label: "SEO", href: "/servicios/seo" },
      { label: "CRM y Automatización", href: "/servicios/crm-automatizacion" },
      { label: "Agente de IA para WhatsApp", href: "/servicios/chatbot-whatsapp" },
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
      { label: "Eventos Corporativos", href: "/servicios/eventos-corporativos" },
      { label: "Publicidad Móvil", href: "/servicios/publicidad-movil" },
      { label: "Estructuras Publicitarias", href: "/servicios/estructuras-publicitarias" },
      { label: "Letreros Luminosos", href: "/servicios/letreros-luminosos" },
      { label: "Material POP", href: "/servicios/material-pop" },
      { label: "Imprenta Corporativa", href: "/servicios/imprenta" },
      { label: "Gigantografías", href: "/servicios/gigantografias" },
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
  // Mismo criterio que abajo: "Casos" nombra el formato —un caso de
  // estudio—, no lo que el visitante se lleva. El H1 de la página ya dice
  // "Resultados de negocio", así que el menú solo recoge su propia palabra.
  // La URL, el título y la palabra clave siguen siendo "casos de éxito".
  { label: "Resultados", href: "/casos" },
  // "Portafolio" al lado de "Casos" se lee como lo mismo: en jerga de agencia
  // son sinónimos y ninguna de las dos palabras dice QUÉ prueba cada una.
  // "Activaciones" nombra el oficio, no el formato, y nadie lo confunde con
  // un caso. La URL y el título de la página siguen siendo /portafolio.
  { label: "Activaciones", href: "/portafolio" },
  { label: "Blog", href: "/blog" },
  { label: "Nosotros", href: "/nosotros" },
];

// La cabecera lleva a la misma oferta que toda la home: la consultoría cero.
// /contacto sigue en el pie para quien lo busque.
export const CTA_PRIMARY: NavLink = { label: "Consultoría cero", href: "/consultoria-cero" };

/**
 * Páginas de producción: quien llega quiere un precio, no una reunión. Ahí la
 * cabecera y el menú del celular cotizan por WhatsApp con el servicio escrito,
 * en vez de ofrecer la consultoría (auditoría CRO-05, 20-nov-2026). BTL queda
 * fuera hasta que el dueño decida si es producción (decisión 1).
 */
export const CTA_COTIZA = "Cotiza por WhatsApp";
export const COTIZA_PRODUCCION: Record<string, string> = {
  "/servicios/imprenta": "impresiones",
  "/servicios/gigantografias": "gigantografías",
  "/servicios/merchandising": "merchandising",
  "/servicios/material-pop": "material POP",
  "/servicios/estructuras-publicitarias": "estructuras publicitarias",
  "/servicios/letreros-luminosos": "letreros luminosos",
  "/servicios/publicidad-movil": "publicidad móvil",
};
export const mensajeCotiza = (tema: string) => `Hola Suggestion, quiero cotizar ${tema}.`;

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
    // Da a cada página de ciudad un enlace entrante desde todo el sitio.
    title: "Dónde trabajamos",
    links: CIUDADES.map((c) => ({ label: c.nombre, href: `/agencia-de-marketing-en-${c.slug}` })),
  },
  {
    title: "Agencia",
    links: [
      { label: "Nosotros", href: "/nosotros" },
      { label: "Cómo medimos", href: "/metodo" },
      { label: "Casos", href: "/casos" },
      { label: "Portafolio BTL", href: "/portafolio" },
      { label: "Blog", href: "/blog" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
];
