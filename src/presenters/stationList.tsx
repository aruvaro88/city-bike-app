import { t } from "i18next"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Station } from "../models/station"
import dayjs from "../utils/dayjsConfig"

const getAvailability = (bikes: number) => {
  if (bikes < 4) return t("low")
  if (bikes < 10) return t("medium")
  return t("high")
}

export const StationList = ({ stations }: { stations: Station[] }) => {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    dayjs.locale(i18n.language)
    const handleLanguageChange = (lng: string) => {
      dayjs.locale(lng)
    }
    i18n.on("languageChanged", handleLanguageChange)

    return () => {
      i18n.off("languageChanged", handleLanguageChange)
    }
  }, [i18n])

  return (
    <div className="grid gap-4 mt-4">
      {stations.map((station) => (
        <div key={station.id} className="border rounded-xl p-4 shadow-sm bg-white hover:bg-gray-50 transition">
          <h3 className="text-lg font-semibold">{station.name}</h3>
          <p className="text-sm text-gray-600">
            {t("availability")}: {getAvailability(station.free_bikes)} ({station.free_bikes} {t("bikes")})
          </p>
          <p className="text-sm text-gray-600">
            {t("lastUpdate")}: {dayjs(station.timestamp).fromNow()}
          </p>
          <a
            href={`https://www.google.com/maps?q=${station.latitude},${station.longitude}`}
            target="_blank"
            className="text-blue-600 underline text-sm mt-1 inline-block"
          >
            {t("seeOnGoogleMaps")}
          </a>
        </div>
      ))}
    </div>
  )
}
