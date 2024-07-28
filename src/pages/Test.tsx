import styled from "styled-components";
import SnbDashBoardSVG from "@/assets/images/SnbDashBoard.svg?react";
import SnbMarketSVG from "@/assets/images/SnbMarket.svg?react";
import SnbBackTestingSVG from "@/assets/images/SnbBackTesting.svg?react";
import SnbMockInvestSVG from "@/assets/images/SnbMockInvest.svg?react";
import MyPageModal from "@/components/Modal/MyPageModal";
import SocialLoginModal from "@/components/Modal/SocialLoginModal";

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
      <SocialLoginModal></SocialLoginModal>
      <MyPageModal></MyPageModal>
    </TestStyle>
  );
};

const TestStyle = styled.div`
  background-color: grey;
`;

export default Test;
