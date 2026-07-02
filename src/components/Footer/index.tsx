import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAppStore } from "../../store/useAppStore";
import { t } from "../../lib/i18n";
import "./Footer.css";

function resetAppScrollToTop() {
  const scrollContainer = document.getElementById("app-scroll-container") as HTMLElement | null;

  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  if (scrollContainer) {
    scrollContainer.classList.remove("snap-ready");
    scrollContainer.scrollTop = 0;
    scrollContainer.scrollLeft = 0;
  }
}

export default function Footer() {
  const language = useAppStore((s) => s.language);
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePrimaryNavigation = () => {
    resetAppScrollToTop();
  };

  return (
    <footer id="footer-section" ref={footerRef} className={`site-footer${isVisible ? " fade-in" : ""}`}>
      <div className="footer-container">
        <div className="footer-tagline">
          <p>{t("footer.tagline", language)}</p>
        </div>

        <div className="footer-content">
          <div className="footer-section footer-section--about">
            <h4>{t("footer.aboutTitle", language)}</h4>
            <p>{t("footer.aboutDesc", language)}</p>
          </div>

          <div className="footer-section footer-section--links">
            <h4>{t("footer.quickLinks", language)}</h4>
            <ul>
              <li>
                <Link to="/" onClick={handlePrimaryNavigation}>
                  {t("nav.home", language)}
                </Link>
              </li>
              <li>
                <Link to="/pipeline" onClick={handlePrimaryNavigation}>
                  {t("nav.pipeline", language)}
                </Link>
              </li>
              <li>
                <Link to="/technology" onClick={handlePrimaryNavigation}>
                  {t("nav.platform", language)}
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handlePrimaryNavigation}>
                  {t("nav.company", language)}
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section footer-section--contact">
            <h4>{t("footer.contact", language)}</h4>
            <ul className="contact-list">
              <li>{t("footer.address", language)}</li>
              <li>
                <a href="mailto:ssj338@yuhs.ac">{t("footer.email", language)}</a>
              </li>
              <li>
                <a href="tel:+82-10-2611-2634">{t("footer.phone", language)}</a>
              </li>
              <li>
                <a href="fax:+82-2-6280-2634">{t("footer.fax", language)}</a>
              </li>
            </ul>
          </div>

          <div className="footer-section footer-section--location">
            <h4>{t("footer.locationTitle", language)}</h4>
            <p className="location-address">{t("footer.locationAddressFull", language)}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {t("footer.copyright", language)} © {t("footer.year", language)}</p>
          </div>
          <div className="footer-links">
            <a href={t("footer.policyTermsUrl", language)}>{t("footer.policyTerms", language)}</a>
            <span>•</span>
            <a href={t("footer.termsConditionsUrl", language)}>{t("footer.termsConditions", language)}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
