import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Privacy Policy - Assure by Involv</title>
        <meta name="description" content="Privacy Policy for Assure by Involv. Learn how we collect, use, and protect your personal information in accordance with Australian privacy laws." />
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
            <span className="text-gray-900">Privacy Policy</span>
          </nav>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 border border-gray-200">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
              <p className="text-gray-600 text-sm italic">Last updated: 2 June 2025</p>
            </header>

            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Involv Pty Ltd (ACN 685 137 660) ("Involv", "we", "our", "us") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose and manage your personal information in accordance with the <strong>Privacy Act 1988 (Cth)</strong> and the <strong>Australian Privacy Principles (APPs)</strong>.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                This policy applies to the <strong>Assure website</strong> at{' '}
                <a href="https://assure.involv.com.au" className="text-[#1e40af] hover:text-blue-700 underline">
                  https://assure.involv.com.au
                </a>{' '}
                and to all personal information we collect through our Assure platform and services, including from clients, prospective clients, subscribers, and visitors to our site.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Involv Pty Ltd also operates other branded services, including:
              </p>
              <ul className="list-disc list-inside mb-6 text-gray-700 space-y-1">
                <li><strong>Involv Corporate</strong> (involv.com.au)</li>
                <li><strong>Involv | PrimeEdge</strong> (primeedge.involv.com.au)</li>
                <li><strong>Lane Consulting</strong> (lane.involv.com.au)</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-8">
                While these are all part of Involv Pty Ltd, they may operate separate websites or applications with their own privacy practices. If you interact directly with those sites, we encourage you to review their respective privacy policies.
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Personal Information We Collect</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect the following types of personal information:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Contact information</strong>: your name, business name, email address, phone number.</li>
                  <li><strong>Professional details</strong>: your job title, company, and business interests related to compliance and gaming operations.</li>
                  <li><strong>Platform usage data</strong>: activity within the Assure platform, compliance records, risk assessments (when using our services).</li>
                  <li><strong>Website interaction data</strong>: pages visited, time spent, IP address, browser type (via cookies and analytics tools).</li>
                  <li><strong>Information submitted via forms</strong>: enquiries, demo bookings, newsletter subscriptions, feedback.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We do not collect sensitive information unless it is necessary for our compliance services and you have consented.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Collect Personal Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect personal information when you:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Fill out a form on our website (e.g. contact, demo request, newsletter subscription);</li>
                  <li>Register for and use the Assure platform;</li>
                  <li>Engage with us by email, phone, or at events;</li>
                  <li>Use our compliance and risk management services;</li>
                  <li>Browse our website, where data may be collected via cookies and third-party analytics tools.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Why We Collect Your Personal Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect, hold, and use your information to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Provide and improve our Assure platform and compliance services;</li>
                  <li>Respond to your enquiries and manage our relationship with you;</li>
                  <li>Deliver compliance monitoring, risk assessments, and regulatory reporting services;</li>
                  <li>Send you relevant updates, compliance alerts, and thought-leadership content (you can opt out anytime via clearly identifiable unsubscribe mechanisms);</li>
                  <li>Conduct market research and improve our platform experience;</li>
                  <li>Comply with our legal obligations and assist with your compliance requirements.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Store and Secure Personal Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your personal information is stored in secure systems with enterprise-grade security measures and is accessible only to authorised personnel. We take reasonable steps to protect it from misuse, loss, unauthorised access, modification, or disclosure.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a compliance platform serving the gaming industry, we implement additional security measures including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li>256-bit SSL encryption for data transmission;</li>
                  <li>Regular security audits and penetration testing;</li>
                  <li>Role-based access controls;</li>
                  <li>Data backup and disaster recovery procedures.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We may store data using reputable third-party providers, some of whom may be located overseas (e.g. cloud service providers). Where this occurs, we take reasonable steps to ensure your information is handled in accordance with the APPs.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Disclosure of Personal Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may disclose your personal information to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Our employees, contractors, and service providers;</li>
                  <li>Third-party service providers used to support our platform and communications (e.g. email services, analytics platforms, cloud infrastructure);</li>
                  <li>Regulatory bodies when required for compliance reporting (only with your consent or as legally required);</li>
                  <li>Legal, accounting, or professional advisors (only where required);</li>
                  <li>Law enforcement or government bodies when legally required.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We do not sell your personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Analytics</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and analytics tools (such as Google Analytics) to improve your experience and analyse website and platform usage. Cookies do not identify you personally but help us understand behaviour patterns and improve our services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You can manage or disable cookies in your browser settings. Note that disabling cookies may affect some functionality of the Assure platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Accessing and Correcting Your Personal Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  You may request access to, or correction of, your personal information at any time. Contact us at{' '}
                  <a href="mailto:privacy@involv.com.au" className="text-[#1e40af] hover:text-blue-700 underline">
                    privacy@involv.com.au
                  </a>{' '}
                  and we will respond within a reasonable timeframe. For platform-specific data, you may also manage certain information directly through your Assure account settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Complaints</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you believe we have breached your privacy, please contact us at{' '}
                  <a href="mailto:privacy@involv.com.au" className="text-[#1e40af] hover:text-blue-700 underline">
                    privacy@involv.com.au
                  </a>. We take complaints seriously and will investigate. If you are not satisfied with our response, you can contact the{' '}
                  <strong>Office of the Australian Information Commissioner (OAIC)</strong> at{' '}
                  <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#1e40af] hover:text-blue-700 underline">
                    www.oaic.gov.au
                  </a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. If you are an Assure platform user, we may also notify you of significant changes via email or platform notifications.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For any questions or concerns regarding your privacy or this policy, contact us at:
                </p>
                <div className="bg-white rounded-lg p-6 border border-gray-300">
                  <p className="text-gray-900 font-semibold mb-2">Privacy Officer</p>
                  <p className="text-gray-700 mb-1">Involv Pty Ltd</p>
                  <p className="text-gray-700">
                    Email:{' '}
                    <a href="mailto:privacy@involv.com.au" className="text-[#1e40af] hover:text-blue-700 underline">
                      privacy@involv.com.au
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