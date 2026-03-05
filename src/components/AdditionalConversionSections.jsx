import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  batchSizeSection,
  commonQuestionsSection,
  faqs,
  investmentSection,
  orientationCaptureSection,
  placeholderDetails,
} from '../content/funnelContent'

const PeopleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-saffron-600" aria-hidden="true">
    <path
      d="M16.5 10.5a3 3 0 100-6 3 3 0 000 6zM7.5 11.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM2.5 18.5a5 5 0 0110 0M12 19a4.5 4.5 0 019 0"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 text-saffron-600" aria-hidden="true">
    <path
      d="M10 2.3l5.6 2.1v4.3c0 3.8-2.3 6.3-5.6 8-3.3-1.7-5.6-4.2-5.6-8V4.4L10 2.3z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M7.4 9.9l1.8 1.7 3.4-3.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="h-4.5 w-4.5 text-saffron-600" aria-hidden="true">
    <circle cx="10" cy="10" r="9" fill="currentColor" fillOpacity="0.15" />
    <path d="M6.8 10.2l2 2.1 4.4-4.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-saffron-600" aria-hidden="true">
    <path d="M8 6.8l8.8 5.2L8 17.2V6.8z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
  </svg>
)

const ChevronIcon = ({ open }) => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    className={`h-5 w-5 text-ink-500 transition-transform ${open ? 'rotate-180' : ''}`}
    aria-hidden="true"
  >
    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
)

const AdditionalConversionSections = () => {
  const [openIndex, setOpenIndex] = useState(-1)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const mergedFaqs = [...commonQuestionsSection.items, ...faqs].filter(
    (item, index, arr) =>
      arr.findIndex((entry) => entry.question === item.question) === index,
  )

  const scrollToForm = () => {
    document
      .getElementById('registration-form')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleOrientationSubmit = (event) => {
    event.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <div className="bg-sand-50">
      <section className="py-16 sm:py-24">
        <div className="section-shell max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-saffron-50"
          >
            <PeopleIcon />
          </motion.div>
          <h2 className="section-title mb-3">{batchSizeSection.title}</h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-ink-700 sm:text-lg">
            {batchSizeSection.description}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {batchSizeSection.stats.map((stat, index) => (
              <motion.article
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.28, delay: index * 0.05 }}
                className="rounded-2xl border border-ink-100 bg-white p-6"
              >
                <p className="text-5xl font-semibold text-ink-950">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.11em] text-ink-600">
                  {stat.label}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-saffron-300 bg-saffron-50 px-5 py-2.5 text-base font-semibold text-saffron-700">
            <ShieldIcon />
            {batchSizeSection.note}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="section-shell max-w-5xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-saffron-700">
            {investmentSection.kicker}
          </p>
          <h2 className="section-title mb-3 max-w-3xl">{investmentSection.title}</h2>
          <p className="mb-9 max-w-3xl text-base leading-relaxed text-ink-700 sm:text-lg">
            {investmentSection.description}
          </p>

          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-2xl rounded-3xl border border-saffron-300 bg-sand-50 p-8"
          >
            <span className="absolute -top-3 left-6 rounded-full bg-saffron-500 px-4 py-1 text-sm font-semibold text-white">
              {investmentSection.offerTag}
            </span>

            <p className="text-sm font-semibold uppercase tracking-[0.09em] text-ink-600">
              {investmentSection.planName}
            </p>
            <div className="mt-2 flex items-baseline gap-4">
              <p className="text-6xl font-semibold text-ink-950">{investmentSection.price}</p>
              <p className="text-3xl text-ink-400 line-through">{investmentSection.originalPrice}</p>
            </div>
            <p className="mt-2 text-base text-ink-700">{investmentSection.taxNote}</p>

            <ul className="mt-7 space-y-3 border-t border-ink-100 pt-6">
              {investmentSection.features.map((item) => (
                <li key={item} className="flex items-start gap-3 text-xl text-ink-800">
                  <span className="mt-0.5"><CheckIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-ink-100 bg-white p-4 text-base text-ink-700">
              <span className="font-semibold text-ink-900">{investmentSection.emiNote.split(':')[0]}:</span>
              {' '}
              {investmentSection.emiNote.split(':').slice(1).join(':').trim()}
            </div>

            <div className="mt-6 space-y-3">
              <button onClick={scrollToForm} className="btn-primary w-full text-xl">
                {investmentSection.ctaPrimary}
                <span aria-hidden="true">→</span>
              </button>
              <a
                href={placeholderDetails.whatsappLink}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-emerald-300 bg-emerald-50 px-5 py-2 text-base font-semibold text-emerald-700 hover:bg-emerald-100"
              >
                {investmentSection.ctaSecondary}
              </a>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="bg-sand-50 py-16 sm:py-24">
        <div className="section-shell max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-saffron-100/70">
            <PlayIcon />
          </div>
          <h2 className="section-title mb-3">{orientationCaptureSection.title}</h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-ink-700 sm:text-lg">
            {orientationCaptureSection.description}
          </p>

          <form onSubmit={handleOrientationSubmit} className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={orientationCaptureSection.placeholder}
              className="min-h-12 flex-1 rounded-xl border border-ink-200 bg-white px-4 text-lg text-ink-900 placeholder:text-ink-500"
              required
            />
            <button type="submit" className="btn-primary min-h-12 px-8 text-xl">
              {orientationCaptureSection.button}
            </button>
          </form>
          <p className="mt-4 text-base text-ink-500">{orientationCaptureSection.footnote}</p>
          {submitted && (
            <p className="mt-2 text-base font-semibold text-emerald-700">
              Orientation link request received. Please check your inbox shortly.
            </p>
          )}
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="section-shell max-w-5xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-saffron-700">
            {commonQuestionsSection.kicker}
          </p>
          <h2 className="section-title mb-8">{commonQuestionsSection.title}</h2>

          <div className="rounded-3xl border border-ink-100 bg-sand-50/40 p-4 sm:p-6">
            {mergedFaqs.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={item.question}
                  className={`border-b border-ink-100 ${index === mergedFaqs.length - 1 ? 'border-b-0' : ''}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex min-h-14 w-full items-center justify-between gap-4 px-3 py-4 text-left"
                  >
                    <span className="text-xl font-medium text-ink-900">{item.question}</span>
                    <ChevronIcon open={isOpen} />
                  </button>
                  {isOpen && (
                    <p className="px-3 pb-4 text-base leading-relaxed text-ink-700">
                      {item.answer}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}

export default AdditionalConversionSections
