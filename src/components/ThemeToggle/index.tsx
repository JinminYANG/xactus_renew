import React from 'react'
import { useAppStore } from '../../store/useAppStore'
import './ThemeToggle.css'

export default function ThemeToggle() {
  const isDarkMode = useAppStore((s) => s.isDarkMode)
  const toggle = useAppStore((s) => s.toggleDarkMode)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <button 
      className="theme-toggle-btn"
      aria-pressed={isDarkMode} 
      onClick={toggle}
      title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  )
}
