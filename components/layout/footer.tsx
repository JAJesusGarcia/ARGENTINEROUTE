"use client";

import Link from "next/link";
import { MapPin, Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { cloudinary } from "@/lib/claudinary";
import DeveloperSignature from "@/components/branding/signature";

const socialLinks = [
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  { href: "mailto:info@argentineroute.com", icon: Mail, label: "Email" },
];

export function Footer() {
  const { t, locale } = useI18n();

  const footerLinks = {
    explore: [
      {
        href: "/lugares",
        label: locale === "es" ? "Destinos" : "Destinations",
      },
      { href: "/provincias/buenos-aires", label: "Buenos Aires" },
      { href: "/provincias/salta", label: "Salta" },
      { href: "/provincias/misiones", label: "Misiones" },
    ],
    company: [
      { href: "/about", label: t.nav.about },
      { href: "/faq", label: t.nav.faq },
      { href: "/contacto", label: t.nav.contact },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            {/* <Link href="/" className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold tracking-tight text-foreground">
                ARGENTINE<span className="text-primary">ROUTE</span>
              </span>
            </Link> */}
            <Link href="/" className="flex items-center gap-2 group">
              <img
                src={cloudinary("images/logos/logo3")}
                alt="Argentine Route"
                className="h-30 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t.footer.description}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {locale === "es" ? "Explorar" : "Explore"}
            </h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {locale === "es" ? "Empresa" : "Company"}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              {t.footer.newsletter}
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              {t.footer.newsletterDescription}
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={t.footer.emailPlaceholder}
                className="flex-1 px-4 py-2 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                {t.footer.subscribe}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ARGENTINEROUTE. {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacidad"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {locale === "es" ? "Privacidad" : "Privacy"}
            </Link>
            <Link
              href="/terminos"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors"
            >
              {locale === "es" ? "Términos" : "Terms"}
            </Link>
          </div>
        </div>
        <DeveloperSignature clientName="Argentine Route" className="mt-8" />
      </div>
    </footer>
  );
}
