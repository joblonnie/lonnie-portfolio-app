"use client";

import { useState } from "react";
import { TopNav } from "./top-nav";
import { IntroductionPage } from "./introduction-page";
import { GoalsPage } from "./goals-page";
import { mockPortfolioData } from "@/lib/mock-data";
import ArticlePage from "./article-page";

export function PortfolioLayout() {
  const [currentPage, setCurrentPage] = useState("intro");

  const handlePageChange = (page: string) => {
    // 페이지 이동 시 맨 위로 스크롤
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "intro":
        return <IntroductionPage onNavigate={handlePageChange} />;
      case "article":
        return <ArticlePage />;
      case "goals":
        return <GoalsPage data={mockPortfolioData} />;
      default:
        return <IntroductionPage onNavigate={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TopNav currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="flex-1">{renderPage()}</main>
    </div>
  );
}
