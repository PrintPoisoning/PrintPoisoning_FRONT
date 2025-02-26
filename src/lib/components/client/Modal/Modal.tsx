"use client";

import { PropsWithChildren, use } from "react";

import { CloseIcon } from "@lib/components/server";
import { useClickAway } from "@lib/hooks";

import { ModalPortal } from "./components";
import { useClickAwayModal, useKeydownModal } from "./hooks";

import { AnimatePresence } from "motion/react";
import { twMerge } from "tailwind-merge";

type ModalProps = PropsWithChildren<{
  isShow: boolean;
  onClose: () => void;
  hideCloseIcon?: boolean;
  disableAwayClick?: boolean;
}>;

const Modal = ({
  isShow,
  onClose,
  hideCloseIcon = false,
  disableAwayClick = false,
  children,
}: ModalProps) => {
  const awayClose = useClickAwayModal(onClose);
  useKeydownModal({ isShow, onClose, disableAwayClick });

  return (
    <AnimatePresence>
      {isShow && (
        <ModalPortal isShow={isShow}>
          <section
            className="w-full h-full flex items-center justify-center fixed top-0 left-0 bg-transparent_90 overflow-auto z-modal"
            onClick={e => !disableAwayClick && awayClose(e)}>
            <article
              className={twMerge(
                "min-h-[4rem] min-w-[4rem] p-[1rem] flex justify-end relative bg-white rounded-radius8",
                !hideCloseIcon && "pt-[2.2rem]",
              )}>
              {!hideCloseIcon && (
                <i
                  onClick={onClose}
                  className="w-[1.8rem] h-[1.8rem] absolute top-[0.3rem] cursor-pointer select-none">
                  <CloseIcon size="100%" />
                </i>
              )}
              {children}
            </article>
          </section>
        </ModalPortal>
      )}
    </AnimatePresence>
  );
};

export default Modal;
