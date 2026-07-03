export interface WeatherData {
  temperature: number;
  feelsLike: number;
  weatherCode: number;
}

export async function getCurrentWeather(
  latitude: number,
  longitude: number
): Promise<WeatherData | null> {
  try {
    const url = new URL("https://api.open-meteo.com/v1/forecast");

    url.searchParams.set("latitude", String(latitude));
    url.searchParams.set("longitude", String(longitude));
    url.searchParams.set(
      "current",
      "temperature_2m,apparent_temperature,weather_code"
    );
    url.searchParams.set("timezone", "auto");

    const response = await fetch(url.toString());

    if (!response.ok) return null;

    const data = await response.json();

    return {
      temperature: Math.round(data.current.temperature_2m),
      feelsLike: Math.round(data.current.apparent_temperature),
      weatherCode: data.current.weather_code,
    };
  } catch {
    return null;
  }
}