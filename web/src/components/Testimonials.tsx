const testimonials = [
  {
    id: "suzi-nikoloski",
    quote:
      "Amelia is an exceptional leader with a proven ability to translate strategy into measurable outcomes. In my capacity at Harbour Consulting, I've engaged Amelia and her team across multiple initiatives, where they consistently delivered high-quality, insight-led outcomes. She brings a structured, commercially grounded approach to every engagement, with a clear focus on enabling growth and scale for SMEs. Amelia has a natural ability to build trust with stakeholders while maintaining a sharp consulting lens, making her a highly effective partner for organisations navigating digital transformation.",
    name: "Suzi Nikoloski",
    role: "Managing Partner, Harbour Consulting",
  },
  {
    id: "navid-baghi",
    quote:
      "We had a fantastic experience working with Amelia. She is incredibly knowledgeable in her field and genuinely passionate about helping others succeed. Her advice was not only practical but also tailored to our situation, making it easy to understand and implement. Amelia had a willingness to share valuable insights and tips that we could apply immediately to improve our business. She is approachable, supportive, and truly cares about her clients' outcomes. I highly recommend Amelia to anyone looking for a skilled and reliable business advisor.",
    name: "Navid K. Baghi",
    role: "Principal Solicitor, Amity Lawyers",
  },
  {
    id: "shahrzad-davarkhah",
    quote:
      "Amelia is an exceptional business strategist who provides practical, insightful advice that delivers real value. She has a wealth of experience, takes the time to understand your business, and provides clear, actionable strategies for growth. Highly professional, approachable, and genuinely invested in her clients' success. I highly recommend CompassPoint Advisory.",
    name: "Shahrzad Davarkhah",
    role: "Owner, Luxe Murals",
  },
  {
    id: "priyanka-jay",
    quote:
      "I highly recommend CompassPoint Advisory. Amelia provided exceptional service, expert guidance and practical solutions. She took the time to understand the business needs and offered advice that adds real value. Her professionalism and attention to detail is a must for any business seeking strategic growth.",
    name: "Priyanka Jay",
    role: "Owner, My Cartino Consulting",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-20 md:py-[7rem]">
      <div className="pointer-events-none absolute -right-36 top-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(161,177,194,0.14),transparent_65%)]" />
      <div className="pointer-events-none absolute -left-28 bottom-0 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(135,115,94,0.12),transparent_70%)]" />

      <div className="relative z-[1] mx-auto max-w-[1100px] px-6 md:px-8">
        <div className="reveal text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-taupe">
            Kind Words
          </p>
          <h2 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal text-brand-grey">
            What clients say
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {testimonials.map((t) => (
            <figure
              key={t.id}
              className="service-card reveal flex flex-col rounded-sm border border-brand-taupe/30 bg-white/10 p-7 backdrop-blur-sm md:p-8"
            >
              <span
                aria-hidden
                className="font-display text-3xl leading-none text-brand-taupe/70"
              >
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-sm font-light leading-relaxed text-brand-grey/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-brand-taupe/25 pt-5">
                <span className="block text-sm font-medium text-brand-grey">
                  {t.name}
                </span>
                <span className="block text-xs text-brand-taupe">
                  {t.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
