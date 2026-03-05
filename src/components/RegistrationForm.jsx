import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const RegistrationForm = ({ onSubmit, isSubmitting }) => {
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    language: '',
    status: '',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const validate = () => {
    const nextErrors = {}

    if (!formData.name.trim()) nextErrors.name = 'Please enter your full name.'
    if (!formData.email.trim()) {
      nextErrors.email = 'Please enter your email address.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    const cleanedPhone = formData.phone.replace(/\D/g, '')
    if (!cleanedPhone) {
      nextErrors.phone = 'Please enter your phone number.'
    } else if (cleanedPhone.length < 10 || cleanedPhone.length > 13) {
      nextErrors.phone = 'Phone number should be between 10 and 13 digits.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    onSubmit({
      ...formData,
      name: formData.name.trim(),
      email: formData.email.trim(),
    })
  }

  return (
    <section id="registration-form" className="scroll-mt-24 bg-sand-50 py-16 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.35 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-kicker mb-4">Limited Seats for Mentored Cohort</span>
          <h2 className="section-title mb-3">Reserve Your Orientation Seat</h2>
          <p className="text-base text-ink-700 sm:text-lg">
            Start with essential details. Additional profile information is optional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="panel mx-auto mt-10 max-w-4xl p-6 sm:p-8"
        >
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="mb-1 block text-sm font-semibold text-ink-800">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  className="min-h-11 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-500"
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="mt-1 text-xs text-red-700">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-semibold text-ink-800">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="numeric"
                  value={formData.phone}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.phone)}
                  className="min-h-11 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-500"
                  placeholder="10-digit mobile number"
                />
                {errors.phone && <p className="mt-1 text-xs text-red-700">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-semibold text-ink-800">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  className="min-h-11 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-500"
                  placeholder="you@example.com"
                />
                {errors.email && <p className="mt-1 text-xs text-red-700">{errors.email}</p>}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowAdvanced((prev) => !prev)}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-700 hover:bg-ink-50"
            >
              {showAdvanced ? 'Hide optional fields' : 'Add optional profile details'}
              <span aria-hidden="true">{showAdvanced ? '−' : '+'}</span>
            </button>

            <AnimatePresence initial={false}>
              {showAdvanced && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="mt-2 grid gap-5 border-t border-ink-100 pt-5 sm:grid-cols-3">
                    <div>
                      <label htmlFor="whatsapp" className="mb-1 block text-sm font-semibold text-ink-800">
                        WhatsApp Number
                      </label>
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        autoComplete="tel"
                        inputMode="numeric"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="min-h-11 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-500"
                        placeholder="Optional"
                      />
                    </div>

                    <div>
                      <label htmlFor="language" className="mb-1 block text-sm font-semibold text-ink-800">
                        Preferred Language
                      </label>
                      <select
                        id="language"
                        name="language"
                        value={formData.language}
                        onChange={handleChange}
                        className="min-h-11 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900"
                      >
                        <option value="">Select</option>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="status" className="mb-1 block text-sm font-semibold text-ink-800">
                        Current Status
                      </label>
                      <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="min-h-11 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900"
                      >
                        <option value="">Select</option>
                        <option value="Student">Student</option>
                        <option value="Working Professional">Working Professional</option>
                        <option value="Preparing for UPSC">Preparing for UPSC</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-3 border-t border-ink-100 pt-5">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Submitting...' : 'Reserve Free Seat'}
              </motion.button>
              <p className="text-center text-xs text-ink-600">
                Your contact details are used only for session communication and mentorship follow-up.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default RegistrationForm
