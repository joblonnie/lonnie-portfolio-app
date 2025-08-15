"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Calendar, Users, Code, Target, CheckCircle, FileText, Globe, Lightbulb, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import type { Project } from "@/lib/types"

interface ProjectDetailPageProps {
  project: Project
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const router = useRouter()

  // 페이지 진입 시 스크롤 최상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-600 hover:text-mocha-500 dark:text-gray-400 dark:hover:text-mocha-400"
            >
              <ArrowLeft className="h-4 w-4" />
              뒤로가기
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <article className="prose prose-lg max-w-none dark:prose-invert">
          {/* Project Header */}
          <header className="not-prose mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {project.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{project.period}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>프론트엔드 {project.frontendDevelopers}명</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span>{project.role}</span>
              </div>
            </div>

            {/* 기술 스택 및 키워드 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">사용 기술</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">핵심 키워드</h3>
                <div className="flex flex-wrap gap-2">
                  {project.keywords?.map((keyword, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-mocha-500 text-mocha-600 dark:text-mocha-400"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* 프로젝트 이미지 - 패딩 추가 */}
            {project.image && (
              <div className="mb-8 bg-gray-50 dark:bg-gray-800/50 rounded-lg p-8 border-0 shadow-sm">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full max-w-lg mx-auto h-auto object-contain"
                />
              </div>
            )}
          </header>

          {/* 프로젝트 배경 */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-5 w-5 text-mocha-500" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">프로젝트 배경</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{project.background}</p>
          </section>

          {/* 주요 도전 과제 및 해결 방안 */}
          <section className="mb-12">
            <div className="space-y-6">
              {/* 구조적 기여 */}
              {project.structuralContributions?.map((contribution, index) => (
                <div key={index}>
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Code className="h-5 w-5 text-mocha-500" />
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white m-0">{contribution.title}</h2>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {/* 프로젝트별 키워드를 동적으로 표시 */}
                      {project.keywords?.slice(0, 2).map((keyword, keywordIndex) => (
                        <Badge key={keywordIndex} variant="outline" className="text-xs border-gray-300 text-gray-600">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{contribution.description}</p>

                  <Card className="bg-gray-50 dark:bg-gray-800/50 border-0 shadow-sm mb-6">
                    <CardContent className="p-6 card-content space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">해결 방법 및 성과</h3>
                      <ul className="space-y-2">
                        {contribution.achievements.map((achievement, achIdx) => (
                          <li key={achIdx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                            <CheckCircle className="h-4 w-4 text-mocha-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}

              {/* 기술적 기여 */}
              {project.technicalContributions?.map((contribution, index) => (
                <div key={index}>
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Code className="h-5 w-5 text-mocha-500" />
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white m-0">{contribution.title}</h2>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                        기술적 해결
                      </Badge>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{contribution.description}</p>

                  <Card className="bg-gray-50 dark:bg-gray-800/50 border-0 shadow-sm mb-6">
                    <CardContent className="p-6 card-content space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">기술적 해결책 및 성과</h3>
                      <ul className="space-y-2">
                        {contribution.achievements.map((achievement, achIdx) => (
                          <li key={achIdx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                            <CheckCircle className="h-4 w-4 text-mocha-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}

              {/* 기본 문제 상황 (구조적/기술적 기여가 없는 경우) */}
              {(!project.structuralContributions || project.structuralContributions.length === 0) &&
                (!project.technicalContributions || project.technicalContributions.length === 0) && (
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Code className="h-5 w-5 text-mocha-500" />
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white m-0">주요 도전 과제</h2>
                    </div>
                    <Card className="bg-gray-50 dark:bg-gray-800/50 border-0 shadow-sm">
                      <CardContent className="p-6 card-content space-y-4">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {project.problem || "이 프로젝트에서 해결해야 했던 주요 문제 상황과 요구 사항을 기술합니다."}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                )}
            </div>
          </section>

          {/* 프로젝트 상세 */}
          {project.projectPhases && project.projectPhases.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-mocha-500" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">프로젝트 진행 과정</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.projectPhases.map((_, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-600">
                      Phase {index + 1}
                    </Badge>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                프로젝트를 단계별로 진행하면서 달성한 주요 성과와 결과물을 소개합니다.
              </p>

              <div className="space-y-6">
                {project.projectPhases.map((phase, index) => (
                  <Card key={index} className="bg-gray-50 dark:bg-gray-800/50 border-0 shadow-sm">
                    <CardContent className="p-6 card-content space-y-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{phase.phase}</h3>

                      <div className="flex flex-wrap gap-2">
                        {phase.outcomes.map((outcome, outcomeIndex) => (
                          <Badge
                            key={outcomeIndex}
                            variant="secondary"
                            className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 text-xs"
                          >
                            {outcome}
                          </Badge>
                        ))}
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{phase.description}</p>

                      {phase.detailsLink && (
                        <div className="bg-gray-100 dark:bg-gray-700/50 p-3 rounded-lg">
                          <div className="flex items-start gap-3">
                            <FileText className="h-4 w-4 text-mocha-500 mt-0.5 flex-shrink-0" />
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                                {phase.detailsLink.title}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                {phase.detailsLink.description}
                              </p>
                              <a
                                href={phase.detailsLink.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-mocha-600 dark:text-mocha-400 hover:text-mocha-700 dark:hover:text-mocha-300 hover:underline"
                              >
                                <Globe className="h-4 w-4" />
                                상세 문서 보기
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* 최종 성과 및 배운 점 */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Lightbulb className="h-5 w-5 text-mocha-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">최종 성과 및 배운 점</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                  핵심 성과
                </Badge>
                <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                  학습 내용
                </Badge>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              프로젝트를 통해 달성한 주요 성과와 개발 과정에서 얻은 인사이트를 정리합니다.
            </p>

            <div className="space-y-6">
              {/* 핵심 성과 */}
              {project.detailedDescription?.summary && (
                <Card className="bg-gray-50 dark:bg-gray-800/50 border-0 shadow-sm">
                  <CardContent className="p-6 card-content space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">핵심 성과</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {project.detailedDescription.summary}
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-700/50 p-3 rounded-lg">
                      <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-200 leading-relaxed font-sans">
                        {project.detailedDescription.results}
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* 배운 점 */}
              <Card className="bg-gray-50 dark:bg-gray-800/50 border-0 shadow-sm">
                <CardContent className="p-6 card-content space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">얻은 것 / 배운 점</h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.learning ||
                      "이 프로젝트를 통해 얻은 경험, 성장한 부분, 그리고 향후 적용할 수 있는 인사이트를 정리합니다."}
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </article>
      </main>
      <style jsx>{`
        .card-content > * {
          margin: 0 !important;
        }
        .card-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
      `}</style>
    </div>
  )
}
