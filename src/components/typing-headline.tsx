/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { animationCache } from "@/lib/animation-cache"

type Segment = {
  text: string
  className?: string
}

type TypingHeadlineProps = {
  segments: Segment[]
  cacheKey: string
}

export default function TypingHeadline({
  segments,
  cacheKey,
}: TypingHeadlineProps) {
  const fullText = segments.map((s) => s.text).join("")
  const [length, setLength] = useState(() => {
    return animationCache[cacheKey] ? fullText.length : 0
  })

  useEffect(() => {
    if (animationCache[cacheKey]) {
      return
    }

    const interval = setInterval(() => {
      setLength((prev) => {
        if (prev >= fullText.length) {
          animationCache[cacheKey] = true

          clearInterval(interval)
          return prev
        }

        return prev + 1
      })
    }, 50)

    return () => clearInterval(interval)
  }, [cacheKey, fullText])

  let currentLength = 0

  return (
    <h1 className="text-xl font-black md:text-4xl">
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
