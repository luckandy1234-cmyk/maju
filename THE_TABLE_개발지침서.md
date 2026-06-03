# THE TABLE — 개발 지침서 (Claude Code Project Guide)

> 이 문서는 Claude Code가 읽는 프로젝트 컨텍스트 겸 개발 명세서입니다.
> 프로젝트 루트에 두고 필요 시 `CLAUDE.md`로 이름을 바꿔 사용하세요.
> 사업 배경 전체는 별도 `사업기획서 v1.1`을 참고. 이 문서는 **빌드 가능한 형태**로 핵심만 옮긴 것입니다.

---

## 0. 한 줄 정의

**THE TABLE** — "워런 버핏 점심 경매" 모델을 한국·식사 단위로 재해석한 **프리미엄 오프라인 멘토십 플랫폼**. 멘티는 만나기 어려운 멘토와의 식사/커피 시간을 예약·경매로 사고, 멘토는 그 대가의 일부를 자기 명의로 기부한다. (시간 판매가 아니라 **"의미 있는 시간 + 사회적 명분"**의 결합)

### 절대 원칙 (코드/UX가 항상 지켜야 할 것)
1. **프리미엄 포지셔닝** — 대중 박리다매 금지. 큐레이션·희소성이 기본값.
2. **오프라인 경험이 본질** — 온라인은 매칭·결제·정산 도구일 뿐, 가치는 대면에 있다.
3. **신뢰·안전이 사활** — 100번 중 1번의 사고도 치명적. 모든 기능은 양방향(멘토↔멘티) 보호를 전제로 설계.
4. **기부-명예가 코어** — 부가 기능이 아니라 제품의 중심.
5. **플랫폼 외부로 새지 않게** — 사적 연락처·SNS 노출 차단이 기본.

---

## 1. MVP 범위 (What to build first)

> 원칙: 완벽한 준비보다 **빠른 시작**. 커뮤니티·섭외는 사람이 하고, 앱은 그 거래를 받쳐주는 역할.

### MVP에 포함 (Phase 1)
- 멘토 프로필 / 멘티 프로필 (역할: mentor / mentee / operator)
- **테이블(이벤트) 생성·노출** — 1:1 및 1:N(1:4~5) 두 포맷
- 멘티 **신청(큐레이션 승인 기반)** — 자동 결제 아님, 운영진 승인 후 결제
- **에스크로 결제** (Toss Payments) + 노쇼/취소 정책
- **기부 배분 로직** (티어별 비율) + 멘토 명의 기부 기록
- **플랫폼 내 메시지** (연락처·SNS 미노출)
- **후기·신고** 시스템

### MVP에서 제외 → Phase 2+
- 시그니처 옥션(좌석 경매) 모듈
- 살롱 시리즈(구독/코호트)
- B2B 테이블·스폰서십
- 자동 매칭(AI), 임팩트 리포트 자동 생성

### 더 가벼운 시작(선택)
초기에는 노션+타입폼+수동 매칭으로 거래 자체를 검증하고, 검증된 흐름만 앱으로 옮기는 것도 유효. (앱 개발과 병행 가능)

---

## 2. 기술 스택 (기본 가정)

| 영역 | 선택 | 비고/대안 |
|---|---|---|
| 프레임워크 | **Next.js 14+ (App Router) + TypeScript** | 풀스택 단일 코드베이스, Claude Code 친화적 |
| 스타일 | **Tailwind CSS + shadcn/ui** | 빠른 프리미엄 UI |
| DB/Auth/Storage | **Supabase (Postgres + Auth + RLS + Storage)** | 대안: Firebase, Neon+Clerk |
| 결제 | **Toss Payments** (국내) | 대안: 포트원(아임포트), Stripe(해외 확장 시) |
| 배포 | **Vercel** | |
| 이메일/알림 | Resend 또는 Solapi(알림톡) | 카카오 알림톡 권장(국내) |

> **환경 메모:** 개발자는 Windows + PowerShell 환경. 명령 예시는 PowerShell 기준으로 안내할 것. 비밀키는 `.env.local`에 두고 **절대 커밋 금지**.

---

## 3. 디렉토리 구조 (제안)

```
the-table/
├─ CLAUDE.md                  # 이 지침서
├─ .env.local                 # 비밀키 (git ignore)
├─ app/                       # Next.js App Router
│  ├─ (public)/               # 비로그인: 랜딩, 테이블 목록/상세
│  ├─ (auth)/                 # 로그인/온보딩
│  ├─ (mentee)/               # 멘티 대시보드, 신청, 결제
│  ├─ (mentor)/               # 멘토 대시보드, 슬롯·기부 설정
│  ├─ (operator)/             # 운영진: 큐레이션 승인, 호스트 배정, 신고 처리
│  └─ api/                    # route handlers (webhook 등)
├─ components/                # UI 컴포넌트 (shadcn 기반)
├─ lib/
│  ├─ domain/                 # 도메인 규칙 (티어·기부·안전 정책)  ★핵심
│  ├─ payments/               # Toss 연동·에스크로
│  ├─ supabase/               # 클라이언트·RLS 헬퍼
│  └─ utils/
├─ db/
│  ├─ migrations/             # SQL 마이그레이션
│  └─ seed.ts
└─ tests/
```

> **`lib/domain/`이 가장 중요.** 비즈니스 규칙(아래 §5)은 UI가 아니라 여기에 순수 함수로 구현하고 테스트한다.

---

## 4. 데이터 모델 (Postgres / Supabase)

핵심 엔티티만. 모든 테이블은 `id (uuid)`, `created_at`, `updated_at` 포함.

```
User
  - role: enum('mentor','mentee','operator')   # 한 명이 멘토+멘티 겸할 수 있으면 별도 플래그
  - name, email, phone, verified_at
  - identity_verified: bool                    # 본인인증(필수)

MentorProfile (1:1 with User)
  - bio, expertise[], company, title
  - tier_eligibility: enum('signature','premium','coffee')
  - donation_rate: numeric                      # 멘토가 상향 선택 가능 (기본 티어값)
  - badges: { total_donated, mentee_count, charities[] }
  - is_screened_restricted: bool                # 청탁금지법 대상(공직자/언론/교직원) 여부 ★

MenteeProfile (1:1 with User)
  - bio, goals, links
  - trust_score                                 # 후기/신고 기반

Charity
  - name, registration_no, is_designated: bool  # 지정기부금단체 여부(영수증 발급)

Table (= 만남 이벤트)
  - mentor_id, host_operator_id (nullable)      # 1:N이면 호스트 배정 ★
  - tier: enum('signature','premium','coffee')
  - format: enum('one_on_one','round_table')
  - capacity: int (1 or 4~5)
  - meal_type: enum('coffee','brunch','lunch','dinner')
  - venue, scheduled_at, duration_min
  - price_per_seat: numeric                      # 고정가 (옥션 제외)
  - status: enum('draft','open','full','confirmed','done','canceled')

Booking (= 멘티의 좌석)
  - table_id, mentee_id
  - status: enum('applied','approved','rejected','paid','attended','no_show','refunded')
  - approved_by_operator_id                      # 큐레이션 승인 ★

Payment
  - booking_id, amount
  - escrow_status: enum('held','released','refunded')   # 만남 완료 후 release ★
  - toss_payment_key, receipt_url

Donation
  - payment_id, mentor_id, charity_id, amount
  - donor_display: text                          # "OOO 멘토 명의" (명예화) ★
  - receipt_issued: bool

Auction / Bid   # Phase 2
  - auction(table_id, start_price, end_at, status)
  - bid(auction_id, mentee_id, amount, created_at)

Message          # 플랫폼 내 소통 전용 ★
  - thread_id, sender_id, body
  - (연락처/외부 SNS 패턴은 입력 시 경고/마스킹)

Review (양방향)
  - table_id, author_id, target_id, rating, body

Report (신고)
  - reporter_id, target_id, table_id, reason, status
```

---

## 5. 핵심 도메인 규칙 (★ 코드가 강제할 것)

### 5.1 티어 & 수익/기부 배분
| 티어 | 가격 방식 | 기부 | 플랫폼 | 멘토 정산 |
|---|---|---|---|---|
| signature(옥션) | 경매 | 70~90% | 10~15% | 0% (명예 목적) |
| premium(다이닝) | 고정가 | 10% | 20% | 70% |
| coffee | 고정가 | 5% | 20% | 75% |

- 배분 계산은 `lib/domain/revenue.ts` 순수 함수로 구현 + 단위테스트.
- 멘토는 `donation_rate`를 **기본값 이상으로만** 상향 가능(명예 경쟁 유도). 하향 불가.
- 기부는 **멘토 명의**로 기록되고 프로필 배지에 누적 반영.

### 5.2 포맷 규칙
- `format='round_table'`이면 `capacity`는 4~5, **`host_operator_id` 필수**(운영진 동석). 미배정 시 `status='open'` 전환 차단.
- `format='one_on_one'`이면 capacity=1, 호스트 동석 불가 → **검증 단계(신원·후기·등급)를 더 엄격히 적용**.

### 5.3 큐레이션(예약 흐름)
1. 멘티가 `applied` (목적·신청서 제출)
2. **운영진/멘토 승인** → `approved` (자동 결제 금지)
3. 승인 후에만 결제 가능 → `paid`
4. 만남 후 `attended` 처리 시 에스크로 release + 기부 확정
- "아무나 받지 않는다"가 기본. 1:N은 동석자 구성을 운영진이 큐레이션.

### 5.4 신뢰·안전 헷지 (가장 중요)
- **플랫폼 내 소통만 허용.** 멘토/멘티 연락처·SNS는 기본 비노출. 메시지에 전화번호/계정 패턴 감지 시 경고·마스킹.
- **사후 접촉 옵트인.** 만남 후 개별 연락은 **양측 동의 시에만** 연결. 기본은 차단.
- **양방향 검증·평판.** 멘티→멘토, 멘토→멘티 양쪽 모두 신원·후기 기반 신뢰 점수.
- **즉시 신고·차단·퇴출** 프로세스, 후기 작성 의무화.
- 미인증(`identity_verified=false`) 사용자는 신청/오픈 불가.

### 5.5 청탁금지법 가드 (★ 법적 리스크)
- `is_screened_restricted=true`(공직자·언론인·교직원 등) 멘토는 **유료 식사 생성 차단**. 무상 또는 전액 기부 모드만 허용.
- 온보딩에서 해당 직군 여부를 반드시 수집·검증.

---

## 6. 화면 명세 (MVP)

- **랜딩** — 컨셉·신뢰 요소(안전·기부·큐레이션) 강조, 프리미엄 톤.
- **테이블 목록/상세** — 멘토·주제·포맷(1:1/라운드)·가격·기부 비율·남은 좌석.
- **멘티: 신청 → (승인 대기) → 결제 → 일정 확인 → 만남 후 후기**.
- **멘토: 슬롯·가격·기부율 설정, 신청자 승인, 기부 배지 확인**.
- **운영진: 큐레이션 승인 큐, 1:N 호스트 배정, 신고 처리, 거래/정산 모니터링**.

---

## 7. 비기능 요구사항

- **보안/프라이버시:** Supabase RLS로 행 단위 접근 제어. 개인정보 최소 수집. 결제 정보는 PG사에 위임(직접 저장 금지).
- **결제 무결성:** 에스크로는 `attended` 확정 후에만 release. 웹훅 서명 검증 필수.
- **감사 로그:** 승인·결제·정산·신고 처리는 모두 로그 남김.
- **접근성/모바일:** 모바일 우선. 프리미엄 감성의 절제된 UI.

---

## 8. 규제 체크리스트 (한국) — ★ 변호사·세무사 검토 필수, 코드는 가드만

- [ ] 청탁금지법: 제한 직군 스크리닝·차단 (§5.5 구현)
- [ ] 통신판매중개업 신고 + 에스크로(안전결제)
- [ ] 기부금품법: "수익 일부 기부" 표기·영수증은 지정기부금단체로 한정
- [ ] 세무: 멘토 정산 원천징수·세금계산 (사업/기타소득)
- [ ] 개인정보처리방침·이용약관·환불정책 페이지

---

## 9. 개발 로드맵 (Claude Code 마일스톤)

| 단계 | 산출물 |
|---|---|
| M0 셋업 | Next.js+TS+Tailwind+shadcn, Supabase 연결, 인증, 기본 레이아웃 |
| M1 도메인 | `lib/domain` (티어·기부·예약상태·안전정책) + 단위테스트 |
| M2 데이터 | 마이그레이션·RLS·시드, 멘토/멘티 프로필 CRUD |
| M3 테이블 | 테이블 생성/목록/상세, 1:1·1:N 포맷·호스트 배정 가드 |
| M4 예약·결제 | 큐레이션 승인 흐름 → Toss 에스크로 → 정산·기부 배분 |
| M5 소통·안전 | 플랫폼 내 메시지(마스킹), 후기, 신고·차단 |
| M6 운영툴 | 운영진 대시보드(승인 큐·신고·정산) |
| M7+ | 옥션, 살롱 시리즈, B2B, 임팩트 리포트 |

---

## 10. Claude Code 작업 가이드

### 워크플로우
1. **이 파일을 루트에 두고 `/init`** 로 프로젝트 컨텍스트 인식.
2. 작업은 **마일스톤(§9) → PR 크기 단위**로 쪼개서 지시. 한 번에 한 모듈.
3. 도메인 규칙(§5)은 **UI보다 먼저** `lib/domain`에 구현하고 테스트부터 통과.
4. 큰 작업 전 `/clear`로 컨텍스트 정리, 긴 세션은 `/compact`.
5. 비밀키·결제·DB 권한 변경 등 민감한 명령은 **권한 승인을 직접 확인**(자동 허용 금지).

### 좋은 지시 예시
- "M1: `lib/domain/revenue.ts`에 티어별 기부·플랫폼·멘토 정산 배분 함수를 만들고, §5.1 표 기준으로 vitest 단위테스트 작성해줘. 멘토 donation_rate 하향은 거부되어야 함."
- "M3: 라운드 테이블 생성 시 host_operator_id가 없으면 status를 open으로 못 바꾸게 가드 추가하고 테스트해줘."

### 컨벤션
- TypeScript strict, 함수형·순수함수 우선, 도메인 규칙에 매직넘버 금지(상수화).
- 커밋: Conventional Commits (`feat:`, `fix:`, `chore:`).
- 모든 도메인 규칙 변경은 테스트 동반.
- 한글 식별자 금지(코드), 단 사용자 문구·시드 데이터는 한국어.

---

## 11. 용어 사전 (일관 네이밍)

| 한글 | 코드 용어 |
|---|---|
| 테이블(만남) | `Table` |
| 라운드 테이블(1:N) | `format: 'round_table'` |
| 운영진 호스트 | `host_operator` |
| 큐레이션 승인 | `booking.status = 'approved'` |
| 에스크로 보관/지급 | `escrow_status: held/released` |
| 멘토 명의 기부 | `Donation.donor_display` |
| 명예 배지 | `MentorProfile.badges` |
| 시그니처 옥션 | `tier: 'signature'` (Phase 2) |

---

_v1.0 — 사업기획서 v1.1 기반. 스택·범위는 협의에 따라 조정 가능._
