import Link from 'next/link'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import { sanity, getPosts } from '../../lib/sanity'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  publishedAt: string
  author: {
    name: string
    role?: string
    image?: {
      asset: {
        url: string
      }
      alt?: string
    }
  }
  mainImage?: {
    asset: {
      url: string
    }
    alt?: string
  }
  categories: Array<{
    _id: string
    title: string
  }>
  estimatedReadingTime?: number
}

interface HomePageProps {
  posts: Post[]
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              A risk and compliance team in your browser.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Streamline your AML, gaming compliance, and risk management with Australia's first 
              GRC platform built specifically for pubs and clubs offering electronic gaming machines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact" 
                className="bg-[#1e40af] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
              >
                <i className="lni lni-rocket-6 mr-2"></i>
                Schedule a Demo
              </Link>
              <Link 
                href="/demo" 
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center"
              >
                <i className="lni lni-play mr-2"></i>
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need for compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Purpose-built for Australian pubs and clubs, Assure simplifies complex compliance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - AML Compliance */}
            <Link href="/features" className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1e40af] transition-colors">
                <i className="lni lni-shield-1 text-3xl text-[#1e40af] group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#1e40af] transition-colors">AML Compliance</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Comprehensive anti-money laundering tools designed for gaming venues with built-in AUSTRAC reporting.
              </p>
            </Link>

            {/* Feature 2 - Risk Management */}
            <Link href="/features" className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1e40af] transition-colors">
                <i className="lni lni-file-check text-3xl text-[#1e40af] group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#1e40af] transition-colors">Risk Management</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Automated risk assessments and monitoring with customisable frameworks for your venue's specific needs.
              </p>
            </Link>

            {/* Feature 3 - Regulatory Reporting */}
            <Link href="/features" className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1e40af] transition-colors">
                <i className="lni lni-bar-chart-4 text-3xl text-[#1e40af] group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#1e40af] transition-colors">Regulatory Reporting</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Streamlined reporting for all Australian jurisdictions with automated compliance tracking and alerts.
              </p>
            </Link>

            {/* Feature 4 - Team Management */}
            <Link href="/features" className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1e40af] transition-colors">
                <i className="lni lni-users text-3xl text-[#1e40af] group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#1e40af] transition-colors">Team Management</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Role-based access controls and training modules to ensure your entire team stays compliant.
              </p>
            </Link>

            {/* Feature 5 - Real-time Monitoring */}
            <Link href="/features" className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1e40af] transition-colors">
                <i className="lni lni-timer-1 text-3xl text-[#1e40af] group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#1e40af] transition-colors">Real-time Monitoring</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                24/7 compliance monitoring with instant alerts for suspicious activities and regulatory changes.
              </p>
            </Link>

            {/* Feature 6 - Custom Workflows */}
            <Link href="/features" className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-[#1e40af] transition-colors">
                <i className="lni lni-code-branch text-3xl text-[#1e40af] group-hover:text-white transition-colors"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#1e40af] transition-colors">Custom Workflows</h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                Configurable compliance workflows that adapt to your venue's operational requirements and processes.
              </p>
            </Link>
          </div>

          {/* Explore Features CTA */}
          <div className="text-center mt-12">
            <Link 
              href="/features" 
              className="inline-flex items-center bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              <i className="lni lni-cog mr-2"></i>
              Explore all Features
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Built for Australian pubs and clubs
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Unlike generic compliance tools, Assure understands the unique challenges facing 
                Australian gaming venues. We've built every feature with your specific regulatory 
                requirements in mind.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="lni lni-check-circle-1 text-2xl text-green-500 mt-1"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Australian-first design</h3>
                    <p className="text-gray-600">
                      Pre-configured for AUSTRAC, state gaming regulations, and local compliance requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="lni lni-check-circle-1 text-2xl text-green-500 mt-1"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Expert support</h3>
                    <p className="text-gray-600">
                      Backed by Australia's leading gaming compliance consultants with decades of experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="lni lni-check-circle-1 text-2xl text-green-500 mt-1"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Venue-focused features</h3>
                    <p className="text-gray-600">
                      Purpose-built for gaming floors, not generic business compliance needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Subtle CTA in benefits section */}
              <div className="mt-8">
                <Link 
                  href="/features" 
                  className="inline-flex items-center text-[#1e40af] font-medium hover:text-blue-700 transition-colors text-lg"
                >
                  See how it works
                  <i className="lni lni-arrow-right text-xl ml-1"></i>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="lni lni-alarm-check text-4xl text-green-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Save 20+ hours per week</h3>
                  <p className="text-gray-600 mb-6">
                    Automate manual compliance tasks and reduce the time spent on regulatory reporting.
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <i className="lni lni-users mr-1"></i>
                      <span>Dozens of venues</span>
                    </div>
                    <div className="flex items-center">
                      <i className="lni lni-star-fat mr-1 text-yellow-400"></i>
                      <span>4.9/5 rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-20 bg-[#1e40af]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Nail your compliance and risk management?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join the many Australian venues already using Assure to stay compliant and save time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-[#1e40af] px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <i className="lni lni-envelope-2 mr-2"></i>
              Schedule a Demo
            </Link>
            <Link 
              href="/pricing" 
              className="border border-blue-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center"
            >
              <i className="lni lni-tap-quick mr-2"></i>
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    // Use the existing getPosts function from your sanity.ts file
    const posts = await getPosts('assure', 3)

    return {
      props: {
        posts: posts || []
      },
      revalidate: 300
    }
  } catch (error) {
    console.error('Error fetching posts:', error)
    return {
      props: {
        posts: []
      },
      revalidate: 300
    }
  }
}