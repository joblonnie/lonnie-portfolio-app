import type { Project } from "../types"

export const projectsData: Project[] = [
  {
    projectId: 1,
    companyId: "saige",
    title: "영상 기반 결함·이상 동작 실시간 모니터링 시스템",
    subtitle: "사내 제품 - SAIGE VIMS 개발",
    image: "/vims-logo.svg",
    background:
      "AI 영상 분석을 통해 제조 현장의 결함과 이상 동작을 실시간으로 감지하고, 모니터링·알림·이력 관리까지 제공하는 산업용 영상 모니터링 시스템입니다.",
    projectReflection:
      "실시간 스트리밍 환경에서 성능과 메모리를 모두 고려한 아키텍처 설계 경험을 쌓았으며, Paint/Composite 단계의 차이가 렌더링 성능에 미치는 영향을 깊이 이해하게 되었습니다. Web Worker를 통한 멀티 스레딩 아키텍처와 Konva 기반 Canvas 최적화를 경험하며 복잡한 실시간 환경에서의 성능 튜닝 능력을 향상시켰습니다.",
    structuralContributions: [
      {
        title: "실시간 이미지 스트리밍 디코딩 로직을 Web Worker로 분리",
        summary:
          "실시간 이미지 스트리밍 디코딩 로직을 Web Worker로 분리하여 메인 스레드 블로킹을 제거하고, UI 렌더링과 사용자 인터랙션이 끊기지 않는 구조로 개선했습니다.",
        category: "성능 최적화",
        primaryCategory: "스레드 분리 최적화",
        background:
          "기존 구조는 base64 프레임 디코딩(파싱/변환/Blob 생성)을 메인 스레드가 모두 처리하면서, 다채널·고 FPS 환경에서 CPU 과부하가 발생했습니다. 이로 인해 GC 지연과 메모리 누적이 이어지며 OOM으로 귀결되는 병목이 발생했고, 프레임 처리 중 UI 인터랙션(버튼 클릭, 스크롤 등)이 지연되거나 응답이 없는 현상이 나타났습니다.",
        solution:
          "Web Worker 기반 병렬 처리 구조로 전환하여 CPU·메모리 집약적인 디코딩 로직을 Worker로 이동시켰습니다. 메인 스레드는 렌더링 중심의 최소 역할만 수행하도록 분리하여 UI 반응성을 확보했고, postMessage로 처리된 프레임을 메인 스레드에 전달하여 사용자 인터랙션을 개선했습니다. Worker 내부에서 메모리 관리를 독립적으로 처리함으로써 메인 스레드의 GC 빈도를 감소시키고 전체 앱의 안정성을 향상시켰습니다.",
        technologies: ["Web Worker", "postMessage", "base64 Decoding", "Blob API"],
        articleUrl: "https://www.notion.so/Web-Worker-CPU-2c54c99a0f81802aad55e05b2137a19f?source=copy_link",
        media: [
          {
            type: "image",
            url: "/worker.png",
            caption: "Web Worker 기반 병렬 처리 아키텍처",
          },
        ],
        reflection:
          "멀티 스레딩 환경에서의 아키텍처 설계 경험을 쌓았고, 메인 스레드와 Worker 간 통신 최적화의 중요성을 배웠습니다. 실시간 데이터 처리 환경에서 성능 병목을 식별하고 해결하는 능력이 향상되었습니다.",
      },
      {
        title: "Paint Flashing 기반 병목 분석을 통해 CPU Paint 중심 렌더링 구조를 GPU 합성 중심으로 전환",
        summary:
          "스트리밍 카드의 경고 border 애니메이션이 과도한 Repaint를 유발하던 문제를 GPU 합성 기반 방식으로 전환하여 해결했습니다.",
        category: "성능 최적화",
        primaryCategory: "렌더링 최적화",
        background:
          "실시간 WebSocket 스트리밍 환경에서 특정 카드의 경고 border 애니메이션이 background-position 기반으로 동작하면서 매 프레임 Paint를 강제로 발생시켰습니다. 이 Paint 부하가 스트리밍 프레임 갱신과 겹치면서 CPU 과부하와 GC 지연이 발생했고, 메모리가 누적되어 OOM(Out of Memory) 위험이 증가했습니다.",
        solution:
          "애니메이션 방식을 Paint가 발생하는 방식에서 GPU 합성 기반(transform) 방식으로 전환하고, ::before + conic-gradient로 테두리를 분리해 카드 본체 렌더링에 영향을 주지 않도록 재구성했습니다. 그 결과 Repaint를 완전히 제거하고 CPU 사용률을 감소시켜 메모리 증가 및 GC 부하를 해소했으며, 스크롤·탭 전환 등 UI 반응성이 개선되었습니다. 이를 통해 다수의 스트리밍 카드가 동시에 동작하는 환경에서도 끊김 없이 안정적인 렌더링 성능을 확보할 수 있었습니다.",
        technologies: ["Chrome DevTools Performance", "GPU Compositing", "CSS Transform", "conic-gradient"],
        articleUrl: "https://www.notion.so/WebSocket-Repaint-2c54c99a0f8180d89b96d40c315de060?source=copy_link",
        media: [
          {
            type: "video",
            url: "/repaint.mov",
            caption: "GPU 합성 방식으로 전환 후 Repaint 제거",
          },
          {
            type: "video",
            url: "/repaint-remove.mov",
            caption: "Chrome DevTools Performance 탭에서 Paint 문제 확인",
          },
        ],
        reflection:
          "CSS 애니메이션의 성능 특성을 깊이 이해하게 되었고, Paint/Composite 단계의 차이가 실시간 렌더링 환경에서 얼마나 큰 영향을 미치는지 체감했습니다. Chrome DevTools를 활용한 성능 분석 능력을 향상시켰습니다.",
      },
      {
        title: "base64 이미지 전달 방식을 Blob URL 기반으로 전환하여 장시간 스트리밍 시 Heap Memory 누수 근본 해결",
        summary:
          "Chrome DevTools Memory Profiler로 ObjectURL 미해제 문제를 발견하고 URL.revokeObjectURL() 적용으로 메모리 누수를 해결했습니다.",
        category: "메모리 최적화",
        primaryCategory: "메모리 누수 해결",
        background:
          "실시간 고해상도(FHD/QHD) 이미지 스트리밍으로 메모리 사용량이 지속적으로 증가했고, 장시간 사용 시 Heap이 누적되어 성능 저하 및 OOM 위험이 발생했습니다. Heap Snapshot 분석 결과 해제되지 않은 Blob/ObjectURL이 잔존하는 문제가 확인되었습니다.",
        solution:
          "Chrome DevTools Memory Profiler로 누수 지점을 식별하여 원인 분석 정확도를 높였고, 이미지 사용 종료 시 URL.revokeObjectURL()을 즉시 호출하도록 개선하여 메모리 잔존을 제거했습니다. 이를 통해 장시간 사용 환경에서도 메모리 안정성을 확보할 수 있었습니다.",
        technologies: ["WebSocket", "Blob API", "URL.revokeObjectURL", "Chrome DevTools Memory Profiler"],
        reflection:
          "메모리 프로파일링 도구를 활용하여 눈에 보이지 않는 메모리 누수를 추적하고 해결하는 경험을 쌓았습니다. 리소스 해제의 중요성을 깊이 이해하게 되었고, 장시간 운영되는 시스템에서의 메모리 관리 전략을 배웠습니다.",
      },
      {
        title: "WebSocket 기반 실시간 스트리밍 구조 개선 및 Seek 기능 지원 커스텀 플레이어 구현",
        summary:
          "WebSocket 프레임 스트림 환경에서 커스텀 영상 플레이어와 seek 시스템을 구현하여 단순 모니터링을 넘어 이력 탐색과 재확인이 가능한 운영 환경을 구축했습니다.",
        category: "UX 개선",
        primaryCategory: "영상 플레이어 기능",
        background:
          "업로드된 영상이 웹소켓으로 프레임 단위로 전달되어 일반 <video> 플레이어를 사용할 수 없었고, 특정 시점 검수 시작 및 ±5초 단위 이동이 필요한 사용자 요구가 존재했습니다.",
        solution:
          "웹소켓 기반 프레임 처리에 맞춘 커스텀 플레이어 UI를 구현하여 기본 플레이어의 제약을 해소했고, 현재 재생 위치를 비디오 프로세서에 전달하는 seek 기능을 구현하여 원하는 시점 이동과 정밀 검수 흐름을 지원했습니다.",
        technologies: ["WebSocket", "Custom Video Player", "Seekbar UI"],
        reflection:
          "표준 HTML5 Video API의 제약을 넘어 커스텀 플레이어를 구현하면서, 사용자가 익숙한 플레이어 경험을 웹소켓 스트리밍 환경에 맞게 재구성하는 방법을 배웠습니다.",
      },
      {
        title: "공통 렌더링·스트리밍 로직 표준화 및 Nx Monorepo 도입으로 7개 제품 단일 구조 운영",
        summary:
          "7개 고객사 앱을 NX Monorepo로 통합 관리하고 공통 기능을 '@saige/vims' 패키지로 모듈화하여 신규 POC 및 기능 검증 소요 시간을 약 40% 단축했습니다.",
        category: "개발 생산성",
        primaryCategory: "모노레포 아키텍처",
        background:
          "고객사별로 공통 기능이 중복 구현되고 코드가 앱마다 분산되어 개발 리소스가 낭비되었으며, 유지보수와 기능 확장 시 작업 범위 파악이 어려웠습니다. 또한 커스터마이징된 컴포넌트가 혼재되어 변경 추적과 운영 안정성이 떨어지는 문제가 있었습니다.",
        solution:
          "7개 고객사 앱을 NX Monorepo로 통합하고 공통 기능을 '@saige/vims' 패키지로 모듈화했습니다. API 응답 차이는 제네릭 타입으로 표준화하여 동일한 endpoint에서 response만 다른 경우 코드 중복을 최소화했고, 공통 컴포넌트 뼈대는 @saige/vims에서 가져와 각 앱에서 확장하는 구조로 설계했습니다. 커스터마이징된 컴포넌트·훅에는 고객사 이름을 prefix로 활용해 트래킹과 유지보수를 용이하게 했으며, 이를 통해 신규 POC 생성 시간을 약 40% 단축하고 기능 개선 반영의 일관성을 확보했습니다.",
        technologies: ["NX Monorepo", "pnpm workspace", "@saige/vims 공통 패키지", "제네릭 타입"],
        reflection:
          "모노레포 아키텍처를 통해 여러 제품을 효율적으로 관리하는 방법을 배웠고, 공통 로직과 커스터마이징의 균형점을 찾는 것의 중요성을 이해했습니다.",
      },
    ],
    period: "2022.11 - 2025.01",
    role: "프론트엔드 개발",
    totalFeDevelopers: 2,
    backendDevelopers: 4,
    qaDevelopers: 1,
    productDesigners: 1,
    aiResearchers: "다수(기술별 상이)",
    technologies: ["React", "TypeScript", "NX", "Zustand", "TanStack Query", "WebSocket", "Konva.js"],
  },
  {
    projectId: 2,
    companyId: "saige",
    title: "중대재해 예방을 위한 AI 안전 모니터링 시스템",
    subtitle: "사내 제품 - SAIGE SAFETY 개발",
    image: "/safety-logo.svg",
    background:
      "AI 영상 분석을 통해 제조·산업 현장에서 발생할 수 있는 위험 상황과 안전 위반 행동을 실시간으로 감지하고, 모니터링·알림·이력 관리까지 제공하는 산업 안전 모니터링 시스템입니다.",
    projectReflection:
      "촉박한 일정 속에서 MVP를 성공적으로 완성하며 빠른 의사결정의 중요성을 배웠고, GS 인증까지 이어지는 장기 프로젝트를 주도하며 제품의 성장 과정 전체를 경험했습니다. 안전과 직결되는 기능을 개발하면서 책임감 있는 개발의 중요성을 깊이 이해하게 되었습니다.",
    structuralContributions: [
      {
        title: "신사업 MVP UI 설계·구현 전담 (2–3주 내 고객사 시연 성공)",
        summary:
          "디자이너 없이 와이어프레임 기반으로 UI를 직접 설계·구현하고 기존 SAIGE 제품군과의 UX 일관성을 확보하여 2–3주 내 고객사 시연을 완수했습니다.",
        category: "UX 개선",
        primaryCategory: "MVP UX 설계",
        background:
          "신사업 특성상 짧은 기간 내 MVP 개발이 필요했고 디자이너가 부재하여 UI/UX를 직접 구성해야 했습니다. 기존 SAIGE 제품군과 UX·인터랙션의 일관성이 요구되었으며, 고객사 데모 일정이 확정되어 2–3주 내 개발 완료가 필요한 상황이었습니다.",
        solution:
          "타팀 디자인 시스템을 분석해 핵심 인터랙션과 패턴을 추출하고 신규 프로젝트 특성에 맞게 재해석하여 UX 일관성을 확보했습니다. PM이 제공한 와이어프레임을 기반으로 UI 흐름과 컴포넌트 구조를 직접 설계해 기획 공백을 최소화했고, 2인 개발 체계에서 역할을 명확히 분리하여 개발 속도를 확보하고 데모 일정 내 안정적인 MVP를 완성했습니다. 초기 시연에서 연구소의 AI 성능은 충분하지 못했으나 UI 이슈 없이 성공적으로 마무리했고, 이후 연구소 성능 고도화 및 UI 관련 VOC를 반영하여 고객사와 계약을 유지할 수 있었습니다.",
        technologies: ["X-view-model (MVVM)", "Material UI"],
        reflection:
          "짧은 기간 안에 제품을 만들어내야 하는 압박 속에서 우선순위를 설정하고 핵심 기능에 집중하는 능력을 키웠습니다. 디자이너 없이 UI를 구성하면서 사용자 관점에서 생각하는 능력이 향상되었습니다.",
      },
      {
        title: "GS 인증 1등급을 위한 유효성 검사 체계 구축 및 에러 핸들링 고도화",
        summary:
          "react-hook-form과 zod 기반 입력 검증 체계를 도입하고 Error Boundary로 에러 핸들링을 강화하여 GS 인증 1등급 취득에 기여했습니다.",
        category: "코드 품질",
        primaryCategory: "입력 검증/에러 처리",
        background:
          "중대재해처벌법 강화로 SAFETY 사업에 집중하게 되었고 GS 인증을 진행하게 되었습니다. GS 인증 1등급 취득을 위해 사용자 인터랙션에 따른 명확한 피드백(toast 메시지), 입력 필드별 에러 핸들링, 비밀번호 정책 강화 등이 필요했습니다.",
        solution:
          "react-hook-form과 zod를 도입하여 스키마 기반 유효성 검사 체계를 구축했고, 비밀번호 정책·공백 검증 등 요구 정책을 schema로 명시하여 입력 오류를 예방했습니다. 입력 상태에 따른 동적 helperText를 제공하여 실시간 가이드를 강화했으며, Error Boundary를 적절한 scope에 적용해 비정상 종료를 방지하고 toast 피드백으로 오류 원인을 전달했습니다. 사용자 액션 기반 banner를 표출하여 상태 변화 인지성을 향상시켰고, 10-12월 집중 작업 끝에 GS 인증 1등급 취득에 기여했습니다.",
        technologies: ["react-hook-form", "zod", "Error Boundary", "Toast UI"],
        articleUrl: "https://www.notion.so/23d4c99a0f81809f9961f86932c67d03",
        reflection:
          "체계적인 입력 검증과 에러 처리가 사용자 경험과 제품 안정성에 얼마나 중요한지 깨달았습니다. GS 인증 과정을 통해 제품의 품질 기준을 높이는 과정을 경험했습니다.",
      },
      {
        title: "원본 좌표 기반 이벤트 바운딩 박스의 반응형 좌표 계산 시스템 구현",
        summary:
          "Konva.js로 안전 이벤트 바운딩 박스를 구현하고, ResizeObserver 기반 동적 좌표 계산으로 화면 크기 변화에도 정확한 표시를 보장했습니다.",
        category: "UX 개선",
        primaryCategory: "이벤트 시각화",
        background:
          "모니터링 페이지에서 안전모 미착용, 화재, 연기 등의 이벤트를 바운딩 박스로 표시해야 했는데, AI 연구소에서 전달받는 좌표가 원본 이미지 기준이었습니다. 모니터링 화면 크기가 원본과 달라 좌표를 그대로 사용할 수 없었고, 브라우저 창 크기가 동적으로 변경될 때마다 바운딩 박스 위치가 어긋나는 문제가 있었습니다.",
        solution:
          "Konva.js 기반 캔버스 오버레이 시스템을 구현하여 동적 좌표 렌더링 환경을 확보했고, 원본 대비 현재 화면 비율을 계산하는 좌표 변환 로직을 적용하여 확대·축소 환경에서도 정확한 위치를 유지했습니다. ResizeObserver로 화면 크기 변화를 실시간 감지하여 바운딩 박스 위치 오차를 최소화했으며, 이벤트 유형별로 색상을 구분하여 위험 요소 인지 속도를 향상시키고 모니터링 가독성을 개선했습니다.",
        technologies: ["Konva.js", "ResizeObserver", "Canvas API", "좌표 변환 로직"],
        reflection:
          "Canvas API와 좌표 변환 로직을 활용하여 동적인 브라우저 환경에서도 정확한 시각화를 제공하는 방법을 배웠습니다. 사용자가 인지하기 쉬운 시각적 피드백의 중요성을 이해했습니다.",
      },
    ],
    period: "2023.06 - 2024.12",
    role: "프론트엔드 개발",
    totalFeDevelopers: 2,
    backendDevelopers: 4,
    qaDevelopers: 1,
    productDesigners: 1,
    aiResearchers: "다수(기술별 상이)",
    technologies: ["React", "TypeScript", "X-view-model (MVVM)", "WebSocket", "Konva.js"],
  },
  {
    projectId: 3,
    companyId: "saige",
    title: "AI 비전 검사 기반 공정 운영·배치·수율 모니터링 시스템",
    subtitle: "사내 제품 - SAIGE VISION Enterprise 개발",
    image: "/vision-logo.svg",
    background:
      "AI 비전 검사 시스템에서 생성되는 검사 결과와 운영 지표를 통합해, 제조 공정의 수율 추이·결함 현황·장비 상태를 기간별로 분석하고 모니터링할 수 있는 비전 검사 운영·분석 대시보드입니다.",
    projectReflection:
      "재사용 가능한 차트 컴포넌트를 설계하면서 추상화의 적절한 수준을 찾는 법을 배웠고, 실시간 데이터 갱신 환경에서 React의 렌더링 최적화 기법을 실전에 적용하며 성능 개선의 중요성을 체감했습니다.",
    structuralContributions: [
      {
        title: "다수 차트 렌더링으로 인한 성능 병목 개선",
        summary:
          "VISION 검사 결과와 장비 리소스를 한 화면에서 실시간으로 시각화하는 대시보드 환경에서, 다수(9개+) 차트 렌더링으로 발생하던 성능 병목을 개선했습니다.",
        category: "성능 최적화",
        primaryCategory: "차트 렌더링 최적화",
        background:
          "VISION 검사 결과와 장비 리소스(CPU·GPU·Memory·Network I/O·결함 Count)를 한 화면에서 실시간으로 시각화하는 대시보드 환경에서, 다수(9개+) 차트를 렌더링하면서 초기 로딩이 느려지고 사용자 인터랙션 시 지연이 발생하는 성능 병목이 발생했습니다.",
        solution:
          "불필요한 렌더링을 최소화하기 위해 차트 컴포넌트에 메모이제이션을 적용하고, 실시간 데이터 갱신이 필요한 차트와 정적 차트를 분리하여 선택적으로 업데이트되도록 구조를 개선했습니다. 또한 차트 초기화 로직을 최적화하여 초기 로딩 시간을 단축했습니다.",
        technologies: ["ECharts", "React.memo", "useMemo", "Performance Profiling"],
        reflection:
          "다수의 차트를 렌더링할 때는 전체를 최적화하기보다 병목 지점을 정확히 파악하고 선택적으로 개선하는 것이 효과적임을 배웠습니다.",
      },
      {
        title: "ECharts BaseChart 컴포넌트 공통화 및 차트 구조 재설계",
        summary:
          "중복된 차트 옵션과 렌더링 로직을 제거하고, 실시간·기간별 차트 구성에 대응 가능한 단순한 차트 구조로 재설계했습니다.",
        category: "코드 품질",
        primaryCategory: "컴포넌트 추상화",
        background:
          "각 차트마다 중복된 ECharts 옵션 설정과 렌더링 로직이 반복되어 유지보수가 어려웠고, 새로운 차트 타입을 추가할 때마다 전체 옵션을 다시 작성해야 하는 비효율이 발생했습니다.",
        solution:
          "ECharts BaseChart 컴포넌트를 공통화하여 중복 옵션과 렌더링 로직을 제거하고, props를 통해 차트 타입과 데이터만 전달하면 되는 구조로 재설계했습니다. 실시간 차트와 기간별 차트에 모두 대응 가능하도록 유연한 인터페이스를 설계하여, 새로운 차트 추가 시 개발 시간을 크게 단축했습니다.",
        technologies: ["ECharts", "TypeScript", "Component Design Pattern"],
        reflection:
          "차트 라이브러리를 추상화할 때는 모든 옵션을 노출하기보다, 실제 사용 사례에 기반한 적절한 수준의 추상화가 중요함을 배웠습니다.",
      },
      {
        title: "Legend 및 UI 요소를 차트 렌더링 로직에서 분리",
        summary: "디자이너 요구 변경 시 차트 내부 수정 없이 UI 레벨에서 대응 가능하도록 구조를 개선했습니다.",
        category: "개발 생산성",
        primaryCategory: "관심사 분리",
        background:
          "차트의 Legend와 UI 요소가 차트 렌더링 로직에 강하게 결합되어 있어, 디자이너가 Legend 위치나 스타일을 변경 요청할 때마다 차트 내부 로직을 수정해야 했고, 이로 인해 예상치 못한 버그가 발생하기도 했습니다.",
        solution:
          "Legend와 UI 컨트롤을 차트 컴포넌트 외부로 분리하여 독립적인 컴포넌트로 구성하고, 차트와는 props를 통해서만 통신하도록 구조를 개선했습니다. 이를 통해 UI 변경 시 차트 렌더링 로직에 영향을 주지 않고 UI 레벨에서만 수정이 가능해졌습니다.",
        technologies: ["React", "Component Composition", "Separation of Concerns"],
        reflection:
          "UI 요소와 데이터 시각화 로직을 분리하면 각각을 독립적으로 개선할 수 있어 유지보수성이 크게 향상됨을 경험했습니다.",
      },
      {
        title: "TanStack Query 기반 실시간 데이터 갱신 환경의 부분 렌더링 구조 설계",
        summary: "메모이제이션을 적용한 부분 렌더링 구조를 설계해 불필요한 전체 리렌더링을 방지했습니다.",
        category: "성능 최적화",
        primaryCategory: "렌더링 최적화",
        background:
          "TanStack Query를 통해 실시간으로 데이터가 갱신되는 환경에서, 하나의 차트 데이터가 업데이트될 때마다 모든 차트가 리렌더링되어 불필요한 성능 저하가 발생했습니다.",
        solution:
          "각 차트 컴포넌트에 React.memo를 적용하고, 데이터 의존성을 명확히 정의하여 변경된 데이터와 관련된 차트만 선택적으로 리렌더링되도록 구조를 설계했습니다. TanStack Query의 queryKey를 세밀하게 관리하여 불필요한 데이터 refetch를 방지하고, useMemo를 활용해 차트 옵션 객체의 불필요한 재생성을 제거했습니다.",
        technologies: ["TanStack Query", "React.memo", "useMemo", "Render Optimization"],
        reflection:
          "실시간 데이터 갱신 환경에서는 어떤 컴포넌트가 언제 리렌더링되어야 하는지 명확히 설계하는 것이 성능의 핵심임을 배웠습니다.",
      },
    ],
    period: "2024.03 - 2024.06",
    role: "프론트엔드 개발",
    totalFeDevelopers: 2,
    backendDevelopers: 4,
    qaDevelopers: 1,
    productDesigners: 1,
    aiResearchers: "다수(기술별 상이)",
    technologies: ["React", "TypeScript", "TanStack Query", "ECharts"],
  },
  {
    projectId: 6,
    companyId: "saige",
    title: "사내 디자인 시스템",
    subtitle: "사내 제품 - SAIGE ELEMENTS 개발",
    image: "/elements-logo.svg",
    background:
      "다수의 SAIGE 제품에서 반복되던 UI 구현 방식을 표준화해, 일관된 사용자 경험을 유지하면서 디자인·개발 간 협업 비용을 구조적으로 줄이기 위해 구축된 사내 공통 디자인 시스템입니다.",
    projectReflection:
      "디자인 시스템은 단순히 컴포넌트를 만드는 것이 아니라, 팀 전체의 개발 문화와 협업 방식을 개선하는 것임을 배웠습니다. 디자이너와 개발자가 같은 언어로 소통할 수 있게 하는 것이 핵심이며, 장기적인 관점에서 팀의 생산성을 높이는 인프라 구축의 중요성을 이해했습니다.",
    structuralContributions: [
      {
        title: "제품 간 반복되던 UI 구현 패턴을 공통 컴포넌트로 추상화",
        summary:
          "제품 간 반복되던 UI 구현 패턴을 공통 컴포넌트로 추상화하고, Storybook·Chromatic 기반 문서화·리뷰 체계를 구축했습니다.",
        category: "개발 생산성",
        primaryCategory: "컴포넌트 추상화",
        background:
          "동일한 UI 요소가 제품별로 따로 구현되며 재사용성과 일관성이 저하되었고, 문서화가 부족해 컴포넌트 사용법 파악 시 코드를 직접 탐색해야 했습니다. 디자이너가 UI 변경 사항을 확인할 수 있는 리뷰 흐름이 명확하지 않았습니다.",
        solution:
          "Button·Switch 등 공통 UI 컴포넌트를 여러 제품에서 재사용 가능한 구조로 정비하고, Storybook 기반 컴포넌트 문서화와 Chromatic 시각적 회귀 테스트를 도입해 UI 변경 시 의도치 않은 스타일 깨짐을 사전에 감지했습니다.",
        technologies: ["Storybook", "Chromatic", "MUI", "Design Tokens", "MDX"],
        reflection:
          "컴포넌트 문서화와 테스트 자동화가 팀의 생산성을 얼마나 높이는지 체감했고, 시각적 회귀 테스트의 중요성을 이해했습니다.",
      },
      {
        title: "Primitive → Semantic → Component 레이어로 UI 구조 분리",
        summary:
          "역할 기반(Primitive·Semantic·Component) 토큰 체계를 정의하고 Figma와 코드의 토큰 네이밍을 통일하여 디자이너-개발자 간 커뮤니케이션 비용을 감소시켰습니다.",
        category: "개발 생산성",
        primaryCategory: "디자인 토큰 체계",
        background:
          "초기 디자인 토큰 정의 시 디자이너와 개발자의 기준이 달라 동일 요소에 다른 토큰을 사용하는 기술 부채가 발생했고, 토큰 역할이 명확하지 않아 어떤 상황에서 어떤 토큰을 적용해야 하는지 판단이 어려웠습니다.",
        solution:
          "의미 기반(Semantic) 토큰을 정의해 컴포넌트에 주입하는 디자인 시스템을 설계했고, 디자이너와 공동으로 기존 토큰을 재검토해 역할 기반(Primitive·Semantic·Component) 토큰 체계로 재정의하여 사용 기준 일관성을 확보했습니다. Primitive와 Theme 토큰을 분리해 테마 확장성과 다크모드 대응을 용이하게 구성했으며, Figma 디자인 토큰·컴포넌트 명과 코드 레벨 용어를 정렬해 디자이너–개발자 간 커뮤니케이션 비용을 감소시켰습니다.",
        technologies: ["Design Tokens", "Figma", "Theme System", "Semantic Tokens"],
        reflection:
          "디자이너와 개발자가 같은 언어로 소통하는 것이 얼마나 중요한지 배웠고, 초기에 체계를 잘 정립하면 장기적으로 팀 효율이 크게 향상됨을 경험했습니다.",
      },
    ],
    period: "2023.05 - 진행 중",
    role: "디자인 시스템 컨트리뷰터",
    totalFeDevelopers: 7,
    technologies: ["React", "TypeScript", "Storybook", "Chromatic", "MUI"],
  },
  {
    projectId: 4,
    companyId: "media-corpus",
    title: "텍스트 윤리성 평가 시스템",
    subtitle: "국립 국어원 - 비윤리적 표현 말뭉치 연구 분석 및 시범 구축 사업 참여",
    image: "/media-logo-2.png",
    background:
      "온라인 텍스트를 대상으로 비윤리적·차별적 표현 여부를 평가·분류하고, 평가 결과를 구조화된 데이터로 축적해 AI 학습 및 검증에 활용 가능한 언어 말뭉치를 생성·관리하는 웹 기반 평가 시스템입니다.",
    projectReflection:
      "비개발자 사용자를 위한 직관적인 UI를 설계하면서 사용자 중심 사고의 중요성을 깊이 이해했고, 단독 개발이지만 확장 가능한 아키텍처를 설계하는 것의 중요성을 배웠습니다.",
    structuralContributions: [
      {
        title: "문단–문장–평가 UI 구조 재설계로 작업 흐름 명확화",
        summary: "평가 업무를 3단 UI 구조로 분리하여 작업 효율을 개선하고 평가 오류를 감소시켰습니다.",
        category: "UX 개선",
        primaryCategory: "평가 플로우 UX",
        background:
          "문단 전체를 읽고 대상 문장을 찾아 평가해야 하는 복잡한 흐름으로 작업자가 단계별로 혼란을 겪었고, 평가 대상 문장과 일반 문장의 시각적 구분이 부족해 잘못된 문장을 평가하는 오류가 발생했습니다.",
        solution:
          "문단–문장–평가 UI 구조를 재설계해 작업 흐름을 명확히 분리하고, 평가 과정에서 발생하던 혼란과 오류를 감소시켜 전체 평가 효율을 유의미하게 개선했습니다. 평가 대상 문장의 시각적 구분을 강화하고 정보 탐색 영역과 입력 영역을 분리해, 잘못된 문장 평가율을 낮추고 사용자 집중도 및 평가 정확도를 향상시켰습니다.",
        technologies: ["Ant Design", "UI Flow Design"],
        reflection: "복잡한 업무를 단계별로 분리하여 사용자의 인지 부담을 줄이는 것이 얼마나 중요한지 배웠습니다.",
      },
      {
        title: "약 15만건 대규모 데이터 처리 환경의 초기 로딩·렌더링 지연 문제 해결",
        summary: "페이지네이션과 Lazy Loading을 도입해 대량 데이터 렌더링 성능을 근본적으로 개선했습니다.",
        category: "성능 최적화",
        primaryCategory: "데이터 로딩 최적화",
        background:
          "약 15만건 이상의 대규모 데이터를 처리하는 환경에서 초기 로딩 시간이 길고 렌더링 지연 문제가 발생했습니다.",
        solution: "페이지네이션과 Lazy Loading을 도입해 초기 로딩 시간과 렌더링 지연 문제를 근본적으로 해결했습니다.",
        technologies: ["Pagination", "Lazy Loading"],
        reflection: "대용량 데이터를 효율적으로 처리하는 전략을 배웠고, 초기 로딩 최적화의 중요성을 이해했습니다.",
      },
      {
        title: "Redux Toolkit과 Feature 단위 구조 적용",
        summary: "단독 개발 환경에서도 확장과 수정이 용이한 유지보수성 높은 프론트엔드 구조를 수립했습니다.",
        category: "아키텍처",
        primaryCategory: "Feature 모듈화",
        background:
          "단독 개발 프로젝트 특성상 컴포넌트·상태 관리·API 로직이 한 파일에 섞여 구조가 복잡해졌고, 기능이 늘어날수록 코드 흐름 파악과 유지보수가 어려워졌습니다.",
        solution:
          "Redux Toolkit과 Feature 단위 구조를 적용해 단독 개발 환경에서도 확장과 수정이 용이한 유지보수성 높은 프론트엔드 구조를 수립했습니다.",
        technologies: ["Redux Toolkit", "Duck Pattern", "Feature-based Architecture"],
        reflection: "단독 개발 환경에서도 미래의 확장성을 고려한 아키텍처를 설계하는 것의 중요성을 배웠습니다.",
      },
    ],
    period: "2021.12 - 2022.04",
    role: "프론트엔드 개발 (단독)",
    totalFeDevelopers: 1,
    technologies: ["React", "JavaScript", "Redux Toolkit", "Ant Design"],
  },
  {
    projectId: 5,
    companyId: "media-corpus",
    title: "비윤리적 표현 라벨링 시스템",
    subtitle: "국립 국어원 - 말뭉치 언어의 사회적 인식 조사 분류 사업 참여",
    image: "/media-logo-1.png",
    background:
      "온라인 텍스트에서 비윤리적·차별적 표현을 문장 단위로 선택·분류하고, 라벨 정보를 구조화된 데이터로 축적해 AI 학습 및 분석에 활용 가능한 언어 데이터셋을 구축하는 웹 기반 라벨링 시스템입니다.",
    projectReflection:
      "사용자가 자연스럽게 느끼는 인터랙션을 구현하는 것의 중요성을 배웠습니다. 드래그라는 익숙한 동작을 활용하여 복잡한 라벨링 작업을 단순화한 것이 사용자 만족도를 크게 향상시켰고, 대용량 데이터 처리에서 가상 스크롤의 효과를 직접 체감했습니다.",
    structuralContributions: [
      {
        title: "드래그 기반 텍스트 선택과 컨텍스트 메뉴를 결합한 라벨링 Flow 설계",
        summary: "반복 입력 단계를 최소화하고 직관적인 인터랙션으로 라벨링 속도와 정확도를 동시에 개선했습니다.",
        category: "UX 개선",
        primaryCategory: "라벨링 UX 개선",
        background:
          "텍스트 내 특정 영역을 선택하여 라벨링해야 하는데, 기존 방식은 단계가 많고 직관적이지 못해 작업 효율이 떨어졌습니다.",
        solution:
          "드래그 기반 텍스트 선택과 컨텍스트 메뉴를 결합한 라벨링 Flow를 설계해, 반복 입력 단계를 최소화하고 직관적인 인터랙션으로 라벨링 속도와 정확도를 동시에 개선했습니다.",
        technologies: ["window.getSelection API", "Context Menu"],
        reflection: "사용자가 익숙한 동작(드래그)을 활용하여 복잡한 작업을 단순화하는 방법을 배웠습니다.",
      },
      {
        title: "IntersectionObserver 기반 무한 스크롤 적용",
        summary:
          "약 40만 건 규모의 텍스트 데이터를 렌더링하면서도 브라우저 성능 저하 없이 작업 가능하도록 개선했습니다.",
        category: "성능 최적화",
        primaryCategory: "무한 스크롤 최적화",
        background:
          "400,000건 규모의 텍스트 데이터를 한 번에 렌더링할 경우 브라우저 멈춤 현상이 발생했고, 초기 로딩 시간이 길며 메모리 사용량이 불필요하게 증가했습니다.",
        solution:
          "IntersectionObserver 기반 무한 스크롤을 적용해 약 40만 건 규모의 텍스트 데이터를 렌더링하면서도 브라우저 성능 저하 없이 작업 가능하도록 개선했습니다. 가상 스크롤링을 도입해 DOM 노드 수를 최소화하고, 초기 로딩 시간과 스크롤 시 렌더링 부하를 유의미하게 감소시켰습니다.",
        technologies: ["IntersectionObserver", "Virtual Scrolling", "react-window"],
        reflection:
          "가상 스크롤링의 효과를 직접 체감했고, 대용량 데이터를 다루는 애플리케이션에서 성능 최적화의 필수성을 이해했습니다.",
      },
      {
        title: "실시간 작업자 진행률·라벨 품질 확인 모니터링 대시보드 구축",
        summary: "운영팀이 작업 현황과 품질 이슈를 즉시 파악하고 관리할 수 있는 체계를 마련했습니다.",
        category: "UX 개선",
        primaryCategory: "품질 관리 대시보드",
        background:
          "대규모 라벨링 작업에서 작업자별 진행 상황과 품질 상태를 한눈에 파악하기 어려웠고, 검수자와 작업자 간 피드백 흐름이 없어 품질 관리 공백이 존재했습니다.",
        solution:
          "실시간 작업자 진행률·라벨 품질을 확인할 수 있는 모니터링 대시보드를 구축해, 운영팀이 작업 현황과 품질 이슈를 즉시 파악하고 관리할 수 있는 체계를 마련했습니다.",
        technologies: ["Dashboard", "Quality Management", "Real-time Monitoring"],
        reflection:
          "운영자를 위한 대시보드가 제품의 품질 관리에 얼마나 중요한지 이해했고, 다양한 사용자 페르소나를 고려한 설계의 중요성을 배웠습니다.",
      },
    ],
    period: "2021.06 - 2021.10",
    role: "프론트엔드 개발 (단독)",
    totalFeDevelopers: 1,
    technologies: ["React", "JavaScript", "Redux Toolkit", "Ant Design"],
  },
]

export default projectsData
