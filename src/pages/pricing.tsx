import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function PricingPage() {
  const router = useRouter()
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const plans = [
    {
      name: 'Lite',
      price: billingCycle === 'monthly' ? 360 : 3240, // 10% discount for yearly
      period: billingCycle === 'monthly' ? 'per month' : 'per year',
      description: 'Perfect for single venues getting started with risk & compliance.',
      features: [
        'Up to 3 users',
        'Unlimited records',
        '3 user accounts',
        '24/7 email support',
        'Basic AML templates',
        'Standard reporting'
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'border border-[#1e40af] text-[#1e40af] hover:bg-[#1e40af] hover:text-white',
      popular: false
    },
    {
      name: 'Pro',
      price: billingCycle === 'monthly' ? 1200 : 10800, // 10% discount for yearly
      period: billingCycle === 'monthly' ? 'per month' : 'per year',
      description: 'For established venues with comprehensive compliance needs.',
      features: [
        'Up to 10 users',
        'Unlimited records',
        '10 user accounts',
        '24/7 email support',
        'Advanced AML features',
        'Custom workflows',
        'Priority support'
      ],
      buttonText: 'Get Started',
      buttonStyle: 'bg-[#1e40af] text-white hover:bg-blue-700',
      popular: true
    },
    {
      name: 'Enterprise',
      price: billingCycle === 'monthly' ? 2000 : 18000, // 10% discount for yearly
      period: billingCycle === 'monthly' ? 'per month' : 'per year',
      description: 'For larger operations and multi-venue groups.',
      features: [
        '15+ users',
        'Unlimited records',
        'Unlimited user accounts',
        '24/7 phone & email support',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced analytics',
        'White-label options'
      ],
      buttonText: 'Get in touch',
      buttonStyle: 'border border-[#1e40af] text-[#1e40af] hover:bg-[#1e40af] hover:text-white',
      popular: false
    }
  ]

  const formatPrice = (price: number) => {
    if (price === 0) return '$0'
    return `$${price.toLocaleString()}`
  }

  return (
    <>
      <Head>
        <title>Pricing - Assure GRC Platform | The Most Cost Effective Risk & Compliance Solution</title>
        <meta name="description" content="Transparent pricing for Assure&apos;s GRC platform. Cost-effective AML and gaming compliance solutions for Australian pubs and clubs. Start your compliance journey today." />
        <meta name="keywords" content="GRC platform pricing, AML compliance cost, gaming compliance pricing, AUSTRAC compliance pricing, venue compliance software cost, risk management pricing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Open Graph */}
        <meta property="og:title" content="Pricing - Assure GRC Platform | Affordable Compliance Solutions" />
        <meta property="og:description" content="Transparent, affordable pricing for comprehensive GRC compliance. Built specifically for Australian gaming venues." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://assure.involv.com.au/pricing" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing - Assure GRC Platform" />
        <meta name="twitter:description" content="Transparent, affordable pricing for comprehensive GRC compliance." />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation currentPath={router.pathname} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-blue-100 text-[#1e40af] text-sm font-medium rounded-full uppercase tracking-wide">
                  Pricing Plans
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Risk & Compliance Like A Pro
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Choose the plan for your business&apos;s risk & compliance needs. All plans include comprehensive 
                AML, obligtaion mapping, gaming compliance, and risk management features.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center mb-6">
                <span className={`mr-4 text-lg font-medium ${billingCycle === 'monthly' ? 'text-[#1e40af]' : 'text-gray-500'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                  className="relative inline-flex h-8 w-16 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:ring-offset-2"
                >
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-[#1e40af] transition-transform ${
                      billingCycle === 'yearly' ? 'translate-x-9' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`ml-4 text-lg font-medium ${billingCycle === 'yearly' ? 'text-[#1e40af]' : 'text-gray-500'}`}>
                  Yearly
                </span>
                {billingCycle === 'yearly' && (
                  <span className="ml-3 px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    Save 10%
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-4 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`bg-white rounded-2xl shadow-lg border-2 transition-transform hover:scale-105 ${
                    plan.popular 
                      ? 'border-[#1e40af] ring-4 ring-blue-100' 
                      : 'border-gray-200'
                  } relative flex flex-col h-full`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#1e40af] text-white px-4 py-2 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="p-8 flex flex-col h-full">
                    {/* Plan Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-lg font-bold text-gray-600 uppercase tracking-wide mb-2">
                        {plan.name}
                      </h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-gray-900">
                          {formatPrice(plan.price)}
                        </span>
                        {plan.period && (
                          <span className="text-gray-600 ml-2">
                            {plan.period}
                          </span>
                        )}
                      </div>
                      {plan.price > 0 && (
                        <p className="text-sm text-gray-500 mb-1">*Exclusive of GST</p>
                      )}
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {plan.description}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <svg className="w-5 h-5 text-[#1e40af] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link 
                      href="/contact"
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors mt-auto ${plan.buttonStyle}`}
                    >
                      {plan.buttonText}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Note */}
            <div className="text-center mt-12">
              <p className="text-gray-600 font-medium text-xl">
                *All plans include a 14 day free trial
              </p>
            </div>
          </div>
        </section>

        {/* Features Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compare Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                All plans include our core compliance features. Higher tiers add advanced functionality, more seats, and higher levels of support.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Lite</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Pro</th>
                    <th className="text-center py-4 px-6 font-semibold text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-6 text-gray-700">AML Compliance Tools</td>
                    <td className="text-center py-4 px-6">
                      <svg className="w-5 h-5 text-[#1e40af] mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </td>
                    <td className="text-center py-4 px-6">
                      <svg className="w-5 h-5 text-[#1e40af] mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </td>
                    <td className="text-center py-4 px-6">
                      <svg className="w-5 h-5 text-[#1e40af] mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-700">Risk Management</td>
                    <td className="text-center py-4 px-6">
                      <svg className="w-5 h-5 text-[#1e40af] mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </td>
                    <td className="text-center py-4 px-6">
                      <span className="text-[#1e40af] text-sm font-medium">Advanced</span>
                    </td>
                    <td className="text-center py-4 px-6">
                      <span className="text-[#1e40af] text-sm font-medium">Advanced</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-700">Custom Workflows</td>
                    <td className="text-center py-4 px-6">
                      <svg className="w-5 h-5 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 10 H15" clipRule="evenodd" />
                      </svg>
                    </td>
                    <td className="text-center py-4 px-6">
                      <svg className="w-5 h-5 text-[#1e40af] mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </td>
                    <td className="text-center py-4 px-6">
                      <svg className="w-5 h-5 text-[#1e40af] mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 text-gray-700">Dedicated Account Manager</td>
                    <td className="text-center py-4 px-6">
                      <svg className="w-5 h-5 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 10 H15" clipRule="evenodd" />
                      </svg>
                    </td>
                    <td className="text-center py-4 px-6">
                      <svg className="w-5 h-5 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 10 H15" clipRule="evenodd" />
                      </svg>
                    </td>
                    <td className="text-center py-4 px-6">
                      <svg className="w-5 h-5 text-[#1e40af] mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about Assure pricing and plans
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Can I change plans anytime?
                </h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What&apos;s included in the 14-day free trial?
                </h3>
                <p className="text-gray-600">
                  All plans include a full 14-day free trial with access to all features in your chosen plan. 
                  No credit card required to start.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Do you offer custom enterprise solutions?
                </h3>
                <p className="text-gray-600">
                  Yes, our Enterprise plan can be customised for larger organizations with specific requirements. 
                  Please contact our sales team to discuss your needs.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Is GST included in the pricing?
                </h3>
                <p className="text-gray-600">
                  All prices shown are exclusive of GST. GST will be added at checkout.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-[#1e40af]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to streamline your compliance?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your free trial today and see how Assure can transform your compliance operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-[#1e40af] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
              >
                Start Free Trial
              </Link>
              <Link 
                href="/contact" 
                className="border border-blue-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}