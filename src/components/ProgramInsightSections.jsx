import { motion } from 'framer-motion'
import {
  coursePhases,
  courseStructureIntro,
  fitSection,
  realProblems,
  whyDifferentSection,
} from '../content/funnelContent'

const SectionHeader = ({ kicker, title, description }) => (
  <div className="mb-10 max-w-3xl">
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-saffron-700">{kicker}</p>
    <h2 className="section-title mb-3">{title}</h2>
    <p className="text-base leading-relaxed text-ink-700 sm:text-lg">{description}</p>
  </div>
)

const AlertIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 text-red-500" aria-hidden="true">
    <path
      d="M10 2.5L18 16.5H2L10 2.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <path d="M10 7.5V10.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="10" cy="13.3" r="0.9" fill="currentColor" />
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 text-saffron-700" aria-hidden="true">
    <circle cx="10" cy="10" r="9" fill="currentColor" fillOpacity="0.15" />
    <path d="M6.8 10.1l2.1 2.1 4.3-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 text-ink-500" aria-hidden="true">
    <circle cx="10" cy="10" r="9" fill="currentColor" fillOpacity="0.15" />
    <path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

const Dot = ({ tone }) => <span className={`mt-[0.55rem] h-2 w-2 rounded-full ${tone}`} aria-hidden="true" />

const ProgramInsightSections = () => {
  return (
    <div className="bg-sand-50">
      <section className="py-14 sm:py-20">
        <div className="section-shell">
          <SectionHeader
            kicker="The Real Problem"
            title="Most aspirants do not fail because of lack of effort."
            description="Effort without direction creates burnout. These are the common gaps that stop progress."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {realProblems.map((problem, index) => (
              <motion.article
                key={problem.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="rounded-2xl border border-ink-100 bg-white p-5"
              >
                <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-50">
                  <AlertIcon />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-ink-900">{problem.title}</h3>
                <p className="text-sm leading-relaxed text-ink-700">{problem.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="section-shell">
          <SectionHeader
            kicker={courseStructureIntro.kicker}
            title={courseStructureIntro.title}
            description={courseStructureIntro.description}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {coursePhases.map((phase, index) => (
              <motion.article
                key={phase.phase}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`rounded-3xl border p-7 ${phase.cardTone}`}
              >
                <p className={`text-sm font-semibold uppercase tracking-[0.1em] ${phase.headingTone}`}>{phase.phase}</p>
                <h3 className="mt-2 text-3xl font-semibold text-ink-900">{phase.title}</h3>
                <ul className="mt-5 space-y-2.5">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-ink-800">
                      <Dot tone={phase.dotTone} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="section-shell">
          <SectionHeader
            kicker={whyDifferentSection.kicker}
            title={whyDifferentSection.title}
            description={whyDifferentSection.description}
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-saffron-200 bg-saffron-50/40 p-7"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-saffron-700">
                {whyDifferentSection.approachTitle}
              </h3>
              <ul className="mt-4 space-y-3">
                {whyDifferentSection.approachPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg text-ink-900">
                    <span className="mt-0.5"><CheckIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.3, delay: 0.06 }}
              className="rounded-3xl border border-ink-200 bg-ink-50/50 p-7"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-ink-600">
                {whyDifferentSection.typicalTitle}
              </h3>
              <ul className="mt-4 space-y-3">
                {whyDifferentSection.typicalPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg text-ink-700">
                    <span className="mt-0.5"><CloseIcon /></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="section-shell">
          <SectionHeader
            kicker={fitSection.kicker}
            title={fitSection.title}
            description={fitSection.description}
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl border border-emerald-200 bg-emerald-50/40 p-7"
            >
              <h3 className="text-2xl font-semibold uppercase tracking-[0.08em] text-emerald-700">
                {fitSection.forYouTitle}
              </h3>
              <ul className="mt-4 space-y-3">
                {fitSection.forYouPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg text-ink-900">
                    <Dot tone="bg-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.3, delay: 0.06 }}
              className="rounded-3xl border border-ink-200 bg-ink-50/40 p-7"
            >
              <h3 className="text-2xl font-semibold uppercase tracking-[0.08em] text-ink-600">
                {fitSection.notForYouTitle}
              </h3>
              <ul className="mt-4 space-y-3">
                {fitSection.notForYouPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-lg text-ink-700">
                    <Dot tone="bg-ink-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProgramInsightSections
