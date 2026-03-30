import { Fragment, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

// Footer를 Home 페이지에서 스냅 대상으로 제어하기 위해 ID 설정
import ScrollToTop from './components/ScrollToTop'
import MotionProvider from './components/MotionProvider'
import Home from './pages/Home'
import Pipeline from './pages/Pipeline'
import Platform from './pages/Platform'
import Company from './pages/Company'

export default function App(){
  // keep small local state example
  const [count, setCount] = useState(0)

  // GitHub Pages용 basename 설정 (프로덕션에서만)
  const basename = import.meta.env.PROD ? '/xactus_renew/' : '/'

  return (
    <BrowserRouter basename={basename}>
      <div className="app-scroll-container">
        <Header />

        <main className="app-main">
          <MotionProvider />
          <AnimatedRoutes />
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  )
}

function AnimatedRoutes(){
  const location = useLocation()
  const pageVariants = {
    initial: { opacity: 0, y: 8, scale: 0.998 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -6, scale: 0.998 }
  }

  const pageTransition = { duration: 0.32 }

  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}><Home /></motion.div>} />
        <Route path="/pipeline" element={<motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}><Pipeline /></motion.div>} />
        <Route path="/platform" element={<motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}><Platform /></motion.div>} />
        <Route path="/company" element={<motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}><Company /></motion.div>} />
      </Routes>
    </AnimatePresence>
  )
}
