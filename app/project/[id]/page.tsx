import { ProjectDetailPage } from "@/components/portfolio/project-detail-page"
import { mockPortfolioData } from "@/lib/mock-data"
import { notFound } from "next/navigation"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const projectId = Number.parseInt(params.id)
  const project = mockPortfolioData.projects.find((p) => p.projectId === projectId)

  if (!project) {
    notFound()
  }

  return <ProjectDetailPage project={project} />
}

export async function generateStaticParams() {
  return mockPortfolioData.projects.map((project) => ({
    id: project.projectId.toString(),
  }))
}
