import styled from "styled-components";
import Input from "@/components/common/Input"; //FIXME: 화면 확인용
import InputWithCalendar from "@/components/common/InputWithCalendar"; //FIXME: 화면 확인용

//FIXME: 화면 확인용
const OPTIONS = [
  { value: "1", name: "TEXT1" },
  { value: "2", name: "TEXT2" },
  { value: "3", name: "TEXT3" }
];

const Home = () => {
  return (
    <HomeStyle>
      <h1>Home body</h1>

      {/* FIXME: 화면 확인용 */}
      <Input placeholder="TEXT" error={"error!!"} {..."text"} />
      <InputWithCalendar />
    </HomeStyle>
  );
};

const HomeStyle = styled.div``;
export default Home;
