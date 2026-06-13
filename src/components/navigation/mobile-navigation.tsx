import { Menu } from "lucide-react"
import { NavLink } from "react-router-dom"

import { Button } from "@/components/ui/button"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { NAV_ITEMS } from "./navigation-menu"

export function MobileNavigation() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background lg:hidden">
      <div className="flex h-14 items-center justify-between px-4">
        <span className="font-semibold">MENU</span>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>

          <SheetContent side="left">
            <nav className="mt-12 ml-4 flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.href} to={item.href}>
                  {({ isActive }) => (
                    <div className="flex items-center gap-3 text-xl font-black">
                      <div>{item.title}</div>
                      {isActive && <div className="h-2 w-2 bg-rose-500" />}
                    </div>
                  )}
                </NavLink>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
