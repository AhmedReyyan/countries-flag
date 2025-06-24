import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl;

  // Check if the path ends with .svg
  if (url.pathname.endsWith('.svg')) {
    // Lowercase the pathname
    const lowerPath = url.pathname.toLowerCase();

    // If the original and lower path differ, rewrite
    if (url.pathname !== lowerPath) {
      url.pathname = lowerPath;

      // Serve the lowercase file without changing URL in browser (better for SEO + caching)
      return NextResponse.rewrite(url);

      // If you want the browser URL to also change:
      // return NextResponse.redirect(url);
    }
  }

  // Allow other requests as normal
  return NextResponse.next();
}
