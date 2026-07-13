import { ContactForm } from "@/components/ContactForm";

/**
 * Contact form host region.
 *
 * Swap path for GoHighLevel (tomorrow):
 * 1. Remove or comment out <ContactForm />.
 * 2. Uncomment the iframe below and set `src` to the GHL form embed URL.
 * 3. Tweak min-height if the iframe needs more vertical space.
 */
export function ContactEmbed() {
  return (
    <div
      id="contact-form"
      className="reveal mx-auto max-w-xl rounded-sm border border-brand-taupe/25 bg-brand-navy/50 p-6 text-left shadow-[0_16px_48px_-20px_rgba(0,0,0,0.45)] backdrop-blur-sm md:p-8"
    >
      <p className="text-xs font-medium uppercase tracking-widest text-brand-taupe">
        Send a note
      </p>
      <p className="mt-2 font-display text-xl text-brand-grey md:text-2xl">
        Share a little context and I&apos;ll follow up.
      </p>

      {/* Mock form — replace with GHL iframe when ready */}
      <div className="mt-8">
        <ContactForm />
      </div>

      {/*
      <iframe
        title="Contact form"
        src="YOUR_GHL_FORM_EMBED_URL"
        className="mt-8 min-h-[640px] w-full border-0"
        loading="lazy"
      />
      */}
    </div>
  );
}
