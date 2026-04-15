import { useTranslation } from 'react-i18next'
import { GraduationCap, ExternalLink, Calendar } from 'lucide-react'
import { EDUCATION_ITEMS } from '../data/cvData'

export default function Education() {
  const { t } = useTranslation()

  return (
    <section className="section-card">
      <h2 className="section-title">
        <span className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center flex-shrink-0">
          <GraduationCap size={17} className="text-violet-600" />
        </span>
        {t('education.title')}
      </h2>

      <div className="space-y-5">
        {EDUCATION_ITEMS.map((item, index) => {
          const itemData = t(`education.items.${item.id}`, { returnObjects: true })
          const isLast = index === EDUCATION_ITEMS.length - 1

          return (
            <div key={item.id}>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center flex-shrink-0 border border-violet-100 shadow-sm">
                  <GraduationCap size={20} className="text-violet-500" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div>
                      <p className="text-xs font-medium text-violet-500 uppercase tracking-wide">
                        {itemData.type}
                      </p>
                      <h3 className="font-semibold text-slate-800 text-[15px] leading-tight mt-0.5">
                        {itemData.degree}
                      </h3>
                      <p className="text-slate-500 text-sm mt-0.5">{item.institution}</p>
                    </div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-violet-600 hover:text-violet-800 font-medium transition-colors bg-violet-50 hover:bg-violet-100 px-2.5 py-1.5 rounded-lg flex-shrink-0"
                    >
                      <ExternalLink size={12} />
                      {t('education.visitWebsite')}
                    </a>
                  </div>

                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mt-2">
                    <Calendar size={12} />
                    <span>{itemData.period}</span>
                  </div>
                </div>
              </div>

              {!isLast && <div className="border-b border-slate-100 mt-5" />}
            </div>
          )
        })}
      </div>
    </section>
  )
}
