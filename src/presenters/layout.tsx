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
      <header className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">{t("title")}</h1>
        <LanguageSwitcher />
      </header>
      {children}
    </main>
  )
}
