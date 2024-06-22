import { ColorKey, THeadingSize } from "@/style/theme";
import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  size: THeadingSize;
  color?: ColorKey;
}
const Title = ({ children, size, color }: Props) => {
  return (
    <TitleStyle size={size} color={color}>
      {children}
    </TitleStyle>
  );
};

const TitleStyle = styled.div<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.headingSize[size]};
  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.gray10};
  line-height: 160%;
  font-weight: ${({ size }) => (size === "T6" || size === "T7" ? 500 : 600)};
`;
export default Title;
