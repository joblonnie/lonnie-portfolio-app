import { ProjectPageClient } from "./ProjectPageClient"
import { mockPortfolioData } from "@/lib/mock-data"

export default function ProjectPage({ params }: { params: { id: string } }) {
  return <ProjectPageClient params={params} />
}

export async function generateStaticParams() {
  return mockPortfolioData.projects.map((project) => ({
    id: project.projectId.toString(),
  }))
}
