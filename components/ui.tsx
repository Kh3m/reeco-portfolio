import Link from "next/link";
import type { ReactNode } from "react";
import type { ProjectType } from "@/content/site";

/** Side padding shared by the nav and every section, so edges line up. */
export const gutter = "px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={gutter}>
      <div className={`mx-auto w-full max-w-[1280px] ${className}`}>{children}</div>
    </div>
  );
}

/** Renders *wrapped* words in an accent class. */
export function Accent({ text, className }: { text: string; className: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/g).map((part, i) =>
        part.startsWith("*") ? (
          <span key={i} className={className}>
            {part.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] ${dark ? "text-gold" : "text-muted"}`}>
      <span className="h-px w-6 bg-gold" aria-hidden />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  dark = false,
  action,
  as: Tag = "h2",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  dark?: boolean;
  action?: ReactNode;
  as?: "h1" | "h2";
}) {
  return (
    <div className="mb-10 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-2xl">
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        <Tag className={`mt-4 text-[1.9rem] font-bold leading-[1.15] tracking-[-0.025em] sm:text-4xl lg:text-[2.6rem] ${dark ? "text-white" : "text-ink"}`}>
          {title}
        </Tag>
        {sub && <p className={`mt-4 text-[17px] leading-relaxed ${dark ? "text-white/65" : "text-muted"}`}>{sub}</p>}
      </div>
      {action}
    </div>
  );
}

type ButtonVariant = "gold" | "dark" | "outline" | "outline-light";

export function Button({
  href,
  children,
  variant = "gold",
  className = "",
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  arrow?: boolean;
}) {
  const styles: Record<ButtonVariant, string> = {
    gold: "bg-gold text-dark hover:bg-[#cfb68a]",
    dark: "bg-dark text-white hover:bg-dark-2",
    outline: "border border-line bg-card text-ink hover:border-ink/40",
    "outline-light": "border border-white/20 text-white hover:border-white/50 hover:bg-white/5",
  };
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold transition-colors ${styles[variant]} ${className}`}
    >
      {children}
      {arrow && <Arrow className="transition-transform group-hover:translate-x-0.5" />}
    </Link>
  );
}

export function TextLink({ href, children, dark = false }: { href: string; children: ReactNode; dark?: boolean }) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-1.5 text-[15px] font-semibold ${dark ? "text-gold" : "text-ink"}`}>
      <span className={`border-b ${dark ? "border-gold/40" : "border-gold"} pb-0.5`}>{children}</span>
      <Arrow className="transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export type IconName =
  | "inbox" | "route" | "link" | "eye" | "chart" | "users" | "zap" | "refresh" | "layers"
  | "check" | "mail" | "linkedin" | "search" | "pen" | "settings" | "trend" | "home" | "sparkle" | "tool";

const paths: Record<IconName, ReactNode> = {
  inbox: <><path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></>,
  route: <><circle cx="6" cy="19" r="3" /><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /><circle cx="18" cy="5" r="3" /></>,
  link: <><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></>,
  eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
  chart: <><path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 5-6" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>,
  zap: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
  refresh: <><path d="M21 12a9 9 0 0 1-15.5 6.2L3 16" /><path d="M3 12a9 9 0 0 1 15.5-6.2L21 8" /><path d="M21 3v5h-5M3 21v-5h5" /></>,
  layers: <><path d="m12 2 10 5-10 5L2 7l10-5z" /><path d="m2 17 10 5 10-5M2 12l10 5 10-5" /></>,
  check: <path d="M20 6 9 17l-5-5" />,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
  pen: <path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />,
  settings: <><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" /></>,
  trend: <path d="m3 17 6-6 4 4 8-8M15 7h6v6" />,
  home: <><path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10z" /><path d="M9 22V12h6v10" /></>,
  sparkle: <path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4L12 3zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />,
  tool: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
};

export function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      {paths[name]}
    </svg>
  );
}

export function IconTile({ name, dark = false }: { name: IconName; dark?: boolean }) {
  return (
    <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${dark ? "bg-white/[0.06] text-gold ring-1 ring-white/10" : "bg-bg text-ink ring-1 ring-line"}`}>
      <Icon name={name} className="size-5" />
    </span>
  );
}

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-[19px] font-bold tracking-[-0.02em] ${dark ? "text-white" : "text-ink"}`}>
      <span className="grid size-8 place-items-center rounded-lg bg-dark ring-1 ring-gold/40">
        <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" aria-hidden>
          <path d="M6 20V4h6.5a4.5 4.5 0 0 1 0 9H6m6.5 0L18 20" stroke="var(--gold)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>
        Ree<span className="text-gold">Co</span>
      </span>
    </span>
  );
}

export function TypeBadge({ type, dark = false }: { type: ProjectType; dark?: boolean }) {
  const experience = type === "Project experience";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
        experience ? "bg-gold text-dark" : dark ? "bg-white/10 text-white/85 ring-1 ring-white/15" : "bg-bg text-ink ring-1 ring-line"
      }`}
    >
      <span className={`size-1.5 rounded-full ${experience ? "bg-dark" : "bg-gold"}`} />
      {type}
    </span>
  );
}

export function Checklist({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-2.5">
      {items.map((t) => (
        <li key={t} className={`flex gap-3 text-[15px] leading-relaxed ${dark ? "text-white/80" : "text-ink"}`}>
          <Icon name="check" className="mt-[3px] size-4 shrink-0 text-gold" />
          {t}
        </li>
      ))}
    </ul>
  );
}
