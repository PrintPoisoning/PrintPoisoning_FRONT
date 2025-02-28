"use client";

import { useCallback, useState } from "react";

import { UseModalParams } from "./useModal.type";

const useModal = ({ defaultVisible = false }: UseModalParams = {}) => {
  const [isOpen, setIsModal] = useState(defaultVisible);

  const openModal = useCallback(() => setIsModal(true), []);

  const closeModal = useCallback(() => setIsModal(false), []);

  return [isOpen, openModal, closeModal] as const;
};

export default useModal;
