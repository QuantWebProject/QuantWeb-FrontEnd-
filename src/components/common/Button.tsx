import { TButtonSchema, TButtonSize } from "@/style/theme";
import React from "react";
import styled from "styled-components";

type TButtonSchemaWithoutHover = Extract<
  TButtonSchema,
  "inactivated" | "error" | "activated" | "default" | "blackWhite" | "grayBlack"
>;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size: TButtonSize;
  schema: TButtonSchemaWithoutHover;
}

const Button = ({ children, size, schema, ...props }: Props) => {
  return (
    <ButtonStyle $size={size} $schema={schema} {...props}>
      {children}
    </ButtonStyle>
  );
};

interface ButtonStyleProps {
  $size: TButtonSize;
  $schema: TButtonSchemaWithoutHover;
}
const ButtonStyle = styled.button<ButtonStyleProps>`
  width: ${({ theme, $size }) => theme.buttonSize[$size].width};
  height: ${({ theme, $size }) => theme.buttonSize[$size].height};
  color: ${({ theme, $schema }) => theme.buttonSchema[$schema].color};
  background-color: ${({ theme, $schema }) =>
    theme.buttonSchema[$schema].background};
  border-radius: ${({ theme }) => theme.borderRadius.default};

  border: ${({ theme, $schema }) =>
    theme.buttonSchema[$schema].borderColor
      ? `
    ${theme.buttonSchema[$schema].borderWidth} solid  ${theme.buttonSchema[$schema].borderColor}
  `
      : "none"};
  cursor: pointer;
  padding: 0;

  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.6;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${({ theme, $schema }) =>
      theme.buttonSchema[`${$schema}Hover`]
        ? theme.buttonSchema[`${$schema}Hover`].background
        : null};
  }
`;
export default Button;
