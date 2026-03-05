import { getWeather } from '@/api';
import { useSuspenseQuery } from '@tanstack/react-query';
import CardWeather from './card-weather';
import Icon from '../icon';

type Props = {
  coords: { lat: number; lon: number };
};

export default function CurrentWeather({ coords }: Props) {
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
    <CardWeather title="Current Weather">
      <div className="flex h-full flex-col items-center justify-around gap-4 md:gap-0">
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-6xl font-semibold">{data.main.temp}°C</h1>
          <div className="flex items-center justify-center gap-4">
            <h1 className="text-xl capitalize">{data.weather[0].description}</h1>
            <div className="bg-ocean-blue dark:bg-background rounded-full">
              <Icon src={data.weather[0].icon} className="size-14" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <p className="text-center text-xl">Local Time:</p>{' '}
            <p className="text-4xl font-semibold">
              {new Intl.DateTimeFormat('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
                timeZone: 'UTC',
              }).format(new Date((data.dt + data.timezone) * 1000))}
            </p>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-xl text-gray-500">Feels Like</span>
            <p className="text-xl">{data.main.feels_like}°C</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl text-gray-500">Humidity</span>
            <p className="text-xl">{data.main.humidity}%</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl text-gray-500">Wind</span>
            <p className="text-xl">{data.wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </CardWeather>
  );
}
