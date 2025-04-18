import { signOut } from "next-auth/react";
import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

import { auth } from "@lib/apis";

export const config: MiddlewareConfig = {
  matcher: ["/", "/login", "/signup", "/community/:path*", "/myBook/:path*", "/profile/:path*", "/record/:path*"],
};

export const middleware = async (request: NextRequest) => {
  try {
    const { pathname } = request.nextUrl;
    const session = await auth();

    const isLoginPage = pathname.startsWith("/login");
    const isSignupPage = pathname.startsWith("/signup");

    // Error Session
    if (session && session.errorMessage) {
      // TODO : Log Remove - Auth 로직 테스트
      console.log("Middleware Active Error - Session");
      await signOut();
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const isAuthUser = session && session.sessionToken;

    // Login Page
    if (isLoginPage && isAuthUser) {
      // TODO : Log Remove - Auth 로직 테스트
      console.log("Middleware Auth User - LoginPage");
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Signup Page
    if (isSignupPage && isAuthUser) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Not AuthUser Redirect Home
    const isNotAuthUser = !session || !session.sessionToken;

    if (!isLoginPage && !isSignupPage && isNotAuthUser) {
      // TODO : Log Remove - Auth 로직 테스트
      console.log("Middleware Not Auth User");
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/error", request.url));
  }
};
