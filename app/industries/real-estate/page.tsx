import { IndustryPage, industryMetadata } from "@/components/industry-page";

export const metadata = industryMetadata("real-estate");

export default function Page() {
  return <IndustryPage slug="real-estate" />;
}
