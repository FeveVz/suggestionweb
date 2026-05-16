'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Lightbulb, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Descubrimiento',
    description: 'Analizamos tu negocio, competencia y mercado. Identificamos oportunidades y definimos objetivos claros.',
    color: '#FF6600',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Estrategia',
    description: 'Diseñamos un plan personalizado con tácticas específicas y KPIs claros.',
    color: '#00BFFF',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Ejecución',
    description: 'Implementamos la estrategia con agilidad y comunicación transparente.',
    color: '#FF6600',
  },
  {
    number: '04',
    icon: BarChart,
    title: 'Optimización',
    description: 'Medimos, analizamos y mejoramos continuamente para maximizar resultados.',
    color: '#00BFFF',
  },
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

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]"
          style={{
            background: 'radial-gradient(circle, rgba(0, 0, 0, 0.03) 0%, transparent 60%)',
          }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(255, 102, 0, 0.03)' }}
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16"
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
            Nuestro Proceso
          </motion.span>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            De la Idea al{' '}
            <span className="text-gradient">Resultado</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 px-4"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Una metodología probada que transforma ideas en resultados medibles.
          </motion.p>
        </motion.div>

        {/* Process Steps - Horizontal Cards */}
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Connection Line (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-black/10 -translate-y-1/2 z-0">
            <motion.div 
              className="h-full bg-black"
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : {}}
              transition={{ delay: 0.5, duration: 1.5, ease: 'easeInOut' }}
            />
          </div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-6 xl:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                variants={stepVariants}
                custom={index}
              >
                <motion.div 
                  className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-500 relative group"
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {/* Number Background */}
                  <motion.div 
                    className="absolute top-2 right-2 sm:top-4 sm:right-4 text-4xl sm:text-5xl lg:text-6xl font-bold opacity-5 text-black"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                    animate={{ 
                      opacity: [0.05, 0.1, 0.05],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Number */}
                  <motion.div 
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4"
                    style={{ color: step.color, fontFamily: 'var(--font-montserrat)' }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div 
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 bg-black"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <step.icon 
                      className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white"
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 
                    className="text-base sm:text-lg lg:text-xl font-bold text-black mb-2 sm:mb-3 group-hover:text-gray-900 transition-colors"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-xs sm:text-sm text-gray-600 leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {step.description}
                  </p>

                  {/* Arrow indicator (Desktop only) */}
                  {index < steps.length - 1 && (
                    <motion.div 
                      className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-black rounded-full shadow-md items-center justify-center z-20"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + index * 0.2 }}
                    >
                      <motion.svg 
                        className="w-3 h-3 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </motion.svg>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
