import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
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
    image: ({value}: any) => {
      return (
        <div className="my-8">
          <img
            src={buildImageUrl(value.asset.url, 800, 450, 80)}
            alt={value.alt || ''}
            className="w-full rounded-lg"
          />
          {value.caption && (
            <p className="text-gray-500 text-sm mt-2 text-center italic">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
  },
  block: {
    h1: ({children}: any) => <h1 className="text-3xl font-bold mb-4 text-gray-900">{children}</h1>,
    h2: ({children}: any) => <h2 className="text-2xl font-bold mb-4 text-gray-900 mt-8">{children}</h2>,
    h3: ({children}: any) => <h3 className="text-xl font-semibold mb-3 text-gray-900 mt-6">{children}</h3>,
    normal: ({children}: any) => <p className="text-gray-600 mb-4 leading-relaxed">{children}</p>,
    blockquote: ({children}: any) => (
      <blockquote className="border-l-4 border-[#1e40af] pl-6 my-6 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({children, value}: any) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#1e40af] hover:text-blue-700 transition-colors underline"
      >
        {children}
      </a>
    ),
    strong: ({children}: any) => <strong className="font-semibold text-gray-900">{children}</strong>,
    em: ({children}: any) => <em className="italic">{children}</em>,
  },
  list: {
    bullet: ({children}: any) => <ul className="list-disc list-inside mb-4 space-y-2 text-gray-600">{children}</ul>,
    number: ({children}: any) => <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-600">{children}</ol>,
  },
  listItem: {
    bullet: ({children}: any) => <li className="mb-1">{children}</li>,
    number: ({children}: any) => <li className="mb-1">{children}</li>,
  },
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{caseStudy.title} - {caseStudy.client} | Assure Case Study</title>
        <meta name="description" content={caseStudy.excerpt || `How Assure helped ${caseStudy.client} achieve compliance excellence in ${caseStudy.industry}.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={`${caseStudy.title} - ${caseStudy.client}`} />
        <meta property="og:description" content={caseStudy.excerpt || `How Assure helped ${caseStudy.client} achieve compliance excellence in ${caseStudy.industry}.`} />
        <meta property="og:type" content="article" />
        {caseStudy.mainImage?.asset?.url && (
          <meta property="og:image" content={buildImageUrl(caseStudy.mainImage.asset.url, 1200, 630, 80)} />
        )}
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${caseStudy.title} - ${caseStudy.client}`} />
        <meta name="twitter:description" content={caseStudy.excerpt || `How Assure helped ${caseStudy.client} achieve compliance excellence in ${caseStudy.industry}.`} />
        {caseStudy.mainImage?.asset?.url && (
          <meta name="twitter:image" content={buildImageUrl(caseStudy.mainImage.asset.url, 1200, 630, 80)} />
        )}
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

        {/* Case Study Header */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Client and Industry */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-[#1e40af] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                <i className="lni lni-apartment mr-1"></i>
                {caseStudy.industry}
              </span>
              <span className="text-gray-500 text-sm flex items-center">
                <i className="lni lni-calendar mr-1"></i>
                {new Date(caseStudy.publishedAt).toLocaleDateString('en-AU', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
            </div>

            {/* Client Name */}
            <div className="text-[#1e40af] text-lg font-medium mb-3 flex items-center">
              <i className="lni lni-users mr-2"></i>
              {caseStudy.client}
            </div>

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

            {/* Categories and Tags */}
            {(caseStudy.categories?.length > 0 || caseStudy.tags?.length > 0) && (
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
            )}

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

        {/* Case Study Overview Cards */}
        <section className="bg-gray-50 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Challenge */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-2 rounded-lg mr-3">
                    <i className="lni lni-target text-red-600 text-xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Challenge</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {caseStudy.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <i className="lni lni-bulb text-blue-600 text-xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Solution</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {caseStudy.solution}
                </p>
              </div>

              {/* Results */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <i className="lni lni-checkmark-circle text-green-600 text-xl"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Results</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {caseStudy.results}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        {caseStudy.body && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="prose prose-lg max-w-none">
              <PortableText 
                value={caseStudy.body} 
                components={portableTextComponents}
              />
            </div>
          </section>
        )}

        {/* Case Study Sections - Detailed Breakdown */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="space-y-12">
            {/* The Challenge - Detailed */}
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

            {/* Our Solution - Detailed */}
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

            {/* The Results - Detailed */}
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
          </div>

          {/* Jurisdictions */}
          {caseStudy.jurisdictions && caseStudy.jurisdictions.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-900">Jurisdictions</h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.jurisdictions.map((jurisdiction: string, index: number) => (
                  <span 
                    key={index}
                    className="bg-[#1e40af] text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {jurisdiction}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Navigation and CTA */}
        <section className="bg-[#1e40af] py-12">
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
                  className="bg-white text-[#1e40af] px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium text-center inline-flex items-center justify-center"
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
  // Get all case study slugs for assure site
  const caseStudies = await getCaseStudies('assure')
  
  const paths = caseStudies.map((caseStudy: CaseStudy) => ({
    params: { slug: caseStudy.slug.current },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug || typeof params.slug !== 'string') {
    return {
      notFound: true,
    }
  }

  try {
    const caseStudy = await getCaseStudy(params.slug)

    if (!caseStudy) {
      return {
        notFound: true,
      }
    }

    // Check if this case study is published for the assure site
    if (!caseStudy.sites.includes('assure')) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        caseStudy,
      },
      revalidate: 300, // Revalidate every 5 minutes
    }
  } catch (error) {
    console.error('Error fetching case study:', error)
    return {
      notFound: true,
    }
  }
}