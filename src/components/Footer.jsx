import { placeholderDetails } from '../content/funnelContent'

const Footer = () => {
  return (
    <footer className="border-t border-ink-200 bg-ink-950 py-12 text-white">
      <div className="section-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <img src="/anantam-logo.webp" alt="Anantam IAS" className="mb-4 h-11 w-auto" />
            <p className="text-sm leading-relaxed text-ink-100">
              Structured UPSC preparation with integrated GS coverage, disciplined test cycles, and guided mentorship.
            </p>
          </div>

          <div className="max-w-xl space-y-5 text-ink-100 md:ml-auto">
            <p className="font-sans text-3xl font-extrabold uppercase tracking-[0.06em] text-white sm:text-4xl">
              Contact
            </p>

            <div className="flex items-start gap-3 text-lg leading-snug sm:text-xl">
              <svg viewBox="0 0 24 24" fill="currentColor" className="mt-1 h-6 w-6 text-white">
                <path d="M12 2.7A7.2 7.2 0 004.8 9.9c0 5.5 7.2 11.4 7.2 11.4s7.2-5.9 7.2-11.4A7.2 7.2 0 0012 2.7zm0 10a2.8 2.8 0 112.8-2.8 2.8 2.8 0 01-2.8 2.8z" />
              </svg>
              <p>{placeholderDetails.contactAddress}</p>
            </div>

            <div className="flex items-start gap-3 text-lg leading-snug sm:text-xl">
              <svg viewBox="0 0 24 24" fill="currentColor" className="mt-1 h-6 w-6 text-white">
                <path d="M20.5 16.6l-3.4-.4a2.7 2.7 0 00-2.2.8l-2.4 2.4a20.6 20.6 0 01-8.9-8.9l2.4-2.4a2.7 2.7 0 00.8-2.2L6.4 2.5A2.7 2.7 0 003.6.3H1.2A1.2 1.2 0 000 1.5 22.5 22.5 0 0022.5 24a1.2 1.2 0 001.2-1.2v-2.4a2.7 2.7 0 00-2.2-2.8z" />
              </svg>
              <p>{placeholderDetails.contactPhones?.join(' / ')}</p>
            </div>

            <div className="flex items-start gap-3 text-lg leading-snug sm:text-xl">
              <svg viewBox="0 0 24 24" fill="currentColor" className="mt-1 h-6 w-6 text-white">
                <path d="M21 4H3a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2zm0 4.2l-9 5.6-9-5.6V6l9 5.6L21 6z" />
              </svg>
              <p>{placeholderDetails.contactEmail}</p>
            </div>

            <a
              href={placeholderDetails.whatsappLink}
              className="inline-flex items-start gap-3 text-lg leading-snug text-ink-100 hover:text-white sm:text-xl"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="mt-1 h-6 w-6">
                <path d="M20.5 3.5A11.9 11.9 0 002.7 18.6L1.4 23l4.5-1.2a11.9 11.9 0 0018.6-10A11.8 11.8 0 0020.5 3.5zM12.1 21a9.3 9.3 0 01-4.7-1.3l-.3-.2-2.7.7.7-2.7-.2-.3a9.3 9.3 0 1116.2-6.4 9.4 9.4 0 01-9.4 9.2zm5.1-7.1c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.1-.4.2-.7 0a7.6 7.6 0 01-2.2-1.4 8.5 8.5 0 01-1.6-2c-.2-.3 0-.5.2-.7l.5-.6c.1-.1.2-.3.3-.5l.1-.5c0-.2-.7-1.9-1-2.5-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.4 1 2.8 1.2 3c.1.2 2 3.1 5 4.4a16.7 16.7 0 001.7.6c.7.2 1.3.2 1.8.1.5-.1 1.8-.8 2.1-1.6.2-.8.2-1.5.2-1.6s-.2-.2-.5-.4z" />
              </svg>
              <span>{placeholderDetails.whatsappCta}</span>
            </a>
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
