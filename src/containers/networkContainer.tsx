import { useNavigate } from "react-router-dom"
import { useNetworks } from "../hooks/useNetworks"
import { NetworkList } from "../presenters/networkList"

export const NetworkContainer = () => {
  const { data: networks, isLoading, error } = useNetworks()
  const navigate = useNavigate()

  const handleSelect = (id: string) => {
    navigate(`/stations/${id}`)
  }

  if (isLoading) return <p>Cargando redes...</p>
  if (error) return <p>Error al cargar redes.</p>

  return <NetworkList networks={networks} onSelect={handleSelect} />
}
