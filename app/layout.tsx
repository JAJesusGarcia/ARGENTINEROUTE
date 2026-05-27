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
    "Descubrí Argentina como nunca antes. Experiencias de turismo premium por los paisajes más impresionantes del país. Desde Mendoza hasta Jujuy, viví la aventura.",
  keywords: [
    "turismo argentina",
    "viajes premium",
    "patagonia",
    "mendoza vinos",
    "salta jujuy",
    "aventura argentina",
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
