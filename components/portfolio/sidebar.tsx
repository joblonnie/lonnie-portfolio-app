"use client";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Menu,
  X,
  User,
  Target,
  Home,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { mockPortfolioData } from "@/lib/mock-data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface SidebarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const externalLinks = [
  {
    name: "GitHub",
    url: "https://github.com/joblonnie",
    icon: <Github className="h-5 w-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/donghyun-kim-a52b62207/",
    icon: <Linkedin className="h-5 w-5" />,
  },
  {
    name: "Tistory Blog",
    url: "https://aosjehdgus.tistory.com/",
    icon: <Globe className="h-5 w-5" />,
  },
];

export function Sidebar({
  currentPage,
  onPageChange,
  isOpen,
  onToggle,
}: SidebarProps) {
  const portfolioData = mockPortfolioData;

  const menuItems = [
    { id: "intro", label: "소개", icon: User },
    { id: "goals", label: "목표", icon: Target },
  ];

  return (
    <>
      {/* 모바일 메뉴 버튼 */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden bg-white dark:bg-gray-800 shadow"
        onClick={onToggle}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* 사이드바 */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-40 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-4">
          {/* 프로필 */}
          <div className="relative mx-auto">
            <Avatar className="w-20 h-20 ring-2 ring-white/50 shadow-md">
              <AvatarImage src="/avatar.png" alt="Profile" />
              <AvatarFallback className="text-lg bg-gradient-to-br from-[#6495ED] to-[#7B68EE] text-white">
                {portfolioData.personalInfo?.name?.charAt(0) || "L"}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow" />
          </div>

          {/* 이름 및 직함 */}
          <div className="mt-3 text-center space-y-1">
            <h1 className="text-base font-semibold bg-gradient-to-r from-[#6495ED] to-[#7B68EE] bg-clip-text text-transparent">
              {portfolioData.personalInfo?.name || "개발자"}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {portfolioData.personalInfo?.title || "풀스택 개발자"}
            </p>
          </div>

          {/* External Links - Icon only with tooltips */}
          <TooltipProvider>
            <div className="flex justify-center gap-8 pt-4 dark:border-gray-600">
              {externalLinks.map((link, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-5 h-5 p-0 rounded-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.icon}
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{link.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>

          <Separator className="my-4" />

          {/* 메뉴 */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {/* 표지로 버튼 */}
              <li>
                <Button
                  variant={currentPage === "home" ? "default" : "ghost"}
                  className={`w-full justify-start gap-3 h-10 px-3 text-sm ${
                    currentPage === "home"
                      ? "bg-gradient-to-r from-[#6495ED] to-[#7B68EE] text-white shadow"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => {
                    onPageChange("home");
                  }}
                >
                  <Home className="h-4 w-4" />
                  표지
                </Button>
              </li>

              {/* 기존 메뉴들 */}
              {menuItems.map(({ id, label, icon: Icon }) => {
                const isActive = currentPage === id;
                return (
                  <li key={id}>
                    <Button
                      variant={isActive ? "default" : "ghost"}
                      className={`w-full justify-start gap-3 h-10 px-3 text-sm ${
                        isActive
                          ? "bg-gradient-to-r from-[#6495ED] to-[#7B68EE] text-white shadow"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      }`}
                      onClick={() => onPageChange(id)}
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Separator className="my-4" />

          {/* 하단 컨트롤 */}
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>테마</span>
            <ThemeToggle />
          </div>
        </div>
      </aside>
    </>
  );
}
