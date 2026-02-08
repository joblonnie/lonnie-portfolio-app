import { test, expect } from "@playwright/test";

test.describe("Portfolio Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("페이지가 정상적으로 로드된다", async ({ page }) => {
    // 페이지 제목 또는 메인 콘텐츠 확인
    await expect(page.locator("body")).toBeVisible();
    // 프로필 섹션이 보이는지 확인
    await expect(page.getByText("Frontend Developer")).toBeVisible();
  });

  test("회사 탭을 클릭하면 해당 회사의 프로젝트가 표시된다", async ({ page }) => {
    // 회사 버튼들을 찾음
    const companyButtons = page.locator('button:has-text("SAIGE"), button:has-text("미디어코퍼스")');
    const firstCompany = companyButtons.first();

    await expect(firstCompany).toBeVisible();
    await firstCompany.click();

    // 프로젝트 카드가 표시되는지 확인
    await expect(page.locator(".glass-card, .glass-card-lime").first()).toBeVisible();
  });

  test("프로젝트 카드를 클릭하면 상세 정보가 표시된다", async ({ page }) => {
    // 프로젝트 카드 클릭
    const projectCard = page.locator("button").filter({ hasText: /VIMS|디자인 시스템|텍스트 윤리성/ }).first();
    await expect(projectCard).toBeVisible();
    await projectCard.click();

    // 프로젝트 상세 정보 확인 (기간, 역할 등)
    await expect(page.getByText("기간")).toBeVisible();
    await expect(page.getByText("역할")).toBeVisible();
  });

  test("선택된 프로젝트 카드는 라임색 스타일이 유지된다", async ({ page }) => {
    // 프로젝트 카드 클릭
    const projectCard = page.locator("button").filter({ hasText: /VIMS|디자인 시스템/ }).first();
    await projectCard.click();

    // 선택된 카드가 glass-card-lime 클래스를 가지는지 확인
    await expect(projectCard).toHaveClass(/glass-card-lime/);
    await expect(projectCard).toHaveClass(/border-lime-400/);
  });

  test("선택된 프로젝트 카드에 hover해도 스타일이 유지된다", async ({ page }) => {
    // 프로젝트 카드 클릭
    const projectCard = page.locator("button").filter({ hasText: /VIMS|디자인 시스템/ }).first();
    await projectCard.click();

    // hover
    await projectCard.hover();

    // 선택 스타일이 유지되는지 확인
    await expect(projectCard).toHaveClass(/glass-card-lime/);
    await expect(projectCard).toHaveClass(/border-lime-400/);
  });

  test("아티클 섹션이 표시된다", async ({ page }) => {
    // 아티클 섹션으로 스크롤
    const articlesSection = page.locator("#articles");
    await articlesSection.scrollIntoViewIfNeeded();

    // 아티클 카드가 보이는지 확인
    await expect(page.getByText("CI/CD").first()).toBeVisible();
  });

  test("스킬 섹션이 표시된다", async ({ page }) => {
    // 스킬 섹션으로 스크롤
    const skillsSection = page.locator("#skills");
    await skillsSection.scrollIntoViewIfNeeded();

    // 스킬 카테고리가 보이는지 확인
    await expect(page.getByText("Frontend")).toBeVisible();
    await expect(page.getByText("React")).toBeVisible();
  });

  test("네비게이션 링크가 동작한다", async ({ page }) => {
    // 네비게이션 버튼 클릭
    const navButton = page.locator('a[href="#projects"], button:has-text("프로젝트")').first();

    if (await navButton.isVisible()) {
      await navButton.click();
      // 프로젝트 섹션이 뷰포트에 있는지 확인
      await expect(page.locator("#projects")).toBeInViewport();
    }
  });


  test("맨 위로 버튼이 스크롤 후 나타난다", async ({ page }) => {
    // 페이지 하단으로 스크롤
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // 맨 위로 버튼이 나타나는지 확인
    const scrollTopButton = page.locator('button[title="맨 위로"]');
    await expect(scrollTopButton).toBeVisible({ timeout: 3000 });

    // 버튼 클릭
    await scrollTopButton.click();

    // 페이지 상단으로 스크롤되었는지 확인
    await expect(page.locator("body")).toBeInViewport();
  });
});

test.describe("반응형 디자인", () => {
  test("모바일 뷰포트에서 레이아웃이 정상 동작한다", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // 페이지가 로드되는지 확인
    await expect(page.getByText("Frontend Developer")).toBeVisible();

    // 프로젝트 카드가 보이는지 확인
    const projectCard = page.locator("button").filter({ hasText: /VIMS|디자인 시스템/ }).first();
    await expect(projectCard).toBeVisible();
  });

  test("모바일에서 프로젝트 선택이 정상 동작한다", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/");

    // 프로젝트 카드 클릭
    const projectCard = page.locator("button").filter({ hasText: /VIMS|디자인 시스템/ }).first();
    await projectCard.click();

    // 선택 스타일 확인
    await expect(projectCard).toHaveClass(/glass-card-lime/);
    await expect(projectCard).toHaveClass(/border-lime-400/);
  });
});
