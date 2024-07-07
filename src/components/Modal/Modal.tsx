import { useEffect, useRef } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: Props) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // 모달창 바깥을 누르면 닫힘
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      console.log("click");
      onClose();
    }
  };

  // esc 키를 누르면 닫힘
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

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
