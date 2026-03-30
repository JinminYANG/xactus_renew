import React, { useState, useEffect, useRef } from 'react'
import './DotNavigation.css'

interface DotNavigationProps {
  sections: { id: string; label: string; shortLabel?: string }[]
}

export default function DotNavigation({ sections }: DotNavigationProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const isScrollingRef = useRef(false)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // IntersectionObserver로 현재 활성 섹션 추적
    const scrollContainer = document.querySelector('.app-scroll-container')
    
    const observerOptions = {
      root: scrollContainer,
      rootMargin: '0px',
      threshold: 0.6, // threshold 높여서 더 명확한 중앙 감지
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // 클릭 중에는 옵저버 무시
      if (isScrollingRef.current) {
        return
      }

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sections.findIndex((s) => s.id === entry.target.id)
          if (index !== -1) {
            setActiveIndex(index)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // 모든 섹션을 관찰
    sections.forEach((section) => {
      const element = document.getElementById(section.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [sections])

  const handleDotClick = (index: number) => {
    const sectionId = sections[index].id
    const element = document.getElementById(sectionId)
    if (!element) return

    // 즉시 active 상태 반영
    isScrollingRef.current = true
    setActiveIndex(index)

    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)

    const scrollContainer = document.querySelector('.app-scroll-container') as HTMLElement | null
    const scrollTarget: EventTarget = scrollContainer ?? window

    const releaseRef = () => {
      isScrollingRef.current = false
    }

    // scrollend 이벤트 지원 시 정확한 타이밍으로 lock 해제 (모바일 포함)
    const supportsScrollEnd = 'onscrollend' in window
    if (supportsScrollEnd) {
      scrollTarget.addEventListener('scrollend', releaseRef, { once: true } as AddEventListenerOptions)
    }
    // fallback: 최대 2초 후 강제 해제
    scrollTimeoutRef.current = setTimeout(releaseRef, supportsScrollEnd ? 2000 : 1500)

    if (scrollContainer) {
      // 정확한 offset: container 상단 기준 상대 위치
      const containerRect = scrollContainer.getBoundingClientRect()
      const elementRect = element.getBoundingClientRect()
      const offset = elementRect.top - containerRect.top + scrollContainer.scrollTop
      scrollContainer.scrollTo({ top: offset, behavior: 'smooth' })
    } else {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="dot-navigation" role="navigation" aria-label="Section navigation">
      {/* Active section label - displayed vertically alongside dots */}
      <div className="dot-nav-label" aria-hidden="true">
        <span className="dot-nav-num">{String(activeIndex + 1).padStart(2, '0')}</span>
        <span className="dot-nav-sep"> / </span>
        <span className="dot-nav-name">
          {sections[activeIndex]?.shortLabel ?? sections[activeIndex]?.label?.split(' ')[0]?.toUpperCase() ?? ''}
        </span>
      </div>
      {sections.map((section, index) => (
        <button
          key={section.id}
          className={`dot ${index === activeIndex ? 'active' : ''}`}
          onClick={() => handleDotClick(index)}
          aria-label={`Go to ${section.label}`}
          title={section.shortLabel ?? section.label}
          type="button"
        />
      ))}
    </div>
  )
}
