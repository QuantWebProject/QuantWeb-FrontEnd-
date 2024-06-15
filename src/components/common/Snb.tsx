import styled from "styled-components";
import Body from "./Body";
import theme, { TSnbSchema } from "@/style/theme";
interface Props {
  children: string;
  schema: TSnbSchema;
  name: TUrl;
}
type TUrl = "text" | "login";
type Url = {
  [key in TUrl]: string;
};
const URL: Url = {
  text: "src/assets/images/SNB.svg",
  login: "ff.svg"
};

const Snb = ({ children, schema, name }: Props) => {
  const imageUrl = URL[name];
  const fontColor = theme.snbSchema[schema].color;
  return (
    <SnbStyle schema={schema} name={name}>
      <div className="image">
        <img src={imageUrl} alt={name} />
      </div>
      <Body size="T6" color={fontColor}>
        {children}
      </Body>
    </SnbStyle>
  );
};

const SnbStyle = styled.div<Omit<Props, "children">>`
  display: flex;
  width: 280px;
  height: 64px;
  padding-left: 16px;
  align-items: center;
  gap: 16px;
  border-radius: 12px;
  background: ${({ theme, schema }) => theme.snbSchema[schema].background};
  color: ${({ theme, schema }) => theme.snbSchema[schema].color};
  .image {
    img {
      color: ${({ theme, schema }) => theme.snbSchema[schema].color};
    }
  }
`;
export default Snb;
