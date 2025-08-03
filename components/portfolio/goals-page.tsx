"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Eye, Star, Target, BookOpen } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedElement } from "@/components/ui/animated-element";
import type { PortfolioData } from "@/lib/types";

interface GoalsPageProps {
  data: PortfolioData;
}

export function GoalsPage({ data }: GoalsPageProps) {
  /* ─────────────────────────  최상단 이동 버튼  ───────────────────────── */
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  /* ───────────────────────────────────────────────────────────────────── */

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6495ED]/10 via-[#7B68EE]/10 to-[#9370DB]/10 dark:from-[#4169E1]/20 dark:via-[#6A5ACD]/20 dark:to-[#8A2BE2]/20 p-4 sm:p-6 lg:p-8 relative">
      <div className="max-w-6xl mx-auto space-y-8 lg:space-y-12">
        {/* 헤더 */}
        <AnimatedElement
          animation="slideUp"
          delay={0}
          duration={200}
          className="text-center space-y-4"
        >
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
        <AnimatedElement
          animation="slideUp"
          delay={50}
          duration={200}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-3 text-gray-900 dark:text-white">
            <BookOpen className="h-6 w-6 text-[#6495ED]" />
            학습 계획
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.goals.learningPlan.map((plan, i) => (
              <AnimatedElement
                key={plan.title}
                animation="slideUp"
                delay={100 + i * 30}
                duration={200}
              >
                <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg sm:text-xl">
                      {plan.title}
                    </CardTitle>
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
        <AnimatedElement
          animation="slideUp"
          delay={50}
          duration={200}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-center flex items-center justify-center gap-3 text-gray-900 dark:text-white">
            <Eye className="h-6 w-6 text-[#6495ED]" />
            미래 비전
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.goals.futureVision.map(
              ({ icon, gradient, quote, description }, index) => (
                <AnimatedElement
                  key={index}
                  animation="slideUp"
                  delay={100 + index * 30}
                  duration={200}
                >
                  <div className="flex flex-col text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg h-full">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <span className="text-white text-2xl">{icon}</span>
                    </div>

                    <blockquote className="italic text-gray-800 dark:text-gray-200 mb-4 font-medium">
                      "{quote}"
                    </blockquote>

                    <p className="text-sm text-gray-600 dark:text-gray-400 flex-1 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </AnimatedElement>
              )
            )}
          </div>
        </AnimatedElement>

        {/* 미래 포부 */}
        <AnimatedElement
          animation="slideUp"
          delay={75}
          duration={200}
          className="space-y-6"
        >
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
                      {data.goals.shortTerm.map((goal, idx) => (
                        <li
                          key={goal.title + idx}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 bg-[#6495ED] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">
                            <strong>{goal.title}:</strong> {goal.description}
                          </span>
                        </li>
                      ))}
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
                      {data.goals.longTerm.map((goal, idx) => (
                        <li
                          key={goal.title + idx}
                          className="flex items-start gap-3"
                        >
                          <div className="w-1.5 h-1.5 bg-[#7B68EE] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">
                            <strong>{goal.title}:</strong> {goal.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  궁극적인 비전
                </h3>
                <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-6 text-center">
                  <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed italic">
                    "{data.goals.vision.quote}"
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                    {data.goals.vision.description}
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
  );
}
