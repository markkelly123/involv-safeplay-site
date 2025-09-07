// src/pages/features/index.tsx
import Link from 'next/link'
import Head from 'next/head'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export default function FeaturesPage() {
  return (
    <>
      <Head>
        <title>Features – SafePlay | Safer Gambling Intelligence for EGMs</title>
        <meta
          name="description"
          content="SafePlay provides real-time safer-gambling intelligence for pubs & clubs: RGO support, live alerts (carded & uncarded), configurable thresholds, incident capture, and regulator-aligned reporting."
        />
        <meta
          name="keywords"
          content="safer gambling software, RGO support, responsible gambling, PlayTrax, real-time alerts, carded and uncarded monitoring, gaming venues, pubs, clubs"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Open Graph */}
        <meta property="og:title" content="SafePlay – Safer Gambling Intelligence" />
        <meta
          property="og:description"
          content="Live, configurable alerts and evidence-ready workflows that help RGOs identify and assist at-risk players in real time."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://safeplay.involv.com.au/features" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SafePlay – Safer Gambling Intelligence" />
        <meta
          name="twitter:description"
          content="RGO-assist, carded & uncarded detection, incident capture, and regulator-aligned reporting for pubs & clubs."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Hero */}
        <section className="bg-gradient-to-br from-[#F2F6FB] to-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Safer gambling, <span className="text-[#1E4D8F]">in real time.</span>
            </h1>
            <p className="text-2xl text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              SafePlay gives RGOs and managers live, evidence-based insights on
              gaming floor behaviour—so you can identify risk earlier, act sooner, and document everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-[#1E4D8F] text-white px-10 py-5 rounded-xl font-semibold hover:bg-[#163B6D] transition-colors text-lg"
              >
                Book a walkthrough
              </Link>
            </div>
          </div>
        </section>

        {/* Section: Built for RGOs & Duty Managers */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Built for RGOs and duty managers.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                The RGO role is proactive. SafePlay helps you spot minimally visible signs of escalating behaviour,
                even during peak periods. It continuously monitors play patterns and flags anomalies for both{' '}
                <strong>carded and uncarded</strong> players - so nothing critical slips past.
              </p>
              <ul className="space-y-5">
                <li className="flex">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="lni lni-check text-green-600 text-sm"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Live floor intelligence</h3>
                    <p className="text-gray-600">
                      Session time, funds-in and loss % combine into risk signals that update as play evolves.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="lni lni-check text-green-600 text-sm"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Configurable thresholds</h3>
                    <p className="text-gray-600">
                      Tune alert levels (amber/red), recipients, and schedules to your venue’s profile and patron mix.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="lni lni-check text-green-600 text-sm"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Multi-channel notifications</h3>
                    <p className="text-gray-600">
                      Deliver alerts via web, SMS, email, or existing paging - so the right person acts fast.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Visual card – Live Alerts */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full ml-2"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full ml-2"></div>
                    <div className="ml-4 text-sm text-gray-600">SafePlay – Live Alerts</div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Active risk signals</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">Prolonged session (uncarded)</div>
                        <div className="text-sm text-gray-600">Time on device exceeds venue threshold</div>
                      </div>
                      <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">Action now</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">Loss % spike (carded)</div>
                        <div className="text-sm text-gray-600">One-off loss % over limit this session</div>
                      </div>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Monitor</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div>
                        <div className="font-medium text-gray-900">Accumulated time (multi-machines)</div>
                        <div className="text-sm text-gray-600">Cross-device time threshold reached</div>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Check-in</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-24 bg-[#1E4D8F] rounded-lg opacity-10"></div>
              <div className="absolute -top-4 -left-4 w-24 h-32 bg-green-500 rounded-lg opacity-10"></div>
            </div>
          </div>
        </section>

        {/* Section: How SafePlay works */}
        <section className="py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual – Signal model */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Signals we combine</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="lni lni-signal text-[#1E4D8F] text-xl mr-3"></i>
                    <div>
                      <div className="font-medium text-gray-900">Time on device (carded & uncarded)</div>
                      <div className="text-sm text-gray-600">Continuous and accumulated time across machines.</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="lni lni-signal text-[#1E4D8F] text-xl mr-3"></i>
                    <div>
                      <div className="font-medium text-gray-900">Funds-in / velocity</div>
                      <div className="text-sm text-gray-600">Shift-aware patterns that indicate escalation.</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <i className="lni lni-signal text-[#1E4D8F] text-xl mr-3"></i>
                    <div>
                      <div className="font-medium text-gray-900">Loss percentage (one-off & trend)</div>
                      <div className="text-sm text-gray-600">Contextual thresholds to reduce false positives.</div>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-900">
                  Works independently of gaming system carding; supports uncarded monitoring to close common blind spots.
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Data-led alerts, human-centred conversations.
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                SafePlay augments trained RGOs—not replaces them. It surfaces risk early and provides guidance so staff
                can approach patrons respectfully, avoid embarrassment, and document interactions professionally.
              </p>
              <ul className="space-y-5">
                <li className="flex">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="lni lni-check text-green-600 text-sm"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Escalation pathways</h3>
                    <p className="text-gray-600">Amber → Red with evidence prompts and next-step guidance.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="lni lni-check text-green-600 text-sm"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Incident capture</h3>
                    <p className="text-gray-600">Notes and outcomes flow straight into shift reports.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <i className="lni lni-check text-green-600 text-sm"></i>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">No native app dependency</h3>
                    <p className="text-gray-600">Use any modern device via web; notifications via SMS/email/pager.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section: Compliance alignment */}
        <section className="py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Aligned to evolving responsible gambling requirements.
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                SafePlay supports the shift to proactive harm-minimisation - including dedicated RGOs in NSW for venues
                above machine-count thresholds - and complements venue policies on signage, incident registers, cash access
                controls, and self-exclusion workflows.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">RGO support</h3>
                <p className="text-gray-600">
                  Live alerts and guidance to help RGOs identify, engage and record interactions professionally.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Evidence-ready</h3>
                <p className="text-gray-600">
                  Time-stamped incidents, attachments, and outcomes streamline audit & board reporting.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Interoperable</h3>
                <p className="text-gray-600">
                  Email/SMS/pager delivery and integrations with internal reporting. Importantly, no gaming-system lock-in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-28 bg-[#1E4D8F]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Ready to strengthen safer gambling on your floor?
            </h2>
            <p className="text-2xl text-blue-100 mb-10 leading-relaxed">
              See how SafePlay helps RGOs act sooner with better evidence - and gives managers the audit trail they need.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#1E4D8F] px-10 py-5 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-lg"
              >
                Book a walkthrough
              </Link>
            </div>
            <p className="text-blue-200 text-lg mt-6">
              Month-to-month options  •  Cancel anytime  •  Local support
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}