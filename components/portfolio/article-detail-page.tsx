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
          <div key={i} className="my-6">
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

      // 헤더 처리
      if (line.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="text-lg font-semibold text-gray-900 dark:text-white mt-6 mb-3">
            {line.replace("### ", "")}
          </h3>,
        )
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            {line.replace("## ", "")}
          </h2>,
        )
      } else if (line.startsWith("# ")) {
        elements.push(
          <h1 key={i} className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
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
          <ul key={i} className="list-disc list-inside space-y-1 my-4 text-gray-700 dark:text-gray-300">
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
          <ol key={i} className="list-decimal list-inside space-y-1 my-4 text-gray-700 dark:text-gray-300">
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
            <div key={i} className="my-6">
              <img
                src={src || "/placeholder.svg"}
                alt={alt}
                className="w-full max-w-2xl mx-auto rounded-lg border shadow-sm"
              />
            </div>,
          )
        }
      }
      // 빈 줄 처리
      else if (line === "") {
        elements.push(<div key={i} className="h-2" />)
      }
      // 일반 텍스트
      else if (line.length > 0) {
        elements.push(
          <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
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
      '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm font-mono">$1</code>',
    )

    return <span dangerouslySetInnerHTML={{ __html: formatted }} />
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto p-6">
        {/* 헤더 */}
        <div className="mb-12">
          <Button variant="ghost" className="mb-6 hover:bg-gray-100 dark:hover:bg-gray-800" onClick={handleGoBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            아티클 목록으로
          </Button>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{article.title}</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{article.description}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
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
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="prose prose-gray max-w-none dark:prose-invert">{renderMDXContent(article.content)}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
