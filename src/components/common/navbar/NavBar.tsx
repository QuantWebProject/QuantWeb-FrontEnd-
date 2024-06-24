import styled from "styled-components";
import QuantLogoSVG from "@/assets/images/QuantLogo.svg?react";
import LoginButton from "../LoginButton";
interface Props {
  children: React.ReactNode;
}

const NavBar = ({ children }: Props) => {
  return (
    <NavBarStyle>
      <SnbItemWithTitleAndLoginButtonStyle>
        <SnbItemWithTitleStyle>
          <QuantLogoSVG className="logo" />
          <SnbItemStyle>{children}</SnbItemStyle>
        </SnbItemWithTitleStyle>
        <LoginButton>로그인</LoginButton>
      </SnbItemWithTitleAndLoginButtonStyle>
    </NavBarStyle>
  );
};
const NavBarStyle = styled.div`
  display: inline-flex;
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
