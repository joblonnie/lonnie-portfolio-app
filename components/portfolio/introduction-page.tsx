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
  ArrowLeft,
  ArrowRight,
} from "lucide-react"
import { mockPortfolioData } from "@/lib/mock-data"
import type { Project } from "@/lib/types"
import { cn } from "@/lib/utils"

export function IntroductionPage() {
  const { personalInfo, skills, companies, projects, education, certifications, goals, articles } = mockPortfolioData

  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [editedProject, setEditedProject] = useState<Project | null>(null)

  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showSectionNav, setShowSectionNav] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("profile")
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })
  const scrollToId = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const selectedProject = selectedProjectId
    ? editedProject || projects.find((p) => p.projectId === selectedProjectId)
    : null

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
    const ids = ["profile", "philosophy", "skills", "projects", "education", "articles", "goals"]
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
      ? `bg-orange-100 text-orange-700 border-orange-300`
      : `bg-white/90 text-gray-700 border-gray-200 hover:bg-gray-100`)

  useEffect(() => {
    if (selectedProjectId) {
      const foundProject = projects.find((p) => p.projectId === selectedProjectId)
      if (foundProject) {
        const saved = localStorage.getItem(`project_${selectedProjectId}`)
        if (saved) {
          setEditedProject(JSON.parse(saved))
        } else {
          setEditedProject(foundProject)
        }
      }
    }
  }, [selectedProjectId])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop
      setShowScrollTop(y > 400)
      setShowSectionNav(y > 200)

      // Determine active section by marker line approach
      const ids = ["profile", "philosophy", "skills", "projects", "education", "articles", "goals"]
      const marker = Math.round(window.innerHeight * 0.3) // 30% from top
      let nextActive = activeSection
      let matched = false
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= marker && rect.bottom >= marker) {
          nextActive = id === "philosophy" ? "profile" : id
          matched = true
          break
        }
      }
      if (!matched) {
        if (y < 120) nextActive = "profile"
        const bottomReached = Math.ceil(window.innerHeight + y) >= Math.floor(document.documentElement.scrollHeight - 2)
        if (bottomReached) nextActive = "goals"
      }
      if (nextActive !== activeSection) setActiveSection(nextActive)
    }
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [activeSection])

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-16">
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
                    <Lightbulb className="w-7 h-7 text-lime-600" />
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
                    <Users className="w-7 h-7 text-lime-600" />
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
        <section id="projects" className="py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">경력 및 프로젝트</h2>
              <p className="text-gray-600 text-sm mt-2">실무 경험과 주요 프로젝트를 소개합니다.</p>
              {totalExperience.label && (
                <div className="mt-4">
                  <span className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border-2 border-lime-300 bg-lime-50/80 backdrop-blur-sm text-lime-700">
                    <Rocket className="w-4 h-4" />
                    <span className="font-medium">총 경력</span>
                    <span className="font-semibold">{totalExperience.label}</span>
                    {nthYear > 0 && <span className="text-lime-600">({nthYear}년차)</span>}
                  </span>
                </div>
              )}
              <p className="text-xs text-gray-500 mt-3 flex items-center justify-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                좌우 화살표 키로 프로젝트 이동
                <ArrowRight className="w-4 h-4" />
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* 좌측: 회사 및 프로젝트 목록 */}
              <div className="lg:col-span-2 space-y-6">
                {companies.map((company) => {
                  const companyProjects = projects.filter((p) => p.companyId === company.id)
                  return (
                    <div key={company.id} className="glass-card rounded-2xl p-6">
                      {/* 회사 헤더 */}
                      <div className="flex items-center gap-3 mb-4">
                        {company.logo && (
                          <img
                            src={company.logo || "/placeholder.svg"}
                            alt={company.name}
                            className="w-12 h-12 object-contain rounded-lg border border-white/50 bg-white/50 p-2"
                          />
                        )}
                        <div>
                          <h3 className="text-base font-bold text-gray-900">{company.name}</h3>
                          <p className="text-xs text-gray-600">
                            {company.period}
                            {companyDurations[company.id]?.label && ` (${companyDurations[company.id].label})`}
                          </p>
                        </div>
                      </div>

                      {/* 프로젝트 목록 */}
                      <div className="space-y-3">
                        {companyProjects.map((project) => (
                          <button
                            key={project.projectId}
                            onClick={() => handleProjectSelect(project.projectId)}
                            className={cn(
                              "w-full text-left p-4 rounded-xl transition-all duration-200",
                              selectedProjectId === project.projectId
                                ? "bg-lime-100/80 border-2 border-lime-400 shadow-md scale-[1.02]"
                                : "bg-white/50 backdrop-blur-sm hover:bg-white/70 border border-white/50 hover:scale-[1.01]",
                            )}
                          >
                            <div className="flex items-center gap-3">
                              {project.image && (
                                <img
                                  src={project.image || "/placeholder.svg"}
                                  alt={project.title}
                                  className="w-8 h-8 object-contain rounded flex-shrink-0"
                                />
                              )}
                              <p className="text-sm font-medium text-gray-900 leading-snug flex-1">{project.title}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* 우측: 선택된 프로젝트 상세 */}
              {selectedProject && (
                <div className="lg:col-span-3 lg:sticky lg:top-24 space-y-6">
                  <div className="glass-card rounded-2xl p-8">
                    {/* 프로젝트 헤더 */}
                    <div className="mb-6">
                      <div className="flex items-start gap-4 mb-4">
                        {selectedProject.image && (
                          <img
                            src={selectedProject.image || "/placeholder.svg"}
                            alt={selectedProject.title}
                            className="w-16 h-16 object-contain rounded-xl border border-white/50 bg-white/50 p-2"
                          />
                        )}
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
                          {selectedProject.subtitle && (
                            <p className="text-sm text-gray-600 mb-3">{selectedProject.subtitle}</p>
                          )}
                          <div className="space-y-2 text-xs text-gray-600">
                            <div className="flex flex-wrap gap-2">
                              <span className="font-medium">{selectedProject.period}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.role && <span>{selectedProject.role}</span>}
                              {selectedProject.frontendDevelopers > 0 && (
                                <>
                                  <span>•</span>
                                  <span>FE {selectedProject.frontendDevelopers}명</span>
                                </>
                              )}
                              {selectedProject.backendDevelopers && selectedProject.backendDevelopers > 0 && (
                                <>
                                  <span>•</span>
                                  <span>BE {selectedProject.backendDevelopers}명</span>
                                </>
                              )}
                              {selectedProject.qaDevelopers && selectedProject.qaDevelopers > 0 && (
                                <>
                                  <span>•</span>
                                  <span>QA {selectedProject.qaDevelopers}명</span>
                                </>
                              )}
                              {selectedProject.productDesigners && selectedProject.productDesigners > 0 && (
                                <>
                                  <span>•</span>
                                  <span>PD {selectedProject.productDesigners}명</span>
                                </>
                              )}
                              {selectedProject.aiResearchers && (
                                <>
                                  <span>•</span>
                                  <span>AI 연구원 {selectedProject.aiResearchers}명</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {selectedProject.background && (
                        <div className="space-y-3">
                          {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2">
                              {selectedProject.technologies.map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="text-xs px-2.5 py-1 bg-white/70 text-gray-700 rounded-full border border-gray-200/50"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                          <p className="text-sm text-gray-700 leading-relaxed">{selectedProject.background}</p>
                        </div>
                      )}
                    </div>

                    {/* 기여 사항 목록 */}
                    <div className="space-y-5">
                      <h4 className="text-base font-bold text-gray-900">주요 기여</h4>
                      {selectedProject.structuralContributions?.map((contribution, idx) => (
                        <div key={idx} className="border-l-4 border-lime-400 pl-5 py-2">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h5 className="text-sm font-semibold text-gray-900 flex-1">{contribution.title}</h5>
                            {contribution.category && (
                              <span className="text-xs px-3 py-1 rounded-full whitespace-nowrap bg-lime-100/80 text-lime-700 font-medium border border-lime-200">
                                {contribution.category}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 mb-3 leading-relaxed">{contribution.summary}</p>

                          {/* 기술 스택 */}
                          {contribution.technologies && contribution.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {contribution.technologies.map((tech, techIdx) => (
                                <span
                                  key={techIdx}
                                  className="text-xs px-2 py-0.5 bg-white/70 text-gray-600 rounded-full border border-gray-200/50"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* 펼치기/접기 버튼 */}
                          <button
                            onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                            className="text-xs text-lime-600 hover:text-lime-700 font-medium hover:underline"
                          >
                            {expandedIndex === idx ? "접기" : "상세 보기"}
                          </button>

                          {/* 상세 내용 */}
                          {expandedIndex === idx && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-4 space-y-4"
                            >
                              {contribution.problemDescription && contribution.problemDescription.length > 0 && (
                                <div>
                                  <h6 className="text-xs font-semibold text-gray-700 mb-2">문제 상황</h6>
                                  <ul className="text-xs text-gray-600 space-y-1.5">
                                    {contribution.problemDescription.map((problem, pIdx) => (
                                      <li key={pIdx} className="flex gap-2">
                                        <span className="text-gray-400">•</span>
                                        <span>{problem}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {contribution.solutionDescription && contribution.solutionDescription.length > 0 && (
                                <div>
                                  <h6 className="text-xs font-semibold text-gray-700 mb-2">해결 방안</h6>
                                  <ul className="text-xs text-gray-600 space-y-1.5">
                                    {contribution.solutionDescription.map((solution, sIdx) => (
                                      <li key={sIdx} className="flex gap-2">
                                        <span className="text-gray-400">•</span>
                                        <span>{solution}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {contribution.reflection && contribution.reflection.length > 0 && (
                                <div>
                                  <h6 className="text-xs font-semibold text-gray-700 mb-2">회고</h6>
                                  <ul className="text-xs text-gray-600 space-y-1.5">
                                    {contribution.reflection.map((ref, rIdx) => (
                                      <li key={rIdx} className="flex gap-2">
                                        <span className="text-gray-400">•</span>
                                        <span>{ref}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </motion.div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 프로젝트 회고 */}
                  {selectedProject.projectReflection && (
                    <div className="glass-card rounded-2xl p-6">
                      <h4 className="text-sm font-bold text-gray-900 mb-3">프로젝트 회고</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{selectedProject.projectReflection}</p>
                    </div>
                  )}
                </div>
              )}

              {!selectedProject && (
                <div className="lg:col-span-3 glass-card rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                  <p className="text-gray-500 text-sm">좌측에서 프로젝트를 선택해주세요</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 학력 · 자격 · 활동 섹션 */}
        <motion.section
          id="education"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
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
                  <GraduationCap className="w-6 h-6 text-lime-600" />
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
                  <Award className="w-6 h-6 text-lime-600" />
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

        {articles && articles.length > 0 && (
          <motion.section
            id="articles"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">기술 아티클</h2>
              <p className="text-gray-600">개발 경험과 문제 해결 과정을 공유합니다.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.slice(0, 6).map((article) => (
                <div
                  key={article.id}
                  className="glass-card rounded-2xl p-6 hover:scale-[1.02] hover:shadow-xl transition-all duration-200 cursor-pointer group"
                  onClick={() => (window.location.href = `/article/${article.id}`)}
                >
                  <Badge
                    variant="secondary"
                    className="text-xs mb-3 bg-lime-100/80 text-lime-700 border border-lime-200"
                  >
                    {article.category}
                  </Badge>
                  <h3 className="font-semibold text-gray-900 group-hover:text-lime-600 transition-colors mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3 leading-relaxed">{article.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-gray-500">{article.date}</p>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-lime-500" />
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
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-lime-100/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Target className="w-7 h-7 text-lime-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{goals.futureVision[0].quote}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{goals.futureVision[0].description}</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-lime-100/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <Rocket className="w-7 h-7 text-lime-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{goals.futureVision[1].quote}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{goals.futureVision[1].description}</p>
                  </div>
                </div>
              </div>
            </div>
            {goals.vision && (
              <div className="glass-card rounded-2xl p-8 border-2 border-lime-300 bg-lime-50/60">
                <p className="text-xl font-semibold text-gray-900 mb-3 text-center">"{goals.vision.quote}"</p>
                <p className="text-sm text-gray-700 text-center leading-relaxed">{goals.vision.description}</p>
              </div>
            )}
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
            <button
              onClick={() => scrollToId("education")}
              title="학력 · 자격 · 활동"
              className={getNavBtnClass("education")}
            >
              학력 · 자격 · 활동
            </button>
            <button onClick={() => scrollToId("articles")} title="아티클" className={getNavBtnClass("articles")}>
              아티클
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
