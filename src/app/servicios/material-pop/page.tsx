import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Material POP y Publicidad en Punto de Venta',
  description: 'Material POP en Ica y Perú: displays, exhibidores y piezas para el punto de venta que captan la atención del comprador y aumentan tus ventas.',
  keywords: ['material POP en Perú', 'publicidad punto de venta Perú', 'displays y exhibidores', 'material POP Ica', 'POP personalizado', 'material POP para punto de venta en Perú', 'exhibidores publicitarios personalizados'],
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suggestion.pe'}/servicios/material-pop` },
  openGraph: {
    title: 'Material POP y Publicidad en Punto de Venta | Suggestion',
    description: 'Material POP en Ica y Perú: displays, exhibidores y piezas para el punto de venta que captan la atención del comprador y aumentan tus ventas.',
    type: 'website',
  },
};

export default function MaterialPOPPage() {
  const heroData = {
    badge: 'Material POP',
    title: 'Material POP que',
    highlightedWord: 'impulsa la compra',
    subtitle: 'Gana la batalla en el punto de venta',
    description: 'Creamos material POP que destaca en el punto de venta: displays, exhibidores y piezas que captan la atención del comprador en el momento de decidir.',
    cta: 'Solicitar Propuesta',
    iconName: 'Package',
    color: '#FF8C00',
  };

  const benefits = [
    { title: 'Impacto en el Momento Clave', description: 'Tu producto brilla justo cuando el consumidor decide.', iconName: 'Briefcase' },
    { title: 'Aumento de Ventas', description: 'El POP bien ejecutado incrementa ventas hasta un 25%.', iconName: 'TrendingUp' },
    { title: 'Visibilidad Competitiva', description: 'Destaca entre decenas de productos similares.', iconName: 'Eye' },
    { title: 'Versatilidad de Formatos', description: 'Soluciones para cualquier espacio y presupuesto.', iconName: 'Package' },
  ];

  const features = [
    { title: 'Displays de Mostrador', description: 'Exhibidores compactos para puntos de venta.' },
    { title: 'Displays de Piso', description: 'Estructuras autoportantes de gran visibilidad.' },
    { title: 'Cabeceras de Góndola', description: 'Espacios premium en supermercados.' },
    { title: 'Islas y Shop-in-Shop', description: 'Espacios dedicados dentro de tiendas.' },
    { title: 'Cartelería', description: 'Carteles, posters, wobblers y más.' },
    { title: 'Stoppers y Stripers', description: 'Material colgante para lineales.' },
    { title: 'Exhibidores de Producto', description: 'Mostradores con producto cargado.' },
    { title: 'Señalética', description: 'Letreros y señalética para tiendas.' },
    { title: 'Mobiliario', description: 'Mostradores, kioscos y mobiliario temporal.' },
  ];

  const process = [
    { step: '01', title: 'Brief', description: 'Objetivos, puntos de venta, productos a exhibir.' },
    { step: '02', title: 'Diseño', description: 'Concepto, renders y aprobación visual.' },
    { step: '03', title: 'Producción', description: 'Fabricación con materiales de calidad.' },
    { step: '04', title: 'Instalación', description: 'Logística y colocación en tiendas.' },
  ];



  const faqs = [
    { question: '¿Qué materiales utilizan?', answer: 'Corrugado, plástico, metal, madera, acrílico según durabilidad y presupuesto requerido.' },
    { question: '¿Cuánto tiempo toma producir?', answer: 'Displays de cartón: 2-3 semanas. Estructuras complejas: 4-6 semanas.' },
    { question: '¿Instalan en tiendas?', answer: 'Sí, manejamos logística de distribución e instalación en todo el país.' },
    { question: '¿Pueden hacer diseños por tienda?', answer: 'Sí, adaptamos formatos según el espacio y categoría de cada tienda.' },
  ];

  const relatedServices = [
    { title: 'Merchandising', href: '/servicios/merchandising', iconName: 'ShoppingBag' },
    { title: 'Imprenta Corporativa', href: '/servicios/imprenta-corporativa', iconName: 'Printer' },
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
