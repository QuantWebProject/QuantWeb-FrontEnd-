import styled from "styled-components";
import SnbDashBoardSVG from "@/assets/images/SnbDashBoard.svg?react";
import SnbMarketSVG from "@/assets/images/SnbMarket.svg?react";
import SnbBackTestingSVG from "@/assets/images/SnbBackTesting.svg?react";
import SnbMockInvestSVG from "@/assets/images/SnbMockInvest.svg?react";
import NavBar from "@/components/common/navbar/NavBar";
import BasicSetup from "@/components/backtesting/BasicSetup";
import SocialLoginModal from "@/components/modal/SocialLoginModal";
import MyPageModal from "@/components/modal/MyPageModal";
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
        <BackTestingResult />
        <SocialLoginModal></SocialLoginModal>
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
