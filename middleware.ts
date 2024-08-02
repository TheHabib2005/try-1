import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // const path = request.nextUrl.pathname;
  // const token = request.cookies.get("auth-token")?.value || "";
  // const isPublicPath = path === "/sign-in";

  // if (isPublicPath && token) {
  //   // Redirect to home if already logged in
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // if (!isPublicPath && !token) {
  //   // Redirect to sign-in if not logged in
  //   return NextResponse.redirect(new URL("/sign-in", request.url));
  // }

  // Continue with the request if no conditions are met
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
