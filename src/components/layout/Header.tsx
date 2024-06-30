import styled from "styled-components";
import Title from "../common/Title";
import Button from "../common/Button";
const Header = () => {
  return (
    <HeaderStyle>
      <TitleStyle>
        <Title size="T1" color="gray10">
          백테스팅
        </Title>
      </TitleStyle>
      <ButtonStyle>
        <Button size="narrowMedium" schema="default">
          설정 초기화
        </Button>
        <Button size="wideMedium" schema="activated">
          백테스팅 시작
        </Button>
      </ButtonStyle>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.div`
  display: flex;
  width: 1576px;
  padding: 32px 24px;
  align-items: center;
  gap: 40px;
  border-bottom: 1px solid #d7d7e3;
  background: #ffff;
`;
const TitleStyle = styled.div`
  flex: 1 0 0;
`;
const ButtonStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export default Header;
