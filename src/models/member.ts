export type ToauthType = "kakao" | "naver" | "google";

export interface IRequestLoginCode {
  pathUrl: string;
  type: ToauthType;
}

export interface ILogin {
  code: string;
  pathUrl: string;
  type: ToauthType;
}
