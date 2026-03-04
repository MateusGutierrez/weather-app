import { useSidePanel } from "@/providers/side-panel-provider"
import { Hamburger } from "lucide-react"
import LightDarkToggle from "./light-dark-toggle"

export default function MobileHeader() {
  const { setIsSidePanelOpen } = useSidePanel()
  return (
    <div className="w-full h-16 bg-background fixed top-0 left-0 z-1001 lg:hidden flex items-center justify-between px-4">
      <div className="ml-auto flex items-center gap-12">
        <LightDarkToggle />
        <button onClick={() => setIsSidePanelOpen((prev) => !prev)}>
          <Hamburger className="size-8" />
        </button>
      </div>
    </div>
  )
}
