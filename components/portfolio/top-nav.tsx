"use client"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"

interface TopNavProps {
  currentPage: string
  onPageChange: (page: string) => void
}

const menuItems = [
  { id: "intro", label: "Home" },
  { id: "article", label: "Article" },
]

export function TopNav({ currentPage, onPageChange }: TopNavProps) {
  const handleArticleClick = () => {
    // Article 클릭 시 별도 페이지로 이동
    onPageChange("article")
  }

  return (
    <nav className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
        {/* 왼쪽: 타이틀 */}
        <div className="flex items-center font-bold text-lg tracking-tight text-lime-600 dark:text-lime-400 select-none">
          Lonnie Portfolio
        </div>
        {/* 가운데: 네비게이션 */}
        <div className="flex items-center gap-8">
          <Button
            variant={currentPage === "intro" ? "default" : "ghost"}
            className={`flex items-center gap-2 px-4 py-2 text-base font-medium ${
              currentPage === "intro"
                ? "bg-coral-500 hover:bg-coral-600 text-white"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
            onClick={() => onPageChange("intro")}
          >
            Home
          </Button>
          <Button
            variant={currentPage === "article" ? "default" : "ghost"}
            className={`flex items-center gap-2 px-4 py-2 text-base font-medium ${
              currentPage === "article"
                ? "bg-coral-500 hover:bg-coral-600 text-white"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
            onClick={handleArticleClick}
          >
            Article
          </Button>
        </div>
        {/* 오른쪽: 다크모드 토글 */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
