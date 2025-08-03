"use client"

import { useState } from "react"
import { Sidebar } from "./sidebar"
import { CoverPage } from "./cover-page"
import { IntroductionPage } from "./introduction-page"
import { GoalsPage } from "./goals-page"
import { mockPortfolioData } from "@/lib/mock-data"

export function PortfolioLayout() {
  const [currentPage, setCurrentPage] = useState("cover")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handlePageChange = (page: string) => {
    // 페이지 이동 시 맨 위로 스크롤
    window.scrollTo({ top: 0, behavior: "smooth" })
    setCurrentPage(page)
    setSidebarOpen(false) // 모바일에서 페이지 변경 시 사이드바 닫기
  }

  const renderPage = () => {
    switch (currentPage) {
      case "cover":
        return <CoverPage onNavigate={handlePageChange} />
      case "intro":
        return <IntroductionPage onNavigate={handlePageChange} />
      case "goals":
        return <GoalsPage data={mockPortfolioData} />
      default:
        return <CoverPage onNavigate={handlePageChange} />
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Only show sidebar when not on cover page */}
      {currentPage !== "cover" && (
        <Sidebar
          currentPage={currentPage}
          onPageChange={handlePageChange}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen(!sidebarOpen)}
        />
      )}

      {/* 메인 콘텐츠 */}
      <main className={`flex-1 transition-all duration-300 ${currentPage !== "cover" ? "lg:ml-64" : ""}`}>
        {renderPage()}
      </main>

      {/* 모바일 오버레이 - backdrop z-index를 사이드바보다 낮게 설정 */}
      {currentPage !== "cover" && sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-[40] lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  )
}
