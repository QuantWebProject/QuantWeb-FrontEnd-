import { useEffect, useRef, useState } from "react";

const useModal = (open: boolean) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(open);

  // 모달창 닫기
  const handleModalClose = () => {
    setIsOpen(false);
  };

  // 모달창 바깥을 누르면 닫힘
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  // esc 키를 누르면 닫힘
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return {
    modalRef,
    isOpen,
    handleModalClose,
    handleOverlayClick
  };
};

export default useModal;
