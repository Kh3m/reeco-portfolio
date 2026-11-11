"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { contact, industries, nav } from "@/content/site";
import { Arrow, Logo, gutter } from "./ui";

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menus on navigation.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setMobileOpen(false);
  }

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

  const isActive = (href: string) => (href.startsWith("/industries") ? pathname.startsWith("/industries") : pathname === href);

  return (
    <header className={`sticky top-3 z-50 ${gutter}`}>
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 rounded-2xl border border-line bg-card/90 px-3 pl-4 shadow-[0_8px_30px_-12px_rgba(23,25,29,0.18)] backdrop-blur-xl">
        <Link href="/" aria-label="ReeCo home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 text-[15px] font-medium lg:flex" aria-label="Main">
          {nav.map((l) =>
            l.children ? (
              <div key={l.label} ref={menuRef} className="relative">
                <button
                  type="button"
                  onClick={() => setMenuOpen((o) => !o)}
                  aria-expanded={menuOpen}
                  className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 transition-colors hover:text-ink ${isActive(l.href) ? "text-ink" : "text-muted"}`}
                >
                  {l.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" className={`transition-transform ${menuOpen ? "rotate-180" : ""}`} aria-hidden>
                    <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                  </svg>
                </button>
                {menuOpen && (
                  <div className="absolute left-1/2 top-full mt-3 w-[22rem] -translate-x-1/2 rounded-2xl border border-line bg-card p-2 shadow-2xl shadow-black/10">
                    {industries.items.map((ind) => (
                      <Link
                        key={ind.slug}
                        href={`/industries/${ind.slug}`}
                        onClick={() => setMenuOpen(false)}
                        className="block rounded-xl p-3 transition-colors hover:bg-bg"
                      >
                        <span className="block text-[15px] font-semibold text-ink">{ind.name}</span>
                        <span className="mt-0.5 block text-[13px] leading-snug text-muted">{ind.short}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.label}
                href={l.href}
                className={`rounded-lg px-3.5 py-2 transition-colors hover:text-ink ${isActive(l.href) ? "text-ink" : "text-muted"}`}
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={contact.cta.href}
            className="hidden items-center gap-2 rounded-xl bg-dark px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-dark-2 sm:inline-flex"
          >
            {contact.cta.label} <Arrow className="text-gold-ink" />
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-xl bg-bg ring-1 ring-line lg:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden>
              {mobileOpen ? (
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M2 5h12M2 11h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-x-3 top-[84px] bottom-3 overflow-y-auto rounded-2xl border border-line bg-card p-5 shadow-2xl lg:hidden">
          <div className="flex flex-col">
            {nav
              .filter((l) => !l.children)
              .map((l) => (
                <Link key={l.label} href={l.href} className="border-b border-line py-4 text-xl font-bold tracking-tight">
                  {l.label}
                </Link>
              ))}
          </div>
          <p className="mt-6 mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted">Industries</p>
          <div className="flex flex-col gap-2">
            {industries.items.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`} className="rounded-xl bg-bg p-3 ring-1 ring-line">
                <span className="block font-semibold">{ind.name}</span>
                <span className="block text-sm text-muted">{ind.short}</span>
              </Link>
            ))}
          </div>
          <Link href={contact.cta.href} className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-dark px-5 py-4 font-semibold text-white">
            {contact.cta.label} <Arrow className="text-gold-ink" />
          </Link>
        </div>
      )}
    </header>
  );
}
