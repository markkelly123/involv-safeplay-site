// src/pages/about.tsx
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function About() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>About SafePlay – Built by Venue Operators & Regulatory Experts</title>
        <meta
          name="description"
          content="SafePlay is safer gaming intelligence built by venue operators and regulatory experts. We help RGOs identify risk earlier, act sooner, and document everything - carded and uncarded."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation currentPath={router.pathname} />

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">About</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                  Built by People Who Run Venues - Not Just Talk About Them
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  SafePlay is the safer gaming intelligence pillar of Involv’s Three Tier Response Model.
                  We’re operators and regulatory specialists who know the realities of busy floors, mix of carded and uncarded play,
                  and evolving responsible gaming expectations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-[#1e40af] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                  >
                    Talk to the Team
                  </Link>
                  <Link
                    href="/features"
                    className="border border-[#1e40af] text-[#1e40af] px-8 py-3 rounded-lg hover:bg-[#1e40af] hover:text-white transition-colors font-medium text-center"
                  >
                    Why SafePlay
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg border">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#1e40af]">What We Stand On</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-gray-900">40+</div>
                      <div className="text-gray-500 text-sm">Years Combined Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">All</div>
                      <div className="text-gray-500 text-sm">Australian Jurisdictions</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">100%</div>
                      <div className="text-gray-500 text-sm">Venue-First Design</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">Real-Time</div>
                      <div className="text-gray-500 text-sm">Carded & Uncarded Coverage</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm text-center">
                  SafePlay features venue-tested workflows
                  that help RGOs act sooner and document better.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Story</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                SafePlay was created to solve the hardest part of monitoring for play activity in pubs and clubs:
                seeing the patterns humans miss - especially during peak periods and in uncarded play environments - then turning
                those signals into respectful conversations and audit-ready evidence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#1e40af]">The Problem We Saw</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  RGOs are expected to monitor everything. It's not practically possible. Subtle but harmful behaviours often look normal on a busy floor,
                  and anonymous (uncarded) play hides most signals. Generic compliance tools or latent analysis weren’t built for this reality.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Regulations and community expectations continue to evolve. Venues need real-time monitoring, venue-tuned thresholds,
                  and a clean evidence trail - without locking into a single gaming system or app footprint.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  SafePlay was developed to be the monitoring-tech pillar in a practical, human-centred framework — the Three Tier Response Model.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm border">
                <h4 className="text-lg font-semibold mb-4 text-gray-900">What Makes SafePlay Different</h4>
                <div className="space-y-4">
                  {differentiators.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-[#1e40af] w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-1">{item.title}</h5>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Advance a <strong>safer gaming</strong> model that shares responsibility: give operators real-time visibility to catch risk early, engage patrons respectfully, 
              and maintain an auditable record of care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#1e40af] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${value.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Led by Operators & Experts</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our leadership blends operational experience with regulatory and product expertise - so SafePlay works on the floor, not just on paper.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-lg p-6 mb-4 shadow-sm border">
                    <ProfileImage leader={leader} className="w-20 h-20 rounded-full mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{leader.name}</h3>
                    <p className="text-[#1e40af] text-sm font-medium mb-3">{leader.role}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{leader.highlight}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center bg-[#1e40af] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Connect with SafePlay
                <i className="lni lni-arrow-right text-xl ml-2"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">How SafePlay Helps Venues</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We don’t ship software and step back. We implement with you, calibrate thresholds to your venue profile,
              and keep improving as your team and trading patterns evolve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {approach.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm border">
                <div className="flex items-start mb-4">
                  <div className="bg-[#1e40af] w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <i className={`${item.icon} text-xl text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600">
                      <i className="lni lni-check text-[#1e40af] mt-0.5 mr-3 flex-shrink-0"></i>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1e40af] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to See SafePlay in Action?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Experience purpose-built safer gaming intelligence for Australian venues - for carded and uncarded environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-[#1e40af] px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                Schedule a Demo
              </Link>
              <Link href="/features" className="border border-blue-300 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium">
                Explore Features
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

/* ---------------------- Profile Image Component ---------------------- */
function ProfileImage({ leader, className }: { leader: any; className: string }) {
  return (
    <div className={`${className} overflow-hidden bg-[#1e40af] flex items-center justify-center relative`}>
      <img
        src={`/images/team/${leader.slug}.jpg`}
        alt={leader.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.style.display = 'none'
          const fallback = target.nextElementSibling as HTMLElement
          if (fallback) fallback.style.display = 'flex'
        }}
      />
      <div className="absolute inset-0 bg-[#1e40af] text-white text-2xl font-bold hidden items-center justify-center">
        {leader.initials}
      </div>
    </div>
  )
}

/* ------------------------------- Data ------------------------------- */

const differentiators = [
  { title: 'Built for Venues', description: 'Purpose-built for Australian pubs and clubs, not generic enterprise compliance.' },
  { title: 'Operator DNA', description: 'Designed with people who run venues and understand uncarded play and peak-period realities.' },
  { title: 'Real-Time, Practical', description: 'Live monitoring, venue-tuned thresholds, and respectful RGO workflows.' },
  { title: 'Interoperable by Design', description: 'Works via web with email/SMS/pager delivery—no system lock-in.' }
]

const values = [
  { icon: 'lni lni-head-bulb-2', title: 'Practical First', description: 'Everything must work on a live floor, not just in a diagram.' },
  { icon: 'lni lni-hand-shake', title: 'Partnership', description: 'We implement with you and support RGOs to succeed.' },
  { icon: 'lni lni-shield-1', title: 'Care & Compliance', description: 'Player wellbeing and regulatory confidence go hand in hand.' }
]

const leadership = [
  {
    name: 'Louise Lane',
    slug: 'louise-lane',
    role: 'Chief Executive Officer',
    initials: 'LL',
    highlight: 'Regulatory legal specialist across gaming, liquor, AML/CTF, and responsible-gambling frameworks.'
  },
  {
    name: 'Tim Barnett',
    slug: 'tim-barnett',
    role: 'Chief Strategy & Operations',
    initials: 'TB',
    highlight: 'Venue operations leader with deep hospitality & gaming experience; champions floor-first product decisions.'
  },
  {
    name: 'Mark Kelly',
    slug: 'mark-kelly',
    role: 'Chief Operating Officer',
    initials: 'MK',
    highlight: 'Transformation and product delivery leader focused on safer-gaming outcomes and RGO enablement.'
  },
  {
    name: 'Advisory Panel',
    slug: 'advisory-panel',
    role: 'Industry & Research Advisors',
    initials: 'AP',
    highlight: 'Practitioners, researchers and lived-experience voices informing harm-minimisation design and evidence standards.'
  }
]

const approach = [
  {
    icon: 'lni lni-search-bulb',
    title: 'Deep Venue Understanding',
    description: 'We learn your trading pattern, patron mix, and floor layout before we calibrate signals.',
    points: [
      'Venue-specific thresholds and routing',
      'Carded and uncarded coverage',
      'Respectful intervention guidance',
      'Evidence prompts for every alert'
    ]
  },
  {
    icon: 'lni lni-screwdriver-wrench-3',
    title: 'Fast, Low-Friction Setup',
    description: 'Minimal footprint to get started; works alongside existing systems and reporting.',
    points: [
      'Guided onboarding',
      'RGO and manager training',
      'Web access + SMS/email/pager delivery',
      'No native app dependency'
    ]
  },
  {
    icon: 'lni lni-bar-chart-7',
    title: 'Measurable Outcomes',
    description: 'Improve time-to-intervene and create an audit-ready trail that stands up to scrutiny.',
    points: [
      'Time-stamped incidents and outcomes',
      'Shift and board-level reporting',
      'Noise reduction through calibration',
      'Continuous performance reviews'
    ]
  },
  {
    icon: 'lni lni-flask-1',
    title: 'Continuous Improvement',
    description: 'We iterate with your team as regulations and venue realities evolve.',
    points: [
      'Regular threshold reviews',
      'New signal and workflow releases',
      'Ops feedback loops',
      'Jurisdictional alignment updates'
    ]
  }
]