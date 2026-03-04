import { timeOptions } from '@/utils/time-options';
import { ArrowUp, Cloud, Gauge, Sparkle, Sunrise, Sunset, Wind } from 'lucide-react';

export function FormatComponent({ value, number }: { value: string; number: number }) {
  if (value === 'sunrise' || value === 'sunset') {
    return new Date(number * 1000).toLocaleTimeString(undefined, timeOptions);
  }
  if (value === 'wind_deg') {
    return <ArrowUp className="size-8" style={{ transform: `rotate(${number}deg)` }} />;
  }
  return number;
}

export const rows = [
  {
    label: 'Cloudiness (%)',
    value: 'clouds',
    Icon: Cloud,
  },
  {
    label: 'UV Index',
    value: 'uvi',
    Icon: Sparkle,
  },
  {
    label: 'Wind Direction',
    value: 'wind_deg',
    Icon: Wind,
  },
  {
    label: 'Pressure (hPa)',
    value: 'pressure',
    Icon: Gauge,
  },
  {
    label: 'Sunrise',
    value: 'sunrise',
    Icon: Sunrise,
  },
  {
    label: 'Sunset',
    value: 'sunset',
    Icon: Sunset,
  },
] as const;
