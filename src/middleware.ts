import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Add security headers
  const headers = new Headers(request.headers)
  const response = NextResponse.next({
    request: {
      headers,
    },
  })

  // Add CSP header to allow styles
  response.headers.set(
    'Content-Security-Policy',
    "style-src 'self' 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com;"
  )

  return response
}

export const config = {
  matcher: '/:path*',
} 