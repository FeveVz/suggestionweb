import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Imprenta Corporativa | Suggestion',
  description: 'Imprenta corporativa para empresas. Tarjetas de presentación, papelería, folletos, catálogos y materiales impresos de alta calidad.',
  keywords: ['imprenta corporativa', 'impresión', 'tarjetas de presentación', 'papelería corporativa', 'folletos', 'catálogos'],
  openGraph: {
    title: 'Imprenta Corporativa | Suggestion',
    description: 'Material impreso de alta calidad para tu negocio.',
    type: 'website',
  },
};

export default function ImprentaCorporativaPage() {
  const heroData = {
    badge: 'Imprenta Corporativa',
    title: 'Material Impreso de',
    highlightedWord: 'Calidad',
    subtitle: 'Tu marca en las mejores manos',
    description: 'Producción de materiales impresos con la calidad que tu marca merece. Desde tarjetas hasta catálogos completos, con acabados que impresionan.',
    cta: 'Solicitar Cotización',
    iconName: 'Printer',
    color: '#FF6600',
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

  const stats = [
    { value: '1M+', label: 'Piezas impresas mensuales' },
    { value: '500+', label: 'Clientes activos' },
    { value: '50+', label: 'Tipos de papel' },
    { value: '24h', label: 'Entrega express disponible' },
  ];

  const testimonials = [
    { quote: 'La calidad de impresión superó nuestras expectativas. Muy profesionales.', author: 'María Elena Vargas', role: 'Gerente de Compras' },
    { quote: 'Liberaron el archivo el martes, viernes tenían las tarjetas en mi oficina.', author: 'Roberto Díaz', role: 'Director General' },
    { quote: 'El equipo siempre encuentra la mejor solución técnico-económica.', author: 'Patricia Luna', role: 'Marketing Manager' },
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
      stats={stats}
      testimonials={testimonials}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
