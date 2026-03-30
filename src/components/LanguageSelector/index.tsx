import React from 'react'
import { useAppStore } from '../../store/useAppStore'
import './LanguageSelector.css'

export default function LanguageSelector() {
  const lang = useAppStore((s) => s.language)
  const setLang = useAppStore((s) => s.setLanguage)

  return (
    <div className="lang-pill" role="group" aria-label="Select language">
      <button
        className={`lang-pill-btn${lang === 'ko' ? ' active' : ''}`}
        onClick={() => setLang('ko')}
        aria-pressed={lang === 'ko'}
        type="button"
      >
        KO
      </button>
      <button
        className={`lang-pill-btn${lang === 'en' ? ' active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        type="button"
      >
        EN
      </button>
    </div>
  )
}
