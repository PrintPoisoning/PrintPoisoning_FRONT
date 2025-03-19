import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      test: string;
    } & DefaultSession["user"];

    sessionToken: string;
    errorMessage: string | null;
  }
}
