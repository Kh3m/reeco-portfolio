import type { Metadata } from "next";
import { industries } from "@/content/site";
import { FinalCta, IndustriesSection, PageHeader } from "@/components/sections";

export const metadata: Metadata = {
  title: "Industries",
  description: "Lead management, follow-up and retention systems for real estate agents, MedSpas and home services contractors.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader eyebrow={industries.eyebrow} title={industries.heading} sub={industries.sub} />
      <IndustriesSection showHeading={false} />
      <FinalCta />
    </>
  );
}
