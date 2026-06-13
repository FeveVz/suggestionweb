import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://suggestion.pe';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Suggestion | Agencia de marketing de performance en Ica, Perú',
    template: '%s | Suggestion',
  },
  description:
    'Convertimos atención en ventas. Agencia de marketing de performance en Ica: leads, citas y cierres medibles para inmobiliarias, automotrices, turismo y consumo. No vendemos likes, vendemos resultados.',
  keywords: [
    'agencia de marketing de performance',
    'marketing de performance peru',
    'agencia de marketing ica',
    'meta ads peru',
    'google ads peru',
    'generación de leads',
    'campañas de performance',
    'publicidad digital ica',
    'embudos de venta',
    'CRO landing pages',
    'marketing inmobiliario',
    'marketing automotriz',
  ],
  authors: [{ name: 'Suggestion' }],
  creator: 'Suggestion',
  publisher: 'Suggestion',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  alternates: { canonical: siteUrl },
  icons: { icon: '/favicon.ico' },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: siteUrl,
    siteName: 'Suggestion',
    title: 'Suggestion | Convertimos atención en ventas',
    description:
      'Agencia de marketing de performance en Ica, Perú. Leads, citas y cierres medibles — no métricas de vanidad.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Suggestion — Convertimos atención en ventas' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suggestion | Convertimos atención en ventas',
    description: 'Marketing de performance en Ica, Perú. Leads, citas y cierres medibles.',
    creator: '@suggestion',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MarketingAgency',
  name: 'Suggestion',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    'Agencia de marketing de performance en Ica, Perú. Convertimos atención en ventas: leads, citas y cierres medibles.',
  slogan: 'Convertimos atención en ventas',
  telephone: '+51937770159',
  email: 'hola@suggestion.pe',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ica',
    addressCountry: 'PE',
  },
  areaServed: { '@type': 'Country', name: 'Perú' },
  priceRange: '$$',
  sameAs: [
    'https://www.instagram.com/suggestion.mkt/',
    'https://www.facebook.com/Suggestion.mk',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de marketing de performance',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Performance ads (Meta, Google, TikTok)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landing pages & CRO' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Embudos & CRM' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Citas calificadas' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Creatividad de conversión' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Medición & reporting' } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MotionProvider>
          <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
            <Header />
            <div style={{ flex: 1 }}>{children}</div>
            <Footer />
          </div>
        </MotionProvider>
        <Toaster />
      </body>
    </html>
  );
}
