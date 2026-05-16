'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';

const posts = [
  {
    title: '10 Tendencias de Marketing Digital para 2026',
    excerpt: 'Descubre las estrategias que marcarán el rumbo del marketing digital este año.',
    category: 'Tendencias',
    date: '15 Mar 2026',
    readTime: '8 min',
    accent: '#FF8C00',
  },
  {
    title: 'Cómo Crear una Estrategia de SEO que Funcione',
    excerpt: 'Guía completa para posicionar tu sitio web en los primeros resultados de búsqueda.',
    category: 'SEO',
    date: '10 Mar 2026',
    readTime: '12 min',
    accent: '#00BFFF',
  },
  {
    title: 'El Poder del Storytelling en Redes Sociales',
    excerpt: 'Aprende a conectar con tu audiencia a través de historias que generan engagement real.',
    category: 'Redes Sociales',
    date: '5 Mar 2026',
    readTime: '6 min',
    accent: '#FF8C00',
  },
];

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="blog" className="bg-black relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-28">

        {/* Header editorial */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 sm:mb-20 gap-8">
          <div>
            <motion.div
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="h-px w-12 bg-white/20" />
              <span className="text-xs tracking-[0.25em] uppercase font-medium text-white/30" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                Blog
              </span>
            </motion.div>

            <motion.h2
              className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-tight text-white"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ideas que{' '}
              <span style={{ color: '#00BFFF' }}>inspiran.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/30 hover:text-white transition-colors group"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Ver todos los artículos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Posts — lista editorial */}
        <div className="space-y-0">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              className="group border-b border-white/8 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href="/blog" className="flex items-start gap-0 py-8 sm:py-10 hover:bg-white/2 transition-colors">
                {/* Número */}
                <div className="flex-shrink-0 w-16 sm:w-20">
                  <span
                    className="text-[10px] tracking-[0.2em] font-mono"
                    style={{ color: post.accent }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Contenido */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 items-start">
                  <div>
                    {/* Category + date */}
                    <div className="flex items-center gap-4 mb-3">
                      <span
                        className="text-[10px] tracking-wider uppercase font-medium"
                        style={{ color: post.accent, fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-white/20">
                        <Calendar className="w-3 h-3" />
                        <span className="text-[10px]" style={{ fontFamily: 'var(--font-dm-sans)' }}>{post.date}</span>
                      </div>
                      <span className="text-[10px] text-white/20" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                        {post.readTime}
                      </span>
                    </div>

                    <h3
                      className="text-lg sm:text-xl font-bold text-white group-hover:text-white/80 transition-colors mb-2 leading-tight"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className="text-sm text-white/30 leading-relaxed"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden sm:flex items-center self-center">
                    <span
                      className="text-white/20 group-hover:text-white/60 transition-colors group-hover:translate-x-1 inline-block transition-transform"
                      style={{ color: post.accent }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-14 pt-10 border-t border-white/8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 text-sm font-semibold transition-all hover:bg-white hover:text-black"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Ver todos los artículos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
