"use client";

import { Modal } from "@lib/components/client";

import { AlertModalProps } from "./AlertModal.type";

const AlertModal = ({
  message,
  buttonText = "닫기",
  onClose,
  ...rest
}: AlertModalProps) => {
  return (
    <Modal
      hideCloseIcon
      onClose={onClose}
      {...rest}
    >
      <article className="w-[30rem] h-[12rem] flex flex-col items-center select-none">
        <p className="w-full grow-[1] p-[1rem] flex items-center justify-center text-size14 font-semibold break-keep ">
          {message}
        </p>

        <button
          className="w-[8rem] h-[3.2rem] bg-main rounded-radius8 text-size14 font-semibold text-white"
          onClick={onClose}
        >
          {buttonText}
        </button>
      </article>
    </Modal>
  );
};

export default AlertModal;
