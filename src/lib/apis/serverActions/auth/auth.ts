"use server";

import { signIn, signOut } from "@lib/apis/auth/auth";

export const signInWithKakao = async () => {
  await signIn("kakao", { redirectTo: "/" });
};

export const signOutWithForm = async () => {
  await signOut();
};
