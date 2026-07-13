"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const INTEREST_OPTIONS = [
  { value: "", label: "Select an option" },
  { value: "investor", label: "Investor conversations" },
  { value: "advisor", label: "Strategic advisory" },
  { value: "speaker", label: "Speaking / keynotes" },
  { value: "other", label: "Something else" },
] as const;

const fieldClass =
  "mt-2 w-full rounded-sm border border-brand-taupe/35 bg-brand-navy/40 px-4 py-3 text-sm text-brand-grey outline-none transition placeholder:text-brand-grey/45 focus:border-brand-taupe focus:ring-1 focus:ring-brand-taupe/60";

/**
 * Mock enquiry form. Tomorrow, replace this component’s usage in ContactEmbed
 * with a GoHighLevel iframe; keep ContactEmbed as the swap point.
 */
export function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Mock only; no backend / GHL yet. Navigate to thank-you on success.
    router.push("/thank-you");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      <div>
        <label htmlFor="contact-name" className="text-xs font-medium uppercase tracking-widest text-brand-taupe">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Your name"
          className={fieldClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className="text-xs font-medium uppercase tracking-widest text-brand-taupe">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="text-xs font-medium uppercase tracking-widest text-brand-taupe">
            Phone <span className="normal-case tracking-normal text-brand-grey/50">(optional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+61…"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-interest" className="text-xs font-medium uppercase tracking-widest text-brand-taupe">
          How can I help?
        </label>
        <select
          id="contact-interest"
          name="interest"
          required
          defaultValue=""
          className={`${fieldClass} appearance-none bg-[length:1rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%878a8f'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`,
          }}
        >
          {INTEREST_OPTIONS.map((opt) => (
            <option
              key={opt.value || "empty"}
              value={opt.value}
              disabled={opt.value === ""}
              className="bg-brand-navy text-brand-grey"
            >
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className="text-xs font-medium uppercase tracking-widest text-brand-taupe">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="A little context on what you’re navigating…"
          className={`${fieldClass} resize-y min-h-[6.5rem]`}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="btn-sweep inline-flex w-full items-center justify-center rounded-full bg-brand-taupe px-8 py-3.5 text-sm font-medium text-brand-grey shadow-md transition hover:shadow-lg disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        <span>{submitting ? "Sending…" : "Send enquiry"}</span>
      </button>
    </form>
  );
}
