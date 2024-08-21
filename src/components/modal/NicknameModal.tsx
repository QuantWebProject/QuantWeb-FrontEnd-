import styled from "styled-components";
import Button from "../common/Button";
import Input from "../common/Input";
import Title from "../common/Title";
import XButton from "./XButton";

interface Props {
  onClose: () => void;
}

const NicknameModal = ({ onClose }: Props) => {
  return (
    <NicknameModalStyle>
      <div className="nickname-header">
        <Title size="T6" color="gray10">
          닉네임 변경
        </Title>
        <XButton onClose={onClose} className="close-button" />
      </div>
      <div className="nickname-body">
        <Input unit={"8/15"} placeholder={"갈라파고스물개"} />
        <ButtonWrapper>
          <Button schema={"inactivated"} size="wideMedium">
            변경
          </Button>
        </ButtonWrapper>
      </div>
    </NicknameModalStyle>
  );
};

const NicknameModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 412px;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.default};

  position: relative;
  z-index: 2000;

  .nickname-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 14px 22px;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray3};

    .close-button {
      margin-right: auto;
    }
  }
  .nickname-body {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 22px;
    input {
      width: 100%;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  height: 48px;

  button {
    width: 108px;
    height: 100%;
  }
`;
export default NicknameModal;
