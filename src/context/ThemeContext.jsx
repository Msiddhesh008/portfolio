import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'portfolio-theme'

const ThemeContext = createContext(null)

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getStoredTheme() {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'light' || stored === 'dark' ? stored : null
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'light' ? '#ffffff' : '#000000')
}

/** Provides light/dark theme with localStorage persistence. */
export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => getStoredTheme() ?? getSystemTheme())

  useEffect(() => {
    applyTheme(theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => {
      if (!getStoredTheme()) {
        setThemeState(getSystemTheme())
      }
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = () => setThemeState((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark: theme === 'dark' }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
