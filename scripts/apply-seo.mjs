import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const BASE = 'src/app/servicios';

/* Estudio de palabras clave por servicio (mercado Perú · base en Ica · alcance nacional).
   - title: SIN "| Suggestion" (la plantilla del layout lo añade automáticamente).
   - h1 = title + highlight (sentence case). */
const K = {
  'marketing-digital': {
    primary: 'agencia de marketing digital en Perú',
    secondary: ['marketing digital Perú', 'agencia de marketing digital Ica', 'marketing de performance', 'estrategia de marketing digital'],
    longtail: ['agencia de marketing digital para pymes en Perú', 'cuánto cuesta una agencia de marketing digital en Perú'],
    title: 'Agencia de Marketing Digital en Perú',
    description: 'Agencia de marketing digital en Ica y todo el Perú. Estrategias de performance que convierten atención en ventas: más leads, citas y cierres medibles.',
    h1: 'Marketing digital que', highlight: 'genera ventas', subtitle: 'Estrategia de performance para tu negocio',
    heroDesc: 'Diseñamos y ejecutamos estrategias de marketing digital orientadas a resultados: más leads calificados, más citas y más ventas para tu negocio en Perú.',
  },
  'marketing-redes-sociales': {
    primary: 'gestión de redes sociales en Perú',
    secondary: ['community manager Perú', 'agencia de redes sociales Ica', 'manejo de redes sociales', 'publicidad en Instagram y Facebook'],
    longtail: ['cuánto cobra un community manager en Perú', 'agencia para manejar redes sociales de mi empresa'],
    title: 'Gestión de Redes Sociales en Perú',
    description: 'Gestión profesional de redes sociales en Ica y Perú: contenido, community management y pauta en Instagram, Facebook y TikTok que genera clientes, no solo likes.',
    h1: 'Redes sociales que', highlight: 'venden', subtitle: 'Comunidad que se convierte en clientes',
    heroDesc: 'Manejamos tus redes sociales con foco en negocio: contenido, community management y publicidad que conecta con tu audiencia y genera ventas reales.',
  },
  'publicidad-digital': {
    primary: 'publicidad digital en Perú',
    secondary: ['Meta Ads Perú', 'Google Ads Perú', 'TikTok Ads', 'campañas de performance', 'agencia de publicidad digital'],
    longtail: ['agencia de Google Ads y Meta Ads en Perú', 'cuánto invertir en publicidad digital en Perú'],
    title: 'Publicidad Digital: Meta y Google Ads en Perú',
    description: 'Campañas de publicidad digital en Meta Ads, Google Ads y TikTok Ads para el Perú. Performance medible: bajo costo por lead y más ventas. Pauta orientada a resultados.',
    h1: 'Publicidad digital que', highlight: 'convierte', subtitle: 'Pauta con ROI medible, no alcance vacío',
    heroDesc: 'Creamos y optimizamos campañas en Meta, Google y TikTok orientadas a lead y venta. Cada sol invertido se mide en leads, citas y cierres, no en likes.',
  },
  'seo-posicionamiento': {
    primary: 'posicionamiento web SEO en Perú',
    secondary: ['agencia SEO Perú', 'posicionamiento en Google', 'SEO local Ica', 'SEO técnico', 'consultoría SEO'],
    longtail: ['cómo aparecer primero en Google en Perú', 'agencia de posicionamiento web en Perú'],
    title: 'Posicionamiento Web SEO en Perú',
    description: 'Agencia SEO en Perú. Posicionamiento web orgánico para aparecer primero en Google: SEO técnico, contenido y SEO local en Ica. Más tráfico que convierte en ventas.',
    h1: 'SEO que te pone', highlight: 'primero en Google', subtitle: 'Tráfico orgánico que genera ventas',
    heroDesc: 'Posicionamos tu sitio en los primeros resultados de Google con SEO técnico, contenido y SEO local. Tráfico de alta intención que se convierte en clientes.',
  },
  'branding-diseno': {
    primary: 'branding y diseño de marca en Perú',
    secondary: ['diseño de logotipo Perú', 'identidad visual', 'manual de marca', 'agencia de branding Ica'],
    longtail: ['cuánto cuesta el diseño de una marca en Perú', 'agencia de branding para empresas en Perú'],
    title: 'Branding y Diseño de Marca en Perú',
    description: 'Branding y diseño de identidad de marca en Ica y Perú. Creamos marcas memorables: logotipo, identidad visual y manual de marca que conectan y venden.',
    h1: 'Branding que', highlight: 'deja huella', subtitle: 'Identidad que tu cliente recuerda',
    heroDesc: 'Construimos marcas con estrategia: naming, logotipo, identidad visual y manual de marca. Una imagen coherente que genera confianza y diferencia tu negocio.',
  },
  'desarrollo-web': {
    primary: 'diseño y desarrollo web en Perú',
    secondary: ['diseño de páginas web Perú', 'creación de sitios web', 'desarrollo web Ica', 'landing pages', 'CRO'],
    longtail: ['cuánto cuesta una página web en Perú', 'diseño de páginas web que convierten'],
    title: 'Diseño y Desarrollo Web en Perú',
    description: 'Diseño y desarrollo web en Perú: páginas web rápidas, optimizadas para SEO y orientadas a conversión (CRO). Sitios que convierten visitantes en clientes.',
    h1: 'Páginas web que', highlight: 'convierten', subtitle: 'Sitios rápidos, SEO y orientados a venta',
    heroDesc: 'Diseñamos y desarrollamos sitios web veloces, optimizados para buscadores y pensados para convertir: cada página guía al visitante hacia la acción.',
  },
  'consultoria-marketing': {
    primary: 'consultoría de marketing digital en Perú',
    secondary: ['consultor de marketing Perú', 'asesoría de marketing', 'auditoría de marketing', 'estrategia comercial'],
    longtail: ['consultoría de marketing para pymes en Perú', 'asesor de marketing digital en Perú'],
    title: 'Consultoría de Marketing Digital en Perú',
    description: 'Consultoría de marketing digital en Perú. Auditamos tu funnel y diseñamos una estrategia de performance con KPIs claros: leads, citas y cierres.',
    h1: 'Consultoría que', highlight: 'ordena tu crecimiento', subtitle: 'Estrategia con números, no opiniones',
    heroDesc: 'Analizamos tu mercado, tu competencia y tu embudo de ventas para entregarte una hoja de ruta clara, con prioridades y métricas que sí mueven el negocio.',
  },
  'crm-automatizacion': {
    primary: 'CRM y automatización de marketing en Perú',
    secondary: ['automatización de marketing Perú', 'implementación de CRM', 'embudos de venta', 'email marketing automatizado'],
    longtail: ['cómo automatizar el seguimiento de leads en Perú', 'implementar un CRM para mi empresa'],
    title: 'CRM y Automatización de Marketing en Perú',
    description: 'Implementamos CRM y automatización de marketing en Perú: del lead a la cita al cierre con seguimiento automático. Escala tus ventas sin perder oportunidades.',
    h1: 'Automatización que', highlight: 'escala tus ventas', subtitle: 'Del lead al cierre, sin fugas',
    heroDesc: 'Conectamos y automatizamos tu funnel con CRM: captación, seguimiento y nutrición de leads hasta el cierre. Más ventas con el mismo equipo comercial.',
  },
  'produccion-audiovisual': {
    primary: 'producción audiovisual en Perú',
    secondary: ['producción de video Perú', 'video marketing', 'spots publicitarios', 'productora audiovisual Ica'],
    longtail: ['producción de video para redes sociales en Perú', 'cuánto cuesta un video publicitario en Perú'],
    title: 'Producción Audiovisual y de Video en Perú',
    description: 'Producción audiovisual en Ica y Perú: spots, video marketing y contenido para redes y campañas. Piezas que captan la atención y mueven a la acción.',
    h1: 'Video que', highlight: 'mueve a la acción', subtitle: 'Contenido audiovisual con foco en venta',
    heroDesc: 'Producimos video y contenido audiovisual de alto impacto para campañas y redes: desde la idea y el guion hasta la grabación, edición y post.',
  },
  'investigacion-mercado': {
    primary: 'investigación de mercado en Perú',
    secondary: ['estudio de mercado Perú', 'análisis de mercado', 'investigación de mercado Ica', 'análisis de competencia'],
    longtail: ['cómo hacer un estudio de mercado en Perú', 'empresa de estudios de mercado en Perú'],
    title: 'Investigación y Estudio de Mercado en Perú',
    description: 'Estudios de mercado en Perú: datos sobre tu cliente, competencia y demanda para decidir con certeza. Investigación que guía tu inversión y reduce el riesgo.',
    h1: 'Datos que', highlight: 'guían tus decisiones', subtitle: 'Investiga antes de invertir',
    heroDesc: 'Investigamos tu mercado, tu audiencia y tu competencia con metodología clara. Insights accionables para tomar decisiones de negocio con datos, no corazonadas.',
  },
  'merchandising': {
    primary: 'merchandising publicitario en Perú',
    secondary: ['artículos promocionales Perú', 'regalos corporativos', 'merchandising personalizado', 'merchandising Ica'],
    longtail: ['regalos corporativos personalizados en Perú', 'artículos publicitarios con logo en Perú'],
    title: 'Merchandising Publicitario en Perú',
    description: 'Merchandising publicitario en Ica y Perú: artículos promocionales y regalos corporativos personalizados con tu marca. Presencia que se queda con tu cliente.',
    h1: 'Merchandising que', highlight: 'prolonga tu marca', subtitle: 'Tu marca, en manos de tu cliente',
    heroDesc: 'Producimos artículos promocionales y regalos corporativos personalizados con tu marca: piezas útiles y memorables que mantienen tu negocio presente.',
  },
  'imprenta-corporativa': {
    primary: 'imprenta corporativa en Perú',
    secondary: ['servicios de impresión Perú', 'imprenta Ica', 'impresión gran formato', 'papelería corporativa'],
    longtail: ['imprenta para empresas en Perú', 'impresión de tarjetas y brochures en Perú'],
    title: 'Imprenta Corporativa e Impresión en Perú',
    description: 'Imprenta corporativa en Ica y Perú: tarjetas, brochures, papelería y gran formato. Impresión de calidad para tu marca, a tiempo y con acabado profesional.',
    h1: 'Impresión que', highlight: 'representa tu marca', subtitle: 'Calidad y acabado profesional',
    heroDesc: 'Servicio de imprenta corporativa de principio a fin: tarjetas, brochures, papelería, etiquetas y gran formato, con calidad consistente y entrega puntual.',
  },
  'estructuras-publicitarias': {
    primary: 'estructuras publicitarias en Perú',
    secondary: ['paneles publicitarios Perú', 'publicidad exterior', 'vallas y tótems', 'rótulos luminosos Ica'],
    longtail: ['fabricación de paneles publicitarios en Perú', 'publicidad exterior para mi negocio'],
    title: 'Estructuras y Paneles Publicitarios en Perú',
    description: 'Estructuras publicitarias en Ica y Perú: paneles, vallas, tótems y rótulos. Publicidad exterior que da visibilidad y posiciona tu marca en la calle.',
    h1: 'Publicidad exterior que', highlight: 'da visibilidad', subtitle: 'Tu marca, imposible de ignorar',
    heroDesc: 'Diseñamos y fabricamos estructuras de publicidad exterior —paneles, vallas, tótems y rótulos— que dan visibilidad y posicionan tu marca donde está tu público.',
  },
  'publicidad-movil': {
    primary: 'publicidad móvil en Perú',
    secondary: ['publicidad en vehículos Perú', 'rotulación vehicular', 'publicidad itinerante', 'publicidad móvil Ica'],
    longtail: ['publicidad en buses y vehículos en Perú', 'rotulado de vehículos para empresas'],
    title: 'Publicidad Móvil y en Vehículos en Perú',
    description: 'Publicidad móvil en Ica y Perú: rotulación vehicular y campañas itinerantes que llevan tu marca a más lugares. Visibilidad que se mueve con tu mercado.',
    h1: 'Publicidad que', highlight: 'llega más lejos', subtitle: 'Tu marca recorre la ciudad',
    heroDesc: 'Llevamos tu marca a la calle con publicidad móvil y rotulación vehicular: campañas itinerantes con alta cobertura y recordación en tu zona de interés.',
  },
  'btl-activaciones': {
    primary: 'BTL y activaciones de marca en Perú',
    secondary: ['marketing BTL Perú', 'activaciones de marca', 'sampling y eventos', 'activaciones Ica'],
    longtail: ['agencia BTL para activaciones en Perú', 'activación de marca en punto de venta'],
    title: 'BTL y Activaciones de Marca en Perú',
    description: 'Marketing BTL y activaciones de marca en Ica y Perú: experiencias, sampling y eventos que conectan con tu público y generan recordación y ventas.',
    h1: 'Activaciones que', highlight: 'conectan y venden', subtitle: 'Experiencias que dejan huella',
    heroDesc: 'Diseñamos y ejecutamos activaciones BTL y experiencias de marca: sampling, eventos y dinámicas en punto de venta que generan interacción, datos y ventas.',
  },
  'material-pop': {
    primary: 'material POP en Perú',
    secondary: ['publicidad punto de venta Perú', 'displays y exhibidores', 'material POP Ica', 'POP personalizado'],
    longtail: ['material POP para punto de venta en Perú', 'exhibidores publicitarios personalizados'],
    title: 'Material POP y Publicidad en Punto de Venta',
    description: 'Material POP en Ica y Perú: displays, exhibidores y piezas para el punto de venta que captan la atención del comprador y aumentan tus ventas.',
    h1: 'Material POP que', highlight: 'impulsa la compra', subtitle: 'Gana la batalla en el punto de venta',
    heroDesc: 'Creamos material POP que destaca en el punto de venta: displays, exhibidores y piezas que captan la atención del comprador en el momento de decidir.',
  },
};

const BADGE = {
  'marketing-digital': 'Marketing digital',
  'marketing-redes-sociales': 'Redes sociales',
  'publicidad-digital': 'Publicidad digital',
  'seo-posicionamiento': 'SEO',
  'branding-diseno': 'Branding & diseño',
  'desarrollo-web': 'Desarrollo web',
  'consultoria-marketing': 'Consultoría',
  'crm-automatizacion': 'CRM & automatización',
  'produccion-audiovisual': 'Producción audiovisual',
  'investigacion-mercado': 'Investigación de mercado',
  'merchandising': 'Merchandising',
  'imprenta-corporativa': 'Imprenta corporativa',
  'estructuras-publicitarias': 'Estructuras publicitarias',
  'publicidad-movil': 'Publicidad móvil',
  'btl-activaciones': 'BTL & activaciones',
  'material-pop': 'Material POP',
};

function grab(src, re) { const m = src.match(re); return m ? m[1] : null; }

let changed = 0;
for (const [slug, k] of Object.entries(K)) {
  const file = join(BASE, slug, 'page.tsx');
  let src;
  try { src = readFileSync(file, 'utf8'); } catch { console.log('skip (no file):', slug); continue; }

  const iconName = grab(src, /iconName:\s*'([^']+)'/);
  const color = grab(src, /color:\s*'(#[0-9A-Fa-f]+)'/);
  const cta = grab(src, /cta:\s*'([^']+)'/) || 'Agenda una llamada';

  const kw = [k.primary, ...k.secondary, ...k.longtail];
  const kwStr = kw.map((x) => `'${x.replace(/'/g, "\\'")}'`).join(', ');

  const metaBlock =
`export const metadata: Metadata = {
  title: '${k.title}',
  description: '${k.description}',
  keywords: [${kwStr}],
  alternates: { canonical: \`\${process.env.NEXT_PUBLIC_SITE_URL || 'https://suggestion.pe'}/servicios/${slug}\` },
  openGraph: {
    title: '${k.title} | Suggestion',
    description: '${k.description}',
    type: 'website',
  },
};`;

  const heroBlock =
`  const heroData = {
    badge: '${BADGE[slug]}',
    title: '${k.h1}',
    highlightedWord: '${k.highlight}',
    subtitle: '${k.subtitle}',
    description: '${k.heroDesc}',
    cta: '${cta}',
    iconName: '${iconName}',
    color: '${color}',
  };`;

  const before = src;
  src = src.replace(/export const metadata: Metadata = \{[\s\S]*?\n\};/, metaBlock);
  src = src.replace(/ {2}const heroData = \{[\s\S]*?\n {2}\};/, heroBlock);

  if (src !== before) { writeFileSync(file, src); changed++; console.log('SEO aplicado:', slug); }
  else console.log('SIN CAMBIOS (revisar regex):', slug);
}

/* ---- Documento del estudio ---- */
mkdirSync('docs', { recursive: true });
let md = `# Estudio de palabras clave — Suggestion\n\n` +
`Mercado: **Perú** · Base en **Ica**, alcance nacional. Enfoque: marketing de performance.\n\n` +
`Convención de títulos: la página define el título sin sufijo; el layout añade \` | Suggestion\` automáticamente.\n\n`;
for (const [slug, k] of Object.entries(K)) {
  md += `## /servicios/${slug}\n\n` +
    `- **Keyword primaria:** ${k.primary}\n` +
    `- **Secundarias:** ${k.secondary.join(', ')}\n` +
    `- **Long-tail:** ${k.longtail.join(', ')}\n` +
    `- **Title:** ${k.title} | Suggestion\n` +
    `- **Meta description:** ${k.description}\n` +
    `- **H1:** ${k.h1} ${k.highlight}\n\n`;
}
writeFileSync('docs/seo-keywords.md', md);

console.log(`\nPáginas modificadas: ${changed} · doc: docs/seo-keywords.md`);
