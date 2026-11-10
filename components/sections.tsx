import { contact, faq, hero, process, products, reviews, services, site, stats, tools, work, type Service } from "@/content/site";
import { CopyButton, LaunchCarousel, LocalTime, Reveal, Year } from "./client-bits";
import {
  Accent,
  Arrow,
  Avatar,
  Container,
  DiagArrow,
  Eyebrow,
  Icon,
  LimeButton,
  ProjectMedia,
  SectionHeading,
  Stars,
  initials,
} from "./ui";

const card = "rounded-[32px] bg-card";
const darkCard = "rounded-[32px] bg-dark text-white";

function StatusDot({ label = "Taking new projects" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[15px] font-bold text-white">
      <span className="relative flex size-2.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
      </span>
      {label}
    </span>
  );
}

/* ── Hero ─────────────────────────────────────────────── */

export function Hero() {
  const recent = work.projects.filter((p) => p.recent);
  return (
    <section id="top" className="pt-5">
      <Container>
        <div className={`${darkCard} dots-dark relative overflow-hidden rounded-[44px]`}>
          <div className="pointer-events-none absolute -bottom-40 -left-40 size-[36rem] rounded-full bg-lime/10 blur-[120px]" aria-hidden />
          <div className="pointer-events-none absolute -right-32 -top-40 size-[30rem] rounded-full bg-lime/[0.07] blur-[120px]" aria-hidden />

          <div className="relative grid items-center gap-12 px-6 pb-12 pt-10 sm:px-12 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:px-[70px] lg:pb-14 lg:pt-[70px]">
            <div>
              <div className="flex flex-wrap items-center gap-4">
                {site.available && <StatusDot />}
                {site.partnerBadge.show && (
                  <span className="inline-flex items-center gap-3 rounded-full bg-white px-3.5 py-2 text-ink">
                    <span className="text-[15px] font-extrabold italic tracking-tight">{site.partnerBadge.brand}</span>
                    <span className="h-4 w-px bg-line" />
                    <span className="text-[13px] font-bold uppercase tracking-[0.08em] text-muted">{site.partnerBadge.label}</span>
                  </span>
                )}
              </div>
              <h1 className="mt-7 text-[clamp(2.7rem,5.3vw,5.6rem)] font-extrabold leading-[0.98] tracking-[-0.06em]">
                <Accent text={hero.headline} className="text-lime" />
              </h1>
              <p className="mt-7 max-w-[40rem] text-lg leading-relaxed text-white/65 sm:text-[1.4rem]">{hero.sub}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LimeButton href={site.bookingUrl}>{hero.primaryCta}</LimeButton>
                <a
                  href="#work"
                  className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 text-lg font-bold transition-colors hover:border-white/60"
                >
                  {hero.secondaryCta}
                </a>
              </div>
            </div>
            <LaunchCarousel items={recent} />
          </div>

          <dl className="relative grid grid-cols-2 border-t border-white/10 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={`flex flex-col-reverse px-6 py-8 sm:px-12 lg:px-[70px] ${i % 2 ? "border-l" : ""} ${i > 0 ? "lg:border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} border-white/10`}>
                <dt className="text-white/60 sm:text-lg">{s.label}</dt>
                <dd className="text-4xl font-extrabold tracking-tight text-lime sm:text-5xl">{s.value}</dd>
              </div>
            ))}
            <div className="flex flex-col-reverse border-l border-t border-white/10 px-6 py-8 sm:px-12 lg:border-t-0 lg:px-[70px]">
              <dt className="text-white/60 sm:text-lg">{site.timezoneLabel}</dt>
              <dd className="text-4xl font-extrabold tracking-tight text-lime tabular-nums sm:text-5xl">
                <LocalTime timezone={site.timezone} />
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}

/* ── Tools marquee ────────────────────────────────────── */

export function Tools() {
  const half = Math.ceil(tools.length / 2);
  const rows = [tools.slice(0, half), tools.slice(half)];
  return (
    <section className="pt-4" aria-label="Tools and platforms">
      <Container>
        <div className="marquee-mask space-y-3 overflow-hidden rounded-[32px] bg-white/70 py-4">
          {rows.map((row, i) => (
            <div key={i} className={`flex w-max gap-3 ${i ? "marquee-reverse" : "marquee"}`}>
              {[...row, ...row, ...row].map((t, j) => (
                <span
                  key={j}
                  aria-hidden={j >= row.length}
                  className="inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-chip py-2.5 pl-3 pr-5 text-lg font-semibold"
                >
                  <span className="grid size-6 place-items-center rounded-md text-[11px] font-extrabold text-white" style={{ background: t.color }}>
                    {t.name[0]}
                  </span>
                  {t.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Services bento ───────────────────────────────────── */

function CardHeader({ icon, label, dark = false }: { icon: "monitor" | "bolt" | "trend"; label: string; dark?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className={`grid size-14 place-items-center rounded-2xl ${dark ? "bg-dark-2 text-lime" : "bg-chip text-ink"}`}>
        <Icon name={icon} className="size-6" />
      </span>
      <span className={`text-[15px] font-bold uppercase tracking-[0.1em] ${dark ? "text-white/70" : "text-muted"}`}>{label}</span>
    </div>
  );
}

function ServiceList({ items, dark = false, cols = 1 }: { items: Service[]; dark?: boolean; cols?: 1 | 2 }) {
  return (
    <ul className={`grid gap-x-6 ${cols === 2 ? "sm:grid-cols-2" : ""}`}>
      {items.map((s) => (
        <li key={s.title} className={`border-t ${dark ? "border-white/10" : "border-line"}`}>
          <a href={s.href ?? "#contact"} className="group flex items-center justify-between gap-4 py-4 text-xl font-semibold tracking-tight">
            {s.title}
            <Arrow className={`shrink-0 transition-transform group-hover:translate-x-1 ${dark ? "text-white/60" : "text-muted"}`} />
          </a>
        </li>
      ))}
    </ul>
  );
}

function FlowDiagram() {
  const f = services.automate.flow;
  return (
    <div className="flex items-center justify-center py-6" aria-label="Automation workflow example">
      <div className="whitespace-nowrap rounded-xl border border-white/10 bg-dark-2 px-2.5 py-2 sm:px-3.5 sm:py-2.5">
        <p className="text-[13px] font-bold sm:text-[15px]">{f.trigger}</p>
        <p className="hidden text-[13px] text-white/60 sm:block">{f.triggerSub}</p>
      </div>
      <span className="h-px w-3 border-t border-dashed border-lime/60" />
      <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-lime text-base sm:size-20 sm:text-lg font-extrabold text-ink shadow-[0_0_0_8px_rgba(212,244,60,0.12),0_0_40px_rgba(212,244,60,0.35)]">
        {f.hub}
      </div>
      <svg width="22" height="120" viewBox="0 0 22 120" fill="none" aria-hidden className="w-3.5 shrink-0 sm:w-[22px]" preserveAspectRatio="none">
        <path d="M0 60 C 12 60, 10 18, 22 18 M0 60 H22 M0 60 C 12 60, 10 102, 22 102" stroke="var(--lime)" strokeOpacity="0.6" strokeDasharray="3 3" />
      </svg>
      <div className="space-y-2">
        {f.outputs.map((o) => (
          <div key={o} className="flex items-center gap-2 whitespace-nowrap rounded-xl border border-white/10 bg-dark-2 px-2.5 py-2 text-[13px] font-bold sm:px-3 sm:text-[15px]">
            <span className="text-lime">✓</span> {o}
          </div>
        ))}
      </div>
    </div>
  );
}

function SearchMock() {
  const s = services.grow.search;
  return (
    <div className="rounded-3xl bg-chip p-4">
      <div className="flex items-center gap-3 rounded-full bg-card px-5 py-3 text-[17px] font-medium">
        <Icon name="search" className="size-4 text-muted" />
        {s.query}
      </div>
      <div className="mt-3 rounded-2xl border-2 border-lime bg-card p-4">
        <span className="rounded-md bg-lime px-2 py-0.5 text-[13px] font-extrabold uppercase tracking-wide">{s.tag}</span>
        <p className="mt-2 text-[15px] text-muted">{s.url}</p>
        <p className="text-lg font-medium text-[#1a0dab]">{s.title}</p>
        <p className="text-[15px] text-muted">{s.desc}</p>
      </div>
    </div>
  );
}

export function Services() {
  const { build, automate, grow, notSure } = services;
  const stack = work.projects.slice(0, 3);
  return (
    <section id="services" className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="What I do" title={services.heading} sub={services.sub} />
        <div className="grid grid-cols-[minmax(0,1fr)] gap-4 lg:grid-cols-3">
          <Reveal className="lg:row-span-2">
            <article className={`${card} flex h-full flex-col overflow-hidden p-7 sm:p-8`}>
              <CardHeader icon="monitor" label={build.label} />
              <h3 className="mt-7 text-[2.1rem] font-extrabold leading-[1.1] tracking-[-0.04em]">{build.title}</h3>
              <p className="mt-4 mb-6 text-lg leading-relaxed text-muted">{build.pitch}</p>
              <ServiceList items={build.items} />
              <div className="relative mt-10 h-72 lg:mt-auto">
                {stack.map((p, i) => (
                  <div
                    key={p.title}
                    className="absolute inset-x-0 overflow-hidden rounded-t-2xl shadow-xl"
                    style={{ top: `${i * 22}%`, left: `${(2 - i) * 4}%`, right: `${(2 - i) * 4}%`, bottom: "-2rem", zIndex: i }}
                  >
                    <ProjectMedia title={stack[2 - i].title} color={stack[2 - i].color} image={stack[2 - i].image} className="h-full w-full" />
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={80}>
            <article className={`${darkCard} grid h-full grid-cols-[minmax(0,1fr)] gap-6 p-5 sm:p-8 md:grid-cols-2`}>
              <FlowDiagram />
              <div>
                <CardHeader icon="bolt" label={automate.label} dark />
                <h3 className="mt-7 text-[2.1rem] font-extrabold leading-[1.1] tracking-[-0.04em]">{automate.title}</h3>
                <p className="mt-4 mb-6 text-lg leading-relaxed text-white/65">{automate.pitch}</p>
                <ServiceList items={automate.items} dark cols={2} />
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className={`${card} flex h-full flex-col p-7 sm:p-8`}>
              <CardHeader icon="trend" label={grow.label} />
              <h3 className="mt-7 mb-6 text-[2.1rem] font-extrabold leading-[1.1] tracking-[-0.04em]">{grow.title}</h3>
              <SearchMock />
              <div className="mt-6">
                <ServiceList items={grow.items} />
              </div>
            </article>
          </Reveal>

          <Reveal delay={160}>
            <article className={`${darkCard} flex h-full flex-col p-7 sm:p-8`}>
              <Eyebrow className="text-lime">{notSure.eyebrow}</Eyebrow>
              <h3 className="mt-4 text-[2.1rem] font-extrabold leading-[1.1] tracking-[-0.04em]">{notSure.title}</h3>
              <p className="mt-5 text-lg leading-relaxed text-white/65">{notSure.body}</p>
              <div className="mt-6 rounded-3xl border border-white/10 bg-dark-2 p-4">
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <Avatar size={56} />
                  <div>
                    <p className="text-lg font-bold">{notSure.cardTitle}</p>
                    <p className="text-white/60">{notSure.cardSub}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-3">
                  {notSure.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-lg">
                      <span className="font-bold text-lime">✓</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 lg:mt-auto lg:pt-8">
                <LimeButton href={site.bookingUrl}>{notSure.cta}</LimeButton>
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ── Work ─────────────────────────────────────────────── */

function WorkCard({ p, featured = false }: { p: (typeof work.projects)[number]; featured?: boolean }) {
  return (
    <a href={p.href} className="group relative block overflow-hidden rounded-[28px]">
      <ProjectMedia
        title={p.title}
        color={p.color}
        image={p.image}
        className={`w-full transition-transform duration-700 group-hover:scale-[1.03] ${featured ? "aspect-[4/3] sm:aspect-[16/5.5]" : "aspect-[16/8] sm:aspect-[16/6.2]"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
      <div className="absolute bottom-6 left-6 text-white">
        {featured && <span className="mb-3 inline-block rounded-md bg-lime px-2.5 py-1 text-[15px] font-extrabold uppercase tracking-wide text-ink">Featured</span>}
        <p className={`font-bold tracking-tight ${featured ? "text-3xl" : "text-2xl"}`}>{p.title}</p>
        <p className="mt-1 text-white/85 sm:text-lg">{p.category}</p>
      </div>
      <span className="absolute bottom-6 right-6 grid size-11 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition-colors group-hover:bg-lime group-hover:text-ink">
        <DiagArrow />
      </span>
    </a>
  );
}

export function Work() {
  const featured = work.projects.find((p) => p.featured);
  const rest = work.projects.filter((p) => p !== featured);
  return (
    <section id="work" className="pb-24 sm:pb-32">
      <Container>
        <SectionHeading eyebrow="Selected work" title={work.heading} action={{ label: work.allLabel, href: work.allHref }} />
        {featured && (
          <Reveal className="mb-4">
            <WorkCard p={featured} featured />
          </Reveal>
        )}
        <div className="grid gap-4 md:grid-cols-2">
          {rest.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 80}>
              <WorkCard p={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Process ──────────────────────────────────────────── */

export function Process() {
  return (
    <section className="pb-24 sm:pb-32">
      <Container>
        <SectionHeading eyebrow="How it works" title={process.heading} sub={process.sub} />
        <Reveal>
          <ol className={`${card} grid gap-8 p-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6`}>
            {process.steps.map((s, i) => {
              const hot = i === 0 || i === process.steps.length - 1;
              return (
                <li key={s.title}>
                  <div className="flex items-center gap-2">
                    <span className={`grid size-[60px] shrink-0 place-items-center rounded-full text-xl font-extrabold ${hot ? "bg-lime" : "bg-chip"}`}>{i + 1}</span>
                    <span className="hidden h-0 flex-1 border-t-2 border-dashed border-line lg:block" />
                  </div>
                  <h3 className="mt-5 text-[1.4rem] font-extrabold tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-muted">{s.desc}</p>
                </li>
              );
            })}
          </ol>
        </Reveal>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {process.badges.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className={`${card} flex items-center gap-4 p-6`}>
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-chip">
                  <Icon name={b.icon} className="size-5" />
                </span>
                <div>
                  <p className="text-xl font-bold tracking-tight">{b.title}</p>
                  <p className="text-lg text-muted">{b.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Reviews ──────────────────────────────────────────── */

export function Reviews() {
  const max = Math.max(...reviews.breakdown.map((b) => b.count), 1);
  const faces = [reviews.featured, ...reviews.items].slice(0, 4);
  return (
    <section id="reviews" className="pb-24 sm:pb-32">
      <Container>
        <SectionHeading eyebrow="Reviews" title={reviews.heading} action={{ label: reviews.allLabel, href: reviews.allHref }} />
        <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
          <Reveal>
            <figure className={`${card} flex h-full flex-col justify-between gap-10 p-8 sm:p-12`}>
              <blockquote className="text-[1.9rem] font-extrabold leading-[1.15] tracking-[-0.035em] sm:text-[2.7rem]">
                “{reviews.featured.quote}”
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-ink text-sm font-bold text-white">{initials(reviews.featured.name)}</span>
                <span>
                  <span className="block text-lg font-bold">{reviews.featured.name}</span>
                  <Stars className="text-sm" />
                </span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={100}>
            <div className={`${darkCard} h-full p-7 sm:p-8`}>
              <div className="flex items-start justify-between gap-4">
                <p className="text-8xl font-extrabold leading-none tracking-tighter text-lime">{reviews.rating}</p>
                <div className="flex -space-x-2">
                  {faces.map((f, i) => (
                    <span key={i} className="grid size-10 place-items-center rounded-full border-2 border-dark bg-dark-2 text-[13px] font-bold">
                      {initials(f.name)}
                    </span>
                  ))}
                  {reviews.extraCount > 0 && (
                    <span className="grid size-10 place-items-center rounded-full border-2 border-dark bg-lime text-[13px] font-extrabold text-ink">+{reviews.extraCount}</span>
                  )}
                </div>
              </div>
              <Stars className="mt-4 block text-xl text-lime" />
              <p className="mt-5 text-lg text-white/70">{reviews.summary}</p>
              <div className="mt-5 space-y-3">
                {reviews.breakdown.map((b) => (
                  <div key={b.stars} className="flex items-center gap-4 text-white/60">
                    <span className="w-6">{b.stars}★</span>
                    <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                      <span className="block h-full rounded-full bg-lime" style={{ width: `${(b.count / max) * 100}%` }} />
                    </span>
                    <span className="w-6 text-right tabular-nums">{b.count}</span>
                  </div>
                ))}
              </div>
              <div className="mt-7 border-t border-white/10 pt-7">
                <Eyebrow className="text-white/60">What clients mention</Eyebrow>
                <div className="mt-4 flex flex-wrap gap-2">
                  {reviews.themes.map((t) => (
                    <span key={t} className="rounded-full border border-white/15 px-4 py-2 font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {reviews.items.map((r, i) => (
            <Reveal key={i} delay={i * 80}>
              <figure className={`${card} flex h-full flex-col justify-between gap-6 p-7`}>
                <blockquote className="text-xl leading-relaxed">“{r.quote}”</blockquote>
                <figcaption className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-full bg-chip text-[15px] font-bold">{initials(r.name)}</span>
                  <span>
                    <span className="block text-lg font-bold">{r.name}</span>
                    <Stars className="text-sm" />
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Products ─────────────────────────────────────────── */

function ProductShot({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex aspect-[16/10] flex-col overflow-hidden rounded-b-2xl" style={{ background: `color-mix(in srgb, ${color} 8%, white)` }}>
      <div className="flex items-center gap-2 px-5 py-3">
        <span className="size-3 rounded-sm" style={{ background: color }} />
        <span className="text-[11px] font-bold">{name}</span>
        <span className="ml-auto h-4 w-14 rounded-full" style={{ background: color }} />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center gap-2 px-8 text-center">
        <span className="h-3 w-3/5 rounded-full bg-ink/80" />
        <span className="h-3 w-2/5 rounded-full" style={{ background: color }} />
        <span className="mt-2 h-1.5 w-3/4 rounded-full bg-ink/15" />
        <span className="h-1.5 w-2/3 rounded-full bg-ink/15" />
        <span className="mt-3 h-6 w-28 rounded-full" style={{ background: color }} />
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="pb-24 sm:pb-32">
      <Container>
        <SectionHeading eyebrow="Products" title={products.heading} sub={products.sub} action={{ label: products.allLabel, href: products.allHref }} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.items.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 80}>
              <a href={p.href} className={`${card} group block h-full p-3 transition-shadow hover:shadow-xl`}>
                <div className="overflow-hidden rounded-2xl border border-line">
                  <div className="flex items-center gap-3 bg-card px-3 py-2.5">
                    <span className="flex gap-1.5">
                      <span className="size-2.5 rounded-full bg-line" />
                      <span className="size-2.5 rounded-full bg-line" />
                      <span className="size-2.5 rounded-full bg-line" />
                    </span>
                    <span className="flex-1 truncate rounded-lg bg-chip px-3 py-1.5 text-[15px] text-ink/80">{p.domain}</span>
                  </div>
                  <ProductShot name={p.name} color={p.color} />
                </div>
                <div className="px-3 pb-4 pt-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-[1.7rem] font-extrabold tracking-[-0.035em]">{p.name}</h3>
                    <span className="whitespace-nowrap rounded-full bg-chip px-3 py-1.5 font-bold">{p.price}</span>
                  </div>
                  <p className="mt-2 text-lg leading-relaxed text-muted">{p.desc}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── FAQ + contact ────────────────────────────────────── */

export function FaqContact({ showFaq }: { showFaq: boolean }) {
  return (
    <section id="contact" className="pb-16">
      <Container>
        {showFaq && (
          <div id="faq" className="mb-0">
            <SectionHeading eyebrow="FAQ" title={faq.heading} />
          </div>
        )}
        <div className={`grid gap-4 ${showFaq ? "lg:grid-cols-[1.25fr_1fr]" : ""}`}>
          {showFaq && (
            <Reveal>
              <div className={`${card} px-7 py-3`}>
                {faq.items.map((f, i) => (
                  <details key={f.q} name="faq" open={i === 0} className={`group py-5 ${i ? "border-t border-line" : ""}`}>
                    <summary className="flex cursor-pointer items-center justify-between gap-4 text-xl font-bold tracking-tight">
                      {f.q}
                      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-chip text-lg font-bold transition-colors group-open:bg-lime">
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:inline">×</span>
                      </span>
                    </summary>
                    <p className="mt-4 pr-12 text-lg leading-relaxed text-muted">{f.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          )}
          <Reveal delay={100} className="flex flex-col gap-4">
            <div className={`${darkCard} relative overflow-hidden p-8 sm:p-12`}>
              <span className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full border-[56px] border-lime/[0.08]" aria-hidden />
              <div className="relative">
                {site.available && <StatusDot />}
                <h2 className="mt-6 text-[3rem] font-extrabold leading-[1] tracking-[-0.05em] sm:text-[4.4rem]">
                  {contact.title}
                  <span className="block text-lime">{contact.highlight}</span>
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65 sm:text-xl">{contact.body}</p>
                <LimeButton href={site.bookingUrl} className="mt-8">
                  {contact.cta}
                </LimeButton>
              </div>
            </div>
            <div className={`${card} flex items-center justify-between gap-4 p-6`}>
              <div className="min-w-0">
                <p className="text-muted">{contact.emailLabel}</p>
                <a href={`mailto:${site.email}`} className="block truncate text-xl font-bold hover:underline">
                  {site.email}
                </a>
              </div>
              <CopyButton text={site.email} />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ── Footer + chat bubble ─────────────────────────────── */

export function Footer() {
  const links = [{ label: "Services", href: "#services" }, ...site.nav.slice(0, 1), { label: "Products", href: "#products" }, ...site.nav.slice(2)];
  return (
    <footer className="pb-10">
      <Container className="flex flex-col gap-5 text-lg text-muted lg:flex-row lg:items-center lg:justify-between">
        <p>
          © <Year /> {site.name} · {site.location}
        </p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-ink">
              {l.label}
            </a>
          ))}
          {site.socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              {s.label}
            </a>
          ))}
          <a href="#" className="hover:text-ink">Privacy</a>
          <a href="#" className="hover:text-ink">Terms</a>
        </nav>
      </Container>
    </footer>
  );
}

export function ChatBubble() {
  return (
    <a href={site.chatUrl} className="group fixed bottom-5 right-5 z-40 flex items-center gap-3" aria-label="Got a project in mind? Chat with me">
      <span className="hidden rounded-2xl border border-line bg-card px-4 py-3 text-[15px] shadow-lg sm:block">Got a project in mind?</span>
      <span className="grid size-16 place-items-center rounded-full bg-[#1e3a27] text-white shadow-xl ring-4 ring-lime/25 transition-transform group-hover:scale-105">
        <Icon name="chat" className="size-7" />
      </span>
    </a>
  );
}
