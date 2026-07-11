export function getWeatherLabel(code?: number, locale: "es" | "en" = "es") {
  const labels = {
    es: {
      clear: "Soleado",
      partlyCloudy: "Parcialmente nublado",
      cloudy: "Nublado",
      fog: "Niebla",
      drizzle: "Llovizna",
      rain: "Lluvia",
      snow: "Nieve",
      storm: "Tormenta",
      unknown: "Clima",
    },
    en: {
      clear: "Sunny",
      partlyCloudy: "Partly cloudy",
      cloudy: "Cloudy",
      fog: "Fog",
      drizzle: "Drizzle",
      rain: "Rain",
      snow: "Snow",
      storm: "Storm",
      unknown: "Weather",
    },
  };

  if (code === undefined) return labels[locale].unknown;

  if (code === 0) return labels[locale].clear;
  if ([1, 2].includes(code)) return labels[locale].partlyCloudy;
  if (code === 3) return labels[locale].cloudy;
  if ([45, 48].includes(code)) return labels[locale].fog;
  if ([51, 53, 55, 56, 57].includes(code)) return labels[locale].drizzle;
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code))
    return labels[locale].rain;
  if ([71, 73, 75, 77, 85, 86].includes(code)) return labels[locale].snow;
  if ([95, 96, 99].includes(code)) return labels[locale].storm;

  return labels[locale].unknown;
}