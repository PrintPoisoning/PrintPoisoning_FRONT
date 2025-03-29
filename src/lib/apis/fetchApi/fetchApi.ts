import { RequestInit } from "next/dist/server/web/spec-extension/request";

const API_KEY = process.env.SERVICE_KEY;

const apiInstance = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(`${API_KEY}${url}`, {
    ...options,
  });

  if (!res) {
    throw new Error(`API Error : ${url}`);
  }

  if (!res.ok) {
    const message = JSON.stringify(res.body) ?? "res.ok Error";

    throw new Error(message);
  }

  return res;
};

const post = async <T>(url: string, body?: T, options: RequestInit = {}) => {
  return await apiInstance(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body ?? ""),
    ...options,
  });
};

const get = async (url: string, options: RequestInit = {}) => {
  return await apiInstance(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },

    ...options,
  });
};

const fetchApi = { post, get } as const;

export default fetchApi;
