"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatedElement } from "@/components/ui/animated-element"
import {
  ArrowUp,
  Users,
  Eye,
  Mail,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Award,
  GraduationCap,
  Activity,
  Lightbulb,
  Clock,
  Building,
  Github,
} from "lucide-react"
import { mockPortfolioData } from "@/lib/mock-data"
import type { Project } from "@/lib/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function IntroductionPage() {
  const router = useRouter()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showAllArticles, setShowAllArticles] = useState(false)

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

  const handleArticleClick = (notionUrl: string) => {
    window.open(notionUrl, "_blank")
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:${mockPortfolioData.personalInfo?.email}`
  }

  const {
    personalInfo,
    skills,
    companies,
    projects,
    goals,
    articles,
    education,
    certifications,
    activities,
    introduction,
  } = mockPortfolioData

  // 프로젝트를 시간순으로 정렬하는 함수 수정
  const getProjectsInTimeOrder = () => {
    const projectsWithCompany = projects.map((project) => {
      const company = companies.find((c) => c.id === project.companyId)
      const startPart = project.period.split(" - ")[0]
      const [year, month] = startPart.split(".")
      return {
        ...project,
        companyName: company?.name || "",
        companyPosition: company?.position || "",
        startYear: Number.parseInt(year),
        startDate: new Date(Number.parseInt(year), Number.parseInt(month) - 1),
      }
    })

    // 시작 날짜를 기준으로 역순 정렬 (최신순)
    return projectsWithCompany.sort((a, b) => b.startDate.getTime() - a.startDate.getTime())
  }

  const timelineProjects = getProjectsInTimeOrder()

  // 연도 범위별로 그룹화하는 함수 수정
  const getProjectsByYearRange = () => {
    const projectsByRange: { [key: string]: typeof timelineProjects } = {}

    timelineProjects.forEach((project) => {
      // 프로젝트 기간에서 시작년도와 종료년도 추출
      const [startPart, endPart] = project.period.split(" - ")
      const startYear = Number.parseInt(startPart.split(".")[0])
      const endYear = endPart ? Number.parseInt(endPart.split(".")[0]) : startYear

      // 연도 범위 생성 (예: "2023 - 2025")
      const yearRange = startYear === endYear ? `${startYear}` : `${startYear} - ${endYear}`

      if (!projectsByRange[yearRange]) {
        projectsByRange[yearRange] = []
      }
      projectsByRange[yearRange].push(project)
    })

    return projectsByRange
  }

  const projectsByYearRange = getProjectsByYearRange()
  const yearRanges = Object.keys(projectsByYearRange).sort((a, b) => {
    // 최신순 정렬을 위해 시작년도 기준으로 정렬
    const aStart = Number.parseInt(a.split(" - ")[0])
    const bStart = Number.parseInt(b.split(" - ")[0])
    return bStart - aStart
  })

  // 학력·자격·활동을 연도별로 그룹화하는 함수
  const getEducationItemsByYear = () => {
    const allItems: Array<{
      type: "education" | "certification" | "activity"
      data: any
      date: Date
      year: number
    }> = []

    // 학력 추가
    education.forEach((edu) => {
      const endYear = edu.period.split(" - ")[1] || edu.period.split(" - ")[0]
      const year = Number.parseInt(endYear.split(".")[0])
      allItems.push({
        type: "education",
        data: edu,
        date: new Date(year, 11), // 12월로 설정
        year,
      })
    })

    // 수료증 추가
    certifications.forEach((cert) => {
      let date: Date
      let year: number
      if (cert.date.includes("년")) {
        const yearMatch = cert.date.match(/(\d{4})년/)?.[1]
        const month = cert.date.match(/(\d{1,2})월/)?.[1] || "12"
        year = Number.parseInt(yearMatch || "2023")
        date = new Date(year, Number.parseInt(month) - 1)
      } else {
        date = new Date(cert.date)
        year = date.getFullYear()
      }
      allItems.push({
        type: "certification",
        data: cert,
        date,
        year,
      })
    })

    // 사내활동 추가
    activities.forEach((activity) => {
      const startYear = activity.period.split(" - ")[0] || activity.period
      const year = Number.parseInt(startYear.split(".")[0])
      allItems.push({
        type: "activity",
        data: activity,
        date: new Date(year, 0), // 1월로 설정
        year,
      })
    })

    // 연도별로 그룹화
    const itemsByYear: { [key: number]: typeof allItems } = {}
    allItems.forEach((item) => {
      if (!itemsByYear[item.year]) {
        itemsByYear[item.year] = []
      }
      itemsByYear[item.year].push(item)
    })

    // 각 연도 내에서 최신순 정렬
    Object.keys(itemsByYear).forEach((year) => {
      itemsByYear[Number.parseInt(year)].sort((a, b) => b.date.getTime() - a.date.getTime())
    })

    return itemsByYear
  }

  const educationItemsByYear = getEducationItemsByYear()
  const educationYears = Object.keys(educationItemsByYear)
    .map(Number)
    .sort((a, b) => b - a) // 최신순

  // 아티클 표시 개수 결정
  const displayedArticles = showAllArticles ? articles : articles?.slice(0, 2) || []

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* 배경 효과 - Lime/Orange 톤으로 변경 */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-lime-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-orange-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 bg-gradient-to-r from-lime-50/30 to-orange-100/20 rounded-full blur-2xl"></div>
        <div className="absolute inset-0 bg-white/95"></div>
      </div>

      <div className="relative z-10 py-6 px-4 sm:px-6 lg:px-8">
        <article className="max-w-7xl mx-auto space-y-6">
          {/* 개인 정보 섹션 - 중앙 정렬 및 width 조정 */}
          <AnimatedElement animation="scaleIn" delay={0} duration={200} className="space-y-4">
            <div className="flex justify-center">
              <div className="w-full md:w-4/5 lg:w-5/6">
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-lime-200/50 backdrop-blur-sm">
                  {/* 포트폴리오 타이틀 */}
                  <div className="text-center space-y-3 mb-6">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                      "좋은 경험은 결국 좋은 기억이 된다"
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 font-medium">UX·DX 중심 개발자의 여정</p>
                  </div>

                  {/* 프로필 섹션 - 간소화 */}
                  <div className="flex flex-col items-center gap-6">
                    {/* 아바타 */}
                    <div className="relative">
                      <Avatar className="w-32 h-32 ring-4 ring-white shadow-xl">
                        <AvatarImage src="/profile.png" alt="Profile" />
                        <AvatarFallback className="text-2xl bg-gradient-to-br from-lime-600 to-orange-700 text-white">
                          {personalInfo?.name?.charAt(0) || "L"}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    {/* 기본 정보 */}
                    <div className="text-center space-y-2">
                      <h2 className="text-3xl font-bold text-gray-900">{personalInfo?.name || "개발자"}</h2>
                      <p className="text-lg text-gray-600">{personalInfo?.title || "풀스택 개발자"}</p>
                      <p className="text-sm text-gray-500">{personalInfo?.location || "서울"}</p>
                    </div>

                    {/* 소셜 링크 - 아이콘과 설명 */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <a
                        href={`mailto:${personalInfo?.email}`}
                        className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-lime-50 rounded-lg transition-colors group"
                      >
                        <div className="w-10 h-10 bg-gray-100 group-hover:bg-lime-100 rounded-full flex items-center justify-center transition-colors">
                          <Mail className="w-5 h-5 text-gray-600 group-hover:text-lime-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">이메일</div>
                          <div className="text-xs text-gray-500">{personalInfo?.email}</div>
                        </div>
                      </a>

                      <a
                        href="https://github.com/joblonnie"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-800 rounded-lg transition-colors group"
                      >
                        <div className="w-10 h-10 bg-gray-100 group-hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors">
                          <Github className="w-5 h-5 text-gray-600 group-hover:text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 group-hover:text-white">GitHub</div>
                          <div className="text-xs text-gray-500 group-hover:text-gray-300">github.com/joblonnie</div>
                        </div>
                      </a>

                      <a
                        href="https://www.linkedin.com/in/donghyun-kim-a52b62207/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-blue-600 rounded-lg transition-colors group"
                      >
                        <div className="w-10 h-10 bg-gray-100 group-hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                          <svg
                            className="w-5 h-5 text-gray-600 group-hover:text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 group-hover:text-white">LinkedIn</div>
                          <div className="text-xs text-gray-500 group-hover:text-gray-300">프로필 보기</div>
                        </div>
                      </a>

                      <a
                        href="https://aosjehdgus.tistory.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-gray-50 hover:bg-orange-500 rounded-lg transition-colors group"
                      >
                        <div className="w-10 h-10 bg-gray-100 group-hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                          <svg
                            className="w-5 h-5 text-gray-600 group-hover:text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm-1 4v12l8-6-8-6z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 group-hover:text-white">Tistory</div>
                          <div className="text-xs text-gray-500 group-hover:text-gray-300">개발 블로그</div>
                        </div>
                      </a>
                    </div>

                    {/* 개발자 소개 - 인용 형태 */}
                    <div className="mt-8 p-6 bg-gray-50/50 rounded-xl border-l-4 border-lime-500">
                      <div className="prose prose-gray max-w-none">
                        <p className="text-gray-700 leading-relaxed text-sm mb-4">
                          저는 사용자와 개발자가 모두 기억할 만한 경험을 만들어가는 데 집중하는 프론트엔드 개발자입니다.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-sm mb-4">
                          사용자가 의식하지 않아도 편안함을 느낄 수 있도록, 적절한 로딩 시간, 예측 가능한 인터랙션,
                          그리고 미묘하지만 의미 있는 시각적 디테일 등{" "}
                          <strong className="text-gray-900">'보이지 않는 UX'</strong>를 세심하게 설계해왔습니다.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-sm mb-4">
                          코드 구조화, 반복 작업의 자동화, 협업 환경 개선 등을 통해 팀이 보다 효율적이고 즐겁게 일할 수
                          있는 기반을 마련함으로써,{" "}
                          <strong className="text-gray-900">개발 과정 자체가 성장과 학습의 경험</strong>이 될 수 있도록
                          노력했습니다.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-sm">
                          이처럼 사용자와 팀을 위한 작은 경험들을 하나씩 쌓아가는 과정이, 결국에는 제품과 조직 모두에
                          긍정적인 기억으로 남고 <strong className="text-gray-900">장기적인 가치를 만들어낸다</strong>고
                          믿습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* 업무 철학 - neutral 색상으로 변경 */}
          <AnimatedElement animation="slideUp" delay={300} duration={200} className="mb-8">
            <div className="flex justify-center">
              <div className="w-full md:w-4/5 lg:w-5/6">
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <header className="text-xl font-bold text-gray-900 mb-4 text-center">업무 철학</header>

                    <p className="text-center text-gray-500 mb-6 text-sm">
                      다양한 실무 경험을 통해 얻은 개발 철학과 협업 원칙은 다음과 같습니다.
                    </p>

                    {/* 상단 2개 철학 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {[
                        {
                          icon: <Lightbulb className="w-5 h-5" />,
                          quote: "사용자 중심의 품질과 성능을 추구합니다",
                          description:
                            "사용자가 없으면 제품은 없다고 생각합니다. 사용자 경험을 최우선으로 고려하며, 동시에 성능 최적화를 통해 신뢰할 수 있는 제품을 만듭니다. UI/UX 디자이너와의 협업을 통해 사용자의 만족도를 높이는 데 집중합니다.",
                        },
                        {
                          icon: <Users className="w-5 h-5" />,
                          quote: "협업과 팀워크는 개발의 기반입니다",
                          description:
                            "디자이너, 기획자, 백엔드 개발자와의 긴밀한 커뮤니케이션을 통해 문제를 조기에 해결하고, 더 나은 품질을 달성합니다. 또한 팀 내 개발 경험(DX) 개선을 위해 코드 리뷰 문화 정착, 개발 프로세스 최적화, 공통 컴포넌트 라이브러리 구축 등을 통해 팀 전체의 생산성 향상에 기여합니다.",
                        },
                      ].map(({ icon, quote, description }, index) => (
                        <div
                          key={index}
                          className="group flex flex-col text-center p-4 bg-white/70 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full border border-gray-100/50 hover:bg-gray-50"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md group-hover:from-lime-200 group-hover:to-coral-200 transition-all duration-300 group-hover:scale-110">
                            <div className="text-gray-600 group-hover:text-gray-700 transition-colors">{icon}</div>
                          </div>

                          <blockquote className="italic text-gray-800 mb-3 font-medium text-sm">"{quote}"</blockquote>

                          <p className="text-xs text-gray-600 flex-1 leading-relaxed">{description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedElement>

          {/* 프로젝트 타임라인 - 연도별로 그룹화 */}
          <AnimatedElement animation="slideUp" delay={100} duration={200} className="mb-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-3">프로젝트 타임라인</h2>
            <p className="text-center text-gray-500 mb-6 text-sm">
              시간 순서대로 진행했던 프로젝트들의 여정을 확인해보세요.
            </p>

            <div className="flex justify-center">
              <div className="w-full max-w-7xl">
                <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0">
                  <CardContent className="p-6">
                    <div className="space-y-12">
                      {yearRanges.map((yearRange, rangeIndex) => (
                        <div key={yearRange} className="relative">
                          {/* 연도 범위 표시 */}
                          <div className="flex items-center justify-center mb-8">
                            <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-full shadow-lg font-bold text-lg">
                              {yearRange}
                            </div>
                          </div>

                          {/* 해당 연도 범위의 프로젝트들 */}
                          <div className="space-y-8">
                            {/* 세이지 프로젝트들을 한 줄에 4개 표시 */}
                            {(() => {
                              const saigeProjects = projectsByYearRange[yearRange].filter(
                                (p) => p.companyName === "SAIGE",
                              )
                              if (saigeProjects.length > 0) {
                                return (
                                  <div className="relative">
                                    {/* 타임라인 포인트 */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-6">
                                      <div className="w-4 h-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full border-4 border-white shadow-lg"></div>
                                    </div>

                                    {/* 세이지 프로젝트 그룹 카드 */}
                                    <div className="flex justify-center">
                                      <div className="w-full">
                                        <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:bg-gray-50/30">
                                          <CardContent className="p-6">
                                            {/* 회사 정보 */}
                                            <div className="flex items-center gap-2 mb-4">
                                              <Building className="w-4 h-4 text-gray-500" />
                                              <span className="text-sm text-gray-600 font-medium">SAIGE</span>
                                              <span className="text-xs text-gray-400">•</span>
                                              <span className="text-xs text-gray-500">프론트엔드 개발자</span>
                                            </div>

                                            {/* 세이지 프로젝트들을 한 줄에 4개 표시 */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                                              {saigeProjects.map((project) => (
                                                <Card
                                                  key={project.projectId}
                                                  className="group cursor-pointer hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 border border-gray-200"
                                                  onClick={() => handleProjectClick(project)}
                                                >
                                                  <CardContent className="p-3">
                                                    {/* 프로젝트 이미지 */}
                                                    {project.image && (
                                                      <div className="mb-2 p-1 bg-gray-50 rounded-lg">
                                                        <img
                                                          src={project.image || "/placeholder.svg"}
                                                          alt={project.title}
                                                          className="w-full h-8 object-contain rounded-lg"
                                                        />
                                                      </div>
                                                    )}

                                                    {/* 프로젝트 정보 */}
                                                    <div className="mb-2">
                                                      <h3 className="text-sm font-semibold text-gray-900 group-hover:text-lime-600 transition-colors mb-1 line-clamp-2">
                                                        {project.title}
                                                      </h3>

                                                      {/* 기간 정보 */}
                                                      <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                                                        <Clock className="w-3 h-3" />
                                                        <span className="font-medium">{project.period}</span>
                                                      </div>
                                                    </div>

                                                    <p className="text-gray-600 mb-2 leading-relaxed text-xs line-clamp-2">
                                                      {project.background.split(".").slice(0, 1).join(". ")}
                                                    </p>

                                                    {/* 키워드 태그 */}
                                                    {project.keywords && (
                                                      <div className="flex flex-wrap gap-1 mb-2">
                                                        {project.keywords.slice(0, 2).map((keyword, keywordIndex) => (
                                                          <span
                                                            key={keywordIndex}
                                                            className="px-1.5 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full shadow-sm border border-gray-200 hover:bg-lime-100 hover:text-lime-700 hover:border-lime-200 transition-all duration-300"
                                                          >
                                                            {keyword}
                                                          </span>
                                                        ))}
                                                      </div>
                                                    )}

                                                    {/* 기술 스택 */}
                                                    <div className="flex flex-wrap gap-1">
                                                      {project.technologies.slice(0, 2).map((tech, techIndex) => (
                                                        <Badge
                                                          key={techIndex}
                                                          variant="secondary"
                                                          className="text-xs bg-gray-100 text-gray-700 hover:bg-coral-100 hover:text-coral-700 transition-colors"
                                                        >
                                                          {tech}
                                                        </Badge>
                                                      ))}
                                                    </div>
                                                  </CardContent>
                                                </Card>
                                              ))}
                                            </div>
                                          </CardContent>
                                        </Card>
                                      </div>
                                    </div>
                                  </div>
                                )
                              }
                              return null
                            })()}

                            {/* 미디어코퍼스 프로젝트들을 한 줄에 2개 표시 */}
                            {(() => {
                              const mediaProjects = projectsByYearRange[yearRange].filter(
                                (p) => p.companyName === "미디어코퍼스",
                              )
                              if (mediaProjects.length > 0) {
                                return (
                                  <div className="relative">
                                    {/* 타임라인 포인트 */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-6">
                                      <div className="w-4 h-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full border-4 border-white shadow-lg"></div>
                                    </div>

                                    {/* 미디어코퍼스 프로젝트 그룹 카드 */}
                                    <div className="flex justify-center">
                                      <div className="w-full">
                                        <Card className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:bg-gray-50/30">
                                          <CardContent className="p-6">
                                            {/* 회사 정보 */}
                                            <div className="flex items-center gap-2 mb-4">
                                              <Building className="w-4 h-4 text-gray-500" />
                                              <span className="text-sm text-gray-600 font-medium">미디어코퍼스</span>
                                              <span className="text-xs text-gray-400">•</span>
                                              <span className="text-xs text-gray-500">프론트엔드 개발자</span>
                                            </div>

                                            {/* 미디어코퍼스 프로젝트들을 한 줄에 2개 표시 */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                              {mediaProjects.map((project) => (
                                                <Card
                                                  key={project.projectId}
                                                  className="group cursor-pointer hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 border border-gray-200"
                                                  onClick={() => handleProjectClick(project)}
                                                >
                                                  <CardContent className="p-4">
                                                    {/* 프로젝트 이미지 */}
                                                    {project.image && (
                                                      <div className="mb-3 p-2 bg-gray-50 rounded-lg">
                                                        <img
                                                          src={project.image || "/placeholder.svg"}
                                                          alt={project.title}
                                                          className="w-full h-12 object-contain rounded-lg"
                                                        />
                                                      </div>
                                                    )}

                                                    {/* 프로젝트 정보 */}
                                                    <div className="mb-3">
                                                      <h3 className="text-base font-semibold text-gray-900 group-hover:text-lime-600 transition-colors mb-1 line-clamp-2">
                                                        {project.title}
                                                      </h3>
                                                      {project.subtitle && (
                                                        <p className="text-sm text-gray-600 mb-2 font-medium line-clamp-1">
                                                          {project.subtitle}
                                                        </p>
                                                      )}

                                                      {/* 기간 정보 */}
                                                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                                        <Clock className="w-4 h-4" />
                                                        <span className="font-medium">{project.period}</span>
                                                      </div>
                                                    </div>

                                                    <p className="text-gray-600 mb-3 leading-relaxed text-sm line-clamp-3">
                                                      {project.background.split(".").slice(0, 2).join(". ")}
                                                    </p>

                                                    {/* 키워드 태그 */}
                                                    {project.keywords && (
                                                      <div className="flex flex-wrap gap-1 mb-3">
                                                        {project.keywords.slice(0, 3).map((keyword, keywordIndex) => (
                                                          <span
                                                            key={keywordIndex}
                                                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full shadow-sm border border-gray-200 hover:bg-lime-100 hover:text-lime-700 hover:border-lime-200 transition-all duration-300"
                                                          >
                                                            {keyword}
                                                          </span>
                                                        ))}
                                                      </div>
                                                    )}

                                                    {/* 기술 스택 */}
                                                    <div className="flex flex-wrap gap-1">
                                                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                                                        <Badge
                                                          key={techIndex}
                                                          variant="secondary"
                                                          className="text-xs bg-gray-100 text-gray-700 hover:bg-coral-100 hover:text-coral-700 transition-colors"
                                                        >
                                                          {tech}
                                                        </Badge>
                                                      ))}
                                                    </div>
                                                  </CardContent>
                                                </Card>
                                              ))}
                                            </div>
                                          </CardContent>
                                        </Card>
                                      </div>
                                    </div>
                                  </div>
                                )
                              }
                              return null
                            })()}

                            {/* 세이지와 미디어코퍼스가 아닌 프로젝트들은 개별적으로 표시 */}
                            {projectsByYearRange[yearRange]
                              .filter(
                                (project) => project.companyName !== "SAIGE" && project.companyName !== "미디어코퍼스",
                              )
                              .map((project) => (
                                <div key={project.projectId} className="relative">
                                  {/* 타임라인 포인트 */}
                                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-6">
                                    <div className="w-4 h-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full border-4 border-white shadow-lg"></div>
                                  </div>

                                  {/* 프로젝트 카드 - 가운데 정렬 */}
                                  <div className="flex justify-center">
                                    <div className="w-full">
                                      <Card
                                        className="group bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:-translate-y-1 hover:bg-gray-50/30"
                                        onClick={() => handleProjectClick(project)}
                                      >
                                        <CardContent className="p-6">
                                          {/* 회사 정보 */}
                                          <div className="flex items-center gap-2 mb-3">
                                            <Building className="w-4 h-4 text-gray-500" />
                                            <span className="text-sm text-gray-600 font-medium">
                                              {project.companyName}
                                            </span>
                                            <span className="text-xs text-gray-400">•</span>
                                            <span className="text-xs text-gray-500">{project.companyPosition}</span>
                                          </div>

                                          {/* 프로젝트 이미지 */}
                                          {project.image && (
                                            <div className="mb-3 p-2 bg-gray-50 rounded-lg">
                                              <img
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                className="w-full h-16 object-contain rounded-lg"
                                              />
                                            </div>
                                          )}

                                          {/* 프로젝트 정보 */}
                                          <div className="mb-3">
                                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-lime-600 transition-colors mb-1">
                                              {project.title}
                                            </h3>
                                            {project.subtitle && (
                                              <p className="text-sm text-gray-600 mb-2 font-medium">
                                                {project.subtitle}
                                              </p>
                                            )}

                                            {/* 기간 정보 */}
                                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                              <Clock className="w-4 h-4" />
                                              <span className="font-medium">{project.period}</span>
                                            </div>
                                          </div>

                                          <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                                            {project.background.split(".").slice(0, 2).join(". ")}
                                          </p>

                                          {/* 키워드 태그 */}
                                          {project.keywords && (
                                            <div className="flex flex-wrap gap-1 mb-3">
                                              {project.keywords.slice(0, 3).map((keyword, keywordIndex) => (
                                                <span
                                                  key={keywordIndex}
                                                  className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full shadow-sm border border-gray-200 hover:bg-lime-100 hover:text-lime-700 hover:border-lime-200 transition-all duration-300"
                                                >
                                                  {keyword}
                                                </span>
                                              ))}
                                            </div>
                                          )}

                                          {/* 기술 스택 */}
                                          <div className="flex flex-wrap gap-1">
                                            {project.technologies.slice(0, 4).map((tech, techIndex) => (
                                              <Badge
                                                key={techIndex}
                                                variant="secondary"
                                                className="text-xs bg-gray-100 text-gray-700 hover:bg-coral-100 hover:text-coral-700 transition-colors"
                                              >
                                                {tech}
                                              </Badge>
                                            ))}
                                          </div>
                                        </CardContent>
                                      </Card>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>

                          {/* 연도 범위 간 구분선 (마지막 범위가 아닌 경우) */}
                          {rangeIndex < yearRanges.length - 1 && (
                            <div className="flex justify-center mt-12">
                              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-lime-300 to-transparent"></div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedElement>

          {/* 학력 · 수료 · 활동 - 연도별 타임라인 */}
          <AnimatedElement animation="slideUp" delay={50} duration={200} className="mb-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-3">학력 · 수료 · 활동</h2>
            <p className="text-center text-gray-500 mb-6 text-sm">
              학력, 수료증, 그리고 활동 경험을 최신순으로 소개합니다.
            </p>

            <div className="flex justify-center">
              <div className="w-full md:w-4/5 lg:w-5/6">
                <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0">
                  <CardContent className="p-6">
                    <div className="space-y-12">
                      {educationYears.map((year, yearIndex) => (
                        <div key={year} className="relative">
                          {/* 연도 표시 - neutral 색상으로 변경 */}
                          <div className="flex items-center justify-center mb-8">
                            <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-full shadow-lg font-bold text-lg">
                              {year}
                            </div>
                          </div>

                          {/* 해당 연도의 항목들 */}
                          <div className="space-y-8">
                            {educationItemsByYear[year].map((item, index) => {
                              const getItemConfig = () => {
                                switch (item.type) {
                                  case "education":
                                    return {
                                      color: "bg-blue-600",
                                      icon: <GraduationCap className="h-4 w-4 text-white" />,
                                      badge: { bg: "bg-blue-100", text: "text-blue-700", label: "학력" },
                                    }
                                  case "certification":
                                    return {
                                      color: "bg-lime-600",
                                      icon: <Award className="h-4 w-4 text-white" />,
                                      badge: { bg: "bg-lime-100", text: "text-lime-700", label: "수료증" },
                                    }
                                  case "activity":
                                    return {
                                      color: "bg-orange-600",
                                      icon: <Activity className="h-4 w-4 text-white" />,
                                      badge: { bg: "bg-orange-100", text: "text-orange-700", label: "사내활동" },
                                    }
                                  default:
                                    return {
                                      color: "bg-gray-600",
                                      icon: <Activity className="h-4 w-4 text-white" />,
                                      badge: { bg: "bg-gray-100", text: "text-gray-700", label: "기타" },
                                    }
                                }
                              }

                              const config = getItemConfig()

                              return (
                                <div key={`${item.type}-${index}`} className="relative">
                                  {/* 타임라인 포인트 - neutral 색상으로 변경 */}
                                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-6">
                                    <div
                                      className={`w-4 h-4 ${config.color} rounded-full border-4 border-white shadow-lg`}
                                    ></div>
                                  </div>

                                  {/* 카드 - 가운데 정렬 */}
                                  <div className="flex justify-center">
                                    <div className="w-full md:w-3/4">
                                      <Card className="group bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 border border-gray-100/50 shadow-md hover:bg-gray-50">
                                        <CardContent className="p-5">
                                          <div className="flex items-center gap-2 mb-3">
                                            <div
                                              className={`w-8 h-8 ${config.color} rounded-lg flex items-center justify-center shadow-lg`}
                                            >
                                              {config.icon}
                                            </div>
                                            <Badge
                                              variant="secondary"
                                              className={`text-xs ${config.badge.bg} ${config.badge.text}`}
                                            >
                                              {config.badge.label}
                                            </Badge>
                                            <span className="text-xs text-gray-500">
                                              {item.type === "education"
                                                ? item.data.period
                                                : item.type === "certification"
                                                  ? item.data.date
                                                  : item.data.period}
                                            </span>
                                          </div>

                                          {item.type === "education" && (
                                            <>
                                              <h4 className="font-semibold text-gray-900 text-base mb-1">
                                                {item.data.institution}
                                              </h4>
                                              <p className="text-gray-700 text-sm mb-2">{item.data.degree}</p>
                                              {item.data.gpa && (
                                                <p className="text-xs text-gray-500 mb-2">학점: {item.data.gpa}</p>
                                              )}
                                              <p className="text-xs text-gray-600 leading-relaxed">
                                                {item.data.description}
                                              </p>
                                            </>
                                          )}

                                          {item.type === "certification" && (
                                            <>
                                              <h4 className="font-semibold text-gray-900 text-base mb-1">
                                                {item.data.name}
                                              </h4>
                                              <p className="text-gray-700 text-sm mb-2">{item.data.issuer}</p>
                                              {item.data.description && (
                                                <p className="text-xs text-gray-600 leading-relaxed">
                                                  {item.data.description}
                                                </p>
                                              )}
                                            </>
                                          )}

                                          {item.type === "activity" && (
                                            <>
                                              <h4 className="font-semibold text-gray-900 text-base mb-1">
                                                {item.data.title}
                                              </h4>
                                              <p className="text-gray-700 text-sm mb-2">{item.data.organization}</p>
                                              <p className="text-xs text-gray-600 leading-relaxed">
                                                {item.data.description}
                                              </p>
                                            </>
                                          )}
                                        </CardContent>
                                      </Card>
                                    </div>
                                  </div>
                                </div>
                              )
                            })}
                          </div>

                          {/* 연도 간 구분선 (마지막 연도가 아닌 경우) */}
                          {yearIndex < educationYears.length - 1 && (
                            <div className="flex justify-center mt-12">
                              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedElement>

          {/* 기술 스택 - neutral 색상으로 변경 */}
          <AnimatedElement animation="slideUp" delay={150} duration={200} className="mb-8">
            <div className="flex justify-center">
              <div className="w-full md:w-4/5 lg:w-5/6">
                <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-gray-50/30">
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">기술 스택</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2 text-sm">언어</h4>
                        <div className="flex flex-wrap gap-1">
                          {skills.languages.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-gray-100 text-gray-700 text-xs hover:bg-lime-100 hover:text-lime-700 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2 text-sm">UI/UX</h4>
                        <div className="flex flex-wrap gap-1">
                          {skills.ui.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-gray-100 text-gray-700 text-xs hover:bg-coral-100 hover:text-coral-700 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2 text-sm">상태 관리</h4>
                        <div className="flex flex-wrap gap-1">
                          {skills.stateManagement.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-gray-100 text-gray-700 text-xs hover:bg-lime-100 hover:text-lime-700 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2 text-sm">아키텍처</h4>
                        <div className="flex flex-wrap gap-1">
                          {skills.architecture.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-gray-100 text-gray-700 text-xs hover:bg-coral-100 hover:text-coral-700 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2 text-sm">개발 도구</h4>
                        <div className="flex flex-wrap gap-1">
                          {skills.devTools.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-gray-100 text-gray-700 text-xs hover:bg-lime-100 hover:text-lime-700 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2 text-sm">협업 도구</h4>
                        <div className="flex flex-wrap gap-1">
                          {skills.collaborationTools.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-gray-100 text-gray-700 text-xs hover:bg-coral-100 hover:text-coral-700 transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedElement>

          {/* 아티클 섹션 - 중앙 정렬 및 width 조정 */}
          {articles && articles.length > 0 && (
            <AnimatedElement animation="slideUp" delay={50} duration={200} className="mb-8">
              <h2 className="text-2xl font-bold text-center text-gray-900 mb-3">아티클</h2>
              <p className="text-center text-gray-500 mb-6 text-sm">개발하면서 정리했던 문서들입니다.</p>
              <div className="flex justify-center">
                <div className="w-full md:w-4/5 lg:w-5/6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {displayedArticles.map((article) => (
                      <Card
                        key={article.id}
                        className="cursor-pointer hover:shadow-lg transition-all duration-300 group hover:bg-gray-50/30"
                        onClick={() => handleArticleClick(article.notionUrl)}
                      >
                        <CardContent className="p-5">
                          <div className="flex items-center gap-2 mb-2">
                            <BookOpen className="w-4 h-4 text-lime-600" />
                            <span className="text-xs text-gray-500">{article.category}</span>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-500">
                              {new Date(article.date).toLocaleDateString("ko-KR")}
                            </span>
                          </div>

                          {/* 아티클 제목 hover 색상 변경 */}
                          <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-lime-600 transition-colors line-clamp-2">
                            {article.title}
                          </h3>

                          <p className="text-gray-600 text-sm mb-3 line-clamp-3">{article.description}</p>

                          {/* 아티클 태그 - neutral 기본, coral accent */}
                          <div className="flex flex-wrap gap-1 mb-3">
                            {article.tags &&
                              article.tags.slice(0, 2).map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="secondary"
                                  className="text-xs bg-gray-100 text-gray-700 hover:bg-coral-100 hover:text-coral-700 transition-colors"
                                >
                                  {tag}
                                </Badge>
                              ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Notion에서 읽기</span>
                            {/* 아티클 아이콘 색상 변경 */}
                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-lime-600 transition-colors" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* 더보기/접기 버튼 */}
                  <div className="text-center mt-6">
                    {/* 더보기 버튼 색상 변경 */}
                    <Button
                      variant="outline"
                      onClick={() => setShowAllArticles(!showAllArticles)}
                      className="border-gray-300 text-gray-600 hover:bg-lime-50 hover:border-lime-500 hover:text-lime-600 px-4 py-2 text-sm"
                    >
                      {showAllArticles ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-2" />
                          접기
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 mr-2" />
                          더보기 ({articles.length - 2}개 더)
                        </>
                      )}
                    </Button>
                  </div>

                  {/* 아티클 목록 링크 */}
                  <div className="text-center mt-4">
                    {/* 아티클 목록 링크 색상 변경 */}
                    <Button
                      variant="ghost"
                      onClick={() => router.push("/article")}
                      className="text-gray-600 hover:text-lime-700 hover:bg-lime-50"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      전체 아티클 목록 보기
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          )}

          {/* 목표 & 비전 - 중앙 정렬 및 width 조정 */}
          <AnimatedElement animation="slideUp" delay={50} duration={200} className="mb-8">
            <div className="text-center space-y-3 mb-6">
              <h2 className="text-2xl font-bold text-gray-900">목표 & 비전</h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">개발자로서의 비전을 소개합니다.</p>
            </div>

            <div className="flex justify-center">
              <div className="w-full md:w-4/5 lg:w-5/6">
                {/* 미래 비전 */}
                <div className="space-y-4 mb-8">
                  {/* 미래 비전 아이콘 색상 변경 */}
                  <h3 className="text-xl font-bold text-center flex items-center justify-center gap-2 text-gray-900">
                    <Eye className="h-5 w-5 text-gray-600" />
                    미래 비전
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {goals.futureVision.map(({ icon, gradient, quote, description }, index) => (
                      // 미래 비전 카드 - neutral 기본, hover에서 lime/coral
                      <div
                        key={index}
                        className="group flex flex-col text-center p-5 backdrop-blur-sm bg-white/90 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full border border-gray-100/50 hover:bg-gray-50/30"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:from-lime-600 group-hover:to-coral-600 transition-all duration-300 group-hover:scale-110">
                          <span className="text-white text-lg">{icon}</span>
                        </div>

                        <blockquote className="italic text-gray-800 mb-3 font-medium text-sm">"{quote}"</blockquote>

                        <p className="text-xs text-gray-600 flex-1 leading-relaxed">{description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 궁극적인 비전 - neutral 색상으로 변경 */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">궁극적인 비전</h4>
                  <div className="backdrop-blur-sm bg-white/90 rounded-lg p-5 text-center shadow-xl border border-gray-100/50 hover:bg-gray-50/30">
                    <p className="text-base text-gray-800 leading-relaxed italic">"{goals.vision.quote}"</p>
                    <p className="text-sm text-gray-600 mt-3 leading-relaxed">{goals.vision.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </article>
      </div>

      {/* 최상단 이동 버튼 - neutral 기본, hover에서 lime/coral */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-lime-500 hover:to-coral-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </main>
  )
}
