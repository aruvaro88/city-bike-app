import { useTranslation } from "react-i18next"

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  return (
    <div>
      <button
        onClick={() => i18n.changeLanguage("es")}
        className={`mr-2 p-2 rounded-lg ${i18n.language === "es" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        ES
      </button>
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`p-2 rounded-lg ${i18n.language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
      >
        EN
      </button>
    </div>
  )
}
