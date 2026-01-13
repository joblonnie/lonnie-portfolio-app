"use client"

import { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Github,
  Linkedin,
  PlayCircle,
  GraduationCap,
  Award,
  ExternalLink,
  Lightbulb,
  Users,
  Target,
  Rocket,
  ArrowUp,
} from "lucide-react"
import { mockPortfolioData } from "@/lib/mock-data"
import { cn } from "@/lib/utils"
import React from "react"

export function IntroductionPage() {
  const { personalInfo, skills, companies, projects, education, certifications, goals, articles } = mockPortfolioData

  const [selectedCompanyId, setSelectedCompanyId] = useState<string>(companies[0]?.id || "")
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    projects.find((p) => p.companyId === companies[0]?.id)?.projectId || null,
  )
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showSectionNav, setShowSectionNav] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("profile")
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const selectedProject = useMemo(() => projects.find((p) => p.projectId === selectedProjectId), [selectedProjectId])

  // 총 경력(동적) 계산: 각 회사 period를 기준으로 합산
  const totalExperience = useMemo(() => {
    try {
      let months = 0
      companies.forEach((c: any) => {
        if (c?.period && typeof c.period === "string") {
          const [start, end] = c.period.split(" - ").map((s: string) => s.trim())
          const [sy, sm] = (start || "").split(".").map((n: string) => Number.parseInt(n))
          let ey: number, em: number
          if (end === "재직 중") {
            const now = new Date()
            ey = now.getFullYear()
            em = now.getMonth() + 1
          } else {
            const [eyRaw, emRaw] = (end || "").split(".")
            ey = Number.parseInt(eyRaw)
            em = Number.parseInt(emRaw)
          }
          if (!Number.isNaN(sy) && !Number.isNaN(sm) && !Number.isNaN(ey) && !Number.isNaN(em)) {
            months += (ey - sy) * 12 + (em - sm) + 1
          }
        }
      })
      const years = Math.floor(months / 12)
      const remain = months % 12
      const label = `${years > 0 ? `${years}년` : ""}${
        remain > 0 ? ` ${remain}개월` : years === 0 ? ` ${remain}개월` : ""
      }`.trim()
      return { years, months, label }
    } catch {
      return { years: 0, months: 0, label: "" }
    }
  }, [companies])

  // 회사별 재직 기간(동적) 계산
  const companyDurations = useMemo(() => {
    const map: {
      [id: string]: { years: number; months: number; label: string }
    } = {}
    companies.forEach((c: any) => {
      if (c?.id && c?.period && typeof c.period === "string") {
        const [start, end] = c.period.split(" - ").map((s: string) => s.trim())
        const [sy, sm] = (start || "").split(".").map((n: string) => Number.parseInt(n))
        let ey: number, em: number
        if (end === "재직 중") {
          const now = new Date()
          ey = now.getFullYear()
          em = now.getMonth() + 1
        } else {
          const [eyRaw, emRaw] = (end || "").split(".")
          ey = Number.parseInt(eyRaw)
          em = Number.parseInt(emRaw)
        }
        if (!Number.isNaN(sy) && !Number.isNaN(sm) && !Number.isNaN(ey) && !Number.isNaN(em)) {
          const months = (ey - sy) * 12 + (em - sm) + 1
          const years = Math.floor(months / 12)
          const remain = months % 12
          const label = `${years > 0 ? `${years}년` : ""}${
            remain > 0 ? ` ${remain}개월` : years === 0 ? ` ${remain}개월` : ""
          }`.trim()
          map[c.id] = { years, months, label }
        }
      }
    })
    return map
  }, [companies])

  // 총 경력 기준 n년차 계산 (ex. 4년 8개월 => 5년차)
  const nthYear = useMemo(() => {
    return totalExperience.months > 0 ? totalExperience.years + 1 : 0
  }, [totalExperience])

  useEffect(() => {
    if (!selectedProjectId && companies.length > 0) {
      const firstCompanyProjects = projects.filter((p) => p.companyId === companies[0].id)
      if (firstCompanyProjects.length > 0) {
        setSelectedProjectId(firstCompanyProjects[0].projectId)
      }
    }
  }, [])

  // Observe sections to highlight current item in right-side nav
  useEffect(() => {
    const ids = ["profile", "philosophy", "skills", "projects", "articles", "education", "goals"]
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return
        const mostVisible = visible.reduce((a, b) => (a.intersectionRatio >= b.intersectionRatio ? a : b))
        const rawId = (mostVisible.target as HTMLElement).id
        const id = rawId === "philosophy" ? "profile" : rawId
        if (id) setActiveSection(id)
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const getNavBtnClass = (id: string) =>
    `px-3 py-1.5 rounded-full border text-xs shadow-sm transition-colors ` +
    (activeSection === id
      ? `bg-orange-100 text-gray-900 border-orange-400 font-medium`
      : `bg-white/90 text-gray-700 border-gray-200 hover:bg-gray-100`)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProjectId) return
      const currentIndex = projects.findIndex((p) => p.projectId === selectedProjectId)
      if (e.key === "ArrowLeft" && currentIndex > 0) {
        setSelectedProjectId(projects[currentIndex - 1].projectId)
        setExpandedIndex(null)
      } else if (e.key === "ArrowRight" && currentIndex < projects.length - 1) {
        setSelectedProjectId(projects[currentIndex + 1].projectId)
        setExpandedIndex(null)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedProjectId])

  const handleProjectSelect = (projectId: number) => {
    if (selectedProjectId === projectId) {
      setSelectedProjectId(null)
      setExpandedIndex(null)
    } else {
      setSelectedProjectId(projectId)
      setExpandedIndex(null)
    }
  }

  const getPrimaryCategoryColor = (category?: string) => {
    if (!category) return "bg-gray-100 text-gray-700 border-gray-200"
    const isUX = ["UX", "시각화", "플레이어", "검수"].some((k) => category.includes(k))
    const isPerf = ["최적화", "성능", "무한 스크롤"].some((k) => category.includes(k))
    const isProductivity = ["아키텍처", "모듈화", "문서화", "토큰", "검증", "대시보드", "관리"].some((k) =>
      category.includes(k),
    )

    if (isUX) return "bg-blue-100 text-blue-700 border-blue-200"
    if (isPerf) return "bg-green-100 text-green-700 border-green-200"
    if (isProductivity) return "bg-purple-100 text-purple-700 border-purple-200"
    return "bg-gray-100 text-gray-700 border-gray-200"
  }

  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(false)
  const projectNavRef = React.useRef<HTMLDivElement>(null)

  const updateScrollButtons = React.useCallback(() => {
    if (projectNavRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = projectNavRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }, [])

  const scrollProjects = (direction: "left" | "right") => {
    if (projectNavRef.current) {
      const scrollAmount = 300
      const newScrollLeft = projectNavRef.current.scrollLeft + (direction === "right" ? scrollAmount : -scrollAmount)
      projectNavRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" })
      setTimeout(updateScrollButtons, 300)
    }
  }

  React.useEffect(() => {
    const navElement = projectNavRef.current
    if (navElement) {
      updateScrollButtons()
      navElement.addEventListener("scroll", updateScrollButtons)
      window.addEventListener("resize", updateScrollButtons)
      return () => {
        navElement.removeEventListener("scroll", updateScrollButtons)
        window.removeEventListener("resize", updateScrollButtons)
      }
    }
  }, [updateScrollButtons, selectedCompanyId])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-12">
        {/* 개인 정보 섹션 */}
        <motion.section
          id="profile"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-12"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img src="/profile.png" alt={personalInfo.name} className="w-full h-full object-cover" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{personalInfo.name}</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mt-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="glass-card flex items-center gap-3 p-4 rounded-xl hover:scale-105 transition-all duration-200"
              >
                <Mail className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium text-gray-900 text-sm">이메일</p>
                  <p className="text-xs text-gray-600">{personalInfo.email}</p>
                </div>
              </a>
              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center gap-3 p-4 rounded-xl hover:scale-105 transition-all duration-200"
                >
                  <Github className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">GitHub</p>
                    <p className="text-xs text-gray-600">github.com/joblonnie</p>
                  </div>
                </a>
              )}
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center gap-3 p-4 rounded-xl hover:scale-105 transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">LinkedIn</p>
                    <p className="text-xs text-gray-600">프로필 보기</p>
                  </div>
                </a>
              )}
              {personalInfo.tistory && (
                <a
                  href={personalInfo.tistory}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center gap-3 p-4 rounded-xl hover:scale-105 transition-all duration-200"
                >
                  <PlayCircle className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Tistory</p>
                    <p className="text-xs text-gray-600">개발 블로그</p>
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* 업무 철학 섹션 */}
          <section id="philosophy" className="mt-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">업무 철학</h2>
              <p className="text-gray-600">다양한 실무 경험을 통해 얻은 개발 철학과 협업 원칙은 다음과 같습니다.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card p-8 text-center rounded-2xl hover:scale-[1.02] transition-transform duration-200">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Lightbulb className="w-7 h-7 text-gray-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">사용자 중심의 품질과 성능을 추구합니다</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  사용자가 없으면 제품은 없다고 생각합니다. 사용자 경험을 최우선으로 고려하며, 동시에 성능 최적화를 통해
                  신뢰할 수 있는 제품을 만듭니다. UI/UX 디자이너와의 협업을 통해 사용자의 만족도를 높이는 데 집중합니다.
                </p>
              </div>

              <div className="glass-card p-8 text-center rounded-2xl hover:scale-[1.02] transition-transform duration-200">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Users className="w-7 h-7 text-gray-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">협업과 팀워크는 개발의 기반입니다</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  디자이너, 기획자, 백엔드 개발자와의 긴밀한 커뮤니케이션을 통해 문제를 조기에 해결하고, 더 나은 품질을
                  달성합니다. 또한 팀 내 개발 경험(DX) 개선을 위해 코드 리뷰 문화 정착, 개발 프로세스 최적화, 공통
                  컴포넌트 라이브러리 구축 등을 통해 팀 전체의 생산성 향상에 기여합니다.
                </p>
              </div>
            </div>
          </section>
        </motion.section>

        {/* 기술 스택 섹션 */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">기술 스택</h2>
            <p className="text-gray-600">다양한 프로젝트 경험을 통해 습득한 기술들입니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-200"
              >
                <h3 className="font-semibold text-gray-900 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs bg-white/70 text-gray-700 backdrop-blur-sm border border-gray-200/50"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 경력 및 프로젝트 섹션 */}
        {selectedCompanyId && (
          <motion.section
            id="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="space-y-8"
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">경력 및 프로젝트</h2>
                <p className="text-gray-600 text-sm mt-2">실무 경험과 주요 프로젝트를 소개합니다.</p>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 glass-card rounded-2xl p-4">
                {/* 총 경력 */}
                {totalExperience.label && (
                  <div className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border-2 border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 whitespace-nowrap">
                    <Rocket className="w-4 h-4" />
                    <span className="font-medium">총 경력</span>
                    <span className="font-semibold">{totalExperience.label}</span>
                    {nthYear > 0 && <span className="text-gray-600">({nthYear}년차)</span>}
                  </div>
                )}

                {/* 회사 탭 */}
                <div className="flex flex-wrap gap-2">
                  {companies.map((company) => (
                    <button
                      key={company.id}
                      onClick={() => {
                        setSelectedCompanyId(company.id)
                        const firstProject = projects.find((p) => p.companyId === company.id)
                        setSelectedProjectId(firstProject?.projectId || null)
                        setExpandedIndex(null)
                      }}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 hover:scale-[1.02]",
                        selectedCompanyId === company.id
                          ? "bg-orange-100 border-2 border-orange-400 shadow-md"
                          : "bg-white/60 border border-gray-200/50 hover:bg-white/80",
                      )}
                    >
                      <div className="text-left">
                        <h3 className="text-xs font-bold text-gray-900 leading-tight">{company.name}</h3>
                        <p className="text-[10px] text-gray-500 leading-tight">
                          {companyDurations[company.id]?.label || ""}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {(() => {
                const companyProjects = projects.filter((p) => p.companyId === selectedCompanyId)
                return (
                  <div className="space-y-6">
                    {/* 상단: 프로젝트 네비게이션 (수평 스크롤) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {companyProjects.map((project) => {
                        const isSelected = selectedProjectId === project.projectId
                        return (
                          <button
                            key={project.projectId}
                            onClick={() => {
                              setSelectedProjectId(project.projectId)
                              setExpandedIndex(null)
                            }}
                            className={cn(
                              "glass-card rounded-xl p-5 text-left transition-all duration-200 hover:scale-[1.02] group",
                              isSelected ? "ring-2 ring-lime-400 bg-lime-50/80" : "hover:bg-white/90",
                            )}
                          >
                            <div className="flex gap-4">
                              {project.image && (
                                <div className="flex-shrink-0">
                                  <img
                                    src={project.image || "/placeholder.svg"}
                                    alt={project.title}
                                    className="w-16 h-16 rounded-lg object-contain bg-white p-2"
                                  />
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <h3
                                  className={cn(
                                    "text-base font-bold mb-2 line-clamp-2",
                                    isSelected ? "text-lime-900" : "text-gray-900",
                                  )}
                                >
                                  {project.title}
                                </h3>
                                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">{project.summary}</p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                  {project.period && (
                                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                                      {project.period}
                                    </span>
                                  )}
                                  {project.team?.frontendDevelopers && (
                                    <span className="text-xs px-2 py-1 rounded-full bg-blue-50 text-blue-700">
                                      FE {project.team.frontendDevelopers}명
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </button>
                        )
                      })}
                    </div>

                    {/* 하단: 선택된 프로젝트 상세 (전체 width) */}
                    {selectedProject ? (
                      <motion.div
                        key={selectedProjectId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="glass-card rounded-2xl p-8"
                      >
                        {/* 프로젝트 헤더 */}
                        <div className="mb-8 pb-6 border-b-2 border-gray-200">
                          <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h3>
                          {selectedProject.subtitle && (
                            <p className="text-base text-gray-700 mb-6 leading-relaxed">{selectedProject.subtitle}</p>
                          )}

                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="glass-card rounded-xl p-4">
                              <p className="text-xs text-gray-600 font-medium mb-1">기간</p>
                              <p className="text-sm font-bold text-gray-900">{selectedProject.period}</p>
                            </div>
                            <div className="glass-card rounded-xl p-4">
                              <p className="text-xs text-gray-600 font-medium mb-1">역할</p>
                              <p className="text-sm font-bold text-gray-900">{selectedProject.role}</p>
                            </div>
                          </div>

                          {selectedProject.coreTechnologies && selectedProject.coreTechnologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {selectedProject.coreTechnologies.map((tech: string, tIdx: number) => (
                                <span
                                  key={tIdx}
                                  className="text-xs px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full font-medium border border-gray-300"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}

                          {selectedProject.background && (
                            <div className="glass-card rounded-xl p-4">
                              <h4 className="text-sm font-bold text-gray-900 mb-2">📌 프로젝트 배경</h4>
                              <p className="text-sm text-gray-700 leading-relaxed">{selectedProject.background}</p>
                            </div>
                          )}
                        </div>

                        {/* 주요 기여 */}
                        <div className="space-y-8">
                          <h4 className="text-2xl font-bold text-gray-900 flex items-center gap-3">주요 기여</h4>
                          {selectedProject.structuralContributions?.map((contribution: any, idx: number) => (
                            <article
                              key={idx}
                              id={`contribution-${idx}`}
                              className="glass-card rounded-2xl p-6 transition-all duration-300"
                            >
                              {/* 제목과 카테고리 */}
                              <div className="flex items-start gap-4 mb-4">
                                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                  <Target className="w-7 h-7 text-gray-600" />
                                </div>
                                <div>
                                  <h5 className="text-lg font-bold text-gray-900">{contribution.title}</h5>
                                  {contribution.articleUrl && (
                                    <a
                                      href={contribution.articleUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-lime-600 hover:text-lime-700 transition-colors"
                                      title="아티클 보기"
                                    >
                                      <ExternalLink className="w-5 h-5" />
                                    </a>
                                  )}
                                </div>
                              </div>

                              {/* 요약 */}
                              <p className="text-sm text-gray-700 mb-5 leading-relaxed bg-gray-50 p-4 rounded-lg border border-gray-200">
                                {contribution.summary}
                              </p>

                              {/* 사용 기술 */}
                              {contribution.technologies && contribution.technologies.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-6">
                                  {contribution.technologies.map((tech: string, tIdx: number) => (
                                    <span
                                      key={tIdx}
                                      className="text-xs px-2.5 py-1 bg-orange-100 text-orange-800 rounded-full font-medium border border-orange-200"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {contribution.why && contribution.how && (
                                <div className="space-y-6 mt-6">
                                  {/* Headers in a single row */}
                                  <div className="grid grid-cols-2 gap-8 pb-4 border-b border-gray-200">
                                    <div className="flex items-center gap-3">
                                      <div className="w-10 h-10 rounded-lg bg-gray-800 text-white flex items-center justify-center font-bold shadow-sm">
                                        Why
                                      </div>
                                      <h6 className="text-lg font-bold text-gray-800">배경</h6>
                                    </div>
                                    <div className="flex items-center gap-3">
                                      <div className="w-10 h-10 rounded-lg bg-gray-600 text-white flex items-center justify-center font-bold shadow-sm">
                                        How
                                      </div>
                                      <h6 className="text-lg font-bold text-gray-700">해결</h6>
                                    </div>
                                  </div>

                                  {/* Content pairs with connecting lines */}
                                  <div className="space-y-6">
                                    {contribution.why.map((why: string, wIdx: number) => (
                                      <div key={wIdx} className="relative">
                                        <div className="grid grid-cols-2 gap-8">
                                          {/* Why */}
                                          <div className="pr-4 border-r border-gray-200">
                                            <p className="text-sm text-gray-700 leading-relaxed">{why}</p>
                                          </div>

                                          {/* How */}
                                          {contribution.how[wIdx] && (
                                            <div className="pl-4">
                                              <p className="text-sm text-gray-700 leading-relaxed">
                                                {contribution.how[wIdx]}
                                              </p>
                                            </div>
                                          )}
                                        </div>

                                        {/* Connecting arrow */}
                                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center shadow-sm">
                                          <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="text-gray-500"
                                          >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                          </svg>
                                        </div>
                                      </div>
                                    ))}

                                    {/* Additional How items (if any) */}
                                    {contribution.how.length > contribution.why.length &&
                                      contribution.how
                                        .slice(contribution.why.length)
                                        .map((how: string, hIdx: number) => (
                                          <div key={`extra-${hIdx}`} className="relative">
                                            <div className="grid grid-cols-2 gap-8">
                                              <div className="pr-4 border-r border-gray-200"></div>
                                              <div className="pl-4">
                                                <p className="text-sm text-gray-700 leading-relaxed">{how}</p>
                                              </div>
                                            </div>

                                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center shadow-sm">
                                              <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-gray-500"
                                              >
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                              </svg>
                                            </div>
                                          </div>
                                        ))}
                                  </div>
                                </div>
                              )}

                              {/* Image/Video Media */}
                              {contribution.media && contribution.media.length > 0 && (
                                <div className="space-y-4 mt-6">
                                  {contribution.media.map((item: any, mIdx: number) => (
                                    <div key={mIdx} className="glass-card rounded-xl p-4">
                                      {item.type === "image" ? (
                                        <img
                                          src={item.url || "/placeholder.svg"}
                                          alt={item.caption || `Contribution Image ${mIdx + 1}`}
                                          className="w-full rounded-lg shadow-lg"
                                        />
                                      ) : (
                                        <video src={item.url} controls className="w-full rounded-lg shadow-lg" />
                                      )}
                                      {item.caption && (
                                        <p className="text-xs text-gray-600 mt-2 text-center">{item.caption}</p>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Reflection */}
                              {contribution.reflection && (
                                <div className="bg-lime-50/50 rounded-xl p-5 border-l-4 border-lime-400 mt-6">
                                  <h6 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                                    <span className="w-6 h-6 rounded-full bg-lime-500 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                                      R
                                    </span>
                                    Reflection: What I learned
                                  </h6>
                                  <p className="text-sm text-gray-700 leading-relaxed">{contribution.reflection}</p>
                                </div>
                              )}
                            </article>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <div className="glass-card rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                        <p className="text-gray-500 text-sm">프로젝트를 선택해주세요</p>
                      </div>
                    )}
                  </div>
                )
              })()}
            </div>
          </motion.section>
        )}

        {articles && articles.length > 0 && (
          <motion.section
            id="articles"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">기술 아티클</h2>
              <p className="text-gray-600">개발 경험과 문제 해결 과정을 공유합니다.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="glass-card rounded-2xl p-6 hover:scale-[1.02] hover:shadow-xl transition-all duration-200 cursor-pointer group"
                  onClick={() => window.open(article.notionUrl, "_blank")}
                >
                  <Badge variant="secondary" className="text-xs mb-3 bg-white/80 text-gray-700 border border-gray-200">
                    {article.category}
                  </Badge>
                  <h3 className="font-semibold text-gray-900 group-hover:text-lime-600 transition-colors mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3 leading-relaxed">{article.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-gray-500">{article.date}</p>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-lime-600" />
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags?.slice(0, 4).map((tag, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs bg-white/60 text-gray-600 border-gray-200/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* 학력 · 자격 · 활동 섹션 */}
        <motion.section
          id="education"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">학력 · 자격 · 활동</h2>
            <p className="text-gray-600">학력, 자격증, 그리고 활동 경험을 소개합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">학력</h3>
              </div>
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-gray-200/50 pl-5 py-2">
                  <h4 className="font-semibold text-gray-900 mb-1">{edu.institution}</h4>
                  <p className="text-sm text-gray-600">{edu.degree}</p>
                  <p className="text-xs text-gray-500">{edu.period}</p>
                  {edu.gpa && <p className="text-xs text-gray-500 mt-1">학점: {edu.gpa}</p>}
                  {edu.description && <p className="text-sm text-gray-600 mt-2 leading-relaxed">{edu.description}</p>}
                </div>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <Award className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">인증서</h3>
              </div>
              {certifications.map((cert, index) => (
                <div key={index} className="border-l-4 border-gray-200/50 pl-5 py-2 mb-4 last:mb-0">
                  <h4 className="font-semibold text-gray-900 mb-1">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                  <p className="text-xs text-gray-500">{cert.date}</p>
                  {cert.description && <p className="text-sm text-gray-600 mt-2 leading-relaxed">{cert.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {goals && goals.futureVision && goals.futureVision.length > 0 && (
          <motion.section
            id="goals"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">목표 및 비전</h2>
              <p className="text-gray-600">앞으로 이루고 싶은 목표와 비전입니다.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-card rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Target className="w-7 h-7 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{goals.futureVision[0].quote}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{goals.futureVision[0].description}</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Rocket className="w-7 h-7 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{goals.futureVision[1].quote}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{goals.futureVision[1].description}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* 우측 섹션 네비게이션 (스크롤 시 표시) */}
        {showSectionNav && (
          <nav
            aria-label="섹션 네비게이션"
            className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2"
          >
            <button
              onClick={() => scrollToId("profile")}
              title="프로필 · 업무 철학"
              className={getNavBtnClass("profile")}
            >
              프로필
            </button>
            <button onClick={() => scrollToId("skills")} title="기술 스택" className={getNavBtnClass("skills")}>
              기술 스택
            </button>
            <button
              onClick={() => scrollToId("projects")}
              title="경력 및 프로젝트"
              className={getNavBtnClass("projects")}
            >
              경력 및 프로젝트
            </button>
            <button onClick={() => scrollToId("articles")} title="아티클" className={getNavBtnClass("articles")}>
              아티클
            </button>
            <button
              onClick={() => scrollToId("education")}
              title="학력 · 자격 · 활동"
              className={getNavBtnClass("education")}
            >
              학력 · 자격 · 활동
            </button>
            <button onClick={() => scrollToId("goals")} title="목표 및 비전" className={getNavBtnClass("goals")}>
              목표 및 비전
            </button>
          </nav>
        )}

        {/* 스크롤 탑 버튼 */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            title="맨 위로"
            aria-label="맨 위로 스크롤"
            className="fixed bottom-8 right-8 z-40 glass-card p-3 rounded-full shadow-xl hover:scale-110 transition-transform duration-200"
          >
            <ArrowUp className="w-6 h-6 text-gray-700" />
          </button>
        )}
      </div>
    </div>
  )
}
