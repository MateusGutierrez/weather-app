import { getAirPollution } from '../api';
import { useSuspenseQuery } from '@tanstack/react-query';
import { cn } from '@/lib/utils';
import { Info } from 'lucide-react';
import {
  airQualityRanges,
  getAirQualityLevel,
  getSliderColor,
  getSliderTrackColor,
  pollutantKeyMapping,
  pollutantNameMapping,
  type AirQualityLevel,
} from '@/utils/air-polution';
import { Slider } from './ui/slider';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

export default function AirPollution({ lat, lon }: { lat: number; lon: number }) {
  const { data: airPollutionData } = useSuspenseQuery({
    queryKey: ['airPollution', lat, lon],
    queryFn: () => getAirPollution({ lat, lon }),
  });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Air Pollution</h1>
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-semibold">{airPollutionData.list[0].main.aqi}</h1>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">AQI</h1>
          <Tooltip>
            <TooltipTrigger>
              <Info className="size-4" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">
                Air Quality Index. Possible values: 1, 2, 3, 4, 5. Where 1 = Good, 2 = Fair, 3 =
                Moderate, 4 = Poor, 5 = Very Poor.
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {Object.entries(airPollutionData.list[0].components).map(([key, value]) => {
          // Normalize the key to match our pollutant types
          const normalizedKey = key.toLowerCase();
          const pollutant = pollutantKeyMapping[normalizedKey];

          const ranges = airQualityRanges[pollutant];
          if (!ranges) {
            console.log('No ranges found for pollutant:', pollutant);
            return null;
          }

          const currentLevel = getAirQualityLevel(pollutant, value);
          const maxValue = Math.max(...Object.values(ranges).map((r: Range) => r.max || 0));
          const normalizedValue = Math.min(value, maxValue);

          return (
            <div
              key={key}
              className="bg-card rounded-lg p-4 shadow-md transition-all duration-300 hover:scale-105"
            >
              <div className="animate-[fade-in_0.6s_ease-out_forwards] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-bold capitalize">{key}</h2>
                    <Tooltip>
                      <TooltipTrigger>
                        <Info className="size-4" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs">
                          Concentration of {pollutantNameMapping[pollutant]}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold">{value}</span>
                    <span className="text-muted-foreground text-xs">μg/m³</span>
                  </div>
                </div>
                <div className="relative">
                  <Slider
                    value={[normalizedValue]}
                    min={0}
                    max={maxValue}
                    disabled
                    className="w-full"
                  />
                  {/* Custom colored track overlay */}
                  <div className="pointer-events-none absolute top-0 left-0 h-2 w-full">
                    <div
                      className={cn(
                        'h-full rounded-full transition-all duration-300',
                        getSliderTrackColor(currentLevel)
                      )}
                      style={{
                        width: `${(normalizedValue / maxValue) * 100}%`,
                        backgroundColor:
                          currentLevel === 'Good'
                            ? '#dcfce7'
                            : currentLevel === 'Fair'
                              ? '#fef3c7'
                              : currentLevel === 'Moderate'
                                ? '#fed7aa'
                                : currentLevel === 'Poor'
                                  ? '#fecaca'
                                  : '#e9d5ff',
                      }}
                    />
                  </div>
                </div>
                <div className="flex justify-between text-xs">
                  <span>0</span>
                  <span>{maxValue}</span>
                </div>
                <div className="flex gap-1">
                  {Object.entries(ranges).map(([level]) => (
                    <span
                      key={level}
                      className={cn(
                        'rounded px-2 py-1 text-xs font-medium transition-all duration-200',
                        level === currentLevel
                          ? getSliderColor(level as AirQualityLevel) + ' text-white shadow-sm'
                          : 'bg-muted text-muted-foreground hover:bg-muted/80'
                      )}
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
