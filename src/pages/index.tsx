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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay compliant and optimise your gaming operations with expert insights on GRC and EGM performance.
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
        <title>Assure - GRC Platform for Gaming Venues</title>
        <meta name="description" content="A purpose-built GRC platform tailored to licensed gaming venues." />
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
                alt="Assure" 
                className="h-8 w-auto"
              />
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link href="/features" className="text-gray-700 hover:text-gray-900">Features</Link>
              <Link href="/pricing" className="text-gray-700 hover:text-gray-900">Pricing</Link>
              <Link href="/documentation" className="text-gray-700 hover:text-gray-900">Documentation</Link>
              <Link href="/insights" className="text-gray-700 hover:text-gray-900">Insights</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Login
              </Link>
              <Link href="/contact" className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Involv Assure
            </h1>
            <p className="text-xl mb-4 font-medium">
              A risk and compliance team in your browser.
            </p>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              A purpose-built GRC platform tailored to licensed gaming venues. Map obligations, test controls, and stay audit-ready – without the bloat.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/login" className="bg-white text-blue-600 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
                Login to Assure
              </Link>
              <Link href="/contact" className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-blue-600 transition-colors">
                Request Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to get started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join gaming venues across Australia who trust Assure for their compliance needs.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/login" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
                Login
              </Link>
              <Link href="/contact" className="border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors">
                Contact Sales
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
                    alt="Assure" 
                    className="h-6 w-auto"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  A purpose-built GRC platform tailored to licensed gaming venues.
                </p>
                <p className="text-gray-500 text-xs mt-4">
                  Part of the Involv family
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-900">Product</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="/features" className="hover:text-gray-900">Features</Link></li>
                  <li><Link href="/pricing" className="hover:text-gray-900">Pricing</Link></li>
                  <li><Link href="/documentation" className="hover:text-gray-900">Documentation</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-900">Resources</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><Link href="/insights" className="hover:text-gray-900">Insights</Link></li>
                  <li><Link href="/case-studies" className="hover:text-gray-900">Case Studies</Link></li>
                  <li><Link href="/contact" className="hover:text-gray-900">Support</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-900">Involv</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="https://involv.com.au" className="hover:text-gray-900">Main Site</a></li>
                  <li><a href="https://primeedge.involv.com.au" className="hover:text-gray-900">PrimeEdge</a></li>
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

const features = [
  {
    title: 'Obligation Mapping',
    description: 'Automatically map your regulatory obligations and track compliance requirements across all areas of your venue.',
  },
  {
    title: 'Control Testing',
    description: 'Test and validate your compliance controls with automated workflows and evidence collection.',
  },
  {
    title: 'Audit Readiness',
    description: 'Stay audit-ready with comprehensive reporting and documentation that meets regulatory standards.',
  },
  {
    title: 'Risk Management',
    description: 'Identify, assess, and mitigate risks with tools designed specifically for gaming venues.',
  },
  {
    title: 'Compliance Dashboard',
    description: 'Get real-time visibility into your compliance status with intuitive dashboards and alerts.',
  },
  {
    title: 'Expert Support',
    description: 'Access guidance from compliance experts who understand the gaming industry inside and out.',
  },
]