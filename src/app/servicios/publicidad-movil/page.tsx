import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Publicidad Móvil | Suggestion',
  description: 'Publicidad móvil y en movimiento. Vehículos publicitarios, wraps, pantallas LED móviles y más para llevar tu mensaje por toda la ciudad.',
  keywords: ['publicidad móvil', 'vehículo publicitario', 'wrap vehicular', 'pantalla LED móvil', 'publicidad en movimiento'],
  openGraph: {
    title: 'Publicidad Móvil | Suggestion',
    description: 'Tu marca en movimiento, llegando a más lugares.',
    type: 'website',
  },
};

export default function PublicidadMovilPage() {
  const heroData = {
    badge: 'Publicidad Móvil',
    title: 'Tu Marca en',
    highlightedWord: 'Movimiento',
    subtitle: 'Lleva tu mensaje más lejos',
    description: 'Publicidad que va donde está tu audiencia. Vehículos, pantallas LED móviles y más formatos que recorren la ciudad generando impacto.',
    cta: 'Planifica tu Ruta',
    iconName: 'Truck',
    color: '#FF6600',
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

  const stats = [
    { value: '100K+', label: 'Impresiones diarias' },
    { value: '50+', label: 'Vehículos activos' },
    { value: '10+', label: 'Ciudades operadas' },
    { value: '95%', label: 'Recuerdo de marca' },
  ];

  const testimonials = [
    { quote: 'El truck LED en el centro generó más engagement que cualquier otro medio.', author: 'Carlos Mendez', role: 'Marketing Director' },
    { quote: 'Nuestra flota de delivery ahora es publicidad móvil. ROI inmediato.', author: 'Andrea Solís', role: 'Dueña de negocio' },
    { quote: 'Cobertura de zonas que con billboard fijo sería imposible o muy costoso.', author: 'Fernando Ríos', role: 'Brand Manager' },
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
      stats={stats}
      testimonials={testimonials}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
