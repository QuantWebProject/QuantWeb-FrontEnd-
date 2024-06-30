import styled from "styled-components";
import Title from "../Title";
import { TSnbSchema } from "@/style/theme";

interface Props {
  text: string;
  schema: Extract<TSnbSchema, "default" | "selected">;
  icon: React.ReactNode;
  diasbled: boolean;
}

const SnbItem = ({ text, schema, icon, diasbled }: Props) => {
  return (
    <SnbItemStyle $schema={schema} $disabled={diasbled ? "true" : "false"}>
      <div className="icon"> {icon}</div>
      <Title size="T6" color={schema === "default" ? "white" : "main"}>
        {text}
      </Title>
    </SnbItemStyle>
  );
};

interface SnbItemStyleProps {
  $schema: string;
  $disabled: string;
}
const SnbItemStyle = styled.div<SnbItemStyleProps>`
  &:hover {
    background: ${({ $disabled, theme }) =>
      $disabled === "true" ? "" : theme.snbSchema["hover"].background};
    color: ${({ $disabled, theme }) =>
      $disabled === "true" ? "" : theme.snbSchema["hover"].color};
  }
  display: flex;
  width: 280px;
  height: 64px;
  padding-left: 16px;
  align-items: center;
  gap: 16px;
  border-radius: 12px;
  background: ${({ theme, $schema }) => theme.snbSchema[$schema].background};
  color: ${({ theme, $schema }) => theme.snbSchema[$schema].color};
  cursor: pointer;
  .icon {
    display: flex;
    align-items: center;
    svg {
      color: ${({ theme, $schema }) => theme.snbSchema[$schema].color};
    }
  }
`;
export default SnbItem;
