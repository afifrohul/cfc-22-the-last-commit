"use client"

import type { Variants } from "motion/react"
import { motion } from "motion/react"
import type { HTMLAttributes } from "react"
import { forwardRef } from "react"

import { cn } from "@/lib/utils"

interface GraduationCapIconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

const CAP_VARIANTS: Variants = {
  normal: {
    rotate: 0,
  },
  animate: {
    y: [0, -5, 0],
    rotate: [0, -2, 2, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
}

const TASSEL_VARIANTS: Variants = {
  normal: { rotate: 0 },
  animate: {
    rotate: [0, 15, -10, 5, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.1,
    },
  },
}

const GraduationCapIcon = forwardRef<HTMLDivElement, GraduationCapIconProps>(
  ({ className, size = 28, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(className)} {...props}>
        <svg
          fill="none"
          height={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.g
            animate="animate"
            style={{ transformOrigin: "12px 12px" }}
            variants={CAP_VARIANTS}
          >
            <path d="M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />

            {/* Tassel now inherits cap movement */}
            <motion.path
              d="M22 10v6"
              style={{
                transformBox: "fill-box",
                transformOrigin: "top center",
              }}
              variants={TASSEL_VARIANTS}
            />
          </motion.g>
        </svg>
      </div>
    )
  }
)

GraduationCapIcon.displayName = "GraduationCapIcon"

export { GraduationCapIcon }
