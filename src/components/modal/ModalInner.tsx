// TODO: 모달 내부 구현

import styled from "styled-components";
import XButton from "./XButton";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

const ModalInner = ({ children, onClose }: Props) => {
  return (
    <ModalInnerStyle>
      <div className="modal-header">
        <XButton onClose={onClose} />
      </div>
      <div className="modal-body">{children}</div>
    </ModalInnerStyle>
  );
};

const ModalInnerStyle = styled.div`
  background: #fff;
  width: 200px;
  height: 200px;
`;
export default ModalInner;
