import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    sessionToken: string;
    errorMessage: string | null;
  }

  interface Account extends DefaultAccount {
    service: {
      accessToken: string;
      refreshToken: string;
    };
  }

  interface JWT extends DefaultJWT {
    accessToken: string;
    refreshToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    accessToken: string;
    refreshToken: string;
  }
}
