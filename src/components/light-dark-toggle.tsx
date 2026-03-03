import { useTheme } from "@/providers/theme-provider"
import { Switch } from "./ui/switch"
import { Sun, Moon } from "lucide-react"

type Props = {}

export default function LightDarkToggle({}: Props) {
  const { theme, toggleTheme } = useTheme()
  return (
    <div className="flex items-center gap-2">
      <Sun className="size-5" />
      <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
      <Moon className="size-5" />
    </div>
  )
}