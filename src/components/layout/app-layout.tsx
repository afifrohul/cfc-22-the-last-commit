import { Outlet } from "react-router-dom"

import { DesktopNavigation } from "../navigation/desktop-navigation"
import { MobileNavigation } from "../navigation/mobile-navigation"
import { ModeToggleKey } from "@/components/mode-toogle-key"
import Header from "@/components/header"
import { Separator } from "@/components/ui/separator"
import { motion } from "motion/react"

export function AppLayout() {
  return (
    <div className="grid min-h-screen lg:grid-cols-[540px_1fr]">
      <ModeToggleKey />
      <DesktopNavigation />

      <main className="min-w-0">
        <MobileNavigation />

        <motion.div
          className="flex min-h-screen w-full max-w-4xl flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Header />
          <Separator className="" />
          <Outlet />
        </motion.div>
      </main>
    </div>
  )
}
