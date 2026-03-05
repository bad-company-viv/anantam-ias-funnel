import { motion } from 'framer-motion'
import {
  additionalStudentExperiences,
  proofStats,
  testimonials,
} from '../content/funnelContent'

const Testimonials = () => {
  const combinedTestimonials = [
    ...testimonials,
    ...additionalStudentExperiences.cards.map((card) => ({
      name: card.name,
      context: card.meta,
      quote: card.quote,
    })),
  ]

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="mb-12"
        >
          <span className="section-kicker mb-4">Student Experience</span>
          <h2 className="section-title mb-3 max-w-3xl">Feedback Focused on Structure, Consistency, and Guidance</h2>
          <p className="max-w-3xl text-base text-ink-700 sm:text-lg">
            The program is positioned around disciplined preparation systems, not inflated promises.
          </p>
        </motion.div>

        <div className="mb-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {combinedTestimonials.map((item, index) => (
            <motion.blockquote
              key={`${item.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="panel p-6"
            >
              <p className="text-sm leading-relaxed text-ink-800">"{item.quote}"</p>
              <footer className="mt-5 border-t border-ink-100 pt-4">
                <p className="font-semibold text-ink-950">{item.name}</p>
                <p className="text-xs uppercase tracking-[0.08em] text-ink-600">{item.context}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {proofStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-ink-100 bg-sand-50 p-5 text-center">
              <p className="text-3xl font-semibold text-ink-950">{stat.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-ink-600">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
