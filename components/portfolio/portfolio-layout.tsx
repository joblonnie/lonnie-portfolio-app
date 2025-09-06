"use client"
import { Suspense } from "react"
import { IntroductionPage } from "./introduction-page"

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  )
}

function PortfolioContent() {
  return (
    <div className="min-h-screen bg-white">
      <IntroductionPage />
    </div>
  )
}

export function PortfolioLayout() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <PortfolioContent />
    </Suspense>
  )
}
