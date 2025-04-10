"use client";

import { CloseIcon } from "@lib/components/server";

import { useToastTimer, useToastVariant } from "../../hooks";
import { ToastItemProps } from "./ToastItem.type";

import { AnimatePresence, motion } from "motion/react";

const ToastItem = ({ message, deleteTime, onClose }: ToastItemProps) => {
  const isShow = useToastTimer({ time: deleteTime });
  const { toastLayout } = useToastVariant();

  return (
    <AnimatePresence>
      {isShow && (
        <motion.li
          className="w-[32rem] h-[4rem] px-[1rem] relative flex items-center justify-center bg-transparent_90 rounded-[5rem] shadow-[0_0_2rem_0rem_rgba(0,0,0,0.2)]"
          variants={toastLayout}
          initial="close"
          animate="show"
          exit="close"
        >
          <p className="w-full px-[1rem] text-center overflow-hidden text-white">{message}</p>

          <button
            className="w-[2rem] absolute left-[100%] flex items-center justify-center hover:opacity-30 transition-opacity"
            type="button"
            aria-label="toast close button"
            onClick={onClose}
          >
            <CloseIcon size="100%" />
          </button>
        </motion.li>
      )}
    </AnimatePresence>
  );
};

export default ToastItem;
