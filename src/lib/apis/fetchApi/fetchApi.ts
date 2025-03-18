import { auth } from "../auth/auth";

const API_KEY = "";

const fetchApi = async (url: string, options: RequestInit = {}) => {
  const session = await auth();

  if (!session || !session.sessionToken) {
    return;
  }

  // 추후 해당 로직을 통한 토큰 생성
  console.log("session Token TEST : ", session.sessionToken);

  return await fetch(`${API_KEY}${url}`, {
    ...options,
  });
};

export default fetchApi;
