import { login } from "@/api/member";
import { useTypedDispatch } from "@/hooks/redux";
import { ToauthType } from "@/models/member";
import { setLogin } from "@/store/slices/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Callback = () => {
  const code = new URL(window.location.href).searchParams.get("code"); // 인가코드 추출
  const pathUrl = window.location.pathname; // redirect url의 path 추출
  const splitUrl = pathUrl.split("/");
  const type = splitUrl[splitUrl.length - 1]; // type 추출

  const dispatch = useTypedDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      login(code, pathUrl, type as ToauthType)
        .then(() => {
          window.alert(`⭕ login 성공!`);
          dispatch(setLogin());
          navigate("/"); // todo: 이전 페이지로 이동 (주의: navigate(-1)을 사용하면 이전 페이지로 돌아가면서 상태가 초기화될 수 있음)
        })
        .catch((err) => console.log(`❌ ${err}`));
    }
  }, [code, pathUrl, type, dispatch, navigate]);

  return (
    <CallbackStyle>
      {/* todo: 대체할 이미지 */}
      <h1>로딩중 딩링링...</h1>
    </CallbackStyle>
  );
};

const CallbackStyle = styled.div``;
export default Callback;
