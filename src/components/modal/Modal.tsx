import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  modalRef: React.RefObject<HTMLDivElement>;
  isOpen: boolean;
  handleOverlayClick: (e: React.MouseEvent) => void;
}

const Modal = ({ children, modalRef, isOpen, handleOverlayClick }: Props) => {
  return (
    <>
      {isOpen && (
        <ModalStyle onClick={handleOverlayClick}>
          <div className="modal-inner" ref={modalRef}>
            {children}
          </div>
        </ModalStyle>
      )}
    </>
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
