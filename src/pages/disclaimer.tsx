import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function Disclaimer() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Disclaimer - Assure by Involv</title>
        <meta name="description" content="Legal disclaimer for Assure by Involv. Important information about our governance, risk, and compliance platform, advisory services, and website content." />
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
            <span className="text-gray-900">Disclaimer</span>
          </nav>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 border border-gray-200">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">Disclaimer</h1>
              <p className="text-gray-600 text-sm italic">Last updated: 08 June 2025</p>
            </header>

            <div className="bg-red-50 border border-red-300 rounded-lg p-4 mb-8">
              <p className="text-red-700 font-medium text-sm">
                <strong>Important:</strong> This disclaimer contains important information about the limitations of the Involv|Assure platform and services. Please read carefully before using our platform or relying on any information provided.
              </p>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-8">
                This disclaimer applies to all services provided by <strong>Involv Pty Ltd</strong> (ACN 685 137 660) ("Involv", "we", "our", "us"), including the Involv|Assure governance, risk, and compliance (GRC) platform, advisory services, and content available on our website at{' '}
                <a href="https://assure.involv.com.au" className="text-[#1e40af] hover:text-blue-700 underline">
                  assure.involv.com.au
                </a>.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Information Only</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The information provided through the Involv|Assure platform and this website is for general informational purposes only. While we strive to provide accurate and up-to-date compliance information, we make no representations or warranties of any kind, express or implied, about:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>The completeness, accuracy, reliability, or suitability of any compliance information</li>
                  <li>The availability of the Involv|Assure platform or related services</li>
                  <li>That the platform will meet your specific compliance requirements</li>
                  <li>That any software or systems will be error-free or uninterrupted</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Not Legal or Professional Advice</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Important:</strong> Nothing provided through the Involv|Assure platform or this website constitutes legal, financial, accounting, or other professional advice. Our GRC tools and advisory services are provided based on our industry experience and expertise, but:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>You should not rely solely on Involv|Assure for legal or regulatory compliance decisions</li>
                  <li>Regulatory requirements vary by jurisdiction and change frequently</li>
                  <li>You should always seek independent legal and professional advice</li>
                  <li>We do not provide legal advice</li>
                </ul>
                <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Compliance Responsibility:</strong> Ultimate responsibility for regulatory compliance rests with you and your organisation. Involv|Assure is designed to assist and guide, not replace your legal and compliance obligations.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Gaming and Regulatory Matters</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Involv|Assure GRC platform provides tools for gaming, liquor, and regulatory compliance matters. Please note:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Gaming and liquor laws are complex and vary significantly between Australian states and territories</li>
                  <li>Regulatory requirements change frequently and platform content may not reflect the most recent changes</li>
                  <li>Licence conditions and obligations are specific to each venue and jurisdiction</li>
                  <li>You must always verify current requirements with relevant regulatory authorities</li>
                  <li>We recommend engaging qualified legal counsel for specific compliance matters</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Involv|Assure Platform and Technology Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Involv|Assure compliance platform is provided on an "as is" basis. While we strive for reliability and accuracy:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>The platform may contain bugs, errors, or experience downtime</li>
                  <li>Compliance data accuracy depends on the quality of inputs and integrations</li>
                  <li>Risk assessments and compliance recommendations are based on available data and algorithms</li>
                  <li>Compliance outcomes and improvements are not guaranteed</li>
                  <li>You should maintain independent records and backup compliance systems</li>
                  <li>Platform features and functionality may change without notice</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. AML and Financial Crime Compliance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Involv|Assure includes tools for Anti-Money Laundering (AML) and financial crime compliance. Important limitations include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>AML requirements are complex and subject to frequent regulatory updates</li>
                  <li>Transaction monitoring and reporting tools are aids, not replacements for human oversight</li>
                  <li>AUSTRAC and other regulatory requirements must be verified independently</li>
                  <li>Customer due diligence processes require human judgment and verification</li>
                  <li>Suspicious activity detection depends on data quality and algorithm performance</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Content and Integrations</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Involv|Assure platform may integrate with or reference third-party systems, databases, or information sources. We do not endorse, control, or take responsibility for the content, accuracy, or practices of any third-party services or integrations. Use of third-party integrations is at your own risk.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the fullest extent permitted by Australian law, Involv disclaims all liability for any loss or damage, whether direct, indirect, incidental, special, or consequential, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Business interruption or lost profits</li>
                  <li>Regulatory penalties or enforcement action</li>
                  <li>Data loss or corruption</li>
                  <li>Reliance on platform information, alerts, or recommendations</li>
                  <li>Failed compliance audits or regulatory breaches</li>
                  <li>Use of the Involv|Assure platform or related services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Accuracy and Platform Performance</h2>
                <p className="text-gray-700 leading-relaxed">
                  While we strive to maintain high standards for the Involv|Assure platform, data accuracy and system performance depend on numerous factors including user inputs, third-party integrations, and system maintenance. We cannot guarantee continuous availability, complete data accuracy, or error-free operation of the platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Industry Experience Disclaimer</h2>
                <p className="text-gray-700 leading-relaxed">
                  While our team has extensive experience in the gaming, AML, and risk and compliance industry, past performance and experience do not guarantee future results. Industry conditions, regulations, and best practices evolve continuously, and strategies that were effective in the past may not be suitable for current circumstances.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. No Warranty</h2>
                <p className="text-gray-700 leading-relaxed">
                  We provide the Involv|Assure platform and related services without warranty of any kind. We specifically disclaim all warranties, whether express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Updates and Changes</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this disclaimer from time to time without notice. Continued use of the Involv|Assure GRC platform or website after any changes constitutes acceptance of the updated disclaimer. We recommend reviewing this page periodically.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Australian Consumer Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  Nothing in this disclaimer excludes, restricts, or modifies any consumer rights or remedies that cannot be excluded, restricted, or modified under the Australian Consumer Law or other applicable legislation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have questions about this disclaimer or need clarification about the Involv|Assure platform, please contact us:
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

              <div className="bg-blue-50 border border-[#1e40af] rounded-lg p-6 mt-8">
                <p className="text-[#1e40af] text-sm">
                  <strong>Remember:</strong> This disclaimer is part of our{' '}
                  <Link href="/terms-of-use" className="underline hover:text-blue-700">
                    Terms of Use
                  </Link>. By using the Assure platform or website, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
                </p>
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