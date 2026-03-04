import { mapTypeData } from '@/utils/map-type-data';
import { MapTypeEnum } from '@/utils/map-type-enum';

interface MapLegendProps {
  type: MapTypeEnum;
}

export default function MapLegend({ type }: MapLegendProps) {
  const data = mapTypeData[type];

  // Create gradient stops for CSS
  const gradientStops = data.stops
    .map(stop => `${stop.color} ${(stop.value / Math.max(...data.stops.map(s => s.value))) * 100}%`)
    .join(', ');

  // Format value for display
  const formatValue = (value: number): string => {
    if (type === MapTypeEnum.Pressure) {
      return (value / 1000).toFixed(0) + 'k';
    }
    return value.toString();
  };

  return (
    <div className="bg-background/50 border-accent/70 absolute top-4 right-4 z-1000 w-48 rounded-xl border p-4 shadow-lg backdrop-blur-sm sm:w-96">
      <h3 className="text-foreground mb-3 text-sm font-semibold">{data.title}</h3>

      {/* Gradient bar */}
      <div className="mb-3">
        <div
          className="border-accent/70 h-6 w-full rounded-xl border"
          style={{
            background: `linear-gradient(to right, ${gradientStops})`,
          }}
        />
      </div>

      {/* Value labels */}
      <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
        <span>
          {formatValue(data.stops[0].value)} {data.unit}
        </span>
        <span>
          {formatValue(data.stops[data.stops.length - 1].value)} {data.unit}
        </span>
      </div>
    </div>
  );
}
