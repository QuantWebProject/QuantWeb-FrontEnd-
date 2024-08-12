import BasicSetup from "@/components/backtesting/BasicSetup";
import MiddleSetup from "@/components/backtesting/MiddleSetup";
import styled from "styled-components";

const BackTesting = () => {
  return (
    <BackTestingStyle>
      <div className="setting left-setting">
        <BasicSetup />
      </div>
      <div className="setting middle-setting">
        <MiddleSetup />
      </div>
      <div className="setting right-setting"></div>
    </BackTestingStyle>
  );
};

const BackTestingStyle = styled.div`
  padding: 1.5rem;
  display: flex;
  gap: 1.5rem;
  min-height: calc(100vh - 124px);
  background-color: ${({ theme }) => theme.color.gray1};

  .setting {
    border-radius: 18px;
    background-color: white;
  }

  .left-setting {
    flex: 1;
  }
  .middle-setting {
    flex: 1;
  }

  .right-setting {
    flex: 1.8;
  }
`;
export default BackTesting;
