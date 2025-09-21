import type { Project } from "../types"

export const projectsData: Project[] = [
  {
    projectId: 1,
    companyId: "sage",
    title: "AI 기반 실시간 모니터링 시스템",
    subtitle: "실시간 데이터 처리 및 시각화 플랫폼",
    period: "2023.03 - 2024.02",
    role: "프론트엔드 리드 개발자",
    frontendDevelopers: 2,
    background:
      "AI 모델의 성능을 실시간으로 모니터링하고 분석할 수 있는 대시보드 시스템이 필요했습니다. 기존 시스템은 데이터 처리 지연과 사용자 인터페이스의 복잡성으로 인해 효율적인 모니터링이 어려웠습니다.",
    image: "/monitoring.svg",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "React Query", "Chart.js"],
    stateManagement: ["Zustand", "React Query"],
    keywords: ["실시간 모니터링", "데이터 시각화", "성능 최적화"],
    contributions: [
      { category: "UI/UX 설계", percentage: 90 },
      { category: "성능 최적화", percentage: 85 },
      { category: "데이터 시각화", percentage: 95 },
    ],
    structuralContributions: [
      {
        title: "실시간 데이터 처리 최적화는 어떻게 구현했나요?",
        categories: ["성능최적화", "사용자경험"],
        media: {
          url: "/monitoring.svg",
          alt: "실시간 모니터링 시스템 아키텍처",
          caption: "WebSocket과 React Query를 활용한 실시간 데이터 처리 구조",
        },
        solutionList: [
          {
            title: "WebSocket 기반 실시간 통신",
            description: "서버와의 양방향 통신을 통해 실시간 데이터 업데이트를 구현했습니다.",
          },
          {
            title: "가상화된 차트 렌더링",
            description: "대용량 데이터 처리를 위해 가상 스크롤링과 차트 최적화를 적용했습니다.",
          },
        ],
        achievementList: [
          { text: "데이터 처리 속도 70% 향상", category: "성능최적화" },
          { text: "실시간 업데이트 지연시간 200ms 이하 달성", category: "성능최적화" },
          { text: "사용자 만족도 85% 향상", category: "사용자경험" },
        ],
      },
    ],
    retrospective: {
      growth: [
        "대용량 실시간 데이터 처리에 대한 깊은 이해를 얻었습니다",
        "WebSocket과 React Query를 조합한 효율적인 상태 관리 방법을 학습했습니다",
        "성능 최적화에 대한 체계적인 접근 방법을 익혔습니다",
      ],
      challenges: [
        "초기 설계 단계에서 확장성을 더 고려했다면 좋았을 것 같습니다",
        "사용자 피드백을 더 일찍 수집했다면 개발 방향을 더 빨리 조정할 수 있었을 것입니다",
      ],
    },
  },
  {
    projectId: 2,
    companyId: "sage",
    title: "Monorepo 기반 확장 가능한 개발 아키텍처 설계",
    subtitle: "NX를 활용한 대규모 프론트엔드 프로젝트 구조화",
    period: "2022.06 - 2023.02",
    role: "아키텍처 설계 및 구현",
    frontendDevelopers: 3,
    background:
      "여러 프로젝트가 독립적으로 관리되면서 코드 중복과 일관성 부족 문제가 발생했습니다. 공통 컴포넌트와 유틸리티의 재사용성을 높이고, 개발 효율성을 개선할 필요가 있었습니다.",
    image: "/ds-storybook.svg",
    technologies: ["NX", "React", "TypeScript", "Storybook", "Jest", "ESLint"],
    stateManagement: ["Redux Toolkit"],
    keywords: ["Monorepo", "아키텍처", "개발효율성"],
    contributions: [
      { category: "아키텍처 설계", percentage: 95 },
      { category: "개발 환경 구축", percentage: 90 },
      { category: "팀 협업 개선", percentage: 80 },
    ],
    structuralContributions: [
      {
        title: "Monorepo 아키텍처로 개발 효율성을 어떻게 개선했나요?",
        categories: ["개발효율성", "협업개선"],
        media: {
          url: "/ds-storybook.svg",
          alt: "Monorepo 아키텍처 구조도",
          caption: "NX를 활용한 Monorepo 프로젝트 구조",
        },
        solutionList: [
          {
            title: "공통 컴포넌트 라이브러리 구축",
            description: "재사용 가능한 UI 컴포넌트를 체계적으로 관리하고 문서화했습니다.",
          },
          {
            title: "자동화된 빌드 및 배포 파이프라인",
            description: "변경된 프로젝트만 선택적으로 빌드하는 효율적인 CI/CD를 구축했습니다.",
          },
        ],
        achievementList: [
          { text: "개발 시간 85% 단축", category: "개발효율성" },
          { text: "코드 중복 90% 감소", category: "품질향상" },
          { text: "팀 간 협업 효율성 70% 향상", category: "협업개선" },
        ],
      },
    ],
    retrospective: {
      growth: [
        "대규모 프로젝트 아키텍처 설계 경험을 쌓았습니다",
        "팀 협업을 위한 개발 환경 구축 노하우를 습득했습니다",
        "자동화 도구 활용 능력이 크게 향상되었습니다",
      ],
      challenges: [
        "초기 러닝 커브가 높아 팀원들의 적응 시간이 필요했습니다",
        "레거시 코드 마이그레이션에 예상보다 많은 시간이 소요되었습니다",
      ],
    },
  },
  {
    projectId: 3,
    companyId: "saige",
    title: "AI 비전 검사 기반 공정 운영·배치·수율 모니터링 시스템",
    subtitle: "사내 제품 - SAIGE VISION 개발",
    image: "/vision-logo.svg",
    background:
      "생산 라인의 Vision 검사 결과 및 리소스 상태를 실시간으로 시각화하는 대시보드 웹 애플리케이션으로, 공통 차트 컴포넌트 개발과 실시간 데이터 관리 최적화를 통해 다양한 모니터링 페이지의 UX를 개선한 프로젝트입니다.",
    detailedDescription: {
      results: [
        "ECharts 기반 BaseChart 컴포넌트 모듈화로 라인/파이/게이지 차트 재사용 가능",
        "Legend 컴포넌트 분리 설계로 디자이너 요구사항 반영 속도 향상",
        "ECharts 인스턴스 직접 참조 구조로 커스터마이징 자유도 확보",
        "CPU/GPU/메모리/네트워크별 독립 커스텀 훅 설계로 관심사 분리",
        "리소스별 데이터 구독 최적화로 필요 컴포넌트만 리렌더링",
        "실시간 모니터링 환경에서 차트 + 훅 결합으로 안정적 성능 확보",
      ],
    },
    structuralContributions: [
      {
        title: "차트 컴포넌트 모듈화를 통한 DX 개선 방안은?",
        categories: ["개발효율성"],
        solutionList: [
          {
            title: "ECharts 기반 BaseChart 컴포넌트 개발 및 모듈화",
            description:
              "라인차트, 파이차트, 게이지차트 등 공통 차트를 재사용 가능하도록 ECharts 기반의 BaseChart 컴포넌트를 개발하여 모듈화했습니다. 디자이너 요구사항을 반영하기 위해 Legend를 별도 컴포넌트화하고, ECharts 인스턴스를 직접 참조하여 커스터마이징이 가능하도록 설계했습니다. 기존 Legend 제한을 극복하고 디자인 시안 대응 속도를 크게 향상시켰습니다.",
          },
        ],
        achievementList: [
          {
            text: "수율 대시보드, 리소스 모니터링 등 다양한 페이지에서 공통 차트 활용",
            category: "개발효율성",
          },
          {
            text: "Legend 컴포넌트 분리로 디자인 시안 대응 속도 향상",
            category: "개발효율성",
          },
          {
            text: "BaseChart 인터페이스로 일관된 차트 개발 경험 제공",
            category: "개발효율성",
          },
        ],
        media: {
          url: "/monitoring.svg",
          alt: "리소스 모니터링 UI 화면",
          caption: "리소스 모니터링 UI 화면",
        },
      },
      {
        title: "실시간 데이터 효율적 관리 체계를 구축하려면?",
        categories: ["성능최적화", "시스템안정성"],
        solutionList: [
          {
            title: "리소스별 커스텀 훅 설계 및 최적화된 렌더링",
            description:
              "CPU, GPU, 메모리, 네트워크 등 리소스별 커스텀 훅(useHook)을 설계했습니다. 각 훅은 해당 리소스 데이터만 구독하고 상태 변경 시 필요한 컴포넌트만 리렌더링되도록 최적화했습니다. 이를 차트 컴포넌트와 결합하여 불필요한 렌더링을 최소화하고 실시간 모니터링 성능을 크게 향상시켰습니다.",
          },
        ],
        achievementList: [
          {
            text: "리소스별 독립 훅으로 관심사 분리 및 성능 최적화",
            category: "성능최적화",
          },
          {
            text: "필요한 컴포넌트만 리렌더링하여 불필요한 렌더링 최소화",
            category: "성능최적화",
          },
          {
            text: "실시간 모니터링 환경에서 안정적인 성능 확보",
            category: "시스템안정성",
          },
        ],
      },
    ],
    period: "2022.11 - 2023.01",
    role: "프론트엔드 개발",
    frontendDevelopers: 4,
    keywords: ["실시간 모니터링", "ECharts 시각화", "성능 최적화", "차트 라이브러리", "데이터 대시보드"],
    technologies: ["React", "TypeScript", "TanStack Query", "ECharts", "Prometheus", "Vite"],
    codeSnippets: [],
    contributions: [
      {
        category: "차트 컴포넌트 모듈화",
        percentage: 100,
        color: "#9CCC65",
      },
      {
        category: "실시간 데이터 관리",
        percentage: 80,
        color: "#FF7043",
      },
      {
        category: "대시보드 구축",
        percentage: 100,
        color: "#9CCC65",
      },
      {
        category: "리소스 모니터링",
        percentage: 100,
        color: "#FF7043",
      },
    ],
    coreStack: ["React", "TypeScript", "ECharts"],
    stateManagement: ["Recoil", "TanStack Query"],
    teamChanges: [],
    retrospective: {
      growth: [
        "재사용 가능한 컴포넌트 설계를 통한 모듈화 아키텍처 구축 능력 향상",
        "ECharts 라이브러리 심화 활용 및 커스터마이징 전문성 확보",
        "실시간 데이터 시각화 최적화 기법 습득",
        "팀 내 공통 컴포넌트 라이브러리 구축 경험으로 DX 개선 역량 강화",
      ],
      challenges: [
        "초기 차트 컴포넌트 설계 시 확장성 부족으로 인한 후속 개선 작업 필요",
        "실시간 데이터 업데이트 시 차트 렌더링 성능 이슈 - 메모이제이션 기법 학습 필요",
        "다양한 차트 타입 지원 시 일관된 API 설계의 어려움",
      ],
    },
  },
  {
    projectId: 6,
    companyId: "saige",
    title: "사내 디자인 시스템",
    subtitle: "사내 제품 - SAIGE ELEMENTS 개발",
    image: "/elements-logo.svg",
    background:
      "사내 제품 간 일관된 UI/UX 경험 제공과 개발 효율성 향상을 위해 React 기반 디자인 시스템을 구축하고, 컨트리뷰터로 참여하여 컴포넌트 개발, 문서화, 품질 관리 체계를 수립한 프로젝트입니다.",
    detailedDescription: {
      results: [
        "Button/Switch/Banner 등 기본 컴포넌트 라이브러리 구축",
        "Primitive 토큰 기반 Theme 토큰 매핑 시스템으로 개발 환경 활용성 향상",
        "Storybook + Chromatic 기반 문서화 및 QA 프로세스 구축",
        "Dynamic Subset 적용으로 saige-fonts 번들 사이즈 최적화",
        "피그마 코드 Syntax 제안으로 디자인 토큰 사용성 개선",
        "사내 3개 제품 점진적 도입으로 UI 일관성 향상",
      ],
    },
    structuralContributions: [
      {
        title: "사내 제품 간 일관된 UI 경험을 제공하려면?",
        categories: ["사용자경험", "개발효율성", "성능최적화"],
        solutionList: [
          {
            title: "재사용 가능한 컴포넌트 라이브러리 구축",
            description:
              "사내 여러 제품에서 공통으로 사용할 수 있는 Button, Switch, Banner 등의 기본 컴포넌트부터 복합 컴포넌트까지 체계적으로 설계하고 개발했습니다. 각 컴포넌트는 props 인터페이스를 명확히 정의하고, 다양한 variant와 size 옵션을 제공하여 다양한 사용 사례에 대응할 수 있도록 구현했습니다.",
          },
          {
            title: "디자인 토큰 시스템 구축",
            description:
              "색상, 타이포그래피, 간격, 그림자 등의 디자인 요소를 토큰화하여 일관된 디자인 언어를 구축했습니다. CSS 변수와 TypeScript 타입을 활용해 디자인 토큰을 코드로 관리하고, 테마 변경과 다크모드 지원이 용이하도록 설계했습니다.",
          },
          {
            title: "Saige Fonts 최적화를 통한 성능 향상",
            description:
              "기존 saige-fonts는 빌드 시 사용하지 않는 글리프까지 모두 번들링되어 번들 사이즈가 불필요하게 증가하는 문제가 있었습니다. Dynamic Subset 및 서브셋 최적화를 적용하여 실제 사용되는 글리프만 포함되도록 빌드 구조를 개선했습니다. 불필요한 폰트 로딩을 최소화하여 번들 사이즈 감소 및 렌더링 성능을 향상시켰으며, 사내 디자인 시스템 및 제품 전반에서 일관되게 적용했습니다.",
          },
        ],
        achievementList: [
          {
            text: "사내 3개 제품에 점진적 도입으로 UI 일관성 향상",
            category: "사용자경험",
          },
          {
            text: "컴포넌트 재사용률 향상으로 개발 효율성 증대",
            category: "개발효율성",
          },
          {
            text: "디자인 토큰 시스템으로 브랜딩 일관성 확보",
            category: "사용자경험",
          },
          {
            text: "Dynamic Subset 적용으로 폰트 번들 사이즈 최적화 및 렌더링 성능 향상",
            category: "성능최적화",
          },
        ],
      },
      {
        title: "디자이너와 개발자 간 효율적인 협업 체계를 구축하려면?",
        categories: ["개발효율성", "협업개선"],
        solutionList: [
          {
            title: "디자인 시스템 고도화 및 DX 개선",
            description:
              "Primitive 토큰 기반 Theme 토큰 매핑 작업을 수행하여 개발 환경에서 바로 활용할 수 있도록 했습니다. 피그마 코드 Syntax를 제안하여 토큰 사용성을 개선하고 개발자 경험(DX)을 향상시켰습니다. Storybook과 Chromatic을 활용한 디자이너 리뷰 후 Saige Elements에 적용하는 체계적인 워크플로우를 구축했습니다.",
          },
          {
            title: "신규 컴포넌트 개발 및 디자인 QA 프로세스 도입",
            description:
              "Switch, Banner 등 신규 컴포넌트를 개발하고 Storybook을 통한 일관된 UI 확인 및 테스트 환경을 구축했습니다. 각 컴포넌트의 다양한 상태와 props를 문서화하여 개발자들이 쉽게 활용할 수 있도록 했으며, Chromatic을 통한 QA 프로세스를 도입해 구현의 품질을 보장했습니다.",
          },
        ],
        achievementList: [
          {
            text: "Primitive 토큰 기반 Theme 토큰 매핑으로 개발 환경 활용성 향상",
            category: "개발효율성",
          },
          {
            text: "피그마 코드 Syntax 제안으로 토큰 사용성 개선 및 DX 향상",
            category: "개발효율성",
          },
          {
            text: "Storybook 문서화로 컴포넌트 사용법 학습 시간 단축",
            category: "개발효율성",
          },
          {
            text: "Chromatic 기반 시각적 테스트로 디자인 QA 프로세스 도입",
            category: "개발효율성",
          },
          {
            text: "디자이너-개발자 협업 효율성 향상",
            category: "협업개선",
          },
        ],
        media: {
          url: "/ds-storybook.svg",
          alt: "디자인 시스템 Storybook 화면",
          caption: "디자인 시스템 Storybook 화면",
        },
      },
    ],
    period: "2023.05 - 현재",
    role: "디자인 시스템 컨트리뷰터",
    frontendDevelopers: 3,
    keywords: ["디자인 시스템", "컴포넌트 라이브러리", "Storybook", "Chromatic", "UI 일관성"],
    technologies: ["React", "TypeScript", "Storybook", "Chromatic", "Styled Components", "Rollup"],
    codeSnippets: [],
    contributions: [
      {
        category: "컴포넌트 문서화",
        percentage: 40,
        color: "#9CCC65",
      },
      {
        category: "협업 체계 구축",
        percentage: 50,
        color: "#FF7043",
      },
      {
        category: "디자인 시스템 고도화",
        percentage: 40,
        color: "#9CCC65",
      },
    ],
    coreStack: ["React", "TypeScript", "Storybook", "Chromatic"],
    stateManagement: [],
    teamChanges: [],
    retrospective: {
      growth: [
        "디자인 시스템 구축을 통한 대규모 프로젝트 아키텍처 설계 능력 향상",
        "Storybook과 Chromatic을 활용한 컴포넌트 문서화 및 테스트 자동화 경험",
        "디자이너와의 협업 프로세스 개선을 통한 크로스 펑셔널 팀워크 역량 강화",
        "번들 최적화 및 성능 튜닝을 통한 프론트엔드 성능 전문성 확보",
      ],
      challenges: [
        "초기 컴포넌트 API 설계 시 확장성 부족으로 인한 Breaking Change 발생",
        "다양한 제품 요구사항을 만족하는 범용적 컴포넌트 설계의 어려움",
        "디자인 토큰 시스템 도입 시 기존 제품과의 호환성 유지 문제",
      ],
    },
  },
  {
    projectId: 4,
    companyId: "media-corpus",
    title: "텍스트 윤리성 평가 시스템",
    subtitle: "국립 국어원 - 비윤리적 표현 말뭉치 연구 분석 및 시범 구축 사업 참여",
    image: "/media-logo-2.png",
    background:
      "100명 규모의 사용자 테스트를 주도하며, 150,000건 이상의 윤리성 평가 데이터를 수집·운영한 웹 기반 평가 시스템 개발 프로젝트입니다. 3단 UI 구조, 단계별 UX, feature-based 아키텍처 등 평가 효율성과 확장성을 극대화하는 구조를 설계·구현했습니다.",
    detailedDescription: {
      results: [
        "3단 UI 구조(문단/문장/평가 폼) 설계로 복잡한 평가 업무 단순화",
        "평가 대상 문장 볼록 처리 + 키워드 색상 강조로 정보 인식 속도 개선",
        "좌우 영역 분리 설계(정보 탐색/입력 동작)로 사용자 학습 비용 감소",
        "Redux Toolkit + Duck Pattern 기반 Feature 모듈화로 코드 응집도 향상",
        "진행률 표시 + 작업 정보 제공으로 100명 규모 사용자 테스트에서 높은 몰입도 달성",
        "150,000건 윤리성 평가 데이터 수집 완료, 평가 정확도 및 일관성 확보",
      ],
    },
    structuralContributions: [
      {
        title: "사용자가 편하게 평가 시스템을 이용하려면?",
        categories: ["사용자경험"],
        solutionList: [
          {
            title: "3단 UI 구조 설계 및 데이터 수집 체계 구축",
            description:
              "평가 효율성과 정확도를 높이기 위해 3단 UI 구조(문단/문장/평가 폼)를 설계하고 단계별 UX 흐름을 구현했습니다. 평가 기준 안내와 입력 제한을 통한 정확한 데이터 수집 체계를 구축했습니다. 비개발자 사용자들도 쉽게 이해하고 평가할 수 있도록 인터페이스의 정보 계층 구조 및 시각적 구분 체계를 수립했습니다.",
          },
          {
            title: "시각적 구분 기반 UI 설계를 통한 평가 효율성 및 정확도 개선",
            description:
              "평가 대상 문장을 볼록 처리하여 작업자가 한 눈에 식별 가능하도록 설계했습니다. 중요 키워드를 빨간색으로 표시해 핵심 포인트를 빠르게 파악할 수 있도록 했으며, 화면 영역을 분리하여 좌측에는 문장·키워드 표시, 우측에는 평가 입력 영역을 배치해 정보 탐색과 입력 동작을 분리했습니다. 헤더 영역에 작업 진행률 및 현재 할당된 작업 정보를 표시하여 사용자 몰입도를 향상시켰습니다.",
          },
        ],
        achievementList: [
          {
            text: "3단 UI 구조 설계로 복잡한 평가 업무의 단순화 및 효율성 향상",
            category: "사용자경험",
          },
          {
            text: "직관적인 정보 계층 구조로 사용자 학습 비용 최소화",
            category: "사용자경험",
          },
          {
            text: "시각적 구분 설계로 평가 정확도 및 작업 속도 향상",
            category: "사용자경험",
          },
          {
            text: "진행 현황 제공으로 사용자 몰입도 및 작업 지속성 개선",
            category: "사용자경험",
          },
        ],
        media: {
          url: "/media-logo-2.png",
          alt: "평가 시스템 UI 화면",
          caption: "평가 시스템 UI 화면",
        },
      },
      {
        title: "확장 가능한 구조 설계 및 유지보수를 용이하게 하기 위해 노력해보자!",
        categories: ["개발효율성"],
        solutionList: [
          {
            title: "Feature-based 아키텍처 도입을 통한 유지보수성 및 확장성 개선",
            description:
              "Redux Toolkit + Duck Pattern 기반으로 상태 관리 구조를 개선하여 코드 응집도를 강화했습니다. Feature 단위로 컴포넌트/상태/API를 모듈화하여 명확히 분리하고, 기능별 모듈 아키텍처 설계로 신규 기능 추가 및 확장이 용이한 구조를 구축했습니다. 각 기능 모듈은 독립적으로 개발·테스트·배포가 가능하도록 설계하여 개발 생산성을 향상시켰습니다.",
          },
        ],
        achievementList: [
          {
            text: "Feature-based 모듈 구조로 코드 응집도 및 유지보수성 향상",
            category: "개발효율성",
          },
          {
            text: "Redux Toolkit 기반 효율적인 상태 관리로 개발 생산성 향상",
            category: "개발효율성",
          },
          {
            text: "모듈화된 아키텍처로 신규 기능 추가 및 확장성 확보",
            category: "개발효율성",
          },
        ],
      },
    ],
    period: "2021.12 - 2022.04",
    role: "프론트엔드 개발 (단독)",
    frontendDevelopers: 1,
    keywords: ["사용자 테스트 주도", "대량 데이터 수집", "3단 UI 구조", "평가 시스템", "단독 개발"],
    technologies: ["React", "JavaScript", "Redux", "Ant Design", "Webpack"],
    codeSnippets: [],
    contributions: [
      {
        category: "UI 구조 설계",
        percentage: 100,
        color: "#9CCC65",
      },
      {
        category: "데이터 수집 체계",
        percentage: 100,
        color: "#FF7043",
      },
      {
        category: "평가 시스템 개발",
        percentage: 100,
        color: "#9CCC65",
      },
      {
        category: "사용자 테스트",
        percentage: 100,
        color: "#FF7043",
      },
    ],
    coreStack: ["React", "JavaScript", "Ant Design"],
    stateManagement: ["Redux"],
    teamChanges: [],
    retrospective: {
      growth: [
        "대규모 사용자 테스트 설계 및 운영을 통한 UX 리서치 역량 확보",
        "단독 개발 경험을 통한 전체 개발 프로세스 이해도 향상",
        "복잡한 데이터 수집 시스템 설계를 통한 시스템 아키텍처 설계 능력 강화",
        "비개발자 사용자를 위한 직관적 UI 설계 경험으로 사용자 중심 사고 역량 향상",
      ],
      challenges: [
        "단독 개발로 인한 코드 리뷰 부재 - 코드 품질 관리의 어려움",
        "대량 데이터 처리 시 성능 최적화 경험 부족으로 초기 성능 이슈 발생",
        "사용자 피드백 수집 및 반영 프로세스 체계화 필요성 인식",
      ],
    },
  },
  {
    projectId: 5,
    companyId: "media-corpus",
    title: "비윤리적 표현 라벨링 시스템",
    subtitle: "국립 국어원 - 말뭉치 언어의 사회적 인식 조사 분류 사업 참여",
    image: "/media-logo-1.png",
    background:
      "400,000건 이상의 대용량 라벨링 데이터를 효율적으로 수집·운영하기 위해 드래그 기반 라벨링, 무한 스크롤, 실시간 품질 관리 등 직관적이고 성능 최적화된 웹 라벨링/검수 시스템을 설계·구현한 프로젝트입니다.",
    detailedDescription: {
      results: [
        "window.getSelection API 활용 드래그 라벨링으로 직관적 사용자 경험 제공",
        "실시간 시각적 피드백 시스템으로 라벨링 정확도 향상",
        "IntersectionObserver 기반 무한 스크롤로 400,000건 대용량 데이터 렌더링 문제 해결",
        "초기 30개 문장 렌더링 + 점진적 로딩으로 초기 로딩 시간 단축",
        "메모리 사용량 최적화 및 렌더링 부하 분산으로 장시간 작업 연속성 보장",
        "직관적 라벨링 UI 제공으로 작업 시간 단축, 전체 프로젝트 효율성 향상",
      ],
    },
    structuralContributions: [
      {
        title: "라벨링을 쉽고 편하게 할 수 있는 방법은 없을까?",
        categories: ["사용자경험"],
        solutionList: [
          {
            title: "드래그 기반 라벨링 시스템 구축을 통한 작업 효율 개선",
            description:
              "window.getSelection API를 활용하여 텍스트 드래그 범위를 인식한 후 컨텍스트 메뉴를 통해 라벨링이 가능하도록 구현했습니다. 드래그 영역에 실시간 시각적 피드백을 제공하여 라벨링 정확도를 향상시켰으며, 직관적인 인터랙션 설계로 사용자가 별도 학습 없이도 자연스럽게 라벨링을 수행할 수 있도록 했습니다.",
          },
        ],
        achievementList: [
          {
            text: "드래그 기반 라벨링으로 직관적이고 자연스러운 사용자 경험 제공",
            category: "사용자경험",
          },
          {
            text: "실시간 시각적 피드백으로 라벨링 정확도 향상",
            category: "사용자경험",
          },
          {
            text: "별도 학습 없이 자연스럽게 라벨링 수행 가능한 인터랙션 설계",
            category: "사용자경험",
          },
        ],
        media: {
          url: "/media-logo-1.png",
          alt: "드래그 기반 라벨링 UI 화면",
          caption: "드래그 기반 라벨링 UI 화면",
        },
      },
      {
        title: "렌더링 성능 개선을 통해 사용자에게 더 나은 경험을 제공할 수 있을까?",
        categories: ["성능최적화", "사용자경험"],
        solutionList: [
          {
            title: "무한 스크롤 및 점진적 로딩 시스템 도입을 통한 렌더링 성능 개선",
            description:
              "대용량 데이터 렌더링 문제 해결을 위해 IntersectionObserver 기반 무한 스크롤을 구현했습니다. 초기 30개 문장만 렌더링하고 스크롤 시 점진적 로딩으로 성능 부담을 최소화했으며, 메모리 사용량 최적화 및 렌더링 부하를 분산시켜 대용량 텍스트 데이터에서도 원활한 사용자 경험을 제공했습니다.",
          },
        ],
        achievementList: [
          {
            text: "IntersectionObserver 기반 무한 스크롤로 대용량 데이터 렌더링 문제 해결",
            category: "성능최적화",
          },
          {
            text: "점진적 로딩으로 초기 로딩 시간 단축 및 메모리 효율성 향상",
            category: "성능최적화",
          },
          {
            text: "렌더링 부하 분산으로 작업 연속성 보장 및 사용자 경험 개선",
            category: "성능최적화",
          },
          {
            text: "직관적 라벨링 UI 제공으로 작업 시간 단축하여 전체 프로젝트 효율성 향상",
            category: "사용자경험",
          },
        ],
      },
    ],
    period: "2021.05 - 2021.09",
    role: "프론트엔드 개발 (단독)",
    frontendDevelopers: 1,
    keywords: ["대용량 데이터 처리", "드래그 기반 라벨링", "성능 최적화", "품질 관리", "워크플로우 구축"],
    technologies: ["React", "JavaScript", "Redux", "Ant Design", "Webpack"],
    codeSnippets: [],
    contributions: [
      {
        category: "드래그 기반 라벨링",
        percentage: 100,
        color: "#9CCC65",
      },
      {
        category: "무한 스크롤",
        percentage: 100,
        color: "#FF7043",
      },
      {
        category: "라벨링 시스템 개발",
        percentage: 100,
        color: "#9CCC65",
      },
      {
        category: "실시간 품질 관리",
        percentage: 100,
        color: "#FF7043",
      },
    ],
    coreStack: ["React", "JavaScript", "Ant Design"],
    stateManagement: ["Redux"],
    teamChanges: [],
    retrospective: {
      growth: [
        "대용량 데이터 처리 및 성능 최적화 기법 습득으로 프론트엔드 성능 전문성 확보",
        "직관적인 사용자 인터랙션 설계를 통한 UX 설계 역량 향상",
        "단독 개발 프로젝트 완수를 통한 전체 개발 프로세스 이해도 증진",
        "복잡한 비즈니스 로직을 간단한 UI로 변환하는 추상화 능력 강화",
      ],
      challenges: [
        "초기 성능 최적화 경험 부족으로 인한 렌더링 이슈 발생 - 점진적 개선 필요",
        "브라우저 호환성 고려 부족으로 일부 환경에서 드래그 기능 이슈 발생",
        "대용량 데이터 처리 시 메모리 관리 최적화 기법 학습 필요성 인식",
      ],
    },
  },
]
