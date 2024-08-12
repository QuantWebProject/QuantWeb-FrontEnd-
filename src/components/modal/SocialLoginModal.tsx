import { requestLoginCode } from "@/api/member";
import { ToauthType } from "@/models/member";
import styled from "styled-components";
import Title from "../common/Title";
import SocialLoginButton from "../oauth/SocialLoginButton";
import XButton from "./XButton";

interface Props {
  onClose: () => void;
}

const SocialLoginModal = ({ onClose }: Props) => {
  const handleLoginCode = (type: ToauthType) => {
    requestLoginCode(type)
      .then((res) => {
        console.log(`⭕ request login code 성공!`);
        window.location.href = res.data.oauthLink;
      })
      .catch((err) => {
        console.log(`❌ ${err}`);
      });
  };

  return (
    <SocialLoginModalStyle>
      <div className="modal-header">
        <Title size="T2" color="gray10">
          로그인 또는 회원가입
        </Title>
        <XButton onClose={onClose} />
      </div>
      <div className="modal-body">
        <div className="notice">
          <Title size="T6" color="gray9">
            SNS 계정으로 간편하게 QUANT 시작해요!
          </Title>
        </div>
        <div className="social-buttons">
          <SocialLoginButton
            schema="google"
            onClick={() => handleLoginCode("google")}
          />
          <SocialLoginButton
            schema="kakao"
            onClick={() => handleLoginCode("kakao")}
          />
          <SocialLoginButton
            schema="naver"
            onClick={() => handleLoginCode("naver")}
          />
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
  z-index: 1000;
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
