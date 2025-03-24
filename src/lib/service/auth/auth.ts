import { fetchApi } from "@lib/apis";
import { BookFullLoginParams, BookFullLoginResponse, BookFullSignupParams, BookFullSignupResponse } from "@lib/types";

export const bookFullLogin = async (param: BookFullLoginParams) => {
  const res = await fetchApi.post<BookFullLoginParams>("/auth/login", param);

  return (await res.json()) as BookFullLoginResponse;
};

export const bookFullSignup = async (param: BookFullSignupParams) => {
  const res = await fetchApi.post<BookFullSignupParams>("/users", param);

  return (await res.json()) as BookFullSignupResponse;
};
