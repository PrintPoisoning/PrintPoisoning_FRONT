"use client";

import { CloseIcon } from "@lib/components/server";

import { useToastColor, useToastTimer, useToastVariant } from "../../hooks";
import { ToastItemProps } from "./ToastItem.type";

import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const ToastItem = ({ type, message, deleteTime, onClose }: ToastItemProps) => {
  const backgroundColor = useToastColor({ type });
  const isShow = useToastTimer({ time: deleteTime });
  const { toastLayout, toastProgress } = useToastVariant({ deleteTime });

  return (
    <AnimatePresence>
      {isShow && (
        <motion.li
          className="w-[30rem] h-[6.5rem] relative bg-white rounded-radius6 shadow-[0_0_2rem_0rem_rgba(0,0,0,0.2)] overflow-hidden"
          variants={toastLayout}
          initial="close"
          animate="show"
          exit="close"
        >
          <button
            className="absolute top-[0.2rem] right-[0.2rem] hover:opacity-30 transition-opacity"
            type="button"
            aria-label="toast close button"
            onClick={onClose}
          >
            <CloseIcon size="1.6rem" />
          </button>

          <p className="w-[30rem] h-[6rem] p-[1rem] pt-[1.4rem]">{message}</p>

          <div className="w-[30rem] h-[0.5rem] flex justify-center">
            <motion.div
              className={twMerge("w-[30rem] h-[0.5rem]", backgroundColor)}
              variants={toastProgress}
              initial="close"
              animate="show"
              transition={toastProgress.transition}
            />
          </div>
        </motion.li>
      )}
    </AnimatePresence>
  );
};

export default ToastItem;
