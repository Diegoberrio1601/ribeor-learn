import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'es'];
const defaultLocale = 'es';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Detección básica por cabecera
  const acceptLanguage = request.headers.get('accept-language');
  let locale = defaultLocale;
  if (acceptLanguage && acceptLanguage.includes('en')) {
    locale = 'en';
  }

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|og-image.png).*)'],
};