import { useNetworks } from "./hooks/useNetworks"
import { Network } from "./models/network"

function App() {
  const { data: networks, isLoading, error } = useNetworks()
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error fetching networks</p>
  return (
    <>
      {networks &&
        networks.map((network: Network) => (
          <div key={network.id} className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">{network.name}</h1>
            <p className="text-lg">{network.company.join(", ")}</p>
            <p className="text-sm">
              {network.location.city}, {network.location.country}
            </p>
            <a href={network.href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              More info
            </a>
          </div>
        ))}
    </>
  )
}

export default App
