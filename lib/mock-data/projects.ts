import type { Project } from "../types";

export const projectsData: Project[] = [
  {
    projectId: 1,
    companyId: "saige",
    title: "영상 기반 결함·이상 동작 실시간 모니터링 시스템",
    subtitle: "사내 제품 - SAIGE VIMS 개발",
    image: "/vims-logo.svg",
    background:
      "산업용 AI 기반 영상 검사·모니터링 시스템을 통합 관리하는 웹 플랫폼입니다. NX Monorepo 기반으로 5개 고객사 앱을 운영하며, 실시간 모니터링부터 리포트, 알림, 설정 관리까지 전반적인 기능을 제공합니다.",
    projectReflection:
      "초기 설계부터 개발을 주도하며 모노레포 아키텍처, FSD 구조 도입, 실시간 성능 최적화 등 프론트엔드 전반의 기술적 의사결정을 경험했습니다. 특히 고객사별 요구사항과 VOC를 반영하면서 사용자 중심 개발의 중요성을 깊이 이해하게 되었고, 기술적 해결과 UX 개선을 균형 있게 달성하는 방법을 체득했습니다.",
    structuralContributions: [
      {
        title:
          "고객사별 앱을 통합 관리하기 위한 NX 기반 모노레포 아키텍처 구축",
        summary:
          "5개 고객사 앱의 공통 기능을 패키지화하고 확장 가능한 모노레포 구조를 구축해 POC부터 제품화까지 일관된 개발 체계를 마련했습니다.",
        category: "아키텍처",
        primaryCategory: "모노레포 아키텍처",
        problemDescription: [
          "고객사별로 공통 기능이 중복 구현되어 개발 리소스가 낭비됨",
          "코드가 앱마다 분산되어 있어 유지보수·기능 확장 시 작업 범위 파악이 어려움",
          "커스터마이징된 컴포넌트가 섞여 변경 추적과 운영 안정성이 떨어짐",
        ],
        solutionDescription: [
          "5개 고객사 앱을 NX Monorepo로 통합해 구조를 표준화하여 신규 POC 생성 시간을 약 40% 단축",
          "모니터링·알람·설정 등 공통 기능을 '@saige/vims' 패키지로 모듈화하여 중복 코드 30~40% 감소 및 기능 개선 반영 일관성 확보",
          "API 응답 차이를 제네릭 타입으로 표준화하여 고객사별 API 대응 시간 단축 및 요구사항 변경 수용성 향상",
          "공통 컴포넌트를 기본 레이어로 두고 고객사별 override 구조로 설계해 커스터마이징 작업량을 줄이고 제품화 단계에서 기능 추가·변경을 안정적으로 진행",
          "고객사별 커스터마이징 컴포넌트·훅에 prefix 규칙을 도입해 변경 추적과 디버깅 효율을 높여 제품화 이후에도 확장 가능한 관리 체계를 구축",
        ],
        technologies: ["NX Monorepo", "@saige/vims 공통 패키지"],
      },
      {
        title:
          "비즈니스 도메인 혼재로 인한 복잡성을 Feature-Sliced Design 기반 재구조화로 개선",
        summary:
          "도메인 중심의 Feature-Sliced Design을 도입해 기능 간 경계를 명확히 하고 확장성을 향상시켰습니다.",
        category: "아키텍처",
        primaryCategory: "도메인 구조화",
        problemDescription: [
          "기존 Feature 기반 구조에서 모니터링·알람·설정 등 도메인이 섞여 계층 경계가 흐려짐",
          "기능 확장에 따라 컴포넌트·상태·API·유틸 간 책임 구분이 모호해지면서 유지보수 비용 증가",
          "도메인 간 상호 참조가 누적되어 리팩토링 시 사이드 이펙트 발생 위험 증가",
        ],
        solutionDescription: [
          "Feature-Sliced Design(FSD) 도입으로 도메인 중심 계층 구조를 재정비해 기능 추가 시 수정 범위 축소와 리팩토링 리스크 감소",
          "각 feature 내부에 UI·API·상태·모델을 응집도 있게 배치해 유지보수 속도 향상과 신규 기능 개발 시간 절감",
          "FSD 의존성 규칙 적용으로 도메인 간 참조 흐름을 통제해 배포 안정성 향상",
        ],
        technologies: ["Feature-Sliced Design"],
      },
      {
        title:
          "경고 border 애니메이션의 과도한 Repaint를 GPU 합성 방식으로 개선",
        summary:
          "스트리밍 카드의 경고 border 애니메이션이 background-position 기반으로 동작하며 매 프레임 Paint를 유발하던 문제를 GPU 합성 기반 방식으로 전환해 해결했습니다.",
        category: "성능 최적화",
        primaryCategory: "렌더링 최적화",
        problemDescription: [
          "실시간 WebSocket 스트리밍 환경에서 특정 카드의 경고 border 애니메이션이 background-position 기반으로 동작하며 매 프레임 Paint 강제 발생",
          "Paint 부하가 스트리밍 프레임 갱신과 겹치며 CPU 과부하 및 GC 지연 발생",
          "장시간 사용 시 메모리 누적으로 OOM(Out of Memory) 위험 증가",
        ],
        solutionDescription: [
          "애니메이션 방식을 Paint 발생 방식(background-position) → GPU 합성 기반(transform) 방식으로 전환",
          "::before + conic-gradient로 테두리를 분리해 카드 본체 렌더링에 영향을 주지 않도록 구조 개선",
          "Repaint 완전 제거 및 CPU 사용률 감소로 스트리밍 환경 안정성 확보",
          "메모리 증가 및 GC 부하 해소로 장시간 사용 시에도 안정적인 성능 유지",
          "스크롤·탭 전환 등 UI 반응성이 개선되어 다수 스트리밍 카드 동시 동작 환경에서도 끊김 없는 렌더링 실현",
        ],
        technologies: [
          "Chrome DevTools Performance",
          "GPU Compositing",
          "CSS Transform",
          "conic-gradient",
        ],
        articleUrl:
          "https://www.notion.so/WebSocket-Repaint-2c54c99a0f8180d89b96d40c315de060?source=copy_link",
      },
      {
        title: "Web Worker 도입으로 메인 스레드 CPU 과부하 및 UI 지연 해결",
        summary:
          "base64 프레임 디코딩 로직을 Web Worker로 분리하여 메인 스레드의 CPU·메모리 부담을 완화하고 UI 반응성을 개선했습니다.",
        category: "성능 최적화",
        primaryCategory: "스레드 분리 최적화",
        problemDescription: [
          "기존 구조는 base64 프레임 디코딩(파싱/변환/Blob 생성)을 메인 스레드가 모두 처리하며 CPU 과부하 발생",
          "다채널·고 FPS 환경에서 CPU 부하 → GC 지연 → 메모리 누적 → OOM으로 이어지는 병목 발생",
          "프레임 처리 중 UI 인터랙션(버튼 클릭, 스크롤 등)이 지연되거나 응답 없음 현상 발생",
        ],
        solutionDescription: [
          "Web Worker 기반 병렬 처리 구조로 전환해 CPU·메모리 집약 로직을 Worker로 이동",
          "메인 스레드는 렌더링 중심의 최소 역할만 수행하도록 분리해 UI 반응성 확보",
          "postMessage로 처리된 프레임을 메인 스레드에 전달하여 사용자 인터랙션 개선",
          "Worker 내부에서 메모리 관리를 독립적으로 처리하여 메인 스레드의 GC 빈도 감소 및 전체 앱 안정성 향상",
        ],
        technologies: [
          "Web Worker",
          "postMessage",
          "base64 Decoding",
          "Blob API",
        ],
        articleUrl:
          "https://www.notion.so/Web-Worker-CPU-2c54c99a0f81802aad55e05b2137a19f?source=copy_link",
      },
      {
        title: "Konva 기반 실시간 오버레이 렌더링 성능·메모리 최적화",
        summary:
          "조건부 렌더링 대신 visible 토글로 Node 재생성을 제거하고, 레이어 분리 및 명시적 리소스 해제로 메모리·성능을 안정화했습니다.",
        category: "메모리 최적화",
        primaryCategory: "Canvas 렌더링 최적화",
        problemDescription: [
          "기존 VIMS Konva 오버레이는 조건부 렌더링 기반으로 Node를 매번 재생성하며 리소스 누적",
          "단일 Layer 구조로 인해 고 FPS 환경에서 불필요한 redraw가 빈번히 발생하며 성능 저하",
          "Konva Node/Canvas 리소스가 명시적으로 해제되지 않아 메모리 급증 위험 존재",
        ],
        solutionDescription: [
          "조건부 렌더링 대신 visible 토글로 Node 재생성을 제거하여 불필요한 객체 생성 방지",
          "Stage 언마운트 시 destroy()를 명시적으로 호출해 Konva 리소스를 완전히 해제하고 메모리 안정성 확보",
          "ROI/Contour 레이어를 분리하고 listening={false}를 적용해 redraw·이벤트 비용 최소화",
          "메모리 안정성 확보 및 고 FPS 실시간 렌더링 환경에서도 끊김 없는 성능 제공",
        ],
        technologies: [
          "Konva.js",
          "Canvas API",
          "Memory Management",
          "Layer Optimization",
        ],
        articleUrl:
          "https://www.notion.so/Konva-2c74c99a0f8180189089e0dd994fd0fa?source=copy_link",
      },
      {
        title: "실시간 스트리밍 환경 메모리 누수 해결 및 이미지 처리 구조 개선",
        summary:
          "Chrome DevTools Memory 분석을 통해 ObjectURL 누수를 발견하고 URL.revokeObjectURL() 적용으로 해결했습니다.",
        category: "메모리 최적화",
        primaryCategory: "메모리 최적화",
        problemDescription: [
          "실시간 고해상도 이미지 스트리밍(FHD/QHD)으로 메모리 사용량이 지속 증가",
          "장시간 사용 시 브라우저 Heap 메모리 증가로 성능 저하 및 OOM 발생",
          "Heap Snapshot 분석 결과, Blob → ObjectURL이 해제되지 않고 잔존하는 문제 확인",
        ],
        solutionDescription: [
          "Chrome DevTools 메모리 프로파일링으로 누수 지점을 식별해 원인 분석 정확도 향상",
          "이미지 사용 종료 시 URL.revokeObjectURL() 즉시 호출로 메모리 잔존 제거와 장시간 사용 안정성 확보",
        ],
        technologies: ["WebSocket", "Chrome DevTools Memory Profiler"],
      },
      {
        title:
          "대용량 알람 데이터 렌더링 지연 문제를 커서 기반 무한 스크롤 구현으로 개선",
        summary:
          "TanStack Query의 useInfiniteQuery와 가상 스크롤을 적용해 수십만 건의 알람 히스토리를 효율적으로 처리했습니다.",
        category: "성능 최적화",
        primaryCategory: "무한 스크롤 최적화",
        problemDescription: [
          "한 달 단위 알람 히스토리가 수십만 건까지 증가하며 UI 지연과 스크롤 버벅임 발생",
          "페이지 기반 호출 방식에서 최신 순 데이터 구조로 인해 중복 호출 발생",
          "히스토리 탐색 중 새 알람 도착 시 변화 인지 어려움",
        ],
        solutionDescription: [
          "TanStack Query의 useInfiniteQuery 기반 커서 방식 무한 스크롤 도입으로 대량 데이터 조회 성능 개선",
          "마지막 조회 알람의 queryTime을 커서로 사용해 중복 호출 제거와 API 효율 향상",
          "react-window 가상 스크롤 적용으로 DOM 렌더링 부하 감소 및 스크롤 반응성 향상",
          "펄스 효과와 '최신 알람으로 이동' 버튼 구현으로 실시간 알람 도착 인지성 강화",
        ],
        technologies: [
          "TanStack Query",
          "useInfiniteQuery",
          "react-window",
          "Cursor-based Pagination",
        ],
        articleUrl:
          "https://www.notion.so/2544c99a0f8180609451f8c41748755a?source=copy_link",
      },
      {
        title: "결함 인지 경험 개선을 위한 이미지 검수 UX 재설계",
        summary:
          "이미지 컨트롤러와 '원클릭 결함 찾기' 기능을 제안·구현하여 검수 시간을 단축하고 정확도를 높였습니다.",
        category: "UX 개선",
        primaryCategory: "검수 UX 개선",
        problemDescription: [
          "알람 이미지에서 결함·이상 지점을 육안으로 찾기 어려워 검수 정확도 저하",
          "고해상도 이미지에서 작은 결함 식별 난이도 증가",
          "이미지 확대·축소 기능 부재로 정밀 검수 불가능",
        ],
        solutionDescription: [
          "확대·축소·이동 가능한 이미지 컨트롤러 다이얼로그 구현으로 정밀 검수 가능성 향상",
          "사용자 플로우 기반 '원클릭 결함 찾기' 기능 제안 및 채택으로 검수 과정 단축",
          "버튼 클릭 시 결함 좌표 자동 이동·하이라이트 UX 제공으로 식별 효율 증가",
          "VIMS에서 효과 검증 후 SAFETY 제품까지 기능 확장 적용으로 제품군 전체 UX 일관성 강화",
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
          "웹소켓 기반 프레임 스트림 구조에서 커스텀 영상 플레이어와 seek 시스템을 구현했습니다.",
        category: "UX 개선",
        primaryCategory: "영상 플레이어 기능",
        problemDescription: [
          "업로드 영상이 웹소켓으로 프레임 단위 전달되어 일반 <video> 플레이어 사용 불가",
          "특정 시점 검수 시작 및 ±5초 단위 이동이 필요한 사용자 요구 존재",
        ],
        solutionDescription: [
          "웹소켓 기반 프레임 처리에 맞춘 커스텀 플레이어 UI 구현으로 기본 플레이어의 제약 해소",
          "현재 재생 위치를 비디오 프로세서에 전달하는 seek 기능 구현으로 원하는 시점 이동과 정밀 검수 흐름 지원",
        ],
        technologies: ["WebSocket", "Custom Video Player", "Seekbar UI"],
      },
    ],
    period: "2025.01 - 진행 중",
    role: "프론트엔드 개발",
    frontendDevelopers: 2,
    backendDevelopers: 4,
    qaDevelopers: 2,
    productDesigners: 1,
    aiResearchers: 5,
    technologies: [
      "React",
      "TypeScript",
      "NX",
      "Zustand",
      "TanStack Query",
      "WebSocket",
    ],
    contributions: [
      { category: "사용자 경험 개선", percentage: 90, color: "#9CCC65" },
      { category: "성능 최적화", percentage: 85, color: "#FF7043" },
      { category: "개발 생산성 향상", percentage: 80, color: "#42A5F5" },
    ],
  },
  {
    projectId: 2,
    companyId: "saige",
    title: "중대재해 예방을 위한 AI 안전 모니터링 시스템",
    subtitle: "사내 제품 - SAIGE SAFETY 개발",
    image: "/safety-logo.svg",
    period: "2023.06 - 2024.12",
    background:
      "작업자 안전모 미착용, 위험 구역 침입, 화재/연기 감지 등 산업 현장의 안전 이벤트를 AI로 실시간 감지하고 알림을 제공하는 시스템입니다. 신사업 MVP 개발부터 GS 인증 1등급 취득까지 전체 프론트엔드 개발을 담당했습니다.",
    projectReflection:
      "촉박한 일정 속에서 적절한 기술 스택 선택이 프로젝트 성공에 결정적임을 체감했고, MVP에서 GS 인증까지 장기 프로젝트를 주도하며 제품의 성장 과정 전체를 경험했습니다. 안전과 직결되는 기능을 개발하면서 책임감 있는 개발의 중요성을 깊이 이해하게 되었습니다.",
    structuralContributions: [
      {
        title: "신사업 MVP UI 설계·구현 전담 (2–3주 내 고객사 시연 성공)",
        summary:
          "와이어프레임 기반으로 UI를 직접 설계·구현하고 기존 SAIGE 제품군과의 UX 일관성을 확보하여 2–3주 내 고객사 시연 완수했습니다.",
        category: "UX 개선",
        primaryCategory: "MVP UX 설계",
        problemDescription: [
          "신사업 특성상 짧은 기간 내 MVP 개발 필요, 디자이너 부재로 UI/UX 직접 구성해야 하는 상황",
          "기존 SAIGE 제품군과 UX·인터랙션의 일관성 요구",
          "고객사 데모 일정이 확정되어 2–3주 내 개발 완료 필요",
        ],
        solutionDescription: [
          "타팀 디자인 시스템을 분석해 핵심 인터랙션과 패턴을 추출하고 신규 프로젝트 특성에 맞게 재해석해 UX 일관성 확보",
          "PM 제공 와이어프레임을 기반으로 UI 흐름·컴포넌트 구조를 직접 설계해 기획 공백 최소화",
          "2인 개발 체계에서 역할을 명확히 분리해 개발 속도 확보 및 데모 일정 내 안정적인 MVP 완성",
        ],
        technologies: ["X-view-model (MVVM)", "Material UI"],
      },
      {
        title:
          "원본 좌표 기반 이벤트 바운딩 박스의 반응형 좌표 계산 시스템 구현",
        summary:
          "Konva.js로 바운딩 박스를 구현하고, 화면 비율에 맞는 동적 좌표 계산으로 리사이징 환경에서도 정확한 표시를 보장했습니다.",
        category: "UX 개선",
        primaryCategory: "이벤트 시각화",
        problemDescription: [
          "AI 연구소에서 전달받는 바운딩 박스 좌표가 원본 이미지 기준으로 전달됨",
          "모니터링 화면 크기가 원본과 다르기 때문에 좌표를 그대로 사용할 수 없음",
          "브라우저 창 크기가 동적으로 변경될 때마다 바운딩 박스 위치가 어긋남",
        ],
        solutionDescription: [
          "Konva.js 기반 캔버스 오버레이 시스템 구현으로 동적 좌표 렌더링 환경 확보",
          "원본 대비 현재 화면 비율을 계산하는 좌표 변환 로직 적용으로 확대·축소 환경에서도 정확한 위치 유지",
          "ResizeObserver로 화면 크기 변화를 실시간 감지해 바운딩 박스 위치 오차 최소화",
          "이벤트 유형별 색상 구분 적용으로 위험 요소 인지 속도 향상 및 모니터링 가독성 개선",
        ],
        technologies: ["Konva.js", "ResizeObserver", "Canvas API"],
      },
      {
        title:
          "GS 인증 1등급을 위한 유효성 검사 체계 구축 및 에러 핸들링 고도화",
        summary:
          "react-hook-form과 zod 기반 유효성 검사 체계를 도입하고, Error Boundary로 에러 핸들링을 강화하여 GS 인증 1등급 취득에 기여했습니다.",
        category: "코드 품질",
        primaryCategory: "입력 검증/에러 처리",
        problemDescription: [
          "GS 인증 1등급 취득을 위해 사용자 인터랙션에 따른 명확한 피드백 메시지 요구",
          "입력 필드별 유효성 검사 및 helperText 제공 체계 부족",
          "에러 발생 시 사용자 피드백 없이 앱이 중단되는 사용성 문제",
        ],
        solutionDescription: [
          "react-hook-form과 zod 기반 스키마 유효성 검사 체계 구축으로 검증 일관성과 유지보수성 향상",
          "비밀번호 정책·공백 검증 등 요구 정책을 schema로 명시해 입력 오류 예방과 사용자 입력 품질 개선",
          "입력 상태에 따른 동적 helperText 제공으로 실시간 가이드 강화와 잘못된 입력 감소",
          "Error Boundary를 적절한 scope에 적용해 비정상 종료를 방지하고 toast 피드백으로 오류 원인 전달",
          "사용자 액션 기반 banner 표출로 상태 변화 인지성 향상과 주요 작업의 확인 가능성 확보",
        ],
        technologies: ["Error Boundary", "react-hook-form", "zod"],
      },
    ],
    role: "프론트엔드 개발",
    frontendDevelopers: 2,
    backendDevelopers: 2,
    qaDevelopers: 1,
    productDesigners: 1,
    aiResearchers: 3,
    technologies: ["React", "TypeScript", "X-view-model (MVVM)", "WebSocket"],
    contributions: [
      { category: "사용자 경험 개선", percentage: 85, color: "#9CCC65" },
      { category: "성능 최적화", percentage: 75, color: "#FF7043" },
      { category: "개발 생산성 향상", percentage: 70, color: "#42A5F5" },
    ],
  },
  {
    projectId: 3,
    companyId: "saige",
    title: "AI 비전 검사 기반 공정 운영·배치·수율 모니터링 시스템",
    subtitle: "사내 제품 - SAIGE VISION 개발",
    image: "/vision-logo.svg",
    background:
      "생산 라인의 Vision 검사 결과 및 리소스 상태를 실시간으로 시각화하는 대시보드 웹 애플리케이션입니다.",
    projectReflection:
      "재사용 가능한 차트 컴포넌트를 설계하면서 추상화 레벨의 균형점을 찾는 것이 중요함을 배웠고, React의 렌더링 최적화 기법을 실전에서 적용하며 성능 개선의 중요성을 체감했습니다.",
    structuralContributions: [
      {
        title: "여러 페이지의 차트 중복 코드를 BaseChart 모듈로 공통화",
        summary:
          "ECharts 기반 BaseChart를 개발해 차트 중복 코드를 제거하고 재사용성을 높였으며, Storybook·MDX 문서화로 팀 내 활용도를 강화",
        category: "개발 생산성",
        primaryCategory: "컴포넌트 모듈화",
        problemDescription: [
          "대시보드·리소스 모니터링 등 여러 페이지에서 차트가 필요했지만 각 페이지마다 개별 구현되어 중복 코드 증가",
          "ECharts 기본 Legend 디자인이 디자이너 요구사항과 달라 페이지별 커스터마이징 필요",
          "차트 사용 방식이 문서화되지 않아 재사용 시 구조 파악에 시간이 소요",
        ],
        solutionDescription: [
          "ECharts 기반 BaseChart 컴포넌트를 제작해 라인·파이·게이지 차트를 공통 구조로 통합",
          "ECharts 인스턴스만 활용하고 UI는 별도 Legend 컴포넌트로 구성하여 디자이너 요구 디자인 적용",
          "BaseChart 옵션과 사용법을 Storybook·MDX 문서로 작성해 팀 내 공유 및 재사용성 향상",
        ],
        technologies: ["ECharts", "Custom Legend Component", "Storybook"],
      },
      {
        title:
          "실시간 리소스 업데이트로 발생한 불필요한 렌더링을 커스텀 훅으로 최적화",
        summary:
          "리소스별 커스텀 훅과 렌더링 최적화 전략을 도입해 실시간 모니터링 페이지의 차트 성능을 개선",
        category: "성능 최적화",
        primaryCategory: "렌더링 최적화",
        problemDescription: [
          "CPU·GPU·메모리·네트워크 등 다양한 리소스 데이터가 실시간 갱신되며 전체 차트가 불필요하게 리렌더링",
          "단일 리소스 변경에도 대시보드 전체가 렌더링되어 차트 애니메이션이 끊기는 문제 발생",
        ],
        solutionDescription: [
          "리소스별 커스텀 훅을 설계해 필요한 데이터만 구독하도록 분리하여 불필요한 렌더링 감소",
          "React.memo와 useMemo를 적용해 컴포넌트별 렌더링 부담을 낮추고 실시간 차트의 프레임 안정성 확보",
        ],
        technologies: [
          "TanStack Query",
          "React.memo",
          "useMemo",
          "Custom Hooks",
        ],
      },
    ],
    period: "2022.11 - 2023.01",
    role: "프론트엔드 개발",
    frontendDevelopers: 4,
    backendDevelopers: 2,
    productDesigners: 1,
    technologies: ["React", "TypeScript", "TanStack Query", "ECharts"],
    contributions: [
      { category: "사용자 경험 개선", percentage: 75, color: "#9CCC65" },
      { category: "성능 최적화", percentage: 85, color: "#FF7043" },
      { category: "개발 생산성 향상", percentage: 90, color: "#42A5F5" },
    ],
  },
  {
    projectId: 6,
    companyId: "saige",
    title: "사내 디자인 시스템",
    subtitle: "사내 제품 - SAIGE ELEMENTS 개발",
    image: "/elements-logo.svg",
    background:
      "사내 제품 간 일관된 UI/UX 경험 제공과 개발 효율성 향상을 위해 구축한 React 기반 디자인 시스템입니다.",
    projectReflection:
      "디자인 시스템은 단순히 컴포넌트를 만드는 것이 아니라, 팀 전체의 개발 문화와 협업 방식을 개선하는 것임을 배웠습니다. 디자이너와 개발자가 같은 언어로 소통할 수 있게 하는 것이 핵심이며, 장기적인 관점에서 팀의 생산성을 높이는 인프라 구축의 중요성을 이해했습니다.",
    structuralContributions: [
      {
        title: "사내 디자인 시스템 기여 및 문서화·리뷰 체계 정비",
        summary:
          "공통 사용 UI 컴포넌트 개발과 Storybook·Chromatic 기반 문서화·리뷰 체계를 구축하여 UI 일관성과 개발자·디자이너 협업 효율을 개선",
        category: "개발 생산성",
        primaryCategory: "문서화/리뷰 체계",
        problemDescription: [
          "동일 UI 요소가 제품별로 따로 구현되며 재사용성과 일관성 저하",
          "문서화가 부족해 컴포넌트 사용법 파악 시 코드 직접 탐색 필요",
          "디자이너가 UI 변경 사항을 확인할 수 있는 리뷰 흐름이 명확하지 않음",
        ],
        solutionDescription: [
          "Button·Switch 등 공통 UI 컴포넌트를 제품 간 공유 가능한 구조로 정비",
          "담당 컴포넌트 중심으로 Storybook 문서화를 작성해 사용법과 예시를 쉽게 확인할 수 있도록 개선",
          "Chromatic을 활용해 시각적 Diff 기반의 디자이너 리뷰 흐름 마련",
        ],
        technologies: ["Storybook", "Chromatic", "MUI", "Design Tokens", "MDX"],
      },
      {
        title: "초기 디자인 토큰 정의의 불일치를 역할 기반 토큰 체계로 재정의",
        summary:
          "초기 토큰 정의 과정에서 발생한 디자이너·개발자 간 간극을 해소하고 역할 기반 디자인 토큰 재정의로 협업 효율성과 UI 일관성 강화",
        category: "개발 생산성",
        primaryCategory: "디자인 토큰 체계",
        problemDescription: [
          "초기 디자인 토큰 정의 시 디자이너와 개발자의 기준이 달라 동일 요소에 다른 토큰을 사용하는 기술부채 발생",
          "토큰 역할이 명확하지 않아 어떤 상황에서 어떤 토큰을 적용해야 하는지 판단 어려움",
        ],
        solutionDescription: [
          "디자이너와 공동으로 기존 토큰을 재검토해 역할 기반(Primitive·Semantic·Component) 토큰 체계로 재정의하며 사용 기준 일관성 확보",
          "Primitive와 Theme 토큰을 분리해 테마 확장성과 다크모드 대응을 용이하게 구성",
          "Figma와 코드의 토큰 네이밍을 통일해 협업 시 불필요한 커뮤니케이션 비용 제거 및 변경 추적 용이성 향상",
        ],
        technologies: ["Design Tokens", "Figma", "Theme System"],
      },
    ],
    period: "2023.05 - 진행 중",
    role: "디자인 시스템 컨트리뷰터",
    frontendDevelopers: 7,
    technologies: ["React", "TypeScript", "Storybook", "Chromatic", "MUI"],
    contributions: [
      { category: "사용자 경험 개선", percentage: 70, color: "#9CCC65" },
      { category: "성능 최적화", percentage: 65, color: "#FF7043" },
      { category: "개발 생산성 향상", percentage: 90, color: "#42A5F5" },
    ],
  },
  {
    projectId: 4,
    companyId: "media-corpus",
    title: "텍스트 윤리성 평가 시스템",
    subtitle:
      "국립 국어원 - 비윤리적 표현 말뭉치 연구 분석 및 시범 구축 사업 참여",
    image: "/media-logo-2.png",
    background:
      "100명 규모의 사용자 테스트를 주도하며, 150,000건 이상의 윤리성 평가 데이터를 수집·운영한 웹 기반 평가 시스템입니다.",
    projectReflection:
      "비개발자 사용자를 위한 직관적인 UI를 설계하면서 사용자 중심 사고의 중요성을 깊이 이해했고, 단독 개발이지만 확장 가능한 아키텍처를 설계하는 것의 중요성을 배웠습니다. 초기에 시간을 들여 구조를 잘 설계하면 나중에 기능을 추가할 때 훨씬 효율적임을 체감했습니다.",
    structuralContributions: [
      {
        title: "복잡한 텍스트 윤리성 평가 업무를 3단 UI 구조로 단순화",
        summary:
          "문단·문장·평가 폼을 구분하는 3단 UI 구조를 설계해 평가 과정의 혼란을 줄이고 작업 효율을 개선",
        category: "UX 개선",
        primaryCategory: "평가 플로우 UX",
        problemDescription: [
          "문단 전체를 읽고 대상 문장을 찾아 평가해야 하는 복잡한 흐름으로 작업자가 단계별로 혼란을 겪음",
          "평가 대상 문장과 일반 문장의 시각적 구분이 부족해 잘못된 문장을 평가하는 오류 발생",
        ],
        solutionDescription: [
          "문단/문장/평가 폼을 단계별로 분리한 3단 UI 구조 설계로 작업 흐름을 명확히 분리",
          "평가 대상 문장에 볼록 처리와 색상 강조 적용해 시각적 구분 강화",
          "좌우 영역을 정보 탐색 영역과 입력 영역으로 나누어 평가 과정의 집중도 향상",
        ],
        technologies: ["Ant Design"],
      },
      {
        title: "단독 개발 환경의 코드 복잡성을 Feature 기반 구조로 정리",
        summary:
          "Redux Toolkit과 Feature 단위 모듈화를 적용해 컴포넌트·상태·API를 분리하고 코드 응집도를 개선",
        category: "아키텍처",
        primaryCategory: "Feature 모듈화",
        problemDescription: [
          "단독 개발 프로젝트 특성상 컴포넌트·상태 관리·API 로직이 한 파일·한 위치에 섞여 구조가 복잡해짐",
          "기능이 늘어날수록 코드 흐름 파악과 유지보수가 어려워지는 상황",
        ],
        solutionDescription: [
          "Redux Toolkit과 Duck Pattern을 적용해 상태 로직을 명확히 분리하고 관리 구조 단순화",
          "컴포넌트·상태·API를 Feature 단위로 모듈화해 기능별 응집도와 유지보수 편의성 향상",
        ],
        technologies: [
          "Redux Toolkit",
          "Duck Pattern",
          "Feature-based Architecture",
        ],
      },
      {
        title: "대량 평가 데이터의 성능 저하를 페이지네이션으로 개선",
        summary:
          "페이지네이션과 지연 로딩을 적용해 초기 로딩 부하를 줄이고 데이터 탐색 성능을 개선",
        category: "성능 최적화",
        primaryCategory: "데이터 로딩 최적화",
        problemDescription: [
          "150,000건 이상의 평가 데이터를 한 번에 처리하면서 초기 로딩과 렌더링 성능 저하 발생",
          "평가 진행률 표시나 통계 계산 과정에서 브라우저가 느려지는 문제",
        ],
        solutionDescription: [
          "페이지네이션을 적용해 필요한 구간만 요청하도록 구성하여 초기 로딩 부담 완화",
          "지연 로딩을 적용해 스크롤 시 데이터를 점진적으로 로드하도록 개선",
        ],
        technologies: ["Pagination", "Lazy Loading"],
      },
    ],
    period: "2021.12 - 2022.04",
    role: "프론트엔드 개발 (단독)",
    frontendDevelopers: 1,
    backendDevelopers: 1,
    technologies: ["React", "JavaScript", "Redux Toolkit", "Ant Design"],
    contributions: [
      { category: "사용자 경험 개선", percentage: 90, color: "#9CCC65" },
      { category: "성능 최적화", percentage: 70, color: "#FF7043" },
      { category: "개발 생산성 향상", percentage: 80, color: "#42A5F5" },
    ],
  },
  {
    projectId: 5,
    companyId: "media-corpus",
    title: "비윤리적 표현 라벨링 시스템",
    subtitle: "국립 국어원 - 말뭉치 언어의 사회적 인식 조사 분류 사업 참여",
    image: "/media-logo-1.png",
    background:
      "400,000건 이상의 대용량 라벨링 데이터를 효율적으로 수집·운영하기 위한 웹 라벨링/검수 시스템입니다.",
    projectReflection:
      "사용자가 자연스럽게 느끼는 인터랙션을 구현하는 것이 얼마나 중요한지 배웠습니다. 드래그라는 익숙한 동작을 활용하여 복잡한 라벨링 작업을 단순화한 것이 사용자 만족도를 크게 향상시켰고, 대용량 데이터 처리에서 성능 최적화의 중요성을 체감했습니다.",
    structuralContributions: [
      {
        title: "복잡한 텍스트 라벨링 작업을 드래그 기반 시스템으로 단순화",
        summary:
          "드래그 기반 라벨링 기능을 구현해 원하는 영역을 빠르게 지정하고 라벨링 정확도를 개선",
        category: "UX 개선",
        primaryCategory: "라벨링 UX 개선",
        problemDescription: [
          "사용자가 텍스트 내 특정 영역을 직접 선택해 라벨링할 수 있는 기능 필요",
        ],
        solutionDescription: [
          "window.getSelection API로 드래그 영역을 감지하고 컨텍스트 메뉴를 통해 라벨링하도록 구현",
          "드래그 영역에 실시간 시각적 피드백을 제공해 라벨링 범위 오차 감소",
        ],
        technologies: [
          "window.getSelection API",
          "Context Menu",
          "Visual Feedback",
        ],
      },
      {
        title: "400,000건 대용량 데이터 렌더링 성능을 가상 스크롤로 최적화",
        summary:
          "react-window 가상 스크롤 도입으로 대용량 라벨링 데이터의 렌더링 성능과 메모리 효율을 개선",
        category: "성능 최적화",
        primaryCategory: "무한 스크롤 최적화",
        problemDescription: [
          "400,000건 텍스트 데이터를 한 번에 렌더링할 경우 브라우저 멈춤 현상 발생",
          "초기 로딩 시간이 길고 메모리 사용량이 불필요하게 증가",
        ],
        solutionDescription: [
          "IntersectionObserver 기반 무한 스크롤을 적용해 필요한 데이터만 점진적으로 로드",
          "초기 소량(약 30개)만 렌더링하고 스크롤에 따라 추가 로딩하도록 구성",
          "가상 스크롤링을 적용해 DOM 노드 수를 일정하게 유지해 렌더링 부담 완화",
        ],
        technologies: ["IntersectionObserver", "Virtual Scrolling"],
      },
      {
        title: "라벨링 품질 관리 부재를 실시간 모니터링 대시보드로 개선",
        summary:
          "작업 진행률과 오류율을 확인할 수 있는 실시간 대시보드를 구축해 라벨링 품질 관리 효율 향상",
        primaryCategory: "품질 관리 대시보드",
        problemDescription: [
          "대규모 라벨링 작업에서 작업자별 진행 상황과 품질 상태를 한눈에 파악하기 어려움",
          "검수자와 작업자 간 피드백 흐름이 없어 품질 관리 공백 존재",
        ],
        solutionDescription: [
          "작업자별 진행률·품질 지표·오류율을 실시간으로 조회할 수 있는 대시보드 구성",
          "검수자가 작업 결과를 바로 확인하고 피드백을 줄 수 있는 워크플로우 설계",
        ],
        technologies: ["Dashboard", "Quality Management"],
      },
    ],
    period: "2021.06 - 2021.10",
    role: "프론트엔드 개발 (단독)",
    frontendDevelopers: 1,
    backendDevelopers: 1,
    technologies: ["React", "JavaScript", "Redux", "Ant Design"],
    contributions: [
      { category: "사용자 경험 개선", percentage: 90, color: "#9CCC65" },
      { category: "성능 최적화", percentage: 85, color: "#FF7043" },
      { category: "개발 생산성 향상", percentage: 75, color: "#42A5F5" },
    ],
  },
];

export default projectsData;
