// middleware.ts
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define public paths that don't require authentication
  const isPublicPath = 
    path === '/' || 
    path === '/auth/signin' || 
    path === '/auth/signup' || 
    path.startsWith('/api/auth');

  // Get the session token
  const token = await getToken({ 
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  
  // If on a public path and logged in, redirect to dashboard
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // If on a protected path and not logged in, redirect to sign in
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }

  // Continue with the request otherwise
  return NextResponse.next();
}

// Configure which paths the middleware applies to
export const config = {
  matcher: [
    '/',
    '/auth/signin',
    '/auth/signup',
    '/dashboard/:path*'
  ],
};