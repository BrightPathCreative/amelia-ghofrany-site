import type { Metadata } from "next";
import { BeyondBoardroom } from "@/components/BeyondBoardroom";
import { ContentPageLayout } from "@/components/ContentPageLayout";

export const metadata: Metadata = {
  title: "Beyond the Boardroom | Amelia Ghofrany",
  description:
    "A curious traveller and global citizen: how Amelia Ghofrany's journeys across 26 countries shape how she leads and connects.",
};

export default function BeyondPage() {
  return (
    <ContentPageLayout
      wide
      eyebrow="Beyond the Boardroom"
      title="A curious traveller & global citizen."
    >
      <BeyondBoardroom />
    </ContentPageLayout>
  );
}
