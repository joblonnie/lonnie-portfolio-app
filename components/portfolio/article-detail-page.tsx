"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Tag } from "lucide-react"
import type { Article } from "@/lib/types"
import type { JSX } from "react"

interface ArticleDetailPageProps {
  article: Article
}

export function ArticleDetailPage({ article }: ArticleDetailPageProps) {
  const router = useRouter()

  // 페이지 로드 시 스크롤을 최상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleGoBack = () => {
    router.push("/article")
  }

  const renderMDXContent = (content: string) => {
    // Check if content exists and is a string
    if (!content || typeof content !== "string") {
      return <p className="text-gray-500">콘텐츠를 불러올 수 없습니다.</p>
    }

    const lines = content.split("\n")
    const elements: JSX.Element[] = []
    let i = 0

    while (i < lines.length) {
      const line = lines[i].trim()

      // 빈 줄은 건너뛰기 (연속된 빈 줄 방지)
      if (line === "") {
        i++
        continue
      }

      // 코드 블록 처리
      if (line.startsWith("```")) {
        const language = line.replace("```", "")
        const codeLines: string[] = []
        i++

        while (i < lines.length && !lines[i].trim().startsWith("```")) {
          codeLines.push(lines[i])
          i++
        }

        elements.push(
          <div key={`code-${i}`} className="my-6">
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{codeLines.join("\n")}</code>
              </pre>
            </div>
          </div>,
        )
        i++
        continue
      }

      // 헤더 처리 - 크기와 간격을 명확하게 구분
      if (line.startsWith("### ")) {
        // 소제목 (H3)
        elements.push(
          <h3
            key={`h3-${i}`}
            className="text-lg font-semibold text-gray-900 dark:text-white mt-8 mb-4 border-l-4 border-lime-500 pl-4"
          >
            {line.replace("### ", "")}
          </h3>,
        )
      } else if (line.startsWith("## ")) {
        // 중제목 (H2)
        elements.push(
          <h2
            key={`h2-${i}`}
            className="text-2xl font-bold text-gray-900 dark:text-white mt-10 mb-5 pb-2 border-b-2 border-gray-200 dark:border-gray-700"
          >
            {line.replace("## ", "")}
          </h2>,
        )
      } else if (line.startsWith("# ")) {
        // 대제목 (H1) - 첫 번째 제목은 이미 페이지 상단에 있으므로 스타일 조정
        elements.push(
          <h1
            key={`h1-${i}`}
            className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6 pb-3 border-b-4 border-coral-500"
          >
            {line.replace("# ", "")}
          </h1>,
        )
      }
      // 리스트 처리
      else if (line.startsWith("- ") || line.startsWith("* ")) {
        const listItems: string[] = []
        while (i < lines.length && (lines[i].trim().startsWith("- ") || lines[i].trim().startsWith("* "))) {
          listItems.push(lines[i].trim().replace(/^[*-] /, ""))
          i++
        }
        elements.push(
          <ul key={`ul-${i}`} className="list-disc list-inside space-y-2 my-4 text-gray-700 dark:text-gray-300 ml-4">
            {listItems.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {renderInlineFormatting(item)}
              </li>
            ))}
          </ul>,
        )
        i--
      }
      // 숫자 리스트 처리
      else if (/^\d+\./.test(line)) {
        const listItems: string[] = []
        while (i < lines.length && /^\d+\./.test(lines[i].trim())) {
          listItems.push(lines[i].trim().replace(/^\d+\. /, ""))
          i++
        }
        elements.push(
          <ol key={`ol-${i}`} className="list-decimal list-inside space-y-2 my-4 text-gray-700 dark:text-gray-300 ml-4">
            {listItems.map((item, idx) => (
              <li key={idx} className="leading-relaxed">
                {renderInlineFormatting(item)}
              </li>
            ))}
          </ol>,
        )
        i--
      }
      // 이미지 처리
      else if (line.startsWith("![")) {
        const match = line.match(/!\[(.*?)\]$$(.*?)$$/)
        if (match) {
          const [, alt, src] = match
          elements.push(
            <div key={`img-${i}`} className="my-6">
              <img
                src={src || "/placeholder.svg"}
                alt={alt}
                className="w-full max-w-2xl mx-auto rounded-lg border shadow-sm"
              />
            </div>,
          )
        }
      }
      // 일반 텍스트
      else if (line.length > 0) {
        elements.push(
          <p key={`p-${i}`} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-base">
            {renderInlineFormatting(line)}
          </p>,
        )
      }

      i++
    }

    return elements
  }

  const renderInlineFormatting = (text: string) => {
    if (!text || typeof text !== "string") {
      return <span>{text}</span>
    }

    // **bold** 처리
    let formatted = text.replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="font-semibold text-gray-900 dark:text-white">$1</strong>',
    )

    // `code` 처리
    formatted = formatted.replace(
      /`([^`]+)`/g,
      '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-coral-600 dark:text-coral-400">$1</code>',
    )

    return <span dangerouslySetInnerHTML={{ __html: formatted }} />
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto p-6">
        {/* 헤더 */}
        <div className="mb-8">
          <Button variant="ghost" className="mb-6 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={handleGoBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            아티클 목록으로
          </Button>

          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{article.title}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{article.description}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(article.date).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-4 w-4" />
                {article.category}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-lime-100 text-lime-700 dark:bg-lime-900/20 dark:text-lime-400"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* 마크다운 콘텐츠 */}
        <Card>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none dark:prose-invert">{renderMDXContent(article.content)}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
