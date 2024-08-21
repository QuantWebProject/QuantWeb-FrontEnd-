import { TBodySize } from "@/style/theme";
import { HTMLAttributes } from "react";
import styled from "styled-components";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size: TBodySize;
  color?: string;
}

const Body = ({ children, size, color, ...props }: Props) => {
  return (
    <BodyStyle size={size} color={color} {...props}>
      {children}
    </BodyStyle>
  );
};

const BodyStyle = styled.div<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.bodySize[size]};
  color: ${({ theme, color }) => (color ? color : theme.color.gray10)};
  line-height: ${({ size }) =>
    size === "B3" ? "150%" : size === "B4" ? "140%" : "160%"};
  font-weight: ${({ size }) => (size === "B1" ? 500 : 400)};
`;
export default Body;
