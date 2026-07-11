import { site } from "@/lib/site";

/**
 * Talentos de Suggestion — datos de las tarjetas personales (/equipo/[slug]).
 * Cada tarjeta física lleva un QR a su página. Contacto: por defecto el de la
 * empresa (los directos se agregan cuando cada talento los confirme).
 * `foto` es opcional: si existe, reemplaza al monograma (foto-ready).
 */

export type Talento = {
  slug: string;
  nombre: string;
  /** Nombre corto para saludos ("Hola Abraham…"). */
  corto: string;
  rol: string;
  bio: string;
  iniciales: string;
  especialidades: string[];
  telefono: string; // E.164
  whatsapp: string; // solo dígitos, con código de país
  email: string;
  foto?: string;
  /** Redes personales (opcional); si no, se usan las de la empresa. */
  linkedin?: string;
  instagram?: string;
};

const T = { telefono: site.phoneE164, whatsapp: site.whatsappNumber, email: site.email };

export const EQUIPO: Talento[] = [
  {
    slug: "abraham",
    nombre: "Abraham Velásquez",
    corto: "Abraham",
    rol: "Gerente General · Cofundador",
    bio: "Dirige la estrategia comercial y de performance de cada cuenta. Siete años convirtiendo la atención de los mercados de Ica y Perú en ventas medibles.",
    iniciales: "AV",
    especialidades: ["Estrategia comercial", "Marketing de performance", "Negociación B2B"],
    ...T,
  },
  {
    slug: "maria-teresa",
    nombre: "María Teresa Vera",
    corto: "María Teresa",
    rol: "Cofundadora · Administradora",
    bio: "Administración y operación: que cada proyecto salga a tiempo, en orden y con los números claros.",
    iniciales: "MV",
    especialidades: ["Administración", "Operaciones", "Gestión de proyectos"],
    ...T,
  },
  {
    slug: "cristofer",
    nombre: "Cristofer Amable",
    corto: "Cristofer",
    rol: "Análisis de mercado y tendencias",
    bio: "Investigación, datos y tendencias que guían cada estrategia antes de invertir un sol en pauta.",
    iniciales: "CA",
    especialidades: ["Investigación de mercado", "Análisis de datos", "Tendencias"],
    ...T,
  },
  {
    slug: "diego",
    nombre: "Diego Urday",
    corto: "Diego",
    rol: "Desarrollo web",
    bio: "Construye las webs, landings y automatizaciones que convierten la atención en leads.",
    iniciales: "DU",
    especialidades: ["Desarrollo web", "Landings de conversión", "Automatización"],
    ...T,
  },
  {
    slug: "yurayma",
    nombre: "Yurayma Vásquez",
    corto: "Yurayma",
    rol: "Diseño",
    bio: "Identidad visual y piezas gráficas de cada campaña: lo que tu público termina viendo.",
    iniciales: "YV",
    especialidades: ["Identidad visual", "Diseño de campañas", "Dirección gráfica"],
    ...T,
  },
  {
    slug: "jose-carlos",
    nombre: "José Carlos Muñoz",
    corto: "José Carlos",
    rol: "Audiovisual y edición",
    bio: "Cámaras, dirección de foto y edición del contenido que hace visible a cada marca.",
    iniciales: "JM",
    especialidades: ["Producción audiovisual", "Dirección de foto", "Edición"],
    ...T,
  },
  {
    slug: "nicolas",
    nombre: "Nicolás Montoya",
    corto: "Nicolás",
    rol: "Logística y dirección de eventos",
    bio: "Coordina la logística y dirige las activaciones y eventos en calle, del plano al día D.",
    iniciales: "NM",
    especialidades: ["Eventos y activaciones", "Logística", "Producción en campo"],
    ...T,
  },
];

export const getTalento = (slug: string): Talento | undefined => EQUIPO.find((t) => t.slug === slug);
export const allTalentoSlugs = (): string[] => EQUIPO.map((t) => t.slug);
