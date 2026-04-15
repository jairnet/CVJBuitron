import { useTranslation } from 'react-i18next'
import { MapPin, Linkedin, Github } from 'lucide-react'
import { CONTACT } from '../data/cvData'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-700/60 text-slate-400 py-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm">
            <MapPin size={14} className="text-blue-400" />
            <span className="text-slate-400">{t('footer.workingFrom')}:</span>
            <a
              href={CONTACT.locationMap}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
            >
              {t('footer.location')}
            </a>
          </div>

          <div className="flex items-center gap-1">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-slate-800 hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-slate-800 hover:text-blue-400 transition-colors"
              title="GitHub"
            >
              <Github size={17} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-5 pt-5 text-center text-xs text-slate-600">
          © {year} Jair Buitron. {t('footer.rights')}.
        </div>
      </div>
    </footer>
  )
}
