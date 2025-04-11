import { useTranslation } from "react-i18next"

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const languages = ["es", "en"]

  return (
    <div className="flex gap-2">
      {languages.map((lng) => (
        <button
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          className={`px-2 py-1 text-sm sm:text-base rounded-lg ${i18n.language === lng ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
