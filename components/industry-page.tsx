import type { Metadata } from "next";
import Link from "next/link";
import { contact, industries, work, type IndustrySlug } from "@/content/site";
import { Reveal } from "./client-bits";
import { Preview } from "./previews";
import { FinalCta, PageHeader } from "./sections";
import { Arrow, Button, Container, Icon, SectionHeading, TypeBadge } from "./ui";

const projectFor: Record<IndustrySlug, string> = {
  "real-estate": "real-estate-leads",
  medspas: "medspa-retention",
  "home-services": "home-services-quotes",
};

export function industryMetadata(slug: IndustrySlug): Metadata {
  const ind = industries.items.find((i) => i.slug === slug)!;
  return {
    title: { absolute: ind.seoTitle },
    description: ind.seoDescription,
    alternates: { canonical: `/industries/${slug}` },
    openGraph: { title: ind.seoTitle, description: ind.seoDescription },
  };
}

export function IndustryPage({ slug }: { slug: IndustrySlug }) {
  const ind = industries.items.find((i) => i.slug === slug)!;
  const project = work.projects.find((p) => p.slug === projectFor[slug]);
  const others = industries.items.filter((i) => i.slug !== slug);

  return (
    <>
      <PageHeader eyebrow={`Industries · ${ind.name}`} title={ind.short} sub={ind.intro}>
        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/60">
          <span>Who we work with:</span>
          {ind.audience.map((a) => (
            <span key={a} className="rounded-full border border-white/15 px-3 py-1.5 text-white/85">
              {a}
            </span>
          ))}
        </div>
        <div className="mt-8">
          <Button href={contact.cta.href}>{contact.cta.label}</Button>
        </div>
      </PageHeader>

      {/* Customer journey */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="The customer journey" title={`How a ${ind.name === "MedSpas" ? "patient" : "customer"} moves through the business`} />
          <ol className="grid gap-3 md:grid-cols-5">
            {ind.journey.map((j, i) => (
              <Reveal key={j.stage} delay={i * 60}>
                <li className="relative h-full rounded-2xl border border-line bg-card p-5">
                  <span className="text-sm font-bold text-gold-ink">0{i + 1}</span>
                  <h3 className="mt-2 font-bold tracking-tight">{j.stage}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{j.detail}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* Problems + solutions */}
      <section className="border-y border-line bg-card py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          <div>
            <SectionHeading eyebrow="Where it breaks down" title="Common operational problems" />
            <ul className="space-y-3">
              {ind.problems.map((p) => (
                <li key={p} className="flex gap-3 rounded-xl border border-line bg-bg p-4 text-[15px] leading-relaxed">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-gold" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="How ReeCo helps" title="Systems built around that journey" />
            <div className="grid gap-3 sm:grid-cols-2">
              {ind.solutions.map((s, i) => (
                <Reveal key={s.title} delay={(i % 2) * 60}>
                  <div className="h-full rounded-2xl border border-line p-5">
                    <Icon name="check" className="size-5 text-gold-ink" />
                    <h3 className="mt-3 font-bold tracking-tight">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Related demonstration */}
      {project && (
        <section className="py-16 sm:py-20">
          <Container>
            <div className="grid items-center gap-10 rounded-3xl bg-dark p-6 text-white sm:p-10 lg:grid-cols-2">
              <div>
                <TypeBadge type={project.type} dark />
                <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">{project.name}</h2>
                <p className="mt-3 text-[17px] leading-relaxed text-white/70">{project.summary}</p>
                <Link href={`/work#${project.slug}`} className="group mt-6 inline-flex items-center gap-1.5 font-semibold text-gold-ink">
                  See the full walkthrough <Arrow className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              <Preview kind={project.preview} />
            </div>
          </Container>
        </section>
      )}

      {/* Other industries */}
      <section className="pb-4">
        <Container>
          <div className="grid gap-3 sm:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} href={`/industries/${o.slug}`} className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-card p-5 transition-colors hover:border-ink/30">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Also see</p>
                  <p className="mt-1 text-lg font-bold">{o.name}</p>
                </div>
                <Arrow className="text-gold-ink transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
