import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    sessionToken: string;
    ssoToken: string;
    errorMessage: string | null;
  }

  interface Account extends DefaultAccount {
    service: {
      accessToken: string;
      refreshToken: string;
    };

    ssoToken: string;
  }

  interface JWT extends DefaultJWT {
    accessToken: string;
    refreshToken: string;
    ssoToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    accessToken: string;
    refreshToken: string;
    ssoToken: string;
  }
}
