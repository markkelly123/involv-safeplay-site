// MIDDLEWARE.TS - Clean version  
// Place this file at: src/middleware.ts (NOT root directory for this project)

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  console.log('🚨 MIDDLEWARE RUNNING for:', request.nextUrl.pathname)
  
  // Allow access to login page and auth API routes
  if (
    request.nextUrl.pathname === '/login' ||
    request.nextUrl.pathname.startsWith('/api/auth')
  ) {
    console.log('✅ Allowing access to:', request.nextUrl.pathname)
    return NextResponse.next()
  }

  // Check for authentication cookie
  const authCookie = request.cookies.get('involv-auth')
  console.log('🍪 Auth cookie exists:', !!authCookie?.value)
  
  if (!authCookie?.value) {
    console.log('❌ No auth cookie, redirecting to login')
    // Redirect to login page
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Verify the session is valid
  try {
    const session = JSON.parse(authCookie.value)
    const now = Date.now()
    
    // Check if session has expired (7 days default)
    if (session.expires && now > session.expires) {
      console.log('⏰ Session expired, redirecting to login')
      const response = NextResponse.redirect(new URL('/login', request.url))
      response.cookies.delete('involv-auth')
      return response
    }
    console.log('✅ Valid session, allowing access')
  } catch (error) {
    console.log('❌ Invalid session cookie, redirecting to login')
    // Invalid cookie format
    const response = NextResponse.redirect(new URL('/login', request.url))
    response.cookies.delete('involv-auth')
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (authentication API routes)
     * - login (login page)  
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Static assets
     */
    '/((?!api/auth|login|_next/static|_next/image|favicon|logo|icons|apple-touch-icon).*)',
  ],
}