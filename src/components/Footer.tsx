import Link from 'next/link'

// Footer component to replace all your existing footer sections
export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-12 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <a 
                href="https://involv.com.au" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img src="/logo-involv.svg" alt="Involv" className="h-6 w-auto" />
              </a>
            </div>
            <div className="text-gray-600 text-sm mb-6">
              <p>Compliance made simple.</p>
              <p>Gaming made smarter.</p>
              <p>Built for Australian pubs and clubs.</p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/involvgroup/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-lg hover:bg-[#1e40af] transition-colors group"
                aria-label="Follow Involv on LinkedIn"
              >
                <i className="lni lni-linkedin text-2xl text-gray-600 group-hover:text-white"></i>
              </a>
              <a 
                href="https://www.youtube.com/@InvolvGroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-lg hover:bg-[#1e40af] transition-colors group"
                aria-label="Subscribe to Involv on YouTube"
              >
                <i className="lni lni-youtube text-2xl text-gray-600 group-hover:text-white"></i>
              </a>
              <a 
                href="https://www.facebook.com/InvolvGroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-lg hover:bg-[#1e40af] transition-colors group"
                aria-label="Follow Involv on Facebook"
              >
                <i className="lni lni-facebook text-2xl text-gray-600 group-hover:text-white"></i>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/features" className="hover:text-[#1e40af] transition-colors">AML Advisory</Link></li>
              <li><Link href="/features" className="hover:text-[#1e40af] transition-colors">Risk & Compliance</Link></li>
              <li><Link href="/features" className="hover:text-[#1e40af] transition-colors">Gaming Performance</Link></li>
            </ul>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/features" className="hover:text-[#1e40af] transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-[#1e40af] transition-colors">Pricing</Link></li>
              <li><Link href="/case-studies" className="hover:text-[#1e40af] transition-colors">Case Studies</Link></li>
              <li><Link href="/documentation" className="hover:text-[#1e40af] transition-colors">Documentation</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="https://involv.com.au/about" className="hover:text-[#1e40af] transition-colors">About Involv</a></li>
              <li><Link href="/insights" className="hover:text-[#1e40af] transition-colors">Insights</Link></li>
              <li><Link href="/faqs" className="hover:text-[#1e40af] transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-[#1e40af] transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; 2025 Involv. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-[#1e40af] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-[#1e40af] transition-colors">Terms of Use</Link>
            <Link href="/disclaimer" className="hover:text-[#1e40af] transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}