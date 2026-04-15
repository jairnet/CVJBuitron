import { useTranslation } from 'react-i18next'
import { MapPin, Mail, Linkedin, Github, Phone } from 'lucide-react'
import { CONTACT, SKILLS } from '../data/cvData'

function SkillBar({ level }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`h-1.5 w-5 rounded-full ${
            i <= level ? 'bg-blue-500' : 'bg-slate-700'
          }`}
        />
      ))}
    </div>
  )
}

export default function Sidebar() {
  const { t } = useTranslation()
  const langItems = t('languages.items', { returnObjects: true })

  return (
    <div className="flex flex-col">
      {/* Profile */}
      <div className="p-6 lg:p-8 text-center border-b border-slate-700/60">
        <div className="relative inline-block mb-4">
          <img
            src="/images/porfile.jpg"
            alt="Jair Buitron"
            className="w-28 h-28 lg:w-32 lg:h-32 rounded-full object-cover ring-4 ring-blue-500/40 ring-offset-2 ring-offset-slate-900"
          />
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900" />
        </div>
        <h2 className="text-white font-bold text-xl">Jair Buitron</h2>
        <p className="text-blue-400 text-sm font-medium mt-1">{t('header.title')}</p>
        <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs mt-2">
          <MapPin size={12} />
          <span>Cajibío, Cauca</span>
        </div>
      </div>

      {/* Contact */}
      <div className="p-6 border-b border-slate-700/60">
        <p className="sidebar-label">{t('sidebar.contact')}</p>
        <ul className="space-y-0.5">
          <li>
            <a href={`tel:${CONTACT.phone}`} className="contact-link">
              <Phone size={15} className="text-blue-400 flex-shrink-0" />
              <span>{CONTACT.phone}</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${CONTACT.email}`} className="contact-link">
              <Mail size={15} className="text-blue-400 flex-shrink-0" />
              <span className="truncate text-xs">{CONTACT.email}</span>
            </a>
          </li>
          <li>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              <Linkedin size={15} className="text-blue-400 flex-shrink-0" />
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              <Github size={15} className="text-blue-400 flex-shrink-0" />
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </div>

      {/* Programming Languages */}
      <div className="p-6 border-b border-slate-700/60">
        <p className="sidebar-label">{t('sidebar.languages')}</p>
        <ul className="space-y-3">
          {SKILLS.languages.map(({ name, level }) => (
            <li key={name} className="flex items-center justify-between">
              <span className="text-slate-300 text-sm font-medium">{name}</span>
              <SkillBar level={level} />
            </li>
          ))}
        </ul>
      </div>

      {/* Spoken Languages */}
      <div className="p-6 border-b border-slate-700/60">
        <p className="sidebar-label">{t('languages.title')}</p>
        <ul className="space-y-2">
          {Object.values(langItems).map((lang) => (
            <li key={lang.name} className="flex items-center justify-between">
              <span className="text-slate-300 text-sm font-medium">{lang.name}</span>
              <span className="text-slate-500 text-xs">{lang.level}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tools */}
      <div className="p-6">
        <p className="sidebar-label">{t('sidebar.tools')}</p>
        <div className="flex flex-wrap gap-1.5">
          {SKILLS.tools.map((tool) => (
            <span key={tool} className="skill-badge">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
