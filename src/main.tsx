import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "./index.css"
import App from "./app.tsx"
import { SidePanelProvider } from "./providers/side-panel-provider.tsx"
import { ThemeProvider } from "./providers/theme-provider.tsx"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
      <SidePanelProvider>
        <App />
      </SidePanelProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>
)
