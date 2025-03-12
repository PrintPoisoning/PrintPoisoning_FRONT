import { MINUTE } from "@lib/constants";

import {
  QueryClient,
  defaultShouldDehydrateQuery,
  isServer,
} from "@tanstack/react-query";

const makeQuery = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        staleTime: MINUTE,
        retryOnMount: false,
      },

      dehydrate: {
        shouldDehydrateQuery: query => {
          const hasDehydrated = defaultShouldDehydrateQuery(query);

          if (hasDehydrated) {
            return hasDehydrated;
          }

          return query.state.status === "pending";
        },
      },
    },
  });
};

let browserQueryClient: QueryClient | null = null;

const getQueryClient = () => {
  if (isServer) {
    return makeQuery();
  }

  if (!browserQueryClient) {
    browserQueryClient = makeQuery();
  }

  return browserQueryClient;
};

export default getQueryClient;
