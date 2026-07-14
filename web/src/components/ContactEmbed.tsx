import Script from "next/script";

/**
 * Contact form host region — embeds the GoHighLevel enquiry form.
 * On submission, GHL redirects to /thank-you (configured in GHL form settings).
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

      <div className="mt-8">
        <iframe
          src="https://links.brightpathcreative.com.au/widget/form/fJmTFgZvTmnsBUiJyt2y"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "8px",
          }}
          className="min-h-[588px] w-full"
          id="inline-fJmTFgZvTmnsBUiJyt2y"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Amelia Ghofrany Enquiry Form"
          data-height="588"
          data-layout-iframe-id="inline-fJmTFgZvTmnsBUiJyt2y"
          data-form-id="fJmTFgZvTmnsBUiJyt2y"
          title="Amelia Ghofrany Enquiry Form"
        />
        <Script
          src="https://links.brightpathcreative.com.au/js/form_embed.js"
          strategy="lazyOnload"
        />
      </div>
    </div>
  );
}
