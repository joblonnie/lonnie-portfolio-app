import type { Project } from "../types"

export const projectsData: Project[] = [
  {
    projectId: 1,
    companyId: "saige",
    title: "영상 기반 결함·이상 동작 실시간 모니터링 시스템",
    subtitle: "사내 제품 - SAIGE VIMS 개발",
    image: "/vims-logo.svg",
    background:
      "산업용 AI 기반 검사·모니터링 시스템을 통합 관리하는 웹 플랫폼으로, 초기 설계부터 개발을 주도하고 고객사별 맞춤 요구와 VOC를 반영해 실시간 데이터 처리·시각화 기능을 구현한 프로젝트입니다.",
    detailedDescription: {
      results: [
        "NX Monorepo 도입으로 3개 앱(VIMS, SAFETY, VISION) 통합 개발 환경 구축",
        "Feature-Sliced Design 아키텍처 적용으로 비즈니스 도메인별 모듈 분리",
        "WebSocket 기반 이미지 스트리밍 최적화로 메모리 누수 방지",
        "커서 기반 무한 스크롤 + 가상 스크롤 적용으로 대용량 알람 데이터 처리",
        "커스텀 동영상 컨트롤러 개발로 seekbar 기반 즉시 탐색 기능 구현",
        "이미지 확대/축소 + '결함 찾기' 버튼 제안으로 검수 정확도 향상",
      ],
    },
    structuralContributions: [
      {
        title: "유지보수·운영 효율을 극대화하려면?",
        categories: ["개발효율성", "품질향상"],
        solutionList: [
          {
            title: "NX Monorepo + Feature-Sliced Design(FSD) 도입",
            description:
              "여러 고객사의 요구사항을 빠르게 반영하고, 공통 로직을 효과적으로 공유하면서도 각 모듈을 독립적으로 관리할 수 있는 개발 구조가 필요했습니다. NX Monorepo를 도입하여 프로젝트를 앱 단위(workspace)로 구분하고, 앱 레벨에서는 Feature-Sliced Design 아키텍처로 비즈니스 도메인 중심의 구조를 적용했습니다. 공통 패키지는 기능/기술 중심의 단순화된 모듈 구조로 설계하여 독립적인 빌드 및 배포 체계를 구축했습니다.",
          },
        ],
        achievementList: [
          {
            text: "공통 패키지를 기반으로 3개 앱 개발, 신규 프로젝트 개발 기간 단축",
            category: "개발효율성",
          },
          {
            text: "모듈화 구조로 유지보수성과 확장성 향상",
            category: "개발효율성",
          },
          { text: "코드 중복 제거 및 기술 부채 해소", category: "품질향상" },
        ],
      },
      {
        title: "실시간 영상 스트리밍 최적화 및 안정성을 개선하려면?",
        categories: ["성능최적화", "시스템안정성"],
        solutionList: [
          {
            title: "WebSocket 기반 이미지 스트리밍 구현 및 대용량 이미지 처리 최적화",
            description:
              "실시간 모니터링 환경에서 안정적인 영상 스트리밍을 위해 WebSocket 기반 이미지 스트리밍을 구현했습니다. 대용량 이미지 처리 시 발생하는 메모리 누수를 방지하고, 장시간 모니터링 환경에서도 안정적인 렌더링이 가능하도록 최적화했습니다. 이미지 캐싱과 메모리 관리 로직을 통해 시스템 리소스를 효율적으로 활용했습니다.",
          },
        ],
        achievementList: [
          {
            text: "메모리 누수 방지 및 안정적 렌더링으로 장시간 모니터링 환경 확보",
            category: "성능최적화",
          },
          {
            text: "대용량 이미지 처리 최적화로 시스템 안정성 향상",
            category: "시스템안정성",
          },
        ],
      },
      {
        title: "실시간 알람 UX를 최적화하려면?",
        categories: ["성능최적화", "사용자경험"],
        solutionList: [
          {
            title: "커서 기반 무한 스크롤과 가상 스크롤 적용",
            description:
              "대용량 알람 데이터를 효율적으로 처리하기 위해 커서 기반 무한 스크롤을 적용했습니다. 가상 스크롤을 통해 DOM 렌더링 부담을 최소화하여 대용량 알람도 부드럽게 탐색할 수 있도록 구현했습니다. 최신 알람 도착 시 시각적 피드백(펄스 효과)과 빠른 이동 버튼을 제공하여 알람 인지 속도를 향상시키고 사용자 경험을 개선했습니다.",
          },
        ],
        achievementList: [
          {
            text: "가상 스크롤 적용으로 DOM 렌더링 부담 최소화",
            category: "성능최적화",
          },
          {
            text: "펄스 효과 + 빠른 이동 버튼으로 알람 인지 속도 향상 및 UX 개선",
            category: "사용자경험",
          },
        ],
        media: {
          url: "/notification.svg?height=200&width=350&text=실시간+알람+UI+최적화",
          alt: "실시간 알람 UI 최적화 화면",
          caption: "가상 스크롤과 펄스 효과가 적용된 실시간 알람 인터페이스",
        },
      },
      {
        title: "MP4 업로드 및 영상 검수 효율을 높이려면?",
        categories: ["사용자경험"],
        solutionList: [
          {
            title: "동영상 재생 컨트롤러 구현 및 이상 이벤트 연동",
            description:
              "사용자가 업로드한 동영상을 효율적으로 검수할 수 있도록 커스텀 재생 컨트롤러를 구현했습니다. seekbar를 통해 원하는 시점으로 즉시 탐색이 가능하며, 이상 이벤트 탐지 기능과 연동하여 문제 발생 구간을 빠르고 정확하게 확인할 수 있도록 했습니다. 이를 통해 검수 시간을 단축하고 업무 효율을 극대화했습니다.",
          },
        ],
        achievementList: [
          {
            text: "seekbar 기반 즉시 탐색으로 원하는 시점 빠른 확인 가능",
            category: "사용자경험",
          },
          {
            text: "이상 이벤트 연동으로 문제 구간 정확한 탐지 및 검수 시간 단축",
            category: "사용자경험",
          },
        ],
      },
      {
        title: "알람 이벤트 검수 UX를 개선하려면?",
        categories: ["사용자경험"],
        solutionList: [
          {
            title: "이미지 컨트롤러 다이얼로그 및 결함 찾기 기능 구현",
            description:
              "이벤트 클릭 시 이미지 컨트롤러 다이얼로그가 열리도록 구현하여 확대/축소 기능으로 이상 발생 지점을 정확하게 탐색할 수 있도록 했습니다. 기획에 없던 '결함 찾기' 버튼을 제안 및 구현하여 클릭 시 해당 결함 영역으로 즉시 이동할 수 있도록 했습니다. 이를 통해 검수 정확도와 효율성을 크게 향상시키고, 사용자가 빠르고 확실하게 문제를 확인할 수 있게 했습니다.",
          },
        ],
        achievementList: [
          {
            text: "이미지 확대/축소 기능으로 이상 발생 지점 정확한 탐색 가능",
            category: "사용자경험",
          },
          {
            text: "'결함 찾기' 버튼 제안 및 구현으로 검수 정확도와 효율성 향상",
            category: "사용자경험",
          },
          {
            text: "즉시 이동 기능으로 사용자가 빠르고 확실하게 문제 확인 가능",
            category: "사용자경험",
          },
        ],
      },
    ],
    period: "2025.01 - 2025.08",
    role: "프론트엔드 개발",
    frontendDevelopers: 2,
    keywords: ["NX Monorepo", "Feature-Sliced Design", "실시간 데이터 처리", "성능 최적화", "모듈화 아키텍처"],
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
    codeSnippets: [],
    contributions: [
      {
        category: "아키텍처 설계",
        percentage: 40,
        color: "#9CCC65",
      },
      {
        category: "실시간 데이터 처리",
        percentage: 60,
        color: "#FF7043",
      },
      {
        category: "UI/UX 구현",
        percentage: 90,
        color: "#9CCC65",
      },
      {
        category: "성능 최적화",
        percentage: 70,
        color: "#FF7043",
      },
    ],
    coreStack: ["React", "TypeScript", "NX Monorepo", "ECharts", "WebSocket"],
    stateManagement: ["Zustand", "TanStack Query"],
    teamChanges: [],
    retrospective: {
      growth: [
        "대규모 모노레포 아키텍처 설계 및 운영 경험을 통해 확장 가능한 시스템 구축 역량 향상",
        "실시간 데이터 처리 최적화를 통한 성능 튜닝 전문성 확보",
        "복잡한 비즈니스 요구사항을 직관적인 UI로 변환하는 UX 설계 능력 발전",
        "팀 내 기술 리더십 역할 수행을 통한 멘토링 및 코드 리뷰 문화 정착 경험",
      ],
      challenges: [
        "초기 아키텍처 설계 시 과도한 추상화로 인한 복잡성 증가 - 점진적 개선 필요성 학습",
        "실시간 데이터 처리 시 메모리 관리의 중요성을 뒤늦게 인식 - 초기 설계 단계에서의 성능 고려 필요",
        "다양한 고객사 요구사항 대응 시 일관성 유지의 어려움 - 표준화된 컴포넌트 시스템 구축 필요성 인식",
      ],
    },
  },
  {
    projectId: 2,
    companyId: "saige",
    title: "산업 현장 안전 이벤트 실시간 모니터링 시스템",
    subtitle: "사내 제품 - SAIGE SAFETY 개발",
    image: "/safety-logo.svg",
    background:
      "산업 현장의 안전 이벤트를 실시간 감지·시각화하는 AI 기반 모니터링 웹 애플리케이션으로, MVP 단계부터 개발을 주도하고 고객사 VOC를 반영한 기능 고도화와 GS 인증 대응까지 전 과정에 참여한 프로젝트입니다.",
    detailedDescription: {
      results: [
        "계층화된 에러 핸들링 구조 설계로 API 에러 코드 체계 통일",
        "백엔드 협업을 통한 일관된 에러 처리 로직 구현으로 개발 효율성 증대",
        "중대/일반 알림 분류 시스템으로 안전 이벤트 우선순위 명확화",
        "1~25개 채널 지원하는 유연한 레이아웃(1x1~5x5) 제공",
        "드래그 앤 드롭 기반 카메라 위치 조정 인터페이스로 사용자 편의성 향상",
        "채널 수 기반 자동 품질 조정 알고리즘으로 다중 채널 모니터링 성능 최적화",
      ],
    },
    structuralContributions: [
      {
        title: "GS 인증 1등급을 위한 UX 개선 방안은?",
        categories: ["시스템안정성", "개발효율성", "사용자경험"],
        solutionList: [
          {
            title: "에러 핸들링 계층 구조 설계 및 체계적인 에러 처리",
            description:
              "안정적인 시스템 동작을 확보하기 위해 에러 핸들링 계층 구조를 설계했습니다. 백엔드 개발자와 협업하여 API 에러 코드 체계를 정의하고, 일관된 에러 처리 로직을 구현했습니다. Toast 알림을 통해 사용자에게 적절한 피드백을 제공하여 신뢰성 있는 UX를 구축했습니다.",
          },
        ],
        achievementList: [
          {
            text: "체계적인 에러 핸들링으로 안정적 시스템 동작 확보",
            category: "시스템안정성",
          },
          {
            text: "일관된 API 에러 코드 체계로 개발 효율성 향상",
            category: "개발효율성",
          },
          {
            text: "Toast 기반 피드백으로 신뢰성 있는 사용자 경험 제공",
            category: "사용자경험",
          },
        ],
        media: {
          url: "/error-layer.png",
          alt: "에러 핸들링 계층 구조 설계도",
          caption: "에러 핸들링 계층 구조 설계도",
        },
      },
      {
        title: "중요도 기반 알림 UX를 개선하려면?",
        categories: ["사용자경험"],
        solutionList: [
          {
            title: "안전 이벤트 중요도별 알림 분류 및 차별화된 UI 제공",
            description:
              "안전 이벤트의 중요도에 따라 중대/일반 알림을 분류하여 지원했습니다. 중대 알림은 스택으로 누적 표시하고, 일반 알림은 Toast로 관리하여 중요도별로 신속한 인지와 효율적인 대응이 가능하도록 설계했습니다.",
          },
        ],
        achievementList: [
          {
            text: "중요도별 알림 분류로 신속한 상황 인지 및 대응 가능",
            category: "사용자경험",
          },
          {
            text: "차별화된 UI로 중대 알림 우선순위 명확화",
            category: "사용자경험",
          },
        ],
      },
      {
        title: "사용자 맞춤형 모니터링 화면을 구현하려면?",
        categories: ["사용자경험", "성능최적화"],
        solutionList: [
          {
            title: "유연한 채널 레이아웃 지원 및 성능 최적화",
            description:
              "1~25개 채널을 지원하는 다양한 레이아웃(1, 2x2, 3x3, 4x4, 5x5)을 제공하고, 드래그 앤 드롭으로 카메라 위치를 자유롭게 조정할 수 있도록 구현했습니다. 채널 레이아웃에서는 저해상도로 다중 채널을 효율적으로 모니터링하고, 디테일 페이지에서는 고해상도로 정확한 분석이 가능하도록 구현했습니다.",
          },
        ],
        achievementList: [
          {
            text: "1~25개 채널 유연한 레이아웃 지원으로 맞춤형 모니터링 환경 제공",
            category: "사용자경험",
          },
          {
            text: "드래그 앤 드롭 기반 직관적인 채널 관리 인터페이스 구현",
            category: "사용자경험",
          },
          {
            text: "채널 수 기반 자동 품질 조정으로 성능 최적화 달성",
            category: "성능최적화",
          },
        ],
      },
    ],
    period: "2023.05 - 2024.12",
    role: "프론트엔드 개발",
    frontendDevelopers: 2,
    keywords: ["신규 제품 개발", "MVP 출시", "GS 인증 1등급", "에러 처리 체계", "사용자 VOC 반영"],
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
    codeSnippets: [],
    contributions: [
      {
        category: "MVP 개발",
        percentage: 60,
        color: "#9CCC65",
      },
      {
        category: "에러 핸들링 체계",
        percentage: 80,
        color: "#FF7043",
      },
      {
        category: "알림 시스템",
        percentage: 100,
        color: "#9CCC65",
      },
      {
        category: "모니터링 UI",
        percentage: 25,
        color: "#FF7043",
      },
    ],
    coreStack: ["React", "TypeScript", "Material UI", "WebSocket"],
    stateManagement: ["X-view-model"],
    teamChanges: [],
    retrospective: {
      growth: [
        "MVP부터 제품 출시까지 전체 개발 라이프사이클 경험을 통한 제품 개발 역량 향상",
        "GS 인증 대응 과정에서 보안 및 품질 기준에 대한 이해도 증진",
        "에러 핸들링 체계 구축을 통한 안정적인 시스템 설계 능력 확보",
        "실시간 모니터링 시스템 개발 경험으로 성능 최적화 전문성 강화",
      ],
      challenges: [
        "초기 MVP 단계에서 확장성을 충분히 고려하지 못해 후반부 리팩토링 작업 증가",
        "다양한 채널 레이아웃 지원 시 성능 이슈 발생 - 가상화 기법 도입 필요성 인식",
        "실시간 알림 시스템 구현 시 사용자 경험과 시스템 성능 간의 균형점 찾기 어려움",
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
