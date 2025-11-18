"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from 'next/navigation'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowUp, ChevronLeft, ChevronRight, AlertCircle, Target, Code2, Zap, Check } from 'lucide-react'
import { mockPortfolioData } from "@/lib/mock-data"

export function ProjectDetailPage() {
  const router = useRouter()
  const params = useParams()
  const projectId = Number.parseInt(params.id as string)

  const [showScrollTop, setShowScrollTop] = useState(false)
  const [animatedContributions, setAnimatedContributions] = useState<{ [key: string]: number }>({})

  const project = mockPortfolioData.projects.find((p) => p.projectId === projectId)
  const projectIndex = mockPortfolioData.projects.findIndex((p) => p.projectId === projectId)
  const prevProject = projectIndex > 0 ? mockPortfolioData.projects[projectIndex - 1] : null
  const nextProject =
    projectIndex < mockPortfolioData.projects.length - 1 ? mockPortfolioData.projects[projectIndex + 1] : null

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [projectId])

  useEffect(() => {
    if (project?.contributions) {
      setAnimatedContributions({})

      project.contributions.forEach((contribution, index) => {
        setTimeout(
          () => {
            setAnimatedContributions((prev) => ({
              ...prev,
              [contribution.category]: contribution.percentage,
            }))
          },
          index * 200 + 500,
        )
      })
    }
  }, [project])

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleGoBack = () => {
    router.push("/")
  }

  const handlePrevProject = () => {
    if (prevProject) {
      router.push(`/project/${prevProject.projectId}`)
    }
  }

  const handleNextProject = () => {
    if (nextProject) {
      router.push(`/project/${nextProject.projectId}`)
    }
  }

  const handleProjectNavClick = (selectedProjectId: number) => {
    router.push(`/project/${selectedProjectId}`)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "사용자경험":
        return "bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-100/70"
      case "개발효율성":
        return "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-100/70"
      case "성능최적화":
        return "bg-green-100 text-green-700 border-green-200 hover:bg-green-100/70"
      case "시스템안정성":
        return "bg-red-100 text-red-700 border-red-200 hover:bg-red-100/70"
      case "협업개선":
        return "bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-100/70"
      case "품질향상":
        return "bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-100/70"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-100/70"
    }
  }

  const getPrimaryCategoryColor = (category?: string) => {
    switch (category) {
      case "사용자 경험 개선":
        return "bg-purple-100 text-purple-700 border-purple-200"
      case "성능 최적화":
        return "bg-green-100 text-green-700 border-green-200"
      case "개발 생산성 향상":
        return "bg-blue-100 text-blue-700 border-blue-200"
      case "시스템 안정성":
        return "bg-red-100 text-red-700 border-red-200"
      case "협업 개선":
        return "bg-indigo-100 text-indigo-700 border-indigo-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  const groupByPrimaryCategory = (contributions: any[]) => {
    const grouped: Record<string, any[]> = {}

    const categoryOrder = ["사용자 경험 개선", "성능 최적화", "개발 생산성 향상", "시스템 안정성", "협업 개선"]

    contributions.forEach((contribution) => {
      const category = contribution.primaryCategory || "기타"
      if (!grouped[category]) {
        grouped[category] = []
      }
      grouped[category].push(contribution)
    })

    const sortedGrouped: Record<string, any[]> = {}
    categoryOrder.forEach((category) => {
      if (grouped[category]) {
        sortedGrouped[category] = grouped[category]
      }
    })

    return sortedGrouped
  }

  const getContributionTypeIcon = (type?: string) => {
    switch (type) {
      case "ux":
        return <Zap className="w-5 h-5 text-purple-600" />
      case "performance":
        return <Zap className="w-5 h-5 text-green-600" />
      case "architecture":
        return <Code2 className="w-5 h-5 text-blue-600" />
      case "collaboration":
        return <Zap className="w-5 h-5 text-indigo-600" />
      case "quality":
        return <Zap className="w-5 h-5 text-yellow-600" />
      default:
        return <Target className="w-5 h-5 text-blue-600" />
    }
  }

  const groupByCategory = (achievements: Array<{ text: string; category?: string }>) => {
    const grouped: Record<string, Array<{ text: string; category?: string }>> = {}

    achievements.forEach((achievement) => {
      const category = achievement.category || "기타"
      if (!grouped[category]) {
        grouped[category] = []
      }
      grouped[category].push(achievement)
    })

    return grouped
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">프로젝트를 찾을 수 없습니다</h1>
          <Button onClick={handleGoBack}>홈으로 돌아가기</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        <div className="mb-8">
          <Button variant="ghost" className="mb-6 hover:bg-gray-100" onClick={handleGoBack}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            프로젝트 목록으로
          </Button>

          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-500 mb-4">프로젝트 네비게이션</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {mockPortfolioData.projects.map((proj) => (
                <div
                  key={proj.projectId}
                  data-project-id={proj.projectId}
                  className={`cursor-pointer rounded-lg border p-3 transition-all hover:shadow-md ${
                    proj.projectId === projectId
                      ? "border-lime-500 bg-lime-50 ring-2 ring-lime-200"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                  onClick={() => handleProjectNavClick(proj.projectId)}
                >
                  <div className="p-1 bg-gray-50 rounded mb-2">
                    <img
                      src={proj.image || "/placeholder.svg"}
                      alt={proj.title}
                      className="w-full h-8 object-contain rounded"
                    />
                  </div>
                  <p className="text-xs font-medium text-gray-900 leading-tight line-clamp-2">{proj.title}</p>
                  {proj.projectId === projectId && (
                    <div className="mt-2">
                      <span className="text-xs bg-lime-100 text-lime-700 px-2 py-0.5 rounded-full font-medium">
                        현재
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{project.title}</h1>
            {project.subtitle && <p className="text-xl text-gray-600 mb-4">{project.subtitle}</p>}
            <p className="text-lg text-gray-600 leading-relaxed">{project.background}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">프로젝트 기간</h3>
                <p className="text-gray-700">{project.period}</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">팀 구성</h3>
                <p className="text-gray-700">프론트엔드 개발자 {project.frontendDevelopers}명</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">역할</h3>
                <p className="text-gray-700">{project.role}</p>
              </CardContent>
            </Card>
          </div>

          {project.contributions && (
            <Card className="border-gray-200 mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">프로젝트 기여 요약</h3>
                <div className="space-y-4">
                  {project.contributions.map((contribution, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{contribution.category}</span>
                        <span className="text-xs font-medium text-gray-500">
                          {animatedContributions[contribution.category] || 0}%
                        </span>
                      </div>
                      <Progress value={animatedContributions[contribution.category] || 0} className="h-2 bg-gray-200" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {project.structuralContributions && project.structuralContributions.length > 0 && (
          <div className="space-y-16">
            {Object.entries(groupByPrimaryCategory(project.structuralContributions)).map(
              ([category, contributions]) => (
                <div key={category} className="space-y-8">
                  <div className="text-center space-y-3">
                    <Badge className={`${getPrimaryCategoryColor(category)} text-lg px-4 py-2`}>{category}</Badge>
                  </div>

                  <div className="space-y-12">
                    {contributions.map((contribution, index) => (
                      <div key={index} className="space-y-6">
                        <div className="text-center space-y-3">
                          <h2 className="text-xl font-bold text-gray-900">{contribution.title}</h2>

                          {contribution.technologies && contribution.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 justify-center">
                              {contribution.technologies.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="outline"
                                  className="bg-gray-50 text-gray-700 border-gray-300 text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Left column: Image or Placeholder */}
                          <div className="flex items-center justify-center">
                            {contribution.media ? (
                              <div className="w-full">
                                <img
                                  src={contribution.media.url || "/placeholder.svg?height=400&width=600"}
                                  alt={contribution.media.alt}
                                  className="w-full rounded-lg border shadow-sm"
                                />
                                {contribution.media.caption && (
                                  <p className="text-sm text-gray-500 mt-3">{contribution.media.caption}</p>
                                )}
                              </div>
                            ) : (
                              <div className="w-full aspect-[3/2] bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center">
                                <div className="text-center text-gray-400">
                                  <Code2 className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                  <p className="text-sm">이미지 준비 중</p>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Right column: Problem, Solutions, Reflection */}
                          <div className="space-y-6 flex flex-col justify-center">
                            <Card className="border-gray-200 hover:shadow-md transition-shadow">
                              <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                  <div className="bg-red-100 p-2 rounded-lg">
                                    <AlertCircle className="w-5 h-5 text-red-600" />
                                  </div>
                                  <h3 className="text-lg font-semibold text-gray-900">문제 상황</h3>
                                </div>
                                <div className="space-y-3">
                                  <p className="text-gray-700 leading-relaxed text-sm">
                                    {contribution.problemDescription || contribution.title}
                                  </p>
                                </div>
                              </CardContent>
                            </Card>

                            <Card className="border-gray-200 hover:shadow-md transition-shadow">
                              <CardContent className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                  <div className="bg-blue-100 p-2 rounded-lg">
                                    <Target className="w-5 h-5 text-blue-600" />
                                  </div>
                                  <h3 className="text-lg font-semibold text-gray-900">해결 방안</h3>
                                </div>
                                <div className="space-y-4">
                                  {contribution.solutionList && contribution.solutionList.length > 0 ? (
                                    contribution.solutionList.map((solution, solutionIndex) => (
                                      <div key={solutionIndex} className="space-y-2">
                                        {contribution.solutionList.length > 1 && (
                                          <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-xs font-semibold text-blue-700">
                                              {solutionIndex + 1}
                                            </div>
                                            <h4 className="font-medium text-gray-900 text-sm">{solution.title}</h4>
                                          </div>
                                        )}
                                        <p className="text-gray-700 text-sm leading-relaxed pl-8">
                                          {solution.description}
                                        </p>
                                        {solutionIndex < contribution.solutionList.length - 1 && (
                                          <div className="border-t border-gray-200 my-3"></div>
                                        )}
                                      </div>
                                    ))
                                  ) : (
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                      체계적인 해결 방안을 수립하고 실행했습니다.
                                    </p>
                                  )}
                                </div>
                              </CardContent>
                            </Card>

                            {contribution.reflection && (
                              <Card className="border-gray-200 hover:shadow-md transition-shadow">
                                <CardContent className="p-6">
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="bg-green-100 p-2 rounded-lg">
                                      <Check className="w-5 h-5 text-green-600" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">회고</h3>
                                  </div>
                                  <div className="space-y-3">
                                    <p className="text-gray-700 leading-relaxed text-sm">{contribution.reflection}</p>
                                  </div>
                                </CardContent>
                              </Card>
                            )}
                          </div>
                        </div>

                        {index < contributions.length - 1 && <div className="border-t border-gray-200 pt-6"></div>}
                      </div>
                    ))}
                  </div>

                  <div className="border-t-2 border-gray-300 pt-8"></div>
                </div>
              ),
            )}
          </div>
        )}

        <div className="flex justify-between items-center pt-8 border-t">
          <Button
            variant="outline"
            onClick={handlePrevProject}
            disabled={!prevProject}
            className="flex items-center gap-2 max-w-xs bg-transparent hover:bg-lime-50 hover:border-lime-300"
          >
            <ChevronLeft className="w-4 h-4" />
            <div className="text-left min-w-0">
              <div className="text-xs text-gray-500">이전 프로젝트</div>
              <div className="font-medium truncate">{prevProject?.title || "없음"}</div>
            </div>
          </Button>

          <Button
            variant="outline"
            onClick={handleNextProject}
            disabled={!nextProject}
            className="flex items-center gap-2 max-w-xs bg-transparent hover:bg-lime-50 hover:border-lime-300"
          >
            <div className="text-right min-w-0">
              <div className="text-xs text-gray-500">다음 프로젝트</div>
              <div className="font-medium truncate">{nextProject?.title || "없음"}</div>
            </div>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-gray-600 hover:bg-gradient-to-r hover:from-lime-500 hover:to-orange-500 text-white shadow-lg z-50 transition-all duration-300"
            size="icon"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        )}
      </div>
    </div>
  )
}
