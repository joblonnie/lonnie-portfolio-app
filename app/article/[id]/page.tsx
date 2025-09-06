import { mockPortfolioData } from "@/lib/mock-data"
import ArticlePageClient from "./ArticlePageClient"

export default async function ArticlePage({ params }: { params: { id: string } }) {
  return <ArticlePageClient params={params} />
}

export async function generateStaticParams() {
  return mockPortfolioData.articles.map((article) => ({
    id: article.id,
  }))
}
