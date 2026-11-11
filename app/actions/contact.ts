"use server";

/**
 * Enquiry form handler.
 *
 * Delivery is configured with environment variables (set them in Vercel → Settings → Environment Variables):
 *   CONTACT_WEBHOOK_URL  – optional. Submissions are POSTed here as JSON
 *                          (e.g. a GoHighLevel inbound webhook, Zapier or Make "catch hook").
 *   RESEND_API_KEY       – optional. Sends each enquiry as an email via Resend (resend.com).
 *   CONTACT_TO_EMAIL     – inbox that receives enquiry emails (required with RESEND_API_KEY).
 *   CONTACT_FROM_EMAIL   – verified sender, e.g. "ReeCo Website <website@yourdomain.com>".
 * At least one delivery method must be configured, otherwise visitors see an error.
 */

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<Field, string>>;
  values?: Partial<Record<Field, string>>;
};

type Field = "name" | "email" | "company" | "industry" | "need";

const MIN_FILL_MS = 3000; // humans take longer than this to complete the form
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (v: FormDataEntryValue | null, max: number) => String(v ?? "").trim().slice(0, max);

export async function submitEnquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values = {
    name: clean(formData.get("name"), 120),
    email: clean(formData.get("email"), 200),
    company: clean(formData.get("company"), 160),
    industry: clean(formData.get("industry"), 80),
    need: clean(formData.get("need"), 80),
  };

  // Spam protection: hidden honeypot field + minimum time on page.
  const honeypot = clean(formData.get("website"), 200);
  const startedAt = Number(formData.get("started_at") ?? 0);
  if (honeypot || !startedAt || Date.now() - startedAt < MIN_FILL_MS) {
    // Pretend success so bots get no signal.
    return { status: "success" };
  }

  const errors: ContactState["errors"] = {};
  if (values.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid business email.";
  if (!values.industry) errors.industry = "Please choose your industry.";
  if (!values.need) errors.need = "Please choose what you need help with.";
  if (Object.keys(errors).length) {
    return { status: "error", message: "Please check the highlighted fields.", errors, values };
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "ReeCo Website <onboarding@resend.dev>";

  if (!webhook && !(resendKey && to)) {
    console.error("[contact] No delivery method configured (CONTACT_WEBHOOK_URL or RESEND_API_KEY + CONTACT_TO_EMAIL).");
    return {
      status: "error",
      message: "Sorry — the form isn't accepting enquiries right now. Please try again later.",
      values,
    };
  }

  const payload = { ...values, source: "reeco-website", submittedAt: new Date().toISOString() };
  const tasks: Promise<Response>[] = [];

  if (webhook) {
    tasks.push(
      fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }),
    );
  }

  if (resendKey && to) {
    const text = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Company: ${values.company || "—"}`,
      `Industry: ${values.industry}`,
      `Needs help with: ${values.need}`,
    ].join("\n");
    tasks.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: values.email,
          subject: `New enquiry: ${values.name}${values.company ? ` (${values.company})` : ""}`,
          text,
        }),
      }),
    );
  }

  const results = await Promise.allSettled(tasks);
  const delivered = results.some((r) => r.status === "fulfilled" && r.value.ok);
  if (!delivered) {
    console.error("[contact] Delivery failed", results);
    return {
      status: "error",
      message: "Sorry — something went wrong sending your enquiry. Please try again in a moment.",
      values,
    };
  }

  return { status: "success" };
}
