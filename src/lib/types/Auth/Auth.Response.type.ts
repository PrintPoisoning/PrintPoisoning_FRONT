export interface BookFullLoginResponse {
  isMember: boolean;
  accessToken: null | string;
  refreshToken: null | string;
}

export interface BookFullSignupResponse {
  nickname: string;
  isPublic: boolean;
  token: string;
}

export interface BookFullRefreshResponse {
  accessToken: string;
  refreshToken: string;
}
