import styled from "styled-components";
import ToolTipSVG from "@/assets/images/toolTip.svg?react";
import { useState } from "react";

interface Props {
  info: string;
}
const ToolTip = ({ info }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <ToolTipStyle>
      <ToolTipSVG onMouseEnter={handleOpen} onMouseLeave={handleOpen} />
      {isOpen && <div className="info">{info}</div>}
    </ToolTipStyle>
  );
};

const ToolTipStyle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;

  .info {
    font-size: 1rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.gray9};
    width: 436px;
    padding: 0.625rem 1.125rem;
    position: absolute;
    top: 32px;
    left: -206px;
    border-radius: 0.375rem;
    box-shadow: ${({ theme }) => theme.boxShadow.shadow1};
    z-index: 100;
    word-break: keep-all;
  }
`;
export default ToolTip;
