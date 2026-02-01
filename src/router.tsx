import { createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router'
import { Header } from '@/elements/Header'
import { HomePage } from '@/pages/HomePage'
import { ShopPage } from './pages/Shop'

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

const shopRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/shop',
  component: ShopPage,
})

// This organizes '/' and 'shop' into '/shop'
const routeTree = rootRoute.addChildren([indexRoute, shopRoute])

export const router = createRouter({ routeTree })

// TS interface for safe imports
declare module '@tanstack/react-router' {
  interface Qqq {
    router: typeof router
  }
}