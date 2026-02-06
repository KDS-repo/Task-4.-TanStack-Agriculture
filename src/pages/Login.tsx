import { useMutation } from '@tanstack/react-query'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/hooks/useAuth'
import { LoginCredentials } from '@/infrastructure/AuthContext'
import { useNavigate } from '@tanstack/react-router'

export function LoginPage() {
  const { setUser } = useAuth()
  const navigate = useNavigate()
  
  const loginMutation = useMutation({
    mutationFn: async (credentials: LoginCredentials) => {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      })
      
      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Login failed')
      }
      
      return response.json()
    },
    onSuccess: (userData) => {
      setUser(userData)
      navigate({ to: '/' }) // Redirect to home after logging in
    }
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const credentials: LoginCredentials = {
      username: formData.get('username') as string,
      password: formData.get('password') as string
    }
    
    loginMutation.mutate(credentials)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-brand-sans">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            Sign in to Plottr
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="emilys"
                required
                disabled={loginMutation.isPending}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="emilyspass"
                required
                disabled={loginMutation.isPending}
              />
            </div>
            
            {loginMutation.isError && (
              <div className="text-red-600 text-sm bg-red-50 p-3 rounded">
                {loginMutation.error.message}
              </div>
            )}
            
            <Button
              type="submit"
              className="w-full bg-brand-green hover:bg-brand-green hover:shadow-md/20 transition-shadow"
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? 'Signing in...' : 'Sign in'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}