import { signOut } from "next-auth/react";

import { fetchApi } from "@lib/apis";
import { DeleteUserResponse, GetMeResponse } from "@lib/types";

export const getMe = async () => {
  const res = await fetchApi.authGet("/users");

  return (await res.json()) as GetMeResponse;
};

export const deleteUser = async () => {
  const res = await fetchApi.authDelete("/users");

  await signOut();

  return (await res.json()) as DeleteUserResponse;
};
