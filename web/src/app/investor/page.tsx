import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Investor | Amelia Ghofrany",
  description:
    "Amelia Ghofrany invests in businesses at different stages — acquisitions, growth partnerships, and founder backing with strategic mentoring.",
};

export default function InvestorPage() {
  return (
    <ServicePageLayout
      eyebrow="Investor"
      title="Buying, building, and backing businesses."
      ctas={[
        {
          href: "/contact",
          label: "Get in touch",
          primary: true,
        },
        {
          href: "https://calendly.com/ameliaghofrany",
          label: "Book a time to talk",
          external: true,
        },
      ]}
    >
      <p>
        I invest in businesses at different stages, and in different ways.
        Sometimes that means acquiring a business outright. Other times
        it&apos;s partnering with an existing business to help it grow, scale or
        transform. And for the right startups, it can mean backing the founders
        with my strategic experience and mentoring in exchange for equity.
      </p>
      <p>
        However we work together, I bring the same thing: curiosity, hands-on
        experience building and running businesses, and a genuine interest in
        your success, not just the deal.
      </p>
      <p>
        Every situation is different, so the best next step is a conversation.
        Get in touch or book a time to talk through where you&apos;re at.
      </p>
    </ServicePageLayout>
  );
}
