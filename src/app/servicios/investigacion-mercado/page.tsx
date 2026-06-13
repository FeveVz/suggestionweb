import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Investigación y Estudio de Mercado en Perú',
  description: 'Estudios de mercado en Perú: datos sobre tu cliente, competencia y demanda para decidir con certeza. Investigación que guía tu inversión y reduce el riesgo.',
  keywords: ['investigación de mercado en Perú', 'estudio de mercado Perú', 'análisis de mercado', 'investigación de mercado Ica', 'análisis de competencia', 'cómo hacer un estudio de mercado en Perú', 'empresa de estudios de mercado en Perú'],
  alternates: { canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suggestion.pe'}/servicios/investigacion-mercado` },
  openGraph: {
    title: 'Investigación y Estudio de Mercado en Perú | Suggestion',
    description: 'Estudios de mercado en Perú: datos sobre tu cliente, competencia y demanda para decidir con certeza. Investigación que guía tu inversión y reduce el riesgo.',
    type: 'website',
  },
};

export default function InvestigacionMercadoPage() {
  const heroData = {
    badge: 'Investigación de mercado',
    title: 'Datos que',
    highlightedWord: 'guían tus decisiones',
    subtitle: 'Investiga antes de invertir',
    description: 'Investigamos tu mercado, tu audiencia y tu competencia con metodología clara. Insights accionables para tomar decisiones de negocio con datos, no corazonadas.',
    cta: 'Investiga tu Mercado',
    iconName: 'BarChart3',
    color: '#00BFFF',
  };

  const benefits = [
    { title: 'Reduce Riesgos', description: 'Valida hipótesis antes de invertir. Conoce el mercado antes de entrar.', iconName: 'Target' },
    { title: 'Conoce tu Cliente', description: 'Entiende qué piensan, necesitan y valoran realmente tus consumidores.', iconName: 'Users' },
    { title: 'Supera a la Competencia', description: 'Identifica sus fortalezas, debilidades y estrategias para diferenciarte.', iconName: 'TrendingUp' },
    { title: 'Descubre Oportunidades', description: 'Encuentra nichos, tendencias y espacios no atendidos en tu mercado.', iconName: 'Lightbulb' },
  ];

  const features = [
    { title: 'Análisis de Competencia', description: 'Mapeo completo de competidores, estrategias y positioning.' },
    { title: 'Estudios de Mercado', description: 'Tamaño de mercado, segmentación, tendencias y proyecciones.' },
    { title: 'Consumer Insights', description: 'Entrevistas, focus groups, encuestas y análisis etnográfico.' },
    { title: 'Brand Tracking', description: 'Monitoreo de percepción, awareness y salud de marca.' },
    { title: 'Benchmarking', description: 'Comparación con mejores prácticas de la industria.' },
    { title: 'Customer Satisfaction', description: 'NPS, CSAT, estudios de satisfacción y loyalty.' },
    { title: 'Product Testing', description: 'Pruebas de concepto, producto y precio.' },
    { title: 'Trend Analysis', description: 'Identificación de tendencias emergentes en tu categoría.' },
    { title: 'Secondary Research', description: 'Análisis de datos existentes, reportes y fuentes secundarias.' },
  ];

  const process = [
    { step: '01', title: 'Objetivos', description: 'Definimos las preguntas clave que necesitas responder.' },
    { step: '02', title: 'Metodología', description: 'Seleccionamos los métodos óptimos para cada objetivo.' },
    { step: '03', title: 'Recolección', description: 'Ejecutamos investigación de campo y análisis de datos.' },
    { step: '04', title: 'Insights', description: 'Entregamos hallazgos con recomendaciones accionables.' },
  ];



  const faqs = [
    { question: '¿Qué métodos de investigación utilizan?', answer: 'Combinamos métodos cuantitativos (encuestas, análisis de datos) y cualitativos (entrevistas, focus groups) según los objetivos.' },
    { question: '¿Cuánto tiempo toma un estudio?', answer: 'Un estudio básico puede tomar 2-3 semanas. Investigaciones profundas con campo pueden tomar 6-8 semanas.' },
    { question: '¿Trabajan solo en México?', answer: 'Realizamos investigación en México, LatAm y Estados Unidos con partners locales cuando es necesario.' },
    { question: '¿Cómo entregan los resultados?', answer: 'Reporte ejecutivo, presentación a stakeholders, raw data y sesiones de workshop para socializar hallazgos.' },
  ];

  const relatedServices = [
    { title: 'Consultoría', href: '/servicios/consultoria-marketing', iconName: 'Lightbulb' },
    { title: 'Marketing Digital', href: '/servicios/marketing-digital', iconName: 'TrendingUp' },
    { title: 'Branding', href: '/servicios/branding-diseno', iconName: 'Palette' },
    { title: 'CRM y Automatización', href: '/servicios/crm-automatizacion', iconName: 'Zap' },
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
