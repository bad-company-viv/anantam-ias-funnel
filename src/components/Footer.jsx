import { placeholderDetails } from '../content/funnelContent'

const Footer = () => {
  return (
    <footer className="border-t border-ink-200 bg-ink-950 py-12 text-white">
      <div className="section-shell">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-start md:gap-12">
          <div className="max-w-md">
            <img src="/anantam-logo.webp" alt="Anantam IAS" className="mb-4 h-11 w-auto" />
            <p className="text-sm leading-relaxed text-ink-100">
              Structured UPSC preparation with integrated GS coverage, disciplined test cycles, and guided mentorship.
            </p>
          </div>

          <div className="w-full max-w-[620px] space-y-5 text-ink-100 md:justify-self-end">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.08em] text-ink-100">
              Contact
            </p>

            <div className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">
              <svg viewBox="0 0 24 24" fill="currentColor" className="mt-1 h-6 w-6 text-white">
                <path d="M12 2.7A7.2 7.2 0 004.8 9.9c0 5.5 7.2 11.4 7.2 11.4s7.2-5.9 7.2-11.4A7.2 7.2 0 0012 2.7zm0 10a2.8 2.8 0 112.8-2.8 2.8 2.8 0 01-2.8 2.8z" />
              </svg>
              <p>{placeholderDetails.contactAddress}</p>
            </div>

            <div className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">
              <svg viewBox="0 0 24 24" fill="currentColor" className="mt-1 h-6 w-6 text-white">
                <path d="M20.5 16.6l-3.4-.4a2.7 2.7 0 00-2.2.8l-2.4 2.4a20.6 20.6 0 01-8.9-8.9l2.4-2.4a2.7 2.7 0 00.8-2.2L6.4 2.5A2.7 2.7 0 003.6.3H1.2A1.2 1.2 0 000 1.5 22.5 22.5 0 0022.5 24a1.2 1.2 0 001.2-1.2v-2.4a2.7 2.7 0 00-2.2-2.8z" />
              </svg>
              <p>{placeholderDetails.contactPhones?.join(' / ')}</p>
            </div>

            <div className="flex items-start gap-3 text-sm leading-relaxed sm:text-base">
              <svg viewBox="0 0 24 24" fill="currentColor" className="mt-1 h-6 w-6 text-white">
                <path d="M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.2l-9 5.6-9-5.6V6l9 5.6L21 6z" />
              </svg>
              <p>{placeholderDetails.contactEmail}</p>
            </div>

          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-xs text-ink-100">
          <p>© 2026 Anantam IAS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
