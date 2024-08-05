import qs from "qs";
import { http } from "./http";
import { ILogin, ToauthType } from "@/models/member";
import { memberAPI } from "@/constants/apiPath";

export const requestLoginCode = (type: ToauthType) => {
  const REDIRECT_URL = "http://localhost:5173/oauth2/callback/kakao";
  return http.get(
    `${memberAPI.requestLoginCode}${qs.stringify({ redirectUrl: REDIRECT_URL, type })}`
  );
};

export const login = (data: ILogin) => {
  return http.post(
    `${memberAPI.login}${qs.stringify({ code: data.code, redirectUrl: "?", type: data.type })}`
  );
};

export const refresh = () => {
  return http.post(memberAPI.refresh);
};

export const logout = () => {
  return http.post(memberAPI.logout);
};

export const requestUserInfo = () => {
  return http.get(memberAPI.userInfo);
};
