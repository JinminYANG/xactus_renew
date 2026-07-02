# 📋 XACTUS 웹사이트 전체 개선사항 - 최종 정리

## 🎨 1. 새롭게 도입된 기술/라이브러리

### 1.1 Framer Motion 12.38.0
**용도**: React 애니메이션 라이브러리

**적용 영역**:
- 페이지 전환 애니메이션 (Page Route Transitions)
- 컴포넌트 Staggered Fade-In 효과
- PipelineChart 진행률 바 애니메이션
- 카드 호버/스케일 효과

**구체적 사용**: 
- AnimatePresence + motion.div로 페이지 래핑
- pageVariants로 전환 효과 정의 (opacity, y, scale, duration 0.32s)
- 모든 섹션 카드에 staggered delays 적용 (delay: idx * 0.08s)

### 1.2 Google Fonts - Cinzel
**폰트 종류**: Cinzel (serif, 프리미엄 디스플레이 폰트)

**폰트 무게**: 400, 600, 700, 900

**적용 대상**: 모든 h1, h2 제목 (높은 위계의 텍스트)

**효과**: 전문성 & 럭셔리한 느낌 추가

---

## 🎭 2. 새로운 컴포넌트 추가

### 2.1 DotNavigation
**위치**: 화면 우측 고정

**기능**:
- 현재 섹션 표시 (01/04, 02/04 등)
- 섹션 간 빠른 이동
- 활성 섹션 하이라이트 (초록색 빛 + 펄스 링)
- 호버 시 섹션명 표시

**동작**:
- Intersection Observer로 현재 섹션 자동 추적
- 클릭 시 smooth scroll + active 즉시 업데이트
- 모바일에서 숨김 (768px 이하)

### 2.2 MotionProvider
**기능**: prefers-reduced-motion 시스템 설정 감지

**동작**: 사용자가 모션 감소 설정 시 모든 애니메이션 비활성화

**클래스**: html.reduced-motion 추가 시 transition/animation duration 0.001ms로 설정

### 2.3 MotionToggle
**위치**: Header 내 컨트롤

**기능**: 사용자가 수동으로 모션 on/off 전환

**아이콘**: ✨ (활성화) / 🔇 (비활성화)

**상태**: Zustand에 reducedMotion 상태로 저장

### 2.4 ScrollToTop
**기능**: 라우트 변경 시 페이지 맨 위로 자동 스크롤

**대상**: .app-scroll-container 또는 window

### 2.5 AnimatedBackground (고급 배경)
**구조**: 캔버스 기반 분자/신경망 구조 애니메이션

**계층 구조**:
- Hub (중앙 노드): 펄스 효과, 강한 투명도
- Node (원자): 오비탈 궤도
- Electron (전자): 빠른 움직임, 낮은 투명도

**연결 타입**:
- Hub↔Node: 화학 결합 (굵은 선)
- Node↔Electron: 오비탈 (얇은 선)
- Hub↔Hub: 신경망 시냅스 (점선)

**효과**: 과학적/전문성 높은 배경 분위기

**모션 감소 지원**: reducedMotion 시 비활성화

### 2.6 ParticleField
**구조**: Static SVG 파티클 (애니메이션 플로팅)

**파티클 수**: 5개 (p-1 ~ p-5)

**애니메이션**:
- particle-float: 6-8s 상향 운동
- particle-twinkle: 2.8-4s 반짝임 (생성/소멸)
- 각 파티클마다 staggered delay 적용
- 중심 코어 + 확산 halo 효과

---

## 🎬 3. 페이지 레이아웃 및 아키텍처 변경

### 3.1 App.tsx - 전체 구조 개선
- AnimatePresence 래퍼 추가
- AnimatedRoutes 컴포넌트 with pageVariants
- MotionProvider & ScrollToTop 컴포넌트 통합
- Footer를 main 내부로 이동

### 3.2 Scroll Snap Architecture
**컨테이너**: .app-scroll-container (100vh, scroll-snap-type: y mandatory)

**각 섹션**: height: 100vh, scroll-snap-align: start, scroll-snap-stop: always

**장점**: 자연스러운 풀페이지 스크롤 경험, 모바일 최적화

### 3.3 Header 고정화 + 스크롤 감지
- position: sticky → fixed (z-index 2000)
- Scroll detection with requestAnimationFrame
- Hide-on-scroll: translateY(-80) 스크롤 다운 시, y: 0 스크롤 업 시
- Blur 효과: backdropFilter blur(20px) saturate(1.5)

### 3.4 언어 선택기 재설계
- 이전: 단순 `<select>` 드롭다운
- 이후: Pill-shaped toggle buttons (KO/EN)
- Active state: var(--xactus-green) background + box-shadow glow
- 필 형태 토글 (.lang-pill)
- KO / EN 버튼 2개
- 활성 버튼: xactus-green 배경 + glow 효과
- 호버 시 색상 변화

### 3.5 테마 토글 재설계
- 이전: Emoji 아이콘 (☀️/🌙)
- 이후: SVG 아이콘 (SunIcon/MoonIcon)
- 32x32px 원형 버튼, semi-transparent hover effect

---

## 🎨 4. PipelineChart 완전 재설계

### 4.1 구조 변경
- **이전**: 테이블 그리드 (6 columns)
- **이후**: 
  - 표 헤더 (pipeline-header) 분리
  - 각 약물별 카드형 행 (pipeline-row-card)
  - 모바일 반응형 레이아웃

### 4.2 Header 구성
- **좌측**: Drug info 레이블
- **중앙**: 각 stage별 레이블 (6단계)
- **우측**: Progress 레이블

### 4.3 Row Card 구성
- Drug 이름 + 현재 단계 (2/6)
- Glass-morphism 스타일
- Progress bar: 7px height, gradient #27A94B → #00D9FF

### 4.4 호버 효과
- translateY(-8px) scale(1.02)
- Shadow enhancement

### 4.5 모바일 최적화
- 768px 이하: 표 헤더 숨김
- 카드 레이아웃: column (세로 정렬)
- 모든 요소 full-width
- 패딩/마진: clamp() 사용

### 4.6 i18n 통합
- chartHeaders 번역 키 (drug, candidateCompound, targetDiscovery 등)
- 6단계 각각의 한영/영 번역

---

## 📱 5. 모바일 100vh 최적화

### 5.1 적용된 변경사항

#### Home.tsx
- Row gap: g-4 → g-2 + dynamic rowGap: clamp(12px, 2vh, 20px)
- 카드 padding: clamp(12px, 1.5vw, 16px) (축소)
- 제목 marginBottom: mb-3 → clamp(10px, 1.5vw, 12px) (축소)
- 제목 폰트: clamp(0.95rem, 1.4vw, 1.05rem) (축소)

#### Pipeline.tsx
- 섹션 제목 margin: clamp(32px, 6vw, 48px) → clamp(20px, 4vw, 32px) (37% 축소)
- Row gap: g-4 → g-2 + rowGap: clamp(16px, 3vh, 24px)
- 카드 제목: marginBottom: 12px → clamp(8px, 1.2vw, 10px) (33% 축소)
- 카드 제목 폰트: clamp(1rem, 1.5vw, 1.1rem) → clamp(0.95rem, 1.4vw, 1.05rem)

#### Platform.tsx
- 섹션 제목: 37% margin 축소
- Row gap 동적화: rowGap: clamp(16px, 3vh, 24px)
- Impact 카드 제목: 37% margin 축소
- Core Values h4: margin 감소 및 폰트 축소

#### Company.tsx
- Leadership 이미지: 180px → clamp(120px, 60vw, 180px) (반응형)
- Contact 카드 padding: clamp(12px, 2vw, 18px)
- 연락처 링크: wordBreak: break-all 추가
- 모든 리스트 marginBottom: 8px → 3px

### 5.2 모바일 성과
- 전체 섹션 margin 37-40% 축소
- 모든 페이지 100vh 이내 맞춤
- 부드러운 모바일 스크롤
- 텍스트 가독성 유지

---

## ✨ 6. CSS & 스타일 시스템 대폭 개선

### 6.1 새로운 CSS 변수
- `--accent-cyan: #00D9FF` (새로운 강조 색상)
- `--motion-fast: 180ms`, `--motion-medium: 320ms`, `--motion-slow: 520ms`
- `--motion-ease-out: cubic-bezier(.22,1,.36,1)` (전문적 easing)

### 6.2 카드 스타일 대폭 개선
- Glass-morphism: linear-gradient(135deg, rgba(255,255,255,0.75)...)
- Backdrop-filter: blur(8px) saturate(120%)
- Box-shadow: 여러 레이어 (ambient + inset highlights)
- Hover: translateY(-8px) scale(1.02) + shadow 강화

### 6.3 Sheen (셰인) 효과
- @keyframes sheen-move: 12s linear, 회전 gradient sweep
- Hero section에 적용, 고급 시각 효과

### 6.4 Core Value Box
- 새로운 styling with glassmorphism
- Grid layout with responsive gaps

### 6.5 파티클 필드 애니메이션
- @keyframes particle-float: 6-8s 상향 운동
- @keyframes particle-twinkle: 2.8-4s 반짝임
- @keyframes pulse-ring: 2s ease-out 펄스

### 6.6 Scrollbar 숨김
- -webkit-scrollbar 제거 (커스텀 스크롤바)
- 모바일 최적화

---

## 🎯 7. 전역 애니메이션 이벤트

### 7.1 페이지 진입 애니메이션
- opacity: 0 → 1
- y: 8 → 0
- scale: 0.998 → 1
- duration: 0.32s

### 7.2 Staggered 컴포넌트 애니메이션
- 각 컴포넌트에 delay: idx * 0.08s
- 자연스러운 순차 출현 효과

### 7.3 Intersection Observer 패턴
- threshold: 0.6 (DotNav), 0.12 (content)
- 화면 진입 시 자동 애니메이션 트리거
- 리-트리거 지원 (re-entering on scroll)

### 7.4 Header 숨김/표시 애니메이션
- Scroll 다운: translateY(-80px)
- Scroll 업: translateY(0)
- Smooth transition with Framer Motion

---

## 🎨 8. 라이트/다크 모드 개선

### 8.1 라이트 모드 배경
- Hero section: linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(250,250,252,0.8) 100%)
- Mission section: rgba(235, 242, 255, 0.5)
- Core Tech section: rgba(240, 246, 255, 0.5)

### 8.2 다크 모드 배경
- Hero section: linear-gradient(135deg, rgba(20,30,60,0.6) 0%, rgba(15,23,42,0.9) 100%)
- Mission section: rgba(31, 41, 55, 0.6)

### 8.3 로고 색상 적응화
- Light mode: 검정색
- Dark mode: 흰색

### 8.4 링크 / 네비게이션 적응화
- Light mode: dark text
- Dark mode: light text
- Smooth color transition

---

## 🔄 9. 상태 관리 (Zustand) 업데이트

**useAppStore 추가 상태**:
- `reducedMotion: boolean` (기본값: false)
- `toggleReducedMotion()` 메서드
- `isDarkMode` 기본값: **true** (다크 모드가 기본)
- `language` 기본값: **'en'** (영어가 기본)
- Storage name 버전화: 'app-storage' → 'app-storage-v2'

---

## 📊 10. i18n (국제화) 확장

**새로운 번역 키**:
```
pipeline.chartHeaders: {
  drug, candidateCompound, targetDiscovery,
  leadIdentification, leadOptimization,
  preclinical, clinicalApplication, progress
}

pipeline.stages: {
  candidateCompound: '후보물질' / 'Candidate Compound',
  targetDiscovery: '타겟 발굴' / 'Target Discovery',
  leadIdentification: '리드 탐색' / 'Lead Identification',
  leadOptimization: '리드 최적화' / 'Lead Optimization',
  preclinical: '전임상' / 'Preclinical',
  clinicalApplication: '임상 단계' / 'Clinical Stage'
}

pipeline.developmentStage: '개발 단계' / 'Development Stage'
```

---

## 📈 11. 성능 최적화

### 11.1 폰트 관련
- Google Fonts 프리커넥트 추가 (성능 향상)
- Cinzel: wght 400, 600, 700, 900만 로드

### 11.2 애니메이션 최적화
- requestAnimationFrame 사용 (60fps)
- prefers-reduced-motion 시스템 설정 존중
- CSS 트랜지션: 0.001ms (모션 감소 시)

### 11.3 메모리 관리
- Intersection Observer cleanup
- Event listener 제거
- Canvas 재사용 (AnimatedBackground)

---

## 🎯 12. 접근성 (a11y) 개선

### 12.1 ARIA 속성
- aria-label, aria-labelledby 추가
- aria-pressed: MotionToggle 상태 표시

### 12.2 의미론적 HTML
- `<motion.div>` 내 Route 래핑
- Semantic heading hierarchy (h1 → h2 → h3)
- aria-hidden="true" for decorative elements

### 12.3 키보드 네비게이션
- Header nav links Tab 키 이동 가능
- DotNavigation 버튼 Tab/Enter 지원

---

## 🚀 13. 주요 시각적 개선

| 항목 | 기존 | 신규 |
|------|------|------|
| Header | Sticky, 흰색 배경 | Fixed, 스크롤 감지, dark-glass |
| 카드 | 평면, 얇은 border | 3D glass-morphism, 복합 shadow |
| 진행률 차트 | 테이블 형식 | 카드형 rows with gradient bar |
| 폰트 | 기본 sans-serif | Cinzel (h1/h2) + 기본 |
| 배경 | 단색 | Sheen 셰인 + 파티클 필드 |
| 애니메이션 | 정적 | Framer Motion (전역) |
| 모바일 | 문제 있음 (100vh 초과) | 최적화 완료 |

---

## 📝 14. 변경 파일 요약

**추가된 파일 (9개)**:
- DotNavigation/ (TSX + CSS)
- MotionProvider.tsx
- MotionToggle/ (TSX + CSS)
- ScrollToTop.tsx
- AnimatedBackground.tsx
- ParticleField.tsx
- CHANGES_SUMMARY.md

**수정된 파일 (25+개)**:
- App.tsx, App.css
- Header/index.tsx, Header/Header.css
- LanguageSelector/
- ThemeToggle/
- PipelineChart/ (TSX + CSS)
- Home.tsx, Pipeline.tsx, Platform.tsx, Company.tsx
- Footer/Footer.css
- useAppStore.ts
- i18n.ts
- styles/global.css
- index.html
- package.json

---

## 💡 발표 핵심 포인트

### **"UX/UI 근본적 혁신 + 성능 & 접근성 최적화"**

#### 동적 애니메이션 시스템
- Framer Motion 도입으로 전문성 있는 페이지 전환
- Staggered animations로 자연스러운 요소 출현
- 사용자 모션 감소 설정 존중 (a11y)

#### 모바일-우선 설계
- 100vh 제약 완전 해결
- clamp()로 유연한 반응형
- DotNavigation으로 직관적인 섹션 네비게이션

#### 시각적 고급화
- Glass-morphism 카드 디자인
- 분자/신경망 구조 배경 애니메이션
- Cinzel 프리미엄 폰트
- 다크/라이트 모드 전면 개선

#### 기술적 우수성
- React 19 최신 기능 활용
- Canvas 기반 고성능 배경
- Intersection Observer 최적화
- 접근성 표준 준수

---

## 💡 발표 핵심 포인트 2

### 핵심 포인트 4가지

#### 1️⃣ 모바일 최적화 = 가장 실질적인 성과
- 문제: 모든 페이지가 모바일에서 100vh 초과 (스크롤 필요)
- 해결: 섹션 마진 37-40% 축소, clamp() 반응형 적용
- 결과: 모든 페이지가 모바일에서 정확히 100vh 내 맞춤
- 발표 포인트: "사용자 경험 직결 개선" → 스크롤 스트레스 제거

#### 2️⃣ 시각적 프리미엄화 = 전문성 향상
- Framer Motion: 페이지 전환 0.32s 애니메이션 (정적 → 동적)
- Cinzel 폰트: 기본 sans-serif → 럭셔리 serif (h1/h2)
- Glass-morphism: 평면 카드 → 3D 입체 카드 (blur, shadow layers)
- 발표 포인트: "브랜드 가치 상승" → 전문성 있는 기업 이미지

#### 3️⃣ 새로운 네비게이션 시스템 = UX 핵심 개선
- DotNavigation: 현재 위치 항상 표시 (01/04 형식)
- Intersection Observer: 스크롤 시 자동 추적
- Smooth Scroll: 섹션 간 부드러운 이동
- 발표 포인트: "사용자 길 찾기 직관화" → 웹사이트 구조 명확화

#### 4️⃣ 접근성 + 성능 = 기술적 우수성
- MotionProvider: 시각 장애인 설정 존중 (prefers-reduced-motion)
- Canvas 배경: 일반 이미지 대비 가볍고 동적
- 60fps 애니메이션: requestAnimationFrame 최적화
- 발표 포인트: "모든 사용자 배려" → 윤리적 기술 활용