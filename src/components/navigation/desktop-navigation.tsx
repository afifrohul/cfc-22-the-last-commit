import { NavLink } from "react-router-dom"
import { NAV_ITEMS } from "./navigation-menu"
import clsx from "clsx"

export function DesktopNavigation() {
  return (
    <aside className="hidden border-r lg:block">
      <div className="sticky top-0 flex h-screen items-center px-16">
        <nav className="flex flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.href} to={item.href}>
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
                  {isActive && (
                    <div className="h-3 w-3 bg-rose-500" />
                  )}
                </div>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  )
}
