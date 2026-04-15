import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'

export default function Header() {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
  }

  return (
    <header className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg border-b border-slate-700">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-sm">JB</span>
        </div>
        <div>
          <h1 className="text-base font-bold text-white leading-none">Jair Buitron</h1>
          <p className="text-blue-400 text-xs font-medium mt-0.5">{t('header.title')}</p>
        </div>
      </div>

      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 bg-slate-800 hover:bg-blue-600 border border-slate-600 hover:border-blue-500 transition-all duration-200 px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white"
        aria-label="Switch language"
      >
        <Globe size={15} />
        <span>{t('header.switchLang')}</span>
      </button>
    </header>
  )
}
