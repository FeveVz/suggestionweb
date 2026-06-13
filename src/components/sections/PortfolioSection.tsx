'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const cases = [
  {
    client: 'Inmobiliaria Ceinys',
    industry: 'Inmobiliaria',
    results: [
      { metric: 'S/350K', label: 'En ventas' },
      { metric: '8', label: 'Lotes vendidos' },
    ],
    description: 'Campaña de Meta Ads con S/3,000 de inversión: 350 leads captados, 20 visitas a proyectos y 8 lotes vendidos.',
    tags: ['Meta Ads', 'Inmobiliaria', 'Lead Generation'],
    accent: '#FF8C00',
  },
  {
    client: 'Granjas Bonanza',
    industry: 'Agroindustria',
    results: [
      { metric: '15', label: 'Contratos' },
      { metric: 'S/2.5K', label: 'Inversión' },
    ],
    description: 'Campaña de Meta Ads enfocada en captación que convirtió S/2,500 de inversión en 15 contratos cerrados.',
    tags: ['Meta Ads', 'Agroindustria', 'Conversión'],
    accent: '#00BFFF',
  },
  {
    client: 'Hoteles Señor de Luren',
    industry: 'Hotelería',
    results: [
      { metric: '75', label: 'Reservas' },
    ],
    description: 'Estrategia de campañas publicitarias que generó 75 reservas para la cadena hotelera.',
    tags: ['Meta Ads', 'Hotelería', 'Reservas'],
    accent: '#FF8C00',
  },
];

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="portafolio" className="bg-white relative overflow-hidden" ref={ref}>
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
              Casos de Éxito
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
              NÚMEROS<br />
              QUE{' '}
              <span style={{ color: '#FF8C00' }}>HABLAN.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/portafolio"
                className="inline-flex items-center gap-2 text-sm font-semibold text-black/60 hover:text-black transition-colors group"
                style={{ fontFamily: 'var(--font-dm-sans)' }}
              >
                Ver todos los proyectos
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Cases — lista editorial con líneas divisoras */}
        <div className="space-y-0">
          {cases.map((c, index) => (
            <motion.div
              key={c.client}
              className="group border-b border-black/8 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="flex items-start gap-0 py-10 sm:py-12 hover:bg-black/1 transition-colors">
                {/* Número */}
                <div className="flex-shrink-0 w-16 sm:w-20">
                  <span
                    className="text-[10px] tracking-[0.2em] font-mono"
                    style={{ color: c.accent }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Contenido principal */}
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-[2fr_1fr_auto] gap-6 lg:gap-12 items-start">
                  {/* Info del cliente */}
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3
                        className="text-xl sm:text-2xl font-bold text-black leading-tight"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {c.client}
                      </h3>
                      <span
                        className="text-[10px] tracking-wider uppercase px-2 py-0.5 font-medium"
                        style={{ color: c.accent, backgroundColor: `${c.accent}12`, fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {c.industry}
                      </span>
                    </div>
                    <p
                      className="text-sm text-black/65 leading-relaxed mb-4 max-w-md"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {c.description}
                    </p>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {c.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] tracking-wider uppercase px-3 py-1 border border-black/15 text-black/60"
                          style={{ fontFamily: 'var(--font-dm-sans)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Métricas — números protagonistas */}
                  <div className="flex gap-8 lg:gap-6">
                    {c.results.map((r) => (
                      <div key={r.label}>
                        <div
                          className="text-2xl sm:text-3xl font-bold leading-none mb-1"
                          style={{ color: c.accent, fontFamily: 'var(--font-space-grotesk)' }}
                        >
                          {r.metric}
                        </div>
                        <div
                          className="text-[10px] tracking-wider uppercase text-black/55"
                          style={{ fontFamily: 'var(--font-dm-sans)' }}
                        >
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex items-center self-center">
                    <div
                      className="w-10 h-10 border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                      style={{ borderColor: c.accent }}
                    >
                      <ArrowUpRight className="w-4 h-4" style={{ color: c.accent }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 pt-10 border-t border-black/8 flex justify-end"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          <Link
            href="/portafolio"
            className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 text-sm font-semibold transition-all hover:bg-[#FF8C00]"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Ver todos los casos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
