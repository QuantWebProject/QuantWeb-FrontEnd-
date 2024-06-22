import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  size: string;
  color?: string;
}

const Body = ({ children, size, color }: Props) => {
  return (
    <BodyStyle size={size} color={color}>
      {children}
    </BodyStyle>
  );
};

const BodyStyle = styled.div<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.bodySize[size]};
  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.gray10};
  line-height: ${({ size }) =>
    size === "B3" ? "150%" : size === "B4" ? "140%" : "160%"};
  font-weight: ${({ size }) => (size === "B1" ? 500 : 400)};
`;
export default Body;
