import NextAuth from "next-auth";
import Kakao from "next-auth/providers/kakao";

import { MINUTE, SECOND } from "@lib/constants";
import { bookFullLogin, getMe } from "@lib/service";
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

        try {
          const { accessToken, refreshToken } = account.service;

          const user = await getMe({ sessionToken: accessToken });

          return {
            ...token,
            accessToken,
            refreshToken,
            expiresAt: Date.now() + EXPIRES_TIME,
            errorMessage: null,
            user,
          };
        } catch (error) {
          console.error("First Signin Error : ", error);

          return {
            ...token,
            errorMessage: "sign in failed : request get me",
          };
        }
      }

      const isNotRefreshUser = (token.expiresAt as number) - Date.now() >= THRESHOLD;
      if (token.expiresAt && isNotRefreshUser) {
        try {
          /* Keep Sign In */

          // token.expiresAt 이 존재하는 경우는 이미 기존에 로그인을 한 기록이 있는 경우

          const user = await getMe({ sessionToken: token.accessToken });

          return {
            ...token,
            user,
          };
        } catch (error) {
          console.error("Keep Sign In Error : ", error);

          return {
            ...token,
            errorMessage: "failed to silent signin : request get me",
          };
        }
      }

      // 회원 가입을 해야하는 유저인가?

      try {
        /* Refreshing Sign In */
        console.log("Refreshing Token");

        throw new Error("추구 토큰 갱신 & getMe 요청 추가하기");

        return {
          ...token,

          // accessToken: "active refresh",
          // refreshToken: "active refresh",
          // expiresAt: Date.now() + EXPIRES_TIME,
          // errorMessage: null,
          // user: {
          //   test: "리프레시 된 유저",
          // },
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
      // console.log("session !! : ", session);
      // console.log("session token : ", token);

      if (token.accessToken) {
        session.sessionToken = token.accessToken.toString();
      }

      if (token.errorMessage) {
        session.errorMessage = token.errorMessage.toString();
      }

      console.log("session : ", token);
      if (token.user) {
        const { nickname, isPublic, userId } = token.user as IUser;
        session.user.nickname = nickname;
        session.user.isPublic = isPublic;
        session.user.userId = userId;
      }

      return session;
    },
  },
});
