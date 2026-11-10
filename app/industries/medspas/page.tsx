import { IndustryPage, industryMetadata } from "@/components/industry-page";

export const metadata = industryMetadata("medspas");

export default function Page() {
  return <IndustryPage slug="medspas" />;
}
