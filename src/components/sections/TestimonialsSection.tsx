'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'María González',
    role: 'CEO',
    company: 'TechFlow Solutions',
    content: 'Suggestion transformó completamente nuestra estrategia digital. En 6 meses triplicamos nuestros leads cualificados y redujimos el costo de adquisición a la mitad.',
    initials: 'MG',
    color: '#FF6600',
  },
  {
    name: 'Carlos Ramírez',
    role: 'Director de Marketing',
    company: 'Verde Orgánico',
    content: 'El equipo de Suggestion no solo ejecuta, piensa. Sus recomendaciones estratégicas nos llevaron a ser un referente en nuestro sector.',
    initials: 'CR',
    color: '#00BFFF',
  },
  {
    name: 'Ana Martínez',
    role: 'Fundadora',
    company: 'Clínica Belleza',
    content: 'Dudábamos en invertir en marketing digital, pero los resultados nos convencieron. Hoy nuestra agenda está llena y nuestra comunidad crece cada día.',
    initials: 'AM',
    color: '#FF6600',
  },
  {
    name: 'Roberto Sánchez',
    role: 'CMO',
    company: 'Inmobiliaria Premium',
    content: 'Profesionales, creativos y orientados a resultados. Nuestra presencia digital nunca había sido tan fuerte.',
    initials: 'RS',
    color: '#00BFFF',
  },
  {
    name: 'Laura Vega',
    role: 'CEO',
    company: 'StartUp Innovation',
    content: 'Como startup, necesitábamos resultados rápidos con presupuesto limitado. Suggestion optimizó cada peso y nos posicionó como líderes.',
    initials: 'LV',
    color: '#FF6600',
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-black relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 102, 0, 0.05) 0%, transparent 60%)',
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4"
            style={{ color: '#00BFFF', fontFamily: 'var(--font-inter)' }}
          >
            Testimonios
          </motion.span>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Lo que dicen{' '}
            <span className="text-gradient">Nuestros Clientes</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-400 px-4"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            La mejor prueba de nuestro compromiso son los resultados.
          </motion.p>
        </motion.div>

        {/* Testimonial Carousel */}
        <motion.div 
          className="max-w-full sm:max-w-2xl lg:max-w-4xl mx-auto px-2 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Card className="bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-5 sm:p-6 md:p-8 lg:p-12 relative">
              {/* Quote Icon */}
              <motion.div 
                className="mb-4 sm:mb-6"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
              >
                <Quote 
                  className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 opacity-30"
                  style={{ color: '#FF6600' }}
                />
              </motion.div>

              {/* Testimonial Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                >
                  <blockquote 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-6 sm:mb-8"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <motion.div 
                    className="flex items-center gap-3 sm:gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Avatar className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14">
                        <AvatarFallback 
                          className="text-white font-bold text-sm sm:text-base lg:text-lg"
                          style={{ backgroundColor: testimonials[currentIndex].color, fontFamily: 'var(--font-montserrat)' }}
                        >
                          {testimonials[currentIndex].initials}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div>
                      <div 
                        className="font-bold text-white text-sm sm:text-base"
                        style={{ fontFamily: 'var(--font-montserrat)' }}
                      >
                        {testimonials[currentIndex].name}
                      </div>
                      <div 
                        className="text-xs sm:text-sm text-gray-400"
                        style={{ fontFamily: 'var(--font-inter)' }}
                      >
                        {testimonials[currentIndex].role} - {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors min-h-[44px] min-w-[44px]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-1.5 sm:gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 min-h-[16px] min-w-[16px] ${
                    index === currentIndex 
                      ? 'w-5 sm:w-6 bg-white' 
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors min-h-[44px] min-w-[44px]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
