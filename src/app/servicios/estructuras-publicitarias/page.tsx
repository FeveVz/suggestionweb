import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Estructuras Publicitarias | Suggestion',
  description: 'Estructuras publicitarias y publicidad exterior. Billboards, espectaculares, mupis, pantallas LED y más en ubicaciones estratégicas.',
  keywords: ['estructuras publicitarias', 'billboard', 'espectacular', 'publicidad exterior', 'mupi', 'pantalla LED'],
  openGraph: {
    title: 'Estructuras Publicitarias | Suggestion',
    description: 'Publicidad exterior de gran impacto visual.',
    type: 'website',
  },
};

export default function EstructurasPublicitariasPage() {
  const heroData = {
    badge: 'Estructuras Publicitarias',
    title: 'Publicidad de Gran',
    highlightedWord: 'Impacto',
    subtitle: 'Tu mensaje, imposible de ignorar',
    description: 'Gestionamos publicidad exterior en las mejores ubicaciones. Billboards, espectaculares, mupis y pantallas LED que capturan la atención de tu audiencia.',
    cta: 'Ver Disponibilidad',
    iconName: 'PanelTop',
    color: '#00BFFF',
  };

  const benefits = [
    { title: 'Máxima Visibilidad', description: 'Impacto visual garantizado en ubicaciones estratégicas.', iconName: 'Eye' },
    { title: 'Cobertura Amplia', description: 'Llega a audiencias masivas en puntos de alto tráfico.', iconName: 'Globe' },
    { title: 'Recordación Alta', description: 'El outdoor tiene una de las tasas más altas de recordación.', iconName: 'Briefcase' },
    { title: '24/7 Activo', description: 'Tu mensaje trabaja todos los días, todo el día.', iconName: 'PanelTop' },
  ];

  const features = [
    { title: 'Billboards / Espectaculares', description: 'Grandes formatos en avenidas y autopistas.' },
    { title: 'Mupis', description: 'Pantallas en estaciones de metro, malls y más.' },
    { title: 'Pantallas LED', description: 'Video digital en ubicaciones premium.' },
    { title: 'Paredes y Mantas', description: 'Cobertura total en fachadas de edificios.' },
    { title: 'Parabuses', description: 'Publicidad en stops de transporte público.' },
    { title: 'Esquinas y Banderolas', description: 'Formatos en intersecciones clave.' },
    { title: 'Torres', description: 'Estructuras verticales de alta visibilidad.' },
    { title: 'Cines', description: 'Pantallas en salas y áreas comunes.' },
    { title: 'Producción e Instalación', description: 'Desde el diseño hasta la colocación.' },
  ];

  const process = [
    { step: '01', title: 'Análisis', description: 'Definimos ubicaciones según tu target y presupuesto.' },
    { step: '02', title: 'Propuesta', description: 'Mapa con ubicaciones, fotos, tráfico y precios.' },
    { step: '03', title: 'Producción', description: 'Diseño e impresión del material publicitario.' },
    { step: '04', title: 'Instalación', description: 'Colocación y monitoreo durante la campaña.' },
  ];

  const stats = [
    { value: '5,000+', label: 'Ubicaciones disponibles' },
    { value: '200+', label: 'Ciudades cubiertas' },
    { value: '50M+', label: 'Impresiones diarias' },
    { value: '1,000+', label: 'Campañas ejecutadas' },
  ];

  const testimonials = [
    { quote: 'El billboard en Periférico nos dio notoriedad inmediata. La gente lo mencionaba en redes.', author: 'Alberto Ramírez', role: 'Brand Manager' },
    { quote: 'Excelente asesoría en ubicaciones. No solo venden, recomiendan lo que funciona.', author: 'Sandra López', role: 'Directora de Marketing' },
    { quote: 'Producción e instalación impecables. Cero problemas, máxima visibilidad.', author: 'Diego Torres', role: 'CEO' },
  ];

  const faqs = [
    { question: '¿Cuánto cuesta un billboard?', answer: 'Los precios varían según ubicación, tamaño y temporada. Desde $5,000 USD mensuales en secundarias hasta $50,000+ en primarias.' },
    { question: '¿Cuál es el tiempo mínimo de contratación?', answer: 'Generalmente 4 semanas mínimo, aunque hay ubicaciones con períodos de 2 semanas.' },
    { question: '¿Incluye el diseño?', answer: 'Podemos diseñar la creatividad o imprimir archivos existentes. Cotizamos ambas opciones.' },
    { question: '¿Hacen campañas multi-ciudad?', answer: 'Sí, coordinamos campañas simultáneas en múltiples ciudades del país.' },
  ];

  const relatedServices = [
    { title: 'Publicidad Digital', href: '/servicios/publicidad-digital', iconName: 'Target' },
    { title: 'Publicidad Móvil', href: '/servicios/publicidad-movil', iconName: 'TrendingUp' },
    { title: 'Branding', href: '/servicios/branding-diseno', iconName: 'Palette' },
    { title: 'BTL y Activaciones', href: '/servicios/btl-activaciones', iconName: 'Sparkles' },
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
