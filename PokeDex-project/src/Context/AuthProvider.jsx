import { useState } from 'react'
import { AuthContext } from './AuthContext.jsx'

export default function AuthProvider({ children }) {
  // Initialize state from localStorage
  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem('pokemonAuth')
    return storedAuth === 'true'
  })
  
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('pokemonUser')
    return storedUser ? JSON.parse(storedUser) : null
  })

  const login = (userData) => {
    setAuth(true)
    setUser(userData)
    localStorage.setItem('pokemonAuth', 'true')
    localStorage.setItem('pokemonUser', JSON.stringify(userData))
  }

  const logout = () => {
    setAuth(false)
    setUser(null)
    localStorage.removeItem('pokemonAuth')
    localStorage.removeItem('pokemonUser')
  }

  return (
    <AuthContext.Provider value={{ auth, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
