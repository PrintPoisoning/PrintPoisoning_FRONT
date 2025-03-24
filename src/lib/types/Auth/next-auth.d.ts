import { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

import { IUser } from "../User/User.type";

declare module "next-auth" {
  interface Session {
    user: IUser & DefaultSession["user"];

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
