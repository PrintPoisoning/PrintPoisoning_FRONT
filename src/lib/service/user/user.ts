import { fetchApi } from "@lib/apis";
import { GetMeResponse } from "@lib/types";

export const getMe = async () => {
  const res = await fetchApi.authGet("/users");

  return (await res.json()) as GetMeResponse;
};
