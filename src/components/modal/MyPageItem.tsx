import styled from "styled-components";
import Body from "../common/Body";
import NextButton from "@/assets/images/NextButton.svg?react";
interface Props {
  text: string;
  icon?: React.ReactNode;
  buttonText: string;
  isConnected: boolean;
}

const MyPageItem = ({ text, icon, buttonText, isConnected }: Props) => {
  return (
    <MyPageItemStyle>
      <div className="icon"> {icon}</div>
      <div className="field">
        <Body size="B1"> {text}</Body>
      </div>

      {isConnected ? (
        <Body size="B1" color="#7467FF">
          {buttonText}
        </Body>
      ) : (
        <div className="icon">
          <NextButton />
        </div>
      )}
    </MyPageItemStyle>
  );
};

const MyPageItemStyle = styled.div`
  display: flex;
  width: 548px;
  height: 56px;
  padding: 0px 16px;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  border: 1px solid #c8c8d6;
  .field {
    flex: 1 0 0;
  }

  .icon {
    display: flex;
    align-items: center;
    svg {
      color: ${({ theme }) => theme.color.gray6};
    }
  }
`;
export default MyPageItem;
