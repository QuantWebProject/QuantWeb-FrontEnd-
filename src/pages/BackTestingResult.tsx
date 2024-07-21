import styled from "styled-components";
import DailyCumulativeReturn from "@/components/backtestingResult/DailyCumulativeReturn";
const BackTestingResult = () => {
  return <DailyCumulativeReturn />;
};

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px;

  background-color: aliceblue;
`;
export default BackTestingResult;
