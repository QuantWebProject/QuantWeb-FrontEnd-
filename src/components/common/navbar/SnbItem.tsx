import styled from "styled-components";
import Title from "../Title";
import { TSnbSchema } from "@/style/theme";
import { NavLink } from "react-router-dom";
interface Props {
  text: string;
  schema: Extract<TSnbSchema, "default" | "selected">;
  icon: React.ReactNode;
  diasbled: boolean;
  path: string;
}

const SnbItem = ({ text, schema, icon, diasbled, path }: Props) => {
  return (
    <NavStyle
      to={path}
      $schema={schema}
      $disabled={diasbled ? "true" : "false"}
    >
      <SnbItemStyle $schema={schema} $disabled={diasbled ? "true" : "false"}>
        <div className="icon"> {icon}</div>
        <Title size="T6" color={schema === "default" ? "white" : "main"}>
          {text}
        </Title>
      </SnbItemStyle>
    </NavStyle>
  );
};

interface SnbItemStyleProps {
  $schema: string;
  $disabled: string;
}
//TODO: NavStyle, SnItemStyle 병합 및 스타일 정리 필요. navbar text color 반영 필요
const NavStyle = styled(NavLink)<SnbItemStyleProps>`
  text-decoration: none;
  border-radius: 12px;

  &.active {
    .icon {
      filter: brightness(0) saturate(100%) invert(59%) sepia(75%)
        saturate(5825%) hue-rotate(226deg) brightness(99%) contrast(106%);
    }

    background: ${({ $disabled, theme }) =>
      $disabled === "true" ? "" : theme.snbSchema["selected"].background};
    color: ${({ $disabled, theme }) =>
      $disabled === "true" ? "" : theme.snbSchema["selected"].color};
  }
`;

const SnbItemStyle = styled.div<SnbItemStyleProps>`
  &:hover {
    .icon {
      filter: brightness(0) saturate(100%) invert(59%) sepia(75%)
        saturate(5825%) hue-rotate(226deg) brightness(99%) contrast(106%);
    }
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
