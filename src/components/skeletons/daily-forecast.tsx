import CardWeather from "../cards/Cards";

export default function DailyForecastSkeleton() {
  return (
    <CardWeather title="Daily Forecast">
      <div className="flex flex-col gap-8">
        {Array.from({ length: 8 }).map(() => (
          <div className="w-full animate-pulse bg-foreground/25 dark:bg-accent h-8 rounded-full" />
        ))}
      </div>
    </CardWeather>
  )
}
