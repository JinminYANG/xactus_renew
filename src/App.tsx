import { useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MotionProvider from "./components/MotionProvider";
import Home from "./pages/Home";
import Pipeline from "./pages/Pipeline";
import Platform from "./pages/Platform";
import Company from "./pages/Company";
import Newsroom from "./pages/Newsroom";
import Contact from "./pages/Contact";

export default function App() {
  const basename = import.meta.env.PROD ? "/xactus_renew/" : "/";
  return (
    <BrowserRouter basename={basename}>
      <AppShell />
    </BrowserRouter>
  );
}

function AppShell() {
  return (
    <>
      <div id="app-scroll-container" className="app-scroll-container">
        <Header />
        <main className="app-main">
          <MotionProvider />
          <AnimatedRoutes />
          <Footer />
          <ScrollToTop />
        </main>
      </div>
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  const pageVariants = {
    initial: { opacity: 0.985 },
    animate: { opacity: 1 },
  };

  const pageTransition = { duration: 0.18, ease: "easeOut" as const };

  const withPageMotion = (content: ReactNode) => (
    <RouteViewport key={`${location.pathname}${location.hash}`}>
      <motion.div
        className="route-shell"
        data-route-shell="true"
        initial="initial"
        animate="animate"
        variants={pageVariants}
        transition={pageTransition}
      >
        {content}
      </motion.div>
    </RouteViewport>
  );

  return (
    <Routes location={location}>
      <Route path="/" element={withPageMotion(<Home />)} />
      <Route path="/about" element={withPageMotion(<Company />)} />
      <Route path="/technology" element={withPageMotion(<Platform />)} />
      <Route path="/pipeline" element={withPageMotion(<Pipeline />)} />
      <Route path="/newsroom" element={withPageMotion(<Newsroom />)} />
      <Route path="/contact" element={withPageMotion(<Contact />)} />
      <Route path="/company" element={<Navigate to="/about" replace />} />
      <Route path="/platform" element={<Navigate to="/technology" replace />} />
    </Routes>
  );
}

function RouteViewport({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation();
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const scrollContainer = document.getElementById("app-scroll-container") as HTMLElement | null;
    const wrapper = wrapperRef.current;
    const targetHash = hash.replace("#", "");
    let alignFrameId = 0;
    let snapFrameId = 0;
    let observerTimeoutId = 0;

    if (!wrapper) {
      return;
    }

    const requestSnapRestore = () => {
      window.cancelAnimationFrame(snapFrameId);
      snapFrameId = window.requestAnimationFrame(() => {
        if (scrollContainer) {
          scrollContainer.classList.add("snap-ready");
        }
      });
    };

    const alignViewport = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      if (!scrollContainer) {
        return;
      }

      scrollContainer.classList.remove("snap-ready");
      scrollContainer.scrollTop = 0;
      scrollContainer.scrollLeft = 0;

      if (targetHash) {
        const target = wrapper.querySelector<HTMLElement>(`#${targetHash}`) ?? document.getElementById(targetHash);

        if (target instanceof HTMLElement) {
          const containerRect = scrollContainer.getBoundingClientRect();
          const targetRect = target.getBoundingClientRect();
          const offset = targetRect.top - containerRect.top + scrollContainer.scrollTop;
          scrollContainer.scrollTop = Math.max(0, offset);
        }
      }

      requestSnapRestore();
    };

    alignViewport();
    alignFrameId = window.requestAnimationFrame(alignViewport);

    const observer = new MutationObserver(() => {
      const hasSection = wrapper.querySelector(".section-wrapper");
      const hasHashTarget = targetHash ? wrapper.querySelector(`#${targetHash}`) : true;

      if (!hasSection || !hasHashTarget) {
        return;
      }

      window.cancelAnimationFrame(alignFrameId);
      alignFrameId = window.requestAnimationFrame(alignViewport);
    });

    observer.observe(wrapper, { childList: true, subtree: true });
    observerTimeoutId = window.setTimeout(() => {
      observer.disconnect();
    }, 2000);

    return () => {
      observer.disconnect();
      window.clearTimeout(observerTimeoutId);
      window.cancelAnimationFrame(alignFrameId);
      window.cancelAnimationFrame(snapFrameId);
    };
  }, [pathname, hash]);

  return <div ref={wrapperRef}>{children}</div>;
}
