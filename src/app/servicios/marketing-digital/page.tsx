import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Agencia de Marketing Digital en Perú',
  description: 'Agencia de marketing digital en Ica y todo el Perú. Estrategias de performance que convierten atención en ventas: más leads, citas y cierres medibles.',
  keywords: ['agencia de marketing digital en Perú', 'marketing digital Perú', 'agencia de marketing digital Ica', 'marketing de performance', 'estrategia de marketing digital', 'agencia de marketing digital para pymes en Perú', 'cuánto cuesta una agencia de marketing digital en Perú'],
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suggestion.pe'}/servicios/marketing-digital` },
  openGraph: {
    title: 'Agencia de Marketing Digital en Perú | Suggestion',
    description: 'Agencia de marketing digital en Ica y todo el Perú. Estrategias de performance que convierten atención en ventas: más leads, citas y cierres medibles.',
    type: 'website',
  },
};

export default function MarketingDigitalPage() {
  const heroData = {
    badge: 'Marketing digital',
    title: 'Marketing digital que',
    highlightedWord: 'genera ventas',
    subtitle: 'Estrategia de performance para tu negocio',
    description: 'Diseñamos y ejecutamos estrategias de marketing digital orientadas a resultados: más leads calificados, más citas y más ventas para tu negocio en Perú.',
    cta: 'Comienza tu Transformación',
    iconName: 'TrendingUp',
    color: '#FF8C00',
  };

  const benefits = [
    {
      title: 'Resultados Medibles',
      description: 'Cada estrategia tiene KPIs claros. Medimos, analizamos y optimizamos continuamente para maximizar tu ROI.',
      iconName: 'BarChart3',
    },
    {
      title: 'Estrategia Personalizada',
      description: 'No hay dos negocios iguales. Creamos estrategias a medida basadas en tus objetivos y tu mercado.',
      iconName: 'Target',
    },
    {
      title: 'Enfoque Integral',
      description: 'Combinamos SEO, publicidad, contenido y redes sociales en una estrategia cohesiva que potencia resultados.',
      iconName: 'Zap',
    },
    {
      title: 'Equipo Experto',
      description: 'Profesionales certificados en Google, Meta HubSpot y más. Conocimiento actualizado y aplicado.',
      iconName: 'Users',
    },
  ];

  const features = [
    { title: 'Análisis de Mercado', description: 'Investigación profunda de tu industria, competencia y audiencia objetivo.' },
    { title: 'Estrategia Digital', description: 'Plan detallado con objetivos SMART y roadmap de implementación.' },
    { title: 'SEO Técnico', description: 'Optimización técnica para mejorar tu visibilidad en buscadores.' },
    { title: 'Publicidad Digital', description: 'Campañas en Google Ads, Meta Ads y plataformas relevantes.' },
    { title: 'Marketing de Contenidos', description: 'Creación de contenido que atrae, educa y convierte.' },
    { title: 'Email Marketing', description: 'Estrategias de email que nutren leads y fidelizan clientes.' },
    { title: 'Analytics & Reporting', description: 'Dashboards personalizados con métricas que importan.' },
    { title: 'Optimización Continua', description: 'Mejora constante basada en datos y pruebas A/B.' },
    { title: 'Social Media', description: 'Gestión profesional de tus redes sociales.' },
  ];

  const process = [
    { step: '01', title: 'Descubrimiento', description: 'Analizamos tu negocio, competencia y mercado para identificar oportunidades.' },
    { step: '02', title: 'Estrategia', description: 'Diseñamos un plan personalizado con objetivos claros y medibles.' },
    { step: '03', title: 'Ejecución', description: 'Implementamos la estrategia con agilidad y comunicación transparente.' },
    { step: '04', title: 'Optimización', description: 'Medimos resultados y optimizamos continuamente para maximizar el ROI.' },
  ];



  const faqs = [
    { question: '¿Cuánto tiempo toma ver resultados?', answer: 'Los primeros resultados suelen verse entre 3-6 meses, dependiendo del tipo de estrategia y tu mercado. El SEO orgánico requiere más tiempo, mientras que la publicidad pagada puede generar resultados inmediatos.' },
    { question: '¿Qué incluye el servicio de marketing digital?', answer: 'Incluye análisis de mercado, estrategia personalizada, implementación de tácticas (SEO, publicidad, contenido, redes sociales), reportes mensuales y reuniones de seguimiento.' },
    { question: '¿Cómo miden el éxito de las campañas?', answer: 'Definimos KPIs claros alineados con tus objetivos de negocio. Utilizamos herramientas como Google Analytics, Google Ads, Meta Business Suite y dashboards personalizados para medir y reportar.' },
    { question: '¿Necesito contratar todos los servicios juntos?', answer: 'No. Diseñamos paquetes flexibles según tus necesidades y presupuesto. Podemos empezar con lo esencial e ir escalando según los resultados.' },
  ];

  const relatedServices = [
    { title: 'SEO', href: '/servicios/seo-posicionamiento', iconName: 'Search' },
    { title: 'Publicidad Digital', href: '/servicios/publicidad-digital', iconName: 'Target' },
    { title: 'Redes Sociales', href: '/servicios/marketing-redes-sociales', iconName: 'Share2' },
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
