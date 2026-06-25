import { useState, useEffect } from 'react'
import { ThemeContext } from './ThemeContext.jsx'

export default function ThemeProvider({ children }) {
  // Initialize theme from localStorage
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('pokemonTheme')
    return storedTheme || 'light'
  })

  // Apply theme on mount and when it changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('pokemonTheme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
