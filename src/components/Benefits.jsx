import { motion } from 'framer-motion'
import { featureCards, weeklyFlow } from '../content/funnelContent'

const Benefits = () => {
  return (
    <section id="course-features" className="bg-white py-16 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="mb-12"
        >
          <span className="section-kicker mb-4">Course Features</span>
          <h2 className="section-title mb-3 max-w-3xl">Designed for Consistent GS Foundation Progress</h2>
          <p className="max-w-3xl text-base text-ink-700 sm:text-lg">
            The batch structure combines concept clarity, applied practice, and regular testing so preparation remains measurable through the full cycle.
          </p>
        </motion.div>

        <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.32, delay: index * 0.05 }}
              className="panel p-5"
            >
              <p className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-saffron-50 text-sm font-semibold text-saffron-700">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-ink-700">{feature.description}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.35 }}
          className="panel overflow-hidden"
        >
          <div className="border-b border-ink-100 bg-sand-50 px-6 py-5 sm:px-8">
            <h3 className="text-2xl font-semibold">How the Week Flows</h3>
            <p className="mt-1 text-sm text-ink-700">
              A structured rhythm to keep learning, practice, and review aligned.
            </p>
          </div>
          <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
            {weeklyFlow.map((slot) => (
              <div key={slot.day} className="border-b border-ink-100 p-5 sm:border-b-0 sm:border-r last:border-r-0">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-saffron-700">{slot.day}</p>
                <h4 className="mt-2 text-lg font-semibold">{slot.label}</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-700">{slot.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits
