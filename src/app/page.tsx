'use client';

import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ValuePropositionSection from '@/components/sections/ValuePropositionSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ProcessSection from '@/components/sections/ProcessSection';
import BlogSection from '@/components/sections/BlogSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ValuePropositionSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ProcessSection />
      <BlogSection />
      <CTASection />
    </>
  );
}
