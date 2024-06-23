import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import CheckSVG from "@/assets/images/check.svg?react";
import ArrowDownSVG from "@/assets/images/arrowDown.svg?react";

interface Option {
  value: number;
  name: string;
}
interface Props {
  options: Option[];
}

const InputWithDropdown = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isClick, setIsClick] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleOnChangeSelectValue = (index: number) => {
    setCurrentIndex(index);
    setIsClick(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsClick(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [dropdownRef]);

  return (
    <SelectBoxContainer ref={dropdownRef}>
      <SelectBox onClick={() => setIsClick((prev) => !prev)} $open={isClick}>
        {props.options[currentIndex].name}
        <div className="icon">
          <ArrowDownSVG />
        </div>
      </SelectBox>

      {isClick && (
        <OptionContainer>
          <ul>
            {props.options.map(({ name, value }, index) => (
              <li key={value} onClick={() => handleOnChangeSelectValue(index)}>
                <OptionBox $isActive={currentIndex === index}>
                  {name}
                  {currentIndex === index && (
                    <div className="icon">
                      <CheckSVG stroke="#7467ff" />
                    </div>
                  )}
                </OptionBox>
              </li>
            ))}
          </ul>
        </OptionContainer>
      )}
    </SelectBoxContainer>
  );
};

const SelectBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
`;

const OptionContainer = styled.div`
  border-radius: 8px;
  border: 1px solid #c8c8d6;
  background: #fff;
  box-shadow: 1px 2px 16px 0px rgba(0, 0, 0, 0.16);
  padding: 0.5rem 0;

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

const SelectBox = styled.div<{ $open: boolean }>`
  width: 100%;
  outline: none;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid #b0b0bf;
  background: #fff;

  color: #4c4c57;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  ::placeholder {
    border: 1px solid #c8c8d6;
    font-weight: 400;
    color: #b0b0bf;
  }
  &:focus {
    border: 1.6px solid #7467ff;
    color: #1f1f23;
  }

  display: flex;
  justify-content: space-between;

  .icon {
    transform: ${({ $open }) => ($open ? "rotate(180deg)" : null)};

    svg {
      fill: ${({ theme, $open }) =>
        $open ? theme.color.gray10 : theme.color.gray6};
    }
  }
`;

const OptionBox = styled.div<{ $isActive: boolean }>`
  width: 100%;
  height: 48px;
  outline: none;
  padding: 10px 16px;
  background: #fff;

  color: #4c4c57;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:focus {
    color: #1f1f23;
  }
  &:hover {
    background-color: #f0eeff;
    font-weight: 500;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ $isActive }) =>
    $isActive &&
    `
    font-weight: 500;
  `}
`;

export default InputWithDropdown;
