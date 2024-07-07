import styled from "styled-components";
// import Input from "@/components/common/Input"; //FIXME: 화면 확인용
import InputWithDropdown from "@/components/common/InputWithDropdown"; //FIXME: 화면 확인용
import InputWithCalendar from "@/components/common/InputWithCalendar"; //FIXME: 화면 확인용

import MyStrategyList from "@/components/myStrategyFAB/MyStrategyList";
import StrategyNameChange from "@/components/myStrategyFAB/StrategyNameChange";
import FactorSetup from "@/components/backtesting/FactorSetup";
import TechnicalAnalysisStrategySetup from "@/components/backtesting/TechnicalAnalysisStrategySetup";

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
      <InputWithCalendar />
      <FactorSetup />
      <TechnicalAnalysisStrategySetup />

      <MyStrategyList />
      <StrategyNameChange />
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
