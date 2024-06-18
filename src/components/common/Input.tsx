import styled from "styled-components";

//TODO: InputType 정의
const Input = ({ error, ...rest }: InputType) => {
  return (
    <InputContainer style={{ color: "red" }}>
      <>
        <InputStyle {...rest} />
      </>
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
`;

export default Input;
