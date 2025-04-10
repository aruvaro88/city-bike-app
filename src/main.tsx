import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NetworkContainer } from "./containers/networkContainer.tsx"
import { StationContainer } from "./containers/stationsContainer.tsx"
import "./i18n.ts"
import "./index.css"
import { Layout } from "./presenters/layout.tsx"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
            <Route path="/" element={<NetworkContainer />} />
            <Route path="/stations/:networkId" element={<StationContainer />} />
          </Routes>
        </Layout>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
)
