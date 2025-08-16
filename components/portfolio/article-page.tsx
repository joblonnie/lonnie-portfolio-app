const references = [
  {
    title: "업무 프로세스 개선",
    url: "https://www.notion.so/22b4c99a0f8180daa669e4ca8083fd66",
    description:
      "업무 효율을 높이기 위한 프로세스 개선하기 위해 제안했던 사례입니다.",
    date: "2024-09-24",
  },
  {
    title: "좋은 코드 리뷰 문화 유지를 위한 PR template 정의하기",
    url: "https://www.notion.so/PR-template-22b4c99a0f8180d6a24fc3f88d3e9c1b",
    description:
      "팀 내 코드 리뷰 문화를 개선하기 위한 PR 템플릿 정의를 담당하고, 적용한 사례입니다",
    date: "2024-12-18",
  },
  {
    title: "구글 크롬 북마크를 활용한 생산성 향상",
    url: "https://www.notion.so/22b4c99a0f81804a9060ea16b423aff9",
    description:
      "크롬 북마크 폴더링과 활용법으로 반복 업무를 줄이는 것을 전사적으로 공유했던 사례입니다.",
    date: "2024-10-30",
  },
  {
    title: "Outlook 메일 자동 분류로 생산성 향상",
    url: "https://www.notion.so/Outlook-22b4c99a0f81807c92ccc3c2b8bb776d",
    description:
      "Outlook 규칙을 활용해 메일함을 자동 정리하는 방법을 전사적으로 공유했던 사례입니다.",
    date: "2023-11-7",
  },
  {
    title: "FE 업무 프로세스 개선",
    url: "https://www.notion.so/FE-22b4c99a0f8180afb842d15c973c634e",
    description:
      "프론트엔드 개발 조직이 좀 더 나은 프로세스로 일하고자, 제안했던 경험 사례입니다.",
    date: "2024-09-24",
  },
];

const ArticlePage = () => {
  // 최신순(내림차순) 정렬
  const sorted = [...references].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <p className="text-center text-muted-foreground mb-12 text-base">
        실무에서 직접 경험하고 정리한 참고 자료와 생산성 팁을 공유합니다.
      </p>
      <div className="flex flex-col gap-8">
        {sorted.map((ref) => (
          <article key={ref.url} className="border-b pb-8 last:border-b-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs text-gray-400">
                {new Date(ref.date).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-semibold text-blue-700 dark:text-blue-400 hover:underline"
            >
              {ref.title}
            </a>
            <p className="text-base text-gray-700 dark:text-gray-300 mt-2 mb-1">
              {ref.description}
            </p>
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm text-blue-500 dark:text-blue-300 hover:underline mt-1"
            >
              자세히 →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ArticlePage;
