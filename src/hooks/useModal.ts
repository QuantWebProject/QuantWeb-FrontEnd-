import { useState } from "react";

const useModal = (open: boolean) => {
  const [isOpen, setIsOpen] = useState(open);

  const modalOpen = () => {
    setIsOpen(true);
  };

  const modalClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    modalOpen,
    modalClose
  };
};

export default useModal;
