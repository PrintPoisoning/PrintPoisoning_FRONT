import { fetchApi } from "@lib/apis";
import { BookFullLoginParams, BookFullLoginResponse } from "@lib/types";

export const bookFullLogin = async (param: BookFullLoginParams) => {
  const res = await fetchApi.post<BookFullLoginParams>("/auth/login", param);

  return (await res.json()) as BookFullLoginResponse;
};
