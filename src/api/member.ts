import { MEMBER_API } from "@/constants/apiPath";
import { ToauthType } from "@/models/member";
import qs from "qs";
import { http } from "./http";

// todo: env 파일로 분리
const BASE_URL = "http://localhost:5173";

export const requestLoginCode = (type: ToauthType) => {
  const REDIRECT_URL = `${BASE_URL}/oauth2/callback/${type}`;

  return http.get(
    `${MEMBER_API.requestLoginCode}?${qs.stringify({ redirectUrl: REDIRECT_URL, type })}`
  );
};

export const login = (code: string, pathUrl: string, type: ToauthType) => {
  const REDIRECT_URL = `${BASE_URL}${pathUrl}`;

  return http.get(
    `${MEMBER_API.login}?${qs.stringify({ code, redirectUrl: REDIRECT_URL, type })}`
  );
};

export const refresh = () => {
  return http.post(MEMBER_API.refresh);
};

export const logout = () => {
  return http.post(MEMBER_API.logout);
};

export const requestUserInfo = () => {
  return http.get(MEMBER_API.userInfo);
};
