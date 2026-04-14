export function Footer() {
  return (
    <footer className="border-t border-brand-taupe/20 bg-brand-navy py-12 text-brand-grey/80">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-6 px-6 text-center text-sm md:flex-row md:text-left md:px-8">
        <p className="text-brand-grey/90">
          © {new Date().getFullYear()} Amelia Ghofrany. All rights reserved.
        </p>
        <p>
          Melbourne, Australia ·{" "}
          <a
            href="https://compasspoint.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-taupe underline-offset-4 transition-colors hover:text-brand-grey"
          >
            CompassPoint Advisory
          </a>
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-taupe"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand-taupe"
          >
            Instagram
          </a>
          <a
            href="mailto:hello@example.com"
            className="transition-colors hover:text-brand-taupe"
          >
            Email
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-[1100px] border-t border-brand-taupe/15 px-6 pt-8 text-center text-xs text-brand-grey/60 md:px-8">
        <p>Built and maintained by Bright Path Creative</p>
      </div>
    </footer>
  );
}
