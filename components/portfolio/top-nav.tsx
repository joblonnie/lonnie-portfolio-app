import { User, Target, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface TopNavProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const menuItems = [
  { id: "intro", label: "Home" },
  { id: "article", label: "Article" },
  { id: "goals", label: "Goals" },
];

export function TopNav({ currentPage, onPageChange }: TopNavProps) {
  return (
    <nav className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
        {/* 왼쪽: 타이틀 */}
        <div className="flex items-center font-bold text-lg tracking-tight text-mocha-500 dark:text-mocha-300 select-none">
          Lonnie Portfolio
        </div>
        {/* 가운데: 네비게이션 */}
        <div className="flex items-center gap-8">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={currentPage === item.id ? "default" : "ghost"}
              className="flex items-center gap-2 px-4 py-2 text-base font-medium"
              onClick={() => onPageChange(item.id)}
            >
              {item.label}
            </Button>
          ))}
        </div>
        {/* 오른쪽: 다크모드 토글 */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
