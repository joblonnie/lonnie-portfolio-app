"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/ui/animated-element";
import { ProjectDetailModal } from "./project-detail-modal";
import { Calendar, ArrowUp, Eye, ArrowRight } from "lucide-react";
import type { PortfolioData, Project } from "@/lib/types";

interface ProjectsPageProps {
  data: PortfolioData;
  onNavigate: (page: string) => void;
}

export function ProjectsPage({ data, onNavigate }: ProjectsPageProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const navigateToGoals = () => {
    onNavigate("goals");
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = data.projects || [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto gap-8 flex flex-col">
        {/* 헤더 */}
        <AnimatedElement
          animation="slideUp"
          delay={0}
          duration={200}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#6495ED] to-[#7B68EE] bg-clip-text text-transparent mb-4">
            프로젝트 여정
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            지금까지 진행한 프로젝트들을 시간순으로 소개합니다. 각 프로젝트를
            클릭하면 자세한 내용을 확인할 수 있습니다.
          </p>
        </AnimatedElement>

        {/* 프로젝트 타임라인 */}
        <div className="relative">
          {/* 타임라인 라인 */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6495ED] to-[#7B68EE]"></div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <AnimatedElement
                key={project.projectId}
                animation="slideUp"
                delay={index * 30}
                duration={200}
                className="relative group"
              >
                {/* 타임라인 점 - 호버 시 펄스 효과 */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-[#6495ED] to-[#7B68EE] rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 group-hover:animate-pulse"></div>

                {/* 프로젝트 카드 */}
                <div className="ml-16">
                  <Card
                    className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-0 cursor-pointer group-hover:shadow-[#6495ED]/20 group-hover:shadow-2xl"
                    onClick={() => handleProjectClick(project)}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-2">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#6495ED] transition-colors">
                              {project.title}
                            </h3>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <Calendar className="h-4 w-4" />
                            {project.period}
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {project.detailedDescription?.summary}
                      </p>

                      {project.keywords && project.keywords.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                            핵심 키워드
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.keywords.map((keyword, keywordIndex) => (
                              <Badge
                                key={keywordIndex}
                                variant="secondary"
                                className="bg-[#6495ED]/10 text-[#6495ED] border-[#6495ED]/20 hover:bg-[#6495ED]/20 transition-colors group-hover:bg-[#6495ED]/20"
                              >
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 group-hover:text-[#6495ED] transition-colors">
                        <Eye className="h-3 w-3" />
                        클릭하여 상세 내용 확인
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>

        {/* 목표로 이동 버튼 (모바일 전용) */}
        <AnimatedElement
          animation="slideUp"
          delay={200}
          duration={200}
          className="mb-12 block md:hidden"
        >
          <div className="text-center">
            <Button
              onClick={navigateToGoals}
              className="bg-gradient-to-r from-[#6495ED] to-[#7B68EE] hover:from-[#5A7FDB] hover:to-[#6A5ACD] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              size="lg"
            >
              목표 및 비전 보러가기
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </AnimatedElement>
      </div>

      {/* 프로젝트 상세 모달 */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      {/* 최상단 이동 버튼 */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#6495ED] hover:bg-[#5A7FDB] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
}
