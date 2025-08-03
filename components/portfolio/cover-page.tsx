"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AnimatedElement } from "@/components/ui/animated-element";
import { ArrowRight, MapPin, Calendar, User, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { mockPortfolioData } from "@/lib/mock-data";
import type { PortfolioData } from "@/lib/types";

interface CoverPageProps {
  data?: PortfolioData;
  onNavigate?: (page: string) => void;
}

export function CoverPage({ data, onNavigate }: CoverPageProps) {
  const portfolioData = data || mockPortfolioData;

  const handleEmailClick = () => {
    const email = portfolioData.personalInfo?.email || "contact@example.com";
    window.location.href = `mailto:${email}`;
  };

  const handleNavigate = (page: string) => {
    // 페이지 이동 시 맨 위로 스크롤
    window.scrollTo({ top: 0, behavior: "smooth" });
    onNavigate?.(page);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#6495ED]/20 via-[#7B68EE]/20 to-[#9370DB]/20 dark:from-[#4169E1]/30 dark:via-[#6A5ACD]/30 dark:to-[#8A2BE2]/30 relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#6495ED]/30 to-[#7B68EE]/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#7B68EE]/30 to-[#9370DB]/30 rounded-full blur-3xl"></div>
      </div>

      {/* 상단 컨트롤 */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* 프로필 섹션 */}
          <AnimatedElement
            animation="scaleIn"
            delay={0}
            duration={200}
            className="space-y-6"
          >
            <div className="relative inline-block">
              <Avatar className="w-32 h-32 sm:w-40 sm:h-40 mx-auto ring-4 ring-white/50 shadow-2xl">
                <AvatarImage src="/avatar.png" alt="Profile" />
                <AvatarFallback className="text-2xl sm:text-3xl bg-gradient-to-br from-[#6495ED] to-[#7B68EE] text-white">
                  {portfolioData.personalInfo?.name?.charAt(0) || "L"}
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#6495ED] to-[#7B68EE] bg-clip-text text-transparent">
                {portfolioData.personalInfo?.name || "개발자"}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium">
                {portfolioData.personalInfo?.title || "풀스택 개발자"}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {portfolioData.personalInfo?.bio ||
                  "혁신적인 웹 솔루션을 만드는 개발자입니다."}
              </p>
            </div>
          </AnimatedElement>

          {/* 개인 정보 카드 */}
          <AnimatedElement animation="slideUp" delay={50} duration={200}>
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4 text-[#6495ED]" />
                    {portfolioData.personalInfo?.location || "대한민국"}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Calendar className="h-4 w-4 text-[#6495ED]" />
                    4년차 개발자
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <User className="h-4 w-4 text-[#6495ED]" />
                    Available for work
                  </div>
                  <div
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 cursor-pointer hover:text-[#6495ED] transition-colors"
                    onClick={handleEmailClick}
                  >
                    <Mail className="h-4 w-4 text-[#6495ED]" />
                    {portfolioData.personalInfo?.email || "contact@example.com"}
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedElement>

          {/* 둘러보기 버튼 */}
          <AnimatedElement animation="slideUp" delay={100} duration={200}>
            <Button
              size="lg"
              onClick={() => handleNavigate("intro")}
              className="bg-[#6495ED] hover:bg-[#5A7FDB] text-white px-12 py-4 text-xl font-medium shadow-lg hover:shadow-xl transform transition-all hover:scale-105"
            >
              둘러보기
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
}
