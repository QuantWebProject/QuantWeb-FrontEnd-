import styled from "styled-components";
import Title from "../common/Title";
import KakaoSVG from "@/assets/images/socialLogin/kakaoLogin.svg?react";
import NaverSVG from "@/assets/images/socialLogin/naverLogin.svg?react";
import GooGleSVG from "@/assets/images/googleIcon.svg?react";
import MyPageItem from "./MyPageItem";
import XButton from "./XButton";
const MyPageModal = () => {
  return (
    <MyPageModalStyle>
      <div className="modal-header">
        <Title size="T3" color="gray10">
          내 정보 수정
        </Title>
        <XButton onClose={() => {}} />
      </div>
      <div className="modal-body">
        <div className="modal-item">
          <Title size="T6">닉네임</Title>
          <MyPageItem
            text="갈라파고스물개"
            buttonText="변경"
            isConnected={true}
          ></MyPageItem>
        </div>
        <div className="modal-item">
          <Title size="T6">SNS 계정 연결</Title>
          <MyPageItem
            icon={<GooGleSVG />}
            text="구글 계정 연결하기"
            buttonText="연결해제"
            isConnected={false}
          ></MyPageItem>
          <MyPageItem
            icon={<KakaoSVG />}
            text="abce1234@kakao.com"
            buttonText="연결해제"
            isConnected={true}
          ></MyPageItem>
          <MyPageItem
            icon={<NaverSVG />}
            text="네이버 계정 연결하기"
            buttonText="연결해제"
            isConnected={false}
          ></MyPageItem>
        </div>
        <div className="modal-item">
          <Title size="T6">한국투자증권 계좌 연동</Title>
          <MyPageItem
            text="한국투자증권 계좌 연동하기"
            buttonText="변경"
            isConnected={false}
          ></MyPageItem>
        </div>
        <div className="modal-item">
          <button>회원탈퇴</button>
        </div>
      </div>
    </MyPageModalStyle>
  );
};

const MyPageModalStyle = styled.div`
  width: 632px;
  height: 750px;
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
    display: flex;
    padding: 32px 42px 42px 42px;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    border-radius: 0px 0px 18px 18px;
    .modal-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
  }
`;
export default MyPageModal;
