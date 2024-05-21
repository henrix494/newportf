import { NextRequest, NextResponse, userAgent } from "next/server";
import createIntlMiddleware from "next-intl/middleware";

export function middleware(request: NextRequest) {
  const { browser } = userAgent(request);
  const defaultLocale = request.headers.get("x-your-custom-locale");

  const handleI18nRouting = createIntlMiddleware({
    locales: ["en", "he"],
    defaultLocale,
  });

  // Handle i18n routing and get the response
  let response = handleI18nRouting(request);

  // Set the custom locale header on the response
  response.headers.set("x-your-custom-locale", defaultLocale);

  // Create new request headers with the browser name
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-browser", browser.name as any);

  // Clone the response to ensure headers are preserved
  const nextResponse = new NextResponse(response.body, response);

  // Set the headers from the modified request
  nextResponse.headers.set("x-browser", browser.name as any);

  return nextResponse;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(he|en)/:path*"],
};
