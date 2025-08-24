"use client"

import { useRouter } from "next/navigation"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { mockPortfolioData } from "@/lib/mock-data"

export function ArticleListPage() {
  const router = useRouter()

  const handleArticleClick = (articleId: string) => {
    router.push(`/article/${articleId}`)
  }

  const handleGoBack = () => {
    router.push("/")
  }

  // 최신순(내림차순) 정렬
  const sorted = [...mockPortfolioData.articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="min-h-screen bg-background">
      {/* 상단 컨트롤 */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {/* 헤더 */}
        <div className="mb-12">
          <Button variant="ghost" className="mb-6 hover:bg-gray-100" onClick={handleGoBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            홈으로 돌아가기
          </Button>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Article</h1>
            <p className="text-gray-600 dark:text-gray-400 text-base">
              실무에서 직접 경험하고 정리한 참고 자료와 생산성 팁을 공유합니다.
            </p>
          </div>
        </div>

        {/* 아티클 목록 */}
        <div className="flex flex-col gap-8">
          {sorted.map((article) => (
            <article
              key={article.id}
              className="border-b pb-8 last:border-b-0 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 p-4 rounded-lg transition-colors"
              onClick={() => handleArticleClick(article.id)}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-gray-400">
                  {new Date(article.date).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <span className="text-xs text-gray-400">•</span>
                <span className="text-xs text-gray-400">{article.category}</span>
              </div>
              <h2 className="text-2xl font-semibold text-lime-600 dark:text-lime-400 hover:underline mb-2">
                {article.title}
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 mt-2 mb-3">{article.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-block text-sm text-lime-500 dark:text-lime-400 hover:underline mt-1">
                자세히 →
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
