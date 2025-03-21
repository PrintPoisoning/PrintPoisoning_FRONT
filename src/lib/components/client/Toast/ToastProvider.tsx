"use client";

import { PropsWithChildren } from "react";

import { ToastItem } from "./components";
import { useToastStore } from "./store";

const ToastProvider = ({ children }: PropsWithChildren) => {
  const { toastList, removeToast } = useToastStore();
  return (
    <>
      {children}
      <ul className="absolute bottom-[1rem] right-[50%] translate-x-[50%] flex flex-col gap-[0.8rem] text-size14 z-toast">
        {toastList.map(({ id, message, deleteTime }) => (
          <ToastItem
            key={id}
            message={message}
            deleteTime={deleteTime}
            onClose={() => removeToast(id)}
          />
        ))}
      </ul>
    </>
  );
};

export default ToastProvider;
