import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'BTL y Activaciones | Suggestion',
  description: 'BTL y activaciones de marca. Experiencias presenciales, eventos, sampling, roadshows y activaciones que generan conexión emocional.',
  keywords: ['BTL', 'activaciones', 'marketing experiencial', 'eventos de marca', 'sampling', 'roadshow'],
  openGraph: {
    title: 'BTL y Activaciones | Suggestion',
    description: 'Experiencias de marca que generan conexión emocional.',
    type: 'website',
  },
};

export default function BTLActivacionesPage() {
  const heroData = {
    badge: 'BTL y Activaciones',
    title: 'Experiencias que',
    highlightedWord: 'Conectan',
    subtitle: 'Tu marca, en vivo y en directo',
    description: 'Creamos experiencias presenciales que dejan huella. Activaciones, sampling, roadshows y eventos que generan conexión emocional real con tu audiencia.',
    cta: 'Planifica tu Activación',
    iconName: 'Sparkles',
    color: '#00BFFF',
  };

  const benefits = [
    { title: 'Conexión Real', description: 'Nada supera la experiencia directa con tu marca.', iconName: 'Users' },
    { title: 'Memorable', description: 'Las experiencias se recuerdan más que la publicidad.', iconName: 'Heart' },
    { title: 'Genera Contenido', description: 'Cada activación es contenido orgánico para redes.', iconName: 'Sparkles' },
    { title: 'Datos de Primera Mano', description: 'Obtén feedback directo de tu audiencia.', iconName: 'Lightbulb' },
  ];

  const features = [
    { title: 'Activaciones de Marca', description: 'Experiencias inmersivas en puntos de venta y eventos.' },
    { title: 'Sampling', description: 'Distribución de muestras con personal capacitado.' },
    { title: 'Roadshows', description: 'Tours itinerantes por múltiples locaciones.' },
    { title: 'Eventos Corporativos', description: 'Lanzamientos, inauguraciones, aniversarios.' },
    { title: 'Pop-up Stores', description: 'Tiendas temporales en ubicaciones estratégicas.' },
    { title: 'Exhibiciones', description: 'Stands en ferias, expos y convenciones.' },
    { title: 'Guerrilla Marketing', description: 'Acciones sorpresa de alto impacto.' },
    { title: 'Ambientaciones', description: 'Decoración temática de espacios.' },
    { title: 'Staff y Logística', description: 'Coordinación completa de personal y recursos.' },
  ];

  const process = [
    { step: '01', title: 'Concepto', description: 'Idea creativa alineada a objetivos de marca.' },
    { step: '02', title: 'Planificación', description: 'Logística, permisos, recursos y cronograma.' },
    { step: '03', title: 'Producción', description: 'Montaje, staff, materiales y ejecución.' },
    { step: '04', title: 'Informe', description: 'Métricas, fotos, videos y learnings.' },
  ];

  const stats = [
    { value: '500+', label: 'Activaciones realizadas' },
    { value: '2M+', label: 'Personas impactadas' },
    { value: '95%', label: 'Satisfacción' },
    { value: '50+', label: 'Ciudades' },
  ];

  const testimonials = [
    { quote: 'La activación generó más UGC que toda nuestra campaña digital del trimestre.', author: 'Rosa María Pérez', role: 'Social Media Manager' },
    { quote: 'Profesionales que entienden que BTL no es solo regalar cosas, es crear experiencias.', author: 'Jorge Luis Herrera', role: 'Brand Manager' },
    { quote: 'La logística fue impecable. Cero contratiempos en un evento de 3 días.', author: 'María Fernanda López', role: 'Events Director' },
  ];

  const faqs = [
    { question: '¿Cuánto tiempo antes debo planificar?', answer: 'Mínimo 4 semanas para activaciones simples. Eventos grandes requieren 8-12 semanas.' },
    { question: '¿Incluyen permisos?', answer: 'Sí, gestionamos todos los permisos necesarios con autoridades y venues.' },
    { question: '¿Manejan todo el país?', answer: 'Sí, operamos en todo México con equipos locales y logística propia.' },
    { question: '¿Qué métricas reportan?', answer: 'Personas impactadas, interacciones, muestras distribuidas, leads generados, fotos/videos, engagement en redes.' },
  ];

  const relatedServices = [
    { title: 'Producción Audiovisual', href: '/servicios/produccion-audiovisual', iconName: 'Video' },
    { title: 'Redes Sociales', href: '/servicios/marketing-redes-sociales', iconName: 'Share2' },
    { title: 'Material POP', href: '/servicios/material-pop', iconName: 'Package' },
    { title: 'Estructuras Publicitarias', href: '/servicios/estructuras-publicitarias', iconName: 'Briefcase' },
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
