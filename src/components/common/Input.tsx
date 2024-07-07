import styled from "styled-components";
import { useState } from "react";
//TODO: InputType 정의
const Input = ({ error, unit, name, value, ...rest }: InputType) => {
  // 초기값 선언
  const [price, setPrice] = useState<string>("");

  // handler 함수
  const priceChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (unit === "만원") {
      let price = event.target.value;
      price = price.replaceAll(",", "");
      if (price.length === 0) {
        setPrice("");
      } else {
        setPrice(Number(price).toLocaleString("ko-KR"));
      }
    }
  };

  return (
    <InputContainer style={{ color: "red" }}>
      <InputBox>
        <InputStyle
          {...rest}
          value={price || value}
          onChange={priceChangeHandler}
        />
        <Unit>{unit}</Unit>
      </InputBox>
      {/* {error && error} */}
    </InputContainer>
  );
};

// Todo: color constant 정의
const InputContainer = styled.div``;

const InputStyle = styled.input`
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
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const InputBox = styled.div`
  position: relative;
  align-items: center;
  width: 100%;
`;
const Unit = styled.span`
  position: absolute;
  top: 13px;
  color: #9797a8;
  max-width: fit-content;
  padding-right: 16px;
  right: 0;
`;

export default Input;
