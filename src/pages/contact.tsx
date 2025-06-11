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
    currentChallenge: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <Head>
        <title>Contact Sales - Schedule Your Involv|Assure Demo</title>
        <meta name="description" content="Get a personalised demo of Involv's Assure GRC platform. Speak with our experts about AML, risk management, and regulatory compliance for Australian pubs and clubs." />
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
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to streamline your risk & compliance?
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get a personalised demo of Assure or reach out to schedule a call.
              </p>
            </div>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                      />
                    </div>

                    {/* Venue Type */}
                    <div>
                      <label htmlFor="venueType" className="block text-sm font-medium text-gray-700 mb-2">
                        Venue Type *
                      </label>
                      <select
                        id="venueType"
                        name="venueType"
                        required
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

                    {/* Current Challenge */}
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
                        <option value="risk">Obligation Mapping and Controls</option>
                        <option value="risk">Regulatory Compliance</option>
                        <option value="risk">Risk Management</option>
                        <option value="reporting">Regulatory Reporting</option>
                        <option value="training">Staff Training & Management</option>
                        <option value="audits">Audit Preparation</option>
                        <option value="multiple">Multiple areas</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us about your compliance needs
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="What specific governance, risk & compliance challenges are you facing? What would you like to see in the demo?"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1e40af] focus:border-transparent"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-[#1e40af] text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                    >

                      Submit
                    </button>

                    <p className="text-sm text-gray-600 text-center">
                      By submitting this form, you agree to our{' '}
                      <Link href="/privacy-policy" className="text-[#1e40af] hover:text-blue-700 underline">
                        Privacy Policy
                      </Link>
                    </p>
                  </form>
                </div>
              </div>

              {/* Right Side Content */}
              <div className="space-y-8">
                {/* Customer Testimonial */}
                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="lni lni-star-fat"></i>
                      ))}
                    </div>
                    <span className="ml-2 text-xs font-medium text-gray-600">5.0 out of 5</span>
                  </div>
                  <blockquote className="text-sm text-gray-700 mb-6">
                    "Assure mapped all our obligations and transformed our compliance operations. We've reduced our compliance workload by about 60% and, for the first time, we've gained complete visibility into our risk profile. The team at Involv really understands what Clubs need to do to meet their regulatory obligations."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <i className="lni lni-user-1 text-3xl text-gray-600"></i>
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
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <i className="lni lni-envelope-2 text-2xl text-[#1e40af]"></i>
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
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <i className="lni lni-headphone-1-mic text-2xl text-[#1e40af]"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">Speak with our team directly</p>
                        <a href="tel:+61390000000" className="text-[#1e40af] hover:text-blue-700 font-medium">
                          1300 000 000
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <i className="lni lni-map-marker-7 text-2xl text-[#1e40af]"></i>
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
                  <h4 className="font-semibold text-gray-900 mb-2">
                    <i className="lni lni-headphone-1-mic mr-2 text-2xl text-[#1e40af]"></i>
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
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="lni lni-timer-1 text-3xl text-[#1e40af]"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">30-minute demo</h3>
                <p className="text-gray-600">
                  Tailored to your venue's specific compliance needs and challenges
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="lni lni-person-chalkboard text-3xl text-[#1e40af]"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert guidance</h3>
                <p className="text-gray-600">
                  Consult with compliance specialists who have a deep understanding of Australian gaming regulations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="lni lni-rocket-6 text-3xl text-[#1e40af]"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Live platform tour</h3>
                <p className="text-gray-600">
                  See real AML monitoring, risk assessments, and reporting in action
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