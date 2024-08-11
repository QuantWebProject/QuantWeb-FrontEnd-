export type ToauthType = "kakao" | "naver" | "google";

export interface IRequestLoginCode {
  redirectUrl: string;
  type: ToauthType;
}

export interface ILogin {
  code: string;
  redirectUrl: string;
  type: ToauthType;
}
