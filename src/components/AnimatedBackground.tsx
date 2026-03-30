import React, { useEffect, useRef } from 'react'
import { useAppStore } from '../store/useAppStore'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  opacity: number
  life: number
  type: 'hub' | 'node' | 'electron'  // hub: 중앙 노드, node: 원자, electron: 전자
  pulsePhase: number
  orbitIndex: number
}

interface Connection {
  p1: Particle
  p2: Particle
  strength: number  // 결합 강도
}

const COLORS = ['#0077B6', '#00B4D8', '#0096C7', '#0081B4', '#4499DD']
const HUB_COUNT = 1
const NODES_PER_HUB = 5
const ELECTRONS_PER_NODE = 3
const CONNECTION_DISTANCE = 600
const SIZE_MULTIPLIER = 2.5  // 전체 크기 배수 증가
const FIXED_POSITION = Math.random() > 0.5  // true = 오른쪽, false = 왼쪽

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number | undefined>(undefined)
  const reducedMotion = useAppStore((s) => s.reducedMotion)

  useEffect(() => {
    if (reducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize particles - Hierarchical network structure (molecular + neural)
    const createHubParticle = (): Particle => {
      const x = FIXED_POSITION ? canvas.width - 200 : 200
      const y = 150
      return {
        x: x + (Math.random() - 0.5) * 50,
        y: y + (Math.random() - 0.5) * 50,
        vx: (Math.random() - 0.5) * 0.01,  // 매우 느린 움직임
        vy: (Math.random() - 0.5) * 0.01,
        size: (5 + Math.random() * 3) * SIZE_MULTIPLIER,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: 0.4,  // 낮은 투명도 (배경처럼)
        life: 10000,
        type: 'hub',
        pulsePhase: Math.random() * Math.PI * 2,
        orbitIndex: 0,
      }
    }

    const createNodeParticle = (hubX: number, hubY: number, hubColor: string): Particle => ({
      x: hubX + (Math.random() - 0.5) * 400,
      y: hubY + (Math.random() - 0.5) * 400,
      vx: (Math.random() - 0.5) * 0.02,
      vy: (Math.random() - 0.5) * 0.02,
      size: (3 + Math.random() * 2) * SIZE_MULTIPLIER,
      color: hubColor,
      opacity: 0.3,  // 낮은 투명도
      life: 8000,
      type: 'node',
      pulsePhase: Math.random() * Math.PI * 2,
      orbitIndex: 0,
    })

    const createElectronParticle = (nodeX: number, nodeY: number, nodeColor: string): Particle => ({
      x: nodeX + (Math.random() - 0.5) * 150,
      y: nodeY + (Math.random() - 0.5) * 150,
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.08,
      size: (1.5 + Math.random() * 1) * SIZE_MULTIPLIER,
      color: nodeColor,
      opacity: 0.2,  // 매우 낮은 투명도
      life: 3000,
      type: 'electron',
      pulsePhase: Math.random() * Math.PI * 2,
      orbitIndex: Math.floor(Math.random() * 3),
    })

    // Build hierarchical structure
    const hubs: Particle[] = []
    for (let i = 0; i < HUB_COUNT; i++) {
      const hub = createHubParticle()
      hubs.push(hub)
      particlesRef.current.push(hub)

      // Add nodes around hub
      for (let j = 0; j < NODES_PER_HUB; j++) {
        const node = createNodeParticle(hub.x, hub.y, hub.color)
        particlesRef.current.push(node)

        // Add electrons around node
        for (let k = 0; k < ELECTRONS_PER_NODE; k++) {
          const electron = createElectronParticle(node.x, node.y, node.color)
          particlesRef.current.push(electron)
        }
      }
    }

    // Draw molecular bonds and neural connections
    const drawConnections = () => {
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i]
          const p2 = particlesRef.current[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Hub-to-Node: 강한 화학 결합 (분자 구조)
          if ((p1.type === 'hub' && p2.type === 'node') || (p1.type === 'node' && p2.type === 'hub')) {
            if (distance < 450) {
              ctx.strokeStyle = p1.color
              ctx.globalAlpha = 0.5 * Math.max(p1.opacity, p2.opacity)
              ctx.lineWidth = 3 * SIZE_MULTIPLIER  // 두터운 화학 결합
              ctx.beginPath()
              ctx.moveTo(p1.x, p1.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.stroke()
            }
          }
          // Node-to-Electron: 약한 오비탈 (원자 구조)
          else if ((p1.type === 'node' && p2.type === 'electron') || (p1.type === 'electron' && p2.type === 'node')) {
            if (distance < 150) {
              ctx.strokeStyle = p1.color
              ctx.globalAlpha = 0.25 * Math.max(p1.opacity, p2.opacity)
              ctx.lineWidth = 1.2 * SIZE_MULTIPLIER
              ctx.beginPath()
              ctx.moveTo(p1.x, p1.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.stroke()
            }
          }
          // Hub-to-Hub: 신경망 시냅스 (네트워크)
          else if (p1.type === 'hub' && p2.type === 'hub' && distance < CONNECTION_DISTANCE) {
            ctx.strokeStyle = p1.color
            ctx.globalAlpha = (1 - distance / CONNECTION_DISTANCE) * 0.2
            ctx.lineWidth = 1
            ctx.setLineDash([5, 5])
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
            ctx.setLineDash([])
          }
        }
      }
    }

    // Animation loop with hierarchical network dynamics
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connecting lines first
      drawConnections()

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Decrease life
        particle.life--

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Update pulse phase (신경망 활성화 효과)
        particle.pulsePhase += 0.005

        // Calculate opacity based on type and pulse
        let displayOpacity = particle.opacity
        if (particle.type === 'hub') {
          displayOpacity = 0.7 + Math.sin(particle.pulsePhase) * 0.2  // 펄스: ±0.2
        } else if (particle.type === 'node') {
          displayOpacity = 0.5 + Math.sin(particle.pulsePhase * 0.5) * 0.15
        } else if (particle.type === 'electron') {
          displayOpacity = particle.life > 0 ? 0.3 + Math.sin(particle.pulsePhase * 1.5) * 0.2 : 0
        }

        // Draw particle with glow effect
        ctx.fillStyle = particle.color
        ctx.globalAlpha = displayOpacity

        // Main particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()

        // Glow halo (특히 hub에 강함)
        if (particle.type === 'hub' || particle.type === 'node') {
          ctx.fillStyle = particle.color
          ctx.globalAlpha = displayOpacity * 0.3
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 2.5, 0, Math.PI * 2)
          ctx.fill()
        }

        // Regenerate dead electrons
        if (particle.life <= 0 && particle.type === 'electron') {
          const randomNodeIdx = particlesRef.current.findIndex(
            (p) => p.type === 'node' && Math.random() > 0.7
          )
          if (randomNodeIdx !== -1) {
            const refNode = particlesRef.current[randomNodeIdx]
            particlesRef.current[particlesRef.current.indexOf(particle)] = createElectronParticle(
              refNode.x,
              refNode.y,
              refNode.color
            )
          }
        }
      })

      ctx.globalAlpha = 1
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationRef.current!)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [reducedMotion])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
      aria-hidden="true"
    />
  )
}
