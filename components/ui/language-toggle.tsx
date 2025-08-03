"use client"

import { Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setLanguage(language === "ko" ? "en" : "ko")}
      className="bg-black/20 border-white/30 hover:bg-black/30 text-white backdrop-blur-sm shadow-lg transition-all duration-200 hover:scale-105 relative"
    >
      <Languages className="h-[1.2rem] w-[1.2rem]" />
      <span className="absolute -bottom-1 -right-1 text-[9px] font-bold bg-[#6495ED] text-white rounded-full px-1.5 py-0.5 min-w-[18px] text-center">
        {language.toUpperCase()}
      </span>
      <span className="sr-only">Toggle language</span>
    </Button>
  )
}
