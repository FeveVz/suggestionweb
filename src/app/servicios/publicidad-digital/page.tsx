import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Publicidad Digital con ROI Medible | Suggestion',
  description: 'Campañas de publicidad digital en Google Ads, Meta Ads, TikTok Ads con ROI medible. Optimización continua para maximizar resultados.',
  keywords: ['publicidad digital', 'google ads', 'meta ads', 'facebook ads', 'instagram ads', 'publicidad online', 'SEM'],
  openGraph: {
    title: 'Publicidad Digital con ROI Medible | Suggestion',
    description: 'Campañas de publicidad digital con ROI medible y optimización continua.',
    type: 'website',
  },
};

export default function PublicidadDigitalPage() {
  const heroData = {
    badge: 'Publicidad Digital',
    title: 'Publicidad con',
    highlightedWord: 'ROI Medible',
    subtitle: 'Campañas que pagan',
    description: 'Diseñamos y gestionamos campañas de publicidad digital que generan retorno. Cada peso invertido se optimiza para máximo rendimiento.',
    cta: 'Empieza a Convertir',
    iconName: 'Target',
    color: '#FF6600',
  };

  const benefits = [
    {
      title: 'ROI Medible',
      description: 'Cada conversión se rastrea. Sabes exactamente cuánto cuesta cada cliente y cuál es tu retorno.',
      iconName: 'BarChart3',
    },
    {
      title: 'Segmentación Precisa',
      description: 'Llegamos a tu audiencia ideal con targeting avanzado por comportamientos, intereses y más.',
      iconName: 'Eye',
    },
    {
      title: 'Optimización Constante',
      description: 'No configuramos y olvidamos. Optimizamos diariamente para mejorar resultados.',
      iconName: 'Zap',
    },
    {
      title: 'Reportes Transparentes',
      description: 'Dashboards en tiempo real y reportes detallados. Tú decides qué métricas priorizar.',
      iconName: 'TrendingUp',
    },
  ];

  const features = [
    { title: 'Google Ads', description: 'Search, Display, Shopping, YouTube. Campañas que capturan intención.' },
    { title: 'Meta Ads', description: 'Facebook e Instagram con segmentación avanzada y formatos múltiples.' },
    { title: 'TikTok Ads', description: 'Alcanza audiencias jóvenes con contenido nativo que convierte.' },
    { title: 'LinkedIn Ads', description: 'B2B de alto valor. Decision makers y profesionales.' },
    { title: 'Remarketing', description: 'Recupera usuarios que visitaron tu sitio con anuncios personalizados.' },
    { title: 'A/B Testing', description: 'Probamos creatividades, audiencias y ofertas constantemente.' },
    { title: 'Landing Pages', description: 'Páginas de destino optimizadas para conversión.' },
    { title: 'Analytics Avanzado', description: 'Configuración de conversiones, eventos y attribution.' },
    { title: 'Automatizaciones', description: 'Reglas automáticas que optimizan 24/7.' },
  ];

  const process = [
    { step: '01', title: 'Estrategia', description: 'Definimos objetivos, presupuesto y canales según tu negocio.' },
    { step: '02', title: 'Setup', description: 'Configuramos cuentas, píxeles, audiences y campañas.' },
    { step: '03', title: 'Lanzamiento', description: 'Activamos campañas con testing inicial de variables.' },
    { step: '04', title: 'Escala', description: 'Optimizamos y escalamos lo que funciona, eliminamos lo que no.' },
  ];

  const stats = [
    { value: '4.5x', label: 'ROAS promedio' },
    { value: '-40%', label: 'Reducción en CPA' },
    { value: '10M+', label: 'Inversión gestionada' },
    { value: '500+', label: 'Campañas activas' },
  ];

  const testimonials = [
    { quote: 'Pasamos de gastar sin rumbo a tener un ROAS de 6x. Cada dólar trabaja.', author: 'Diego Torres', role: 'E-commerce Director' },
    { quote: 'Por primera vez entiendo qué pasa con mi presupuesto de publicidad. Total transparencia.', author: 'Sofía Hernández', role: 'CEO' },
    { quote: 'El equipo redujo nuestro costo por lead en un 60% en solo dos meses.', author: 'Miguel Ángel Ruiz', role: 'Marketing Manager' },
  ];

  const faqs = [
    { question: '¿Cuál es el presupuesto mínimo recomendado?', answer: 'Depende del canal y objetivo, pero recomendamos mínimo $500-1000 USD mensuales para ver resultados significativos en la mayoría de industrias.' },
    { question: '¿Cuánto tiempo toma ver resultados?', answer: 'Las campañas de search pueden generar leads desde el día 1. Para campañas de awareness y consideración, esperamos 2-4 semanas para optimizar.' },
    { question: '¿Qué plataformas manejan?', answer: 'Google Ads (Search, Display, Shopping, YouTube), Meta (Facebook, Instagram), TikTok, LinkedIn, Pinterest y programática.' },
    { question: '¿Incluye la creación de anuncios?', answer: 'Sí, incluye diseño de anuncios (imágenes, videos cortos, copy). Para producción audiovisual completa, ofrecemos el servicio de producción.' },
  ];

  const relatedServices = [
    { title: 'Marketing Digital', href: '/servicios/marketing-digital', iconName: 'TrendingUp' },
    { title: 'SEO', href: '/servicios/seo-posicionamiento', iconName: 'Search' },
    { title: 'Redes Sociales', href: '/servicios/marketing-redes-sociales', iconName: 'Share2' },
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
