import { useSuspenseQuery } from '@tanstack/react-query';
import { getWeather } from '@/api';
import CardWeather from './card-weather';
import Icon from '../icon';

type Props = {
  coords: { lat: number; lon: number };
};

export default function DailyForecast({ coords }: Props) {
  const { lat, lon } = coords;
  const { data } = useSuspenseQuery({
    queryKey: ['weather', lat, lon],
    queryFn: () =>
      getWeather({
        lat,
        lon,
      }),
  });
  return (
    <CardWeather title="Daily Forecast">
      {/* Daily forecast */}
      <div className="flex flex-col gap-4.5">
        {data.daily.map(day => (
          <div className="flex justify-between">
            <p className="w-9">
              {new Date(day.dt * 1000).toLocaleDateString(undefined, {
                weekday: 'short',
              })}
            </p>
            <div className="bg-ocean-blue dark:bg-background rounded-full p-0.5">
              <Icon src={day.weather[0].icon} />
            </div>
            <p>{Math.round(day.temp.day)}°F</p>
            <p className="text-gray-500/75">{Math.round(day.temp.min)}°F</p>
            <p className="text-gray-500/75">{Math.round(day.temp.max)}°F</p>
          </div>
        ))}
      </div>
    </CardWeather>
  );
}
