"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Utensils,
  Mountain,
  Palette,
  MapPin,
  Thermometer,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { PlaceCard } from "@/components/cards/place-card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n/context";
import type { Province } from "@/data/provinces";
import type { Place } from "@/data/places";

interface ProvinceContentProps {
  province: Province;
  places: Place[];
}

export function ProvinceContent({ province, places }: ProvinceContentProps) {
  const { t, locale } = useTranslation();

  const infoCards = [
    { key: "climate", icon: Cloud, label: locale === "es" ? "Clima" : "Climate" },
    { key: "culture", icon: Palette, label: locale === "es" ? "Cultura" : "Culture" },
    { key: "gastronomy", icon: Utensils, label: locale === "es" ? "Gastronomía" : "Gastronomy" },
    { key: "landscapes", icon: Mountain, label: locale === "es" ? "Paisajes" : "Landscapes" },
  ];

  const heroImage = province.heroImage;

  // const heroPhotoIds: Record<string, string> = {
  //   "buenos-aires": "1612294037637-ec328d0e075e",
  //   rosario: "1558618666-fcd25c85cd64",
  //   cordoba: "1540778670146-36e2bf77a891",
  //   "san-juan": "1682687982501-1e58ab814714",
  //   "la-rioja": "1469854523086-cc02fe5d8800",
  //   salta: "1506905925346-21bda4d32df4",
  //   jujuy: "1583683432858-bc8223c1f7e4",
  //   misiones: "1597535973747-951b9d1f9b8f",
  // };

  // const heroImage = `https://images.unsplash.com/photo-${
  //   heroPhotoIds[province.slug] ?? "1501785888041-af3ef285b470"
  // }?q=80&w=2070`;



  return (
    <>
      {/* Hero */}
      <PageHero
        title={province.name}
        subtitle={province.tagline}
        tagline={province.shortDescription}
        backgroundImage={heroImage}
        showBreadcrumb
        breadcrumbLabel={locale === "es" ? "Volver a provincias" : "Back to provinces"}
        breadcrumbHref="/#provincias"
      />

      {/* Province Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {province.description}
            </p>

            {/* Quick Stats */}
            <div className="flex justify-center gap-8 mt-8">
              <div className="flex items-center gap-2 text-foreground">
                <Thermometer className="w-5 h-5 text-primary" />
                <span className="font-medium">{province.temperature}°C</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">{province.altitude}m</span>
              </div>
            </div>
          </motion.div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {infoCards.map((card, index) => {
              const Icon = card.icon;
              const content = province[card.key as keyof Province] as string;
              return (
                <motion.div
                  key={card.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">
                      {card.label}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {content}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {t.provinceDetail.highlights}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {province.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-4 py-2 glass-subtle rounded-full text-sm text-muted-foreground"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Places Section */}
      {places.length > 0 && (
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
                {t.provinceDetail.featuredPlaces}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {locale === "es"
                  ? `Qué visitar en ${province.name}`
                  : `What to visit in ${province.name}`}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {locale === "es"
                  ? "Descubrí los lugares más impresionantes que esta provincia tiene para ofrecer."
                  : "Discover the most impressive places this province has to offer."}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {places.map((place, index) => (
                <PlaceCard key={place.id} place={place} index={index} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button
                asChild
                variant="outline"
                className="rounded-full border-border/50 bg-secondary/50 hover:bg-secondary group"
              >
                <Link href="/lugares">
                  {locale === "es" ? "Ver todos los destinos" : "View all destinations"}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      )}
    </>
  );
}
