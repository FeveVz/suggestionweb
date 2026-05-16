'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown, TrendingUp, Share2, Target, Search, Palette, Code, Lightbulb, Zap, Video, BarChart3, ShoppingBag, Printer, PanelTop, Truck, Sparkles, Package } from 'lucide-react';
import FloatingMenuButton from './FloatingMenuButton';

const serviciosPrincipales = [
  { name: 'Marketing Digital', href: '/servicios/marketing-digital', icon: TrendingUp, description: 'Estrategias integrales que transforman' },
  { name: 'Redes Sociales', href: '/servicios/marketing-redes-sociales', icon: Share2, description: 'Conexión auténtica con tu audiencia' },
  { name: 'Publicidad Digital', href: '/servicios/publicidad-digital', icon: Target, description: 'Campañas con ROI medible' },
  { name: 'SEO', href: '/servicios/seo-posicionamiento', icon: Search, description: 'Posicionamiento orgánico efectivo' },
  { name: 'Branding', href: '/servicios/branding-diseno', icon: Palette, description: 'Identidad que deja huella' },
  { name: 'Desarrollo Web', href: '/servicios/desarrollo-web', icon: Code, description: 'Sitios que convierten visitantes' },
  { name: 'Consultoría', href: '/servicios/consultoria-marketing', icon: Lightbulb, description: 'Asesoría estratégica personalizada' },
  { name: 'CRM y Automatización', href: '/servicios/crm-automatizacion', icon: Zap, description: 'Automatiza y escala tu negocio' },
  { name: 'Producción Audiovisual', href: '/servicios/produccion-audiovisual', icon: Video, description: 'Contenido visual de impacto' },
  { name: 'Investigación de Mercado', href: '/servicios/investigacion-mercado', icon: BarChart3, description: 'Datos que guían decisiones' },
];

const serviciosComplementarios = [
  { name: 'Merchandising', href: '/servicios/merchandising', icon: ShoppingBag },
  { name: 'Imprenta Corporativa', href: '/servicios/imprenta-corporativa', icon: Printer },
  { name: 'Estructuras Publicitarias', href: '/servicios/estructuras-publicitarias', icon: PanelTop },
  { name: 'Publicidad Móvil', href: '/servicios/publicidad-movil', icon: Truck },
  { name: 'BTL y Activaciones', href: '/servicios/btl-activaciones', icon: Sparkles },
  { name: 'Material POP', href: '/servicios/material-pop', icon: Package },
];

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Servicios', href: '#servicios', hasDropdown: true },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Portafolio', href: '/portafolio' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white/80 backdrop-blur-sm shadow-sm'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <span className="text-base sm:text-lg md:text-xl font-bold" style={{ fontFamily: 'var(--font-montserrat)' }}>
                <span className="text-black">Suggest</span>
                <span className="relative inline-block align-top">
                  <span className="text-black">i</span>
                  <span 
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full"
                    style={{ backgroundColor: '#00BFFF' }}
                  />
                </span>
                <span className="text-black">on</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navigation.map((item) => (
                item.hasDropdown ? (
                  <div 
                    key={item.name}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-black transition-colors py-4 min-h-[44px]"
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                        >
                          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 sm:p-6 w-[90vw] max-w-[800px]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                              {/* Servicios Principales */}
                              <div>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                  Servicios Principales
                                </h3>
                                <div className="space-y-1">
                                  {serviciosPrincipales.slice(0, 5).map((service) => (
                                    <Link
                                      key={service.name}
                                      href={service.href}
                                      className="flex items-center gap-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors group min-h-[44px]"
                                      onClick={() => setIsDropdownOpen(false)}
                                    >
                                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FF660015' }}>
                                        <service.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#FF6600' }} />
                                      </div>
                                      <div className="min-w-0">
                                        <div className="text-sm font-medium text-gray-800 group-hover:text-black truncate" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                          {service.name}
                                        </div>
                                        <div className="text-xs text-gray-500 truncate hidden sm:block" style={{ fontFamily: 'var(--font-inter)' }}>
                                          {service.description}
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Segunda columna de servicios principales */}
                              <div>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 hidden sm:block" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                  &nbsp;
                                </h3>
                                <div className="space-y-1">
                                  {serviciosPrincipales.slice(5).map((service) => (
                                    <Link
                                      key={service.name}
                                      href={service.href}
                                      className="flex items-center gap-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors group min-h-[44px]"
                                      onClick={() => setIsDropdownOpen(false)}
                                    >
                                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FF660015' }}>
                                        <service.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#FF6600' }} />
                                      </div>
                                      <div className="min-w-0">
                                        <div className="text-sm font-medium text-gray-800 group-hover:text-black truncate" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                          {service.name}
                                        </div>
                                        <div className="text-xs text-gray-500 truncate hidden sm:block" style={{ fontFamily: 'var(--font-inter)' }}>
                                          {service.description}
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-100 my-4" />

                            {/* Servicios Complementarios */}
                            <div>
                              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                Servicios Complementarios
                              </h3>
                              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                {serviciosComplementarios.map((service) => (
                                  <Link
                                    key={service.name}
                                    href={service.href}
                                    className="flex items-center gap-2 p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors group min-h-[44px]"
                                    onClick={() => setIsDropdownOpen(false)}
                                  >
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#00BFFF15' }}>
                                      <service.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#00BFFF' }} />
                                    </div>
                                    <span className="text-xs sm:text-sm font-medium text-gray-700 group-hover:text-black truncate" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                      {service.name}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* CTA Card */}
                            <div className="mt-4 p-4 rounded-xl bg-black flex flex-col sm:flex-row items-center justify-between gap-4">
                              <div className="text-center sm:text-left">
                                <h4 className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-montserrat)' }}>
                                  ¿No estás seguro qué necesitas?
                                </h4>
                                <p className="text-gray-400 text-xs mt-1" style={{ fontFamily: 'var(--font-inter)' }}>
                                  Agenda una consultoría gratuita
                                </p>
                              </div>
                              <Link
                                href="#contacto"
                                className="text-sm font-semibold px-4 py-2.5 sm:py-2 rounded-full transition-all hover:opacity-90 min-h-[44px] flex items-center"
                                style={{ backgroundColor: '#FF6600', color: 'white', fontFamily: 'var(--font-inter)' }}
                                onClick={() => setIsDropdownOpen(false)}
                              >
                                Agendar
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-black transition-colors relative group min-h-[44px] flex items-center"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#00BFFF' }} />
                  </Link>
                )
              ))}
              
              {/* CTA Button */}
              <Button
                className="text-white font-semibold px-4 sm:px-5 py-2 text-sm rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg min-h-[44px]"
                style={{ backgroundColor: '#FF6600' }}
                asChild
              >
                <Link href="#contacto">Hablemos</Link>
              </Button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Floating Menu Button (Mobile Only) */}
      <FloatingMenuButton />
    </>
  );
}
