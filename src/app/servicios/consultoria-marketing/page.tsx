import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Consultoría de Marketing Digital en Perú',
  description: 'Consultoría de marketing digital en Perú. Auditamos tu funnel y diseñamos una estrategia de performance con KPIs claros: leads, citas y cierres.',
  keywords: ['consultoría de marketing digital en Perú', 'consultor de marketing Perú', 'asesoría de marketing', 'auditoría de marketing', 'estrategia comercial', 'consultoría de marketing para pymes en Perú', 'asesor de marketing digital en Perú'],
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suggestion.pe'}/servicios/consultoria-marketing` },
  openGraph: {
    title: 'Consultoría de Marketing Digital en Perú | Suggestion',
    description: 'Consultoría de marketing digital en Perú. Auditamos tu funnel y diseñamos una estrategia de performance con KPIs claros: leads, citas y cierres.',
    type: 'website',
  },
};

export default function ConsultoriaPage() {
  const heroData = {
    badge: 'Consultoría',
    title: 'Consultoría que',
    highlightedWord: 'ordena tu crecimiento',
    subtitle: 'Estrategia con números, no opiniones',
    description: 'Analizamos tu mercado, tu competencia y tu embudo de ventas para entregarte una hoja de ruta clara, con prioridades y métricas que sí mueven el negocio.',
    cta: 'Agenda Consultoría',
    iconName: 'Lightbulb',
    color: '#FF8C00',
  };

  const benefits = [
    { title: 'Visión Objetiva', description: 'Auditoría imparcial de tu situación actual con recomendaciones accionables.', iconName: 'Target' },
    { title: 'Plan de Acción', description: 'Roadmap detallado con prioridades, tiempos y recursos necesarios.', iconName: 'Briefcase' },
    { title: 'Experiencia Probada', description: 'Consejo basado en casos de éxito reales, no teoría sin práctica.', iconName: 'BarChart3' },
    { title: 'Acompañamiento', description: 'No solo decimos qué hacer, te acompañamos en la implementación.', iconName: 'Users' },
  ];

  const features = [
    { title: 'Auditoría Digital Completa', description: 'Análisis de canales, métricas, procesos y herramientas.' },
    { title: 'Plan Estratégico', description: 'Documento con objetivos, estrategias, tácticas y KPIs.' },
    { title: 'Auditoría de Competencia', description: 'Análisis de estrategia digital de tus principales competidores.' },
    { title: 'Definición de Buyer Persona', description: 'Perfiles detallados de tus clientes ideales.' },
    { title: 'Customer Journey Mapping', description: 'Mapeo de puntos de contacto y optimización.' },
    { title: 'Análisis de Funnel', description: 'Identificación de fugas y oportunidades de mejora.' },
    { title: 'Seleccionar Herramientas', description: 'Recomendación de stack tecnológico óptimo.' },
    { title: 'Capacitación de Equipo', description: 'Training en herramientas y mejores prácticas.' },
    { title: 'Sesiones de Seguimiento', description: 'Reuniones periódicas para ajustar el rumbo.' },
  ];

  const process = [
    { step: '01', title: 'Diagnóstico', description: 'Entrevistas, auditoría y análisis de situación actual.' },
    { step: '02', title: 'Análisis', description: 'Identificación de oportunidades y áreas de mejora.' },
    { step: '03', title: 'Propuesta', description: 'Documento con plan de acción y roadmap detallado.' },
    { step: '04', title: 'Implementación', description: 'Acompañamiento en la ejecución de recomendaciones.' },
  ];



  const faqs = [
    { question: '¿Cuánto dura una consultoría?', answer: 'Una consultoría puntual puede ser de 2-4 horas. Un proyecto completo de auditoría y plan estratégico toma 2-4 semanas.' },
    { question: '¿Qué necesito preparar?', answer: 'Acceso a tus cuentas de marketing, analytics, datos de ventas. Y disposición para compartir información honesta sobre tu negocio.' },
    { question: '¿Ofrecen consultoría continua?', answer: 'Sí, ofrecemos planes de advisory mensual para acompañamiento constante en implementación y optimización.' },
    { question: '¿Trabajan con cualquier industria?', answer: 'Tenemos experiencia en múltiples sectores. Si no conocemos tu industria, investigamos antes de la consultoría.' },
  ];

  const relatedServices = [
    { title: 'Marketing Digital', href: '/servicios/marketing-digital', iconName: 'TrendingUp' },
    { title: 'Publicidad Digital', href: '/servicios/publicidad-digital', iconName: 'Target' },
    { title: 'CRM y Automatización', href: '/servicios/crm-automatizacion', iconName: 'Zap' },
    { title: 'Investigación de Mercado', href: '/servicios/investigacion-mercado', iconName: 'BarChart3' },
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
