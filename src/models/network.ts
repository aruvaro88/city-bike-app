export interface Network {
  id: string
  name: string
  company: string[]
  location: {
    city: string
    country: string
    latitude: number
    longitude: number
  }
  href: string
  gbfs_href: string
}
