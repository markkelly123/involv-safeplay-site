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
      
      const response = await fetch('https://formspree.io/f/xvgrqlve', {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSubmitted(true)
        
        // Reset form after 5 seconds
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <>
      <Head>
        <title>Contact Sales - Schedule Your Assure Demo</title>
        <meta name="description" content="Get a personalised demo of Involv&apos;s Assure GRC platform. Speak with our experts about AML, risk management, and regulatory compliance for Australian pubs and clubs." />
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

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to streamline your risk & compliance?
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get a personalised demo of Assure or reach out with any questions about governance, risk & compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  {/* Success Message */}
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                      <p className="text-gray-600">
                        Thank you for contacting us. We&apos;ll respond within the next business day.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Hidden fields for Formspree */}
                      <input type="hidden" name="_subject" value={`Assure Contact Form - ${formData.inquiryType || 'General Inquiry'}`} />
                      <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
                      <input type="hidden" name="_cc" value="mark.kelly@involv.com.au" />
                      <input type="hidden" name="site" value="Assure" />
                      <input type="hidden" name="form_type" value="Contact Form" />
                      
                      {/* Inquiry Type */}
                      <div>
                        <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                          How can we help you? *
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
                          <option value="Schedule a Demo">Schedule a Demo</option>
                          <option value="General Enquiry">General Enquiry</option>
                        </select>
                      </div>

                      {/* Name Fields */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
                            placeholder="Your first name"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
                            placeholder="Your last name"
                          />
                        </div>
                      </div>

                      {/* Business Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
                          placeholder="your.email@company.com.au"
                        />
                      </div>

                      {/* Company & Job Title */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Company *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
                            placeholder="Your venue or company name"
                          />
                        </div>
                        <div>
                          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                            Job Title
                          </label>
                          <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
                            placeholder="Your role or position"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
                          placeholder="04XX XXX XXX"
                        />
                      </div>

                      {/* Venue Type */}
                      <div>
                        <label htmlFor="venueType" className="block text-sm font-medium text-gray-700 mb-2">
                          Venue Type
                        </label>
                        <select
                          id="venueType"
                          name="venueType"
                          value={formData.venueType}
                          onChange={handleChange}
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

                      {/* Current Challenge - Only show for demo requests */}
                      {formData.inquiryType === 'Schedule a Demo' && (
                        <div>
                          <label htmlFor="currentChallenge" className="block text-sm font-medium text-gray-700 mb-2">
                            Primary Risk & Compliance Challenge
                          </label>
                          <select
                            id="currentChallenge"
                            name="currentChallenge"
                            value={formData.currentChallenge}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
                          >
                            <option value="">Select primary challenge</option>
                            <option value="aml">AML/CTF Compliance</option>
                            <option value="obligations">Obligation Mapping and Controls</option>
                            <option value="regulatory">Regulatory Compliance</option>
                            <option value="risk">Risk Management</option>
                            <option value="reporting">Regulatory Reporting</option>
                            <option value="training">Staff Training & Management</option>
                            <option value="audits">Audit Preparation</option>
                            <option value="multiple">Multiple areas</option>
                          </select>
                        </div>
                      )}

                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          {formData.inquiryType === 'Schedule a Demo' 
                            ? "Tell us about your compliance needs" 
                            : "Your message *"
                          }
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required={formData.inquiryType !== 'Schedule a Demo'}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={
                            formData.inquiryType === 'Schedule a Demo'
                              ? "What specific governance, risk & compliance challenges are you facing? What would you like to see in the demo?"
                              : "Please provide details about your inquiry..."
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="flex items-center justify-between pt-4">
                        <p className="text-sm text-gray-500">
                          * Required fields
                        </p>
                        <button
                          type="submit"
                          disabled={isSubmitting}
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

              {/* Right Side Content */}
              <div className="space-y-8">
                {/* Customer Testimonial */}
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
                    "Assure mapped all our obligations and transformed our compliance operations. We&apos;ve reduced our compliance workload by about 60% and, for the first time, we&apos;ve gained complete visibility into our risk profile. The team at Involv really understands what Clubs need to do to meet their regulatory obligations."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold text-sm text-gray-900">Sarah Mitchell</div>
                      <div className="text-sm text-gray-600">Manager, Club venue in QLD</div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
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

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-[#1e40af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Location</h4>
                        <p className="text-gray-600">Based in Melbourne, serving Australia-wide</p>
                      </div>
                    </div>

                    
                  </div>
                </div>

                {/* Support for Existing Customers */}
                <div className="border-l-4 border-[#1e40af] bg-blue-50 p-6 rounded-r-lg">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-[#1e40af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Existing Customer?
                  </h4>
                  <p className="text-gray-700 mb-3">
                    For platform support, billing, or technical assistance, contact our customer success team directly.
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
                How we&apos;ll help you streamline your compliance operations
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
                <p className="text-gray-600">
                  We&apos;ll contact you within 24-48 hours to address your enquiry
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1e40af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalised Approach</h3>
                <p className="text-gray-600">
                  Tailored discussion or demo based on your venue&apos;s specific compliance needs
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#1e40af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Discussion</h3>
                <p className="text-gray-600">
                  Explore how Assure can transform your compliance operations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}