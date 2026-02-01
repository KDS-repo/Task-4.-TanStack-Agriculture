import { createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router'
import { Header } from '@/Header'
import { HomePage } from '@/HomePage'

// Similar to RTK Router, it is a utility element, a base for routing in the app
const RootComponent = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
    </div>
  )
}

const rootRoute = createRootRoute({
  component: RootComponent,
})

// component will be displayed in the <Outlet>
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

// This organizes '/' and 'shop' into '/shop'
const routeTree = rootRoute.addChildren([indexRoute])

export const router = createRouter({ routeTree })

// TS interface for safe imports
declare module '@tanstack/react-router' {
  interface Qqq {
    router: typeof router
  }
}