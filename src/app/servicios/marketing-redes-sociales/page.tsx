import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Redes Sociales que Conectan | Suggestion',
  description: 'Gestión profesional de redes sociales que conecta con tu audiencia. Community management, contenido estratégico y campañas que generan engagement.',
  keywords: ['redes sociales', 'community manager', 'gestión redes sociales', 'marketing redes sociales', 'social media'],
  openGraph: {
    title: 'Redes Sociales que Conectan | Suggestion',
    description: 'Gestión profesional de redes sociales que conecta con tu audiencia.',
    type: 'website',
  },
};

export default function RedesSocialesPage() {
  const heroData = {
    badge: 'Redes Sociales',
    title: 'Redes Sociales que',
    highlightedWord: 'Conectan',
    subtitle: 'Conexión auténtica con tu audiencia',
    description: 'Transformamos tu presencia en redes sociales en una comunidad activa y comprometida. Contenido estratégico que genera conversación y conversión.',
    cta: 'Impulsa tus Redes',
    iconName: 'Share2',
    color: '#00BFFF',
  };

  const benefits = [
    {
      title: 'Comunidad Activa',
      description: 'Construimos comunidades comprometidas que interactúan, comparten y defienden tu marca.',
      iconName: 'Users',
    },
    {
      title: 'Contenido Estratégico',
      description: 'Cada post tiene un propósito. Planificamos contenido que educan, entretiene y convierte.',
      iconName: 'Target',
    },
    {
      title: 'Engagement Real',
      description: 'Generamos interacciones auténticas, no vanity metrics. Comentarios, shares y conversiones reales.',
      iconName: 'Heart',
    },
    {
      title: 'Respuesta Inmediata',
      description: 'Community management activo que responde, modera y capitaliza oportunidades en tiempo real.',
      iconName: 'MessageSquare',
    },
  ];

  const features = [
    { title: 'Estrategia de Contenidos', description: 'Calendario editorial mensual alineado con tus objetivos de negocio.' },
    { title: 'Creación de Contenido', description: 'Diseño gráfico, fotografía y video profesional para tus redes.' },
    { title: 'Community Management', description: 'Gestión diaria de comentarios, mensajes y menciones.' },
    { title: 'Reportes Mensuales', description: 'Métricas de crecimiento, engagement y conversiones.' },
    { title: 'Campañas de Pauta', description: 'Publicidad pagada en Meta, TikTok, LinkedIn y más.' },
    { title: 'Influencer Marketing', description: 'Conexión con influencers relevantes para tu marca.' },
    { title: 'Social Listening', description: 'Monitoreo de menciones y tendencias en tu industria.' },
    { title: 'Gestión de Crisis', description: 'Protocolos y manejo profesional de situaciones complejas.' },
    { title: 'Stories & Reels', description: 'Contenido efímero que humaniza tu marca.' },
  ];

  const process = [
    { step: '01', title: 'Auditoría', description: 'Analizamos tu presencia actual, competencia y oportunidades.' },
    { step: '02', title: 'Estrategia', description: 'Definimos tono, contenido y canales según tu audiencia.' },
    { step: '03', title: 'Creación', description: 'Producimos contenido atractivo y relevante constantemente.' },
    { step: '04', title: 'Optimización', description: 'Medimos resultados y ajustamos para máximo impacto.' },
  ];

  const stats = [
    { value: '500K+', label: 'Seguidores generados' },
    { value: '8%', label: 'Engagement rate promedio' },
    { value: '200+', label: 'Cuentas gestionadas' },
    { value: '24/7', label: 'Monitoreo activo' },
  ];

  const testimonials = [
    { quote: 'En 3 meses duplicamos nuestros seguidores y las ventas por Instagram se dispararon un 180%.', author: 'Laura Vega', role: 'E-commerce Manager' },
    { quote: 'El equipo entiende nuestra voz de marca y la comunidad lo nota. Cada vez que publican, enganchan.', author: 'Roberto Sánchez', role: 'CMO' },
    { quote: 'Profesionales que realmente saben de social media. Los resultados hablan por sí solos.', author: 'Patricia Mendez', role: 'Dueña de negocio' },
  ];

  const faqs = [
    { question: '¿Qué redes sociales gestionan?', answer: 'Gestionamos Instagram, Facebook, TikTok, LinkedIn, Twitter/X, YouTube y Pinterest según donde esté tu audiencia.' },
    { question: '¿Cuántas publicaciones incluyen?', answer: 'Depende del plan, pero típicamente entre 3-7 publicaciones semanales por red, más stories diarios.' },
    { question: '¿Quién crea el contenido?', answer: 'Nuestro equipo de diseñadores, copywriters y video makers crea todo el contenido. También podemos usar tu material.' },
    { question: '¿Incluye publicidad pagada?', answer: 'La gestión de comunidades es orgánica. La pauta publicitaria se cotiza por separado o como add-on.' },
  ];

  const relatedServices = [
    { title: 'Marketing Digital', href: '/servicios/marketing-digital', iconName: 'TrendingUp' },
    { title: 'Publicidad Digital', href: '/servicios/publicidad-digital', iconName: 'Target' },
    { title: 'Branding', href: '/servicios/branding-diseno', iconName: 'Palette' },
    { title: 'Producción Audiovisual', href: '/servicios/produccion-audiovisual', iconName: 'Video' },
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
