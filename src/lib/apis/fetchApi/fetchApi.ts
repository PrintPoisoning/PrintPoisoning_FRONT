import { RequestInit } from "next/dist/server/web/spec-extension/request";

import { auth } from "../auth/auth";

class FetchApi {
  private static API_KEY = process.env.SERVICE_KEY;

  private static jsonHeaders = {
    "Content-Type": "application/json",
  };

  private static apiInstance = async (url: string, options: RequestInit = {}) => {
    const res = await fetch(`${this.API_KEY}${url}`, {
      ...options,
    });

    if (!res) {
      // TODO - JY : 추후 에러 컨트롤 Code 반영
      throw new Error(`API Error : ${url}`);
    }

    if (!res.ok) {
      // TODO - JY : 추후 에러 컨트롤 Code 반영
      const message = JSON.stringify(res.body) ?? "res.ok Error";

      throw new Error(message);
    }

    return res;
  };

  post = async <T>(url: string, body?: T, options: RequestInit = {}) => {
    return await FetchApi.apiInstance(url, {
      method: "POST",
      headers: {
        ...FetchApi.jsonHeaders,
        ...options.headers,
      },
      body: JSON.stringify(body ?? ""),
      ...options,
    });
  };

  get = async (url: string, options: RequestInit = {}) => {
    return await FetchApi.apiInstance(url, {
      method: "GET",
      headers: {
        ...FetchApi.jsonHeaders,
        ...options.headers,
      },

      ...options,
    });
  };

  authGet = async (url: string, options: RequestInit = {}) => {
    const session = await auth();

    if (!session || !session.sessionToken) {
      // TODO - JY : 추후 에러 컨트롤 Code 반영
      throw new Error("Session token is not available");
    }

    return await FetchApi.apiInstance(url, {
      method: "GET",
      headers: {
        ...FetchApi.jsonHeaders,
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        ...options.headers,
      },
      ...options,
    });
  };
}

const fetchApi = new FetchApi();

export default fetchApi;
