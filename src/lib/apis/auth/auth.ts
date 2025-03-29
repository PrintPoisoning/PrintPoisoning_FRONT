import NextAuth from "next-auth";
import Kakao from "next-auth/providers/kakao";

import { MINUTE, SECOND } from "@lib/constants";
import { bookFullLogin, bookFullRefresh } from "@lib/service";

const THRESHOLD = SECOND * 10;
const EXPIRES_TIME = MINUTE * 1;

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
    maxAge: EXPIRES_TIME,
  },

  callbacks: {
    signIn: async ({ account }) => {
      if (account && account.access_token) {
        const { isMember, accessToken, refreshToken } = await bookFullLogin({ accessToken: account.access_token });

        if (!isMember || !accessToken || !refreshToken) {
          return "/signup";
        }

        account.service = {
          accessToken,
          refreshToken,
        };
      }

      return true;
    },

    jwt: async ({ token, account }) => {
      // TODO : Log Remove
      // console.log("jwt token : ", token);
      // console.log("jwt account : ", account);

      if (account && account.access_token && account.service) {
        /* First Sign In */
        // account.access_token 이 있는 경우는 카카오 로그인을 방금 한 순간
        console.log("First Sign In");

        const { accessToken, refreshToken } = account.service;

        return {
          ...token,
          accessToken,
          refreshToken,
          expiresAt: Date.now() + EXPIRES_TIME,
          errorMessage: null,
        };
      }

      const isNotRefreshUser = (token.expiresAt as number) - Date.now() >= THRESHOLD;
      if (token.expiresAt && isNotRefreshUser) {
        /* Keep Sign In */
        // token.expiresAt 이 존재하는 경우는 이미 기존에 로그인을 한 기록이 있는 경우

        console.log("Keep Sign In");

        return {
          ...token,
          errorMessage: null,
        };
      }

      // 회원 가입을 해야하는 유저인가?

      try {
        /* Refreshing Sign In */
        console.log("Refreshing Token");

        const { accessToken, refreshToken } = await bookFullRefresh({ refreshToken: token.refreshToken });
        console.log("Refresh Token : ", accessToken, refreshToken);

        return {
          ...token,
          accessToken: accessToken,
          refreshToken: refreshToken,
          expiresAt: Date.now() + EXPIRES_TIME,
          errorMessage: null,
        };
      } catch (error) {
        console.error("토큰 갱신 실패 : ", error);

        return {
          ...token,
          errorMessage: "failed to refreshing",
        };
      }
    },

    session: async ({ session, token }) => {
      if (token.accessToken) {
        session.sessionToken = token.accessToken.toString();
      }

      if (token.errorMessage) {
        console.log("create session errorMessage : ", token.errorMessage);
        session.errorMessage = token.errorMessage.toString();
      }

      return session;
    },
  },
});
