import styled from "styled-components";
import FactorSetup from "./FactorSetup";
import TechnicalAnalysisStrategySetup from "./TechnicalAnalysisStrategySetup";

const MiddleSetup = () => {
  return (
    <MiddleSetupStyle>
      <FactorSetup />
      <TechnicalAnalysisStrategySetup />
    </MiddleSetupStyle>
  );
};

const MiddleSetupStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
`;
export default MiddleSetup;
