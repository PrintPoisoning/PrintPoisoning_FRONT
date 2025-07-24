import { signOut } from "next-auth/react";

import { fetchApi } from "@lib/apis";
import { CheckNicknameParams, CheckNicknameResponse, DeleteUserResponse, GetMeResponse } from "@lib/types";

export const getMe = async () => {
  const res = await fetchApi.authGet("/users");

  return (await res.json()) as GetMeResponse;
};

export const deleteUser = async () => {
  const res = await fetchApi.authDelete("/users");

  await signOut();

  return (await res.json()) as DeleteUserResponse;
};

export const checkNickname = async ({ nickname }: CheckNicknameParams) => {
  const res = await fetchApi.get(`/users/check-nickname?nickname=${nickname}`);

  return (await res.json()) as CheckNicknameResponse;
};
