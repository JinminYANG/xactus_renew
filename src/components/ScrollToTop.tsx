import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop(){
  const { pathname } = useLocation()
  useEffect(() => {
    // Scroll to top on route change
    if (typeof window !== 'undefined') {
      const scrollContainer = document.querySelector('.app-scroll-container')
      if (scrollContainer) {
        scrollContainer.scrollTop = 0
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      }
    }
  }, [pathname])

  return null
}
