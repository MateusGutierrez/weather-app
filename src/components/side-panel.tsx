import { Suspense } from 'react';
import clsx from 'clsx';
import { useSidePanel } from '@/providers/side-panel-provider';
import { ChevronLeft } from 'lucide-react';
import AirPollutionSkeleton from './skeletons/air-pollution';
import AirPollution from './air-pollution';

export default function SidePanel(props: { lat: number; lon: number }) {
  const { isSidePanelOpen, setIsSidePanelOpen } = useSidePanel();
  return (
    <div
      className={clsx(
        'bg-sidebar-accent fixed top-0 right-0 z-1001 h-screen w-(--sidebar-width) overflow-y-scroll p-4 py-8 shadow-md transition-transform duration-300 lg:translate-x-0!',
        isSidePanelOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <button onClick={() => setIsSidePanelOpen(false)} className="lg:hidden">
        <ChevronLeft className="size-8" />
      </button>
      <Suspense fallback={<AirPollutionSkeleton />}>
        <AirPollution {...props} />
      </Suspense>
    </div>
  );
}
