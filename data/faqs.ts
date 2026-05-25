/**
 * Vona Landing — FAQ 데이터
 *
 * 위치: data/faqs.ts (tsconfig paths: @/data/faqs)
 * 용도: 자주 묻는 질문 섹션 컴포넌트에서 사용
 * 카테고리: product / personas / pricing / safety / launch
 *
 * Phase 1 베타 출시 시점(2026 Q3) 기준으로 작성됨.
 * 베타 종료 후 가격/일정 등 정책 변경 시 본 파일만 업데이트.
 */

export type FAQCategory =
  | "product"   // 제품 작동 방식
  | "personas"  // AI 페르소나 종류
  | "pricing"   // 요금 정책
  | "safety"    // 안전·프라이버시
  | "launch";   // 출시 일정

export interface FAQ {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
  /** 페이지 로드 시 펼침 상태로 시작할지 여부 (기본 false) */
  defaultOpen?: boolean;
}

export const faqs: FAQ[] = [
  {
    id: "q01",
    category: "product",
    question: "Vona는 어떻게 작동하나요?",
    answer:
      "Vona는 앱이 아닌 진짜 전화번호로 작동합니다. 페르소나를 선택하면 그 친구만의 전화번호가 부여되고, AI가 정해진 시간에 전화를 걸어주거나, 사용자가 직접 그 번호로 전화를 걸 수 있습니다. 일반 통화와 동일한 방식이라 별도 앱 설치나 학습이 필요 없습니다.",
    defaultOpen: true,
  },
  {
    id: "q02",
    category: "personas",
    question: "어떤 페르소나를 사용할 수 있나요?",
    answer:
      "Phase 1 (2026 Q3)에서는 '지윤'(다정한 24세 친구)과 '철수'(어르신 안부 친구) 두 명으로 시작합니다. 이후 친구·가족·코치·상담사·선생님 5개 카테고리에 걸쳐 총 24명의 페르소나가 순차적으로 출시됩니다. 자세한 페르소나 라인업은 'AI 친구 리스트'에서 확인하실 수 있습니다.",
  },
  {
    id: "q03",
    category: "pricing",
    question: "통화 요금은 어떻게 되나요?",
    answer:
      "전화 통화료는 사용자의 전화 가입상품/요금제에 따라 적용됩니다. 무제한 요금제 사용시 통화요금은 발생하지 않지만 Vona 서비스 사용료는 패키지 가격에 따라 부과됩니다.",
  },
  {
    id: "q04",
    category: "safety",
    question: "통화 내용은 안전한가요?",
    answer:
      "모든 통화는 종단간 암호화로 저장되며, 사용자 동의 없이 외부에 공유되거나 AI 학습에 사용되지 않습니다. 언제든지 통화 기록 삭제를 요청할 수 있으며, 계정 삭제 시 모든 데이터가 30일 이내에 완전 삭제됩니다. ISMS-P 인증 기준을 준수합니다.",
  },
  {
    id: "q05",
    category: "safety",
    question: "AI라는 사실을 알 수 있나요?",
    answer:
      "예, 매 통화 시작 시 'AI 음성 컴패니언 Vona입니다'라고 명확히 고지합니다. 자해·우울·위기 상황 표현이 감지되면 즉시 통화를 중단하고 1393(자살예방상담전화)을 자동 안내하며, 19세 미만 사용자에게는 연령 부적합 페르소나가 자동 차단됩니다.",
  },
  {
    id: "q06",
    category: "launch",
    question: "언제 사용할 수 있나요?",
    answer:
      "Phase 1 클로즈드 베타는 2026년 Q3 출시 예정이며, 사전 신청자 중 선착순 100명에게 우선 접근 권한이 부여됩니다. 베타 기간 동안 수집된 피드백을 반영하여 2026년 Q4 정식 출시를 목표로 합니다.",
  },
];

/**
 * 카테고리별 라벨 (한글 표시용)
 * — 필요 시 FAQ 필터링 UI에 사용
 */
export const categoryLabels: Record<FAQCategory, string> = {
  product: "제품",
  personas: "페르소나",
  pricing: "요금",
  safety: "안전·보안",
  launch: "출시",
};
