"use client";

import { PropsWithChildren } from "react";

const ToastProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <ul className="absolute top-[1rem] right-[1rem] flex flex-col gap-[0.8rem] text-size14 z-toast"></ul>
    </>
  );
};

export default ToastProvider;
