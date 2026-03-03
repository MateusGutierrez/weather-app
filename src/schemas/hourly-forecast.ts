import { z } from "zod";

/* ----------------- Shared ----------------- */

const coordSchema = z.object({
  lat: z.number(),
  lon: z.number(),
});

const weatherItemSchema = z.object({
  id: z.number(),
  main: z.string(),
  description: z.string(),
  icon: z.string(),
});

/* ----------------- Forecast Item ----------------- */

const forecastMainSchema = z.object({
  temp: z.number(),
  feels_like: z.number(),
  temp_min: z.number(),
  temp_max: z.number(),
  pressure: z.number(),
  sea_level: z.number().optional(),
  grnd_level: z.number().optional(),
  humidity: z.number(),
  temp_kf: z.number(),
});

const cloudsSchema = z.object({
  all: z.number(),
});

const windSchema = z.object({
  speed: z.number(),
  deg: z.number(),
  gust: z.number().optional(),
});

const rainSchema = z
  .object({
    "1h": z.number().optional(),
    "3h": z.number().optional(),
  })
  .optional();

const sysSchema = z.object({
  pod: z.string(), // d = day | n = night
});

const forecastItemSchema = z.object({
  dt: z.number(),
  main: forecastMainSchema,
  weather: z.array(weatherItemSchema),
  clouds: cloudsSchema,
  wind: windSchema,
  visibility: z.number(),
  pop: z.number().min(0).max(1),
  rain: rainSchema,
  sys: sysSchema,
  dt_txt: z.string(),
});

/* ----------------- City ----------------- */

const citySchema = z.object({
  id: z.number(),
  name: z.string(),
  coord: coordSchema,
  country: z.string(),
  population: z.number(),
  timezone: z.number(),
  sunrise: z.number(),
  sunset: z.number(),
});

/* ----------------- Full Response ----------------- */

export const forecast3hResponseSchema = z.object({
  cod: z.string(),
  message: z.number(),
  cnt: z.number(),
  list: z.array(forecastItemSchema),
  city: citySchema,
});

/* ----------------- Type ----------------- */

export type Forecast3hResponse = z.infer<typeof forecast3hResponseSchema>;