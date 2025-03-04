"use client";

import { PropsWithChildren } from "react";

import { ToastItem } from "./components";
import { useToastStore } from "./store";

const ToastProvider = ({ children }: PropsWithChildren) => {
  const { toastList, removeToast } = useToastStore();
  return (
    <>
      {children}
      <ul className="absolute top-[1rem] right-[1rem] flex flex-col gap-[0.8rem] text-size14 z-toast">
        {toastList.map(({ id, message, deleteTime, type }) => (
          <ToastItem
            key={id}
            type={type}
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
