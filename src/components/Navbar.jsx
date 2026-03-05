import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToForm = () => {
    document
      .getElementById('registration-form')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.nav
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-sand-50/95 backdrop-blur border-b border-ink-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="section-shell">
        <div className="flex min-h-[72px] items-center justify-between">
          <img src="/anantam-logo.webp" alt="Anantam IAS" className="h-11 w-auto" />
          <button onClick={scrollToForm} className="btn-primary">
            Reserve Free Seat
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
