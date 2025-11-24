"use client"

import { Suspense } from "react"
import { ProjectDetailPage } from "@/components/portfolio/project-detail-page"
import { mockPortfolioData } from "@/lib/mock-data"
import { notFound } from "next/navigation"

interface ProjectPageProps {
  id: string
}

function ProjectPageContent({ id }: ProjectPageProps) {
  const projectId = Number.parseInt(id, 10)

  console.log("[v0] Project ID from URL:", id)
  console.log("[v0] Parsed Project ID:", projectId)
  console.log(
    "[v0] Available projects:",
    mockPortfolioData.projects.map((p) => p.projectId),
  )

  if (Number.isNaN(projectId)) {
    console.log("[v0] Invalid project ID:", id)
    notFound()
  }

  const project = mockPortfolioData.projects.find((p) => p.projectId === projectId)

  if (!project) {
    console.log("[v0] Project not found for ID:", projectId)
    notFound()
  }

  return <ProjectDetailPage project={project} />
}

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  )
}

export function ProjectPageClient({ id }: { id: string }) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ProjectPageContent id={id} />
    </Suspense>
  )
}
