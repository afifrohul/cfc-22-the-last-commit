import { Outlet } from "react-router-dom"

import { DesktopNavigation } from "../navigation/desktop-navigation"
import { MobileNavigation } from "../navigation/mobile-navigation"
import { ModeToggleKey } from "@/components/mode-toogle-key"

export function AppLayout() {
  return (
    <div className="grid min-h-screen lg:grid-cols-[540px_1fr]">
      <ModeToggleKey/>
      <DesktopNavigation />

      <main className="min-w-0">
        <MobileNavigation />

        <div className="mx-auto w-full max-w-4xl px-6 py-10">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
