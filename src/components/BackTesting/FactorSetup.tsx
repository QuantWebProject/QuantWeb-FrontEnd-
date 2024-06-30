import styled from "styled-components";
import SetupTitle from "../common/SetupTitle";
import FactorDropdown from "./FactorDropdown";
import { useState } from "react";

const OPTIONS = [
  {
    id: 0,
    name: "PBR(현재 가격 / 장부가치)",
    info: "낮을수록 저평가되고 있다는 뜻입니다. 기업의 장부 가치와 현재 기준 시가총액을 비교한 값입니다."
  },
  {
    id: 1,
    name: "PER (현재 가격 / 순이익)",
    info: "본인이 매수/매도하고 싶은 종목과 수량을 한국투자증권에서 제공하는 API를 통해 주문을 실행하는 방식입니다."
  },
  { id: 2, name: "PSR (현재 가격 / 매출액)", info: "" },
  { id: 3, name: "P/CF (현재 가격 / 현금성 이익)", info: "" },
  { id: 4, name: "시가총액 ", info: "" }
];

const OPTIONS2 = [
  {
    id: 5,
    name: "매출총이익률",
    info: "낮을수록 저평가되고 있다는 뜻입니다. 기업의 장부 가치와 현재 기준 시가총액을 비교한 값입니다."
  },
  {
    id: 6,
    name: "영업이익률",
    info: "본인이 매수/매도하고 싶은 종목과 수량을 한국투자증권에서 제공하는 API를 통해 주문을 실행하는 방식입니다."
  },
  { id: 7, name: "순이익률", info: "" }
];

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
        options={OPTIONS}
        optionsActive={optionsActive}
        onCheck={handleOptionsActive}
        open
      />
      <FactorDropdown
        title="수익성"
        titleInfo="수익성이란?"
        options={OPTIONS2}
        optionsActive={optionsActive}
        onCheck={handleOptionsActive}
      />
    </FactorSetupStyle>
  );
};

const FactorSetupStyle = styled.div``;
export default FactorSetup;
