import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'CRM y Automatización de Marketing en Perú',
  description: 'Implementamos CRM y automatización de marketing en Perú: del lead a la cita al cierre con seguimiento automático. Escala tus ventas sin perder oportunidades.',
  keywords: ['CRM y automatización de marketing en Perú', 'automatización de marketing Perú', 'implementación de CRM', 'embudos de venta', 'email marketing automatizado', 'cómo automatizar el seguimiento de leads en Perú', 'implementar un CRM para mi empresa'],
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suggestion.pe'}/servicios/crm-automatizacion` },
  openGraph: {
    title: 'CRM y Automatización de Marketing en Perú | Suggestion',
    description: 'Implementamos CRM y automatización de marketing en Perú: del lead a la cita al cierre con seguimiento automático. Escala tus ventas sin perder oportunidades.',
    type: 'website',
  },
};

export default function CRMAutomatizacionPage() {
  const heroData = {
    badge: 'CRM & automatización',
    title: 'Automatización que',
    highlightedWord: 'escala tus ventas',
    subtitle: 'Del lead al cierre, sin fugas',
    description: 'Conectamos y automatizamos tu funnel con CRM: captación, seguimiento y nutrición de leads hasta el cierre. Más ventas con el mismo equipo comercial.',
    cta: 'Automatiza Ahora',
    iconName: 'Zap',
    color: '#00BFFF',
  };

  const benefits = [
    { title: 'Ahorro de Tiempo', description: 'Automatiza tareas repetitivas y libera a tu equipo para lo importante.', iconName: 'Clock' },
    { title: 'Leads Nutridos', description: 'Secuencias de email que convierten leads fríos en oportunidades calientes.', iconName: 'Mail' },
    { title: 'Todo en un Lugar', description: 'Centraliza contactos, oportunidades, tareas y métricas en un solo sistema.', iconName: 'Database' },
    { title: 'Escalabilidad', description: 'El sistema maneja 10 leads o 10,000 sin que agregues personal.', iconName: 'Settings' },
  ];

  const features = [
    { title: 'Implementación de CRM', description: 'HubSpot, Salesforce, Pipedrive, Zoho según tu necesidad.' },
    { title: 'Migración de Datos', description: 'Importamos y limpiamos tu base de datos existente.' },
    { title: 'Email Automation', description: 'Secuencias de bienvenida, nurturing, reactivación y más.' },
    { title: 'Lead Scoring', description: 'Puntuación automática para priorizar los mejores leads.' },
    { title: 'Workflows', description: 'Automatizaciones basadas en triggers y comportamientos.' },
    { title: 'Integraciones', description: 'Conexión con tu web, ads, calendarios y herramientas.' },
    { title: 'Pipelines de Ventas', description: 'Etapas personalizadas con seguimiento automático.' },
    { title: 'Chatbots', description: 'Atención automatizada en web y WhatsApp.' },
    { title: 'Reportes y Dashboards', description: 'Visibilidad total del funnel de ventas y marketing.' },
  ];

  const process = [
    { step: '01', title: 'Auditoría', description: 'Revisamos tus procesos actuales y herramientas.' },
    { step: '02', title: 'Arquitectura', description: 'Diseñamos el flujo de datos y automatizaciones.' },
    { step: '03', title: 'Implementación', description: 'Configuramos CRM, integraciones y workflows.' },
    { step: '04', title: 'Capacitación', description: 'Entrenamos a tu equipo y documentamos todo.' },
  ];



  const faqs = [
    { question: '¿Qué CRM recomiendan?', answer: 'Depende de tu presupuesto y necesidades. HubSpot es ideal para marketing, Pipedrive para ventas simples, Salesforce para empresas grandes.' },
    { question: '¿Cuánto toma implementar?', answer: 'Un proyecto típico de CRM + automatizaciones básicas toma 4-8 semanas. Proyectos complejos pueden tomar más.' },
    { question: '¿Mantienen el sistema después?', answer: 'Ofrecemos planes de soporte y optimización continua para ajustar y mejorar el sistema.' },
    { question: '¿Integran con herramientas existentes?', answer: 'Sí, integramos con más de 200 herramientas vía API, Zapier o nativo según el caso.' },
  ];

  const relatedServices = [
    { title: 'Marketing Digital', href: '/servicios/marketing-digital', iconName: 'TrendingUp' },
    { title: 'Publicidad Digital', href: '/servicios/publicidad-digital', iconName: 'Target' },
    { title: 'Consultoría', href: '/servicios/consultoria-marketing', iconName: 'Lightbulb' },
    { title: 'Desarrollo Web', href: '/servicios/desarrollo-web', iconName: 'Code' },
  ];

  return (
    <ServicePageTemplate
      heroData={heroData}
      benefits={benefits}
      features={features}
      process={process}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
