import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";

const BodySchema = z.object({
  email: z.string().email("올바른 이메일 주소를 입력해주세요."),
  source: z.enum(["hero", "cta"]).default("hero"),
  website: z.string().optional(),
});

const NOTIFY_TO =
  process.env.SUBSCRIBE_NOTIFY_TO?.split(",")
    .map((s) => s.trim())
    .filter(Boolean) ?? ["leokim7@gmail.com"];

const FROM = process.env.RESEND_FROM ?? "Vona <noreply@vona.kr>";

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "잘못된 요청입니다." },
      { status: 400 },
    );
  }

  const parsed = BodySchema.safeParse(json);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "잘못된 입력입니다.";
    return NextResponse.json({ ok: false, message: first }, { status: 400 });
  }

  const { email, source, website } = parsed.data;

  // honeypot — silently succeed for bots
  if (website && website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, message: "메일 발송 설정이 누락되었습니다." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const submittedAt = new Date().toISOString();
  const userAgent = request.headers.get("user-agent") ?? "";
  const referer = request.headers.get("referer") ?? "";

  const subject = `[Vona 사전신청] ${email}`;
  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Pretendard',sans-serif;line-height:1.6;color:#191f28">
      <h2 style="margin:0 0 16px;font-size:20px">새 사전 신청이 도착했습니다</h2>
      <table style="border-collapse:collapse;font-size:14px">
        <tr><td style="padding:6px 16px 6px 0;color:#8b95a1">Email</td><td><strong>${escapeHtml(email)}</strong></td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#8b95a1">Source</td><td>${escapeHtml(source)}</td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#8b95a1">Time</td><td>${escapeHtml(submittedAt)}</td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#8b95a1">Referer</td><td>${escapeHtml(referer)}</td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#8b95a1">UA</td><td>${escapeHtml(userAgent)}</td></tr>
      </table>
    </div>
  `;
  const text = [
    `Vona 사전 신청`,
    `Email: ${email}`,
    `Source: ${source}`,
    `Time: ${submittedAt}`,
    `Referer: ${referer}`,
    `UA: ${userAgent}`,
  ].join("\n");

  try {
    console.log("[v0] Attempting to send email with Resend");
    console.log("[v0] FROM:", FROM);
    console.log("[v0] TO:", NOTIFY_TO);
    console.log("[v0] SUBJECT:", subject);
    
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: NOTIFY_TO,
      replyTo: email,
      subject,
      html,
      text,
    });

    console.log("[v0] Resend response - error:", error);
    console.log("[v0] Resend response - data:", data);

    if (error) {
      console.error("Resend error details:", JSON.stringify(error));
      return NextResponse.json(
        { ok: false, message: `메일 발송에 실패했습니다. (${error?.message || 'Unknown error'})` },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : String(err);
    console.error("Subscribe handler exception:", errMsg);
    console.error("Full error:", err);
    return NextResponse.json(
      { ok: false, message: `서버 오류가 발생했습니다. (${errMsg})` },
      { status: 500 },
    );
  }
}
