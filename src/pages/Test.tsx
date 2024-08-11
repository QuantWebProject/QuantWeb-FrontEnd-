import SnbBackTestingSVG from "@/assets/images/SnbBackTesting.svg?react";
import SnbDashBoardSVG from "@/assets/images/SnbDashBoard.svg?react";
import SnbMarketSVG from "@/assets/images/SnbMarket.svg?react";
import SnbMockInvestSVG from "@/assets/images/SnbMockInvest.svg?react";
import BasicSetup from "@/components/backtesting/BasicSetup";
import NavBar from "@/components/common/navbar/NavBar";
import MyPageModal from "@/components/modal/MyPageModal";
import styled from "styled-components";
import BackTestingResult from "./BackTestingResult";
export const SNB_ITEM = [
  {
    icon: <SnbBackTestingSVG />,
    name: "백태스팅"
  },
  { icon: <SnbMockInvestSVG />, name: "모의투자" },
  { icon: <SnbMarketSVG />, name: "마켓" },
  { icon: <SnbDashBoardSVG />, name: "MY 대시보드" }
];

const Test = () => {
  return (
    <TestStyle>
      <NavBar />
      <Page>
        <BasicSetup />
        <BackTestingResult />
        <MyPageModal></MyPageModal>
      </Page>
    </TestStyle>
  );
};

const TestStyle = styled.div`
  background-color: #efeff1;
  display: flex;
  flex-direction: row;
`;

const Page = styled.div`
  background-color: #efeff1;
`;

export default Test;
