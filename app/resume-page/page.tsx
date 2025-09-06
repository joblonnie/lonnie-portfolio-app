"use client"

import { Suspense } from "react"
import { RapporlabsResumePageLayout } from "@/components/resume/rapportlabs-resume"

function ResumeContent() {
  return <RapporlabsResumePageLayout />
}

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  )
}

export default function ResumePage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ResumeContent />
    </Suspense>
  )
}
