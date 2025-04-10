export interface Station {
  id: string
  name: string
  latitude: number
  longitude: number
  free_bikes: number
  empty_slots: number
  timestamp: string
  extra: Extra
}

interface Extra {
  uid: number
  normal_bikes: number
  ebikes: number
  slots: number
  online: boolean
}
