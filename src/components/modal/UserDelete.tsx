import styled from "styled-components";
import Body from "../common/Body";
import Button from "../common/Button";
import Title from "../common/Title";

interface Props {
  onClose: () => void;
}

const UserDelete = ({ onClose }: Props) => {
  return (
    <Wrapper>
      <Title size="T6" color="gray10" className="center title">
        회원님, 정말 탈퇴하시겠어요?
      </Title>
      <Body size="B3" color="#6D6D7D" className="center body">
        탈퇴 즉시 모든 정보가 삭제되며, 데이터 복구가 불가해요
        <br />
        SNS 계정 연결 해지를 위해 로그인이 필요할 수 있으며, <br />
        재가입은 탈퇴일로부터 30일 후 가능해요
      </Body>
      <Buttons>
        <Button size="wideMedium" schema="default" onClick={onClose}>
          취소
        </Button>
        <Button size="wideMedium" schema="activated">
          탈퇴
        </Button>
      </Buttons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 412px;
  padding: 36px 22px;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.default};

  position: relative;
  z-index: 2000;

  .title {
    margin-bottom: 8px;
  }
  .body {
    margin-bottom: 24px;
  }

  .center {
    text-align: center;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  height: 48px;

  button {
    height: 100%;
    flex: 1;
  }
`;
export default UserDelete;
