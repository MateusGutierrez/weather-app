export default function AirPollutionSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Air Pollution</h1>
      <div className="flex flex-col gap-2">
        <div className="bg-foreground/25 dark:bg-accent h-fit w-fit animate-pulse rounded-full">
          <h1 className="invisible text-5xl font-semibold">5</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">AQI</h1>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {Array.from({ length: 8 }).map(() => {
          return (
            <div className="bg-card space-y-3 rounded-lg p-4 shadow-md">
              <div className="flex items-center justify-between">
                <div className="bg-foreground/25 dark:bg-accent flex h-fit animate-pulse items-center gap-2 rounded-full">
                  <h2 className="invisible text-lg font-bold">Co</h2>
                </div>
                <div className="bg-foreground/25 dark:bg-accent flex h-fit animate-pulse items-center gap-2 rounded-full">
                  <span className="invisible text-lg font-semibold">999.99</span>
                  <span className="text-muted-foreground invisible text-xs">μg/m³</span>
                </div>
              </div>

              <div className="bg-foreground/25 dark:bg-accent relative h-6 w-full animate-pulse rounded-full" />
              <div className="bg-foreground/25 dark:bg-accent h-1 w-full animate-pulse rounded-full" />
              <div className="bg-foreground/25 dark:bg-accent h-6 w-full animate-pulse rounded-full" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
