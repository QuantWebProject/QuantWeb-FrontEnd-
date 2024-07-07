import { IAllStrategy } from "@/models/backtesting";
import { useState } from "react";
import styled from "styled-components";

const MyStrategyList = () => {
  const [myStrategyList, setMyStrategyList] = useState<IAllStrategy[]>([]);
  return (
    <MyStrategyListStyle>
      {myStrategyList.length === 0 && <div>아직 저장된 전략이 없어요!</div>}
      {myStrategyList.length > 0 && <div>리스트 출력</div>}
    </MyStrategyListStyle>
  );
};

const MyStrategyListStyle = styled.div``;
export default MyStrategyList;
