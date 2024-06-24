import styled from "styled-components";
import XIcon from "@/assets/images/xModalIcon.svg?react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClose: () => void;
}
const XButton = ({ onClose }: Props) => {
  return (
    <XButtonStyle onClick={onClose}>
      <XIcon />
    </XButtonStyle>
  );
};

const XButtonStyle = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  padding: 0;
  border: none;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.color.gray8};
  background: none;
`;
export default XButton;
