import { Suspense } from 'react';
import AirPollutionSkeleton from './skeletons/air-pollution';
import AirPollution from './air-pollution';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { Wind } from 'lucide-react';

export default function AppSidebar(props: { lat: number; lon: number }) {
  return (
    <Sidebar side="right">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <Wind className="size-5" />
          <span className="text-lg font-semibold">Air Quality</span>
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Pollution Data</SidebarGroupLabel>
          <SidebarGroupContent>
            <Suspense fallback={<AirPollutionSkeleton />}>
              <AirPollution {...props} />
            </Suspense>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
