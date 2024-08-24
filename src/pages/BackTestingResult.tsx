import styled from "styled-components";
import DailyCumulativeReturn from "@/components/backtestingResult/DailyCumulativeReturn";
import Mdd from "@/components/backtestingResult/Mdd";
import FinalAsset from "@/components/backtestingResult/FinalAsset";
import InvestmentSectors from "@/components/backtestingResult/InvestmentSectors";
const BackTestingResult = () => {
  return (
    <Container className="container">
      <Top>
        <Left>
          <DailyCumulativeReturn />
          <Mdd />
        </Left>

        <Right>
          <FinalAsset />
          <InvestmentSectors />
        </Right>
      </Top>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export default BackTestingResult;
