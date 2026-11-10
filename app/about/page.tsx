import type { Metadata } from "next";
import { about, founder, video } from "@/content/site";
import { Reveal } from "@/components/client-bits";
import { FinalCta, FounderPortrait, ProcessSection } from "@/components/sections";
import { Container, Eyebrow, Icon, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "ReeCo combines business operations thinking, customer journey design, CRM management and practical automation to help service businesses manage opportunities and relationships.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="-mt-[76px] bg-dark pt-[76px] text-white">
        <Container className={`grid items-center gap-12 py-16 sm:py-20 ${founder.portrait ? "lg:grid-cols-[1.2fr_1fr]" : ""}`}>
          <div className="max-w-3xl">
            <Eyebrow dark>{about.eyebrow}</Eyebrow>
            <h1 className="mt-5 text-[2.2rem] font-bold leading-[1.12] tracking-[-0.03em] sm:text-5xl">{about.heading}</h1>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-white/70">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <FounderPortrait withCards={false} />
        </Container>
      </section>

      {video.src && (
        <section className="py-16 sm:py-20">
          <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <Eyebrow>Introduction</Eyebrow>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">{video.title}</h2>
              <p className="mt-3 text-[17px] leading-relaxed text-muted">{video.description}</p>
            </div>
            <div>
              <video
                controls
                playsInline
                preload="metadata"
                poster={video.poster || undefined}
                className="aspect-video w-full rounded-2xl border border-line bg-dark object-cover"
                aria-label={video.title}
              >
                <source src={video.src} type="video/mp4" />
                {video.captions && <track kind="captions" src={video.captions} srcLang="en" label="English" default />}
              </video>
              {video.transcript && (
                <details className="group mt-3 rounded-xl border border-line bg-card p-4">
                  <summary className="cursor-pointer text-sm font-semibold">Read the transcript</summary>
                  <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted">{video.transcript}</p>
                </details>
              )}
            </div>
          </Container>
        </section>
      )}

      <section className={`border-b border-line bg-card py-16 sm:py-20 ${video.src ? "border-t" : ""}`}>
        <Container>
          <SectionHeading eyebrow="Experience" title={about.experienceHeading} />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {about.experience.map((e, i) => (
              <Reveal key={e.title} delay={(i % 4) * 60}>
                <div className="h-full rounded-2xl border border-line bg-bg p-5">
                  <Icon name="check" className="size-5 text-gold" />
                  <h3 className="mt-3 font-bold tracking-tight">{e.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{e.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Principles" title="How we think about the work" />
          <div className="grid gap-4 md:grid-cols-3">
            {about.principles.map((p, i) => (
              <div key={p.title} className={`rounded-2xl p-6 ${i === 0 ? "bg-dark text-white" : "border border-line bg-card"}`}>
                <span className={`text-sm font-bold ${i === 0 ? "text-gold" : "text-gold"}`}>0{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold tracking-tight">{p.title}</h3>
                <p className={`mt-2 text-[15px] leading-relaxed ${i === 0 ? "text-white/70" : "text-muted"}`}>{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ProcessSection className="border-t border-line bg-card" />
      <FinalCta />
    </>
  );
}
