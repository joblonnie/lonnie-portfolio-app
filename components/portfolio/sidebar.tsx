"use client"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Separator } from "@/components/ui/separator"
import { Menu, X, User, Target, Home } from "lucide-react"

interface SidebarProps {
  currentPage: string
  onPageChange: (page: string) => void
  isOpen: boolean
  onToggle: () => void
}

export function Sidebar({ currentPage, onPageChange, isOpen, onToggle }: SidebarProps) {
  const menuItems = [
    { id: "intro", label: "소개", icon: User },
    { id: "goals", label: "목표", icon: Target },
  ]

  return (
    <>
      {/* 모바일 햄버거 버튼 */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-white dark:bg-gray-800 shadow-lg"
        onClick={onToggle}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* 사이드바 */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out z-[45] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* 헤더 */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#6495ED] to-[#7B68EE] rounded-lg flex items-center justify-center">
                <Home className="h-5 w-5 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-gray-900 dark:text-white">Portfolio</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">개발자 포트폴리오</p>
              </div>
            </div>
          </div>

          {/* 네비게이션 메뉴 */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = currentPage === item.id

                return (
                  <li key={item.id}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={`w-full justify-start gap-3 h-12 ${
                        isActive
                          ? "bg-gradient-to-r from-[#6495ED] to-[#7B68EE] text-white shadow-lg"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                      onClick={() => onPageChange(item.id)}
                    >
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </Button>
                  </li>
                )
              })}
            </ul>
          </nav>

          <Separator />

          {/* 하단 컨트롤 */}
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">테마</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
