"use client";

import { PropsWithChildren } from "react";

const ToastProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <ul className="absolute top-[1rem] left-[1rem] flex flex-col z-toast"></ul>
    </>
  );
};

export default ToastProvider;
