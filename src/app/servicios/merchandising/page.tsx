import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Merchandising Publicitario en Perú',
  description: 'Merchandising publicitario en Ica y Perú: artículos promocionales y regalos corporativos personalizados con tu marca. Presencia que se queda con tu cliente.',
  keywords: ['merchandising publicitario en Perú', 'artículos promocionales Perú', 'regalos corporativos', 'merchandising personalizado', 'merchandising Ica', 'regalos corporativos personalizados en Perú', 'artículos publicitarios con logo en Perú'],
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suggestion.pe'}/servicios/merchandising` },
  openGraph: {
    title: 'Merchandising Publicitario en Perú | Suggestion',
    description: 'Merchandising publicitario en Ica y Perú: artículos promocionales y regalos corporativos personalizados con tu marca. Presencia que se queda con tu cliente.',
    type: 'website',
  },
};

export default function MerchandisingPage() {
  const heroData = {
    badge: 'Merchandising',
    title: 'Merchandising que',
    highlightedWord: 'prolonga tu marca',
    subtitle: 'Tu marca, en manos de tu cliente',
    description: 'Producimos artículos promocionales y regalos corporativos personalizados con tu marca: piezas útiles y memorables que mantienen tu negocio presente.',
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
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
