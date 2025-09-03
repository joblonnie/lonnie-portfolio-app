"use client"

import type React from "react"

import { useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Code, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { Project, ImprovementType } from "@/lib/types"
import { mockPortfolioData } from "@/lib/mock-data"

interface ProjectDetailPageProps {
  project: Project
}

const getImprovementTypeColor = (type: ImprovementType) => {
  switch (type) {
    case "UX":
      return "bg-coral-100 text-coral-800"
    case "DX":
      return "bg-lime-100 text-lime-800"
    default:
      return ""
  }
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const router = useRouter()

  // 페이지 로드 시 스크롤을 최상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // 프로젝트 간 이동을 위한 함수
  const allProjects = mockPortfolioData.projects
  const currentIndex = allProjects.findIndex((p) => p.projectId === project.projectId)
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null

  const handleProjectNavigation = (projectId: number) => {
    router.push(`/project/${projectId}`)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-6">
        {/* 헤더 */}
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6 hover:bg-gray-100">
              <ArrowLeft className="w-4 h-4 mr-2" />
              돌아가기
            </Button>
          </Link>

          <div className="mb-8">
            <div className="w-full max-w-xs mx-auto mb-6 p-8">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={150}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h1>
            {project.subtitle && <p className="text-xl text-gray-600 mb-4 font-medium">{project.subtitle}</p>}
            <p className="text-gray-600 mb-6 leading-relaxed">{project.background}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.keywords?.map((keyword, index) => (
                <Badge key={index} variant="secondary" className="bg-lime-100 text-lime-700">
                  {keyword}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-900">기간:</span>
                <p className="text-gray-600 mt-1">{project.period}</p>
              </div>
              <div>
                <span className="font-medium text-gray-900">역할:</span>
                <p className="text-gray-600 mt-1">{project.role}</p>
              </div>
              <div>
                <span className="font-medium text-gray-900">팀 구성:</span>
                <p className="text-gray-600 mt-1">프론트엔드 {project.frontendDevelopers}명</p>
              </div>
            </div>
          </div>
        </div>

        {/* 기여도 요약 */}
        {project.contributions && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">프로젝트 기여 요약</h2>
              <div className="space-y-4">
                {project.contributions.map((contribution, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{contribution.category}</span>
                      <span className="text-sm font-semibold text-gray-900">{contribution.percentage}%</span>
                    </div>
                    <Progress
                      value={contribution.percentage}
                      className="h-2"
                      style={
                        {
                          "--progress-background": contribution.color,
                        } as React.CSSProperties
                      }
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* 프로젝트 요약 */}
        {project.detailedDescription && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">프로젝트 요약</h2>
              <p className="text-gray-700 mb-4">{project.detailedDescription.summary}</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">최종 성과</h3>
                <p className="text-gray-700">{project.detailedDescription.results}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 기여사항 */}
        <div className="mb-8 space-y-6">
          {project.structuralContributions?.map((contribution, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Code className="w-5 h-5 text-coral-500 mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-900">{contribution.title}</h3>
                </div>

                {/* 미디어 콘텐츠 */}
                {contribution.media && (
                  <div className="mb-6">
                    <div className="relative rounded-lg overflow-hidden border">
                      <Image
                        src={contribution.media.url || "/placeholder.svg"}
                        alt={contribution.media.alt}
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    {contribution.media.caption && (
                      <p className="text-sm text-gray-500 mt-2 text-center italic">{contribution.media.caption}</p>
                    )}
                  </div>
                )}

                <div className="space-y-4">
                  {contribution.solutionList?.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="border-l-4 border-lime-300 pl-4">
                      <h4 className="font-medium text-gray-900 mb-2">{solution.title}</h4>
                      <p className="text-gray-700">{solution.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 mb-3">주요 성과</h4>
                  <ul className="space-y-3">
                    {contribution.achievementList.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <span className="text-gray-700">{achievement.text}</span>
                          {achievement.type && getImprovementTypeColor(achievement.type) && (
                            <Badge
                              className={`ml-2 text-xs ${getImprovementTypeColor(achievement.type)}`}
                              variant="secondary"
                            >
                              {achievement.type}
                            </Badge>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 사용 기술 */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">사용 기술</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-700">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 프로젝트 간 이동 */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <div className="flex-1">
            {prevProject && (
              <Button
                variant="ghost"
                onClick={() => handleProjectNavigation(prevProject.projectId)}
                className="flex items-center gap-2 hover:bg-gray-100 p-4 rounded-lg"
              >
                <ChevronLeft className="w-4 h-4" />
                <div className="text-left">
                  <p className="text-xs text-gray-500">이전 프로젝트</p>
                  <p className="font-medium text-gray-900 truncate max-w-48">{prevProject.title}</p>
                </div>
              </Button>
            )}
          </div>

          <div className="flex-1 text-right">
            {nextProject && (
              <Button
                variant="ghost"
                onClick={() => handleProjectNavigation(nextProject.projectId)}
                className="flex items-center gap-2 hover:bg-gray-100 p-4 rounded-lg ml-auto"
              >
                <div className="text-right">
                  <p className="text-xs text-gray-500">다음 프로젝트</p>
                  <p className="font-medium text-gray-900 truncate max-w-48">{nextProject.title}</p>
                </div>
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
