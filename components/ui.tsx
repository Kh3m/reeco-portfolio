import type { ReactNode } from "react";
import { site } from "@/content/site";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1512px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

export const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");

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

export function Eyebrow({ children, className = "text-muted" }: { children: ReactNode; className?: string }) {
  return <p className={`text-[13px] font-bold uppercase tracking-[0.08em] ${className}`}>{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  action,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-3xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-3 text-[2.6rem] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[4.2rem]">
          <Accent text={title} className="text-faint" />
        </h2>
        {sub && <p className="mt-3 text-lg text-muted sm:text-xl">{sub}</p>}
      </div>
      {action && (
        <a
          href={action.href}
          className="self-start whitespace-nowrap rounded-full border border-line bg-bg/60 px-6 py-3.5 font-bold backdrop-blur transition-colors hover:border-ink hover:bg-card sm:self-auto"
        >
          {action.label}
        </a>
      )}
    </div>
  );
}

export function LimeButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full bg-lime py-2.5 pl-6 pr-2.5 text-lg font-bold text-ink transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {children}
      <span className="grid size-9 place-items-center rounded-full bg-ink text-lime transition-transform group-hover:translate-x-0.5">
        <Arrow />
      </span>
    </a>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DiagArrow({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden className={className}>
      <path d="M4.5 11.5l7-7m0 0H6m5.5 0V10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Stars({ className = "" }: { className?: string }) {
  return (
    <span className={`tracking-[0.15em] ${className}`} aria-label="5 out of 5 stars">
      ★★★★★
    </span>
  );
}

export function Avatar({ size = 48, ring = true }: { size?: number; ring?: boolean }) {
  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden rounded-full bg-dark font-bold text-lime ${ring ? "ring-[3px] ring-lime" : ""}`}
      style={{ width: size, height: size, fontSize: size * 0.34 }}
    >
      {site.avatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={site.avatar} alt={site.name} className="size-full object-cover" />
      ) : (
        initials(site.name)
      )}
    </span>
  );
}

type IconName = "monitor" | "bolt" | "trend" | "dollar" | "clock" | "lock" | "search" | "chat";

export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const p = {
    monitor: <><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M3 9h18M8 21h8M12 17v4" /></>,
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
    trend: <path d="m3 17 6-6 4 4 8-8M15 7h6v6" />,
    dollar: <path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    lock: <><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>,
    search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>,
    chat: <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.4A8.5 8.5 0 1 1 21 12z" />,
  }[name];
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      {p}
    </svg>
  );
}

/** Placeholder project art: big wordmark over a laptop-style screenshot frame. */
export function ProjectArt({ title, color, className = "" }: { title: string; color: string; className?: string }) {
  return (
    <div className={`@container relative overflow-hidden ${className}`} style={{ background: color }}>
      <p className="absolute inset-x-0 top-[6%] text-center text-[7.5cqw] font-extrabold leading-none tracking-tight text-white/95 drop-shadow-sm">
        {title}
      </p>
      <div className="absolute inset-x-[18%] top-[clamp(3rem,12cqw,40%)] bottom-[-10%] rounded-t-2xl border-[6px] border-b-0 border-black/80 bg-white shadow-2xl">
        <div className="flex h-[9%] min-h-4 items-center gap-2 border-b border-black/5 px-3" style={{ background: `color-mix(in srgb, ${color} 18%, white)` }}>
          <span className="h-1.5 w-10 rounded-full bg-black/25" />
          <span className="ml-auto h-1.5 w-24 rounded-full bg-black/10" />
        </div>
        <div className="grid h-[91%] grid-cols-[1.2fr_1fr] gap-4 p-[5%]" style={{ background: `color-mix(in srgb, ${color} 55%, black)` }}>
          <div className="flex flex-col justify-center gap-2">
            <span className="h-2.5 w-4/5 rounded-full bg-white/80" />
            <span className="h-2.5 w-3/5 rounded-full bg-white/60" />
            <span className="mt-2 h-1.5 w-full rounded-full bg-white/25" />
            <span className="h-1.5 w-5/6 rounded-full bg-white/25" />
            <span className="mt-2 h-4 w-20 rounded-full" style={{ background: color }} />
          </div>
          <div className="rounded-xl bg-white/15" />
        </div>
      </div>
    </div>
  );
}

/** Image if provided, otherwise placeholder art. */
export function ProjectMedia({ title, color, image, className = "" }: { title: string; color: string; image?: string; className?: string }) {
  if (image)
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={image} alt={title} className={`object-cover ${className}`} style={{ background: color }} />
    );
  return <ProjectArt title={title} color={color} className={className} />;
}
