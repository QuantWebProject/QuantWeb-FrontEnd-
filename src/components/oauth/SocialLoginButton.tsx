import styled from "styled-components";
import GoogleSVG from "@/assets/images/googleIcon.svg?react";
import KaKaoSVG from "@/assets/images/kakaoIcon.svg?react";
import NaverSVG from "@/assets/images/naverIcon.svg?react";
import React from "react";

type TSchema = "google" | "kakao" | "naver";

const buttonStyle: {
  [key in TSchema]: {
    icon: React.ReactNode;
    text: string;
    color: string;
    background: string;
  };
} = {
  google: {
    icon: <GoogleSVG />,
    text: "구글로 시작하기",
    color: "#1F1D1D",
    background: "#FFFFFF"
  },
  kakao: {
    icon: <KaKaoSVG />,
    text: "카카오로 시작하기",
    color: "#1F1D1D",
    background: "#FEE500"
  },
  naver: {
    icon: <NaverSVG />,
    text: "네이버로 시작하기",
    color: "#fff",
    background: "#03C75A"
  }
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  schema: TSchema;
}

const SocialLoginButton = ({ schema }: Props) => {
  return (
    <SocialLoginButtonStyle
      $schema={schema}
      $color={buttonStyle[schema].color}
      $background={buttonStyle[schema].background}
    >
      <div className="icon">{buttonStyle[schema].icon}</div>
      <span>{buttonStyle[schema].text}</span>
    </SocialLoginButtonStyle>
  );
};

const SocialLoginButtonStyle = styled.button<{
  $color: string;
  $background: string;
  $schema: TSchema;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  width: 504px;
  height: 68px;

  color: ${({ $color }) => $color};

  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius.default};
  /* border: none; */
  border: 1.8px solid transparent;
  background: ${({ $schema, $background }) =>
    $schema === "google"
      ? "linear-gradient(#fff, #fff),linear-gradient(to right, #EA4335 0%, #FBBC05 26%, #34A853 65%, #4285F4 100%)"
      : $background || "#7467FF"};
  background-origin: border-box;
  background-clip: content-box, border-box;
  padding: 0;

  span {
    font-size: 22px;
    font-weight: 600;
  }
  .icon {
    display: flex;
    align-items: center;
  }
`;
export default SocialLoginButton;
