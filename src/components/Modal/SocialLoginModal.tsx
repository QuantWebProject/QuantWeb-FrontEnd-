import styled from "styled-components";
import SocialLoginButton from "../oauth/SocialLoginButton";
import Title from "../common/Title";

const SocialLoginModal = () => {
  return (
    <SocialLoginModalStyle>
      <Title size="T2" color="gray10">
        로그인 또는 회원가입
      </Title>
      <SocialLoginButton schema="google" />
      <SocialLoginButton schema="kakao" />
      <SocialLoginButton schema="naver" />
    </SocialLoginModalStyle>
  );
};

const SocialLoginModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 18px;
`;

export default SocialLoginModal;
