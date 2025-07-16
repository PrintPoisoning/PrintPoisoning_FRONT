import { signOut } from "next-auth/react";
import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

import { auth } from "@lib/apis";

export const config: MiddlewareConfig = {
  matcher: [
    "/",
    "/login",

    "/signup",
    "/signup/welcome",

    "/community/:path*",
    "/myBook/:path*",
    "/profile/:path*",
    "/record/:path*",
  ],
};

export const middleware = async (request: NextRequest) => {
  try {
    const { pathname } = request.nextUrl;

    const session = await auth();

    const isLoginPage = pathname.startsWith("/login");
    const isSignupPage = pathname.startsWith("/signup");
    const isSignupWelcomePage = pathname.startsWith("/signup/welcome");

    // Error Session
    if (session && session.errorMessage) {
      // TODO : Log Remove - Auth 로직 테스트
      console.log("Middleware Active Error - Session");

      await signOut();
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const isAuthUser = session && session.sessionToken;

    if (isSignupWelcomePage && isAuthUser) {
      return NextResponse.next();
    }

    // Login Page
    if ((isLoginPage || isSignupPage) && isAuthUser) {
      // TODO : Log Remove - Auth 로직 테스트
      console.log("Middleware Auth User - LoginPage");
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Signup Page
    if (isSignupPage && (!session || !session.ssoToken)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    // Signup User Redirect Signup Page
    if (isLoginPage && session && session.ssoToken) {
      return NextResponse.redirect(new URL("/signup", request.url));
    }

    if (!isLoginPage && !isSignupPage && !isAuthUser) {
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
