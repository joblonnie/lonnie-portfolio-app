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
        "범용 IAD/SEG 기반 이상 감지와 고객별 커스터마이징을 모두 지원하기 위해 유연하면서도 확장 가능한 모니터링 시스템 아키텍처가 필요했습니다. 기존의 단일 애플리케이션 구조로는 여러 고객사의 다양한 요구사항을 효율적으로 대응하기 어려웠고, 코드 재사용성과 유지보수성에 한계가 있었습니다. 이를 해결하기 위해 NX를 사용한 모노레포 구조를 제안하고 구현했습니다.",
      detailedDescription: {
        summary:
          "공통 패키지 기반의 모노레포 아키텍처로 코드 재사용성과 개발 속도를 크게 향상시킨 프로젝트",
        results:
          "세 개의 모니터링 시스템은 NX 기반 모노레포 아키텍처 내에서 각각 독립된 애플리케이션으로 구성되었으며, 공통된 UI 및 비즈니스 로직은 VIMS 패키지로 공유되었습니다. 이를 통해 도메인 단위의 FSD 패턴 기반 모듈화를 구현하고, 코드 재사용률 85% 이상을 달성하여 프로젝트 간 기능 전달과 유지보수가 용이해졌습니다. 그 결과, 일관된 UI/UX를 유지하면서도 신규 시스템 개발 기간을 평균 50% 이상 단축할 수 있었으며, 특히 권취 공정 프로젝트는 기존 1개월에서 2주로 개발 기간을 단축하는 성과를 이뤘습니다.",
      },
      projectPhases: [
        {
          phase: "Phase 1: 생산 장비 이상 감지 모니터링 시스템 (2025.01-02)",
          description:
            "첫 번째 프로젝트에서 NX를 사용한 모노레포를 설정하고, 단일 애플리케이션 내에서 FSD(Feature-Sliced Design)를 적용하여 모듈화 개발의 기반을 확립했습니다. 이 단계에서는 모노레포의 기본 구조와 개발 워크플로우를 정립했습니다.",
          outcomes: [
            "모노레포 기반 모듈화 개발 환경 구축",
            "확장 가능한 코드 구조 확립",
            "개발팀 내 NX 워크플로우 정착",
          ],
        },
        {
          phase:
            "Phase 2: SAIGE VIMS IAD/SEG 통합 모니터링 시스템 (2025.03-05)",
          description:
            "SAIGE VIMS 모니터링 시스템 개발 과정에서 모듈화된 기반을 재사용 가능한 내부 패키지인 VIMS로 점진적으로 마이그레이션했습니다. IAD와 SEG 모델을 모두 지원하는 통합 모니터링 시스템을 구축했습니다. IAD의 경우 ECharts를 통해 실시간 이상 데이터를 표시하고, SEG의 경우 클래스별로 감지된 결함의 실시간 윤곽선 값을 검색하여 Konva.js를 사용해 결함 영역을 렌더링했습니다. 이 과정에서 공통 컴포넌트와 비즈니스 로직을 VIMS 패키지로 추상화했습니다.",
          outcomes: [
            "IAD 모델 기반 실시간 이상 감지 데이터 ECharts 시각화",
            "SEG 모델의 클래스별 결함 윤곽선 데이터 수신 및 처리",
            "Konva.js를 활용한 결함 영역 렌더링 시스템 구축",
          ],
        },
        {
          phase: "Phase 3: 권취 공정 이상 감지 모니터링 시스템 (2025.06-07)",
          description:
            "세 번째 프로젝트에서는 완전히 모듈화된 VIMS 패키지를 광범위하게 활용했습니다. 모니터링 시스템에서 감지된 권취 관련 이상에 대한 실시간 로그 및 상태 표시를 구현하고, 고객별 요구사항과 운영 상황에 맞게 맞춤화했습니다. 기존 VIMS 패키지의 80% 이상을 재사용하면서도 권취 공정 특화 기능을 추가로 개발했습니다. 이를 통해 원래 한 달 소요 예정이었던 프로젝트를 단 2주 만에 완료할 수 있었습니다.",
          outcomes: [
            "권취 공정 프로젝트 개발 기간 50% 단축 (1개월 → 2주)",
            "권취 관련 이상 이벤트의 실시간 로그 시스템 구현",
            "모듈화된 아키텍처의 효과성 입증",
          ],
        },
      ],
      period: "2025.01 - 2025.07",
      role: "프론트엔드 개발",
      frontendDevelopers: 2,
      keywords: [
        "NX Monorepo",
        "FSD 아키텍처",
        "모듈화/재사용성 강화",
        "실시간 모니터링",
        "AI 시각화",
      ],
      technologies: [
        "React",
        "TypeScript",
        "NX",
        "Feature-Sliced Design",
        "Zustand",
        "TanStack Query",
        "ECharts",
        "Konva.js",
        "WebSocket",
      ],
      technologyReasoning: [
        {
          category: "NX 기반 Monorepo를 선택한 이유",
          technologies: ["NX", "Monorepo"],
          reasoning:
            "여러 고객사의 요구사항을 빠르게 반영하고, 공통 로직을 효과적으로 공유하면서도 각 모듈을 독립적으로 관리할 수 있는 개발 구조가 필요했습니다. 기존의 단일 레포지토리 구조는 기능별 코드 중복 및 프로젝트 간 공유 어려움, 릴리즈 및 테스트 환경의 분리 미비, 유지보수 시 사이드 이펙트 발생 위험 등의 문제를 갖고 있었습니다. NX 기반의 Monorepo를 도입하여 코드 재사용성 강화(공통 컴포넌트와 로직을 libs 폴더에 패키지화), 독립적 앱 개발 및 배포(앱별로 apps 디렉토리에 구성하여 CI/CD 파이프라인 및 테스트 분리), 점진적 확장 용이성(새로운 프로젝트를 빠르게 스캐폴딩하고 기존 로직을 안정적으로 재사용)을 달성했습니다.",
        },
        {
          category: "FSD(Feature-Sliced Design)를 도입한 이유",
          technologies: ["Feature-Sliced Design"],
          reasoning:
            "초기에는 단순한 UI 중심의 레이어 기반 폴더 구조를 사용했지만, 프로젝트가 커지고 각 기능의 복잡성이 높아짐에 따라 관심사의 분리와 기능 단위 유지보수가 점점 어려워졌습니다. FSD는 도메인 중심의 모듈화(각 Feature가 독립적으로 개발되고 배포 가능하여 유지보수가 쉬움), 비즈니스 로직과 UI 분리(핵심 로직과 UI를 구분함으로써, 테스트 및 리팩토링 효율 증가), 확장성과 테스트 용이성(Feature 단위로 경량 테스트, 마이그레이션, 성능 최적화가 가능)의 장점이 있었습니다. FSD는 특히 VIMS 내부 패키지 구성에 적용하여 각 기능(예: IAD/SEG 모니터링, 권취 감지)을 잘게 나누고, 팀원 간 작업 충돌을 최소화하는 데 기여했습니다.",
        },
      ],
      codeSnippets: [
        {
          title: "NX + FSD 기반 모노레포 구조",
          description:
            "VIMS 모니터링 시스템의 모노레포 아키텍처와 Feature-Sliced Design 패턴 적용 구조",
          language: "text",
          filename: "프로젝트 구조",
          code: `vims-workspace/
├── apps/                           # 애플리케이션 레이어
│   └── vims/                       # VIMS 모니터링 시스템들
│       ├── camera-app/             # 카메라 모니터링 애플리케이션
│       │   └── src/
│       │       ├── app/            # 앱 설정 및 라우팅
│       │       │   ├── layouts/    # 레이아웃 컴포넌트
│       │       │   ├── router/     # 라우터 설정
│       │       │   └── appEntry.tsx
│       │       ├── entities/       # 도메인 엔티티 (FSD)
│       │       │   └── camera/
│       │       │       ├── @x/     # 외부 모듈 연동
│       │       │       ├── apis/   # API 호출 로직
│       │       │       └── models/ # 데이터 모델
│       │       ├── features/       # 기능별 모듈 (FSD)
│       │       │   └── camera/
│       │       │       ├── fetchCamera/    # 카메라 데이터 조회
│       │       │       │   ├── @x/         # 외부 의존성
│       │       │       │   ├── models/     # 상태 관리
│       │       │       │   ├── ui/         # UI 컴포넌트
│       │       │       │   └── widgets/    # 복합 위젯
│       │       │       └── updateCamera/   # 카메라 설정 업데이트
│       │       │           ├── @x/
│       │       │           ├── models/
│       │       │           ├── ui/
│       │       │           └── widgets/
│       │       ├── pages/          # 페이지 컴포넌트 (FSD)
│       │       ├── shared/         # 공통 유틸리티 (FSD)
│       │       │   └── i18n/       # 국제화 설정
│       │       └── widgets/        # 위젯 레이어 (FSD)
│       │
│       ├── iad-monitoring/         # IAD 모니터링 애플리케이션
│       └── seg-monitoring/         # SEG 모니터링 애플리케이션
│
├── packages/                       # 공유 패키지 레이어
│   ├── common/                     # 공통 라이브러리
│   │   ├── apis/                   # 공통 API 유틸
│   │   ├── const/                  # 상수 정의
│   │   └── ui/                     # 공통 UI 컴포넌트
│   │
│   └── services/                   # 비즈니스 서비스
│       ├── shared/                 # 공통 서비스
│       └── vims/                   # VIMS 전용 패키지
│           ├── entities/           # 도메인 엔티티
│           ├── features/           # 재사용 가능한 기능들
│           ├── pages/              # 공통 페이지 템플릿
│           ├── shared/             # VIMS 공통 유틸
│           └── widgets/            # VIMS 전용 위젯
│
├── nx.json                         # NX 워크스페이스 설정
├── package.json                    # 루트 패키지 설정
└── workspace.json                  # 워크스페이스 프로젝트 설정`,
        },
      ],
    },
    {
      projectId: 2,
      companyId: "saige",
      title: "SAIGE SAFETY 제품 개발 - MVP부터 GS 인증까지",
      image: "/safety-logo.svg?text=SAIGE+SAFETY+안전+관리+시스템",
      background:
        "안전 관리 시장 진출을 위한 신사업 런칭 프로젝트로 시작되었습니다. 안전모 착용 감지와 화재·연기 감지 기능을 통합한 솔루션이 필요했고, 기존 시장에는 각각 분리된 솔루션들만 존재했습니다. 회사 차원에서 새로운 사업 영역 진출을 위한 MVP 개발이 시급한 상황이었으며, 이후 고객사 납품과 VOC를 통해 지속적인 개선이 이루어졌습니다. 최종적으로는 한국정보통신기술협회(TTA)의 GS 인증 심사를 위해 사용자 인터페이스의 일관성과 오류 처리 방식에 대한 개선이 필요했습니다.",
      detailedDescription: {
        summary:
          "AI 기반 안전 관리 시스템의 MVP부터 고객 피드백 반영, GS 1등급 인증까지 전 과정을 주도한 종합 제품 개발 프로젝트",
        results:
          "MVP 성공적 납품으로 신사업 영역 진출을 달성하고, 고객사에 성공적으로 납품되어 사업화를 검증했습니다. 고객 VOC 기반의 지속적인 개선을 통해 안전사고 예방 효과가 입증되어 추가 주문을 확보했습니다. 최종적으로 GS 1등급 인증을 획득하여 제품의 신뢰성과 품질을 공식적으로 인정받았습니다. 사용자 오류 인식률을 0%에서 100%로 개선하고, 인증 심사에서 '사용자 편의성' 항목에서 좋은 점수를 받았습니다.",
      },
      projectPhases: [
        {
          phase: "Phase 1: MVP 개발 및 신사업 런칭 (2023.05-09)",
          description:
            "AI 모델의 감지 결과를 직관적으로 시각화하는 사용자 인터페이스를 구축했습니다. WebSocket을 통한 실시간 데이터 수신, Konva.js를 활용한 비디오 오버레이 렌더링, 그리고 위험 상황 발생 시 즉시 알림을 제공하는 시스템을 개발했습니다. 또한 관리자용 대시보드를 통해 전체 현장의 안전 상황을 모니터링할 수 있는 기능을 구현했습니다.",
          outcomes: [
            "실시간 안전모 착용 감지 UI 구현",
            "화재·연기 감지 시각화 시스템 구축",
            "관리자용 통합 모니터링 대시보드 개발",
            "고객사 성공적 납품 및 사업화 검증",
          ],
        },
        {
          phase: "Phase 2: 고객 VOC 반영 및 제품 개선 (2023.10-2024.09)",
          description:
            "고객사 납품 후 수집된 피드백을 바탕으로 제품을 고도화했습니다. 통합 모니터링 대시보드를 개발하여 전체 현장 상황을 한눈에 파악할 수 있도록 했고, 알림 중요도에 따른 설정 페이지를 추가하여 현장별 특성에 맞는 맞춤형 알림 체계를 구축했습니다. 현장 작업자들의 사용 패턴을 분석하여 인터페이스를 최적화하고, 다양한 현장 환경에 대응할 수 있도록 설정 옵션을 확장했습니다.",
          outcomes: [
            "통합 모니터링 대시보드 개발",
            "알림 중요도별 설정 페이지 추가로 맞춤형 알림 체계 구축",
            "현장 작업자 중심의 UX 개선",
            "안전사고 예방 효과 입증 및 추가 주문 확보",
          ],
        },
        {
          phase: "Phase 3: GS 인증 대응 및 시스템 고도화 (2024.10–11)",
          description:
            "GS 인증 심사를 대비해 기존의 기본적인 알림 시스템을 대폭 고도화했습니다. 사용자 인터페이스의 핵심 기능들에 대한 피드백을 강화하고, 백엔드 개발자와 협업하여 API 오류 처리를 표준화했습니다. 사내 디자인 시스템인 saige-elements의 Toast 컴포넌트를 활용해 기존의 단순 알림을 체계적이고 일관된 사용자 피드백 시스템으로 개선했으며, 이를 쉽게 사용할 수 있도록 래퍼 유틸을 정의하고 전역 오류 핸들링에 적용했습니다. 또한, API 응답 포맷에 표준화된 오류 코드를 도입하고 Axios 인터셉터를 통해 모든 API 요청에 대한 일관된 오류 처리를 구현했습니다.",
          outcomes: [
            "기존 알림 시스템 고도화로 사용자 피드백 품질 향상",
            "핵심 사용자 액션에 대한 명확한 상태 알림 제공",
            "API 오류 처리 표준화로 시스템 안정성 향상",
            "GS 1등급 인증 획득",
          ],
        },
      ],
      period: "2023.05 - 2024.11",
      role: "프론트엔드 개발",
      frontendDevelopers: 2,
      keywords: [
        "신사업 MVP 개발",
        "안전모 착용 및 화재 감지 UI",
        "GS 인증 1등급 달성",
        "알림 시스템 고도화",
        "API 오류 처리 표준화",
      ],
      technologies: ["React", "TypeScript", "MUI", "WebSocket", "Axios"],
      technologyReasoning: [
        {
          category: "기존 알림 시스템 고도화 및 체계적인 예외 처리 구조 도입",
          technologies: ["Axios"],
          reasoning:
            "기존 시스템은 MVP 단계로 빠르게 구축되어 기본적인 알림 기능은 있었지만, 사용자 피드백의 일관성과 품질이 부족한 상태였습니다. 특히 주요 사용자 인터페이스에서 성공/실패에 대한 명확한 피드백이 부족했고, 이는 GS 인증 심사 항목 중 '오류 처리 적절성'과 '사용자 편의성' 측면에서 개선이 필요했습니다. 전역 에러 처리는 Axios 인터셉터를 활용하여 모든 API 요청에 대한 실패 응답을 감지하고 적절한 오류 메시지를 사용자에게 전달하며, 로컬 에러 처리는 특정 사용자 액션이나 UI 이벤트에서 발생할 수 있는 예외를 try-catch 블록 내에서 명시적으로 처리하여 문제 발생 위치와 대응 방식을 명확히 분리했습니다.",
        },
        {
          category:
            "디자인 시스템(Saige Elements) 기반의 Toast 컴포넌트 고도화",
          technologies: ["Saige Elements", "Toast"],
          reasoning:
            "기존에는 간단한 알림 기능만 있었지만, GS 인증을 위해 사용자에게 더욱 명확하고 체계적인 피드백을 제공할 필요가 있었습니다. 특히 주요 사용자 인터페이스에서 사용자가 작업 결과를 명확히 인지할 수 있도록 개선이 필요했습니다. 회사 내 디자인 시스템인 Saige Elements의 Toast 컴포넌트를 활용한 이유는 디자인 일관성(내부 제품군 간 UI/UX 일관성을 유지하며 자연스럽게 시스템에 녹일 수 있음), 컴포넌트 캡슐화 및 재사용 용이성(toast 유틸 함수를 별도로 분리하여 다양한 상황에서 반복적으로 활용 가능), 알림 유형 다양화 및 커스터마이징(성공/실패/정보/경고 등 알림 타입 분리 가능, UX 흐름에 따라 적절히 배치)입니다. 이를 통해 기존의 단순한 알림을 체계적인 사용자 피드백 시스템으로 고도화하고, GS 인증 심사에서도 높은 평가를 받을 수 있었습니다.",
        },
      ],
      codeSnippets: [
        {
          title: "고도화된 Toast 알림 시스템",
          description:
            "Saige Elements 기반으로 기존 알림을 체계적으로 개선한 Toast 유틸리티",
          language: "typescript",
          filename: "toast.ts",
          code: `import { enqueueSnackbar } from '@saige/elements/lib/components';
import { OptionsObject } from 'notistack';

type ToastVariant = 'success' | 'info' | 'error' | 'warning';
type ToastOption = Omit<OptionsObject, 'variant'> & {
  closable?: boolean;
};

const defaultOption: ToastOption = {
  autoHideDuration: 3000,
};

const mergeOptions = (
  title: string,
  variant: ToastVariant,
  option?: ToastOption,
): ToastOption & {
  title: string;
  variant: ToastVariant;
} => {
  return { title, variant, ...defaultOption, ...option };
};

const toast = {
  info: (title: string, message: string, option?: ToastOption) => {
    enqueueSnackbar(message, mergeOptions(title, 'info', option));
  },
  error: (title: string, message: string, option?: ToastOption) => {
    enqueueSnackbar(
      message,
      mergeOptions(title, 'error', {
        persist: true,
        ...option,
      }),
    );
  },
  success: (title: string, message: string, option?: ToastOption) => {
    enqueueSnackbar(message, mergeOptions(title, 'success', option));
  },
  warning: (title: string, message: string, option?: ToastOption) => {
    enqueueSnackbar(
      message,
      mergeOptions(title, 'warning', {
        persist: true,
        ...option,
      }),
    );
  },
};

export default toast;

// 실제 사용 예시:
// toast.info('정보', '등록을 성공했습니다.');
// toast.error('오류', '네트워크 연결을 확인해주세요.');`,
        },
      ],
    },
    {
      projectId: 3,
      companyId: "saige",
      title:
        "SAIGE VISION 기반 결함 검출 수율 대시보드 및 시스템 리소스 모니터링 개발",
      image: "/vision-logo.svg",
      background:
        "생산 현장에서 Vision 검사 시스템의 성능 지표와 시스템 리소스 상태를 실시간으로 파악할 필요가 있었습니다. 기존에는 각각 분리된 도구들로 모니터링하여 통합적인 시각이 부족했고, 시스템 이상 상황 발생 시 빠른 대응이 어려웠습니다. 또한 회사 내부 디자인 시스템인 Saige Elements의 초기 구축 단계에서 실제 프로젝트 적용을 통한 검증이 필요한 상황이었습니다.",
      detailedDescription: {
        summary:
          "수율 및 시스템 리소스를 실시간으로 통합 시각화하는 대시보드를 개발하고, 사내 디자인 시스템(Saige Elements)에 기여하여 컴포넌트 재사용성과 개발 효율을 높인 프로젝트",
        results:
          "실시간 모니터링을 통해 시스템 이상 상황을 조기에 감지하고 대응할 수 있는 체계를 마련했습니다. 수율 데이터와 시스템 리소스를 통합 모니터링함으로써 생산성 저하 원인을 빠르게 파악할 수 있게 되었습니다. Saige Elements 디자인 시스템에 기여한 컴포넌트들은 이후 다른 모니터링 프로젝트에서도 재사용되어 개발 효율성을 높였습니다.",
      },
      projectPhases: [
        {
          phase: "Phase 1: 수율 대시보드 개발 (2023.05-07)",
          description:
            "Vision 검사 결과를 기반으로 한 실시간 수율 통계 시각화 시스템을 구축했습니다. ECharts를 활용하여 시간대별 수율 변화, 결함 유형별 분포, 검사 처리량 등을 직관적으로 표시하는 대시보드를 개발했습니다.",
          outcomes: [
            "ECharts 기반 실시간 수율 시각화 시스템 구축",
            "Vision 검사 결과의 직관적 시각화 달성",
          ],
        },
        {
          phase: "Phase 2: 시스템 리소스 모니터링 개발 (2023.07-08)",
          description:
            "Prometheus를 통해 수집된 시스템 리소스 메트릭을 실시간으로 모니터링하는 시스템을 개발했습니다. CPU, GPU, 메모리, 디스크 I/O 등의 지표를 주기적으로 폴링하여 시각화 했습니다. TanStack Query를 활용하여 각 리소스별로 독립적인 데이터 페칭과 캐싱을 구현했습니다.",
          outcomes: [
            "Prometheus 기반 시스템 리소스 실시간 모니터링 구현",
            "CPU, GPU, 메모리, 디스크 I/O 지표 시각화",
            "TanStack Query를 활용한 효율적 데이터 관리",
          ],
        },
      ],
      period: "2023.05 - 2023.09",
      role: "프론트엔드 개발",
      frontendDevelopers: 1,
      keywords: [
        "수율 시각화",
        "ECharts 활용 대시보드",
        "Prometheus 기반 리소스 모니터링",
      ],
      technologies: [
        "React",
        "TypeScript",
        "TanStack Query",
        "ECharts",
        "Prometheus",
        "Saige Elements",
      ],
      technologyReasoning: [
        {
          category: "실시간 데이터 동기화 및 최적화된 재사용 UI 컴포넌트 설계",
          technologies: [
            "TanStack Query",
            "Prometheus",
            "ECharts",
            "React.memo",
          ],
          reasoning:
            "Prometheus 지표를 @tanstack/react-query의 refetchInterval을 활용해 주기적으로 폴링하여 최신 시스템 리소스를 실시간으로 동기화합니다. 각 리소스별(CPU, GPU, Memory 등) 커스텀 훅을 만들어 관심사를 분리했고, ECharts 기반의 공통 라인 및 파이 차트 컴포넌트를 정의해 시각화 로직의 재사용성과 UI 일관성을 확보했습니다. React.memo와 React Query의 캐싱 기능으로 불필요한 리렌더링을 방지하며, 리소스 메트릭 변화가 있을 때만 해당 컴포넌트가 업데이트되도록 하여 성능을 최적화했습니다.",
        },
      ],
      codeSnippets: [
        {
          title: "Prometheus 시스템 모니터링 쿼리",
          description:
            "OS별 시스템 리소스 메트릭을 수집하는 Prometheus 쿼리 정의",
          language: "typescript",
          filename: "prometheus-queries.ts",
          code: `export type OS = 'Ubuntu' | 'Windows'

// OS별 시스템 메트릭 쿼리 정의
export const getSystemQueries = (instance: string, os: OS) => {
  const queries = {
    Ubuntu: {
      // CPU 사용률 (유휴 시간 기반 계산)
      cpuUsage: \`100 - avg(rate(node_cpu_seconds_total{mode='idle', instance='\${instance}'}[5m])) * 100\`,
      
      // 메모리 사용률
      memoryUsage: \`100 - ((node_memory_MemFree_bytes + node_memory_Cached_bytes) / node_memory_MemTotal_bytes * 100)\`,
      
      // 디스크 사용률
      diskUsage: \`100 - (node_filesystem_avail_bytes / node_filesystem_size_bytes * 100)\`
    },
    
    Windows: {
      // CPU 사용률
      cpuUsage: \`100 - avg(rate(windows_cpu_time_total{mode='idle', instance='\${instance}'}[5m])) * 100\`,
      
      // 메모리 사용률
      memoryUsage: \`100 - (windows_os_physical_memory_free_bytes / windows_cs_physical_memory_bytes * 100)\`,
      
      // 디스크 사용률
      diskUsage: \`100 - (windows_logical_disk_free_bytes / windows_logical_disk_size_bytes * 100)\`
    }
  }
  
  return queries[os]
}

// GPU 메트릭 (NVIDIA 전용)
export const getGpuUsage = (instance: string) => 
  \`nvidia_smi_utilization_gpu_ratio{instance='\${instance}'} * 100\``,
        },
      ],
    },
    {
      projectId: 4,
      companyId: "media-corpus",
      title:
        "비윤리적 표현 평가 시스템 프론트엔드 개발 및 사용자 피드백 기반 개선",
      image:
        "/media-logo-2.png?height=400&width=800&text=비윤리적+표현+평가+시스템",
      background:
        "비윤리적 표현 코퍼스 연구를 위한 웹 시스템 구축과 사용자 데이터 수집이 필요했습니다. 학술 연구 목적으로 다양한 텍스트에 대한 윤리성 평가 데이터를 수집해야 했고, 이를 위해 일반 사용자들이 쉽게 참여할 수 있는 웹 플랫폼이 필요한 상황이었습니다. 특히 연령과 성별 등 다양한 배경을 가진 사용자들의 의견을 균형있게 수집하는 것이 중요했습니다.",
      detailedDescription: {
        summary:
          "비윤리적 표현 평가 시스템의 프론트엔드를 단독 개발하고, 100명 사용자 테스트를 통해 150,000건 이상의 데이터를 수집한 연구 기반 프로젝트",
        results:
          "실제 사용자 테스트를 통해 기능 적합성과 UI 효과성을 검증했습니다. 프론트엔드 전체 라이프사이클(설계, 개발, 배포)을 소유한 경험을 획득했으며, 지속적인 반복을 통해 데이터 수집의 효율성과 정확성을 향상시켰습니다. 100명의 사용자로부터 총 150,000건 이상의 평가 데이터를 성공적으로 수집했고, 연구 목적에 부합하는 고품질 데이터셋 구축에 기여했습니다.",
      },
      projectPhases: [
        {
          phase: "Phase 1: 시스템 설계 및 기본 구현 (2021.12–2022.01)",
          description:
            "비윤리적 표현 평가를 위한 웹 시스템의 전체 아키텍처를 설계하고 기본 기능을 구현했습니다. Redux Toolkit을 활용한 상태 관리 구조를 설계하고, Ant Design을 통한 일관된 UI 컴포넌트를 구성했습니다. 텍스트 평가 인터페이스의 기본 틀을 구축하고, 사용자 인증 및 진행률 추적 기능을 개발했습니다.",
          outcomes: [
            "Redux Toolkit 기반 상태 관리 아키텍처 구축",
            "Ant Design을 활용한 일관된 UI 컴포넌트 구성",
            "텍스트 평가 인터페이스 기본 틀 구축",
            "사용자 인증 및 진행률 추적 기능 개발",
          ],
        },
        {
          phase: "Phase 2: 사용자 피드백 수집 및 개선 사항 도출 (2022.02–03)",
          description:
            "서비스 운영 중 실시간으로 접수되는 VOC(Voice of Customer)를 수집하고 주요 개선사항을 도출했습니다. 피드백 기반으로 사용자의 혼동을 유발하는 요소를 파악하고, 평가 정확도를 저해하는 UI/UX 문제를 정리했습니다. 특히 사용자 인터랙션에서의 불편 요소를 중심으로 개선 방향을 설정했습니다.",
          outcomes: [
            "실시간 VOC 기반 사용자 피드백 수집",
            "사용자 혼동 유발 UI 요소 파악",
            "정확한 평가 유도를 위한 개선사항 도출",
            "UI/UX 문제 분석을 통한 개선 방향 설정",
          ],
        },
        {
          phase: "Phase 3: UI/UX 개선 및 최적화 (2022.03–04)",
          description:
            "실제 사용자 피드백을 바탕으로 사용자 인터페이스를 대폭 개선했습니다. 평가 흐름에 맞춘 3단 UI 구조를 도입하여 평가 과정을 명확히 하고, 인터랙션 디자인을 개선해 평가 효율성과 정확도를 동시에 향상시켰습니다. 최종적으로 150,000건 이상의 고품질 평가 데이터를 수집했습니다.",
          outcomes: [
            "사용자 혼동 최소화를 위한 3단 UI 구조 도입",
            "평가 효율성과 데이터 정확도 향상",
            "인터랙션 디자인 최적화",
            "150,000건 이상의 고품질 평가 데이터 수집 완료",
          ],
        },
      ],
      period: "2021.12 - 2022.04",
      role: "프론트엔드 개발 (단독)",
      frontendDevelopers: 1,
      keywords: [
        "사용자 피드백 기반 개선",
        "실사용자 테스트",
        "데이터 수집 효율화",
        "단독 개발",
      ],
      technologies: [
        "React",
        "JavaScript",
        "Redux Toolkit",
        "Ant Design",
        "Webpack",
      ],
      technologyReasoning: [
        {
          category: "Feature-based 모듈 아키텍처 도입",
          technologies: [
            "Feature-based Architecture",
            "Redux Toolkit",
            "Duck Pattern",
          ],
          reasoning:
            "각 기능을 독립적인 모듈로 구성하여 코드의 응집도를 높이고 결합도를 낮췄습니다. 각 feature 폴더 내에 관련된 컴포넌트, 상태 관리, 비동기 로직을 함께 배치하여 개발 효율성과 유지보수성을 향상시켰습니다. Redux Toolkit의 createSlice를 통해 액션 생성자, 리듀서, 액션 타입을 하나의 모듈에서 관리하고, Duck 패턴을 적용하여 각 기능별 slice를 디렉토리 단위로 구성했습니다.",
        },
        {
          category: "UI 설계 및 인터랙션",
          technologies: ["Ant Design", "React"],
          reasoning:
            "사용자 혼동을 줄이고 정확한 평가를 유도하는 3단 UI 구조를 도입했습니다. Paragraph Section(평가 대상 문장과 참고 문장을 시각적으로 구분, 평가할 문장에서 핵심 표현 하이라이트 처리), Subtitle Section(평가 데이터의 메타 정보 표시, 이전/다음 문장 이동 및 평가 진행률 시각화), Form Section(라디오 버튼을 통한 평가 입력으로 중복 선택 방지, 평가 항목 3종 모두 입력되어야 제출 가능, 6가지 유형 외 표현은 pass 기능 제공)으로 구성하여 평가 효율성과 데이터 정확도를 고려했습니다.",
        },
      ],
      codeSnippets: [
        {
          title: "Feature-based 모듈 구조",
          description:
            "각 기능별로 독립적인 모듈을 구성하여 유지보수성과 확장성을 높인 폴더 구조",
          language: "text",
          filename: "프로젝트 구조",
          code: `src/
├── features/
│   ├── current-work/           # 현재 작업 관리 기능
│   │   ├── components/         # 컴포넌트들
│   │   │   ├── WorkList.jsx
│   │   │   └── WorkItem.jsx
│   │   ├── saga.js            # 비동기 로직 처리
│   │   ├── slice.js           # Redux 상태 관리
│   │   └── index.js           # 모듈 진입점
│   │
│   └── evaluation-system/      # 평가 시스템 기능
│       ├── components/
│       │   └── EvaluationPanel.jsx
│       ├── saga.js
│       ├── slice.js
│       └── index.js
│
├── shared/                     # 공통 컴포넌트 및 유틸
│   ├── components/
│   ├── utils/
│   └── constants/
│
└── store/                      # Redux 스토어 설정
    ├── rootSaga.js
    ├── rootReducer.js
    └── store.js`,
        },
      ],
    },
    {
      projectId: 5,
      companyId: "media-corpus",
      title:
        "문장 라벨링 및 검토 시스템 프론트엔드 개발 및 사용자 테스트 기반 개선",
      image: "/media-logo-1.png?text=문장+라벨링+시스템",
      background:
        "코퍼스 언어의 사회적 인식 분류를 위한 문장 라벨링 및 검토 시스템 개발과 사용자 테스트를 통한 품질 개선이 필요했습니다. 자연어 처리 연구를 위해 대량의 텍스트 데이터에 정확한 라벨을 부여하는 작업이 필요했고, 이를 효율적으로 수행할 수 있는 도구가 부족한 상황이었습니다. 특히 라벨링 작업의 일관성과 품질을 보장하면서도 작업 효율성을 높이는 것이 핵심 과제였습니다.",
      detailedDescription: {
        summary:
          "문장 라벨링 시스템을 단독 개발하고 사용자 피드백을 반영해 인터페이스를 개선, 라벨링 정확도와 속도를 향상시켜 400,000건 이상의 고품질 데이터를 수집한 프로젝트",
        results:
          "사용자 중심의 인터페이스 개선을 통해 라벨링 정확도와 속도를 향상시켰습니다. 피드백 루프 기반 개발과 반복적 개선 경험을 획득했으며, 사용자 관점에서 제품 완성도 향상을 주도했습니다. 라벨링 작업 시간이 평균 40% 단축되었고, 라벨링 일관성이 85%에서 95%로 향상되었습니다. 최종적으로 400,000건 이상의 고품질 라벨링 데이터를 성공적으로 수집했습니다.",
      },
      projectPhases: [
        {
          phase: "Phase 1: 기본 라벨링 시스템 구축 (2021.05-06)",
          description:
            "텍스트 선택 기반의 직관적인 라벨링 인터페이스를 개발했습니다. window.getSelection API를 활용하여 드래그 기반 텍스트 선택 기능을 구현하고, 커스텀 컨텍스트 메뉴를 통해 라벨을 적용할 수 있는 시스템을 구축했습니다. Redux를 활용한 상태 관리와 기본적인 라벨링 워크플로우를 완성했습니다.",
          outcomes: [
            "드래그 기반 텍스트 선택 인터페이스 구현",
            "커스텀 컨텍스트 메뉴를 통한 라벨링 시스템 구축",
            "Redux 기반 상태 관리 구조 완성",
            "기본 라벨링 워크플로우 구축",
          ],
        },
        {
          phase: "Phase 2: 사용자 테스트 및 성능 최적화 (2021.07-08)",
          description:
            "100명의 라벨링 작업자와 10명의 검수자가 참여하는 대규모 테스트를 진행했습니다. 긴 문서 데이터에 대한 성능 최적화를 위해 IntersectionObserver 기반 무한 스크롤을 구현하고, 작업 히스토리 저장 및 이어하기 기능을 개발했습니다. 사용자 피드백을 체계적으로 수집하고 분석했습니다.",
          outcomes: [
            "100명 라벨링 작업자 + 10명 검수자 대규모 테스트 진행",
            "IntersectionObserver 기반 무한 스크롤 성능 최적화",
            "작업 히스토리 저장 및 이어하기 기능 구현",
          ],
        },
        {
          phase: "Phase 3: UI/UX 개선 및 품질 향상 (2021.08-09)",
          description:
            "수집된 피드백을 바탕으로 라벨링 편의성과 입력 플로우를 최적화했습니다. 실시간 진행률 추적, 품질 검증 로직, 작업자 간 일관성 유지를 위한 가이드라인 시스템을 구축했습니다. 검수자를 위한 검토 인터페이스를 개발하여 완전한 라벨링 워크플로우를 완성했습니다.",
          outcomes: [
            "라벨링 편의성 및 입력 플로우 최적화",
            "실시간 진행률 추적 및 품질 검증 로직 구현",
            "검수자용 검토 인터페이스 개발로 완전한 워크플로우 완성",
          ],
        },
      ],
      period: "2021.05 - 2021.09",
      role: "프론트엔드 개발 (단독)",
      frontendDevelopers: 1,
      keywords: [
        "문장 라벨링 시스템",
        "사용자 테스트 기반 개선",
        "라벨링 편의성 최적화",
        "워크플로우 구축",
      ],
      technologies: ["React", "JavaScript", "Redux", "Ant Design", "Webpack"],
      technologyReasoning: [
        {
          category: "드래그 기반 라벨링 인터페이스 구현",
          technologies: ["window.getSelection", "DOM API", "React", "Redux"],
          reasoning:
            "텍스트 드래그 범위를 인식하고 시각적 라벨링을 가능하게 하는 인터랙션을 구현했습니다. window.getSelection()을 통해 사용자가 선택한 텍스트의 범위 정보를 추출하고, anchorOffset, focusOffset을 기준으로 정확한 라벨링 범위를 계산했습니다. 드래그 완료 시 커스텀 컨텍스트 메뉴를 해당 위치에 표시하여 6가지 라벨 항목으로 구성된 메뉴에서 선택할 수 있도록 했으며, 메뉴 항목 선택 시 Redux의 UPDATE_KEYWORD 액션을 dispatch하여 라벨 종류, 텍스트 값, 시작~종료 offset 정보를 함께 상태에 저장했습니다.",
        },
        {
          category: "성능 최적화 및 사용자 경험 개선",
          technologies: [
            "IntersectionObserver",
            "Local Storage",
            "Backend Integration",
          ],
          reasoning:
            "대량의 문서 데이터를 효율적으로 처리하기 위해 IntersectionObserver 기반 무한 스크롤을 구현하여 초기 30개 문장만 렌더링하고 스크롤 시 점진적으로 로딩했습니다. 사용자의 라벨링 작업 진행 상황을 Local Storage와 백엔드에 저장하여 재접속 시 마지막 작업 위치부터 이어서 할 수 있도록 했습니다. 이를 통해 긴 문서에서도 빠른 초기 로딩과 작업 연속성을 보장하여 라벨링 효율성을 크게 향상시켰습니다.",
        },
      ],
      codeSnippets: [
        {
          title: "키워드 라벨링 핵심 로직",
          description: "텍스트 선택 및 키워드 저장 프로세스를 구현한 실제 코드",
          language: "javascript",
          filename: "CurrentWorkContent.jsx",
          code: `const saveKeyword = (record, forbidden) => {
  // Select Keywords Part
  const sel = window.getSelection();
  if (!sel) {
    console.log('Nothing is selected.');
    return;
  }

  const { anchorOffset, focusOffset } = sel;
  const start = anchorOffset > focusOffset ? focusOffset : anchorOffset;
  const end = anchorOffset < focusOffset ? focusOffset : anchorOffset;
  const selected = {
    start,
    end,
    forbidden,
    keyword: sel.toString().trim(),
  };

  // Update Keywords Part
  const { file, keywords } = record;
  const params = {
    fileId: file.id,
    sentenceId: record.id,
    keywords: _.concat(keywords, selected),
  };
  
  sel.removeAllRanges();

  if (_.isEmpty(selected.keyword)) {
    message.error({
      content: '선택된 키워드가 없습니다.',
      duration: '1',
      className: 'check-keyword',
      style: {
        marginTop: '5vh',
      },
    });
    return;
  }

  dispatch(updateKeyword(params));
};`,
        },
      ],
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
