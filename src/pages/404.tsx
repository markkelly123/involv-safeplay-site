// src/pages/404.tsx
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found – SafePlay</title>
        <meta
          name="description"
          content="The page you're looking for could not be found. Return to SafePlay or explore safer-gambling features, insights, and case studies."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        {/* Favicons */}
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
                <i className="lni lni-emoji-monocle text-6xl text-[#1E4D8F]"></i>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-gray-200 mb-4">404</h1>
            </div>

            {/* Error Message */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
              <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
                The page you're looking for doesn't exist. It may have been moved or the URL might be incorrect.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/"
                className="bg-[#1E4D8F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#163B6D] transition-colors flex items-center"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Looking for something specific?</h3>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Features */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="lni lni-rocket-6 text-2xl text-[#1E4D8F]"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">SafePlay Features</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Explore real-time safer-gambling monitoring for pubs & clubs
                  </p>
                  <Link href="/features" className="text-[#1E4D8F] hover:text-[#163B6D] font-medium text-sm">
                    View Features →
                  </Link>
                </div>

                {/* Insights */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="lni lni-bulb-1 text-2xl text-[#1E4D8F]"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Insights</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Articles on safer gambling, RGOs, and venue best practice
                  </p>
                  <Link href="/insights" className="text-[#1E4D8F] hover:text-[#163B6D] font-medium text-sm">
                    Read Insights →
                  </Link>
                </div>

                {/* Case Studies */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <i className="lni lni-notebook-2 text-2xl text-[#1E4D8F]"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Case Studies</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    See how venues strengthen safer-gambling outcomes with SafePlay
                  </p>
                  <Link href="/case-studies" className="text-[#1E4D8F] hover:text-[#163B6D] font-medium text-sm">
                    Browse Case Studies →
                  </Link>
                </div>
              </div>
            </div>

            {/* Popular Pages */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Pages</h3>
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
                  href="/insights"
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                >
                  Insights
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors text-sm"
                >
                  Contact
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

        <Footer />
      </div>
    </>
  )
}