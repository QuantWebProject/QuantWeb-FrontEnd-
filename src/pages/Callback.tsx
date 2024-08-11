import { login } from "@/api/member";
import { ToauthType } from "@/models/member";
import { useEffect } from "react";
import styled from "styled-components";

const Callback = () => {
  const code = new URL(window.location.href).searchParams.get("code"); // 인가코드 추출
  const pathUrl = window.location.pathname; // redirect url의 path 추출
  const splitUrl = pathUrl.split("/");
  const type = splitUrl[splitUrl.length - 1]; // type 추출

  useEffect(() => {
    if (code) {
      login(code, pathUrl, type as ToauthType)
        .then(() => console.log(`⭕ | login 성공!`))
        .catch((err) => console.log(`❌ ${err}`));
    }
  }, [code, pathUrl, type]);

  return (
    <CallbackStyle>
      <h1>로딩중...</h1>
    </CallbackStyle>
  );
};

const CallbackStyle = styled.div``;
export default Callback;
