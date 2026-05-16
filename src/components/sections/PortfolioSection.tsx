'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight, TrendingUp, Users, ShoppingBag, ArrowRight } from 'lucide-react';

const cases = [
  {
    client: 'TechFlow Solutions',
    industry: 'SaaS B2B',
    results: [
      { metric: '+320%', label: 'Leads' },
      { metric: '-45%', label: 'Costo/lead' },
    ],
    description: 'Estrategia de inbound marketing y automatización que transformó su funnel de ventas.',
    tags: ['SEO', 'Lead Generation', 'Marketing Automation'],
    color: '#FF6600',
  },
  {
    client: 'Verde Orgánico',
    industry: 'E-commerce',
    results: [
      { metric: '4.5x', label: 'ROAS' },
      { metric: '+180%', label: 'Ventas' },
    ],
    description: 'Campañas de performance marketing que escalaron su e-commerce de manera rentable.',
    tags: ['Meta Ads', 'Google Ads', 'E-commerce'],
    color: '#00BFFF',
  },
  {
    client: 'Clínica Belleza',
    industry: 'Salud y Belleza',
    results: [
      { metric: '+250%', label: 'Citas' },
      { metric: '12K', label: 'Seguidores' },
    ],
    description: 'Estrategia de redes sociales y publicidad local que llenó su agenda de citas.',
    tags: ['Social Media', 'Local SEO', 'Publicidad'],
    color: '#FF6600',
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

const cardVariants = {
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

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="portafolio" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 -translate-y-1/2 -translate-x-1/2"
          style={{
            background: 'radial-gradient(circle, rgba(0, 0, 0, 0.03) 0%, transparent 70%)',
          }}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(255, 102, 0, 0.03)' }}
          animate={{ 
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
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
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Casos de Éxito
          </motion.span>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Resultados que{' '}
            <span className="text-gradient">Hablan</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-gray-600 px-4"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Historias reales de transformación digital.
          </motion.p>
        </motion.div>

        {/* Cases Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {cases.map((caseItem, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card 
                  className="group bg-black border-none shadow hover:shadow-lg lg:shadow-lg lg:hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                >
                {/* Image Placeholder */}
                <div 
                  className="h-32 sm:h-40 lg:h-48 relative overflow-hidden"
                  style={{ 
                    background: `linear-gradient(135deg, ${caseItem.color}20, ${caseItem.color}40)` 
                  }}
                >
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {index === 0 && <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" style={{ color: `${caseItem.color}40` }} />}
                    {index === 1 && <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" style={{ color: `${caseItem.color}40` }} />}
                    {index === 2 && <Users className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20" style={{ color: `${caseItem.color}40` }} />}
                  </motion.div>
                  
                  {/* Hover overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-white/10 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: caseItem.color }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                  </motion.div>
                </div>

                <CardContent className="p-4 sm:p-5 lg:p-6">
                  {/* Client & Industry */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 
                      className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-gray-100 transition-colors"
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                      {caseItem.client}
                    </h3>
                    <span 
                      className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: caseItem.color, fontFamily: 'var(--font-inter)' }}
                    >
                      {caseItem.industry}
                    </span>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
                    {caseItem.results.map((result, rIndex) => (
                      <motion.div 
                        key={rIndex}
                        className="p-2 sm:p-3 rounded-lg bg-white/5"
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                      >
                        <motion.div 
                          className="text-lg sm:text-xl lg:text-2xl font-bold"
                          style={{ color: caseItem.color, fontFamily: 'var(--font-montserrat)' }}
                        >
                          {result.metric}
                        </motion.div>
                        <div 
                          className="text-[10px] sm:text-xs text-gray-400"
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          {result.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Description */}
                  <p 
                    className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 line-clamp-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {caseItem.description}
                  </p>

                  {/* Tags - Black style */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {caseItem.tags.map((tag, tIndex) => (
                      <motion.span 
                        key={tIndex}
                        className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full bg-white/10 text-gray-300"
                        style={{ fontFamily: 'var(--font-inter)' }}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/portafolio"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-800 transition-all duration-300 min-h-[44px]"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Ver más casos de éxito
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
