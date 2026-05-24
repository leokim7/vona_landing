"use client";

import { useState, type FormEvent } from "react";

type Variant = "hero" | "cta";

type EmailFormProps = {
  variant?: Variant;
  source: string;
};

type Status = "idle" | "loading" | "success" | "error";

export function EmailForm({ variant = "hero", source }: EmailFormProps) {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website, source }),
      });
      const data = (await res.json()) as { ok: boolean; message?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.message ?? "신청에 실패했어요. 잠시 후 다시 시도해주세요.");
      }

      setStatus("success");
      setMessage("신청이 완료되었어요. 베타 오픈 시 가장 먼저 알려드릴게요.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "오류가 발생했습니다.");
    }
  }

  const buttonLabel = variant === "cta" ? "사전 신청하기 →" : "사전 신청하기";

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[540px]">
      <div className="flex h-14 items-center gap-2 rounded-xl border border-dark-text-2/60 bg-dark/30 p-1.5 backdrop-blur sm:h-16 sm:p-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          autoComplete="email"
          className="min-w-0 flex-1 bg-transparent px-3 text-base text-dark-text-1 placeholder:text-dark-text-2 focus:outline-none sm:px-4"
        />
        {/* honeypot for bots */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          name="website"
          className="absolute h-0 w-0 opacity-0"
          aria-hidden="true"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-10 shrink-0 items-center justify-center rounded-lg bg-dark-text-1 px-4 text-[14px] font-semibold tracking-[-0.3px] text-dark transition hover:bg-white disabled:opacity-60 sm:h-12 sm:px-6 sm:text-[15px]"
        >
          {status === "loading" ? "신청중…" : buttonLabel}
        </button>
      </div>

      <p
        role="status"
        aria-live="polite"
        className={`mt-3 text-[13px] ${
          status === "error"
            ? "text-coral"
            : status === "success"
              ? "text-dark-text-1"
              : "text-dark-text-2"
        }`}
      >
        {message ||
          (variant === "hero"
            ? "베타 사용자에게 평생 50% 할인 혜택을 제공합니다."
            : "선착순 100명 · 베타 사용자 평생 50% 할인.")}
      </p>
    </form>
  );
}
