"use client";

import type React from "react";
import { Database, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  Code,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  Grid3X3,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Project, ImprovementCategory } from "@/lib/types";
import { mockPortfolioData } from "@/lib/mock-data";

interface ProjectDetailPageProps {
  project: Project;
}

const getCategoryColor = (category: ImprovementCategory) => {
  switch (category) {
    case "성능최적화":
      return "bg-blue-100 text-blue-800";
    case "사용자경험":
      return "bg-green-100 text-green-800";
    case "개발효율성":
      return "bg-purple-100 text-purple-800";
    case "시스템안정성":
      return "bg-red-100 text-red-800";
    case "협업개선":
      return "bg-yellow-100 text-yellow-800";
    case "품질향상":
      return "bg-indigo-100 text-indigo-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const router = useRouter();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showProjectNav, setShowProjectNav] = useState(false);

  // 페이지 로드 시 스크롤을 최상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 스크롤 이벤트 리스너
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

  // 프로젝트 간 이동을 위한 함수
  const allProjects = mockPortfolioData.projects;
  const currentIndex = allProjects.findIndex(
    (p) => p.projectId === project.projectId
  );
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1
      ? allProjects[currentIndex + 1]
      : null;

  const handleProjectNavigation = (projectId: number) => {
    router.push(`/project/${projectId}`);
  };

  const toggleProjectNav = () => {
    setShowProjectNav(!showProjectNav);
  };

  // 카테고리별로 성과를 그룹화하는 함수
  const groupAchievementsByCategory = (
    achievements: Array<{ text: string; category: ImprovementCategory }>
  ) => {
    const grouped: Record<ImprovementCategory, string[]> = {
      성능최적화: [],
      사용자경험: [],
      개발효율성: [],
      시스템안정성: [],
      협업개선: [],
      품질향상: [],
    };

    achievements.forEach((achievement) => {
      if (grouped[achievement.category]) {
        grouped[achievement.category].push(achievement.text);
      }
    });

    return grouped;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-6">
        {/* 헤더 */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <Link href="/">
              <Button variant="ghost" className="hover:bg-gray-100">
                <ArrowLeft className="w-4 h-4 mr-2" />
                돌아가기
              </Button>
            </Link>

            <Button
              variant="outline"
              onClick={toggleProjectNav}
              className="flex items-center gap-2 bg-transparent"
            >
              <Grid3X3 className="w-4 h-4" />
              프로젝트 목록
            </Button>
          </div>

          <div className="mb-8">
            <div className="w-full max-w-xs mx-auto mb-6 p-8">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={150}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-xl text-gray-600 mb-4 font-medium">
                {project.subtitle}
              </p>
            )}
            <p className="text-gray-600 mb-6 leading-relaxed">
              {project.background}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.keywords?.map((keyword, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-lime-100 text-lime-700"
                >
                  {keyword}
                </Badge>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-900">기간:</span>
                <p className="text-gray-600 mt-1">{project.period}</p>
              </div>
              <div>
                <span className="font-medium text-gray-900">역할:</span>
                <p className="text-gray-600 mt-1">{project.role}</p>
              </div>
              <div>
                <span className="font-medium text-gray-900">팀 구성:</span>
                <p className="text-gray-600 mt-1">
                  프론트엔드 {project.frontendDevelopers}명
                </p>

                {/* 팀 변화 정보 표시 */}
                {project.teamChanges && project.teamChanges.length > 0 && (
                  <div className="mt-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="font-medium text-gray-900 text-xs">
                        팀 구성 변화:
                      </span>
                    </div>
                    <div className="space-y-2">
                      {project.teamChanges.map((change, index) => (
                        <div
                          key={index}
                          className="bg-gray-50 p-2 rounded text-xs"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-gray-600">
                              {change.period}
                            </span>
                            <span className="font-medium text-gray-900">
                              FE {change.frontendDevelopers}명
                            </span>
                          </div>
                          {change.reason && (
                            <p className="text-gray-500 mt-1 text-xs">
                              {change.reason}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 프로젝트 네비게이션 모달 */}
        {showProjectNav && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    프로젝트 목록
                  </h2>
                  <Button variant="ghost" onClick={toggleProjectNav}>
                    ✕
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {allProjects.map((proj) => (
                    <Card
                      key={proj.projectId}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        proj.projectId === project.projectId
                          ? "ring-2 ring-lime-500 bg-lime-50"
                          : "hover:scale-[1.02]"
                      }`}
                      onClick={() => {
                        if (proj.projectId !== project.projectId) {
                          handleProjectNavigation(proj.projectId);
                        }
                        setShowProjectNav(false);
                      }}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 flex-shrink-0">
                            <Image
                              src={proj.image || "/placeholder.svg"}
                              alt={proj.title}
                              width={64}
                              height={64}
                              className="w-full h-full object-contain rounded"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
                              {proj.title}
                            </h3>
                            {proj.subtitle && (
                              <p className="text-xs text-gray-600 mb-2 line-clamp-1">
                                {proj.subtitle}
                              </p>
                            )}
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <span>{proj.period}</span>
                              <span>•</span>
                              <span>{proj.role}</span>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {proj.keywords
                                ?.slice(0, 2)
                                .map((keyword, index) => (
                                  <span
                                    key={index}
                                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                  >
                                    {keyword}
                                  </span>
                                ))}
                              {proj.keywords && proj.keywords.length > 2 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                  +{proj.keywords.length - 2}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        {proj.projectId === project.projectId && (
                          <div className="mt-3 pt-3 border-t border-lime-200">
                            <span className="text-xs font-medium text-lime-700">
                              현재 보고 있는 프로젝트
                            </span>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 기여도 요약 */}
        {project.contributions && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                프로젝트 기여 요약
              </h2>
              <div className="space-y-4">
                {project.contributions.map((contribution, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">
                        {contribution.category}
                      </span>
                      <span className="text-sm font-semibold text-gray-900">
                        {contribution.percentage}%
                      </span>
                    </div>
                    <Progress
                      value={contribution.percentage}
                      className="h-2"
                      style={
                        {
                          "--progress-background": contribution.color,
                        } as React.CSSProperties
                      }
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* 프로젝트 요약 */}
        {project.detailedDescription && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                프로젝트 요약
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.background}
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-lime-600" />
                  주요 성과
                </h3>
                <div className="space-y-3">
                  {project.detailedDescription.results.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-lime-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700 leading-relaxed">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 핵심 기술 및 상태 관리 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {project.coreStack && (
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-coral-500" />
                  핵심 기술
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.coreStack.map((tech, index) => (
                    <Badge
                      key={index}
                      className="bg-coral-100 text-coral-800 font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {project.stateManagement && project.stateManagement.length > 0 && (
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-lime-500" />
                  상태 관리
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stateManagement.map((state, index) => (
                    <Badge
                      key={index}
                      className="bg-lime-100 text-lime-800 font-medium"
                    >
                      {state}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* 기여사항 */}
        <div className="mb-8 space-y-6">
          {project.structuralContributions?.map((contribution, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Code className="w-5 h-5 text-coral-500 mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {contribution.title}
                  </h3>
                </div>

                {/* 미디어 콘텐츠 */}
                {contribution.media && (
                  <div className="mb-6">
                    <div className="relative rounded-lg overflow-hidden border">
                      <Image
                        src={contribution.media.url || "/placeholder.svg"}
                        alt={contribution.media.alt}
                        width={800}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    {contribution.media.caption && (
                      <p className="text-sm text-gray-500 mt-2 text-center italic">
                        {contribution.media.caption}
                      </p>
                    )}
                  </div>
                )}

                <div className="space-y-4">
                  {contribution.solutionList?.map((solution, solutionIndex) => (
                    <div
                      key={solutionIndex}
                      className="border-l-4 border-lime-300 pl-4"
                    >
                      <h4 className="font-medium text-gray-900 mb-2">
                        {solution.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 mb-4">주요 성과</h4>
                  {(() => {
                    const groupedAchievements = groupAchievementsByCategory(
                      contribution.achievementList
                    );
                    return (
                      <div className="space-y-4">
                        {Object.entries(groupedAchievements).map(
                          ([category, achievements]) => {
                            if (achievements.length === 0) return null;
                            return (
                              <div key={category} className="space-y-2">
                                <Badge
                                  className={`${getCategoryColor(
                                    category as ImprovementCategory
                                  )} text-xs font-medium`}
                                  variant="secondary"
                                >
                                  {category}
                                </Badge>
                                <div className="ml-4 space-y-2">
                                  {achievements.map(
                                    (achievement, achievementIndex) => (
                                      <div
                                        key={achievementIndex}
                                        className="flex items-start gap-3"
                                      >
                                        <CheckCircle className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                                        <p className="text-gray-700 leading-relaxed">
                                          {achievement}
                                        </p>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    );
                  })()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 프로젝트 간 이동 */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <div className="flex-1">
            {prevProject && (
              <Button
                variant="ghost"
                onClick={() => handleProjectNavigation(prevProject.projectId)}
                className="flex items-center gap-2 hover:bg-gray-100 p-4 rounded-lg w-full justify-start"
              >
                <ChevronLeft className="w-4 h-4 flex-shrink-0" />
                <div className="text-left min-w-0 flex-1">
                  <p className="text-xs text-gray-500">이전 프로젝트</p>
                  <p className="font-medium text-gray-900 truncate">
                    {prevProject.title}
                  </p>
                </div>
              </Button>
            )}
          </div>

          <div className="flex-1 text-right">
            {nextProject && (
              <Button
                variant="ghost"
                onClick={() => handleProjectNavigation(nextProject.projectId)}
                className="flex items-center gap-2 hover:bg-gray-100 p-4 rounded-lg w-full justify-end ml-auto"
              >
                <div className="text-right min-w-0 flex-1">
                  <p className="text-xs text-gray-500">다음 프로젝트</p>
                  <p className="font-medium text-gray-900 truncate">
                    {nextProject.title}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 flex-shrink-0" />
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* 최상단 이동 버튼 */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-lime-500 hover:bg-lime-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
