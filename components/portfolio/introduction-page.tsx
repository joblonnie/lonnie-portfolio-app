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
  MapPin,
  Phone,
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

  const handleSideProjectClick = (project: any) => {
    if (project.demo) {
      window.open(project.demo, "_blank")
    } else if (project.github) {
      window.open(project.github, "_blank")
    }
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
    sideProjects,
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

  // 연도별로 그룹화하는 함수 추가
  const getProjectsByYear = () => {
    const projectsByYear: { [key: number]: typeof timelineProjects } = {}

    timelineProjects.forEach((project) => {
      if (!projectsByYear[project.startYear]) {
        projectsByYear[project.startYear] = []
      }
      projectsByYear[project.startYear].push(project)
    })

    return projectsByYear
  }

  const projectsByYear = getProjectsByYear()
  const years = Object.keys(projectsByYear)
    .map(Number)
    .sort((a, b) => b - a) // 최신순

  // 사이드 프로젝트를 연도별로 그룹화하는 함수
  const getSideProjectsByYear = () => {
    const sideProjectsWithYear = sideProjects.map((project) => {
      const startPart = project.period.split(" - ")[0]
      const year = Number.parseInt(startPart.split(".")[0])
      return {
        ...project,
        startYear: year,
        startDate: new Date(year, 0),
      }
    })

    const sideProjectsByYear: { [key: number]: typeof sideProjectsWithYear } = {}
    sideProjectsWithYear.forEach((project) => {
      if (!sideProjectsByYear[project.startYear]) {
        sideProjectsByYear[project.startYear] = []
      }
      sideProjectsByYear[project.startYear].push(project)
    })

    return sideProjectsByYear
  }

  const sideProjectsByYear = getSideProjectsByYear()
  const sideProjectYears = Object.keys(sideProjectsByYear)
    .map(Number)
    .sort((a, b) => b - a)

  // 학력·자격·활동을 연도별로 그룹화하는 함수 (사이드 프로젝트 제외)
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
      {/* 배경 효과 - 중성적인 톤으로 변경 */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-gray-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-gray-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/4 h-1/4 bg-gradient-to-r from-gray-50/30 to-gray-100/20 rounded-full blur-2xl"></div>
        <div className="absolute inset-0 bg-white/95"></div>
      </div>

      <div className="relative z-10 py-6 px-4 sm:px-6 lg:px-8">
        <article className="max-w-6xl mx-auto space-y-6">
          {/* 개인 정보 섹션 - 중앙 정렬 및 width 조정 */}
          <AnimatedElement animation="scaleIn" delay={0} duration={200} className="space-y-4">
            <div className="flex justify-center">
              <div className="w-full md:w-3/4">
                <div className="bg-gradient-to-br from-white via-gray-50/50 to-gray-100/30 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200/50 backdrop-blur-sm">
                  {/* 포트폴리오 타이틀 */}
                  <div className="text-center space-y-3 mb-6">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 bg-clip-text text-transparent leading-tight">
                      {introduction.headline}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 font-medium">{introduction.subtitle}</p>
                  </div>

                  {/* 프로필 섹션 */}
                  <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
                    {/* 아바타 */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full blur-xl opacity-20 scale-110"></div>
                      <Avatar className="w-32 h-32 sm:w-36 sm:h-36 relative z-10 ring-4 ring-white shadow-xl">
                        <AvatarImage src="/profile.png" alt="Profile" />
                        <AvatarFallback className="text-2xl sm:text-3xl bg-gradient-to-br from-gray-600 to-gray-700 text-white">
                          {personalInfo?.name?.charAt(0) || "L"}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    {/* 정보 섹션 */}
                    <div className="flex-1 text-center lg:text-left space-y-4">
                      {/* 이름과 직책 */}
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-700 to-gray-800 bg-clip-text text-transparent mb-1">
                          {personalInfo?.name || "개발자"}
                        </h2>
                        <p className="text-lg text-gray-600 font-medium">{personalInfo?.title || "풀스택 개발자"}</p>
                      </div>

                      {/* 연락처 정보 */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="group bg-gradient-to-br from-white to-gray-50/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-gray-300/50">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                              <MapPin className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-left flex-1">
                              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">위치</p>
                              <p className="text-sm text-gray-800 font-semibold group-hover:text-gray-900 transition-colors">
                                {personalInfo?.location || "서울"}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div
                          onClick={handleEmailClick}
                          className="group bg-gradient-to-br from-white to-lime-50/50 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-lime-200/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:border-lime-300/50"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-lime-600 to-lime-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                              <Mail className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-left flex-1">
                              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">이메일</p>
                              <p className="text-sm text-gray-800 font-semibold group-hover:text-lime-700 transition-colors">
                                {personalInfo?.email || "joblonnie@gmail.com"}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="group bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-gray-300/50">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
                              <Phone className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-left flex-1">
                              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">연락처</p>
                              <p className="text-sm text-gray-800 font-semibold group-hover:text-gray-900 transition-colors">
                                {personalInfo?.phone || "010-5054-0121"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 소셜 링크 - 설명 추가 및 GitHub 추가 */}
                      <div className="space-y-3">
                        <p className="text-sm text-gray-600 text-center lg:text-left font-medium">
                          개발 여정을 기록하는 공간
                        </p>
                        <div className="flex gap-3 justify-center lg:justify-start flex-wrap">
                          <a
                            href={personalInfo?.tistory}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:border-lime-500 hover:text-lime-600 hover:bg-lime-50 transition-all duration-300 shadow-sm hover:shadow-md"
                          >
                            <svg
                              className="w-4 h-4 group-hover:rotate-12 transition-transform"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm-1 4v12l8-6-8-6z" />
                            </svg>
                            <div className="text-left">
                              <div className="font-semibold">Tistory</div>
                              <div className="text-xs text-gray-500">개발 블로그</div>
                            </div>
                            <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </a>

                          <a
                            href={personalInfo?.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:border-gray-500 hover:text-gray-800 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md"
                          >
                            <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <div className="text-left">
                              <div className="font-semibold">GitHub</div>
                              <div className="text-xs text-gray-500">코드 저장소</div>
                            </div>
                            <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </a>

                          <a
                            href={personalInfo?.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:border-gray-500 hover:text-gray-800 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md"
                          >
                            <svg
                              className="w-4 h-4 group-hover:scale-110 transition-transform"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            <div className="text-left">
                              <div className="font-semibold">LinkedIn</div>
                              <div className="text-xs text-gray-500">프로필</div>
                            </div>
                            <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 소개 텍스트 */}
                  <div className="mt-6">
                    <div className="bg-gradient-to-br from-white/95 to-gray-50/70 rounded-xl p-6 shadow-lg border border-gray-200/50 backdrop-blur-sm">
                      <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p className="text-base font-semibold text-gray-900 border-l-4 border-lime-600 pl-4">
                          {introduction.description[0]}
                        </p>
                        {introduction.description.slice(1, -1).map((desc, index) => (
                          <p key={index} className="pl-4 text-sm">
                            {desc}
                          </p>
                        ))}
                        <p className="text-gray-600 italic pl-4 border-l-4 border-gray-400 text-sm">
                          {introduction.description[introduction.description.length - 1]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* 업무 철학 - 중앙 정렬 및 width 조정 */}
          <AnimatedElement animation="slideUp" delay={300} duration={200} className="mb-8">
            <div className="flex justify-center">
              <div className="w-full md:w-3/4">
                <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:bg-gray-50">
                  <CardContent className="p-6">
                    <header className="text-xl font-bold text-gray-900 mb-4 text-center">업무 철학</header>

                    <p className="text-center text-gray-500 mb-6 text-sm">
                      다양한 실무 경험을 통해 얻은 개발 철학과 협업 원칙은 다음과 같습니다.
                    </p>

                    {/* 상단 2개 철학 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {introduction.philosophy.map(({ title, description }, index) => (
                        <div
                          key={index}
                          className="group flex flex-col text-center p-4 bg-white/70 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full border border-gray-100/50 hover:bg-gray-50"
                        >
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md group-hover:bg-gray-200 transition-all duration-300 group-hover:scale-110">
                            {index === 0 ? <Lightbulb className="w-5 h-5" /> : <Users className="w-5 h-5" />}
                          </div>

                          <blockquote className="italic text-gray-800 mb-3 font-medium text-sm">"{title}"</blockquote>

                          <p className="text-xs text-gray-600 flex-1 leading-relaxed">{description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </AnimatedElement>

          {/* 프로젝트 타임라인 */}
          <AnimatedElement animation="slideUp" delay={100} duration={200} className="mb-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-3">프로젝트 타임라인</h2>
            <p className="text-center text-gray-500 mb-6 text-sm">
              시간 순서대로 진행했던 프로젝트들의 여정을 확인해보세요.
            </p>

            <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0">
              <CardContent className="p-6">
                <div className="space-y-12">
                  {years.map((year, yearIndex) => (
                    <div key={year} className="relative">
                      {/* 연도 표시 */}
                      <div className="flex items-center justify-center mb-8">
                        <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-full shadow-lg font-bold text-lg">
                          {year}
                        </div>
                      </div>

                      {/* 해당 연도의 프로젝트들 */}
                      <div className="space-y-8">
                        {projectsByYear[year].map((project, index) => (
                          <div key={project.projectId} className="relative">
                            {/* 타임라인 포인트 */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-6">
                              <div className="w-4 h-4 bg-lime-600 rounded-full border-4 border-white shadow-lg"></div>
                            </div>

                            {/* 프로젝트 카드 - 가운데 정렬 */}
                            <div className="flex justify-center">
                              <div className="w-full md:w-3/4">
                                <Card
                                  className="group bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:-translate-y-1 border border-gray-100/50 shadow-md hover:bg-gray-50"
                                  onClick={() => handleProjectClick(project)}
                                >
                                  <CardContent className="p-6">
                                    {/* 회사 정보 */}
                                    <div className="flex items-center gap-2 mb-3">
                                      <Building className="w-4 h-4 text-gray-500" />
                                      <span className="text-sm text-gray-600 font-medium">{project.companyName}</span>
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
                                        <p className="text-sm text-gray-600 mb-2 font-medium">{project.subtitle}</p>
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
                                            className="px-2 py-1 bg-lime-100 text-lime-700 text-xs rounded-full shadow-sm border border-lime-200 hover:bg-lime-200 hover:text-lime-800 transition-all duration-300"
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
                                          className="text-xs bg-gray-100 text-gray-700"
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

                      {/* 연도 간 구분선 (마지막 연도가 아닌 경우) */}
                      {yearIndex < years.length - 1 && (
                        <div className="flex justify-center mt-12">
                          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedElement>

          {/* 사이드 프로젝트 타임라인 */}
          <AnimatedElement animation="slideUp" delay={50} duration={200} className="mb-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-3">사이드 프로젝트</h2>
            <p className="text-center text-gray-500 mb-6 text-sm">개인적으로 진행한 사이드 프로젝트들을 소개합니다.</p>

            <div className="flex justify-center">
              <div className="w-full md:w-3/4">
                <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0">
                  <CardContent className="p-6">
                    <div className="space-y-12">
                      {sideProjectYears.map((year, yearIndex) => (
                        <div key={year} className="relative">
                          {/* 연도 표시 */}
                          <div className="flex items-center justify-center mb-8">
                            <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-full shadow-lg font-bold text-lg">
                              {year}
                            </div>
                          </div>

                          {/* 해당 연도의 사이드 프로젝트들 */}
                          <div className="space-y-8">
                            {sideProjectsByYear[year].map((project, index) => (
                              <div key={`${project.title}-${index}`} className="relative">
                                {/* 타임라인 포인트 */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-6">
                                  <div className="w-4 h-4 bg-gray-600 rounded-full border-4 border-white shadow-lg"></div>
                                </div>

                                {/* 사이드 프로젝트 카드 */}
                                <div className="flex justify-center">
                                  <div className="w-full">
                                    <Card
                                      className="group bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:-translate-y-1 border border-gray-100/50 shadow-md hover:bg-gray-50"
                                      onClick={() => handleSideProjectClick(project)}
                                    >
                                      <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                          {/* 프로젝트 이미지 */}
                                          {project.image && (
                                            <div className="flex-shrink-0 p-2 bg-gray-50 rounded-lg">
                                              <img
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                className="w-16 h-16 object-contain rounded"
                                              />
                                            </div>
                                          )}

                                          <div className="flex-1">
                                            {/* 프로젝트 정보 */}
                                            <div className="flex items-start justify-between mb-2">
                                              <div>
                                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-lime-600 transition-colors mb-1">
                                                  {project.title}
                                                </h3>
                                                <p className="text-sm text-gray-600 font-medium">
                                                  {project.organization}
                                                </p>
                                              </div>
                                              {project.status && (
                                                <Badge
                                                  variant="outline"
                                                  className={`text-xs ${
                                                    project.status === "완료"
                                                      ? "border-lime-200 text-lime-700 bg-lime-50"
                                                      : "border-gray-200 text-gray-700 bg-gray-50"
                                                  }`}
                                                >
                                                  {project.status}
                                                </Badge>
                                              )}
                                            </div>

                                            {/* 기간 정보 */}
                                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                              <Clock className="w-4 h-4" />
                                              <span className="font-medium">{project.period}</span>
                                            </div>

                                            <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                                              {project.description}
                                            </p>

                                            {/* 기술 스택 */}
                                            {project.technologies && (
                                              <div className="flex flex-wrap gap-1 mb-3">
                                                {project.technologies.map((tech, techIndex) => (
                                                  <Badge
                                                    key={techIndex}
                                                    variant="secondary"
                                                    className="text-xs bg-gray-100 text-gray-700"
                                                  >
                                                    {tech}
                                                  </Badge>
                                                ))}
                                              </div>
                                            )}

                                            {/* 링크 */}
                                            <div className="flex gap-2 text-xs">
                                              {project.github && (
                                                <span className="text-gray-500 flex items-center gap-1">
                                                  <Github className="w-3 h-3" />
                                                  GitHub
                                                </span>
                                              )}
                                              {project.demo && (
                                                <span className="text-gray-500 flex items-center gap-1">
                                                  <ExternalLink className="w-3 h-3" />
                                                  Demo
                                                </span>
                                              )}
                                            </div>
                                          </div>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* 연도 간 구분선 (마지막 연도가 아닌 경우) */}
                          {yearIndex < sideProjectYears.length - 1 && (
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

          {/* 학력 · 수료 · 활동 - 연도별 타임라인 (사이드 프로젝트 제외) */}
          <AnimatedElement animation="slideUp" delay={50} duration={200} className="mb-8">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-3">학력 · 수료 · 활동</h2>
            <p className="text-center text-gray-500 mb-6 text-sm">
              학력, 수료증, 그리고 활동 경험을 최신순으로 소개합니다.
            </p>

            <div className="flex justify-center">
              <div className="w-full md:w-3/4">
                <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0">
                  <CardContent className="p-6">
                    <div className="space-y-12">
                      {educationYears.map((year, yearIndex) => (
                        <div key={year} className="relative">
                          {/* 연도 표시 */}
                          <div className="flex items-center justify-center mb-8">
                            <div className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-full shadow-lg font-bold text-lg">
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
                                      color: "bg-gray-600",
                                      icon: <Activity className="h-4 w-4 text-white" />,
                                      badge: { bg: "bg-gray-100", text: "text-gray-700", label: "사내활동" },
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
                                  {/* 타임라인 포인트 */}
                                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-6">
                                    <div
                                      className={`w-4 h-4 ${config.color} rounded-full border-4 border-white shadow-lg`}
                                    ></div>
                                  </div>

                                  {/* 카드 - 가운데 정렬 */}
                                  <div className="flex justify-center">
                                    <div className="w-full">
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

          {/* 기술 스택 - 중앙 정렬 및 width 조정 */}
          <AnimatedElement animation="slideUp" delay={150} duration={200} className="mb-8">
            <div className="flex justify-center">
              <div className="w-full md:w-3/4">
                <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-gray-50">
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">기술 스택</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-2 text-sm">언어</h4>
                        <div className="flex flex-wrap gap-1">
                          {skills.languages.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-2 text-sm">UI/UX</h4>
                        <div className="flex flex-wrap gap-1">
                          {skills.ui.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-2 text-sm">상태 관리</h4>
                        <div className="flex flex-wrap gap-1">
                          {skills.stateManagement.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-2 text-sm">아키텍처</h4>
                        <div className="flex flex-wrap gap-1">
                          {skills.architecture.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-2 text-sm">개발 도구</h4>
                        <div className="flex flex-wrap gap-1">
                          {skills.devTools.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-2 text-sm">협업 도구</h4>
                        <div className="flex flex-wrap gap-1">
                          {skills.collaborationTools.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-gray-100 text-gray-700 text-xs">
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
                <div className="w-full md:w-3/4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {displayedArticles.map((article) => (
                      <Card
                        key={article.id}
                        className="cursor-pointer hover:shadow-lg transition-all duration-300 group hover:bg-gray-50"
                        onClick={() => handleArticleClick(article.notionUrl)}
                      >
                        <CardContent className="p-5">
                          <div className="flex items-center gap-2 mb-2">
                            <BookOpen className="w-4 h-4 text-gray-600" />
                            <span className="text-xs text-gray-500">{article.category}</span>
                            <span className="text-xs text-gray-400">•</span>
                            <span className="text-xs text-gray-500">
                              {new Date(article.date).toLocaleDateString("ko-KR")}
                            </span>
                          </div>

                          <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-lime-600 transition-colors line-clamp-2">
                            {article.title}
                          </h3>

                          <p className="text-gray-600 text-sm mb-3 line-clamp-3">{article.description}</p>

                          <div className="flex flex-wrap gap-1 mb-3">
                            {article.tags &&
                              article.tags.slice(0, 2).map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                                  {tag}
                                </Badge>
                              ))}
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Notion에서 읽기</span>
                            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-lime-600 transition-colors" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* 더보기/접기 버튼 */}
                  {articles && articles.length > 2 && (
                    <div className="text-center mt-6">
                      <Button
                        variant="outline"
                        onClick={() => setShowAllArticles(!showAllArticles)}
                        className="border-gray-500 text-gray-600 hover:bg-gray-50 px-4 py-2 text-sm"
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
                  )}

                  {/* 아티클 목록 링크 */}
                  <div className="text-center mt-4">
                    <Button
                      variant="ghost"
                      onClick={() => router.push("/article")}
                      className="text-lime-600 hover:text-lime-700 hover:bg-lime-50"
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
              <div className="w-full md:w-3/4">
                {/* 미래 비전 */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-bold text-center flex items-center justify-center gap-2 text-gray-900">
                    <Eye className="h-5 w-5 text-gray-600" />
                    미래 비전
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {goals.futureVision.map(({ icon, quote, description }, index) => (
                      <div
                        key={index}
                        className="group flex flex-col text-center p-5 backdrop-blur-sm bg-white/90 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full border border-gray-100/50 hover:bg-gray-50"
                      >
                        <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:bg-gray-700 transition-all duration-300 group-hover:scale-110">
                          <span className="text-white text-lg">{icon}</span>
                        </div>

                        <blockquote className="italic text-gray-800 mb-3 font-medium text-sm">"{quote}"</blockquote>

                        <p className="text-xs text-gray-600 flex-1 leading-relaxed">{description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 궁극적인 비전 */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">궁극적인 비전</h4>
                  <div className="backdrop-blur-sm bg-white/90 rounded-lg p-5 text-center shadow-xl border border-gray-100/50 hover:bg-gray-50">
                    <p className="text-base text-gray-800 leading-relaxed italic">"{goals.vision.quote}"</p>
                    <p className="text-sm text-gray-600 mt-3 leading-relaxed">{goals.vision.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </article>
      </div>

      {/* 최상단 이동 버튼 */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-lime-500 hover:bg-lime-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </main>
  )
}
