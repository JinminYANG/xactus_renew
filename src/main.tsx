import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/global.css'
import App from './App.tsx'
import { useAppStore } from './store/useAppStore'
import AppBackground from './assets/images/bg_clear_sky.png'
import HomeHero from '../docs/site_image_0616/usable_assets/hero_backgrounds/home_hero_molecules.png'
import AboutHero from '../docs/site_image_0616/usable_assets/hero_backgrounds/about_hero_sunset.png'
import TechnologyHero from '../docs/site_image_0616/usable_assets/hero_backgrounds/technology_hero_lab.png'
import PipelineHero from '../docs/site_image_0616/usable_assets/hero_backgrounds/pipeline_hero_microscope.png'
import NewsroomHero from '../docs/site_image_0616/usable_assets/hero_backgrounds/newsroom_hero_generated_v3_balanced.png'
import ContactHero from '../docs/site_image_0616/usable_assets/hero_backgrounds/contact_hero_generated_v3_sage.png'

function preloadImage(href: string) {
  const existing = document.head.querySelector(`link[rel="preload"][href="${href}"]`)
  if (!existing) {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = href
    document.head.appendChild(link)
  }

  const image = new Image()
  image.src = href
}

const heroImages = [
  AppBackground,
  HomeHero,
  AboutHero,
  TechnologyHero,
  PipelineHero,
  NewsroomHero,
  ContactHero,
]

heroImages.forEach(preloadImage)

function Root() {
  const isDark = useAppStore((s) => s.isDarkMode)
  const language = useAppStore((s) => s.language)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return <App />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
