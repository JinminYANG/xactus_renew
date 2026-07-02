# PDF 카피 검토 메모

이 문서는 원본 PDF 안에 포함된 오탈자, 표현 수정 후보, 미완성 상태의 문구를 정리한 검토본입니다.

## 1. 명확한 오탈자 또는 수정 권장 표현

- `Treatement` -> `Treatment`
  - 푸터 문구 `Developing First-in-Class Cancer Therapeutics and Expanding Treatement Opportunities for Patients`에 반복적으로 등장합니다.
  - `Treatement`는 일반적인 영문 표기가 아니므로 `Treatment`로 수정하는 것이 맞습니다.

- `IRP2-Mediated Iron Hoeomstasis` -> `IRP2-Mediated Iron Homeostasis`
  - Technology 상세 페이지의 XO-004 경로 설명에서 확인됩니다.
  - `Hoeomstasis`는 `Homeostasis`의 철자 오류로 보입니다.

- `Headquarter` -> `Headquarters` 또는 `Head Office`
  - Contact 페이지의 위치 섹션 제목으로 들어가 있습니다.
  - 단일 사무실을 소개할 때도 일반적으로 `Headquarters` 또는 `Head Office`가 더 자연스럽습니다.

- `Cheif Business Officer` -> `Chief Business Officer`
  - About 페이지 Development Advisor 소개 문구에서 추출 텍스트 기준으로 확인됩니다.
  - 원본 시안에서도 오탈자일 가능성이 높으므로 확인이 필요합니다.

## 2. 의미는 통하지만 다듬으면 좋은 표현

- `5 min walk`
  - 문법적으로 큰 문제는 아니지만, 공식 사이트 문구라면 `5-minute walk` 또는 `A 5-minute walk from Ewha Womans Univ. Station`이 더 자연스럽습니다.

- `Stay informed about our latest achievements, partnerships, and corporate milestones.`
  - 무난한 표현이지만 Newsroom 톤을 더 강하게 주려면 `Explore our latest achievements, partnerships, and corporate milestones.`처럼 조정할 여지가 있습니다.

## 3. 오탈자는 아니지만 미완성 상태로 보이는 항목

- `Placeholder`
  - About 페이지 연혁, 자문단 카드 등에 다수 남아 있습니다.
  - 최종 공개 전에는 모두 실제 콘텐츠로 치환되어야 합니다.

- `@placeholder`
  - Contact 페이지 Social media 항목이 아직 임시값입니다.

- 내부 작업 메모가 화면에 그대로 포함되어 있습니다.
  - `펩진 참고: 마우스 오버하면 이미지 띄우기`
  - `드림팩 참고`
  - `protier 참고`
  - `테라시온 참고: 페이지 로딩될 때 파이프라인 애니메이션`
  - 시안 단계에서는 괜찮지만, 대외 공유본이나 실제 퍼블리싱본에서는 제거되어야 합니다.

## 4. 추출 과정에서 깨진 항목

- `개인정보처리방침`은 원문 PDF 내에서는 정상 한글로 보이지만, 텍스트 추출본에서는 폰트 인코딩 문제로 깨집니다.
- 일부 `beta` 기호, 한글 메모, 줄바꿈은 PDF 텍스트 추출 특성상 깨졌습니다.
- 따라서 최종 카피 검수는 `text/original_en_clean.md`와 `pages/page-*.png`를 같이 보는 것이 안전합니다.
