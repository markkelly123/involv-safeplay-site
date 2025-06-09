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
        <title>About Assure - Built by Industry Veterans Who Understand Your Challenges</title>
        <meta name="description" content="Meet the team behind Assure - former ALH executives, gaming regulatory legal experts, and compliance specialists who understand the unique challenges facing Australian pubs and clubs." />
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

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
                  Built by Industry Veterans Who Actually Understand Your Challenges
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We are not consultants who lack hands-on, coal-face experience. We are former gaming operators, gaming regulatory legal experts, and compliance specialists who have lived the reality of managing compliance at scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://involv.com.au/about/our-team" className="bg-[#1e40af] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">
                    Meet Our Team
                  </a>
                  <a href="https://involv.com.au/about/why-involv" className="border border-[#1e40af] text-[#1e40af] px-8 py-3 rounded-lg hover:bg-[#1e40af] hover:text-white transition-colors font-medium text-center">
                    Why Choose Involv
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg border">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-[#1e40af]">Industry Credibility</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-gray-900">13K</div>
                      <div className="text-gray-500 text-sm">EGMs Previously Managed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">80+</div>
                      <div className="text-gray-500 text-sm">Years Combined Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">All</div>
                      <div className="text-gray-500 text-sm">Australian Jurisdictions</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">100%</div>
                      <div className="text-gray-500 text-sm">Venue Focused</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm text-center">
                  A team of gaming industry experts: gaming operators, regulatory legal and compliance experts who have lived and absolutely appreciate your operational realities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Story</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Assure was created by the team at Involv - seasoned gaming professionals who recognised a gap in the market: no purpose-built compliance technology for Australian pubs and clubs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#1e40af]">The Problem We Saw</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Venue managers are overwhelmed by gaming compliance paperwork, juggling countless SOPs, relying on calendar reminders to track deadlines, and operating without purpose-built technology. Generic compliance tools don't understand the unique needs of gaming venues.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  At the same time, regulations continue to evolve and become more complex. AUSTRAC requirements, state gaming compliance, responsible gambling obligations - all require specialised knowledge and systems built specifically for the gaming industry.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We had a unique view of the market and we knew there was a better way - a compliance platform built specifically for Australian pubs and clubs, by people who actually understand how venues operate.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-sm border">
                <h4 className="text-lg font-semibold mb-4 text-gray-900">What Makes Assure Different</h4>
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
              To transform compliance burdens into competitive advantages for Australian pubs and clubs, delivering practical technology solutions that actually work in the real world.
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

        {/* Leadership Highlight */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Led by Industry Veterans</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Our leadership team brings together the exact expertise needed to build compliance technology that works for venues.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white rounded-lg p-6 mb-4 shadow-sm border">
                    <ProfileImage 
                      leader={leader}
                      className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{leader.name}</h3>
                    <p className="text-[#1e40af] text-sm font-medium mb-3">{leader.role}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{leader.highlight}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a href="https://involv.com.au/about/our-team" className="inline-flex items-center bg-[#1e40af] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Meet the Full Team
                <i className="lni lni-arrow-right text-xl ml-2"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">How Assure Works</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We do not just build software and walk away. Our platform is designed based on real venue experience to ensure it actually works in your operation.
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

        {/* CTA Section */}
        <section className="bg-[#1e40af] py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Experience Purpose-Built Compliance?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Stop wrestling with generic tools. Experience compliance technology built specifically for Australian gaming venues.
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

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

// Profile Image Component with Error Handling
function ProfileImage({ leader, className }: { leader: any; className: string }) {
  return (
    <div className={`${className} overflow-hidden bg-[#1e40af] flex items-center justify-center relative`}>
      <img 
        src={`/images/team/${leader.slug}.jpg`}
        alt={leader.name}
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const fallback = target.nextElementSibling as HTMLElement;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      <div className="absolute inset-0 bg-[#1e40af] text-white text-2xl font-bold hidden items-center justify-center">
        {leader.initials}
      </div>
    </div>
  );
}

// Data
const differentiators = [
  {
    title: "Built for Gaming Venues",
    description: "Purpose-built for Australian pubs and clubs, not generic business compliance."
  },
  {
    title: "Industry Expert Design",
    description: "Created by gaming regulatory legal professionals who understand practical implementation."
  },
  {
    title: "Real-World Testing",
    description: "Every feature tested with actual venue operators to ensure it works in practice."
  },
  {
    title: "Ongoing Updates",
    description: "Continuously updated as regulations evolve and new requirements emerge."
  }
]

const values = [
  {
    icon: "lni lni-head-bulb-2",
    title: "Practical Solutions",
    description: "Every feature must work in the real world of venue operations, not just on paper."
  },
  {
    icon: "lni lni-hand-shake",
    title: "Partnership Approach",
    description: "We work alongside your team as trusted technology partners, not distant vendors."
  },
  {
    icon: "lni lni-trend-up-1",
    title: "Business Growth",
    description: "Compliance should enable growth, not hinder it. We align technology with your commercial goals."
  }
]

const leadership = [
  {
    name: "Louise Lane",
    slug: "louise-lane",
    role: "Chief Executive Officer",
    initials: "LL",
    highlight: "Regulatory legal expert specialising in gaming, liquor, AML, and compliance frameworks."
  },
  {
    name: "Con Nikitas",
    slug: "con-nikitas",
    role: "Chief Commercial Officer",
    initials: "CN",
    highlight: "30 years gaming industry experience, former ALH Group executive managing 13,000 EGMs."
  },
  {
    name: "Tim Barnett",
    slug: "tim-barnett",
    role: "Chief Strategy Officer",
    initials: "TB",
    highlight: "20+ years hospitality & gaming leadership across Australia and international markets."
  },
  {
    name: "Mark Kelly",
    slug: "mark-kelly",
    role: "Chief Operating Officer",
    initials: "MK",
    highlight: "30 years transformational change experience, 6 years specialising in gaming compliance and loyalty."
  }
]

const approach = [
  {
    icon: "lni lni-search-bulb",
    title: "Deep Venue Understanding",
    description: "Built based on comprehensive understanding of venue operations, regulatory requirements, and practical challenges.",
    points: [
      "Pre-configured compliance frameworks",
      "Automated regulatory tracking",
      "Venue-specific workflow design",
      "Integration with existing systems"
    ]
  },
  {
    icon: "lni lni-screwdriver-wrench-3",
    title: "Easy Implementation",
    description: "Designed for quick setup and minimal disruption to your existing operations.",
    points: [
      "Guided onboarding process",
      "Training materials and support",
      "Gradual feature rollout",
      "Dedicated customer success team"
    ]
  },
  {
    icon: "lni lni-bar-chart-7",
    title: "Measurable Results",
    description: "Track your compliance performance and demonstrate audit readiness with clear reporting.",
    points: [
      "Real-time compliance dashboards",
      "Audit trail documentation",
      "Risk monitoring and alerts",
      "Performance analytics"
    ]
  },
  {
    icon: "lni lni-flask-1",
    title: "Continuous Innovation",
    description: "Regular updates ensure you stay ahead of regulatory changes and industry best practices.",
    points: [
      "Automatic regulatory updates",
      "New feature releases",
      "Industry trend insights",
      "Customer feedback integration"
    ]
  }
]