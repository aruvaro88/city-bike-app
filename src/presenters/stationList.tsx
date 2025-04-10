import dayjs from "dayjs"
import "dayjs/locale/es"
import relativeTime from "dayjs/plugin/relativeTime"
import { Station } from "../models/station"

dayjs.extend(relativeTime)
dayjs.locale("es")

const getAvailability = (bikes: number) => {
  if (bikes < 3) return "🟥 Bajo"
  if (bikes < 7) return "🟨 Medio"
  return "🟩 Alto"
}

export const StationList = ({ stations }: { stations: Station[] }) => (
  <div className="grid gap-4 mt-4">
    {stations.map((station) => (
      <div key={station.id} className="border rounded-xl p-4 shadow-sm bg-white hover:bg-gray-50 transition">
        <h3 className="text-lg font-semibold">{station.name}</h3>
        <p className="text-sm text-gray-600">
          Disponibilidad: {getAvailability(station.free_bikes)} ({station.free_bikes} bicicletas)
        </p>
        <p className="text-sm text-gray-600">Última actualización: {dayjs(station.timestamp).fromNow()}</p>
        <a
          href={`https://www.google.com/maps?q=${station.latitude},${station.longitude}`}
          target="_blank"
          className="text-blue-600 underline text-sm mt-1 inline-block"
        >
          Ver en Google Maps
        </a>
      </div>
    ))}
  </div>
)
