import type { Metadata } from "next";
import Image from "next/image";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Investor | Amelia Ghofrany",
  description:
    "Amelia Ghofrany invests in businesses at different stages: acquisitions, growth partnerships and founder backing with strategic mentoring.",
};

export default function InvestorPage() {
  return (
    <ServicePageLayout
      eyebrow="Investor"
      title="Investing, building, and backing businesses"
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

      <figure className="my-2 overflow-hidden rounded-sm border border-brand-taupe/30 shadow-md">
        <div className="relative aspect-[16/10] w-full">
          <Image
            src="/images/investor_meeting.jpg"
            alt="Business partners in conversation around a meeting table"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </div>
      </figure>

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
