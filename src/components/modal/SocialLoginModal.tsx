import styled from "styled-components";
import SocialLoginButton from "../oauth/SocialLoginButton";
import Title from "../common/Title";
import XButton from "./XButton";

const SocialLoginModal = () => {
  return (
    <SocialLoginModalStyle>
      <div className="modal-header">
        <Title size="T2" color="gray10">
          로그인 또는 회원가입
        </Title>
        <XButton onClose={() => {}} />
      </div>
      <div className="modal-body">
        <div className="notice">
          <Title size="T6" color="gray9">
            SNS 계정으로 간편하게 QUANT 시작해요!
          </Title>
        </div>
        <div className="social-buttons">
          <SocialLoginButton schema="google" />
          <SocialLoginButton schema="kakao" />

          <SocialLoginButton schema="naver" />
        </div>
      </div>
    </SocialLoginModalStyle>
  );
};

const SocialLoginModalStyle = styled.div`
  width: 600px;
  height: 442px;
  background-color: white;
  border-radius: 18px;
  position: relative;
  .modal-header {
    height: 84px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px 18px 0px 0px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray3};

    button {
      position: absolute;
      top: 30px;
      right: 28px;
    }
  }

  .modal-body {
    .notice {
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .social-buttons {
      padding: 0px 42px 42px 42px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
  }
`;

export default SocialLoginModal;
