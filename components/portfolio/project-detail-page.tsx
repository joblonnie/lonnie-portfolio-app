"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  Code,
  Check,
} from "lucide-react";
import { mockPortfolioData } from "@/lib/mock-data";

export function ProjectDetailPage() {
  const router = useRouter();
  const params = useParams();
  const projectId = Number.parseInt(params.id as string);

  const [showScrollTop, setShowScrollTop] = useState(false);

  const project = mockPortfolioData.projects.find(
    (p) => p.projectId === projectId
  );
  const projectIndex = mockPortfolioData.projects.findIndex(
    (p) => p.projectId === projectId
  );
  const prevProject =
    projectIndex > 0 ? mockPortfolioData.projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < mockPortfolioData.projects.length - 1
      ? mockPortfolioData.projects[projectIndex + 1]
      : null;

  // 페이지 로드 시 스크롤을 최상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGoBack = () => {
    router.push("/");
  };

  const handlePrevProject = () => {
    if (prevProject) {
      router.push(`/project/${prevProject.projectId}`);
    }
  };

  const handleNextProject = () => {
    if (nextProject) {
      router.push(`/project/${nextProject.projectId}`);
    }
  };

  const handleProjectNavClick = (projectId: number) => {
    router.push(`/project/${projectId}`);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            프로젝트를 찾을 수 없습니다
          </h1>
          <Button onClick={handleGoBack}>홈으로 돌아가기</Button>
        </div>
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "사용자경험":
        return "bg-coral-100 text-coral-700 border-coral-200";
      case "개발효율성":
        return "bg-lime-100 text-lime-700 border-lime-200";
      case "성능최적화":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "시스템안정성":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "협업개선":
        return "bg-green-100 text-green-700 border-green-200";
      case "품질향상":
        return "bg-orange-100 text-orange-700 border-orange-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const groupByCategory = (
    achievements: Array<{ text: string; category?: string }>
  ) => {
    const grouped: Record<
      string,
      Array<{ text: string; category?: string }>
    > = {};

    achievements.forEach((achievement) => {
      const category = achievement.category || "기타";
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(achievement);
    });

    return grouped;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto p-6 space-y-8">
        {/* 헤더 */}
        <div className="mb-8">
          <Button
            variant="ghost"
            className="mb-6 hover:bg-gray-100"
            onClick={handleGoBack}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            프로젝트 목록으로
          </Button>

          {/* 프로젝트 네비게이션 - 더 넓은 공간 제공 */}
          <div className="mb-8">
            <h3 className="text-sm font-medium text-gray-500 mb-4">
              프로젝트 네비게이션
            </h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {mockPortfolioData.projects.map((proj) => (
                <div
                  key={proj.projectId}
                  className={`flex-shrink-0 cursor-pointer rounded-lg border p-3 transition-all hover:shadow-md min-w-[120px] ${
                    proj.projectId === projectId
                      ? "border-lime-500 bg-lime-50"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                  onClick={() => handleProjectNavClick(proj.projectId)}
                >
                  <img
                    src={proj.image || "/placeholder.svg"}
                    alt={proj.title}
                    className="w-full h-12  rounded mb-2"
                  />
                  <p className="text-xs font-medium text-gray-900 leading-tight">
                    {proj.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {project.title}
            </h1>
            {project.subtitle && (
              <p className="text-xl text-gray-600 mb-4">{project.subtitle}</p>
            )}
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.background}
            </p>
          </div>

          {/* 프로젝트 기본 정보 */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  프로젝트 기간
                </h3>
                <p className="text-gray-700">{project.period}</p>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">팀 구성</h3>
                <p className="text-gray-700">
                  프론트엔드 개발자 {project.frontendDevelopers}명
                </p>
                {project.teamChanges && project.teamChanges.length > 0 && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 mb-1">인원 변화</p>
                    {project.teamChanges.map((change, index) => (
                      <p key={index} className="text-sm text-coral-600">
                        {change.period}: {change.frontendDevelopers}명{" "}
                        {change.reason && `(${change.reason})`}
                      </p>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">역할</h3>
                <p className="text-gray-700">{project.role}</p>
              </CardContent>
            </Card>
          </div>

          {/* 프로젝트 기여 요약 */}
          {project.contributions && (
            <Card className="border-gray-200 mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  프로젝트 기여 요약
                </h3>
                <div className="space-y-4">
                  {project.contributions.map((contribution, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-900">
                          {contribution.category}
                        </span>
                        <span className="text-sm font-bold text-lime-600">
                          {contribution.percentage}%
                        </span>
                      </div>
                      <Progress
                        value={contribution.percentage}
                        className="h-2 bg-gray-100"
                      >
                        <div
                          className="h-full transition-all duration-300 ease-in-out rounded-full"
                          style={{
                            width: `${contribution.percentage}%`,
                            backgroundColor: contribution.color,
                          }}
                        />
                      </Progress>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* 핵심 기술 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              핵심 기술
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies &&
                project.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
            </div>
          </div>

          {/* 상태 관리 */}
          {project.stateManagement && project.stateManagement.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                상태 관리
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stateManagement.map((state, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-lime-200 text-lime-700 hover:bg-lime-50 transition-colors"
                  >
                    {state}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 주요 성과 */}
        {project.detailedDescription && project.detailedDescription.results && (
          <Card className="border-gray-200">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                주요 성과
              </h2>
              <div className="space-y-3">
                {project.detailedDescription.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-lime-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{result}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* 구조적 기여사항 */}
        {project.structuralContributions &&
          project.structuralContributions.length > 0 && (
            <div className="space-y-6">
              {project.structuralContributions.map((contribution, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-coral-100 p-2 rounded-lg">
                        <Code className="w-5 h-5 text-coral-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          {contribution.title}
                        </h3>
                      </div>
                    </div>

                    {/* 이미지 또는 GIF 영역 */}
                    {contribution.media && (
                      <div className="mb-6">
                        <img
                          src={contribution.media.url || "/placeholder.svg"}
                          alt={contribution.media.alt}
                          className="w-full max-w-2xl mx-auto rounded-lg border shadow-sm"
                        />
                        {contribution.media.caption && (
                          <p className="text-sm text-gray-500 text-center mt-2">
                            {contribution.media.caption}
                          </p>
                        )}
                      </div>
                    )}

                    <div className="space-y-4">
                      {contribution.solutionList &&
                        contribution.solutionList.length > 0 && (
                          <div>
                            <h4 className="font-medium text-gray-900 mb-3">
                              해결 방안
                            </h4>
                            <div className="space-y-4">
                              {contribution.solutionList.map(
                                (solution, solutionIndex) => (
                                  <div
                                    key={solutionIndex}
                                    className="border-l-4 border-lime-500 pl-4"
                                  >
                                    <h5 className="font-medium text-gray-900 mb-2">
                                      {solution.title}
                                    </h5>
                                    <p className="text-gray-700 leading-relaxed">
                                      {solution.description}
                                    </p>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        )}

                      {contribution.achievementList &&
                        contribution.achievementList.length > 0 && (
                          <div>
                            <h4 className="font-medium text-gray-900 mb-3">
                              최종 성과
                            </h4>
                            <div className="space-y-4">
                              {Object.entries(
                                groupByCategory(contribution.achievementList)
                              ).map(([category, items]) => (
                                <div key={category}>
                                  <div className="flex items-center gap-2 mb-3">
                                    <Badge
                                      className={getCategoryColor(category)}
                                    >
                                      {category}
                                    </Badge>
                                  </div>
                                  <div className="space-y-2">
                                    {items.map(
                                      (achievement, achievementIndex) => (
                                        <div
                                          key={achievementIndex}
                                          className="flex items-start gap-2"
                                        >
                                          <Check className="w-4 h-4 text-coral-500 mt-0.5 flex-shrink-0" />
                                          <span className="text-gray-700">
                                            {achievement.text}
                                          </span>
                                        </div>
                                      )
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

        {/* 프로젝트 네비게이션 */}
        <div className="flex justify-between items-center pt-8 border-t">
          <Button
            variant="outline"
            onClick={handlePrevProject}
            disabled={!prevProject}
            className="flex items-center gap-2 max-w-xs bg-transparent"
          >
            <ChevronLeft className="w-4 h-4" />
            <div className="text-left min-w-0">
              <div className="text-xs text-gray-500">이전 프로젝트</div>
              <div className="font-medium truncate">
                {prevProject?.title || "없음"}
              </div>
            </div>
          </Button>

          <Button
            variant="outline"
            onClick={handleNextProject}
            disabled={!nextProject}
            className="flex items-center gap-2 max-w-xs bg-transparent"
          >
            <div className="text-right min-w-0">
              <div className="text-xs text-gray-500">다음 프로젝트</div>
              <div className="font-medium truncate">
                {nextProject?.title || "없음"}
              </div>
            </div>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* 스크롤 투 탑 버튼 */}
        {showScrollTop && (
          <Button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-lime-500 hover:bg-lime-600 text-white shadow-lg z-50"
            size="icon"
          >
            <ArrowUp className="w-5 h-5" />
          </Button>
        )}
      </div>
    </div>
  );
}
