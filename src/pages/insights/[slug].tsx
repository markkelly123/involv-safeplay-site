// src/pages/insights/[slug].tsx
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import { PortableText } from '@portabletext/react'
import { getPost, getPosts, Post, buildImageUrl, calculateReadingTime } from '../../../lib/sanity'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

interface PostPageProps {
  post: Post
}

export default function PostPage({ post }: PostPageProps) {
  if (!post) return <div>Post not found</div>

  const readingTime = post.estimatedReadingTime || calculateReadingTime(post.body)
  const published = post.publishedAt ? new Date(post.publishedAt) : null
  const mainUrl = post.mainImage?.asset?.url
  const authorImg = post.author?.image?.asset?.url
  const authorName = post.author?.name || 'SafePlay Team'
  const authorRole = post.author?.role

  return (
    <>
      <Head>
        <title>{post.title} – SafePlay Insights</title>
        <meta
          name="description"
          content={post.excerpt || `Read “${post.title}” on SafePlay Insights.`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={post.excerpt || `Read “${post.title}” on SafePlay Insights.`}
        />
        {mainUrl && (
          <meta property="og:image" content={buildImageUrl(mainUrl, 1200, 630, 80)} />
        )}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://safeplay.involv.com.au/insights/${post.slug.current}`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta
          name="twitter:description"
          content={post.excerpt || `Read “${post.title}” on SafePlay Insights.`}
        />
        {mainUrl && (
          <meta name="twitter:image" content={buildImageUrl(mainUrl, 1200, 630, 80)} />
        )}
      </Head>

      <div className="bg-white text-gray-900 font-sans min-h-screen">
        <Navigation />

        <article className="max-w-4xl mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/insights" className="text-[#1E4D8F] hover:text-[#163B6D] text-sm">
              ← Back to Insights
            </Link>
          </nav>

          {/* Main Image */}
          {mainUrl && (
            <div className="aspect-video w-full bg-gray-200 rounded-lg overflow-hidden mb-8">
              <img
                src={buildImageUrl(mainUrl, 1200, 675, 80)}
                alt={post.mainImage?.alt || post.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none'
                }}
              />
            </div>
          )}

          {/* Header */}
          <header className="mb-8">
            {/* Categories */}
            {Array.isArray(post.categories) && post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category) => (
                  <span
                    key={category._id}
                    className="bg-[#1E4D8F] text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {category.title}
                  </span>
                ))}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{post.title}</h1>

            {post.excerpt && (
              <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>
            )}

            {/* Author & Meta */}
            <div className="flex items-center justify-between py-6 border-t border-b border-gray-200">
              <div className="flex items-center">
                {authorImg ? (
                  <img
                    src={buildImageUrl(authorImg, 48, 48, 80)}
                    alt={post.author?.image?.alt || authorName}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none'
                    }}
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-[#1E4D8F] flex items-center justify-center mr-4">
                    <span className="text-lg font-medium text-white">
                      {authorName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}

                <div>
                  <p className="font-medium text-gray-900">{authorName}</p>
                  {authorRole && (
                    <p className="text-sm text-gray-600">{authorRole}</p>
                  )}
                </div>
              </div>

              <div className="text-right text-sm text-gray-600">
                <p>
                  {published
                    ? published.toLocaleDateString('en-AU', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })
                    : '—'}
                </p>
                <p>{readingTime} min read</p>
              </div>
            </div>
          </header>

          {/* Body */}
          <div className="prose prose-lg max-w-none mb-8">
            <PortableText
              value={post.body}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
                  ),
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-900">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900">{children}</h3>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-[#1E4D8F] pl-4 my-6 italic text-gray-600 bg-blue-50 py-2">
                      {children}
                    </blockquote>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc list-inside mb-4 text-gray-700">{children}</ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal list-inside mb-4 text-gray-700">{children}</ol>
                  ),
                },
                listItem: {
                  bullet: ({ children }) => <li className="mb-1">{children}</li>,
                  number: ({ children }) => <li className="mb-1">{children}</li>,
                },
                marks: {
                  strong: ({ children }) => (
                    <strong className="font-bold text-gray-900">{children}</strong>
                  ),
                  em: ({ children }) => <em className="italic">{children}</em>,
                  link: ({ children, value }) => (
                    <a
                      href={value.href}
                      className="text-[#1E4D8F] hover:text-[#163B6D] underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                },
                types: {
                  image: ({ value }: any) => {
                    const url = value?.asset?.url
                    if (!url) return null
                    return (
                      <div className="my-8">
                        <img
                          src={buildImageUrl(url, 800, 450, 80)}
                          alt={value.alt || ''}
                          className="w-full rounded-lg"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = 'none'
                          }}
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
              }}
            />
          </div>

          {/* Tags */}
          {Array.isArray(post.tags) && post.tags.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Jurisdictions */}
          {Array.isArray(post.jurisdictions) && post.jurisdictions.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Jurisdictions</h3>
              <div className="flex flex-wrap gap-2">
                {post.jurisdictions.map((j) => (
                  <span
                    key={j}
                    className="bg-[#E7F0FF] text-[#1E4D8F] px-3 py-1 rounded text-sm font-medium"
                  >
                    {j.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Footer Nav */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <Link href="/insights" className="text-[#1E4D8F] hover:text-[#163B6D] flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                All Insights
              </Link>

              <div className="text-right">
                <Link
                  href="/contact"
                  className="bg-[#1E4D8F] text-white px-4 py-2 rounded hover:bg-[#163B6D] transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Build paths from posts targeted to 'safeplay'
  const posts = await getPosts('safeplay', 100)
  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }))

  return {
    paths,
    fallback: 'blocking', // ISR for new posts
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  if (!slug) return { notFound: true }

  try {
    const post = await getPost(slug)
    if (!post) return { notFound: true }

    // Ensure the post is published for SafePlay
    if (!Array.isArray(post.sites) || !post.sites.includes('safeplay')) {
      return { notFound: true }
    }

    return {
      props: { post },
      revalidate: 300,
    }
  } catch (error) {
    console.error('Error fetching SafePlay post:', error)
    return { notFound: true }
  }
}