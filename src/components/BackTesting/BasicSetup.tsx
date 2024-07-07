import styled from "styled-components";
import SetupTitle from "../common/SetupTitle";
import Input from "@/components/common/Input";
import InputWithDropdown from "@/components/common/InputWithDropdown";
import InputWithCalendar from "@/components/common/InputWithCalendar";

const REBALANCING_OPTIONS = [
  { value: 0, name: "1년마다 한번" },
  { value: 1, name: "6개월마다 한번" },
  { value: 2, name: "3개월마다 한번" }
];

const BasicSetup = () => {
  return (
    <BasicSetupStyle>
      <SetupTitle title="기본 설정" />
      <BasicSetupForm>
        <InputWithLabel>
          <LabelStyle>종목 개수(최대 100개)</LabelStyle>
          <Input type="number" defaultValue="10" min="1" max="100" />
        </InputWithLabel>
        <InputWithLabel>
          <LabelStyle>시작 시점</LabelStyle>
          <InputWithCalendar value="20190612" />
        </InputWithLabel>
        <InputWithLabel>
          <LabelStyle>종료 시점</LabelStyle>
          <InputWithCalendar />
        </InputWithLabel>
        <InputWithLabel>
          <LabelStyle>리밸런싱 주기</LabelStyle>
          <InputWithDropdown options={REBALANCING_OPTIONS} />
        </InputWithLabel>
        <InputWithLabel>
          <LabelStyle>투자 원금</LabelStyle>
          <Input
            type="text"
            name="origin_price"
            unit="만원"
            defaultValue="1,000"
          />
        </InputWithLabel>
        <InputWithLabel>
          <LabelStyle>수수료</LabelStyle>
          <Input type="number" unit="%" defaultValue="0.02" />
        </InputWithLabel>
      </BasicSetupForm>
    </BasicSetupStyle>
  );
};

const BasicSetupStyle = styled.div``;
const BasicSetupForm = styled.form`
  background-color: #ffffff;
  height: 720px;
  width: 388px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px 0;
  padding: 24px 32px;
`;

const InputWithLabel = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  gap: 8px 0;
`;

const LabelStyle = styled.label`
  width: 100%;
  height: 24px;
  color: #6d6d7d;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;
export default BasicSetup;
