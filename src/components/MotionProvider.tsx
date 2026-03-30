import { useEffect } from 'react'
import { useAppStore } from '../store/useAppStore'

export default function MotionProvider(){
  const reducedMotion = useAppStore((s) => s.reducedMotion)

  useEffect(()=>{
    const prefers = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion || prefers) {
      document.documentElement.classList.add('reduced-motion')
    } else {
      document.documentElement.classList.remove('reduced-motion')
    }
  },[reducedMotion])

  return null
}
