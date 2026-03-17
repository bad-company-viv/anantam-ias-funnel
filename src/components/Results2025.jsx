import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const rankers = [
  { file: 'air-28.jpeg', label: 'AIR 28' },
  { file: 'air-44.jpeg', label: 'AIR 44' },
  { file: 'air-48.jpeg', label: 'AIR 48' },
  { file: 'air-56.jpeg', label: 'AIR 56' },
  { file: 'air-73.jpeg', label: 'AIR 73' },
  { file: 'air-96.jpeg', label: 'AIR 96' },
  { file: 'air-106.jpeg', label: 'AIR 106' },
  { file: 'air-116.jpeg', label: 'AIR 116' },
  { file: 'air-143.jpeg', label: 'AIR 143' },
]

const stats = [
  { value: '9', label: 'Rankers' },
  { value: 'Top 150', label: 'All in CSE 2025' },
  { value: 'AIR 28', label: 'Best Rank' },
  { value: 'GS Batch', label: 'Integrated Program' },
]

const Results2025 = ({ onRegisterClick }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i + 1) % rankers.length)
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i - 1 + rankers.length) % rankers.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxIndex])

  const current = lightboxIndex !== null ? rankers[lightboxIndex] : null

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="section-shell">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-center"
        >
          <span className="section-kicker mb-4">CSE 2025 Results</span>
          <h2 className="section-title mb-3">Our Students. Their Success.</h2>
          <p className="mx-auto max-w-2xl text-base text-ink-700 sm:text-lg">
            The GS 2025 batch delivered outstanding results. Here's a glimpse of the rankers who
            trusted Anantam's mentorship.
          </p>
        </motion.div>

        {/* Stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-ink-100 bg-sand-50 px-4 py-4 text-center"
            >
              <p className="text-2xl font-semibold text-ink-900">{s.value}</p>
              <p className="mt-0.5 text-xs font-medium text-ink-500">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Banner image with aspect-ratio placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="mb-8 overflow-hidden rounded-3xl border border-ink-100 bg-sand-100 shadow-panel"
          style={{ aspectRatio: 'auto' }}
        >
          <img
            src="/result-2025/cse-2025-rankers.jpeg"
            alt="CSE 2025 Rankers — Anantam IAS"
            className="w-full object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* Ranker grid — max lg:grid-cols-4 for readability */}
        <div className="grid grid-cols-3 gap-4">
          {rankers.map((r, i) => (
            <motion.button
              key={r.file}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              onClick={() => setLightboxIndex(i)}
              className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500"
            >
              <div className="aspect-[3/4] bg-sand-100">
                <img
                  src={`/result-2025/${r.file}`}
                  alt={r.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink-900/80 to-transparent px-3 py-2">
                <span className="text-sm font-semibold text-white">{r.label}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* CTA panel */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mt-10 rounded-3xl border border-saffron-100 bg-saffron-50/60 px-6 py-8 text-center"
        >
          <p className="mb-1 text-lg font-semibold text-ink-900">
            Want to be part of the next success story?
          </p>
          <p className="mb-5 text-sm text-ink-600">
            Join the GS Foundation batch and build your preparation the right way.
          </p>
          <button onClick={onRegisterClick} className="btn-primary">
            Register for Orientation
          </button>
        </motion.div>
      </div>

      {/* Lightbox with prev/next */}
      <AnimatePresence>
        {current && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/85 p-4 backdrop-blur-sm"
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 26 }}
              className="relative flex max-h-[90vh] w-full max-w-lg flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`/result-2025/${current.file}`}
                alt={current.label}
                className="w-full object-contain"
              />
              <div className="flex items-center justify-between px-5 py-3">
                <span className="font-semibold text-ink-900">{current.label}</span>
                <span className="text-xs text-ink-400">
                  {lightboxIndex + 1} / {rankers.length}
                </span>
              </div>

              {/* Prev / Next */}
              <button
                onClick={() => setLightboxIndex((i) => (i - 1 + rankers.length) % rankers.length)}
                aria-label="Previous"
                className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-ink-700 shadow hover:bg-white"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={() => setLightboxIndex((i) => (i + 1) % rankers.length)}
                aria-label="Next"
                className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-ink-700 shadow hover:bg-white"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Close */}
              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Close"
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-ink-600 shadow hover:bg-white"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Results2025
