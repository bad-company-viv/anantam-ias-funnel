import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Benefits from '../components/Benefits'
import Faculty from '../components/Faculty'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import AdditionalConversionSections from '../components/AdditionalConversionSections'
import ProgramInsightSections from '../components/ProgramInsightSections'
import RegistrationForm from '../components/RegistrationForm'
import Testimonials from '../components/Testimonials'

const LandingPage = () => {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (formData) => {
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    localStorage.setItem('registrationData', JSON.stringify(formData))

    navigate('/thank-you')
  }

  return (
    <div className="min-h-screen bg-sand-50 text-ink-900">
      <Navbar />
      <Hero />
      <ProgramInsightSections />
      <Benefits />
      <Faculty />
      <Testimonials />
      <AdditionalConversionSections />
      <RegistrationForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      <Footer />
    </div>
  )
}

export default LandingPage
