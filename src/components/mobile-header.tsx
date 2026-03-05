import LightDarkToggle from './light-dark-toggle';
import { SidebarTrigger } from '@/components/ui/sidebar';

export default function MobileHeader() {
  return (
    <div className="bg-background fixed top-0 left-0 z-1001 flex h-16 w-full items-center justify-between px-4 lg:hidden">
      <div className="ml-auto flex items-center gap-12">
        <LightDarkToggle />
        <SidebarTrigger />
      </div>
    </div>
  );
}
