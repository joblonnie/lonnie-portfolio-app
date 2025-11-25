"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
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
} from "lucide-react"
import { mockPortfolioData } from "@/lib/mock-data"
import type { Project, StructuralContribution } from "@/lib/types"

export function IntroductionPage() {
  const { personalInfo, skills, companies, projects, education, certifications, goals, articles } = mockPortfolioData

  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [isEditMode, setIsEditMode] = useState(false)
  const [editedProject, setEditedProject] = useState<Project | null>(null)
  const [animatedContributions, setAnimatedContributions] = useState<{ [key: string]: number }>({})

  const selectedProject = selectedProjectId
    ? editedProject || projects.find((p) => p.projectId === selectedProjectId)
    : null

  useEffect(() => {
    if (!selectedProjectId && companies.length > 0) {
      const firstCompanyProjects = projects.filter((p) => p.companyId === companies[0].id)
      if (firstCompanyProjects.length > 0) {
        setSelectedProjectId(firstCompanyProjects[0].projectId)
      }
    }
  }, [])

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
    if (selectedProject?.contributions) {
      setAnimatedContributions({})
      selectedProject.contributions.forEach((contribution, index) => {
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
  }, [selectedProject])

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
      setIsEditMode(false)
    } else {
      setSelectedProjectId(projectId)
      setExpandedIndex(null)
      setIsEditMode(false)
    }
  }

  const handleEditMode = () => setIsEditMode(true)

  const handleSave = () => {
    if (editedProject && selectedProjectId) {
      localStorage.setItem(`project_${selectedProjectId}`, JSON.stringify(editedProject))
      setIsEditMode(false)
    }
  }

  const handleCancel = () => {
    const original = projects.find((p) => p.projectId === selectedProjectId)
    if (original) setEditedProject({ ...original })
    setIsEditMode(false)
  }

  const updateProjectField = (field: keyof Project, value: any) => {
    if (!editedProject) return
    setEditedProject({ ...editedProject, [field]: value })
  }

  const updateContribution = (index: number, field: keyof StructuralContribution, value: any) => {
    if (!editedProject?.structuralContributions) return
    const updated = { ...editedProject }
    updated.structuralContributions = [...updated.structuralContributions]
    updated.structuralContributions[index] = { ...updated.structuralContributions[index], [field]: value }
    setEditedProject(updated)
  }

  const updateContributionArray = (
    index: number,
    field: "problemDescription" | "solutionDescription" | "reflection",
    itemIndex: number,
    value: string,
  ) => {
    if (!editedProject?.structuralContributions) return
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
    if (!editedProject?.structuralContributions) return
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
    if (!editedProject?.structuralContributions) return
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

  const currentProjectIndex = selectedProjectId ? projects.findIndex((p) => p.projectId === selectedProjectId) : -1
  const prevProject = currentProjectIndex > 0 ? projects[currentProjectIndex - 1] : null
  const nextProject = currentProjectIndex < projects.length - 1 ? projects[currentProjectIndex + 1] : null

  const handleSaveProject = () => {
    if (editedProject && selectedProjectId) {
      localStorage.setItem(`project_${selectedProjectId}`, JSON.stringify(editedProject))
      setIsEditMode(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-16">
        {/* 개인 정보 섹션 */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-100 shadow-lg flex-shrink-0">
                <img src="/profile.png" alt={personalInfo.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{personalInfo.name}</h1>
                <p className="text-xl text-gray-600 mb-6">{personalInfo.title}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
                  >
                    <Mail className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium text-gray-900 text-sm">이메일</p>
                      <p className="text-xs text-gray-500">{personalInfo.email}</p>
                    </div>
                  </a>
                  {personalInfo.github && (
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                      <Github className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">GitHub</p>
                        <p className="text-xs text-gray-500">github.com/joblonnie</p>
                      </div>
                    </a>
                  )}
                  {personalInfo.linkedin && (
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                      <Linkedin className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">LinkedIn</p>
                        <p className="text-xs text-gray-500">프로필 보기</p>
                      </div>
                    </a>
                  )}
                  {personalInfo.tistory && (
                    <a
                      href={personalInfo.tistory}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200"
                    >
                      <PlayCircle className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Tistory</p>
                        <p className="text-xs text-gray-500">개발 블로그</p>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* 업무 철학 섹션 추가 */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-3">업무 철학</h2>
            <p className="text-center text-gray-500 mb-8">
              다양한 실무 경험을 통해 얻은 개발 철학과 협업 원칙은 다음과 같습니다.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">"사용자 중심의 품질과 성능을 추구합니다"</h3>
                <p className="text-gray-600 leading-relaxed">
                  사용자가 없으면 제품은 없다고 생각합니다. 사용자 경험을 최우선으로 고려하며, 동시에 성능 최적화를 통해
                  신뢰할 수 있는 제품을 만듭니다. UI/UX 디자이너와의 협업을 통해 사용자의 만족도를 높이는 데 집중합니다.
                </p>
              </Card>

              <Card className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-gray-600" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">"협업과 팀워크는 개발의 기반입니다"</h3>
                <p className="text-gray-600 leading-relaxed">
                  디자이너, 기획자, 백엔드 개발자와의 긴밀한 커뮤니케이션을 통해 문제를 조기에 해결하고, 더 나은 품질을
                  달성합니다. 또한 팀 내 개발 경험(DX) 개선을 위해 코드 리뷰 문화 정착, 개발 프로세스 최적화, 공통
                  컴포넌트 라이브러리 구축 등을 통해 팀 전체의 생산성 향상에 기여합니다.
                </p>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* 기술 스택 섹션 */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">기술 스택</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* 경력 및 프로젝트 섹션 */}
        <section id="projects" className="py-8 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">경력 및 프로젝트</h2>
              <p className="text-gray-600 text-sm mt-1">실무 경험과 주요 프로젝트를 소개합니다.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* 좌측: 회사 및 프로젝트 목록 */}
              <div className="lg:col-span-2 space-y-6">
                {companies.map((company) => {
                  const companyProjects = projects.filter((p) => p.companyId === company.id)
                  return (
                    <div key={company.id} className="bg-white rounded-lg border border-gray-200 p-4">
                      {/* 회사 헤더 */}
                      <div className="flex items-center gap-3 mb-3">
                        {company.logo && (
                          <img
                            src={company.logo || "/placeholder.svg"}
                            alt={company.name}
                            className="w-10 h-10 object-contain rounded-lg border p-1"
                          />
                        )}
                        <div>
                          <h3 className="text-sm font-bold text-gray-900">{company.name}</h3>
                          <p className="text-xs text-gray-500">{company.period}</p>
                        </div>
                      </div>

                      {/* 프로젝트 목록 */}
                      <div className="space-y-2">
                        {companyProjects.map((proj) => (
                          <div
                            key={proj.projectId}
                            className={`cursor-pointer rounded-lg border p-2.5 transition-all hover:shadow-sm ${
                              proj.projectId === selectedProjectId
                                ? "border-lime-500 bg-lime-50 ring-1 ring-lime-200"
                                : "border-gray-100 bg-gray-50 hover:border-gray-200"
                            }`}
                            onClick={() => handleProjectSelect(proj.projectId)}
                          >
                            <div className="flex items-center gap-2">
                              {proj.image && (
                                <img
                                  src={proj.image || "/placeholder.svg"}
                                  alt={proj.title}
                                  className="w-6 h-6 object-contain rounded flex-shrink-0"
                                />
                              )}
                              <p className="text-xs font-medium text-gray-900 leading-tight flex-1">{proj.title}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* 우측: 선택된 프로젝트 상세 */}
              <div className="lg:col-span-3">
                {selectedProject && (
                  <motion.div
                    key={selectedProject.projectId}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg border border-gray-200 p-6 sticky top-4"
                  >
                    {/* 프로젝트 헤더 */}
                    <div className="mb-6">
                      <div className="flex items-start gap-4 mb-3">
                        {selectedProject.image && (
                          <img
                            src={selectedProject.image || "/placeholder.svg"}
                            alt={selectedProject.title}
                            className="w-12 h-12 object-contain rounded-lg border p-1"
                          />
                        )}
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{selectedProject.title}</h3>
                          {selectedProject.subtitle && (
                            <p className="text-sm text-gray-600 mb-2">{selectedProject.subtitle}</p>
                          )}
                          <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                            <span>{selectedProject.period}</span>
                            {selectedProject.role && (
                              <>
                                <span>•</span>
                                <span>{selectedProject.role}</span>
                              </>
                            )}
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

                      {selectedProject.background && (
                        <p className="text-sm text-gray-600 leading-relaxed">{selectedProject.background}</p>
                      )}
                    </div>

                    {/* 기여 사항 목록 */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-bold text-gray-900">주요 기여</h4>
                      {selectedProject.structuralContributions?.map((contribution, idx) => (
                        <div key={idx} className="border-l-2 border-lime-400 pl-4">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h5 className="text-sm font-semibold text-gray-900">{contribution.title}</h5>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${
                                contribution.primaryCategory === "사용자 경험 개선"
                                  ? "bg-blue-100 text-blue-700"
                                  : contribution.primaryCategory === "성능 최적화"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-purple-100 text-purple-700"
                              }`}
                            >
                              {contribution.primaryCategory}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 mb-2">{contribution.summary}</p>

                          {/* 기술 스택 */}
                          {contribution.technologies && contribution.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-2">
                              {contribution.technologies.map((tech, techIdx) => (
                                <span key={techIdx} className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* 펼치기/접기 버튼 */}
                          <button
                            onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
                            className="text-xs text-lime-600 hover:text-lime-700 font-medium"
                          >
                            {expandedIndex === idx ? "접기" : "상세 보기"}
                          </button>

                          {/* 상세 내용 */}
                          {expandedIndex === idx && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-3 space-y-3"
                            >
                              {contribution.problemDescription && contribution.problemDescription.length > 0 && (
                                <div>
                                  <h6 className="text-xs font-semibold text-gray-700 mb-1">문제 상황</h6>
                                  <ul className="text-xs text-gray-600 space-y-1">
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
                                  <h6 className="text-xs font-semibold text-gray-700 mb-1">해결 방안</h6>
                                  <ul className="text-xs text-gray-600 space-y-1">
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
                                  <h6 className="text-xs font-semibold text-gray-700 mb-1">회고</h6>
                                  <ul className="text-xs text-gray-600 space-y-1">
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

                    {selectedProject.projectReflection && (
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <h4 className="text-sm font-bold text-gray-900 mb-2">프로젝트 회고</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{selectedProject.projectReflection}</p>
                      </div>
                    )}
                  </motion.div>
                )}

                {!selectedProject && (
                  <div className="bg-gray-50 rounded-lg border border-gray-200 p-8 flex items-center justify-center h-full min-h-[300px]">
                    <p className="text-gray-500 text-sm">좌측에서 프로젝트를 선택해주세요</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 학력 · 자격 · 활동 섹션 */}
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">학력 · 자격 · 활동</h2>
            <p className="text-gray-600">학력, 자격증, 그리고 활동 경험을 소개합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 학력 카드 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">학력</h3>
                </div>
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-gray-200 pl-4">
                    <h4 className="font-semibold text-gray-900">{edu.institution}</h4>
                    <p className="text-sm text-gray-600">{edu.degree}</p>
                    <p className="text-xs text-gray-500">{edu.period}</p>
                    {edu.gpa && <p className="text-xs text-gray-500">학점: {edu.gpa}</p>}
                    {edu.description && <p className="text-sm text-gray-600 mt-2">{edu.description}</p>}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* 인증서 카드 */}
            <Card className="border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <Award className="w-5 h-5 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">인증서</h3>
                </div>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className={index > 0 ? "pt-4 border-t border-gray-100" : ""}>
                      <h4 className="font-semibold text-gray-900">{cert.name}</h4>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                      <p className="text-xs text-gray-500">{cert.date}</p>
                      {cert.description && <p className="text-sm text-gray-600 mt-2">{cert.description}</p>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {articles && articles.length > 0 && (
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">아티클</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.map((article, index) => (
                <a key={index} href={article.notionUrl} target="_blank" rel="noopener noreferrer" className="group">
                  <Card className="border-gray-200 h-full hover:shadow-lg transition-all hover:border-lime-300">
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="text-xs mb-2 bg-lime-100 text-lime-700">
                        {article.category}
                      </Badge>
                      <h3 className="font-semibold text-gray-900 group-hover:text-lime-600 transition-colors mb-2 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{article.description}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">{article.date}</p>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-lime-500" />
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {article.tags?.slice(0, 3).map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs bg-gray-50 text-gray-600">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </motion.section>
        )}

        {goals && goals.futureVision && goals.futureVision.length > 0 && (
          <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">목표 및 비전</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {goals.futureVision.map((vision, index) => (
                <Card key={index} className="border-gray-200 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center">
                        {index === 0 ? (
                          <Target className="w-6 h-6 text-lime-600" />
                        ) : (
                          <Rocket className="w-6 h-6 text-lime-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{vision.quote}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{vision.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {goals.vision && (
              <Card className="mt-6 border-lime-200 bg-lime-50/50">
                <CardContent className="p-6">
                  <p className="text-lg font-semibold text-gray-900 mb-2 text-center">"{goals.vision.quote}"</p>
                  <p className="text-sm text-gray-600 text-center leading-relaxed">{goals.vision.description}</p>
                </CardContent>
              </Card>
            )}
          </motion.section>
        )}
      </div>
    </div>
  )
}
