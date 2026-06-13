/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { animationCache } from "@/lib/animation-cache"

type Segment = {
  text: string
  className?: string
}

export default function TypingHeadline({ segments }: { segments: Segment[] }) {
  const fullText = segments.map((s) => s.text).join("")
  const [length, setLength] = useState(() => {
    return animationCache.homeVisited ? fullText.length : 0
  })

  useEffect(() => {
    if (animationCache.homeVisited) {
      return
    }

    const interval = setInterval(() => {
      setLength((prev) => {
        if (prev >= fullText.length) {
          animationCache.homeVisited = true

          clearInterval(interval)
          return prev
        }

        return prev + 1
      })
    }, 50)

    return () => clearInterval(interval)
  }, [fullText])

  let currentLength = 0

  return (
    <h1 className="text-4xl font-black">
      {segments.map((segment, index) => {
        const start = currentLength
        const end = currentLength + segment.text.length

        currentLength = end

        const visibleChars = Math.max(
          0,
          Math.min(length - start, segment.text.length)
        )

        return (
          <span key={index} className={segment.className}>
            {segment.text.slice(0, visibleChars)}
          </span>
        )
      })}

      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{
          repeat: Infinity,
          duration: 0.5,
        }}
      >
        |
      </motion.span>
    </h1>
  )
}
