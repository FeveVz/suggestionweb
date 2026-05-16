'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, Calendar, Clock, Search, Tag, 
  TrendingUp, Share2, Target, Palette, Code, 
  Lightbulb, Zap, Video, BarChart3, Grid3X3, List, ChevronLeft,
  BookOpen, Award, Sparkles
} from 'lucide-react';

// SEO-optimized categories
const categories = [
  { id: 'all', name: 'Todos', slug: 'todos', icon: Grid3X3, count: 15 },
  { id: 'seo', name: 'SEO', slug: 'seo', icon: TrendingUp, count: 4 },
  { id: 'social-media', name: 'Redes Sociales', slug: 'redes-sociales', icon: Share2, count: 3 },
  { id: 'ppc', name: 'Publicidad Digital', slug: 'publicidad-digital', icon: Target, count: 3 },
  { id: 'branding', name: 'Branding', slug: 'branding', icon: Palette, count: 2 },
  { id: 'web', name: 'Desarrollo Web', slug: 'desarrollo-web', icon: Code, count: 2 },
  { id: 'strategy', name: 'Estrategia', slug: 'estrategia', icon: Lightbulb, count: 1 },
];

// Popular tags for SEO
const popularTags = [
  { name: 'Marketing Digital', slug: 'marketing-digital' },
  { name: 'SEO Técnico', slug: 'seo-tecnico' },
  { name: 'Google Ads', slug: 'google-ads' },
  { name: 'Meta Ads', slug: 'meta-ads' },
  { name: 'Content Marketing', slug: 'content-marketing' },
  { name: 'Conversiones', slug: 'conversiones' },
  { name: 'Analytics', slug: 'analytics' },
  { name: 'Automatización', slug: 'automatizacion' },
];

const blogPosts = [
  {
    id: 1,
    title: '10 Tendencias de Marketing Digital para 2026',
    excerpt: 'Descubre las estrategias que marcarán el rumbo del marketing digital este año. Desde IA hasta personalización extrema.',
    content: 'El marketing digital evoluciona constantemente. En 2026, veremos cómo la inteligencia artificial transformará la personalización...',
    category: 'seo',
    categoryName: 'SEO',
    tags: ['Marketing Digital', 'Tendencias', 'IA'],
    date: '2026-03-15',
    readTime: '8 min',
    featured: true,
    color: '#FF6600',
    author: 'María González',
  },
  {
    id: 2,
    title: 'Guía Completa de SEO Técnico para 2026',
    excerpt: 'Optimiza tu sitio web con las mejores prácticas de SEO técnico. Core Web Vitals, structured data y más.',
    content: 'El SEO técnico es la base de cualquier estrategia de posicionamiento exitosa. En esta guía completa...',
    category: 'seo',
    categoryName: 'SEO',
    tags: ['SEO Técnico', 'Core Web Vitals', 'Google'],
    date: '2026-03-10',
    readTime: '12 min',
    featured: true,
    color: '#00BFFF',
    author: 'Carlos Ramírez',
  },
  {
    id: 3,
    title: 'Cómo Crear una Estrategia de Redes Sociales Efectiva',
    excerpt: 'Aprende a construir una presencia sólida en redes sociales que genere engagement y conversiones.',
    content: 'Las redes sociales son un canal fundamental para cualquier marca. Pero sin una estrategia clara...',
    category: 'social-media',
    categoryName: 'Redes Sociales',
    tags: ['Redes Sociales', 'Estrategia', 'Engagement'],
    date: '2026-03-05',
    readTime: '10 min',
    featured: false,
    color: '#FF6600',
    author: 'Ana Martínez',
  },
  {
    id: 4,
    title: 'Google Ads vs Meta Ads: ¿Cuál Elegir en 2026?',
    excerpt: 'Comparamos las dos plataformas de publicidad más importantes y te ayudamos a decidir dónde invertir.',
    content: 'La decisión entre Google Ads y Meta Ads no es sencilla. Cada plataforma tiene sus fortalezas...',
    category: 'ppc',
    categoryName: 'Publicidad Digital',
    tags: ['Google Ads', 'Meta Ads', 'Publicidad'],
    date: '2026-03-01',
    readTime: '7 min',
    featured: false,
    color: '#00BFFF',
    author: 'Roberto Sánchez',
  },
  {
    id: 5,
    title: 'El Poder del Storytelling en Marketing de Contenidos',
    excerpt: 'Descubre cómo las historias pueden transformar tu marketing y conectar emocionalmente con tu audiencia.',
    content: 'El storytelling es una de las herramientas más poderosas del marketing moderno. Las historias...',
    category: 'strategy',
    categoryName: 'Estrategia',
    tags: ['Content Marketing', 'Storytelling', 'Branding'],
    date: '2026-02-28',
    readTime: '6 min',
    featured: false,
    color: '#FF6600',
    author: 'María González',
  },
  {
    id: 6,
    title: 'Automatización de Marketing: Guía para Principiantes',
    excerpt: 'Todo lo que necesitas saber para empezar a automatizar tus campañas y ahorrar tiempo.',
    content: 'La automatización de marketing permite escalar tus esfuerzos sin aumentar proporcionalmente el tiempo...',
    category: 'strategy',
    categoryName: 'Estrategia',
    tags: ['Automatización', 'Marketing', 'CRM'],
    date: '2026-02-25',
    readTime: '9 min',
    featured: false,
    color: '#00BFFF',
    author: 'Carlos Ramírez',
  },
  {
    id: 7,
    title: 'Branding Digital: Cómo Construir una Marca Memorable',
    excerpt: 'Los elementos clave para crear una identidad de marca que conecte con tu audiencia y perdure.',
    content: 'El branding va más allá del logo. Es la suma de todas las experiencias que un cliente tiene con tu marca...',
    category: 'branding',
    categoryName: 'Branding',
    tags: ['Branding', 'Identidad Visual', 'Diseño'],
    date: '2026-02-20',
    readTime: '8 min',
    featured: false,
    color: '#FF6600',
    author: 'Ana Martínez',
  },
  {
    id: 8,
    title: 'Optimización de Conversiones: Técnicas Avanzadas de CRO',
    excerpt: 'Aprende técnicas avanzadas para aumentar las conversiones en tu sitio web sin aumentar el tráfico.',
    content: 'El CRO (Conversion Rate Optimization) es el arte de convertir más visitantes en clientes...',
    category: 'web',
    categoryName: 'Desarrollo Web',
    tags: ['Conversiones', 'CRO', 'UX'],
    date: '2026-02-15',
    readTime: '11 min',
    featured: false,
    color: '#00BFFF',
    author: 'Roberto Sánchez',
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
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const contentRef = useRef<HTMLDivElement>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesTag = !selectedTag || post.tags.some(tag => tag.toLowerCase().replace(/\s+/g, '-') === selectedTag);
    return matchesCategory && matchesSearch && matchesTag;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden bg-black">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full blur-3xl"
            style={{ backgroundColor: '#00BFFF15' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full blur-3xl"
            style={{ backgroundColor: '#FF660010' }}
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{ duration: 10, repeat: Infinity }}
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
              style={{ color: '#FF6600', fontFamily: 'var(--font-inter)' }}
            >
              Blog & Recursos
            </motion.span>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              <span className="text-gradient">Insights</span> que Transforman
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8 px-4"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Estrategias, tendencias y guías prácticas para llevar tu marketing digital al siguiente nivel.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              className="max-w-lg mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artículos, temas, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all text-sm sm:text-base min-h-[52px]"
                style={{ fontFamily: 'var(--font-inter)' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts - Horizontal Layout */}
      {featuredPosts.length > 0 && !searchQuery && !selectedTag && activeCategory === 'all' && (
        <section className="py-8 sm:py-12 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-6 sm:mb-8">
                <Sparkles className="w-5 h-5" style={{ color: '#FF6600' }} />
                <h2 
                  className="text-xl sm:text-2xl font-bold text-black"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  Artículos Destacados
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-6">
                {featuredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="group cursor-pointer"
                  >
                    <Card className="bg-gray-50 border-none hover:shadow-xl transition-all duration-300 overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex flex-col md:flex-row">
                          {/* Image Section */}
                          <div 
                            className="md:w-72 lg:w-80 flex-shrink-0 h-40 md:h-auto relative"
                            style={{ background: `linear-gradient(135deg, ${post.color}15, ${post.color}30)` }}
                          >
                            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                              <span 
                                className="text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-white shadow-lg"
                                style={{ backgroundColor: post.color, fontFamily: 'var(--font-inter)' }}
                              >
                                {post.categoryName}
                              </span>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <BookOpen className="w-12 h-12" style={{ color: `${post.color}40` }} />
                            </div>
                          </div>
                          
                          {/* Content Section */}
                          <div className="flex-1 p-5 sm:p-6 md:p-8">
                            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                              <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                <span>{formatDate(post.date)}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                <span>{post.readTime}</span>
                              </div>
                              <div className="hidden sm:flex items-center gap-1.5">
                                <span className="text-gray-400">Por</span>
                                <span className="font-medium text-gray-700">{post.author}</span>
                              </div>
                            </div>
                            <h3 
                              className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3 group-hover:text-gray-700 transition-colors"
                              style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                              {post.title}
                            </h3>
                            <p 
                              className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6"
                              style={{ fontFamily: 'var(--font-inter)' }}
                            >
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex flex-wrap gap-2">
                                {post.tags.slice(0, 3).map((tag, tIndex) => (
                                  <span
                                    key={tIndex}
                                    className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full bg-black text-white"
                                    style={{ fontFamily: 'var(--font-inter)' }}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <motion.span 
                                className="flex items-center gap-1 text-xs sm:text-sm font-semibold"
                                style={{ color: post.color, fontFamily: 'var(--font-inter)' }}
                                whileHover={{ x: 5 }}
                              >
                                Leer más
                                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              </motion.span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section ref={contentRef} className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 xl:w-72 flex-shrink-0">
              <div className="lg:sticky lg:top-24 space-y-6 sm:space-y-8">
                {/* Categories */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white rounded-xl p-5 sm:p-6 shadow-sm"
                >
                  <h3 
                    className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    Categorías
                  </h3>
                  <div className="space-y-1.5 sm:space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => {
                          setActiveCategory(category.id);
                          setSelectedTag(null);
                        }}
                        className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-lg transition-all text-left min-h-[44px] ${
                          activeCategory === category.id
                            ? 'bg-black text-white'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <category.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="text-xs sm:text-sm font-medium" style={{ fontFamily: 'var(--font-inter)' }}>
                            {category.name}
                          </span>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          activeCategory === category.id ? 'bg-white/20' : 'bg-gray-200'
                        }`}>
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Popular Tags */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white rounded-xl p-5 sm:p-6 shadow-sm"
                >
                  <h3 
                    className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    Tags Populares
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {popularTags.map((tag) => (
                      <button
                        key={tag.slug}
                        onClick={() => setSelectedTag(selectedTag === tag.slug ? null : tag.slug)}
                        className={`text-[10px] sm:text-xs px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full transition-all min-h-[32px] ${
                          selectedTag === tag.slug
                            ? 'text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        style={{ 
                          backgroundColor: selectedTag === tag.slug ? '#FF6600' : undefined,
                          fontFamily: 'var(--font-inter)'
                        }}
                      >
                        {tag.name}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Newsletter CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-4 sm:p-5 rounded-xl bg-black text-white"
                >
                  <Award className="w-8 h-8 mb-3" style={{ color: '#FF6600' }} />
                  <h3 
                    className="text-base sm:text-lg font-bold mb-2"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    Newsletter
                  </h3>
                  <p 
                    className="text-xs sm:text-sm text-gray-400 mb-4"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Recibe las últimas tendencias en marketing digital directamente en tu correo.
                  </p>
                  <Button
                    className="w-full text-white font-semibold rounded-full min-h-[44px]"
                    style={{ backgroundColor: '#FF6600' }}
                    asChild
                  >
                    <Link href="/#contacto">
                      Suscribirse
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </aside>

            {/* Posts Grid - Horizontal Layout */}
            <div className="flex-1">
              {/* View Toggle & Active Filters */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center gap-2 flex-wrap">
                  {activeCategory !== 'all' && (
                    <span 
                      className="flex items-center gap-1.5 text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-white"
                      style={{ backgroundColor: '#FF6600', fontFamily: 'var(--font-inter)' }}
                    >
                      {categories.find(c => c.id === activeCategory)?.name}
                      <button 
                        onClick={() => setActiveCategory('all')}
                        className="ml-1 hover:text-gray-200"
                      >
                        ×
                      </button>
                    </span>
                  )}
                  {selectedTag && (
                    <span 
                      className="flex items-center gap-1.5 text-[10px] sm:text-xs px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-white"
                      style={{ backgroundColor: '#00BFFF', fontFamily: 'var(--font-inter)' }}
                    >
                      {popularTags.find(t => t.slug === selectedTag)?.name}
                      <button 
                        onClick={() => setSelectedTag(null)}
                        className="ml-1 hover:text-gray-200"
                      >
                        ×
                      </button>
                    </span>
                  )}
                </div>
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
                    <List className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {/* Results Count */}
              <div className="mb-4 sm:mb-6">
                <p className="text-xs sm:text-sm text-gray-600" style={{ fontFamily: 'var(--font-inter)' }}>
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'artículo encontrado' : 'artículos encontrados'}
                </p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeCategory}-${selectedTag}-${searchQuery}-${viewMode}`}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className={viewMode === 'grid' 
                    ? 'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'
                    : 'flex flex-col gap-3 sm:gap-4'
                  }
                >
                  {filteredPosts.map((post) => (
                    <motion.article
                      key={post.id}
                      variants={itemVariants}
                      className="group cursor-pointer"
                    >
                      <Card className="bg-white border-none shadow hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                        {viewMode === 'list' ? (
                          /* Horizontal Card Layout */
                          <CardContent className="p-0">
                            <div className="flex flex-col sm:flex-row">
                              {/* Image */}
                              <div 
                                className="sm:w-40 md:w-48 flex-shrink-0 h-32 sm:h-auto relative"
                                style={{ background: `linear-gradient(135deg, ${post.color}10, ${post.color}25)` }}
                              >
                                <div className="absolute top-2 left-2 z-10">
                                  <span 
                                    className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 sm:py-1 rounded-full text-white"
                                    style={{ backgroundColor: post.color, fontFamily: 'var(--font-inter)' }}
                                  >
                                    {post.categoryName}
                                  </span>
                                </div>
                              </div>
                              {/* Content */}
                              <div className="flex-1 p-4 sm:p-5">
                                <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500 mb-2">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    <span>{formatDate(post.date)}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    <span>{post.readTime}</span>
                                  </div>
                                </div>
                                <h3 
                                  className="text-sm sm:text-base font-bold text-black mb-1.5 sm:mb-2 group-hover:text-gray-700 transition-colors"
                                  style={{ fontFamily: 'var(--font-montserrat)' }}
                                >
                                  {post.title}
                                </h3>
                                <p 
                                  className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2"
                                  style={{ fontFamily: 'var(--font-inter)' }}
                                >
                                  {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                                    {post.tags.slice(0, 2).map((tag, tIndex) => (
                                      <span
                                        key={tIndex}
                                        className="text-[10px] px-2 py-0.5 rounded-full bg-black text-white"
                                        style={{ fontFamily: 'var(--font-inter)' }}
                                      >
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                  <motion.span 
                                    className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold"
                                    style={{ color: post.color, fontFamily: 'var(--font-inter)' }}
                                    whileHover={{ x: 3 }}
                                  >
                                    Leer
                                    <ArrowRight className="w-3 h-3" />
                                  </motion.span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        ) : (
                          /* Grid Card Layout */
                          <>
                            <div 
                              className="h-32 sm:h-40 relative"
                              style={{ background: `linear-gradient(135deg, ${post.color}10, ${post.color}25)` }}
                            >
                              <div className="absolute top-3 left-3 z-10">
                                <span 
                                  className="text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-full text-white shadow-lg"
                                  style={{ backgroundColor: post.color, fontFamily: 'var(--font-inter)' }}
                                >
                                  {post.categoryName}
                                </span>
                              </div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <BookOpen className="w-10 h-10 sm:w-12 sm:h-12" style={{ color: `${post.color}30` }} />
                              </div>
                            </div>

                            <CardContent className="p-4 sm:p-5">
                              <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-gray-500 mb-2 sm:mb-3">
                                <div className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                  <span>{formatDate(post.date)}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                  <span>{post.readTime}</span>
                                </div>
                              </div>

                              <h3 
                                className="text-sm sm:text-base font-bold text-black mb-1.5 sm:mb-2 group-hover:text-gray-700 transition-colors line-clamp-2"
                                style={{ fontFamily: 'var(--font-montserrat)' }}
                              >
                                {post.title}
                              </h3>

                              <p 
                                className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2"
                                style={{ fontFamily: 'var(--font-inter)' }}
                              >
                                {post.excerpt}
                              </p>

                              <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
                                {post.tags.slice(0, 2).map((tag, tIndex) => (
                                  <span
                                    key={tIndex}
                                    className="text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full bg-black text-white"
                                    style={{ fontFamily: 'var(--font-inter)' }}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>

                              <div className="flex items-center justify-between">
                                <span className="text-[10px] sm:text-xs text-gray-500" style={{ fontFamily: 'var(--font-inter)' }}>
                                  {post.author}
                                </span>
                                <motion.span 
                                  className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold"
                                  style={{ color: post.color, fontFamily: 'var(--font-inter)' }}
                                  whileHover={{ x: 5 }}
                                >
                                  Leer
                                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                </motion.span>
                              </div>
                            </CardContent>
                          </>
                        )}
                      </Card>
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>

              {filteredPosts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 sm:py-16"
                >
                  <Search className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
                  <h3 
                    className="text-lg sm:text-xl font-bold text-black mb-2"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    No encontramos resultados
                  </h3>
                  <p 
                    className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    Intenta con otros términos o categoría.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setActiveCategory('all');
                      setSearchQuery('');
                      setSelectedTag(null);
                    }}
                    className="min-h-[44px]"
                  >
                    Limpiar filtros
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-20 -right-20 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full blur-3xl"
            style={{ backgroundColor: '#00BFFF15' }}
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
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 px-4" style={{ fontFamily: 'var(--font-inter)' }}>
              Agenda una consultoría gratuita y conversemos sobre cómo podemos ayudarte.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="text-white font-semibold px-6 sm:px-10 py-5 sm:py-6 rounded-full text-base sm:text-lg shadow-xl min-h-[52px]"
                style={{ backgroundColor: '#FF6600' }}
                asChild
              >
                <Link href="/#contacto">
                  Contactar Ahora
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
