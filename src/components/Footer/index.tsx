import React, { useState, useEffect, useRef } from 'react'
import { useAppStore } from '../../store/useAppStore'
import { t } from '../../lib/i18n'
import './Footer.css'

export default function Footer() {
  const language = useAppStore((s) => s.language)
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Footer가 화면에 보일 때와 나갈 때 모두 상태 업데이트
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer
      id="footer-section"
      ref={footerRef}
      className={`site-footer ${isVisible ? 'fade-in' : ''}`}
    >
      <div className="footer-container">
        {/* Tagline */}
        <div className="footer-tagline">
          <p>{t('footer.tagline', language)}</p>
        </div>

        {/* Main Footer Content */}
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h4>{t('footer.aboutTitle', language)}</h4>
            <p>{t('footer.aboutDesc', language)}</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>{t('footer.quickLinks', language)}</h4>
            <ul>
              <li><a href="/">{t('nav.home', language)}</a></li>
              <li><a href="/pipeline">{t('nav.pipeline', language)}</a></li>
              <li><a href="/platform">{t('nav.platform', language)}</a></li>
              <li><a href="/company">{t('nav.company', language)}</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4>{t('footer.contact', language)}</h4>
            <ul className="contact-list">
              <li>{t('footer.address', language)}</li>
              <li><a href="mailto:ssj338@yuhs.ac">{t('footer.email', language)}</a></li>
              <li><a href="tel:+82-10-2611-2634">{t('footer.phone', language)}</a></li>
              <li><a href="fax:+82-2-6280-2634">{t('footer.fax', language)}</a></li>
            </ul>
          </div>

          {/* Location & Map Section */}
          <div className="footer-section">
            <h4>{t('footer.locationTitle', language)}</h4>
            <p className="location-address">{t('footer.locationAddressFull', language)}</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {t('footer.copyright', language)} © {t('footer.year', language)}
            </p>
          </div>
          <div className="footer-links">
            <a href={t('footer.policyTermsUrl', language)}>{t('footer.policyTerms', language)}</a>
            <span>•</span>
            <a href={t('footer.termsConditionsUrl', language)}>{t('footer.termsConditions', language)}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
