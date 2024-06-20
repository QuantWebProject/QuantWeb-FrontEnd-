import styled from "styled-components";
import Body from "./Body";
import theme, { TSnbSchema } from "@/style/theme";
import SnbText from "@/assets/images/SnbText.svg?react";
interface Props {
  children: string;
  schema: TSnbSchema;
  image: TImage;
}
type TImage = "text";

const SnbItem = ({ children, schema, image }: Props) => {
  const fontColor = theme.snbSchema[schema].color;
  const imageColor = theme.snbSchema[schema].color;
  return (
    <SnbItemStyle schema={schema} image={image}>
      {<SnbText stroke={imageColor} />}
      <Body size="T6" color={fontColor}>
        {children}
      </Body>
    </SnbItemStyle>
  );
};

const SnbItemStyle = styled.div<Omit<Props, "children">>`
  display: flex;
  width: 280px;
  height: 64px;
  padding-left: 16px;
  align-items: center;
  gap: 16px;
  border-radius: 12px;
  background: ${({ theme, schema }) => theme.snbSchema[schema].background};
  color: ${({ theme, schema }) => theme.snbSchema[schema].color};
`;
export default SnbItem;
