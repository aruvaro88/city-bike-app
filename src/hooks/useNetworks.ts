import { useQuery } from "@tanstack/react-query"
import { fetchNetworks } from "../services/citybike.service"

export const useNetworks = () => useQuery({ queryKey: ["networks"], queryFn: fetchNetworks })
