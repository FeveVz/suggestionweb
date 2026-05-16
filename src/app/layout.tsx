import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Suggestion | Agencia de Marketing Digital - Consigue lo Posible Haciendo lo Imposible",
  description: "Somos una agencia de marketing digital que transforma tu presencia en resultados. SEO, redes sociales, publicidad digital. ¡Contáctanos!",
  keywords: ["marketing digital", "agencia de marketing", "agencia digital", "SEO", "redes sociales", "publicidad digital"],
  authors: [{ name: "Suggestion" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Suggestion | Agencia de Marketing Digital",
    description: "Consigue lo Posible Haciendo lo Imposible",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased bg-background text-foreground`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
