"use server";

import { signIn, signOut } from "@lib/apis/auth/auth";
import { KakaoSignupParams } from "@lib/types";

export const signInWithKakao = async ({ callbackUrl = "/" }: KakaoSignupParams = {}) => {
  await signIn("kakao", { redirectTo: callbackUrl });
};

export const signOutWithForm = async () => {
  await signOut();
};
