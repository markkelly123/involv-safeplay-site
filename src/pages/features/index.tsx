import Link from 'next/link'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import { getPosts } from '../../../lib/sanity'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

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

interface FeaturesPageProps {
  posts: Post[]
}

export default function FeaturesPage({ posts }: FeaturesPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Your compliance, <br/>
              <span className="text-[#1e40af]">perfected.</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              The only GRC platform purposely built for Australian pubs and clubs. Build a culture of compliance 
              and stay focused on what matters - running your venue.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="bg-[#1e40af] text-white px-10 py-5 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center text-lg"
              >
                <i className="lni lni-rocket-6 mr-3"></i>
                Schedule a Trial
              </Link>
              <Link 
                href="/demo" 
                className="border border-gray-300 text-gray-700 px-10 py-5 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center text-lg"
              >
                <i className="lni lni-play mr-3"></i>
                See Assure In Action
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1: Know Your Obligations */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Know exactly what you need to do, when.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Pre-loaded with every compliance requirement for Australian pubs and clubs. 
                No more guessing, no more missing deadlines, no more surprises.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="lni lni-check text-green-600 text-sm"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">State-specific requirements built in</h3>
                    <p className="text-gray-600">From NSW to TAS - we know every jurisdiction's rules</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="lni lni-check text-green-600 text-sm"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatic updates when laws change</h3>
                    <p className="text-gray-600">Stay current without checking regulator websites daily</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="lni lni-check text-green-600 text-sm"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Clear ownership and deadlines</h3>
                    <p className="text-gray-600">Everyone knows what they're responsible for</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Placeholder for Obligations Register Screenshot */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full ml-2"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full ml-2"></div>
                    <div className="ml-4 text-sm text-gray-600">Assure - Obligations Register</div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Obligations</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">AML Program Review</div>
                          <div className="text-sm text-gray-600">Due: 15 March 2025</div>
                        </div>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Due Soon</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">RSA Training Renewal</div>
                          <div className="text-sm text-gray-600">Due: 30 April 2025</div>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">On Track</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">Signage Audit</div>
                          <div className="text-sm text-gray-600">Due: 10 June 2025</div>
                        </div>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Scheduled</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-24 bg-[#1e40af] rounded-lg opacity-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-32 bg-green-500 rounded-lg opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Risk Management */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              {/* Placeholder for Risk Dashboard Screenshot */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full ml-2"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full ml-2"></div>
                    <div className="ml-4 text-sm text-gray-600">Assure - Risk Dashboard</div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Risk Overview</h3>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-red-50 p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-red-600">3</div>
                      <div className="text-sm text-red-700 mt-1">High Risk</div>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-yellow-600">7</div>
                      <div className="text-sm text-yellow-700 mt-1">Medium Risk</div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-green-600">12</div>
                      <div className="text-sm text-green-700 mt-1">Low Risk</div>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-blue-600">85%</div>
                      <div className="text-sm text-blue-700 mt-1">Controlled</div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">AML Controls</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">90%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">Gaming Compliance</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">95%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">WHS Programs</span>
                      <div className="flex items-center">
                        <div className="w-32 bg-gray-200 rounded-full h-2 mr-3">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>
                        <span className="text-sm text-gray-600">75%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-24 bg-purple-500 rounded-lg opacity-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-32 bg-yellow-500 rounded-lg opacity-10"></div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Spot problems before they become fines.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Pre-loaded with the obligations and risks every pub and club faces. Real-time monitoring shows you 
                exactly where you stand and what needs attention.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="lni lni-check text-green-600 text-sm"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry-specific risk library</h3>
                    <p className="text-gray-600">Common pub and club risks already identified and categorised</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="lni lni-check text-green-600 text-sm"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatic risk scoring</h3>
                    <p className="text-gray-600">Simple ratings help you focus on what matters most</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="lni lni-check text-green-600 text-sm"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time alerts</h3>
                    <p className="text-gray-600">Get notified the moment something needs your attention</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Digital Inspections */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                <span className="text-[#1e40af]">RE-WRITE THIS SECTION.</span> Ditch the clipboards. Embrace smart inspections.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your staff use tablets to complete inspections anywhere in your venue. 
                Issues automatically trigger actions. Everything's documented for inspectors and auditors.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="lni lni-check text-green-600 text-sm"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Gaming machine daily checks</h3>
                    <p className="text-gray-600">All compliance checkslists digitally filed as evidence</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="lni lni-check text-green-600 text-sm"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatic issue escalation</h3>
                    <p className="text-gray-600">Issues create action items; assign them to the right people</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="lni lni-check text-green-600 text-sm"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Audit-ready documentation</h3>
                    <p className="text-gray-600">Complete history of all inspections and corrective actions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              {/* Placeholder for Mobile Inspection Screenshot */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gray-900 px-6 py-4">
                  <div className="flex items-center justify-center">
                    <div className="w-20 h-1 bg-gray-700 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Gaming Floor Opening Check</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">In Progress</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <i className="lni lni-check-circle-1 text-green-500 text-xl mr-3"></i>
                        <span className="text-gray-900">All machines operational</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center">
                        <i className="lni lni-check-circle-1 text-green-500 text-xl mr-3"></i>
                        <span className="text-gray-900">RG signage visible; brochures stocked</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-center">
                        <i className="lni lni-warning text-yellow-500 text-xl mr-3"></i>
                        <span className="text-gray-900">Lighting needs attention</span>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-start">
                        <i className="lni lni-camera text-yellow-600 text-lg mr-3 mt-1"></i>
                        <div>
                          <p className="text-sm font-medium text-yellow-800">Photo taken</p>
                          <p className="text-xs text-yellow-700 mt-1">Maintenance ticket auto-created</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-[#1e40af] text-white py-3 rounded-lg mt-6 font-medium">
                    Complete Inspection
                  </button>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-24 h-32 bg-blue-500 rounded-lg opacity-10"></div>
              <div className="absolute -top-8 -left-8 w-32 h-24 bg-green-500 rounded-lg opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4: All Connected */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Everything works together. <br/>
              <span className="text-[#1e40af]">Nothing falls through the cracks.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              When obligations are due, risks change, or inspections find issues - the right people 
              get notified automatically. Your compliance system has intelligence.
            </p>
          </div>

          {/* Integration Visual */}
          <div className="relative max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Documents */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <i className="lni lni-layers-2 text-3xl text-[#1e40af]"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Documents</h3>
                <p className="text-gray-600">
                  Policies, procedures, and evidence - all stored securely with version control and automatic updates.
                </p>
              </div>

              {/* Workflows */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center md:transform md:scale-110">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <i className="lni lni-vector-nodes-4 text-3xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Auto Workflows</h3>
                <p className="text-gray-600">
                  Issues trigger actions. Tasks get assigned. Deadlines send reminders. Progress gets tracked automatically.
                </p>
              </div>

              {/* Reporting */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <i className="lni lni-bar-chart-4 text-3xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Reporting</h3>
                <p className="text-gray-600">
                  Board reports, audit trails, and compliance dashboards - always current, always ready.
                </p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Industry Specific */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Built for <span className="text-[#1e40af]">your</span> industry.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Unlike generic compliance tools, Assure is designed for the demands of pub and club gaming venues. 
              Every feature is tailored for your specific challenges.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* AML/CTF */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <i className="lni lni-shield-1 text-2xl text-red-600"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">AML/CTF Compliance</h3>
              <p className="text-gray-600 mb-6">
                AUSTRAC reporting, customer due diligence, and SMRs - all automated for gaming venues.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="lni lni-check text-[#1e40af] text-sm mt-1 mr-2"></i>
                  <span className="text-sm text-gray-700">Cheque cashing monitoring</span>
                </li>
                <li className="flex items-start">
                  <i className="lni lni-check text-[#1e40af] text-sm mt-1 mr-2"></i>
                  <span className="text-sm text-gray-700">Customer due diligence workflows (SoF, SoW)</span>
                </li>
                <li className="flex items-start">
                  <i className="lni lni-check text-[#1e40af] text-sm mt-1 mr-2"></i>
                  <span className="text-sm text-gray-700">Program review scheduling</span>
                </li>
              </ul>
            </div>

            {/* Gaming & Liquor */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <i className="lni lni-crown-4 text-2xl text-[#1e40af]"></i>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Gaming & Liquor</h3>
              <p className="text-gray-600 mb-6">
                State gaming regulations, liquor licensing, and harm minimisation - all the requirements that matter to venues.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="lni lni-check text-[#1e40af] text-sm mt-1 mr-2"></i>
                  <span className="text-sm text-gray-700">RSA/RSG training tracking</span>
                </li>
                <li className="flex items-start">
                  <i className="lni lni-check text-[#1e40af] text-sm mt-1 mr-2"></i>
                  <span className="text-sm text-gray-700">EGM compliance</span>
                </li>
                <li className="flex items-start">
                  <i className="lni lni-check text-[#1e40af] text-sm mt-1 mr-2"></i>
                  <span className="text-sm text-gray-700">Liquor licensing requirements</span>
                </li>
              </ul>
            </div>

            {/* WHS */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <i className="lni lni-clipboard-check text-2xl text-green-600"></i>
              </div>
              <span className="text-[#1e40af]">STAY AWAY FROM NON-GAMING.</span> <h3 className="text-2xl font-semibold text-gray-900 mb-4">Health & Safety</h3>
              <p className="text-gray-600 mb-6">
                WHS risk assessments, incident reporting, and safety training - keep your venue and staff safe.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="lni lni-check text-[#1e40af] text-sm mt-1 mr-2"></i>
                  <span className="text-sm text-gray-700">Incident reporting & investigation</span>
                </li>
                <li className="flex items-start">
                  <i className="lni lni-check text-[#1e40af] text-sm mt-1 mr-2"></i>
                  <span className="text-sm text-gray-700">Safety training records</span>
                </li>
                <li className="flex items-start">
                  <i className="lni lni-check text-[#1e40af] text-sm mt-1 mr-2"></i>
                  <span className="text-sm text-gray-700">Equipment maintenance logs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Feature */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#1e40af]">NO MOBILE APP.</span>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Compliance in your pocket.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your team can complete inspections, report incidents, and check obligations 
                from anywhere. Everything syncs instantly.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">For Managers</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="lni lni-check text-[#1e40af] text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700">Review compliance status</span>
                    </li>
                    <li className="flex items-start">
                      <i className="lni lni-check text-[#1e40af] text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700">Approve corrective actions</span>
                    </li>
                    <li className="flex items-start">
                      <i className="lni lni-check text-[#1e40af] text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700">Get push notifications</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4 text-lg">For Staff</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <i className="lni lni-check text-[#1e40af] text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700">Complete inspections</span>
                    </li>
                    <li className="flex items-start">
                      <i className="lni lni-check text-[#1e40af] text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700">Report incidents instantly</span>
                    </li>
                    <li className="flex items-start">
                      <i className="lni lni-check text-[#1e40af] text-sm mt-1 mr-2"></i>
                      <span className="text-gray-700">Access training materials & reference documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex space-x-4">
                <Link 
                  href="#" 
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src="/apple-app-store.svg"
                    alt="Download on the App Store"
                    width={160}
                    height={48}
                    className="h-12 w-auto"
                  />
                </Link>
                <Link 
                  href="#" 
                  className="transition-transform hover:scale-105"
                >
                  <Image
                    src="/google-play.svg"
                    alt="Get it on Google Play"
                    width={160}
                    height={48}
                    className="h-12 w-auto"
                  />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#1e40af] to-blue-600 rounded-3xl p-8 text-white transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white bg-opacity-20 rounded-2xl p-6">
                  <h3 className="font-semibold mb-6 text-white text-lg">Mobile Dashboard</h3>
                  <div className="space-y-4">
                    <div className="bg-white bg-opacity-30 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">Gaming Floor Check</span>
                        <span className="text-xs bg-green-500 px-3 py-1 rounded-full text-white">Complete</span>
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-30 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">DOSA Inspection</span>
                        <span className="text-xs bg-yellow-500 px-3 py-1 rounded-full text-white">In Progress</span>
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-30 rounded-xl p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">Staff Training</span>
                        <span className="text-xs bg-blue-500 px-3 py-1 rounded-full text-white">Due Soon</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-32 bg-purple-500 rounded-lg opacity-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-24 bg-green-500 rounded-lg opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Final CTA */}
      <section className="py-32 bg-[#1e40af]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
            Ready to nail compliance <br/>
            AND improve productivity and efficiency?
          </h2>
          <p className="text-2xl text-blue-100 mb-12 leading-relaxed">
            Subscribe to one of our Lite or Pro plan online today. Or schedule a time for a demo. 
            See how much time and stress Assure can save you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-[#1e40af] px-10 py-5 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center text-lg"
            >
              <i className="lni lni-rocket-6 mr-3"></i>
              Schedule a Demo
            </Link>
            <Link 
              href="/pricing" 
              className="border border-blue-300 text-white px-10 py-5 rounded-xl font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center text-lg"
            >
              <i className="lni lni-tap-quick mr-3"></i>
              View Pricing
            </Link>
          </div>
          <p className="text-blue-200 text-lg mt-6">
            Month-to-month plan options • Cancel anytime • Australian support team
          </p>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
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