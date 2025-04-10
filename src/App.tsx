import { Route, Routes } from "react-router-dom"
import { NetworkContainer } from "./containers/networkContainer"
import { StationContainer } from "./containers/stationsContainer"

function App() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Redes de Bicicletas en España</h1>

      <Routes>
        <Route path="/" element={<NetworkContainer />} />
        <Route path="/stations/:networkId" element={<StationContainer />} />
      </Routes>
    </main>
  )
}

export default App
