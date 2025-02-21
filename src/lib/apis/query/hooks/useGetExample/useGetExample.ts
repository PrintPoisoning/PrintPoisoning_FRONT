import { getExample } from "@lib/service";

import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "../../constants";

const useGetExample = () => {
  return useQuery({
    queryKey: QUERY_KEY.TEST,
    queryFn: () => getExample(),
  });
};

export default useGetExample;
