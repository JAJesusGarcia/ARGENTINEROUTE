"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/sections/page-hero";
import { founder, staff } from "@/data/staff";
import { User, Heart, Compass, Award } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Pasión por Argentina",
    description:
      "Amamos cada rincón de nuestro país y queremos compartir esa pasión con vos.",
  },
  {
    icon: Compass,
    title: "Aventura auténtica",
    description:
      "Creamos experiencias genuinas que te conectan con la esencia de cada destino.",
  },
  {
    icon: Award,
    title: "Excelencia premium",
    description:
      "Cada detalle está cuidado para ofrecerte un viaje de primera categoría.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <PageHero
        title="Nuestra historia"
        subtitle="Desde Rosario hacia el mundo, creamos experiencias de viaje que transforman vidas y conectan corazones con la belleza de Argentina."
        tagline="Sobre nosotros"
        backgroundImage="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069"
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
              Nuestros valores
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lo que nos define
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
                  className="aspect-square md:aspect-auto bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600')`,
                  }}
                />

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full w-fit">
                    Fundador
                  </span>
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    {founder.name}
                  </h2>
                  <p className="text-primary font-medium mb-4">{founder.role}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {founder.description}
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
              El equipo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quienes hacen la magia
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un equipo apasionado de profesionales dedicados a crear las
              mejores experiencias de viaje.
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
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-${
                        index === 0
                          ? "1494790108377-be9c29b29330"
                          : index === 1
                          ? "1472099645785-5658abf4ff4e"
                          : index === 2
                          ? "1438761681033-6461ffad8d80"
                          : index === 3
                          ? "1500648767791-00dcc994a43e"
                          : index === 4
                          ? "1534528741775-53994a69daeb"
                          : "1507003211169-0a1dd7228f2d"
                      }?q=80&w=400')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-foreground text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
