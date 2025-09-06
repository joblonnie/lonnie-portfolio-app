"use client"

import { Suspense } from "react"
import { ArticleDetailPage } from "@/components/portfolio/article-detail-page"
import { mockPortfolioData } from "@/lib/mock-data"
import { notFound } from "next/navigation"

interface ArticlePageProps {
  params: {
    id: string
  }
}

function ArticlePageContent({ params }: ArticlePageProps) {
  const article = mockPortfolioData.articles.find((a) => a.id === params.id)

  if (!article) {
    notFound()
  }

  return <ArticleDetailPage article={article} />
}

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  )
}

export default function ArticlePageClient({ params }: ArticlePageProps) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ArticlePageContent params={params} />
    </Suspense>
  )
}
