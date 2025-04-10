import { useNavigate, useParams } from "react-router-dom"
import { useStations } from "../hooks/useStations"
import { StationList } from "../presenters/stationList"

export const StationContainer = () => {
  const { networkId } = useParams()
  const navigate = useNavigate()
  const { data: stations, isLoading, error } = useStations(networkId || "")
  if (isLoading) return <p>Cargando estaciones...</p>
  if (error) return <p>Error cargando estaciones.</p>

  return (
    <div>
      <button onClick={() => navigate("/")} className="mb-4 px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200">
        Volver a redes
      </button>
      <StationList stations={stations} />
    </div>
  )
}
