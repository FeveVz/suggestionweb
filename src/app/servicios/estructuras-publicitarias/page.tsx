import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Estructuras y Paneles Publicitarios en Perú',
  description: 'Estructuras publicitarias en Ica y Perú: paneles, vallas, tótems y rótulos. Publicidad exterior que da visibilidad y posiciona tu marca en la calle.',
  keywords: ['estructuras publicitarias en Perú', 'paneles publicitarios Perú', 'publicidad exterior', 'vallas y tótems', 'rótulos luminosos Ica', 'fabricación de paneles publicitarios en Perú', 'publicidad exterior para mi negocio'],
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suggestion.pe'}/servicios/estructuras-publicitarias` },
  openGraph: {
    title: 'Estructuras y Paneles Publicitarios en Perú | Suggestion',
    description: 'Estructuras publicitarias en Ica y Perú: paneles, vallas, tótems y rótulos. Publicidad exterior que da visibilidad y posiciona tu marca en la calle.',
    type: 'website',
  },
};

export default function EstructurasPublicitariasPage() {
  const heroData = {
    badge: 'Estructuras publicitarias',
    title: 'Publicidad exterior que',
    highlightedWord: 'da visibilidad',
    subtitle: 'Tu marca, imposible de ignorar',
    description: 'Diseñamos y fabricamos estructuras de publicidad exterior —paneles, vallas, tótems y rótulos— que dan visibilidad y posicionan tu marca donde está tu público.',
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
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
