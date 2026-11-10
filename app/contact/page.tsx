import type { Metadata } from "next";
import { contact, site } from "@/content/site";
import { ContactForm } from "@/components/contact-form";
import { Container, Eyebrow, Icon } from "@/components/ui";

export const metadata: Metadata = {
  title: "Discuss a Project",
  description: "Tell ReeCo where enquiries, follow-up or daily operations are getting stuck. We'll start with the problem and work toward a practical solution.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="-mt-[76px] bg-dark pt-[76px]">
      <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
        <div className="text-white">
          <Eyebrow dark>{contact.eyebrow}</Eyebrow>
          <h1 className="mt-5 text-[2.2rem] font-bold leading-[1.12] tracking-[-0.03em] sm:text-5xl">{contact.heading}</h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">{contact.sub}</p>
          <ul className="mt-8 space-y-3">
            {contact.expectations.map((e) => (
              <li key={e} className="flex gap-3 text-[15px] text-white/80">
                <Icon name="check" className="mt-0.5 size-5 shrink-0 text-gold" />
                {e}
              </li>
            ))}
          </ul>
          {site.email && (
            <p className="mt-8 border-t border-white/10 pt-6 text-[15px] text-white/60">
              Prefer email?{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-gold hover:underline">
                {site.email}
              </a>
            </p>
          )}
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
