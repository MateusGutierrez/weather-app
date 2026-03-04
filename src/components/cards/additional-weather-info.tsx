import { useSuspenseQuery } from '@tanstack/react-query';
import { getWeather } from '@/api';
import CardWeather from './card-weather';
import { FormatComponent, rows } from '../format-component';

type Props = {
  coords: { lat: number; lon: number };
};

export default function AdditionalWeatherInfo({ coords }: Props) {
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
    <CardWeather title="Additional Weather Info">
      <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2">
        {rows.map(({ label, value, Icon }) => (
          <div className="flex justify-between">
            <div className="flex gap-4">
              <Icon className="size-8" />
              <span className="text-gray-500">{label}</span>
            </div>
            <p>
              <FormatComponent value={value} number={data.current[value]} />
            </p>
          </div>
        ))}
      </div>
    </CardWeather>
  );
}
