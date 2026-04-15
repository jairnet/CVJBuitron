import { useTranslation } from 'react-i18next'
import { Briefcase, Calendar, ExternalLink, MapPin } from 'lucide-react'
import { EXPERIENCE_ITEMS } from '../data/cvData'

function CompanyLogo({ src, alt }) {
  return (
    <div className="w-11 h-11 rounded-xl overflow-hidden border border-slate-100 bg-slate-50 flex items-center justify-center flex-shrink-0 shadow-sm">
      <img
        src={src}
        alt={alt}
        className="w-9 h-9 object-contain"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          e.currentTarget.parentElement.innerHTML =
            `<span class="text-slate-400 font-bold text-sm">${alt.charAt(0)}</span>`
        }}
      />
    </div>
  )
}

export default function Experience() {
  const { t } = useTranslation()

  return (
    <section className="section-card">
      <h2 className="section-title">
        <span className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
          <Briefcase size={17} className="text-emerald-600" />
        </span>
        {t('experience.title')}
      </h2>

      <div className="space-y-1">
        {EXPERIENCE_ITEMS.map((item, index) => {
          const itemData = t(`experience.items.${item.id}`, { returnObjects: true })
          const isLast = index === EXPERIENCE_ITEMS.length - 1

          return (
            <div key={item.id} className="flex gap-4 group">
              {/* Timeline column */}
              <div className="flex flex-col items-center flex-shrink-0 pt-2">
                <div className="timeline-dot" />
                {!isLast && <div className="w-px flex-1 bg-slate-200 mt-2 min-h-[2.5rem]" />}
              </div>

              {/* Content */}
              <div className={`flex-1 ${isLast ? 'pb-0' : 'pb-6'}`}>
                <div className="flex items-start gap-3">
                  <CompanyLogo src={item.logo} alt={item.company} />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <div>
                        <h3 className="font-semibold text-slate-800 text-[15px] leading-tight">
                          {item.company}
                        </h3>
                        <p className="text-blue-600 text-sm font-medium mt-0.5">{itemData.role}</p>
                      </div>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-blue-600 transition-colors p-1 rounded-md hover:bg-blue-50 flex-shrink-0"
                        title={item.company}
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mt-1.5 mb-3">
                      <span className="flex items-center gap-1 text-slate-400 text-xs">
                        <Calendar size={12} />
                        {itemData.period}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400 text-xs">
                        <MapPin size={12} />
                        {itemData.location}
                      </span>
                    </div>

                    <ul className="space-y-1.5">
                      {itemData.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2 text-sm text-slate-500 leading-relaxed">
                          <span className="text-blue-400 mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-blue-400 block" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
