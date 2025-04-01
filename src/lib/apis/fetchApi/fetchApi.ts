import { getSession } from "next-auth/react";
import { RequestInit } from "next/dist/server/web/spec-extension/request";

import { isServer } from "@tanstack/react-query";

import { auth } from "../auth/auth";

class FetchApi {
  private static API_KEY = process.env.NEXT_PUBLIC_SERVICE_KEY;

  private static jsonHeaders = {
    "Content-Type": "application/json",
  };

  private static apiInstance = async (method: string, url: string, options: RequestInit = {}) => {
    const res = await fetch(`${this.API_KEY}${url}`, {
      method,
      ...options,
    });

    if (!res) {
      // TODO - JY : 추후 에러 컨트롤 Code 반영
      throw new Error(`API Error : ${url}`);
    }

    if (!res.ok) {
      // TODO - JY : 추후 에러 컨트롤 Code 반영
      const message = JSON.stringify(res.body) ?? "res.ok Error";
      console.log("res.ok Error : ", await res.json());

      throw new Error(message);
    }

    return res;
  };

  private static authInstance = async (method: string, url: string, options: RequestInit = {}) => {
    let session;

    if (isServer) {
      session = await auth();
    } else {
      session = await getSession();
    }

    if (!session) {
      // TODO - JY : 추후 에러 컨트롤 Code 반영
      throw new Error("authInstance : Session not found");
    }

    return await this.apiInstance(method, url, {
      ...options,
      headers: {
        Authorization: `Bearer ${session.sessionToken}`,
        ...options.headers,
      },
    });
  };

  post = async <T>(url: string, body?: T, options: RequestInit = {}) => {
    return await FetchApi.apiInstance("POST", url, {
      headers: {
        ...FetchApi.jsonHeaders,
        ...options.headers,
      },
      body: JSON.stringify(body ?? ""),
      ...options,
    });
  };

  get = async (url: string, options: RequestInit = {}) => {
    return await FetchApi.apiInstance("GET", url, {
      headers: {
        ...FetchApi.jsonHeaders,
        ...options.headers,
      },
      ...options,
    });
  };

  authGet = async (url: string, options: RequestInit = {}) => {
    return await FetchApi.authInstance("GET", url, {
      headers: {
        ...FetchApi.jsonHeaders,
        ...options.headers,
      },
      ...options,
    });
  };
}

const fetchApi = new FetchApi();

export default fetchApi;
