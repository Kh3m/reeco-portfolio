import Link from "next/link";
import { industries, nav, services, site } from "@/content/site";
import { Year } from "./client-bits";
import { Container, Icon, Logo } from "./ui";

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/60">
              Revenue operations and automation for service businesses. {site.closingLine}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {site.email && (
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-[15px] text-white/80 hover:text-gold">
                  <Icon name="mail" className="size-4" /> {site.email}
                </a>
              )}
              {site.linkedin && (
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[15px] text-white/80 hover:text-gold">
                  <Icon name="linkedin" className="size-4" /> LinkedIn
                </a>
              )}
            </div>
          </div>
          <FooterCol title="Company" links={[...nav.filter((l) => !l.children), { label: "Contact", href: "/contact" }]} />
          <FooterCol title="Services" links={services.items.map((s) => ({ label: s.title, href: `/services#${s.key}` }))} />
          <FooterCol title="Industries" links={industries.items.map((i) => ({ label: i.name, href: `/industries/${i.slug}` }))} />
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:justify-between">
          <p>
            © <Year /> {site.brand}. All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="text-[15px] text-white/70 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
