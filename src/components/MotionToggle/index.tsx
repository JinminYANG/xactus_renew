import React from 'react'
import { useAppStore } from '../../store/useAppStore'
import './MotionToggle.css'

export default function MotionToggle(){
  const reduced = useAppStore((s) => s.reducedMotion)
  const toggle = useAppStore((s) => s.toggleReducedMotion)

  return (
    <button className="motion-toggle-btn" aria-pressed={reduced} onClick={toggle} title={reduced ? 'Enable animations' : 'Reduce motion'}>
      {reduced ? '🔇' : '✨'}
    </button>
  )
}
