import styled from "styled-components";
import DailyCumulativeReturn from "@/components/backtestingResult/DailyCumulativeReturn";
import Mdd from "@/components/backtestingResult/Mdd";
const BackTestingResult = () => {
  return (
    <div>
      <DailyCumulativeReturn />
      <Mdd />
    </div>
  );
};

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px;

  background-color: aliceblue;
`;
export default BackTestingResult;
