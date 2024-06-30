import styled from "styled-components";
import SetupTitle from "../common/SetupTitle";
import { OptionContainer } from "./FactorDropdown";
import { useState } from "react";
import FactorItem from "./FactorItem";

const OPTIONS = [
  {
    id: 0,
    name: "Static Asset Allocation",
    info: ""
  },
  {
    id: 1,
    name: "Tactical Asset Allocation",
    info: ""
  },
  { id: 2, name: "MACD", info: "" },
  { id: 3, name: "Trend Following", info: "" },
  { id: 4, name: "RSI", info: "" },
  { id: 5, name: "볼린저 밴드", info: "" }
];

const TechnicalAnalysisStrategySetup = () => {
  const [optionsActive, setOptionsActive] = useState<number[]>([]);

  /** 선택한 팩터 요소를 배열에 추가, 삭제 */
  const handleOptionsActive = (id: number) => {
    if (optionsActive.includes(id)) {
      setOptionsActive(optionsActive.filter((option) => option !== id)); // 삭제
    } else {
      setOptionsActive([...optionsActive, id]); // 추가
    }
  };

  console.log("기술 분석 전략 options: ", optionsActive);

  return (
    <TechnicalAnalysisStrategySetupStyle>
      <SetupTitle title="기술 분석 전략" info="*1개 선택" />
      <OptionContainer>
        <ul>
          {OPTIONS.map(({ id, name, info }) => (
            <li key={id} onClick={() => () => handleOptionsActive(id)}>
              <FactorItem
                id={id}
                name={name}
                info={info}
                checked={optionsActive.includes(id)}
                onCheck={handleOptionsActive}
              />
            </li>
          ))}
        </ul>
      </OptionContainer>
    </TechnicalAnalysisStrategySetupStyle>
  );
};

const TechnicalAnalysisStrategySetupStyle = styled.div``;
export default TechnicalAnalysisStrategySetup;
