"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  Users,
  Award,
  Briefcase,
  GraduationCap,
  FolderOpen,
  Heart,
  Github,
  Linkedin,
} from "lucide-react"
import { mockPortfolioData } from "@/lib/mock-data"

export function RapporlabsResumePageLayout() {
  const portfolioData = mockPortfolioData

  // Get projects by company
  const getProjectsByCompany = (companyId: string) => {
    return portfolioData.projects.filter((project) => project.companyId === companyId)
  }

  return (
    <div id="resume-page-content" className="min-h-screen bg-background p-8 print:p-4">
      {/* 상단 컨트롤 */}
      <div className="absolute top-4 right-4 z-50 flex gap-2 print:hidden">
        <ThemeToggle />
      </div>

      <div className="max-w-4xl mx-auto space-y-8 print:space-y-4 print:max-w-none">
        {/* 헤더 */}
        <section className="text-center space-y-6 py-8 border-b-2 border-gray-200 dark:border-gray-700">
          <Avatar className="w-32 h-32 sm:w-40 sm:h-40 mx-auto ring-4 ring-white/50 shadow-2xl">
            <AvatarImage src="/profile.png" alt="Profile" />
            <AvatarFallback className="text-2xl sm:text-3xl bg-gradient-to-br from-gray-400 to-gray-500 text-white">
              {portfolioData.personalInfo?.name?.charAt(0) || "L"}
            </AvatarFallback>
          </Avatar>

          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              {portfolioData.personalInfo?.name || "김동현"}
            </h1>
            <p className="text-xl text-coral-500 font-medium">
              {portfolioData.personalInfo?.title || "프론트엔드 개발자"}
            </p>
          </div>

          <div className="space-y-3">
            {/* 첫 번째 줄 - 2개 */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {portfolioData.personalInfo?.location || "서울, 대한민국"}
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href={`tel:${portfolioData.personalInfo?.phone || "010-5054-0121"}`}
                  className="hover:text-coral-500 transition-colors"
                >
                  {portfolioData.personalInfo?.phone || "010-5054-0121"}
                </a>
              </div>
            </div>

            {/* 두 번째 줄 - 3개 */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href={`mailto:${portfolioData.personalInfo?.email || "joblonnie@gmail.com"}`}
                  className="hover:text-coral-500 transition-colors"
                >
                  {portfolioData.personalInfo?.email || "joblonnie@gmail.com"}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <a
                  href="https://github.com/joblonnie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-coral-500 transition-colors"
                >
                  github.com/joblonnie
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                <a
                  href="https://www.linkedin.com/in/donghyun-kim-a52b62207/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-coral-500 transition-colors"
                >
                  linkedin.com/in/donghyun-kim-a52b62207
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 소개 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <Heart className="h-6 w-6 text-coral-500" />
            소개
          </h2>

          <Card className="bg-secondary dark:bg-secondary border border-border dark:border-border">
            <CardContent className="p-6">
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  안녕하세요. 4년간의 프론트엔드 개발 경험을 바탕으로{" "}
                  <strong className="text-coral-500">사용자 중심의 웹 애플리케이션 개발</strong>에 전념해온
                  김동현입니다. 현재 (주)세이지에서 React와 TypeScript를 활용한 AI 모니터링 시스템과 안전 관리 솔루션을
                  개발하고 있으며, 특히 <strong className="text-coral-500">NX Monorepo 아키텍처 도입</strong>을 통해
                  개발 효율성을 85% 향상시키는 성과를 달성했습니다.
                </p>
                <p>
                  이전 (주)미디어 코퍼스에서는 자연어 처리 연구를 위한 라벨링 시스템을 개발하며,{" "}
                  <strong className="text-coral-500">사용자 테스트 기반의 UI/UX 개선</strong>을 통해 작업 효율성을 40%
                  향상시킨 경험이 있습니다.
                </p>
                <p>
                  <strong className="text-coral-500">"협업과 팀워크는 개발의 기반"</strong>
                  이라고 믿습니다. 팀워크를 통해 더 큰 가치를 창출할 수 있다고 생각하며, 효과적인 소통과 체계적인 업무
                  프로세스를 중시합니다. 이러한 철학을 바탕으로 팀 내 협업 방식을 지속적으로 개선해왔습니다.
                </p>
                <p>
                  저의 궁극적인 비전은{" "}
                  <strong className="text-coral-500">"단순히 기능 구현이 아닌, 삶의 질을 개선하는 개발자"</strong>
                  입니다. 코드를 작성하는 것을 넘어, 사용자의 문제를 해결하고 더 나은 경험을 제공하는 제품을 만들어
                  사회에 긍정적인 영향을 미치고 싶습니다.{" "}
                  <strong className="text-coral-500">지속적인 학습과 성장</strong>을 통해 기술과 비즈니스를 모두
                  이해하는 개발자가 되는 것이 저의 목표입니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 지원 동기 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <FolderOpen className="h-6 w-6 text-lime-500" />
            지원 동기
          </h2>

          <Card className="bg-card dark:bg-card border border-border dark:border-border">
            <CardContent className="p-6">
              <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  지원하게 된 이유는{" "}
                  <strong>
                    {" "}
                    스쿼드 조직을 통해 제품 전 영역을 빠짐없이 관리하고, 지표 기반으로 성과를 파악하는 구조가 제가
                    추구하는 개발 방향성과 잘 맞기 때문입니다.
                  </strong>{" "}
                  스쿼드 단위의 명확한 비전과 자율성은 결과물에 대한 동기부여를 높여주며, 권한 부여와 투명한 의사결정
                  과정은 효율적인 협업 환경을 만든다고 생각합니다. 또한 커머스 산업이라는 새로운 도전 속에서, 부족한
                  점은 빠르게 학습·보완하고, 팀과 제품에 기여하고자 합니다. 최근 몰로콘에 다녀오면서,{" "}
                  <strong>커머스 시장이 빠르게 성장하고 고객 피드백이 민감하게 반영되는 환경임을 느꼈습니다. </strong>{" "}
                  특히 중년 여성을 타깃으로 한 시장에서는, <strong>상품의 질을 우선시하며 소량 구매 경향</strong>이 강할
                  것으로 예상되므로, 다량의 정보보다는{" "}
                  <strong>고객별 초개인화된 상품 노출이 필요하다고 판단했습니다.</strong> 이를 개발에 반영하여,{" "}
                  <strong>해당 연령층의 사용자 경험을 극대화할 수 있는 맞춤형 기능과 UI/UX를 구현하고 싶습니다.</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 포트폴리오 링크 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
            <FolderOpen className="h-6 w-6 text-lime-500" />
            포트폴리오
          </h2>
          <Card className="bg-card dark:bg-card border border-border dark:border-border">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">온라인 포트폴리오</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    프로젝트 상세 내용, 기술 스택 등을 확인하실 수 있습니다.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium text-gray-700 dark:text-gray-300">URL:</span>
                      <a
                        href="https://joblonnie-portfolio.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-coral-500 hover:text-coral-600 underline break-all"
                      >
                        https://joblonnie-portfolio.vercel.app/
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium text-gray-700 dark:text-gray-300">단일 페이지:</span>
                      <a
                        href="https://joblonnie-portfolio.vercel.app/single-page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-coral-500 hover:text-coral-600 underline break-all"
                      >
                        https://joblonnie-portfolio.vercel.app/single-page
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 경력 */}
        <section className="space-y-4 avoid-break">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3 print:text-xl">
            <Briefcase className="h-6 w-6 text-lime-500 print:h-5 print:w-5" />
            경력
          </h2>
          <div className="space-y-6 print:space-y-3">
            {portfolioData.companies.map((company, index) => (
              <Card key={index} className="bg-card border avoid-break project-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{company.position}</h3>
                      <p className="text-lg text-coral-500 font-medium">{company.name}</p>
                    </div>
                    <div className="text-right text-gray-500 dark:text-gray-400">
                      <p className="font-medium">{company.period}</p>
                      <p className="text-sm">({company.duration})</p>
                    </div>
                  </div>

                  {/* 주요 성과 */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">주요 성과</h4>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      {company.achievementList.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 담당 프로젝트 */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 print:text-base">
                      담당 프로젝트
                    </h4>
                    <div className="space-y-3 print:space-y-2">
                      {getProjectsByCompany(company.id).map((project) => (
                        <div key={project.projectId} className="avoid-break">
                          <Card className="bg-secondary border-0 avoid-break">
                            <CardContent className="p-4 print:p-3">
                              <div className="flex justify-between items-start mb-2">
                                <div className="flex-1">
                                  <h5 className="text-base font-semibold text-gray-900 dark:text-white hover:text-coral-500 transition-colors">
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
                                {project.detailedDescription?.summary || project.background}
                              </p>

                              {/* 프로젝트 상세 */}
                              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600 space-y-4">
                                {/* 기술 스택 */}
                                {project.technologies && (
                                  <div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                                      사용 기술
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                      {project.technologies.slice(0, 8).map((tech, techIndex) => (
                                        <Badge key={techIndex} variant="outline" className="text-xs">
                                          {tech}
                                        </Badge>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* 프로젝트 성과 */}
                                {project.detailedDescription?.results && (
                                  <div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1">
                                      <Award className="h-3 w-3" />
                                      주요 성과
                                    </p>
                                    <ul className="space-y-1">
                                      {project.detailedDescription.results
                                        .split(".")
                                        .filter((sentence) => sentence.trim().length > 10)
                                        .slice(0, 4)
                                        .map((achievement, idx) => (
                                          <li
                                            key={idx}
                                            className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                                          >
                                            <div className="w-1 h-1 bg-lime-500 rounded-full mt-2 flex-shrink-0" />
                                            <span>{achievement.trim() + "."}</span>
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
                                      {project.keywords.slice(0, 4).map((keyword, keywordIndex) => (
                                        <span
                                          key={keywordIndex}
                                          className="px-2 py-1 bg-lime-100 text-lime-700 dark:bg-lime-900/20 dark:text-lime-400 text-xs rounded-full"
                                        >
                                          {keyword}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}
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
            <GraduationCap className="h-6 w-6 text-coral-500" />
            학력
          </h2>
          <Card className="bg-card border">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">서경대학교</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300">나노융합공학과</p>
                  <p className="text-gray-500 dark:text-gray-400">학점 3.7 / 4.5</p>
                </div>
                <div className="text-right text-gray-500 dark:text-gray-400">
                  <p className="font-medium">2017.03 - 2021.02</p>
                </div>
              </div>
            </CardContent>
          </Card>
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
  )
}
