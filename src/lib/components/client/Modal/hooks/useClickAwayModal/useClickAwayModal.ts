import { MouseEvent } from "react";

import { useAwayClickModalCallback } from "./useClickAwayModal.type";

const useClickAwayModal = (onClose: useAwayClickModalCallback) => {
  const handleCloseModal = ({ target, currentTarget }: MouseEvent) => {
    if (target !== currentTarget) {
      return;
    }

    onClose();
  };

  return handleCloseModal;
};

export default useClickAwayModal;
