import CardWeather from '../cards/Cards';

export default function HourlyForecastSkeleton() {
  return (
    <CardWeather title="Hourly Forecast (48 Hours)" className="overflow-x-scroll">
      <div className="flex flex-1 gap-6">
        {Array.from({ length: 45 }).map(() => (
          <div className="flex flex-col items-center gap-2 p-2">
            <div className="bg-foreground/25 dark:bg-accent h-fit animate-pulse rounded-full">
              <p className="invisible whitespace-nowrap">10:00 AM</p>
            </div>
            <div className="bg-foreground/25 dark:bg-accent size-8 animate-pulse rounded-full" />
            <div className="bg-foreground/25 dark:bg-accent h-fit animate-pulse rounded-full">
              <p className="invisible whitespace-nowrap">100°F</p>
            </div>
          </div>
        ))}
      </div>
    </CardWeather>
  );
}
