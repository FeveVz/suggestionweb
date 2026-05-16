import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Merchandising Corporativo | Suggestion',
  description: 'Merchandising corporativo y productos promocionales. Artículos personalizados que refuerzan tu marca y generan recordación.',
  keywords: ['merchandising', 'artículos promocionales', 'regalos corporativos', 'productos personalizados', 'merch'],
  openGraph: {
    title: 'Merchandising Corporativo | Suggestion',
    description: 'Productos promocionales que refuerzan tu marca.',
    type: 'website',
  },
};

export default function MerchandisingPage() {
  const heroData = {
    badge: 'Merchandising',
    title: 'Productos que Refuerzan tu',
    highlightedWord: 'Marca',
    subtitle: 'Merch que se usa, no se guarda',
    description: 'Creamos y producimos artículos promocionales que la gente realmente quiere usar. Merchandising que genera recordación y fidelidad.',
    cta: 'Solicitar Catálogo',
    iconName: 'ShoppingBag',
    color: '#00BFFF',
  };

  const benefits = [
    { title: 'Recordación de Marca', description: 'Artículos útiles que mantienen tu marca visible día a día.', iconName: 'Package' },
    { title: 'Fidelización', description: 'Regalos que crean vínculo emocional con clientes y empleados.', iconName: 'Heart' },
    { title: 'Calidad Garantizada', description: 'Productos duraderos que no terminan en la basura.', iconName: 'Sparkles' },
    { title: 'Personalización Total', description: 'Diseño, materiales y técnicas adaptados a tu marca.', iconName: 'ShoppingBag' },
  ];

  const features = [
    { title: 'Ropa Corporativa', description: 'Camisetas, polos, chamarras, uniformes.' },
    { title: 'Artículos de Oficina', description: 'Agendas, bolígrafos, libretas, desk accessories.' },
    { title: 'Tecnología', description: 'USBs, power banks, audífonos, gadgets.' },
    { title: 'Hogar y Estilo de Vida', description: 'Termos, tazas, paraguas, bolsas.' },
    { title: 'Kits Corporativos', description: 'Bienvenida, navideños, especiales.' },
    { title: 'Premium Gifts', description: 'Regalos ejecutivos de alto valor.' },
    { title: 'Eco-friendly', description: 'Productos sostenibles y reciclados.' },
    { title: 'Producción Express', description: 'Entregas urgentes cuando lo necesitas.' },
    { title: 'Diseño de Empaque', description: 'Presentación premium para cada producto.' },
  ];

  const process = [
    { step: '01', title: 'Briefing', description: 'Definimos objetivos, presupuesto y productos ideales.' },
    { step: '02', title: 'Propuesta', description: 'Catálogo curado con opciones y cotización detallada.' },
    { step: '03', title: 'Aprobación', description: 'Muestras físicas y diseño final para aprobación.' },
    { step: '04', title: 'Entrega', description: 'Producción y logística hasta tu puerta.' },
  ];

  const stats = [
    { value: '5,000+', label: 'Productos disponibles' },
    { value: '500+', label: 'Clientes activos' },
    { value: '100K+', label: 'Artículos entregados' },
    { value: '2-4', label: 'Semanas de entrega' },
  ];

  const testimonials = [
    { quote: 'El merch de nuestra campaña fue un hit. La gente lo pedía.', author: 'Luis Hernández', role: 'Brand Manager' },
    { quote: 'Calidad superior a otros proveedores. Los kits de bienvenida son un diferenciador.', author: 'Ana María Torres', role: 'HR Director' },
    { quote: 'Resolverón nuestra urgencia de navidad con calidad y a tiempo.', author: 'Fernando García', role: 'Compras' },
  ];

  const faqs = [
    { question: '¿Cuál es el pedido mínimo?', answer: 'Varía por producto, desde 50 unidades para artículos básicos hasta 500 para productos personalizados.' },
    { question: '¿Pueden crear productos personalizados?', answer: 'Sí, desarrollamos productos a medida desde cero si ningún catálogo cubre tu necesidad.' },
    { question: '¿Manejan inventario?', answer: 'Ofrecemos servicio de almacenamiento y distribución para clientes recurrentes.' },
    { question: '¿Hacen envíos internacionales?', answer: 'Sí, manejamos logística nacional e internacional según requerimientos.' },
  ];

  const relatedServices = [
    { title: 'Branding', href: '/servicios/branding-diseno', iconName: 'Palette' },
    { title: 'Imprenta Corporativa', href: '/servicios/imprenta-corporativa', iconName: 'Printer' },
    { title: 'BTL y Activaciones', href: '/servicios/btl-activaciones', iconName: 'Sparkles' },
    { title: 'Marketing Digital', href: '/servicios/marketing-digital', iconName: 'TrendingUp' },
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
