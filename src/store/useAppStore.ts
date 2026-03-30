import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  token: string | null
  setToken: (token: string | null) => void

  isDarkMode: boolean
  toggleDarkMode: () => void

  language: 'ko' | 'en'
  setLanguage: (lang: 'ko' | 'en') => void

  // Motion / accessibility
  reducedMotion: boolean
  toggleReducedMotion: () => void

  logout: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),

      isDarkMode: true,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

      language: 'en' as const,
      setLanguage: (language) => set({ language }),

      reducedMotion: false,
      toggleReducedMotion: () => set((state) => ({ reducedMotion: !state.reducedMotion })),

      logout: () => set({ token: null }),
    }),
    {
      name: 'app-storage-v2',
    },
  ),
)
