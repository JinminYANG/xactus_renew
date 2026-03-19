import React from 'react'
import { useAppStore } from '../../store/useAppStore'
import './LanguageSelector.css'

export default function LanguageSelector() {
  const lang = useAppStore((s) => s.language)
  const setLang = useAppStore((s) => s.setLanguage)

  return (
    <select 
      className="language-select"
      value={lang} 
      onChange={(e) => setLang(e.target.value as 'ko' | 'en')}
      aria-label="Select language"
    >
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  )
}
