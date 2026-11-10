import { FinalCta, HomeHero, IndustriesSection, Problems, ProcessSection, ServicesOverview, WorkSection } from "@/components/sections";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Problems />
      <ServicesOverview />
      <IndustriesSection />
      <ProcessSection />
      <WorkSection />
      <FinalCta />
    </>
  );
}
