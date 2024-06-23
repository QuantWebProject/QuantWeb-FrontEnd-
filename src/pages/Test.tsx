import Body from "@/components/common/Body";
import SnbItem from "@/components/common/SnbItem";
import Title from "@/components/common/Title";
import styled from "styled-components";
import LoginButton from "@/components/common/LoginButton";
const Test = () => {
  return (
    <TestStyle>
      <Title size="T1" color="gray10">
        hello
      </Title>
      <Body size="B1"> hi </Body>
      <SnbItem prevent={false} schema="default" image="text">
        TEXT
      </SnbItem>
      <SnbItem prevent={true} schema="selected" image="text">
        TEXT
      </SnbItem>
      <LoginButton>로그인</LoginButton>
    </TestStyle>
  );
};

const TestStyle = styled.div`
  background-color: grey;
`;

export default Test;
