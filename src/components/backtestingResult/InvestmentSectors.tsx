import styled from "styled-components";
import Title from "../common/Title";
const InvestmentSectors = () => {
  return (
    <FinalAssetContainer>
      <FinalAssetBox>
        <Title size="T3" color="gray10">
          투자 종목
        </Title>
      </FinalAssetBox>
    </FinalAssetContainer>
  );
};

const FinalAssetContainer = styled.div``;
const FinalAssetBox = styled.div`
  display: flex;
  width: 474px;
  padding: 28px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 18px;
  border: 1px solid #d7d7e3;
  background: #fff;
  box-shadow: 1px 2px 16px 0px rgba(0, 0, 0, 0.08);
`;

export default InvestmentSectors;
