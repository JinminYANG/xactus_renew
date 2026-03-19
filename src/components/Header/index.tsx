import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAppStore } from '../../store/useAppStore'
import { t } from '../../lib/i18n'
import ThemeToggle from '../ThemeToggle'
import LanguageSelector from '../LanguageSelector'
import LogoImg from '../../assets/images/logo.png'
import './Header.css'

export default function Header() {
  const language = useAppStore((s) => s.language)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <header className="app-header container-fluid">
      <div className="container header-content">
        <div className="logo-section">
          <h1 className="logo">
            <img src={LogoImg} alt="Xactus Logo" />
          </h1>
        </div>

        {/* Hamburger Icon - Visible only on mobile */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <NavLink to="/" end className={({isActive})=> isActive? 'nav-link active':'nav-link'}>{t('nav.home', language)}</NavLink>
          <NavLink to="/pipeline" className={({isActive})=> isActive? 'nav-link active':'nav-link'}>{t('nav.pipeline', language)}</NavLink>
          <NavLink to="/platform" className={({isActive})=> isActive? 'nav-link active':'nav-link'}>{t('nav.platform', language)}</NavLink>
          <NavLink to="/company" className={({isActive})=> isActive? 'nav-link active':'nav-link'}>{t('nav.company', language)}</NavLink>
        </nav>

        {/* Mobile Navigation - Visible only on mobile */}
        {mobileMenuOpen && (
          <nav className="nav-mobile">
            <NavLink to="/" end className={({isActive})=> isActive? 'nav-link active':'nav-link'} onClick={closeMobileMenu}>{t('nav.home', language)}</NavLink>
            <NavLink to="/pipeline" className={({isActive})=> isActive? 'nav-link active':'nav-link'} onClick={closeMobileMenu}>{t('nav.pipeline', language)}</NavLink>
            <NavLink to="/platform" className={({isActive})=> isActive? 'nav-link active':'nav-link'} onClick={closeMobileMenu}>{t('nav.platform', language)}</NavLink>
            <NavLink to="/company" className={({isActive})=> isActive? 'nav-link active':'nav-link'} onClick={closeMobileMenu}>{t('nav.company', language)}</NavLink>
          </nav>
        )}

        <div className="header-controls">
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </div>
    </header>
  )
}
