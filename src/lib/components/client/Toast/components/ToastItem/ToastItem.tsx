"use client";

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
          className="w-[32rem] h-[3.6rem] px-[1.8rem] flex items-center justify-center bg-transparent_50 rounded-[3.6rem] overflow-hidden select-none cursor-pointer"
          variants={toastLayout}
          initial="close"
          animate="show"
          exit="close"
          onClick={onClose}
        >
          <p className="w-full text-size14 text-white text-center font-semibold">
            {message}
          </p>
        </motion.li>
      )}
    </AnimatePresence>
  );
};

export default ToastItem;
