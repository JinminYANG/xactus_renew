import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
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
  const [scrolled, setScrolled] = useState(false)
  const controls = useAnimation()

  const closeMobileMenu = () => setMobileMenuOpen(false)

  useEffect(() => {
    let lastY = window.scrollY
    let ticking = false

    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (y > lastY && y > 80) {
            controls.start({ y: -80, transition: { duration: 0.28, ease: [0.22,1,0.36,1] } })
          } else {
            controls.start({ y: 0, transition: { duration: 0.28, ease: [0.22,1,0.36,1] } })
          }
          lastY = y
          ticking = false
        })
        ticking = true
      }
    }

    // scroll container 기반 스크롤도 감지
    const scrollContainer = document.querySelector('.app-scroll-container')
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', onScroll, { passive: true })
      return () => scrollContainer.removeEventListener('scroll', onScroll)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [controls])

  return (
    <motion.header className={`app-header container-fluid${scrolled ? ' scrolled' : ''}`} animate={controls} initial={{ y: 0 }}>
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
    </motion.header>
  )
}
