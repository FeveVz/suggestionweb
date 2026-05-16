import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Producción Audiovisual | Suggestion',
  description: 'Producción audiovisual profesional. Videos corporativos, publicidad, contenido para redes sociales, fotografía comercial y más.',
  keywords: ['producción audiovisual', 'video corporativo', 'producción de video', 'fotografía comercial', 'video marketing'],
  openGraph: {
    title: 'Producción Audiovisual | Suggestion',
    description: 'Contenido visual de alto impacto que cuenta tu historia.',
    type: 'website',
  },
};

export default function ProduccionAudiovisualPage() {
  const heroData = {
    badge: 'Producción Audiovisual',
    title: 'Contenido Visual de',
    highlightedWord: 'Impacto',
    subtitle: 'Tu historia en movimiento',
    description: 'Creamos contenido audiovisual que conecta emocionalmente. Videos que informan, entretienen y convierten. Fotografía que detiene el scroll.',
    cta: 'Crea tu Contenido',
    iconName: 'Video',
    color: '#FF6600',
  };

  const benefits = [
    { title: 'Contenido que Engancha', description: 'El video retiene 95% más que el texto. Tu mensaje llega de verdad.', iconName: 'MousePointer' },
    { title: 'Calidad Profesional', description: 'Equipo, técnica y experiencia para resultados que destacan.', iconName: 'Award' },
    { title: 'Versatilidad Total', description: 'Un shooting, múltiples formatos para todos tus canales.', iconName: 'Briefcase' },
    { title: 'Storytelling Efectivo', description: 'No solo grabamos. Creamos narrativas que conectan.', iconName: 'Video' },
  ];

  const features = [
    { title: 'Videos Corporativos', description: 'Presentación de empresa, cultura, testimonios de clientes.' },
    { title: 'Publicidad en Video', description: 'Spots para TV, digital y redes sociales.' },
    { title: 'Contenido Redes Sociales', description: 'Reels, TikToks, Stories y más para tu marca.' },
    { title: 'Videos de Producto', description: 'Demostraciones, unboxings y reviews.' },
    { title: 'Videos de Capacitación', description: 'Training interno, manuales en video.' },
    { title: 'Eventos', description: 'Cobertura audiovisual de eventos presenciales y virtuales.' },
    { title: 'Fotografía Comercial', description: 'Producto, lifestyle, retratos corporativos.' },
    { title: 'Drones', description: 'Aéreos para inmobiliaria, eventos y más.' },
    { title: 'Postproducción', description: 'Edición, color, motion graphics, efectos visuales.' },
  ];

  const process = [
    { step: '01', title: 'Concepto', description: 'Definimos el mensaje, formato y enfoque creativo.' },
    { step: '02', title: 'Pre-producción', description: 'Guión, locaciones, casting, planificación.' },
    { step: '03', title: 'Producción', description: 'Grabación con equipo profesional y dirección.' },
    { step: '04', title: 'Post-producción', description: 'Edición, color, audio, motion graphics, entregables.' },
  ];

  const stats = [
    { value: '500+', label: 'Videos producidos' },
    { value: '50M+', label: 'Views generados' },
    { value: '100+', label: 'Campañas' },
    { value: '98%', label: 'Satisfacción' },
  ];

  const testimonials = [
    { quote: 'El video corporativo que crearon superó nuestras expectativas. Lo usamos en todo.', author: 'Andrés Molina', role: 'Director de Marca' },
    { quote: 'Entendieron el concepto desde la primera reunión. El resultado fue exacto y más.', author: 'María José López', role: 'Marketing Manager' },
    { quote: 'Calidad de producción de nivel internacional a precios competitivos.', author: 'Carlos Eduardo Ruiz', role: 'CEO' },
  ];

  const faqs = [
    { question: '¿Cuánto cuesta un video?', answer: 'Un video simple puede empezar en $2,000. Producciones complejas con locación, talento y postproducción avanzada varían significativamente.' },
    { question: '¿Cuánto tiempo toma?', answer: 'Un video corporativo típico toma 2-4 semanas desde concepto hasta entrega. Proyectos complejos pueden tomar más.' },
    { question: '¿Qué incluyen las entregas?', answer: 'Archivo maestro, versiones para redes sociales (16:9, 9:16, 1:1), cortes de 15 y 30 segundos, y archivos de audio.' },
    { question: '¿Pueden ir a locación?', answer: 'Sí, cubrimos producciones en todo el país y el extranjero según el proyecto.' },
  ];

  const relatedServices = [
    { title: 'Marketing Digital', href: '/servicios/marketing-digital', iconName: 'TrendingUp' },
    { title: 'Redes Sociales', href: '/servicios/marketing-redes-sociales', iconName: 'Share2' },
    { title: 'Publicidad Digital', href: '/servicios/publicidad-digital', iconName: 'Target' },
    { title: 'Branding', href: '/servicios/branding-diseno', iconName: 'Palette' },
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
