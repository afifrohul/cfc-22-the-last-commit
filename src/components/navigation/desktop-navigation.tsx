import { NavLink } from "react-router-dom"
import { NAV_ITEMS } from "./navigation-menu"
import clsx from "clsx"
import { motion } from "motion/react"

export function DesktopNavigation() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.1,
      },
    },
  }

  const child = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
    },
  }
  return (
    <aside className="hidden border-r lg:block">
      <div className="sticky top-0 flex h-screen items-center px-16">
        <motion.nav
          className="flex flex-col gap-6"
          initial="hidden"
          animate="show"
          variants={container}
        >
          {NAV_ITEMS.map((item, index) => (
            <motion.div key={index} variants={child}>
              <NavLink to={item.href}>
                {({ isActive }) => (
                  <div
                    className={clsx(
                      "relative block flex w-fit items-center gap-4 text-5xl font-black tracking-tight transition-colors duration-300",
                      "after:absolute after:-bottom-2 after:left-0 after:h-0.75 after:w-full",
                      "after:origin-left after:scale-x-0 after:bg-rose-600",
                      "after:transition-transform after:duration-300",
                      "hover:after:scale-x-100",
                      !isActive && "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <div>{item.title}</div>
                    {isActive && <div className="h-3 w-3 bg-rose-500" />}
                  </div>
                )}
              </NavLink>
            </motion.div>
          ))}
        </motion.nav>
      </div>
    </aside>
  )
}
