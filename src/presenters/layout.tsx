import { ReactNode } from "react"
import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "./languageSwitcher"

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const { t } = useTranslation()
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{t("title")}</h1>

        <LanguageSwitcher />
      </header>
      {children}
    </main>
  )
}
