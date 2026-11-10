import Link from "next/link";
import { contact, founder, hero, industries, problems, process, services, work, type Industry } from "@/content/site";
import { Reveal } from "./client-bits";
import { HeroFollowCard, HeroLeadCard, Preview } from "./previews";
import { Accent, Arrow, Button, Checklist, Container, Eyebrow, Icon, IconTile, SectionHeading, TextLink, TypeBadge, type IconName } from "./ui";

/* ── Founder portrait composition ─────────────────────── */

export function FounderPortrait({ withCards = true, className = "" }: { withCards?: boolean; className?: string }) {
  if (!founder.portrait) return null;
  return (
    <div className={`relative mx-auto w-full max-w-[440px] ${className}`}>
      <div className="absolute -inset-3 rounded-[28px] border border-gold/30" aria-hidden />
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-dark-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={founder.portrait} alt={founder.portraitAlt} className="size-full object-cover object-[50%_20%]" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent p-5 pt-16">
          <p className="font-semibold text-white">{founder.name || founder.role}</p>
          {founder.name && <p className="text-sm text-gold">{founder.role}</p>}
        </div>
      </div>
      {withCards && (
        <>
          <div className="absolute -left-10 top-10 hidden xl:block">
            <HeroLeadCard />
          </div>
          <div className="absolute -right-8 bottom-24 hidden xl:block">
            <HeroFollowCard />
          </div>
        </>
      )}
    </div>
  );
}

/** Used in the hero when no portrait has been supplied yet. */
function SystemOverview() {
  const stages = [
    { icon: "inbox" as IconName, t: "Capture", d: "Every enquiry lands in one place" },
    { icon: "users" as IconName, t: "Qualify", d: "The right questions, asked early" },
    { icon: "route" as IconName, t: "Follow up", d: "A clear next step, every time" },
    { icon: "check" as IconName, t: "Convert", d: "Booked, handed off, delivered" },
    { icon: "refresh" as IconName, t: "Retain", d: "Customers invited back" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-[460px]">
      <div className="rounded-3xl border border-white/10 bg-dark-2 p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">Lead-to-customer system</p>
        <ol className="mt-5 space-y-2.5">
          {stages.map((s, i) => (
            <li key={s.t} className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3">
              <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${i === 2 ? "bg-gold text-dark" : "bg-white/[0.06] text-gold"}`}>
                <Icon name={s.icon} className="size-[18px]" />
              </span>
              <div>
                <p className="text-[15px] font-semibold text-white">{s.t}</p>
                <p className="text-[13px] text-white/55">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="absolute -right-6 -bottom-8 hidden sm:block">
        <HeroFollowCard />
      </div>
    </div>
  );
}

/* ── Home: hero ───────────────────────────────────────── */

export function HomeHero() {
  return (
    <section className="-mt-[76px] bg-dark pt-[76px] text-white">
      <Container className="grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:py-24">
        <div>
          <Eyebrow dark>{hero.eyebrow}</Eyebrow>
          <h1 className="mt-6 text-[2.35rem] font-bold leading-[1.1] tracking-[-0.03em] sm:text-5xl lg:text-[3.4rem]">
            <Accent text={hero.headline} className="text-gold" />
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">{hero.sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="outline-light">
              {hero.secondaryCta.label}
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/10 pt-6 text-sm text-white/55">
            <span>Working with service businesses in</span>
            {hero.focus.map((f, i) => (
              <span key={f} className="font-semibold text-white/85">
                {f}
                {i < hero.focus.length - 1 && <span className="ml-3 text-gold">·</span>}
              </span>
            ))}
          </div>
        </div>
        {founder.portrait ? <FounderPortrait /> : <SystemOverview />}
      </Container>
    </section>
  );
}

/* ── Home: problems ───────────────────────────────────── */

export function Problems() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow={problems.eyebrow} title={problems.heading} sub={problems.sub} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.items.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-line bg-card p-6">
                <div className="flex items-center justify-between">
                  <IconTile name={p.icon as IconName} />
                  <span className="text-sm font-semibold text-gold">0{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Home: services overview ──────────────────────────── */

export function ServicesOverview() {
  return (
    <section className="border-y border-line bg-card py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.heading}
          sub={services.sub}
          action={<TextLink href="/services">All service details</TextLink>}
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {services.items.map((s, i) => (
            <Reveal key={s.key} delay={(i % 3) * 70} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
              <Link
                href={`/services#${s.key}`}
                className={`group flex h-full flex-col rounded-2xl border p-6 transition-colors sm:p-7 ${
                  i === 0 ? "border-dark bg-dark text-white" : "border-line bg-bg hover:border-ink/30"
                }`}
              >
                <div className="flex items-center justify-between">
                  <IconTile name={s.icon} dark={i === 0} />
                  <Arrow className={`transition-transform group-hover:translate-x-1 ${i === 0 ? "text-gold" : "text-muted"}`} />
                </div>
                <h3 className="mt-5 text-xl font-bold tracking-tight">{s.title}</h3>
                <p className={`mt-2 text-[15px] leading-relaxed ${i === 0 ? "text-white/70" : "text-muted"}`}>{s.summary}</p>
                <div className={`mt-5 border-t pt-5 ${i === 0 ? "border-white/10" : "border-line"}`}>
                  <Checklist items={s.points} dark={i === 0} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Home: industries ─────────────────────────────────── */

const industryIcon: Record<Industry["slug"], IconName> = { medspas: "sparkle", "real-estate": "home", "home-services": "tool" };

export function IndustriesSection({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section className="bg-dark-2 py-20 text-white sm:py-24">
      <Container>
        {showHeading && <SectionHeading dark eyebrow={industries.eyebrow} title={industries.heading} sub={industries.sub} />}
        <div className="grid gap-4 lg:grid-cols-3">
          {industries.items.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 80}>
              <Link
                href={`/industries/${ind.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-dark p-6 transition-colors hover:border-gold/50 sm:p-7"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-xl bg-gold text-dark">
                    <Icon name={industryIcon[ind.slug]} className="size-5" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight">{ind.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/65">{ind.short}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {ind.journey.map((j, k) => (
                    <span key={j.stage} className="inline-flex items-center gap-1.5 text-xs text-white/60">
                      <span className="rounded-full border border-white/10 px-2.5 py-1">{j.stage}</span>
                      {k < ind.journey.length - 1 && <span className="text-gold/70">→</span>}
                    </span>
                  ))}
                </div>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-7 text-[15px] font-semibold text-gold">
                  Explore {ind.name.toLowerCase()} <Arrow className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ── Process ──────────────────────────────────────────── */

export function ProcessSection({ className = "" }: { className?: string }) {
  const icons: IconName[] = ["search", "pen", "settings", "trend"];
  return (
    <section className={`py-20 sm:py-24 ${className}`}>
      <Container>
        <SectionHeading eyebrow={process.eyebrow} title={process.heading} sub={process.sub} />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <li className="relative h-full rounded-2xl border border-line bg-card p-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full bg-dark text-sm font-bold text-gold">{i + 1}</span>
                  <span className="h-px flex-1 bg-line" aria-hidden />
                  <Icon name={icons[i]} className="size-5 text-muted" />
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

/* ── Selected work (summary cards) ────────────────────── */

export function WorkGrid({ limit }: { limit?: number }) {
  const items = limit ? work.projects.slice(0, limit) : work.projects;
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((p, i) => (
        <Reveal key={p.slug} delay={(i % 2) * 80}>
          <Link href={`/work#${p.slug}`} className="group flex h-full flex-col rounded-2xl border border-line bg-card p-3 transition-colors hover:border-ink/30">
            <div className="rounded-xl bg-bg p-4 sm:p-6">
              <Preview kind={p.preview} className="pointer-events-none" />
            </div>
            <div className="flex flex-1 flex-col p-4 pt-5">
              <div className="flex flex-wrap items-center gap-2">
                <TypeBadge type={p.type} />
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{p.industry}</span>
              </div>
              <h3 className="mt-3 text-xl font-bold tracking-tight">{p.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.summary}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[15px] font-semibold">
                View the approach <Arrow className="text-gold transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export function WorkSection() {
  return (
    <section className="border-t border-line bg-card py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow={work.eyebrow} title={work.heading} sub={work.sub} action={<TextLink href="/work">All selected work</TextLink>} />
        <WorkGrid />
      </Container>
    </section>
  );
}

/* ── Final CTA ────────────────────────────────────────── */

export function FinalCta() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-dark px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full border border-gold/20" aria-hidden />
          <div className="pointer-events-none absolute -right-10 -top-10 size-44 rounded-full border border-gold/15" aria-hidden />
          <div className="relative grid gap-8 lg:grid-cols-[1.5fr_auto] lg:items-end">
            <div className="max-w-2xl">
              <Eyebrow dark>Start with the problem</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-0.025em] sm:text-[2.6rem]">{contact.heading}</h2>
              <p className="mt-4 text-lg leading-relaxed text-white/70">{contact.sub}</p>
            </div>
            <Button href={contact.cta.href}>{contact.cta.label}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ── Inner-page header ────────────────────────────────── */

export function PageHeader({ eyebrow, title, sub, children }: { eyebrow: string; title: string; sub?: string; children?: React.ReactNode }) {
  return (
    <section className="-mt-[76px] bg-dark pt-[76px] text-white">
      <Container className="py-16 sm:py-20">
        <div className="max-w-3xl">
          <Eyebrow dark>{eyebrow}</Eyebrow>
          <h1 className="mt-5 text-[2.2rem] font-bold leading-[1.12] tracking-[-0.03em] sm:text-5xl">{title}</h1>
          {sub && <p className="mt-5 text-lg leading-relaxed text-white/70">{sub}</p>}
          {children}
        </div>
      </Container>
    </section>
  );
}
