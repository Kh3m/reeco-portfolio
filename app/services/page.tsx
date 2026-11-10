import type { Metadata } from "next";
import { contact, services } from "@/content/site";
import { Reveal } from "@/components/client-bits";
import { FinalCta, PageHeader, ProcessSection } from "@/components/sections";
import { Button, Checklist, Container, IconTile } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Revenue operations, CRM and lead management, workflow automation, customer retention systems and business operations support for service businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow={services.eyebrow} title={services.heading} sub={services.sub}>
        <nav aria-label="Services on this page" className="mt-8 flex flex-wrap gap-2">
          {services.items.map((s) => (
            <a key={s.key} href={`#${s.key}`} className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:border-gold hover:text-white">
              {s.title}
            </a>
          ))}
        </nav>
      </PageHeader>

      <div className="py-16 sm:py-20">
        <Container className="space-y-6">
          {services.items.map((s, i) => (
            <Reveal key={s.key}>
              <article id={s.key} className="scroll-mt-28 overflow-hidden rounded-3xl border border-line bg-card">
                <div className="grid lg:grid-cols-[1fr_1.15fr]">
                  <div className="border-b border-line p-7 sm:p-10 lg:border-b-0 lg:border-r">
                    <div className="flex items-center gap-3">
                      <IconTile name={s.icon} />
                      <span className="text-sm font-semibold text-gold">0{i + 1}</span>
                    </div>
                    <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-[1.9rem]">{s.title}</h2>
                    <p className="mt-3 text-[17px] leading-relaxed text-muted">{s.summary}</p>

                    <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-muted">The problem</h3>
                    <p className="mt-2 text-[15px] leading-relaxed">{s.problem}</p>
                    <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted">Why it matters</h3>
                    <p className="mt-2 text-[15px] leading-relaxed">{s.whyItMatters}</p>
                  </div>
                  <div className="bg-bg/60 p-7 sm:p-10">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">How we approach it</h3>
                    <ol className="mt-4 space-y-3">
                      {s.approach.map((a, k) => (
                        <li key={a} className="flex gap-3 text-[15px] leading-relaxed">
                          <span className="grid size-6 shrink-0 place-items-center rounded-full bg-dark text-xs font-bold text-gold">{k + 1}</span>
                          {a}
                        </li>
                      ))}
                    </ol>
                    <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-muted">What you receive</h3>
                    <div className="mt-4">
                      <Checklist items={s.deliverables} />
                    </div>
                    <div className="mt-8 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs text-muted">Typical tools:</span>
                        {s.tools.map((t) => (
                          <span key={t} className="rounded-full bg-card px-2.5 py-1 text-xs font-medium ring-1 ring-line">
                            {t}
                          </span>
                        ))}
                      </div>
                      <Button href={contact.cta.href} variant="dark" className="shrink-0">
                        Discuss this
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </div>

      <ProcessSection className="border-t border-line bg-card" />
      <FinalCta />
    </>
  );
}
