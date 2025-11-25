import type { Project } from "../types";

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
        "NX Monorepo 기반 5개 앱 통합 관리 환경 구축",
        "Feature-Sliced Design 기반 도메인 중심 아키텍처로 재구조화",
        "WebSocket 기반 이미지 스트리밍 메모리 누수 분석 및 최적화",
        "커서 기반 무한 스크롤 + 가상 스크롤을 통한 대용량 알람 데이터 처리",
      ],
    },
    structuralContributions: [
      {
        title:
          "고객사별 앱을 통합 관리하기 위한 NX 기반 모노레포 아키텍처 구축",
        summary:
          "단일 VIMS 앱에서 출발해 고객사별 요구가 증가하는 과정에서 공통 기능이 중복되는 문제를 해결하기 위해 NX 기반 모노레포 아키텍처를 구축했습니다. VIMS 공통 기능을 별도 패키지로 분리해 모든 앱에서 조립해 사용하는 구조로 재설계했고, 이를 통해 반복 개발과 유지보수 비용을 크게 줄였습니다.",
        primaryCategory: "개발 생산성 향상",
        problemDescription: [
          "고객사별 POC를 빠르게 대응해야 하는 상황에서, 프로젝트마다 공통 기능이 중복 구현됨",
          "코드가 개별 앱에 분산되어 있어 확장성·재사용성이 떨어지고 유지보수가 어려움",
          "POC 기반 코드를 사내 제품으로 이어갈 때 일관성 유지가 어려운 구조",
          "초기 1개 앱에서는 문제가 크지 않았지만, 앱 수가 늘어나면서 관리 복잡도가 급격히 증가",
        ],
        solutionDescription: [
          "하나의 앱에서 출발해, 요구사항 증가에 따라 점진적으로 모노레포 구조로 확장",
          "NX Monorepo 도입으로 다수 앱을 하나의 워크스페이스에서 관리",
          "VIMS 제품에서 공통적으로 사용하는 기능(모니터링, 알람, 설정, 공통 타입, API 등)을 @saige/vims 형태의 VIMS 공통 패키지로 통합",
          "고객사별 앱은 공통 패키지를 조립해 사용하는 구조로 설계, 앱별로 필요한 커스터마이징은 최소화하고, 가능한 경우 공통 패키지에 기능을 환원하여 중복 코드 제거",
        ],
        reflection: [
          "단일 앱에서 여러 고객사 앱으로 확장되는 과정에서 공통 패키지 구조의 필요성을 명확히 이해함",
          "고객사별 요구사항 차이를 반영하면서도 공통 코드를 최대한 재사용할 수 있도록 구조를 설계",
          "공통 패키지를 중심으로 앱을 조립하는 방식으로 유지보수 비용을 크게 줄임",
          "모노레포 환경에서 의존성 관리와 앱 간 독립성을 유지하는 아키텍처 설계 경험 확보",
        ],
        technologies: ["NX Monorepo", "공통 패키지", "앱별 커스터마이징"],
      },
      {
        title:
          "비즈니스 도메인 혼재로 인한 복잡성을 Feature-Sliced Design 기반 재구조화로 개선",
        summary:
          "기존 Feature-based 구조에서는 도메인이 뒤섞이고 의존성이 복잡해져 유지보수가 점점 어려워졌습니다. 이를 해결하기 위해 도메인 중심의 계층화된 Feature-Sliced Design(FSD)을 도입해 구조를 명확히 재정비했습니다. 그 결과, 기능 간 경계가 분명해지고 확장성과 안정성이 크게 향상되며 팀 전체 개발 효율이 높아졌습니다.",
        primaryCategory: "개발 생산성 향상",
        problemDescription: [
          "기존 Feature-based Architecture에서는 모니터링, 알람, 설정 등 여러 비즈니스 도메인이 한 앱 내부에서 뒤섞이면서 구조적 복잡도 증가",
          "기능이 커질수록 컴포넌트·상태·API·유틸의 경계가 모호해져 어떤 파일을 어디에 두어야 하는지 판단이 어려움",
          "도메인 간 의존 방향이 뒤엉켜 리팩토링 시 다른 모듈에 의도치 않은 영향이 발생",
          "결과적으로, 새로운 요구사항을 반영할 때마다 변경 비용이 커지고 유지보수가 점점 어려워지는 문제 발생",
        ],
        solutionDescription: [
          "Feature-Sliced Design(FSD)을 도입하여 기능 단위에서 도메인 중심·계층화된 구조로 재정비",
          "각 feature 내부에 UI, API, 상태관리, 모델을 응집도 있게 배치해 독립성을 높임",
          "FSD의 의존성 규칙(위는 아래에만 의존)을 적용해 도메인 간 의존 방향을 통제하고 구조적 안정성 확보",
        ],
        reflection: [
          "이론적으로 알고 있던 아키텍처 패턴을 실제 프로젝트에 적용하면서 실무 환경에서의 제약·팀 규모·개발 문화가 아키텍처 선택에 큰 영향을 미친다는 점을 체감",
          "팀원들과 구조 변경의 필요성을 논의하고 설득하는 과정에서 아키텍처의 가치(일관성·확장성)를 함께 이해하는 경험을 하며 협업·커뮤니케이션 역량 또한 향상됨",
        ],
        technologies: ["Feature-Sliced Design", "Layered Architecture"],
      },
      {
        title: "실시간 스트리밍 환경 메모리 누수 해결 및 이미지 처리 구조 개선",
        summary:
          "Chrome DevTools의 Heap Snapshot 분석을 통해 실시간 이미지 스트리밍 과정에서 ObjectURL이 해제되지 않아 누수가 발생하는 지점을 확인하고, 사용 종료 시점에 URL.revokeObjectURL()을 적용해 누수를 제거했습니다.",
        primaryCategory: "성능 최적화",
        problemDescription: [
          "실시간 모니터링 환경에서 고해상도 이미지 스트리밍(FHD/QHD)이 지속적으로 들어오면서 메모리 사용량이 누적됨",
          "장시간 사용(수 시간 ~ 수 일) 시 브라우저 Heap 메모리가 지속적으로 증가하며 성능 저하 및 OOM(Out of Memory) 발생",
          "Chrome DevTools의 Memory 탭에서 Heap Snapshot을 분석한 결과, Blob → ObjectURL로 생성된 URL들이 적절히 해제되지 않고 메모리에 잔존하는 문제 확인",
        ],
        solutionDescription: [
          "Chrome DevTools를 활용한 메모리 프로파일링을 통해 누수의 근본 원인을 정량적으로 분석하고 해결한 경험",
          "Base64 → Blob → ObjectURL 변환 과정에서 발생하는 메모리 잔존 문제를 특정하고, 이미지 사용 종료 직후 URL.revokeObjectURL()을 호출하여 즉시 메모리 해제하도록 로직 개선",
        ],
        reflection: [
          "Chrome DevTools를 활용하여 메모리 누수의 근본 원인을 정확히 파악하고 개선한 경험",
          "단순히 증상을 완화하는 것이 아니라, 메모리 프로파일링을 통해 문제의 본질을 이해하고 체계적으로 접근",
          "단순히 '증상 완화'가 아니라, 문제 원인을 구조적으로 해부하고 개선하는 방식의 성능 최적화 접근법을 체득",
        ],
        technologies: [
          "WebSocket",
          "Blob API",
          "URL.revokeObjectURL",
          "Chrome DevTools Memory Profiler",
        ],
        media: {
          url: "/memory-profiling.png",
          alt: "Chrome DevTools Memory 탭 분석 결과",
          caption: "Heap Snapshot을 통한 메모리 누수 분석",
        },
      },
      {
        title:
          "대용량 알람 데이터 렌더링 지연 문제를 커서 기반 무한 스크롤 구현으로 개선",
        summary:
          "대량의 알람 히스토리(수십만 건)를 효율적으로 탐색할 수 있도록 커서 기반 무한 스크롤과 가상 스크롤 구조로 재설계하고, 실시간 알람 도착 시 시각적 피드백을 제공하여 최신 알람 인지율과 사용성을 크게 향상시켰습니다.",
        primaryCategory: "사용자 경험 개선",
        problemDescription: [
          "한 달 단위로 쌓이는 알람 히스토리가 수십만 건까지 증가하면서 대량 데이터 렌더링 시 UI 지연과 스크롤 버벅임 발생",
          "기존 페이지 기반 호출 방식은 데이터가 최신 순으로 계속 쌓이는 구조에서 중복 호출 문제 발생",
          "사용자가 히스토리 탐색 중 새로운 알람이 도착해도 즉각적으로 인지하기 어려워 중요한 알람 누락",
        ],
        solutionDescription: [
          "TanStack Query의 useInfiniteQuery와 fetchNextPage를 활용해 커서 기반 무한 스크롤 도입",
          "마지막으로 조회한 알람의 queryTime을 커서로 사용하여 중복 없이 다음 페이지를 안정적으로 불러옴",
          "react-window 기반 가상 스크롤을 적용하여 DOM 렌더링 부하를 크게 줄임",
          "탐색 중에도 새로운 알람을 즉시 인지할 수 있도록 펄스(Pulse) 시각 효과와 '최신 알람으로 이동' 버튼을 제안 및 구현",
        ],
        reflection: [
          "단순히 성능 문제를 개선하는 것을 넘어 '사용자가 중요한 알람을 놓치지 않는 경험'을 만드는 데 집중",
          "대규모 데이터 처리 구조를 커서 기반으로 재설계해 무결성을 보장",
          "기술적 해결과 사용자 경험 개선을 균형 있게 달성한 의미 있는 경험",
        ],
        technologies: [
          "TanStack Query",
          "useInfiniteQuery",
          "react-window",
          "Cursor-based Pagination",
        ],
        media: {
          url: "/notification.svg?height=150&width=250&text=실시간+알람+UI+최적화",
          alt: "실시간 알람 UI 최적화 화면",
          caption:
            "TanStack Query와 가상 스크롤이 적용된 실시간 알람 인터페이스",
        },
      },
      {
        title: "결함 인지 경험 개선을 위한 이미지 검수 UX 재설계",
        summary:
          "알람 이미지에서 결함 위치를 찾기 어려운 문제를 해결하기 위해 이미지 컨트롤러 다이얼로그를 통해 확대·축소·이동이 가능한 내비게이션 UI를 구현했습니다. 추가로 사용자의 실제 검수 흐름을 기반으로 ‘원클릭 결함 찾기’ 기능을 제안하고 적용하여 자동으로 결함 좌표로 이동·하이라이트되도록 개선했습니다. 이 구조는 검수 시간을 줄이고 결함 인지 정확도를 높였으며, VIMS뿐 아니라 SAFETY 제품에도 확장 적용되었습니다.",
        primaryCategory: "사용자 경험 개선",
        problemDescription: [
          "알람 이벤트 발생 시 첨부된 이미지에서 실제 결함이나 이상 상황을 육안으로 찾기 어려워 검수 정확도 저하",
          "고해상도 이미지에서 작은 결함을 찾거나 결함 영역이 명확하지 않은 경우 검수자마다 다른 판단",
          "기존 구조에서는 이미지 확대/축소 기능이 없어 정밀한 검수가 불가능",
        ],
        solutionDescription: [
          "이벤트 클릭 시 이미지 컨트롤러 다이얼로그가 열리도록 구현하고 사용자가 직접 이미지를 확대·축소·이동하며 결함 위치를 탐색할 수 있는 이미지 내비게이션 UI 구성",
          "사용자의 실제 사용 플로우를 기반으로 '여러 번 탐색할 필요 없이 버튼 한 번으로 결함 위치로 이동하면 어떨까?'라는 개선 아이디어를 제안",
          "기획/디자인에서 즉시 공감대를 얻어 정식 기능으로 채택",
          "버튼 클릭 → 결함 좌표로 자동 이동/하이라이트되는 UX를 구현하여 사용자의 작업 시간을 단축하고 결함 인지 정확도를 크게 향상",
          "이후 VIMS → SAFETY 제품에도 기능 확대 적용, 고객사 피드백에서 긍정적인 반응 확보",
        ],
        reflection: [
          "요구사항을 그대로 구현하는 수준을 넘어서, 사용자의 실제 업무 맥락을 이해하고 문제를 능동적으로 발견하며 해결책까지 제안한 경험",
          "UX 개선 아이디어를 기획·디자인과 긴밀히 협업하여 제품 전반으로 확장되는 기능을 만들어낸 점이 의미 있었음",
          "제품 신뢰도, 검수 정확도, 사용자 만족도에 직접적인 영향을 준 개선 사례로 자리 잡음",
        ],
        technologies: [
          "Canvas API",
          "Bounding Box",
          "Image Zoom/Pan",
          "Dialog UI",
        ],
      },
      {
        title:
          "웹소켓 기반 오프라인 영상 검수 기능을 위한 커스텀 플레이어 및 Seek 시스템 구현",
        summary:
          "업로드된 영상을 웹소켓 기반 프레임 스트림으로 처리해야 하는 구조에서 일반 비디오 플레이어를 사용할 수 없는 문제를 해결하기 위해 커스텀 영상 플레이어를 구현했습니다. 사용자가 원하는 시점으로 이동할 수 있도록 seek position을 비디오 프로세서와 동기화하는 구조를 설계하고, 상대 이동(±5초) 및 타임라인 제어 기능을 추가해 오프라인 영상 검수의 사용성을 크게 개선했습니다.",
        primaryCategory: "사용자 경험 개선",
        problemDescription: [
          "실시간 모니터링뿐 아니라, 기존에 보유한 영상이나 녹화 데이터를 업로드해 오프라인 검수를 진행하고 싶다는 사용자 니즈가 존재함",
          "사용자가 업로드한 동영상은 웹소켓으로 이미지 프레임 단위로 받아 표시하는 구조였기 때문에, 일반적인 <video> 플레이어의 기본 재생/seek 기능을 사용할 수 없음",
          "특정 시점부터 검수를 시작하거나 '5초 이전', '10초 이후' 등 상대 이동 기능 등이 필요했음",
        ],
        solutionDescription: [
          "웹소켓 기반 스트림 구조에서 <video> 태그 기반 플레이어를 사용할 수 없는 문제를 해결하기 위해 커스텀 플레이어 UI를 직접 구현",
          "특정 시점부터 검수를 시작하거나 '5초 이전', '10초 이후' 등 상대 이동 기능을 지원하기 위해 현재 재생 위치를 기준으로 계산된 seek position을 비디오 프로세서에 전달하는 방식으로 탐색 기능 구현",
        ],
        reflection: [
          "일반적인 동영상 플레이어를 사용할 수 없는 환경에서, 웹소켓 기반 스트리밍 구조에 맞춘 커스텀 플레이어를 직접 설계해야 했던 경험이었음",
          "사용자의 실제 검수 흐름에 맞게 '특정 시점부터 검사 시작', '몇 초 단위 탐색' 등의 기능을 제공해 오프라인 영상 검수의 편의성과 활용도를 크게 높인 개선이었음",
        ],
        technologies: [
          "WebSocket",
          "Canvas API",
          "Custom Video Player",
          "Seekbar UI",
        ],
      },
    ],
    period: "2025.01 - 진행 중",
    role: "프론트엔드 개발",
    frontendDevelopers: 2,
    keywords: [
      "NX Monorepo",
      "Feature-Sliced Design",
      "실시간 데이터 처리",
      "성능 최적화",
    ],
    technologies: [
      "React",
      "TypeScript",
      "NX",
      "Zustand",
      "TanStack Query",
      "ECharts",
      "WebSocket",
      "Vite",
    ],
    codeSnippets: [],
    contributions: [
      {
        category: "사용자 경험 개선",
        percentage: 90,
        color: "#9CCC65",
      },
      {
        category: "성능 최적화",
        percentage: 85,
        color: "#FF7043",
      },
      {
        category: "개발 생산성 향상",
        percentage: 80,
        color: "#42A5F5",
      },
    ],
    coreStack: ["React", "TypeScript", "NX Monorepo", "ECharts", "WebSocket"],
    stateManagement: ["Zustand", "TanStack Query"],
    teamChanges: [],
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
      ],
    },
    structuralContributions: [
      {
        title: "산발적 에러 처리로 인한 시스템 불안정성을 계층화된 구조로 개선",
        summary:
          "전역 에러 바운더리와 API 레벨 에러 핸들러를 구축하여 예상치 못한 에러도 안정적으로 처리",
        primaryCategory: "성능 최적화",
        problemDescription: [
          "MVP 단계에서는 에러 처리가 각 컴포넌트별로 산발적으로 이루어져 일관성이 없음",
          "사용자에게 적절한 피드백을 제공하지 못하는 문제 발생",
          "같은 에러라도 페이지마다 다른 메시지가 표시되어 혼란 야기",
          "GS 인증 1등급 취득을 위한 시스템 안정성 개선 필요",
        ],
        solutionDescription: [
          "전역 에러 바운더리와 API 레벨 에러 핸들러를 구축하여 예상치 못한 에러도 안정적으로 처리",
          "백엔드 개발자와 협업하여 API 에러 코드 체계를 정의하고 일관된 에러 처리 로직 구현",
          "Toast 알림을 통해 사용자에게 적절한 피드백을 제공하여 신뢰성 있는 UX 구축",
          "에러 핸들링 계층 구조를 명확히 설계하여 유지보수성 향상",
        ],
        reflection: [
          "백엔드 개발자와 협업하여 에러 코드 체계를 정의하고 일관된 에러 처리 로직을 구축한 경험",
          "단순히 프론트엔드만의 문제가 아니라 전체 시스템의 안정성을 고려한 설계가 중요",
          "체계적인 에러 핸들링이 사용자 신뢰도와 직결됨을 체감",
        ],
        technologies: [
          "React",
          "TypeScript",
          "Error Boundary",
          "Toast Notification",
          "API Error Handling",
        ],
      },
      {
        title: "안전 이벤트 중요도 구분 부재를 중대/일반 알림 분류로 개선",
        summary:
          "중대/일반 알림 분류 시스템 구현으로 안전 이벤트 우선순위 명확화 및 신속한 대응 지원",
        primaryCategory: "사용자 경험 개선",
        problemDescription: [
          "모든 안전 이벤트가 동일한 방식으로 알림 처리되어 중대한 안전사고와 일반적인 이벤트를 구분하기 어려움",
          "화재나 추락 같은 중대 사고와 단순한 안전모 미착용을 동일한 우선순위로 인식",
          "정말 중요한 상황에 신속한 대응이 어려운 문제",
        ],
        solutionDescription: [
          "안전 이벤트의 중요도에 따라 중대/일반 알림을 분류하여 지원",
          "중대 알림은 화면 가운데 표시하고 빨간색 강조 표시, 소리 알림과 함께 화면 중앙에 고정 표시",
          "일반 알림은 Toast로 관리하여 중요도별로 신속한 인지와 효율적인 대응이 가능하도록 설계",
        ],
        reflection: [
          "사용자의 실제 작업 환경을 이해하고 우선순위를 명확히 구분한 것이 핵심",
          "단순히 알림을 표시하는 것을 넘어, 현장에서 정말 중요한 것이 무엇인지 파악하고 그에 맞는 UI 설계",
          "사용자의 안전과 직결되는 기능이라는 책임감을 느낀 프로젝트",
        ],
        technologies: [
          "React",
          "TypeScript",
          "WebSocket",
          "Material UI",
          "Toast Notification",
        ],
      },
      {
        title: "고정된 모니터링 화면의 한계를 드래그 앤 드롭 기능으로 개선",
        summary:
          "드래그 앤 드롭 기반 카메라 위치 조정 기능 제안 및 구현으로 사용자 편의성 향상",
        primaryCategory: "사용자 경험 개선",
        problemDescription: [
          "카메라 표시 대수 변경은 가능했으나, 레이아웃 내 개별 카메라 위치가 고정",
          "사용자가 원하는 배치로 화면을 구성할 수 없어 작업 효율성 저하",
          "현장의 실제 카메라 배치와 다르게 표시되어 직관성 부족",
        ],
        solutionDescription: [
          "드래그 앤 드롭 기반 카메라 위치 조정 기능을 직접 제안하고 구현",
          "실시간으로 카메라 위치를 자유롭게 조정할 수 있도록 인터랙션 구현",
          "Konva.js를 활용하여 부드러운 드래그 앤 드롭 경험 제공",
          "변경된 레이아웃을 저장하여 다음 접속 시에도 동일한 배치 유지",
        ],
        reflection: [
          "기획에 없던 기능을 제안하고 구현하여 사용자 만족도를 크게 높인 사례",
          "사용자의 실제 니즈를 파악하고 능동적으로 해결책을 제시한 경험이 특히 의미 있었음",
          "작은 개선이 사용자 경험에 큰 영향을 미칠 수 있다는 것을 배움",
        ],
        technologies: [
          "React",
          "TypeScript",
          "Konva.js",
          "Drag and Drop API",
          "WebSocket",
        ],
      },
    ],
    period: "2023.05 - 2024.12",
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
      "WebSocket",
      "Konva.js",
      "Webpack",
    ],
    codeSnippets: [],
    contributions: [
      {
        category: "사용자 경험 개선",
        percentage: 85,
        color: "#9CCC65",
      },
      {
        category: "성능 최적화",
        percentage: 75,
        color: "#FF7043",
      },
      {
        category: "개발 생산성 향상",
        percentage: 70,
        color: "#42A5F5",
      },
    ],
    coreStack: ["React", "TypeScript", "Material UI", "WebSocket"],
    stateManagement: ["X-view-model"],
    teamChanges: [],
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
        "CPU/GPU/메모리/네트워크별 독립 커스텀 훅 설계로 관심사 분리",
        "리소스별 데이터 구독 최적화로 필요 컴포넌트만 리렌더링",
      ],
    },
    structuralContributions: [
      {
        title: "여러 페이지의 차트 중복 코드를 BaseChart 컴포넌트로 모듈화",
        summary: "ECharts 기반 BaseChart 컴포넌트를 개발하여 모듈화",
        primaryCategory: "개발 생산성 향상",
        problemDescription: [
          "수율 대시보드, 리소스 모니터링 등 여러 페이지에서 라인차트, 파이차트, 게이지차트를 각각 개별적으로 구현하면서 중복 코드 발생",
          "같은 기능의 차트라도 페이지마다 다른 스타일과 옵션을 가지고 있어 디자인 일관성 저하",
          "디자이너의 커스텀 요구사항을 반영하기 위해 각 페이지를 모두 수정해야 하는 비효율",
        ],
        solutionDescription: [
          "ECharts 기반의 BaseChart 컴포넌트를 개발하여 모듈화",
          "디자이너 요구사항을 반영하기 위해 Legend를 별도 컴포넌트화",
          "ECharts 인스턴스를 직접 참조하여 커스터마이징이 가능하도록 설계",
          "기존 ECharts의 Legend 제한을 극복하고 프로젝트 요구사항에 맞는 유연한 차트 시스템 구축",
        ],
        reflection: [
          "재사용 가능한 컴포넌트를 설계하면서 추상화 레벨을 어디까지 가져갈지 고민",
          "너무 추상화하면 사용하기 어렵고, 너무 구체적이면 재사용성이 떨어지는 균형점을 찾는 것이 중요",
          "팀 전체의 개발 생산성에 직접적인 영향을 미치는 인프라성 컴포넌트를 만든 경험",
        ],
        technologies: [
          "React",
          "TypeScript",
          "ECharts",
          "Custom Legend",
          "Reusable Components",
        ],
        media: {
          url: "/monitoring.svg?height=120&width=200&text=리소스+모니터링+UI",
          alt: "리소스 모니터링 UI 화면",
          caption: "리소스 모니터링 UI 화면",
        },
      },
      {
        title:
          "실시간 데이터 업데이트의 불필요한 렌더링을 리소스별 커스텀 훅으로 최적화",
        summary:
          "리소스별 커스텀 훅 설계로 불필요한 렌더링 80% 감소 및 실시간 성능 향상",
        primaryCategory: "성능 최적화",
        problemDescription: [
          "CPU, GPU, 메모리, 네트워크 등 다양한 리소스 데이터가 실시간으로 업데이트되면서 모든 컴포넌트가 불필요하게 리렌더링되어 성능 저하",
          "하나의 리소스 데이터가 변경되어도 전체 대시보드가 리렌더링되면서 차트 애니메이션이 끊기고 사용자 경험 저하",
          "장시간 모니터링 시 브라우저 성능이 점점 느려지는 현상 발생",
        ],
        solutionDescription: [
          "리소스별 커스텀 훅(useHook)을 설계하여 각 훅은 해당 리소스 데이터만 구독",
          "상태 변경 시 필요한 컴포넌트만 리렌더링되도록 최적화",
          "React.memo와 useMemo를 활용하여 컴포넌트 레벨에서도 최적화 적용",
          "차트 컴포넌트와 결합하여 불필요한 렌더링을 최소화하고 실시간 모니터링 성능 향상",
        ],
        reflection: [
          "React의 렌더링 최적화 기법을 실전에서 적용하면서 성능 개선의 중요성을 체감",
          "단순히 기능을 구현하는 것을 넘어, 사용자 경험을 위해 성능을 고려한 설계가 얼마나 중요한지 배움",
          "실시간 데이터 처리에서 관심사 분리와 상태 관리 최적화의 중요성 이해",
        ],
        technologies: [
          "React",
          "TypeScript",
          "TanStack Query",
          "React.memo",
          "useMemo",
          "Custom Hooks",
        ],
      },
      {
        title:
          "복잡한 차트 데이터 시각화를 직관적인 디자인과 인터랙션으로 개선",
        summary:
          "직관적인 차트 디자인 및 인터랙션 개선으로 정보 인식 속도 향상",
        primaryCategory: "사용자 경험 개선",
        problemDescription: [
          "다양한 리소스 데이터를 차트로 시각화하면서 사용자가 중요한 정보를 빠르게 파악하기 어려움",
          "여러 차트가 동시에 표시될 때 어떤 정보가 중요한지 구분하기 어렵고, 차트 간의 관계를 이해하기 힘듦",
        ],
        solutionDescription: [
          "사용자가 중요한 정보를 빠르게 파악할 수 있도록 차트 디자인 개선",
          "호버 시 상세 정보를 표시하는 인터랙션 추가",
          "Legend를 커스터마이징하여 데이터 계열을 명확히 구분",
          "색상과 레이블을 일관되게 적용하여 사용자가 차트를 쉽게 이해할 수 있도록 개선",
        ],
        reflection: [
          "데이터 시각화에서 단순히 데이터를 표시하는 것을 넘어, 사용자가 정보를 빠르게 이해할 수 있도록 디자인하는 것이 중요",
          "색상, 레이블, 인터랙션 등 세부적인 요소들이 전체 사용자 경험에 큰 영향을 미침",
        ],
        technologies: [
          "React",
          "TypeScript",
          "ECharts",
          "Custom Legend",
          "Data Visualization",
        ],
      },
    ],
    period: "2022.11 - 2023.01",
    role: "프론트엔드 개발",
    frontendDevelopers: 4,
    keywords: [
      "실시간 모니터링",
      "ECharts 시각화",
      "성능 최적화",
      "차트 라이브러리",
      "데이터 대시보드",
    ],
    technologies: [
      "React",
      "TypeScript",
      "TanStack Query",
      "ECharts",
      "Prometheus",
      "Vite",
    ],
    codeSnippets: [],
    contributions: [
      {
        category: "사용자 경험 개선",
        percentage: 75,
        color: "#9CCC65",
      },
      {
        category: "성능 최적화",
        percentage: 85,
        color: "#FF7043",
      },
      {
        category: "개발 생산성 향상",
        percentage: 90,
        color: "#42A5F5",
      },
    ],
    coreStack: ["React", "TypeScript", "ECharts"],
    stateManagement: ["Recoil", "TanStack Query"],
    teamChanges: [],
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
        "사내 3개 제품 점진적 도입으로 UI 일관성 향상",
      ],
    },
    structuralContributions: [
      {
        title:
          "제품 간 UI 일관성 부족과 중복 개발을 디자인 시스템 구축으로 개선",
        summary:
          "재사용 가능한 컴포넌트 라이브러리 구축으로 UI 일관성 및 개발 효율성 향상",
        primaryCategory: "개발 생산성 향상",
        problemDescription: [
          "VIMS, SAFETY, VISION 3개 제품에서 각각 다른 스타일의 버튼, 폼, 모달 등을 개발하면서 UI 일관성 저하",
          "중복 개발로 인한 비효율 발생",
          "같은 기능의 버튼이라도 제품마다 다른 색상, 크기, 인터랙션을 가지고 있어 사용자 혼란",
          "브랜딩 가이드라인이 제품별로 다르게 적용",
        ],
        solutionDescription: [
          "사내 여러 제품에서 공통으로 사용할 수 있는 Button, Switch, Banner 등의 기본 컴포넌트부터 복합 컴포넌트까지 체계적으로 설계",
          "각 컴포넌트는 props 인터페이스를 명확히 정의하고, 다양한 variant와 size 옵션을 제공하여 다양한 사용 사례에 대응",
          "Storybook을 활용하여 컴포넌트 문서화와 시각적 테스트 진행",
          "사내 3개 제품에 점진적으로 도입하여 UI 일관성 향상",
        ],
        reflection: [
          "디자인 시스템을 구축하면서 단순히 컴포넌트를 만드는 것이 아니라, 팀 전체의 개발 문화와 협업 방식을 개선하는 것이 중요",
          "디자이너와 개발자 간의 소통을 원활하게 하는 것이 핵심",
          "장기적인 관점에서 팀의 생산성을 높이는 인프라 구축의 중요성 이해",
        ],
        technologies: [
          "React",
          "TypeScript",
          "Storybook",
          "Chromatic",
          "MUI",
          "Rollup",
          "Design Tokens",
        ],
      },
      {
        title:
          "디자인 토큰 체계 부족을 디자이너와 협업하여 카테고라이징으로 개선",
        summary:
          "디자이너-개발자 협업을 통한 체계적인 토큰 분류로 협업 효율성 향상",
        primaryCategory: "개발 생산성 향상",
        problemDescription: [
          "디자인 토큰은 관리되고 있었지만, 토큰의 카테고라이징이 명확하지 않아 개발자와 디자이너 간 소통에 어려움",
          "색상, 타이포그래피, 간격, 그림자 등의 디자인 요소를 체계적으로 분류하지 못함",
          "어떤 토큰을 언제 사용해야 하는지 판단하기 어렵고, 일관성 있는 디자인 적용이 힘듦",
        ],
        solutionDescription: [
          "디자이너와 협업하여 디자인 토큰의 카테고라이징을 개발자와 디자이너 모두가 공감할 수 있게 체계화",
          "색상, 타이포그래피, 간격, 그림자 등의 디자인 요소를 명확히 분류",
          "Primitive 토큰과 Theme 토큰을 분리하여 테마 변경과 다크모드 지원이 용이하도록 설계",
          "Figma에서 사용하는 토큰 네이밍과 코드에서 사용하는 토큰 네이밍을 일치시켜 협업 효율성 향상",
        ],
        reflection: [
          "디자인 토큰은 단순한 변수가 아니라 팀 간 협업을 위한 공통 언어",
          "디자이너와 개발자가 같은 언어로 소통할 수 있게 하는 것이 디자인 시스템의 핵심",
          "체계적인 분류와 명명 규칙이 협업 효율성에 직접적인 영향을 미침",
        ],
        technologies: [
          "React",
          "TypeScript",
          "Design Tokens",
          "Figma",
          "Theme System",
        ],
      },
      {
        title: "디자인 시스템 도입 시 학습 비용을 Storybook 문서화로 최소화",
        summary:
          "Storybook 기반 인터랙티브 문서화 시스템 구축으로 개발자 학습 비용 감소",
        primaryCategory: "사용자 경험 개선",
        problemDescription: [
          "디자인 시스템을 처음 도입하면서 개발자들이 새로운 컴포넌트와 디자인 토큰을 학습하는 데 시간이 오래 걸림",
          "어떤 컴포넌트를 언제 사용해야 하는지 판단하기 어려움",
          "문서화가 부족하여 컴포넌트의 사용법을 파악하기 위해 코드를 직접 읽어야 하는 불편함",
        ],
        solutionDescription: [
          "Storybook을 활용하여 각 컴포넌트의 사용법, props, 다양한 variant를 인터랙티브하게 확인할 수 있는 문서화 시스템 구축",
          "실제 사용 예시와 함께 코드 스니펫을 제공하여 개발자들이 쉽게 컴포넌트를 이해하고 적용할 수 있도록 개선",
          "Chromatic을 통해 시각적 회귀 테스트를 자동화하여 컴포넌트 품질 유지",
        ],
        reflection: [
          "좋은 문서화가 디자인 시스템의 성공에 얼마나 중요한지 배움",
          "단순히 컴포넌트를 만드는 것을 넘어, 사용자(개발자)가 쉽게 이해하고 적용할 수 있도록 돕는 것이 핵심",
          "인터랙티브한 문서가 학습 비용을 크게 줄일 수 있음을 경험",
        ],
        technologies: [
          "React",
          "TypeScript",
          "Storybook",
          "Chromatic",
          "MDX",
          "Documentation",
        ],
      },
      {
        title: "디자인 시스템 번들 크기 문제를 Tree Shaking으로 최적화",
        summary:
          "Tree Shaking 및 개별 컴포넌트 import 지원으로 번들 크기 최적화",
        primaryCategory: "성능 최적화",
        problemDescription: [
          "디자인 시스템 라이브러리의 번들 크기가 커지면서 각 제품의 초기 로딩 시간 증가",
          "모든 컴포넌트를 한 번에 import하면 사용하지 않는 컴포넌트까지 번들에 포함되어 불필요한 용량 차지",
        ],
        solutionDescription: [
          "Rollup을 활용하여 각 컴포넌트를 개별 모듈로 빌드",
          "Tree Shaking을 지원하여 사용하지 않는 컴포넌트는 번들에 포함되지 않도록 최적화",
          "개발자가 필요한 컴포넌트만 선택적으로 import할 수 있도록 구조 개선",
        ],
        reflection: [
          "라이브러리를 개발할 때 번들 크기와 성능을 고려하는 것이 얼마나 중요한지 배움",
          "사용자(개발자)의 프로젝트 성능에 직접적인 영향을 미치기 때문에 최적화가 필수",
          "Tree Shaking과 모듈 분리를 통한 성능 최적화 경험",
        ],
        technologies: [
          "React",
          "TypeScript",
          "Rollup",
          "Tree Shaking",
          "Code Splitting",
        ],
      },
    ],
    period: "2023.05 - 진행 중",
    role: "디자인 시스템 컨트리뷰터",
    frontendDevelopers: 3,
    keywords: [
      "디자인 시스템",
      "컴포넌트 라이브러리",
      "Storybook",
      "Chromatic",
      "UI 일관성",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Storybook",
      "Chromatic",
      "MUI",
      "Rollup",
    ],
    codeSnippets: [],
    contributions: [
      {
        category: "사용자 경험 개선",
        percentage: 70,
        color: "#9CCC65",
      },
      {
        category: "성능 최적화",
        percentage: 65,
        color: "#FF7043",
      },
      {
        category: "개발 생산성 향상",
        percentage: 90,
        color: "#42A5F5",
      },
    ],
    coreStack: ["React", "TypeScript", "MUI", "Storybook", "Chromatic"],
    stateManagement: [],
    teamChanges: [],
  },
  {
    projectId: 4,
    companyId: "media-corpus",
    title: "텍스트 윤리성 평가 시스템",
    subtitle:
      "국립 국어원 - 비윤리적 표현 말뭉치 연구 분석 및 시범 구축 사업 참여",
    image: "/media-logo-2.png",
    background:
      "100명 규모의 사용자 테스트를 주도하며, 150,000건 이상의 윤리성 평가 데이터를 수집·운영한 웹 기반 평가 시스템 개발 프로젝트입니다.",
    detailedDescription: {
      results: [
        "3단 UI 구조(문단/문장/평가 폼) 설계로 복잡한 평가 업무 단순화",
        "평가 대상 문장 볼록 처리 + 키워드 색상 강조로 정보 인식 속도 개선",
        "Redux Toolkit + Duck Pattern 기반 Feature 모듈화로 코드 응집도 향상",
        "150,000건 윤리성 평가 데이터 수집 완료, 평가 정확도 및 일관성 확보",
      ],
    },
    structuralContributions: [
      {
        title: "복잡한 텍스트 윤리성 평가 업무를 3단 UI 구조로 단순화",
        summary:
          "3단 UI 구조 설계 및 직관적인 정보 계층 구조로 평가 효율성 향상",
        primaryCategory: "사용자 경험 개선",
        problemDescription: [
          "텍스트 윤리성 평가는 문단 전체를 읽고, 특정 문장을 찾아, 윤리성을 판단하는 복잡한 과정으로 사용자 혼란",
          "평가 대상 문장과 일반 문장을 구분하기 어려워 작업자가 잘못된 문장을 평가하거나 중요 키워드를 놓치는 경우 빈번",
          "작업 진행 상황을 파악하기 어려워 사용자들이 중도에 포기하는 비율이 높음",
        ],
        solutionDescription: [
          "평가 효율성과 정확도를 높이기 위해 3단 UI 구조(문단/문장/평가 폼)를 설계하고 단계별 UX 흐름 구현",
          "평가 대상 문장은 볼록 처리하고 키워드는 색상으로 강조하여 시각적으로 구분",
          "좌우 영역을 정보 탐색과 입력 동작으로 분리하여 사용자 학습 비용 최소화",
          "진행률 표시와 작업 정보 제공으로 사용자 몰입도 향상",
        ],
        reflection: [
          "비개발자 사용자를 위한 직관적인 UI를 설계하면서 사용자 중심 사고의 중요성을 깊이 이해",
          "복잡한 작업을 단순하고 명확한 단계로 나누는 것이 사용자 경험에 얼마나 큰 영향을 미치는지 배움",
          "100명 규모의 사용자 테스트를 통해 실제 사용자 피드백을 반영한 UI 개선 경험",
        ],
        technologies: [
          "React",
          "JavaScript",
          "Redux",
          "Ant Design",
          "3-tier UI Architecture",
        ],
        media: {
          url: "/media-logo-2.png",
          alt: "평가 시스템 UI 화면",
          caption: "평가 시스템 UI 화면",
        },
      },
      {
        title: "단독 개발의 코드 복잡성을 Feature-based 아키텍처로 개선",
        summary:
          "Feature-based 모듈 구조로 상태 관리 구조를 개선하여 코드 응집도 강화",
        primaryCategory: "개발 생산성 향상",
        problemDescription: [
          "단독 개발 프로젝트로 진행하면서 초기에는 컴포넌트와 상태 관리가 한 곳에 섞여있어 코드 구조가 복잡",
          "코드 리뷰 없이 진행되다 보니 일관성 없는 패턴이 혼재",
          "기능이 추가될수록 유지보수가 어려워지는 상황",
          "평가 기준이 변경되거나 새로운 평가 항목이 추가될 때 전체 코드를 수정해야 하는 확장성 부족",
        ],
        solutionDescription: [
          "Redux Toolkit + Duck Pattern 기반으로 상태 관리 구조를 개선하여 코드 응집도 강화",
          "Feature 단위로 컴포넌트/상태/API를 모듈화하여 명확히 분리",
          "기능별 모듈 아키텍처 설계로 신규 기능 추가 및 확장이 용이한 구조 구축",
          "각 기능 모듈은 독립적으로 개발·테스트·배포가 가능하도록 설계",
        ],
        reflection: [
          "단독 개발이지만 확장 가능한 아키텍처를 설계하는 것의 중요성 배움",
          "초기에 시간을 들여 구조를 잘 설계하면 나중에 기능을 추가할 때 훨씬 효율적",
          "코드 리뷰 없이도 일관성을 유지하기 위해 명확한 패턴과 규칙을 수립하는 것이 중요",
        ],
        technologies: [
          "React",
          "JavaScript",
          "Redux Toolkit",
          "Duck Pattern",
          "Feature-based Architecture",
        ],
      },
      {
        title: "대량 평가 데이터의 성능 저하를 페이지네이션으로 개선",
        summary: "페이지네이션 및 지연 로딩 적용으로 초기 로딩 시간 단축",
        primaryCategory: "성능 최적화",
        problemDescription: [
          "150,000건 이상의 평가 데이터를 처리하면서 데이터 로딩과 렌더링 성능 저하",
          "평가 진행 상황을 표시하거나 통계를 계산할 때 브라우저가 느려지는 현상 발생",
        ],
        solutionDescription: [
          "대량의 평가 데이터를 한 번에 로딩하지 않고 페이지네이션을 적용하여 필요한 데이터만 로딩",
          "통계 계산은 백엔드에서 처리하고 프론트엔드에서는 결과만 표시하도록 개선",
          "지연 로딩을 적용하여 사용자가 스크롤할 때 데이터를 점진적으로 로드",
        ],
        reflection: [
          "대량 데이터 처리에서 프론트엔드와 백엔드의 역할 분담이 중요",
          "모든 것을 프론트엔드에서 처리하려고 하지 않고, 적절히 백엔드에 위임하는 것이 성능 최적화의 핵심",
          "페이지네이션과 지연 로딩을 통한 성능 최적화 경험",
        ],
        technologies: [
          "React",
          "JavaScript",
          "Redux",
          "Pagination",
          "Lazy Loading",
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
    contributions: [
      {
        category: "사용자 경험 개선",
        percentage: 90,
        color: "#9CCC65",
      },
      {
        category: "성능 최적화",
        percentage: 70,
        color: "#FF7043",
      },
      {
        category: "개발 생산성 향상",
        percentage: 80,
        color: "#42A5F5",
      },
    ],
    coreStack: ["React", "JavaScript", "Ant Design"],
    stateManagement: ["Redux"],
    teamChanges: [],
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
        "메모리 사용량 최적화 및 렌더링 부하 분산으로 장시간 작업 연속성 보장",
      ],
    },
    structuralContributions: [
      {
        title: "복잡한 텍스트 라벨링 작업을 드래그 기반 시스템으로 단순화",
        summary:
          "드래그 기반 라벨링 시스템 구축으로 작업 효율 개선 및 라벨링 정확도 향상",
        primaryCategory: "사용자 경험 개선",
        problemDescription: [
          "텍스트 내에서 원하는 영역을 직접 선택하고 라벨 값을 저장할 수 있는 기능 필요",
          "기존의 클릭 기반 라벨링 방식은 정확한 범위 지정이 어렵고, 여러 단계를 거쳐야 하는 불편함",
          "긴 텍스트에서 특정 구간을 선택하는 것이 어려워 작업 효율 저하 및 오류 빈번",
        ],
        solutionDescription: [
          "window.getSelection API를 활용하여 텍스트 드래그 범위를 인식한 후 컨텍스트 메뉴를 통해 라벨링 가능하도록 구현",
          "드래그 영역에 실시간 시각적 피드백을 제공하여 라벨링 정확도 향상",
          "직관적인 인터랙션 설계로 사용자가 별도 학습 없이도 자연스럽게 라벨링 수행 가능",
          "실수 시 쉽게 수정할 수 있는 UX 함께 구현",
        ],
        reflection: [
          "사용자가 자연스럽게 느끼는 인터랙션을 구현하는 것이 얼마나 중요한지 배움",
          "드래그라는 익숙한 동작을 활용하여 복잡한 라벨링 작업을 단순화한 것이 사용자 만족도를 크게 향상",
          "Web API를 활용한 네이티브 인터랙션 구현 경험",
        ],
        technologies: [
          "React",
          "JavaScript",
          "window.getSelection API",
          "Context Menu",
          "Visual Feedback",
        ],
        media: {
          url: "/media-logo-1.png",
          alt: "드래그 기반 라벨링 UI 화면",
          caption: "드래그 기반 라벨링 UI 화면",
        },
      },
      {
        title: "400,000건 대용량 데이터 렌더링 문제를 무한 스크롤로 개선",
        summary:
          "IntersectionObserver 기반 무한 스크롤을 구현하여 대용량 데이터 렌더링 문제 해결",
        primaryCategory: "성능 최적화",
        problemDescription: [
          "400,000건의 텍스트 데이터를 한 번에 렌더링하면 브라우저가 멈추거나 매우 느려지는 문제",
          "초기 로딩 시간이 30초 이상 걸리고, 메모리 사용량이 급격히 증가하여 장시간 작업 불가능",
          "스크롤 시 버벅거림이 심해 사용자가 원하는 위치를 찾기 어렵고, 브라우저 탭이 자주 크래시",
        ],
        solutionDescription: [
          "IntersectionObserver 기반 무한 스크롤을 구현하여 대용량 데이터 렌더링 문제 해결",
          "초기 30개 문장만 렌더링하고 스크롤 시 점진적 로딩으로 성능 부담 최소화",
          "메모리 사용량 최적화 및 렌더링 부하를 분산",
          "가상 스크롤링 기법을 적용하여 DOM 노드 수를 일정하게 유지",
        ],
        reflection: [
          "대용량 데이터 처리에서 성능 최적화의 중요성을 체감",
          "사용자는 데이터가 얼마나 많은지 신경 쓰지 않고, 단지 빠르고 부드러운 경험을 원함",
          "IntersectionObserver와 가상 스크롤링을 활용하여 이를 해결한 경험이 특히 의미 있었음",
        ],
        technologies: [
          "React",
          "JavaScript",
          "IntersectionObserver",
          "Virtual Scrolling",
          "Lazy Loading",
        ],
      },
      {
        title: "라벨링 품질 관리 부재를 실시간 모니터링 대시보드로 개선",
        summary: "실시간 품질 관리 대시보드 구축으로 프로젝트 전체 품질 향상",
        primaryCategory: "개발 생산성 향상",
        problemDescription: [
          "대량의 라벨링 작업을 진행하면서 작업 품질을 관리하고 검수하는 체계가 부족",
          "오류가 발생해도 늦게 발견되는 문제",
          "작업자별 진행 상황과 품질을 실시간으로 모니터링할 수 없어 프로젝트 관리 어려움",
        ],
        solutionDescription: [
          "작업자별 진행 상황, 라벨링 품질, 오류율 등을 실시간으로 모니터링할 수 있는 대시보드 구축",
          "검수자가 작업 결과를 빠르게 확인하고 피드백을 제공할 수 있는 워크플로우 설계",
          "전체 프로젝트의 품질을 향상시키는 관리 체계 수립",
        ],
        reflection: [
          "대규모 프로젝트에서 품질 관리 체계의 중요성 이해",
          "실시간 모니터링을 통해 문제를 조기에 발견하고 해결할 수 있음",
          "데이터 수집 프로젝트에서 품질 관리가 최종 결과물에 미치는 영향이 큼",
        ],
        technologies: [
          "React",
          "JavaScript",
          "Redux",
          "Dashboard",
          "Quality Management",
        ],
      },
    ],
    period: "2021.06 - 2021.10",
    role: "프론트엔드 개발 (단독)",
    frontendDevelopers: 1,
    keywords: [
      "대용량 데이터 처리",
      "드래그 라벨링",
      "무한 스크롤",
      "품질 관리",
      "단독 개발",
    ],
    technologies: ["React", "JavaScript", "Redux", "Ant Design", "Webpack"],
    codeSnippets: [],
    contributions: [
      {
        category: "사용자 경험 개선",
        percentage: 90,
        color: "#9CCC65",
      },
      {
        category: "성능 최적화",
        percentage: 85,
        color: "#FF7043",
      },
      {
        category: "개발 생산성 향상",
        percentage: 75,
        color: "#42A5F5",
      },
    ],
    coreStack: ["React", "JavaScript", "Ant Design"],
    stateManagement: ["Redux"],
    teamChanges: [],
  },
];

export default projectsData;
