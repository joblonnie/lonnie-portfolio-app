"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
} from "lucide-react";
import { mockPortfolioData } from "@/lib/mock-data";
import { ProjectDetailModal } from "./project-detail-modal";
import type { Project } from "@/lib/types";

export function SinglePagePortfolio() {
  const portfolioData = mockPortfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const skillCategories = [
    {
      title: "프로그래밍 언어",
      icon: <Code className="h-5 w-5" />,
      skills: portfolioData.skills.languages,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "UI/UX 라이브러리 및 프레임워크",
      icon: <Palette className="h-5 w-5" />,
      skills: portfolioData.skills.ui,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "상태 관리",
      icon: <Database className="h-5 w-5" />,
      skills: portfolioData.skills.stateManagement,
      color: "from-green-500 to-green-600",
    },
    {
      title: "아키텍처",
      icon: <Smartphone className="h-5 w-5" />,
      skills: portfolioData.skills.architecture,
      color: "from-red-500 to-red-600",
    },
    {
      title: "개발 도구",
      icon: <Zap className="h-5 w-5" />,
      skills: portfolioData.skills.devTools,
      color: "from-indigo-500 to-indigo-600",
    },
    {
      title: "협업 도구",
      icon: <Globe className="h-5 w-5" />,
      skills: portfolioData.skills.collaborationTools,
      color: "from-orange-500 to-orange-600",
    },
  ];

  // Get projects by company
  const getProjectsByCompany = (companyId: string) => {
    return portfolioData.projects.filter(
      (project) => project.companyId === companyId
    );
  };

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
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
      {/* 상단 컨트롤 */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {/* 커버 섹션 */}
        <section className="text-center space-y-8 py-12 bg-gradient-to-br from-[#6495ED]/20 via-[#7B68EE]/20 to-[#9370DB]/20 dark:from-[#4169E1]/30 dark:via-[#6A5ACD]/30 dark:to-[#8A2BE2]/30 rounded-3xl relative overflow-hidden">
          {/* 배경 장식 */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#6495ED]/30 to-[#7B68EE]/30 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#7B68EE]/30 to-[#9370DB]/30 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 space-y-6">
            <div className="relative inline-block">
              <Avatar className="w-32 h-32 mx-auto ring-4 ring-white/50 shadow-2xl">
                <AvatarImage src="/avatar.png" alt="Profile" />
                <AvatarFallback className="text-3xl bg-gradient-to-br from-[#6495ED] to-[#7B68EE] text-white">
                  {portfolioData.personalInfo?.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-[#6495ED] to-[#7B68EE] bg-clip-text text-transparent">
                {portfolioData.personalInfo?.name || "개발자"}
              </h1>
              <p className="text-2xl text-gray-700 dark:text-gray-300 font-medium">
                {portfolioData.personalInfo?.title || "풀스택 개발자"}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {portfolioData.personalInfo?.bio ||
                  "혁신적인 웹 솔루션을 만드는 개발자입니다."}
              </p>
            </div>
          </div>

          {/* 개인 정보 카드 */}
          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl max-w-2xl mx-auto relative z-10">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <MapPin className="h-4 w-4 text-[#6495ED]" />
                  {portfolioData.personalInfo?.location || "대한민국"}
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Calendar className="h-4 w-4 text-[#6495ED]" />
                  4년차 개발자
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <User className="h-4 w-4 text-[#6495ED]" />
                  Available for work
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                  <Mail className="h-4 w-4 text-[#6495ED]" />
                  {portfolioData.personalInfo?.email || "contact@example.com"}
                </div>
              </div>

              {/* External Links - Icon only with tooltips */}
              <TooltipProvider>
                <div className="flex justify-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-600">
                  {externalLinks.map((link, index) => (
                    <Tooltip key={index}>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="w-10 h-10 p-0 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
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
              </TooltipProvider>
            </CardContent>
          </Card>
        </section>

        {/* 개발 철학 */}
        <section className="space-y-8">
          <Card className="bg-gradient-to-r from-[#6495ED]/10 to-[#7B68EE]/10 border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                개발 철학
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: "🧑‍💻",
                    gradient: "from-[#FFB6C1] to-[#FF69B4]",
                    quote: "사용자 경험을 최우선으로 고려합니다",
                    description:
                      "사용자가 없으면 제품은 없다고 생각합니다. 사용자의 경험을 최우선적으로 생각하고, 이를 UI에 반영하기 위해 UI/UX 디자이너와의 협업을 중요하게 생각합니다.",
                  },
                  {
                    icon: "🧑‍🤝‍🧑",
                    gradient: "from-[#6A5ACD] to-[#00BFFF]",
                    quote: "협업과 팀워크는 개발의 기반입니다",
                    description:
                      "디자이너, 기획자, 백엔드 개발자와의 긴밀한 커뮤니케이션을 통해 문제를 조기에 해결하고, 더 나은 품질을 달성합니다.",
                  },
                  {
                    icon: "🛡️",
                    gradient: "from-[#00C9A7] to-[#0052D4]",
                    quote: "성능을 바탕으로 신뢰를 구축합니다",
                    description:
                      "사용자의 신뢰를 얻기 위해 성능 최적화는 필수적입니다. 좋은 성능을 고민하면서, 사용자의 이탈을 방지하고 사용자의 만족도를 높이는 데 집중합니다.",
                  },
                ].map(({ icon, gradient, quote, description }, index) => (
                  <div
                    key={index}
                    className="flex flex-col text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm h-full"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <span className="text-white text-2xl">{icon}</span>
                    </div>
                    <blockquote className="italic text-gray-800 dark:text-gray-200 mb-4 font-medium">
                      "{quote}"
                    </blockquote>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 leading-relaxed">
                      {description.split(".").slice(0, 2).join(".") + "."}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 학력 */}
        <section className="space-y-6">
          <Card className="bg-white dark:bg-gray-800 shadow-lg border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-[#6495ED] to-[#7B68EE] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">🎓</span>
                </div>
                학력
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white text-lg">
                    서경대학교 나노융합공학과
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    학점 3.7 / 4.5
                  </p>
                  <p>
                    3D 프린팅, 재료 설계 등 다양한 제작 프로젝트를 경험하며,
                    무언가를 직접 만들고 결과물을 눈앞에 보여주는 일에 큰 흥미를
                    느꼈습니다. 이러한 경험이 웹 개발로 이어졌고, 사용자에게
                    가치를 전달하는 개발자로 성장하는 계기가 되었습니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 경력 및 프로젝트 */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            경력 및 프로젝트
          </h2>
          <div className="space-y-8">
            {portfolioData.companies.map((company, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-800 shadow-lg border-0"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Briefcase className="h-8 w-8 text-[#6495ED]" />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {company.position}
                          </h3>
                          <p className="text-lg text-[#6495ED] font-medium">
                            {company.name}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-500 dark:text-gray-400">
                            {company.period}
                          </p>
                          <p className="text-sm text-gray-400">
                            ({company.duration})
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 프로젝트 목록 */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      담당 프로젝트
                    </h4>
                    <div className="grid gap-4">
                      {getProjectsByCompany(company.id).map(
                        (project, projectIndex) => (
                          <Card
                            key={project.projectId}
                            className="bg-gray-50 dark:bg-gray-700 hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-[1.02] border-0"
                            onClick={() => handleProjectClick(project)}
                          >
                            <CardContent className="p-6">
                              <div className="flex justify-between items-start mb-3">
                                <div className="flex-1">
                                  <h5 className="text-lg font-semibold text-gray-900 dark:text-white hover:text-[#6495ED] transition-colors">
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
                              </div>

                              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                                {project.detailedDescription?.summary
                                  ?.split(".")
                                  .slice(0, 2)
                                  .join(".") + "." ||
                                  project.background
                                    .split(".")
                                    .slice(0, 2)
                                    .join(".") + "."}
                              </p>

                              {/* 키워드 태그 */}
                              {project.keywords && (
                                <div className="flex flex-wrap gap-2">
                                  {project.keywords.map(
                                    (keyword, keywordIndex) => (
                                      <span
                                        key={keywordIndex}
                                        className="px-2 py-1 bg-[#6495ED]/10 text-[#6495ED] text-xs rounded-full"
                                      >
                                        {keyword}
                                      </span>
                                    )
                                  )}
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        )
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 기술 스택 */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            기술 스택
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-800 shadow-lg border-0 hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center text-white`}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
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
          <Card className="bg-gradient-to-r from-[#6495ED]/10 to-[#7B68EE]/10 border-0">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                미래 비전
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioData.goals.futureVision.map((vision, index) => (
                  <div
                    key={index}
                    className="flex flex-col text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm h-full"
                  >
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

        <Card className="bg-gradient-to-r from-[#6495ED]/10 to-[#7B68EE]/10 border-0">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              미래 포부
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#6495ED] rounded-full"></span>
                    단기 목표 (1-2년)
                  </h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {portfolioData.goals.shortTerm.map((goal, idx) => (
                      <li
                        key={goal.title + idx}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 bg-[#6495ED] rounded-full mt-2 flex-shrink-0"></div>
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
                    <span className="w-2 h-2 bg-[#7B68EE] rounded-full"></span>
                    장기 목표 (3-5년)
                  </h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    {portfolioData.goals.longTerm.map((goal, idx) => (
                      <li
                        key={goal.title + idx}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 bg-[#7B68EE] rounded-full mt-2 flex-shrink-0"></div>
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                궁극적인 비전
              </h3>
              <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-6 text-center">
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

      {/* 프로젝트 상세 모달 */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
