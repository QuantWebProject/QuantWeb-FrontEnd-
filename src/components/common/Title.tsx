import { ColorKey, THeadingSize } from "@/style/theme";
import React, { HTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size: THeadingSize;
  color?: ColorKey;
}
const Title = ({ children, size, color, ...props }: Props) => {
  return (
    <TitleStyle size={size} color={color} {...props}>
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
