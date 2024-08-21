import { http } from "@/api/http";
import QuantLogoSVG from "@/assets/images/QuantLogo.svg?react";
import SnbBackTestingSVG from "@/assets/images/SnbBackTesting.svg?react";
import SnbDashBoardSVG from "@/assets/images/SnbDashBoard.svg?react";
import SnbMarketSVG from "@/assets/images/SnbMarket.svg?react";
import SnbMockInvestSVG from "@/assets/images/SnbMockInvest.svg?react";
import Modal from "@/components/modal/Modal";
import MyPageModal from "@/components/modal/MyPageModal";
import SocialLoginModal from "@/components/modal/SocialLoginModal";
import { MEMBER_API } from "@/constants/apiPath";
import { useTypedDispatch, useTypedSelector } from "@/hooks/redux";
import useModal from "@/hooks/useModal";
import { setLogout } from "@/store/slices/authSlice";
import styled from "styled-components";
import Body from "../Body";
import LoginButton from "../LoginButton";
import SnbItem from "./SnbItem";

const SNB_ITEM = [
  {
    icon: <SnbBackTestingSVG />,
    name: "백태스팅",
    path: "/backtesting"
  },
  { icon: <SnbMockInvestSVG />, name: "모의투자", path: "/test" },
  { icon: <SnbMarketSVG />, name: "마켓", path: "/market" },
  { icon: <SnbDashBoardSVG />, name: "MY 대시보드", path: "/my-dashboard" }
];

const NavBar = () => {
  const { isLoggedIn } = useTypedSelector((state) => state.auth);
  const dispatch = useTypedDispatch();

  const {
    isOpen: isLoginOpen,
    modalOpen: loginModalOpen,
    modalClose: loginModalClose
  } = useModal(false);

  const {
    isOpen: isMyOpen,
    modalOpen: myModalOpen,
    modalClose: myModalClose
  } = useModal(false);

  const logout = () => {
    http
      .post(MEMBER_API.logout)
      .then(() => {
        dispatch(setLogout());
      })
      .catch((err) => console.log(`❌ ${err}`));
  };

  const handleLog = (type: "login" | "logout") => {
    const handlers = {
      login: () => {
        loginModalOpen();
      },
      logout: () => {
        logout();
      }
    };
    handlers[type]();
  };

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
                schema={
                  location.pathname === item.path ? "selected" : "default"
                }
                icon={item.icon}
                diasbled={false}
                path={item.path}
              />
            ))}
          </SnbItemStyle>
        </SnbItemWithTitleStyle>
        <Buttons>
          {isLoggedIn && (
            <MyInfoButton onClick={myModalOpen}>
              <Body size="B2" color="white">
                내 정보 수정
              </Body>
            </MyInfoButton>
          )}
          <LoginButton
            onClick={() => handleLog(isLoggedIn ? "logout" : "login")}
          >
            {isLoggedIn ? "로그아웃" : "로그인"}
          </LoginButton>
        </Buttons>
      </SnbItemWithTitleAndLoginButtonStyle>
      {isLoginOpen && (
        <Modal onClose={loginModalClose}>
          <SocialLoginModal onClose={loginModalClose} />
        </Modal>
      )}
      {isMyOpen && (
        <Modal onClose={myModalClose}>
          <MyPageModal onClose={myModalClose} />
        </Modal>
      )}
    </NavBarStyle>
  );
};
const NavBarStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 344px;
  height: 100vh;
  padding: 48px 32px;
  flex-direction: column;
  flex-shrink: 0;
  background: #7467ff;
  z-index: 1000;
`;
const SnbItemWithTitleAndLoginButtonStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100%;
`;
const SnbItemWithTitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  .logo {
    display: flex;
    padding-left: 20px;
    flex-direction: column;
    gap: 10px;
  }
  flex: 1;
`;
const SnbItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  button {
    height: 48px;
  }
`;

const MyInfoButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0px 20px;
`;

export default NavBar;
