import clsx from 'clsx';
import { Card, CardContent, CardHeader } from '../ui/card';

export default function CardWeather({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) {
  return (
    <Card
      className={clsx(
        'from-card to-card/60 flex size-full flex-col gap-4 bg-linear-to-br',
        className
      )}
    >
      <CardHeader>
        <h2 className="sticky left-0 text-2xl font-semibold">{title}</h2>
      </CardHeader>
      <CardContent className="size-full animate-[fade-in_0.6s_ease-out_forwards]">
        {children}
      </CardContent>
    </Card>
  );
}
