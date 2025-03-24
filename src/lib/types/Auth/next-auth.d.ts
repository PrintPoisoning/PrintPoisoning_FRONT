import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      test: string;
    } & DefaultSession["user"];

    sessionToken: string;
    errorMessage: string | null;
  }

  interface Account extends DefaultAccount {
    service?: {
      accessToken: string | null;
      refreshToken: string | null;
    };
  }
}
