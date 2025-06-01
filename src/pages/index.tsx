import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getPosts, Post, buildImageUrl } from '../../lib/sanity'

interface HomePageProps {
  insights: Post[]
}

function InsightsSection({ insights }: { insights: Post[] }) {
  if (!insights || insights.length === 0) {
    return null // Section disappears if no posts
  }

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Compliance Insights</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay ahead of regulatory changes with expert insights tailored to Australian gaming venues.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {insights.slice(0, 3).map((post) => (
            <article key={post._id} className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
              {/* Article Image */}
              {post.mainImage?.asset?.url ? (
                <div className="aspect-video w-full bg-gray-100">
                  <img 
                    src={buildImageUrl(post.mainImage.asset.url, 400, 225, 75)} 
                    alt={post.mainImage.alt || post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-video w-full bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg className="w-10 h-10 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
              
              <div className="p-6">
                {/* Categories */}
                {post.categories && post.categories.length > 0 && (
                  <div className="flex gap-2 mb-3">
                    {post.categories.slice(0, 2).map((category) => (
                      <span key={category._id} className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                        {category.title}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Title & Excerpt */}
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                  <Link href={`/insights/${post.slug.current}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                {post.excerpt && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
                
                {/* Author & Date */}
                <div className="flex items-center text-xs text-gray-500">
                  <span>{post.author?.name || 'Assure Team'}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString('en-AU', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* View All Link */}
        <div className="text-center">
          <Link 
            href="/insights" 
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View All Insights
            <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home({ insights }: HomePageProps) {
  return (
    <>
      <Head>
        <title>Involv Assure - Know You're Meeting Your Compliance Obligations</title>
        <meta name="description" content="Simple compliance tracking for Australian gaming venues. Know what you need to do, when it's due, and that you're meeting your obligations. No surprises, no enforcement orders." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo-involve-assure.svg" 
                alt="Involv Assure" 
                className="h-8 w-auto"
              />
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/features" className="text-gray-700 hover:text-gray-900">How It Works</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-gray-900">Pricing</Link>
              <Link href="/insights" className="text-gray-700 hover:text-gray-900">Insights</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Login
              </Link>
              <Link href="/contact" className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 transition-colors">
                Get Demo
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section - Realistic Problems */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Know You're Meeting Your Compliance Obligations
                </h1>
                <p className="text-xl mb-6 font-medium text-blue-100">
                  A risk and compliance team in your browser.
                </p>
                <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                  Not sure what regulations apply to your venue? Worried about enforcement orders? Assure shows you exactly what you need to do and helps you stay on top of it all.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-center">
                    See How It Works
                  </Link>
                  <Link href="/login" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-center">
                    Try Assure Free
                  </Link>
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-4">Common Compliance Concerns</h3>
                </div>
                <div className="space-y-4">
                  {complianceConcerns.map((concern, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-blue-200 mr-3 mt-1">
                        <span className="text-lg">🤔</span>
                      </div>
                      <p className="text-blue-100 text-sm">{concern}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-blue-300 text-center">
                  <p className="text-blue-200 text-sm font-medium">We help you get clear on all of this.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Approach vs Better Way */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">From Guessing to Knowing</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Most venues manage compliance informally. There's a better way to stay on top of your obligations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Current Approach */}
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <div className="text-center mb-6">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🤷</span>
                  </div>
                  <h3 className="text-xl font-bold text-orange-700 mb-2">How Most Venues Handle Compliance</h3>
                  <p className="text-orange-600 text-sm">Informal, reactive, uncertain</p>
                </div>
                <ul className="space-y-3">
                  {currentApproach.map((approach, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-orange-500 mr-2 mt-1">•</span>
                      <span className="text-gray-700 text-sm">{approach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Better Way */}
              <div className="bg-white border border-green-200 rounded-lg p-8">
                <div className="text-center mb-6">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✅</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-700 mb-2">How Assure Changes This</h3>
                  <p className="text-green-600 text-sm">Organised, proactive, confident</p>
                </div>
                <ul className="space-y-3">
                  {assureApproach.map((approach, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-gray-700 text-sm">{approach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works - Practical Steps */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Assure Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Purpose-built for Australian gaming venues. Simple steps to get you organised and keep you compliant.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {howItWorksSteps.map((step, index) => (
                <div key={step.title} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-700 italic">"{step.example}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Built for Gaming Venues */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Built for Gaming Venues</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Assure understands gaming venue operations. No generic software that doesn't fit your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {venueFeatures.map((feature) => (
                <div key={feature.title} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-center mb-4">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Venues Using Assure Report</h2>
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "Finally know what we need to do and when. No more wondering if we're missing something important."
              </blockquote>
              <div className="text-sm text-gray-600">
                — Gaming Manager, Regional RSL Club
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-1">Clear View</div>
                <div className="text-gray-600 text-sm">Of all compliance obligations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-1">No Surprises</div>
                <div className="text-gray-600 text-sm">Everything tracked and scheduled</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600 mb-1">Peace of Mind</div>
                <div className="text-gray-600 text-sm">Know you're meeting requirements</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Get Organised?</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              See how Assure can help you understand your obligations and stay on top of compliance requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                See How It Works
              </Link>
              <Link href="/login" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
                Try Free for 30 Days
              </Link>
            </div>
          </div>
        </section>

        {/* Latest Insights Section */}
        <InsightsSection insights={insights} />

        {/* Footer */}
        <footer className="bg-gray-50 border-t py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="mb-4">
                  <img 
                    src="/logo-involve-assure.svg" 
                    alt="Involv Assure" 
                    className="h-6 w-auto"
                  />
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  A risk and compliance team in your browser. Purpose-built for Australian gaming venues.
                </p>
                <p className="text-gray-500 text-xs">
                  Part of the <a href="https://involv.com.au" className="hover:text-gray-700">Involv</a> family
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-900">Product</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="/features" className="hover:text-gray-900">How It Works</Link></li>
                  <li><Link href="/pricing" className="hover:text-gray-900">Pricing</Link></li>
                  <li><Link href="/contact" className="hover:text-gray-900">Get Demo</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-900">Resources</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="/insights" className="hover:text-gray-900">Compliance Insights</Link></li>
                  <li><Link href="/case-studies" className="hover:text-gray-900">Success Stories</Link></li>
                  <li><Link href="/contact" className="hover:text-gray-900">Support</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-900">Expert Advisory</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="https://involv.com.au" className="hover:text-gray-900">Involv Advisory</a></li>
                  <li><a href="https://primeedge.involv.com.au" className="hover:text-gray-900">PrimeEdge Gaming</a></li>
                  <li><a href="https://lane.involv.com.au" className="hover:text-gray-900">Lane Consulting</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
              <p>&copy; 2025 Involv. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy-policy" className="hover:text-gray-700">Privacy Policy</Link>
                <Link href="/terms-of-use" className="hover:text-gray-700">Terms of Use</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    // Fetch recent insights for the homepage
    const insights = await getPosts('assure', 3)
    
    return {
      props: {
        insights,
      },
      revalidate: 300, // Revalidate every 5 minutes
    }
  } catch (error) {
    console.error('Error fetching insights for homepage:', error)
    return {
      props: {
        insights: [],
      },
      revalidate: 300,
    }
  }
}

// Data
const complianceConcerns = [
  "Are we meeting all our gaming licence conditions?",
  "What happens if we miss a regulatory requirement?",
  "How do we know what training staff need and when?",
  "Are our policies and procedures up to date?",
  "What if there's an inspection tomorrow?"
]

const currentApproach = [
  "Rely on memory and informal tracking",
  "Check regulations only when problems arise",
  "Hope staff training is up to date",
  "Keep compliance documents in various places", 
  "React to regulatory issues as they happen",
  "Worry about missing something important"
]

const assureApproach = [
  "Clear view of all compliance requirements",
  "Automated tracking of deadlines and renewals",
  "Staff training schedules and reminders",
  "All compliance documents in one place",
  "Proactive management of regulatory obligations",
  "Confidence you're meeting your responsibilities"
]

const howItWorksSteps = [
  {
    title: "See What Applies to You",
    description: "Assure identifies the regulations that apply to your specific venue type and location.",
    example: "Gaming licence conditions, liquor requirements, staff training obligations"
  },
  {
    title: "Track Your Obligations",
    description: "Clear view of what you need to do, when it's due, and who's responsible.",
    example: "RSA renewal dates, policy review schedules, audit requirements"
  },
  {
    title: "Stay on Top of Everything",
    description: "Automated reminders and documentation keep you organised and prepared.",
    example: "Training alerts, compliance reports, inspection readiness"
  }
]

const venueFeatures = [
  {
    title: "Gaming Licence Tracking",
    icon: "🎰",
    description: "Monitor gaming licence conditions and obligations specific to your state and territory."
  },
  {
    title: "Liquor Compliance",
    icon: "🍺",
    description: "Track liquor licence requirements, RSA training, and renewal deadlines."
  },
  {
    title: "AML Requirements",
    icon: "🛡️",
    description: "Manage AUSTRAC obligations and customer due diligence requirements."
  },
  {
    title: "Staff Training",
    icon: "🎓",
    description: "Track RSG, RSA, and other mandatory training with renewal reminders."
  }
]