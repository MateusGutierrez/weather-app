import CardWeather from '../cards/Cards';

export default function CurrentWeatherSkeleton() {
  return (
    <CardWeather title="Current Weather">
      <div className="flex h-full flex-col items-center justify-around gap-4 md:gap-0">
        <div className="flex flex-col gap-2">
          <span className="bg-foreground/25 dark:bg-accent animate-pulse rounded-full">
            <h1 className="invisible text-center text-6xl font-semibold">199.99°F</h1>
          </span>
          <div className="flex items-center justify-center gap-2">
            <span className="bg-foreground/25 dark:bg-accent animate-pulse rounded-full">
              <h1 className="invisible text-xl capitalize">Cloudy</h1>
            </span>
            <div className="bg-foreground/25 dark:bg-accent size-14 animate-pulse rounded-full" />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <span className="bg-foreground/25 dark:bg-accent animate-pulse rounded-full">
              <p className="invisible text-center text-xl">Local Time:</p>{' '}
            </span>
            <span className="bg-foreground/25 dark:bg-accent animate-pulse rounded-full">
              <p className="invisible text-4xl font-semibold">23:33 PM</p>
            </span>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-xl text-gray-500">Feels Like</span>
            <span className="bg-foreground/25 dark:bg-accent animate-pulse rounded-full">
              <p className="invisible text-xl">199.99°F</p>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl text-gray-500">Humidity</span>
            <span className="bg-foreground/25 dark:bg-accent animate-pulse rounded-full">
              <p className="invisible text-xl">100%</p>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl text-gray-500">Wind</span>
            <span className="bg-foreground/25 dark:bg-accent animate-pulse rounded-full">
              <p className="invisible text-xl">25.55 mph</p>
            </span>
          </div>
        </div>
      </div>
    </CardWeather>
  );
}
