import styled from "styled-components";
import CheckBoxSVG from "@/assets/images/checkBox.svg?react";

interface Props {
  isChecked: boolean;
  onCheck: () => void;
}

const CheckBox = ({ isChecked, onCheck }: Props) => {
  return (
    <CheckBoxStyle $isChecked={isChecked} onClick={onCheck}>
      <CheckBoxSVG />
    </CheckBoxStyle>
  );
};

const CheckBoxStyle = styled.button<{ $isChecked: boolean }>`
  width: 24px;
  height: 24px;
  border: 1px solid
    ${({ theme, $isChecked }) =>
      $isChecked ? theme.color.main : theme.color.gray3};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme, $isChecked }) =>
    $isChecked ? theme.color.main : "none"};

  svg {
    stroke: ${({ theme, $isChecked }) =>
      $isChecked ? theme.color.white : theme.color.gray3};
  }

  cursor: pointer;
`;
export default CheckBox;
