"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sun, Cloud, CloudSun, Snowflake, Wind, Mountain, Thermometer } from "lucide-react";
import { provinces, type Province } from "@/data/provinces";
import { useI18n } from "@/lib/i18n/context";

const weatherIcons = {
  sun: Sun,
  cloud: Cloud,
  "cloud-sun": CloudSun,
  snow: Snowflake,
  wind: Wind,
};

const provincePhotoIds: Record<string, string> = {
  "buenos-aires": "1612294037637-ec328d0e075e",
  rosario: "1558618666-fcd25c85cd64",
  cordoba: "1540778670146-36e2bf77a891",
  "san-juan": "1682687982501-1e58ab814714",
  "la-rioja": "1469854523086-cc02fe5d8800",
  salta: "1506905925346-21bda4d32df4",
  jujuy: "1583683432858-bc8223c1f7e4",
  misiones: "1597535973747-951b9d1f9b8f",
};

function ProvinceCard({ province, index }: { province: Province; index: number }) {
  const WeatherIcon = weatherIcons[province.weatherIcon];
  const { locale } = useI18n();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Link href={`/provincias/${province.slug}`} className="block group">
        <div className="relative overflow-hidden rounded-3xl aspect-[4/5] md:aspect-[3/4]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-${
                provincePhotoIds[province.slug] ?? "1501785888041-af3ef285b470"
              }?q=80&w=800')`,
            }}
          />

          {/* Glassmorphism Overlay - Apple Weather Style */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Glass Card Content */}
          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="glass rounded-2xl p-4 backdrop-blur-xl">
              {/* Top Row - Name and Weather */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {province.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {province.shortDescription}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-primary">
                  <WeatherIcon className="w-5 h-5" />
                  <span className="text-lg font-semibold text-foreground">
                    {province.temperature}°
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-border/50 mb-3" />

              {/* Bottom Row - Stats */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Mountain className="w-3.5 h-3.5" />
                  <span>{province.altitude}m</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Thermometer className="w-3.5 h-3.5" />
                  <span>{locale === "es" ? "Sensación" : "Feels"} {province.temperature + 2}°</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function ProvincesSection() {
  const { t, locale } = useI18n();

  return (
    <section id="provincias" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
            {locale === "es" ? "Destinos destacados" : "Featured destinations"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t.provinces.title} <span className="text-gradient">{t.provinces.subtitle}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            {t.provinces.description}
          </p>
        </motion.div>

        {/* Province Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {provinces.map((province, index) => (
            <ProvinceCard key={province.id} province={province} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
