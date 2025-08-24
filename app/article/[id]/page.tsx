import { ArticleDetailPage } from "@/components/portfolio/article-detail-page"
import { mockPortfolioData } from "@/lib/mock-data"
import { notFound } from "next/navigation"

interface ArticlePageProps {
  params: {
    id: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = mockPortfolioData.articles.find((a) => a.id === params.id)

  if (!article) {
    notFound()
  }

  return <ArticleDetailPage article={article} />
}

export async function generateStaticParams() {
  return mockPortfolioData.articles.map((article) => ({
    id: article.id,
  }))
}
