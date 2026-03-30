# XACTUS Onco - 항암 신약 개발 정보 포탈

> **첫 번째 혁신 신약 개발 및 암 환자 맞춤형 치료 기회를 소개하는 회사 웹사이트**

XACTUS Onco 웹사이트는 항암 치료의 새로운 기준을 제시하는 XACTUS Inc.의 비전, 신약 파이프라인, 기술 플랫폼을 소개합니다. 
획기적인 항암 요법 개발을 통해 환자의 삶의 질을 향상시키고 중요한 의학적 필요를 충족시키는 회사의 미션을 전달합니다.

---

## 📋 주요 섹션

### 🏠 홈 (Home)
- XACTUS Onco의 핵심 가치와 미션 소개
- 실시간 입자 애니메이션 배경
- 회사의 비전 및 전략 메시지

### 🔬 파이프라인 (Pipeline)
- 현재 진행 중인 신약 개발 프로젝트
- 각 임상시험 단계별 진행 상황
- 약물 개발 타임라인 및 목표

### 🖥️ 플랫폼 (Platform)
- XACTUS 기술 플랫폼 소개
- 혁신적인 R&D 솔루션
- 임상 데이터 분석 및 환자 맞춤형 치료 기술

### 🏢 회사 정보 (Company)
- 조직 구성 및 경영진 소개  
- 회사 역사 및 주요 성과
- 연락처 및 위치 정보

---

## 🛠️ 기술 스택

| 분야 | 기술 |
|------|------|
| **프레임워크** | React 19 + TypeScript |
| **빌드 도구** | Vite |
| **상태관리** | Zustand |
| **UI 컴포넌트** | React-Bootstrap 2.8.0 |
| **애니메이션** | Framer Motion 12.38.0 |
| **다국어** | i18n 지원 (한국어, 영어) |
| **배포** | GitHub Pages |

---

## 🚀 시작하기

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

### 프로덕션 빌드
```bash
npm run build
```

### GitHub Pages 배포
```bash
npm run deploy
```

---

## ✨ 주요 기능

- ✅ **반응형 디자인**: PC, 태블릿, 모바일 모두 최적화
- ✅ **다크/라이트 모드**: 사용자 선호도에 따른 테마 전환
- ✅ **스크롤 스냅**: 섹션별 부드러운 스크롤 경험
- ✅ **애니메이션**: Framer Motion으로 구현한 부드러운 전환 효과
- ✅ **다국어 지원**: 한국어/영어 자동 전환
- ✅ **성능 최적화**: 번들 크기 최소화 및 빠른 로딩

---

## 📁 프로젝트 구조

```
src/
├── components/        # 재사용 컴포넌트
│   ├── Header/       # 상단 네비게이션
│   ├── Footer/       # 하단 푸터 (50vh 리뉴얼)
│   ├── AnimatedBackground/
│   ├── ParticleField/
│   └── ...
├── pages/            # 페이지 컴포넌트
│   ├── Home.tsx
│   ├── Pipeline.tsx
│   ├── Platform.tsx
│   └── Company.tsx
├── store/            # Zustand 상태관리
│   └── useAppStore.ts
├── lib/              # 유틸리티
│   └── i18n.ts
├── styles/           # 전역 스타일
└── hooks/            # 커스텀 훅
```

## 📝 라이선스

© 2026 XACTUS Inc. All rights reserved.

---