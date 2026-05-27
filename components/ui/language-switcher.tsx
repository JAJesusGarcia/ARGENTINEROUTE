"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/translations";

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  const languages: { code: Locale; label: string; flag: string }[] = [
    { code: "es", label: "ES", flag: "🇦🇷" },
    { code: "en", label: "EN", flag: "🇺🇸" },
  ];

  return (
    <div className="flex items-center gap-1 p-1 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLocale(lang.code)}
          className="relative px-2 py-1 text-xs font-medium transition-colors duration-200"
          aria-label={`Switch to ${lang.label}`}
        >
          {locale === lang.code && (
            <motion.div
              layoutId="language-indicator"
              className="absolute inset-0 bg-primary rounded-full"
              transition={{ type: "spring", duration: 0.4 }}
            />
          )}
          <span
            className={`relative z-10 flex items-center gap-1 ${
              locale === lang.code
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <span className="text-sm">{lang.flag}</span>
            <span>{lang.label}</span>
          </span>
        </button>
      ))}
    </div>
  );
}
