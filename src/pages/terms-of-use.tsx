import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function TermsOfUse() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Terms of Use - Assure by Involv</title>
        <meta name="description" content="Terms of Use for Assure by Involv. Legal terms and conditions for using our website and services." />
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
        <Navigation currentPath={router.pathname} />

        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-[#1e40af]">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Terms of Use</span>
          </nav>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 border border-gray-200">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
              <p className="text-gray-600 text-sm italic">Last updated: 08 June 2025</p>
            </header>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                These Terms of Use ("Terms") apply to your use of the website located at{' '}
                <a href="https://assure.involv.com.au" className="text-[#1e40af] hover:text-blue-700 underline">
                  assure.involv.com.au
                </a>{' '}
                ("Site"), operated by <strong>Involv Pty Ltd</strong> (ACN 685 137 660) ("Involv", "we", "our" or "us"). By accessing or using this Site, you agree to be bound by these Terms.
              </p>

              <div className="bg-[#1e40af] bg-opacity-10 border border-[#1e40af] rounded-lg p-4 mb-8">
                <p className="text-[#1e40af] font-medium">
                  If you do not agree with these Terms, you must not use the Site.
                </p>
              </div>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Use of the Site</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This Site is provided for general informational purposes regarding our Involv|Assure governance, risk and compliance platform and related services. You may browse, view, and use the content solely for your own business or informational purposes, subject to these Terms.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You must not:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Use the Site for any unlawful, misleading, or malicious purpose;</li>
                  <li>Interfere with the operation of the Site or any server or network connected to it;</li>
                  <li>Attempt to gain unauthorised access to any part of the Site;</li>
                  <li>Use the Site to transmit or post any spam, viruses, or harmful code.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All content on the Site, including text, graphics, logos, icons, images, videos, and software, is owned or licensed by Involv and is protected under Australian intellectual property laws.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Except as expressly permitted under these Terms or applicable law, you must not reproduce, distribute, modify, publish, or create derivative works from any content without our prior written consent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Links to Other Sites</h2>
                <p className="text-gray-700 leading-relaxed">
                  This Site may contain links to external websites, including the main Involv website and other Involv brands such as <strong>Involv|PrimeEdge</strong> or <strong>Lane Consulting</strong>. These sites may be subject to their own terms and policies. We are not responsible for the content or practices of any third-party or linked websites.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Involv|Assure Platform Access</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Access to the Involv|Assure platform and its features may require:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Registration and creation of user accounts;</li>
                  <li>Acceptance of additional platform terms and conditions;</li>
                  <li>Payment of applicable subscription fees;</li>
                  <li>Compliance with our security and usage policies.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Platform-specific terms will be provided separately and will govern your use of the Involv|Assure software and services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. No Warranty</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>The Site and its content are provided "as is" and "as available";</li>
                  <li>We make no warranties or representations (express or implied) about the accuracy, completeness, reliability, or suitability of the content;</li>
                  <li>We do not guarantee uninterrupted access to the Site or that the Site will be free from viruses or defects.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  To the fullest extent permitted by law, Involv disclaims all liability for any direct, indirect, incidental, or consequential loss or damage (including loss of data or business interruption) arising from your use of, or reliance on, this Site or its content.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our collection and use of personal information is governed by our{' '}
                  <Link href="/privacy-policy" className="text-[#1e40af] hover:text-blue-700 underline font-semibold">
                    Privacy Policy
                  </Link>. By using the Site, you consent to our handling of your information in accordance with that policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to These Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update these Terms at any time by posting the revised version on this page. Your continued use of the Site after any changes indicates your acceptance of the revised Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms are governed by the laws of <strong>Victoria, Australia</strong>, and any disputes will be subject to the non-exclusive jurisdiction of the courts of that State.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions about these Terms, please contact:
                </p>
                <div className="bg-white rounded-lg p-6 border border-gray-300">
                  <p className="text-gray-900 font-semibold mb-2">Involv Pty Ltd</p>
                  <p className="text-gray-700">
                    Email:{' '}
                    <a href="mailto:legal@involv.com.au" className="text-[#1e40af] hover:text-blue-700 underline">
                      legal@involv.com.au
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}