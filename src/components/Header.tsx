import { Button } from "@/components/ui/button"
import { ShoppingCart, ChevronDown, Menu } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link, useLocation } from "@tanstack/react-router"
import { useAuth } from "@/hooks/useAuth"
import { useState } from "react"

export function Header() {
  const { user, logout } = useAuth()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Locations", path: "/locations" },
    { label: "Contacts", path: "/contacts" },
    { label: "Shop", path: "/shop" },
    { label: "Wallet", path: "/wallet" },
  ]

  return (
    <header className={`sticky top-0 z-50 w-full border-b ${location.pathname === '/' ? 'bg-brand-celery/95' : 'bg-white/95'}`}>
      <div className="container mx-auto flex gap-4 h-16 items-center justify-end px-4 md:px-6">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            return (
              <Button
                key={item.label}
                asChild
                variant="ghost"
                className="group gap-2 px-4 text-gray-700 font-brand-sans hover:bg-empty"
              >
                <Link to={item.path} className="relative">
                  {item.label}
                  <span className={`absolute left-0 -bottom-1 w-0 h-1 bg-brand-green rounded-full ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              </Button>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative text-gray-700 hover:text-brand-green hover:bg-empty hover:shadow-md/20">
            <ShoppingCart className="h-5 w-5" />
            <Badge 
              className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 bg-brand-green text-xs font-brand-sans"
            >
              3
            </Badge>
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2 p-1 hover:bg-transparent">
                  <Avatar className="h-8 w-8">
                    <AvatarImage 
                      src={user.image} 
                      alt={user.username}
                    />
                    <AvatarFallback className="bg-gradient-to-br from-green-500 to-emerald-600 text-white font-brand-sans">
                      {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 font-brand-sans">
                <div className="flex items-center gap-3 p-2">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src={user.image} />
                    <AvatarFallback className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                      {user.firstName?.charAt(0)}{user.lastName?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer hover:bg-green-50 focus:bg-green-50">
                  <div className="flex items-center gap-2 w-full">
                    Account Information
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className="cursor-pointer text-red-600 hover:bg-red-50 focus:bg-red-50 focus:text-red-600"
                  onClick={logout}
                >
                  <div className="flex items-center gap-2 w-full">
                    Log out
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button asChild variant="ghost" className="gap-2 font-brand-sans hover:bg-empty hover:shadow-md/20">
              <Link to="/login">
                Sign in
              </Link>
            </Button>
          )}
        </div>

        {isMobileMenuOpen && (
          <div className={`absolute top-16 left-0 right-0 md:hidden ${location.pathname === '/' ? 'bg-brand-celery/95' : 'bg-white/95'} border-b shadow-lg`}>
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  return (
                    <Button
                      key={item.label}
                      asChild
                      variant="ghost"
                      className="group justify-start px-4 py-3 text-gray-700 hover:bg-empty font-brand-sans"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Link to={item.path} className="relative w-full text-left">
                        {item.label}
                        <span className={`absolute left-0 -bottom-1 w-0 h-1 bg-brand-green rounded-full ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                      </Link>
                    </Button>
                  )
                })}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}