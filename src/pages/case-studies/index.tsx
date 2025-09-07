// src/pages/case-studies/index.tsx
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { useState } from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { getCaseStudies, CaseStudy, buildImageUrl } from '../../../lib/sanity'

interface CaseStudiesPageProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudies({ caseStudies }: CaseStudiesPageProps) {
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [displayCount, setDisplayCount] = useState(9)

  // Unique filters (guard against undefined)
  const industries = Array.from(new Set(caseStudies.map(cs => cs.industry).filter(Boolean))).sort()
  const categories = Array.from(
    new Set(
      caseStudies.flatMap(cs => (cs.categories?.map(cat => cat.title) || [])).filter(Boolean)
    )
  ).sort()

  // Filter logic
  const filteredCaseStudies = caseStudies.filter(cs => {
    const matchesIndustry = selectedIndustry === 'all' || cs.industry === selectedIndustry
    const matchesCategory =
      selectedCategory === 'all' || cs.categories?.some(cat => cat.title === selectedCategory)
    const needle = searchTerm.trim().toLowerCase()
    const matchesSearch =
      needle === '' ||
      cs.title.toLowerCase().includes(needle) ||
      (cs.client || '').toLowerCase().includes(needle) ||
      (cs.excerpt || '').toLowerCase().includes(needle)
    return matchesIndustry && matchesCategory && matchesSearch
  })

  return (
    <>
      <Head>
        <title>Case Studies – SafePlay | Real Results in Safer Gaming</title>
        <meta
          name="description"
          content="See how SafePlay helps Australian pubs & clubs detect risk sooner, support RGOs in-venue, and create an auditable record of care."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Case Studies</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Case Studies
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Real outcomes from venues using <span className="font-semibold text-[#1e40af]">SafePlay</span> to
                surface risk earlier, support respectful RGO interventions, and build audit-ready records of care.
              </p>

              {/* Quick Stats */}
              {caseStudies.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#1e40af] mb-2">{caseStudies.length}+</div>
                    <div className="text-gray-600">Published Stories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#1e40af] mb-2">Across Australia</div>
                    <div className="text-gray-600">Clubs & Hotels</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Search & Filters */}
        {caseStudies.length > 0 && (
          <section className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                {/* Search */}
                <div className="relative flex-1 max-w-md w-full">
                  <i className="lni lni-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    placeholder="Search case studies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-[#1e40af] focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:ring-opacity-20"
                  />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap gap-4">
                  {/* Industry */}
                  <div className="relative">
                    <i className="lni lni-funnel absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    <select
                      value={selectedIndustry}
                      onChange={(e) => setSelectedIndustry(e.target.value)}
                      className="pl-10 pr-8 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-[#1e40af] focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:ring-opacity-20 appearance-none cursor-pointer"
                    >
                      <option value="all">All Industries</option>
                      {industries.map(ind => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>

                  {/* Category */}
                  <div className="relative">
                    <i className="lni lni-tag absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="pl-10 pr-8 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:border-[#1e40af] focus:outline-none focus:ring-2 focus:ring-[#1e40af] focus:ring-opacity-20 appearance-none cursor-pointer"
                    >
                      <option value="all">All Categories</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-6 text-gray-500 text-sm">
                Showing {Math.min(displayCount, filteredCaseStudies.length)} of {filteredCaseStudies.length} case studies
              </div>
            </div>
          </section>
        )}

        {/* Grid / Empty States */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {caseStudies.length === 0 ? (
            <div className="text-center py-16">
              <div className="bg-gray-50 rounded-lg p-12 max-w-lg mx-auto">
                <i className="lni lni-book-open text-6xl text-gray-400 mb-6"></i>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">No case studies yet</h3>
                <p className="text-gray-600 leading-relaxed">
                  We’re preparing stories showing how SafePlay helps teams identify risk earlier and act with confidence.
                </p>
              </div>
            </div>
          ) : filteredCaseStudies.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {filteredCaseStudies.slice(0, displayCount).map((cs) => (
                  <article key={cs._id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow overflow-hidden">
                    {/* Image */}
                    {cs.mainImage?.asset?.url ? (
                      <div className="aspect-video w-full bg-gray-100">
                        <img
                          src={buildImageUrl(cs.mainImage.asset.url, 400, 225, 75)}
                          alt={cs.mainImage.alt || cs.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video w-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
                        <i className="lni lni-notepad text-4xl text-blue-400"></i>
                      </div>
                    )}

                    <div className="p-6">
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {cs.industry && (
                          <span className="bg-[#1e40af] text-white px-2 py-1 rounded text-xs font-medium">
                            {cs.industry}
                          </span>
                        )}
                        {cs.categories?.slice(0, 2).map((cat) => (
                          <span key={cat._id} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                            {cat.title}
                          </span>
                        ))}
                      </div>

                      {/* Client & Title */}
                      <div className="mb-3">
                        {cs.client && (
                          <div className="text-[#1e40af] text-sm font-medium mb-1 flex items-center">
                            <i className="lni lni-users mr-1"></i>
                            {cs.client}
                          </div>
                        )}
                        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                          <Link href={`/case-studies/${cs.slug.current}`} className="hover:text-[#1e40af] transition-colors">
                            {cs.title}
                          </Link>
                        </h3>
                      </div>

                      {/* Excerpt */}
                      {cs.excerpt && (
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {cs.excerpt}
                        </p>
                      )}

                      {/* Challenge */}
                      {cs.challenge && (
                        <div className="mb-4">
                          <div className="flex items-center text-xs text-gray-500 mb-1">
                            <i className="lni lni-target mr-1"></i>
                            Challenge
                          </div>
                          <p className="text-gray-600 text-xs line-clamp-2">
                            {cs.challenge}
                          </p>
                        </div>
                      )}

                      {/* CTA */}
                      <Link
                        href={`/case-studies/${cs.slug.current}`}
                        className="inline-flex items-center text-[#1e40af] hover:text-blue-700 transition-colors text-sm font-medium"
                      >
                        Read full case study
                        <i className="lni lni-arrow-right ml-1"></i>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              {filteredCaseStudies.length > displayCount && (
                <div className="text-center">
                  <button
                    onClick={() => setDisplayCount(prev => prev + 9)}
                    className="bg-[#1e40af] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Load more
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="bg-gray-50 rounded-lg p-8 max-w-md mx-auto">
                <i className="lni lni-notepad text-4xl text-gray-400 mb-4"></i>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">No matches</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Try adjusting your search or filters to see more results.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedIndustry('all')
                    setSelectedCategory('all')
                  }}
                  className="text-[#1e40af] hover:text-blue-700 transition-colors text-sm font-medium"
                >
                  Clear all filters
                </button>
              </div>
            </div>
          )}
        </section>

        {/* CTA – show when we have content */}
        {caseStudies.length > 0 && (
          <section className="bg-[#1e40af] py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to write your success story?</h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Join venues using SafePlay to elevate safer gaming with real-time intelligence and auditable care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-[#1e40af] px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium inline-flex items-center justify-center"
                >
                  <i className="lni lni-rocket-6 mr-2"></i>
                  Get started
                </Link>
                <Link
                  href="/features"
                  className="bg-transparent border border-blue-300 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium inline-flex items-center justify-center"
                >
                  <i className="lni lni-cog mr-2"></i>
                  Explore features
                </Link>
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    // Switch to SafePlay content key/space
    const caseStudies = await getCaseStudies('safeplay')
    return {
      props: { caseStudies: caseStudies || [] },
      revalidate: 300,
    }
  } catch (error) {
    console.error('Error fetching SafePlay case studies:', error)
    return {
      props: { caseStudies: [] },
      revalidate: 300,
    }
  }
}