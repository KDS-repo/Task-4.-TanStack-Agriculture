import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, renderHook, act, fireEvent } from '@testing-library/react'
import { Header } from '@/components/Header'

// Mock the function that is called when some Links are clicked so it can be tracked
const mockNavigate = vi.fn()

vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    user: null,
    logout: vi.fn(),
  }),
}))

// Mock TanStack Router's useLocation
vi.mock('@tanstack/react-router', async () => ({
  useLocation: () => ({
    pathname: '/',
  }),
  useNavigate: () => mockNavigate,
  Link: ({ to, children, ...props }: any) => (
    <a 
      href={to} 
      onClick={(e) => {
        e.preventDefault() // Prevent actual navigation
        mockNavigate(to)    // Track where it would navigate
      }} 
      {...props}
    >
      {children}
    </a>
  ),
}))

// An environment inside of which testing will occur. If it was necessary to use, say, AuthProvider, it would go here
// AuthProvider is not necessary though, because I mock the useAuth hook
const TestWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  )
}

describe('Header Component', () => {
  beforeEach(() => {
    // Reset ALL mocks between tests
    vi.clearAllMocks()
  })

  it('renders navigation items correctly', () => {
    render(
      <TestWrapper>
        <Header />
      </TestWrapper>
    )
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Locations')).toBeInTheDocument()
    expect(screen.getByText('Shop')).toBeInTheDocument()
    expect(screen.getByText('Wallet')).toBeInTheDocument()
  })
  
  it('shows Sign in button when user is not logged in', () => {
    render(
    <TestWrapper>
        <Header />
    </TestWrapper>
    )
    expect(screen.getByText('Sign in')).toBeInTheDocument()
  })

  it('sign in button functional', () => {
    render(
    <TestWrapper>
      <Header />
    </TestWrapper>
    )

    const loginButton = screen.getByText('Sign in')

    if (loginButton) {
      fireEvent.click(loginButton)
      expect(mockNavigate).toHaveBeenCalledTimes(1)
    } else {
      throw new Error('Log out button not found')
    }
  })
})