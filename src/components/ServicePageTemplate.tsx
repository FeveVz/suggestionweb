'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Target,
  BarChart3,
  Users,
  Zap,
  Lightbulb,
  Search,
  Share2,
  Code,
  Palette,
  Video,
  ShoppingBag,
  Printer,
  PanelTop,
  Truck,
  Sparkles,
  Package,
  Settings,
  MessageSquare,
  Megaphone,
  Eye,
  MousePointer,
  PenTool,
  Smartphone,
  Globe,
  Award,
  Clock,
  Heart,
  Star,
  Briefcase,
  type LucideIcon
} from 'lucide-react';

// Icon mapping for serialization
const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Target,
  BarChart3,
  Users,
  Zap,
  Lightbulb,
  Search,
  Share2,
  Code,
  Palette,
  Video,
  ShoppingBag,
  Printer,
  PanelTop,
  Truck,
  Sparkles,
  Package,
  Settings,
  MessageSquare,
  Megaphone,
  Eye,
  MousePointer,
  PenTool,
  Smartphone,
  Globe,
  Award,
  Clock,
  Heart,
  Star,
  Briefcase,
};

interface ServicePageProps {
  heroData: {
    badge: string;
    title: string;
    highlightedWord: string;
    subtitle: string;
    description: string;
    cta: string;
    iconName: string;
    color: string;
  };
  benefits: Array<{
    title: string;
    description: string;
    iconName: string;
  }>;
  features: Array<{
    title: string;
    description: string;
  }>;
  process: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  stats: Array<{
    value: string;
    label: string;
  }>;
  testimonials: Array<{
    quote: string;
    author: string;
    role: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedServices: Array<{
    title: string;
    href: string;
    iconName: string;
  }>;
}

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
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function ServicePageTemplate({
  heroData,
  benefits,
  features,
  process,
  stats,
  testimonials,
  faqs,
  relatedServices
}: ServicePageProps) {
  const IconComponent = iconMap[heroData.iconName] || TrendingUp;

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full blur-3xl"
            style={{ backgroundColor: `${heroData.color}08` }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full blur-3xl"
            style={{ backgroundColor: '#00BFFF08' }}
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="flex justify-center mb-4 sm:mb-6"
            >
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: `${heroData.color}15` }}
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" style={{ color: heroData.color }} />
              </motion.div>
            </motion.div>

            <motion.span
              variants={itemVariants}
              className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4"
              style={{ color: heroData.color, fontFamily: 'var(--font-inter)' }}
            >
              {heroData.badge}
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {heroData.title}{' '}
              <span className="text-gradient">{heroData.highlightedWord}</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 px-4"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {heroData.description}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="text-white font-semibold px-6 sm:px-8 py-4 sm:py-5 rounded-full shadow-lg w-full sm:w-auto min-h-[52px] text-sm sm:text-base"
                  style={{ backgroundColor: heroData.color }}
                  asChild
                >
                  <Link href="#contacto">
                    {heroData.cta}
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black text-black font-semibold px-6 sm:px-8 py-4 sm:py-5 rounded-full w-full sm:w-auto min-h-[52px] text-sm sm:text-base"
                asChild
              >
                <Link href="#proceso">Ver Proceso</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 bg-black">
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
                <div
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2"
                  style={{ color: heroData.color, fontFamily: 'var(--font-montserrat)' }}
                >
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 leading-tight" style={{ fontFamily: 'var(--font-inter)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              ¿Por qué elegir nuestro servicio?
            </h2>
            <p className="text-base sm:text-lg text-gray-600" style={{ fontFamily: 'var(--font-inter)' }}>
              Combinamos estrategia, creatividad y datos para entregarte resultados reales y medibles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {benefits.map((benefit, index) => {
              const BenefitIcon = iconMap[benefit.iconName] || Star;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <CardContent className="p-4 sm:p-6 md:p-8">
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <motion.div
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0"
                          style={{ backgroundColor: `${heroData.color}15` }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <BenefitIcon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: heroData.color }} />
                        </motion.div>
                        <div className="text-center sm:text-left">
                          <h3
                            className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3"
                            style={{ fontFamily: 'var(--font-montserrat)' }}
                          >
                            {benefit.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600" style={{ fontFamily: 'var(--font-inter)' }}>
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Qué incluye nuestro servicio
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="bg-gray-50 border-none hover:bg-white hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-4 sm:p-6">
                    <motion.div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-3 sm:mb-4"
                      style={{ backgroundColor: heroData.color }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-white" />
                    </motion.div>
                    <h3
                      className="text-base sm:text-lg font-bold text-black mb-2"
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-inter)' }}>
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="proceso" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Nuestro Proceso
            </h2>
            <p className="text-base sm:text-lg text-gray-600" style={{ fontFamily: 'var(--font-inter)' }}>
              Una metodología probada que garantiza resultados.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full relative">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <div
                      className="text-4xl sm:text-5xl font-bold opacity-10 absolute top-4 right-4"
                      style={{ color: heroData.color, fontFamily: 'var(--font-montserrat)' }}
                    >
                      {step.step}
                    </div>
                    <div
                      className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4"
                      style={{ color: heroData.color, fontFamily: 'var(--font-montserrat)' }}
                    >
                      {step.step}
                    </div>
                    <h3
                      className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3"
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-inter)' }}>
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Lo que dicen nuestros clientes
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-gray-50 border-none h-full">
                  <CardContent className="p-4 sm:p-6 md:p-8">
                    <p
                      className="text-sm sm:text-base text-gray-700 italic mb-4 sm:mb-6"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div>
                      <div className="font-bold text-black text-sm sm:text-base" style={{ fontFamily: 'var(--font-montserrat)' }}>
                        {testimonial.author}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'var(--font-inter)' }}>
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Preguntas Frecuentes
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white shadow">
                  <CardContent className="p-4 sm:p-6">
                    <h3
                      className="text-base sm:text-lg font-bold text-black mb-2 sm:mb-3"
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                      {faq.question}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600" style={{ fontFamily: 'var(--font-inter)' }}>
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full blur-3xl"
            style={{ backgroundColor: `${heroData.color}15` }}
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
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              ¿Listo para empezar?
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 px-4" style={{ fontFamily: 'var(--font-inter)' }}>
              Agenda una consultoría gratuita y descubre cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="text-white font-semibold px-6 sm:px-10 py-5 sm:py-6 rounded-full text-base sm:text-lg shadow-xl min-h-[52px]"
                style={{ backgroundColor: heroData.color }}
                asChild
              >
                <Link href="/#contacto">
                  Solicitar Consultoría Gratuita
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Servicios Relacionados
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {relatedServices.map((service, index) => {
              const ServiceIcon = iconMap[service.iconName] || Star;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={service.href}>
                    <Card className="bg-gray-50 border-none hover:shadow-lg transition-all duration-300 h-full group min-h-[120px] sm:min-h-[140px]">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <motion.div
                          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-4"
                          style={{ backgroundColor: `${heroData.color}15` }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <ServiceIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" style={{ color: heroData.color }} />
                        </motion.div>
                        <h3
                          className="text-xs sm:text-sm md:text-base font-bold text-black group-hover:text-gray-700 transition-colors"
                          style={{ fontFamily: 'var(--font-montserrat)' }}
                        >
                          {service.title}
                        </h3>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
