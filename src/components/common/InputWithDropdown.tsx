import styled from "styled-components";
import { useState } from "react";

// TODO: props, event type 정의
const InputWithDropdown = (props: any) => {
  const [currentValue, setCurrentValue] = useState("TEXT1");
  const [isClick, setIsClick] = useState(false);

  const handleOnChangeSelectValue = (e: any) => {
    setCurrentValue(e.target.getAttribute("name"));
    setIsClick(!isClick);
  };

  return (
    <SelectBoxContainer>
      <SelectBox
        onClick={() => {
          setIsClick(!isClick);
        }}
      >
        {currentValue}
      </SelectBox>

      <OptionContainer>
        {isClick ? (
          <>
            {props.options.map((option: { value: string; name: string }) => (
              <OptionBox
                onClick={handleOnChangeSelectValue}
                value={option.value}
                name={option.name}
                defaultValue={props.defaultValue === option.value}
              >
                {option.name}
              </OptionBox>
            ))}
          </>
        ) : (
          <></>
        )}
      </OptionContainer>
    </SelectBoxContainer>
  );
};

const SelectBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const OptionContainer = styled.div`
  border-radius: 8px;
  border: 1px solid #c8c8d6;
  background: #fff;
  box-shadow: 1px 2px 16px 0px rgba(0, 0, 0, 0.16);
`;
const SelectBox = styled.div`
  width: 100%;
  outline: none;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid #b0b0bf;
  background: #fff;

  color: #4c4c57;
  font-family: Pretendard;
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
`;

const OptionBox = styled.div`
  width: 100%;
  height: 48px;
  outline: none;
  padding: 10px 16px;
  border-radius: 8px;
  // border: 1px solid #b0b0bf;
  background: #fff;

  color: #4c4c57;
  font-family: Pretendard;
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
    // border: 1.6px solid #7467ff;
    color: #1f1f23;
  }
  &:hover {
    background-color: #f0eeff;
  }
`;

export default InputWithDropdown;
