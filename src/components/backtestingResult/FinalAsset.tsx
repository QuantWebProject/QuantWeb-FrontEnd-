import styled from "styled-components";
import Title from "../common/Title";
import Body from "../common/Body";
const FinalAsset = () => {
  return (
    <FinalAssetContainer>
      <Title size="T3" color="gray9">
        최종 자산
      </Title>
      <Title size="T1" color="gray10">
        6,000,000원
      </Title>

      <FinalAssetList>
        <FinalAssetContent>
          <Body size="B1" color="gray8">
            투자 원금
          </Body>
          <Body size="B1" color="gray9">
            1,000,000원
          </Body>
        </FinalAssetContent>
        <FinalAssetContent>
          <Body size="B1" color="gray8">
            평가 손익
          </Body>
          <Body size="B1" color="#F04452">
            +100,000원
          </Body>
        </FinalAssetContent>
        <FinalAssetContent>
          <Body size="B1" color="gray8">
            실현 손익
          </Body>
          <Body size="B1" color="#3182F6">
            -500,000원
          </Body>
        </FinalAssetContent>
      </FinalAssetList>
    </FinalAssetContainer>
  );
};

const FinalAssetContainer = styled.div`
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
const FinalAssetList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 11px;
`;
const FinalAssetContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default FinalAsset;
