import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import { useNetworks } from "../hooks/useNetworks"
import { NetworkList } from "../presenters/networkList"

export const NetworkContainer = () => {
  const { t } = useTranslation()
  const { data: networks, isLoading, error } = useNetworks()
  const navigate = useNavigate()

  const handleSelect = (id: string) => {
    navigate(`/stations/${id}`)
  }

  if (isLoading) return <p>{t("loading")}</p>
  if (error) return <p>{t("error")}</p>

  return <NetworkList networks={networks} onSelect={handleSelect} />
}
