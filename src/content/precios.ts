/**
 * Precios referenciales por servicio (de la v1 de Suggestion, en soles).
 * Mapa slug → planes. Los 4 servicios físicos (estructuras, imprenta,
 * material-pop, merchandising) van por cotización y no listan precios aquí.
 * Frecuencias corregidas respecto a la v1 (p. ej. desarrollo-web es por proyecto).
 */

import type { PlanPrecio } from "./types";

export const PRECIOS: Record<string, PlanPrecio[]> = {
  consultoria: [
    {
      nombre: "Diagnóstico",
      precio: "S/1,500",
      periodo: "pago único",
      incluye: ["Análisis completo", "Informe diagnóstico", "Recomendaciones", "1 sesión de presentación"],
    },
    {
      nombre: "Plan Completo",
      precio: "S/3,500",
      periodo: "proyecto",
      popular: true,
      incluye: ["Todo lo del Diagnóstico", "Plan de marketing", "2 meses de seguimiento", "Sesiones quincenales"],
    },
    {
      nombre: "Retainer",
      precio: "S/2,000",
      periodo: "/mes",
      incluye: ["Consultor dedicado", "Reuniones semanales", "Ajustes continuos", "Soporte ilimitado"],
    },
  ],
  "marketing-digital": [
    {
      nombre: "Starter",
      precio: "S/1,500",
      periodo: "/mes",
      incluye: ["Estrategia básica", "2 redes sociales", "8 publicaciones/mes", "Reporte mensual", "Soporte por email"],
    },
    {
      nombre: "Pro",
      precio: "S/2,500",
      periodo: "/mes",
      popular: true,
      incluye: ["Estrategia avanzada", "4 redes sociales", "15 publicaciones/mes", "1 campaña publicitaria", "Reporte quincenal", "Soporte prioritario"],
    },
    {
      nombre: "Enterprise",
      precio: "S/4,500",
      periodo: "/mes",
      incluye: ["Estrategia integral", "Redes ilimitadas", "Múltiples campañas", "SEO avanzado", "Reporte en tiempo real", "Reunión semanal"],
    },
  ],
  "publicidad-digital": [
    {
      nombre: "Starter",
      precio: "S/800",
      periodo: "/mes",
      incluye: ["1 plataforma", "3 grupos de anuncios", "Reporte semanal", "Optimización básica"],
    },
    {
      nombre: "Business",
      precio: "S/1,500",
      periodo: "/mes",
      popular: true,
      incluye: ["2 plataformas", "Grupos ilimitados", "Reporte en tiempo real", "A/B testing", "Landing page"],
    },
    {
      nombre: "Enterprise",
      precio: "S/3,000",
      periodo: "/mes",
      incluye: ["Todas las plataformas", "Campañas ilimitadas", "Consultor dedicado", "Funnel completo", "Attribution modeling"],
    },
  ],
  "desarrollo-web": [
    {
      nombre: "Landing Page",
      precio: "S/1,500",
      periodo: "proyecto",
      incluye: ["Diseño responsive", "Formulario de contacto", "Optimización SEO básica", "1 revisión incluida"],
    },
    {
      nombre: "Web Corporativa",
      precio: "S/4,000",
      periodo: "proyecto",
      popular: true,
      incluye: ["Diseño personalizado", "CMS incluido", "SEO técnico", "Formularios", "Capacitación"],
    },
    {
      nombre: "E-commerce",
      precio: "S/8,000",
      periodo: "proyecto",
      incluye: ["Catálogo ilimitado", "Pasarela de pagos", "Gestión de inventario", "SEO avanzado", "Soporte 3 meses"],
    },
  ],
  seo: [
    {
      nombre: "Básico",
      precio: "S/1,200",
      periodo: "/mes",
      incluye: ["Auditoría inicial", "Optimización on-page", "5 keywords objetivo", "Reporte mensual", "Soporte email"],
    },
    {
      nombre: "Profesional",
      precio: "S/2,500",
      periodo: "/mes",
      popular: true,
      incluye: ["Todo lo del Básico", "SEO técnico avanzado", "15 keywords", "Contenido mensual", "Link building básico"],
    },
    {
      nombre: "Enterprise",
      precio: "S/5,000",
      periodo: "/mes",
      incluye: ["Estrategia completa", "Sin límite de keywords", "Contenido ilimitado", "Link building premium", "Consultoría dedicada"],
    },
  ],
  "redes-sociales": [
    {
      nombre: "Starter",
      precio: "S/800",
      periodo: "/mes",
      incluye: ["2 redes sociales", "12 publicaciones/mes", "Diseño gráfico básico", "Calendario editorial", "Reporte mensual", "1 revisión de contenido"],
    },
    {
      nombre: "Business",
      precio: "S/1,500",
      periodo: "/mes",
      popular: true,
      incluye: ["3 redes sociales", "24 publicaciones/mes", "Stories semanales (16/mes)", "4 Reels/TikToks mensuales", "Gestión de comunidad", "Diseño profesional premium", "Reporte quincenal"],
    },
    {
      nombre: "Premium",
      precio: "S/2,800",
      periodo: "/mes",
      incluye: ["4+ redes sociales", "Publicaciones diarias", "Stories diarios", "8 Reels/TikToks mensuales", "Gestión de comunidad 24/7", "Diseño premium animado", "Reporte semanal", "Estrategia personalizada"],
    },
  ],
  "crm-automatizacion": [
    {
      nombre: "Starter",
      precio: "S/1,800",
      periodo: "pago único",
      incluye: ["Implementación de CRM básico", "Organización de la base de datos", "Pipeline de ventas (embudo)", "Asignación automática de leads", "Integración con formularios", "Automatización básica de seguimiento", "Capacitación inicial"],
    },
    {
      nombre: "Business",
      precio: "S/3,500",
      periodo: "pago único",
      popular: true,
      incluye: ["Todo lo del Starter", "Automatización de tareas comerciales", "Seguimiento automático por etapas", "Integración con WhatsApp y email", "Alertas y recordatorios", "Panel de control de leads", "Optimización del flujo de ventas", "Capacitación + acompañamiento"],
    },
    {
      nombre: "Enterprise",
      precio: "S/6,500",
      periodo: "pago único",
      incluye: ["Todo lo del Business", "Automatizaciones avanzadas (multicanal)", "Secuencias completas de seguimiento", "Lead scoring", "Integraciones con herramientas externas", "Dashboards de métricas", "Optimización continua", "Consultoría estratégica"],
    },
  ],
  branding: [
    {
      nombre: "Starter",
      precio: "S/1,800",
      periodo: "pago único",
      incluye: ["Diagnóstico de marca actual", "Definición de propuesta de valor", "Concepto de marca", "Diseño de logotipo principal", "Paleta de colores", "Tipografías", "Manual básico de marca"],
    },
    {
      nombre: "Business",
      precio: "S/3,500",
      periodo: "pago único",
      popular: true,
      incluye: ["Todo lo del Starter", "Naming (si aplica)", "Construcción de identidad de marca", "Territorio y personalidad de marca", "Sistema visual completo", "Aplicaciones (redes, papelería)", "Manual de marca intermedio", "Lineamientos de comunicación"],
    },
    {
      nombre: "Enterprise",
      precio: "S/6,500",
      periodo: "pago único",
      incluye: ["Todo lo del Business", "Estrategia de marca completa", "Definición de público y arquetipo", "Storytelling de marca", "Arquitectura de marca", "Tono y voz", "Aplicaciones avanzadas (campañas)", "Brandbook profesional", "Acompañamiento estratégico"],
    },
  ],
  "produccion-audiovisual": [
    {
      nombre: "Starter",
      precio: "S/1,200",
      periodo: "/mes",
      incluye: ["1 jornada de grabación al mes", "8 piezas audiovisuales/mes", "Edición estándar de video", "Adaptación para reels y stories", "Archivos optimizados", "Reunión mensual de planificación"],
    },
    {
      nombre: "Business",
      precio: "S/2,500",
      periodo: "/mes",
      popular: true,
      incluye: ["3 jornadas de grabación al mes", "16 piezas audiovisuales/mes", "Edición profesional", "Reels, stories y piezas para pauta", "Cobertura de producto/servicio/marca", "Motion graphics básicos", "Reunión semanal de seguimiento"],
    },
    {
      nombre: "Enterprise",
      precio: "S/4,500",
      periodo: "/mes",
      incluye: ["5 jornadas de grabación al mes", "31 piezas audiovisuales/mes", "Edición avanzada y narrativa estratégica", "Cobertura de campañas, eventos y lanzamientos", "Motion graphics y animaciones avanzadas", "Guiones y planificación creativa", "Prioridad en entregas", "Reunión semanal de estrategia"],
    },
  ],
  "investigacion-de-mercado": [
    {
      nombre: "Starter",
      precio: "S/1,500",
      periodo: "/proyecto",
      incluye: ["Análisis general del mercado", "Perfil de tu cliente ideal", "Análisis básico de competencia", "50 encuestas a tu público", "Conclusiones accionables", "Reporte ejecutivo"],
    },
    {
      nombre: "Business",
      precio: "S/3,000",
      periodo: "/proyecto",
      popular: true,
      incluye: ["Todo lo del Starter", "Análisis profundo del cliente", "Mapa de competencia (precios y oferta)", "Identificación de oportunidades", "150 encuestas", "Recomendaciones estratégicas", "Reporte + presentación"],
    },
    {
      nombre: "Enterprise",
      precio: "S/6,000",
      periodo: "/proyecto",
      incluye: ["Todo lo del Business", "Segmentación avanzada del mercado", "Customer journey", "Análisis de precios y posicionamiento", "300 encuestas", "10 a 15 entrevistas a clientes reales", "Estrategia basada en datos", "Presentación + sesión de consultoría"],
    },
  ],
  btl: [
    {
      nombre: "Starter",
      precio: "S/1,050",
      periodo: "por activación",
      incluye: ["Activación de 3 horas", "1 anfitriona / publiman", "1 animador", "1 volantero", "1 supervisor", "Captación básica de leads", "Reporte fotográfico"],
    },
    {
      nombre: "Business",
      precio: "S/1,800",
      periodo: "por activación",
      popular: true,
      incluye: ["Activación de 3 horas", "3 anfitrionas / publiman", "1 animador", "2 volanteros", "1 personaje (muñeco o bailarín)", "1 supervisor", "Dinámica de interacción", "Captación estructurada de leads", "Base de datos entregable"],
    },
    {
      nombre: "Enterprise",
      precio: "S/2,400",
      periodo: "por activación",
      incluye: ["Activación de 3 horas", "2 anfitrionas / publiman", "1 animador", "1 volantero", "1 personaje", "1 supervisor", "Experiencia de marca completa", "Alta captación de leads", "Base de datos lista para ventas"],
    },
  ],
  "publicidad-movil": [
    {
      nombre: "Starter",
      precio: "S/70",
      periodo: "por día",
      incluye: ["Contrato mínimo: 15 días", "1 bicivalla luminosa", "Activación de 4 horas diarias", "Recorrido en zonas estratégicas", "Visibilidad diurna y nocturna"],
    },
    {
      nombre: "Business",
      precio: "S/120",
      periodo: "por día",
      popular: true,
      incluye: ["Contrato mínimo: 15 días", "1 bicivalla luminosa", "1 bicipluma", "Activación de 4 horas diarias", "Mayor cobertura en campo", "Refuerzo de impacto visual"],
    },
    {
      nombre: "Enterprise",
      precio: "S/150",
      periodo: "por día",
      incluye: ["Contrato mínimo: 15 días", "1 bicivalla luminosa", "2 biciplumas", "Activación de 4 horas diarias", "Alta visibilidad", "Mayor recordación de marca"],
    },
  ],
};

export const getPrecios = (slug: string): PlanPrecio[] | undefined => PRECIOS[slug];
