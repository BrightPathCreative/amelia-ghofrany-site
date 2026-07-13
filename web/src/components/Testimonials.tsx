const testimonials = [
  {
    id: "suzi-nikoloski",
    initials: "SN",
    quote:
      "Amelia is an exceptional leader with a proven ability to translate strategy into measurable outcomes. In my capacity at Harbour Consulting, I've engaged Amelia and her team across multiple initiatives, where they consistently delivered high-quality, insight-led outcomes. She brings a structured, commercially grounded approach to every engagement, with a clear focus on enabling growth and scale for SMEs. Amelia has a natural ability to build trust with stakeholders while maintaining a sharp consulting lens, making her a highly effective partner for organisations navigating digital transformation.",
    name: "Suzi Nikoloski, Managing Partner, Harbour Consulting",
  },
  {
    id: "navid-baghi",
    initials: "NB",
    quote:
      "We had a fantastic experience working with Amelia. She is incredibly knowledgeable in her field and genuinely passionate about helping others succeed. Her advice was not only practical but also tailored to our situation, making it easy to understand and implement. Amelia had a willingness to share valuable insights and tips that we could apply immediately to improve our business. She is approachable, supportive, and truly cares about her clients' outcomes. I highly recommend Amelia to anyone looking for a skilled and reliable business advisor. Thank you again for your guidance and support.",
    name: "Navid K. Baghi, Principal Solicitor, Amity Lawyers",
  },
  {
    id: "shahrzad-davarkhah",
    initials: "SD",
    quote:
      "Amelia is an exceptional business strategist who provides practical, insightful advice that delivers real value. She has a wealth of experience, takes the time to understand your business, and provides clear, actionable strategies for growth. Highly professional, approachable, and genuinely invested in her clients' success. I highly recommend CompassPoint Advisory.",
    name: "Shahrzad Davarkhah, Owner, Luxe Murals",
  },
  {
    id: "priyanka-jay",
    initials: "PJ",
    quote:
      "I highly recommend CompassPoint Advisory. Amelia provided exceptional service, expert guidance and practical solutions. She took the time to understand the business needs and offered advice that adds real value. Her professionalism and attention to detail is a must for any business seeking strategic growth.",
    name: "Priyanka Jay, Owner, My Cartino Consulting",
  },
  {
    id: "nandita-rad",
    initials: "NR",
    quote:
      "Amelia brings a rare combination of strategic clarity, commercial discipline and genuine warmth. She has a strong ability to understand what is really happening inside a business and translate that into practical, considered advice that owners can actually act on. I would highly recommend Amelia and CompassPoint Advisory to any business owner seeking clear thinking, grounded strategy and thoughtful guidance.",
    name: "Nandita Rad, Director, Harven Rad Partners",
  },
];

export function Testimonials() {
  return (
    <section className="surface-linen relative py-20 md:py-[7rem]">
      <div className="reveal mx-auto max-w-[1100px] px-6 md:px-8">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-brand-taupe">
          Kind Words
        </p>
        <div className="mt-10 flex flex-col gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center gap-8 rounded-sm border border-brand-taupe/25 bg-white/50 p-8 text-center backdrop-blur-sm md:flex-row md:items-start md:gap-10 md:p-10 md:text-left"
            >
              <div
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand-taupe/35 bg-brand-navy/5 font-display text-sm font-semibold tracking-wide text-brand-navy"
                aria-hidden
              >
                {testimonial.initials}
              </div>
              <blockquote className="min-w-0 flex-1">
                <p className="font-display text-xl font-normal leading-relaxed text-brand-black md:text-2xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6 text-sm text-brand-taupe">
                  {testimonial.name}
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
