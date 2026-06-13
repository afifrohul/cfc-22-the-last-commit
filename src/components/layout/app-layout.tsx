import { Outlet } from "react-router-dom"

import { DesktopNavigation } from "../navigation/desktop-navigation"
import { MobileNavigation } from "../navigation/mobile-navigation"
import { ModeToggleKey } from "@/components/mode-toogle-key"
import Header from "@/components/header"
import { Separator } from "@/components/ui/separator"

export function AppLayout() {
  return (
    <div className="grid min-h-screen lg:grid-cols-[540px_1fr]">
      <ModeToggleKey />
      <DesktopNavigation />

      <main className="min-w-0">
        <MobileNavigation />

        <div className="flex flex-col min-h-screen w-full max-w-4xl">
          <Header />
          <Separator className=""/>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
