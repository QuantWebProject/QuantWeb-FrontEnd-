import useOverlayClick from "@/hooks/useOverlayClick";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  onClose: () => void;
  overlayDisabled?: boolean; // 모달 바깥 클릭시 닫히는 오버레이 비활성화
}

const Modal = ({ children, onClose, overlayDisabled }: Props) => {
  const { modalRef, overlayClick } = useOverlayClick(
    onClose,
    overlayDisabled || false
  );

  return (
    <ModalStyle onClick={overlayClick}>
      <div className="modal-inner" ref={modalRef}>
        {children}
      </div>
    </ModalStyle>
  );
};

const ModalStyle = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.color.dimmed};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Modal;
