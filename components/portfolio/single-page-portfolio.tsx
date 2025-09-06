"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { mockPortfolioData } from "@/lib/mock-data"
import {
  Mail,
  Phone,
  MapPin,
  Award,
  BookOpen,
  Users,
  Code,
  Briefcase,
  GraduationCap,
  Target,
  Lightbulb,
  ExternalLink,
  User,
  Zap,
} from "lucide-react"

export function SinglePagePortfolio() {
  const {
    personalInfo,
    introduction,
    companies,
    projects,
    education,
    certifications,
    activities,
    sideProjects,
    skills,
    goals,
    articles,
  } = mockPortfolioData

  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-800">
            "좋은 경험은 결국 좋은 기억이 된다" UX·DX 중심 개발자의 여정
          </h1>
          <div className="flex items-center justify-center gap-4">
            <Avatar className="w-24 h-24">
              <AvatarImage src="/avatar.png" alt={personalInfo.name} />
              <AvatarFallback className="text-2xl bg-slate-200 text-slate-700">
                {personalInfo.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="text-left">
              <h2 className="text-2xl font-bold text-slate-800">{personalInfo.name}</h2>
              <p className="text-lg text-slate-600">{personalInfo.title}</p>
              <p className="text-slate-500">{personalInfo.experience}년차 프론트엔드 개발자</p>
              <div className="flex gap-4 mt-2 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  {personalInfo.email}
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  {personalInfo.phone}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {personalInfo.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
          <CardContent className="p-8">
            <div className="prose prose-slate max-w-none">
              {personalInfo.bio.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-slate-700 leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mindset & Capabilities */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* 업무 철학 */}
          <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-slate-600" />
                업무 철학
              </h3>
              <div className="space-y-4">
                {introduction.mindset.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                        <User className="w-5 h-5 text-slate-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 핵심 역량 */}
          <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-slate-600" />
                핵심 역량
              </h3>
              <div className="space-y-4">
                {introduction.capabilities.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-slate-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 경력 */}
        <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Briefcase className="w-5 h-5" />
              경력 및 프로젝트
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {companies.map((company, companyIndex) => (
              <div key={companyIndex} className="space-y-6">
                <div className="border-l-4 border-slate-300 pl-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800">{company.name}</h3>
                      <p className="text-slate-600">{company.position}</p>
                    </div>
                    <div className="text-right text-sm text-slate-500">
                      <p>{company.period}</p>
                      <p>{company.duration}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {company.achievementList.map((achievement, idx) => (
                      <li key={idx} className="text-slate-700 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 해당 회사의 프로젝트들 */}
                <div className="grid gap-6">
                  {projects
                    .filter((project) => project.companyId === company.id)
                    .map((project, projectIndex) => (
                      <Card key={projectIndex} className="bg-slate-50/50 border-slate-200">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4 mb-4">
                            {project.image && (
                              <img
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                className="w-12 h-12 rounded-lg object-cover"
                              />
                            )}
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h4 className="text-lg font-semibold text-slate-800">{project.title}</h4>
                                  {project.subtitle && <p className="text-slate-600 text-sm">{project.subtitle}</p>}
                                </div>
                                <p className="text-sm text-slate-500">{project.period}</p>
                              </div>
                              <p className="text-slate-700 mb-4 leading-relaxed">{project.background}</p>

                              {/* 기여도 */}
                              {project.contributions && project.contributions.length > 0 && (
                                <div className="mb-4">
                                  <h5 className="font-medium text-slate-800 mb-2">기여도</h5>
                                  <div className="grid grid-cols-2 gap-3">
                                    {project.contributions.map((contribution, idx) => (
                                      <div key={idx}>
                                        <div className="flex justify-between text-sm mb-1">
                                          <span className="text-slate-700">{contribution.category}</span>
                                          <span className="text-slate-600">{contribution.percentage}%</span>
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
                                </div>
                              )}

                              {/* 주요 성과 */}
                              {project.detailedDescription?.results && (
                                <div className="mb-4">
                                  <h5 className="font-medium text-slate-800 mb-2">주요 성과</h5>
                                  <ul className="space-y-1">
                                    {project.detailedDescription.results.slice(0, 3).map((result, idx) => (
                                      <li key={idx} className="text-slate-700 text-sm flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                                        {result}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* 기술 스택 */}
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.slice(0, 8).map((tech) => (
                                  <Badge key={tech} variant="secondary" className="text-xs bg-white text-slate-700">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 기술 스택 */}
        <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Code className="w-5 h-5" />
              기술 스택
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">언어</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-slate-100 text-slate-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">UI/UX</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.ui.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-slate-100 text-slate-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">상태 관리</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.stateManagement.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-slate-100 text-slate-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">아키텍처</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.architecture.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-slate-100 text-slate-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">개발 도구</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.devTools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-slate-100 text-slate-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-3">협업 도구</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.collaborationTools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-slate-100 text-slate-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 학력 */}
        <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <GraduationCap className="w-5 h-5" />
              학력
            </CardTitle>
          </CardHeader>
          <CardContent>
            {education.map((edu, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-slate-800">{edu.institution}</h3>
                  <p className="text-slate-600">{edu.degree}</p>
                  {edu.gpa && <p className="text-slate-500 text-sm">GPA: {edu.gpa}</p>}
                  <p className="text-slate-700 text-sm mt-2 leading-relaxed">{edu.description}</p>
                </div>
                <p className="text-sm text-slate-500">{edu.period}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Activities & Side Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* 사내활동 */}
          <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <Users className="w-5 h-5" />
                사내활동
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {activities && activities.length > 0 ? (
                activities.map((activity, index) => (
                  <div key={index} className="border-l-4 border-slate-200 pl-4">
                    <h4 className="font-semibold text-slate-800">{activity.title}</h4>
                    <p className="text-sm text-slate-600 mb-2">
                      {activity.organization} • {activity.period}
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed">{activity.description}</p>
                  </div>
                ))
              ) : (
                <p className="text-slate-500 text-sm">등록된 사내활동이 없습니다.</p>
              )}
            </CardContent>
          </Card>

          {/* 사이드 프로젝트 */}
          <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <Lightbulb className="w-5 h-5" />
                사이드 프로젝트
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {sideProjects && sideProjects.length > 0 ? (
                sideProjects.map((project, index) => (
                  <div key={index} className="border-l-4 border-slate-200 pl-4">
                    <h4 className="font-semibold text-slate-800">{project.title}</h4>
                    <p className="text-sm text-slate-600 mb-2">
                      {project.organization} • {project.period}
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed">{project.description}</p>
                  </div>
                ))
              ) : (
                <p className="text-slate-500 text-sm">등록된 사이드 프로젝트가 없습니다.</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* 자격증 & 교육 */}
        <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Award className="w-5 h-5" />
              자격증 & 교육
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-slate-800">{cert.name}</h4>
                  <p className="text-slate-600 text-sm">{cert.issuer}</p>
                  {cert.description && (
                    <p className="text-slate-700 text-sm mt-1 leading-relaxed">{cert.description}</p>
                  )}
                </div>
                <p className="text-sm text-slate-500">{cert.date}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 아티클 */}
        <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <BookOpen className="w-5 h-5" />
              아티클
            </CardTitle>
            <p className="text-slate-600 text-sm mt-2">개발하면서 정리했던 문서들입니다.</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {articles.slice(0, 6).map((article, index) => (
                <Card key={index} className="bg-slate-50/50 border-slate-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary" className="text-xs bg-white text-slate-700">
                        {article.category}
                      </Badge>
                      <p className="text-xs text-slate-500">{article.date}</p>
                    </div>
                    <h4 className="font-medium text-slate-800 mb-2 line-clamp-2">{article.title}</h4>
                    <p className="text-slate-600 text-sm mb-3 line-clamp-2">{article.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {article.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-between text-lime-600 hover:text-lime-700"
                      onClick={() => window.open(article.notionUrl, "_blank")}
                    >
                      자세히 보기
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 목표 & 비전 */}
        <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Target className="w-5 h-5" />
              목표 & 비전
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h3 className="font-semibold text-slate-800 mb-2">{goals.vision.quote}</h3>
              <p className="text-slate-700 leading-relaxed">{goals.vision.description}</p>
            </div>
            <div className="space-y-6">
              {goals.futureVision.map((vision, index) => (
                <div key={index} className="border-l-4 border-slate-200 pl-6">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-2xl">{vision.icon}</span>
                    <h4 className="font-medium text-slate-800">{vision.quote}</h4>
                  </div>
                  <p className="text-slate-700 leading-relaxed">{vision.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
