import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Gestión de Redes Sociales en Perú',
  description: 'Gestión profesional de redes sociales en Ica y Perú: contenido, community management y pauta en Instagram, Facebook y TikTok que genera clientes, no solo likes.',
  keywords: ['gestión de redes sociales en Perú', 'community manager Perú', 'agencia de redes sociales Ica', 'manejo de redes sociales', 'publicidad en Instagram y Facebook', 'cuánto cobra un community manager en Perú', 'agencia para manejar redes sociales de mi empresa'],
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suggestion.pe'}/servicios/marketing-redes-sociales` },
  openGraph: {
    title: 'Gestión de Redes Sociales en Perú | Suggestion',
    description: 'Gestión profesional de redes sociales en Ica y Perú: contenido, community management y pauta en Instagram, Facebook y TikTok que genera clientes, no solo likes.',
    type: 'website',
  },
};

export default function RedesSocialesPage() {
  const heroData = {
    badge: 'Redes sociales',
    title: 'Redes sociales que',
    highlightedWord: 'venden',
    subtitle: 'Comunidad que se convierte en clientes',
    description: 'Manejamos tus redes sociales con foco en negocio: contenido, community management y publicidad que conecta con tu audiencia y genera ventas reales.',
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
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
