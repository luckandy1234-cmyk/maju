# THE TABLE — 개발 로그

> 최종 업데이트: 2026-06-03  
> 현재 단계: **Phase 0 — 정적 랜딩 + 사전 신청 수집**

---

## 프로젝트 한 줄 정의

"워런 버핏 점심 경매" 모델을 한국·식사 단위로 재해석한 **프리미엄 오프라인 멘토십 플랫폼**.  
멘티는 만나기 어려운 멘토와 식사 자리를 사고, 멘토는 수익 일부를 자기 명의로 기부한다.

---

## 현재 디렉토리 구조

```
The table/
├── landing.html                # ✅ 정적 랜딩 페이지 (Phase 0 메인)
├── DEVLOG.md                   # 이 파일
├── THE_TABLE_개발지침서.md      # 개발 명세서 (스택·도메인·DB·화면 명세)
├── THE_TABLE_제로투원지침.md    # 사업 철학·실행 체크리스트
├── THE_TABLE_사업기획서.docx    # 사업 기획서 전문
├── reference/                  # 디자인 레퍼런스 이미지
│   ├── ref.1.png
│   └── ref.2.png
└── the-table/                  # Next.js 14 앱 (Phase 1 준비 중)
    ├── app/
    │   ├── page.tsx            # 랜딩 라우트 (컴포넌트 조합)
    │   ├── layout.tsx
    │   └── globals.css
    ├── components/
    │   ├── landing/            # 섹션별 컴포넌트 (구버전 — 업데이트 필요)
    │   │   ├── HeroSection.tsx
    │   │   ├── ProblemSection.tsx
    │   │   ├── SolutionSection.tsx
    │   │   ├── HowItWorksSection.tsx
    │   │   ├── MentorsSection.tsx
    │   │   ├── TrustSection.tsx
    │   │   ├── TiersSection.tsx
    │   │   ├── TestimonialsSection.tsx
    │   │   ├── FaqSection.tsx
    │   │   ├── CtaSection.tsx
    │   │   └── ScrollRevealProvider.tsx
    │   └── layout/
    │       ├── Navbar.tsx
    │       └── Footer.tsx
    ├── package.json            # next@16.2.6, react@19.2.4, tailwind@4
    └── ...
```

---

## 작업 로그

### 2026-06-02
- `landing.html` 최초 생성 (다크 테마, 3단계 티어 구조)
- 제로투원 사고 기반 스토리 구조 설계
  - 숨겨진 진실(접근권 불평등) → 해결책(기부 명분) → 신뢰(에스크로+큐레이션)

### 2026-06-03
**랜딩 페이지 v2 — 콘텐츠 리팩터**
- [x] MVP 기준으로 테이블 타입 단일화: Coffee/Premium/Signature 3티어 → **1:1 단독 / 소수 라운드** 2포맷
- [x] 허수 수치 제거: "엄선된 멘토 47+", "누적 기부금 ₩3.2M", "평균 만족도 4.9★" → 삭제
- [x] THE TABLE 이름 이유 섹션 추가: "A Seat at the Table" 직관적 설명
- [x] 스토리텔링 섹션 신설: 워런 버핏 점심 → "기회를 산다는 것" 3포인트
- [x] 실제 후기 섹션 완전 제거 (검증 전 신뢰 요소 사용 금지)

**랜딩 페이지 v3 — 디자인 리팩터**
- [x] 다크 테마 → 라이트/크림 테마 전면 전환
  - 배경: `#FAF6EE` (따뜻한 오프화이트)
  - 구분 섹션: `#EFE5D5` (웜 베이지)
  - 카드: 흰색 + subtle 그림자
  - 골드 텍스트: 밝은 배경 최적화 (`#A07828 → #C9A84C → #A07828`)

**신청 모달 구현**
- [x] 멘티 신청 모달: 이름·이메일·관심분야·신청이유 → Formspree 비동기 제출
- [x] 멘토 신청 모달: 이름·이메일·직함/소속·주제·참여동기 → Formspree 비동기 제출
- [x] 배경 클릭 / ESC 키로 모달 닫기
- [x] 제출 성공 → 완료 메시지 전환 (페이지 리로드 없음)
- [x] 전체 CTA 버튼 → 모달 트리거로 전환

---

## 현재 상태 요약

| 항목 | 상태 | 비고 |
|---|---|---|
| 정적 랜딩 페이지 | ✅ 완료 | `landing.html` |
| 멘티 신청 모달 | ✅ 완료 | Formspree ID 교체 필요 |
| 멘토 신청 모달 | ✅ 완료 | Formspree ID 교체 필요 |
| Next.js 앱 스캐폴딩 | ⚠️ 구버전 | `the-table/` 컴포넌트 업데이트 필요 |
| Supabase 연동 | ❌ 미착수 | Phase 1 |
| Toss Payments 에스크로 | ❌ 미착수 | Phase 1 |
| 도메인 로직 (`lib/domain`) | ❌ 미착수 | Phase 1 |

---

## Formspree 세팅 (필수)

`landing.html`에서 아래 두 플레이스홀더를 실제 Formspree Form ID로 교체하세요.

```
YOUR_MENTEE_FORM_ID  →  formspree.io에서 생성한 멘티 폼 ID
YOUR_MENTOR_FORM_ID  →  formspree.io에서 생성한 멘토 폼 ID
```

- 무료 플랜: 월 50건, 이메일 알림 포함
- 신청 수신 이메일: luckandy1234@gmail.com 연동

---

## 다음 단계 (Phase 1 로드맵)

개발지침서 §9 마일스톤 기준:

| 마일스톤 | 내용 | 우선순위 |
|---|---|---|
| **M0** | Supabase 연결, 인증(로그인), 기본 레이아웃 | 🔴 다음 |
| **M1** | `lib/domain` — 티어·기부·예약상태 순수함수 + 단위테스트 | 🔴 다음 |
| **M2** | DB 마이그레이션·RLS·멘토/멘티 프로필 CRUD | 🟡 |
| **M3** | 테이블 생성/목록/상세, 1:1·라운드 포맷 가드 | 🟡 |
| **M4** | 큐레이션 승인 → Toss 에스크로 → 정산·기부 배분 | 🟡 |
| **M5** | 플랫폼 내 메시지(마스킹), 후기, 신고·차단 | 🟢 |
| **M6** | 운영진 대시보드 (승인 큐·신고·정산) | 🟢 |
| **M7+** | 시그니처 옥션, 살롱 시리즈, B2B | ⚪ Phase 2 |

### M0 시작 전 체크리스트
- [ ] Supabase 프로젝트 생성 → `.env.local`에 키 세팅
- [ ] `the-table/` 컴포넌트를 최신 `landing.html` 기준으로 동기화
- [ ] Formspree ID 교체 및 실제 신청 테스트

---

## 기술 스택

| 영역 | 선택 |
|---|---|
| 프레임워크 | Next.js 16 (App Router) + TypeScript |
| 스타일 | Tailwind CSS v4 + shadcn/ui (예정) |
| DB / Auth | Supabase (Postgres + RLS + Auth) |
| 결제 | Toss Payments (에스크로) |
| 폼 (임시) | Formspree |
| 배포 | Vercel |
| 알림 | Resend 또는 Solapi (카카오 알림톡) |

---

## 절대 원칙 (코드 작업 시 항상)

1. **프리미엄 포지셔닝** — 큐레이션·희소성 기본값
2. **오프라인 경험이 본질** — 온라인은 매칭·결제 도구
3. **신뢰·안전이 사활** — 양방향 보호 전제
4. **기부-명예가 코어** — 부가 기능이 아님
5. **플랫폼 외부로 새지 않게** — 연락처·SNS 기본 차단
