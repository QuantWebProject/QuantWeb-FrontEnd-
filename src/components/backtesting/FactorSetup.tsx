import { FACTOR_STRATEGY_LIST } from "@/constants/backtest";
import { useState } from "react";
import styled from "styled-components";
import SetupTitle from "../common/SetupTitle";
import FactorDropdown from "./FactorDropdown";

const FactorSetup = () => {
  const [optionsActive, setOptionsActive] = useState<number[]>([]);
  // const dropdownRef = useRef<HTMLDivElement | null>(null);

  /** 선택한 팩터 요소를 배열에 추가, 삭제 */
  const handleOptionsActive = (id: number) => {
    if (optionsActive.includes(id)) {
      setOptionsActive(optionsActive.filter((option) => option !== id)); // 삭제
    } else {
      setOptionsActive([...optionsActive, id]); // 추가
    }
  };

  console.log("팩터 설정 options: ", optionsActive);

  return (
    <FactorSetupStyle>
      <SetupTitle title="팩터 설정" info="*복수선택 가능" />
      <Choice>
        <FactorDropdown
          title="가치"
          titleInfo="가치란?"
          options={FACTOR_STRATEGY_LIST.value}
          optionsActive={optionsActive}
          onCheck={handleOptionsActive}
          open
        />
        <FactorDropdown
          title="수익성"
          titleInfo="수익성이란?"
          options={FACTOR_STRATEGY_LIST.profit}
          optionsActive={optionsActive}
          onCheck={handleOptionsActive}
        />
      </Choice>
      <div className="empty-bottom"></div>
    </FactorSetupStyle>
  );
};

const FactorSetupStyle = styled.div`
  border-radius: 1.125rem;
  border: 1px solid ${({ theme }) => theme.color.gray3};
  box-shadow: ${({ theme }) => theme.boxShadow.shadow1};
  background-color: #fff;

  .empty-bottom {
    height: 16px;
    border-radius: 0 0 1.125rem 1.125rem;
  }
`;

const Choice = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 360px;
`;
export default FactorSetup;
