"use client";

import { motion } from "framer-motion";
import {
  Star,
  Clock,
  Calendar,
  MapPin,
  CheckCircle2,
  Lightbulb,
  History,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n/context";
import type { Place } from "@/data/places";

interface PlaceContentProps {
  place: Place;
}

export function PlaceContent({ place }: PlaceContentProps) {
  const { t, locale } = useTranslation();

  const placeImages = [
    "1506905925346-21bda4d32df4",
    "1601042879364-f3947d07bea6",
    "1464822759023-fed622ff2c3b",
    "1558618666-fcd25c85cd64",
    "1583683432858-bc8223c1f7e4",
    "1540778670146-36e2bf77a891",
    "1501785888041-af3ef285b470",
    "1587474260584-136574528ed5",
  ];

  const imageIndex =
    parseInt(place.id) <= placeImages.length ? parseInt(place.id) - 1 : 0;
  const heroImage = `https://images.unsplash.com/photo-${placeImages[imageIndex]}?q=80&w=2070`;

  return (
    <>
      {/* Hero */}
      <PageHero
        title={place.name}
        subtitle={place.shortDescription}
        tagline={place.provinceName}
        backgroundImage={heroImage}
        showBreadcrumb
        breadcrumbLabel={`${t.placeDetail.backToPlaces.split(" ")[0]} ${place.provinceName}`}
        breadcrumbHref={`/provincias/${place.provinceSlug}`}
      />

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Rating and Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 glass rounded-full">
                <Star className="w-5 h-5 fill-accent text-accent" />
                <span className="font-semibold text-foreground">
                  {place.rating}
                </span>
                <span className="text-muted-foreground text-sm">/ 5.0</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{place.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{place.bestTimeToVisit}</span>
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {place.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-0"
                >
                  {tag}
                </Badge>
              ))}
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                {place.description}
              </p>
            </motion.div>

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {t.placeDetail.gallery}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] rounded-2xl overflow-hidden"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-500"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-${
                          placeImages[(imageIndex + i) % placeImages.length]
                        }?q=80&w=600')`,
                      }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 mb-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <History className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">
                  {t.placeDetail.history}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {place.history}
              </p>
            </motion.div>

            {/* Activities and Recommendations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Activities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {t.placeDetail.activities}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {place.activities.map((activity, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Recommendations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {t.placeDetail.tips}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {place.recommendations.map((rec, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center glass rounded-2xl p-8"
            >
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {locale === "es"
                  ? `¿Querés visitar ${place.name}?`
                  : `Want to visit ${place.name}?`}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                {locale === "es"
                  ? "Contactanos para incluir este destino en tu próximo viaje por Argentina."
                  : "Contact us to include this destination in your next trip to Argentina."}
              </p>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 group"
              >
                <Link href="/contacto">
                  {locale === "es" ? "Consultar disponibilidad" : "Check availability"}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
