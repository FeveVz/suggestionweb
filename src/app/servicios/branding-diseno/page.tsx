import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Branding y Diseño - Marcas que Dejan Huella | Suggestion',
  description: 'Creamos identidades visuales que dejan huella. Branding estratégico, diseño de marca, logotipos y manuales de identidad corporativa.',
  keywords: ['branding', 'diseño de marca', 'identidad corporativa', 'logotipo', 'diseño gráfico', 'branding agency'],
  openGraph: {
    title: 'Branding y Diseño - Marcas que Dejan Huella | Suggestion',
    description: 'Creamos identidades visuales que dejan huella en la mente de tu audiencia.',
    type: 'website',
  },
};

export default function BrandingPage() {
  const heroData = {
    badge: 'Branding',
    title: 'Marcas que Dejan',
    highlightedWord: 'Huella',
    subtitle: 'Identidad que perdura',
    description: 'Diseñamos identidades visuales que conectan emocionalmente con tu audiencia. Tu marca no solo se ve bien, se recuerda.',
    cta: 'Crea tu Identidad',
    iconName: 'Palette',
    color: '#FF6600',
  };

  const benefits = [
    { title: 'Diferenciación Real', description: 'Te destacamos de la competencia con una identidad única y memorable.', iconName: 'Star' },
    { title: 'Conexión Emocional', description: 'Diseñamos para generar sentimientos y recuerdos, no solo estética.', iconName: 'Heart' },
    { title: 'Consistencia Total', description: 'Tu marca se ve igual en todos los puntos de contacto.', iconName: 'Eye' },
    { title: 'Valor a Largo Plazo', description: 'Una marca fuerte es un activo que aprecia con el tiempo.', iconName: 'Sparkles' },
  ];

  const features = [
    { title: 'Investigación de Marca', description: 'Análisis de competencia, mercado y tendencias.' },
    { title: 'Estrategia de Marca', description: 'Posicionamiento, arquitectura y personalidad de marca.' },
    { title: 'Naming', description: 'Creación de nombres memorables y disponibles.' },
    { title: 'Diseño de Logotipo', description: 'Concepto, bocetos, versiones y aplicaciones.' },
    { title: 'Sistema Visual', description: 'Colores, tipografías, iconografía y patrones.' },
    { title: 'Manual de Marca', description: 'Guía completa de aplicación y uso correcto.' },
    { title: 'Diseño de Papelería', description: 'Tarjetas, sobres, carpetas y más.' },
    { title: 'Plantillas Corporativas', description: 'Presentaciones, documentos y email.' },
    { title: 'Señalética', description: 'Diseño de señales y espacios físicos.' },
  ];

  const process = [
    { step: '01', title: 'Descubrimiento', description: 'Entendemos tu negocio, valores y audiencia objetivo.' },
    { step: '02', title: 'Concepto', description: 'Exploramos direcciones creativas y definimos el concepto.' },
    { step: '03', title: 'Diseño', description: 'Desarrollamos el sistema visual completo.' },
    { step: '04', title: 'Entrega', description: 'Archivos finales, manual y acompañamiento en lanzamiento.' },
  ];

  const stats = [
    { value: '200+', label: 'Marcas creadas' },
    { value: '95%', label: 'Clientes satisfechos' },
    { value: '50+', label: 'Rebrandings' },
    { value: '100%', label: 'Originales' },
  ];

  const testimonials = [
    { quote: 'Nuestra marca finalmente refleja quiénes somos. El equipo capturó nuestra esencia perfectamente.', author: 'Carmen Ruiz', role: 'Fundadora' },
    { quote: 'El proceso fue increíblemente profesional. Desde investigación hasta entrega, todo impecable.', author: 'Javier Molina', role: 'CEO' },
    { quote: 'Nuestra identidad anterior no nos representaba. Ahora la gente nos recuerda.', author: 'Luisa Fernanda Gómez', role: 'Directora de Marketing' },
  ];

  const faqs = [
    { question: '¿Cuánto tiempo toma un proyecto de branding?', answer: 'Un proyecto completo de identidad toma entre 4-8 semanas dependiendo de la complejidad y alcance.' },
    { question: '¿Qué incluye la entrega final?', answer: 'Incluye archivos vectoriales, PNG, JPG para todas las versiones, manual de marca digital e impreso, y sesión de presentación.' },
    { question: '¿Pueden rediseñar mi marca actual?', answer: 'Sí, hacemos rebrandings completos y refresh de marcas existentes que necesitan actualización.' },
    { question: '¿Ofrecen servicios de impresión?', answer: 'Sí, podemos gestionar la impresión de papelería y materiales corporativos con proveedores verificados.' },
  ];

  const relatedServices = [
    { title: 'Marketing Digital', href: '/servicios/marketing-digital', iconName: 'TrendingUp' },
    { title: 'Desarrollo Web', href: '/servicios/desarrollo-web', iconName: 'Code' },
    { title: 'Publicidad Digital', href: '/servicios/publicidad-digital', iconName: 'Target' },
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
