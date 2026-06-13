'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight, ArrowUpRight, X, TrendingUp,
  ShoppingBag, Users, Heart, Grid3X3, LayoutList,
  ChevronLeft, ChevronRight
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'Todos', icon: Grid3X3 },
  { id: 'services', name: 'Servicios', icon: Users },
];

const projects = [
  {
    id: 1,
    title: 'Inmobiliaria Ceinys',
    category: 'services',
    industry: 'Inmobiliaria',
    results: [
      { metric: 'S/350K', label: 'En ventas' },
      { metric: '8', label: 'Lotes vendidos' },
    ],
    description: 'Campaña de Meta Ads con S/3,000 de inversión: 350 leads captados, 20 visitas a proyectos y 8 lotes vendidos por S/350,000.',
    tags: ['Meta Ads', 'Lead Generation', 'Inmobiliaria'],
    color: '#FF8C00',
    services: ['Publicidad Digital', 'Redes Sociales'],
    duration: 'Campaña',
  },
  {
    id: 2,
    title: 'Granjas Bonanza',
    category: 'services',
    industry: 'Agroindustria',
    results: [
      { metric: '15', label: 'Contratos' },
      { metric: 'S/2.5K', label: 'Inversión' },
    ],
    description: 'Campaña de Meta Ads enfocada en captación que convirtió S/2,500 de inversión en 15 contratos cerrados.',
    tags: ['Meta Ads', 'Conversión', 'Agroindustria'],
    color: '#00BFFF',
    services: ['Publicidad Digital'],
    duration: 'Campaña',
  },
  {
    id: 3,
    title: 'Hoteles Señor de Luren',
    category: 'services',
    industry: 'Hotelería',
    results: [
      { metric: '75', label: 'Reservas' },
    ],
    description: 'Estrategia de campañas publicitarias en redes que generó 75 reservas para la cadena hotelera.',
    tags: ['Meta Ads', 'Reservas', 'Hotelería'],
    color: '#FF8C00',
    services: ['Publicidad Digital', 'Redes Sociales'],
    duration: 'Campaña',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
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

export default function PortafolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const scrollToProjects = () => {
    containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navigateProject = (direction: 'prev' | 'next') => {
    if (!selectedProject) return;
    const currentIdx = filteredProjects.findIndex(p => p.id === selectedProject.id);
    if (direction === 'prev' && currentIdx > 0) {
      setSelectedProject(filteredProjects[currentIdx - 1]);
    } else if (direction === 'next' && currentIdx < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentIdx + 1]);
    }
  };

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-black">
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4"
              style={{ color: '#FF8C00', fontFamily: 'var(--font-dm-sans)' }}
            >
              Nuestro Trabajo
            </motion.span>

            <motion.h1
              className="text-[clamp(2.2rem,6vw,4.5rem)] font-black text-white mb-4 sm:mb-6 leading-[0.95] tracking-tight uppercase"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Resultados que{' '}
              <span style={{ color: '#FF8C00' }}>Hablan</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 px-4"
              style={{ fontFamily: 'var(--font-dm-sans)' }}
            >
              Explora nuestros casos de éxito y descubre cómo hemos ayudado 
              a marcas a alcanzar sus objetivos digitales.
            </motion.p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="text-black font-black uppercase tracking-widest px-6 sm:px-8 py-4 sm:py-5 rounded-none min-h-[52px] text-xs sm:text-sm hover:opacity-90"
                style={{ backgroundColor: '#FF8C00', fontFamily: 'var(--font-space-grotesk)' }}
                onClick={scrollToProjects}
              >
                Ver Proyectos
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-6 sm:py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'var(--font-space-grotesk)' }}>+50</div>
              <div className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'var(--font-dm-sans)' }}>Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'var(--font-space-grotesk)' }}>7</div>
              <div className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'var(--font-dm-sans)' }}>Años</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'var(--font-space-grotesk)' }}>+350</div>
              <div className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'var(--font-dm-sans)' }}>Leads / campaña</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-black" style={{ fontFamily: 'var(--font-space-grotesk)' }}>S/350K</div>
              <div className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'var(--font-dm-sans)' }}>En ventas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Projects */}
      <section ref={containerRef} className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 min-h-[40px] sm:min-h-[44px] ${
                  activeCategory === category.id
                    ? 'text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
                style={{
                  backgroundColor: activeCategory === category.id ? '#FF8C00' : undefined,
                  fontFamily: 'var(--font-dm-sans)'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <category.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* View Toggle & Results Count */}
          <motion.div
            className="flex items-center justify-between mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Mostrando <span className="font-semibold text-black">{filteredProjects.length}</span> proyectos
            </p>
            <div className="flex gap-1 sm:gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center ${
                  viewMode === 'grid' ? 'bg-black text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Grid3X3 className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center ${
                  viewMode === 'list' ? 'bg-black text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <LayoutList className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </motion.div>

          {/* Projects Grid/List - Horizontal Cards for better flow */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + viewMode}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'
                : 'flex flex-col gap-3 sm:gap-4'
              }
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layoutId={`project-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="cursor-pointer"
                >
                  <Card className={`bg-white border-none shadow hover:shadow-xl transition-all duration-300 group overflow-hidden ${
                    viewMode === 'list' ? 'flex flex-row' : 'h-full'
                  }`}>
                    {/* Image Placeholder */}
                    <div 
                      className={`${viewMode === 'list' ? 'w-24 sm:w-32 md:w-48 flex-shrink-0' : 'h-40 sm:h-48'} relative overflow-hidden`}
                      style={{ background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)` }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        {index % 4 === 0 && <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16" style={{ color: `${project.color}40` }} />}
                        {index % 4 === 1 && <ShoppingBag className="w-12 h-12 sm:w-16 sm:h-16" style={{ color: `${project.color}40` }} />}
                        {index % 4 === 2 && <Users className="w-12 h-12 sm:w-16 sm:h-16" style={{ color: `${project.color}40` }} />}
                        {index % 4 === 3 && <Heart className="w-12 h-12 sm:w-16 sm:h-16" style={{ color: `${project.color}40` }} />}
                      </div>
                      
                      {/* Hover overlay */}
                      <motion.div 
                        className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <motion.div 
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: project.color }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </motion.div>
                      </motion.div>
                    </div>

                    <CardContent className={`p-4 sm:p-5 flex-1 ${viewMode === 'list' ? 'flex items-center justify-between gap-4' : ''}`}>
                      <div className={viewMode === 'list' ? 'flex-1' : ''}>
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <h3 
                            className="text-base sm:text-lg font-bold text-black group-hover:text-gray-900 transition-colors"
                            style={{ fontFamily: 'var(--font-space-grotesk)' }}
                          >
                            {project.title}
                          </h3>
                          <span 
                            className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full text-white hidden sm:block"
                            style={{ backgroundColor: project.color, fontFamily: 'var(--font-dm-sans)' }}
                          >
                            {project.industry}
                          </span>
                        </div>

                        {/* Results - Horizontal for better flow */}
                        <div className={`gap-3 sm:gap-4 mb-2 sm:mb-3 ${viewMode === 'list' ? 'flex' : 'grid grid-cols-2'}`}>
                          {project.results.map((result, rIndex) => (
                            <div key={rIndex} className="p-2 sm:p-3 rounded-lg bg-gray-50">
                              <div 
                                className="text-lg sm:text-xl font-bold"
                                style={{ color: project.color, fontFamily: 'var(--font-space-grotesk)' }}
                              >
                                {result.metric}
                              </div>
                              <div className="text-[10px] sm:text-xs text-gray-600" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                                {result.label}
                              </div>
                            </div>
                          ))}
                        </div>

                        {viewMode !== 'list' && (
                          <>
                            <p 
                              className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2"
                              style={{ fontFamily: 'var(--font-dm-sans)' }}
                            >
                              {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {project.tags.slice(0, 3).map((tag, tIndex) => (
                                <span
                                  key={tIndex}
                                  className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full bg-black text-white"
                                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </div>

                      {viewMode === 'list' && (
                        <div className="hidden md:flex flex-col items-end gap-2">
                          <span className="text-xs text-gray-500" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                            {project.duration}
                          </span>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Modal with Navigation */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={() => navigateProject('prev')}
              className={`absolute left-4 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors ${
                filteredProjects.findIndex(p => p.id === selectedProject.id) === 0 ? 'opacity-30 pointer-events-none' : ''
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigateProject('next')}
              className={`absolute right-4 z-50 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors ${
                filteredProjects.findIndex(p => p.id === selectedProject.id) === filteredProjects.length - 1 ? 'opacity-30 pointer-events-none' : ''
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
            >
              {/* Modal Header */}
              <div 
                className="h-32 sm:h-40 relative"
                style={{ background: `linear-gradient(135deg, ${selectedProject.color}20, ${selectedProject.color}40)` }}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black flex items-center justify-center shadow-lg hover:bg-gray-800 transition-colors"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </button>
              </div>

              <div className="p-4 sm:p-6 md:p-8">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div>
                    <span 
                      className="text-xs px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: selectedProject.color, fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {selectedProject.industry}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                    Duración: {selectedProject.duration}
                  </span>
                </div>

                <h2 
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-4 sm:mb-6"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {selectedProject.title}
                </h2>

                <p 
                  className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed"
                  style={{ fontFamily: 'var(--font-dm-sans)' }}
                >
                  {selectedProject.description}
                </p>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {selectedProject.results.map((result, index) => (
                    <div key={index} className="p-4 sm:p-5 rounded-xl bg-black text-center">
                      <div 
                        className="text-2xl sm:text-3xl font-bold mb-1"
                        style={{ color: selectedProject.color, fontFamily: 'var(--font-space-grotesk)' }}
                      >
                        {result.metric}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400" style={{ fontFamily: 'var(--font-dm-sans)' }}>
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Services Used */}
                <div className="mb-6 sm:mb-8">
                  <h3 
                    className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4"
                    style={{ fontFamily: 'var(--font-space-grotesk)' }}
                  >
                    Servicios Implementados
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.services.map((service, index) => (
                      <span
                        key={index}
                        className="text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full bg-gray-100 text-gray-700"
                        style={{ fontFamily: 'var(--font-dm-sans)' }}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full bg-black text-white"
                      style={{ fontFamily: 'var(--font-dm-sans)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  className="w-full text-white font-semibold py-5 sm:py-6 rounded-full min-h-[52px]"
                  style={{ backgroundColor: '#FF8C00' }}
                  asChild
                >
                  <Link href="/#contacto">
                    Quiero un Proyecto Similar
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-20 -right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full blur-3xl"
            style={{ backgroundColor: '#FF8C0015' }}
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 tracking-tight"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              ¿Listo para tu <span style={{ color: '#FF8C00' }}>historia de éxito?</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 px-4" style={{ fontFamily: 'var(--font-dm-sans)' }}>
              Agenda una consultoría gratuita y descubre cómo podemos ayudarte.
            </p>
            <Button
              size="lg"
              className="text-black font-black uppercase tracking-widest px-6 sm:px-10 py-5 sm:py-6 rounded-none text-sm sm:text-base min-h-[52px] hover:opacity-90"
              style={{ backgroundColor: '#FF8C00', fontFamily: 'var(--font-space-grotesk)' }}
              asChild
            >
              <Link href="/#contacto">
                Comenzar Mi Proyecto
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
