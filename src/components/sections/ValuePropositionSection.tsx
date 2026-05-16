'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Users, TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Users,
    title: 'Enfoque Human-Centered',
    description: 'Conectamos marcas con personas, no solo con métricas. Cada estrategia está diseñada para generar conexiones emocionales reales.',
  },
  {
    icon: TrendingUp,
    title: 'Resultados Medibles',
    description: 'No vendemos humo. Cada acción tiene un KPI, cada campaña tiene un ROI. Transparencia total en tu inversión.',
  },
  {
    icon: Shield,
    title: 'Compromiso Total',
    description: 'Tu éxito es nuestro éxito. Trabajamos como extensión de tu equipo, no como proveedores externos.',
  },
  {
    icon: Zap,
    title: 'Metodología Ágil',
    description: 'Iteramos rápido, aprendemos más rápido. Adaptación constante para maximizar resultados en tiempo real.',
  },
];

const stats = [
  { value: '250%', label: 'Incremento promedio en conversiones' },
  { value: '3x', label: 'ROI promedio en campañas' },
  { value: '40%', label: 'Reducción en costo de adquisición' },
  { value: '24/7', label: 'Soporte y optimización' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export default function ValuePropositionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(255, 102, 0, 0.05) 0%, transparent 50%)',
          }}
          animate={{ 
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(0, 191, 255, 0.05)' }}
          animate={{ 
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
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
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            ¿Por qué Suggestion?
          </motion.span>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Diferentes por{' '}
            <span className="text-gradient">Decisión</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-400"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            No somos otra agencia de marketing. Somos socios estratégicos 
            comprometidos con tu crecimiento real y sostenible.
          </motion.p>
        </motion.div>

        {/* Values Grid - Horizontal Cards */}
        <motion.div 
          className="space-y-4 sm:space-y-6 mb-10 sm:mb-12 md:mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.01, x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card 
                  className="group bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden backdrop-blur-sm"
                >
                <CardContent className="p-5 sm:p-6 md:p-8">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                    {/* Icon */}
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <div 
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mx-auto sm:mx-0"
                        style={{ backgroundColor: index % 2 === 0 ? '#FF6600' : '#00BFFF' }}
                      >
                        <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                    </motion.div>
                    
                    {/* Content */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 
                        className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gray-100 transition-colors"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                      >
                        {value.title}
                      </h3>
                      <p 
                        className="text-sm sm:text-base text-gray-400 leading-relaxed"
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        {value.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="hidden sm:flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-5 h-5 text-gray-500" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Banner */}
        <motion.div 
          className="rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden border border-white/10"
          style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(45deg, transparent, rgba(255, 102, 0, 0.08), transparent)',
            }}
            animate={{ 
              x: ['-100%', '100%'],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 relative z-10">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-2 sm:p-3"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2"
                  style={{ color: '#FF6600', fontFamily: 'var(--font-montserrat)' }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  {stat.value}
                </motion.div>
                <div 
                  className="text-xs sm:text-sm text-gray-400 leading-tight"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-8 sm:mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <Link 
            href="/nosotros"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 min-h-[44px]"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Conoce más sobre nosotros
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
