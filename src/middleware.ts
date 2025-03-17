import { MiddlewareConfig, NextRequest, NextResponse } from "next/server";

import { auth } from "@lib/apis";

export const config: MiddlewareConfig = {
  // matcher: ["*"],
};

export const middleware = async (request: NextRequest) => {
  try {
    console.log("Active Middleware");

    const session = await auth();

    console.log("Middleware Session : ", session);

    return NextResponse.next();
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/error", request.url));
  }
};
