import { IndustryPage, industryMetadata } from "@/components/industry-page";

export const metadata = industryMetadata("home-services");

export default function Page() {
  return <IndustryPage slug="home-services" />;
}
