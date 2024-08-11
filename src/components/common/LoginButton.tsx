import LoginImage from "@/assets/images/Login.svg?react";
import { ButtonHTMLAttributes, useState } from "react";
import styled from "styled-components";
import Body from "./Body";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const LoginButton = ({ children, ...props }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <LoginButtonStyleStyle
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {isHovered && (
        <div className="icon">
          <LoginImage />
        </div>
      )}
      <Body size={"B2"} color={isHovered ? "#DADADA" : "white"}>
        {children}
      </Body>
    </LoginButtonStyleStyle>
  );
};

const LoginButtonStyleStyle = styled.div<Omit<Props, "children">>`
  &:hover {
    padding: 0px 16px;
    gap: 8px;
    .icon {
      svg {
        color: #dadada;
      }
    }
  }
  display: flex;
  width: 280px;
  height: 48px;
  padding: 0px 20px;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  cursor: pointer;
`;
export default LoginButton;
