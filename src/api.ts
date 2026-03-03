import { AirPollutionSchema } from "./schemas/air-pollution"
import { forecastResponseSchema } from "./schemas/daily-forecast"
import { GeocodeSchema } from "./schemas/geo-code"
import { forecast3hResponseSchema } from "./schemas/hourly-forecast"
import { weatherResponseSchema } from "./schemas/weather"


const API_KEY = import.meta.env.VITE_API_KEY

export async function getWeather({lat, lon}: {lat: number, lon: number}) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
    const data = await res.json()
    return weatherResponseSchema.parse(data)
}
export async function getDailyForecast({lat, lon}: {lat: number, lon: number}) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&units=metric&cnt=5&appid=${API_KEY}`)
    const data = await res.json()
    return forecastResponseSchema.parse(data)
}
export async function getHourlyForecast({lat, lon}: {lat: number, lon: number}) {
    const res = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`)
    const data = await res.json()
    return forecast3hResponseSchema.parse(data)
}
export async function getGeocode(location: string) {
  const res = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`
  )
  const data = await res.json()
  return GeocodeSchema.parse(data)
}
export async function getAirPollution({
  lat,
  lon,
}: {
  lat: number
  lon: number
}) {
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  )
  const data = await res.json()
  return AirPollutionSchema.parse(data)
}