"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/sections/page-hero";
import { founder, staff } from "@/data/staff";
import { Heart, Compass, Award, MapPin, Instagram, Linkedin } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

export function AboutContent() {
  const { t, locale } = useTranslation();

  const values = [
    {
      icon: Heart,
      title: locale === "es" ? "Pasión por Argentina" : "Passion for Argentina",
      description:
        locale === "es"
          ? "Amamos cada rincón de nuestro país y queremos compartir esa pasión con vos."
          : "We love every corner of our country and want to share that passion with you.",
    },
    {
      icon: Compass,
      title: locale === "es" ? "Aventura auténtica" : "Authentic adventure",
      description:
        locale === "es"
          ? "Creamos experiencias genuinas que te conectan con la esencia de cada destino."
          : "We create genuine experiences that connect you with the essence of each destination.",
    },
    {
      icon: Award,
      title: locale === "es" ? "Excelencia premium" : "Premium excellence",
      description:
        locale === "es"
          ? "Cada detalle está cuidado para ofrecerte un viaje de primera categoría."
          : "Every detail is taken care of to offer you a first-class trip.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <PageHero
        title={`${t.about.title} ${t.about.titleHighlight}`}
        subtitle={t.about.description}
        tagline={t.nav.about}
        backgroundVideo="/videos/video-hero.mp4"
      />

      {/* Values Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
              {locale === "es" ? "Nuestros valores" : "Our values"}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {locale === "es" ? "Lo que nos define" : "What defines us"}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div
                  className="aspect-square bg-cover bg-center"
                  style={{ backgroundImage: `url('${founder.image}')` }}
                />

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full w-fit">
                    {t.about.founder}
                  </span>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    {founder.name}
                  </h2>
                  <p className="text-primary font-medium mb-4">
                    {locale === "es" ? founder.role[0] : founder.roleEn[0]}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {locale === "es"
                      ? "Visionario detrás de ARGENTINE ROUTE, apasionado por mostrar lo mejor del norte argentino a viajeros de todo el mundo."
                      : "The visionary behind ARGENTINE ROUTE, passionate about showcasing the best of northern Argentina to travelers from all over the world."}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
              {t.about.team}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {locale === "es" ? "Quienes hacen la magia" : "The people behind the magic"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.about.teamDescription}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {staff.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl overflow-hidden group"
              >
                {/* Image — aspect-square para fotos 1:1 */}
                <div className="relative aspect-square overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${member.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-foreground text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-2">
                    {(locale === "es" ? member.role : member.roleEn).join(" & ")}
                  </p>
                  {(member.location || member.age) && (
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground text-sm">
                      {member.location && (
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-primary/70" />
                          {member.location}
                        </span>
                      )}
                      {member.age && (
                        <span>
                          {member.age} {locale === "es" ? "años" : "yrs"}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Social links */}
                  {(member.instagram || member.linkedin) && (
                    <div className="flex items-center gap-3 mt-3">
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Instagram className="w-4 h-4" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}