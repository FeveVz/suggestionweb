import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Material POP - Punto de Venta | Suggestion',
  description: 'Material POP para puntos de venta. Displays, exhibidores, cartelería, mostradores y materiales que destacan tu producto en el punto de compra.',
  keywords: ['material POP', 'punto de venta', 'display', 'exhibidor', 'publicidad en tienda', 'material PDV'],
  openGraph: {
    title: 'Material POP - Punto de Venta | Suggestion',
    description: 'Materiales que destacan tu producto en el punto de compra.',
    type: 'website',
  },
};

export default function MaterialPOPPage() {
  const heroData = {
    badge: 'Material POP',
    title: 'Destaca en el Punto de',
    highlightedWord: 'Venta',
    subtitle: 'El último paso antes de la compra',
    description: 'Diseñamos y producimos materiales POP que capturan la atención en el momento decisivo. Displays, exhibidores y más para que tu producto sea el elegido.',
    cta: 'Solicitar Propuesta',
    iconName: 'Package',
    color: '#FF6600',
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

  const stats = [
    { value: '25%', label: 'Incremento promedio en ventas' },
    { value: '10,000+', label: 'Displays producidos' },
    { value: '50+', label: 'Cadenas atendidas' },
    { value: '100%', label: 'Personalizable' },
  ];

  const testimonials = [
    { quote: 'El display triplicó la rotación del producto en las primeras 2 semanas.', author: 'Luis Fernando Morales', role: 'Trade Marketing Manager' },
    { quote: 'Calidad de producción que aguanta el ritmo de una tienda ocupada.', author: 'Claudia Ramírez', role: 'Gerente de Cuenta' },
    { quote: 'El diseño destacaba entre 50 productos similares. Mision cumplida.', author: 'Roberto Ángel Gómez', role: 'Product Manager' },
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
      stats={stats}
      testimonials={testimonials}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
