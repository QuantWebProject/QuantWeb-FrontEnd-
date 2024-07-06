import styled from "styled-components";
import SetupTitle from "../common/SetupTitle";
import FactorDropdown from "./FactorDropdown";
import { useState } from "react";
import { FACTOR_STRATEGY_LIST } from "@/constants/backtest";

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
    </FactorSetupStyle>
  );
};

const FactorSetupStyle = styled.div``;
export default FactorSetup;
