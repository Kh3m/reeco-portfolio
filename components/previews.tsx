/**
 * Interface previews — illustrative CRM / workflow screens built in HTML.
 * Every sample record here is fictional and belongs to a labelled demonstration.
 */
import type { PreviewKind } from "@/content/site";
import { Icon } from "./ui";

function Window({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-line bg-card text-ink shadow-[0_20px_50px_-24px_rgba(23,25,29,0.35)] ${className}`}>
      <div className="flex items-center gap-3 border-b border-line bg-bg/70 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
          <span className="size-2.5 rounded-full bg-line" />
        </span>
        <span className="truncate text-xs font-semibold text-muted">{title}</span>
      </div>
      {children}
    </div>
  );
}

function Pill({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "gold" | "dark" | "green" }) {
  const t = {
    neutral: "bg-bg text-muted ring-1 ring-line",
    gold: "bg-gold/25 text-[#6b5630] ring-1 ring-gold/50",
    dark: "bg-dark text-white",
    green: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  }[tone];
  return <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${t}`}>{children}</span>;
}

/* Real estate — CRM pipeline board */
export function RePipeline() {
  const cols = [
    { name: "New enquiry", count: 3, cards: [["Buyer", "2-bed apartment · city centre", "Today"], ["Seller", "Valuation request", "Today"]] },
    { name: "Qualified", count: 2, cards: [["Buyer", "Mortgage approved · 3-bed", "Call booked"]] },
    { name: "Viewing booked", count: 2, cards: [["Buyer", "Viewing Thu 11:00", "Reminder set"]] },
    { name: "Nurture", count: 5, cards: [["Seller", "Ready in 6–12 months", "Monthly update"]] },
  ];
  return (
    <Window title="Pipeline · Buyers & Sellers">
      <div className="grid grid-cols-2 gap-2.5 p-3 sm:grid-cols-4">
        {cols.map((c, i) => (
          <div key={c.name} className="rounded-xl bg-bg p-2">
            <div className="mb-2 flex items-center justify-between px-1">
              <span className="truncate text-[11px] font-bold">{c.name}</span>
              <span className="text-[11px] text-muted">{c.count}</span>
            </div>
            <div className="space-y-2">
              {c.cards.map(([tag, title, meta]) => (
                <div key={title} className="rounded-lg border border-line bg-card p-2">
                  <Pill tone={tag === "Buyer" ? "gold" : "dark"}>{tag}</Pill>
                  <p className="mt-1.5 text-[11px] font-semibold leading-snug">{title}</p>
                  <p className="mt-1 flex items-center gap-1 text-[10px] text-muted">
                    <span className={`size-1.5 rounded-full ${i === 0 ? "bg-gold" : "bg-emerald-500"}`} />
                    {meta}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Window>
  );
}

/* MedSpa — patient journey automation */
export function MedspaJourney() {
  const steps = [
    { icon: "inbox" as const, t: "Treatment enquiry received", d: "Instant personal acknowledgement", tag: "Trigger" },
    { icon: "users" as const, t: "Consultation not booked in 24h", d: "Follow-up message + call task for front desk", tag: "Follow-up" },
    { icon: "check" as const, t: "Consultation booked", d: "Confirmation, reminder 24h before, prep notes", tag: "Appointment" },
    { icon: "refresh" as const, t: "Treatment due again", d: "Reminder based on treatment interval", tag: "Re-engage" },
  ];
  return (
    <Window title="Workflow · Patient journey">
      <ol className="space-y-0 p-4">
        {steps.map((s, i) => (
          <li key={s.t} className="relative flex gap-3 pb-4 last:pb-0">
            {i < steps.length - 1 && <span className="absolute left-[17px] top-9 bottom-0 w-px bg-line" aria-hidden />}
            <span className={`relative grid size-9 shrink-0 place-items-center rounded-lg ${i === 0 ? "bg-dark text-gold-ink" : "bg-bg text-ink ring-1 ring-line"}`}>
              <Icon name={s.icon} className="size-4" />
            </span>
            <div className="min-w-0 flex-1 rounded-xl border border-line p-2.5">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-xs font-bold">{s.t}</p>
                <Pill tone={i === 0 ? "dark" : "neutral"}>{s.tag}</Pill>
              </div>
              <p className="mt-0.5 text-[11px] text-muted">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </Window>
  );
}

/* Home services — estimate follow-up sequence */
export function EstimateFollowup() {
  const seq = [
    { day: "Day 0", t: "Estimate sent", d: "Email with quote + what happens next", done: true },
    { day: "Day 2", t: "Call task", d: "Answer questions while it's fresh", done: true },
    { day: "Day 5", t: "Check-in message", d: "Short reminder with booking link", done: false },
    { day: "Day 7", t: "Owner call", d: "Personal follow-up on higher-value jobs", done: false },
  ];
  return (
    <Window title="Opportunity · Basement waterproofing">
      <div className="grid gap-3 p-4 sm:grid-cols-[1.3fr_1fr]">
        <ol className="space-y-2">
          {seq.map((s) => (
            <li key={s.day} className="flex items-start gap-2.5 rounded-xl border border-line p-2.5">
              <span className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${s.done ? "bg-gold text-dark" : "ring-1 ring-line"}`}>
                {s.done && <Icon name="check" className="size-3" />}
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold">
                  <span className="text-muted">{s.day} · </span>
                  {s.t}
                </p>
                <p className="text-[11px] text-muted">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="flex flex-col gap-2 rounded-xl bg-bg p-3">
          <p className="text-[11px] font-bold uppercase tracking-wider text-muted">Stage</p>
          {["Enquiry", "Site visit", "Estimate sent", "Booked"].map((s, i) => (
            <div key={s} className={`flex items-center justify-between rounded-lg px-2.5 py-2 text-xs font-semibold ${i === 2 ? "bg-dark text-white" : "bg-card text-ink ring-1 ring-line"}`}>
              {s}
              {i === 2 && <span className="size-1.5 rounded-full bg-gold" />}
            </div>
          ))}
          <p className="mt-auto pt-1 text-[11px] text-muted">On acceptance → job details sent to crew</p>
        </div>
      </div>
    </Window>
  );
}

/* PropPie — data collection coordination tracker */
export function DataTracker() {
  const rows = [
    ["Residential", "Detached", "Collector A", "Verified"],
    ["Residential", "Terrace", "Collector B", "Verified"],
    ["Commercial", "Retail unit", "Collector C", "In review"],
    ["Residential", "Apartment", "Collector A", "Verified"],
    ["Land", "Plot", "Collector D", "In review"],
  ];
  return (
    <Window title="Field data collection · Lifecamp District">
      <div className="p-4">
        <div className="mb-3 grid grid-cols-3 gap-2">
          {[
            ["500+", "property entries"],
            ["Primary", "+ secondary data"],
            ["Framework", "standardised fields"],
          ].map(([v, l]) => (
            <div key={l} className="rounded-xl bg-bg p-2.5">
              <p className="text-sm font-bold">{v}</p>
              <p className="text-[10px] text-muted">{l}</p>
            </div>
          ))}
        </div>
        <div className="overflow-hidden rounded-xl border border-line">
          <div className="grid grid-cols-4 bg-bg px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-muted">
            <span>Category</span>
            <span>Type</span>
            <span>Collector</span>
            <span>Status</span>
          </div>
          {rows.map((r, i) => (
            <div key={i} className="grid grid-cols-4 items-center border-t border-line px-3 py-2 text-[11px]">
              <span className="font-semibold">{r[0]}</span>
              <span className="text-muted">{r[1]}</span>
              <span className="text-muted">{r[2]}</span>
              <span>
                <Pill tone={r[3] === "Verified" ? "green" : "gold"}>{r[3]}</Pill>
              </span>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[10px] text-muted">Illustrative view of the coordination structure — not real project data.</p>
      </div>
    </Window>
  );
}

export function Preview({ kind, className = "" }: { kind: PreviewKind; className?: string }) {
  const C = { "data-tracker": DataTracker, "medspa-journey": MedspaJourney, "estimate-followup": EstimateFollowup, "re-pipeline": RePipeline }[kind];
  return (
    <div className={className}>
      <C />
    </div>
  );
}

/* Hero — lead capture to customer, used beside the founder portrait */
export function HeroLeadCard() {
  return (
    <div className="w-[260px] rounded-2xl border border-white/10 bg-dark-2/95 p-4 text-white shadow-2xl backdrop-blur">
      <div className="flex items-center gap-2">
        <span className="grid size-7 place-items-center rounded-lg bg-gold text-dark">
          <Icon name="inbox" className="size-4" />
        </span>
        <p className="text-xs font-bold">New enquiry captured</p>
      </div>
      <div className="mt-3 space-y-1.5">
        {[
          ["Source", "Website form"],
          ["Stage", "New → Qualified"],
          ["Next step", "Call booked · Tomorrow"],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between gap-3 text-[11px]">
            <span className="text-white/50">{k}</span>
            <span className="font-semibold">{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HeroFollowCard() {
  return (
    <div className="w-[230px] rounded-2xl border border-line bg-card p-3.5 text-ink shadow-2xl">
      <p className="text-[11px] font-bold uppercase tracking-wider text-muted">Follow-up sequence</p>
      <div className="mt-2.5 flex items-center gap-1.5">
        {[1, 2, 3, 4].map((n) => (
          <span key={n} className={`h-1.5 flex-1 rounded-full ${n <= 2 ? "bg-gold" : "bg-line"}`} />
        ))}
      </div>
      <p className="mt-2 text-xs font-semibold">Step 2 of 4 · Reminder sent</p>
    </div>
  );
}
