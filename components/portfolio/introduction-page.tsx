"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/ui/animated-element";
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
} from "lucide-react";
import { mockPortfolioData } from "@/lib/mock-data";
import type { Project } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function IntroductionPage() {
  const router = useRouter();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showAllArticles, setShowAllArticles] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProjectClick = (project: Project) => {
    router.push(`/project/${project.projectId}`);
  };

  const handleArticleClick = (notionUrl: string) => {
    window.open(notionUrl, "_blank");
  };

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
  } = mockPortfolioData;

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
  ];

  // Get projects by company
  const getProjectsByCompany = (companyId: string) => {
    return projects.filter((project) => project.companyId === companyId);
  };

  // 아티클 표시 개수 결정
  const displayedArticles = showAllArticles
    ? articles
    : articles?.slice(0, 2) || [];

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* 배경 효과 - 매우 연한 포인트 그라데이션 */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-gradient-to-br from-lime-50/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-coral-50/10 to-transparent"></div>
        <div className="absolute inset-0 bg-white"></div>
      </div>

      <div className="relative z-10 py-8 px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto space-y-8">
          {/* 개인 정보 섹션 */}
          <AnimatedElement
            animation="scaleIn"
            delay={0}
            duration={200}
            className="space-y-6"
          >
            <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex flex-col items-center space-y-6">
                  {/* 포트폴리오 타이틀 */}
                  <div className="text-center mb-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      "좋은 경험은 결국 좋은 기억이 된다"
                    </h1>
                    <p className="text-lg text-gray-600">
                      UX·DX 중심 개발자의 여정
                    </p>
                  </div>

                  {/* 아바타 */}
                  <div className="relative group">
                    {/* 배경 글로우 효과 - 더 미묘하게 */}
                    <div className="absolute inset-0 bg-lime-200/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>

                    {/* 아바타 */}
                    <Avatar className="w-32 h-32 sm:w-40 sm:h-40 relative z-10 ring-4 ring-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group-hover:ring-lime-200/50">
                      <AvatarImage src="/profile.png" alt="Profile" />
                      <AvatarFallback className="text-2xl sm:text-3xl bg-gray-700 text-white">
                        {personalInfo?.name?.charAt(0) || "L"}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* 개인 정보 */}
                  <div className="space-y-6 text-center">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                        {personalInfo?.name || "개발자"}
                      </h2>
                      <p className="text-lg sm:text-xl text-gray-700 font-medium">
                        {personalInfo?.title || "풀스택 개발자"}
                      </p>
                    </div>

                    {/* 연락처 정보 */}
                    <div className="flex flex-wrap gap-3 justify-center">
                      <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100/50">
                        <MapPin className="w-4 h-4 text-coral-500" />
                        <span className="text-sm text-gray-700">
                          {personalInfo?.location || "서울, 대한민국"}
                        </span>
                      </div>

                      <a
                        href={`mailto:${personalInfo?.email}`}
                        className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100/50 hover:border-lime-200 group"
                      >
                        <Mail className="w-4 h-4 text-lime-500 group-hover:scale-110 transition-transform" />
                        <span className="text-sm text-gray-700">
                          {personalInfo?.email || "contact@example.com"}
                        </span>
                      </a>

                      <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100/50">
                        <Phone className="w-4 h-4 text-coral-500" />
                        <span className="text-sm text-gray-700">
                          {personalInfo?.phone || "010-0000-0000"}
                        </span>
                      </div>
                    </div>

                    {/* 소셜 링크 - 로고로 변경 */}
                    <div className="flex gap-4 justify-center ">
                      <a
                        href="https://aosjehdgus.tistory.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-orange-600"
                      >
                        <svg
                          className="w-4 h-4 group-hover:rotate-12 transition-transform"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm-1 4v12l8-6-8-6z" />
                        </svg>
                        <span className="text-sm font-medium">Tistory</span>
                        <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/donghyun-kim-a52b62207/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-blue-700"
                      >
                        <svg
                          className="w-4 h-4 group-hover:scale-110 transition-transform"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        <span className="text-sm font-medium">LinkedIn</span>
                        <ExternalLink className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>

                    {/* 소개 텍스트 - 가독성 개선 */}
                    <div className="text-sm sm:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed mt-8">
                      <div className="space-y-4">
                        <p className="font-medium text-gray-800">
                          저는 사용자와 개발자가 모두 기억할 만한 경험을
                          만들어가는 데 집중하는 프론트엔드 개발자입니다.
                        </p>

                        <p className="text-gray-700">
                          사용자가 의식하지 않아도 편안함을 느낄 수 있도록,
                          적절한 로딩 시간, 예측 가능한 인터랙션, 그리고
                          미묘하지만 의미 있는 시각적 디테일 등 '보이지 않는
                          UX'를 세심하게 설계해왔습니다.
                        </p>

                        <p className="text-gray-700">
                          코드 구조화, 반복 작업의 자동화, 협업 환경 개선 등을
                          통해 팀이 보다 효율적이고 즐겁게 일할 수 있는 기반을
                          마련함으로써, 개발 과정 자체가 성장과 학습의 경험이 될
                          수 있도록 노력했습니다.
                        </p>

                        <p className="text-gray-700 italic">
                          이처럼 사용자와 팀을 위한 작은 경험들을 하나씩
                          쌓아가는 과정이, 결국에는 제품과 조직 모두에 긍정적인
                          기억으로 남고 장기적인 가치를 만들어낸다고 믿습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedElement>

          {/* 업무 철학 */}
          <AnimatedElement
            animation="slideUp"
            delay={300}
            duration={200}
            className="mb-12"
          >
            <Card className="backdrop-blur-sm bg-white/90 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
              <CardContent className="p-8">
                <header className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  업무 철학
                </header>

                <p className="text-center text-gray-500 mb-8">
                  다양한 실무 경험을 통해 얻은 개발 철학과 협업 원칙은 다음과
                  같습니다.
                </p>

                {/* 상단 2개 철학 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      icon: <Lightbulb />,
                      quote: "사용자 중심의 품질과 성능을 추구합니다",
                      description:
                        "사용자가 없으면 제품은 없다고 생각합니다. 사용자 경험을 최우선으로 고려하며, 동시에 성능 최적화를 통해 신뢰할 수 있는 제품을 만듭니다. UI/UX 디자이너와의 협업을 통해 사용자의 만족도를 높이는 데 집중합니다.",
                    },
                    {
                      icon: <Users />,
                      quote: "협업과 팀워크는 개발의 기반입니다",
                      description:
                        "디자이너, 기획자, 백엔드 개발자와의 긴밀한 커뮤니케이션을 통해 문제를 조기에 해결하고, 더 나은 품질을 달성합니다. 또한 팀 내 개발 경험(DX) 개선을 위해 코드 리뷰 문화 정착, 개발 프로세스 최적화, 공통 컴포넌트 라이브러리 구축 등을 통해 팀 전체의 생산성 향상에 기여합니다.",
                    },
                  ].map(({ icon, quote, description }, index) => (
                    <div
                      key={index}
                      className="group flex flex-col text-center p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full border border-gray-100/50"
                    >
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:bg-gray-200 transition-all duration-300 group-hover:scale-110">
                        {icon}
                      </div>

                      <blockquote className="italic text-gray-800 mb-4 font-medium">
                        "{quote}"
                      </blockquote>

                      <p className="text-sm text-gray-600 flex-1 leading-relaxed">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedElement>

          {/* 경력 및 프로젝트 */}
          <AnimatedElement
            animation="slideUp"
            delay={100}
            duration={200}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              경력 및 프로젝트
            </h2>
            <p className="text-center text-gray-500 mb-8">
              지금까지 참여했던 회사와 주요 프로젝트들을 소개합니다.
            </p>
            <div className="space-y-8">
              {companies.map((company, index) => (
                <Card
                  key={index}
                  className="backdrop-blur-sm bg-white/90 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-0"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center shadow-lg group-hover:bg-gray-700 transition-all duration-300 group-hover:scale-110">
                        <Briefcase className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              {company.position}
                            </h3>
                            <p className="text-lg text-coral-500 font-medium">
                              {company.name}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-gray-500">{company.period}</p>
                            <p className="text-sm text-gray-400">
                              ({company.duration})
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 프로젝트 목록 */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        담당 프로젝트
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {getProjectsByCompany(company.id).map(
                          (project, projectIndex) => (
                            <Card
                              key={project.projectId}
                              className="group bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:-translate-y-1 border border-gray-100/50 shadow-lg"
                              onClick={() => handleProjectClick(project)}
                            >
                              <CardContent className="p-6">
                                {/* 프로젝트 이미지 */}
                                {project.image && (
                                  <div className="mb-4 p-2 bg-gray-50 rounded-lg">
                                    <img
                                      src={project.image || "/placeholder.svg"}
                                      alt={project.title}
                                      className="w-full h-32 object-contain rounded-lg"
                                    />
                                  </div>
                                )}

                                <div className="flex justify-between items-start mb-3">
                                  <div className="flex-1">
                                    <h5 className="text-lg font-semibold text-gray-900 group-hover:text-lime-600 transition-colors mb-2">
                                      {project.title}
                                    </h5>
                                    {/* 부제목 추가 */}
                                    {project.subtitle && (
                                      <p className="text-sm text-gray-600 mb-3 font-medium">
                                        {project.subtitle}
                                      </p>
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
                                  {project.background
                                    .split(".")
                                    .slice(0, 2)
                                    .join(". ")}
                                </p>

                                {/* 키워드 태그 */}
                                {project.keywords && (
                                  <div className="flex flex-wrap gap-2">
                                    {project.keywords.map(
                                      (keyword, keywordIndex) => (
                                        <span
                                          key={keywordIndex}
                                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full shadow-sm border border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition-all duration-300"
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
          </AnimatedElement>

          {/* 학력 · 자격 · 활동 */}
          <AnimatedElement
            animation="slideUp"
            delay={50}
            duration={200}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              학력 · 자격 · 활동
            </h2>

            <p className="text-center text-gray-500 mb-8">
              학력, 자격증, 그리고 활동 경험을 소개합니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* 교육 */}
              <Card className="backdrop-blur-sm bg-white/90 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-0">
                <CardContent className="p-8">
                  <header className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center shadow-lg">
                      <GraduationCap className="h-5 w-5 text-white" />
                    </div>
                    학력
                  </header>
                  <div className="space-y-4">
                    {education.map((edu, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-gray-700 pl-4"
                      >
                        <h4 className="font-semibold text-gray-800">
                          {edu.institution}
                        </h4>
                        <p className="text-gray-600">{edu.degree}</p>
                        <p className="text-sm text-gray-500">{edu.period}</p>
                        {edu.gpa && (
                          <p className="text-sm text-gray-500">
                            학점: {edu.gpa}
                          </p>
                        )}
                        <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 인증서 */}
              <Card className="backdrop-blur-sm bg-white/90 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-0">
                <CardContent className="p-8">
                  <header className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center shadow-lg">
                      <Award className="h-5 w-5 text-white" />
                    </div>
                    인증서
                  </header>
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-gray-700 pl-4"
                      >
                        <h4 className="font-semibold text-gray-800">
                          {cert.name}
                        </h4>
                        <p className="text-gray-600">{cert.issuer}</p>
                        <p className="text-sm text-gray-500">{cert.date}</p>
                        {cert.description && (
                          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                            {cert.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 사내활동과 사이드 프로젝트 분리 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 사내활동 */}
              <Card className="backdrop-blur-sm bg-white/90 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-0">
                <CardContent className="p-8">
                  <header className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center shadow-lg">
                      <Activity className="h-5 w-5 text-white" />
                    </div>
                    사내활동
                  </header>
                  <div className="space-y-6">
                    {activities.map((activity, index) => (
                      <div
                        key={index}
                        className="p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100/50"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <Badge
                            variant="secondary"
                            className="text-xs bg-blue-100 text-blue-700"
                          >
                            {activity.type}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            {activity.period}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {activity.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {activity.organization}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {activity.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 사이드 프로젝트 */}
              <Card className="backdrop-blur-sm bg-white/90 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-0">
                <CardContent className="p-8">
                  <header className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center shadow-lg">
                      <Activity className="h-5 w-5 text-white" />
                    </div>
                    사이드 프로젝트
                  </header>
                  <div className="space-y-6">
                    {sideProjects.map((project, index) => (
                      <div
                        key={index}
                        className="p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-gray-100/50"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <Badge
                            variant="secondary"
                            className="text-xs bg-green-100 text-green-700"
                          >
                            {project.type}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            {project.period}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {project.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {project.organization}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedElement>

          {/* 기술 스택 */}
          <AnimatedElement
            animation="slideUp"
            delay={150}
            duration={200}
            className="mb-12"
          >
            <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-6">
                  기술 스택
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">언어</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-slate-100 text-slate-700"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">UI/UX</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.ui.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-slate-100 text-slate-700"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">
                      상태 관리
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.stateManagement.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-slate-100 text-slate-700"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">
                      아키텍처
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.architecture.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-slate-100 text-slate-700"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">
                      개발 도구
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.devTools.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-slate-100 text-slate-700"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-3">
                      협업 도구
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.collaborationTools.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-slate-100 text-slate-700"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedElement>

          {/* 아티클 섹션 */}
          {articles && articles.length > 0 && (
            <AnimatedElement
              animation="slideUp"
              delay={50}
              duration={200}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                아티클
              </h2>
              <p className="text-center text-gray-500 mb-8">
                개발하면서 정리했던 문서들입니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayedArticles.map((article) => (
                  <Card
                    key={article.id}
                    className="cursor-pointer hover:shadow-lg transition-all duration-300 group"
                    onClick={() => handleArticleClick(article.notionUrl)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-coral-500" />
                        <span className="text-xs text-gray-500">
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">
                          {new Date(article.date).toLocaleDateString("ko-KR")}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-coral-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {article.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {article.tags &&
                          article.tags.slice(0, 2).map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs bg-coral-50 text-coral-700"
                            >
                              {tag}
                            </Badge>
                          ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          Notion에서 읽기
                        </span>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-coral-600 transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* 더보기/접기 버튼 */}
              {articles && articles.length > 2 && (
                <div className="text-center mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setShowAllArticles(!showAllArticles)}
                    className="border-coral-500 text-coral-600 hover:bg-coral-50 px-6 py-2"
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
            </AnimatedElement>
          )}

          {/* 목표 & 비전 */}
          <AnimatedElement
            animation="slideUp"
            delay={50}
            duration={200}
            className="mb-12"
          >
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-900">목표 & 비전</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                개발자로서의 비전을 소개합니다.
              </p>
            </div>

            {/* 미래 비전 */}
            <div className="space-y-6 mb-12">
              <h3 className="text-2xl font-bold text-center flex items-center justify-center gap-3 text-gray-900">
                <Eye className="h-6 w-6 text-coral-500" />
                미래 비전
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {goals.futureVision.map(
                  ({ icon, gradient, quote, description }, index) => (
                    <div
                      key={index}
                      className="group flex flex-col text-center p-6 backdrop-blur-sm bg-white/90 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 h-full border border-gray-100/50"
                    >
                      <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:bg-gray-700 transition-all duration-300 group-hover:scale-110">
                        <span className="text-white text-2xl">{icon}</span>
                      </div>

                      <blockquote className="italic text-gray-800 mb-4 font-medium">
                        "{quote}"
                      </blockquote>

                      <p className="text-sm text-gray-600 flex-1 leading-relaxed">
                        {description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* 궁극적인 비전 */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                궁극적인 비전
              </h4>
              <div className="backdrop-blur-sm bg-white/90 rounded-xl p-6 text-center shadow-2xl border border-gray-100/50">
                <p className="text-lg text-gray-800 leading-relaxed italic">
                  "{goals.vision.quote}"
                </p>
                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                  {goals.vision.description}
                </p>
              </div>
            </div>
          </AnimatedElement>
        </article>
      </div>

      {/* 최상단 이동 버튼 */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-800 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </main>
  );
}
