import Head from 'next/head'

export default function Home() {
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
              <span className="text-2xl font-bold text-blue-600">Assure</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="/features" className="text-gray-700 hover:text-gray-900">Features</a>
              <a href="/pricing" className="text-gray-700 hover:text-gray-900">Pricing</a>
              <a href="/documentation" className="text-gray-700 hover:text-gray-900">Documentation</a>
              <a href="/insights" className="text-gray-700 hover:text-gray-900">Insights</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Login
              </a>
              <a href="/contact" className="border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-50 transition-colors">
                Contact
              </a>
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
              <a href="/login" className="bg-white text-blue-600 px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
                Login to Assure
              </a>
              <a href="/contact" className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-blue-600 transition-colors">
                Request Demo
              </a>
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
              <a href="/login" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors">
                Login
              </a>
              <a href="/contact" className="border border-gray-300 text-gray-700 px-6 py-3 rounded hover:bg-gray-50 transition-colors">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 border-t py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <span className="text-xl font-bold text-blue-600 mb-4 block">Assure</span>
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
                  <li><a href="/features" className="hover:text-gray-900">Features</a></li>
                  <li><a href="/pricing" className="hover:text-gray-900">Pricing</a></li>
                  <li><a href="/documentation" className="hover:text-gray-900">Documentation</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-4 text-gray-900">Resources</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><a href="/insights" className="hover:text-gray-900">Insights</a></li>
                  <li><a href="/case-studies" className="hover:text-gray-900">Case Studies</a></li>
                  <li><a href="/contact" className="hover:text-gray-900">Support</a></li>
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
                <a href="/privacy-policy" className="hover:text-gray-700">Privacy Policy</a>
                <a href="/terms-of-use" className="hover:text-gray-700">Terms of Use</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
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