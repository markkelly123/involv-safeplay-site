import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found - Assure by Involv</title>
        <meta name="description" content="The page you're looking for could not be found. Return to Assure homepage or explore our compliance platform features." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="bg-white text-gray-900 font-sans min-h-screen">
        <Navigation />

        {/* 404 Content */}
        <div className="max-w-4xl mx-auto px-4 py-20">
          <div className="text-center">
            {/* 404 Visual */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-blue-50 rounded-full mb-6">
                <i className="lni lni-emoji-monocle text-6xl text-[#1e40af]"></i>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-gray-200 mb-4">404</h1>
            </div>

            {/* Error Message */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Page Not Found
              </h2>
              <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                href="/" 
                className="bg-[#1e40af] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
              >
                <i className="lni lni-home-1 mr-2"></i>
                Back to Homepage
              </Link>
              <Link 
                href="/contact" 
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center"
              >
                <i className="lni lni-envelope-2 mr-2"></i>
                Contact Support
              </Link>
            </div>

            {/* Helpful Links */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Looking for something specific?
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Features */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="lni lni-rocket-6 text-2xl text-[#1e40af]"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Platform Features</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Explore Assure's compliance and risk management tools
                  </p>
                  <Link 
                    href="/features" 
                    className="text-[#1e40af] hover:text-blue-700 font-medium text-sm"
                  >
                    View Features →
                  </Link>
                </div>

                {/* Pricing */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="lni lni-plan text-2xl text-[#1e40af]"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pricing Plans</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Find the right Assure plan for your venue
                  </p>
                  <Link 
                    href="/pricing" 
                    className="text-[#1e40af] hover:text-blue-700 font-medium text-sm"
                  >
                    View Pricing →
                  </Link>
                </div>

                {/* Support */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="lni lni-question-mark-circle text-2xl text-[#1e40af]"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Get Help</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Need assistance with compliance or the platform?
                  </p>
                  <Link 
                    href="/contact" 
                    className="text-[#1e40af] hover:text-blue-700 font-medium text-sm"
                  >
                    Contact Us →
                  </Link>
                </div>
              </div>
            </div>

            {/* Search Suggestions */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Popular Pages
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                <Link 
                  href="/features" 
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                >
                  Features
                </Link>
                <Link 
                  href="/case-studies" 
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                >
                  Case Studies
                </Link>
                <Link 
                  href="/pricing" 
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                >
                  Pricing
                </Link>
                <Link 
                  href="/insights" 
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                >
                  Insights
                </Link>
                <a 
                  href="https://involv.com.au" 
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                >
                  Involv Main Site
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}