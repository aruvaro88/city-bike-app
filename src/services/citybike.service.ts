import axios from "axios"
import { Network } from "../models/network"

const API_BASE_URL = "https://api.citybik.es/v2"

export const fetchNetworks = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/networks`)
    return response.data.networks.filter((net: Network) => net.location.country === "ES")
  } catch (error) {
    console.error("Error fetching networks:", error)
    throw error
  }
}

export const fetchStations = async (networkId: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/networks/${networkId}`)
    return response.data.network.stations
  } catch (error) {
    console.error("Error fetching network details:", error)
    throw error
  }
}
