import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

import { auth } from "@lib/apis";

export const config: MiddlewareConfig = {
  matcher: ["/", "/login", "/community/:path*", "/myBook/:path*", "/profile/:path*", "/record/:path*"],
};

export const middleware = async (request: NextRequest) => {
  try {
    const { pathname } = request.nextUrl;
    const session = await auth();

    const isLoginPage = pathname.startsWith("/login");

    // Login Page
    const isAuthUser = session && (session.sessionToken || session.user);
    if (isLoginPage && isAuthUser) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    console.log("Middleware Session : ", session);

    // Not AuthUser Redirect Home
    const isNotAuthUser = !session || !session.sessionToken || !session.user;
    if (!isLoginPage && isNotAuthUser) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/error", request.url));
  }
};
