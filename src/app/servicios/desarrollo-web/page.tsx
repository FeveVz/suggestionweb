import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Desarrollo Web - Sitios que Convierten | Suggestion',
  description: 'Desarrollamos sitios web optimizados, rápidos y diseñados para convertir. Landing pages, e-commerce, sitios corporativos y aplicaciones web.',
  keywords: ['desarrollo web', 'diseño web', 'página web', 'sitio web', 'e-commerce', 'landing page', 'aplicación web'],
  openGraph: {
    title: 'Desarrollo Web - Sitios que Convierten | Suggestion',
    description: 'Desarrollamos sitios web optimizados, rápidos y diseñados para convertir visitantes en clientes.',
    type: 'website',
  },
};

export default function DesarrolloWebPage() {
  const heroData = {
    badge: 'Desarrollo Web',
    title: 'Sitios Web que',
    highlightedWord: 'Convierten',
    subtitle: 'Rápidos, optimizados, efectivos',
    description: 'Desarrollamos sitios web que no solo se ven bien, sino que funcionan. Optimizados para SEO, velocidad y conversión.',
    cta: 'Crea tu Sitio Web',
    iconName: 'Code',
    color: '#00BFFF',
  };

  const benefits = [
    { title: 'Velocidad Óptima', description: 'Sitios que cargan en menos de 3 segundos. El usuario no espera.', iconName: 'Zap' },
    { title: 'Mobile First', description: 'Diseñados para móvil primero. La mayoría de tus usuarios están ahí.', iconName: 'Smartphone' },
    { title: 'SEO Ready', description: 'Estructura técnica optimizada para buscadores desde el día uno.', iconName: 'Search' },
    { title: 'Seguridad Garantizada', description: 'SSL, backups, protección contra malware y actualizaciones.', iconName: 'Shield' },
  ];

  const features = [
    { title: 'Landing Pages', description: 'Páginas de aterrizaje optimizadas para campañas y conversión.' },
    { title: 'Sitios Corporativos', description: 'Websites institucionales que reflejan tu marca y generan confianza.' },
    { title: 'E-commerce', description: 'Tiendas online optimizadas para venta y remarketing.' },
    { title: 'Aplicaciones Web', description: 'Sistemas a medida: CRM, dashboards, portales de clientes.' },
    { title: 'CMS Personalizado', description: 'Gestiona tu contenido fácilmente sin conocimientos técnicos.' },
    { title: 'PWA', description: 'Progressive Web Apps que funcionan como apps nativas.' },
    { title: 'Integraciones', description: 'Conexión con CRM, pagos, analytics, automatizaciones.' },
    { title: 'Mantenimiento', description: 'Soporte, actualizaciones y mejoras continuas.' },
    { title: 'Hosting Optimizado', description: 'Servidores configurados para máximo rendimiento.' },
  ];

  const process = [
    { step: '01', title: 'Descubrimiento', description: 'Definimos objetivos, funcionalidades y arquitectura del sitio.' },
    { step: '02', title: 'Diseño UX/UI', description: 'Wireframes, prototipos y diseño visual de toda la experiencia.' },
    { step: '03', title: 'Desarrollo', description: 'Programación con las mejores prácticas y tecnologías modernas.' },
    { step: '04', title: 'Lanzamiento', description: 'Testing, optimización y puesta en producción con soporte.' },
  ];

  const stats = [
    { value: '< 3s', label: 'Tiempo de carga' },
    { value: '99.9%', label: 'Uptime garantizado' },
    { value: '300+', label: 'Sitios desarrollados' },
    { value: '100%', label: 'Responsive' },
  ];

  const testimonials = [
    { quote: 'Nuestro nuevo sitio cargó 4x más rápido y las conversiones subieron un 45%.', author: 'Patricia Soto', role: 'E-commerce Manager' },
    { quote: 'El equipo entendió exactamente qué necesitábamos y lo entregó antes de tiempo.', author: 'Miguel Ángel Torres', role: 'CEO' },
    { quote: 'Profesionales que saben que un sitio web es una herramienta de ventas, no solo un cartel digital.', author: 'Lucía Mendoza', role: 'Marketing Director' },
  ];

  const faqs = [
    { question: '¿Cuánto cuesta un sitio web?', answer: 'Depende del alcance. Una landing page puede empezar desde $1,500, un sitio corporativo desde $3,000, y un e-commerce desde $5,000.' },
    { question: '¿Qué tecnologías utilizan?', answer: 'Trabajamos con React, Next.js, WordPress, Shopify, y tecnologías modernas según el proyecto.' },
    { question: '¿Incluye hosting y dominio?', answer: 'Podemos incluirlo o gestionar tu hosting existente. Ofrecemos planes de hosting optimizado.' },
    { question: '¿Qué pasa después del lanzamiento?', answer: 'Ofrecemos planes de mantenimiento mensual que incluyen actualizaciones, backups, soporte y mejoras.' },
  ];

  const relatedServices = [
    { title: 'Marketing Digital', href: '/servicios/marketing-digital', iconName: 'TrendingUp' },
    { title: 'SEO', href: '/servicios/seo-posicionamiento', iconName: 'Search' },
    { title: 'Branding', href: '/servicios/branding-diseno', iconName: 'Palette' },
    { title: 'Publicidad Digital', href: '/servicios/publicidad-digital', iconName: 'Target' },
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
