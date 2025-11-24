"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {
  ArrowLeft,
  ArrowUp,
  ChevronDown,
  ChevronUp,
  ChevronLeftIcon,
  ChevronRightIcon,
  Edit2,
  Save,
  X,
} from "lucide-react"
import { mockPortfolioData } from "@/lib/mock-data"
import type { Project, StructuralContribution } from "@/lib/types"

export function ProjectDetailPage() {
  const router = useRouter()
  const params = useParams()
  const projectId = Number.parseInt(params.id as string)

  const [showScrollTop, setShowScrollTop] = useState(false)
  const [animatedContributions, setAnimatedContributions] = useState<{ [key: string]: number }>({})
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [isEditMode, setIsEditMode] = useState(false)
  const [editedProject, setEditedProject] = useState<Project | null>(null)

  const project = editedProject || mockPortfolioData.projects.find((p) => p.projectId === projectId)
  const projectIndex = mockPortfolioData.projects.findIndex((p) => p.projectId === projectId)
  const prevProject = projectIndex > 0 ? mockPortfolioData.projects[projectIndex - 1] : null
  const nextProject =
    projectIndex < mockPortfolioData.projects.length - 1 ? mockPortfolioData.projects[projectIndex + 1] : null

  useEffect(() => {
    const foundProject = mockPortfolioData.projects.find((p) => p.projectId === projectId)
    if (foundProject) {
      // Load from localStorage if available
      const saved = localStorage.getItem(`project_${projectId}`)
      if (saved) {
        setEditedProject(JSON.parse(saved))
      } else {
        setEditedProject(foundProject)
      }
    }
  }, [projectId])

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && prevProject) {
        router.push(`/project/${prevProject.projectId}`)
      } else if (e.key === "ArrowRight" && nextProject) {
        router.push(`/project/${nextProject.projectId}`)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [prevProject, nextProject, router])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleGoBack = () => {
    router.push("/")
  }

  const handleProjectNavClick = (selectedProjectId: number) => {
    router.push(`/project/${selectedProjectId}`)
  }

  const handleEditMode = () => {
    setIsEditMode(true)
  }

  const handleSave = () => {
    if (editedProject) {
      localStorage.setItem(`project_${projectId}`, JSON.stringify(editedProject))
      setIsEditMode(false)
    }
  }

  const handleCancel = () => {
    const original = mockPortfolioData.projects.find((p) => p.projectId === projectId)
    if (original) {
      setEditedProject({ ...original })
    }
    setIsEditMode(false)
  }

  const updateProjectField = (field: keyof Project, value: any) => {
    if (!editedProject) return
    setEditedProject({
      ...editedProject,
      [field]: value,
    })
  }

  const updateContribution = (index: number, field: keyof StructuralContribution, value: any) => {
    if (!editedProject || !editedProject.structuralContributions) return

    const updated = { ...editedProject }
    updated.structuralContributions = [...updated.structuralContributions]
    updated.structuralContributions[index] = {
      ...updated.structuralContributions[index],
      [field]: value,
    }
    setEditedProject(updated)
  }

  const updateContributionArray = (
    index: number,
    field: "problemDescription" | "solutionDescription" | "reflection",
    itemIndex: number,
    value: string,
  ) => {
    if (!editedProject || !editedProject.structuralContributions) return

    const updated = { ...editedProject }
    updated.structuralContributions = [...updated.structuralContributions]
    const contribution = { ...updated.structuralContributions[index] }
    const array = [...(contribution[field] as string[])]
    array[itemIndex] = value
    contribution[field] = array
    updated.structuralContributions[index] = contribution
    setEditedProject(updated)
  }

  const addItemToArray = (index: number, field: "problemDescription" | "solutionDescription" | "reflection") => {
    if (!editedProject || !editedProject.structuralContributions) return

    const updated = { ...editedProject }
    updated.structuralContributions = [...updated.structuralContributions]
    const contribution = { ...updated.structuralContributions[index] }
    const array = [...(contribution[field] as string[])]
    array.push("")
    contribution[field] = array
    updated.structuralContributions[index] = contribution
    setEditedProject(updated)
  }

  const removeItemFromArray = (
    index: number,
    field: "problemDescription" | "solutionDescription" | "reflection",
    itemIndex: number,
  ) => {
    if (!editedProject || !editedProject.structuralContributions) return

    const updated = { ...editedProject }
    updated.structuralContributions = [...updated.structuralContributions]
    const contribution = { ...updated.structuralContributions[index] }
    const array = [...(contribution[field] as string[])]
    array.splice(itemIndex, 1)
    contribution[field] = array
    updated.structuralContributions[index] = contribution
    setEditedProject(updated)
  }

  const getPrimaryCategoryColor = (category?: string) => {
    switch (category) {
      case "사용자 경험 개선":
        return "bg-purple-100 text-purple-700 border-purple-200"
      case "성능 최적화":
        return "bg-green-100 text-green-700 border-green-200"
      case "개발 생산성 향상":
        return "bg-blue-100 text-blue-700 border-blue-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
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
          <div className="flex items-center justify-between mb-6">
            <Button variant="ghost" className="hover:bg-gray-100" onClick={handleGoBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              프로젝트 목록으로
            </Button>
            <div className="flex gap-2">
              {isEditMode ? (
                <>
                  <Button onClick={handleSave} className="bg-lime-600 hover:bg-lime-700 text-white">
                    <Save className="w-4 h-4 mr-2" />
                    저장
                  </Button>
                  <Button onClick={handleCancel} variant="outline">
                    <X className="w-4 h-4 mr-2" />
                    취소
                  </Button>
                </>
              ) : (
                <Button onClick={handleEditMode} variant="outline">
                  <Edit2 className="w-4 h-4 mr-2" />
                  편집
                </Button>
              )}
            </div>
          </div>

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
            {isEditMode ? (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">프로젝트 제목</label>
                  <Input
                    value={project.title}
                    onChange={(e) => updateProjectField("title", e.target.value)}
                    className="text-4xl font-bold"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">부제목</label>
                  <Input
                    value={project.subtitle || ""}
                    onChange={(e) => updateProjectField("subtitle", e.target.value)}
                    className="text-xl"
                    placeholder="부제목을 입력하세요 (선택사항)"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">배경 설명</label>
                  <Textarea
                    value={project.background}
                    onChange={(e) => updateProjectField("background", e.target.value)}
                    className="text-lg min-h-[100px]"
                    placeholder="프로젝트 배경을 입력하세요"
                  />
                </div>
              </div>
            ) : (
              <>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{project.title}</h1>
                {project.subtitle && <p className="text-xl text-gray-600 mb-4">{project.subtitle}</p>}
                <p className="text-lg text-gray-600 leading-relaxed">{project.background}</p>
              </>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">프로젝트 기간</h3>
                {isEditMode ? (
                  <Input
                    value={project.period}
                    onChange={(e) => updateProjectField("period", e.target.value)}
                    className="text-sm"
                  />
                ) : (
                  <p className="text-gray-700">{project.period}</p>
                )}
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">팀 구성</h3>
                {isEditMode ? (
                  <Input
                    type="number"
                    value={project.frontendDevelopers}
                    onChange={(e) => updateProjectField("frontendDevelopers", Number(e.target.value))}
                    className="text-sm"
                  />
                ) : (
                  <p className="text-gray-700">프론트엔드 개발자 {project.frontendDevelopers}명</p>
                )}
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">역할</h3>
                {isEditMode ? (
                  <Input
                    value={project.role}
                    onChange={(e) => updateProjectField("role", e.target.value)}
                    className="text-sm"
                  />
                ) : (
                  <p className="text-gray-700">{project.role}</p>
                )}
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
          <div className="space-y-3">
            {project.structuralContributions.map((contribution, index) => {
              const isExpanded = expandedIndex === index

              return (
                <div key={index}>
                  <Card
                    className="border-gray-200 cursor-pointer hover:shadow-md transition-all"
                    onClick={() => !isEditMode && setExpandedIndex(isExpanded ? null : index)}
                  >
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <div className="flex items-center gap-3 flex-wrap flex-1">
                              {isEditMode ? (
                                <Input
                                  value={contribution.title}
                                  onChange={(e) => updateContribution(index, "title", e.target.value)}
                                  className="text-lg font-semibold"
                                  onClick={(e) => e.stopPropagation()}
                                />
                              ) : (
                                <h4 className="text-lg font-semibold text-gray-900">{contribution.title}</h4>
                              )}
                              {contribution.primaryCategory && (
                                <Badge
                                  variant="outline"
                                  className={`text-xs ${getPrimaryCategoryColor(contribution.primaryCategory)}`}
                                >
                                  {contribution.primaryCategory}
                                </Badge>
                              )}
                            </div>
                          </div>
                          {isEditMode ? (
                            <Textarea
                              value={contribution.summary}
                              onChange={(e) => updateContribution(index, "summary", e.target.value)}
                              className="text-sm mb-3"
                              onClick={(e) => e.stopPropagation()}
                            />
                          ) : (
                            <p className="text-sm text-gray-600 mb-3">{contribution.summary}</p>
                          )}
                          {contribution.technologies && contribution.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {contribution.technologies.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="outline"
                                  className="bg-gray-50 text-gray-600 border-gray-300 text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                        {!isEditMode && (
                          <div className="flex-shrink-0">
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500" />
                            )}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {(isExpanded || isEditMode) && (
                    <div className="mt-4 ml-4 space-y-6 border-l-2 border-gray-200 pl-6">
                      <div className={`grid ${contribution.media ? "md:grid-cols-2" : "grid-cols-1"} gap-6`}>
                        {contribution.media && (
                          <div className="flex items-center justify-center">
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
                          </div>
                        )}

                        <div className="space-y-6 flex flex-col justify-center">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">문제 상황</h4>
                            <ul className="space-y-2">
                              {Array.isArray(contribution.problemDescription) &&
                                contribution.problemDescription.map((item, idx) => (
                                  <li key={idx} className="flex gap-2">
                                    <span className="text-gray-400 flex-shrink-0">•</span>
                                    {isEditMode ? (
                                      <div className="flex-1 flex gap-2">
                                        <Textarea
                                          value={item}
                                          onChange={(e) =>
                                            updateContributionArray(index, "problemDescription", idx, e.target.value)
                                          }
                                          className="text-sm flex-1"
                                          rows={2}
                                        />
                                        <Button
                                          size="sm"
                                          variant="ghost"
                                          onClick={() => removeItemFromArray(index, "problemDescription", idx)}
                                        >
                                          <X className="w-4 h-4" />
                                        </Button>
                                      </div>
                                    ) : (
                                      <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                                    )}
                                  </li>
                                ))}
                            </ul>
                            {isEditMode && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => addItemToArray(index, "problemDescription")}
                                className="mt-2"
                              >
                                + 항목 추가
                              </Button>
                            )}
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">해결 방안</h4>
                            <ul className="space-y-2">
                              {Array.isArray(contribution.solutionDescription) &&
                                contribution.solutionDescription.map((item, idx) => (
                                  <li key={idx} className="flex gap-2">
                                    <span className="text-gray-400 flex-shrink-0">•</span>
                                    {isEditMode ? (
                                      <div className="flex-1 flex gap-2">
                                        <Textarea
                                          value={item}
                                          onChange={(e) =>
                                            updateContributionArray(index, "solutionDescription", idx, e.target.value)
                                          }
                                          className="text-sm flex-1"
                                          rows={2}
                                        />
                                        <Button
                                          size="sm"
                                          variant="ghost"
                                          onClick={() => removeItemFromArray(index, "solutionDescription", idx)}
                                        >
                                          <X className="w-4 h-4" />
                                        </Button>
                                      </div>
                                    ) : (
                                      <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                                    )}
                                  </li>
                                ))}
                            </ul>
                            {isEditMode && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => addItemToArray(index, "solutionDescription")}
                                className="mt-2"
                              >
                                + 항목 추가
                              </Button>
                            )}
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-gray-900 mb-2">회고</h4>
                            <ul className="space-y-2">
                              {Array.isArray(contribution.reflection) &&
                                contribution.reflection.map((item, idx) => (
                                  <li key={idx} className="flex gap-2">
                                    <span className="text-gray-400 flex-shrink-0">•</span>
                                    {isEditMode ? (
                                      <div className="flex-1 flex gap-2">
                                        <Textarea
                                          value={item}
                                          onChange={(e) =>
                                            updateContributionArray(index, "reflection", idx, e.target.value)
                                          }
                                          className="text-sm flex-1"
                                          rows={2}
                                        />
                                        <Button
                                          size="sm"
                                          variant="ghost"
                                          onClick={() => removeItemFromArray(index, "reflection", idx)}
                                        >
                                          <X className="w-4 h-4" />
                                        </Button>
                                      </div>
                                    ) : (
                                      <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                                    )}
                                  </li>
                                ))}
                            </ul>
                            {isEditMode && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => addItemToArray(index, "reflection")}
                                className="mt-2"
                              >
                                + 항목 추가
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        <div className="flex justify-between items-center pt-8 border-t">
          <Button
            variant="outline"
            onClick={() => router.push(prevProject ? `/project/${prevProject.projectId}` : "/")}
            disabled={!prevProject}
            className="flex items-center gap-2 max-w-xs bg-transparent hover:bg-lime-50 hover:border-lime-300"
          >
            <ChevronLeftIcon className="w-4 h-4" />
            <div className="text-left min-w-0">
              <div className="text-xs text-gray-500">이전 프로젝트</div>
              <div className="font-medium truncate">{prevProject?.title || "없음"}</div>
            </div>
          </Button>

          <Button
            variant="outline"
            onClick={() => router.push(nextProject ? `/project/${nextProject.projectId}` : "/")}
            disabled={!nextProject}
            className="flex items-center gap-2 max-w-xs bg-transparent hover:bg-lime-50 hover:border-lime-300"
          >
            <div className="text-right min-w-0">
              <div className="text-xs text-gray-500">다음 프로젝트</div>
              <div className="font-medium truncate">{nextProject?.title || "없음"}</div>
            </div>
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
        </div>

        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 rounded-full w-12 h-12 shadow-lg bg-gray-900 hover:bg-gray-800 text-white"
            size="icon"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        )}
      </div>
    </div>
  )
}
