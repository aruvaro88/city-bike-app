import { useQuery } from "@tanstack/react-query"
import { fetchStations } from "../services/citybike.service"

export const useStations = (networkId: string) => useQuery({ queryKey: ["stations", networkId], queryFn: () => fetchStations(networkId) })
