"use client"

import { useRouter } from "next/navigation"
import { mockPortfolioData } from "@/lib/mock-data"

const ArticlePage = () => {
  const router = useRouter()

  const handleArticleClick = (articleId: string) => {
    router.push(`/article/${articleId}`)
  }

  // 최신순(내림차순) 정렬
  const sorted = [...mockPortfolioData.articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <p className="text-center text-muted-foreground mb-12 text-base">
        실무에서 직접 경험하고 정리한 참고 자료와 생산성 팁을 공유합니다.
      </p>
      <div className="flex flex-col gap-8">
        {sorted.map((article) => (
          <article
            key={article.id}
            className="border-b pb-8 last:border-b-0 cursor-pointer"
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
            </div>
            <h2 className="text-2xl font-semibold text-lime-600 dark:text-lime-400 hover:underline mb-2">
              {article.title}
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 mt-2 mb-1">{article.description}</p>
            <span className="inline-block text-sm text-lime-500 dark:text-lime-400 hover:underline mt-1">자세히 →</span>
          </article>
        ))}
      </div>
    </div>
  )
}

export default ArticlePage
