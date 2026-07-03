"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mountain, Thermometer } from "lucide-react";
import { provinces, type Province } from "@/data/provinces";
import { useI18n } from "@/lib/i18n/context";
import {
  getCurrentWeather,
  getWeatherIcon,
  getWeatherLabel,
  type WeatherData,
} from "@/lib/weather";

const provinceCoordinates: Record<
  string,
  { latitude: number; longitude: number }
> = {
  "buenos-aires": { latitude: -34.6037, longitude: -58.3816 },
  rosario: { latitude: -32.9442, longitude: -60.6505 },
  cordoba: { latitude: -31.4201, longitude: -64.1888 },
  "san-juan": { latitude: -31.5375, longitude: -68.5364 },
  "la-rioja": { latitude: -29.4131, longitude: -66.8558 },
  salta: { latitude: -24.7821, longitude: -65.4232 },
  jujuy: { latitude: -24.1858, longitude: -65.2995 },
  misiones: { latitude: -25.5972, longitude: -54.5786 },
};

function ProvinceCard({
  province,
  index,
  weather,
}: {
  province: Province;
  index: number;
  weather?: WeatherData;
}) {
  const { locale } = useI18n();

  const temperature = weather?.temperature ?? province.temperature;
  const feelsLike = weather?.feelsLike ?? province.temperature + 2;
  const WeatherIcon = getWeatherIcon(weather?.weatherCode);
  const weatherLabel = getWeatherLabel(weather?.weatherCode, locale);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Link href={`/provincias/${province.slug}`} className="block group">
        <div className="relative overflow-hidden rounded-3xl aspect-[4/5] md:aspect-[3/4]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: `url('${province.image}')`,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="glass rounded-2xl p-4 backdrop-blur-xl">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {province.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {province.shortDescription}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-primary">
                  <WeatherIcon className="w-5 h-5" />
                  <div className="text-right">
                    <span className="block text-lg font-semibold text-foreground leading-none">
                      {temperature}°
                    </span>
                    <span className="block text-[10px] text-muted-foreground mt-1">
                      {weatherLabel}
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-px bg-border/50 mb-3" />

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Mountain className="w-3.5 h-3.5" />
                  <span>{province.altitude}m</span>
                </div>

                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Thermometer className="w-3.5 h-3.5" />
                  <span>
                    {locale === "es" ? "Sensación" : "Feels"} {feelsLike}°
                  </span>
                </div>
              </div>
            </div>
          </div>

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
  const [weatherData, setWeatherData] = useState<Record<string, WeatherData>>(
    {}
  );

  useEffect(() => {
    async function loadWeather() {
      const results = await Promise.all(
        provinces.map(async (province) => {
          const coordinates = provinceCoordinates[province.slug];

          if (!coordinates) return null;

          const weather = await getCurrentWeather(
            coordinates.latitude,
            coordinates.longitude
          );

          if (!weather) return null;

          return {
            slug: province.slug,
            weather,
          };
        })
      );

      const weatherBySlug = results.reduce<Record<string, WeatherData>>(
        (acc, result) => {
          if (result) {
            acc[result.slug] = result.weather;
          }

          return acc;
        },
        {}
      );

      setWeatherData(weatherBySlug);
    }

    loadWeather();
  }, []);

  return (
    <section id="provincias" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 rounded-full">
            {locale === "es"
              ? "Destinos destacados"
              : "Featured destinations"}
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            {t.provinces.title}{" "}
            <span className="text-gradient">{t.provinces.subtitle}</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg text-pretty">
            {t.provinces.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {provinces.map((province, index) => (
            <ProvinceCard
              key={province.id}
              province={province}
              index={index}
              weather={weatherData[province.slug]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}