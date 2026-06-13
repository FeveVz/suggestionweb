'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Users, Target, Lightbulb, Heart,
  Shield, Zap,
  ArrowRight, Clock, Briefcase,
  Rocket, Eye
} from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Pasión por los Resultados',
    description: 'Nos apasiona ver crecer a nuestros clientes. Cada éxito es nuestro éxito, y trabajamos incansablemente para lograrlo.'
  },
  {
    icon: Lightbulb,
    title: 'Innovación Constante',
    description: 'El marketing digital evoluciona cada día. Nos mantenemos a la vanguardia de tendencias y tecnologías.'
  },
  {
    icon: Shield,
    title: 'Transparencia Total',
    description: 'Sin humo ni promesas vacías. Reportes claros, métricas reales y comunicación constante.'
  },
  {
    icon: Users,
    title: 'Enfoque Human-Centered',
    description: 'Conectamos marcas con personas. Cada estrategia está diseñada para generar conexiones emocionales reales.'
  },
  {
    icon: Target,
    title: 'Resultados Medibles',
    description: 'Cada acción tiene un KPI, cada campaña tiene un ROI. Transparencia total en tu inversión.'
  },
  {
    icon: Zap,
    title: 'Metodología Ágil',
    description: 'Iteramos rápido, aprendemos más rápido. Adaptación constante para maximizar resultados.'
  },
];

// TODO: reemplazar por el equipo real (nombre, cargo, bio y foto) cuando el cliente lo envíe.
const team = [
  {
    name: 'Estrategia & Performance',
    role: 'Pauta en Meta y Google',
    description: 'Planificamos y ejecutamos campañas orientadas a resultados medibles: leads, ventas y contratos.',
    image: null,
    initials: 'SP'
  },
  {
    name: 'Creatividad & Contenido',
    role: 'Diseño y comunicación',
    description: 'Creamos las piezas, el copy y la identidad visual que conectan con tu audiencia.',
    image: null,
    initials: 'CC'
  },
  {
    name: 'Medios & Optimización',
    role: 'Gestión de inversión',
    description: 'Administramos el presupuesto publicitario y optimizamos cada campaña para maximizar el retorno.',
    image: null,
    initials: 'MO'
  },
  {
    name: 'Cuentas & Soporte',
    role: 'Atención al cliente',
    description: 'Tu punto de contacto: comunicación transparente y reportes claros en cada etapa.',
    image: null,
    initials: 'CS'
  },
];

const milestones = [
  { year: '2018', title: 'Fundación', description: 'Nacimos con la misión de transformar el marketing digital de las marcas peruanas.' },
  { year: '2020', title: 'Especialización en performance', description: 'Consolidamos nuestra propuesta en Meta Ads y Google enfocada en resultados medibles.' },
  { year: '2022', title: 'Crecimiento sostenido', description: 'Ampliamos nuestra cartera de clientes en sectores como inmobiliaria, hotelería y agroindustria.' },
  { year: '2024', title: '+50 marcas acompañadas', description: 'Campañas que generan leads, ventas y contratos reales para nuestros clientes.' },
  { year: '2025', title: 'Marketing impulsado por datos', description: 'Optimización continua basada en datos para maximizar el retorno de cada campaña.' },
];

const stats = [
  { value: '+50', label: 'Clientes que confían en nosotros', icon: Users },
  { value: '7', label: 'Años de experiencia', icon: Clock },
  { value: '+350', label: 'Leads en una sola campaña', icon: Briefcase },
  { value: 'S/350K', label: 'En ventas generadas', icon: Heart },
];

// Horizontal info cards for better flow
const infoCards = [
  {
    icon: Target,
    title: 'Nuestra Misión',
    description: 'Transformar la presencia digital de nuestros clientes en resultados medibles y sostenibles, mediante estrategias personalizadas que combinan creatividad, tecnología y datos.',
    color: '#FF8C00'
  },
  {
    icon: Eye,
    title: 'Nuestra Visión',
    description: 'Ser la agencia de marketing digital de referencia en Latinoamérica, reconocida por nuestra capacidad de innovar y generar resultados excepcionales.',
    color: '#00BFFF'
  },
  {
    icon: Rocket,
    title: 'Nuestro Compromiso',
    description: 'Construir relaciones a largo plazo con nuestros clientes basadas en confianza, transparencia y éxito mutuo en cada proyecto.',
    color: '#FF8C00'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const }
  }
};

export default function NosotrosPage() {
  const heroRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const timelineRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-40 -right-40 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full blur-3xl"
            style={{ backgroundColor: '#FF8C0015' }}
          />
          <div
            className="absolute -bottom-40 -left-40 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full blur-3xl"
            style={{ backgroundColor: '#00BFFF10' }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.span
              variants={itemVariants}
              className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4"
              style={{ color: '#FF8C00', fontFamily: 'var(--font-dm-sans)' }}
            >
              Sobre Nosotros
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-[clamp(2.2rem,6vw,4.5rem)] font-black text-white mb-4 sm:mb-6 leading-[0.95] tracking-tight uppercase"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Transformamos marcas en{' '}
              <span style={{ color: '#FF8C00' }}>historias de éxito</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 px-4"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Somos una agencia de marketing digital apasionada por crear estrategias 
              que generan resultados reales y sostenibles para nuestros clientes.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button
                size="lg"
                className="text-black font-black uppercase tracking-widest px-6 sm:px-8 py-4 sm:py-5 rounded-none w-full sm:w-auto min-h-[52px] text-xs sm:text-sm hover:opacity-90"
                style={{ backgroundColor: '#FF8C00', fontFamily: 'var(--font-space-grotesk)' }}
                asChild
              >
                <Link href="/#contacto">
                  Conoce cómo podemos ayudarte
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-3 sm:p-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 mx-auto mb-2 sm:mb-3 text-black" />
                <div
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-black"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 leading-tight" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Info Cards Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span 
              className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4"
              style={{ color: '#FF8C00', fontFamily: 'var(--font-dm-sans)' }}
            >
              Quiénes Somos
            </span>
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Construyendo el futuro digital
            </h2>
          </motion.div>

          {/* Horizontal Cards for better flow */}
          <div className="space-y-4 sm:space-y-6">
            {infoCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Icon Section */}
                      <div 
                        className="flex-shrink-0 p-6 sm:p-8 flex items-center justify-center md:w-48"
                        style={{ backgroundColor: `${card.color}10` }}
                      >
                        <card.icon className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: card.color }} />
                      </div>
                      {/* Content Section */}
                      <div className="flex-1 p-6 sm:p-8">
                        <h3 
                          className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3"
                          style={{ fontFamily: 'var(--font-space-grotesk)' }}
                        >
                          {card.title}
                        </h3>
                        <p 
                          className="text-sm sm:text-base text-gray-600 leading-relaxed"
                          style={{ fontFamily: 'var(--font-dm-sans)' }}
                        >
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span 
              className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4"
              style={{ color: '#FF8C00', fontFamily: 'var(--font-dm-sans)' }}
            >
              Lo que nos define
            </span>
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Nuestros Valores
            </h2>
            <p 
              className="text-base sm:text-lg text-gray-600"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Los principios que guían cada decisión y cada proyecto.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gray-50 border-none hover:bg-white hover:shadow-lg transition-all duration-300 h-full group">
                  <CardContent className="p-5 sm:p-6">
                    <motion.div 
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: '#FF8C0015' }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <value.icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: '#FF8C00' }} />
                    </motion.div>
                    <h3 
                      className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-3"
                      style={{ fontFamily: 'var(--font-space-grotesk)' }}
                    >
                      {value.title}
                    </h3>
                    <p 
                      className="text-xs sm:text-sm text-gray-600 leading-relaxed"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section - Horizontal Cards */}
      <section ref={teamRef} className="py-12 sm:py-16 md:py-20 lg:py-28 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={teamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span 
              className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4"
              style={{ color: '#FF8C00', fontFamily: 'var(--font-dm-sans)' }}
            >
              El equipo
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6 tracking-tight"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Las áreas detrás de Suggestion
            </h2>
            <p
              className="text-base sm:text-lg text-gray-400"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Un equipo multidisciplinario trabajando como extensión del tuyo.
            </p>
          </motion.div>

          <motion.div 
            className="space-y-4 sm:space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
          >
            {team.map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-5 sm:p-6">
                      {/* Avatar */}
                      <div 
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold flex-shrink-0"
                        style={{ backgroundColor: index % 2 === 0 ? '#FF8C00' : '#00BFFF', fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {member.initials}
                      </div>
                      {/* Info */}
                      <div className="flex-1 text-center sm:text-left">
                        <h3 
                          className="text-lg sm:text-xl font-bold text-white mb-1"
                          style={{ fontFamily: 'var(--font-space-grotesk)' }}
                        >
                          {member.name}
                        </h3>
                        <p 
                          className="text-sm mb-2 sm:mb-3"
                          style={{ color: '#FF8C00', fontFamily: 'var(--font-dm-sans)' }}
                        >
                          {member.role}
                        </p>
                        <p 
                          className="text-sm text-gray-400 leading-relaxed"
                          style={{ fontFamily: 'var(--font-dm-sans)' }}
                        >
                          {member.description}
                        </p>
                      </div>
                      {/* Arrow */}
                      <div className="hidden sm:flex items-center">
                        <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span 
              className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4"
              style={{ color: '#FF8C00', fontFamily: 'var(--font-dm-sans)' }}
            >
              Nuestra historia
            </span>
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Un camino de crecimiento
            </h2>
          </motion.div>

          {/* Horizontal Timeline */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4 sm:gap-6 min-w-max">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="w-64 sm:w-72 flex-shrink-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="bg-gray-50 border-none h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-5 sm:p-6">
                      <div 
                        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold mb-4"
                        style={{ backgroundColor: '#FF8C00', fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {milestone.year}
                      </div>
                      <h3 
                        className="text-base sm:text-lg font-bold text-black mb-2"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {milestone.title}
                      </h3>
                      <p 
                        className="text-xs sm:text-sm text-gray-600"
                        style={{ fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full blur-3xl"
            style={{ backgroundColor: '#FF8C0015' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              ¿Listo para conocernos?
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 px-4" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Agenda una llamada y descubre cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="text-white font-semibold px-6 sm:px-10 py-5 sm:py-6 rounded-full text-base sm:text-lg shadow-xl min-h-[52px]"
                style={{ backgroundColor: '#FF8C00' }}
                asChild
              >
                <Link href="/#contacto">
                  Agenda una Consultoría Gratuita
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
