import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Publicidad Móvil y en Vehículos en Perú',
  description: 'Publicidad móvil en Ica y Perú: rotulación vehicular y campañas itinerantes que llevan tu marca a más lugares. Visibilidad que se mueve con tu mercado.',
  keywords: ['publicidad móvil en Perú', 'publicidad en vehículos Perú', 'rotulación vehicular', 'publicidad itinerante', 'publicidad móvil Ica', 'publicidad en buses y vehículos en Perú', 'rotulado de vehículos para empresas'],
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suggestion.pe'}/servicios/publicidad-movil` },
  openGraph: {
    title: 'Publicidad Móvil y en Vehículos en Perú | Suggestion',
    description: 'Publicidad móvil en Ica y Perú: rotulación vehicular y campañas itinerantes que llevan tu marca a más lugares. Visibilidad que se mueve con tu mercado.',
    type: 'website',
  },
};

export default function PublicidadMovilPage() {
  const heroData = {
    badge: 'Publicidad móvil',
    title: 'Publicidad que',
    highlightedWord: 'llega más lejos',
    subtitle: 'Tu marca recorre la ciudad',
    description: 'Llevamos tu marca a la calle con publicidad móvil y rotulación vehicular: campañas itinerantes con alta cobertura y recordación en tu zona de interés.',
    cta: 'Planifica tu Ruta',
    iconName: 'Truck',
    color: '#FF8C00',
  };

  const benefits = [
    { title: 'Alcance Amplio', description: 'Tu mensaje recorre múltiples zonas en un solo día.', iconName: 'Globe' },
    { title: 'Alto Impacto', description: 'Nadie ignora un vehículo o pantalla llamativa en movimiento.', iconName: 'Eye' },
    { title: 'Flexibilidad', description: 'Rutas personalizadas según tu target y objetivos.', iconName: 'Truck' },
    { title: 'Costo-Efectivo', description: 'Más impresiones por peso invertido que formatos fijos.', iconName: 'TrendingUp' },
  ];

  const features = [
    { title: 'Wraps Vehiculares', description: 'Impresión e instalación en flotillas o vehículos propios.' },
    { title: 'Pantallas LED Móviles', description: 'Videobillboards en camiones para campañas itinerantes.' },
    { title: 'Bicicletas Publicitarias', description: 'Formatos eco-amigables para zonas peatonales.' },
    { title: 'Taxis Publicitarios', description: 'Publicidad en taxis con alto tráfico urbano.' },
    { title: 'Moto-Billboards', description: 'Trailers motociclista para zonas específicas.' },
    { title: 'Flotas de Reparto', description: 'Branding de vehículos de delivery y logística.' },
    { title: 'Geo-fencing', description: 'Segmentación por ubicación para impactos digitales complementarios.' },
    { title: 'Reporteo GPS', description: 'Tracking en tiempo real de rutas y cobertura.' },
    { title: 'Diseño e Instalación', description: 'Servicio completo de producción e instalación.' },
  ];

  const process = [
    { step: '01', title: 'Estrategia', description: 'Definimos zonas objetivo y rutas óptimas.' },
    { step: '02', title: 'Producción', description: 'Diseño e impresión del material publicitario.' },
    { step: '03', title: 'Instalación', description: 'Aplicación profesional en vehículos o pantallas.' },
    { step: '04', title: 'Operación', description: 'Ejecución de rutas con tracking y reportes.' },
  ];



  const faqs = [
    { question: '¿Qué ciudades cubren?', answer: 'Principales ciudades del país: CDMX, Monterrey, Guadalajara, Puebla, Querétaro y más.' },
    { question: '¿Cuánto tiempo dura un wrap vehicular?', answer: 'Con buen mantenimiento, 3-5 años. Ofrecemos garantía de instalación.' },
    { question: '¿Puedo elegir las rutas?', answer: 'Sí, diseñamos rutas personalizadas según tu target. También sugerimos rutas probadas.' },
    { question: '¿Qué reportes incluyen?', answer: 'GPS tracking, fotos de la operación, estimación de impresiones y cobertura geográfica.' },
  ];

  const relatedServices = [
    { title: 'Estructuras Publicitarias', href: '/servicios/estructuras-publicitarias', iconName: 'Briefcase' },
    { title: 'Publicidad Digital', href: '/servicios/publicidad-digital', iconName: 'Target' },
    { title: 'BTL y Activaciones', href: '/servicios/btl-activaciones', iconName: 'Sparkles' },
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
