"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { provinces } from "@/data/provinces";
import { useI18n } from "@/lib/i18n/context";

// Simplified Argentina map coordinates for each province
const provincePositions: Record<string, { x: number; y: number }> = {
  "buenos-aires": { x: 58, y: 52 },
  rosario: { x: 53, y: 46 },
  cordoba: { x: 46, y: 42 },
  "san-juan": { x: 32, y: 43 },
  "la-rioja": { x: 38, y: 35 },
  salta: { x: 42, y: 20 },
  jujuy: { x: 40, y: 13 },
  misiones: { x: 68, y: 30 },
};

// Route connections following the 4500km journey order
const routeConnections = [
  ["buenos-aires", "rosario"],
  ["rosario", "cordoba"],
  ["cordoba", "san-juan"],
  ["san-juan", "la-rioja"],
  ["la-rioja", "salta"],
  ["salta", "jujuy"],
  ["jujuy", "misiones"],
];

export function MapSection() {
  const { t, locale } = useI18n();

  const stats = locale === "es" 
    ? [
        { label: "Destinos", value: "8" },
        { label: "Kilómetros", value: "4,500" },
        { label: "Atracciones", value: "+15" },
        { label: "Experiencias", value: "+50" },
      ]
    : [
        { label: "Destinations", value: "8" },
        { label: "Kilometers", value: "4,500" },
        { label: "Attractions", value: "+15" },
        { label: "Experiences", value: "+50" },
      ];

  const legend = locale === "es"
    ? { included: "Destino incluido", route: "Ruta del viaje", origin: "Buenos Aires (origen)" }
    : { included: "Included destination", route: "Travel route", origin: "Buenos Aires (origin)" };

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
            {locale === "es" ? "Nuestro recorrido" : "Our route"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t.map.title} <span className="text-gradient">{t.map.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            {t.map.description}
          </p>
        </motion.div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative glass rounded-3xl p-8 md:p-12">
            {/* Stylized Map SVG */}
            <svg
              viewBox="0 0 100 120"
              className="w-full h-auto"
              style={{ maxHeight: "600px" }}
            >
              {/* Argentina Outline - Simplified */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
                d="M40 5 L55 5 L60 10 L58 20 L55 30 L60 40 L58 50 L55 60 L50 70 L55 80 L52 90 L48 100 L42 110 L35 115 L30 110 L35 100 L38 90 L35 80 L30 70 L28 60 L32 50 L30 40 L35 30 L38 20 L35 10 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-border"
              />

              {/* Route Lines */}
              {routeConnections.map(([from, to], index) => {
                const fromPos = provincePositions[from];
                const toPos = provincePositions[to];
                return (
                  <motion.line
                    key={`${from}-${to}`}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    viewport={{ once: true }}
                    x1={fromPos.x}
                    y1={fromPos.y}
                    x2={toPos.x}
                    y2={toPos.y}
                    stroke="url(#routeGradient)"
                    strokeWidth="0.8"
                    strokeDasharray="2 1"
                    className="drop-shadow-sm"
                  />
                );
              })}

              {/* Gradient Definition */}
              <defs>
                <linearGradient
                  id="routeGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" />
                </linearGradient>
              </defs>

              {/* Province Markers */}
              {provinces.map((province, index) => {
                const pos = provincePositions[province.slug];
                if (!pos) return null;
                return (
                  <motion.g
                    key={province.id}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Glow Effect */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="3"
                      className="fill-primary/30 animate-pulse"
                    />
                    {/* Main Dot */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r="1.5"
                      className="fill-primary"
                    />
                    {/* Label */}
                    <text
                      x={pos.x + 3}
                      y={pos.y + 1}
                      className="fill-foreground text-[3px] font-medium"
                    >
                      {province.name}
                    </text>
                  </motion.g>
                );
              })}
            </svg>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-border/50">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span>{legend.included}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent rounded" />
                <span>{legend.route}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>{legend.origin}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 glass-subtle rounded-2xl"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
