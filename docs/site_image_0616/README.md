# Site Image 0616 Extracted Materials

## Source

- PDF: `C:\Users\jmyang95\Downloads\사이트_이미지안_0616.pdf`

## Folders

- `pages/`
  - PDF 각 페이지를 그대로 렌더링한 PNG 7장
- `embedded_images/`
  - PDF 내부에 포함된 이미지 객체를 페이지별로 전부 분리 저장
- `unique_images/`
  - 중복 제거 기준으로 정리한 개별 이미지 자산 48개
- `usable_assets/`
  - 실제 재사용 가능성이 높은 이미지 38개만 선별한 폴더
- `text/`
  - 원문 추출본, 정리된 영문본, 한글 번역본, 카피 검토본
- `meta/`
  - 페이지별 텍스트 JSON, 이미지 매니페스트 CSV, 추출 요약 JSON

## Key Files

- `text/original_en_raw.txt`
  - PDF에서 그대로 뽑은 원문 텍스트
- `text/original_en_clean.md`
  - 사람이 바로 복사해서 쓸 수 있게 정리한 영문 카피
- `text/korean_translation.md`
  - 위 영문 정리본의 한글 번역
- `text/content_issue_review_ko.md`
  - 오탈자, 표현 수정 후보, 미완성 카피 분석
- `meta/embedded_images_manifest.csv`
  - 페이지별 추출 이미지 목록
- `meta/pages.json`
  - 페이지별 텍스트와 이미지 정보
- `meta/summary.json`
  - 전체 추출 결과 요약
- `usable_assets/usable_assets_manifest.csv`
  - 선별된 실사용 이미지 목록
- `usable_assets/usable_assets_manifest.md`
  - 카테고리별 선별 이미지 설명
- `usable_assets/usable_assets_contact_sheet.png`
  - 선별 이미지 미리보기 시트

## Extraction Summary

- Rendered pages: 7
- Embedded images extracted: 124
- Unique embedded images: 48
- Curated usable assets: 38

## Notes

- PDF 안의 일부 한글은 폰트 인코딩 문제로 `original_en_raw.txt`에서 깨져 보입니다.
- 깨진 한글 메모는 `original_en_clean.md`와 `content_issue_review_ko.md`에 사람이 읽을 수 있게 복원했습니다.
- `usable_assets/`에는 사진, 인물, 다이어그램, 표, 지도, 로고, 카드형 이미지, 핵심 아이콘만 남겼습니다.
- 선, 버튼 외곽선, 스크롤 표시, 플러스 버튼, 장식용 분할 조각 같은 잡음 자산은 `usable_assets/`에서 제외했습니다.
- 일부 PNG는 투명 배경이라 이미지 뷰어의 배경색에 따라 검게 보일 수 있습니다.
