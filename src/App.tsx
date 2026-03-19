import { Fragment, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
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
      <div>
        <Header />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pipeline" element={<Pipeline />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/company" element={<Company />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
