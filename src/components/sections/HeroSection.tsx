'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const RorschachBlot = ({ className, color = '#FF8C00' }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 400 300" className={className} xmlns="http://www.w3.org/2000/svg" fill={color}>
    {/* Left side — mirrored to right */}
    <path d="M200 40 C185 50, 160 55, 145 75 C130 95, 125 120, 130 145 C135 170, 150 185, 140 205 C130 225, 110 230, 105 250 C100 265, 115 275, 130 270 C145 265, 155 250, 165 240 C175 230, 185 225, 195 230 C198 231, 199 235, 200 238"/>
    <path d="M200 40 C215 50, 240 55, 255 75 C270 95, 275 120, 270 145 C265 170, 250 185, 260 205 C270 225, 290 230, 295 250 C300 265, 285 275, 270 270 C255 265, 245 250, 235 240 C225 230, 215 225, 205 230 C202 231, 201 235, 200 238"/>
    {/* Center body */}
    <ellipse cx="200" cy="155" rx="18" ry="35"/>
    {/* Upper wings */}
    <path d="M200 70 C190 60, 170 58, 158 65 C148 72, 145 85, 150 95 C155 105, 168 108, 178 105 C188 102, 195 92, 200 85"/>
    <path d="M200 70 C210 60, 230 58, 242 65 C252 72, 255 85, 250 95 C245 105, 232 108, 222 105 C212 102, 205 92, 200 85"/>
    {/* Small dots */}
    <circle cx="170" cy="200" r="8"/>
    <circle cx="230" cy="200" r="8"/>
    <circle cx="155" cy="245" r="5"/>
    <circle cx="245" cy="245" r="5"/>
    {/* Upper spots */}
    <ellipse cx="178" cy="52" rx="7" ry="5" transform="rotate(-20 178 52)"/>
    <ellipse cx="222" cy="52" rx="7" ry="5" transform="rotate(20 222 52)"/>
  </svg>
);

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen bg-black overflow-hidden flex flex-col justify-center">

      {/* Rorschach shapes — decorativos en naranja */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[360px] md:w-[560px] md:h-[480px] opacity-90 pointer-events-none"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 1.2, delay: 0.4, ease: 'easeOut' }}
      >
        <RorschachBlot color="#FF8C00" className="w-full h-full" />
      </motion.div>

      <motion.div
        className="absolute -left-16 top-8 w-[200px] h-[170px] opacity-20 pointer-events-none rotate-45"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.4, delay: 0.8 }}
      >
        <RorschachBlot color="#00BFFF" className="w-full h-full" />
      </motion.div>

      {/* Tagline vertical — lateral izquierdo */}
      <motion.div
        className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span
          className="text-[10px] tracking-[0.25em] uppercase text-white/40 rotate-[-90deg] whitespace-nowrap"
          style={{ fontFamily: 'var(--font-dm-sans)' }}
        >
          No todo es lo que ves
        </span>
      </motion.div>

      {/* Content — alineado a la izquierda, editorial */}
      <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">

          {/* Label */}
          <motion.p
            custom={0}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#00BFFF] mb-6 font-medium"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Agencia de Marketing Digital
          </motion.p>

          {/* Headline protagonista */}
          <motion.h1
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.9] tracking-tight text-white mb-2"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            No es lo
          </motion.h1>
          <motion.h1
            custom={2}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.9] tracking-tight mb-8"
            style={{ fontFamily: 'var(--font-space-grotesk)', color: '#FF8C00' }}
          >
            que ves.
          </motion.h1>

          {/* Tagline secundaria */}
          <motion.p
            custom={3}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl md:text-2xl text-white/60 font-light max-w-xl mb-10 leading-relaxed"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            Consigue lo <strong className="text-white font-semibold">posible</strong> haciendo lo <strong className="text-white font-semibold">imposible.</strong>
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={4}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <Button
              size="lg"
              className="text-black font-bold px-8 py-5 text-base rounded-none hover:scale-105 transition-transform"
              style={{ backgroundColor: '#FF8C00', fontFamily: 'var(--font-space-grotesk)' }}
              asChild
            >
              <Link href="#contacto">Hablemos</Link>
            </Button>

            <Button
              size="lg"
              variant="ghost"
              className="text-white font-medium px-8 py-5 text-base rounded-none border border-white/20 hover:border-white/60 hover:bg-transparent transition-all"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
              asChild
            >
              <Link href="#servicios">Ver servicios →</Link>
            </Button>
          </motion.div>

          {/* Manifiesto */}
          <motion.p
            custom={6}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-14 text-xs text-white/25 max-w-xs leading-relaxed"
            style={{ fontFamily: 'var(--font-dm-sans)' }}
          >
            "Todos los días, en todos los sentidos,<br />me va cada vez mejor."
          </motion.p>
        </div>
      </div>

      {/* Línea inferior decorativa */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #FF8C00 40%, #00BFFF 60%, transparent)' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.8, duration: 1.2, ease: 'easeOut' }}
      />
    </section>
  );
}
