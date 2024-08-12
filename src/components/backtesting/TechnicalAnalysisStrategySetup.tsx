import { FACTOR_STRATEGY_LIST } from "@/constants/backtest";
import { useState } from "react";
import styled from "styled-components";
import SetupTitle from "../common/SetupTitle";
import FactorItem from "./FactorItem";

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
          {FACTOR_STRATEGY_LIST.technical.map(({ id, name, info }) => (
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
      <div className="empty-bottom"></div>
    </TechnicalAnalysisStrategySetupStyle>
  );
};

const TechnicalAnalysisStrategySetupStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: hidden;

  border-radius: 1.125rem;
  border: 1px solid ${({ theme }) => theme.color.gray3};
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow.shadow1};

  ul {
    background: ${({ theme }) => theme.color.sub1};
  }
  .empty-bottom {
    height: 16px;
    border-radius: 0 0 1.125rem 1.125rem;
  }
`;

const OptionContainer = styled.div`
  overflow-y: auto;
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
export default TechnicalAnalysisStrategySetup;
