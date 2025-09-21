"use client"

import { useRouter } from "next/navigation"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, ExternalLink } from "lucide-react"
import { mockPortfolioData } from "@/lib/mock-data"

export function ArticleListPage() {
  const router = useRouter()

  const handleArticleClick = (articleId: string) => {
    router.push(`/article/${articleId}`)
  }

  const handleGoBack = () => {
    router.push("/")
  }

  const handleNotionClick = (notionUrl: string) => {
    window.open(notionUrl, "_blank")
  }

  // 최신순(내림차순) 정렬
  const sorted = [...mockPortfolioData.articles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  // 카테고리별 그룹화
  const groupedByCategory = sorted.reduce(
    (acc, article) => {
      if (!acc[article.category]) {
        acc[article.category] = []
      }
      acc[article.category].push(article)
      return acc
    },
    {} as Record<string, typeof sorted>,
  )

  const categories = Object.keys(groupedByCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* 상단 컨트롤 */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-6xl mx-auto p-6">
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

        {/* 아티클 목차 */}
        <div className="mb-8">
          <Card className="bg-gradient-to-br from-lime-50 to-gray-50 border-lime-200">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-lime-600" />
                아티클 목차
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <div key={category} className="bg-white rounded-lg p-4 shadow-sm border border-lime-100">
                    <h3 className="font-semibold text-lime-700 mb-2">{category}</h3>
                    <div className="space-y-1">
                      {groupedByCategory[category].slice(0, 3).map((article) => (
                        <div
                          key={article.id}
                          className="text-sm text-gray-600 hover:text-lime-600 cursor-pointer transition-colors truncate"
                          onClick={() => handleNotionClick(article.notionUrl)}
                        >
                          • {article.title}
                        </div>
                      ))}
                      {groupedByCategory[category].length > 3 && (
                        <div className="text-xs text-gray-400">+{groupedByCategory[category].length - 3}개 더</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 아티클 목록 */}
        <div className="flex flex-col gap-8">
          {sorted.map((article) => (
            <Card
              key={article.id}
              className="cursor-pointer hover:shadow-lg transition-all duration-300 group hover:bg-gray-50"
              onClick={() => handleNotionClick(article.notionUrl)}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-gray-600" />
                  <Badge variant="secondary" className="bg-lime-100 text-lime-700">
                    {article.category}
                  </Badge>
                  <span className="text-xs text-gray-400">•</span>
                  <span className="text-xs text-gray-500">
                    {new Date(article.date).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-lime-600 dark:text-lime-400 hover:underline mb-2 group-hover:text-lime-700">
                  {article.title}
                </h2>

                <p className="text-base text-gray-700 dark:text-gray-300 mt-2 mb-3 leading-relaxed">
                  {article.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-lime-600 dark:text-lime-400 hover:underline">Notion에서 읽기 →</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-lime-600 transition-colors" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
