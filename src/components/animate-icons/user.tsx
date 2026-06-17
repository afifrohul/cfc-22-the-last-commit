import type { Variants } from "motion/react"
import { motion } from "motion/react"
import type { HTMLAttributes } from "react"
import { forwardRef } from "react"

import { cn } from "@/lib/utils"

interface UserIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

const PATH_VARIANT: Variants = {
  normal: {
    pathLength: 0,
    opacity: 0,
    pathOffset: 1,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    pathOffset: 0,
    transition: {
      duration: 1,
      delay: 0.2,
    },
  },
}

const CIRCLE_VARIANT: Variants = {
  normal: {
    pathLength: 0,
    pathOffset: 1,
    scale: 0.5,
  },
  animate: {
    pathLength: 1,
    pathOffset: 0,
    scale: 1,
    transition: {
      duration: 1.2,
    },
  },
}

const UserIcon = forwardRef<HTMLDivElement, UserIconProps>(
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
          <motion.circle
            cx="12"
            cy="8"
            r="5"
            variants={CIRCLE_VARIANT}
            initial="normal"
            animate="animate"
          />

          <motion.path
            d="M20 21a8 8 0 0 0-16 0"
            variants={PATH_VARIANT}
            initial="normal"
            animate="animate"
          />
        </svg>
      </div>
    )
  }
)

UserIcon.displayName = "UserIcon"

export { UserIcon }
