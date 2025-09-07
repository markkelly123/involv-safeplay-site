// src/pages/case-studies/[slug].tsx
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { getCaseStudies, getCaseStudy, CaseStudy, buildImageUrl } from '../../../lib/sanity'
import { PortableText } from '@portabletext/react'

interface CaseStudyDetailProps {
  caseStudy: CaseStudy
}

// Portable Text components for rich content rendering
const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      const url = value?.asset?.url
      if (!url) return null
      return (
        <div className="my-8">
          <img
            src={buildImageUrl(url, 800, 450, 80)}
            alt={value?.alt || ''}
            className="w-full rounded-lg"
          />
          {value?.caption && (
            <p className="text-gray-500 text-sm mt-2 text-center italic">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold mb-4 text-gray-900">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">{children}</h3>,
    normal: ({ children }: any) => <p className="text-gray-600 mb-4 leading-relaxed">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-[#1E4D8F] pl-6 my-6 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1E4D8F] hover:text-[#163B6D] transition-colors underline"
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => <strong className="font-semibold text-gray-900">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-600">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-600">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="mb-1">{children}</li>,
    number: ({ children }: any) => <li className="mb-1">{children}</li>,
  },
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  const title = `${caseStudy.title} - ${caseStudy.client || 'SafePlay'} | SafePlay Case Study`
  const desc =
    caseStudy.excerpt ||
    `How SafePlay helped ${caseStudy.client || 'an Australian venue'} improve safer gambling outcomes in ${caseStudy.industry || 'their venue'}.`
  const ogImage = caseStudy.mainImage?.asset?.url
    ? buildImageUrl(caseStudy.mainImage.asset.url, 1200, 630, 80)
    : undefined

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph */}
        <meta property="og:title" content={`${caseStudy.title} - ${caseStudy.client || 'SafePlay'}`} />
        <meta property="og:description" content={desc} />
        <meta property="og:type" content="article" />
        {ogImage && <meta property="og:image" content={ogImage} />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${caseStudy.title} - ${caseStudy.client || 'SafePlay'}`} />
        <meta name="twitter:description" content={desc} />
        {ogImage && <meta name="twitter:image" content={ogImage} />}
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />

        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/case-studies" className="hover:text-gray-700">Case Studies</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 line-clamp-1">{caseStudy.title}</span>
          </nav>
        </div>

        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {caseStudy.industry && (
                <span className="bg-[#1E4D8F] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                  <i className="lni lni-apartment mr-1"></i>
                  {caseStudy.industry}
                </span>
              )}
              {caseStudy.publishedAt && (
                <span className="text-gray-500 text-sm flex items-center">
                  <i className="lni lni-calendar mr-1"></i>
                  {new Date(caseStudy.publishedAt).toLocaleDateString('en-AU', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              )}
            </div>

            {/* Client */}
            {caseStudy.client && (
              <div className="text-[#1E4D8F] text-lg font-medium mb-3 flex items-center">
                <i className="lni lni-users mr-2"></i>
                {caseStudy.client}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
              {caseStudy.title}
            </h1>

            {/* Excerpt */}
            {caseStudy.excerpt && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {caseStudy.excerpt}
              </p>
            )}

            {/* Categories/Tags */}
            {(caseStudy.categories?.length || caseStudy.tags?.length) ? (
              <div className="flex flex-wrap gap-2 mb-8">
                {caseStudy.categories?.map((category) => (
                  <span key={category._id} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {category.title}
                  </span>
                ))}
                {caseStudy.tags?.map((tag) => (
                  <span key={tag} className="bg-white border border-gray-300 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}

            {/* Main Image */}
            {caseStudy.mainImage?.asset?.url && (
              <div className="mb-12">
                <img
                  src={buildImageUrl(caseStudy.mainImage.asset.url, 800, 450, 80)}
                  alt={caseStudy.mainImage.alt || caseStudy.title}
                  className="w-full rounded-lg shadow-xl"
                />
                {caseStudy.mainImage.alt && (
                  <p className="text-gray-500 text-sm mt-3 text-center italic">
                    {caseStudy.mainImage.alt}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Summary cards */}
        {(caseStudy.challenge || caseStudy.solution || caseStudy.results) && (
          <section className="bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Challenge */}
                {caseStudy.challenge && (
                  <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 p-2 rounded-lg mr-3">
                        <i className="lni lni-target text-red-600 text-xl"></i>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Challenge</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{caseStudy.challenge}</p>
                  </div>
                )}

                {/* Solution */}
                {caseStudy.solution && (
                  <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        <i className="lni lni-bulb text-blue-600 text-xl"></i>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Solution</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{caseStudy.solution}</p>
                  </div>
                )}

                {/* Results */}
                {caseStudy.results && (
                  <div className="bg-white rounded-lg p-6 shadow-sm border">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 p-2 rounded-lg mr-3">
                        <i className="lni lni-checkmark-circle text-green-600 text-xl"></i>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Results</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{caseStudy.results}</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Body */}
        {caseStudy.body && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="prose prose-lg max-w-none">
              <PortableText value={caseStudy.body} components={portableTextComponents} />
            </div>
          </section>
        )}

        {/* Detailed blocks (optional if you also include in body) */}
        {(caseStudy.challenge || caseStudy.solution || caseStudy.results) && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            <div className="space-y-12">
              {caseStudy.challenge && (
                <div className="bg-white rounded-lg p-8 shadow-sm border">
                  <div className="flex items-center mb-6">
                    <div className="bg-red-100 p-3 rounded-lg mr-4">
                      <i className="lni lni-target text-red-600 text-2xl"></i>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
                  </div>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>{caseStudy.challenge}</p>
                  </div>
                </div>
              )}

              {caseStudy.solution && (
                <div className="bg-white rounded-lg p-8 shadow-sm border">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <i className="lni lni-bulb text-blue-600 text-2xl"></i>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Our Solution</h2>
                  </div>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>{caseStudy.solution}</p>
                  </div>
                </div>
              )}

              {caseStudy.results && (
                <div className="bg-white rounded-lg p-8 shadow-sm border">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-100 p-3 rounded-lg mr-4">
                      <i className="lni lni-checkmark-circle text-green-600 text-2xl"></i>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">The Results</h2>
                  </div>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    <p>{caseStudy.results}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Jurisdictions */}
            {Array.isArray(caseStudy.jurisdictions) && caseStudy.jurisdictions.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Jurisdictions</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.jurisdictions.map((j: string, i: number) => (
                    <span key={`${j}-${i}`} className="bg-[#1E4D8F] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {j}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Footer CTA */}
        <section className="bg-[#1E4D8F] py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <Link
                href="/case-studies"
                className="inline-flex items-center text-blue-100 hover:text-white transition-colors font-medium"
              >
                <i className="lni lni-arrow-left mr-2"></i>
                Back to Case Studies
              </Link>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-[#1E4D8F] px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center inline-flex items-center justify-center"
                >
                  <i className="lni lni-rocket-6 mr-2"></i>
                  Start Your Success Story
                </Link>
                <Link
                  href="/features"
                  className="bg-transparent border border-blue-300 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium text-center inline-flex items-center justify-center"
                >
                  <i className="lni lni-cog mr-2"></i>
                  Explore Features
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Build SafePlay paths
  const caseStudies = await getCaseStudies('safeplay')
  const paths =
    (caseStudies || []).map((cs: CaseStudy) => ({
      params: { slug: cs.slug.current },
    })) || []

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug || typeof params.slug !== 'string') {
    return { notFound: true }
  }

  try {
    const caseStudy = await getCaseStudy(params.slug)
    if (!caseStudy) return { notFound: true }

    // Ensure this item is published for SafePlay
    if (!Array.isArray(caseStudy.sites) || !caseStudy.sites.includes('safeplay')) {
      return { notFound: true }
    }

    return {
      props: { caseStudy },
      revalidate: 300, // 5 minutes
    }
  } catch (err) {
    console.error('Error fetching SafePlay case study:', err)
    return { notFound: true }
  }
}