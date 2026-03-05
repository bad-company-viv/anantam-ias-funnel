import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { placeholderDetails } from '../content/funnelContent'

const nextSteps = [
  {
    title: 'Check confirmation details',
    detail: 'Session communication is sent to your registered phone and email.',
  },
  {
    title: 'Add class reminder to your calendar',
    detail: 'Block the orientation window so you can attend without distractions.',
  },
  {
    title: 'Join WhatsApp update channel',
    detail: 'Receive reminder updates and pre-session pointers.',
  },
  {
    title: 'Keep your first-week study slot ready',
    detail: 'Use the orientation to begin with a fixed schedule from day one.',
  },
]

const ThankYouPage = () => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    try {
      const data = localStorage.getItem('registrationData')
      if (data) setUserData(JSON.parse(data))
    } catch {
      setUserData(null)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand-50 to-white px-4 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="panel mx-auto max-w-4xl p-6 sm:p-10"
      >
        <div className="mb-8 text-center">
          <span className="section-kicker mb-4">Registration Confirmed</span>
          <h1 className="section-title mb-3">You Are Registered for the Orientation Session</h1>
          <p className="text-base text-ink-700 sm:text-lg">
            Thank you for registering. Keep this page for your immediate next steps.
          </p>
        </div>

        {userData ? (
          <div className="mb-8 rounded-2xl border border-ink-100 bg-sand-50 p-5 text-sm text-ink-800">
            <p className="mb-2 font-semibold text-ink-900">Registered details</p>
            <p>Email: {userData.email || '-'}</p>
            <p>Phone: {userData.phone || '-'}</p>
            {userData.whatsapp && <p>WhatsApp: {userData.whatsapp}</p>}
          </div>
        ) : (
          <div className="mb-8 rounded-2xl border border-ink-100 bg-sand-50 p-5 text-sm text-ink-700">
            <p>
              Registration details are not available in this browser session, but your confirmation flow remains active.
            </p>
          </div>
        )}

        <div className="mb-8 rounded-2xl border border-saffron-100 bg-saffron-50 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.09em] text-saffron-700">
            Session Details (Placeholder)
          </p>
          <div className="mt-2 grid gap-2 text-sm text-ink-800 sm:grid-cols-3">
            <p>Date: {placeholderDetails.sessionDate}</p>
            <p>Time: {placeholderDetails.sessionTime}</p>
            <p>Mode: {placeholderDetails.sessionMode}</p>
          </div>
        </div>

        <div className="mb-8 space-y-4">
          <h2 className="text-3xl font-semibold">Next Steps</h2>
          {nextSteps.map((step, index) => (
            <div key={step.title} className="flex gap-3 rounded-2xl border border-ink-100 bg-white p-4">
              <div className="mt-0.5 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-ink-900 text-xs font-semibold text-white">
                {index + 1}
              </div>
              <div>
                <p className="font-semibold text-ink-900">{step.title}</p>
                <p className="text-sm text-ink-700">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-ink-100 bg-white p-5 text-sm text-ink-700">
          <p className="font-semibold text-ink-900">Support (Temporary Placeholder)</p>
          <p className="mt-2">Phone: {placeholderDetails.contactPhone}</p>
          <p>Email: {placeholderDetails.contactEmail}</p>
          <a href={placeholderDetails.whatsappLink} className="mt-2 inline-block text-saffron-700 underline">
            WhatsApp Support Link
          </a>
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="btn-secondary">
            Back to Landing Page
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default ThankYouPage
