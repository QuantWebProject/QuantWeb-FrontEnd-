import styled from "styled-components";
import XButton from "./XButton";
import Title from "../common/Title";

interface Props {
  headerTitle: string;
  children: React.ReactNode;
  onClose: () => void;
}

const ModalInner = ({ headerTitle, children, onClose }: Props) => {
  return (
    <ModalInnerStyle>
      <div className="modal-header">
        <div className="title-frame">
          <Title size="T3" color="gray10">
            {headerTitle}
          </Title>
        </div>
        <XButton onClose={onClose} />
      </div>
      <div className="modal-body">{children}</div>
    </ModalInnerStyle>
  );
};

const ModalInnerStyle = styled.div`
  background: #fff;
  width: 500px;
  height: 500px;
  .modal-header {
    display: flex;
    width: 600px;
    align-items: flex-start;
    border-radius: 18px 18px 0px 0px;
    border-bottom: 1px solid var(--Gray-Gray_3, #d7d7e3);
  }
  .title-frame {
    display: flex;
    height: 84px;
    padding: 28px 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    background: var(--white, #fff);
  }
`;
export default ModalInner;
