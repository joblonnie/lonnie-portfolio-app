import { ProjectPageClient } from "./ProjectPageClient"

export default function ProjectPage({ params }: { params: { id: string } }) {
  return <ProjectPageClient params={params} />
}

export const dynamic = "force-dynamic"
