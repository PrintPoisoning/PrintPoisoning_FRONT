import { fetchApi } from "@lib/apis";
import { GetMePrams, GetMeResponse } from "@lib/types";

export const getMe = async ({ sessionToken }: GetMePrams) => {
  const res = await fetchApi.get("/users", {
    headers: {
      Authorization: `Bearer ${sessionToken}`,
    },
  });

  return (await res.json()) as GetMeResponse;
};
