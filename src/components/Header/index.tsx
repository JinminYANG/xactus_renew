import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppStore } from "../../store/useAppStore";
import { getSiteContent } from "../../lib/i18n.original-en-clean";
import LanguageSelector from "../LanguageSelector";
import LogoImg from "../../assets/images/logo.png";
import "./Header.css";

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

export default function Header() {
  const location = useLocation();
  const language = useAppStore((s) => s.language);
  const navItems = getSiteContent(language).nav;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDesktopMenu, setActiveDesktopMenu] = useState<string | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const clearCloseTimer = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const closeDesktopMenu = () => {
    clearCloseTimer();
    setActiveDesktopMenu(null);
  };
  const queueDesktopMenuClose = () => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => {
      setActiveDesktopMenu(null);
      closeTimerRef.current = null;
    }, 120);
  };
  const openDesktopMenu = (href: string) => {
    clearCloseTimer();
    setActiveDesktopMenu(href);
  };

  const handleNavigationCommit = () => {
    closeMobileMenu();
    closeDesktopMenu();
  };

  const handlePrimaryNavigation = () => {
    resetAppScrollToTop();
    handleNavigationCommit();
  };

  useEffect(() => {
    const readScrollTop = () => {
      const scrollContainer = document.querySelector(".app-scroll-container") as HTMLElement | null;
      return scrollContainer ? scrollContainer.scrollTop : window.scrollY;
    };

    const onScroll = () => {
      setScrolled(readScrollTop() > 24);
      closeDesktopMenu();
    };

    const scrollContainer = document.querySelector(".app-scroll-container");
    onScroll();

    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", onScroll, { passive: true });
      return () => scrollContainer.removeEventListener("scroll", onScroll);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    closeMobileMenu();
    closeDesktopMenu();
  }, [location.pathname, location.hash]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  return (
    <motion.header className={`app-header container-fluid${scrolled ? " scrolled" : ""}`} initial={false} animate={{ y: 0 }}>
      <div className="container header-content">
        <Link to="/" className="logo-section" aria-label="XACTUS Onco Home" onClick={handlePrimaryNavigation}>
          <div className="logo">
            <img src={LogoImg} alt="XACTUS Onco" />
          </div>
        </Link>

        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className="nav-desktop" aria-label="Main navigation">
          {navItems.map((item) => (
            <div
              key={item.href}
              className={`nav-item-group${activeDesktopMenu === item.href ? " open" : ""}`}
              onMouseEnter={() => (item.children?.length ? openDesktopMenu(item.href) : closeDesktopMenu())}
              onMouseLeave={queueDesktopMenuClose}
            >
              <NavLink
                to={item.href}
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                onFocus={() => (item.children?.length ? openDesktopMenu(item.href) : closeDesktopMenu())}
                onClick={handlePrimaryNavigation}
              >
                {item.label}
              </NavLink>
              {item.children && item.children.length > 0 ? (
                <div className={`nav-submenu${activeDesktopMenu === item.href ? " open" : ""}`}>
                  {item.children.map((child) => (
                    <NavLink
                      key={item.href + child.hash}
                      to={{ pathname: item.href, hash: child.hash }}
                      className="nav-submenu-link"
                      onClick={handleNavigationCommit}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        {mobileMenuOpen ? (
          <nav className="nav-mobile" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <div key={item.href} className="nav-mobile-group">
                <NavLink
                  to={item.href}
                  className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                  onClick={handlePrimaryNavigation}
                >
                  {item.label}
                </NavLink>
                {item.children?.map((child) => (
                  <NavLink
                    key={item.href + child.hash}
                    to={{ pathname: item.href, hash: child.hash }}
                    className="nav-submenu-link"
                    onClick={handleNavigationCommit}
                  >
                    {child.label}
                  </NavLink>
                ))}
              </div>
            ))}
          </nav>
        ) : null}

        <div className="header-controls">
          <LanguageSelector />
        </div>
      </div>
    </motion.header>
  );
}
