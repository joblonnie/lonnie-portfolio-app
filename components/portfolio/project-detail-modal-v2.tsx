import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/types";

interface ProjectDetailModalV2Props {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDetailModalV2({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalV2Props) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-1">문제 상황</h3>
          <p className="text-gray-700 dark:text-gray-300">
            {project.problem ||
              "이 프로젝트가 요구했던 문제 상황을 기술합니다."}
          </p>
        </section>
        <section className="mb-6">
          <h3 className="text-lg font-semibold mb-1">고민 및 해결 과정</h3>
          <p className="text-gray-700 dark:text-gray-300">
            {project.solution ||
              "내가 어떤 고민을 했고, 어떻게 해결했는지 사례를 적습니다."}
          </p>
        </section>
        <section>
          <h3 className="text-lg font-semibold mb-1">얻은 것/배운 점</h3>
          <p className="text-gray-700 dark:text-gray-300">
            {project.learning ||
              "이 경험을 통해 얻은 점, 성장, 결과를 적습니다."}
          </p>
        </section>
        <Button onClick={onClose} className="mt-6 w-full">
          닫기
        </Button>
      </DialogContent>
    </Dialog>
  );
}
