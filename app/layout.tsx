import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { I18nProvider } from "@/lib/i18n/context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "ARGENTINEROUTE | Experiencias de Viaje Premium por Argentina",
    template: "%s | ARGENTINEROUTE",
  },
  description:
    "Descubrí el Norte Argentino como nunca antes. Un viaje todo incluido de 4.500 km por las ciudades y paisajes más emblemáticos: Buenos Aires, Rosario, Córdoba, San Juan, La Rioja, Salta, Jujuy y las Cataratas del Iguazú.",
  keywords: [
    "turismo argentina",
    "viajes todo incluido",
    "norte argentino",
    "cataratas iguazu",
    "salta jujuy",
    "cafayate vinos",
    "valle de la luna",
    "talampaya",
  ],
  authors: [{ name: "ARGENTINEROUTE" }],
  creator: "ARGENTINEROUTE",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "ARGENTINEROUTE",
    title: "ARGENTINEROUTE | Experiencias de Viaje Premium por Argentina",
    description:
      "Descubrí Argentina como nunca antes. Experiencias de turismo premium por los paisajes más impresionantes del país.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ARGENTINEROUTE | Experiencias de Viaje Premium por Argentina",
    description:
      "Descubrí Argentina como nunca antes. Experiencias de turismo premium por los paisajes más impresionantes del país.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c1220",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-background" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <I18nProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </I18nProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
