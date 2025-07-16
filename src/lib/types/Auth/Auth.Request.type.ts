export interface BookFullLoginParams {
  accessToken: string;
}

export interface BookFullSignupParams {
  nickname: string;
  isPublic: boolean;
  token: string;
}

export interface BookFullRefreshParams {
  refreshToken: string;
}

export interface KakaoSignupParams {
  callbackUrl?: string;
}
