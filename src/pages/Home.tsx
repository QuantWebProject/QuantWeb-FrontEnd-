import styled from "styled-components";
// import Input from "@/components/common/Input"; //FIXME: 화면 확인용
import InputWithDropdown from "@/components/common/InputWithDropdown"; //FIXME: 화면 확인용
import InputWithCalendar from "@/components/common/InputWithCalendar"; //FIXME: 화면 확인용

import FactorSetup from "@/components/Backtesting/FactorSetup";
import TechnicalAnalysisStrategySetup from "@/components/Backtesting/TechnicalAnalysisStrategySetup";
import Modal from "@/components/Modal/Modal";
import ModalInner from "@/components/Modal/ModalInner";
import MyStrategyList from "@/components/myStrategyFAB/MyStrategyList";
import useModal from "@/hooks/useModal";

//FIXME: 화면 확인용
const OPTIONS = [
  { value: 0, name: "TEXT1" },
  { value: 1, name: "TEXT2" },
  { value: 2, name: "TEXT3" }
];

const Home = () => {
  const { modalRef, isOpen, handleModalClose, handleOverlayClick } =
    useModal(true);

  return (
    <HomeStyle>
      <h1>Home body</h1>

      {/* FIXME: 화면 확인용 */}
      {/* <Input placeholder="TEXT" error={"error!!"} {..."text"} /> */}
      <InputWithDropdown options={OPTIONS} />
      <InputWithCalendar />
      <FactorSetup />
      <TechnicalAnalysisStrategySetup />
      <Modal
        modalRef={modalRef}
        isOpen={isOpen}
        handleOverlayClick={handleOverlayClick}
      >
        <ModalInner onClose={handleModalClose}>모달창</ModalInner>
      </Modal>
      <MyStrategyList />
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
