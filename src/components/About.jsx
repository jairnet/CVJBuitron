import { useTranslation } from 'react-i18next'
import { User } from 'lucide-react'

export default function About() {
  const { t } = useTranslation()

  return (
    <section className="section-card">
      <h2 className="section-title">
        <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
          <User size={17} className="text-blue-600" />
        </span>
        {t('about.title')}
      </h2>
      <p className="text-slate-600 leading-relaxed text-[15px]">{t('about.description')}</p>
    </section>
  )
}
