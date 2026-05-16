'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Sparkles, MousePointer2 } from 'lucide-react';

// Rorschach-inspired decorative shapes
const RorschachShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.svg
    viewBox="0 0 200 200"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 0.08, scale: 1 }}
    transition={{ duration: 1, delay }}
  >
    <motion.path
      d="M100 20 C120 30, 140 50, 150 80 C160 110, 150 140, 130 160 C110 180, 80 180, 60 160 C40 140, 30 110, 40 80 C50 50, 70 30, 100 20 Z"
      fill="currentColor"
      animate={{ 
        d: [
          "M100 20 C120 30, 140 50, 150 80 C160 110, 150 140, 130 160 C110 180, 80 180, 60 160 C40 140, 30 110, 40 80 C50 50, 70 30, 100 20 Z",
          "M100 25 C125 35, 145 55, 155 85 C165 115, 155 145, 135 165 C115 185, 75 185, 55 165 C35 145, 25 115, 35 85 C45 55, 65 35, 100 25 Z",
          "M100 20 C120 30, 140 50, 150 80 C160 110, 150 140, 130 160 C110 180, 80 180, 60 160 C40 140, 30 110, 40 80 C50 50, 70 30, 100 20 Z"
        ]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.path
      d="M100 20 C80 30, 60 50, 50 80 C40 110, 50 140, 70 160 C90 180, 120 180, 140 160 C160 140, 170 110, 160 80 C150 50, 130 30, 100 20 Z"
      fill="currentColor"
      animate={{ 
        d: [
          "M100 20 C80 30, 60 50, 50 80 C40 110, 50 140, 70 160 C90 180, 120 180, 140 160 C160 140, 170 110, 160 80 C150 50, 130 30, 100 20 Z",
          "M100 25 C75 35, 55 55, 45 85 C35 115, 45 145, 65 165 C85 185, 125 185, 145 165 C165 145, 175 115, 165 85 C155 55, 135 35, 100 25 Z",
          "M100 20 C80 30, 60 50, 50 80 C40 110, 50 140, 70 160 C90 180, 120 180, 140 160 C160 140, 170 110, 160 80 C150 50, 130 30, 100 20 Z"
        ]
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
    />
  </motion.svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const stats = [
  { value: '150+', label: 'Clientes Satisfechos' },
  { value: '500+', label: 'Proyectos Completados' },
  { value: '95%', label: 'Tasa de Retención' },
  { value: '10+', label: 'Años de Experiencia' },
];

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <RorschachShape 
          className="absolute -top-10 -right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 text-white" 
          delay={0}
        />
        <RorschachShape 
          className="absolute bottom-10 -left-10 w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 text-white" 
          delay={0.3}
        />
        
        {/* Floating orbs */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(255, 102, 0, 0.08)' }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(0, 191, 255, 0.06)' }}
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -20, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 border border-white/10 mb-4 sm:mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#FF6600' }} />
            </motion.div>
            <span className="text-xs sm:text-sm font-medium text-gray-300" style={{ fontFamily: 'var(--font-inter)' }}>
              Agencia de Marketing Digital
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight px-2"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            <span className="text-white">Consigue lo </span>
            <span className="relative inline-block">
              <span className="text-gradient">Posible</span>
              <motion.span 
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 rounded-full"
                style={{ backgroundColor: '#FF6600' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
            </span>
            <br />
            <span className="text-white">Haciendo lo </span>
            <motion.span 
              className="text-gradient inline-block"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ 
                background: 'linear-gradient(90deg, #FF6600, #00BFFF, #FF6600)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Imposible
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 px-4"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Somos una agencia de marketing digital que transforma tu presencia en resultados. 
            SEO, redes sociales, publicidad digital y más.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="text-white font-semibold px-6 sm:px-8 py-4 sm:py-5 rounded-full text-base sm:text-lg shadow-lg hover:shadow-xl group relative overflow-hidden w-full sm:w-auto min-h-[52px]"
                style={{ backgroundColor: '#FF6600' }}
                asChild
              >
                <Link href="#contacto">
                  <span className="relative z-10 flex items-center justify-center">
                    Empieza tu Proyecto
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                    </motion.span>
                  </span>
                  <motion.span 
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="bg-white text-black font-semibold px-6 sm:px-8 py-4 sm:py-5 rounded-full text-base sm:text-lg hover:bg-gray-100 hover:text-black transition-all duration-300 w-full sm:w-auto min-h-[52px] border-2 border-white"
                asChild
              >
                <Link href="#servicios">
                  Ver Servicios
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-2"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs sm:text-sm text-gray-400" style={{ fontFamily: 'var(--font-inter)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div 
          className="flex flex-col items-center gap-1 sm:gap-2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-xs text-gray-500" style={{ fontFamily: 'var(--font-inter)' }}>Scroll</span>
          <MousePointer2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
