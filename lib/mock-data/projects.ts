import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    projectId: 1,
    companyId: "saige",
    title: "영상 기반 결함·이상 동작 실시간 모니터링 시스템",
    subtitle: "사내 제품 - SAIGE VIMS 개발",
    image: "/vims-logo.svg",
    background:
      "AI 영상 분석을 통해 제조 현장의 결함과 이상 동작을 실시간으로 감지하고, 모니터링·알림·이력 관리까지 제공하는 산업용 영상 모니터링 시스템입니다.",
    structuralContributions: [
      {
        title: "실시간 이미지 스트리밍 성능 최적화",
        summary:
          "Web Worker 기반 디코딩 분리, GPU 합성 중심 렌더링 전환, Blob URL 기반 메모리 관리로 고FPS 실시간 스트리밍 환경에서 UI 지연·프레임 드롭·메모리 누수 문제를 해결했습니다.",
        category: "성능 최적화",
        primaryCategory: "실시간 스트리밍 최적화",
        background:
          "기존 구조는 base64 프레임 디코딩(파싱/변환/Blob 생성)을 메인 스레드가 모두 처리하면서, 다채널·고 FPS 환경에서 CPU 과부하가 발생했습니다. 이로 인해 GC 지연과 메모리 누적이 이어지며 OOM으로 귀결되는 병목이 발생했고, 프레임 처리 중 UI 인터랙션(버튼 클릭, 스크롤 등)이 지연되거나 응답이 없는 현상이 나타났습니다. 또한 실시간 WebSocket 스트리밍 환경에서 특정 카드의 경고 border 애니메이션이 background-position 기반으로 동작하면서 매 프레임 Paint를 강제로 발생시켜 CPU 과부하와 GC 지연이 발생했고, 장시간 사용 시 해제되지 않은 Blob/ObjectURL이 잔존하여 Heap이 누적되는 문제도 확인되었습니다.",
        solution:
          "Web Worker 기반 병렬 처리 구조로 전환하여 CPU·메모리 집약적인 디코딩 로직을 Worker로 이동시켰습니다. 메인 스레드는 렌더링 중심의 최소 역할만 수행하도록 분리하여 UI 반응성을 확보했고, postMessage로 처리된 프레임을 메인 스레드에 전달하여 사용자 인터랙션을 개선했습니다. 애니메이션 방식을 Paint가 발생하는 방식에서 GPU 합성 기반(transform) 방식으로 전환하고, ::before + conic-gradient로 테두리를 분리해 카드 본체 렌더링에 영향을 주지 않도록 재구성했습니다. 이미지 사용 종료 시 URL.revokeObjectURL()을 즉시 호출하도록 개선하여 메모리 잔존을 제거하고, 장시간 사용 환경에서도 메모리 안정성을 확보했습니다.",
        technologies: [
          "Web Worker",
          "GPU Compositing",
          "Blob API",
          "Chrome DevTools",
          "CSS Transform",
        ],
      },
      {
        title: "Nx Monorepo 기반 프론트엔드 아키텍처 설계",
        summary:
          "빌드 캐싱을 활용한 Nx Monorepo 도입과 pnpm 마이그레이션으로 8개 제품 단일 코드베이스를 운영하고 신규 POC 개발 소요 시간을 약 40% 단축했습니다.",
        category: "개발 생산성",
        primaryCategory: "모노레포 아키텍처",
        background:
          "고객사별로 공통 기능이 중복 구현되고 코드가 앱마다 분산되어 개발 리소스가 낭비되었으며, 유지보수와 기능 확장 시 작업 범위 파악이 어려웠습니다. 또한 커스터마이징된 컴포넌트가 혼재되어 변경 추적과 운영 안정성이 떨어지는 문제가 있었습니다.",
        solution:
          "빌드 캐싱을 활용한 Nx Monorepo 도입으로 다수 고객사 대응 구조를 설계했고, npm에서 pnpm으로 마이그레이션하여 의존성 설치 및 배포 속도를 개선했습니다. 공통 기능을 '@saige/vims' 패키지로 모듈화하고 API 응답 차이는 제네릭 타입으로 표준화하여 동일한 endpoint에서 response만 다른 경우 코드 중복을 최소화했습니다. 공통 컴포넌트 뼈대는 @saige/vims에서 가져와 각 앱에서 확장하는 구조로 설계하고, 커스터마이징된 컴포넌트·훅에는 고객사 이름을 prefix로 활용해 트래킹과 유지보수를 용이하게 하여 신규 POC 개발 소요 시간을 약 40% 단축했습니다.",
        technologies: [
          "Nx Monorepo",
          "pnpm",
          "@saige/vims 공통 패키지",
          "제네릭 타입",
        ],
      },
    ],
    period: "2025.01 - 2026.01",
    role: "프론트엔드 개발",
  },
  {
    projectId: 2,
    companyId: "saige",
    title: "중대재해 예방을 위한 AI 안전 모니터링 시스템",
    subtitle: "사내 제품 - SAIGE SAFETY 개발",
    image: "/safety-logo.svg",
    background:
      "AI 영상 분석을 통해 제조·산업 현장에서 발생할 수 있는 위험 상황과 안전 위반 행동을 실시간으로 감지하고, 모니터링·알림·이력 관리까지 제공하는 산업 안전 모니터링 시스템입니다.",
    structuralContributions: [
      {
        title: "모니터링 UI 안정성 및 예외 처리 구조 개선",
        summary:
          "React Hook Form + Zod 기반 입력 검증 구조와 Error Boundary를 도입하여 실제 현장 환경에서도 장시간 안정적으로 운영 가능한 실시간 모니터링 UI를 구축했습니다.",
        category: "코드 품질",
        primaryCategory: "입력 검증/에러 처리",
        background:
          "입력 오류 및 런타임 예외로 UI 중단이 발생하던 초기 MVP 구조 개선이 필요했습니다. 중대재해처벌법 강화로 SAFETY 사업에 집중하게 되었고 GS 인증을 진행하게 되었는데, GS 인증 1등급 취득을 위해 사용자 인터랙션에 따른 명확한 피드백(toast 메시지), 입력 필드별 에러 핸들링, 비밀번호 정책 강화 등이 필요했습니다.",
        solution:
          "React Hook Form + Zod 기반 입력 검증 구조를 도입하여 잘못된 설정값의 서버 전달을 사전 차단했고, 비밀번호 정책·공백 검증 등 요구 정책을 schema로 명시하여 입력 오류를 예방했습니다. 입력 상태에 따른 동적 helperText를 제공하여 실시간 가이드를 강화했으며, Error Boundary를 적절한 scope에 적용해 런타임 예외 발생 시에도 화면 전체 중단 없이 복구 가능한 구조를 설계했습니다. toast 피드백으로 오류 원인을 전달하고 사용자 액션 기반 banner를 표출하여 상태 변화 인지성을 향상시켜, 실제 현장 환경에서도 장시간 안정적으로 운영 가능한 실시간 모니터링 UI를 구축했습니다.",
        technologies: ["React Hook Form", "Zod", "Error Boundary", "Toast UI"],
      },
      {
        title: "실시간 모니터링 화면 좌표 정합 및 반응형 처리",
        summary:
          "Object Detection 결과 좌표를 화면 해상도에 맞게 변환하고, ResizeObserver 기반 커스텀 Hook으로 해상도·배율 변화가 잦은 현장 환경에서도 Bounding Box 오차 없이 일관된 모니터링 화면을 제공했습니다.",
        category: "UX 개선",
        primaryCategory: "이벤트 시각화",
        background:
          "모니터링 페이지에서 안전모 미착용, 화재, 연기 등의 이벤트를 바운딩 박스로 표시해야 했는데, AI 연구소에서 전달받는 Object Detection 결과 좌표가 원본 이미지 기준이었습니다. 모니터링 화면 크기가 원본과 달라 좌표를 그대로 사용할 수 없었고, 브라우저 창 크기가 동적으로 변경될 때마다 바운딩 박스 위치가 어긋나는 문제가 있었습니다.",
        solution:
          "Konva.js 기반 캔버스 오버레이 시스템을 구현하여 동적 좌표 렌더링 환경을 확보했고, 원본 해상도 기준 Bounding Box 좌표를 현재 화면 해상도 및 브라우저 크기에 맞게 비율 기반으로 변환하는 좌표 변환 로직을 적용하여 확대·축소 환경에서도 정확한 위치를 유지했습니다. ResizeObserver를 활용해 브라우저 리사이즈 시에도 Bounding Box 위치·크기를 자동 재계산하는 커스텀 Hook을 구현하고, 이벤트 유형별로 색상을 구분하여 위험 요소 인지 속도를 향상시켜 해상도·배율 변화가 잦은 현장 환경에서도 Bounding Box 오차 없이 일관된 모니터링 화면을 제공했습니다.",
        technologies: [
          "Konva.js",
          "ResizeObserver",
          "Canvas API",
          "좌표 변환 로직",
        ],
      },
    ],
    period: "2023.06 - 2024.12",
    role: "프론트엔드 개발",
  },
  {
    projectId: 3,
    companyId: "saige",
    title: "AI 비전 검사 기반 공정 운영·배치·수율 모니터링 시스템",
    subtitle: "사내 제품 - SAIGE VISION Enterprise 개발",
    image: "/vision-logo.svg",
    background:
      "AI 비전 검사 시스템에서 생성되는 검사 결과와 운영 지표를 통합해, 제조 공정의 수율 추이·결함 현황·장비 상태를 기간별로 분석하고 모니터링할 수 있는 비전 검사 운영·분석 대시보드입니다.",
    structuralContributions: [
      {
        title: "실시간 대시보드 렌더링 성능 최적화",
        summary:
          "다수(9개 이상) 차트 렌더링 환경에서 ECharts BaseChart 컴포넌트 공통화와 차트 구조 재설계를 통해 렌더링 지연 없이 안정적인 대시보드 성능을 확보했습니다.",
        category: "성능 최적화",
        primaryCategory: "차트 렌더링 최적화",
        background:
          "VISION 검사 결과와 장비 리소스(CPU·GPU·Memory·Network I/O·결함 Count)를 한 화면에서 실시간으로 시각화하는 대시보드 환경에서, 다수(9개 이상) 차트를 동시에 렌더링하면서 초기 로딩이 느려지고 사용자 인터랙션 시 지연이 발생하는 성능 병목이 발생했습니다. 또한 각 차트마다 중복된 ECharts 옵션 설정과 렌더링 로직이 반복되어 유지보수가 어려웠고, 새로운 차트 타입을 추가할 때마다 전체 옵션을 다시 작성해야 하는 비효율이 발생했습니다.",
        solution:
          "다수(9개 이상) 차트를 동시에 렌더링하던 구조에서 발생한 성능 병목을 분석하고, 불필요한 렌더링을 최소화하기 위해 차트 컴포넌트에 메모이제이션을 적용했습니다. ECharts BaseChart 컴포넌트를 공통화하여 중복 옵션과 렌더링 로직을 제거하고, props를 통해 차트 타입과 데이터만 전달하면 되는 구조로 재설계했습니다. 실시간·기간별 차트 구성 모두에 대응 가능하도록 유연한 인터페이스를 설계하여 새로운 차트 추가 시 개발 시간을 크게 단축하고, 다수 차트가 동시에 갱신되는 환경에서도 렌더링 지연 없이 안정적인 대시보드 성능을 확보했습니다.",
        technologies: [
          "ECharts",
          "React.memo",
          "useMemo",
          "Component Design Pattern",
        ],
      },
      {
        title: "실시간 데이터 갱신 환경 렌더링 최적화",
        summary:
          "TanStack Query 기반 실시간 데이터 갱신 환경에서 메모이제이션이 필요한 렌더링 지점을 선별해 적용하여 화면 떨림 없이 안정적인 사용자 경험을 제공했습니다.",
        category: "성능 최적화",
        primaryCategory: "렌더링 최적화",
        background:
          "TanStack Query를 통해 실시간으로 데이터가 갱신되는 환경에서, 하나의 차트 데이터가 업데이트될 때마다 모든 차트가 리렌더링되어 불필요한 성능 저하와 화면 떨림이 발생했습니다. 차트의 Legend와 UI 요소가 차트 렌더링 로직에 강하게 결합되어 있어, 디자이너가 Legend 위치나 스타일을 변경 요청할 때마다 차트 내부 로직을 수정해야 했고 예상치 못한 버그가 발생하기도 했습니다.",
        solution:
          "각 차트 컴포넌트에 React.memo를 적용하고, 데이터 의존성을 명확히 정의하여 변경된 데이터와 관련된 차트만 선택적으로 리렌더링되도록 구조를 설계했습니다. TanStack Query의 queryKey를 세밀하게 관리하여 불필요한 데이터 refetch를 방지하고, useMemo를 활용해 차트 옵션 객체의 불필요한 재생성을 제거했습니다. Legend와 UI 컨트롤을 차트 컴포넌트 외부로 분리하여 독립적인 컴포넌트로 구성하고, 차트와는 props를 통해서만 통신하도록 구조를 개선하여 실시간 데이터 갱신 상황에서도 화면 떨림 없이 안정적인 사용자 경험을 제공했습니다.",
        technologies: [
          "TanStack Query",
          "React.memo",
          "useMemo",
          "Component Composition",
        ],
      },
    ],
    period: "2024.03 - 2024.06",
    role: "프론트엔드 개발",
  },
  {
    projectId: 6,
    companyId: "saige",
    title: "사내 디자인 시스템",
    subtitle: "사내 제품 - SAIGE ELEMENTS 개발",
    image: "/elements-logo.svg",
    background:
      "다수의 SAIGE 제품에서 반복되던 UI 구현 방식을 표준화해, 일관된 사용자 경험을 유지하면서 디자인·개발 간 협업 비용을 구조적으로 줄이기 위해 구축된 사내 공통 디자인 시스템입니다.",
    structuralContributions: [
      {
        title: "UI 패턴 표준화 및 디자인 토큰 설계",
        summary:
          "반복 사용되던 UI 패턴을 컴포넌트 단위로 정리하고 의미 기반(Semantic) 디자인 토큰을 정의하여 제품 간 UI 일관성 확보 및 디자인·개발 협업 비용을 감소시켰습니다.",
        category: "개발 생산성",
        primaryCategory: "디자인 토큰 체계",
        background:
          "동일한 UI 요소가 제품별로 따로 구현되며 재사용성과 일관성이 저하되었고, 문서화가 부족해 컴포넌트 사용법 파악 시 코드를 직접 탐색해야 했습니다. 초기 디자인 토큰 정의 시 디자이너와 개발자의 기준이 달라 동일 요소에 다른 토큰을 사용하는 기술 부채가 발생했고, 토큰 역할이 명확하지 않아 어떤 상황에서 어떤 토큰을 적용해야 하는지 판단이 어려웠습니다.",
        solution:
          "반복 사용되던 UI 패턴을 컴포넌트 단위로 정리해 여러 제품에 공통 적용 가능한 구조를 설계하고, Button·Switch 등 공통 UI 컴포넌트를 여러 제품에서 재사용 가능한 구조로 정비했습니다. 의미 기반(Semantic) 디자인 토큰을 정의해 컴포넌트에 주입하는 방식으로 구현하고, 디자이너와 공동으로 기존 토큰을 재검토해 역할 기반(Primitive·Semantic·Component) 토큰 체계로 재정의하여 사용 기준 일관성을 확보했습니다. Primitive와 Theme 토큰을 분리해 테마 확장성과 다크모드 대응을 용이하게 구성하고, Figma 디자인 토큰·컴포넌트 명과 코드 레벨 용어를 정렬해 제품 간 UI 일관성 확보 및 디자인·개발 협업 비용을 감소시켰습니다.",
        technologies: [
          "Design Tokens",
          "Figma",
          "Theme System",
          "Semantic Tokens",
          "MUI",
          "Storybook",
        ],
      },
      {
        title: "아이콘 라이브러리 자동화 및 CI/CD 파이프라인 구축",
        summary:
          "@saige/icons 패키지를 신규 구축하고, Figma API 기반 아이콘 자동 수집부터 Azure Artifacts 배포, MS Teams 알림까지 자동화된 아이콘 운영 파이프라인을 구축했습니다.",
        category: "개발 생산성",
        primaryCategory: "CI/CD 자동화",
        background:
          "디자이너가 Figma에서 아이콘을 업데이트할 때마다 개발자가 수동으로 SVG를 추출하고 React 컴포넌트로 변환해야 했으며, 버전 관리와 배포 과정이 번거로워 아이콘 업데이트 반영이 지연되었습니다. 디자이너가 UI 변경 사항을 확인할 수 있는 리뷰 흐름이 명확하지 않았고, 문서화가 코드와 동기화되지 않는 문제도 있었습니다.",
        solution:
          "@saige/icons 패키지를 신규 구축하고, Figma API를 활용해 디자인된 아이콘을 자동으로 수집하여 React 기반 SVG 아이콘 컴포넌트로 변환했습니다. Storybook 자동 생성 및 버전 관리 전략을 적용하고, Azure Artifacts Feed 배포 및 MS Teams 알림까지 Pipeline Run 버튼 한 번으로 자동화했습니다. Claude Code를 활용해 아이콘 변환 및 파이프라인 스크립트를 작성하여, 디자인 변경이 코드·문서·배포·팀 공유까지 자동으로 연결되는 아이콘 운영 파이프라인을 구축했습니다.",
        technologies: [
          "Figma API",
          "Azure DevOps",
          "Storybook",
          "React SVG",
          "CI/CD Pipeline",
          "Claude Code",
        ],
      },
    ],
    period: "2023 ~",
    role: "디자인 시스템 컨트리뷰터",
  },
  {
    projectId: 4,
    companyId: "media-corpus",
    title: "텍스트 윤리성 평가 시스템",
    subtitle:
      "국립 국어원 - 비윤리적 표현 말뭉치 연구 분석 및 시범 구축 사업 참여",
    image: "/media-logo-2.png",
    background:
      "온라인 텍스트를 대상으로 비윤리적·차별적 표현 여부를 평가·분류하고, 평가 결과를 구조화된 데이터로 축적해 AI 학습 및 검증에 활용 가능한 언어 말뭉치를 생성·관리하는 웹 기반 평가 시스템입니다.",
    structuralContributions: [
      {
        title: "평가 흐름 및 정확도 개선을 위한 UI 구조 재설계",
        summary:
          "문단–문장–평가 UI 구조를 재설계하고 정보 탐색 영역과 입력 영역을 분리하여 전체 평가 효율 향상 및 잘못된 문장 평가 비율을 감소시켰습니다.",
        category: "UX 개선",
        primaryCategory: "평가 플로우 UX",
        background:
          "문단 전체를 읽고 대상 문장을 찾아 평가해야 하는 복잡한 흐름으로 작업자가 단계별로 혼란을 겪었고, 평가 대상 문장과 일반 문장의 시각적 구분이 부족해 잘못된 문장을 평가하는 오류가 발생했습니다. 정보 탐색 영역과 입력 영역이 명확히 분리되지 않아 작업자의 집중도가 저하되는 문제도 있었습니다.",
        solution:
          "문단–문장–평가 UI 구조를 재설계해 작업 흐름을 명확히 분리하고, 평가 대상 문장의 시각적 구분을 강화하여 잘못된 문장을 평가하는 오류를 방지했습니다. 정보 탐색 영역과 입력 영역을 분리하여 평가 과정에서 발생하던 혼선과 입력 오류를 구조적으로 제거하고 사용자 집중도를 향상시켜, 전체 평가 효율 향상 및 잘못된 문장 평가 비율을 감소시켰습니다.",
        technologies: ["Ant Design", "UI Flow Design"],
      },
      {
        title: "상태 관리 및 프론트엔드 구조 설계",
        summary:
          "Redux Toolkit 기반 상태 관리와 Feature 단위 구조를 적용해 유지보수성과 확장성을 고려한 안정적인 프론트엔드 아키텍처를 구축했습니다.",
        category: "아키텍처",
        primaryCategory: "Feature 모듈화",
        background:
          "단독 개발 프로젝트 특성상 컴포넌트·상태 관리·API 로직이 한 파일에 섞여 구조가 복잡해졌고, 기능이 늘어날수록 코드 흐름 파악과 유지보수가 어려워졌습니다. 향후 기능 확장이나 다른 개발자의 유지보수를 고려한 구조적 개선이 필요했습니다.",
        solution:
          "Redux Toolkit 기반 상태 관리를 도입하여 전역 상태를 체계적으로 관리하고, Feature 단위 구조를 적용해 각 기능별로 컴포넌트·상태·API 로직을 모듈화했습니다. 이를 통해 단독 개발 환경에서도 확장과 수정이 용이한 프론트엔드 구조를 수립하여 유지보수성과 확장성을 고려한 안정적인 프론트엔드 아키텍처를 구축했습니다.",
        technologies: [
          "Redux Toolkit",
          "Feature-based Architecture",
          "Duck Pattern",
        ],
      },
    ],
    period: "2021.12 - 2022.04",
    role: "프론트엔드 개발 (단독)",
  },
  {
    projectId: 5,
    companyId: "media-corpus",
    title: "비윤리적 표현 라벨링 시스템",
    subtitle: "국립 국어원 - 말뭉치 언어의 사회적 인식 조사 분류 사업 참여",
    image: "/media-logo-1.png",
    background:
      "온라인 텍스트에서 비윤리적·차별적 표현을 문장 단위로 선택·분류하고, 라벨 정보를 구조화된 데이터로 축적해 AI 학습 및 분석에 활용 가능한 언어 데이터셋을 구축하는 웹 기반 라벨링 시스템입니다.",
    structuralContributions: [
      {
        title: "라벨링 작업 흐름 및 UX 개선",
        summary:
          "드래그 기반 텍스트 선택과 컨텍스트 메뉴를 결합한 라벨링 Flow를 설계하여 라벨링 작업 속도와 정확도를 동시에 향상시켰습니다.",
        category: "UX 개선",
        primaryCategory: "라벨링 UX 개선",
        background:
          "텍스트 내 특정 영역을 선택하여 라벨링해야 하는데, 기존 방식은 텍스트 선택 후 별도의 입력 폼으로 이동하여 라벨을 지정하는 등 단계가 많고 직관적이지 못해 작업 효율이 떨어졌습니다. 반복적인 클릭과 화면 전환으로 인해 작업자의 피로도가 높아지고 라벨링 정확도도 저하되는 문제가 있었습니다.",
        solution:
          "드래그 기반 텍스트 선택과 컨텍스트 메뉴를 결합한 라벨링 Flow를 설계하여, 텍스트를 드래그하면 바로 라벨 선택 메뉴가 나타나도록 구현했습니다. window.getSelection API를 활용해 선택된 텍스트의 범위를 정확히 추적하고, 반복 입력 단계를 최소화해 직관적인 인터랙션으로 라벨링 작업을 수행할 수 있도록 개선하여 라벨링 작업 속도와 정확도를 동시에 향상시켰습니다.",
        technologies: ["window.getSelection API", "Context Menu"],
      },
      {
        title: "대규모 텍스트 데이터 렌더링 성능 최적화",
        summary:
          "IntersectionObserver 기반 무한 스크롤과 가상 스크롤링을 도입하여 약 40만 건 규모의 데이터 환경에서도 안정적인 라벨링 작업 성능을 확보했습니다.",
        category: "성능 최적화",
        primaryCategory: "무한 스크롤 최적화",
        background:
          "약 40만 건 규모의 텍스트 데이터를 한 번에 렌더링할 경우 브라우저 멈춤 현상이 발생했고, 초기 로딩 시간이 길며 메모리 사용량이 불필요하게 증가했습니다. DOM 노드가 과도하게 생성되어 스크롤 시 렌더링 부하가 발생하고 사용자 경험이 저하되는 문제가 있었습니다.",
        solution:
          "IntersectionObserver 기반 무한 스크롤을 적용해 약 40만 건 규모의 텍스트 데이터를 렌더링하면서도 브라우저 성능 저하 없이 작업 가능하도록 개선했습니다. react-window를 활용한 가상 스크롤링을 도입해 화면에 보이는 영역의 DOM 노드만 렌더링하여 DOM 노드 수를 최소화하고, 초기 로딩 시간 및 스크롤 시 렌더링 부하를 유의미하게 감소시켜 대용량 데이터 환경에서도 안정적인 라벨링 작업 성능을 확보했습니다.",
        technologies: [
          "IntersectionObserver",
          "Virtual Scrolling",
          "react-window",
        ],
      },
      {
        title: "작업 진행·품질 모니터링 도구 구축",
        summary:
          "실시간 작업자 진행률 및 라벨 품질을 확인할 수 있는 모니터링 대시보드를 구현하여 라벨링 운영 효율 및 데이터 품질 관리 수준을 향상시켰습니다.",
        category: "UX 개선",
        primaryCategory: "품질 관리 대시보드",
        background:
          "대규모 라벨링 작업에서 작업자별 진행 상황과 품질 상태를 한눈에 파악하기 어려웠고, 검수자와 작업자 간 피드백 흐름이 없어 품질 관리 공백이 존재했습니다. 품질 이슈가 발생해도 늦게 발견되어 대량의 데이터를 재작업해야 하는 경우가 발생했습니다.",
        solution:
          "실시간 작업자 진행률 및 라벨 품질을 확인할 수 있는 모니터링 대시보드를 구현하여, 작업자별 완료율·오류율·작업 속도 등을 시각화했습니다. 운영팀이 작업 현황과 품질 이슈를 즉시 파악하고 관리할 수 있는 체계를 마련하여, 품질 문제를 조기에 발견하고 피드백을 제공할 수 있게 되어 라벨링 운영 효율 및 데이터 품질 관리 수준을 향상시켰습니다.",
        technologies: [
          "Dashboard",
          "Quality Management",
          "Real-time Monitoring",
        ],
      },
    ],
    period: "2021.06 - 2021.10",
    role: "프론트엔드 개발 (단독)",
  },
];

export default projectsData;
