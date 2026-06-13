'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const values = [
  {
    number: '01',
    title: 'Enfoque Human-Centered',
    description: 'Conectamos marcas con personas, no solo con métricas. Cada estrategia genera conexiones emocionales reales.',
    accent: '#FF8C00',
  },
  {
    number: '02',
    title: 'Resultados Medibles',
    description: 'No vendemos humo. Cada acción tiene un KPI, cada campaña tiene un ROI. Transparencia total en tu inversión.',
    accent: '#00BFFF',
  },
  {
    number: '03',
    title: 'Compromiso Total',
    description: 'Tu éxito es nuestro éxito. Trabajamos como extensión de tu equipo, no como proveedores externos.',
    accent: '#FF8C00',
  },
  {
    number: '04',
    title: 'Metodología Ágil',
    description: 'Iteramos rápido, aprendemos más rápido. Adaptación constante para maximizar resultados en tiempo real.',
    accent: '#00BFFF',
  },
];

const stats = [
  { value: 'S/350K', label: 'En ventas\n(Inmobiliaria Ceinys)', accent: '#FF8C00' },
  { value: '8', label: 'Lotes vendidos\nen una campaña', accent: '#00BFFF' },
  { value: '15', label: 'Contratos cerrados\n(Granjas Bonanza)', accent: '#FF8C00' },
  { value: '+50', label: 'Clientes\nque confían en nosotros', accent: '#00BFFF' },
];

export default function ValuePropositionSection() {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const statsInView = useInView(statsRef, { once: true, margin: '-50px' });

  return (
    <section id="nosotros" className="bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-28" ref={ref}>

        {/* Header editorial */}
        <div className="mb-16 sm:mb-20">
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="h-px w-12 bg-white/20" />
            <span className="text-xs tracking-[0.25em] uppercase font-medium text-white/50" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              ¿Por qué Suggestion?
            </span>
          </motion.div>

          <motion.h2
            className="text-[clamp(2.8rem,7vw,6.5rem)] font-black leading-[0.82] tracking-tight text-white uppercase"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            DIFERENTES<br />
            POR{' '}
            <span style={{ color: '#FF8C00' }}>DECISIÓN.</span>
          </motion.h2>
        </div>

        {/* Valores — lista editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.number}
              className="bg-black p-8 sm:p-10 group hover:bg-white/3 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-6">
                <span
                  className="text-[10px] tracking-[0.2em] font-mono mt-1 flex-shrink-0"
                  style={{ color: value.accent }}
                >
                  {value.number}
                </span>
                <div>
                  <h3
                    className="text-lg sm:text-xl font-bold text-white mb-3 leading-tight"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-sm text-white/65 leading-relaxed"
                    style={{ fontFamily: 'var(--font-dm-sans)' }}
                  >
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats — números protagonistas */}
        <div ref={statsRef}>
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={statsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="h-px w-12 bg-white/20" />
            <span className="text-xs tracking-[0.25em] uppercase font-medium text-white/50" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Resultados reales
            </span>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-black p-8 sm:p-10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none mb-3 tracking-tight"
                  style={{ color: stat.accent, fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {stat.value}
                </div>
                <p
                  className="text-xs text-white/55 leading-relaxed whitespace-pre-line"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 pt-10 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-white/55" style={{ fontFamily: 'var(--font-dm-sans)' }}>
            Somos socios, no proveedores.
          </p>
          <Link
            href="/nosotros"
            className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 text-sm font-semibold transition-all hover:bg-white hover:text-black"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Conoce más sobre nosotros
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
