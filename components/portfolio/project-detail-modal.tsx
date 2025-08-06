"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Calendar,
  Users,
  Code,
  Target,
  CheckCircle,
  Copy,
  FileText,
  Braces,
  ChevronLeft,
  ChevronRight,
  Globe,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Project } from "@/lib/types";

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const router = useRouter();

  // Reset tab index when project changes and scroll to top
  useEffect(() => {
    if (isOpen && project) {
      setActiveTabIndex(0);
      // Scroll to top of modal content with timeout to ensure DOM is ready
      setTimeout(() => {
        const modalContent = document.querySelector("[data-modal-content]");
        if (modalContent) {
          modalContent.scrollTop = 0;
        }
        // Also try scrolling the dialog content itself
        const dialogContent = document.querySelector(
          "[role='dialog'] .overflow-y-auto"
        );
        if (dialogContent) {
          dialogContent.scrollTop = 0;
        }
      }, 100);
    }
  }, [project, isOpen]);

  if (!project) return null;

  const copyToClipboard = async (code: string, index: number) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      javascript:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      typescript:
        "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      react: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
      html: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      css: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      scss: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
      json: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      sql: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
      python:
        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
      text: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
      plaintext:
        "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
    };
    return (
      colors[language.toLowerCase()] ||
      "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    );
  };

  const navigateTab = (direction: "prev" | "next") => {
    if (!project.codeSnippets) return;

    if (direction === "prev") {
      setActiveTabIndex((prev) =>
        prev > 0 ? prev - 1 : project.codeSnippets!.length - 1
      );
    } else {
      setActiveTabIndex((prev) =>
        prev < project.codeSnippets!.length - 1 ? prev + 1 : 0
      );
    }
  };

  return (
    <TooltipProvider>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-5xl w-[95vw] h-[95vh] overflow-hidden flex flex-col p-0 gap-0 z-[100]">
          {/* Fixed Header */}
          <DialogHeader className="flex-shrink-0 border-b p-4 sm:p-6 bg-background relative">
            {/* Header Content with proper spacing for close button */}
            <div className="pr-10 sm:pr-12">
              <DialogTitle className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 pr-2">
                {project.title}
              </DialogTitle>
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{project.period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 flex-shrink-0" />
                  <span>FE {project.frontendDevelopers}명</span>
                </div>
                <div className="flex items-center gap-1">
                  <Code className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{project.role}</span>
                </div>
              </div>
            </div>
          </DialogHeader>

          {/* Scrollable Content */}
          <div
            className="flex-1 overflow-y-auto overscroll-contain"
            data-modal-content
          >
            <div className="space-y-4 sm:space-y-6 p-4 sm:p-6">
              {/* 프로젝트 대표 이미지 */}
              {project.image && (
                <div className="w-full max-w-3xl xl:max-w-2xl px-6 sm:px-12 lg:px-20 py-32 mx-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}

              {/* 기술 스택 및 키워드 - 모바일에서 세로 배치 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base sm:text-lg">
                      사용 기술
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs sm:text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base sm:text-lg">
                      핵심 키워드
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.keywords?.map((keyword, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-green-200 text-green-700 dark:border-green-700 dark:text-green-300 text-xs sm:text-sm"
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 프로젝트 배경 */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Target className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                    <span>프로젝트 배경</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.background}
                  </p>
                </CardContent>
              </Card>

              {/* 기술 및 설계 - 코드 스니펫 포함 */}
              {project.technologyReasoning &&
                project.technologyReasoning.length > 0 && (
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                        <Code className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 flex-shrink-0" />
                        <span>기술 및 설계</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 space-y-6">
                      {/* 기술 선택 이유 */}
                      <div className="space-y-4">
                        {project.technologyReasoning.map((reasoning, index) => (
                          <div
                            key={index}
                            className="border-l-4 border-purple-200 pl-4"
                          >
                            <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-2">
                              {reasoning.category}
                            </h4>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {reasoning.technologies.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="secondary"
                                  className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                              {reasoning.reasoning}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* 핵심 코드 스니펫 - 기술 및 설계 섹션 내부로 이동 */}
                      {project.codeSnippets &&
                        project.codeSnippets.length > 0 && (
                          <div className="border-t pt-6">
                            <h4 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">
                              <Braces className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600 flex-shrink-0" />
                              <span>핵심 구조/코드</span>
                            </h4>

                            {/* 데스크톱 탭 리스트 */}
                            <div className="hidden sm:block">
                              <Tabs
                                value={activeTabIndex.toString()}
                                onValueChange={(value) =>
                                  setActiveTabIndex(Number.parseInt(value))
                                }
                                className="w-full"
                              >
                                <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 h-auto p-1">
                                  {project.codeSnippets.map(
                                    (snippet, index) => (
                                      <TabsTrigger
                                        key={index}
                                        value={index.toString()}
                                        className="text-xs sm:text-sm p-2 h-auto whitespace-normal text-center"
                                      >
                                        <span className="truncate max-w-full">
                                          {snippet.filename || snippet.title}
                                        </span>
                                      </TabsTrigger>
                                    )
                                  )}
                                </TabsList>
                                {project.codeSnippets.map((snippet, index) => (
                                  <TabsContent
                                    key={index}
                                    value={index.toString()}
                                    className="mt-4"
                                  >
                                    <div className="space-y-3">
                                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                        <div className="flex items-center gap-3 min-w-0">
                                          <Tooltip>
                                            <TooltipTrigger asChild>
                                              <h5 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-white truncate">
                                                {snippet.title}
                                              </h5>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                              <p className="max-w-xs break-words">
                                                {snippet.title}
                                              </p>
                                            </TooltipContent>
                                          </Tooltip>
                                          <Badge
                                            variant="secondary"
                                            className={`${getLanguageColor(
                                              snippet.language
                                            )} flex-shrink-0`}
                                          >
                                            {snippet.language.toUpperCase()}
                                          </Badge>
                                        </div>
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() =>
                                            copyToClipboard(snippet.code, index)
                                          }
                                          className="flex items-center gap-2 self-start sm:self-auto flex-shrink-0"
                                        >
                                          <Copy className="h-4 w-4" />
                                          <span>
                                            {copiedIndex === index
                                              ? "복사됨!"
                                              : "복사"}
                                          </span>
                                        </Button>
                                      </div>

                                      {snippet.description && (
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                          {snippet.description}
                                        </p>
                                      )}

                                      <div className="relative">
                                        <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 sm:p-4 rounded-lg border max-h-80 overflow-y-auto">
                                          <pre className="text-xs sm:text-sm leading-relaxed overflow-x-auto">
                                            <code
                                              className={`language-${snippet.language}`}
                                            >
                                              {snippet.code}
                                            </code>
                                          </pre>
                                        </div>
                                        {snippet.filename && (
                                          <Tooltip>
                                            <TooltipTrigger asChild>
                                              <div className="absolute top-2 right-2 bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-mono max-w-[150px] truncate">
                                                {snippet.filename}
                                              </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                              <p className="max-w-xs break-words">
                                                {snippet.filename}
                                              </p>
                                            </TooltipContent>
                                          </Tooltip>
                                        )}
                                      </div>
                                    </div>
                                  </TabsContent>
                                ))}
                              </Tabs>
                            </div>

                            {/* 모바일 탭 네비게이션 - 오버플로우 수정 + 툴팁 추가 */}
                            <div className="block sm:hidden">
                              <div className="flex items-center justify-between bg-muted/50 rounded-lg p-2 mb-4">
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => navigateTab("prev")}
                                  className="h-8 w-8 p-0 flex-shrink-0"
                                  disabled={
                                    !project.codeSnippets ||
                                    project.codeSnippets.length <= 1
                                  }
                                >
                                  <ChevronLeft className="h-4 w-4" />
                                </Button>

                                <div className="flex items-center gap-2 flex-1 justify-center min-w-0 px-2">
                                  <FileText className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <span className="text-sm font-medium truncate">
                                        {project.codeSnippets[activeTabIndex]
                                          ?.filename ||
                                          project.codeSnippets[activeTabIndex]
                                            ?.title}
                                      </span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="max-w-xs break-words">
                                        {project.codeSnippets[activeTabIndex]
                                          ?.filename ||
                                          project.codeSnippets[activeTabIndex]
                                            ?.title}
                                      </p>
                                    </TooltipContent>
                                  </Tooltip>
                                  <span className="text-xs text-muted-foreground flex-shrink-0">
                                    ({activeTabIndex + 1}/
                                    {project.codeSnippets.length})
                                  </span>
                                </div>

                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => navigateTab("next")}
                                  className="h-8 w-8 p-0 flex-shrink-0"
                                  disabled={
                                    !project.codeSnippets ||
                                    project.codeSnippets.length <= 1
                                  }
                                >
                                  <ChevronRight className="h-4 w-4" />
                                </Button>
                              </div>

                              {/* Mobile Code Content */}
                              {project.codeSnippets[activeTabIndex] && (
                                <div className="space-y-3">
                                  <div className="flex flex-col gap-3">
                                    <div className="flex items-start justify-between gap-2">
                                      <div className="flex items-center gap-2 min-w-0 flex-1">
                                        <Tooltip>
                                          <TooltipTrigger asChild>
                                            <h5 className="font-semibold text-base text-gray-900 dark:text-white truncate">
                                              {
                                                project.codeSnippets[
                                                  activeTabIndex
                                                ].title
                                              }
                                            </h5>
                                          </TooltipTrigger>
                                          <TooltipContent>
                                            <p className="max-w-xs break-words">
                                              {
                                                project.codeSnippets[
                                                  activeTabIndex
                                                ].title
                                              }
                                            </p>
                                          </TooltipContent>
                                        </Tooltip>
                                        <Badge
                                          variant="secondary"
                                          className={`${getLanguageColor(
                                            project.codeSnippets[activeTabIndex]
                                              .language
                                          )} flex-shrink-0 text-xs`}
                                        >
                                          {project.codeSnippets[
                                            activeTabIndex
                                          ].language.toUpperCase()}
                                        </Badge>
                                      </div>
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() =>
                                          copyToClipboard(
                                            project.codeSnippets?.[
                                              activeTabIndex
                                            ]?.code ?? "",
                                            activeTabIndex
                                          )
                                        }
                                        className="flex items-center gap-1 flex-shrink-0 h-8 px-2"
                                      >
                                        <Copy className="h-3 w-3" />
                                        <span className="text-xs">
                                          {copiedIndex === activeTabIndex
                                            ? "✓"
                                            : "복사"}
                                        </span>
                                      </Button>
                                    </div>

                                    {project.codeSnippets[activeTabIndex]
                                      .description && (
                                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                        {
                                          project.codeSnippets[activeTabIndex]
                                            .description
                                        }
                                      </p>
                                    )}
                                  </div>

                                  <div className="relative">
                                    <div className="bg-gray-900 dark:bg-gray-950 text-gray-100 p-3 rounded-lg border max-h-64 overflow-y-auto">
                                      <pre className="text-xs leading-relaxed overflow-x-auto">
                                        <code
                                          className={`language-${project.codeSnippets[activeTabIndex].language}`}
                                        >
                                          {
                                            project.codeSnippets[activeTabIndex]
                                              .code
                                          }
                                        </code>
                                      </pre>
                                    </div>
                                    {project.codeSnippets[activeTabIndex]
                                      .filename && (
                                      <Tooltip>
                                        <TooltipTrigger asChild>
                                          <div className="absolute top-2 right-2 bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-mono max-w-[120px] truncate">
                                            {
                                              project.codeSnippets[
                                                activeTabIndex
                                              ].filename
                                            }
                                          </div>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                          <p className="max-w-xs break-words">
                                            {
                                              project.codeSnippets[
                                                activeTabIndex
                                              ].filename
                                            }
                                          </p>
                                        </TooltipContent>
                                      </Tooltip>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                    </CardContent>
                  </Card>
                )}

              {/* 프로젝트 상세 */}
              {project.projectPhases && project.projectPhases.length > 0 && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      <Code className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 flex-shrink-0" />
                      <span>프로젝트 상세</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {project.projectPhases.map((phase, index) => (
                        <div
                          key={index}
                          className="border-l-4 border-purple-200 pl-4"
                        >
                          <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-2">
                            {phase.phase}
                          </h4>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {phase.outcomes.map((outcome, outcomeIndex) => (
                              <Badge
                                key={outcomeIndex}
                                variant="secondary"
                                className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs"
                              >
                                {outcome}
                              </Badge>
                            ))}
                          </div>
                          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                            {phase.description}
                          </p>
                          {phase.detailsLink && (
                            <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                              <div className="flex items-start gap-2">
                                <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h5 className="font-medium text-blue-900 dark:text-blue-100 text-sm">
                                    {phase.detailsLink.title}
                                  </h5>
                                  <p className="text-xs text-blue-700 dark:text-blue-300 mt-1 mb-2">
                                    {phase.detailsLink.description}
                                  </p>
                                  <a
                                    href={phase.detailsLink.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 hover:underline"
                                  >
                                    <Globe className="h-3 w-3" />
                                    상세 문서 보기
                                  </a>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* 핵심 성과 */}
              {project.detailedDescription?.summary && (
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                      <span>핵심 성과</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="prose prose-sm max-w-none">
                      <h4 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-2">
                        {project.detailedDescription.summary}
                      </h4>
                      <div className="whitespace-pre-wrap text-sm sm:text-base text-gray-800 dark:text-gray-200 leading-relaxed font-sans bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-md overflow-x-auto max-h-64 overflow-y-auto">
                        {project.detailedDescription.results}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Bottom padding for mobile */}
              <div className="h-4 sm:h-0" />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
}
