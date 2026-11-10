import type { Metadata } from "next";
import { work } from "@/content/site";
import { Reveal } from "@/components/client-bits";
import { Preview } from "@/components/previews";
import { FinalCta, PageHeader } from "@/components/sections";
import { Arrow, Checklist, Container, TypeBadge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Project experience and clearly labelled demonstrations showing how ReeCo approaches lead management, follow-up and retention problems for service businesses.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHeader eyebrow={work.eyebrow} title={work.heading} sub={work.sub}>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
          <span className="inline-flex items-center gap-2">
            <TypeBadge type="Project experience" dark /> Work the founder contributed to
          </span>
          <span className="inline-flex items-center gap-2">
            <TypeBadge type="Demonstration" dark /> Sample systems, not paid client engagements
          </span>
        </div>
      </PageHeader>

      <div className="py-16 sm:py-20">
        <Container className="space-y-8">
          {work.projects.map((p, i) => (
            <Reveal key={p.slug}>
              <article id={p.slug} className="scroll-mt-28 overflow-hidden rounded-3xl border border-line bg-card">
                <div className="grid lg:grid-cols-2">
                  <div className={`bg-bg p-5 sm:p-8 lg:p-10 ${i % 2 ? "lg:order-2" : ""}`}>
                    <Preview kind={p.preview} />
                    {p.video && (
                      <video controls preload="none" playsInline className="mt-5 w-full rounded-2xl border border-line bg-dark">
                        <source src={p.video} type="video/mp4" />
                      </video>
                    )}
                  </div>
                  <div className="p-7 sm:p-10">
                    <div className="flex flex-wrap items-center gap-2">
                      <TypeBadge type={p.type} />
                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{p.industry}</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-[1.9rem]">{p.name}</h2>
                    <p className="mt-3 text-[17px] leading-relaxed text-muted">{p.summary}</p>

                    <h3 className="mt-7 text-xs font-semibold uppercase tracking-[0.16em] text-muted">The business problem</h3>
                    <p className="mt-2 text-[15px] leading-relaxed">{p.problem}</p>

                    <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                      {p.type === "Project experience" ? "What was done" : "Proposed solution"}
                    </h3>
                    <div className="mt-3">
                      <Checklist items={p.solution} />
                    </div>

                    <div className="mt-7 grid gap-5 border-t border-line pt-6 sm:grid-cols-2">
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Role & contribution</h3>
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          {p.role.map((r) => (
                            <span key={r} className="rounded-full bg-bg px-2.5 py-1 text-xs font-medium ring-1 ring-line">
                              {r}
                            </span>
                          ))}
                        </div>
                      </div>
                      {p.tools.length > 0 && (
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Tools used</h3>
                          <p className="mt-2.5 text-sm">{p.tools.join(" · ")}</p>
                        </div>
                      )}
                    </div>

                    {p.note && <p className="mt-6 rounded-xl border border-gold/40 bg-gold/10 p-4 text-sm leading-relaxed">{p.note}</p>}
                    {p.type !== "Project experience" && (
                      <p className="mt-6 text-sm text-muted">
                        This is a demonstration of how ReeCo would approach the problem. It is not a paid client engagement.
                      </p>
                    )}
                    {p.link && (
                      <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="group mt-6 inline-flex items-center gap-1.5 font-semibold">
                        {p.link.label} <Arrow className="text-gold transition-transform group-hover:translate-x-1" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </Container>
      </div>

      <FinalCta />
    </>
  );
}
