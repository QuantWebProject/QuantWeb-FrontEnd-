import {
  isAuthorityError,
  isBadRequestError,
  isConflictError,
  isNetworkError,
  isNotFoundError,
  isServerError,
  isTimeoutError,
  isTokenError
} from "@/utils/error";
import axios, { AxiosError, AxiosResponse } from "axios";
import { refresh } from "./member";

// todo: env 파일로 분리
const IS_DEV_MODE = import.meta.env.MODE === "development";

// todo: 추후에 도메인 일치 시 삭제
const SERVER_BASE_URL =
  "http://ec2-43-203-223-126.ap-northeast-2.compute.amazonaws.com:8080";

const BASE_URL = IS_DEV_MODE ? "/api" : `${SERVER_BASE_URL}/api`;
const TIME_OUT = 10000;

export const http = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  withCredentials: true
});

const onResponse = (res: AxiosResponse) => {
  return res;
};

// todo: 알람을 에러 바운더리 혹은 모달로 대체하고, 메세지 상수 파일로 분리
const onError = (error: AxiosError | Error) => {
  if (error instanceof AxiosError) {
    if (isNetworkError(error)) {
      window.alert(`❌ Network Error`);
    } else if (isTimeoutError(error)) {
      window.alert("❌ Timeout Error");
    } else if (isServerError(error)) {
      window.alert("❌ Server Error");
    } else if (isBadRequestError(error)) {
      window.alert(`❌ InValid Request Error`);
    } else if (isTokenError(error)) {
      window.alert(`❌ InValid Token Error`);
      // 엑세스 토큰 재발급
      refresh()
        .then(() => {
          window.location.reload();
        })
        .catch(() => {
          window.alert("토큰이 만료되어 자동으로 로그아웃 되었습니다.");
        });
    } else if (isAuthorityError(error)) {
      window.alert(`❌ Authority Error`);
    } else if (isNotFoundError(error)) {
      window.alert(`❌ NotFound Error`);
    } else if (isConflictError(error)) {
      window.alert(`❌ Conflict Error`);
    } else {
      const status = error.response?.status;
      window.alert(`❌ ${status ? status + " Error" : "Unknown Error"}`);
    }
  } else {
    window.alert(`👩‍🔧 ${error.message}`);
  }

  return Promise.reject(error);
};

http.interceptors.response.use(onResponse, onError);
