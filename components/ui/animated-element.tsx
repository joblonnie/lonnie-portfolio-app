"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedElementProps {
  children: React.ReactNode
  animation?: "fadeIn" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scaleIn"
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  triggerOnce?: boolean
}

export function AnimatedElement({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 300, // 500ms에서 300ms로 단축
  className,
  threshold = 0.1,
  triggerOnce = true,
}: AnimatedElementProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)

          if (triggerOnce) {
            observer.unobserve(entry.target)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -30px 0px", // -50px에서 -30px로 변경하여 더 빨리 트리거
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [delay, threshold, triggerOnce])

  const getAnimationClasses = () => {
    const baseClasses = "transition-all ease-out"
    const durationClass = `duration-${duration}`

    if (!isVisible) {
      switch (animation) {
        case "fadeIn":
          return `${baseClasses} ${durationClass} opacity-0`
        case "slideUp":
          return `${baseClasses} ${durationClass} opacity-0 translate-y-6` // translate-y-8에서 translate-y-6으로 단축
        case "slideDown":
          return `${baseClasses} ${durationClass} opacity-0 -translate-y-6`
        case "slideLeft":
          return `${baseClasses} ${durationClass} opacity-0 translate-x-6`
        case "slideRight":
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-6`
        case "scaleIn":
          return `${baseClasses} ${durationClass} opacity-0 scale-95`
        default:
          return `${baseClasses} ${durationClass} opacity-0`
      }
    }

    return `${baseClasses} ${durationClass} opacity-100 translate-x-0 translate-y-0 scale-100`
  }

  return (
    <div ref={elementRef} className={cn(getAnimationClasses(), className)}>
      {children}
    </div>
  )
}
