import type { PortfolioData } from "./types";

export const mockPortfolioData: PortfolioData = {
  personalInfo: {
    name: "김동현",
    title: "Lonnie",
    email: "joblonnie@gmail.com",
    phone: "010-5054-0121",
    location: "서울, 대한민국",
    experience: 4,
    bio: "UX를 최우선적으로 고려하려 UI에 반영하고자 노력하는 프론트엔드 개발자입니다. 개발을 진행할 때는, 항상 재사용성을 염두에 두고 모듈화를 진행합니다. 이를 바탕으로 DX 개선을 도모하고, 비즈니스 요구 사항을 빠르게 충족시킬 수 있도록 합니다. 현재 4년간의 실무 경험을 바탕으로 React와 TypeScript 기반의 SPA 웹 애플리케이션을 설계하고 개발합니다.",
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
    architecture: ["Nx Monorepo", "Feature-Sliced Design", "Atomic Design"],
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
      achievementList: [
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
      achievementList: [
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
        "산업용 AI 기반 검사·모니터링 시스템을 통합 관리하는 웹 플랫폼으로, 초기 설계부터 개발을 주도하고 고객사별 맞춤 요구와 VOC를 반영해 실시간 데이터 처리·시각화 기능을 구현한 프로젝트입니다.",
      detailedDescription: {
        summary:
          "NX 모노레포 및 Feature-Sliced Design 아키텍처 도입으로 개발 생산성과 유지보수성을 크게 향상시키고, Zustand 기반 독립 상태 관리 구조 설계로 실시간 데이터 충돌을 최소화한 프로젝트",
        results:
          "NX 모노레포와 Feature-Sliced Design 아키텍처 도입으로 유지보수성과 확장성을 크게 높였고, Zustand 기반 독립 상태 관리 구조로 실시간 데이터 충돌을 방지하며 관리 효율을 극대화했습니다. ECharts와 TanStack Query 연동 최적화로 API 호출을 최소화하고 실시간 데이터 업데이트 성능을 개선했습니다. 이벤트 기반 WebSocket 재연결 로직으로 시스템 안정성과 리소스 효율성을 높였으며, 공통 패키지 모듈화로 개발 기간을 50% 단축하고 기술 부채를 해소했습니다.",
      },
      structuralContributions: [
        {
          title:
            "1. 다양한 고객사의 요구 사항을 효율적으로 반영할 수 있는 방법은 없을까?",
          solutionList: [
            {
              title: "NX 모노레포 제안 및 도입",
              description:
                "여러 고객사의 요구사항을 빠르게 반영하고, 공통 로직을 효과적으로 공유하면서도 각 모듈을 독립적으로 관리할 수 있는 개발 구조가 필요했습니다. NX 모노레포를 도입하여 프로젝트를 앱 단위(workspace)로 구분하고 공통 UI/비즈니스 로직은 라이브러리 패키지로 모듈화하여 독립적인 빌드 및 배포 체계를 구축했습니다.",
            },
            {
              title: "Feature-Sliced Design 아키텍처 도입",
              description:
                "컴포넌트를 설계할 때, Feature-Sliced Design을 도입함으로써, 각 slice 단위로 위계와 의존성이 명확하게 정의되어 있어 순환 참조를 방지할 수 있고, 동시에 기능을 독립적인 모듈로 분리해 재사용과 확장을 용이하게 하였습니다. 도메인/기능 단위로 디렉토리를 나누고 의존성 최소화를 위한 레이어 분리를 통해 코드 탐색성과 변경 용이성을 향상시켰습니다.",
            },
          ],
          achievementList: [
            "공통 패키지 재사용으로 신규 프로젝트 개발 기간 50% 단축",
            "모듈화 구조로 유지보수성과 확장성 대폭 향상",
            "코드 중복 제거 및 기술 부채 해소",
          ],
        },
        {
          title:
            "2. 실시간으로 쌓이는 데이터를 효율적으로 처리할 수 있는 방법은 없을까?",
          solutionList: [
            {
              title: "무한 + 가상 스크롤링을 통한 리스트 렌더링 최적화",
              description:
                "이상 감지 이벤트 리스트에서 30일치 히스토리와 실시간 데이터를 효율적으로 제공하기 위해 infinite query 기반 무한 스크롤과 가상 스크롤링을 적용했습니다. 실시간 데이터는 소켓 구독 후 setQuery로 리스트에 누적하여 불필요한 API 호출을 줄였고, UX 개선을 위해 상단 이동 버튼(기본: '상단 이동' 툴팁, 새로운 알림 발생 시 '최신 알림 보기'로 변경 및 펄스 애니메이션 적용)을 도입해 사용성 및 주목성을 높였습니다.",
            },
          ],
          achievementList: [
            "불필요한 API 호출 제거로 서버 부하 최적화",
            "실시간 데이터 업데이트 성능 향상",
          ],
        },
        {
          title:
            "3. 동일한 구조의 스토어 구조를 갖는 각각의 앱의 중복 코드를 줄여보자!",
          solutionList: [
            {
              title: "팩토리 패턴을 활용한 상태 관리 구조 설계",
              description:
                "복잡한 실시간 데이터 처리 환경에서 각 앱이 독립적으로 동작하면서도 일관된 상태 구조를 유지해야 했습니다. Zustand의 create 함수를 래핑한 커스텀 스토어 팩토리를 직접 구현하여 각 워크스페이스(앱)가 동일한 상태 구조와 로직을 공유하면서도 완전히 독립된 인스턴스를 가질 수 있도록 설계했습니다. 이를 통해 앱별 독립 상태 관리 구조를 설계하고, 동일 상태 구조 공유와 인스턴스 분리를 통한 상태 충돌 방지를 구현하였습니다.",
            },
          ],
          achievementList: [
            "실시간 데이터 처리 환경에서 상태 충돌 없는 안정적 운영",
            "일관된 상태 구조 유지와 개발 경험 표준화",
            "새로운 앱 추가 시 기존 로직 재사용으로 개발 속도 향상",
          ],
        },
        {
          title: "4. WebSocket 재연결 안정성을 확보할 수 있는 방법은 없을까?",
          solutionList: [
            {
              title: "이벤트 기반 WebSocket 재연결 로직 개선",
              description:
                "기존 interval 기반 모니터링 방식 대신, WebSocket의 onopen, onmessage, onclose, onerror 등 표준 이벤트를 활용한 이벤트 기반 재연결 로직을 도입했습니다. 연결이 실제로 끊어진 경우에만 setTimeout으로 재연결을 시도하고, 정상 종료(1000)가 아닌 경우에만 재연결을 수행합니다. 이 방식은 불필요한 interval과 상태 변수, 리소스 낭비를 줄이고, try-catch 및 콜백(onReconnecting 등)으로 예외 상황과 UI 반영까지 체계적으로 처리할 수 있어 성능과 안정성이 크게 향상시켰습니다.",
            },
          ],
          achievementList: [
            "불필요한 interval 제거로 CPU/메모리 사용량 최적화",
            "실제 연결 상태 기반의 정확한 재연결 및 예외 처리 구현",
            "UI에 재연결 상태 실시간 반영(onReconnecting 콜백 등)",
            "WebSocket 재연결 안정성 및 유지보수성 대폭 향상",
          ],
        },
      ],
      period: "2025.01 - 2025.08",
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
      codeSnippets: [],
    },
    {
      projectId: 2,
      companyId: "saige",
      title: "SAIGE SAFETY 제품 개발 - MVP부터 GS 인증까지",
      image: "/safety-logo.svg?text=SAIGE+SAFETY+안전+관리+시스템",
      background:
        "산업 현장의 안전 이벤트를 실시간 감지·시각화하는 AI 기반 모니터링 웹 애플리케이션으로, MVP 단계부터 개발을 주도하고 고객사 VOC를 반영한 기능 고도화와 GS 인증 대응까지 전 과정에 참여한 프로젝트입니다.",
      detailedDescription: {
        summary:
          "팀 내 자체 개발 상태관리 라이브러리 X-view-model 기반으로 1개월 내 MVP를 출시하고, 사용자 VOC 기반 기능 고도화를 통해 GS 인증 1등급 획득까지 주도한 신규 제품 개발 프로젝트",
        results:
          "MVP를 신속히 출시하여 시장 검증과 제품화를 앞당겼으며, 사용자 VOC를 반영해 알림 중요도 분류, 이벤트 상세 조회, 리포트 연동 등 실질적인 UX 개선을 달성했습니다. 또한 WebSocket 기반 실시간 이미지 수신·Bounding Box 시각화·Virtual Scrolling 등 다양한 성능 최적화를 통해 대용량 데이터에서도 원활한 사용자 경험을 제공했습니다. 이러한 개선과 품질 표준화로 GS 인증 1등급을 획득하여 제품 신뢰성과 경쟁력을 확보했습니다.",
      },
      structuralContributions: [
        {
          title: "1. 빠른 MVP 출시를 위해 어떤 노력을 기울였는가?",
          solutionList: [
            {
              title: "Mobx를 대체할 상태관리 라이브러리 X-view-model적용",
              description:
                "기존 제품에서 사용하던 Mobx는 다양한 방식으로 사이드이펙트가 발생하다 보니, 상태 변경의 원인·영향 범위를 추적하기에 어려움이 있었습니다. 이를 해결하기 위해 사내 개발 라이브러리인 X-view-model을 적용하게 되었는데, 이 라이브러리는 MVVM 패턴을 기반으로 View와 ViewModel(비즈니스 로직)을 명확하게 분리하여 상태 변화에 따른 사이드 이펙트를 보다 쉽게 추적할 수 있도록 도와주었습니다. 러닝 커브가 낮고, 팀 내에서 이미 사용 중인 라이브러리였기 때문에 빠르게 프로젝트 구조를 셋업할 수 있었습니다.",
            },
            {
              title: "사내 제품의 UX을 참고한 UI 구현",
              description:
                "초기 MVP 단계에서는 디자이너가 참여하지 못하고 개발이 진행되었습니다. 사내 다른 제품의 UI를 분석하여 일관된 UX를 주는 인터페이스를 구현했습니다. 이를 통해 사용자 친화적인 경험을 제공하고, 빠른 시장 검증을 위한 제품을 1개월 내 릴리즈할 수 있었습니다.",
            },
          ],
          achievementList: [
            "MVP를 1개월 내 출시하여 빠른 시장 검증 및 제품화 기반 확보",
          ],
        },
        {
          title: "2. GS 인증 1등급을 획득하기 위한 사용자 경험 개선 방안은?",
          solutionList: [
            {
              title:
                "체계적인 에러 핸들링 시스템 구축을 통한 신뢰성 있는 사용자 경험 제공",
              description:
                "백엔드 개발자와 협업하여 API 에러 코드 체계를 정의하고, 프로덕트 디자이너와 협력하여 표시 범위(Global/Local) 및 UI 계층을 결정했습니다. 정의된 기준을 바탕으로 Toast를 통해서 사용자에게 적절한 피드백을 제공했습니다.",
            },
          ],
          achievementList: [
            "GS 인증 1등급 획득을 위한 품질 표준 수립 및 달성",
            "신뢰성 있는 사용자 경험 제공",
          ],
        },
        {
          title:
            "3. 사용자가 중요도에 따라 알림을 빠르게 분류하고 설정할 수 있게 하려면?",
          solutionList: [
            {
              title: "알림 중요도 분류 및 직관적 설정 인터페이스 설계",
              description:
                "안전 이벤트 모니터링 도메인 특성을 고려하여 중대/일반 알림 분류, 직관적 설정 UI, 통계 시각화 등 사용자 친화적 제품 설계를 진행했습니다. 안전모 미착용, 화재, 연기, 침입, 쓰러짐 등 이벤트 타입별 알림 설정 페이지를 Tab UI로 제공했습니다.",
            },
          ],
          achievementList: [
            "중대/일반 알림 분류 체계 설계로 사용자 업무 효율성 향상",
            "이벤트 타입별 설정 페이지로 관리 편의성 제공",
            "주요 통계 대시보드로 비즈니스 인사이트 제공",
          ],
        },
        {
          title:
            "4. 사용자가 AI 이벤트를 더 빠르고 직관적으로 이해할 수 있게 하려면 어떻게 할까?",
          solutionList: [
            {
              title: "WebSocket 기반 실시간 이미지 처리 및 시각화",
              description:
                "WebSocket 기반 실시간 이미지 수신과 Konva.js를 활용한 Bounding Box 시각화로 AI 안전 이벤트를 직관적으로 표시하는 모니터링 시스템을 구현했습니다. 모니터링 페이지에서는 채널 배치 드래그앤드롭·레이아웃 변경(3x3~5x5) 기능을 구현했습니다.",
            },
          ],
          achievementList: [
            "실시간 이미지 스트리밍과 AI 검출 결과 동기화",
            "Konva.js 기반 동적 Bounding Box 렌더링 최적화",
            "드래그 앤 드롭 기반 채널 관리로 사용성 향상",
          ],
        },
        {
          title: "5. 사용자 경험을 개선하기 위해 노력해보자!",
          solutionList: [
            {
              title: "Virtual Scrolling 적용",
              description:
                "초기 API 호출 시 데이터가 많아 렌더링 성능이 저하되는 문제가 있었습니다. 이를 해결하기 위해 Virtual Scrolling을 적용하여 대량의 데이터를 효율적으로 렌더링했습니다. 이를 바탕으로 화면의 버벅임을 최소하하여 사용자 경험을 개선할 수 있었습니다.",
            },
            {
              title: "이벤트 클릭 시 필터링된 리포트 페이지 연동으로 UX 개선",
              description:
                "발생한 이벤트에 대한 자세한 정보를 제공하기 위해 이벤트 클릭 시 필터링된 리포트 페이지로 연동하는 기능을 구현했습니다. 이를 통해 사용자가 이벤트를 더 쉽게 이해하고 관리할 수 있도록 했습니다.",
            },
          ],
          achievementList: [
            "Virtual Scrolling 적용으로 대용량 데이터 렌더링 성능 최적화",
            "이벤트 상세 조회 워크플로우 구현으로 사용자 경험 향상",
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
      codeSnippets: [],
    },
    {
      projectId: 3,
      companyId: "saige",
      title: "SAIGE VISION 수율 모니터링 시스템 신규 개발",
      image: "/vision-logo.svg",
      background:
        "생산 라인의 Vision 검사 결과와 시스템 리소스를 실시간으로 통합 모니터링하는 대시보드를 신규 개발하고, 기존에 분리돼 있던 수율·리소스 관리의 가시성과 운영 효율성을 개선한 프로젝트입니다.",
      detailedDescription: {
        summary:
          "ECharts 기반 재사용 가능한 차트 라이브러리를 구축하고 사내 디자인 시스템 Saige Elements에 컨트리뷰터로 참여하여 프로젝트 적용과 시스템 안정화에 기여한 신규 개발 프로젝트",
        results:
          "라인별 및 검사기별 수율과 시스템 리소스를 실시간으로 모니터링하는 통합 대시보드를 구축하여 운영 효율성 및 가시성을 크게 개선했습니다. 공통 차트 라이브러리 개발로 개발 생산성을 약 30% 향상시키고 유지보수성을 강화했으며, Saige Elements 디자인 시스템의 안정화 및 확장에 핵심 기여하여 내부 UI 개발 표준화를 촉진했습니다. TanStack Query의 refetchInterval과 커스텀 훅을 결합한 관심사별 데이터 관리 체계를 구축하여 각 페이지에서 필요한 데이터만을 효율적으로 관리하고, 불필요한 API 호출을 최소화했습니다.",
      },
      structuralContributions: [
        {
          title: "1. 실시간 데이터 모니터링과 시각화를 어떻게 구현할까?",
          solutionList: [
            {
              title: "TanStack Query 기반 효율적 데이터 관리",
              description:
                "리소스 모니터링 페이지에서는 React Query의 refetchInterval을 활용해 Prometheus 메트릭을 주기적으로 폴링하여 실시간 동기화를 수행했습니다. TanStack Query의 refetchInterval과 커스텀 훅을 결합한 관심사별 데이터 관리 체계를 구축했습니다. 이를 통해 각 페이지에서 필요한 데이터만을 효율적으로 관리하고, 불필요한 API 호출을 최소화했습니다.",
            },
            {
              title: "ECharts 기반 차트 컴포넌트 모듈화",
              description:
                "ECharts 기반의 BaseChart 컴포넌트를 정의하고, 이를 중심으로 라인 차트, 파이 차트, 바 차트 등 다양한 차트 컴포넌트로 구성된 재사용 가능한 차트 라이브러리를 구축했습니다. 수율 대시보드, 리소스 모니터링, 검사기별 수율 차트 등 여러 페이지에서 공통 활용할 수 있도록 설계했습니다.",
            },
          ],
          achievementList: [
            "관심사별 데이터 분리로 불필요한 리렌더링 방지 및 성능 최적화",
            "공통 BaseChart 인터페이스로 일관된 차트 개발 경험 제공하여 개발 생산성 향상",
          ],
        },
        {
          title: "2. DX 개선 및 생산성 올리기!",
          solutionList: [
            {
              title: "디자인 시스템 컨트리뷰터 및 컴포넌트 개발",
              description:
                "사내에서 개발 중이던 사내 디자인 시스템(Saige Elements)가 제품에 효용성이 있을지에 대한 판단이 필요한 시점이었습니다. 따라서 이를 점진적으로 제품에 도입하며 발생하는 사이드 이펙트 및 호환성 문제를 해결하며 사내 디자인 시스템 고도화를 진행했습니다. 또한 신규 컴포넌트(Switch, Banner 등) 개발을 진행하며 Storybook에 반영하여 일관된 UI를 확인하고 테스트 할 수 있는 환경을 구축하였고, Chromatic을 활용해 프로덕트 디자이너와 리뷰를 진행한 뒤 디자인 시스템에 적용하여, 컨트리뷰터로서 기여하였습니다.",
            },
          ],
          achievementList: [
            "사내 디자인 시스템(Saige Elements) 적용을 통한 효용성 검증",
            "신규 컴포넌트 개발로 디자인 시스템 확장 및 팀 전체 생산성 향상",
            "Storybook + Chromatic 기반 디자이너-개발자 협업 체계 경험",
          ],
        },
        {
          title: "3. 사용자에게 유의미한 인사이트 제공하기!",
          solutionList: [
            {
              title: "수율/리소스 통합 대시보드 설계 및 구축",
              description:
                "사내 기술인 SAIGE VISION을 사용하는 사용자들이 실제 공정에서의 효용성을 가시적으로 확인하고 싶어하는 니즈가 있었습니다. 따라서 이를 충족시키기 위해 수율과 리소스를 통합 모니터링할 수 있는 대시보드를 설계하고 구축했습니다.",
            },
          ],
          achievementList: [
            "라인별 및 검사기별 수율과 시스템 리소스의 통합 모니터링 환경 제공",
            "실시간 모니터링을 통한 시스템 이상 상황 조기 감지 체계 구축",
            "운영 효율성 및 가시성 크게 개선으로 비즈니스 가치 창출",
          ],
        },
      ],
      period: "2022.11 - 2023.01",
      role: "프론트엔드 개발",
      frontendDevelopers: 4,
      keywords: [
        "실시간 모니터링",
        "ECharts 시각화",
        "디자인 시스템 기여",
        "성능 최적화",
        "차트 라이브러리",
      ],
      technologies: [
        "React",
        "TypeScript",
        "TanStack Query",
        "ECharts",
        "Saige Elements",
        "Vite",
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
        "100명 규모의 사용자 테스트를 주도하며, 150,000건 이상의 윤리성 평가 데이터를 수집·운영한 웹 기반 평가 시스템 개발 프로젝트입니다. 3단 UI 구조, 단계별 UX, feature-based 아키텍처 등 평가 효율성과 확장성을 극대화하는 구조를 설계·구현했습니다.",
      detailedDescription: {
        summary:
          "3단계 UI 구조와 feature-based 아키텍처, 단계별 UX 설계로 평가 효율성과 확장성을 극대화하고, 150,000건 이상의 윤리성 평가 데이터를 수집·운영한 프로젝트",
        results:
          "문단-문장-평가 폼의 3단 UI 구조와 정보 계층화, 평가 기준 안내 및 입력 제한 등으로 평가 효율성과 정확도를 높였습니다. Redux Toolkit 기반 feature 모듈 구조로 유지보수성과 확장성을 강화했으며, 100명 규모의 사용자 테스트를 통해 실제 사용 환경의 피드백을 반영했습니다. 그 결과, 150,000건 이상의 고품질 윤리성 평가 데이터를 안정적으로 수집·운영할 수 있었습니다.",
      },
      structuralContributions: [
        {
          title: "1. 사용자가 편하게 평가 시스템을 이용하려면?",
          solutionList: [
            {
              title: "3단 UI 구조 설계 및 데이터 수집 체계 구축",
              description:
                "평가 효율성과 정확도를 높이기 위해 3단 UI 구조(문단/문장/평가 폼)를 설계하고 단계별 UX 흐름을 구현했습니다. 평가 기준 안내와 입력 제한을 통한 정확한 데이터 수집 체계를 구축했습니다. 비개발자 사용자들도 쉽게 이해하고 평가할 수 있도록 인터페이스의 정보 계층 구조 및 시각적 구분 체계를 수립했습니다.",
            },
          ],
          achievementList: [
            "3단 UI 구조 설계로 복잡한 평가 업무의 단순화 및 효율성 향상",
            "직관적인 정보 계층 구조로 사용자 학습 비용 최소화",
            "150,000건 이상의 고품질 윤리성 평가 데이터 수집 달성",
          ],
        },
        {
          title:
            "2. 확장 가능한 구조 설계 및 유지보수를 용이하게 하기 위해 노력해보자!",
          solutionList: [
            {
              title:
                "Feature-based 아키텍처를 활용한 모듈화된 프로젝트 구조 및 상태 관리 체계",
              description:
                "Redux Toolkit과 Duck Pattern을 기반으로 상태 관리 구조를 개선하여 유지보수성과 코드 응집도를 강화했습니다. Feature-based 모듈 아키텍처를 도입하여 컴포넌트, 상태, API를 명확히 분리하고 확장 가능성을 확보했습니다. 기능별 모듈 구조를 설계하고, 컴포넌트-상태-API를 명확히 분리하여 확장 가능한 아키텍처를 구축했습니다.",
            },
          ],
          achievementList: [
            "Feature-based 모듈 구조로 코드 응집도 및 유지보수성 향상",
            "Redux Toolkit 기반 효율적인 상태 관리로 개발 생산성 향상",
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
      codeSnippets: [],
    },
    {
      projectId: 5,
      companyId: "media-corpus",
      title: "말뭉치 언어의 사회적 인식 조사 분류 사업 프로젝트",
      image: "/media-logo-1.png?text=문장+라벨링+시스템",
      background:
        "400,000건 이상의 대용량 라벨링 데이터를 효율적으로 수집·운영하기 위해 드래그 기반 라벨링, 무한 스크롤, 실시간 품질 관리 등 직관적이고 성능 최적화된 웹 라벨링/검수 시스템을 설계·구현한 프로젝트입니다.",
      detailedDescription: {
        summary:
          "드래그 기반 라벨링 시스템, 무한 스크롤, 실시간 품질 관리 등 대용량 데이터 환경에서의 효율성과 직관적 UX를 구현하여 400,000건 이상의 라벨링 데이터를 안정적으로 수집·운영한 프로젝트",
        results:
          "window.getSelection API를 활용한 드래그 기반 라벨링, IntersectionObserver 기반 무한 스크롤, 실시간 진행률 추적 및 품질 검증 등으로 대용량 데이터 환경에서의 성능과 사용자 경험을 극대화했습니다. 검수자 전용 인터페이스와 점진적 데이터 로딩, 시각적 피드백 등으로 라벨링 효율성과 정확성을 크게 향상시켰으며, 라벨링 작업 시간을 단축하였습니다.",
      },
      structuralContributions: [
        {
          title: "1. 라벨링을 쉽고 편하게 할 수 있는 방법은 없을까?",
          solutionList: [
            {
              title: "드래그 기반 라벨링 시스템 및 시각적 피드백",
              description:
                "window.getSelection API를 활용하여 텍스트 드래그 범위를 인식하고, 해당 데이터를 컨텍스트 메뉴를 통해 라벨링하는 인터랙션을 구현했습니다. 이를 바탕으로 사용자가 직관적으로 텍스트를 라벨링할 수 있는 인터페이스를 구축했습니다.",
            },
          ],
          achievementList: [
            "드래그 기반 라벨링으로 직관적이고 자연스러운 사용자 경험 제공",
            "텍스트 범위 인식 및 시각적 피드백으로 라벨링 정확도 향상",
          ],
        },
        {
          title:
            "2. 렌더링 성능 개선을 통해 사용자에게 더 나은 경험을 제공할 수 있을까?",
          solutionList: [
            {
              title: "무한 스크롤 및 점진적 로딩 시스템",
              description:
                "작업자에게 할당 된 텍스트 데이터가 대용량이었기 때문에, 한번에 데이터를 가져오는 것은 렌더링 성능에 큰 영향을 미쳤습니다. 이를 해결하기 위해 IntersectionObserver를 활용한 무한 스크롤을 구현하여 초기 30개 문장만 렌더링하고, 스크롤 시 점진적으로 데이터를 로딩하는 방식을 채택했습니다. 이로 인해 초기 로딩 시간을 단축하고, 메모리 사용량을 최적화했습니다.",
            },
          ],
          achievementList: [
            "무한 스크롤 최적화로 초기 로딩 시간 단축 및 메모리 효율성 향상",
            "점진적 로딩으로 작업 연속성 보장 및 사용자 경험 개선",
            "라벨링 작업 시간 평균 40% 단축으로 전체 프로젝트 효율성 향상",
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
