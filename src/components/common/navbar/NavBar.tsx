import styled from "styled-components";
import QuantLogoSVG from "@/assets/images/QuantLogo.svg?react";
import LoginButton from "../LoginButton";
import SnbItem from "./SnbItem";
import SnbDashBoardSVG from "@/assets/images/SnbDashBoard.svg?react";
import SnbMarketSVG from "@/assets/images/SnbMarket.svg?react";
import SnbBackTestingSVG from "@/assets/images/SnbBackTesting.svg?react";
import SnbMockInvestSVG from "@/assets/images/SnbMockInvest.svg?react";

const SNB_ITEM = [
  {
    icon: <SnbBackTestingSVG />,
    name: "백태스팅",
    path: "/backtesting"
  },
  { icon: <SnbMockInvestSVG />, name: "모의투자", path: "/test" },
  { icon: <SnbMarketSVG />, name: "마켓", path: "/" },
  { icon: <SnbDashBoardSVG />, name: "MY 대시보드", path: "/" }
];

const NavBar = () => {
  return (
    <NavBarStyle>
      <SnbItemWithTitleAndLoginButtonStyle>
        <SnbItemWithTitleStyle>
          <QuantLogoSVG className="logo" />
          <SnbItemStyle>
            {SNB_ITEM.map((item, index) => (
              <SnbItem
                key={index}
                text={item.name}
                schema="default"
                icon={item.icon}
                diasbled={false}
                path={item.path}
              />
            ))}
          </SnbItemStyle>
        </SnbItemWithTitleStyle>
        <LoginButton>로그인</LoginButton>
      </SnbItemWithTitleAndLoginButtonStyle>
    </NavBarStyle>
  );
};
const NavBarStyle = styled.div`
  display: inline-flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 344px;
  height: 980px;
  padding: 48px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 448px;
  flex-shrink: 0;
  background: #7467ff;
`;
const SnbItemWithTitleAndLoginButtonStyle = styled.div`
  display: flex;
  height: 884px;
  flex-direction: column;
  align-items: flex-start;
  gap: 398px;
  flex-shrink: 0;
  align-self: stretch;
`;
const SnbItemWithTitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 60px;
  .logo {
    display: flex;
    padding-left: 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
  }
`;
const SnbItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`;

export default NavBar;
