// src/pages/insights/index.tsx
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getPosts, Post, buildImageUrl, calculateReadingTime } from '../../../lib/sanity'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

interface InsightsPageProps {
  posts: Post[]
}

export default function Insights({ posts }: InsightsPageProps) {
  const hasPosts = Array.isArray(posts) && posts.length > 0

  return (
    <>
      <Head>
        <title>Insights – SafePlay | Safer Gambling Intelligence</title>
        <meta
          name="description"
          content="Research, perspectives, and practical guidance on safer gambling, RGO effectiveness, and real-time monitoring from the SafePlay team."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Open Graph */}
        <meta property="og:title" content="SafePlay Insights" />
        <meta
          property="og:description"
          content="Safer gambling thought leadership and implementation insights for Australian pubs & clubs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://safeplay.involv.com.au/insights" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SafePlay Insights" />
        <meta
          name="twitter:description"
          content="Practical guidance on safer gambling monitoring and RGO workflows."
        />
      </Head>

      <div className="bg-white text-gray-900 font-sans min-h-screen">
        <Navigation />

        <div className="max-w-7xl mx-auto px-4 pt-12 pb-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-900">SafePlay Insights</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Practical thinking on safer gambling, real-time risk detection, and how RGOs can act sooner—with better evidence.
            </p>
          </div>

          {!hasPosts ? (
            <div className="text-center text-gray-600 py-16">
              <div className="bg-gray-50 rounded-xl border border-gray-200 p-10 max-w-lg mx-auto">
                <svg className="w-12 h-12 mx-auto mb-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v8a2 2 0 002 2h4l2 2 2-2h4a2 2 0 002-2V5a2 2 0 00-2-2H4zm1 3h10v2H5V6zm0 4h7v2H5v-2z"
                    clipRule="evenodd"
                  />
                </svg>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">No posts yet</h2>
                <p className="text-sm">
                  We’re preparing new articles and resources for SafePlay. Check back soon.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const readingTime = post.estimatedReadingTime || calculateReadingTime(post.body)
                const mainUrl = post.mainImage?.asset?.url
                const authorImg = post.author?.image?.asset?.url
                const published = post.publishedAt ? new Date(post.publishedAt) : null

                return (
                  <article
                    key={post._id}
                    className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
                  >
                    {/* Main Image */}
                    {mainUrl ? (
                      <div className="aspect-video w-full bg-gray-100">
                        <img
                          src={buildImageUrl(mainUrl, 600, 340, 75)}
                          alt={post.mainImage?.alt || post.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none'
                          }}
                        />
                      </div>
                    ) : (
                      <div className="aspect-video w-full bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <p className="text-sm">No image</p>
                        </div>
                      </div>
                    )}

                    <div className="p-6">
                      {/* Categories */}
                      {Array.isArray(post.categories) && post.categories.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories.slice(0, 2).map((category) => (
                            <span
                              key={category._id}
                              className="bg-[#1E4D8F] text-white px-2 py-1 rounded text-xs font-medium"
                            >
                              {category.title}
                            </span>
                          ))}
                          {post.categories.length > 2 && (
                            <span className="text-gray-500 text-xs">+{post.categories.length - 2} more</span>
                          )}
                        </div>
                      )}

                      {/* Title */}
                      <h2 className="text-xl font-semibold mb-3 line-clamp-2 text-gray-900">
                        <Link href={`/insights/${post.slug.current}`} className="hover:text-[#1E4D8F] transition-colors">
                          {post.title}
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      {post.excerpt && (
                        <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>
                      )}

                      {/* Tags */}
                      {Array.isArray(post.tags) && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                          {post.tags.length > 3 && (
                            <span className="text-gray-400 text-xs">+{post.tags.length - 3}</span>
                          )}
                        </div>
                      )}

                      {/* Author + Meta */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center">
                          {authorImg ? (
                            <img
                              src={buildImageUrl(authorImg, 40, 40, 80)}
                              alt={post.author?.image?.alt || post.author?.name || 'Author'}
                              className="w-8 h-8 rounded-full object-cover mr-3"
                              onError={(e) => {
                                (e.currentTarget as HTMLImageElement).style.display = 'none'
                              }}
                            />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-[#1E4D8F] flex items-center justify-center mr-3">
                              <span className="text-xs font-medium text-white">
                                {(post.author?.name || '?').charAt(0).toUpperCase()}
                              </span>
                            </div>
                          )}

                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {post.author?.name || 'SafePlay Team'}
                            </p>
                            <p className="text-xs text-gray-500">
                              {published
                                ? published.toLocaleDateString('en-AU', {
                                    day: 'numeric',
                                    month: 'short',
                                    year: 'numeric',
                                  })
                                : '—'}
                            </p>
                          </div>
                        </div>

                        <div className="text-xs text-gray-500 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {readingTime} min read
                        </div>
                      </div>
                    </div>
                  </article>
                )
              })}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/" className="text-[#1E4D8F] hover:text-[#163B6D] underline flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    // Fetch posts for the 'safeplay' site
    const posts = await getPosts('safeplay', 20)
    return {
      props: { posts: posts || [] },
      revalidate: 300, // 5 minutes
    }
  } catch (error) {
    console.error('Error fetching SafePlay posts:', error)
    return {
      props: { posts: [] },
      revalidate: 300,
    }
  }
}