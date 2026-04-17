"use client";

import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

import { ModalPortalProps } from "./ModalPortal.type";

const subscribe = () => () => {};
const getClientSnapshot = (): HTMLElement | null => document.body;
const getServerSnapshot = (): HTMLElement | null => null;

const ModalPortal = ({ children, isShow }: ModalPortalProps) => {
  const modalBaseElement = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  useEffect(() => {
    if (isShow && modalBaseElement) {
      const originalStyle = window.getComputedStyle(modalBaseElement).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isShow, modalBaseElement]);

  if (!isShow || !modalBaseElement) {
    return null;
  }

  return createPortal(<>{children}</>, modalBaseElement);
};

export default ModalPortal;
