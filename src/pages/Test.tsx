import Body from "@/components/common/Body";
import SnbItem from "@/components/common/SnbItem";
import Title from "@/components/common/Title";
import styled from "styled-components";
import LoginButton from "@/components/common/LoginButton";
import SnbTextSVG from "@/assets/images/SnbText.svg?react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";
import Layout from "@/components/layout/Layout";

const SNB_ITEM = [
  {
    icon: <SnbTextSVG />,
    name: "백태스팅"
  },
  { icon: <SnbTextSVG />, name: "모의투자" },
  { icon: <SnbTextSVG />, name: "마켓" },
  { icon: <SnbTextSVG />, name: "MY 대시보드" }
];

const Test = () => {
  return (
    <TestStyle>
      <Layout>
        <Title size="T1" color="gray10">
          hello
        </Title>
        <Body size="B1"> hi </Body>
        {SNB_ITEM.map((item, index) => (
          <SnbItem
            key={index}
            text={item.name}
            schema="default"
            icon={item.icon}
            diasbled={false}
          />
        ))}
        <LoginButton>로그인</LoginButton>
        <Header />
      </Layout>
    </TestStyle>
  );
};

const TestStyle = styled.div`
  background-color: grey;
`;

export default Test;
