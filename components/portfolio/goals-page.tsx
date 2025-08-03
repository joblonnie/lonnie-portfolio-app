"use client"

import { useEffect, useState } from "react"
import { ArrowUp, Eye, Star, Target, BookOpen } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedElement } from "@/components/ui/animated-element"
import type { PortfolioData } from "@/lib/types"

interface GoalsPageProps {
  data: PortfolioData
}

export function GoalsPage({ data }: GoalsPageProps) {
  /* ─────────────────────────  최상단 이동 버튼  ───────────────────────── */
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  /* ───────────────────────────────────────────────────────────────────── */

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6495ED]/10 via-[#7B68EE]/10 to-[#9370DB]/10 dark:from-[#4169E1]/20 dark:via-[#6A5ACD]/20 dark:to-[#8A2BE2]/20 p-4 sm:p-6 lg:p-8 relative">
      <div className="max-w-6xl mx-auto space-y-8 lg:space-y-12">
        {/* 헤더 */}
        <AnimatedElement animation="slideUp" delay={0} duration={200} className="text-center space-y-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#6495ED] to-[#7B68EE] rounded-full flex items-center justify-center text-white mx-auto">
            <Target className="h-8 w-8 sm:h-10 sm:w-10" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#6495ED] to-[#7B68EE] bg-clip-text text-transparent">
            목표 & 비전
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            앞으로의 학습 계획과 개발자로서의 비전을 소개합니다.
          </p>
        </AnimatedElement>

        {/* 학습 계획 */}
        <AnimatedElement animation="slideUp" delay={50} duration={200} className="space-y-6">
          <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-3 text-gray-900 dark:text-white">
            <BookOpen className="h-6 w-6 text-[#6495ED]" />
            학습 계획
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.goals.learningPlan.map((plan, i) => (
              <AnimatedElement key={plan.title} animation="slideUp" delay={100 + i * 30} duration={200}>
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg sm:text-xl">{plan.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {plan.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedElement>
            ))}
          </div>
        </AnimatedElement>

        {/* 미래 비전 */}
        <AnimatedElement animation="slideUp" delay={50} duration={200} className="space-y-6">
          <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-3 text-gray-900 dark:text-white">
            <Eye className="h-6 w-6 text-[#6495ED]" />
            미래 비전
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.goals.futureVision.map(({ icon, gradient, quote, description }, index) => (
              <AnimatedElement key={index} animation="slideUp" delay={100 + index * 30} duration={200}>
                <div className="flex flex-col text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-white text-2xl">{icon}</span>
                  </div>

                  <blockquote className="italic text-gray-800 dark:text-gray-200 mb-4 font-medium">
                    "{quote}"
                  </blockquote>

                  <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 leading-relaxed">{description}</p>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </AnimatedElement>

        {/* 미래 포부 */}
        <AnimatedElement animation="slideUp" delay={75} duration={200} className="space-y-6">
          <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-3 text-gray-900 dark:text-white">
            <Star className="h-6 w-6 text-[#6495ED]" />
            미래 포부
          </h2>

          <Card className="bg-gradient-to-r from-[#6495ED]/10 to-[#7B68EE]/10 border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#6495ED] rounded-full"></span>
                      단기 목표 (1-2년)
                    </h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#6495ED] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">
                          <strong>풀스택 역량 강화:</strong> 백엔드 기술 스택을 확장하여 Node.js, Python, 데이터베이스
                          설계 등을 깊이 있게 학습
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#6495ED] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">
                          <strong>클라우드 및 DevOps:</strong> AWS, Docker, CI/CD 파이프라인 구축을 통한 배포 자동화
                          경험 쌓기
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#6495ED] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">
                          <strong>오픈소스 기여:</strong> 활발한 오픈소스 프로젝트에 기여하며 개발 커뮤니티와의 네트워킹
                          확대
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#7B68EE] rounded-full"></span>
                      장기 목표 (3-5년)
                    </h3>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#7B68EE] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">
                          <strong>기술 리더십:</strong> 팀을 이끌며 기술적 의사결정을 주도하고, 주니어 개발자들의 성장을
                          돕는 멘토 역할 수행
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#7B68EE] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">
                          <strong>제품 중심 사고:</strong> 단순한 기능 구현을 넘어 비즈니스 가치를 창출하는 제품을
                          만드는 개발자로 성장
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#7B68EE] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">
                          <strong>기술 전문성:</strong> 특정 도메인(예: 성능 최적화, 보안, AI/ML)에서 인정받는 전문가로
                          성장
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">궁극적인 비전</h3>
                <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-6 text-center">
                  <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed italic">
                    "기술을 통해 사람들의 일상을 더 편리하고 의미있게 만드는 것"
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                    단순히 코드를 작성하는 것을 넘어, 사용자의 문제를 해결하고 더 나은 경험을 제공하는 제품을 만들어
                    사회에 긍정적인 영향을 미치고 싶습니다. 지속적인 학습과 성장을 통해 기술과 비즈니스를 모두 이해하는
                    개발자가 되는 것이 저의 목표입니다.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedElement>
      </div>

      {/* 최상단 이동 버튼 */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#6495ED] hover:bg-[#567fd4] text-white shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
