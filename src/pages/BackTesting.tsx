import FactorSetup from "@/components/BackTesting/FactorSetup";
import TechnicalAnalysisStrategySetup from "@/components/BackTesting/TechnicalAnalysisStrategySetup";
import styled from "styled-components";

const BackTesting = () => {
  return (
    <BackTestingStyle>
      <div className="setting left-setting"></div>
      <div className="setting middle-setting">
        <div className="factor-setup">
          <FactorSetup />
        </div>
        <div className="technical-setup">
          <TechnicalAnalysisStrategySetup />
        </div>
      </div>
      <div className="setting right-setting"></div>
    </BackTestingStyle>
  );
};

const BackTestingStyle = styled.div`
  padding: 1.5rem;
  display: flex;
  gap: 1.5rem;
  height: calc(100vh - 124px);
  background-color: ${({ theme }) => theme.color.gray1};

  .setting {
    border-radius: 18px;
  }

  .left-setting {
    width: 388px;
    background-color: white;
  }
  .middle-setting {
    width: 388px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .right-setting {
    width: 704px;
    background-color: white;
  }
`;
export default BackTesting;
