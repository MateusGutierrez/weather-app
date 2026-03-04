import clsx from "clsx"
import { Card, CardContent, CardHeader } from "../ui/card"

export default function CardWeather({
  children,
  title,
  className,
}: {
  children: React.ReactNode
  title: string
  className?: string
}) {
  return (
    <Card
      className={clsx(
        "bg-linear-to-br from-card to-card/60 size-full flex flex-col gap-4",
        className
      )}
    >
    <CardHeader>
      <h2 className="text-2xl font-semibold sticky left-0">{title}</h2>
    </CardHeader>
      <CardContent className="animate-[fade-in_0.6s_ease-out_forwards] size-full">
        {children}
      </CardContent>
    </Card>
  )
}
