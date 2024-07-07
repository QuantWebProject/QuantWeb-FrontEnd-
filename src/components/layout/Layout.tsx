import React from "react";
import styled from "styled-components";
import Header from "./Header";
import NavBar from "../common/navbar/NavBar";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutStyle>
      <Header />
      <NavBar />
      <main>{children}</main>
    </LayoutStyle>
  );
};

const LayoutStyle = styled.div`
  padding: 124px 0 0 344px;
`;

export default Layout;
