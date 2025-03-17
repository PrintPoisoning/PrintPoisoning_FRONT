import NextAuth from "next-auth";
import Kakao from "next-auth/providers/kakao";

import { MINUTE, SECOND } from "@lib/constants";
import { IUser } from "@lib/types";

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
    maxAge: MINUTE * 10,
  },

  callbacks: {
    jwt: async ({ token, account }) => {
      console.log("jwt token : ", token);
      console.log("jwt account : ", account);

      if (account && account.access_token) {
        /* First Sign In */

        // account.access_token 이 있는 경우는 카카오 로그인을 방금 한 순간
        console.log("First Sign In");

        try {
          return {
            ...token,
            accessToken: "추후 서비스 토큰으로 교체",
            refreshToken: "추후 서비스 토큰으로 교체",
            expiresAt: Date.now() + EXPIRES_TIME,
            errorMessage: null,
            user: {
              test: "테스트용 User 객체",
            },
          };
        } catch (error) {
          console.error("초기 토큰 생성 실패 : ", error);

          return {
            ...token,
            errorMessage: "error1",
          };
        }
      }

      const isNotRefreshUser = (token.expiresAt as number) - Date.now() >= THRESHOLD;
      if (token.expiresAt && isNotRefreshUser) {
        try {
          /* Keep Sign In */

          // token.expiresAt 이 존재하는 경우는 이미 기존에 로그인을 한 기록이 있는 경우

          return {
            ...token,
            user: {
              test: "리프레시가 필요한 대상이 아님",
            },
          };
        } catch (error) {
          console.error("유효성 로그인 실패 : ", error);

          return {
            ...token,
            errorMessage: "failed to update user",
          };
        }
      }

      try {
        /* Refreshing Sign In */
        console.log("Refreshing Token");

        return {
          ...token,

          accessToken: "active refresh",
          refreshToken: "active refresh",
          expiresAt: Date.now() + EXPIRES_TIME,
          errorMessage: null,
          user: {
            test: "리프레시 된 유저",
          },
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
      console.log("session !! : ", session);
      console.log("session token : ", token);

      if (token.accessToken) {
        session.sessionToken = token.accessToken.toString();
      }

      if (token.user) {
        const { test } = token.user as IUser;

        session.user.test = test;
      }

      return session;
    },
  },
});
