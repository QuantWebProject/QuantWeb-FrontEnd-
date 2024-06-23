import styled from "styled-components";
import Title from "./Title";
import { TSnbSchema } from "@/style/theme";
import SnbText from "@/assets/images/SnbText.svg?react";
interface Props {
  children: string;
  schema: Extract<TSnbSchema, "default" | "selected">;
  image: TImage;
  prevent: boolean;
}
type TImage = "text";

const SnbItem = ({ children, schema, image, prevent }: Props) => {
  return (
    <SnbItemStyle schema={schema} image={image} prevent={prevent}>
      <div className="icon"> {<SnbText />}</div>
      <Title size="T6" color={schema === "default" ? "white" : "main"}>
        {children}
      </Title>
    </SnbItemStyle>
  );
};

const SnbItemStyle = styled.div<Omit<Props, "children">>`
  &:hover{
    background: ${({ prevent, theme }) => (prevent ? "" : theme.snbSchema["hover"].background)};
    color: ${({ prevent, theme }) => (prevent ? "" : theme.snbSchema["hover"].color)};
  }
  display: flex;
  width: 280px;
  height: 64px;
  padding-left: 16px;
  align-items: center;
  gap: 16px;
  border-radius: 12px;
  background: ${({ theme, schema }) => theme.snbSchema[schema].background};
  color: ${({ theme, schema }) => theme.snbSchema[schema].color};
  .icon {
    svg {
      color: ${({ theme, schema }) => theme.snbSchema[schema].color};
    }
`;
export default SnbItem;
