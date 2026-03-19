import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
  token: string | null
  setToken: (token: string | null) => void

  isDarkMode: boolean
  toggleDarkMode: () => void

  language: 'ko' | 'en'
  setLanguage: (lang: 'ko' | 'en') => void

  logout: () => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),

      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

      language: 'ko',
      setLanguage: (language) => set({ language }),

      logout: () => set({ token: null }),
    }),
    {
      name: 'app-storage',
    },
  ),
)
