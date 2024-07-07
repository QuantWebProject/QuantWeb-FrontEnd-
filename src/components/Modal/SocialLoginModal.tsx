import React, { useState } from "react";
import styled from "styled-components";
import SocialLoginButton from "../oauth/SocialLoginButton";
import Modal from "./Modal";
import ModalInner from "./ModalInner";
import Title from "../common/Title";

const SocialLoginModal = () => {
  const [isOpen, setIsOpen] = useState(true); // 초기에는 모달이 열려 있도록 설정

  const handleClose = () => {
    console.log("Modal closed");
    setIsOpen(false);
  };

  return (
    <SocialLoginModalStyle>
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalInner headerTitle="로그인 또는 회원가입" onClose={handleClose}>
          <SocialLoginButton schema="google" />
          <SocialLoginButton schema="kakao" />
          <SocialLoginButton schema="naver" />
        </ModalInner>
      </Modal>
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
