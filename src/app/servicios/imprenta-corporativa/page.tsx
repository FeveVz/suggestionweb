import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Imprenta Corporativa e Impresión en Perú',
  description: 'Imprenta corporativa en Ica y Perú: tarjetas, brochures, papelería y gran formato. Impresión de calidad para tu marca, a tiempo y con acabado profesional.',
  keywords: ['imprenta corporativa en Perú', 'servicios de impresión Perú', 'imprenta Ica', 'impresión gran formato', 'papelería corporativa', 'imprenta para empresas en Perú', 'impresión de tarjetas y brochures en Perú'],
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suggestion.pe'}/servicios/imprenta-corporativa` },
  openGraph: {
    title: 'Imprenta Corporativa e Impresión en Perú | Suggestion',
    description: 'Imprenta corporativa en Ica y Perú: tarjetas, brochures, papelería y gran formato. Impresión de calidad para tu marca, a tiempo y con acabado profesional.',
    type: 'website',
  },
};

export default function ImprentaCorporativaPage() {
  const heroData = {
    badge: 'Imprenta corporativa',
    title: 'Impresión que',
    highlightedWord: 'representa tu marca',
    subtitle: 'Calidad y acabado profesional',
    description: 'Servicio de imprenta corporativa de principio a fin: tarjetas, brochures, papelería, etiquetas y gran formato, con calidad consistente y entrega puntual.',
    cta: 'Solicitar Cotización',
    iconName: 'Printer',
    color: '#FF8C00',
  };

  const benefits = [
    { title: 'Calidad Premium', description: 'Papeles, tintas y acabados de primera calidad.', iconName: 'Sparkles' },
    { title: 'Asesoría Técnica', description: 'Te guiamos en formatos, papeles y acabados óptimos.', iconName: 'PenTool' },
    { title: 'Tiempos Competitivos', description: 'Producción ágil sin sacrificar calidad.', iconName: 'Clock' },
    { title: 'Precios Justos', description: 'Cotización transparente sin sorpresas.', iconName: 'TrendingUp' },
  ];

  const features = [
    { title: 'Tarjetas de Presentación', description: 'Offset, digital, con acabados especiales.' },
    { title: 'Papelería Corporativa', description: 'Hojas membretadas, sobres, carpetas.' },
    { title: 'Folletos y Flyers', description: 'Bi-fold, tri-fold, volantes promocionales.' },
    { title: 'Catálogos', description: 'Encuadernación profesional, alta gama.' },
    { title: 'Revistas', description: 'Publicaciones periódicas, newsletters.' },
    { title: 'Libros', description: 'Impresión de libros, manuales, anuarios.' },
    { title: 'Etiquetas y Stickers', description: 'Adhesivos, etiquetas de producto.' },
    { title: 'Empaques', description: 'Cajas, bolsas, packaging personalizado.' },
    { title: 'Gran Formato', description: 'Posters, banners, displays.' },
  ];

  const process = [
    { step: '01', title: 'Cotización', description: 'Especificaciones técnicas y presupuesto detallado.' },
    { step: '02', title: 'Pre-prensa', description: 'Revisión de archivos, pruebas de color.' },
    { step: '03', title: 'Impresión', description: 'Producción con control de calidad.' },
    { step: '04', title: 'Entrega', description: 'Empacado y logística de envío.' },
  ];



  const faqs = [
    { question: '¿Qué formatos de archivo aceptan?', answer: 'PDF, AI, PSD, INDD. Preferimos PDF de alta resolución con sangría incluida.' },
    { question: '¿Cuál es el tiempo de producción?', answer: 'Digital: 2-3 días hábiles. Offset: 5-7 días hábiles. Urgentes: consultar disponibilidad.' },
    { question: '¿Pueden diseñar el material?', answer: 'Sí, contamos con equipo de diseño para crear o ajustar tus piezas.' },
    { question: '¿Hacen entregas foráneas?', answer: 'Sí, enviamos a todo el país vía paquetería con costo adicional.' },
  ];

  const relatedServices = [
    { title: 'Branding', href: '/servicios/branding-diseno', iconName: 'Palette' },
    { title: 'Merchandising', href: '/servicios/merchandising', iconName: 'ShoppingBag' },
    { title: 'Material POP', href: '/servicios/material-pop', iconName: 'Package' },
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
