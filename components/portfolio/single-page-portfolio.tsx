"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import {
  MapPin,
  Calendar,
  User,
  Mail,
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  Zap,
  Briefcase,
  Users,
  Github,
  Linkedin,
  Target,
  CheckCircle,
} from "lucide-react"
import { mockPortfolioData } from "@/lib/mock-data"
import type { Project, ImprovementType } from "@/lib/types"

const getImprovementTypeColor = (type: ImprovementType) => {
  switch (type) {
    case "UX":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
    case "DX":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    default:
      return ""
  }
}

export function SinglePagePortfolio() {
  const router = useRouter()
  const portfolioData = mockPortfolioData

  const handleProjectClick = (project: Project) => {
    router.push(`/project/${project.projectId}`)
  }

  const skillCategories = [
    {
      title: "프로그래밍 언어",
      icon: <Code className="h-5 w-5" />,
      skills: portfolioData.skills.languages,
      color: "from-gray-500 to-gray-600",
    },
    {
      title: "UI/UX 라이브러리 및 프레임워크",
      icon: <Palette className="h-5 w-5" />,
      skills: portfolioData.skills.ui,
      color: "from-gray-500 to-gray-600",
    },
    {
      title: "상태 관리",
      icon: <Database className="h-5 w-5" />,
      skills: portfolioData.skills.stateManagement,
      color: "from-gray-500 to-gray-600",
    },
    {
      title: "아키텍처",
      icon: <Smartphone className="h-5 w-5" />,
      skills: portfolioData.skills.architecture,
      color: "from-gray-500 to-gray-600",
    },
    {
      title: "개발 도구",
      icon: <Zap className="h-5 w-5" />,
      skills: portfolioData.skills.devTools,
      color: "from-gray-500 to-gray-600",
    },
    {
      title: "협업 도구",
      icon: <Globe className="h-5 w-5" />,
      skills: portfolioData.skills.collaborationTools,
      color: "from-gray-500 to-gray-600",
    },
  ]

  // Get projects by company
  const getProjectsByCompany = (companyId: string) => {
    return portfolioData.projects.filter((project) => project.companyId === companyId)
  }

  const externalLinks = [
    {
      name: "GitHub",
      url: "https://github.com/joblonnie",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/donghyun-kim-a52b62207/",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Tistory Blog",
      url: "https://aosjehdgus.tistory.com/",
      icon: <Globe className="h-5 w-5" />,
    },
  ]

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background p-8 print:p-4">
        {/* 상단 컨트롤 */}
        <div className="absolute top-4 right-4 z-50 print:hidden">
          <ThemeToggle />
        </div>

        <div className="max-w-6xl mx-auto space-y-12 print:space-y-6 print:max-w-none">
          {/* 커버 섹션 */}
          <section className="text-center space-y-8 py-12 bg-card rounded-3xl relative overflow-hidden avoid-break print:py-6 print:space-y-4">
            {/* 배경 장식 */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 space-y-6">
              <div className="relative inline-block">
                <Avatar className="w-32 h-32 sm:w-40 sm:h-40 mx-auto ring-4 ring-white/50 shadow-2xl print:w-24 print:h-24 print:ring-2">
                  <AvatarImage src="/profile.png" alt="Profile" />
                  <AvatarFallback className="text-2xl sm:text-3xl bg-gradient-to-br from-gray-400 to-gray-500 text-white print:text-xl">
                    {portfolioData.personalInfo?.name?.charAt(0) || "L"}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg print:w-6 print:h-6 print:border-2"></div>
              </div>

              <div className="space-y-4 print:space-y-2">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-lime-600 to-coral-600 bg-clip-text text-transparent print:text-3xl print:text-gray-900">
                  {portfolioData.personalInfo?.name || "개발자"}
                </h1>
                <p className="text-2xl text-gray-700 dark:text-gray-300 font-medium print:text-lg">
                  {portfolioData.personalInfo?.title || "풀스택 개발자"}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed print:text-base">
                  {portfolioData.personalInfo?.bio || "혁신적인 웹 솔루션을 만드는 개발자입니다."}
                </p>
              </div>
            </div>

            {/* 개인 정보 카드 */}
            <Card className="bg-card/80 dark:bg-card/80 backdrop-blur-sm border-0 shadow-xl max-w-2xl mx-auto relative z-10">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    {portfolioData.personalInfo?.location || "대한민국"}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    4년차 개발자
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <User className="h-4 w-4 text-gray-500" />
                    Available for work
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Mail className="h-4 w-4 text-gray-500" />
                    {portfolioData.personalInfo?.email || "contact@example.com"}
                  </div>
                </div>

                {/* External Links - Icon only with tooltips */}
                <div className="flex justify-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-600">
                  {externalLinks.map((link, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="w-10 h-10 p-0 rounded-full bg-transparent hover:bg-secondary"
                        >
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.icon}
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{link.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 업무 철학 */}
          <section className="space-y-8 avoid-break print:space-y-4">
            <Card className="bg-card border-0 avoid-break">
              <CardContent className="p-8 print:p-4">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center print:text-xl print:mb-4">
                  업무 철학
                </h2>

                {/* 상단 2개 철학 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:grid-cols-1 print:gap-3 mb-8">
                  {[
                    {
                      icon: <User className="h-6 w-6" />,
                      quote: "사용자 중심의 품질과 성능을 추구합니다",
                      description:
                        "사용자가 없으면 제품은 없다고 생각합니다. 사용자 경험을 최우선으로 고려하며, 동시에 성능 최적화를 통해 신뢰할 수 있는 제품을 만듭니다. UI/UX 디자이너와의 협업을 통해 사용자의 만족도를 높이는 데 집중합니다.",
                    },
                    {
                      icon: <Users className="h-6 w-6" />,
                      quote: "협업과 팀워크는 개발의 기반입니다",
                      description:
                        "디자이너, 기획자, 백엔드 개발자와의 긴밀한 커뮤니케이션을 통해 문제를 조기에 해결하고, 더 나은 품질을 달성합니다. 또한 팀 내 개발 경험(DX) 개선을 위해 코드 리뷰 문화 정착, 개발 프로세스 최적화, 공통 컴포넌트 라이브러리 구축 등을 통해 팀 전체의 생산성 향상에 기여합니다.",
                    },
                  ].map(({ icon, quote, description }, index) => (
                    <div
                      key={index}
                      className="flex flex-col text-center p-6 bg-card rounded-xl shadow-sm h-full avoid-break print:p-4"
                    >
                      <div className="w-16 h-16 bg-gray-500 rounded-lg flex items-center justify-center mx-auto mb-4 print:w-12 print:h-12 print:mb-2">
                        <span className="text-white">{icon}</span>
                      </div>
                      <blockquote className="italic text-gray-800 dark:text-gray-200 mb-4 font-medium print:text-sm print:mb-2">
                        "{quote}"
                      </blockquote>
                      <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 leading-relaxed">{description}</p>
                    </div>
                  ))}
                </div>

                {/* 하단 프로세스 개선 철학 */}
                <div className="grid grid-cols-1 gap-6 print:gap-3">
                  {[
                    {
                      icon: <Zap className="h-6 w-6" />,
                      quote: "프로세스 개선을 통한 생산성 향상을 추구합니다",
                      description:
                        "효율적인 개발 프로세스와 자동화를 통해 팀의 생산성을 높이는 것을 중요하게 생각합니다. 반복적인 작업을 줄이고, 업무 워크플로우를 최적화하여 더 나은 결과물을 만들어냅니다.",
                      hasReference: true,
                    },
                  ].map(({ icon, quote, description, hasReference }, index) => (
                    <div
                      key={index}
                      className="flex flex-col text-center p-6 bg-card rounded-xl shadow-sm h-full avoid-break print:p-4"
                    >
                      <div className="w-16 h-16 bg-gray-500 rounded-lg flex items-center justify-center mx-auto mb-4 print:w-12 print:h-12 print:mb-2">
                        <span className="text-white">{icon}</span>
                      </div>
                      <blockquote className="italic text-gray-800 dark:text-gray-200 mb-4 font-medium print:text-sm print:mb-2">
                        "{quote}"
                      </blockquote>
                      <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 leading-relaxed">{description}</p>

                      {hasReference && (
                        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                          <p className="text-xs font-medium text-blue-900 dark:text-blue-100 mb-2">참고 자료</p>
                          <div className="space-y-1">
                            <a
                              href="https://www.notion.so/22b4c99a0f8180daa669e4ca8083fd66"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 hover:underline"
                            >
                              업무 프로세스 개선
                            </a>
                            <a
                              href="https://www.notion.so/PR-template-22b4c99a0f8180d6a24fc3f88d3e9c1b"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 hover:underline"
                            >
                              좋은 코드 리뷰 문화 유지를 위한 PR template 정의하기
                            </a>
                            <a
                              href="https://www.notion.so/22b4c99a0f81804a9060ea16b423aff9"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 hover:underline"
                            >
                              구글 크롬 북마크를 활용한 생산성 향상
                            </a>
                            <a
                              href="https://www.notion.so/Outlook-22b4c99a0f81807c92ccc3c2b8bb776d"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 hover:underline"
                            >
                              Outlook 메일 자동 분류로 생산성 향상
                            </a>
                            <a
                              href="https://www.notion.so/FE-22b4c99a0f8180afb842d15c973c634e"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 hover:underline"
                            >
                              프론트엔드 개발 프로세스 최적화
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 학력 */}
          <section className="space-y-6">
            <Card className="bg-card shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center text-white">
                    🎓
                  </div>
                  학력
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white text-lg">서경대학교 나노융합공학과</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">학점 3.7 / 4.5</p>
                    <p>
                      3D 프린팅, 재료 설계 등 다양한 제작 프로젝트를 경험하며, 무언가를 직접 만들고 결과물을 눈앞에
                      보여주는 일에 큰 흥미를 느꼈습니다. 이러한 경험이 웹 개발로 이어졌고, 사용자에게 가치를 전달하는
                      개발자로 성장하는 계기가 되었습니다.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 경력 및 프로젝트 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">경력 및 프로젝트</h2>
            <div className="space-y-8">
              {portfolioData.companies.map((company, index) => (
                <Card key={index} className="bg-card shadow-lg border-0">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Briefcase className="h-8 w-8 text-gray-500" />
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{company.position}</h3>
                            <p className="text-lg text-coral-500 font-medium">{company.name}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-500 dark:text-gray-400">{company.period}</p>
                            <p className="text-sm text-gray-400">({company.duration})</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 프로젝트 목록 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">담당 프로젝트</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {getProjectsByCompany(company.id).map((project) => (
                          <Card
                            key={project.projectId}
                            className="bg-secondary hover:shadow-md transition-all duration-300 border-0"
                          >
                            <CardContent className="p-6">
                              <div className="flex justify-between items-start mb-3">
                                <div className="flex-1">
                                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-lime-600 transition-colors">
                                    {project.title}
                                  </h5>
                                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
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
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleProjectClick(project)
                                  }}
                                  className="flex items-center gap-2 text-gray-500 hover:text-gray-600"
                                >
                                  상세보기
                                </Button>
                              </div>

                              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                                {project.detailedDescription?.summary?.split(".").slice(0, 2).join(".") + "." ||
                                  project.background.split(".").slice(0, 2).join(".") + "."}
                              </p>

                              {/* 키워드 태그 */}
                              {project.keywords && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {project.keywords.map((keyword, keywordIndex) => (
                                    <span
                                      key={keywordIndex}
                                      className="px-2 py-1 bg-lime-100 text-lime-700 dark:bg-lime-900/20 dark:text-lime-400 text-xs rounded-full"
                                    >
                                      {keyword}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {/* 프로젝트 상세 내용 - 확장 시 표시 */}
                              <div
                                className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600 space-y-6 max-w-full overflow-hidden"
                                style={{
                                  wordBreak: "break-word",
                                  overflowWrap: "break-word",
                                }}
                              >
                                {/* 프로젝트 대표 이미지 */}
                                {project.image && (
                                  <div className="w-full max-w-md mx-auto">
                                    <img
                                      src={project.image || "/placeholder.svg"}
                                      alt={project.title}
                                      className="w-full h-auto object-contain rounded-lg max-h-48"
                                    />
                                  </div>
                                )}

                                {/* 기술 스택 및 키워드 */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                  <Card>
                                    <CardHeader className="pb-3">
                                      <CardTitle className="text-base">사용 기술</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                      <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech, index) => (
                                          <Badge
                                            key={index}
                                            variant="secondary"
                                            className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 text-xs"
                                          >
                                            {tech}
                                          </Badge>
                                        ))}
                                      </div>
                                    </CardContent>
                                  </Card>

                                  <Card>
                                    <CardHeader className="pb-3">
                                      <CardTitle className="text-base">핵심 키워드</CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                      <div className="flex flex-wrap gap-2">
                                        {project.keywords?.map((keyword, index) => (
                                          <Badge
                                            key={index}
                                            variant="outline"
                                            className="border-gray-200 text-gray-700 dark:border-gray-700 dark:text-gray-300 text-xs"
                                          >
                                            {keyword}
                                          </Badge>
                                        ))}
                                      </div>
                                    </CardContent>
                                  </Card>
                                </div>

                                {/* 프로젝트 내용 */}
                                <Card>
                                  <CardHeader className="pb-3">
                                    <CardTitle className="flex items-center gap-2 text-base">
                                      <Target className="h-4 w-4 text-gray-600 flex-shrink-0" />
                                      <span>프로젝트 내용</span>
                                    </CardTitle>
                                  </CardHeader>
                                  <CardContent className="pt-0">
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                      {project.background}
                                    </p>
                                  </CardContent>
                                </Card>

                                {/* 주요 기여사항 */}
                                {project.structuralContributions && project.structuralContributions.length > 0 && (
                                  <Card>
                                    <CardHeader className="pb-3">
                                      <CardTitle className="flex items-center gap-2 text-base">
                                        <Briefcase className="h-4 w-4 text-gray-600 flex-shrink-0" />
                                        <span>주요 기여사항</span>
                                      </CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-0 space-y-4">
                                      {project.structuralContributions.map((contribution, index) => (
                                        <div
                                          key={index}
                                          className="border-l-4 border-gray-200 pl-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-r"
                                        >
                                          <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">
                                            {contribution.title}
                                          </h4>

                                          {/* solutionList 표시 */}
                                          {contribution.solutionList && contribution.solutionList.length > 0 && (
                                            <div className="space-y-3 mb-4">
                                              {contribution.solutionList.map((solution, solutionIndex) => (
                                                <div key={solutionIndex} className="border-l-2 border-gray-300 pl-3">
                                                  <h5 className="font-medium text-gray-800 dark:text-gray-200 text-sm mb-1">
                                                    {solution.title}
                                                  </h5>
                                                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                                    {solution.description}
                                                  </p>
                                                </div>
                                              ))}
                                            </div>
                                          )}

                                          <div className="space-y-2">
                                            <h5 className="font-medium text-gray-800 dark:text-gray-200 text-sm">
                                              주요 성과
                                            </h5>
                                            <ul className="space-y-2">
                                              {contribution.achievementList.map((achievement, achIndex) => (
                                                <li key={achIndex} className="flex items-start gap-2 text-sm">
                                                  <CheckCircle className="h-3 w-3 text-gray-600 mt-0.5 flex-shrink-0" />
                                                  <div className="flex-1">
                                                    <span className="text-gray-700 dark:text-gray-300">
                                                      {achievement.text}
                                                    </span>
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
                                        </div>
                                      ))}
                                    </CardContent>
                                  </Card>
                                )}

                                {/* 기술적 기여 */}
                                {project.technicalContributions && project.technicalContributions.length > 0 && (
                                  <Card>
                                    <CardHeader className="pb-3">
                                      <CardTitle className="flex items-center gap-2 text-base">
                                        <Code className="h-4 w-4 text-gray-600 flex-shrink-0" />
                                        <span>기술적 기여</span>
                                      </CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-0 space-y-4">
                                      {project.technicalContributions.map((contribution, index) => (
                                        <div
                                          key={index}
                                          className="border-l-4 border-gray-200 pl-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-r"
                                        >
                                          <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">
                                            {contribution.title}
                                          </h4>
                                          <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed mb-3">
                                            {contribution.description}
                                          </p>
                                          <ul className="space-y-2">
                                            {contribution.achievementList.map((achievement, achIndex) => (
                                              <li
                                                key={achIndex}
                                                className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                                              >
                                                <CheckCircle className="h-3 w-3 text-gray-600 mt-0.5 flex-shrink-0" />
                                                <span>{achievement.text}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </CardContent>
                                  </Card>
                                )}

                                {/* 핵심 성과 */}
                                {project.detailedDescription?.results && (
                                  <Card>
                                    <CardHeader className="pb-3">
                                      <CardTitle className="flex items-center gap-2 text-base">
                                        <CheckCircle className="h-4 w-4 text-gray-600 flex-shrink-0" />
                                        <span>핵심 성과</span>
                                      </CardTitle>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                      <div className="prose prose-sm max-w-none">
                                        <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">
                                          {project.detailedDescription.summary}
                                        </h4>
                                        <div className="whitespace-pre-wrap text-sm leading-relaxed font-sans bg-gray-50 dark:bg-gray-800/50 p-3 sm:p-4 rounded-md overflow-x-auto">
                                          {project.detailedDescription.results}
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 기술 스택 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">기술 스택</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category, index) => (
                <Card key={index} className="bg-card shadow-lg border-0 hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white`}
                      >
                        {category.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-50 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* 미래 비전 */}
          <section className="space-y-8">
            <Card className="bg-card border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">미래 비전</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {portfolioData.goals.futureVision.map((vision, index) => (
                    <div key={index} className="flex flex-col text-center p-6 bg-card rounded-xl shadow-sm h-full">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${vision.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <span className="text-white text-2xl">{vision.icon}</span>
                      </div>
                      <blockquote className="italic text-gray-800 dark:text-gray-200 mb-4 font-medium">
                        "{vision.quote}"
                      </blockquote>
                      <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 leading-relaxed">
                        {vision.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* 미래 포부 */}
          <Card className="bg-card border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">미래 포부</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-lime-500 rounded-full"></span>
                      단기 목표 (1-2년)
                    </h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      {portfolioData.goals.shortTerm.map((goal, idx) => (
                        <li key={goal.title + idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-lime-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">
                            <strong>{goal.title}:</strong> {goal.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-coral-500 rounded-full"></span>
                      장기 목표 (3-5년)
                    </h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      {portfolioData.goals.longTerm.map((goal, idx) => (
                        <li key={goal.title + idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-coral-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">
                            <strong>{goal.title}:</strong> {goal.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">궁극적인 비전</h3>
                <div className="bg-card rounded-xl p-6 text-center">
                  <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed italic">
                    "{portfolioData.goals.vision.quote}"
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                    {portfolioData.goals.vision.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  )
}
