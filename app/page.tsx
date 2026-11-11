import { FinalCta, FounderIntro, HomeHero, IndustriesSection, Problems, ProcessSection, ServicesOverview, WorkSection } from "@/components/sections";

export default function Home() {
  return (
    <>
      <HomeHero />
      <FounderIntro className="border-b border-line bg-card" />
      <Problems />
      <ServicesOverview />
      <IndustriesSection />
      <ProcessSection />
      <WorkSection />
      <FinalCta />
    </>
  );
}
