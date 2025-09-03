"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatedElement } from "@/components/ui/animated-element"
import {
  ArrowUp,
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  Zap,
  Briefcase,
  Calendar,
  Users,
  Eye,
  Target,
  BookOpen,
} from "lucide-react"
import { mockPortfolioData } from "@/lib/mock-data"
import type { Project } from "@/lib/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Props = {
  onNavigate: (page: string) => void
}

export function IntroductionPage({ onNavigate }: Props) {
  const router = useRouter()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleProjectClick = (project: Project) => {
    router.push(`/project/${project.projectId}`)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const { personalInfo, skills, companies, projects, goals } = mockPortfolioData

  const skillCategories = [
    {
      title: "프로그래밍 언어",
      icon: <Code className="h-6 w-6" />,
      skills: skills.languages,
      color: "from-gray-500 to-gray-600",
    },
    {
      title: "UI/UX 라이브러리 및 프레임워크",
      icon: <Palette className="h-6 w-6" />,
      skills: skills.ui,
      color: "from-gray-500 to-gray-600",
    },
    {
      title: "상태 관리",
      icon: <Database className="h-6 w-6" />,
      skills: skills.stateManagement,
      color: "from-gray-500 to-gray-600",
    },
    {
      title: "아키텍처",
      icon: <Smartphone className="h-6 w-6" />,
      skills: skills.architecture,
      color: "from-gray-500 to-gray-600",
    },
    {
      title: "개발 도구",
      icon: <Zap className="h-6 w-6" />,
      skills: skills.devTools,
      color: "from-gray-500 to-gray-600",
    },
    {
      title: "협업 도구",
      icon: <Globe className="h-6 w-6" />,
      skills: skills.collaborationTools,
      color: "from-gray-500 to-gray-600",
    },
  ]

  // Get projects by company
  const getProjectsByCompany = (companyId: string) => {
    return projects.filter((project) => project.companyId === companyId)
  }

  return (
    <main className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8 relative">
      <article className="max-w-4xl mx-auto space-y-8">
        <AnimatedElement animation="scaleIn" delay={0} duration={200} className="space-y-6">
          <div className="relative flex justify-center">
            <Avatar className="w-32 h-32 sm:w-40 sm:h-40 ring-4 ring-white/50 shadow-2xl">
              <AvatarImage src="/profile.png" alt="Profile" />
              <AvatarFallback className="text-2xl sm:text-3xl bg-gradient-to-br from-gray-400 to-gray-500 text-white">
                {personalInfo?.name?.charAt(0) || "L"}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-2 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-lime-600">{personalInfo?.name || "개발자"}</h1>
            <p className="text-base sm:text-lg text-gray-700 font-medium">{personalInfo?.title || "풀스택 개발자"}</p>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto" style={{ lineHeight: 2 }}>
              {personalInfo?.bio || "혁신적인 웹 솔루션을 만드는 개발자입니다."}
            </p>
          </div>
        </AnimatedElement>

        {/* 업무 철학 */}
        <AnimatedElement animation="slideUp" delay={300} duration={200} className="mb-12">
          <Card className="bg-card border-0">
            <CardContent className="p-8">
              <header className="text-2xl font-bold text-gray-900 mb-6 text-center">업무 철학</header>

              <p className="text-center text-gray-500 mb-8">
                다양한 실무 경험을 통해 얻은 개발 철학과 협업 원칙은 다음과 같습니다.
              </p>

              {/* 상단 2개 철학 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    icon: "🧑‍💻",
                    quote: "사용자 중심의 품질과 성능을 추구합니다",
                    description:
                      "사용자가 없으면 제품은 없다고 생각합니다. 사용자 경험을 최우선으로 고려하며, 동시에 성능 최적화를 통해 신뢰할 수 있는 제품을 만듭니다. UI/UX 디자이너와의 협업을 통해 사용자의 만족도를 높이는 데 집중합니다.",
                  },
                  {
                    icon: "🧑‍🤝‍🧑",
                    quote: "협업과 팀워크는 개발의 기반입니다",
                    description:
                      "디자이너, 기획자, 백엔드 개발자와의 긴밀한 커뮤니케이션을 통해 문제를 조기에 해결하고, 더 나은 품질을 달성합니다. 또한 팀 내 개발 경험(DX) 개선을 위해 코드 리뷰 문화 정착, 개발 프로세스 최적화, 공통 컴포넌트 라이브러리 구축 등을 통해 팀 전체의 생산성 향상에 기여합니다.",
                  },
                ].map(({ icon, quote, description }, index) => (
                  <div key={index} className="flex flex-col text-center p-6 bg-gray-50 rounded-xl h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">{icon}</span>
                    </div>

                    <blockquote className="italic text-gray-800 mb-4 font-medium">"{quote}"</blockquote>

                    <p className="text-sm text-gray-600 flex-1">{description}</p>
                  </div>
                ))}
              </div>

              {/* 하단 프로세스 개선 철학 */}
              <div className="grid grid-cols-1 gap-6">
                {[
                  {
                    icon: "⚡",
                    quote: "프로세스 개선을 통한 생산성 향상을 추구합니다",
                    description:
                      "효율적인 개발 프로세스와 자동화를 통해 팀의 생산성을 높이는 것을 중요하게 생각합니다. 반복적인 작업을 줄이고, 업무 워크플로우를 최적화하여 더 나은 결과물을 만들어냅니다.",
                    hasReference: true,
                  },
                ].map(({ icon, quote, description, hasReference }, index) => (
                  <div key={index} className="flex flex-col text-center p-6 bg-gray-50 rounded-xl h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">{icon}</span>
                    </div>
                    <blockquote className="italic text-gray-800 mb-4 font-medium">"{quote}"</blockquote>
                    <p className="text-sm text-gray-600 flex-1">{description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedElement>

        {/* 경력 및 프로젝트 */}
        <AnimatedElement animation="slideUp" delay={100} duration={200} className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">경력 및 프로젝트</h2>
          <div className="space-y-8">
            {companies.map((company, index) => (
              <Card key={index} className="bg-card shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Briefcase className="h-8 w-8 text-lime-600" />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{company.position}</h3>
                          <p className="text-lg text-coral-500 font-medium">{company.name}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-500">{company.period}</p>
                          <p className="text-sm text-gray-400">({company.duration})</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 프로젝트 목록 */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">담당 프로젝트</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {getProjectsByCompany(company.id).map((project, projectIndex) => (
                        <Card
                          key={project.projectId}
                          className="bg-gray-50 hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.02] border-0"
                          onClick={() => handleProjectClick(project)}
                        >
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-3">
                              <div className="flex-1">
                                <h5 className="text-lg font-semibold text-gray-900 hover:text-lime-600 transition-colors mb-2">
                                  {project.title}
                                </h5>
                                {/* 부제목 추가 */}
                                {project.subtitle && (
                                  <p className="text-sm text-gray-600 mb-3 font-medium">{project.subtitle}</p>
                                )}
                                <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    {project.period}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Users className="h-4 w-4" />
                                    {project.role}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                              {project.detailedDescription?.summary?.split(".").slice(0, 2).join(".") + "." ||
                                project.background.split(".").slice(0, 2).join(".") + "."}
                            </p>

                            {/* 키워드 태그 */}
                            {project.keywords && (
                              <div className="flex flex-wrap gap-2">
                                {project.keywords.map((keyword, keywordIndex) => (
                                  <span
                                    key={keywordIndex}
                                    className="px-2 py-1 bg-lime-100 text-lime-700 text-xs rounded-full"
                                  >
                                    {keyword}
                                  </span>
                                ))}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedElement>

        {/* 기술 스택 */}
        <AnimatedElement animation="slideUp" delay={150} duration={200} className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">기술 스택</h2>

          <p className="text-center text-gray-500 mb-8">
            기술 스택은 실제 개발을 진행하면서 프로젝트에 적용해왔던 것들을 기준으로 작성했습니다.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <AnimatedElement key={category.title} animation="slideUp" delay={150 + index * 30} duration={200}>
                <Card className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-gray-500 rounded-lg flex items-center justify-center text-white">
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-gray-100 text-gray-700 hover:bg-lime-100 hover:text-lime-700 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </AnimatedElement>

        {/* 목표 & 비전 */}
        <AnimatedElement animation="slideUp" delay={50} duration={200} className="mb-12">
          <div className="text-center space-y-4 mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-lime-500 to-coral-500 rounded-full flex items-center justify-center text-white mx-auto">
              <Target className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-lime-600 to-coral-600 bg-clip-text text-transparent">
              목표 & 비전
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              앞으로의 학습 계획과 개발자로서의 비전을 소개합니다.
            </p>
          </div>

          {/* 학습 계획 */}
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-center flex items-center justify-center gap-3 text-gray-900">
              <BookOpen className="h-6 w-6 text-lime-500" />
              학습 계획
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {goals.learningPlan.map((plan, i) => (
                <Card
                  key={plan.title}
                  className="bg-card backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                >
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold mb-3">{plan.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{plan.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 미래 비전 */}
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-bold text-center flex items-center justify-center gap-3 text-gray-900">
              <Eye className="h-6 w-6 text-coral-500" />
              미래 비전
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {goals.futureVision.map(({ icon, gradient, quote, description }, index) => (
                <div
                  key={index}
                  className="flex flex-col text-center p-6 bg-card backdrop-blur-sm rounded-xl shadow-lg h-full"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">{icon}</span>
                  </div>

                  <blockquote className="italic text-gray-800 mb-4 font-medium">"{quote}"</blockquote>

                  <p className="text-sm text-gray-600 flex-1 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 궁극적인 비전 */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">궁극적인 비전</h4>
            <div className="bg-card rounded-xl p-6 text-center">
              <p className="text-lg text-gray-800 leading-relaxed italic">"{goals.vision.quote}"</p>
              <p className="text-sm text-gray-600 mt-4 leading-relaxed">{goals.vision.description}</p>
            </div>
          </div>
        </AnimatedElement>

        {/* 학력 */}
        <AnimatedElement animation="slideUp" delay={50} duration={200} className="mb-12">
          <Card className="bg-card shadow-lg border-0">
            <CardContent className="p-8">
              <header className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-lime-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🎓</span>
                </div>
                학력
              </header>
              <section className="space-y-4 text-gray-600 leading-relaxed">
                <div>
                  <p className="font-semibold text-gray-800">서경대학교 나노융합공학과</p>
                  <p className="text-sm text-gray-500">학점 3.7 / 4.5</p>
                  <p className="mt-2">
                    3D 프린팅, 재료 설계 등 다양한 제작 프로젝트를 경험하며, 무언가를 직접 만들고 결과물을 눈앞에
                    보여주는 일에 큰 흥미를 느꼈습니다. 이러한 경험이 웹 개발로 이어졌고, 사용자에게 가치를 전달하는
                    개발자로 성장하는 계기가 되었습니다.
                  </p>
                </div>
              </section>
            </CardContent>
          </Card>
        </AnimatedElement>
      </article>

      {/* 최상단 이동 버튼 */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-lime-500 hover:bg-lime-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </main>
  )
}
