"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from "react";
import type { Project } from "@/content/site";
import { DiagArrow, ProjectMedia } from "./ui";

const noopSubscribe = () => () => {};

export function LocalTime({ timezone }: { timezone: string }) {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit", timeZone: timezone });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, [timezone]);
  return <span>{time ?? "--:--"}</span>;
}

export function Year() {
  const year = useSyncExternalStore(noopSubscribe, () => new Date().getFullYear(), () => null);
  return <span>{year}</span>;
}

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${text}`;
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="rounded-full bg-chip px-5 py-3 font-bold transition-colors hover:bg-lime"
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}

/** Fades children in when they scroll into view. */
export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const SLIDE_MS = 5000;

/** Hero "Recent launches" slider with progress tabs. */
export function LaunchCarousel({ items }: { items: Project[] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % items.length), SLIDE_MS);
    return () => clearTimeout(id);
  }, [active, paused, items.length]);

  if (!items.length) return null;
  const current = items[active];

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <p className="mb-3 text-[15px] font-bold uppercase tracking-[0.08em] text-white/60">Recent launches</p>
      <a href={current.href} className="group relative block aspect-[16/10] sm:aspect-[16/6.5] overflow-hidden rounded-[22px] border border-white/10">
        {items.map((p, i) => (
          <div key={p.title} className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`} aria-hidden={i !== active}>
            <ProjectMedia title={p.title} color={p.color} image={p.image} className="size-full" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <div className="absolute bottom-5 left-5 text-white">
          <p className="text-xl font-bold tracking-tight">{current.title}</p>
          <p className="mt-1 text-sm text-white/85">{current.category}</p>
        </div>
        <span className="absolute bottom-5 right-5 grid size-11 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-colors group-hover:bg-lime group-hover:text-ink">
          <DiagArrow />
        </span>
      </a>
      <div className="mt-3 grid gap-4" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
        {items.map((p, i) => (
          <button key={p.title} type="button" onClick={() => setActive(i)} className="text-left">
            <span className="block h-[3px] overflow-hidden rounded-full bg-white/15">
              {i === active && (
                <span
                  key={`${active}-${paused}`}
                  className={`block h-full rounded-full bg-lime ${paused ? "w-full" : "progress"}`}
                  style={{ ["--duration" as string]: `${SLIDE_MS}ms` }}
                />
              )}
              {i < active && <span className="block h-full w-full rounded-full bg-white/30" />}
            </span>
            <span className={`mt-2.5 block truncate text-[15px] font-semibold ${i === active ? "text-white" : "text-white/50"}`}>{p.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
