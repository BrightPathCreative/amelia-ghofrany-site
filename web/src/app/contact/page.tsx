import type { Metadata } from "next";
import { ContactEmbed } from "@/components/ContactEmbed";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | Amelia Ghofrany",
  description:
    "Get in touch with Amelia Ghofrany, investor, strategic advisor and speaker. Book a discovery call or send an enquiry.",
};

export default function ContactPage() {
  return (
    <main className="relative z-[2] flex flex-1 flex-col">
      <section className="relative flex flex-1 flex-col overflow-hidden border-b border-brand-taupe/20 bg-brand-navy px-6 pb-24 pt-36 md:px-8 md:pb-32 md:pt-40">
        <div className="pointer-events-none absolute -right-40 top-1/3 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(161,177,194,0.14),transparent_65%)]" />
        <div className="pointer-events-none absolute -left-28 bottom-0 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(135,115,94,0.12),transparent_70%)]" />

        <div className="relative z-[1] mx-auto w-full max-w-[800px] text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-taupe">
            Work With Me
          </p>
          <h1 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-normal leading-tight text-brand-grey">
            Let&apos;s start a conversation.
          </h1>
          <p className="mx-auto mt-8 max-w-lg text-lg font-light leading-relaxed text-brand-grey/85">
            Prefer to book time directly, or leave a note first? Either works.
            I&apos;ll come back with something useful, not a template.
          </p>

          <div className="mt-10">
            <a
              href="https://calendly.com/ameliaghofrany"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sweep inline-flex rounded-full bg-brand-taupe px-8 py-3.5 text-sm font-medium text-brand-grey shadow-md transition hover:shadow-lg"
            >
              <span>Book a Discovery Call</span>
            </a>
          </div>

          <div className="mt-14 text-left">
            <ContactEmbed />
          </div>

          <p className="mt-10 text-sm font-light text-brand-grey/65">
            Confidential · No sales pressure · Straight-talking strategic advice.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
