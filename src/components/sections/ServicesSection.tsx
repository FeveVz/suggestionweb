'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { 
  TrendingUp, 
  Share2, 
  Target, 
  Search, 
  Palette, 
  Code,
  Lightbulb,
  Zap,
  Video,
  BarChart3,
  ShoppingBag,
  Printer,
  PanelTop,
  Truck,
  Sparkles,
  Package
} from 'lucide-react';

const serviciosPrincipales = [
  {
    icon: TrendingUp,
    title: 'Marketing Digital',
    description: 'Estrategias integrales que transforman tu presencia digital en resultados medibles y sostenibles.',
    color: '#FF6600',
    href: '/servicios/marketing-digital',
  },
  {
    icon: Share2,
    title: 'Redes Sociales',
    description: 'Gestión profesional de comunidades y contenido que conecta con tu audiencia de forma auténtica.',
    color: '#00BFFF',
    href: '/servicios/marketing-redes-sociales',
  },
  {
    icon: Target,
    title: 'Publicidad Digital',
    description: 'Campañas en Meta Ads, Google Ads y más con ROI medible y optimización continua.',
    color: '#FF6600',
    href: '/servicios/publicidad-digital',
  },
  {
    icon: Search,
    title: 'SEO',
    description: 'Posicionamiento orgánico que te hace visible cuando tus clientes te buscan.',
    color: '#00BFFF',
    href: '/servicios/seo-posicionamiento',
  },
  {
    icon: Palette,
    title: 'Branding',
    description: 'Identidad visual y estratégica que deja huella en la mente de tu audiencia.',
    color: '#FF6600',
    href: '/servicios/branding-diseno',
  },
  {
    icon: Code,
    title: 'Desarrollo Web',
    description: 'Sitios web optimizados, rápidos y diseñados para convertir visitantes en clientes.',
    color: '#00BFFF',
    href: '/servicios/desarrollo-web',
  },
  {
    icon: Lightbulb,
    title: 'Consultoría',
    description: 'Asesoría estratégica personalizada para potenciar tu marketing digital.',
    color: '#FF6600',
    href: '/servicios/consultoria-marketing',
  },
  {
    icon: Zap,
    title: 'CRM y Automatización',
    description: 'Automatiza procesos y escala tu negocio con herramientas inteligentes.',
    color: '#00BFFF',
    href: '/servicios/crm-automatizacion',
  },
  {
    icon: Video,
    title: 'Producción Audiovisual',
    description: 'Contenido visual de alto impacto que cuenta tu historia de manera memorable.',
    color: '#FF6600',
    href: '/servicios/produccion-audiovisual',
  },
  {
    icon: BarChart3,
    title: 'Investigación de Mercado',
    description: 'Datos e insights que guían decisiones estratégicas informadas.',
    color: '#00BFFF',
    href: '/servicios/investigacion-mercado',
  },
];

const serviciosComplementarios = [
  { icon: ShoppingBag, title: 'Merchandising', color: '#FF6600', href: '/servicios/merchandising' },
  { icon: Printer, title: 'Imprenta Corporativa', color: '#00BFFF', href: '/servicios/imprenta-corporativa' },
  { icon: PanelTop, title: 'Estructuras', color: '#FF6600', href: '/servicios/estructuras-publicitarias' },
  { icon: Truck, title: 'Publicidad Móvil', color: '#00BFFF', href: '/servicios/publicidad-movil' },
  { icon: Sparkles, title: 'BTL y Activaciones', color: '#FF6600', href: '/servicios/btl-activaciones' },
  { icon: Package, title: 'Material POP', color: '#00BFFF', href: '/servicios/material-pop' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4"
            style={{ color: '#FF6600', fontFamily: 'var(--font-inter)' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Nuestros Servicios
          </motion.span>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Soluciones que{' '}
            <span className="text-gradient">Transforman</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 px-4"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Ofrecemos un ecosistema completo de servicios de marketing digital 
            diseñados para impulsar tu negocio al siguiente nivel.
          </motion.p>
        </motion.div>

        {/* Servicios Principales */}
        <div className="mb-10 sm:mb-12 md:mb-16">
          <motion.div 
            className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <div className="h-px flex-1 bg-black" />
            <h3 
              className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black whitespace-nowrap"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Servicios Principales
            </h3>
            <div className="h-px flex-1 bg-black" />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {serviciosPrincipales.map((service, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Link href={service.href} className="block h-full">
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="h-full"
                  >
                    <Card className="group bg-gray-50 border-none hover:bg-white hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden h-full">
                      <CardContent className="p-4 sm:p-5 md:p-6 relative">
                        {/* Animated background on hover */}
                        <motion.div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ background: `linear-gradient(135deg, ${service.color}05, ${service.color}10)` }}
                        />
                        
                        {/* Icon */}
                        <motion.div 
                          className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 relative z-10 bg-black"
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <service.icon 
                            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white"
                          />
                        </motion.div>
                        
                        {/* Title */}
                        <h3 
                          className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-3 relative z-10 group-hover:text-gray-900 transition-colors"
                          style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                          {service.title}
                        </h3>
                        
                        {/* Description */}
                        <p 
                          className="text-xs sm:text-sm text-gray-600 leading-relaxed relative z-10"
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          {service.description}
                        </p>

                        {/* Arrow indicator */}
                        <motion.div 
                          className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{ x: 5 }}
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: service.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Servicios Complementarios */}
        <div>
          <motion.div 
            className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div className="h-px flex-1 bg-black" />
            <h3 
              className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black whitespace-nowrap"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Servicios Complementarios
            </h3>
            <div className="h-px flex-1 bg-black" />
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {serviciosComplementarios.map((service, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                custom={index}
              >
                <Link href={service.href} className="block">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Card className="group bg-black border-none shadow hover:shadow-lg transition-all duration-300 cursor-pointer min-h-[80px] sm:min-h-[100px]">
                      <CardContent className="p-3 sm:p-4 text-center">
                        {/* Icon */}
                        <motion.div 
                          className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3"
                          style={{ backgroundColor: `${service.color}20` }}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <service.icon 
                            className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6"
                            style={{ color: service.color }}
                          />
                        </motion.div>
                        
                        {/* Title */}
                        <h3 
                          className="text-xs sm:text-sm font-bold text-white group-hover:text-gray-200 transition-colors leading-tight"
                          style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                          {service.title}
                        </h3>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-10 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-800 transition-all duration-300 min-h-[44px]"
            style={{ fontFamily: 'var(--font-inter)' }}
            whileHover={{ scale: 1.05 }}
          >
            Descubre cómo podemos ayudarte
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
