import { fetchApi } from "@lib/apis";
import {
  BookFullLoginParams,
  BookFullLoginResponse,
  BookFullRefreshParams,
  BookFullRefreshResponse,
  BookFullSignupParams,
  BookFullSignupResponse,
} from "@lib/types";

export const bookFullLogin = async (param: BookFullLoginParams) => {
  const res = await fetchApi.post<BookFullLoginParams>("/auth/login", param);

  // TODO : Log Remove - Auth 로직 테스트
  console.log("Active BookFullLogin API");

  return (await res.json()) as BookFullLoginResponse;
};

export const bookFullSignup = async (param: BookFullSignupParams) => {
  const res = await fetchApi.post<BookFullSignupParams>("/auth/signup", param);

  return (await res.json()) as BookFullSignupResponse;
};

export const bookFullRefresh = async ({ refreshToken }: BookFullRefreshParams) => {
  const res = await fetchApi.post("/auth/refresh-token", "", {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  // TODO : Log Remove - Auth 로직 테스트
  console.log("Active BookFull Refresh API");

  return (await res.json()) as BookFullRefreshResponse;
};
