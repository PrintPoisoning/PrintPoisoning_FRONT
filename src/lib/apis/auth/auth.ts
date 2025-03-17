import NextAuth from "next-auth";
import Kakao from "next-auth/providers/kakao";

import { MINUTE } from "@lib/constants";

console.log("KAKAO_API_KEY : ", process.env.KAKAO_API_KEY);
console.log("KAKAO_CLIENT_SECRET : ", process.env.KAKAO_CLIENT_SECRET);

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Kakao({
      clientId: process.env.KAKAO_API_KEY,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
    maxAge: MINUTE,
  },
});
