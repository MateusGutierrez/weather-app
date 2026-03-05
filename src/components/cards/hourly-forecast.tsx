import { useSuspenseQuery } from '@tanstack/react-query';
import { getHourlyForecast } from '@/api';
import CardWeather from './card-weather';
import Icon from '../icon';

type Props = {
  coords: { lat: number; lon: number };
};

export default function HourlyForecast({ coords }: Props) {
  const { lat, lon } = coords;
  const { data } = useSuspenseQuery({
    queryKey: ["hourlyForecast", coords],
    queryFn: () => getHourlyForecast({ lat: lat, lon: lon }),
  })

  return (
    <CardWeather title="Hourly Forecast (48 Hours)" className="overflow-x-auto">
      {/* Hourly forecast */}
      <div className="flex gap-6">
{data.list.map((item) => (
        <div
          key={item.dt}
          className="flex flex-col 2xl:justify-between gap-2 items-center p-2"
        >
          <p className="whitespace-nowrap 2xl:scale-110">
            {new Date(item.dt * 1000).toLocaleTimeString(undefined, {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </p>
          <Icon className="2xl:size-10" src={item.weather[0].icon} />
          <p className="2xl:scale-110">{Math.round(item.main.temp)}°C</p>
        </div>
      ))}
      </div>
    </CardWeather>
  );
}
