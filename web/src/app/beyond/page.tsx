import type { Metadata } from "next";
import { BeyondBoardroom } from "@/components/BeyondBoardroom";
import { ContentPageLayout } from "@/components/ContentPageLayout";

export const metadata: Metadata = {
  title: "Beyond the Boardroom",
  description:
    "Twenty-six countries, three continents called home, and a curiosity that keeps Amelia Ghofrany saying yes to the unknown, from Peru to Melbourne, with Antarctica next.",
};

export default function BeyondPage() {
  return (
    <ContentPageLayout
      wide
      eyebrow="Beyond the Boardroom"
      title="A curious traveller & global citizen"
    >
      <BeyondBoardroom />
    </ContentPageLayout>
  );
}
