// src/pages/contact.tsx
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Contact() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    venueType: '',
    inquiryType: '',
    currentChallenge: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const form = e.target as HTMLFormElement
      const formDataObj = new FormData(form)
      
      const response = await fetch('https://formspree.io/f/mblaqoew', {
        method: 'POST',
        body: formDataObj,
        headers: { 'Accept': 'application/json' }
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            jobTitle: '',
            phone: '',
            venueType: '',
            inquiryType: '',
            currentChallenge: '',
            message: ''
          })
        }, 5000)
      } else {
        const data = await response.json()
        console.error('Form submission failed:', data)
        alert('There was an error sending your message. Please try again or contact us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error sending your message. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <Head>
        <title>Contact Sales – Schedule Your SafePlay Demo</title>
        <meta
          name="description"
          content="Book a SafePlay walkthrough or ask a question. See how real-time safer-gaming intelligence supports RGOs, uncarded monitoring, alert calibration, and audit-ready reporting."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="bg-white text-gray-900 font-sans min-h-screen">
        <Navigation currentPath={router.pathname} />

        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to employ the standard in safer gaming?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book a SafePlay demo or reach out with questions about real-time monitoring and alerting, workflows, and audit-ready reporting.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Message sent!</h3>
                      <p className="text-gray-600">
                        Thanks for contacting us—someone will reply within one business day.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Hidden fields for Formspree */}
                      <input type="hidden" name="_subject" value={`SafePlay Contact Form – ${formData.inquiryType || 'General Enquiry'}`} />
                      <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
                      <input type="hidden" name="_cc" value="mark.kelly@involv.com.au" />
                      <input type="hidden" name="site" value="SafePlay" />
                      <input type="hidden" name="form_type" value="Contact Form" />
                      
                      {/* Inquiry Type */}
                      <div>
                        <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                          How can we help? *
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          required
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
                        >
                          <option value="">Select inquiry type</option>
                          <option value="Schedule a Demo">Schedule a SafePlay Demo</option>
                          <option value="General Enquiry">General Enquiry</option>
                        </select>
                      </div>

                      {/* Name */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                          <input
                            type="text" id="firstName" name="firstName" required
                            value={formData.firstName} onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
                            placeholder="Your first name"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                          <input
                            type="text" id="lastName" name="lastName" required
                            value={formData.lastName} onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>

                      {/* Business Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Business Email *</label>
                        <input
                          type="email" id="email" name="email" required
                          value={formData.email} onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
                          placeholder="your.email@company.com.au"
                        />
                      </div>

                      {/* Company & Job Title */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
                          <input
                            type="text" id="company" name="company" required
                            value={formData.company} onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
                            placeholder="Your venue or company name"
                          />
                        </div>
                        <div>
                          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                          <input
                            type="text" id="jobTitle" name="jobTitle"
                            value={formData.jobTitle} onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
                            placeholder="Your role or position"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                        <input
                          type="tel" id="phone" name="phone"
                          value={formData.phone} onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
                          placeholder="04XX XXX XXX"
                        />
                      </div>

                      {/* Venue Type */}
                      <div>
                        <label htmlFor="venueType" className="block text-sm font-medium text-gray-700 mb-2">Venue Type</label>
                        <select
                          id="venueType" name="venueType"
                          value={formData.venueType} onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
                        >
                          <option value="">Select venue type</option>
                          <option value="club">Club</option>
                          <option value="hotel">Hotel</option>
                          <option value="casino">Casino</option>
                          <option value="multiple">Multi-venue</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Current Challenge – shown for demos */}
                      {formData.inquiryType === 'Schedule a Demo' && (
                        <div>
                          <label htmlFor="currentChallenge" className="block text-sm font-medium text-gray-700 mb-2">
                            Primary Safer-Gaming Challenge
                          </label>
                          <select
                            id="currentChallenge" name="currentChallenge"
                            value={formData.currentChallenge} onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
                          >
                            <option value="">Select primary challenge</option>
                            <option value="uncarded">Uncarded play monitoring</option>
                            <option value="alerts">Alert calibration / false positives</option>
                            <option value="workflows">RGO workflows & guidance</option>
                            <option value="reporting">Evidence & reporting (audit/board)</option>
                            <option value="training">Staff training & adoption</option>
                            <option value="integration">Integrations / delivery (SMS/email/pager)</option>
                            <option value="multiple">Multiple areas</option>
                          </select>
                        </div>
                      )}

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          {formData.inquiryType === 'Schedule a Demo'
                            ? 'What would you like to see in the demo?'
                            : 'Your message *'}
                        </label>
                        <textarea
                          id="message" name="message" rows={4}
                          required={formData.inquiryType !== 'Schedule a Demo'}
                          value={formData.message} onChange={handleChange}
                          placeholder={
                            formData.inquiryType === 'Schedule a Demo'
                              ? 'Tell us about your venue, trading peaks, and current pain points.'
                              : 'Please provide details about your enquiry...'
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
                        />
                      </div>

                      {/* Submit */}
                      <div className="flex items-center justify-between pt-4">
                        <p className="text-sm text-gray-500">* Required fields</p>
                        <button
                          type="submit" disabled={isSubmitting}
                          className="bg-[#1e40af] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                              </svg>
                              Send Message
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-sm text-gray-500 text-center">
                        By submitting this form, you agree to our{' '}
                        <Link href="/privacy-policy" className="text-[#1e40af] hover:text-blue-700 underline">
                          Privacy Policy
                        </Link>
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* Right Side */}
              <div className="space-y-8">
                {/* Testimonial (SafePlay) */}
                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-xs font-medium text-gray-600">5.0 out of 5</span>
                  </div>
                  <blockquote className="text-sm text-gray-700 mb-6">
                    “SafePlay alerted us to potentially harmful play that we just had no way os seeing in peak periods. The real time alerts have changed how we run the floor.”
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-sm text-gray-900">Gaming Manager</div>
                      <div className="text-sm text-gray-600">NSW Hotel</div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-[#1e40af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">Get in touch for any questions</p>
                        <a href="mailto:hello@involv.com.au" className="text-[#1e40af] hover:text-blue-700 font-medium">
                          hello@involv.com.au
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-[#1e40af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">Speak with our team directly</p>
                        <a href="tel:1300XXXXXX" className="text-[#1e40af] hover:text-blue-700 font-medium">
                          1300 XXX XXX
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Support */}
                <div className="border-l-4 border-[#1e40af] bg-blue-50 p-6 rounded-r-lg">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#1e40af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Existing customer?
                  </h4>
                  <p className="text-gray-700 mb-3">
                    For SafePlay support, billing, or technical assistance, contact our customer success team.
                  </p>
                  <a href="mailto:support@involv.com.au" className="text-[#1e40af] hover:text-blue-700 font-medium">
                    support@involv.com.au
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                How we help you operationalise safer gaming—fast.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1e40af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-gray-600">We’ll contact you within 24–48 hours.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1e40af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalised Session</h3>
                <p className="text-gray-600">Demo and discussion tailored to your venue profile and goals.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1e40af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Clear Next Steps</h3>
                <p className="text-gray-600">See how SafePlay fits your RG strategy - calibration, rollout, and reporting.</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}