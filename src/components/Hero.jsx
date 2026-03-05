import { motion } from 'framer-motion'
import {
  batchSnapshot,
  placeholderDetails,
  programContent,
  subjectCoverage,
} from '../content/funnelContent'

const Hero = () => {
  const scrollToForm = () => {
    document
      .getElementById('registration-form')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToFeatures = () => {
    document
      .getElementById('course-features')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-sand-50 to-white pt-24 pb-10 sm:pt-28 sm:pb-14">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-saffron-100/60 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-ink-100/60 blur-3xl" />
      </div>

      <div className="section-shell relative w-full">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="section-kicker mb-4">{programContent.badge}</span>
            <h1 className="section-title mb-4 max-w-2xl">{programContent.headline}</h1>
            <p className="mb-6 max-w-2xl text-base leading-relaxed text-ink-700 sm:text-lg">
              {programContent.subheadline}
            </p>

            <div className="mb-7 flex flex-wrap gap-2">
              {subjectCoverage.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-ink-100 bg-white px-3 py-1.5 text-sm font-medium text-ink-700"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={scrollToForm} className="btn-primary">
                Register for Orientation
              </button>
              <button onClick={scrollToFeatures} className="btn-secondary">
                View Course Features
              </button>
            </div>

            <div className="flex flex-wrap gap-4">
              {programContent.proofChips.map((chip) => (
                <div
                  key={chip}
                  className="inline-flex items-center gap-2 rounded-lg border border-ink-100 bg-white px-3 py-2 text-sm text-ink-700"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-saffron-500" />
                  {chip}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="panel p-6 sm:p-8"
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Batch Snapshot</h2>
              <span className="rounded-full bg-saffron-50 px-3 py-1 text-xs font-semibold text-saffron-700">
                Morning Cohort
              </span>
            </div>

            <div className="space-y-4">
              {batchSnapshot.map((item, index) => (
                <div key={item.title} className="flex gap-3">
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-ink-900 text-xs font-semibold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-900">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 rounded-2xl border border-ink-100 bg-sand-50 p-4 text-sm text-ink-700 sm:grid-cols-2">
              <p>
                <span className="block text-xs font-semibold uppercase tracking-wide text-ink-600">
                  Session Date
                </span>
                {placeholderDetails.sessionDate}
              </p>
              <p>
                <span className="block text-xs font-semibold uppercase tracking-wide text-ink-600">
                  Session Time
                </span>
                {placeholderDetails.sessionTime}
              </p>
              <p className="sm:col-span-2">
                <span className="block text-xs font-semibold uppercase tracking-wide text-ink-600">
                  Mode
                </span>
                {placeholderDetails.sessionMode}
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  )
}

export default Hero
