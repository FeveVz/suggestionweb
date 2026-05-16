'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

const posts = [
  {
    title: '10 Tendencias de Marketing Digital para 2026',
    excerpt: 'Descubre las estrategias que marcarán el rumbo del marketing digital este año.',
    category: 'Tendencias',
    date: '15 Mar 2026',
    readTime: '8 min',
    color: '#FF6600',
  },
  {
    title: 'Cómo Crear una Estrategia de SEO que Funcione',
    excerpt: 'Guía completa para posicionar tu sitio web en los primeros resultados de búsqueda.',
    category: 'SEO',
    date: '10 Mar 2026',
    readTime: '12 min',
    color: '#00BFFF',
  },
  {
    title: 'El Poder del Storytelling en Redes Sociales',
    excerpt: 'Aprende a conectar con tu audiencia a través de historias que generan engagement.',
    category: 'Redes Sociales',
    date: '5 Mar 2026',
    readTime: '6 min',
    color: '#FF6600',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function BlogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="blog" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[600px] lg:h-[600px]"
          style={{
            background: 'radial-gradient(circle, rgba(0, 191, 255, 0.05) 0%, transparent 60%)',
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div 
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl mb-4 sm:mb-0">
            <motion.span 
              className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4"
              style={{ color: '#FF6600', fontFamily: 'var(--font-inter)' }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Blog
            </motion.span>
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Ideas que{' '}
              <span className="text-gradient">Inspiran</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition-all duration-300 min-h-[44px]"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Ver todos los artículos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Blog Grid - Horizontal Cards for better flow */}
        <motion.div 
          className="space-y-4 sm:space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {posts.map((post, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card 
                  className="group bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-sm"
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      {/* Image Section */}
                      <motion.div 
                        className="sm:w-40 md:w-48 lg:w-56 flex-shrink-0 h-32 sm:h-auto relative overflow-hidden"
                        style={{ 
                          background: `linear-gradient(135deg, ${post.color}15, ${post.color}30)` 
                        }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.4 }}
                      >
                        {/* Category Badge */}
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
                          <span 
                            className="text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-full text-white"
                            style={{ backgroundColor: post.color, fontFamily: 'var(--font-inter)' }}
                          >
                            {post.category}
                          </span>
                        </div>
                        
                        {/* Icon decoration */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <BookOpen className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: `${post.color}30` }} />
                        </div>
                      </motion.div>

                      {/* Content Section */}
                      <div className="flex-1 p-4 sm:p-5 md:p-6">
                        {/* Date & Read Time */}
                        <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                          <div className="flex items-center gap-1.5 text-gray-400">
                            <Calendar className="w-3.5 h-3.5" />
                            <span className="text-[10px] sm:text-xs" style={{ fontFamily: 'var(--font-inter)' }}>
                              {post.date}
                            </span>
                          </div>
                          <span className="text-[10px] sm:text-xs text-gray-500" style={{ fontFamily: 'var(--font-inter)' }}>
                            {post.readTime} lectura
                          </span>
                        </div>

                        {/* Title */}
                        <h3 
                          className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-gray-100 transition-colors line-clamp-2"
                          style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p 
                          className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-3 sm:mb-4 line-clamp-2"
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          {post.excerpt}
                        </p>

                        {/* Read More */}
                        <motion.div 
                          className="flex items-center gap-2 font-medium group-hover:gap-3 transition-all duration-300"
                          style={{ color: post.color, fontFamily: 'var(--font-inter)' }}
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-xs sm:text-sm font-semibold">Leer más</span>
                          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
