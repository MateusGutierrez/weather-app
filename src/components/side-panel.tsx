import { Suspense } from "react"
import clsx from "clsx"
import { useSidePanel } from "@/providers/side-panel-provider"
import { ChevronLeft } from "lucide-react"
import AirPollutionSkeleton from "./skeletons/air-pollution"
import AirPollution from "./air-pollution"

export default function SidePanel(props: { lat: number; lon: number }) {
  const { isSidePanelOpen, setIsSidePanelOpen } = useSidePanel()
  return (
    <div
      className={clsx(
        "fixed z-1001 top-0 right-0 h-screen w-(--sidebar-width) bg-sidebar-accent lg:translate-x-0! p-4 py-8 transition-transform duration-300 overflow-y-scroll shadow-md",
        isSidePanelOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <button onClick={() => setIsSidePanelOpen(false)} className="lg:hidden">
        <ChevronLeft className="size-8" />
      </button>
      <Suspense fallback={<AirPollutionSkeleton />}>
        <AirPollution {...props} />
      </Suspense>
    </div>
  )
}
