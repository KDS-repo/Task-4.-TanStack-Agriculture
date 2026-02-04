import { useContext } from "react"
import { AuthContext } from "@/infrastructure/AuthContext"

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}