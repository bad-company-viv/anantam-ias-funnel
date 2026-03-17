import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { placeholderDetails } from '../content/funnelContent'

const FormPopup = ({ onSubmit, isSubmitting }) => {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' })
  const [errors, setErrors] = useState({})
  const hasShown = useRef(false)

  // Scroll + timer trigger
  useEffect(() => {
    if (dismissed || submitted) return

    const handleScroll = () => {
      if (hasShown.current) return
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      if (scrolled > 0.4) {
        setVisible(true)
        hasShown.current = true
      }
    }

    const timer = setTimeout(() => {
      if (!hasShown.current) {
        setVisible(true)
        hasShown.current = true
      }
    }, 35000)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [dismissed, submitted])

  // External trigger
  useEffect(() => {
    const handler = () => {
      if (submitted) return
      setVisible(true)
      setDismissed(false)
    }
    window.addEventListener('open-register-popup', handler)
    return () => window.removeEventListener('open-register-popup', handler)
  }, [submitted])

  // Escape key
  useEffect(() => {
    if (!visible) return
    const handler = (e) => { if (e.key === 'Escape') dismiss() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [visible])

  const dismiss = () => {
    setVisible(false)
    setDismissed(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((p) => ({ ...p, [name]: value }))
    setErrors((p) => ({ ...p, [name]: undefined }))
  }

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'Required'
    const phone = formData.phone.replace(/\D/g, '')
    if (!phone || phone.length < 10) errs.phone = 'Enter a valid 10-digit number'
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = 'Enter a valid email'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitted(true)
    onSubmit({ ...formData, name: formData.name.trim(), email: formData.email.trim() })
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink-900/60 backdrop-blur-sm"
            onClick={dismiss}
          />

          <motion.div
            key="popup"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
            className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl sm:p-10" style={{ maxHeight: 'calc(100vh - 2rem)' }}
          >
            {/* Close */}
            <button
              onClick={dismiss}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-900"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Session teaser */}
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="section-kicker">Limited Seats</span>
              <span className="rounded-full border border-ink-100 bg-sand-50 px-3 py-1 text-xs font-medium text-ink-600">
                {placeholderDetails.sessionDate} · {placeholderDetails.sessionMode}
              </span>
            </div>

            <h2 id="popup-title" className="mb-1 text-2xl font-semibold text-ink-900">
              Reserve Your Free Seat
            </h2>
            <p className="mb-6 text-sm text-ink-600">
              Join the orientation session — takes 30 seconds.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  className="min-h-12 w-full rounded-xl border border-ink-200 bg-sand-50 px-4 py-3 text-ink-900 placeholder:text-ink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500/70"
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
              </div>

              <div>
                <input
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel"
                  placeholder="Phone Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.phone)}
                  className="min-h-12 w-full rounded-xl border border-ink-200 bg-sand-50 px-4 py-3 text-ink-900 placeholder:text-ink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500/70"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  className="min-h-12 w-full rounded-xl border border-ink-200 bg-sand-50 px-4 py-3 text-ink-900 placeholder:text-ink-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500/70"
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary min-h-12 w-full text-base disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Submitting…' : 'Reserve Free Seat →'}
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-ink-400">
              No spam. Only session updates.
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default FormPopup
