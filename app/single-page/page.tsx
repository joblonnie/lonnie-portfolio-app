"use client"

import { Suspense } from "react"
import { SinglePagePortfolio } from "@/components/portfolio/single-page-portfolio"

function SinglePageContent() {
  return <SinglePagePortfolio />
}

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  )
}

export default function SinglePageView() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SinglePageContent />
    </Suspense>
  )
}
