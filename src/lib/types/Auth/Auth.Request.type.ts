export interface BookFullLoginParams {
  accessToken: string;
}

export interface BookFullSignupParams {
  nickname: string;
  isPublic: boolean;
  kakaoToken: string;
}

export interface BookFullRefreshParams {
  refreshToken: string;
}
