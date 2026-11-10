"use client";

import { useEffect, useRef, useState } from "react";
import { services, site } from "@/content/site";
import { Avatar, Icon, gutter } from "./ui";

const groups = [
  { ...services.build, icon: "monitor" as const },
  { ...services.automate, icon: "bolt" as const },
  { ...services.grow, icon: "trend" as const },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header className={`sticky top-3 z-50 ${gutter}`}>
      <div className="mx-auto flex h-[66px] max-w-[1510px] items-center justify-between gap-4 rounded-full border border-white/60 bg-white/85 pl-2 pr-2 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.12)] backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-3 text-lg font-bold tracking-tight">
          <Avatar size={48} />
          {site.name}
        </a>

        <nav className="hidden items-center gap-1 text-[17px] text-muted lg:flex" aria-label="Main">
          <div ref={menuRef} className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              className="flex items-center gap-1.5 rounded-full px-4 py-2 transition-colors hover:text-ink"
            >
              Services
              <svg width="10" height="10" viewBox="0 0 10 10" className={`transition-transform ${menuOpen ? "rotate-180" : ""}`} aria-hidden>
                <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
              </svg>
            </button>
            {menuOpen && (
              <div className="absolute left-1/2 top-full mt-4 w-[52rem] -translate-x-1/2 rounded-[28px] border border-line bg-card p-4 shadow-2xl shadow-black/10">
                <div className="grid grid-cols-3 gap-3">
                  {groups.map((g) => (
                    <div key={g.label} className="rounded-2xl bg-chip/60 p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="grid size-8 place-items-center rounded-lg bg-card text-ink">
                          <Icon name={g.icon} className="size-4" />
                        </span>
                        <span className="text-xs font-bold uppercase tracking-[0.08em] text-muted">{g.label}</span>
                      </div>
                      <ul>
                        {g.items.map((s) => (
                          <li key={s.title}>
                            <a
                              href={s.href ?? "#services"}
                              onClick={() => setMenuOpen(false)}
                              className="block rounded-lg px-2 py-2 text-[15px] font-semibold text-ink transition-colors hover:bg-card"
                            >
                              {s.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {site.nav.map((l) => (
            <a key={l.label} href={l.href} className="rounded-full px-4 py-2 transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.bookingUrl}
            className="hidden rounded-full bg-ink px-5 py-3 text-[17px] font-bold text-white transition-colors hover:bg-black sm:inline-flex"
          >
            Book a call
          </a>
          <button
            type="button"
            className="grid size-12 place-items-center rounded-full bg-chip lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden>
              {mobileOpen ? (
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              ) : (
                <path d="M2 5h12M2 11h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-3 top-[88px] bottom-3 overflow-y-auto rounded-[28px] border border-line bg-card p-5 shadow-2xl lg:hidden">
          {groups.map((g) => (
            <div key={g.label} className="mb-5">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.08em] text-muted">{g.label}</p>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <a key={s.title} href={s.href ?? "#services"} onClick={() => setMobileOpen(false)} className="rounded-full bg-chip px-3.5 py-2 text-sm font-semibold">
                    {s.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
          <div className="mb-6 flex flex-col border-t border-line">
            {site.nav.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)} className="border-b border-line py-4 text-2xl font-extrabold tracking-tight">
                {l.label}
              </a>
            ))}
          </div>
          <a href={site.bookingUrl} onClick={() => setMobileOpen(false)} className="flex justify-center rounded-full bg-ink px-5 py-4 font-bold text-white">
            Book a call
          </a>
        </div>
      )}
    </header>
  );
}
