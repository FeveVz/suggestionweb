'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'María González',
    role: 'CEO',
    company: 'TechFlow Solutions',
    content: 'Suggestion transformó completamente nuestra estrategia digital. En 6 meses triplicamos nuestros leads cualificados y redujimos el costo de adquisición a la mitad.',
    initials: 'MG',
    accent: '#FF8C00',
    result: '3× leads',
  },
  {
    name: 'Carlos Ramírez',
    role: 'Director de Marketing',
    company: 'Verde Orgánico',
    content: 'El equipo de Suggestion no solo ejecuta, piensa. Sus recomendaciones estratégicas nos llevaron a ser un referente en nuestro sector en menos de un año.',
    initials: 'CR',
    accent: '#00BFFF',
    result: '4.5× ROAS',
  },
  {
    name: 'Ana Martínez',
    role: 'Fundadora',
    company: 'Clínica Belleza',
    content: 'Dudábamos en invertir en marketing digital, pero los resultados nos convencieron desde el primer mes. Hoy nuestra agenda está llena y nuestra comunidad crece cada día.',
    initials: 'AM',
    accent: '#FF8C00',
    result: '+250% citas',
  },
  {
    name: 'Roberto Sánchez',
    role: 'CMO',
    company: 'Inmobiliaria Premium',
    content: 'Profesionales, creativos y orientados a resultados. Nuestra presencia digital nunca había sido tan fuerte ni nuestra cartera tan llena.',
    initials: 'RS',
    accent: '#00BFFF',
    result: '+200% consultas',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  const active = testimonials[current];

  return (
    <section className="bg-black relative overflow-hidden" ref={ref}>
      {/* Gradiente lateral decorativo */}
      <motion.div
        className="absolute left-0 top-0 w-1 h-full transition-colors duration-500"
        style={{ background: `linear-gradient(to bottom, ${active.accent}, transparent)` }}
      />

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

          {/* Columna izquierda — header + controles */}
          <div>
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="h-px w-12 bg-white/20" />
              <span className="text-xs tracking-[0.25em] uppercase font-medium text-white/30" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                Testimonios
              </span>
            </motion.div>

            <motion.h2
              className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-[0.82] tracking-tight text-white mb-10 uppercase"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              MARCAS QUE<br />
              <span style={{ color: '#00BFFF' }}>CRECIERON.</span>
            </motion.h2>

            {/* Navegación */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={prev}
                className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:border-white/60 hover:bg-white/5 transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:border-white/60 hover:bg-white/5 transition-all"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <span className="text-xs text-white/20 ml-2" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>
            </motion.div>

            {/* Dots */}
            <div className="flex gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="h-px transition-all duration-300"
                  style={{
                    width: i === current ? '2rem' : '1rem',
                    backgroundColor: i === current ? active.accent : 'rgba(255,255,255,0.2)',
                  }}
                  aria-label={`Testimonio ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Columna derecha — cita */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              {/* Resultado destacado */}
              <div
                className="text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none tracking-tight mb-8"
                style={{ color: active.accent, fontFamily: 'var(--font-space-grotesk)' }}
              >
                {active.result}
              </div>

              {/* Cita */}
              <blockquote
                className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed mb-10 font-light"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                &ldquo;{active.content}&rdquo;
              </blockquote>

              {/* Autor */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ backgroundColor: active.accent, fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {active.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-white" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    {active.name}
                  </div>
                  <div className="text-xs text-white/40" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    {active.role} — {active.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
