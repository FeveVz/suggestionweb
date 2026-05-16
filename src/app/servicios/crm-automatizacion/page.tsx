import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'CRM y Automatización de Marketing | Suggestion',
  description: 'Implementamos CRMs y automatizamos procesos de marketing. HubSpot, Salesforce, automatización de emails, leads y workflows.',
  keywords: ['CRM', 'automatización marketing', 'marketing automation', 'HubSpot', 'Salesforce', 'automatización leads'],
  openGraph: {
    title: 'CRM y Automatización de Marketing | Suggestion',
    description: 'Automatiza procesos y escala tu negocio con herramientas inteligentes.',
    type: 'website',
  },
};

export default function CRMAutomatizacionPage() {
  const heroData = {
    badge: 'CRM & Automatización',
    title: 'Automatiza y',
    highlightedWord: 'Escala',
    subtitle: 'Menos trabajo manual, más resultados',
    description: 'Implementamos sistemas CRM y automatizaciones que trabajan 24/7. Tu equipo se enfoca en cerrar ventas mientras el sistema genera y nutre leads.',
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

  const stats = [
    { value: '60%', label: 'Ahorro en tareas manuales' },
    { value: '3x', label: 'Leads nutridos automáticamente' },
    { value: '200+', label: 'Implementaciones' },
    { value: '24/7', label: 'Sistema trabajando' },
  ];

  const testimonials = [
    { quote: 'Implementaron HubSpot y ahora mi equipo de ventas pasa menos tiempo en admin y más cerrando deals.', author: 'Gabriel Torres', role: 'VP Sales' },
    { quote: 'Teníamos leads perdiéndose. Ahora el sistema los nutre automáticamente hasta que estén listos para comprar.', author: 'Alejandra Ríos', role: 'Marketing Manager' },
    { quote: 'El ROI de la automatización fue inmediato. Menos errores, más eficiencia.', author: 'Daniel Pérez', role: 'COO' },
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
      stats={stats}
      testimonials={testimonials}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
