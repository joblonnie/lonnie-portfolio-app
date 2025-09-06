"use client"

import { Suspense } from "react"
import { ArticleListPage } from "@/components/portfolio/article-list-page"

function ArticleListContent() {
  return <ArticleListPage />
}

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
    </div>
  )
}

export default function ArticlePage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ArticleListContent />
    </Suspense>
  )
}
