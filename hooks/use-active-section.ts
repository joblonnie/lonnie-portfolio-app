"use client"

import { useEffect, useState } from "react"

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("intro")

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only update if the section is significantly visible
            if (entry.intersectionRatio > 0.3) {
              setActiveSection(entry.target.id)
            }
          }
        })
      },
      {
        threshold: [0.3, 0.7],
        rootMargin: "-20% 0px -20% 0px",
      },
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  return activeSection
}
