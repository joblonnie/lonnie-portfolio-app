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
        "산업용 AI 기반 검사·모니터링 시스템을 통합 관리하는 웹 플랫폼으로, 초기 설계부터 개발을 주도하고 고객사별 맞춤 요구와 VOC를 반영해 실시간 데이터 처리·시각화 기능을 구현한 프로젝트입니다.",
      detailedDescription: {
        summary:
          "NX 모노레포 및 Feature-Sliced Design 아키텍처 도입으로 개발 생산성과 유지보수성을 크게 향상시키고, Zustand 기반 독립 상태 관리 구조 설계로 실시간 데이터 충돌을 최소화한 프로젝트",
        results:
          "NX 모노레포 및 Feature-Sliced Design 아키텍처 도입으로 유지보수성과 확장성을 대폭 향상시켰습니다. Zustand 기반 독립 상태 관리 구조 설계로 실시간 데이터 충돌을 최소화하고 관리 효율을 극대화했으며, ECharts + TanStack Query 연동 최적화를 통해 API 호출 1회로 서버 부하를 감소시키고 실시간 데이터 업데이트 효율성을 확보했습니다. 이벤트 중심 WebSocket 재연결 로직 개선으로 시스템 안정성 및 리소스 사용을 최적화하고, 영상 스트리밍 데이터 포맷 변경(base64 → binary)으로 메모리 사용량 약 30% 절감 및 영상 품질을 개선했습니다. 모듈화된 공통 패키지 재사용으로 프로젝트 개발 기간 50% 단축 및 기술 부채를 해소했습니다.",
      },
      projectPhases: [
        {
          phase:
            "Phase 1: 생산 장비 이상 감지 모니터링 시스템(A사 맞춤형 모니터링 시스템) 구축",
          description:
            "NX 모노레포 도입 초기 단계로 단일 앱 형태로 프로젝트를 진행했습니다. Feature-Sliced Design(FSD) 기반 초기 아키텍처를 설계하고 비즈니스 대응을 위한 구조를 세팅했으며, A사 맞춤형 모니터링 시스템 구축에 집중했습니다. ECharts 기반 시계열 그래프에서 오늘 데이터는 API 1회 호출 후, 신규 데이터는 WebSocket 이벤트로 수신하여 TanStack Query의 setQueryData로 누적 업데이트함으로써 불필요한 API 호출을 제거하고 서버 부하를 최적화했습니다.",
          outcomes: [
            "NX 모노레포 도입 및 FSD 기반 초기 아키텍처 설계",
            "A사 맞춤형 모니터링 시스템 구축",
            "API 호출 최적화로 서버 부하 감소",
          ],
        },
        {
          phase: "Phase 2: SAIGE VIMS(IAD/SEG 통합) 모니터링 시스템 개발",
          description:
            "VIMS 패키지 내 공통 모듈들을 FSD 기준으로 체계적 모듈화를 진행했습니다. 재사용 가능한 컴포넌트 및 상태 관리 구조를 도입하여 개발 효율 및 코드 품질을 향상시키고, 프로젝트 완성도 제고 및 유지보수 용이성을 확보했습니다.",
          outcomes: [
            "VIMS 패키지 체계적 모듈화 진행",
            "재사용 가능한 컴포넌트 및 상태 관리 구조 도입",
            "개발 효율 및 코드 품질 향상",
          ],
        },
        {
          phase:
            "Phase 3: 권취 공정 이상 감지 시스템(B사 맞춤형 모니터링 시스템) 개발",
          description:
            "Phase 2에서 구축한 모듈화된 코드를 기반으로 Phase 1 프로젝트 리팩토링을 수행하여 기술 부채를 해소했습니다. 권취 공정 특화 이상 이벤트 실시간 로그 및 상태 표시 기능을 구현하고, 기존 VIMS 패키지 코드 80% 이상을 재사용하여 개발 기간을 50% 단축(1개월 → 2주)했습니다.",
          outcomes: [
            "기존 프로젝트 리팩토링을 통한 기술 부채 해소",
            "권취 공정 특화 기능 구현",
            "개발 기간 50% 단축 (1개월 → 2주)",
          ],
        },
      ],

      structuralContributions: [
        {
          title: "Monorepo 기반 확장 가능한 개발 아키텍처 설계",
          description:
            "NX 모노레포와 Feature-Sliced Design을 활용하여 고객사별 맞춤형 시스템을 효율적으로 개발할 수 있는 확장 가능한 아키텍처를 설계하고 구축",
          achievements: [
            "공통 패키지 재사용으로 신규 프로젝트 개발 기간 50% 단축",
            "모듈화 구조로 유지보수성과 확장성 대폭 향상",
            "코드 중복 제거 및 기술 부채 해소",
          ],
        },
        {
          title: "비즈니스 요구사항 중심의 제품 설계 및 고도화",
          description:
            "A사, B사 등 다양한 고객사의 특화 요구사항을 분석하고 반영하여 맞춤형 모니터링 시스템을 설계하며, 지속적인 VOC 수집을 통한 제품 완성도 향상",
          achievements: [
            "고객사별 특화 요구사항 분석 및 맞춤형 시스템 설계",
            "VOC 기반 지속적인 기능 개선 및 사용성 향상",
            "비즈니스 가치 창출을 위한 제품 전략 수립 참여",
          ],
        },
      ],

      technicalContributions: [
        {
          title: "복잡한 상태 관리 환경에서의 충돌 방지 구조 구현",
          description:
            "Zustand의 create 함수를 래핑한 커스텀 스토어 팩토리를 직접 구현하여 앱별 독립 상태 관리 구조를 설계하고, 동일 상태 구조 공유와 인스턴스 분리를 통한 상태 충돌 방지",
          achievements: [
            "실시간 데이터 처리 환경에서 상태 충돌 없는 안정적 운영",
            "일관된 상태 구조 유지와 개발 경험 표준화",
            "새로운 앱 추가 시 기존 로직 재사용으로 개발 속도 향상",
          ],
        },
        {
          title: "실시간 데이터 처리 성능 최적화",
          description:
            "ECharts 시계열 그래프에서 API 1회 호출 후 WebSocket 이벤트 기반 누적 업데이트 방식 구현과 이벤트 중심 재연결 로직으로 시스템 리소스 효율화",
          achievements: [
            "불필요한 API 호출 제거로 서버 부하 최적화",
            "실시간 데이터 업데이트 성능 향상",
            "WebSocket 재연결 안정성 확보 및 메모리 누수 방지",
          ],
        },
        {
          title: "영상 스트리밍 데이터 처리 최적화",
          description:
            "영상 스트리밍 데이터 형식을 base64에서 binary로 전환하고 메모리 사용량을 최적화하여 실시간 영상 품질 개선",
          achievements: [
            "메모리 사용량 약 30% 절감으로 시스템 효율성 향상",
            "실시간 영상 품질 개선 및 스트리밍 성능 최적화",
            "대용량 영상 데이터 처리 안정성 확보",
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
          technologies: ["NX", "Monorepo", "Feature-Sliced Design"],
          reasoning:
            "여러 고객사의 요구사항을 빠르게 반영하고, 공통 로직을 효과적으로 공유하면서도 각 모듈을 독립적으로 관리할 수 있는 개발 구조가 필요했습니다. 프로젝트를 앱 단위(workspace)로 구분하고 공통 UI/비즈니스 로직은 라이브러리 패키지로 모듈화하여 독립적인 빌드 및 배포 체계를 구축했습니다. Feature-Sliced Design 패턴을 적용하여 도메인/기능 단위로 디렉토리를 나누고 의존성 최소화를 위한 레이어 분리를 통해 코드 탐색성과 변경 용이성을 향상시켰습니다.",
        },
        {
          category: "앱별 독립 상태 관리 구조",
          technologies: ["Zustand", "TypeScript"],
          reasoning:
            "복잡한 실시간 데이터 처리 환경에서 각 앱이 독립적으로 동작하면서도 일관된 상태 구조를 유지해야 했습니다. Zustand의 create 함수를 래핑한 커스텀 스토어 팩토리를 구현하여, 각 워크스페이스(앱)가 동일한 상태 구조와 로직을 공유하면서도 완전히 독립된 인스턴스를 가질 수 있도록 설계했습니다. 이를 통해 앱 간 상태 충돌 없이 일관된 개발 경험을 제공하고, 새로운 앱 추가 시 기존 상태 로직을 즉시 재사용할 수 있었습니다.",
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
        "산업 현장의 안전 이벤트를 실시간 감지·시각화하는 AI 기반 모니터링 웹 애플리케이션으로, MVP 단계부터 개발을 주도하고 고객사 VOC를 반영한 기능 고도화와 GS 인증 대응까지 전 과정에 참여한 프로젝트입니다.",
      detailedDescription: {
        summary:
          "팀 내 자체 개발 상태관리 라이브러리 X-view-model 기반으로 1개월 내 MVP를 출시하고, 사용자 VOC 기반 기능 고도화를 통해 GS 인증 1등급 획득까지 주도한 신규 제품 개발 프로젝트",
        results:
          "MVP 1개월 내 출시로 제품화 및 고객사 확장 기반을 확보했습니다. VOC 기반 기능 고도화를 통해 고객 만족도 및 사용 편의성을 향상시키고, 견고한 알림·에러 처리 체계를 구축하여 GS 인증 1등급 획득에 핵심 기여했습니다. WebSocket 기반 실시간 이미지 수신 및 렌더링, Konva.js 활용 Bounding Box 시각화, Virtual Scrolling을 통한 대량 이벤트 렌더링 최적화 등 다양한 기술적 최적화를 통해 사용자 경험을 개선했습니다.",
      },
      projectPhases: [
        {
          phase: "Phase 1: MVP 구현 (1개월 내 출시)",
          description:
            "2인 개발 체제에서 모니터링·모니터링 상세 페이지를 전담하여 개발했습니다. WebSocket 기반 실시간 이미지 수신 및 렌더링, Konva.js 활용 Bounding Box 시각화를 구현하고, 모니터링 페이지에서는 채널 배치 드래그앤드롭·레이아웃 변경(3x3~5x5) 기능을, 모니터링 상세 페이지에서는 Virtual Scrolling로 대량 이벤트 렌더링을 최적화하고 클릭 시 해당 이벤트 필터링된 리포트 페이지로 이동하는 기능을 구현했습니다. 이벤트 발생 시 글로벌 Toast 알림도 구현했습니다.",
          outcomes: [
            "MVP 버전 1개월 내 출시",
            "WebSocket 기반 실시간 이미지 처리 구현",
            "제품화 및 고객사 확장 기반 확보",
          ],
        },
        {
          phase: "Phase 2: VOC 기반 기능 고도화 (단독)",
          description:
            "단독 개발로 사용자 VOC를 반영한 기능 고도화를 진행했습니다. 알림 중요도 분류(중대/일반) 및 타입별 표시 방식을 개선하여 중대 알림은 팝업+스택 UI와 리포트 바로가기를 지원하고, 일반 알림은 기존 Toast를 유지했습니다. 안전모 미착용, 화재, 연기, 침입, 쓰러짐 등 이벤트 타입별 알림 설정 페이지를 Tab UI로 제공하고, 주요 이벤트 통계 시각화 대시보드 페이지를 신규 개발했습니다.",
          outcomes: [
            "알림 중요도 분류 및 타입별 표시 방식 개선",
            "이벤트 타입별 알림 설정 페이지 구현",
            "주요 이벤트 통계 시각화 대시보드 신규 개발",
          ],
        },
        {
          phase: "Phase 3: GS 인증 대응 작업 (UI/UX 개선 핵심 담당)",
          description:
            "신규 입사자 2인이 합류한 3인 체제에서 UI/UX·에러 처리 영역을 핵심 담당했습니다. 에러·토스트 레이어 구조를 정의하고 디자이너 제안을 반영했으며, API Error Code별 메시지 매핑 및 UI 표시 체계를 구축하여 사용자 경험 지표 개선에 기여함으로써 GS 인증 1등급을 획득했습니다.",
          outcomes: [
            "에러·토스트 레이어 구조 정의",
            "API Error Code별 메시지 매핑 체계 구축",
            "GS 인증 1등급 획득",
          ],
        },
      ],
      structuralContributions: [
        {
          title: "MVP부터 GS 인증까지 전체 제품 개발 프로세스 주도",
          description:
            "신규 제품 기획부터 MVP 출시, VOC 기반 기능 고도화, GS 인증 획득까지 전체 제품 개발 라이프사이클을 주도하여 비즈니스 가치 창출",
          achievements: [
            "MVP를 1개월 내 출시하여 빠른 시장 검증 및 제품화 기반 확보",
            "사용자 VOC 기반 지속적 기능 개선으로 고객 만족도 향상",
            "GS 인증 1등급 획득을 위한 품질 표준 수립 및 달성",
          ],
        },
        {
          title: "사용자 중심 제품 설계 및 UX 개선 전략 수립",
          description:
            "안전 이벤트 모니터링이라는 도메인 특성을 고려하여 알림 중요도 분류, 직관적 설정 인터페이스, 통계 시각화 등 사용자 친화적 제품 설계",
          achievements: [
            "중대/일반 알림 분류 체계 설계로 사용자 업무 효율성 향상",
            "이벤트 타입별 설정 페이지로 관리 편의성 제공",
            "주요 통계 대시보드로 비즈니스 인사이트 제공",
          ],
        },
      ],

      technicalContributions: [
        {
          title: "실시간 멀티미디어 처리 시스템 구현",
          description:
            "WebSocket 기반 실시간 이미지 수신과 Konva.js를 활용한 Bounding Box 시각화로 AI 안전 이벤트를 직관적으로 표시하는 모니터링 시스템 구현",
          achievements: [
            "실시간 이미지 스트리밍과 AI 검출 결과 동기화",
            "Konva.js 기반 동적 Bounding Box 렌더링 최적화",
            "드래그 앤 드롭 기반 채널 관리로 사용성 향상",
          ],
        },
        {
          title: "대용량 이벤트 데이터 렌더링 최적화",
          description:
            "Virtual Scrolling을 구현하여 대량의 안전 이벤트 데이터를 효율적으로 렌더링하고, 이벤트 클릭 시 필터링된 리포트 페이지 연동 기능 구현",
          achievements: [
            "Virtual Scrolling으로 대량 데이터 렌더링 성능 최적화",
            "이벤트 상세 조회 워크플로우 구현으로 사용자 경험 향상",
            "메모리 효율적인 대용량 데이터 처리 구조 확립",
          ],
        },
        {
          title: "체계적인 에러 핸들링 및 사용자 피드백 시스템 구축",
          description:
            "API 에러 코드별 메시지 매핑 체계와 계층화된 에러 표시 구조를 설계하여 사용자에게 명확하고 일관된 피드백 제공",
          achievements: [
            "API 에러 코드 체계 정의로 체계적인 오류 관리 구현",
            "Global/Local 에러 표시 계층 설계로 사용자 혼란 최소화",
            "직관적인 에러 메시지로 사용자 경험 지표 개선에 기여",
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
        "생산 라인의 Vision 검사 결과와 시스템 리소스를 실시간으로 통합 모니터링하는 대시보드를 신규 개발하고, 기존에 분리돼 있던 수율·리소스 관리의 가시성과 운영 효율성을 개선한 프로젝트입니다.",
      detailedDescription: {
        summary:
          "ECharts 기반 재사용 가능한 차트 라이브러리를 구축하고 사내 디자인 시스템 Saige Elements에 컨트리뷰터로 참여하여 프로젝트 적용과 시스템 안정화에 기여한 신규 개발 프로젝트",
        results:
          "라인별 및 검사기별 수율과 시스템 리소스를 실시간으로 모니터링하는 통합 대시보드를 구축하여 운영 효율성 및 가시성을 크게 개선했습니다. 공통 차트 라이브러리 개발로 개발 생산성을 약 30% 향상시키고 유지보수성을 강화했으며, Saige Elements 디자인 시스템의 안정화 및 확장에 핵심 기여하여 내부 UI 개발 표준화를 촉진했습니다. TanStack Query의 refetchInterval과 커스텀 훅을 결합한 관심사별 데이터 관리와 React Query 캐싱 전략을 통해 불필요한 API 호출을 최소화하며 성능을 최적화했습니다.",
      },
      projectPhases: [
        {
          phase: "Phase 1: 공통 차트 모듈 설계 및 구축",
          description:
            "단독 개발로 ECharts 기반의 BaseChart 컴포넌트를 중심으로 라인 차트, 파이 차트, 바 차트 등 다양한 차트 컴포넌트로 구성된 재사용 가능한 차트 라이브러리를 구축했습니다. 수율 대시보드, 리소스 모니터링, 검사기별 수율 차트 등 여러 페이지에서 공통 활용할 수 있도록 설계했습니다.",
          outcomes: [
            "ECharts 기반 재사용 가능한 차트 라이브러리 구축",
            "여러 페이지에서 공통 활용 가능한 차트 컴포넌트 개발",
            "개발 생산성 약 30% 향상",
          ],
        },
        {
          phase: "Phase 2: 실시간 데이터 페칭 및 캐싱 체계 구축",
          description:
            "단독 개발로 TanStack Query의 refetchInterval과 커스텀 훅을 결합한 관심사별 데이터 관리 체계를 구축했습니다. React Query 캐싱 전략을 통해 불필요한 API 호출을 최소화하며 성능을 최적화했습니다.",
          outcomes: [
            "관심사별 데이터 관리 체계 구축",
            "React Query 캐싱을 통한 성능 최적화",
            "불필요한 API 호출 최소화",
          ],
        },
        {
          phase: "Phase 3: 사내 디자인 시스템 도입 및 컨트리뷰터 활동",
          description:
            "Saige Elements 초기 도입 시 발생한 버그 및 호환성 문제를 해결하고, 신규 컴포넌트 개발로 디자인 시스템 안정화에 기여했습니다. 프로젝트에 필요한 신규 컴포넌트를 개발하고 디자인 시스템에 기여했으며, Storybook과 Chromatic을 활용해 프로덕트 디자이너와 협업하며 UI 품질을 높였습니다.",
          outcomes: [
            "Saige Elements 디자인 시스템 안정화",
            "신규 컴포넌트 개발 및 시스템 기여",
            "Storybook + Chromatic 기반 디자이너 협업 체계 구축",
          ],
        },
      ],
      structuralContributions: [
        {
          title: "통합 모니터링 시스템 구축으로 운영 효율성 개선",
          description:
            "기존에 분리되어 있던 수율 관리와 리소스 모니터링을 통합한 실시간 대시보드를 구축하여 운영팀의 업무 효율성과 시스템 가시성을 개선",
          achievements: [
            "라인별 및 검사기별 수율과 시스템 리소스의 통합 모니터링 환경 제공",
            "실시간 모니터링을 통한 시스템 이상 상황 조기 감지 체계 구축",
            "운영 효율성 및 가시성 크게 개선으로 비즈니스 가치 창출",
          ],
        },
        {
          title: "사내 디자인 시스템 발전 기여 및 개발 표준화 촉진",
          description:
            "Saige Elements 디자인 시스템 컨트리뷰터로 참여하여 시스템 안정화와 확장에 기여하고, 사내 UI 개발 표준화를 촉진",
          achievements: [
            "초기 도입 과정의 버그 및 호환성 문제 해결로 시스템 안정화 기여",
            "신규 컴포넌트 개발로 디자인 시스템 확장 및 팀 전체 생산성 향상",
            "Storybook + Chromatic 기반 디자이너-개발자 협업 체계 구축",
          ],
        },
      ],

      technicalContributions: [
        {
          title: "ECharts 기반 모듈화 차트 아키텍처 구현",
          description:
            "BaseChart 컴포넌트를 중심으로 라인/파이/바 차트 등 다양한 차트 타입을 지원하는 재사용 가능한 차트 라이브러리를 구축하고 성능 최적화",
          achievements: [
            "공통 BaseChart 인터페이스로 일관된 차트 개발 경험 제공",
            "차트별 최적화된 렌더링 로직으로 대용량 데이터 처리 성능 향상",
            "타입 안전성 확보를 통한 개발 시 오류 예방 및 코드 품질 향상",
          ],
        },
        {
          title: "TanStack Query 기반 효율적 데이터 관리 체계 구축",
          description:
            "refetchInterval과 커스텀 훅을 결합한 관심사별 데이터 관리와 React Query 캐싱 전략으로 API 호출 최적화 및 성능 향상",
          achievements: [
            "관심사별 데이터 분리로 불필요한 리렌더링 방지 및 성능 최적화",
            "React Query 캐싱 전략으로 API 호출 횟수 최소화",
            "실시간 데이터 동기화와 메모리 효율성의 균형점 확보",
          ],
        },
        {
          title: "디자인 시스템 기반 협업 워크플로우 구축",
          description:
            "Storybook과 Chromatic을 활용한 컴포넌트 문서화 및 시각적 테스트 환경을 구축하여 디자이너-개발자 간 효율적 협업 체계 완성",
          achievements: [
            "컴포넌트 변경사항에 대한 시각적 회귀 테스트 자동화",
            "디자이너와의 실시간 피드백 순환 구조로 UI 품질 향상",
            "개발 표준화 및 일관된 UI 컴포넌트 가이드라인 수립",
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
      structuralContributions: [
        {
          title: "대규모 사용자 테스트 설계 및 데이터 품질 관리 체계 구축",
          description:
            "100명 규모의 사용자 테스트를 기획하고 주도하여 실제 사용 환경에서의 피드백을 체계적으로 수집하고, 데이터 품질 향상을 위한 가이드라인과 검증 프로세스를 수립",
          achievements: [
            "100명 규모 사용자 테스트 설계 및 운영으로 실사용 환경 피드백 확보",
            "비개발자 사용자도 쉽게 적응할 수 있는 인터페이스 설계 원칙 수립",
            "체계적인 피드백 수집 및 반영 프로세스로 제품 완성도 향상",
          ],
        },
        {
          title: "사용자 중심 평가 워크플로우 설계 및 효율성 향상",
          description:
            "윤리성 평가라는 복잡한 업무를 단순화하기 위해 3단 UI 구조(문단/문장/평가 폼)를 설계하고, 평가 기준 안내와 입력 제한을 통한 정확한 데이터 수집 체계 구축",
          achievements: [
            "3단 UI 구조 설계로 복잡한 평가 업무의 단순화 및 효율성 향상",
            "직관적인 정보 계층 구조로 사용자 학습 비용 최소화",
            "150,000건 이상의 고품질 윤리성 평가 데이터 수집 달성",
          ],
        },
      ],

      technicalContributions: [
        {
          title: "Feature-based 아키텍처 설계 및 상태 관리 최적화",
          description:
            "Redux Toolkit과 Duck Pattern을 기반으로 기능별 모듈 구조를 설계하고, 컴포넌트-상태-API를 명확히 분리하여 확장 가능한 아키텍처를 구축",
          achievements: [
            "Feature-based 모듈 구조로 코드 응집도 및 유지보수성 향상",
            "Redux Toolkit 기반 효율적인 상태 관리로 개발 생산성 향상",
            "설계부터 배포까지 전체 프론트엔드 개발 프로세스 단독 운영",
          ],
        },
        {
          title: "사용자 경험 중심의 평가 인터페이스 구현",
          description:
            "윤리성 평가의 정확도와 일관성을 높이기 위해 평가 기준 안내, 입력 제한, 시각적 구분 등을 적용한 직관적인 평가 인터페이스를 구현",
          achievements: [
            "평가 업무를 처음 수행하는 사용자도 쉽게 적응 가능한 시스템 구현",
            "시각적 구분 체계 및 정보 계층 구조로 평가 정확도 향상",
            "평가 기준 안내 및 입력 제한으로 데이터 품질 일관성 확보",
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
          phase:
            "Phase 3: 품질 관리 시스템 구축 및 데이터 수집 완료 (2021.08-09)",
          description:
            "실시간 진행률 추적과 품질 검증 로직을 적용하여 라벨링 작업 효율 및 일관성을 개선했습니다. 검수자용 전용 인터페이스를 개발하여 라벨링 및 검수 워크플로우를 완성하고 400,000건 이상의 데이터 수집을 완료했습니다.",
          outcomes: [
            "실시간 진행률 추적 시스템 구축",
            "품질 검증 로직 적용으로 일관성 85%에서 95%로 향상",
            "400,000건 이상 대용량 라벨링 데이터 수집 완료",
          ],
        },
      ],
      structuralContributions: [
        {
          title: "대용량 라벨링 운영 체계 구축 및 품질 관리 시스템 도입",
          description:
            "100명 라벨링 작업자와 10명 검수자가 참여하는 대규모 작업 환경을 설계하고, 실시간 진행률 추적과 품질 검증 로직을 통한 체계적인 데이터 수집 및 관리 체계 구축",
          achievements: [
            "대규모 작업자 환경에서의 효율적인 작업 분배 및 관리 체계 구축",
            "실시간 진행률 추적으로 작업 현황 투명성 및 관리 효율성 향상",
            "품질 검증 로직으로 라벨링 일관성 85%에서 95%로 향상",
          ],
        },
        {
          title: "라벨링-검수 통합 워크플로우 설계 및 운영 최적화",
          description:
            "라벨링 작업자와 검수자를 위한 차별화된 인터페이스를 설계하고, 작업 효율성과 데이터 품질을 동시에 확보할 수 있는 통합 워크플로우를 구축",
          achievements: [
            "라벨링 및 검수 워크플로우 완성으로 작업 효율성 극대화",
            "검수자용 전용 인터페이스로 품질 관리 체계 강화",
            "400,000건 이상 대용량 라벨링 데이터 안정적 수집 및 운영",
          ],
        },
      ],

      technicalContributions: [
        {
          title: "직관적 텍스트 라벨링 인터페이스 구현",
          description:
            "window.getSelection API를 활용한 드래그 기반 텍스트 선택과 시각적 라벨링 시스템을 구현하여 사용자가 직관적으로 텍스트를 라벨링할 수 있는 인터페이스 구축",
          achievements: [
            "드래그 기반 라벨링으로 직관적이고 자연스러운 사용자 경험 제공",
            "텍스트 범위 인식 및 시각적 피드백으로 라벨링 정확도 향상",
            "Redux 기반 안정적인 상태 관리로 라벨링 작업의 일관성 확보",
          ],
        },
        {
          title: "대용량 데이터 렌더링 성능 최적화",
          description:
            "IntersectionObserver를 활용한 무한 스크롤 구현으로 초기 30개 문장만 렌더링하고 점진적 로딩을 통해 대용량 데이터 처리 성능을 최적화",
          achievements: [
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
