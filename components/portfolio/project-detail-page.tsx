"use client";

import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Code, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";

interface ProjectDetailPageProps {
  project: Project;
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  // 페이지 로드 시 스크롤을 최상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-6">
        {/* 헤더 */}
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              돌아가기
            </Button>
          </Link>

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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {project.background}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.keywords?.map((keyword, index) => (
                <Badge key={index} variant="secondary">
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
              </div>
            </div>
          </div>
        </div>

        {/* 프로젝트 요약 */}
        {project.detailedDescription && (
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                프로젝트 요약
              </h2>
              <p className="text-gray-700 mb-4">
                {project.detailedDescription.summary}
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-2">최종 성과</h3>
                <p className="text-gray-700">
                  {project.detailedDescription.results}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 기여사항 */}
        <div className="mb-8 space-y-6">
          {project.structuralContributions?.map((contribution, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Code className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {contribution.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {contribution.solutionList?.map((solution, solutionIndex) => (
                    <div
                      key={solutionIndex}
                      className="border-l-4 border-blue-200 pl-4"
                    >
                      <h4 className="font-medium text-gray-900 mb-2">
                        {solution.title}
                      </h4>
                      <p className="text-gray-700">{solution.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <ul className="space-y-2">
                    {contribution.achievementList.map(
                      (achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 사용 기술 */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              사용 기술
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
