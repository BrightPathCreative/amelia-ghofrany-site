export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal py-12 text-cream/70">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-6 px-6 text-center text-sm md:flex-row md:text-left md:px-8">
        <p>© {new Date().getFullYear()} Amelia Ghofrany. All rights reserved.</p>
        <p>
          Melbourne, Australia ·{" "}
          <a
            href="https://compasspoint.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold/90 underline-offset-4 transition-colors hover:text-gold"
          >
            CompassPoint Advisory
          </a>
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold"
          >
            Instagram
          </a>
          <a href="mailto:hello@example.com" className="hover:text-gold">
            Email
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-[1100px] border-t border-white/10 px-6 pt-8 text-center text-xs text-cream/50 md:px-8">
        <p>Built and maintained by Bright Path Creative</p>
      </div>
    </footer>
  );
}
