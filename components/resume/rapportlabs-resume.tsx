"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { mockPortfolioData } from "@/lib/mock-data"
import {
  Mail,
  Phone,
  MapPin,
  Award,
  Users,
  Code,
  Briefcase,
  GraduationCap,
  Target,
  Lightbulb,
  User,
} from "lucide-react"

export function RapporlabsResumePageLayout() {
  const { personalInfo, companies, projects, education, certifications, activities, sideProjects, skills, goals } =
    mockPortfolioData

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <Card className="bg-white/90 backdrop-blur-sm border-slate-200">
          <CardContent className="p-8">
            <div className="flex items-center gap-6">
              <Avatar className="w-24 h-24">
                <AvatarImage src="/avatar.png" alt={personalInfo.name} />
                <AvatarFallback className="text-2xl bg-slate-200 text-slate-700">
                  {personalInfo.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-slate-800 mb-2">{personalInfo.name}</h1>
                <p className="text-xl text-slate-600 mb-4">{personalInfo.experience}년차 프론트엔드 개발자</p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-600">
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
          </CardContent>
        </Card>

        {/* 소개 */}
        <Card className="bg-white/90 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <User className="w-5 h-5" />
              소개
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-slate max-w-none">
              {personalInfo.bio.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-slate-700 leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 경력 */}
        <Card className="bg-white/90 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Briefcase className="w-5 h-5" />
              경력
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {companies.map((company, index) => (
              <div key={index} className="border-l-4 border-slate-200 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{company.name}</h3>
                    <p className="text-slate-600">{company.position}</p>
                  </div>
                  <div className="text-right text-sm text-slate-500">
                    <p>{company.period}</p>
                    <p>{company.duration}</p>
                  </div>
                </div>
                <ul className="space-y-1">
                  {company.achievementList.map((achievement, idx) => (
                    <li key={idx} className="text-slate-700 text-sm flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 주요 프로젝트 */}
        <Card className="bg-white/90 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Code className="w-5 h-5" />
              주요 프로젝트
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {projects.slice(0, 3).map((project, index) => (
              <div key={index} className="border-l-4 border-slate-200 pl-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{project.title}</h3>
                    <p className="text-slate-600 text-sm">{project.subtitle}</p>
                  </div>
                  <p className="text-sm text-slate-500">{project.period}</p>
                </div>
                <p className="text-slate-700 text-sm mb-3 leading-relaxed">{project.background}</p>

                {/* 주요 성과 */}
                {project.detailedDescription?.results && (
                  <div className="mb-3">
                    <h4 className="font-medium text-slate-800 mb-2">주요 성과</h4>
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
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 기술 스택 */}
        <Card className="bg-white/90 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Code className="w-5 h-5" />
              기술 스택
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">프론트엔드</h4>
                <div className="flex flex-wrap gap-1 mb-4">
                  {[...skills.languages, ...skills.ui.slice(0, 4)].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-slate-700 mb-2">도구 & 협업</h4>
                <div className="flex flex-wrap gap-1 mb-4">
                  {[...skills.devTools.slice(0, 3), ...skills.collaborationTools.slice(0, 3)].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs bg-slate-100 text-slate-700">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 학력 */}
        <Card className="bg-white/90 backdrop-blur-sm border-slate-200">
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
                </div>
                <p className="text-sm text-slate-500">{edu.period}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 자격증 & 교육 */}
        <Card className="bg-white/90 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Award className="w-5 h-5" />
              자격증 & 교육
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-slate-800">{cert.name}</h4>
                  <p className="text-slate-600 text-sm">{cert.issuer}</p>
                </div>
                <p className="text-sm text-slate-500">{cert.date}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* 활동 */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* 사내활동 */}
          <Card className="bg-white/90 backdrop-blur-sm border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <Users className="w-5 h-5" />
                사내활동
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {activities && activities.length > 0 ? (
                activities.map((activity, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-slate-800">{activity.title}</h4>
                    <p className="text-slate-600 text-sm">{activity.organization}</p>
                    <p className="text-slate-500 text-sm">{activity.period}</p>
                  </div>
                ))
              ) : (
                <p className="text-slate-500 text-sm">등록된 사내활동이 없습니다.</p>
              )}
            </CardContent>
          </Card>

          {/* 사이드 프로젝트 */}
          <Card className="bg-white/90 backdrop-blur-sm border-slate-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-slate-800">
                <Lightbulb className="w-5 h-5" />
                사이드 프로젝트
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {sideProjects && sideProjects.length > 0 ? (
                sideProjects.map((project, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-slate-800">{project.title}</h4>
                    <p className="text-slate-600 text-sm">{project.organization}</p>
                    <p className="text-slate-500 text-sm">{project.period}</p>
                  </div>
                ))
              ) : (
                <p className="text-slate-500 text-sm">등록된 사이드 프로젝트가 없습니다.</p>
              )}
            </CardContent>
          </Card>
        </div>

        {/* 목표 & 비전 */}
        <Card className="bg-white/90 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-slate-800">
              <Target className="w-5 h-5" />
              목표 & 비전
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <h3 className="font-semibold text-slate-800 mb-2">{goals.vision.quote}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{goals.vision.description}</p>
            </div>
            <div className="space-y-4">
              {goals.futureVision.map((vision, index) => (
                <div key={index} className="border-l-4 border-slate-200 pl-4">
                  <h4 className="font-medium text-slate-800 mb-1">{vision.quote}</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">{vision.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
