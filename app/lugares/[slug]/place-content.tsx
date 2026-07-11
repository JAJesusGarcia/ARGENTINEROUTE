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
// import { useTranslation } from "@/lib/i18n/context";
import { useI18n } from "@/lib/i18n/context";
import type { Place } from "@/data/places";

interface PlaceContentProps {
  place: Place;
}

export function PlaceContent({ place }: PlaceContentProps) {
  // const { t, locale } = useTranslation();
  const { t, locale } = useI18n();

  const name = locale === "es" ? place.name : place.nameEn;
  const description =
    locale === "es" ? place.description : place.descriptionEn;
  const shortDescription =
    locale === "es" ? place.shortDescription : place.shortDescriptionEn;
  const tags = locale === "es" ? place.tags : place.tagsEn;
  const history = locale === "es" ? place.history : place.historyEn;
  const activities = locale === "es" ? place.activities : place.activitiesEn;
  const recommendations =
    locale === "es" ? place.recommendations : place.recommendationsEn;
  const bestTimeToVisit =
    locale === "es" ? place.bestTimeToVisit : place.bestTimeToVisitEn;
  const duration = locale === "es" ? place.duration : place.durationEn;

  const galleryImages = Array.isArray(place.galleryImages)
    ? place.galleryImages
    : [place.galleryImages];

  return (
    <>
      <PageHero
        title={name}
        subtitle={shortDescription}
        tagline={place.provinceName}
        backgroundImage={place.image}
        showBreadcrumb
        breadcrumbLabel={`${t.placeDetail.backToPlaces.split(" ")[0]} ${
          place.provinceName
        }`}
        breadcrumbHref={`/provincias/${place.provinceSlug}`}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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
                <span className="text-sm">{duration}</span>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{bestTimeToVisit}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-primary/10 text-primary border-0"
                >
                  {tag}
                </Badge>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            </motion.div>

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
                {galleryImages.slice(0, 3).map((img, i) => (
                  <div
                    key={i}
                    className="aspect-[4/3] rounded-2xl overflow-hidden"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url('${img}')` }}
                    />
                  </div>
                ))}
              </div>
            </motion.div>

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
                {history}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
                  {activities.map((activity, index) => (
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
                  {recommendations.map((rec, index) => (
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
                  ? `¿Querés visitar ${name}?`
                  : `Want to visit ${name}?`}
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
                  {locale === "es"
                    ? "Consultar disponibilidad"
                    : "Check availability"}
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