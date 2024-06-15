import Body from "@/components/common/Body";
import Snb from "@/components/common/Snb";
import Title from "@/components/common/Title";
import styled from "styled-components";

const Test = () => {
  return (
    <TestStyle>
      <Title size="T1" color="gray10">
        hello
      </Title>
      <Body size="B1"> hi </Body>
      <Snb schema="default" name="text">
        hi
      </Snb>
      <Snb schema="grey" name="text">
        hi
      </Snb>
      <Snb schema="white" name="text">
        hi
      </Snb>
    </TestStyle>
  );
};

const TestStyle = styled.div`
  background-color: grey;
`;

export default Test;
