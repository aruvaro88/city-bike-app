import { useTranslation } from "react-i18next"
import { Network } from "../models/network"

interface Props {
  networks: Network[]
  onSelect: (id: string) => void
}

export const NetworkList = ({ networks, onSelect }: Props) => {
  const { t } = useTranslation()
  return (
    <div className="grid gap-4">
      {networks.map((net) => (
        <div key={net.id} className="border rounded p-4 shadow hover:bg-gray-50 cursor-pointer" onClick={() => onSelect(net.id)}>
          <h2 className="text-xl font-semibold">{net.name}</h2>
          <p className="text-sm text-gray-600">
            {t("company")}: {net.company?.join(", ") || "N/A"}
          </p>
          <p className="text-sm text-gray-600">
            {t("city")}: {net.location.city}
          </p>
        </div>
      ))}
    </div>
  )
}
