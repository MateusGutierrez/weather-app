import type { getWeather } from '@/api';
import { ArrowUp, Cloud, Gauge, Sunrise, Sunset, Wind } from 'lucide-react';

export function FormatComponent({
  format,
  number,
}: {
  format?: "time" | "direction"
  number: number
}) {
  if (format === "time")
    return new Date(number * 1000).toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })

  if (format === "direction")
    return (
      <ArrowUp
        className="size-8"
        style={{ transform: `rotate(${number}deg)` }}
      />
    )

  return number
}
type WeatherData = Awaited<ReturnType<typeof getWeather>>

type Row = {
  label: string
  getValue: (data: WeatherData) => number
  Icon: React.ComponentType<{ className?: string }>
  format?: "time" | "direction"
}
export const rows: Row[] = [
  {
    label: "Cloudiness (%)",
    getValue: (d) => d.clouds.all,
    Icon: Cloud,
  },
  {
    label: "Wind Direction",
    getValue: (d) => d.wind.deg,
    Icon: Wind,
    format: "direction",
  },
  {
    label: "Pressure (hPa)",
    getValue: (d) => d.main.pressure,
    Icon: Gauge,
  },
  {
    label: "Sunrise",
    getValue: (d) => d.sys.sunrise,
    Icon: Sunrise,
    format: "time",
  },
  {
    label: "Sunset",
    getValue: (d) => d.sys.sunset,
    Icon: Sunset,
    format: "time",
  },
] as const;
