import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  commonQuestionsSection,
  faqs,
  placeholderDetails,
} from '../content/funnelContent'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const mergedFaqs = [
    ...commonQuestionsSection.items,
    ...faqs,
  ].filter(
    (item, index, arr) =>
      arr.findIndex((entry) => entry.question === item.question) === index,
  )

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="section-shell max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="mb-10 text-center"
        >
          <span className="section-kicker mb-4">FAQ</span>
          <h2 className="section-title mb-3">Practical Questions, Clear Answers</h2>
          <p className="text-base text-ink-700 sm:text-lg">
            Everything you need before you register for the orientation session.
          </p>
        </motion.div>

        <div className="space-y-3">
          {mergedFaqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.28, delay: index * 0.04 }}
                className="rounded-2xl border border-ink-100 bg-sand-50"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="text-base font-semibold text-ink-900">{faq.question}</span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-lg text-ink-700">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-ink-700 sm:px-6">{faq.answer}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, delay: 0.12 }}
          className="mt-10 rounded-2xl border border-ink-100 bg-white p-5 text-center"
        >
          <p className="text-sm text-ink-700">Need direct help before registering?</p>
          <p className="mt-2 text-sm font-semibold text-ink-900">
            Phone: {placeholderDetails.contactPhone} | Email: {placeholderDetails.contactEmail}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
