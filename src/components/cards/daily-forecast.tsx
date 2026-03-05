import { useSuspenseQuery } from '@tanstack/react-query';
import { getDailyForecast } from '@/api';
import CardWeather from './card-weather';
import Icon from '../icon';

type Props = {
  coords: { lat: number; lon: number };
};

export default function DailyForecast({ coords }: Props) {
  const { lat, lon } = coords;
      const { data } = useSuspenseQuery({
    queryKey: ["dailyForecast", coords],
    queryFn: () => getDailyForecast({ lat: lat, lon: lon }),
  })
  return (
    <CardWeather title="Daily Forecast">
      {/* Daily forecast */}
      <div className="flex flex-col gap-4.5">
       {data?.list?.map((day) => {
        console.log(day, 'day ')
          return (
              <div key={day.dt} className="flex justify-between">
                  <p className="w-9">
                      {new Date(day.dt * 1000).toLocaleDateString(undefined, {
                          weekday: "short",
                      })}
                  </p>
                  <Icon src={day.weather[0].icon} />
                  <p>{Math.round(day.temp.day)}°C</p>
                  <p className="text-gray-500/75">{Math.round(day.temp.min)}°C</p>
                  <p className="text-gray-500/75">{Math.round(day.temp.max)}°C</p>
              </div>
          )
      })}
      </div>
    </CardWeather>
  );
}
