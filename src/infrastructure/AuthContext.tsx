import { createContext } from "react"

export interface User {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
}

export interface LoginCredentials {
  username: string
  password: string
}

interface AuthContextType {
  user: User | null
  setUser: (user: User | null) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)