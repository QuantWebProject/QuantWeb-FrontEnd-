import qs from "qs";
import { http } from "./http";
import { ILogin, IRequestLoginCode } from "@/models/member";
import { memberAPI } from "@/constants/apiPath";

const BASE_URL = "http://localhost:5173";

export const requestLoginCode = (obj: IRequestLoginCode) => {
  const REDIRECT_URL = `${BASE_URL}${obj.pathUrl}`;

  return http.get(
    `${memberAPI.requestLoginCode}?${qs.stringify({ redirectUrl: REDIRECT_URL, type: obj.type })}`
  );
};

export const login = (obj: ILogin) => {
  const REDIRECT_URL = `${BASE_URL}${obj.pathUrl}`;

  return http.post(
    `${memberAPI.login}?${qs.stringify({ code: obj.code, redirectUrl: REDIRECT_URL, type: obj.type })}`
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
