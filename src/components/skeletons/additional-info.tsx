import CardWeather from '../cards/card-weather';

export default function AdditionalInfoSkeleton() {
  return (
    <CardWeather title="Additional Weather Info">
      <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2">
        {Array.from({ length: 6 }).map(() => (
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="bg-foreground/25 dark:bg-accent size-8 animate-pulse rounded-full" />
              <div className="bg-foreground/25 dark:bg-accent h-fit animate-pulse rounded-full">
                <p className="invisible">Pressure (hPa)</p>
              </div>
            </div>
            <div className="bg-foreground/25 dark:bg-accent size-8 animate-pulse rounded-full" />
          </div>
        ))}
      </div>
    </CardWeather>
  );
}
