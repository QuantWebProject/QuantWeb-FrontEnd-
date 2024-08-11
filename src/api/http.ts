import axios, { AxiosError, AxiosResponse } from "axios";

// todo: env 파일로 분리
const IS_DEV_MODE = import.meta.env.MODE === "development";

const BASE_URL = IS_DEV_MODE
  ? "/api"
  : "http://ec2-43-203-223-126.ap-northeast-2.compute.amazonaws.com:8080";
const TIME_OUT = 10000;

export const http = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  withCredentials: true
});

const onResponse = (res: AxiosResponse) => {
  return res;
};

const onError = (error: AxiosError | Error) => {
  if (error instanceof AxiosError) {
    if (!error.response) {
      console.log(`❌ Network Error`);
    } else {
      const { status } = error.response;
      if (status >= 500) {
        console.log(`❌ Server Error`);
      } else if (status === 400) {
        console.log(`❌ InValid Request Error`);
      } else if (status === 401) {
        console.log(`❌ InValid Token Error`);
      } else {
        console.log(`❌ ${status} Error`);
      }
    }
  } else {
    console.log(`❌ ${error.message}`);
  }

  return Promise.reject(error);
};

http.interceptors.response.use(onResponse, onError);
