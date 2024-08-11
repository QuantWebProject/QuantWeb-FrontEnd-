import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { refresh } from "./member";

// todo: env 파일로 분리
const IS_DEV_MODE = import.meta.env.MODE === "development";

// todo: 추후에 도메인 일치 시 삭제
const SERVER_BASE_URL =
  "http://ec2-43-203-223-126.ap-northeast-2.compute.amazonaws.com:8080";

const BASE_URL = IS_DEV_MODE ? "/api" : `${SERVER_BASE_URL}/api`;
const TIME_OUT = 10000;

let isAlreadyAlerted = false; // 전역 플래그 변수, 중복으로 401 처리하는 것 방지
export const http = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  withCredentials: true
});

const onResponse = (res: AxiosResponse) => {
  return res;
};

// todo: 알람을 에러 바운더리 혹은 모달로 대체하고, 메세지 상수 파일로 분리
const onError = (error: AxiosError) => {
  const status = error.response?.status;
  const originalConfig = error.config;

  if (!error.response) {
    window.alert(`❌ Network Error`);
  } else if (error.response.status >= 500) {
    window.alert("❌ Server Error");
  } else if (error.response.status === 401 && !isAlreadyAlerted) {
    window.alert(`❌ InValid Token Error`);
    // 엑세스 토큰 재발급
    refresh()
      .then(() => {
        isAlreadyAlerted = true;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return http(originalConfig as AxiosRequestConfig<any>);
      })
      .catch(() => {
        // todo: 로그인 상태 변경
        window.alert("토큰이 만료되어 자동으로 로그아웃 되었습니다.");
      });
  } else {
    window.alert(`❌ ${status ? status + " Error" : "Unknown Error"}`);
  }

  return Promise.reject(error);
};

http.interceptors.response.use(onResponse, onError);
