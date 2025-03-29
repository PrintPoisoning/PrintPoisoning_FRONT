import { signOut } from "next-auth/react";
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

    // Error Session
    if (session && session.errorMessage) {
      console.log("Middleware Active Error - Session");
      await signOut();
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Login Page
    const isAuthUser = session && session.sessionToken;
    if (isLoginPage && isAuthUser) {
      console.log("Middleware Auth User - LoginPage");
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Not AuthUser Redirect Home
    const isNotAuthUser = !session || !session.sessionToken;
    if (!isLoginPage && isNotAuthUser) {
      console.log("Middleware Not Auth User");
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/error", request.url));
  }
};
