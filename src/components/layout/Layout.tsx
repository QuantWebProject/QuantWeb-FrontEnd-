import React from "react";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
