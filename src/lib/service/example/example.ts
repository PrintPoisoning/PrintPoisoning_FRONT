import { fetchApi } from "@lib/apis";

export const getExample = async () => {
  const res = await fetchApi("service url");

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const result: string = await res.json();

  return result;
};
