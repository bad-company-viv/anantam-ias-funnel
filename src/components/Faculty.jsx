import { motion } from 'framer-motion'
import { mentorProfile, mentorshipSection } from '../content/funnelContent'

const Faculty = () => {
  return (
    <section className="bg-sand-50 py-16 sm:py-24">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.35 }}
          className="mb-10"
        >
          <span className="section-kicker mb-4">Faculty and Mentorship</span>
          <h2 className="section-title max-w-3xl">Formal Guidance With a Structured Mentorship Lens</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="panel overflow-hidden"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-ink-100 bg-ink-900 p-8 text-white lg:border-b-0 lg:border-r">
              <div className="mx-auto mb-6 flex aspect-[3/4] max-w-[260px] items-center justify-center rounded-2xl border border-white/25 bg-white/5">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-[0.1em] text-ink-100">Faculty Photo</p>
                  <p className="mt-2 text-xs text-ink-200">Placeholder - update before launch</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-ink-100">
                Placeholder-safe profile block. Replace with actual faculty portrait and designation details before live campaigns.
              </p>
            </div>

            <div className="p-7 sm:p-10">
              <h3 className="text-3xl font-semibold">{mentorProfile.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.08em] text-saffron-700">
                {mentorProfile.role}
              </p>
              <p className="text-sm text-ink-600">{mentorProfile.organisation}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {mentorProfile.highlights.map((item) => (
                  <div key={item} className="rounded-xl border border-ink-100 bg-white p-3 text-sm text-ink-700">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-saffron-100 bg-saffron-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.09em] text-saffron-700">
                  Mentorship Philosophy
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-800">{mentorProfile.philosophy}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="mt-8 grid gap-5 lg:grid-cols-[1fr_1fr]"
        >
          <article className="rounded-3xl border border-ink-100 bg-white p-7">
            <p className="mb-4 text-4xl leading-none text-saffron-500">"</p>
            <blockquote className="text-2xl font-semibold italic leading-tight text-ink-900 sm:text-[1.85rem]">
              {mentorshipSection.quote}
            </blockquote>
            <div className="mt-5 border-t border-ink-100 pt-4 text-lg font-semibold text-ink-800">
              {mentorshipSection.quoteAuthor}
            </div>
          </article>

          <div className="space-y-4">
            {mentorshipSection.pillars.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-ink-100 bg-white p-5"
              >
                <h3 className="text-xl font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-700">{item.description}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Faculty
