import Link from 'next/link'
import { useState } from 'react'

interface NavigationProps {
  currentPath?: string
}

export default function Navigation({ currentPath = '' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActiveLink = (href: string) => {
    if (href === '/' && currentPath === '/') return true
    if (href !== '/' && currentPath.startsWith(href)) return true
    return false
  }

  const getLinkClasses = (href: string, isDropdownItem = false) => {
    const baseClasses = isDropdownItem 
      ? "block px-4 py-2 text-sm hover:bg-gray-100 rounded transition-colors"
      : "hover:text-[#1e40af] transition-colors"
    
    const activeClasses = isActiveLink(href) 
      ? isDropdownItem 
        ? "text-[#1e40af] bg-gray-100" 
        : "text-[#1e40af] font-medium"
      : isDropdownItem 
        ? "text-gray-700 hover:text-[#1e40af]" 
        : "text-gray-700"
    
    return `${baseClasses} ${activeClasses}`
  }

  return (
    <>
      {/* Header */}
      <header className="bg-white text-gray-700 border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
          <Link href="/" className="flex items-center">
            <img src="/logo-involv-assure2.svg" alt="Involv Assure" className="h-6 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 text-sm space-x-8">
            {/* Features */}
            <Link href="/features" className={getLinkClasses('/features')}>
              Features
            </Link>

            {/* Case Studies */}
            <Link href="/case-studies" className={getLinkClasses('/case-studies')}>
              Case Studies
            </Link>

            {/* Pricing */}
            <Link href="/pricing" className={getLinkClasses('/pricing')}>
              Pricing
            </Link>

            {/* Insights */}
            <Link href="/insights" className={getLinkClasses('/insights')}>
              Insights
            </Link>

          </nav>

          {/* Right Side - About, Contact and Login */}
          <div className="flex items-center text-sm">
            <div className="hidden lg:flex space-x-6">
              <Link href="/about" className={getLinkClasses('/about')}>
                About
              </Link>
              <Link href="/contact" className={getLinkClasses('/contact')}>
                Contact
              </Link>
            </div>
            <Link href="/login" className="ml-[60px] text-sm font-medium bg-[#1e40af] text-white px-4 py-1.5 rounded hover:bg-blue-700 transition">
              Login
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden ml-4 p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-2">
              {/* Features */}
              <Link href="/features" className={`block py-2 ${getLinkClasses('/features')}`}>
                Features
              </Link>

              {/* Case Studies */}
              <Link href="/case-studies" className={`block py-2 ${getLinkClasses('/case-studies')}`}>
                Case Studies
              </Link>

              {/* Pricing */}
              <Link href="/pricing" className={`block py-2 ${getLinkClasses('/pricing')}`}>
                Pricing
              </Link>

              {/* Insights */}
              <Link href="/insights" className={`block py-2 ${getLinkClasses('/insights')}`}>
                Insights
              </Link>

              {/* Documentation */}
              <Link href="/documentation" className={`block py-2 ${getLinkClasses('/documentation')}`}>
                Documentation
              </Link>

              {/* FAQs */}
              <Link href="/faqs" className={`block py-2 ${getLinkClasses('/faqs')}`}>
                FAQs
              </Link>

              {/* About */}
              <Link href="/about" className={`block py-2 ${getLinkClasses('/about')}`}>
                About
              </Link>

              {/* Contact */}
              <Link href="/contact" className={`block py-2 ${getLinkClasses('/contact')}`}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}