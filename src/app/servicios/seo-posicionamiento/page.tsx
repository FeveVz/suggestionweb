import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Posicionamiento Web SEO en Perú',
  description: 'Agencia SEO en Perú. Posicionamiento web orgánico para aparecer primero en Google: SEO técnico, contenido y SEO local en Ica. Más tráfico que convierte en ventas.',
  keywords: ['posicionamiento web SEO en Perú', 'agencia SEO Perú', 'posicionamiento en Google', 'SEO local Ica', 'SEO técnico', 'consultoría SEO', 'cómo aparecer primero en Google en Perú', 'agencia de posicionamiento web en Perú'],
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suggestion.pe'}/servicios/seo-posicionamiento` },
  openGraph: {
    title: 'Posicionamiento Web SEO en Perú | Suggestion',
    description: 'Agencia SEO en Perú. Posicionamiento web orgánico para aparecer primero en Google: SEO técnico, contenido y SEO local en Ica. Más tráfico que convierte en ventas.',
    type: 'website',
  },
};

export default function SEOPage() {
  const heroData = {
    badge: 'SEO',
    title: 'SEO que te pone',
    highlightedWord: 'primero en Google',
    subtitle: 'Tráfico orgánico que genera ventas',
    description: 'Posicionamos tu sitio en los primeros resultados de Google con SEO técnico, contenido y SEO local. Tráfico de alta intención que se convierte en clientes.',
    cta: 'Mejora tu Posición',
    iconName: 'Search',
    color: '#00BFFF',
  };

  const benefits = [
    { title: 'Tráfico Orgánico de Calidad', description: 'Visitantes que buscan exactamente lo que ofreces. Intención de compra real.', iconName: 'TrendingUp' },
    { title: 'Resultados Sostenibles', description: 'A diferencia de la publicidad, el SEO genera resultados que persisten en el tiempo.', iconName: 'BarChart3' },
    { title: 'Contenido que Posiciona', description: 'Estrategia de contenido SEO que atrae y convierte mientras sube posiciones.', iconName: 'PenTool' },
    { title: 'Autoridad de Marca', description: 'Los primeros resultados generan confianza. Ser primero es ser líder.', iconName: 'Globe' },
  ];

  const features = [
    { title: 'Auditoría SEO', description: 'Análisis completo de tu sitio: técnico, contenido y autoridad.' },
    { title: 'SEO Técnico', description: 'Optimización de velocidad, estructura, schema, indexación.' },
    { title: 'Keyword Research', description: 'Identificamos las búsquedas rentables de tu industria.' },
    { title: 'Contenido SEO', description: 'Creación de contenido optimizado que posiciona y convierte.' },
    { title: 'Link Building', description: 'Estrategia de backlinks de calidad para aumentar autoridad.' },
    { title: 'SEO Local', description: 'Posicionamiento en mapas y búsquedas locales.' },
    { title: 'SEO para E-commerce', description: 'Optimización de fichas de producto y categorías.' },
    { title: 'Reportes Mensuales', description: 'Posiciones, tráfico orgánico, keywords y más.' },
    { title: 'Core Web Vitals', description: 'Optimización de métricas de experiencia de usuario.' },
  ];

  const process = [
    { step: '01', title: 'Auditoría', description: 'Analizamos tu sitio, competencia y oportunidades de posicionamiento.' },
    { step: '02', title: 'Estrategia', description: 'Plan de palabras clave, contenido y optimización técnica.' },
    { step: '03', title: 'Implementación', description: 'Ejecutamos optimizaciones y creamos contenido SEO.' },
    { step: '04', title: 'Escalamiento', description: 'Medimos resultados y escalamos lo que funciona.' },
  ];



  const faqs = [
    { question: '¿Cuánto tiempo toma ver resultados en SEO?', answer: 'Los primeros resultados suelen verse entre 3-6 meses. El SEO es una inversión a mediano-largo plazo que genera retornos sostenibles.' },
    { question: '¿Qué incluye el servicio de SEO?', answer: 'Incluye auditoría inicial, SEO técnico, investigación de keywords, estrategia de contenido, link building y reportes mensuales.' },
    { question: '¿Garantizan primeras posiciones?', answer: 'Nadie honesto puede garantizar posiciones específicas en Google. Lo que garantizamos es trabajo profesional y resultados medibles.' },
    { question: '¿SEO o SEM primero?', answer: 'Depende de tus objetivos. SEM genera resultados inmediatos, SEO es más sostenible. Recomendamos combinar ambos para máximo impacto.' },
  ];

  const relatedServices = [
    { title: 'Marketing Digital', href: '/servicios/marketing-digital', iconName: 'TrendingUp' },
    { title: 'Publicidad Digital', href: '/servicios/publicidad-digital', iconName: 'Target' },
    { title: 'Desarrollo Web', href: '/servicios/desarrollo-web', iconName: 'Code' },
    { title: 'Branding', href: '/servicios/branding-diseno', iconName: 'Palette' },
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
