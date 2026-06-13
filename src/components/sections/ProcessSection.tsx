'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Descubrimiento',
    description: 'Analizamos tu negocio, competencia y mercado. Identificamos oportunidades y definimos objetivos claros con datos reales.',
    accent: '#FF8C00',
  },
  {
    number: '02',
    title: 'Estrategia',
    description: 'Diseñamos un plan personalizado con tácticas específicas, cronograma definido y KPIs medibles desde el día uno.',
    accent: '#00BFFF',
  },
  {
    number: '03',
    title: 'Ejecución',
    description: 'Implementamos la estrategia con agilidad y comunicación transparente. Tú ves todo en tiempo real.',
    accent: '#FF8C00',
  },
  {
    number: '04',
    title: 'Optimización',
    description: 'Medimos, analizamos y mejoramos continuamente. Cada ciclo es más preciso y efectivo que el anterior.',
    accent: '#00BFFF',
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="bg-white relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-28">

        {/* Header editorial */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="h-px w-12 bg-black" />
            <span className="text-xs tracking-[0.25em] uppercase font-medium text-black/40" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Nuestro Proceso
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <motion.h2
              className="text-[clamp(2.8rem,7vw,6.5rem)] font-black leading-[0.82] tracking-tight text-black uppercase"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              DE LA IDEA<br />
              AL{' '}
              <span style={{ color: '#FF8C00' }}>RESULTADO.</span>
            </motion.h2>

            <motion.p
              className="text-sm text-black/60 max-w-xs leading-relaxed"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Una metodología probada que transforma ideas en resultados medibles y sostenibles.
            </motion.p>
          </div>
        </div>

        {/* Steps — layout editorial con números grandes */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="flex items-start border-b border-black/8 last:border-b-0 hover:bg-black/2 transition-colors">
                {/* Número protagonista */}
                <div className="flex-shrink-0 w-24 sm:w-32 lg:w-48 py-8 sm:py-10 pr-6 sm:pr-10">
                  <span
                    className="text-[clamp(3rem,7vw,6rem)] font-bold leading-none tracking-tight block"
                    style={{ color: step.accent, fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Línea vertical divisora */}
                <div className="w-px bg-black/8 self-stretch mx-6 sm:mx-10 hidden sm:block" />

                {/* Contenido */}
                <div className="flex-1 py-8 sm:py-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="max-w-lg">
                      <h3
                        className="text-xl sm:text-2xl font-bold text-black mb-3 leading-tight"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-sm text-black/70 leading-relaxed"
                        style={{ fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow indicador */}
                    <div
                      className="flex-shrink-0 w-8 h-8 border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity self-center"
                      style={{ borderColor: step.accent }}
                    >
                      <span style={{ color: step.accent }} className="text-sm">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
