import type { Project } from "../types"

export const projectsData: Project[] = [
  {
    projectId: 1,
    companyId: "saige",
    companyName: "SAIGE",
    title: "영상 기반 결함·이상 동작 실시간 모니터링 시스템",
    subtitle: "사내 제품 - SAIGE VIMS 개발",
    image: "/vims-logo.svg",
    background:
      "산업용 AI 기반 검사·모니터링 시스템을 통합 관리하는 웹 플랫폼으로, 초기 설계부터 개발을 주도하고 고객사별 맞춤 요구와 VOC를 반영해 실시간 데이터 처리·시각화 기능을 구현한 프로젝트입니다.",
    detailedDescription: {
      results: [
        "NX Monorepo 도입으로 3개 앱 통합 개발 환경 구축",
        "Feature-Sliced Design 아키텍처 적용으로 비즈니스 도메인별 모듈 분리",
        "WebSocket 기반 이미지 스트리밍 최적화로 메모리 누수 방지",
        "커서 기반 무한 스크롤 + 가상 스크롤 적용으로 대용량 알람 데이터 처리",
        "커스텀 동영상 컨트롤러 개발로 seekbar 기반 즉시 탐색 기능 구현",
        "이미지 확대/축소 + '결함 찾기' 버튼 제안으로 검수 정확도 향상",
      ],
    },
    structuralContributions: [
      {
        title: "여러 제품 개발 시 코드 중복과 관리 복잡성 문제",
        problemDescription:
          "VIMS 기반의 3개 제품을 각 고객사별로 다르게 개발하면서 공통 로직의 중복 개발, 버전 관리의 복잡성, 일관성 없는 개발 환경 등의 문제가 발생했습니다. 같은 기능을 각 제품마다 다르게 구현하거나, 버그 수정 시 3개 저장소를 모두 수정해야 하는 비효율이 반복되었습니다.",
        categories: ["개발효율성", "품질향상"],
        solutionList: [
          {
            title: "NX Monorepo 도입으로 통합 개발 환경 구축",
            description:
              "NX Monorepo를 도입하여 3개 앱을 하나의 워크스페이스에서 관리하고, 공통 패키지(UI 컴포넌트, 유틸리티, API 클라이언트)를 중앙화했습니다. 각 앱은 독립적으로 빌드·배포 가능하면서도 공통 코드를 효율적으로 재사용할 수 있는 구조를 구축했습니다.",
          },
        ],
        achievementList: [
          {
            text: "3개 앱 통합 관리로 개발 환경 일원화 및 협업 효율성 향상",
            category: "개발효율성",
          },
          {
            text: "공통 패키지 중앙화로 코드 중복 제거 및 유지보수성 개선",
            category: "개발효율성",
          },
          {
            text: "독립적 빌드·배포 체계로 각 제품별 릴리즈 사이클 최적화",
            category: "개발효율성",
          },
          { text: "공통 코드 품질 관리 체계 구축으로 전체 코드베이스 안정성 향상", category: "품질향상" },
        ],
      },
      {
        title: "복잡한 비즈니스 로직으로 인한 코드 구조 혼재 문제",
        problemDescription:
          "각 앱 내에서 모니터링, 알람, 설정 등 다양한 비즈니스 도메인이 섞여있어 코드 구조가 복잡하고 유지보수가 어려운 상황이었습니다. 새로운 기능 추가 시 어디에 코드를 작성해야 할지 명확하지 않고, 기존 코드에 의도치 않은 영향을 주는 경우가 빈번했습니다.",
        categories: ["개발효율성", "품질향상"],
        solutionList: [
          {
            title: "Feature-Sliced Design 아키텍처 적용으로 도메인 중심 구조 설계",
            description:
              "Feature-Sliced Design 아키텍처를 적용하여 비즈니스 도메인별로 features를 분리하고, 각 feature 내에서 UI, API, 상태관리를 응집도 높게 구성했습니다. shared 레이어에는 공통 컴포넌트와 유틸리티를, entities 레이어에는 비즈니스 엔티티를 배치하여 명확한 의존성 규칙을 수립했습니다.",
          },
        ],
        achievementList: [
          {
            text: "도메인별 모듈 분리로 코드 응집도 향상 및 유지보수성 개선",
            category: "개발효율성",
          },
          {
            text: "명확한 의존성 규칙으로 코드 구조 일관성 확보",
            category: "품질향상",
          },
          {
            text: "신규 기능 개발 시 기존 코드 영향도 최소화",
            category: "개발효율성",
          },
          { text: "팀원 간 코드 이해도 향상으로 협업 효율성 증대", category: "개발효율성" },
        ],
      },
      {
        title: "실시간 영상 스트리밍 시 메모리 누수와 성능 저하 문제",
        problemDescription:
          "실시간 모니터링 환경에서 지속적인 이미지 스트리밍으로 인해 메모리 누수가 발생하고, 장시간 사용 시 브라우저 성능이 급격히 저하되는 문제가 있었습니다. 특히 대용량 이미지가 계속 쌓이면서 2-3시간 후에는 브라우저가 멈추는 현상이 발생했습니다.",
        categories: ["성능최적화", "시스템안정성"],
        solutionList: [
          {
            title: "WebSocket 기반 이미지 스트리밍 구현 및 메모리 관리 최적화",
            description:
              "WebSocket 기반 이미지 스트리밍을 구현하면서 Blob → ObjectURL 변환 시 메모리 누수가 발생할 수 있다는 점을 확인했습니다. 이를 방지하기 위해 사용이 끝난 ObjectURL을 URL.revokeObjectURL()로 해제하는 로직을 추가했고, 이미지 캐싱에 LRU 정책을 적용해 오래된 이미지를 주기적으로 정리했습니다. 이를 통해 시스템 메모리와 브라우저 리소스를 안정적으로 관리했습니다.",
          },
        ],
        achievementList: [
          {
            text: "URL.revokeObjectURL() 처리로 메모리 누수 방지 및 안정적 렌더링 확보",
            category: "성능최적화",
          },
          {
            text: "ObjectURL 활용한 대용량 이미지 처리 최적화로 시스템 안정성 향상",
            category: "시스템안정성",
          },
        ],
      },
      {
        title: "대용량 알람 데이터로 인한 UI 렌더링 지연 문제",
        problemDescription:
          "수백 개의 알람 데이터를 한 번에 렌더링하면서 UI가 느려지고 스크롤이 버벅거리는 문제가 발생했습니다. 또한 최신 알람이 도착해도 사용자가 인지하기 어려워 중요한 알람을 놓치는 경우가 빈번했습니다. 특히 1,000개 이상의 알람이 쌓이면 페이지 로딩 자체가 불가능한 상황이었습니다.",
        categories: ["성능최적화", "사용자경험"],
        solutionList: [
          {
            title: "커서 기반 무한 스크롤과 가상 스크롤 적용",
            description:
              "커서 기반 무한 스크롤을 적용하고 가상 스크롤을 통해 DOM 렌더링 부담을 최소화했습니다. 최신 알람 도착 시 시각적 피드백(펄스 효과)과 빠른 이동 버튼을 제안하여 구현하고, 알람 인지 속도를 향상시켰습니다. 화면에 보이는 영역만 렌더링하고 나머지는 가상화하여 성능을 최적화했습니다.",
          },
        ],
        achievementList: [
          {
            text: "가상 스크롤 적용으로 DOM 렌더링 부담 최소화",
            category: "성능최적화",
          },
          {
            text: "펄스 효과 + 빠른 이동 버튼 제안 및 구현으로 알람 인지 속도 향상 및 UX 개선",
            category: "사용자경험",
          },
        ],
        media: {
          url: "/notification.svg?height=150&width=250&text=실시간+알람+UI+최적화",
          alt: "실시간 알람 UI 최적화 화면",
          caption: "가상 스크롤과 펄스 효과가 적용된 실시간 알람 인터페이스",
        },
      },
      {
        title: "업로드된 동영상 검수 시 비효율적인 탐색 문제",
        problemDescription:
          "사용자가 업로드한 동영상을 검수할 때 소켓으로 이미지를 받아서 보여주는 형태라 기존 비디오 플레이어를 사용할 수 없었고, 원하는 시점을 찾기 어려운 문제가 있었습니다. 특히 1시간 이상의 긴 영상에서 몇 초간의 이상 구간을 찾는 것은 거의 불가능에 가까웠습니다.",
        categories: ["사용자경험"],
        solutionList: [
          {
            title: "커스텀 동영상 재생 컨트롤러 구현",
            description:
              "소켓 기반 이미지 스트리밍 환경에 맞는 커스텀 재생 컨트롤러를 직접 구현하여 seekbar를 통해 원하는 시점으로 즉시 탐색이 가능하도록 했습니다. ",
          },
        ],
        achievementList: [
          {
            text: "소켓 기반 환경에 맞는 커스텀 컨트롤러로 seekbar 기반 즉시 탐색 구현",
            category: "사용자경험",
          },
        ],
      },
      {
        title: "알람 이벤트 이미지 검수 시 결함 위치 파악의 어려움",
        problemDescription:
          "알람 이벤트 발생 시 첨부된 이미지에서 실제 결함이나 이상 상황을 육안으로 찾기 어려워 검수 정확도가 떨어지는 문제가 있었습니다. 특히 고해상도 이미지에서 작은 결함을 찾거나, 결함 영역이 명확하지 않은 경우 검수자마다 다른 판단을 내리는 일이 빈번했습니다.",
        categories: ["사용자경험"],
        solutionList: [
          {
            title: "이미지 컨트롤러 다이얼로그 및 결함 찾기 기능 구현",
            description:
              "이벤트 클릭 시 이미지 컨트롤러 다이얼로그가 열리도록 구현하여 확대/축소 기능으로 이상 발생 지점을 정확하게 탐색할 수 있도록 했습니다. 기획에 없던 '결함 찾기' 버튼을 제안 및 구현하여 클릭 시 해당 결함 영역으로 즉시 이동하고 하이라이트 표시되도록 했습니다.",
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
        "모노레포 아키텍처 설계 경험을 통해 대규모 프로젝트의 확장성과 유지보수성을 동시에 고려하는 시스템 설계 역량 확보",
        "실시간 데이터 처리와 메모리 최적화 문제 해결을 통해 프론트엔드 성능 튜닝 전문성 강화",
        "복잡한 비즈니스 요구사항을 직관적인 UI로 변환하는 과정에서 사용자 중심 사고와 UX 설계 능력 향상",
      ],
    },
  },
  {
    projectId: 2,
    companyId: "saige",
    companyName: "SAIGE",
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
        title: "GS 인증 1등급 취득을 위한 시스템 안정성 부족 문제",
        problemDescription:
          "MVP 단계에서는 에러 처리가 각 컴포넌트별로 산발적으로 이루어져 일관성이 없고, 사용자에게 적절한 피드백을 제공하지 못하는 문제가 있었습니다. API 호출 실패 시 사용자는 어떤 문제가 발생했는지 알 수 없었고, 같은 에러라도 페이지마다 다른 메시지가 표시되어 혼란을 야기했습니다. GS 인증 1등급 취득을 위해서는 이러한 시스템 안정성 문제를 반드시 해결해야 했습니다.",
        categories: ["시스템안정성", "개발효율성", "사용자경험"],
        solutionList: [
          {
            title: "에러 핸들링 계층 구조 설계 및 체계적인 에러 처리",
            description:
              "에러 핸들링 계층 구조를 설계하고 백엔드 개발자와 협업하여 API 에러 코드 체계를 정의했습니다. 일관된 에러 처리 로직을 구현하고 Toast 알림을 통해 사용자에게 적절한 피드백을 제공하여 신뢰성 있는 UX를 구축했습니다. 전역 에러 바운더리와 API 레벨 에러 핸들러를 구축하여 예상치 못한 에러도 안정적으로 처리했습니다.",
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
        title: "안전 이벤트 중요도 구분 없이 동일한 알림 처리 문제",
        problemDescription:
          "초기에는 모든 안전 이벤트가 동일한 방식으로 알림 처리되어 중대한 안전사고와 일반적인 이벤트를 구분하기 어려운 문제가 있었습니다. 현장 관리자들이 화재나 추락 같은 중대 사고와 단순한 안전모 미착용을 동일한 우선순위로 인식하게 되어, 정말 중요한 상황에 신속한 대응이 어려웠습니다.",
        categories: ["사용자경험"],
        solutionList: [
          {
            title: "안전 이벤트 중요도별 알림 분류 및 차별화된 UI 제공",
            description:
              "안전 이벤트의 중요도에 따라 중대/일반 알림을 분류하여 지원했습니다. 중대 알림은 화면 가운데 표시하고 빨간색 강조 표시를 하며, 일반 알림은 Toast로 관리하여 중요도별로 신속한 인지와 효율적인 대응이 가능하도록 설계했습니다. 중대 알림의 경우 소리 알림과 함께 화면 중앙에 고정 표시되도록 구현했습니다.",
          },
        ],
        achievementList: [
          {
            text: "중요도별 알림 분류로 신속한 상황 인지 및 대응 가능",
            category: "사용자경험",
          },
          {
            text: "화면 가운데 표시로 중대 알림 우선순위 명확화",
            category: "사용자경험",
          },
        ],
      },
      {
        title: "고정된 모니터링 화면으로 인한 사용자 맞춤화 한계",
        problemDescription:
          "기존에는 레이아웃 변경이 가능했지만 고객사별로 다른 카메라 수와 모니터링 요구사항에 맞춰 더 편리한 화면 배치가 필요했습니다. 카메라 위치를 변경하려면 설정 메뉴를 통해 복잡한 과정을 거쳐야 했고, 실시간 모니터링 중에는 즉시 배치를 조정하기 어려운 불편함이 있었습니다.",
        categories: ["사용자경험", "성능최적화"],
        solutionList: [
          {
            title: "드래그 앤 드롭 기반 화면 배치 기능 제안 및 구현",
            description:
              "고객 편의성 향상을 위해 드래그 앤 드롭 기반 카메라 위치 조정 기능을 제안하고 구현했습니다. 실시간으로 카메라 위치를 자유롭게 조정할 수 있도록 했습니다.",
          },
        ],
        achievementList: [
          {
            text: "드래그 앤 드롭 기능 제안으로 직관적인 화면 배치 조정 가능",
            category: "사용자경험",
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
        "MVP부터 제품 출시까지 전체 개발 라이프사이클을 경험하며 제품 기획부터 운영까지의 전 과정에 대한 이해도 향상",
        "GS 인증 대응 과정에서 보안, 접근성, 품질 기준에 대한 깊이 있는 학습과 실무 적용 경험 축적",
        "체계적인 에러 핸들링 구축을 통해 안정적이고 확장 가능한 시스템 설계 능력 확보",
        "실시간 모니터링 시스템 개발 경험으로 WebSocket, 성능 최적화, 메모리 관리 등 실시간 애플리케이션 전문성 강화",
      ],
    },
  },
  {
    projectId: 3,
    companyId: "saige",
    companyName: "SAIGE",
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
        title: "다양한 페이지에서 차트 개발 시 중복 코드와 일관성 부족 문제",
        problemDescription:
          "수율 대시보드, 리소스 모니터링 등 여러 페이지에서 라인차트, 파이차트, 게이지차트를 각각 개별적으로 구현하면서 중복 코드가 발생하고 디자인 일관성이 떨어지는 문제가 있었습니다. 같은 기능의 차트라도 페이지마다 다른 스타일과 옵션을 가지고 있어 유지보수가 어려웠고, 디자이너의 커스텀 요구사항을 반영하기 위해서는 각 페이지를 모두 수정해야 하는 비효율이 발생했습니다.",
        categories: ["개발효율성"],
        solutionList: [
          {
            title: "ECharts 기반 BaseChart 컴포넌트 개발 및 모듈화",
            description:
              "ECharts 기반의 BaseChart 컴포넌트를 개발하여 모듈화했습니다. 디자이너 요구사항을 반영하기 위해 Legend를 별도 컴포넌트화하고, ECharts 인스턴스를 직접 참조하여 커스터마이징이 가능하도록 설계했습니다. 기존 ECharts의 Legend 제한을 극복하고 프로젝트 요구사항에 맞는 유연한 차트 시스템을 구축했습니다.",
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
          url: "/monitoring.svg?height=120&width=200&text=리소스+모니터링+UI",
          alt: "리소스 모니터링 UI 화면",
          caption: "리소스 모니터링 UI 화면",
        },
      },
      {
        title: "실시간 데이터 업데이트 시 불필요한 렌더링으로 인한 성능 저하",
        problemDescription:
          "CPU, GPU, 메모리, 네트워크 등 다양한 리소스 데이터가 실시간으로 업데이트되면서 모든 컴포넌트가 불필요하게 리렌더링되어 성능이 저하되는 문제가 있었습니다. 특히 하나의 리소스 데이터가 변경되어도 전체 대시보드가 리렌더링되면서 차트 애니메이션이 끊기고 사용자 경험이 저하되었습니다. 장시간 모니터링 시에는 브라우저 성능이 점점 느려지는 현상도 발생했습니다.",
        categories: ["성능최적화", "시스템안정성"],
        solutionList: [
          {
            title: "리소스별 커스텀 훅 설계 및 최적화된 렌더링",
            description:
              "리소스별 커스텀 훅(useHook)을 설계하여 각 훅은 해당 리소스 데이터만 구독하고 상태 변경 시 필요한 컴포넌트만 리렌더링되도록 최적화했습니다. 이를 차트 컴포넌트와 결합하여 불필요한 렌더링을 최소화하고 실시간 모니터링 성능을 크게 향상시켰습니다. React.memo와 useMemo를 활용하여 컴포넌트 레벨에서도 최적화를 적용했습니다.",
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
        "재사용 가능한 컴포넌트 설계 경험을 통해 모듈화 아키텍처와 추상화 레벨 설정에 대한 이해도 향상",
        "ECharts 라이브러리 심화 활용과 커스터마이징을 통해 복잡한 데이터 시각화 기술 적용",
        "실시간 데이터 시각화 최적화 과정에서 React 렌더링 최적화 기법과 메모이제이션 전략 적용",
        "팀 내 공통 컴포넌트 라이브러리 구축 리드 경험으로 DX(Developer Experience) 개선과 팀 생산성 향상에 기여",
      ],
    },
  },
  {
    projectId: 6,
    companyId: "saige",
    companyName: "SAIGE",
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
        title: "사내 제품 간 UI 일관성 부족과 중복 개발 문제",
        problemDescription:
          "VIMS, SAFETY, VISION 3개 제품에서 각각 다른 스타일의 버튼, 폼, 모달 등을 개발하면서 UI 일관성이 떨어지고 중복 개발로 인한 비효율이 발생했습니다. 같은 기능의 버튼이라도 제품마다 다른 색상, 크기, 인터랙션을 가지고 있어 사용자가 혼란스러워했고, 브랜딩 가이드라인이 제품별로 다르게 적용되는 문제가 있었습니다.",
        categories: ["사용자경험", "개발효율성"],
        solutionList: [
          {
            title: "재사용 가능한 컴포넌트 라이브러리 구축",
            description:
              "사내 여러 제품에서 공통으로 사용할 수 있는 Button, Switch, Banner 등의 기본 컴포넌트부터 복합 컴포넌트까지 체계적으로 설계하고 개발했습니다. 각 컴포넌트는 props 인터페이스를 명확히 정의하고, 다양한 variant와 size 옵션을 제공하여 다양한 사용 사례에 대응할 수 있도록 구현했습니다.",
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
        ],
      },
      {
        title: "디자인 토큰 카테고라이징 체계 부족으로 인한 협업 비효율",
        problemDescription:
          "디자인 토큰은 관리되고 있었지만, 토큰의 카테고라이징이 명확하지 않아 개발자와 디자이너 간 소통에 어려움이 있었습니다. 색상, 타이포그래피, 간격, 그림자 등의 디자인 요소를 체계적으로 분류하지 못해 어떤 토큰을 언제 사용해야 하는지 판단하기 어려웠고, 일관성 있는 디자인 적용이 힘들었습니다.",
        categories: ["사용자경험", "개발효율성"],
        solutionList: [
          {
            title: "디자이너와 협업을 통한 토큰 카테고라이징 체계 구축",
            description:
              "디자이너와 협업하여 디자인 토큰의 카테고라이징을 개발자와 디자이너 모두가 공감할 수 있게 체계화했습니다. 색상, 타이포그래피, 간격, 그림자 등의 디자인 요소를 명확히 분류하고, CSS 변수와 TypeScript 타입을 활용해 디자인 토큰을 코드로 관리하고, 테마 변경과 다크모드 지원이 용이하도록 설계했습니다.",
          },
        ],
        achievementList: [
          {
            text: "디자이너-개발자 협업을 통한 명확한 토큰 카테고라이징 체계 구축",
            category: "개발효율성",
          },
          {
            text: "체계적인 토큰 분류로 일관된 디자인 언어 확립",
            category: "사용자경험",
          },
          {
            text: "토큰 기반 테마 시스템으로 다크모드 지원 및 브랜드 변경 용이성 확보",
            category: "개발효율성",
          },
        ],
      },
      {
        title: "폰트 번들 사이즈 개선을 통한 성능 향상 필요",
        problemDescription:
          "기존 saige-fonts는 한글, 영문, 숫자, 특수문자 등 모든 글리프(약 8,000개)를 포함하여 번들 사이즈가 1.2MB에 달했습니다. 실제로는 제품에서 사용하는 글리프가 2,000개 정도인데도 불필요한 6,000개 글리프까지 로딩되어 초기 로딩 시간이 2초 정도 소요되었습니다.",
        categories: ["성능최적화"],
        solutionList: [
          {
            title: "Dynamic Subset을 통한 폰트 최적화",
            description:
              "성능 개선을 위해 Dynamic Subset 기술을 적용하여 빌드 시 실제 사용되는 글리프만 추출하고, 서브셋 폰트를 생성하도록 개선했습니다. 번들 사이즈를 1.2MB → 400KB로 67% 감소시키고 폰트 로딩 시간을 2초 → 0.8초로 단축했습니다.",
          },
        ],
        achievementList: [
          {
            text: "Dynamic Subset 적용으로 폰트 번들 사이즈 67% 감소",
            category: "성능최적화",
          },
          {
            text: "폰트 로딩 시간 60% 단축으로 렌더링 성능 향상",
            category: "성능최적화",
          },
        ],
      },
      {
        title: "컴포넌트 품질 관리 및 문서화 프로세스 명확화 필요",
        problemDescription:
          "신규 Switch 컴포넌트 개발 시 명확한 프로세스 없이 구현 후 '토글 크기가 너무 크다', '비활성 상태 색상이 다르다' 등의 피드백으로 3번의 수정 작업이 발생했습니다. 컴포넌트의 다양한 상태와 edge case에 대한 문서화도 부족하여 개발자들이 올바른 사용법을 파악하기 어려웠습니다.",
        categories: ["개발효율성"],
        solutionList: [
          {
            title: "Storybook 기반 문서화 및 Chromatic QA 프로세스 도입",
            description:
              "명확한 품질 관리 프로세스가 필요하다고 판단하여 Switch, Banner 등 신규 컴포넌트를 개발하고 Storybook을 통한 일관된 UI 확인 및 테스트 환경을 구축했습니다. 각 컴포넌트의 다양한 상태와 props를 문서화하여 개발자들이 쉽게 활용할 수 있도록 했으며, Chromatic을 통한 QA 프로세스를 도입해 구현의 품질을 보장했습니다.",
          },
        ],
        achievementList: [
          {
            text: "Storybook 문서화로 컴포넌트 사용법 학습 시간 단축",
            category: "개발효율성",
          },
          {
            text: "Chromatic 기반 시각적 테스트로 디자인 QA 프로세스 도입",
            category: "개발효율성",
          },
        ],
        media: {
          url: "/ds-storybook.svg?height=120&width=200&text=디자인+시스템+Storybook",
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
        "디자인 시스템 구축 과정에서 확장 가능하고 유지보수 가능한 대규모 프로젝트 아키텍처 설계 경험",
        "Storybook과 Chromatic을 활용한 컴포넌트 문서화 및 시각적 테스트 자동화 적용",
        "디자이너와의 협업 프로세스 개선을 통해 크로스 펑셔널 팀워크와 의사소통 능력 강화",
        "번들 최적화 및 성능 튜닝 경험을 통한 프론트엔드 성능 최적화 기술 적용",
      ],
    },
  },
  {
    projectId: 4,
    companyId: "media-corpus",
    companyName: "미디어코퍼스",
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
        title: "복잡한 텍스트 윤리성 평가 업무로 인한 사용자 혼란과 비효율",
        problemDescription:
          "텍스트 윤리성 평가는 문단 전체를 읽고, 특정 문장을 찾아, 윤리성을 판단하는 복잡한 과정으로 사용자들이 혼란스러워하고 평가 정확도가 떨어지는 문제가 있었습니다. 평가 대상 문장과 일반 문장을 구분하기 어려워 작업자가 잘못된 문장을 평가하거나 중요 키워드를 놓치는 경우가 빈번했습니다. 또한 작업 진행 상황을 파악하기 어려워 사용자들이 중도에 포기하는 비율이 높았습니다.",
        categories: ["사용자경험"],
        solutionList: [
          {
            title: "3단 UI 구조 설계 및 데이터 수집 체계 구축",
            description:
              "평가 효율성과 정확도를 높이기 위해 3단 UI 구조(문단/문장/평가 폼)를 설계하고 단계별 UX 흐름을 구현했습니다. 평가 기준 안내와 입력 제한을 통한 정확한 데이터 수집 체계를 구축했습니다. 비개발자 사용자들도 쉽게 이해하고 평가할 수 있도록 인터페이스의 정보 계층 구조 및 시각적 구분 체계를 수립했습니다.",
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
        title: "단독 개발로 인한 코드 구조 복잡성과 확장성 부족 문제",
        problemDescription:
          "단독 개발 프로젝트로 진행하면서 초기에는 컴포넌트와 상태 관리가 한 곳에 섞여있어 코드 구조가 복잡하고 신규 기능 추가 시 기존 코드에 영향을 주는 문제가 있었습니다. 코드 리뷰 없이 진행되다 보니 일관성 없는 패턴이 혼재하고, 기능이 추가될수록 유지보수가 어려워지는 상황이었습니다. 또한 평가 기준이 변경되거나 새로운 평가 항목이 추가될 때 전체 코드를 수정해야 하는 확장성 부족 문제도 있었습니다.",
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
        "대규모 사용자 테스트 설계 및 운영 경험을 통해 사용자 중심 설계와 UX 리서치 방법론에 대한 실무 역량 확보",
        "단독 개발 프로젝트 완수를 통해 기획부터 배포까지 전체 개발 프로세스에 대한 종합적 이해도 향상",
        "복잡한 데이터 수집 시스템 설계 경험으로 비즈니스 요구사항을 기술적 솔루션으로 변환하는 시스템 아키텍처 설계 능력 강화",
        "비개발자 사용자를 위한 직관적 UI 설계 경험으로 사용자 중심 사고와 접근성을 고려한 인터페이스 설계 역량 향상",
      ],
    },
  },
  {
    projectId: 5,
    companyId: "media-corpus",
    companyName: "미디어코퍼스",
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
        title: "텍스트 라벨링 작업의 복잡성과 사용자 학습 비용 문제",
        problemDescription:
          "기존 라벨링 도구들은 클릭 기반으로 시작점과 끝점을 각각 선택해야 하는 복잡한 방식이었고, 사용자들이 학습하는데 시간이 오래 걸리는 문제가 있었습니다. 특히 긴 텍스트에서 정확한 범위를 선택하기 어려워 라벨링 오류가 빈번하게 발생했고, 작업 속도도 현저히 느렸습니다. 또한 라벨링 과정에서 실수를 했을 때 되돌리기 기능이 직관적이지 않아 사용자 만족도가 낮았습니다.",
        categories: ["사용자경험"],
        solutionList: [
          {
            title: "드래그 기반 라벨링 시스템 구축을 통한 작업 효율 개선",
            description:
              "window.getSelection API를 활용하여 텍스트 드래그 범위를 인식한 후 컨텍스트 메뉴를 통해 라벨링이 가능하도록 구현했습니다. 드래그 영역에 실시간 시각적 피드백을 제공하여 라벨링 정확도를 향상시켰으며, 직관적인 인터랙션 설계로 사용자가 별도 학습 없이도 자연스럽게 라벨링을 수행할 수 있도록 했습니다. 실수 시 쉽게 수정할 수 있는 UX도 함께 구현했습니다.",
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
        title: "400,000건 대용량 데이터로 인한 렌더링 성능 저하 문제",
        problemDescription:
          "400,000건의 텍스트 데이터를 한 번에 렌더링하면 브라우저가 멈추거나 매우 느려지는 문제가 발생했습니다. 초기 로딩 시간이 30초 이상 걸리고, 메모리 사용량이 급격히 증가하여 장시간 작업이 불가능한 상황이었습니다. 특히 스크롤 시 버벅거림이 심해 사용자가 원하는 위치를 찾기 어려웠고, 브라우저 탭이 자주 크래시되는 문제도 발생했습니다.",
        categories: ["성능최적화", "사용자경험"],
        solutionList: [
          {
            title: "무한 스크롤 및 점진적 로딩 시스템 도입을 통한 렌더링 성능 개선",
            description:
              "IntersectionObserver 기반 무한 스크롤을 구현하여 대용량 데이터 렌더링 문제를 해결했습니다. 초기 30개 문장만 렌더링하고 스크롤 시 점진적 로딩으로 성능 부담을 최소화했으며, 메모리 사용량 최적화 및 렌더링 부하를 분산시켜 대용량 텍스트 데이터에서도 원활한 사용자 경험을 제공했습니다. 가상 스크롤링 기법을 적용하여 DOM 노드 수를 일정하게 유지했습니다.",
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
        "대용량 데이터 처리 및 성능 최적화 기법 습득을 통해 프론트엔드 성능 튜닝과 메모리 관리 전문성 확보",
        "직관적인 사용자 인터랙션 설계 경험을 통해 복잡한 작업을 단순화하는 UX 설계 역량과 사용자 중심 사고 향상",
        "단독 개발 프로젝트 완수를 통해 요구사항 분석부터 배포까지 전체 개발 프로세스에 대한 종합적 이해도 증진",
        "복잡한 비즈니스 로직을 간단하고 직관적인 UI로 변환하는 추상화 능력과 문제 해결 역량 강화",
      ],
    },
  },
]

export default projectsData
