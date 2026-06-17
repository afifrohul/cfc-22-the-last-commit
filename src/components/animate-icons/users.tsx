import type { Variants } from "motion/react"
import { motion } from "motion/react"
import type { HTMLAttributes } from "react"
import { forwardRef } from "react"

import { cn } from "@/lib/utils"

interface UsersIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

const PATH_VARIANTS: Variants = {
  normal: {
    translateX: -6,
  },
  animate: {
    translateX: 0,
    transition: {
      delay: 0.1,
      duration: 1,
    },
  },
}

const UsersIcon = forwardRef<HTMLDivElement, UsersIconProps>(
  ({ className, size = 28, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(className)} {...props}>
        <svg
          fill="none"
          height={size}
          width={size}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />

          <circle cx="9" cy="7" r="4" />

          <motion.path
            d="M22 21v-2a4 4 0 0 0-3-3.87"
            variants={PATH_VARIANTS}
            initial="normal"
            animate="animate"
          />

          <motion.path
            d="M16 3.13a4 4 0 0 1 0 7.75"
            variants={PATH_VARIANTS}
            initial="normal"
            animate="animate"
          />
        </svg>
      </div>
    )
  }
)

UsersIcon.displayName = "UsersIcon"

export { UsersIcon }
