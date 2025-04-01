export const QUERY_KEY = {
  ALL: [],

  USERS: {
    ALL: ["users"],
    ME: () => [...QUERY_KEY.USERS.ALL, "me"],
  },
};
