import styled from "styled-components";
// import Input from "@/components/common/Input"; //FIXME: 화면 확인용
import InputWithDropdown from "@/components/common/InputWithDropdown"; //FIXME: 화면 확인용

import FactorSetup from "@/components/BackTesting/FactorSetup";
import TechnicalAnalysisStrategySetup from "@/components/BackTesting/TechnicalAnalysisStrategySetup";

//FIXME: 화면 확인용
const OPTIONS = [
  { value: 0, name: "TEXT1" },
  { value: 1, name: "TEXT2" },
  { value: 2, name: "TEXT3" }
];

const Home = () => {
  return (
    <HomeStyle>
      <h1>Home body</h1>

      {/* FIXME: 화면 확인용 */}
      {/* <Input placeholder="TEXT" error={"error!!"} {..."text"} /> */}
      <InputWithDropdown options={OPTIONS} />

      <FactorSetup />
      <TechnicalAnalysisStrategySetup />
    </HomeStyle>
  );
};

const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px;

  background-color: aliceblue;
`;
export default Home;
