import ArrowDownSVG from "@/assets/images/arrowDown.svg?react";
import { useState } from "react";
import styled from "styled-components";
import ToolTip from "../common/ToolTip";
import FactorItem from "./FactorItem";

interface Option {
  id: number;
  name: string;
  info: string;
}
interface Props {
  title: string;
  titleInfo: string;
  options: Option[];
  open?: boolean; // 드롭다운이 열려있으면 true
  onCheck: (id: number) => void;
  optionsActive: number[];
}
const FactorDropdown = ({
  title,
  titleInfo,
  options,
  onCheck,
  optionsActive,
  open
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(open || false);

  return (
    <FactorDropdownStyle $open={isOpen}>
      <div className="select-box" onClick={() => setIsOpen((prev) => !prev)}>
        <div className="select-box-left">
          <div className="icon">
            <ArrowDownSVG />
          </div>
          <div className="title">{title}</div>
          <div className="toolTip">
            <ToolTip info={titleInfo} />
          </div>
        </div>
        <div className="count">{options.length}</div>
      </div>

      {isOpen && (
        <OptionContainer>
          <ul>
            {options.map(({ id, name, info }) => (
              <li key={id} onClick={() => onCheck(id)}>
                <FactorItem
                  id={id}
                  name={name}
                  info={info}
                  checked={optionsActive.includes(id)}
                  onCheck={onCheck}
                />
              </li>
            ))}
          </ul>
        </OptionContainer>
      )}
    </FactorDropdownStyle>
  );
};

const FactorDropdownStyle = styled.div<{ $open: boolean }>`
  background: #fff;
  cursor: pointer;

  .select-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 4.375rem;
    padding: 0 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.gray2};
    .select-box-left {
      display: flex;
      gap: 12px;

      .icon {
        width: 24px;
        height: 24px;
        transform: ${({ $open }) => ($open ? "rotate(180deg)" : null)};
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          fill: ${({ theme, $open }) =>
            $open ? theme.color.gray10 : theme.color.gray6};
        }
      }

      .title {
        font-size: 1.125rem;
        line-height: 1.6;
        font-weight: 500;
      }
      .toolTip {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .count {
      color: ${({ theme }) => theme.color.main};
      background: ${({ theme }) => theme.color.sub2};
      line-height: 1.4;
      font-size: 0.875rem;
      padding: 0.13rem 0.9rem;
      border-radius: 6.25rem;
    }
  }
`;

export const OptionContainer = styled.div`
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;
export default FactorDropdown;
