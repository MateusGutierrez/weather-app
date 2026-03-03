import { z } from "zod";

/* ---------- Shared Schemas ---------- */

const coordSchema = z.object({
  lon: z.number(),
  lat: z.number(),
});

const weatherItemSchema = z.object({
  id: z.number(),
  main: z.string(),
  description: z.string(),
  icon: z.string(),
});

const temperatureSchema = z.object({
  day: z.number(),
  min: z.number(),
  max: z.number(),
  night: z.number(),
  eve: z.number(),
  morn: z.number(),
});

const feelsLikeSchema = z.object({
  day: z.number(),
  night: z.number(),
  eve: z.number(),
  morn: z.number(),
});

/* ---------- Daily Item ---------- */

const dailyForecastItemSchema = z.object({
  dt: z.number(),
  sunrise: z.number(),
  sunset: z.number(),

  temp: temperatureSchema,
  feels_like: feelsLikeSchema,

  pressure: z.number(),
  humidity: z.number(),

  weather: z.array(weatherItemSchema),

  speed: z.number(),
  deg: z.number(),
  gust: z.number().optional(),

  clouds: z.number(),
  pop: z.number().min(0).max(1), // probability of precipitation

  rain: z.number().optional(),
});

/* ---------- City ---------- */

const citySchema = z.object({
  id: z.number(),
  name: z.string(),
  coord: coordSchema,
  country: z.string(),
  population: z.number(),
  timezone: z.number(),
});

/* ---------- Full Response ---------- */

export const forecastResponseSchema = z.object({
  city: citySchema,
  cod: z.string(), // nesse endpoint vem como string
  message: z.number(),
  cnt: z.number(),
  list: z.array(dailyForecastItemSchema),
});

/* ---------- Type Inference ---------- */

export type ForecastResponse = z.infer<typeof forecastResponseSchema>;