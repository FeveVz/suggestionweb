import type { Metadata, Viewport } from "next";
import { preload } from "react-dom";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import ScrollProgress from "@/components/ScrollProgress";
import CursorLoader from "@/components/CursorLoader";
import PausaFueraDePantalla from "@/components/PausaFueraDePantalla";
import { RevealController } from "@/components/brand/RevealController";
import { site, SITE_URL } from "@/lib/site";
import { websiteSchema } from "@/lib/schema";
import { organizationSchema } from "@/lib/schema-org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} | Agencia de marketing de performance en Ica, Perú`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Los tres iconos explícitos: con `icons` declarado, Next no añade solo los
  // de src/app (icon.png, apple-icon.png), que se servían pero no salían en el
  // <head> (auditoría TEC-19, 21-nov-2026).
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: SITE_URL,
    siteName: site.name,
    title: `${site.name} | ${site.slogan}`,
    description: site.description,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: `${site.name} — ${site.slogan}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.slogan}`,
    description: site.description,
    images: [site.ogImage],
  },
};

/** Color de la barra del navegador en el celular: el blanco de la cabecera. */
export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Las 2 fuentes de la primera pantalla. Con ReactDOM.preload sale una sola
  // etiqueta en el <head>; las <link> que había en el body se duplicaban
  // (auditoría PERF-04). No subir a más precargas: compiten con el CSS en 4G.
  preload("/fonts/SpaceGrotesk-SemiBold-lat.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  preload("/fonts/Geomanist-Regular-lat.woff2", { as: "font", type: "font/woff2", crossOrigin: "anonymous" });
  return (
    <html lang={site.lang} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        {/* Activa animaciones solo si hay JS; sin JS el contenido queda visible (SEO-safe). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        {/* Salto al contenido: primer tabulador de la página. Sin esto, quien
            navega con teclado o lector de pantalla tenía que recorrer el menú
            entero (~20 enlaces) en cada una de las 92 páginas. */}
        <a href="#contenido" className="hk-skip">Saltar al contenido</a>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <ScrollProgress />
        <CursorLoader />
        <PausaFueraDePantalla />
        <RevealController />
        <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
          <Header />
          <main id="contenido" style={{ flex: 1, overflowX: "clip" }}>{children}</main>
          <Footer />
        </div>
        <FloatingMenu />
        <Analytics />
      </body>
    </html>
  );
}
