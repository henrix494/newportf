import { NextRequest, NextResponse, userAgent } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const { device, browser } = userAgent(request);
  const viewport = device.type === "mobile" ? "mobile" : "desktop";
  url.searchParams.set("viewport", viewport);

  const response = NextResponse.rewrite(url);
  response.headers.set("x-browser", browser.name as any);

  return response;
}
