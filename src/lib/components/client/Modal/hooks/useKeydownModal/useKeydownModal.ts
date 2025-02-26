"use client";

import { useEffect } from "react";

import { UseKeydownModalProps } from "./useKeydownModal.type";

const useKeydownModal = ({
  isShow,
  onClose,
  disableAwayClick,
}: UseKeydownModalProps) => {
  useEffect(() => {
    if (!isShow || disableAwayClick) return;

    const handleEvent = ({ key }: KeyboardEvent) => {
      if (key !== "Escape") return;

      onClose();
    };

    window.addEventListener("keydown", handleEvent);

    return () => window.removeEventListener("keydown", handleEvent);
  }, [disableAwayClick, isShow]);
};

export default useKeydownModal;
