"use client";

import type { PortfolioData } from "./types";

export const mockPortfolioData: PortfolioData = {
  personalInfo: {
    name: "김동현",
    title: "Lonnie",
    email: "joblonnie@gmail.com",
    phone: "010-5054-0121",
    location: "서울, 대한민국",
    experience: 4,
    bio: "UI/UX 중심의 성능 최적화를 지향하는 프론트엔드 개발자입니다. 4년간의 실무 경험을 바탕으로 React와 TypeScript 기반의 SPA 웹 애플리케이션을 설계하고 개발합니다.",
  },
  introduction: {
    mindset: [
      {
        title: "사용자 중심 사고",
        description:
          "항상 사용자의 관점에서 생각하며, 직관적이고 편리한 경험을 제공하기 위해 노력합니다.",
      },
      {
        title: "품질에 대한 집착",
        description:
          "완벽한 코드는 없지만, 더 나은 코드를 위해 지속적으로 개선하고 학습합니다.",
      },
      {
        title: "협업의 가치",
        description:
          "팀워크를 통해 더 큰 가치를 창출할 수 있다고 믿으며, 소통을 중시합니다.",
      },
    ],
    capabilities: [
      {
        title: "문제 해결 능력",
        description:
          "복잡한 문제를 단순하게 분해하고, 효율적인 해결책을 찾아냅니다.",
      },
      {
        title: "빠른 학습력",
        description:
          "새로운 기술과 트렌드를 빠르게 습득하고 프로젝트에 적용합니다.",
      },
      {
        title: "소통 능력",
        description:
          "기술적 내용을 비개발자도 이해할 수 있게 설명할 수 있습니다.",
      },
    ],
  },
  skills: {
    languages: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    ui: [
      "React",
      "MUI",
      "Ant Design",
      "Styled Components",
      "Emotion",
      "Echarts",
      "Konva",
      "Saige Elements Design System",
      "React Hook Form",
    ],
    stateManagement: [
      "Zustand",
      "TanStack Query",
      "Redux",
      "Redux Toolkit",
      "Context API",
      "MobX",
    ],
    architecture: ["Nx Monorepo", "Featured-Sliced Design", "Atomic Design"],
    devTools: ["Webpack", "Vite", "Babel", "ESLint", "Prettier"],
    collaborationTools: [
      "Storybook",
      "Figma",
      "Notion",
      "Jira",
      "Swagger",
      "Teams",
    ],
  },
  companies: [
    {
      id: "saige",
      name: "(주) 세이지",
      position: "프론트엔드 개발자",
      period: "2022.06 - 현재",
      duration: "3년 2개월",
      achievements: [
        "React 기반 AI 모니터링 시스템 및 안전 관리 솔루션 개발",
        "NX Monorepo 아키텍처 도입으로 개발 효율성 85% 향상",
        "GS 인증 1등급 획득을 위한 UI/UX 개선 주도",
      ],
    },
    {
      id: "media-corpus",
      name: "(주) 미디어 코퍼스",
      position: "프론트엔드 개발자",
      period: "2021.04 - 2022.05",
      duration: "1년 2개월",
      achievements: [
        "자연어 처리 연구를 위한 라벨링 시스템 개발",
        "사용자 테스트 기반 UI/UX 개선으로 작업 효율성 40% 향상",
      ],
    },
  ],
  projects: [
    {
      projectId: 1,
      companyId: "saige",
      title: "SAIGE VIMS 통합 모니터링 시스템 개발 (Monorepo 기반)",
      image: "/vims-logo.svg?text=SAIGE+VIMS+모니터링+시스템",
      background:
        "SAIGE VIMS는 산업용 AI 기반 검사·모니터링 시스템을 통합 관리하기 위한 웹 플랫폼입니다. 고객사별 요구에 따라 새롭게 기획된 다양한 앱을 일관된 아키텍처와 UI/UX 체계 아래에서 처음부터 개발하고, 실시간 데이터 처리 및 시각화 기능을 공통된 구조로 구성한 프로젝트입니다.",
      detailedDescription: {
        summary:
          "NX 기반 Monorepo 구조와 Feature-Sliced Design 패턴을 적용하여 코드 재사용률 85% 달성 및 신규 앱 셋업 시간 50% 단축을 실현한 통합 모니터링 시스템",
        results:
          "프로젝트를 앱 단위(workspace)로 구분하고 공통 UI/비즈니스 로직을 라이브러리 패키지로 모듈화하여 독립적인 빌드 및 배포 체계를 구축했습니다. 신규 앱을 빠르게 셋업할 수 있는 템플릿 구조를 마련하여 셋업 시간 50% 단축을 달성했으며, 도메인/기능 단위로 디렉토리를 나누고 의존성 최소화를 위한 레이어 분리를 적용했습니다. 실시간 데이터 처리 및 스트리밍 최적화로 서버 부하 및 메모리 사용량을 각각 약 30% 절감하는 성과를 거두었습니다.",
      },
      projectPhases: [
        {
          phase: "Phase 1: NX 기반 Monorepo 구조 설계 및 도입 (2025.01-02)",
          description:
            "프로젝트를 앱 단위(workspace)로 구분하고 공통 UI/비즈니스 로직은 라이브러리 패키지로 모듈화하여 독립적인 빌드 및 배포 체계를 구축했습니다. 신규 앱을 빠르게 셋업할 수 있는 템플릿 구조를 마련하고 개발팀 내 NX 워크플로우를 정착시켰습니다.",
          outcomes: [
            "모노레포 기반 모듈화 개발 환경 구축",
            "신규 앱 셋업 시간 50% 단축",
            "독립적인 빌드 및 배포 체계 확립",
          ],
        },
        {
          phase: "Phase 2: Feature-Sliced Design(FSD) 패턴 적용 (2025.03-04)",
          description:
            "도메인/기능 단위로 디렉토리를 나누고, 의존성 최소화를 위한 레이어 분리를 적용했습니다. 코드 탐색성과 변경 용이성이 향상되어 신규 기능 도입 시 평균 개발 시간을 40% 단축했습니다.",
          outcomes: [
            "도메인 중심의 모듈화 구조 확립",
            "신규 기능 개발 시간 40% 단축",
            "코드 탐색성 및 변경 용이성 향상",
          ],
        },
        {
          phase: "Phase 3: 실시간 데이터 처리 최적화 (2025.05-07)",
          description:
            "ECharts 기반 시계열 그래프에서 오늘 데이터는 API로 1회만 요청하고, 이후 발생 데이터는 WebSocket 이벤트로 수신하여 TanStack Query의 setQueryData로 누적 업데이트하는 방식을 구현했습니다. WebSocket 재연결 로직을 개선하고 영상 스트리밍 성능을 최적화했습니다.",
          outcomes: [
            "불필요한 API 호출 제거 및 서버 부하 최적화",
            "WebSocket 재연결 안정성 확보",
            "메모리 사용량 약 30% 절감",
          ],
        },
      ],
      period: "2025.01 - 2025.07",
      role: "프론트엔드 개발",
      frontendDevelopers: 2,
      keywords: [
        "NX Monorepo",
        "Feature-Sliced Design",
        "실시간 데이터 처리",
        "성능 최적화",
        "모듈화 아키텍처",
      ],
      technologies: [
        "React",
        "TypeScript",
        "NX",
        "Feature-Sliced Design",
        "Zustand",
        "TanStack Query",
        "ECharts",
        "WebSocket",
        "Vite",
      ],
      technologyReasoning: [
        {
          category: "NX 기반 Monorepo 구조 설계",
          technologies: ["NX", "Monorepo"],
          reasoning:
            "여러 고객사의 요구사항을 빠르게 반영하고, 공통 로직을 효과적으로 공유하면서도 각 모듈을 독립적으로 관리할 수 있는 개발 구조가 필요했습니다. Zustand의 create 함수를 래핑한 스토어 생성 함수를 직접 구현하여, 각 앱이 같은 상태 구조를 공유하면서도 인스턴스가 분리된 상태 관리가 가능하도록 구조화했습니다.",
        },
        {
          category: "실시간 데이터 처리 및 성능 최적화",
          technologies: ["WebSocket", "TanStack Query", "ECharts"],
          reasoning:
            "ECharts 기반 시계열 그래프에서 오늘 데이터는 API로 1회만 요청, 이후 발생 데이터는 WebSocket 이벤트로 수신하여 TanStack Query의 setQueryData로 누적 업데이트하는 방식으로 불필요한 API 호출을 제거했습니다. 기존 setInterval 방식 대신 setTimeout과 명시적 연결 플래그를 사용하는 이벤트 중심 재연결 방식으로 개선하여 시스템 안정성을 향상시켰습니다.",
        },
      ],
      codeSnippets: [],
    },
    {
      projectId: 2,
      companyId: "saige",
      title: "SAIGE SAFETY 제품 개발 - MVP부터 GS 인증까지",
      image: "/safety-logo.svg?text=SAIGE+SAFETY+안전+관리+시스템",
      background:
        "사내 산업 안전 모니터링 제품군 중 하나로, SAIGE SAFETY의 신규 프론트엔드 개발을 제로에서 시작했습니다. 고객사별 요구사항에 대응 가능한 모듈형 아키텍처 기반으로 제품을 구축하고, 1개월 내 MVP 출시 및 GS 인증 대응까지 전 과정을 주도했습니다.",
      detailedDescription: {
        summary:
          "팀 내 자체 개발 상태관리 라이브러리 X-view-model 기반으로 1개월 내 MVP를 출시하고, 사용자 VOC 기반 기능 고도화를 통해 GS 인증 1등급 획득까지 주도한 신규 제품 개발 프로젝트",
        results:
          "디자이너 없이 사내 타 제품의 UI를 분석하여 일관된 UX를 제공하는 인터페이스를 구현하고 MVP 검증을 위한 제품을 1개월 내 릴리즈했습니다. 사용자 VOC를 수집·분석하여 대시보드 구성, 알림 타입 설정, 중요도 레벨링 등의 기능을 고도화했으며, GS 인증 대응을 위해 에러 및 인터페이스 예외처리 구조를 재정의하고 글로벌/로컬 기준을 명확히 분리하여 최종적으로 GS 1등급 인증을 획득했습니다.",
      },
      projectPhases: [
        {
          phase: "Phase 1: 초기 설계 및 MVP 구현 (2023.05-06)",
          description:
            "팀 내 자체 개발 상태관리 라이브러리 X-view-model 기반으로 프로젝트 구조를 빠르게 셋업했습니다. 디자이너 없이 사내 타 제품의 UI를 분석하여 일관된 UX를 주는 인터페이스를 구현하고 MVP 검증을 위한 제품을 1개월 내 릴리즈했습니다.",
          outcomes: [
            "MVP 버전 1개월 내 출시",
            "일관된 UX 인터페이스 구현",
            "제품화 및 고객사 확장 기반 확보",
          ],
        },
        {
          phase: "Phase 2: 고객 피드백 기반 기능 개선 (2023.07-2024.09)",
          description:
            "사용자 VOC를 수집·분석하여 대시보드 구성, 알림 타입 설정, 중요도 레벨링 등의 기능을 고도화했습니다. 실시간 모니터링 화면에서 채널 수 변경 및 3x3/4x4/5x5 배치 선택 기능을 제안 및 구현하고, 드래그 앤 드롭 기반의 채널 위치 변경 기능을 직접 설계했습니다.",
          outcomes: [
            "사용자 VOC 기반 기능 고도화",
            "실시간 모니터링 UX 개선",
            "드래그 앤 드롭 기반 채널 관리 기능 구현",
          ],
        },
        {
          phase: "Phase 3: GS 인증 대응 및 에러 처리 체계 구축 (2024.10-11)",
          description:
            "GS 인증 대응을 위해 에러 및 인터페이스 예외처리 구조를 재정의하고 글로벌/로컬 기준을 명확히 분리했습니다. 백엔드 개발자와 협업하여 API 에러 코드 체계를 정의하고, 프로덕트 디자이너와 협력하여 표시 범위 및 UI 계층을 결정했습니다.",
          outcomes: [
            "일관된 에러 핸들링 체계 구축",
            "직관적인 사용자 피드백 시스템 구현",
            "GS 인증 1등급 획득",
          ],
        },
      ],
      period: "2023.05 - 2024.11",
      role: "프론트엔드 개발",
      frontendDevelopers: 2,
      keywords: [
        "신규 제품 개발",
        "MVP 출시",
        "GS 인증 1등급",
        "에러 처리 체계",
        "사용자 VOC 반영",
      ],
      technologies: [
        "React",
        "TypeScript",
        "X-view-model",
        "TanStack Query",
        "Zustand",
        "WebSocket",
        "Konva.js",
        "Webpack",
      ],
      technologyReasoning: [
        {
          category: "초기 설계 및 MVP 구현",
          technologies: ["X-view-model", "React", "TypeScript"],
          reasoning:
            "팀 내 자체 개발 상태관리 라이브러리 X-view-model 기반으로 프로젝트 구조를 빠르게 셋업했습니다. 디자이너 없이 사내 타 제품의 UI를 분석하여 일관된 UX를 주는 인터페이스를 구현하고, MVP 검증을 위한 제품을 1개월 내 릴리즈할 수 있었습니다.",
        },
        {
          category: "에러 처리 및 사용자 피드백 체계",
          technologies: ["TypeScript", "Custom Error Handling"],
          reasoning:
            "백엔드 개발자와 협업하여 API 에러 코드 체계를 정의하고, 프로덕트 디자이너와 협력하여 표시 범위(Global/Local) 및 UI 계층을 결정했습니다. 예상 가능한 사용자 오류 및 네트워크 이슈에 대해 인터랙티브하고 직관적인 피드백 제공 구조를 설계 및 적용했습니다.",
        },
      ],
      codeSnippets: [],
    },
    {
      projectId: 3,
      companyId: "saige",
      title: "SAIGE VISION 수율 모니터링 시스템 신규 개발",
      image: "/vision-logo.svg",
      background:
        "생산 라인의 Vision 검사 결과 및 시스템 리소스를 한눈에 파악할 수 있는 실시간 통합 모니터링 대시보드를 신규로 설계 및 개발했습니다. 기존에는 수율이나 리소스 정보를 별도로 확인할 수단이 없었으나, 본 시스템을 통해 운영 효율성과 가시성이 크게 향상되었습니다.",
      detailedDescription: {
        summary:
          "Prometheus 메트릭 기반 실시간 모니터링 시스템을 구축하고 사내 디자인 시스템 Saige Elements에 컨트리뷰터로 참여하여 재사용 가능한 컴포넌트 개발 및 프로젝트 적용을 주도한 신규 개발 프로젝트",
        results:
          "TanStack Query의 refetchInterval과 커스텀 훅을 결합하여 관심사별 데이터 페칭 및 캐싱 체계를 구축했습니다. ECharts를 활용해 재사용 가능한 BaseChart 컴포넌트를 기준으로 LineChart, PieChart 등 다양한 차트를 개발하여 여러 페이지에서 사용할 수 있도록 구현했으며, 실시간 모니터링으로 시스템 이상 상황 조기 감지 및 빠른 대응 체계를 마련했습니다.",
      },
      projectPhases: [
        {
          phase:
            "Phase 1: Prometheus 메트릭 기반 데이터 시스템 구축 (2022.11-12)",
          description:
            "Prometheus 메트릭 기반 데이터 페칭 및 관리 체계를 구축했습니다. TanStack Query의 refetchInterval과 커스텀 훅을 결합하여 관심사별 데이터 페칭 및 캐싱 체계를 구축하고, 실시간 데이터 동기화 시스템을 구현했습니다.",
          outcomes: [
            "Prometheus 메트릭 기반 데이터 관리 체계 구축",
            "관심사별 커스텀 훅 설계",
            "실시간 데이터 동기화 시스템 구현",
          ],
        },
        {
          phase: "Phase 2: ECharts 기반 시각화 컴포넌트 개발 (2023.01)",
          description:
            "ECharts를 활용해 재사용 가능한 BaseChart 컴포넌트를 기준으로 LineChart, PieChart 등 다양한 차트를 개발했습니다. React.memo 및 React Query 캐싱을 적용해 차트 간 불필요한 리렌더링을 방지하고 UI 성능을 최적화했습니다.",
          outcomes: [
            "재사용 가능한 차트 컴포넌트 라이브러리 구축",
            "차트 성능 최적화 및 불필요한 리렌더링 방지",
            "사내 디자인 시스템 Saige Elements 컨트리뷰터 활동",
          ],
        },
      ],
      period: "2022.11 - 2023.01",
      role: "프론트엔드 개발",
      frontendDevelopers: 1,
      keywords: [
        "실시간 모니터링",
        "Prometheus",
        "ECharts 시각화",
        "디자인 시스템 기여",
        "성능 최적화",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Recoil",
        "TanStack Query",
        "ECharts",
        "Saige Elements",
        "Vite",
      ],
      technologyReasoning: [
        {
          category: "실시간 데이터 처리 및 시각화",
          technologies: ["TanStack Query", "ECharts", "Prometheus"],
          reasoning:
            "리소스 모니터링 페이지에서는 React Query의 refetchInterval을 활용해 Prometheus 메트릭을 주기적으로 폴링하여 실시간 동기화를 수행했습니다. ECharts를 활용해 재사용 가능한 BaseChart 컴포넌트를 기준으로 다양한 차트를 개발하여 리소스 모니터링 페이지, 수율 대시보드, 검사기 수율 차트 등 여러 페이지에서 사용할 수 있도록 구현했습니다.",
        },
        {
          category: "성능 최적화 및 컴포넌트 재사용성",
          technologies: ["React.memo", "TanStack Query", "Saige Elements"],
          reasoning:
            "각 차트를 개별 컴포넌트로 분리하고 React.memo 및 React Query 캐싱을 적용해 차트 간 불필요한 리렌더링을 방지하고 UI 성능을 최적화했습니다. 사내 디자인 시스템 Saige Elements 컨트리뷰터로 참여하여 컴포넌트 개발 및 프로젝트에 반영하여 재사용성과 유지보수성을 확보했습니다.",
        },
      ],
      codeSnippets: [],
    },
    {
      projectId: 4,
      companyId: "media-corpus",
      title: "비윤리적 표현 말뭉치연구 분석 및 시범 구축 사업 프로젝트",
      image:
        "/media-logo-2.png?height=400&width=800&text=비윤리적+표현+평가+시스템",
      background:
        "비윤리적 표현을 체계적으로 평가하기 위한 웹 기반 평가 시스템을 개발했습니다. 100명 규모의 사용자 테스트와 대량 데이터 수집을 통해 정확도 높은 평가 모델 구축과 사용자 친화적 인터페이스 설계에 기여했습니다.",
      detailedDescription: {
        summary:
          "100명 규모의 사용자 테스트를 주도하여 150,000건 이상의 고품질 윤리성 평가 데이터를 수집하고, 사용자 친화적인 3단 UI 구조 설계로 평가 정확도 및 사용자 만족도를 향상시킨 프로젝트",
        results:
          "100명 규모의 사용자 테스트를 주도하여 실제 사용 환경에서의 요구사항과 피드백을 반영했습니다. 평가 효율성과 정확도를 높이기 위해 3단 UI 구조(문단/문장/평가 폼)를 설계하고 단계별 UX 흐름을 구현했으며, 비개발자 사용자들도 쉽게 이해하고 평가할 수 있도록 인터페이스의 정보 계층 구조 및 시각적 구분 체계를 수립했습니다. 최종적으로 150,000건 이상의 고품질 윤리성 평가 데이터를 수집했습니다.",
      },
      projectPhases: [
        {
          phase: "Phase 1: 기본 평가 시스템 구축 (2021.12-2022.01)",
          description:
            "Redux Toolkit과 Duck Pattern을 기반으로 상태 관리 구조를 개선하여 유지보수성과 코드 응집도를 강화했습니다. Feature-based 모듈 아키텍처를 도입하여 컴포넌트, 상태, API를 명확히 분리하고 확장 가능성을 확보했습니다.",
          outcomes: [
            "Redux Toolkit 기반 상태 관리 구조 구축",
            "Feature-based 모듈 아키텍처 도입",
            "확장 가능한 프로젝트 구조 확립",
          ],
        },
        {
          phase: "Phase 2: 사용자 테스트 및 피드백 수집 (2022.02-03)",
          description:
            "100명 규모의 사용자 테스트를 주도하여 실제 사용 환경에서의 요구사항과 피드백을 반영했습니다. 평가 기준 안내 및 입력 제한을 통해 정확한 데이터 수집을 유도하고 사용자 친화적인 인터페이스 개선 방향을 도출했습니다.",
          outcomes: [
            "100명 규모 사용자 테스트 주도",
            "실사용 환경 피드백 수집",
            "데이터 수집 품질 개선 방향 도출",
          ],
        },
        {
          phase: "Phase 3: UI/UX 개선 및 데이터 수집 완료 (2022.03-04)",
          description:
            "평가 효율성과 정확도를 높이기 위해 3단 UI 구조(문단/문장/평가 폼)를 설계하고 단계별 UX 흐름을 구현했습니다. 비개발자 사용자들도 쉽게 이해하고 평가할 수 있도록 인터페이스의 정보 계층 구조 및 시각적 구분 체계를 수립했습니다.",
          outcomes: [
            "3단 UI 구조 설계 및 구현",
            "사용자 친화적 인터페이스 완성",
            "150,000건 이상 고품질 데이터 수집 완료",
          ],
        },
      ],
      period: "2021.12 - 2022.04",
      role: "프론트엔드 개발 (단독)",
      frontendDevelopers: 1,
      keywords: [
        "사용자 테스트 주도",
        "대량 데이터 수집",
        "3단 UI 구조",
        "평가 시스템",
        "단독 개발",
      ],
      technologies: ["React", "JavaScript", "Redux", "Ant Design", "Webpack"],
      technologyReasoning: [
        {
          category: "사용자 중심 UI/UX 설계",
          technologies: ["React", "Ant Design"],
          reasoning:
            "평가 효율성과 정확도를 높이기 위해 3단 UI 구조(문단/문장/평가 폼)를 설계하고 단계별 UX 흐름을 구현했습니다. 비개발자 사용자들도 쉽게 이해하고 평가할 수 있도록 인터페이스의 정보 계층 구조 및 시각적 구분 체계를 수립했습니다.",
        },
        {
          category: "Feature-based 모듈 아키텍처",
          technologies: ["Redux Toolkit", "Duck Pattern"],
          reasoning:
            "Redux Toolkit과 Duck Pattern을 기반으로 상태 관리 구조를 개선하여 유지보수성과 코드 응집도를 강화했습니다. Feature-based 모듈 아키텍처를 도입하여 컴포넌트, 상태, API를 명확히 분리하고 확장 가능성을 확보했습니다.",
        },
      ],
      codeSnippets: [],
    },
    {
      projectId: 5,
      companyId: "media-corpus",
      title: "말뭉치 언어의 사회적 인식 조사 분류 사업 프로젝트",
      image: "/media-logo-1.png?text=문장+라벨링+시스템",
      background:
        "400,000건 이상의 대용량 라벨링 데이터를 수집하고 처리하기 위한 웹 기반 라벨링 및 검수 시스템 구축과 운영에 참여했습니다. 실시간 데이터 처리 및 품질 관리를 통해 라벨링 효율성과 정확성을 동시에 향상시켰습니다.",
      detailedDescription: {
        summary:
          "window.getSelection API를 활용한 직관적 라벨링 인터페이스와 IntersectionObserver 기반 무한 스크롤 최적화로 400,000건 이상의 대용량 라벨링 데이터를 안정적으로 수집하고 운영한 프로젝트",
        results:
          "window.getSelection API를 활용해 드래그 기반 텍스트 선택 및 라벨링 기능을 구현하여 사용자 경험을 개선했습니다. IntersectionObserver를 활용한 무한 스크롤을 구현하여 대용량 데이터 렌더링 성능 문제를 해결하고, 검수자용 전용 인터페이스를 개발하여 라벨링 및 검수 워크플로우를 완성했습니다. 실시간 진행률 추적과 품질 검증 로직을 적용하여 라벨링 작업 시간을 평균 40% 단축하고 일관성을 85%에서 95%로 향상시켰습니다.",
      },
      projectPhases: [
        {
          phase: "Phase 1: 기본 라벨링 시스템 구축 (2021.05-06)",
          description:
            "window.getSelection API를 활용해 드래그 기반 텍스트 선택 및 라벨링 기능을 구현하여 사용자 경험을 개선했습니다. Redux를 활용한 상태 관리와 기본적인 라벨링 워크플로우를 완성했습니다.",
          outcomes: [
            "드래그 기반 라벨링 인터페이스 구현",
            "Redux 기반 상태 관리 구조 완성",
            "기본 라벨링 워크플로우 구축",
          ],
        },
        {
          phase: "Phase 2: 성능 최적화 및 대용량 데이터 처리 (2021.07-08)",
          description:
            "IntersectionObserver를 활용한 무한 스크롤을 구현하여 대용량 데이터 렌더링 성능 문제를 해결했습니다. 100명 라벨링 작업자와 10명 검수자가 참여하는 대규모 테스트를 진행하고 피드백을 수집했습니다.",
          outcomes: [
            "무한 스크롤 성능 최적화",
            "100명 라벨링 작업자 + 10명 검수자 대규모 테스트",
            "대용량 데이터 안정적 처리 체계 확립",
          ],
        },
        {
          phase: "Phase 3: 품질 관리 시스템 구축 (2021.08-09)",
          description:
            "실시간 진행률 추적과 품질 검증 로직을 적용하여 라벨링 작업 효율 및 일관성을 개선했습니다. 검수자용 전용 인터페이스를 개발하여 라벨링 및 검수 워크플로우를 완성했습니다.",
          outcomes: [
            "실시간 진행률 추적 시스템 구축",
            "품질 검증 로직 적용",
            "검수자용 전용 인터페이스 개발",
          ],
        },
      ],
      period: "2021.05 - 2021.09",
      role: "프론트엔드 개발 (단독)",
      frontendDevelopers: 1,
      keywords: [
        "대용량 데이터 처리",
        "드래그 기반 라벨링",
        "성능 최적화",
        "품질 관리",
        "워크플로우 구축",
      ],
      technologies: ["React", "JavaScript", "Redux", "Ant Design", "Webpack"],
      technologyReasoning: [
        {
          category: "직관적 라벨링 인터페이스",
          technologies: ["window.getSelection", "DOM API"],
          reasoning:
            "window.getSelection API를 활용해 드래그 기반 텍스트 선택 및 라벨링 기능을 구현하여 사용자 경험을 개선했습니다. 텍스트 드래그 범위를 인식하고 시각적 라벨링을 가능하게 하는 인터랙션을 구현했습니다.",
        },
        {
          category: "대용량 데이터 성능 최적화",
          technologies: ["IntersectionObserver", "React"],
          reasoning:
            "IntersectionObserver를 활용한 무한 스크롤을 구현하여 대용량 데이터 렌더링 성능 문제를 해결했습니다. 초기 30개 문장만 렌더링하고 스크롤 시 점진적으로 로딩하여 빠른 초기 로딩과 작업 연속성을 보장했습니다.",
        },
      ],
      codeSnippets: [],
    },
  ],
  goals: {
    learningPlan: [
      {
        title: "React Native",
        description:
          "모바일 앱 개발 역량을 확장하여 크로스 플랫폼 개발자로 성장하기 위해 학습하고 있습니다.",
      },
      {
        title: "컴퓨터 사이언스",
        description:
          "백엔드 개발자와의 원활한 협업과 시스템 전반에 대한 이해도를 높이기 위해 학습하고 있습니다.",
      },
    ],
    futureVision: [
      {
        icon: "🌟",
        gradient: "from-blue-500 to-purple-600",
        quote: "크로스 플랫폼 개발자로의 성장",
        description:
          "웹, 모바일, 데스크톱 등 다양한 환경에서 동작하는 제품을 설계·구현할 수 있는 크로스 플랫폼 개발자로 성장하고 싶습니다.",
      },
      {
        icon: "🚀",
        gradient: "from-green-500 to-teal-600",
        quote: "기술 리더십 발휘",
        description:
          "팀의 기술적 방향성을 제시하고, 주니어 개발자들을 멘토링하며 조직의 기술 역량 향상에 기여하고 싶습니다.",
      },
    ],
    shortTerm: [
      {
        title: "기술 리더십 강화",
        description: "프로젝트 리딩 및 기술적 의사결정 경험 확대",
      },
      {
        title: "아키텍처 설계 역량",
        description: "대규모 서비스의 구조 설계 및 성능 최적화 경험",
      },
    ],
    longTerm: [
      {
        title: "조직 내 영향력 확대",
        description: "기술 전략 수립 및 조직 문화 개선에 기여",
      },
      {
        title: "글로벌 프로젝트 경험",
        description: "해외 협업 및 글로벌 서비스 개발 경험 쌓기",
      },
    ],
    vision: {
      quote: "단순히 기능 구현이 아닌, 삶의 질을 개선하는 개발자",
      description:
        "코드를 작성하는 것을 넘어, 사용자의 문제를 해결하고 더 나은 경험을 제공하는 제품을 만들어 사회에 긍정적인 영향을 미치고 싶습니다. 지속적인 학습과 성장을 통해 기술과 비즈니스를 모두 이해하는 개발자가 되는 것이 저의 목표입니다.",
    },
  },
};
