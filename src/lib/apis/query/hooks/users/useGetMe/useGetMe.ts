"use client";

import { QUERY_KEY } from "@lib/apis/query/constants";
import { MINUTE } from "@lib/constants";
import { getMe } from "@lib/service";

import { useQuery } from "@tanstack/react-query";

const useGetMe = () => {
  return useQuery({
    queryKey: QUERY_KEY.USERS.ME(),
    queryFn: getMe,

    staleTime: MINUTE * 10,
    gcTime: MINUTE * 15,
  });
};

export default useGetMe;
