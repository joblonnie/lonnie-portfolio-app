"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Download,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Users,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  FolderOpen,
  Heart,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";
import { mockPortfolioData } from "@/lib/mock-data";

export function ResumePageLayout() {
  const portfolioData = mockPortfolioData;
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const handleDownloadPDF = () => {
    window.print();
  };

  const handleProjectClick = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  // Extract motivation keywords
  const motivationKeywords = [
    "사용자 중심 설계",
    "성능 최적화",
    "UI/UX 개선",
    "협업",
    "혁신적인 기술",
    "지속적인 학습",
    "품질 향상",
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
      url: "https://linkedin.com/in/joblonnie",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Tistory Blog",
      url: "https://joblonnie.tistory.com",
      icon: <Globe className="h-5 w-5" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 p-8">
      {/* 상단 컨트롤 */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <Button onClick={handleDownloadPDF} size="sm" variant="outline">
          <Download className="h-4 w-4 mr-2" />
          PDF 다운로드
        </Button>
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* 헤더 */}
        <section className="text-center space-y-6 py-8 border-b-2 border-gray-200 dark:border-gray-700">
          <Avatar className="w-32 h-32 sm:w-40 sm:h-40 mx-auto ring-4 ring-white/50 shadow-2xl">
            <AvatarImage src="/profile.png" alt="Profile" />
            <AvatarFallback className="text-2xl sm:text-3xl bg-gradient-to-br from-mocha-500 to-cannoli-500 text-white">
              {portfolioData.personalInfo?.name?.charAt(0) || "L"}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              {portfolioData.personalInfo?.name || "김동현"}
            </h1>
            <p className="text-xl text-mocha-500 font-medium">
              {portfolioData.personalInfo?.title || "프론트엔드 개발자"}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {portfolioData.personalInfo?.location || "서울, 대한민국"}
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {portfolioData.personalInfo?.phone || "010-5054-0121"}
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {portfolioData.personalInfo?.email || "joblonnie@gmail.com"}
            </div>
          </div>

          {/* External Links - Icon only with tooltips */}
          <TooltipProvider>
            <div className="flex justify-center gap-4">
              {externalLinks.map((link, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-12 h-12 p-0 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
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
        </section>

        {/* 지원 동기 - 최상단으로 이동 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Heart className="h-6 w-6 text-mocha-500" />
            지원 동기
          </h2>

          {/* 핵심 키워드 하이라이트 */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
              핵심 가치 및 관심사
            </h3>
            <div className="flex flex-wrap gap-2">
              {motivationKeywords.map((keyword, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-mocha-500/10 text-mocha-500 border-mocha-500/20"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>

          <Card className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  안녕하세요. 4년간의 프론트엔드 개발 경험을 바탕으로{" "}
                  <strong className="text-mocha-500">
                    사용자 중심의 웹 애플리케이션 개발
                  </strong>
                  에 전념해온 김동현입니다.
                </p>
                <p>
                  현재 (주)세이지에서 React와 TypeScript를 활용한 AI 모니터링
                  시스템과 안전 관리 솔루션을 개발하고 있으며, 특히{" "}
                  <strong className="text-mocha-500">
                    NX Monorepo 아키텍처 도입
                  </strong>
                  을 통해 개발 효율성을 85% 향상시키는 성과를 달성했습니다.
                </p>
                <p>
                  이전 (주)미디어 코퍼스에서는 자연어 처리 연구를 위한 라벨링
                  시스템을 개발하며,{" "}
                  <strong className="text-mocha-500">
                    사용자 테스트 기반의 UI/UX 개선
                  </strong>
                  을 통해 작업 효율성을 40% 향상시킨 경험이 있습니다.
                </p>
                <p>
                  귀사의 혁신적인 기술 문화와 사용자 경험을 중시하는 가치관이
                  저의 개발 철학과 일치한다고 생각합니다. 특히{" "}
                  <strong className="text-mocha-500">
                    성능 최적화와 사용자 중심 설계
                  </strong>
                  에 대한 저의 경험이 귀사의 제품 발전에 기여할 수 있을 것이라
                  확신합니다.
                </p>
                <p>
                  <strong className="text-mocha-500">
                    지속적인 학습과 성장
                  </strong>
                  을 통해 팀과 함께 더 나은 웹 서비스를 만들어가고 싶습니다.
                  감사합니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 포트폴리오 링크 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <FolderOpen className="h-6 w-6 text-mocha-500" />
            포트폴리오
          </h2>
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    온라인 포트폴리오
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    프로젝트 상세 내용, 기술 스택, 코드 스니펫 등을 확인하실 수
                    있습니다.
                  </p>
                </div>
                <Button asChild variant="outline">
                  <a
                    href="https://v0-personal-portfolio-page-xi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    포트폴리오 보기
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 경력 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-mocha-500" />
            경력
          </h2>
          <div className="space-y-6">
            {portfolioData.companies.map((company, index) => (
              <Card
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {company.position}
                      </h3>
                      <p className="text-lg text-mocha-500 font-medium">
                        {company.name}
                      </p>
                    </div>
                    <div className="text-right text-gray-500 dark:text-gray-400">
                      <p className="font-medium">{company.period}</p>
                      <p className="text-sm">({company.duration})</p>
                    </div>
                  </div>

                  {/* 주요 성과 */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      주요 성과
                    </h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      {company.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-mocha-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 담당 프로젝트 */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      담당 프로젝트
                    </h4>
                    <div className="space-y-3">
                      {getProjectsByCompany(company.id).map((project) => (
                        <div key={project.projectId}>
                          <Card
                            className="bg-gray-50 dark:bg-gray-700 hover:shadow-md transition-all duration-300 cursor-pointer border-0"
                            onClick={() =>
                              handleProjectClick(project.projectId)
                            }
                          >
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                <div className="flex-1">
                                  <h5 className="text-base font-semibold text-gray-900 dark:text-white hover:text-mocha-500 transition-colors">
                                    {project.title}
                                  </h5>
                                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    <div className="flex items-center gap-1">
                                      <Calendar className="h-3 w-3" />
                                      {project.period}
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Users className="h-3 w-3" />
                                      {project.role}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* 프로젝트 요약 */}
                              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                                {project.detailedDescription?.summary
                                  ?.split(".")
                                  .slice(0, 1)
                                  .join(".") + "." ||
                                  project.background
                                    .split(".")
                                    .slice(0, 1)
                                    .join(".") + "."}
                              </p>

                              {/* 확장된 프로젝트 상세 */}
                              {expandedProject === project.projectId && (
                                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 space-y-4">
                                  {/* 기술 스택 */}
                                  {project.technologies && (
                                    <div>
                                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                                        사용 기술
                                      </p>
                                      <div className="flex flex-wrap gap-1">
                                        {project.technologies
                                          .slice(0, 8)
                                          .map((tech, techIndex) => (
                                            <Badge
                                              key={techIndex}
                                              variant="outline"
                                              className="text-xs"
                                            >
                                              {tech}
                                            </Badge>
                                          ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* 주요 성과 */}
                                  {project.achievements && (
                                    <div>
                                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
                                        <Award className="h-3 w-3" />
                                        주요 성과
                                      </p>
                                      <ul className="space-y-1">
                                        {project.achievements
                                          .slice(0, 3)
                                          .map((achievement, idx) => (
                                            <li
                                              key={idx}
                                              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                                            >
                                              <div className="w-1 h-1 bg-mocha-500 rounded-full mt-2 flex-shrink-0" />
                                              <span>{achievement}</span>
                                            </li>
                                          ))}
                                      </ul>
                                    </div>
                                  )}

                                  {/* 키워드 */}
                                  {project.keywords && (
                                    <div>
                                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                                        핵심 키워드
                                      </p>
                                      <div className="flex flex-wrap gap-1">
                                        {project.keywords
                                          .slice(0, 4)
                                          .map((keyword, keywordIndex) => (
                                            <span
                                              key={keywordIndex}
                                              className="px-2 py-1 bg-mocha-500/10 text-mocha-500 text-xs rounded-full"
                                            >
                                              {keyword}
                                            </span>
                                          ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* 클릭 힌트 */}
                              <div className="text-xs text-gray-400 mt-2">
                                {expandedProject === project.projectId
                                  ? "클릭하여 접기"
                                  : "클릭하여 상세 보기"}
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 학력 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-mocha-500" />
            학력
          </h2>
          <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    서경대학교
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    나노융합공학과
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    학점 3.7 / 4.5
                  </p>
                </div>
                <div className="text-right text-gray-500 dark:text-gray-400">
                  <p className="font-medium">2017.03 - 2021.02</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 기술 스택 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Code className="h-6 w-6 text-mocha-500" />
            기술 스택
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">프론트엔드</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    ...portfolioData.skills.languages,
                    ...portfolioData.skills.ui.slice(0, 6),
                  ].map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-lg">도구 & 협업</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    ...portfolioData.skills.devTools,
                    ...portfolioData.skills.collaborationTools.slice(0, 4),
                  ].map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* 프린트 스타일 */}
      <style jsx>{`
        @media print {
          .absolute {
            display: none !important;
          }
          body {
            -webkit-print-color-adjust: exact;
          }
          .space-y-8 > * + * {
            margin-top: 1.5rem !important;
          }
          .space-y-6 > * + * {
            margin-top: 1rem !important;
          }
          .space-y-4 > * + * {
            margin-top: 0.75rem !important;
          }
          .grid {
            break-inside: avoid;
          }
          .card {
            break-inside: avoid;
          }
          section {
            break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
