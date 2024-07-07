import styled from "styled-components";
import { FABHeader } from "./MyStrategyList";
import Title from "../common/Title";
import XButton from "../Modal/XButton";
import { useState } from "react";

const StrategyNameChange = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const handleClose = () => setIsOpen(false);

  return (
    <StrategyNameChangeStyle>
      <FABHeader>
        <Title size="T6" color="gray10">
          전략 이름 변경
        </Title>
        <XButton onClose={handleClose} />
      </FABHeader>

      <div className="body">
        <fieldset>
          <input type="text" />
          <div className="letter-count"></div>
        </fieldset>
      </div>
    </StrategyNameChangeStyle>
  );
};

const StrategyNameChangeStyle = styled.div`
  width: 412px;
  height: 212px;
  border-radius: 0.75rem;
  box-shadow: ${({ theme }) => theme.boxShadow.shadow1};
  background-color: #fff;

  fieldset {
    input {
      height: 48px;
      border: 1px solid ${({ theme }) => theme.color.gray4};
      border-radius: 0.5rem;
      width: 100%;
      padding: 0.62rem 3.88rem 0.62rem 1rem;

      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      color: ${({ theme }) => theme.color.gray5};
    }
  }
`;
export default StrategyNameChange;
