import { Button } from "@/components/ui/button"
import { ShoppingCart, User, ChevronDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  const navItems = [
    { label: "Home"},
    { label: "My plots"},
    { label: "Contacts"},
    { label: "Shop"},
    { label: "Wallet"},
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-end px-4 md:px-6">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            return (
              <Button
                key={item.label}
                variant="ghost"
                className="gap-2 px-4 text-gray-700 hover:text-green-600 hover:bg-green-50"
              >
                {item.label}
              </Button>
            )
          })}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-3">
          {/* Cart with Badge */}
          <Button variant="ghost" size="icon" className="relative text-gray-700 hover:text-green-600">
            <ShoppingCart className="h-5 w-5" />
            <Badge 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-green-600 text-xs border-2 border-white"
            >
              3
            </Badge>
          </Button>

          {/* Account Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 hover:bg-green-50">
                <Avatar className="h-8 w-8">
                  <AvatarImage 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" 
                    alt="User"
                  />
                  <AvatarFallback className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                    JD
                  </AvatarFallback>
                </Avatar>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <div className="flex items-center gap-3 p-2">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
                  <AvatarFallback className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                    JD
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">John Doe</p>
                  <p className="text-xs text-gray-500">john@example.com</p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer hover:bg-green-50 focus:bg-green-50">
                <div className="flex items-center gap-2 w-full">
                  Account Information
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer text-red-600 hover:bg-red-50 focus:bg-red-50 focus:text-red-600">
                <div className="flex items-center gap-2 w-full">
                  Log out
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  )
}